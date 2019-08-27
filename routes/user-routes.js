const express = require("express");
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require("passport")
const ensureLogin = require("connect-ensure-login");


//signup route
router.get('/signup', (req, res, next) =>{
    res.render("user-views/signup")
})

router.post('/signup', (req, res, next) => {
    let username= req.body.theUsername;
    let pword = req.body.thePassword;
  

    // the new way with passport:
    if (!username || !pword) {
        req.flash('error', "please provide both username and password")
        res.redirect('/signup')
    }

    let salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(pword, salt);

    User
        .create({ username: username, password: hashedPassword })
        .then(() => {
            req.flash('sucess', "account successfully created")
            res.redirect('/profile')
        })
        .catch(err => console.log("error with furniture ", err))
})


//login routes
router.get('/login', (req,res,next) => {
  res.render('user-views/login')
})

router.post('/login', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));


// logout route
router.post('/logout', (req, res, next) => {
  req.logout()
  res.redirect('/login')
})


// FACEBOOK
// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
// app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { successRedirect: '/',
//                                       failureRedirect: '/login' }));


// router.get('/:Id', (req, res, next) =>{
//   // User
//   //   .findById(req.params.Id)
//   //   .then(theUser => {
//       res.render('/profile', {theUser});
//     })
// //     .catch(err => console.log('error with User', err))
// // })



module.exports = router;