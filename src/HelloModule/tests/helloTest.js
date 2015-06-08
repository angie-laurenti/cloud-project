var request = require('supertest');
var app     = require('../../../app/app');

describe('HelloModule', function(){
    describe('/hello/Ysance', function(){
        it('should return Hello Ysance', function(done){
            request(app)
            .get('/hello/Ysance')
            .send({name:'Ysance'})
            .expect(200)
            .expect("Hello Ysance !\n")
            .end(done)
        });
    });
});
