var Clients = require('../../entity/Clients');

module.exports = class UpdateClientsByNameInDataBase {
  insertClients(req, res, err) {
    Clients.create({
      name : req.body.name,
      phone : req.body.phone,
      payment : req.body.payment,
      address : req.body.address

    },
      function (err, clients) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(clients + "\ncreated");
      });
  }
}