const { usercontent } = require('../../models');

module.exports = async (req, res) => {
    const userContent = await usercontent.findAll()
    res.json({data: userContent});
};


