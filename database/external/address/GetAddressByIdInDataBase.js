var Address = require('../../entity/Address');

module.exports = class GetAddressByNameInDataBase {
  getAddressById(req, res, err) {
    Address.findById(req.params.id, function (err, address) {
      if (!address) return res.status(404).send("No address found.");
      if (err) return res.status(500).send("There was a problem finding the address.");
      res.status(200).send(address);
    });
  }
}