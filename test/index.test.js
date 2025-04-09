const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return Hello, Updated Docker CI/CD!', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, Updated Docker CI/CD!')
      .end(done);
  });
});
