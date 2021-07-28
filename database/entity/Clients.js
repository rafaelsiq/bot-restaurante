var mongoose = require('mongoose');  

var ClientsSchema = new mongoose.Schema({  
  name : String,
  phone : String,
  payment : String,
  address : String
});

mongoose.model('Clients', ClientsSchema);

module.exports = mongoose.model('Clients');