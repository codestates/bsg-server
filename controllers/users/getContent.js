const { user, userContent } = require('../../models');
//
module.exports = async (req, res) => {
    const usercontent = await userContent.findAll({
        include: [{
            model: user,
            attributes: ['nickname']
        }]
    })
    res.json({data: usercontent});
};


// 게시글 목록

// title 만

// 특정 게시물 을 누른다

// userid 를 user 의 id 와 같은 nickname 을 보내준다.

