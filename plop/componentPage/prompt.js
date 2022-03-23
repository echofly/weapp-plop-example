const { notEmpty, correctPath } = require('../utils.js')

module.exports = {
  description: '使用Component构造页面',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入页面名称:',
      validate: notEmpty('页面名称'),
    },
    {
      type: 'list',
      name: 'needComputed',
      message: '是否需要引入computed计算属性？',
      choices: [
        {
          name: '需要',
          value: true
        },
        {
          name: '不需要',
          value: false
        }
      ]
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
      templateFile: 'plop/componentPage/index.js.hbs',
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{name}}/{{name}}.json',
      templateFile: 'plop/componentPage/index.json.hbs',
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
