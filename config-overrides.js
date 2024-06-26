const webpack = require('webpack');

module.exports = function override(config, env) {
  // fallback ayarlarını webpack.config.js'deki ile aynı yapın
  config.resolve.fallback = {
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    stream: require.resolve('stream-browserify'),
    zlib: require.resolve('browserify-zlib'),
    util: require.resolve('util/'),
    url: require.resolve('url/'),
    assert: require.resolve('assert/')
  };

  // plugins ayarlarını webpack.config.js'deki ile aynı yapın
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  );

  return config;
};
