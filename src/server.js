"use strict";
var sinon = require('sinon'),
  Socket = require('./socket');

class IO {
  constructor () {
  }

  _connect (socket) {
    socket = socket || new Socket();
    this._onConnect(socket);
    return socket;
  }

  on (event, callback) {
    if(event !== 'connection')
      throw new Error('Only the "connection" event is supported.');
    if(this._onConnect)
      throw new Error('Connection handler already registered.');
    this._onConnect = callback;
  }
}

function Server () {
  let server = sinon.stub();
  server._io = new IO();
  server.returns(server._io);
  return server;
}

module.exports = Server;
