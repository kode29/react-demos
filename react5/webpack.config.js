const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
    // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '../src/dist'),
   filename: 'index.bundle.js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   port: 5000,
   hot: true
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader',
       {
         loader: "css-loader",
         options: {
         importLoaders: 1,
         modules: true,
       },
      ],
     }
   ]
 },
 plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}
