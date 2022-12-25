const JWT = require("jsonwebtoken");
const secret = process.env.SECRET;

const createToken = async (data) => {
  let TOKEN = JWT.sign({ data }, secret, { expiresIn: "5h" });
  return TOKEN;
};

const validToken = async (req, res, next) => {
  try {
    const token = req.headers.Authorization;
    console.log(token);
    if (token) {
      const toCheck = await JWT.verify(token.replace("Bearer ", ""), secret)
      if (toCheck !== undefined && toCheck !==null) {
        next();
      } else {
        throw new Error("Invalid token");
      }
    } else {
      throw new Error("Invalid token");
    }
  } catch (err) {
    res.send(err);
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
