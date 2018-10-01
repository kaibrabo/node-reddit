const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:3000';

describe('routes : static', () => {
    // Root route
    describe('GET /', () => {
        it('should return status code 200', () => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        }); 
        // https://stackoverflow.com/questions/22604644/jasmine-async-callback-was-not-invoked-within-timeout-specified-by-jasmine-defa
    });

    // Another route
})