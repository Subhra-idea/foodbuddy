const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();
const user = require("../models/User");
const secret = "myNameIsSuBhRa12!@#";

router.post(
  "/createuser",
  body("name").isLength({ min: 3 }),
  body("password", "Incorrect password").isLength({ min: 3 }),
  body("email").isEmail(),
  async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      try {
        await user.create({
          name: req.body.name,
          password: secPass,
          email: req.body.email,
          location: req.body.location,
        });
        res.json({
          success: true,
          user: {
            name: req.body.name,
            password: secPass,
            email: req.body.email,
            location: req.body.location,
          },
        });
      } catch (error) {
        console.log(error);
        res.json({
          success: false,
        });
      }
    } else {
      return res.status(400).json({ errors: result.array });
    }
  }
);

router.post(
  "/loginuser",

  body("password", "Incorrect password").isLength({ min: 3 }),
  body("email").isEmail(),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array });
    } else {
      try {
        let email = req.body.email;
        let userData = await user.findOne({ email: email });
        console.log(userData);
        // res.json(userData);
        if (!userData) {
          return res.status(400).json({
            errors: "Try again with a valid email address",
          });
        }
        const passwordMatch = await bcrypt.compare(
          req.body.password,
          userData.password
        );

        console.log(passwordMatch);
        if (!passwordMatch) {
          return res.status(400).json({
            errors: "Incorrect password",
          });
        }
        const data = {
          user: {
            id: userData.id,
          },
        };
        const authToken = jwt.sign(data, secret);
        return res.json({
          success: true,
          authToken: authToken,
        });
      } catch (error) {
        console.log(error);
        res.json({
          success: false,
        });
      }
    }
  }
);
module.exports = router;
