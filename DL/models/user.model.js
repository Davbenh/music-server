const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
  },
  lName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  gender: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
});

// ליצור את המודל נתונים (את הטבלה - אוסף)
const userData = mongoose.model("user", userSchema);
// ליצא את המודל הנתונים
module.exports = userData;
