const { user, userComment } = require("../../models");
//1
module.exports = async(req, res) => {
  const { userid, comment, contentid, tier } = req.body;


  await userComment.create({
    userid: `${userid}`, comment: `${comment}`, contentid: `${contentid}`, tier: `${tier}`, nickname: `${nickname}`
  })
  .then(() => {
    res.status(200).send({message: "Post Comment Successfully"})
  }).catch(err => {
    res.status(401).send({message: "You do not have permission to access the comment"})
  })
};
    // 1. 댓글 작성 시 해당 content 의 아이디를 받아온다. (req.body.id)
    // 2. create 해당 content 의 id 를 usercomment 테이블에 저장한다.


    // 보내면 => getComment