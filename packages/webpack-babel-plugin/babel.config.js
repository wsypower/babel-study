const autoTrackPlugin = require("./plugins/index.js");

module.exports = {
  sourceType: 'unambiguous',
  "plugins": [
    [
      autoTrackPlugin,
      {
        trackerPath: 'tracker'
      }
    ]
  ]
}

