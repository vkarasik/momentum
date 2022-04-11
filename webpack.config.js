const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };
  if (devMode) {
    config.minimizer = [new OptimizeCssAssetsPlugin(), new TerserPlugin()];
  }
  return config;
};

const filename = (ext) => (devMode ? `[name].${ext}` : `[name].[contenthash].${ext}`);

const cssLoaders = (preprocesor) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: devMode,
        reloadAll: true,
      },
    },
    'css-loader',
  ];
  if (preprocesor) {
    loaders.push(preprocesor);
  }
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './js/index.js',
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.less', '.scss'],
  },
  optimization: optimization(),
  devtool: devMode ? 'source-map' : '',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: devMode,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: !devMode,
      },
    }),
    new CopyPlugin([
      { from: path.resolve(__dirname, 'src/assets/ico/'), to: path.resolve(__dirname, 'dist/assets/ico/') },
      { from: path.resolve(__dirname, 'src/assets/sounds/'), to: path.resolve(__dirname, 'dist/assets/sounds/') },
      { from: path.resolve(__dirname, 'src/assets/json/'), to: path.resolve(__dirname, 'dist/assets/json/') },
    ]),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
    new OptimizeCssAssetsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: cssLoaders(),
      },
      {
        test: /\.less$/i,
        use: cssLoaders('less-loader'),
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
};
