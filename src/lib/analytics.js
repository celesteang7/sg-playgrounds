const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const GA_SCRIPT_ID = "google-analytics-gtag";

let initialized = false;

export function initAnalytics() {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || typeof document === "undefined") return false;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  if (!document.getElementById(GA_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.async = true;
    script.id = GA_SCRIPT_ID;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(script);
  }

  if (!initialized) {
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
    initialized = true;
  }

  return true;
}

export function trackPageView(path) {
  if (!initAnalytics()) return;

  window.gtag("event", "page_view", {
    page_path: path || `${window.location.pathname}${window.location.search}`,
    page_location: window.location.href,
    page_title: document.title,
  });
}
