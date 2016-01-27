"use strict";
var sinon = require('sinon'),
  Socket = require('./socket');

function Client () {
  let client = sinon.stub();
  client._socket = new Socket();
  client.returns(client._socket);
  return client;
}

module.exports = Client;
