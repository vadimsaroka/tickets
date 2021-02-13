import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";

import {
  validateReuest,
  RequestValidationError,
  BadRequestError,
} from "@vsitickets/common";
import { User } from "../models/user";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 6, max: 30 })
      .withMessage("Password must be between 6 and 30 characters"),
  ],
  validateReuest,
  async (req: Request, res: Response) => {
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //   throw new RequestValidationError(errors.array());
    // }

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email in use");
    }

    const user = User.build({ email, password });
    await user.save();

    // generate JWT
    const userJWT = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );

    // store in on session object
    req.session = {
      jwt: userJWT,
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
