import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

declare global {
  namespace NodeJS {
    interface Global {
      signup(id?: string): string[];
    }
  }
}

jest.mock("../nats-wrapper.ts");

process.env.STRIPE_KEY =
  "sk_test_51IIS6PHN1Q1USPgM2OL8OvOz08Ry2BHfIiY2SBAffe53NUrJTlKH43Fvyon4rIb2Ed2wH9ODzMOyejrDZGJExqAI00lbwW1Y35";

let mongo: any;

beforeAll(async () => {
  process.env.JWT_KEY = "asdfgh";
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signup = (id?: string) => {
  // build a JWT payload. { id, email }
  const payload = {
    id: id || mongoose.Types.ObjectId().toHexString(),
    email: "test@gmail.com",
  };

  // create the JWT
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // build session object. { jwt: MY_JWT }
  const session = { jwt: token };

  // turn that session into JSON
  const sessionJSON = JSON.stringify(session);

  // talke JSON and encode it as base64
  const base64 = Buffer.from(sessionJSON).toString("base64");

  // return a string thats the cookie with the encoded data
  return [`express:sess=${base64}`];
};
