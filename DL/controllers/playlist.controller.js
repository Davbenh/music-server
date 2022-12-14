const playlistData = require('../models/playlist.model')

async function create(data) {
    return await playlistData.create(data)
}
async function read(filter,proj) {
    return await playlistData.find(filter,proj)
}
async function readOne(filter,proj) {
    let res = await read(filter,proj)
    return res[0]
}
async function update(id, newData) {
    return await playlistData.updateOne({ _id: id }, newData)
}
async function del(id) {
    return await update(id, { isActive: false })
}


module.exports = { create, read, update, del ,readOne }



