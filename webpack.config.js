const path = require('path');
const WebpackObfuscatorPlugin = require('webpack-obfuscator');
const obfuscatorConfig = require('./obfuscator.json');

module.exports = {
    mode: "development",
    entry: {
        test: './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    plugins: [
        new WebpackObfuscatorPlugin(obfuscatorConfig),
    ]
};