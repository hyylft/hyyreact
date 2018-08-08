module.exports = {
   entry: './main.js',

   output: {
      path: './',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 88
   },
   devtool: 'eval-source-map', //生成source file

   module: {
      loaders: [{
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',

         query: {
            presets: ['es2015', 'react']
         }
      }]
   }

}