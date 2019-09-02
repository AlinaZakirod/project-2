
const express = require('express');
const router  = express.Router();
const Component = require('../models/Component');
const Layout = require('../models/Layout');

router.post('/api/layouts', (req, res, next) => {
  Layout
  .create(req.body)
  .populate('_furnitureObjects')
  .then(newLayout => {
    console.log("whey!", newLayout)
    res.redirect('/layouts')
  })
  .catch(err => console.log("Error while creating a layout:", err))
})



module.exports = router;
