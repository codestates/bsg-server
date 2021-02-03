const { user } = require('../../models');
const {
  generateAccessToken,
  sendAccessToken,
} = require('../tokenFunctions');

module.exports = (req, res) => {

  const { email, password } = req.body;
  user.findOne({
    where: {
      email,
      password,
    },
  })
    .then((data) => {
      console.log(data)
      if (!data) {
        // return res.status(401).send({ data: null, message: 'not authorized' });
        return res.json({ data: null, message: 'not authorized' });
      }
      delete data.dataValues.password;
      const accessToken = generateAccessToken(data.dataValues);
      sendAccessToken(res, accessToken);
    })
    .catch((err) => {
      console.log(err);
    });
};
