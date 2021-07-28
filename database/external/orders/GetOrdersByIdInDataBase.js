var Orders = require('../../entity/Orders');

module.exports = class GetOrdersByNameInDataBase {
  getOrdersById(req, res, err) {
    Orders.findById(req.params.id, function (err, orders) {
      if (!orders) return res.status(404).send("No orders found.");
      if (err) return res.status(500).send("There was a problem finding the orders.");
      res.status(200).send(orders);
    });
  }
}