var app = require('./app');
var port = process.env.PORT || 4242;

if (!process.env.NODE_ENV) {
  var server = app.listen(port, function () {
    console.log('Express server listening on port ' + port);
  })
}

if(process.env.NODE_ENV == 'test')
{
  var server = app.listen(port, function () {
    console.log('Express server listening on port ' + port);
  })
}
