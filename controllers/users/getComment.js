const { Users } = require('../../models');

module.exports =  async (req, res) => {

    // HINT: 쿠키에 유저정보가 존재하는지 한번 다음줄에 console.log(req.cookies)를 작성해 보세요. 물론 로그인 이후 GET /users/userinfo 요청을 하셔야 합니다.
    console.log('얍'+ req.cookies)
    if (!req.cookies.email) {
      res.status(401).send({ data: null, message: 'not authorized' });
    } else {
      let userInfo = await Users.findOne({
        where: { email: req.cookies.email },
      });

      res.json({ data: userInfo, message: 'ok' });
    }

};
