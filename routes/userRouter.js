const express = require('express');
const userService = require('../BL/user.service');
const router = express.Router();
const auth = require('../auth');
const JWT = require("jsonwebtoken");
const secret = process.env.SECRET;



router.post('/signup', async (req, res) => {
  try {
    let token = await userService.createNewUser(req.body);
    res.send({token});
  } catch(err) {
    console.log(err);
    res.status(401).send(err);
  }
  });


  router.post('/login', async (req, res) => {
    try {
      console.log(req.body);
    let token = await userService.loginUser(req.body)
      res.send({token});
  } catch (err) {
    res.status(401).send(err);
  }})

  router.get('/',auth.validToken)

  module.exports = router;