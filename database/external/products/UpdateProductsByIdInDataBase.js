var Products = require('../../entity/Products');

module.exports = class UpdateStreamerByNameInDataBase {
  updatProductsById(req, res, err) {
    Products.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, products) {
      if(products == null) return res.status(404).send("Products not found.")
      if (err) return res.status(500).send("There was a problem updating the Products.");
      res.status(200).send(products);
    });
  }
}