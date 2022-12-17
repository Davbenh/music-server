const express = require('express');
const userService = require('../BL/user.service');
const router = express.Router();
const auth = require('../auth');



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
    let token = await userService.loginUser(req.body)
    console.log(token);
      res.send({token});
  } catch (err) {
    res.status(401).send(err);
  }})

  router.get('/',auth.validToken,async(req, res) => {
    try {
      
    let result = await userService.getAllUsers()
   
      res.send(result);
  } catch (err) {
    res.send(err);
  }})

  module.exports = router;