const pageGenerator = require('./plop/page/prompt');
const componentGenerator = require('./plop/component/prompt');

module.exports = function(plop) {
  plop.setGenerator('Page', pageGenerator)
  plop.setGenerator('Component', componentGenerator)
}
