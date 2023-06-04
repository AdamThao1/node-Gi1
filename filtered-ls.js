var fs = require('fs') //import the 'fs' module
var path = require('path') //import the 'path' module

fs.readdir(process.argv[2], function (err, list) {
    //line 4 reading the directory
    //line 4 creates a function and listed for each file
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
  //iterating through the files 
})