/*
  visualMetadata.js

  First-pass visual metadata layer for Vexillator.

  Keep measured/generated image facts here rather than in variants.js.
  Asset entries describe the displayed image file. Variant entries are reserved
  for later design-level facts such as layout, divisions, elements and text.
*/
const visualMetadata = Object.freeze({
  assets: Object.freeze([
    Object.freeze({
      assetId: "ast_france_current",
      colours: Object.freeze(["blue", "white", "red"]),
      dominantColours: Object.freeze(["blue", "white", "red"]),
      colourCoverage: Object.freeze({
        blue: 0.333,
        white: 0.333,
        red: 0.333
      }),
      colourCount: 3,
      generated: false,
      reviewed: true,
      confidence: "high",
      metadataMethod: "manual_seed"
    }),
    Object.freeze({
      assetId: "ast_germany_current",
      colours: Object.freeze(["black", "red", "gold"]),
      dominantColours: Object.freeze(["black", "red", "gold"]),
      colourCoverage: Object.freeze({
        black: 0.333,
        red: 0.333,
        gold: 0.333
      }),
      colourCount: 3,
      generated: false,
      reviewed: true,
      confidence: "high",
      metadataMethod: "manual_seed"
    }),
    Object.freeze({
      assetId: "ast_japan_current",
      colours: Object.freeze(["white", "red"]),
      dominantColours: Object.freeze(["white", "red"]),
      colourCoverage: Object.freeze({
        white: 0.811,
        red: 0.189
      }),
      colourCount: 2,
      generated: false,
      reviewed: true,
      confidence: "high",
      metadataMethod: "manual_seed"
    })
  ]),

  variants: Object.freeze([])
});
