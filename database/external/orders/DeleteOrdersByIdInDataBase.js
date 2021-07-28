var Orders = require('../../entity/Orders');

module.exports = class DeleteOrdersByNameInDataBase {
  deleteOrdersById(req, res, err) {
    Orders.findByIdAndRemove(req.params.id, function (err, orders) {
      if(orders == null) return res.status(404).send("orders not found.")
      if (err) return res.status(500).send("There was a problem deleting the orders.");
      res.status(200).send("orders: " + orders.title + " was deleted.");
    });
  }
}