const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  username: { type: String},
  cName: { type: String},
  sName:{ type: String},
  phone: { type: String},
  
  password: { type: String },
  mobile:{type: String },
  email: { type: String},
  oldEmail: { type: String},
  profile:{type:String},
  class: {type:Array,default:[]},
  access:{type:String},
  group: { type:String },
  credit: { type: String },
  token: { type: String },
  otp:{ type: String , default: null },
  mid: { type: String },
  agent:{ type: String },
  creator:{ type: String },
  roleId:{ type: String },
  active:{ type: Boolean },
  status:{ type: String },
  code:{ type: String },
  address:{ type: String },
  companyAddress:{ type: String },
  meliCode:{ type: String},
  activity:{ type: String },
  official:{ type: String },
  status:{ type: String },
  
  imageUrl1:{ type: String },
  imageUrl2:{ type: String },
  kasbUrl:{ type: String },
  shopUrl1:{ type: String },
  shopUrl2:{ type: String },
  shopUrl3:{ type: String },

  roleId:{ type: String },
  birthDay:{ type: String },
  clothSize:{ type: String },
  call:{ type: String },
  urgCall:{ type: String },
  contractCall:{ type: String },
  zone:{ type: String },
  gps:{ type: String }, 
  postalCode: { type: String },
  workTime:{ type: String },
  website:{ type: String },
  senfiCode:{ type: String },
  
  about:{ type: String },
  state:{ type: String },
  stateId:{ type: String },
  city:{ type: String },
  cityId:{ type: String },

  date:{type:Date} 
});

module.exports = mongoose.model("customers", customerSchema);