const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    required: true,
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
