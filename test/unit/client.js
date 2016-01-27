"use strict";
var _ = require('lodash'),
  chai = require('chai'),
  sinon = require('sinon'),
  sinonChai = require('sinon-chai'),
  expect = chai.expect,
  proxyquire = require('proxyquire');

chai.use(sinonChai);

describe('client', function () {
  var client, socket;
  beforeEach(function () {
    socket = {};
    let Client = proxyquire('../../src/client', {'./socket': sinon.stub().returns(socket)});
    client = new Client();
  });
  it('is an uncalled spy', function () {
    expect(client).not.to.have.been.called;
  });
  it('returns and exposes its socket', function () {
    expect(client()).to.equal(socket);
    expect(client._socket).to.equal(socket);
  });
});
