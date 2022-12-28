const JWT = require("jsonwebtoken");
const secret = process.env.SECRET;

const createToken = async (data) => {
  let TOKEN = JWT.sign({ data }, secret, { expiresIn: "5h" });
  return TOKEN;
};

const validToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const tokenValidity = JWT.verify(token, secret);
console.log(tokenValidity);
  if (tokenValidity) {
    next();
  } else {
    res.sendStatus(401).json({ error: err.message });
  }
};

// const getUserFromToken = async(req, res, next) => {
//   try {
//     const token = req.headers.authorization.replace("Bearer ", "");
//     if (token) {
//       JWT.verify(token, secret, async (err, decodedToken) => {
//         if (err) {
//           res.locals.user = null;
//           next();
//         } else {
//           let user = await user.getUser(decodedToken.email);
//           res.user = user;
//           next();
//         }
//       });
//     } else {
//       res.user = null;
//       next();
//     }
//   } catch (err) {
//     res.send(err);
//   }
// }

module.exports = { createToken, validToken };
