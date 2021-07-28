var Products = require('../../entity/Products');

module.exports = class DeleteProductsByNameInDataBase {
  deleteProductsById(req, res, err) {
    Products.findByIdAndRemove(req.params.id, function (err, products) {
      if(products == null) return res.status(404).send("products not found.")
      if (err) return res.status(500).send("There was a problem deleting the products.");
      res.status(200).send("products: " + products.title + " was deleted.");
    });
  }
}