var Orders = require('../../entity/Orders');

module.exports = class UpdateOrdersByNameInDataBase {
  insertOrders(req, res, err) {
    Orders.create({
      client : req.body.client,
      products : req.body.products,
      total : req.body.total
    },
      function (err, orders) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(orders + "\ncreated");
      });
  }
}