var Orders = require('../../entity/Orders');

module.exports = class GetAllOrdersInDataBase {
    getAllOrders(req, res, err)
    {
        Orders.find({}, function (err, orders) {
            if (err) return res.status(500).send("There was a problem finding the product.");
            res.status(200).send(orders);
        });
    }
}