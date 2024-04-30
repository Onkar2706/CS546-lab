//import mongo collections, bcrypt and implement the following data functions
import { users } from "../config/mongoCollections.js";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import validate from "../helpers.js";
const saltRounds = 10;

const exportdedMethods = {
  async registerUser(
    firstName,
    lastName,
    username,
    password,
    favoriteQuote,
    themePreference,
    role
  ) {
    if (!validate.validatePassword(password)) throw "error";

    try {
      password = await bcrypt.hash(password, saltRounds);
    } catch (e) {
      console.log("Unable to hash password");
    }
    let newUser = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      username: username.trim().toLowerCase(),
      password: password.trim(),
      favoriteQuote: favoriteQuote.trim(),
      themePreference: themePreference.trim(),
      role: role.trim(),
    };

    const userColln = await users();
    const insertInfo = await userColln.insertOne(newUser);
    if (!insertInfo.acknowledged || !insertInfo.insertedId)
      throw "user not added";
    // const usr = await userColln.findOne(insertInfo._id)
    // if (!usr.acknowledged || !usr.insertedId) throw "user not added"

    return { signupCompleted: true };
  },

  async loginUser(username, password) {
    username = username.trim().toLowerCase();
    password = password.trim();
    // if(!validatePassword(password)) throw "should be a minimum of 8 characters long. "
    if (!username || username === "String")
      throw "Either the username or password is invalid";
    if (!password || password === "String")
      throw "Either the username or password is invalid ";

    const userColln = await users();
    const usernameDB = await userColln.findOne({ username: username });
    if (!usernameDB) throw "Error";

    // const PwdDB = await userColln.findOne({password:password});
    // if(!PwdDB) throw "Error"

    if (!(usernameDB.username == username))
      throw "Either the username or password is invalid";
    const validatedPassword = await bcrypt.compare(
      password,
      usernameDB.password
    );
    if (validatedPassword !== true)
      throw "Either the username or password is invalid";

    return {
      firstName: usernameDB.firstName,
      lastName: usernameDB.lastName,
      username: usernameDB.username,
      favoriteQuote: usernameDB.favoriteQuote,
      themePreference: usernameDB.themePreference,
      role:usernameDB.role
    };
  },
};

export default exportdedMethods;
