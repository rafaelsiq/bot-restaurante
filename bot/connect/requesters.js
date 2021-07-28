request = require('request');
method = 'GET'

options = {
  'method': method,
  'url': 'http://localhost:4242/products',
  'headers': {
    'Content-Type': 'application/json',
    'Cookie': 'connect.sid=s%3AcBObffXBlG8OwYhRzAY4IuaIrz7RNvgt.lhkIe7xkZACyLe6GXCtLNds6hiyZhz22ypElRJv7XLA'
  },
  body: JSON.stringify({
    "_id": 3,
    "title": "teste titulo 11",
    "class": "categoria do produto",
    "value": "10 reais"
  })

};



module.exports = function get_request(method, endpoint){

    this.options.url ='http://localhost:4242/' + endpoint
    this.options.method = method
    answer = '';
    request(options, function (error, response) {
      if (error) throw new Error(error);
      answer = response.body;
    });
    return answer

}

module.exports = function get_request_by_id(method, endpoint, id){

  this.options.url ='http://localhost:4242/' + endpoint+'/'+id
  this.options.method = method
  answer = '3333';

  request(options, function (error, response) {
    if (error) throw new Error(error);
    answer = response.body;
    console.log(response.body)
  });
  return answer
}