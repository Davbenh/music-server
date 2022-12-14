const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send({name:"moshenko", age: 2});

})

router.post('/', (req, res) => {
    //todo
})

module.exports = router;