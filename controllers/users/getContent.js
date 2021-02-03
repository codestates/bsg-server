const { userPost } = require('../../models');



module.exports = async (req, res) => {
    let userPost = await userPost.findAll()
    res.json({ data: userPost, message: 'ok' });

};


