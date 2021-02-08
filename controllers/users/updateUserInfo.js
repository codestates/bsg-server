const { user } = require('../../models');

module.exports = async (req, res) => {
    const { id, nickname, password } = req.body

    if (nickname) {
        const combineNickName = function () {
            let beforeNickname = nickname.split(' ');
            let result = ''
            for (let el of beforeNickname) {
              result += el
            }
            return result
          }

          var setNickName = combineNickName(nickname);

          var isDuplicateName = await user.findOne({
            where: {
                nickname: setNickName
            }
        })
    }

    if (isDuplicateName) {
        res.status(403).send({ message: "해당 닉네임은 이미 다른 유저가 사용 중 입니다."})
    }
    await user.update({
        nickname: setNickName,
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

