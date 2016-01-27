"use strict";
var sinon = require('sinon');

class Socket {
  constructor () {
    this._handlers = {};
    this.emit = sinon.spy();
  }

  on (event, callback) {
    if(this._handlers[event])
      throw new Error('Socket mock does not support multiple handlers.');
    this._handlers[event] = callback;
  }
}

module.exports = Socket;
