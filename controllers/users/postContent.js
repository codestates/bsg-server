const { userContent } = require("../../models");
//
module.exports = (req, res) => {
  // 1. CLIENT 에서 글 제목, 글 내용을 보낸다.
  // 2. SERVER 에서는 해당 req 를 DB에 저장한다.
  // 3. response 로 성공을 날린다...?!1
  const { userid, title, body, tier, nickname } = req.body;

   userContent.create({
    userid, title, body, tier, nickname
  })
  .then(() => {
    res.status(200).send({message: "Post Content Successfully"})
  }).catch(err => {
    res.status(401).send({message: "You do not have permission to access the content"})
  })
};

/*
 포스트 할 때 


*/