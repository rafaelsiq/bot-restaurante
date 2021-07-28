var Address = require('../../entity/Address');

module.exports = class UpdateStreamerByNameInDataBase {
  updatAddressById(req, res, err) {
    Address.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, address) {
      if(address == null) return res.status(404).send("Address not found.")
      if (err) return res.status(500).send("There was a problem updating the Address.");
      res.status(200).send(address);
    });
  }
}