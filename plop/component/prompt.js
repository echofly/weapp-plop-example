const { notEmpty, correctPath } = require('../utils.js')

module.exports = {
  description: '生成一个组件',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称:',
      validate: notEmpty('组件名称'),
    },
    {
      type: 'list',
      name: 'needComputed',
      message: '是否需要引入computed计算属性？',
      // choice中的value就是needComputed的值，所以不需要通过data传给hbs文件
      // 直接在hbs文件中使用即可
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
      message: '请输入组件存放的路径(src/<your path>):',
      validate: correctPath('路径'),
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/{{path}}/{{name}}/{{name}}.js',
      templateFile: 'plop/component/index.js.hbs',
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{name}}/{{name}}.json',
      templateFile: 'plop/component/index.json.hbs',
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{name}}/{{name}}.wxml',
      templateFile: 'plop/commonHbs/index.wxml.hbs',
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{name}}/{{name}}.wxss',
      templateFile: 'plop/commonHbs/index.wxss.hbs',
    },
  ]
}
