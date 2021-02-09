const { user } = require("../../models");
const {
  generateAccessToken,
  sendAccessToken,
} = require('../tokenFunctions');

// COMPLETED
//
module.exports = async (req, res) => {

  const { email, password } = req.body;
  user.findOne({
    where: {
      email,
      password,
    },
  })
    .then((data) => {
      if (!data) {
        // return res.status(401).send({ data: null, message: 'not authorized' });1
        return res.status(401).send({ data: null, message: "Invalid user or Wrong password" });
      }
      delete data.dataValues.password;
      const accessToken = generateAccessToken(data.dataValues);
      sendAccessToken(res, accessToken)
    })
    .catch((err) => {
      console.log(err);
    });
};
