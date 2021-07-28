const { isValidObjectId } = require('mongoose');
var express = require('./config/app test')
var request = require('supertest')(express);

describe('#AdvertisementsController', function () { //Contexto macro do teste
    it('#Acessa a URL no modo POST com dados corretos', function (done) {           //Função testada
        request.post("/ads")
        .send({
            "_id" : "6050f9bc602f2f25ccbf3e72",
            "advertisements_id" : 1,
            "sponsor_id" : 2,
            "ad_title" : "ad de bancoswwwwww",
            "ad_total_time" : 30,
            "ad_content_image" : "eq.body.ad_content_image",
            "ad_content_video" : "req.body.ad_content_video",
            "ad_content_gif" : "req.body.ad_content_gif"
        })                         
        .expect(200, done)
    });
    it('#Acessa a URL no modo GET', function (done) {           //Função testada
        request.get("/ads")                         //usando a classe supertest pra testar endpoints, no caso o /ads usando o get
        .set('Accept', 'application/json')
        .expect(200, done)
    });
    it('#Acessa a URL no modo GET passando ID correto', function (done) {           //Função testada
        request.get("/ads/6050f9bc602f2f25ccbf3e72")                         //usando a classe supertest pra testar endpoints, no caso o /ads usando o get
        .set('Accept', 'application/json')
        .expect(200, done);
    });
    it('#Acessa a URL no modo PUT com dados corretos', function (done) {           //Função testada
        request.put("/ads/6050f9bc602f2f25ccbf3e72")
        .send({
            'ad_total_time' : 80
        })                         
        .expect(200, done);
    });
    it('#Acessa a URL no modo DELETE com dados corretos', function (done) {           //Função testada
        request.delete("/ads/6050f9bc602f2f25ccbf3e72")
        .send()                         
        .expect(200, done);
        console.log("\033[1;32m ID = 6050f636a451282df4c40a09 deletado \033[0m")
    });
    it('#Acessa a URL no modo GET passando ID incorreto', function (done) {           //Função testada
        request.get("/ads/6050f9bc602f2f25ccbs3e72")                         //usando a classe supertest pra testar endpoints, no caso o /ads usando o get
        .set('Accept', 'application/json')
        .expect(404, done);
    });
    it('#Acessa a URL no modo PUT com dados incorretos', function (done) {           //Função testada
        request.put("/ads/6050f9bc602f2s25ccbf3e72")
        .send({
            'ad_total_time' : 80
        })                         
        .expect(404, done);
        console.log("\033[1;32m ID = 6050f9bc602f2f25ccbf3e72 nao encontrado \033[0m")

    });
    it('#Acessa a URL no modo DELETE com dados incorretos', function (done) {           //Função testada
        request.delete("/ads/6050f9bc602f2f45ccbf3e72")
        .send()                         
        .expect(404, done);

        console.log("\033[1;32m ID = 6050f9bc602f2f25ccbf3e72 nao encontrado \033[0m")
    });
});