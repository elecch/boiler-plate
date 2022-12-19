const express = require('express')
const app = express()
const port = 5000;
const bodyParser = require('body-parser');
const { user } = require("./models/User");

//application/x-www-form-urlencoded 이런 데이터를 분석해서 가져올수 있도록
app.use(bodyParser.urlencoded({extended: true}));

// application/json 타입으로 된것을 분석해서 가져올 수 있도록
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://elecch:czkauo483@cluster0.ornav9b.mongodb.net/?retryWrites=true&w=majority',{

}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World! 안녕'))

app.post('/register', (req, res) => {
  //회원 가입 할때 필요한 정보들을 client에서 가져온
  //그것들을 데이터 베이스에 넣어준다.


  const user = new User(req.body);

  user.save((err, userInfo) => {
    if(err) return res.json({sucess: false, err})
    return res.status(200).json({
      sucess: true
    })
  })
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))