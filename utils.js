var utils = {};
var PopItem = require("./models/PopItem.js");

utils.replace = function(str,findstr,replacestr) {
  if(!str) return str;
  return str.replace(new RegExp(findstr,"g"),replacestr);
};

utils.calcWp = function(item_val) {
  var up_classes = [1, 1.1, 1.3, 1.5, 2, 3, 4];
  var up_rate = [0,1,2,3,4,5,6,7,8,9,1,1,1,3,3,3,6,6,6,10];
  var up_obj = {};
  var up_cls_list = [];
  var calc_num = Number(item_val);
  var result_num = Number(item_val);

  for(var i in up_classes) {
    up_cls_list = [];
    calc_num = Number(item_val);
    result_num = Number(item_val);
    for(var j in up_rate) {
      calc_num = (calc_num/100*up_rate[j]) + calc_num;
      result_num = Math.round(calc_num);
      up_cls_list.push(Math.floor(result_num*up_classes[i]));
    }

    if(String(i)=='0') up_obj.up_cls1 = up_cls_list;
    else if(i==1) up_obj.up_cls2 = up_cls_list;
    else if(i==2) up_obj.up_cls3 = up_cls_list;
    else if(i==3) up_obj.up_cls4 = up_cls_list;
    else if(i==4) up_obj.up_cls5 = up_cls_list;
    else if(i==5) up_obj.up_cls6 = up_cls_list;
    else if(i==6) up_obj.up_cls7 = up_cls_list;
  }

  return up_obj;
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

utils.formatComma = function(str) {
  if(str.length == "0") return "0";

  str += "";
  var x = str.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
};

module.exports = utils;
