const { usercomment } = require('../../models');

module.exports =  async (req, res) => {
    // 게시글 id === comment 특유의 id 
    const userComment = await usercomment.findAll()
};

/*
 getComment.then(
    getContent
)
*/