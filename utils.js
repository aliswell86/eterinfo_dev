var utils = {};
var PopItem = require("./models/PopItem.js");

utils.replace = function(str,findstr,replacestr) {
  if(!str) return str;
  return str.replace(new RegExp(findstr,"g"),replacestr);
};

utils.calcWp = function(item_val) {
  var up_rate = [0,1,2,3,4,5,6,7,8,9,1,1,1,3,3,3,6,6,6,10];
  var up_list = [];
  var up_obj = {};
  var calc_num = Number(item_val);
  var result_num = Number(item_val);

  for(var i in up_rate) {
    calc_num = (calc_num/100*up_rate[i]) + calc_num;
    result_num = Math.round(calc_num);

    up_obj = {};
    up_obj.up1 = Math.floor(result_num);
    up_obj.up2 = Math.floor(result_num*1.1);
    up_obj.up3 = Math.floor(result_num*1.3);
    up_obj.up4 = Math.floor(result_num*1.5);
    up_obj.up5 = Math.floor(result_num*2);
    up_obj.up6 = Math.floor(result_num*3);
    up_obj.up7 = Math.floor(result_num*4);
    up_list.push(up_obj);

  }
  return up_list;
};

utils.popul_item_save = function(id,trsc_dv_nm) {
  require("date-utils");
  var in_obj = {};
  var date = new Date();
  var curr_dt = date.toFormat("YYYYMMDD");

  in_obj.reg_dt = curr_dt;
  in_obj.item_id = id;
  in_obj.trsc_dv_nm = trsc_dv_nm;

  PopItem.create(in_obj);
};

utils.getRandomInt = function(min, max) {
  var mRan = Math.random();
  return Math.floor(mRan * (max - min)) + min;
};

module.exports = utils;
