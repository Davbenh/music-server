const express = require('express');
const userService = require('../BL/user.service');
const router = express.Router();
const auth = require('../auth');
const { validate } = require('../DL/models/playlist.model');


router.post('/add', async (req, res) => {
    let user = await userService.createNewUser(req.body);
    res.send("user created");
  });

  router.post('/login', async (req, res) => {
    try {
    let result = await userService.loginUser(req.body)
      res.send(result);
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