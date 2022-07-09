const { Users } = require("../../models/userModel");

const { generateResponse } = require("../helpers/generateResponse");

const getUser = async () => {
  try {
    const response = await Users.findAll();

    return generateResponse(200, {
      succes: true,
      message: " Retrieving user",
      data: response,
    });
  } catch (error) {
    return generateResponse(500, {
      succes: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { getUser };
