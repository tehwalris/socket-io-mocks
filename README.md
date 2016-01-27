# socket-io-mocks
[![Build Status](https://travis-ci.org/tehwalris/walris-central.svg?branch=master)](https://travis-ci.org/tehwalris/walris-central)

Basic mocks for [socket.io](http://socket.io/) using [sinon](http://sinonjs.org/).

Server:
```javascript
var Server = require('socket-io-mocks').server;
let io = new Server() /*this is a sinon spy*/, handler = sinon.spy();
io.on('connection', handler);
let socket = io._connect(); //See socket mock below
expect(handler.calledWith(socket)).to.be.true;
```

Client:
```javascript
var Client = require('socket-io-mocks').client;
let socket = new Client('testUrl');
expect(Client.calledWith('testUrl')).to.be.true; //it's a sinon spy
expect(socket).to.equal(Client._socket); //See socket mock below
```

Socket:
```javascript
var Socket = require('socket-io-mocks').socket;
let socket = new Socket();
socket.on('test', function (prop) {console.log('Walruses are ' + prop);});
socket._handlers.test('awesome'); //Prints: Walruses are awesome
```

For a few more small things, see the [tests](test/unit).
