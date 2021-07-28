var Orders = require('../../entity/Orders');

module.exports = class UpdateStreamerByNameInDataBase {
  updatOrdersById(req, res, err) {
    Orders.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, orders) {
      if(orders == null) return res.status(404).send("Orders not found.")
      if (err) return res.status(500).send("There was a problem updating the Orders.");
      res.status(200).send(orders);
    });
  }
}