var Products = require('../../entity/Products');

module.exports = class GetProductsByNameInDataBase {
  getProductsById(req, res, err) {
    Products.findById(req.params.id, function (err, products) {
      if (!products) return res.status(404).send("No products found.");
      if (err) return res.status(500).send("There was a problem finding the products.");
      res.status(200).send(products);
    });
  }
}