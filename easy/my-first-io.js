var fs = require('fs') //importing the fs module

var contents = fs.readFileSync(process.argv[2])
//create a content variable and syncing the file as a command-line arguement

var lines = contents.toString().split('\n').length - 1
//create a lines convert the file to a string and split to a array of lines


console.log(lines)