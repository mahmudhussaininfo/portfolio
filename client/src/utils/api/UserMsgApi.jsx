import axios from "axios";

//api url
const baseUrl = "https://portfolio-8g7y.onrender.com";

//send User mail
export const sendUserMail = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/api/v1/portfolio`, data);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
