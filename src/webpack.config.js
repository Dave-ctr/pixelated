const path = require( 'path' )

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join( __dirname, '../server/public' ),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
    ],
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
  },
  devtool: 'source-map',
}
