// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',   // 安装eslint-plugin-standard
  // required to lint *.vue files
  plugins: [
    'html',   // 安装eslint-plugin-html
  ],
  // add your custom rules here
  'rules': {
    'no-unused-vars': 0,
    // allow paren-less arrow functions
    'no-undef': 0,
    "no-new": "off",
    "eqeqeq": 0,//必须使用全等
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
