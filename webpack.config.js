module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    externals: {
        'react': 'React'
    },
    devtool: 'eval-source-map',  //Éú³Ésource file
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
    }
};