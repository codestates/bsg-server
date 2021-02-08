const { isAuthorized } = require('../tokenFunctions');
const { user } = require('../../models');

// COMPLETED
//
module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    // 토큰이 존재하지 않을 경우
    // return res.status(401).send("no token in req.headers['authorization']");
    return res.json({ data: null, message: 'invalid access token' });
  }
  console.log(accessTokenData);
  const { nickname } = accessTokenData;
  user.findOne({ where: { nickname } })
    .then((data) => {
      if (!data) {
        // return res.status(401).send({ data: null, message: 'not authorized' });1
        return res.json({
          data: null,
          message: 'access token has been tempered',
        });
      }
      delete data.dataValues.password;
      return res.json({ data: { userInfo: data.dataValues }, message: 'ok' });
    })
    .catch((err) => {
      console.log(err);
    });
};
