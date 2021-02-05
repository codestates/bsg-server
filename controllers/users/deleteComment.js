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



//클라이언트에서 로그인을 한 상태의 유저가 댓글 삭제 버튼을 누른다.

///서버
//누름과 동시에 서버에 요청을 하게 되는데 이때 request값으로 전달 되는것은 userID와 commentId가 전달이 된다.
//1. 해당 유저가 이 댓글을 작성 하였는지( 해당 댓글은 주인이 있다.(주인은 user table의 id) user.id === userId)
//2. 해당 유저가 작성한 댓글중에 어떤 댓글인지.

//두개 다 해당사항이 맞다면 삭제버튼의 주체가 되는 댓글을 삭제시킨다.
//삭제가 된후에는 클라이언트 측에서 해당 페이지를 리렌더링 한다.