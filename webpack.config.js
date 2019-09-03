const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function(env, argv) {
  console.log(argv.mode);
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      publicPath: './'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: argv.mode !== 'production' && true,
                disable: argv.mode !== 'production' && true,
                mozjpeg: {
                  progressive: true,
                  quality: 65
                }
              }
            }
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      overlay: true
    },
    stats: 'minimal',
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ]
  };
};
