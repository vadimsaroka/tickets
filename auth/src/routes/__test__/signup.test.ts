import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successfil signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "12345678" })
    .expect(201);
});

it("returns a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "test.com", password: "12345678" })
    .expect(400);
});

it("returns a 400 with an invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "123" })
    .expect(400);
});

it("returns a 400 with missing email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "", password: "12345678" })
    .expect(400);
});

it("returns a 400 with missing password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "" })
    .expect(400);
});

it("returns a 400 with missing email and password", async () => {
  return request(app).post("/api/users/signup").send({}).expect(400);
});

it("disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "12345678" })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "12345678" })
    .expect(400);
});

it("sets a cookie after succesful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "12345678" })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined;
});
