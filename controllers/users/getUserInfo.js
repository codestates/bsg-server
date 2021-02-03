//리퀘스트값(닉네임)이 들어왔을때 lol api를  두번 get해주어서 ,
// 해당 유저의 닉네임,id,tier정도등을 바디값으로 리스폰스
const axios = require('axios')

module.exports = async (req, res) => {
    await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.cookies.username}?api_key=${process.env.API_KEY}` )
        .then((userid)=>{
         axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userid.id}?api_key=${process.env.API_KEY}`)
        })
        .then(ranks => {
          res.json(ranks)
        })
    }


