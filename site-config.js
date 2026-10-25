/* =====================================================================
   site-config.js  -  CUSTOMIZES THE WEBSITE (what visitors see on screen)

   THIS FILE EDITS:           THE PDF / PRINTOUT IS EDITED IN: pdf-config.js
     1. Shop name & site text    -> title, subtitle, header
     2. Logo                     -> top of the site (and optional on PDF)
     3. Site colors              -> buttons, background, boxes
     4. Fonts                    -> website text style
     5. Buttons shown            -> which search modes appear
     6. Preset lists             -> your saved card lists

   Edit the values after the colons (:). Keep the quotes, commas and brackets.
   Deleting a line is safe; a default is used. Save, upload to GitHub,
   wait 1-2 minutes, then refresh your site with Ctrl+F5.
   ===================================================================== */
window.SITE_CONFIG = {

  /* ---------- 1. SHOP NAME & SITE TEXT ---------- */
  shopName: "My Card Shop",                    // also usable on the PDF (add "shop" in pdf-config.js)
  title: "Master Set Placeholder Builder",     // big title at the top of the site
  subtitle: "Pick a master set, tick what you own, then download your placeholders.",

  /* ---------- 2. LOGO ---------- */
  logoUrl: "",     // e.g. "logo.png" (upload the image to GitHub beside index.html). Empty = no logo

  /* ---------- 3. SITE COLORS (hex codes) ---------- */
  colors: {
    accent: "#2456d6",       // buttons and highlights
    background: "#eef1f4",   // page background
    panel: "#ffffff",        // boxes and card tiles
    text: "#1d2733",         // main text
    muted: "#5d6b7a",        // light text
    line: "#cdd5dd"          // borders
  },
  darkColors: null,          // optional dark mode. Example: { background:"#141a21", panel:"#1d252e", text:"#e6ebf0", muted:"#93a1b0", line:"#33404d", accent:"#6b9bff" }

  /* ---------- 4. FONTS ---------- */
  fonts: {
    heading: "'Trebuchet MS', Verdana, sans-serif",
    body: "Georgia, serif",
    googleFontsUrl: ""       // optional: paste a Google Fonts link, then use that font name above
  },

  /* ---------- 5. WHICH BUTTONS TO SHOW ---------- */
  // Choose from: "set", "pokemon", "artist", "custom", "preset". Remove the ones you don't want.
  modes: ["set", "pokemon", "artist", "custom", "preset"],
  tabNames: {                // rename the buttons if you like
    set: "By set", pokemon: "By Pokémon", artist: "By artist",
    custom: "My own list", preset: "Preset lists"
  },
  defaultOutput: "holder",   // starting choice: "holder" = text placeholders, "image" = with picture, "list" = checklist

  /* ---------- 6. PRESET LISTS (great for "Pokémon in the background") ----------
     Each list needs a name and card IDs (like base1-4). Find IDs from a "By set"
     list or on pokemontcg.io. The lines below are EXAMPLES only: remove the //
     at the start to use them. Separate lists with commas. */
  collections: [
    // { name: "Example list: Base Set picks", ids: ["base1-4", "base1-2"] },
    // { name: "Background Eevee (my own list)", ids: [] }
  ]
};
