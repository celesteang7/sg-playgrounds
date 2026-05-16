# Provider Location Vetting

Generated on 2026-05-16 from public internet/provider sources and the live LTA DataMall EV Charging Points Batch feed.

This is only a vetting list. It is not wired into the map.

## Sources Checked

- LTA DataMall EV Charging Points Batch live feed, refreshed at `2026-05-16 13:45:00`.
- Keppel Volt charging network page: https://www.keppelvolt.com/volt-charging-network/
- City Energy Go cross-border charging page: https://www.cityenergygo.com.sg/cross-border-charging/
- City Energy Go charging point category sitemap: https://www.cityenergygo.com.sg/charging-points-category-sitemap.xml

## Recommended Import Path

Use the LTA feed first for map population because it already includes normalized station names, addresses, latitude, longitude, provider, plug types, and availability.

- `VOLT SINGAPORE PTE. LTD.`: 77 map-ready LTA stations.
- `CITY ENERGY GO PTE. LTD.`: 8 map-ready LTA stations.
- City Energy Go website lists 44 Singapore locations. Many appear residential, private, or only partially addressed, so they should be vetted before geocoding or displaying.
- Keppel Volt website lists 159 charger rows across 129 unique addresses. It includes private-use rows and AC/DC rows split at the same site; use it to cross-check LTA, not as an automatic public import until private-use policy is decided.

## City Energy Go - Map Ready From LTA

| Name | Address | Coordinates |
| --- | --- | --- |
| 27 Woodlands Link | 27 Woodlands Link Singapore 738732 | 1.452408, 103.810861 |
| A'Posh BizHub | 1 Yishun Industrial Street 1 Singapore 768160 | 1.437321, 103.842086 |
| Acetech Centre | 19 Jalan Kilang Barat Singapore 159361 | 1.284824, 103.809126 |
| Eldix | 11 Mandai Estate Singapore 729908 | 1.408603, 103.759759 |
| Parc Komo | 961 Upper Changi Road North Singapore 507663 | 1.361033, 103.97031 |
| Piccadilly Galleria / Piccadilly Grand | 1 Northumberland Road Singapore 219568 | 1.311672, 103.8526 |
| Pullman Singapore Hill Street | 1 Hill Street Singapore 179949 | 1.293706, 103.850661 |
| The M | 38 Middle Road Singapore 188947 | 1.297693, 103.856048 |

## City Energy Go - Website Locations To Vet

| Name | Address From City Energy Go |
| --- | --- |
| A Treasure Trove | 50 Punggol Walk, Singapore 828830 |
| A'Posh BizHub | 1 Yishun Industrial Street 1, Singapore 768160 |
| Acetech Center | 19 Jln Kilang Barat, Singapore 159361 |
| Atlassia | 40 Joo Chiat Place, Singapore 427764 |
| Buckley 18 | 18 Buckley Rd, Singapore 309776, Singapore |
| Copen Grand | 51 Tengah Garden Avenue, Singapore |
| Eldix | 11 Mandai Estate, Singapore 729908 |
| EVC Connection | 2 Gambas Crescent, Singapore |
| Forett at Bukit Timah | 32 Toh Tuck Road, Singapore |
| Fulcrum | 33 Fort Road, Singapore 439092 |
| Grandeur Park Residences | Bedok South Ave 3, Grandeur Park Residences, Singapore 465461 |
| Greenphyto Innovation Centre | 13 Tukang Innovation Dr, Singapore |
| Hoi Hup Building | 16 Jln Kilang, Singapore |
| Jervois Treasures | 31 Jervois Rd, Singapore 249080 |
| Ki Residences | 1 Brookvale Dr, Singapore 599968, Singapore |
| Klimt Cairnhill | 71 Cairnhill Rd, Singapore |
| Kopar at Newton | 8 Makeway Avenue, Singapore |
| Leedon Green | 28 Leedon Heights, Singapore 266222 |
| Mirage Tower | 80 Kim Seng Rd, Singapore 239426 |
| North Park Residences | 37 Yishun Central 1, Singapore |
| Olloi | 50 Lorong 101 Changi, Singapore |
| One Amber | 1 Amber Gardens, Singapore 439957 |
| Parc Botannia | 16 Fernvale St, Parc Botannia, Singapore 797393 |
| Parc Canberra | Canberra Walk, Singapore 750115 |
| Parc Central | 121 Tampines Street 86, Singapore |
| Parc Komo and Komo Shoppes | 961 Upper Changi Road North, Singapore |
| Park Colonial | Woodleigh Ln, Singapore 357686 |
| Piccadilly Grand | Northumberland Road, Singapore |
| Pullman Hotel | 1 Hill Street, Singapore 179949 |
| Pullman Residences | 18 Dunearn Rd, Singapore 309421, Singapore |
| Reflections at Keppel Bay | Keppel Bay View, Singapore 098417, Singapore |
| Ripple Bay | 2 Pasir Ris Link, Singapore 518184 |
| Rivertrees Residences | 21 Fernvale Close, Singapore 797460 |
| Seletar Park Residence | 17 Seletar Rd, Singapore 807019, Singapore |
| Tenet | Tampines St 62, Singapore 520650 |
| The Arden | 2 Phoenix Road, Singapore |
| The Commodore | 69 Canberra Dr, Singapore 752106 |
| The Estuary | 97 Yishun Ave 1, Singapore 769138, Singapore |
| The Florence Residences | 81 Hougang Ave 2, Singapore 538859 |
| The Garden Residences | 1 Serangoon North View, Singapore 554343 |
| The M (For Residents Only) and The M (Commercial) | Middle Road, Singapore |
| Treasure at Tampines | 1 Tampines Ln, Singapore |
| Urban Treasures | Eunos Ave 4, Singapore 409788 |
| Van Holland | 188 Holland Road, Singapore 278584 |

## Volt Singapore - Map Ready From LTA

| Name | Address | Coordinates |
| --- | --- | --- |
| 1 Marina Boulevard | 1 Marina Boulevard Singapore 018989 | 1.282324, 103.852534 |
| 313 @ Somerset | 313 Orchard Road Singapore 238895 | 1.301014, 103.838361 |
| 33 Marsiling Industrial Estate Road | 33 Marsiling Industrial Estate Road Singapore 739256 | 1.440686, 103.783568 |
| 45 Shipyard Road | 45 Shipyard Road Singapore 628136 | 1.303078, 103.685792 |
| 8B @ Admiralty | 8B Admiralty Street Singapore 757440 | 1.462176, 103.814479 |
| 900 South Woodlands Dr CPF Woodlands Service Centre | 900 South Woodlands Drive Singapore 730900 | 1.434902, 103.786614 |
| APECO | 32 Penjuru Road Singapore 609136 | 1.310811, 103.733697 |
| Apex @ Henderson | 201 Henderson Road Singapore 159545 | 1.282394, 103.820412 |
| Beach LRT Station (S4) | 50 Beach View Singapore 098604 | 1.25129, 103.817802 |
| Bidadari Community Centre | 11 Bidadari Park Drive Singapore 367803 | 1.338694, 103.87175 |
| Bishan Point | 61 Bright Hill Drive Singapore 579653 | 1.359659, 103.832692 |
| Blk 524A Jelapang Road Amazing Star Montessori House (Greenridge) | 524A Jelapang Road Singapore 671524 | 1.385416, 103.766072 |
| Blk 533A Choa Chu Kang St 51 Limbang Shopping Centre | 533A Choa Chu Kang Street 51 Singapore 681533 | 1.391575, 103.74337 |
| Blk 624A Elias Road Multi Storey Car Park | 624A Elias Road Singapore 510624 | 1.377911, 103.941739 |
| Blk 762A Jurong West St 75 Multi Storey Car Park | 762A Jurong West Street 75 Singapore 641762 | 1.348962, 103.69791 |
| Blk 768 Woodlands Ave 6 ATM DBS Woodlands Mart | 768 Woodlands Avenue 6 Singapore 730768 | 1.445462, 103.798061 |
| Blk 866A Tampines St 83 Eileen's Learning Centre Pte. Ltd. | 866A Tampines Street 83 Singapore 521866 | 1.35537, 103.934511 |
| Blk 888A Woodlands Dr 50 Multi Storey Car Park | 888A Woodlands Drive 50 Singapore 731888 | 1.438136, 103.795151 |
| Blks 167-169 Jalan Bukit Merah Connection One | 168 Jalan Bukit Merah Singapore 150168 | 1.282748, 103.818651 |
| BreadTalk IHQ | 30 Tai Seng Street Singapore 534013 | 1.334345, 103.889638 |
| Capitol Building | 15 Stamford Road Singapore 178906 | 1.293445, 103.851532 |
| CHIJMES | 30 Victoria Street Singapore 187996 | 1.294797, 103.852573 |
| Chinatown Point | 133 New Bridge Road Singapore 059413 | 1.284999, 103.844697 |
| Consulate of the Republic of Cyprus | 10 Collyer Quay Singapore 049315 | 1.283321, 103.851843 |
| DBS Ang Mo Kio - Basement 3 | 53 Ang Mo Kio Avenue 3 Singapore 569933 | 1.369236, 103.848722 |
| DBS Marina Bay Link Mall | 8 Marina Boulevard Singapore 018981 | 1.280195, 103.854208 |
| DBS MBFC Branch | 12 Marina Boulevard Singapore 018982 | 1.279148, 103.854475 |
| DBS Singapore Flyer | 30 Raffles Avenue Singapore 039803 | 1.289678, 103.863413 |
| Eastwood Centre | 20 Eastwood Road Singapore 486442 | 1.321542, 103.955536 |
| Eclipse | 1 Fusionopolis View Singapore 138577 | 1.299942, 103.789404 |
| Elementum | 1 North Buona Vista Link Singapore 139691 | 1.306309, 103.792657 |
| Former Fullerton Building | 1 Fullerton Square Singapore 049178 | 1.286131, 103.853043 |
| Furama Riverfront Singapore | 405 Havelock Road Singapore 169633 | 1.287693, 103.83616 |
| Gali Batu Depot | 350 Woodlands Road Singapore 677730 | 1.397526, 103.755524 |
| GE House | 49 Beach Road Singapore 189685 | 1.296581, 103.856027 |
| Grandlink Square | 511 Guillemard Road Singapore 399849 | 1.314191, 103.891501 |
| Grantral Complex | 601 Macpherson Road Singapore 368242 | 1.333752, 103.887746 |
| Great Eastern @ Changi | 200 Changi Road Singapore 419734 | 1.316919, 103.903561 |
| Great Eastern Centre | 1 Pickering Street Singapore 048659 | 1.284823, 103.847666 |
| Gul Circle Districentre | 7 Gul Circle Singapore 629563 | 1.311121, 103.675226 |
| Havelock2 | 2 Havelock Road Singapore 059763 | 1.287151, 103.845154 |
| Hotel Boss | 500 Jalan Sultan Singapore 199020 | 1.305774, 103.860396 |
| Hotel Icon | 8 Club Street Singapore 069472 | 1.282927, 103.846519 |
| Icon | 12 Gopeng Street Singapore 078877 | 1.27517, 103.844496 |
| International Plaza | 20 Anson Road Singapore 079912 | 1.275369, 103.845647 |
| Jalan Besar Plaza | 101 Kitchener Road Singapore 208511 | 1.308658, 103.858067 |
| JEM | 50 Jurong Gateway Road Singapore 608549 | 1.333328, 103.743359 |
| Jurong Point | 1 Jurong West Central 2 Singapore 648886 | 1.339452, 103.706685 |
| Keppel Bay Tower (Hourly Parking) | 1 Harbourfront Avenue Singapore 098632 | 1.264843, 103.818291 |
| Keppel Infrastructure @ Changi | 48 Changi Business Park Central 2 Singapore 486067 | 1.34424, 103.96787 |
| Keppel South Central | 10 Hoe Chiang Road Singapore 089315 | 1.274402, 103.842238 |
| Link AMK | 3 Ang Mo Kio Street 62 Singapore 569139 | 1.38654, 103.844716 |
| Manulife Tower | 8 Cross Street Singapore 048424 | 1.282407, 103.849024 |
| Marina Bay Financial Centre (Tower 2) | 10 Marina Boulevard Singapore 018983 | 1.27944, 103.853787 |
| New Tech Park | 151 Lorong Chuan Singapore 556741 | 1.352062, 103.860698 |
| NLB | 1 Saint Andrew's Road Singapore 178957 | 1.290655, 103.851708 |
| One Raffles Quay | 1 Raffles Quay Singapore 048583 | 1.281182, 103.851899 |
| Parkway Parade | 80 Marine Parade Road Singapore 449269 | 1.301153, 103.905282 |
| Paya Ubi Industrial Park | 53 Ubi Avenue 1 Singapore 408934 | 1.325408, 103.896601 |
| Perennial Business City | 1 Venture Avenue Singapore 608521 | 1.331865, 103.744882 |
| Raffles Marina | 10 Tuas West Drive Singapore 638404 | 1.341514, 103.635171 |
| Sakae Building | 28 Tai Seng Street Singapore 534106 | 1.334904, 103.889499 |
| Shun Li Industrial Park | 61 Kaki Bukit Avenue 1 Singapore 417943 | 1.336689, 103.910664 |
| Singapore Customs (SC) | 55 Newton Road Singapore 307987 | 1.319832, 103.842063 |
| Singapore Post Centre | 10 Eunos Road 8 Singapore 408600 | 1.318982, 103.894723 |
| Singapore Recreation Club | B Connaught Drive Singapore 179682 | 1.292069, 103.853743 |
| Solstice Business Center | 23 New Industrial Road Singapore 536209 | 1.343316, 103.88525 |
| Tai Seng Exchange | 7 Tai Seng Avenue Singapore 536672 | 1.336562, 103.891949 |
| The Centris | 65 Jurong West Central 3 Singapore 648332 | 1.33933, 103.705988 |
| The Concourse | 300 Beach Road Singapore 199555 | 1.301075, 103.862702 |
| The Institution of Engineers Singapore | 70 Bukit Tinggi Road Singapore 289758 | 1.345178, 103.790537 |
| The Sail @ Marina Bay | 2 Marina Boulevard Singapore 018987 | 1.280769, 103.852659 |
| Ubi Techpark | 10 Ubi Crescent Singapore 408564 | 1.326275, 103.896131 |
| V Hotel Lavender | 70 Jellicoe Road Singapore 208767 | 1.30783, 103.862736 |
| Value Hotel - Thomson | 592 Balestier Road Singapore 329901 | 1.326902, 103.84273 |
| Victory Centre | 110 Lorong 23 Geylang Singapore 388410 | 1.318262, 103.881337 |
| Yotel Singapore Orchard Road | 366 Orchard Road Singapore 238904 | 1.306344, 103.831347 |
