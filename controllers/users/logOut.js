module.exports = (req, res) => {
    if (!req.cookies.email)
      res.status(400).json({ data: null, message: 'not authorized' });
    else {
      res.clearCookie('email');
      res.json({ data: null, message: 'ok' });
    }

};