//리퀘스트값(닉네임)이 들어왔을때 lol api를  두번 get해주어서 ,
// 해당 유저의 닉네임,id,tier정도등을 바디값으로 리스폰스
const axios = require('axios')

module.exports = (req, res) => {

  const nickname = encodeURIComponent(req.body.nickname);

  let URI = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${process.env.API_KEY}`
  axios.get(URI)
      .then((userid) => {
        axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userid.data.id}?api_key=${process.env.API_KEY}`)
            .then(ranks => {
          res.json(ranks.data)
        }).catch((err) => {
              console.log('askdjfhkasdf')
              // console.log(err)
            })
      }).catch((err)=>{
        console.log('qwerqwer')
    // console.log(err)
  })
}


