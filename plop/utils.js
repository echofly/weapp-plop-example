const path = require("path"); 
const fs = require("fs"); 

exports.notEmpty = name => v =>
  !v || v.trim() === '' ? `${name}不能为空` : true

exports.correctPath = name => v => {
  if (!v || v.trim() === '') {
    return `${name}不能为空`
  }
  try {
    const isDirectory = fs.statSync(path.join(__dirname, `../src/${v}`)).isDirectory()
    if (isDirectory) {
      return true
    } else {
      return `${name}不正确`
    }
  } catch(e) {
    return `${name}不正确`
  }
}
