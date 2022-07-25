const path = require('path')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CUSTOM_NAME = process.env.CUSTOM_ENV
console.log(CUSTOM_NAME)
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new DefinePlugin({
            'process.env.CUSTOM': JSON.stringify(CUSTOM_NAME)
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            title: 'Output Management',
        }),
    ]
}