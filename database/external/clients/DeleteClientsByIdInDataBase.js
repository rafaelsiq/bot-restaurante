var Clients = require('../../entity/Clients');

module.exports = class DeleteClientsByNameInDataBase {
  deleteClientsById(req, res, err) {
    Clients.findByIdAndRemove(req.params.id, function (err, clients) {
      if(clients == null) return res.status(404).send("clients not found.")
      if (err) return res.status(500).send("There was a problem deleting the clients.");
      res.status(200).send("clients: " + clients.title + " was deleted.");
    });
  }
}