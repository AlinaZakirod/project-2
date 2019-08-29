const express = require("express");
const router = express.Router();
const Furniture = require('../models/Furniture');
const Layout = require('../models/Layout');


router.get('/layout/new', (req, res, next) => {
  Furniture
    .find()
    .then(allFurniture => res.render('layout-views/layout-new', {allFurniture}))
    // .then(a=>console.log(a))
    .catch(err => console.log("error rendering furniture", err))
  
})


router.post('/layout/new', (req, res, next) => {
  Layout
    .create(req.body)
    .then(newLayout =>{
      res.redirect('/layouts')
    })
    .catch( err => console.log("Error while creating a layout:", err))
})

//to display layouts
router.get('/layouts', (req, res, next) => {
  Furniture
    .find()
    .then(furnitureList => res.render('layout-views/layout-details.hbs', {furnitureList}))
    .catch(err => console.log('error displaying layout-details: ', err))
})


module.exports = router;