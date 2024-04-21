//import mongo collections, bcrypt and implement the following data functions
import {users} from"../config/mongoCollections.js"
import bcrypt from "bcrypt"
import { ObjectId } from "mongodb";
const saltRounds = 10;


export const registerUser = async (
  firstName,
  lastName,
  username,
  password,
  favoriteQuote,
  themePreference,
  role
) => {

  try {
    password = await bcrypt.hash(password, saltRounds);
  } catch (e) {
    console.log("Unable to hash password");
  }
  let newUser ={
    firstName:firstName.trim(),
    lastName:lastName.trim(),
    username:username.trim().toLowerCase(),
    password:password.trim(),
    favoriteQuote:favoriteQuote.trim(),
    themePreference:themePreference.trim(),
    role:role.trim(),
    
   
  }

  const userColln=  await users();
  const insertInfo = await userColln.insertOne(newUser);
  if (!insertInfo.acknowledged || !insertInfo.insertedId) throw "user not added" 
  // const usr = await userColln.findOne(insertInfo._id)
  // if (!usr.acknowledged || !usr.insertedId) throw "user not added" 
  
  
  return {signupCompleted: true}
};



export const loginUser = async (username, password) => {
  username= username.trim().toLowerCase()
  password = password.trim()
  if (!username || username === "String") throw "Provide Usrname/Password"
  if(!password || password === "String") throw "Provide Usrname/Password "

  const userColln=  await users();
  const usernameDB = await userColln.findOne({username:username});
  if(!usernameDB) throw "Error"
  const PwdDB = await userColln.findOne({password:password});
  if(!PwdDB) throw "Error"







};
