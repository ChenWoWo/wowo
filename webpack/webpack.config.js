const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const AutoImport = require('unplugin-auto-import/webpack').default;
const Components = require('unplugin-vue-components/webpack').default;
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = (env) => ({
  entry: {
    // 修正后的入口配置（移除 vendor 入口）
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].chunk.js', // 确保该配置存在
    publicPath: '/'
  },
  // Correct placement for optimization
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      cacheGroups: {
        // 核心框架单独分包
        vue: {
          test: /[\\/]node_modules[\\/](vue|vue-router)[\\/]/,
          name: 'vue',
          priority: 20
        },
        // 其他第三方库
        elementPlus: {
          test: /[\\/]node_modules[\\/]element-plus[\\/]/, // 匹配 ElementPlus 文件
          name: 'element-plus',
          priority: 20,      // 优先级高于默认 vendors
          reuseExistingChunk: true,
          enforce: true
        },
        // 保留原有 vendors 配置
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10
        }
      }
      
    },
    // Keep existing optimization configs
    usedExports: true,
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            unused: true,
            drop_console: env.production
          }
        }
      }),
      '...'
    ],
    sideEffects: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: [
          env.production ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: env.production ? {
        collapseWhitespace: true,
        removeComments: true
      } : false
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    ...(env.ANALYZE ? [new BundleAnalyzerPlugin()] : [])
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 8081,
    host: '0.0.0.0',
    // 添加historyApiFallback支持Vue Router
    historyApiFallback: true  
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // 添加这行配置
    }
  }
});

