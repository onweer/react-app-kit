# react-app-kit
react-app introduction to a subject, build with redux, react-router, es6, webpack, ant design, browserSync, express

[![Build Status](https://travis-ci.org/onweer/react-app-kit.svg?branch=master)](https://travis-ci.org/onweer/react-app-kit)

Based on project [react-app-kit](https://github.com/onweer/react-app-kit)

Use react-app-kit to start your first SPA(Single Page Application) with configurable.<br>
用react-app-kit去开始你的第一个可配置的SPA(单页应用).

Its purpose is not to dictate your project structure or to demonstrate a complete sample application.Which contains a landing page to obtain the background Token,and a home page.<br>
它的目的不是指定你的项目结构或者演示一个完整的示例程序,其中包含了一个登陆页面获取后台Token和一个首页

Most of the code is given a bilingual note.<br>
大部分代码都给予了双语注释.

Before you begin, think about whether these features are needed in our project process<br>
在开始之前,思考一下我们的项目程序是否需要这些特性:


## Features 特性
| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components,Virtual Dom    | [react-demo ](https://github.com/ruanyf/react-demos), [React Gitbook](https://hulufei.gitbooks.io/react-tutorial/content) |
|  [Redux](http://redux.js.org)  |    Predictable state container, live code editing combined with a time traveling debugger   | [redux-tutorial-CN ](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)<br>[Redux Gitbook](http://cn.redux.js.org/index.html) |
|  [React-Router](https://github.com/reactjs/react-router) | A complete routing library for React | [react-router-tutorial](https://github.com/reactjs/react-router-tutorial/tree/master/lessons)<br>  [react-router gitbook](http://react-guide.github.io/react-router-cn)|
|  [Ant](https://ant.design/?locale=en-US)  |  Component library|  [ant](https://ant.design/docs/react/introduce?locale=en-US)|
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [ES6-tutorial](http://es6.ruanyifeng.com/)    |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [webpack-tutorial](https://github.com/ruanyf/webpack-demos) [Webpack gitbook](http://zhaoda.net/webpack-handbook)|
| [Mocha](http://mochajs.org) | Automated tests with chai|[Mocha-tutorial](https://github.com/ruanyf/mocha-demos)|
| [ESLint](http://eslint.org/) | Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. |[ESlint-tutorial](http://www.ruanyifeng.com/blog/2016/01/babel.html) |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [sass-tutorial ](http://www.ruanyifeng.com/blog/2012/06/sass.html)|
| [BrowserSync](https://www.browsersync.io/)| Time-saving synchronised browser testing. | [browserSync-tutorial](https://scotch.io/tutorials/how-to-use-browsersync-for-faster-development)|

This is a Sketch for a real React App, it could be used for you introduction to a subject

## Requirements
- node `^6.8.0`
- npm  `^3.10.x`

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements), you can create a new project based on `react-app-kit` in one of two ways:

### Install from source
First, clone the project:
```
$ git clone https://github.com/onweer/react-app-kit.git  <my-project-name>
$ cd <my-project-name>
```
Then install dependencies and check to see it works
```
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

If everything works, you should see the following:

![](http://7xwzb2.com1.z0.glb.clouddn.com/40D80DB5-9A09-4861-902F-CF3DA10F1EE4.png)

While developing, you will probably rely mostly on `npm start` however, there are additional scripts at your disposal:<br>
开发过程中，你用得最多的会是`npm start`，但是这里还有很多其它的处理：

|`npm run <script>`||
|------------------|-----------|
|`start`| Serves your app at localhost:3000. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (~/dist by default).|
|`dev`| Same as `npm start`, extra `NODE_ENV`: development|
|`test`| Runs unit tests with Karma and generates a coverage report.|
|`test:dev`| Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`| Runs `linter`, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`| Lint all .js files.|
|`lint:fix`| Lint and fix all .js files. Read more on this. [more](http://eslint.org/docs/user-guide/command-line-interface.html#fix)|

## Http Server Example
[react-app-kit-server](https://github.com/onweer/react-app-kit-server) work with jwt and cors

This is a server-side application that works with the react-app-kit.
```
$ git clone https://github.com/onweer/react-app-kit-server.git <my-project-server-name>
$ cd <my-project-server-name>
```
Then install dependencies and check to see it works
```
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch

```
Server is listing at 9527.


### Recommend

[JWT Analyzer & Inspector](https://chrome.google.com/webstore/detail/jwt-analyzer-inspector/henclmbnehmcpbjgipaajbggekefngob)

![JWT Analyzer & Inspector](http://7xwzb2.com1.z0.glb.clouddn.com/QQ20161031-2.png)

[Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension)<br>

![Redux DevTools](http://7xwzb2.com1.z0.glb.clouddn.com/QQ20161031-0.png)
![Redux DevTools](http://7xwzb2.com1.z0.glb.clouddn.com/QQ20161031-1.png)


## Directory Layout
Before you start, take a moment to see how the project structure looks like:
```
.
├── bin                      # Build/Start scripts
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── server                   # Express application that provides webpack
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── main.js              # Application bootstrap and rendering
│   ├── static               # Static assets (not imported anywhere in source code)
└── tests                    # Unit tests
```


## Reference
- [react-starter-kit](https://github.com/kriasoft/react-starter-kit)
- [react-app-sketch](https://github.com/zzswang/react-app-sketch)
- [reactSPA](https://github.com/JasonBai007/reactSPA)
