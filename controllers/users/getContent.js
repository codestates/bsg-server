const { userPost } = require('../../models');



module.exports = async (req, res) => {
    let userpost = await userPost.findAll()
    res.json({ data: userpost, message: 'ok' });

};


