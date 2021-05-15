const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/celebrities", function (req, res, next) {
  Celebrity.find()
    .then(function (allTheCelebritiesFromDB) {
      console.log(`${allTheCelebritiesFromDB.length} celebrities retrouves depuis la base`);

      res.render("/celebrities/index", {
        myCelebrities: allTheCelebritiesFromDB,
      });
    })
    .catch((err) => console.log(err));
});
