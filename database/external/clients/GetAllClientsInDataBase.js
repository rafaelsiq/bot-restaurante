var Clients = require('../../entity/Clients');

module.exports = class GetAllClientsInDataBase {
    getAllClients(req, res, err)
    {
        Clients.find({}, function (err, clients) {
            if (err) return res.status(500).send("There was a problem finding the product.");
            res.status(200).send(clients);
        });
    }
}