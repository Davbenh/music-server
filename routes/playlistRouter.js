const express = require('express');
const router = express.Router();
const playlistService = require('../BL/playlist.service');


router.post('/add', async (req, res) => {
    let playlist = await playlistService.createplaylist(req.body);
    res.send(playlist);
  });

  router.get('/', async (req, res) => {
    let allplaylists = await playlistService.getAllplaylist(req.body);
    res.send(allplaylists);
  });

  
  router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    let allplaylists = await playlistService.getplaylistById(userId);
    res.send(allplaylists);
  });




module.exports = router;