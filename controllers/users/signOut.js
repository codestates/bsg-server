const { user } = require("../../models");
//1
module.exports = async (req, res) => {
    await user.findOne({
       where: {
           email: req.body.email
       }
   })
   .then(() => {
       user.destroy({
           where: {
               email: req.body.email
           }
       })
       .then(() => {
           res.status(200).send({ message: "Destroy User Successfully"})
       })
   })
}