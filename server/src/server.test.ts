import request from 'supertest';
import server from './server';

describe("Express GraphQL server", () => {
  it("Response the GET method in the root path `/`", done => {
    request(server)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('<h1>Forbidden!</h1>');
        done();
      });
  });

  it("Response the GET method in other path `/other`", done => {
    request(server)
      .get("/other")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('<h1>Forbidden!</h1>');
        done();
      });
  });

  it("Response the GET method in `/graphql` path, withot error 400", done => {
    request(server)
      .get("/graphql")
      .then(response => {
        expect(response.statusCode).toBe(400);
        expect(response.body.errors[0].message).toBe('Must provide query string.')
        done();
      });
  });

  it("Response the GET method in `/graphql` path, with param `23`", done => {
    const query = `
      query {
        words(term: "23")
      }
    `;

    request(server)
      .post("/graphql")
      .send({ query })
      .then(response => {
        const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
        expect(response.statusCode).toBe(200);
        expect(response.body.data.words).toStrictEqual(expected);
        done();
      });
  });
});
