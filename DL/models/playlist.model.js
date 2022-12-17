const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'users'
  },
  songList: [
    {
      songId: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
      uploaded: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
    },
  ],
  isActive: {
    type: Boolean,
    default: true,
  },
});

const playlistData = mongoose.model("playlist", playlistSchema);
module.exports = playlistData;
