var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb://localhost:27017/test?readPreference=primary&appname=MongoDB%20Compass&ssl=false',{ useUnifiedTopology: true, useNewUrlParser: true });