const { Users } = require("../../models/userModel");
const { generateResponse } = require("../helpers/generateResponse");

const restoreUser = async (event) => {
  try {
    const { id } = event.pathParameters;

    const response = await Users.restore({
      where: { id: id },
    });

    return generateResponse(200, {
      succes: true,
      message: " User destroy successfully",
      data: response,
    });
  } catch (error) {
    return generateResponse(500, {
      succes: false,
      message: "User destroy failed",
      error: error.message,
    });
  }
};
module.exports = { restoreUser };
