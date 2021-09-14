const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = ( env, argv ) => ({
    entry: './assets-src/entrypoint.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'assets')
    },
    watch: true,

    // 最適化オプションを上書き
    optimization: {
        minimizer: [
        new TerserPlugin({}),
        new OptimizeCssAssetsPlugin({})
        ]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
                ],
                exclude: /node_modules/,
            },
            // css/sass-loaderの設定
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ]
});
