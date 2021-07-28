var mongoose = require('mongoose');  

var ProductsSchema = new mongoose.Schema({  
  title : String,
  value :String,
  class : String
});

mongoose.model('Products', ProductsSchema);

module.exports = mongoose.model('Products');