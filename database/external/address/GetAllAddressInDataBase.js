var Address = require('../../entity/Address');

module.exports = class GetAllAddressInDataBase {
    getAllAddress(req, res, err)
    {
        Address.find({}, function (err, address) {
            if (err) return res.status(500).send("There was a problem finding the product.");
            res.status(200).send(address);
        });
    }
}