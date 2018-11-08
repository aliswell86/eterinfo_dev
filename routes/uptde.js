
var express = require("express");
var router = express.Router();
var header_txt = "업템장터 - 이터널시티 - 이터인포";
var header_description = "이터인포 - 한국형 좀비 아포칼립스 RPG! 이터널시티의 무기 개조 아이템(업템)의 판매정보를 등록하거나 조회합니다.";

router.get("/", function(req, res) {
  res.render("uptrade/index",{title:header_txt,description:header_description});
});

module.exports = router;
