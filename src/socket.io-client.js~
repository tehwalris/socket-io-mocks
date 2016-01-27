"use strict";
var _ = require('lodash'),
  sinon = require('sinon');

class Socket {
  constructor () {
    this._handlers = {};
    this.emit = sinon.spy();
  }

  on (event, callback) {
    if(!_.isUndefined(this._handlers[event]))
      throw new Error('Socket mock does not support multiple handlers.');
    this._handlers[event] = callback;
  }
}

class SocketClientMock {
  constructor () {
    this.socket = new Socket();
    this.constructorStub = sinon.stub().returns(this.socket);
  }
}

module.exports = SocketClientMock;
