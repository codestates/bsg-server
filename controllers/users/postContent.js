const { usercontent } = require('../../models');

module.exports = async (req, res) => {
  // 1. CLIENT 에서 글 제목, 글 내용을 보낸다.
  // 2. SERVER 에서는 해당 req 를 DB에 저장한다.
  // 3. response 로 성공을 날린다...?!
  const { userid, title, body } = req.body;


  await usercontent.create({
    userid: `${userid}`, title: `${title}`, body:`${body}`
  })
  .then(() => {
    res.status(200).send({message: "ok"})
  }).catch(err => {
    res.status(401).send({message: "You do not have permission to access the content"})
  })
};
