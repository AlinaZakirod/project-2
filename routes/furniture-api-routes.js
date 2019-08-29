const express = require('express');
const router = express.Router();
const Furniture = require('../models/Furniture');


router.get('/api/furniture', (req,res,next)=>{
  let id = req.params.id;
  Furniture
          .find()
          .then(allFurniture =>{
            res.json(allFurniture);
          })
          .catch(err=>next(err))  
})

router.post('/api/furniture', (req,res,next) => {
  Furniture
          .create(req.body)
          .then(newComponent => {
            console.log('Component successfully added')
          })
          .catch(err => next(err))
})

module.exports = router;