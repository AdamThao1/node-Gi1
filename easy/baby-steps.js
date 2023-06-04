var result = 0 //initialize a variable to hold the sum

for (var i = 2; i < process.argv.length; i++)
//iterate the command-line starting from the 3 item in the array
  result += Number(process.argv[i])
//convert the argument to a number and add to the result
console.log(result)