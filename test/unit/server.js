"use strict";
var _ = require('lodash'),
  chai = require('chai'),
  sinon = require('sinon'),
  sinonChai = require('sinon-chai'),
  expect = chai.expect,
  proxyquire = require('proxyquire');

chai.use(sinonChai);

describe('server', function () {
  var Server, socket;
  beforeEach(function () {
    socket = {};
    Server = new (proxyquire('../../src/server', {'./socket': sinon.stub().returns(socket)}))();
  });
  it('is an uncalled spy', function () {
    expect(Server).not.to.have.been.called;
  });
  describe('io object', function () {
    var io, handler;
    beforeEach(function () {
      io = new Server(), handler = sinon.spy();
    });
    it('allows registering a connection handler', function () {
      expect(io._onConnect).to.be.undefined;
      io.on('connection', handler);
      expect(io._onConnect).to.equal(handler);
      expect(handler).not.to.have.been.called;
    });
    it('does not allow registering multiple connection handlers', function () {
      expect(io._onConnect).to.be.undefined;
      io.on('connection', handler);
      expect(io._onConnect).to.equal(handler);
    });
    it('calls connection handler with passed socket', function () {
      io.on('connection', handler);
      io._connect(socket);
      expect(handler).to.have.been.calledWith(socket);
    });
    it('returns socket from connection call', function () {
      io.on('connection', handler);
      expect(io._connect(socket)).to.equal(socket);
    });
    it('creates a new socket on connection if not passed', function () {
      io.on('connection', handler);
      expect(io._connect()).to.equal(socket);
      expect(handler).to.have.been.calledWith(socket);
    });
    it('has a close spy', function () {
      expect(io.close).not.to.have.been.called;
    });
  });
});
