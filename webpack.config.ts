const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const extractSass = new ExtractTextPlugin({ filename: 'styles.css', allChunks: true });

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    devServer: {
        contentBase: './dist',
        inline: true,
        host: 'localhost',
        port: 8080,
        noInfo: true,
        hot: false,
        stats: 'errors-only',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                enforce: 'pre',
                include: [
                    path.resolve(__dirname, 'src')
                ]
            },
            // /* Use this if you plan on using css */
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin({
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 options: {
            //                     modules: true,
            //                     localIdentName: '[name]__[local]__[hash:base64:5]'
            //                 }
            //             },
            //             'postcss-loader'
            //         ]
            //     })
            // },
            {
                test: /\.s(a|c)ss$/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 2,
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        },
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    name: 'fonts/[hash].[ext]',
                    limit: 5000,
                    mimetype: 'application/font-woff'
                }
            },
            {
                test: /\.(ttf|eot|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[hash].[ext]'
                }
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[hash].[ext]'
                }
            },
        ]
    },
    plugins: [
        /* Use this plugin to transfer from source to dist */
        new CopyWebpackPlugin([
            { from: './src/manifest.webmanifest', to: './manifest.webmanifest' },
        ]),

        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
        }),

        extractSass,

        new webpack.IgnorePlugin(/^\.\locale$/, /moment$/),
    ],
    externals: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
};