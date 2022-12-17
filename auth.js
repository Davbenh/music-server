const JWT = require("jsonwebtoken");
const secret = process.env.SECRET;


const createToken = async(data) => {
  
  let TOKEN = JWT.sign({ data }, secret, { expiresIn: "1h" });
  return TOKEN;
  
 
}

const validToken = async(req, res, next) => {
  try {
    const data = req.headers.authorization.replace("Bearer ", "");
    let token = JWT.verify(data, secret);
    next();
  } catch (err) {
    res.send(err);
  }
}

module.exports = { createToken, validToken };
