var Products = require('../../entity/Products');

module.exports = class UpdateProductsByNameInDataBase {
  insertProducts(req, res, err) {
    Products.create({
      title : req.body.title,
      class : req.body.class,
      value : req.body.value

    },
      function (err, products) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(products + "\ncreated");
      });
  }
}