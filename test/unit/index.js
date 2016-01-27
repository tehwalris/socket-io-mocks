"use strict";
 var chai = require('chai'),
  sinon = require('sinon'),
  sinonChai = require('sinon-chai'),
  expect = chai.expect,
  proxyquire = require('proxyquire');

chai.use(sinonChai);

describe('index', function () {
  var index, deps;
  beforeEach(function () {
    deps = {'./socket': {}, './client': {}, './server': {}};
    index = proxyquire('../../src/index', deps);
  });
  it('provides socket, client and server', function () {
    expect(index.socket).to.equal(deps['./socket']);
    expect(index.client).to.equal(deps['./client']);
    expect(index.server).to.equal(deps['./server']);
  });
});

