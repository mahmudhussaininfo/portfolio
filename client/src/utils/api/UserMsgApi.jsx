import axios from "axios";
//send User mail
export const sendUserMail = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/portfolio",
      data
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
