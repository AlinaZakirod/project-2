const express = require("express");
const router = express.Router();
const Component = require('../models/Component');
const Layout = require('../models/Layout');


router.get('/layout/new', (req, res, next) => {
  Component
    .find()
    .then(components => res.render('layout-views/layout-new', {components}))
    .catch(err => console.log("error rendering component", err))
  
})


router.post('/layout/new', (req, res, next) => {
  Layout
    .create(req.body)
    .then(newLayout =>{
      res.redirect('/layouts')
    })
    .catch(err => console.log("Error while creating a layout:", err))
})

//to display layouts
router.get('/layouts', (req, res, next) => {
  Component
    .find()
    .then(components => res.render('layout-views/layout-details.hbs', {components}))
    .catch(err => console.log('error displaying layout-details: ', err))
})


module.exports = router;