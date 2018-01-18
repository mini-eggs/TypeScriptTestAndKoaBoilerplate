import test from "supertest";
import server from "../server";

it("Home route responds with `Hello, World`", done => {
  test(server.callback())
    .get("/")
    .expect("Hello, World")
    .end(done);
});
