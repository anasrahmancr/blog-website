import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// get Register Page
const getRegister = (req, res) => {};

// User Registration (post)
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(200).json({ message: "User have already registered" });
    }

    if (!name || !email || !password) {
      return res.status(200).json({ message: "Fill all the fields" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({
        name: name,
        email: email,
        password: hashedPassword,
      });
      newUser.save();
      return res.status(200).json({ message: "successfully registered" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// LoginPage
const loginPage = (req, res) => {
  res.json({ message: "login page" });
};

// LoginData
const loginData = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user, "userrrrrrr");
    if (!user) {
      console.log("email not found");
      return res.send({
        success: false,
        message: "email not found",
      });
    }

    const isPassValid = await bcrypt.compare(password, user.password);
    if (!isPassValid) {
      console.log("wrong password");
      return res.send({
        success: false,
        message: "invalid password",
      });
    }

    const key = "secure_key";

    const token = jwt.sign({ user_id: user._id, email }, key, {
      expiresIn: "24h",
    });
    // Cookies.set('token', token, { expires: 1, path: '/' });
    res.cookie("token", token, { httpOnly: true });
    //   secure: true,
    // sameSite: 'None'

    const cookieValue = req.cookies.token;
    console.log("token = ", cookieValue);

    return res.send({
      success: true,
      message: "login successful",
      user: user,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export { registerUser, getRegister, loginData, loginPage };
