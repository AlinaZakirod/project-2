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


// router.post('/api/furniture', (req, res, next)=>{
//     let id = req.params.id;
//   Furniture
//           .create({
//       title: req.body.title,
//       occupation: req.body.theOccupation,
//       catchphrase: req.body.theCatchphrase
//   })
//   .then((response)=>{
//       res.json({msg: 'yay, good job'});
//   })
//   .catch((err)=>{
//       console.log(err);
//   })
// })


module.exports = router;