const { notEmpty, correctPath } = require('../utils.js')

module.exports = {
  description: '生成一个页面',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入页面名称:',
      validate: notEmpty('页面名称'),
    },
    {
      type: 'input',
      name: 'path',
      message: '请输入页面存放的路径(src/<your path>):',
      validate: correctPath('路径'),
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/{{path}}/{{name}}/{{name}}.js',
      templateFile: 'plop/page/index.js.hbs',
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{name}}/{{name}}.json',
      templateFile: 'plop/page/index.json.hbs',
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{name}}/{{name}}.wxml',
      templateFile: 'plop/commonHbs/index.wxml.hbs',
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{name}}/{{name}}.scss',
      templateFile: 'plop/commonHbs/index.scss.hbs',
    },
  ]
}
