var fs = require('fs') //import the fs module
var file = process.argv[2] //get the file path from the command line arguement

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})