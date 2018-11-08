
var mongoose = require("mongoose");

var UpItem = mongoose.Schema({
  ut_kind_dv:{type:String},
  ut_grd_dv:{type:String},
  ut_qult_dv:{type:String},
  ut_kind_dtl_dv:{type:String}
});

var UpItem = mongoose.model("UpItem", UpItem);
module.exports = UpItem;
