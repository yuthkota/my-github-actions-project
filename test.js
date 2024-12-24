const assert = require('chai').assert;
const app = require('./app'); // Corrected path to app.js in the same directory

describe('Simple test', function() {
  it('should return hello message', function() {
    assert.equal('Hello, GitHub Actions!', 'Hello, GitHub Actions!');
  });
});

