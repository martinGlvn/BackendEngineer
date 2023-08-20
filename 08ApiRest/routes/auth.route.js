import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";
const router = express.Router();

// register =>
router.post(
  "/register",
  [
    // email
    body("email", "🔥 Incorrect format email 🔥")
      .trim()
      .isEmail()
      .normalizeEmail(),
    // lenght pass
    body("password", "🔥 Min 6 characters 🔥").trim().isLength({ min: 6 }),
    // math pass & repass
    body("password", "🔥 Incorrect format pass 🔥").custom((value, { req }) => {
      if (value !== req.body.repassword) {
        throw new Error("🔥 Password no math 🔥");
      }
      return value;
    }),
  ],
  validationResultExpress,
  register
);
// login =>
router.post(
  "/login",
  [
    body("email", "🔥 Incorrect format email 🔥")
      .trim()
      .isEmail()
      .normalizeEmail(),
    // lenght pass
    body("password", "🔥 Min 6 characters 🔥").trim().isLength({ min: 6 }),
  ],
  validationResultExpress,
  login
);

export default router;
