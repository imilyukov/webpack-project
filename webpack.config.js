const path = require('path');

const config = require('./config/webcore.config');
const loaders = require('./config/webpack.loaders');
const plugins = require('./config/webpack.plugins');

module.exports = () => [
  {
    mode: ['production', 'development'].includes(config.env)
      ? config.env
      : 'development',
    devtool: config.env === 'production'
      ? 'hidden-source-map'
      : 'cheap-eval-source-map',
    devServer: {
      contentBase: path.join(config.root, config.paths.src),
      watchContentBase: true,
      hot: true,
      open: true,
      host: config.dev_host,
      port: config.dev_port,
    },
    context: path.join(config.root, config.paths.src),
    entry: {
      app: './app.js',
      index: './pages/index.js',
      saved: './pages/saved-news.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
    },
    optimization: {
      minimize: config.env === 'production',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
    module: {
      rules: loaders,
    },
    plugins,
  },
];
