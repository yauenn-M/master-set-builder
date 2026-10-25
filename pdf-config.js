/* =====================================================================
   pdf-config.js  -  CUSTOMIZES THE PDF / PRINTED OUTPUT
   (the placeholders and checklist you download or print)

   THIS FILE EDITS:                   THE WEBSITE LOOK IS EDITED IN: site-config.js
     1. Paper & margins          -> A4 / Letter, page border
     2. Placeholder size         -> width, height, padding
     3. Cut line & colors        -> border, fill, text color, font
     4. What is printed          -> name, set, number, artist, logo, shop...
     5. Text sizes               -> size of each printed item
     6. Checklist                -> title and columns

   Your shop name and logo come from site-config.js. Use "shop" and "logo"
   in the layout below to print them on each placeholder.

   Edit the values after the colons (:). Keep the quotes, commas and brackets.
   Save, upload to GitHub, wait 1-2 minutes, then refresh with Ctrl+F5.
   ===================================================================== */
window.PDF_CONFIG = {

  /* ---------- 1. PAPER & MARGINS ---------- */
  paper: "A4",             // "A4" or "letter"
  marginMm: 10,            // blank border around each page (mm)

  /* ---------- 2. PLACEHOLDER SIZE (mm) ---------- */
  widthMm: 63,             // 63 = standard card width
  heightMm: 88,            // 88 = standard card height
  paddingMm: 5,            // space between the edge and the text
  // The number of placeholders per row is worked out automatically.

  /* ---------- 3. CUT LINE, COLORS & FONT ---------- */
  showCutLine: true,       // true = show the cutting border, false = hide it
  cutLineStyle: "dashed",  // "dashed", "dotted" or "solid"
  cutLineColor: "#888888",
  backgroundColor: "#ffffff",   // placeholder fill color
  textColor: "#000000",
  fontFamily: "Verdana, sans-serif",

  /* ---------- 4. WHAT IS PRINTED ON EACH TEXT PLACEHOLDER ----------
     Items you can use: name, set, number, rarity, artist, id, symbol, logo, shop
     Put them in top, center or bottom. Order matters. Delete any you don't want. */
  layout: {
    top: ["name", "set"],
    center: ["number"],
    //bottom: ["rarity", "artist", "symbol"]
  },

  /* ---------- 5. TEXT SIZES (points; bigger number = bigger text) ---------- */
  sizes: { name: 13, set: 8, number: 12, rarity: 8, artist: 8, id: 7, shop: 7 },

  /* ---------- 6. CHECKLIST ---------- */
  listTitle: "Master Set Checklist",   // shown under your shop name
  // Columns in order. Choose from: have, set, number, name, rarity, artist, id
  checklistColumns: ["have", "set", "number", "name", "rarity", "artist"]
};
