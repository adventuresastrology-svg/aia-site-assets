# aia-site-assets

Public front-end code for Adventures In Astrology site tools (adventuresinastrology.com).

- `practitioner-center/pc.js`: the Practitioner Center app. Client files live in a private Supabase database protected by row-level security, and the interpretation library is stored there too, readable only by approved practitioners. Nothing private is in this repo.
- `practitioner-center/cds.js`: the Chart Design Station (chart calculation and chart designs). Loaded by pc.js as the Chart Design tab after sign-in and approval; can also be embedded on its own with `<div id="cds-mount"></div>` and this script. Calculated in the browser; nothing is sent anywhere except optional place searches.
- `moon/aia-moon.js`: the Today's Moon widget (links back to Lunar Station). Anyone can embed it with `<div class="aia-moon"></div><script src="https://cdn.jsdelivr.net/gh/adventuresastrology-svg/aia-site-assets@main/moon/aia-moon.js" async></script>`. Optional `data-theme="dark"` and `data-size="wide"` on the div. Calculated in the visitor's browser; nothing is tracked.

- `vedic/vax.js`: Vedic center tools (Sade Sati and Transits, Divisional Charts, Compatibility, Today's Panchanga) for /vedic-classroom-hub.
