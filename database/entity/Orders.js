var mongoose = require('mongoose');  

var OrdersSchema = new mongoose.Schema({  
  client : String,
  products :String,
  total : String
});

mongoose.model('Orders', OrdersSchema);

module.exports = mongoose.model('Orders');