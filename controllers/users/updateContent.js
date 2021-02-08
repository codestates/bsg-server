const { userContent } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = (req, res) => {
    const { id, title, body } = req.body;
//
    userContent.update({
        title:  title,
        body: body
    }, {
        where: {
            id: id
        }
    })
    .then(()=> {
        res.status(200).send({ message: "update Content successfully" })
    })
}