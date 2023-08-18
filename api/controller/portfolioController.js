import User from "../Model/User.js";
import { sendMail } from "../utils/mail.js";

//user information create
export const userInformationGet = async (req, res) => {
  try {
    const user = await User.find();
    if (user) {
      return res.status(200).json(user);
    }
  } catch (error) {
    console.log(error.message);
  }
};

//user information create
export const userInformation = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "all fields are required",
      });
    }
    const user = await User.create({ name, email, message });

    //sendMail
    sendMail({
      from: email,
      sub: "Portfolio",
      data: `
      name : ${name}, 
      email : ${email},
      message : ${message}
      `,
    });
    if (user) {
      return res
        .status(200)
        .json({ message: `Hi ${name}, your message send successfully`, user });
    }
  } catch (error) {
    console.log(error.message);
  }
};
