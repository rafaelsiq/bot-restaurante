const fs = require('fs');
const venom = require('venom-bot');
const Labels = require('./labels');
request = require('request');

var labels = new Labels();
var ordering = false;
var addingproduct = false;
var startingorder = false;
var informingaddress = false;
var informingpayment = false;
var informingname = false;
var name = "";
var finalizar = false;
var cancelar = false;
var products = [];
var bodies;




async function get_request_by_id(endpoint, id) {
	var url = 'http://localhost:4242/' + endpoint + '/' + id

	var options = {
		'url': url,
		'method': 'GET',
		'headers': {
			'Content-Type': 'application/json',
			'Cookie': 'connect.sid=s%3AcBObffXBlG8OwYhRzAY4IuaIrz7RNvgt.lhkIe7xkZACyLe6GXCtLNds6hiyZhz22ypElRJv7XLA'
		}
	};

	return bodies
}

async function productindatabase(method, endpoint, product, client, message, labels) {
	try {
		get_request_by_id(method, endpoint, product, async function (responsebody) {
			try {
				bodies = JSON.parse(responsebody);
			} catch {
				client.sendText(message.from, labels.start_order_flow_product_not_found)
			}
			console.log(bodies)
			
			if (bodies != labels.no_product_found) { 
				products.push(bodies)
				await client.sendText(message.from, (bodies.title +" foi adicionado ao pedido!"))
			}
			else {
				await client.sendText(message.from, labels.start_order_flow_product_not_found)
			}
		})
	}
	catch {
		return "Error"
	}
};

async function set_order_in_database(products, cliente, endpoint, values, callback){
	var url = 'http://localhost:4242/' +endpoint
	var options = {
		'method': 'POST',
		'url': url,

		body: JSON.stringify({
			client : cliente,
			products : products,
			total : values
		}),
		'headers': {
			'Content-Type': 'application/json'
		  }
	}
	
	request(options, function (error, response) {
	  if (error) throw new Error(error);
	  callback(response.body);
	});
}

venom.create().then(client => {
	client.onMessage(async message => {
		if (message.type == 'chat') {
			console.log("alllow")
			await client.sendText(message.from, 'hellow')
			
			if (message.chat.name == "Stage Boy") {
				await client.sendText(message.from, 'hellow')
				console.log("alllow")
				try {
					if (ordering) {
						var command = message.content.toString().toUpperCase();
						if (addingproduct) {
							try {
								if (finalizar) {
									command = "FINALIZAR"
									
								}
								else if (cancelar) {
									command = "CANCELAR"
								}
							}
							catch {
								console.log('me ajuda ai')
							}
							if (command == "CANCELAR") {
								cancelingorder = true;
								addingproduct = false;
								ordering = false;
							}
							else if (command == "FINALIZAR") {
								finalizar = true;
								if (informingname) {
									payment = message.content;
									phone = message.chatId.toString();

									await client.sendText(message.from, 'Segue abaixo um resumo do que foi solicitado')
									var resume = ""
									var values = 0.0;
									
									products.forEach(element => {
										resume = resume + element.title + " - " + element.value + '\n'
										values = values + parseFloat(element.value)
									});

									await client.sendText(message.from, resume)
									await client.sendText(message.from, 'Valor total: '+ values)
									await set_order_in_database(products, cliente,'orders',  values, async function (cadastro) {
										try {
											cadastro = JSON.parse(cadastro);
										} catch {
											console.log('impossivel cadastrar')
										}
										console.log(cadastro.id.substr(0, 5))
									})
									
									await client.sendText(message.from, (name.toString() + "! Obrigado por escolher a " + labels.company_name + ". Seu pedido é o " + ordering.id));

								}
								else if (informingpayment) {
									client.sendText(message.from, labels.set_up_your_name)
									informingname = true

								}
								else if (informingaddress) {
									address = message.content;
									await client.sendText(message.from, labels.set_up_your_payment_method)
									informingpayment = true;
								}
								else {
									await client.sendText(message.from, labels.set_up_your_address)
									informingaddress = true;
									productindb = false
								}

							}
							else {
								productindatabase('products', message.content, client, message, products, labels)
							}
						}
					}

					else if (message.content.toString().toUpperCase() == "INICIAR") {
						if (startingorder) {
							await client.sendText(message.from, labels.alread_ordering)
						}
						else {
							await client.sendText(message.from, labels.start_order_message)
							await client.sendText(message.from, labels.start_order_flow_cancel)
							await client.sendText(message.from, labels.start_order_flow_finalizar)

							startingorder = true
							timeout = (60 * 5);
							ordering = true;
							addingproduct = true;
						}
					}
					else {
						await client.sendText(message.from, labels.not_start_order_message)
					}

				} catch (err) {
					await client.sendText(message.from, err)
				}
			}
		} else {
		await client.sendText(message.from, (" "))
		}

	})
})