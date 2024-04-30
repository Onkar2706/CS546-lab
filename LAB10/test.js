import users from "./data/users.js";

try {
  const usr1 = await users.registerUser(
    "Onkar",
    "Mahamuni",
    "onkar27",
    "'Abcd1234',",
    "We have two lives, the 2nd begins when you realize you only have one.",
    "light",
    "admin"
  );
  console.log(usr1);
} catch (error) {
  console.log(error);
}

// firstName: 'Patrick',
//     lastName: 'Hill',
//     username: 'graffixnyc',
//     password: '$2b$16$Vm/Xqc.2eyi3y3IqewuhjOTXeoxt4SaN1dcAfPwEPUrzA5Kgm1HFW',
//     favoriteQuote: "We have two lives, the 2nd begins when you realize you only have one.",
//     themePreference: "light",
//     role: 'admin'

try {
  const usr1 = await users.loginUser("Onkar27", "Abc@1234");
  console.log(usr1);
} catch (error) {
  console.log(error);
}
