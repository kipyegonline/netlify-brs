import axios from "axios";
exports.handler = async (id, fn) => {
  console.log("Netlify funct");
  try {
    const user = await axios.get(
      `https://brs.ecitizen.go.ke/backend/id-lookup?id_number=${29216950}&citizenship=citizen&first_name=Kipyegon}`,
      {
        headers: {
          /* Required for CORS support to work */
          "Access-Control-Allow-Origin": "*",
          /* Required for cookies, authorization headers with HTTPS */
          "Access-Control-Allow-Credentials": true,
        },
      }
    );
    console.log(user);
    return { user: JSON.stringify(user) };
  } catch (error) {
    console.log("brs err", error.message);
  }
};
