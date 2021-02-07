const { user } = require('../../models');

module.exports = async (req, res) => {
  const { email, nickname, password } = req.body

  const combineNickName = function () {
    let beforeNickname = nickname.split(' ');
    let result = ''
    for (let el of beforeNickname) {
      result += el
    }
    return result
  }

  let setNickname = combineNickName(nickname);

  const isEmailExists = await user.findOne({
    where: {email: email}
  });

  const isNicknameExists = await user.findOne({
    where:{nickname: setNickname}
  })


  if (isEmailExists) {
    res.status(409).send({ message: "Email already exists" })
  } else if (isNicknameExists) {
    res.status(409).send({ message: "Nickname already exists" })
  } else {
   await user.create({
        email: email, nickname: setNickname, password: password
    })
    .then(() => {
      res.status(201).send({ message: "Create account successfully" })
    }).catch(err =>{
      console.log(err)
    })
  }
}


/*
findOne 

*/



/*
1. 해당 이메일, 혹은 닉네임이 이미 데이터베이스에 존재하는 경우 특정 메세지와 함께 회원가입을 거부합니다.

2. 유저가 작성한 username 의 티어가 "Iron, Bronze, Silver, Gold" 가 아닐 경우, 회원가입을 거부합니다.
const nickname = encodeURIComponent(req.body.cookies.nickname);

  let URI = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${process.env.API_KEY}`
  axios.get(URI)
      .then((userid) => {
        axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userid.data.id}?api_key=${process.env.API_KEY}`)
            .then(ranks => {
          
        })
      })

3. 회원 가입 버튼 클릭 시, 중복 검사 중 하나 라도 통과하지 못하면 회원가입을 거부합니다.
*/