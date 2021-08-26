
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const host = "http://localhost:8080";

describe('API tests', () => {
    it('checking server health', (done) => {
        chai.request(host)
            .get('/')
            .end(function (error, response, body) {
                if (error) {
                    done(error);
                } else {
                    done();
                }
            })
    });

    it('should create receipt for vehicle', (done) => {
        chai.request(host)
            .post('/tollplaza/generateReceipt')
            .set('content-type', 'application/json')
            .send({
                "vehicleRegNo": "4134",
                "isReturn": "true"
            })
            .end(function (error, response, body) {
                if (error) {
                    done(error);
                } else {
                    done();
                }
            });
    });


    it('should validate receipt for vehicle', (done) => {
        chai.request(host)
            .post('/tollplaza/validateReceipt')
            .set('content-type', 'application/json')
            .send({
                "receiptId": "5a3e5722-f4d1-4efd-a33a-a7a0e14369a8",
            })
            .end(function (error, response, body) {
                if (error) {
                    done(error);
                }else {
                    done();
                }
            });
    });

});





