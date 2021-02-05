const { userComment } = require('../../models');

module.exports =  async (req, res) => {
    // 게시글 id === comment 특유의 id 
    const usercomment = await userComment.findAll()
    res.json({data: usercomment});

    // get 해서 Content 특유의 id 만 받아와서
    // comment 특유의 id 와 DB가 연결이 돼있는 상태에서
    // 그 특유의 id 만 where 절로 불러서 보내주면 된다고 생각을 했습니다.
};
