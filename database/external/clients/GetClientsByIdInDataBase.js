var Clients = require('../../entity/Clients');

module.exports = class GetClientsByNameInDataBase {
  getClientsById(req, res, err) {
    Clients.findById(req.params.id, function (err, clients) {
      if (!clients) return res.status(404).send("No clients found.");
      if (err) return res.status(500).send("There was a problem finding the clients.");
      res.status(200).send(clients);
    });
  }
}