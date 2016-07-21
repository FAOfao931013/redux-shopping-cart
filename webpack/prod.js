const webpack = require('webpack');
var WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig.Config().extend('./webpack/config-maker.js').merge({
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
});