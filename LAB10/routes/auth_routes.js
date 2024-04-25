//import express, express router as shown in lecture code
import express from "express";
import validate from "../helpers.js";
import { ObjectId } from "mongodb";
import userMethodsDB from "../data/users.js";
import bcrypt from "bcrypt";
import { Router } from "express";
import { users } from "../config/mongoCollections.js";
import session from "express-session";
import middleware from "../middleware.js";

// const saltRounds = 10;
// let hash = null;
const router = Router();


router.use(middleware.logRequests);
router.use('/login', middleware.checkLoginRoute);
router.use('/register', middleware.checkRegisterRoute);
router.use('/user', middleware.checkUserRoute);
router.use('/admin', middleware.checkAdminRoute);
router.use('/logout', middleware.checkLogoutRoute);

router.route("/").get(async (req, res) => {
  //code here for GET THIS ROUTE SHOULD NEVER FIRE BECAUSE OF MIDDLEWARE #1 IN SPECS.
  return res.json({ error: "YOU SHOULD NOT BE HERE!" });
});

router.route("/register").post(async (req, res) => {
  const createUserData = req.body;

  // Check if all required fields are provided
  const requiredFields = [
    "firstName",
    "lastName",
    "username",
    "password",
    "confirmPassword",
    "favoriteQuote",
    "themePreference",
    "role",
  ];
  for (const field of requiredFields) {
    if (!createUserData[field]) {
      return res
        .status(400)
        .json({ Error: `Field '${field}' is missing in the request body` });
    }
  }

  // Validate firstName
  if (
    createUserData.firstName.length < 2 ||
    createUserData.firstName.length > 25
  ) {
    return res.status(400).json({
      Error:
        "Invalid firstName. It should be a valid string with a length between 2 and 25 characters",
    });
  }

  // Validate lastName
  if (
    // !validate.checkIfString(createUserData.lastName)
    createUserData.lastName.length < 2 ||
    createUserData.lastName.length > 25
  ) {
    return res.status(400).json({
      Error:
        "Invalid lastName. It should be a valid string with a length between 2 and 25 characters",
    });
  }

  // Validate username
  if (
    // !validate.checkIfString(createUserData.username) ||
    createUserData.username.length < 5 ||
    createUserData.username.length > 10
  ) {
    return res.status(400).json({
      Error:
        "Invalid username. It should be a valid string with a length between 5 and 10 characters",
    });
  }

  // // Validate password
  if (!validate.validatePassword(createUserData.password)) {
    return res.status(400).json({
      Error:
        "Invalid password. It should be a valid string with at least one uppercase character, one number, and one special character, and a minimum length of 8 characters",
    });
  }

  // // Validate confirmPassword
  if (createUserData.password !== createUserData.confirmPassword) {
    return res.status(400).json({ Error: "Passwords do not match" });
  }

  // // Validate favoriteQuote
  if (
    // !validate.checkIfString(createUserData.favoriteQuote) ||
    createUserData.favoriteQuote.length < 20 ||
    createUserData.favoriteQuote.length > 255
  ) {
    return res.status(400).json({
      Error:
        "Invalid favoriteQuote. It should be a valid string with a length between 20 and 255 characters",
    });
  }

  // // Validate themePreference
  if (
    createUserData.themePreference !== "light" &&
    createUserData.themePreference !== "dark"
  ) {
    return res.status(400).json({
      Error: "Invalid themePreference. It should be either 'light' or 'dark'",
    });
  }

  // // // Validate role
  if (createUserData.role !== "admin" && createUserData.role !== "user") {
    return res
      .status(400)
      .json({ Error: "Invalid role. It should be either 'admin' or 'user'" });
  }

  try {
    // Call registerUser DB function
    const newUser = await userMethodsDB.registerUser(
      createUserData.firstName,
      createUserData.lastName,
      createUserData.username,
      createUserData.password,
      createUserData.favoriteQuote,
      createUserData.themePreference,
      createUserData.role
    );

    if (newUser.signupCompleted) {
      return res.redirect("/login"); // Redirect user to login page
    } else {
      return res.status(500).json({ Error: "Internal Server Error" });
    }
  } catch (error) {
    return res.status(500).json({ Error: "Internal Server Error" });
  }
});
router.route("/register").get(async (req, res) => {
  res.render("register", { title: "Sign Up" });
});

router
  .route("/login")
  .get(async (req, res) => {
    //code here for GET
    res.render("login", { title: "Login" });
  })
  .post(async (req, res) => {
    //code here for POST
    const { username, password } = req.body;

    // Check if username and password are supplied
    if (!username || !password) {
      return res
        .status(400)
        .json({ Error: "Username and password are required" });
    }

    // Validate username
    const usernameRegex = /^[a-zA-Z\s]*$/; // Only letters and spaces
    if (
      !usernameRegex.test(username) ||
      username.length < 5 ||
      username.length > 10
    ) {
      return res.status(400).json({ Error: "Invalid username format" });
    }

    // Validate password
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // At least one uppercase, one lowercase, one digit, one special character, minimum length 8
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ Error: "Invalid password format" });
    }

    // console.log(req.session);

    try {
      // Call loginUser DB function
      const users = await userMethodsDB.loginUser(username, password);

      // Check if user is found and passwords match
      if (users) {
        // Store user information in session

        req.session.user = {
          firstName: users.firstName,
          lastName: users.lastName,
          username: users.username,
          favoriteQuote: users.favoriteQuote,
          themePreference: users.themePreference,
          role: users.role,
        };

        // console.log(req.session.user);
      } else {
        return res.status(400).json({ Error: "Invalid username or password" });
      }
      if (users.role == "admin") {
        return res.redirect("/admin");
      } else {
        return res.redirect("/user");
      }
    } catch (error) {
      // console.error(error);
      return res.status(500).json({ Error: "Internal Server Error" });
    }
  });

router.route("/user").get(async (req, res) => {
  //code here for GET
  const user = req.session.user;

  const currentTime = new Date().toLocaleTimeString();

  return res.render("user", {
    firstName: user.firstName,
    lastName: user.lastName,
    currentTime: currentTime,
    role: user.role,
    favoriteQuote: user.favoriteQuote,
    themePreference: user.themePreference
  });
});

router.route("/admin").get(async (req, res) => {
  //code here for GET

  if (req.session.user && req.session.user.role === "admin") {
    const user = req.session.user;
    const currentTime = new Date().toLocaleString(); // Get current time

    // Render the admin view with user information
    res.render("admin", {
      firstName: user.firstName,
      lastName: user.lastName,
      currentTime: currentTime,
      favoriteQuote: user.favoriteQuote,
      role: user.role,
      themePreference: user.themePreference
    });
  } else {
    // User is not authenticated or is not an admin, send forbidden status
    res.status(403).send("Access forbidden");
  }
});

router.route("/logout").get(async (req, res) => {
  //code here for GET
  req.session.destroy(err => {
    if (err) {
      // console.error('Error destroying session:', err);
      res.status(500).send('Error logging out');
    } else {
      // Inform the user that they have been logged out
      res.send('You have been logged out. <a href="/login">Click here to login</a>');
    }
  });
});

export default router;
