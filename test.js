const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./index');
const Emp = require('./models/EmployeeModel');
chai.use(chaiHttp);
const expect = chai.expect;

// test cases for the post api
describe('POST /tasks', () => {
     
  it('should create a new employee', (done) => {
    const employee = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      id: 125,
      contact: '555-1234',
      address: '123 Main St, Anytown USA',
    };

    chai
      .request(server)
      .post('/tasks')
      .send(employee)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body.Employee).to.have.property('name').equal('John Doe');
        expect(res.body.Employee).to.have.property('email').equal('john.doe@example.com');
        expect(res.body.Employee).to.have.property('id').equal(125);
        expect(res.body.Employee).to.have.property('contact').equal('555-1234');
        expect(res.body.Employee).to.have.property('address').equal('123 Main St, Anytown USA');
        done();
      });
  });
});

// lets just create the test cases for the get api : to get all the employee

describe('GET /employees/:id', () => {
  it('should return 404 if employee with given ID does not exist', async () => {
    const res = await chai.request(server).get('/employees/100');
    expect(res).to.have.status(404);
    expect(res.text).to.equal('Employee with ID 100 not found');
  });

  it('should return the employee with given ID', async () => {
    const emp = new Emp({ name: 'John Doe', email: 'john.doe@example.com', id: 103, contact: '1234567890', address: '123 Main St' });
    await emp.save();

    const res = await chai.request(server).get('/employees/103');
    expect(res).to.have.status(201);
    expect(res.body.employee).to.deep.equal(JSON.parse(JSON.stringify(emp)));
  });
});

// lets just create the test case for the updating the employee data
describe('PUT /updateEmp/:id', () => {
  it('should update an existing employee and return the updated employee data', async () => {
    const emp = new Emp({ name: 'John Doe', email: 'john.doe@example.com', id: 111, contact: '1234567890', address: '123 Main St' });
    await emp.save();

    const updateData = {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      contact: '0987654321',
      address: '456 Main St',
    };

    const res = await chai.request(server)
      .put(`/updateEmp/${emp.id}`)
      .send(updateData);

    expect(res).to.have.status(201);
    expect(res.body).to.deep.include(updateData);
  });

  it('should return 404 if employee with given ID does not exist', async () => {
    const updateData = {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      contact: '0987654321',
      address: '456 Main St',
    };

    const res = await chai.request(server)
      .put('/updateEmp/198')
      .send(updateData);

    expect(res).to.have.status(404);
    expect(res.text).to.equal('Employee with ID 198 not found');
  });
});



