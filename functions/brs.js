const axios = require("axios");
exports.handler = async (id, fn) => {
  console.log("Netlify function");
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
    return { status: 200, body: JSON.stringify(user) };
  } catch (error) {
    return { status: 201, body: error.message };
  }
};
