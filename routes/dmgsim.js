
var express = require("express");
var router = express.Router();
var header_txt = "데미지측정기 - 이터널시티 - 이터인포";
var header_description = "이터인포 - 한국형 좀비 아포칼립스 RPG! 이터널시티의 인벤 공격력에 따른 몬스터를 타격을했을때의 데미지를 계산합니다.";

router.get("/", function(req, res) {
  res.render("dmgsim/index",{title:header_txt,description:header_description});
});

module.exports = router;
