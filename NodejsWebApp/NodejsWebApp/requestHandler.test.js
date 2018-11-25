const assert = require('assert');
const requestHandler = require('./requestHandler');
const sinon = require('sinon');

describe('The request handler module', function () {
    it('asks for number if the user did not pass any', function () {
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
});
