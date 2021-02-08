const { user, userComment } = require('../../models');
//
module.exports =  async (req, res) => {
    // 게시글 id === comment 특유의 id 
    const usercomment = await userComment.findAll({
        include: [{
            model: user,
            attributes: ['nickname']
        }]
    })
    res.json({data: usercomment})
};


// 티어 정보는 클라이언트에서 가지고 있다.
// 서버는 클라이언트가 보내준 티어 정보를 db 에 저장한다.
// 
/*
 getComment.then(
    getContent
)
*/