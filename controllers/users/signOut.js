module.exports = (req, res) => {
    if (!req.cookies.id)
      res.status(400).json({ data: null, message: 'not authorized' });
    else {
      res.clearCookie('id');
      res.json({ data: null, message: 'ok' });
    }
  
};

// access token null 로 변경, 해당 유저 db 삭제
