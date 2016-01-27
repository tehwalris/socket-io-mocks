"use strict";
var _ = require('lodash'),
  chai = require('chai'),
  sinon = require('sinon'),
  sinonChai = require('sinon-chai'),
  expect = chai.expect,
  proxyquire = require('proxyquire'),
  Socket = require('../../src/socket');

chai.use(sinonChai);

describe('socket', function () {
  var socket;
  beforeEach(function () {
    socket = new Socket();
  });
  it('has uncalled emit spy and empty handler list', function () {
    expect(socket.emit).not.to.have.been.called;
    expect(socket._handlers).to.eql({});
  });
  it('adds handler when subscribed', function () {
    var handler = function () {};
    socket.on('testEvent', handler);
    expect(socket._handlers.testEvent).to.equal(handler);
  });
  it('throws if second handler registered, keeping original handler', function () {
    var handlers = [function () {}, function () {}];
    socket.on('testEvent', handlers[0]);
    expect(() => socket.on('testEvent', handlers[1])).to.throw();
    expect(socket._handlers.testEvent).to.equal(handlers[0]);
  });
});
