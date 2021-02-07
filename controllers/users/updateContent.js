const { usercontent } = require('../../models');

module.exports = (req, res) => {
    const { id, title, body } = req.body;

    usercontent.update({
        title:  title,
        body: body
    }, {
        where: {
            id: id
        }
    })
    .then(()=> {
        res.status(200).send({ message: "update successfully" })
    })
}