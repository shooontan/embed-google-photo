const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  let isProduct = false;
  const config = {};

  config.mode = argv.mode === 'production' ? 'production' : 'development';
  isProduct = config.mode === 'production';

  config.entry = {
    bundle: path.join(__dirname, '/src'),
  };

  config.output = {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[hash].[name].js',
  };

  if (!isProduct) {
    config.devServer = {
      hot: true,
      port: 3000,
      contentBase: path.join(__dirname, 'dist'),
    };
  }

  let plugins = [];

  if (isProduct) {
    plugins.push(new CleanWebpackPlugin(['dist']));
  }

  plugins = [
    ...plugins,
    new HtmlWebpackPlugin({
      title: 'Embed Google Photo',
      template: './src/html/index.ejs',
    }),
    new MiniCssExtractPlugin({
      filename: '[contenthash].style.css',
      chunkFilename: '[id].css',
    }),
  ];

  return Object.assign({}, config, {
    devtool: isProduct ? false : 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins,
  });
};
