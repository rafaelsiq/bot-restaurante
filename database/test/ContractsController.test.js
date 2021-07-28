const { isValidObjectId } = require('mongoose');
var express = require('./config/app test')
var request = require('supertest')(express);

describe('#ContractsController', function () { //Contexto macro do teste
    it('#Acessa a URL no modo POST com dados corretos', function (done) {           //Função testada
        request.post("/contracts")
        .send({
            "_id" : "6050f9bc602f2f25ccbf3e72",
            "contracts_id": 1,
            "sponsor_id" : 2,
            "ad_title": "req.body.ad_title",
            "ad_total_time" : "req.body.ad_total_time",
            "ad_content_image" : "req.body.ad_content_image",
            "ad_content_video" : "req.body.ad_content_video",
            "ad_content_gif" : "req.body.ad_content_gif",
        })                         
        .expect(200, done)
    });
    it('#Acessa a URL no modo GET', function (done) {           //Função testada
        request.get("/contracts")                         //usando a classe supertest pra testar endpoints, no caso o /ads usando o get
        .set('Accept', 'application/json')
        .expect(200, done)
    });
    it('#Acessa a URL no modo GET passando ID correto', function (done) {           //Função testada
        request.get("/contracts/6050f9bc602f2f25ccbf3e72")                         //usando a classe supertest pra testar endpoints, no caso o /ads usando o get
        .set('Accept', 'application/json')
        .expect(200, done);
    });
    it('#Acessa a URL no modo PUT com dados corretos', function (done) {           //Função testada
        request.put("/contracts/6050f9bc602f2f25ccbf3e72")
        .send({
            'ad_total_time' : 80
        })                         
        .expect(200, done);
    });
    it('#Acessa a URL no modo DELETE com dados corretos', function (done) {           //Função testada
        request.delete("/contracts/6050f9bc602f2f25ccbf3e72")
        .send()                         
        .expect(200, done);
        console.log("\033[1;32m ID = 6050f636a451282df4c40a09 deletado \033[0m")
    });
    it('#Acessa a URL no modo GET passando ID incorreto', function (done) {           //Função testada
        request.get("/contracts/6050f9bc602f2f25ccbs3e72")                         //usando a classe supertest pra testar endpoints, no caso o /ads usando o get
        .set('Accept', 'application/json')
        .expect(404, done);
    });
    it('#Acessa a URL no modo PUT com dados incorretos', function (done) {           //Função testada
        request.put("/contracts/6050f9bc602f2s25ccbf3e72")
        .send({
            'ad_total_time' : 80
        })                         
        .expect(404, done);
        console.log("\033[1;32m ID = 6050f9bc602f2f25ccbf3e72 nao encontrado \033[0m")

    });
    it('#Acessa a URL no modo DELETE com dados incorretos', function (done) {           //Função testada
        request.delete("/contracts/6050f9bc602f2f45ccbf3e72")
        .send()                         
        .expect(404, done);

        console.log("\033[1;32m ID = 6050f9bc602f2f25ccbf3e72 nao encontrado \033[0m")
    });
});