const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const DotENVWebpack = require('dotenv-webpack');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = (env, argv) => ({
  devtool: 'inline-source-map',
  entry: path.join(__dirname, 'app'),
  context: __dirname,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      app: path.join(__dirname, 'app'),
      components: path.join(__dirname, 'app/components'),
      containers: path.join(__dirname, 'app/containers'),
      images: path.join(__dirname, 'app/images'),
      translations: path.join(__dirname, 'app/translations'),
      utils: path.join(__dirname, 'app/utils'),
      assets: path.join(__dirname, 'app/assets'),
      store: path.join(__dirname, 'app/store'),
      i18n: path.join(__dirname, 'app/i18n'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,

        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(otf)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html',
    }),
    new MiniCSSExtractPlugin(),
    new ESLintWebpackPlugin({
      exclude: 'node_modules',
      fix: true,
    }),
    new DotENVWebpack({
      path: `.env${argv.mode === 'production' ? '' : '.dev.local'}`,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
    publicPath: '/',
    port: 5050,
  },
});
