const express = require('express')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const historyApiFallback = require('connect-history-api-fallback')
const webpackConfig = require('../build/webpack.config')
const config = require('../config')
/* eslint-disable import/no-extraneous-dependencies */
const browserSync = require('browser-sync');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const paths = config.utils_paths

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement universal
// rendering, you'll want to remove this middleware.
// app.use(historyApiFallback())

// ------------------------------------
// Apply Webpack HMR Middleware WebPack热加载服务器,使用browserSync可以再多终端同步刷新甚至滚动
// ------------------------------------
if (config.env === 'development') {
  const compiler = webpack(webpackConfig)
  debug('Enable webpack dev and HMR middleware')
  browserSync({
    server: compiler.outputPath,
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        contentBase : paths.client(),
        hot: true,
        quiet: webpackConfig.compiler_quiet,
        lazy: false,
        progress: true,
        stats: webpackConfig.compiler_stats,
        noInfo: false,
      }),
      webpackHotMiddleware(compiler),
    ],
    files: ['src/*'],
  });
  /* eslint-disable key-spacing,global-require*/
  // app.use(require('webpack-dev-middleware')(compiler, {
  //   publicPath  : webpackConfig.output.publicPath, // 存取前端bundle网址
  //   contentBase : paths.client(),
  //   hot         : true,
  //   quiet       : config.compiler_quiet,
  //   noInfo      : config.compiler_quiet,
  //   lazy        : false,
  //   stats       : config.compiler_stats,
  // }))
  // app.use(require('webpack-hot-middleware')(compiler))

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  // app.use(express.static(paths.client('static')))
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  // app.use(express.static(paths.dist()))
}

module.exports = app
