module.exports = (req, res) => {
    req.cookies.set('access_token', null, {
      maxAge: 0,
      httpOnly: true
    });
    res.status(200).send({message: 'logout successfully'})
};