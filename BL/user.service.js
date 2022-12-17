const userDL = require("../DL/controllers/user.controller");
const auth = require("../auth");
const bcrypt = require("bcrypt");


const createNewUser = async (data) => {
    if (!data.email || !data.password) throw "missing data";

    let user = await userDL.readOne({ email: data.email });
    if (user) throw "משתמש קיים במערכת";
  
    let hashedPass = await bcrypt.hash(data.password, 10); // hashing user password
    data.password = hashedPass; // puting back the hashed password
  
    let res = await userDL.create(data);
    console.log(res);
  
    let token = await auth.createToken(data.email);
    return token;

}


const loginUser = async (data) => {
  let user = await userDL.readOne({ email: data.email }, "+password");
  if (!user) throw "משתמש לא קיים";


  let check = await bcrypt.compare(data.password, user.password);
  if (check) {
    let token = auth.createToken(data.email);
    return token;
  }
  throw "wrong pass";
};

const getAllUsers = async (data) => {
  try {
    let users = await userDL.read({});
    return users;
  } catch (err) {
    res.send(err);
  }
};
module.exports = { createNewUser, loginUser, getAllUsers };
