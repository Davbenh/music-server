const JWT = require("jsonwebtoken");
const secret = process.env.SECRET;


async function createToken(data) {
  return JWT.sign({ data }, secret, { expiresIn: "1h" });
}

async function validToken(req, res, next) {
  try {
    const data = req.headers.authorization.replace("Bearer ", "");
    let token = JWT.verify(data, secret);
    next();
  } catch (err) {
    res.send(err);
  }
}

module.exports = { createToken, validToken };
