var Address = require('../../entity/Address');

module.exports = class UpdateAddressByNameInDataBase {
  insertAddress(req, res, err) {
    Address.create({
      content : req.body.content
    },
      function (err, address) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(address + "\ncreated");
      });
  }
}