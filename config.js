/* =====================================================================
   config.js  -  YOUR CUSTOMIZATION FILE
   Edit the values after the colons (:) and keep the commas and quotes.
   Anything you delete falls back to a safe default, so you can't break
   the site by removing a line. Save, upload to GitHub, then refresh
   your site with Ctrl+F5.
   ===================================================================== */
window.SITE_CONFIG = {

  /* ---------- 1. YOUR SHOP AND SITE TEXT ---------- */
  shopName: "Confused Lizard PH",                    // printed on placeholders/checklists if you add "shop" below
  title: "Master Set Placeholder Builder",     // big title at the top of the site
  subtitle: "Pick a master set, tick what you own, then download your placeholders.",
  logoUrl: "",                                 // e.g. "logo.png" (upload the image to GitHub next to index.html). Empty = no logo

  /* ---------- 2. SITE COLORS (hex codes) ---------- */
  colors: {
    accent: "#2456d6",       // buttons and highlights
    background: "#eef1f4",   // page background
    panel: "#ffffff",        // boxes and card tiles
    text: "#1d2733",         // main text
    muted: "#5d6b7a",        // light text
    line: "#cdd5dd"          // borders
  },
  darkColors: null,          // optional. Example: { background:"#141a21", panel:"#1d252e", text:"#e6ebf0", muted:"#93a1b0", line:"#33404d", accent:"#6b9bff" }

  /* ---------- 3. FONTS ---------- */
  fonts: {
    heading: "'Trebuchet MS', Verdana, sans-serif",
    body: "Georgia, serif",
    googleFontsUrl: ""       // optional. Paste a Google Fonts link, then use that font name above
  },

  /* ---------- 4. WHICH BUTTONS TO SHOW ---------- */
  // Choose from: "set", "pokemon", "artist", "custom", "preset". Remove ones you don't want.
  modes: ["set", "pokemon", "artist", "custom", "preset"],
  tabNames: {                // rename the buttons if you like
    set: "By set", pokemon: "By Pokémon", artist: "By artist",
    custom: "My own list", preset: "Preset lists"
  },
  defaultOutput: "holder",   // "holder" = text placeholders, "image" = with picture, "list" = checklist

  /* ---------- 5. PRESET LISTS (great for "Pokémon in the background") ----------
     Each list needs a name and card IDs. Find IDs on pokemontcg.io or from
     a "By set" list (the ID looks like base1-4). The two below are EXAMPLES only.
     Remove the // at the start of the lines to use them. */
  collections: [
    // { name: "Example list: Base Set picks", ids: ["base1-4", "base1-2"] },
    // { name: "Background Eevee (my own list)", ids: [] }
  ],

  /* ---------- 6. PDF / PRINT SETTINGS ---------- */
  pdf: {
    paper: "A4",             // "A4" or "letter"
    marginMm: 10,            // blank border around each page (mm)
    widthMm: 63,             // placeholder width  (63 = standard card)
    heightMm: 88,            // placeholder height (88 = standard card)
    paddingMm: 5,            // space between the edge and the text

    showCutLine: true,       // true = show the cutting border, false = hide it
    cutLineStyle: "dashed",  // "dashed", "dotted" or "solid"
    cutLineColor: "#888888",
    backgroundColor: "#ffffff",   // placeholder fill color
    textColor: "#000000",
    fontFamily: "Verdana, sans-serif",

    /* WHAT APPEARS ON EACH TEXT PLACEHOLDER, and where.
       Available items: name, set, number, rarity, artist, id, symbol, logo, shop
       Put them in top, center or bottom. Order matters. Delete any you don't want. */
    layout: {
      top: ["name", "set"],
      center: ["number"],
      bottom: ["rarity", "artist", "symbol"]
    },

    /* Text size in points for each item (bigger number = bigger text) */
    sizes: { name: 13, set: 8, number: 20, rarity: 8, artist: 8, id: 7, shop: 7 },

    /* CHECKLIST SETTINGS */
    listTitle: "Master Set Checklist",   // shown under your shop name on the checklist
    // Columns, in order. Choose from: have, set, number, name, rarity, artist, id
    checklistColumns: ["have", "set", "number", "name", "rarity", "artist"]
  }
};
