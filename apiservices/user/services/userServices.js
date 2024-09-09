const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

class UserServices {
  async userRegister(data) {
    console.log(data);
    try {
      return await User.create(data);
    } catch (error) {
      throw error;
    }
  }

  async login(data) {
    const payload = data;

    const secretKey = "123456";
    const options = {
      expiresIn: "1h",
    };

    const token = jwt.sign(payload, secretKey, options);
    console.log("Token JWT generado:", token);

    return token;
  }
}

module.exports = new UserServices();
