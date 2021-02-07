const { user, usercontent } = require('../../models');

module.exports = async (req, res) => {
    const userContent = await usercontent.findAll()
    res.json({data: userContent});
};


// 게시글 목록

// title 만

// 특정 게시물 을 누른다

// userid 를 user 의 id 와 같은 nickname 을 보내준다.

