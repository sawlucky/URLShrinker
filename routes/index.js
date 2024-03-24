var express = require("express");
var router = express.Router();
const bodyparser = require("body-parser");
router.use(bodyparser.json());

//setting mongodb;
const { HandleMongodb } = require("../database/mongo");
HandleMongodb("mongodb://127.0.0.1:27017/shortner")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("mongodb not connected");
  });

const { HandleshortUrl, HandleHomePage, HandleParams } = require("./../controllers/url");
/* GET home page. */
router.get("/", HandleHomePage);
router.post("/shortUrl", HandleshortUrl);
router.get("/:shortURL",HandleParams)

module.exports = router;
