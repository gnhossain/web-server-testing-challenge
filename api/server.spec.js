const request = require("supertest");

const server = require("./server.js");

it("should set db environment to testing", function() {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("server", function() {
  describe("get/", function() {
    it("should return 200 OK", function() {
      // run the server
      // make a GET request to /
      // see that the http code of response is 200
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return JSON formatted response", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it("should return an 'api' property with the value 'up' inside the body", function() {
      return request(server)
        .get("/")
        .then(res => {
          // expect(res.body).toEqual({ api: "up" });
          expect(res.body.api).toBe("up");
        });
    });
  });
});

// the endpoint returns the correct http status code based on input
// the endpont returns the right data format (json in our case)
// the endpoint returns the right data in the body based on input
