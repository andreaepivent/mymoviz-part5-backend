const fetch = require("node-fetch");
var express = require("express");
var router = express.Router();

/* Display all discover */
router.get("/", function (req, res, next) {

  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  };

  fetch(url, options)
    .then(response => response.json())
    .then(data => res.json({movies:data.results}))
    .catch((err) => console.error("error:" + err));

});

module.exports = router;
