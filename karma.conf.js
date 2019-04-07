var webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({
        autoWatch: false,
        basepath: "src",
        browsers: ["Chrome"],
        colors: true,
        exclude: [],
        files: ["**/*.spec.tsx"],
        frameworks: ['jasmine'],
        preprocessors: {
            "**/*.spec.tsx": ["webpack"] // Using karma-webpack npm module
        },
        reporters: ['progress'],
        singleRun: true,
        webpack: {
            mode: 'development',
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        }
    })
}