var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/prod?readPreference=primary&appname=MongoDB%20Compass&ssl=false',{ useUnifiedTopology: true, useNewUrlParser: true });