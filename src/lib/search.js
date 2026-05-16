import { stationSearchText } from "./chargers.js";

export const PLACE_SEARCH_RADIUS_METERS = 3000;

const PLACE_INTENT_WORDS = new Set([
  "around",
  "at",
  "by",
  "close",
  "closest",
  "near",
  "nearby",
  "nearest",
  "to",
]);

const SEARCH_FILLER_WORDS = new Set([
  "charger",
  "chargers",
  "charging",
  "electric",
  "ev",
  "point",
  "points",
  "station",
  "stations",
  "vehicle",
]);

const KNOWN_PLACES = [
  {
    id: "marina-bay",
    label: "Marina Bay",
    latitude: 1.28541280453443,
    longitude: 103.856515136527,
    aliases: ["marina bay"],
  },
  {
    id: "marina-bay-sands",
    label: "Marina Bay Sands",
    latitude: 1.28345419690844,
    longitude: 103.860809048956,
    aliases: ["marina bay sands", "mbs"],
  },
  {
    id: "bayfront",
    label: "Bayfront",
    latitude: 1.28187378879209,
    longitude: 103.859079764874,
    aliases: ["bayfront"],
  },
];

const KNOWN_PLACE_ALIASES = new Map(
  KNOWN_PLACES.flatMap((place) => place.aliases.map((alias) => [normalizeSearchText(alias), place])),
);

export function buildSearchQuery(value) {
  const raw = String(value || "");
  const normalizedRaw = normalizeSearchText(raw);
  const rawTokens = tokenizeSearchText(normalizedRaw);
  const hasPlaceIntent = rawTokens.some((token) => PLACE_INTENT_WORDS.has(token));
  const searchableTokens = rawTokens.filter((token) => !PLACE_INTENT_WORDS.has(token) && !SEARCH_FILLER_WORDS.has(token));
  const normalized = searchableTokens.join(" ");
  const knownPlace = KNOWN_PLACE_ALIASES.get(normalizedRaw) || KNOWN_PLACE_ALIASES.get(normalized) || null;

  return {
    active: searchableTokens.length > 0,
    hasPlaceIntent,
    knownPlace,
    normalized,
    raw,
    tokens: searchableTokens,
  };
}

export function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9+]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function rankStationSearchMatches(stations, query) {
  if (!query.active) {
    return stations.map((station) => ({ station, score: 1 }));
  }

  return stations
    .map((station) => ({
      station,
      score: getStationSearchScore(station, query),
    }))
    .filter((match) => match.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.station.availableCount !== a.station.availableCount) return b.station.availableCount - a.station.availableCount;
      return a.station.name.localeCompare(b.station.name);
    });
}

export function getStationSearchScore(station, query) {
  if (!query.active) return 1;

  const search = query.normalized;
  const name = normalizeSearchText(station.name);
  const address = normalizeSearchText(station.address);
  const provider = normalizeSearchText([station.provider, station.providerLabel, ...(station.providers || [])].join(" "));
  const postalCode = normalizeSearchText(station.postalCode);
  const plugTypes = normalizeSearchText((station.plugTypes || []).map((plug) => plug.plugType).join(" "));
  const fullText = normalizeSearchText(stationSearchText(station));

  if (postalCode && search === postalCode) return 1200;
  if (postalCode && search.length >= 3 && postalCode.startsWith(search)) return 1000;
  if (name === search) return 950;
  if (name.includes(search)) return 850;
  if (address.includes(search)) return 760;
  if (provider.includes(search)) return 620;
  if (plugTypes.includes(search)) return 500;
  if (fullText.includes(search)) return 460;

  const textTokens = tokenizeSearchText(fullText);
  const matchedTokens = query.tokens.filter((token) => hasCompatibleToken(token, textTokens));

  if (matchedTokens.length === query.tokens.length) {
    return 340 + matchedTokens.length * 24;
  }

  return 0;
}

function tokenizeSearchText(value) {
  return normalizeSearchText(value).split(" ").filter(Boolean);
}

function hasCompatibleToken(queryToken, textTokens) {
  return textTokens.some((textToken) => {
    if (textToken === queryToken) return true;
    if (queryToken.length >= 3 && textToken.startsWith(queryToken)) return true;
    if (/^\d+$/.test(queryToken)) return false;
    return textToken.length >= 3 && queryToken.startsWith(textToken);
  });
}
