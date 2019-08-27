const express = require('express');
const router = express.Router();
const Furniture = require('../models/Furniture');


router.get('/api/furniture', (req,res,next)=>{
  let id = req.params.id;
  Furniture
          .find()
          .then(allFurniture=>{
            res.json(allFurniture);
          })
          .catch(err=>next(err))  
})

module.exports = router;