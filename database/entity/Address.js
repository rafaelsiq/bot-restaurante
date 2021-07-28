var mongoose = require('mongoose');  

var AddressSchema = new mongoose.Schema({  
  content : String
});

mongoose.model('Address', AddressSchema);

module.exports = mongoose.model('Address');