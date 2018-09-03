var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './App.js',
    output: { path: __dirname, filename: 'bundles.js'},

    module: {
        loaders: [
            {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node-modules/,
            query: {
                presets: ['es2015', 'react']
            }
            }
        ]
    },
};