const express = require("express");
const router = express.Router();
const Component = require('../models/Component');
const Layout = require('../models/Layout');



router.get('/create', (req, res, next) => {
  Component
    .find()
    .then((result) => res.render('layout-views/layout-new', {allComponents: result}))
    .catch(err => {
      next(err);
    })
});


router.post('/layout/create', (req, res, next) => {
  console.log("MM")
  Layout
    .create(req.body)
    .populate('_furnitureObjects')
    .then(newLayout => {
      console.log("whey!", newLayout)
      res.redirect('/layouts')
    })
    .catch(err => console.log("Error while creating a layout:", err))
})

router.get('/layouts', (req, res, next) => {
  Layout
    .find()
    .then(layoutsFromDb => res.render('layout-views/layouts', {layouts: layoutsFromDb}))
    .catch(err => console.log("error while getting layouts from DB", err));
});




module.exports = router;