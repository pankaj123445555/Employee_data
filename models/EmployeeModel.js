const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Emp = mongoose.model('Emp', empSchema);

module.exports = Emp;
