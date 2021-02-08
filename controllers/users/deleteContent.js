const { user, userContent } = require('../../models');

// COMPLETED
//
module.exports =  async (req, res) => { //req내부에는 user.id가 있다.
  const deleteUser = await user.findOne({
    where: {
      id: req.body.id
    }
  })

  // 누른 사람의 아이디가1

  const userContentData = await userContent.findOne({
    where: {
      userid: deleteUser.id
    }
  })
  
  if (deleteUser.id !== userContentData.userid) {
    res.status(401).json({ message: "해당 게시글의 주인만 삭제할 수 있습니다." })
  } else {
    userContent.destroy({
      where:({
        id: req.body.contentId
      })
    })
    .then(() => {
      res.json({ message:"Destroy Content Successfully" })
    })
  }
};
