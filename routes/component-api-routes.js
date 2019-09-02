const express = require('express');
const router = express.Router();
const Component = require('../models/Component');


let componentArray = []

router.get('/api/components', (req,res,next)=>{
  let id = req.params.id;
  Component
          .find()
          .then(components => {
            res.json(components);
          })
          .catch(err=>next(err))  
})

router.post('/api/components', (req,res,next) => {
  Component
          .create(req.body)
          .then(newComponent => {
            console.log('Component successfully added')      
            componentArray.push(newComponent._id)
            console.log(componentArray)
           
          })
          .catch(err => next(err))
})
  
exports.array = componentArray;

module.exports = router;