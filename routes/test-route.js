const express = require("express");
const router = express.Router();
const Furniture = require('../models/Furniture');


router.get('/test', (req, res, next) => {
  Furniture
  .find()
  .then(
    onePiece =>{
      res.render('furniture-views/test',{onePiece})
    }
    )
  .catch(err => console.log("error while deleting the celebrity: ", err))
})


module.exports = router;
