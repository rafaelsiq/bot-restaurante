var Address = require('../../entity/Address');

module.exports = class DeleteAddressByNameInDataBase {
  deleteAddressById(req, res, err) {
    Address.findByIdAndRemove(req.params.id, function (err, address) {
      if(address == null) return res.status(404).send("address not found.")
      if (err) return res.status(500).send("There was a problem deleting the address.");
      res.status(200).send("address: " + address.title + " was deleted.");
    });
  }
}