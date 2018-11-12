'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
    }
})

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {

        path: path.join(__dirname, '../dist') // 打包出口
        // path: config.build.assetsRoot,
        // filename: '[name].js',
        // publicPath: process.env.NODE_ENV === 'production'
        //   ? config.build.assetsPublicPath
        //   : config.dev.assetsPublicPath
    },

    module: {
        rules: [
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postcss: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })],
                    loaders: {
                        // less: ExtractTextPlugin.extract({
                        //     use: ['css-loader?minimize', { loader: 'postcss-loader', options: { sourceMap: true } }, 'less-loader'],
                        //     fallback: "style-loader"
                        // }),
                        // css: ExtractTextPlugin.extract({
                        //     use: ['css-loader', { loader: 'postcss-loader', options: { sourceMap: true } }],
                        //     fallback: "style-loader"
                        // })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         use: ['css-loader?minimize', { loader: 'postcss-loader', options: { sourceMap: true } }],
            //         fallback: 'style-loader'
            //     })
            // },

            // {
            //     test: /\.less/,
            //     use: ExtractTextPlugin.extract({
            //         use: [{ loader: 'postcss-loader', options: { sourceMap: true } }, 'less-loader'],
            //         fallback: 'style-loader'
            //     })
            // },
            // {
            //   test: /\.(png|jpg|jpe?g|gif|svg)(\?.*)?$/,
            //   loader: 'url-loader',
            //   options: {
            //     limit: 100000,
            //     name: utils.assetsPath('img/[name].[hash:7].[ext]')
            //   }
            // },
            {
                test: /\.(gif|JPG|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}
