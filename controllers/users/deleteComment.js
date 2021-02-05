const { user, userComment } = require('../../models');


// COMPLETED

module.exports =  async (req, res) => { //req내부에는 user.id가 있다.
  const deleteUser = await user.findOne({
    where: {id: req.body.id}
  })

  const userCommentData = await userComment.findOne({
    where: {userid: deleteUser.id}
  })
  
  if (deleteUser.id !== userCommentData.userid) {
    res.status(400).json({message: "no"})
  } else {
    userComment.destroy({
      where:({id: req.body.commentId})
    })
    .then(() => {
      res.json({message:"ok"})
    })
  }
};

/*
 // 먼저 데이터베이스에 삭제 버튼을 누른 userid 가 존재하는지 확인
await user.findOne({
 where: {user.id: req.userid}
}).then(deleteUser => {
 if (deleteUser !== req.userid) {
   res.status(400).send({message : "해당 댓글 작성자만 삭제가 가능합니다."})
 } 
 user.destroy({
   where:{commentId: userComment.id}
 })
})
})


*/

