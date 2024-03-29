"use strict";

const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");

module.exports = {
    entry: "./home", // файл, который нужно собирать
    output: { // куда выводить   
        filename: "build.js"
    }

    // watch: true,
    watch: NODE_ENV == "development",

    watchOptions: {
        aggregateTimeout: 100
    },

    // devtool: "source-map" for production
    devtool: NODE_ENV == "development" ? "cheap-inline-module-source-map" : null,
    // or eval/cheap-inline-module-source-map for development

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ]
};