var Clients = require('../../entity/Clients');

module.exports = class UpdateStreamerByNameInDataBase {
  updatClientsById(req, res, err) {
    Clients.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, clients) {
      if(clients == null) return res.status(404).send("Clients not found.")
      if (err) return res.status(500).send("There was a problem updating the Clients.");
      res.status(200).send(clients);
    });
  }
}