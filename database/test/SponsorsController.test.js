const { isValidObjectId } = require('mongoose');
var express = require('./config/app test')
var request = require('supertest')(express);

describe('#SponsorsController', function () { //Contexto macro do teste
    it('#Acessa a URL no modo POST com dados corretos', function (done) {           //Função testada
        request.post("/sponsors")
        .send({
            "sponsors_id": 2,
            "sponsor_name": "req.body.sponsor_name",
            "sponsor_cpf" : "req.body.sponsor_cpf",
            "sponsor_cnpj": "req.body.sponsor_cnpj",
            "sponsor_email": "req.body.sponsor_email",
            "sponsor_password": "req.body.sponsor_password",
            "ad_id" : 3,
            "_id" : "6050f9bc602f2f25ccbf3e72"
        })                         
        .expect(200, done)
    });
    it('#Acessa a URL no modo GET', function (done) {           //Função testada
        request.get("/sponsors")                         //usando a classe supertest pra testar endpoints, no caso o /ads usando o get
        .set('Accept', 'application/json')
        .expect(200, done)
    });
    it('#Acessa a URL no modo GET passando ID correto', function (done) {           //Função testada
        request.get("/sponsors/6050f9bc602f2f25ccbf3e72")                         //usando a classe supertest pra testar endpoints, no caso o /ads usando o get
        .set('Accept', 'application/json')
        .expect(200, done);
    });
    it('#Acessa a URL no modo PUT com dados corretos', function (done) {           //Função testada
        request.put("/sponsors/6050f9bc602f2f25ccbf3e72")
        .send({
            'ad_total_time' : 80
        })                         
        .expect(200, done);
    });
    it('#Acessa a URL no modo DELETE com dados corretos', function (done) {           //Função testada
        request.delete("/sponsors/6050f9bc602f2f25ccbf3e72")
        .send()                         
        .expect(200, done);
        console.log("\033[1;32m ID = 6050f636a451282df4c40a09 deletado \033[0m")
    });
    it('#Acessa a URL no modo GET passando ID incorreto', function (done) {           //Função testada
        request.get("/sponsors/6050f9bc602f2f25ccbs3e72")                         //usando a classe supertest pra testar endpoints, no caso o /ads usando o get
        .set('Accept', 'application/json')
        .expect(404, done);
    });
    it('#Acessa a URL no modo PUT com dados incorretos', function (done) {           //Função testada
        request.put("/sponsors/6050f9bc602f2s25ccbf3e72")
        .send({
            'sponsor_email' : "emailnovo"
        })                         
        .expect(404, done);
        console.log("\033[1;32m ID = 6050f9bc602f2f25ccbf3e72 nao encontrado \033[0m")

    });
    it('#Acessa a URL no modo DELETE com dados incorretos', function (done) {           //Função testada
        request.delete("/sponsors/6050f9bc602f2f45ccbf3e72")
        .send()                         
        .expect(404, done);

        console.log("\033[1;32m ID = 6050f9bc602f2f25ccbf3e72 nao encontrado \033[0m")
    });
});