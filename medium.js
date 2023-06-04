const fs = require('fs'); //imports the fs module

fs.readFile('planets.txt', 'utf8', (err, data) =>{ //read file of planets
    if (err) { //checks if theres a error
        console.error(err);
        return;
    }

    const planets = data.split(','); //if no error split the data with ','

    console.log(planets)
})
