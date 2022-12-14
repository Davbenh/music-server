const userDL = require('../DL/controllers/user.controller')
const auth = require('../auth');
const bcrypt = require('bcrypt');

async function createNewUser(data) {
    if(!data.email || !data.password) throw "missing data"

    let user = await userDL.readOne({email : data.email});
    if(user) throw "user is exist"

    let hashedPass = await bcrypt.hash(data.password, 10) // hashing user password
    data.password = hashedPass;  // puting back the hashed password

    let res = await userDL.create(data);
    console.log(res)

    return res;

}

async function getUserByPass(data) {
    let user = await userDL.readOne({email : data.email, password : data.password});
}



async function loginUser(data) {

    let user = await userDL.readOne({email:data.email},'+password');
    if(!user) throw "user is not exist"

let check =await bcrypt.compare(data.password,user.password)
if(check){
    let token = auth.createToken(data.email);
    return token;
}
throw "wrong pass"


}




async function getAllUsers(data) {
    try{
        let users = await userDL.read({});
        return users;
    } catch(err) {
        res.send(err)

}
}
module.exports = {createNewUser, loginUser,getAllUsers}