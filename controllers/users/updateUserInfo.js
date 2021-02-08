const { user } = require('../../models');

module.exports = (req, res) => {
    const { id, nickname, password } = req.body

    // email 은 아무리해도 변경되지 않음.. 왜지?
//
    user.update({
        nickname: nickname,
        password: password
    }, {
        where: {
            id: id
        }
    })
    .then(()=> {
        res.status(200).send({ message: "update UserInfo successfully" })
    })
}

// 토큰에다가 정보를 담아서 


// 1. isAuthorized 함수로 토큰이 유효한지 검증

// 2. 토큰 없으면 메세지: 수정할 수 없습니다, 토큰 있으면 전달 받은 email, password, nickname 수정, 메세지: ok

