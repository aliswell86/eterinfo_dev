
var express = require("express");
var router = express.Router();
var header_txt = "무기팝니다 - 이터널시티 - 이터인포";
var header_txt1 = "무기등록 - 무기팝니다 - 이터널시티 - 이터인포";
var header_description = "이터인포 - 한국형 좀비 아포칼립스 RPG! 이터널시티의 무기 판매정보를 조건별로 조회하거나 등록합니다.";

router.get("/", function(req, res) {
  res.render("wptde/index",{title:header_txt,description:header_description});
});

router.get("/reg", function(req, res) {
  res.render("wptde/reg",{title:header_txt1,description:header_description});
});

module.exports = router;
