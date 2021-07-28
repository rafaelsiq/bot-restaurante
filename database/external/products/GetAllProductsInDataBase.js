var Products = require('../../entity/Products');

module.exports = class GetAllProductsInDataBase {
    getAllProducts(req, res, err)
    {
        Products.find({}, function (err, products) {
            if (err) return res.status(500).send("There was a problem finding the product.");
            res.status(200).send(products);
        });
    }
}