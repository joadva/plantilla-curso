const { Users } = require("../../models/userModel");
const { generateResponse } = require("../helpers/generateResponse");

const createUser = async (event) => {
  try {
    const { firstname, lastname, phone } = JSON.parse(event["body"]);

    const params = {
      firstname,
      lastname,
      phone,
    };
    const response = await Users.create(params);

    return generateResponse(201, {
      succes: true,
      message: "user create",
      data: response,
    });
  } catch (error) {
    return generateResponse(500, {
      succes: false,
      message: "error creating user",
      error: error.message,
    });
  }
};

module.exports = { createUser };
