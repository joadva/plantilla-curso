const { Users } = require("../../models/userModel");
const { generateResponse } = require("../helpers/generateResponse");

const updateUser = async (event) => {
  try {
    const { id } = event.pathParameters;

    const { firstname, lastname, phone } = JSON.parse(event["body"]);
    const params = {
      firstname,
      lastname,
      phone,
    };
    const response = await Users.update(params, {
      where: { id: id },
    });

    return generateResponse(200, {
      success: true,
      message: "User updated",
      data: response,
    });
  } catch (error) {
    return generateResponse(500, {
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { updateUser };
