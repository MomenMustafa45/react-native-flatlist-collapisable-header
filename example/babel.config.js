const path = require('path');
const { getConfig } = require('react-native-builder-bob/babel-config');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');

module.exports = function (api) {
  api.cache(true);

  // Just use the default config - builder-bob should handle plugins automatically
  return getConfig(
    {
      presets: ['babel-preset-expo'],
    },
    { root, pkg }
  );
};
