const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const connectDB = require('./config/db');
connectDB();

const app = express();
app.use(express.json());

// Define the Swagger specification options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API for my app'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ]
  },
  apis: ['./app.js'] // Path to your API routes file
};

// Initialize Swagger-jsdoc
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Serve the Swagger UI documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const Emp = require('./models/EmployeeModel');

app.post('/tasks', async (req, res) => {
  // console.log('should it use for the testing');
    // console.log(req.body);
  const { name,email,contact,id,address} = req.body;
  const Employee = new Emp({name,email,id,contact,address});
   
  await Employee.save();
  res.status(201).json({
    Employee
  });
});

// api to get the data from the database
app.get('/employees/:id',async(req,res) =>{
   
    const { id } = req.params;
    const employee = await Emp.findOne({id:id})
    if (employee) {
        res.status(201).json({
            employee
          });
    } else {
      res.status(404).send(`Employee with ID ${id} not found`);
    }
})
// api to update the data in mongodb
app.put('/updateEmp/:id', async (req, res) => {
    const id = req.params.id;
    
    const employee = await Emp.findOne({id:id})
    if(!employee)
    {
      res.status(404).send(`Employee with ID ${id} not found`);
    }
    else
    {
    const updatedEmployee = await Emp.findOneAndUpdate({ id: id }, req.body, { new: true });
    res.status(201).json(updatedEmployee);
    }
  });
// api to delete the data
app.delete('/delete_emp/:id',async (req,res)=>{
   
    const id = req.params.id;
  const deletedEmployee = await Emp.findOneAndDelete(id);
  if (!deletedEmployee) {
    return res.status(404).json({ error: 'Employee not found' });
  }
  res.json(`deleted user successfully ${deletedEmployee}`);
})

// its time to implement the test case



app.listen(3000, () => console.log('Server running on port 3000'));
module.exports = app;
