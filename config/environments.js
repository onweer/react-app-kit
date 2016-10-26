/* eslint-disable */
// Here is where you can define configuration overrides based on the execution environment.
// Supply a key to the default export matching the NODE_ENV that you wish to target, and
// the base configuration will apply your overrides before exporting itself.
// 你可以在此处重载/覆盖 ./index.js中的定义用于执行环境.
// 提供NODE_ENV来确定你要重载的目标对象
module.exports = {
  // ======================================================
  // Overrides when NODE_ENV === 'development' 开发环境应用
  // ======================================================
  // NOTE: In development, we use an explicit public path when the assets
  // are served webpack by to fix this issue:
  // http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
  development: (config) => ({
    compiler_public_path: `http://${config.server_host}:${config.server_port}/`, //default localhost:3000
  }),

  // ======================================================
  // Overrides when NODE_ENV === 'production' 生产环境应用
  // ======================================================
  production: (config) => ({
    compiler_public_path: '/',
    compiler_devtool: null, // cancel SourceMap 取消./index.js中指定的sourceMap
    compiler_stats: { // When the webpack package is completed, the stats Specifies output options, 指定输出格式
      chunks: true,
      chunkModules: true,
      colors: true,
    },
  }),
}
