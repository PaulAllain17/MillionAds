const assert = require('assert');
const requestHandler = require('./requestHandler');
const sinon = require('sinon');

describe('The request handler module', () => {
    it('asks for number if the user did not pass any', () => {
        const resWithSpy = {
            send: sinon.spy()
        };
        const req = {
            params: {
                number: ""
            }
        };
        requestHandler.process(req, resWithSpy);
        assert.ok(resWithSpy.send.calledWith('Please give a number.'));
    });

    it('asks for number if the user passed something else than a number', () => {
        const resWithSpy = {
            send: sinon.spy()
        };
        const req = {
            params: {
                number: 'test2'
            }
        };
        requestHandler.process(req, resWithSpy);
        assert.ok(resWithSpy.send.calledWith('Please give a number.'));
    });

    it('asks for a number greater or equal to 2', () => {
        const resWithSpy = {
            send: sinon.spy()
        };
        const req = {
            params: {
                number: '1'
            }
        };
        requestHandler.process(req, resWithSpy);
        assert.ok(resWithSpy.send.calledWith('Your number must be greater or equal to 2.'));
    });

    it('sends the closest prime numbers if the user provides a number', () => {
        const resWithSpy = {
            send: sinon.spy()
        };
        const req = {
            params: {
                number: '4'
            }
        };
        requestHandler.process(req, resWithSpy);
        assert.ok(resWithSpy.send.calledWith('The lower prime number is: 3 The higher prime number is: 5'));
    });
});
