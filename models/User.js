const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ // Schema란 설계도의 정보
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true, // 중간 불필요한 띄워쓰기 방지용
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0 // role 미지정 시, role결과값으로 0을 부여
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: { // 토큰 유효기간
    type: Number
  }
})

const User = mongoose.model('User',userSchema); //model(이름부여, 대상) 
//model은 스키마를 감싸줌

mongoose.export = {User}; // 다른 곳에서도 사용가능