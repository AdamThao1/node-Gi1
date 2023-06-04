const express = require('express'); //grabbing the express module
const app = express();
const employees = require('./employee.json'); //file is located near the server file

app.get('/employees', (req,res)=>{ //get a request of the employee file
    res.json(employees);//grab all the emplyees info
});

app.get('/employees/:employeeID', (req, res) => { //grabbing only the employeeID
    const employeeID = parseInt(req.params.employeeID); //route the parameter 
    const employee = employees.find(emp => emp.employeeID === employeeID); //using find method

    if(!employee){ //if employee not found display error
        res.statusCode(404).json({error: 'employerr not found'});
    } else { //if found display employee
        res.json(employee);
    }
});

app.listen(3000, () => { //start a server on port 3000
    console.log('server is running on port 3000');
});

//     http://localhost:3000/employees/ to get all the employees
//     http://localhost:3000/employees/1 to get one 
