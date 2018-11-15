
var express = require("express");
var router = express.Router();
var header_txt = "의류플러스업 - 이터널시티 - 이터인포";
var header_description = "이터인포 - 한국형 좀비 아포칼립스 RPG! 이터널시티 의류플러스업 관련정보를 제공합니다.";

router.get("/", function(req, res) {
  res.render("plusup/index",{title:header_txt,description:header_description});
});

module.exports = router;
