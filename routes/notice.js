
var express = require("express");
var router = express.Router();
var header_txt = "이터인포 - 공지사항";

router.get("/", function(req, res) {
  res.render("notice/index",{title:header_txt,description:header_txt});
});

module.exports = router;
