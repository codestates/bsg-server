const { userComment } = require('../../models');

module.exports = async(req, res) => {
  const { userid, content } = req.body;


  await userComment.create({
    userid: `${userid}`, content: `${content}`
  })
  .then(() => {
    res.status(200).send({message: "comment ok"})
  }).catch(err => {
    res.status(401).send({message: "You do not have permission to access the comment"})
  })
};
