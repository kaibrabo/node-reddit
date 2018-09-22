const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:3000';

describe('routes : static', () => {
    // Root route
    describe('GET /', () => {
        it('should return status code 200', (done) => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
    });

    describe('GET /kiki', () => {
        it('should return status code 200', (done) => {
            request.get(base + '/kiki', (err, res, body) => {
                expect(res.statusCode).toBe(200);
                expect(body).toBe('da sneaky');
                done();
            });
        });
    });
    // Another route
})