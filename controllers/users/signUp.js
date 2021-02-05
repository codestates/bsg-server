const { user } = require('../../models');

module.exports = (req, res) => {
    const {email, password, username} = req.body;

    if (!email || !password || !username) {
      return res.status(422).send("insufficient parameters supplied");
    }
    user
        .findOrCreate({
          where: {
            email: email,
          },
          defaults: {
            password: password,
            username: username,
          },
        })
        .then(async ([user, created]) => {
          if (!created) {
            return res.status(409).send("email exists");
          }
          const data = await user.get({plain: true});
          res.status(201).json(data);
        });
}