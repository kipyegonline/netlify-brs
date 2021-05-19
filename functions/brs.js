exports.handler = async (id, fn) => {
  try {
    const user = await axios.get(
      `https://brs.ecitizen.go.ke/backend/id-lookup?id_number=${id}&citizenship=citizen&first_name=${fn}`
    );
    console.log(user);
    return { user: JSON.stringify(user) };
  } catch (error) {
    console.log("brs err", error.message);
  }
};
