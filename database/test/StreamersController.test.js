const { isValidObjectId } = require('mongoose');
var express = require('./config/app test')
var request = require('supertest')(express);

describe('#StreamersController', function () { //Contexto macro do teste
    it('#Acessa a URL no modo POST com dados corretos', function (done) {           //Função testada
        request.post("/streamers")
        .send({
            "_id" : "6050f9bc602f2f25ccbf3e72",
            "streamer_name": "req.body.streamer_name",
            "streamer_cpf": "req.body.streamer_cpf",
            "streamer_cnpj": "req.body.streamer_cnpj",
            "streamer_url": "req.body.streamer_url",
            "streamer_email": "req.body.streamer_email",
            "streamer_id": 2,
            "ad_id": 4
        })                         
        .expect(200, done)
    });
    it('#Acessa a URL no modo GET', function (done) {           //Função testada
        request.get("/streamers")                         //usando a classe supertest pra testar endpoints, no caso o /ads usando o get
        .set('Accept', 'application/json')
        .expect(200, done)
    });
    it('#Acessa a URL no modo GET passando ID correto', function (done) {           //Função testada
        request.get("/streamers/6050f9bc602f2f25ccbf3e72")                         //usando a classe supertest pra testar endpoints, no caso o /ads usando o get
        .set('Accept', 'application/json')
        .expect(200, done);
    });
    it('#Acessa a URL no modo PUT com dados corretos', function (done) {           //Função testada
        request.put("/streamers/6050f9bc602f2f25ccbf3e72")
        .send({
            'ad_total_time' : 80
        })                         
        .expect(200, done);
    });
    it('#Acessa a URL no modo DELETE com dados corretos', function (done) {           //Função testada
        request.delete("/streamers/6050f9bc602f2f25ccbf3e72")
        .send()                         
        .expect(200, done);
        console.log("\033[1;32m ID = 6050f636a451282df4c40a09 deletado \033[0m")
    });
    it('#Acessa a URL no modo GET passando ID incorreto', function (done) {           //Função testada
        request.get("/streamers/6050f9bc602f2f25ccbs3e72")                         //usando a classe supertest pra testar endpoints, no caso o /ads usando o get
        .set('Accept', 'application/json')
        .expect(404, done);
    });
    it('#Acessa a URL no modo PUT com dados incorretos', function (done) {           //Função testada
        request.put("/streamers/6050f9bc602f2s25ccbf3e72")
        .send({
            'ad_total_time' : 80
        })                         
        .expect(404, done);
        console.log("\033[1;32m ID = 6050f9bc602f2f25ccbf3e72 nao encontrado \033[0m")

    });
    it('#Acessa a URL no modo DELETE com dados incorretos', function (done) {           //Função testada
        request.delete("/streamers/6050f9bc602f2f45ccbf3e72")
        .send()                         
        .expect(404, done);

        console.log("\033[1;32m ID = 6050f9bc602f2f25ccbf3e72 nao encontrado \033[0m")
    });
});