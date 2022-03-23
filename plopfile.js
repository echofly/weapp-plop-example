const pageGenerator = require('./plop/page/prompt');
const componentPageGenerator = require('./plop/componentPage/prompt');
const componentGenerator = require('./plop/component/prompt');

module.exports = function(plop) {
  plop.setGenerator('Page', pageGenerator)
  plop.setGenerator('ComponentPage', componentPageGenerator)
  plop.setGenerator('Component', componentGenerator)
}
