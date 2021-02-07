const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = (req, res) => {
    const { email, nickname, password } = req.body

    isAuthorized(req)
}


// 1. isAuthorized 함수로 토큰이 유효한지 검증

// 2. 토큰 없으면 메세지: 수정할 수 없습니다, 토큰 있으면 전달 받은 email, password, nickname 수정, 메세지: ok

