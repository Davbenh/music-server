
const playlistController = require("../DL/controllers/playlist.controller");
const userController = require("../DL/controllers/user.controller");




async function getAllplaylist() {
        const playlists = await playlistController.read({});
        return playlists;
}

async function createplaylist(playlist) {
    try {
        const res = await playlistController.create(playlist);
        console.log(res);
        return res;

    }
    catch (e) {
        console.log(e.message);
    }
}

const getplaylistById = async (userId) => {
    const res = await playlistController.read({userId : userId});
    console.log(res);
    return res;
}


module.exports = {getAllplaylist,createplaylist,getplaylistById}
