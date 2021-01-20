const express = require('express');
const router = express.Router();

const Diary = require('../models/diary');

router.post('/info',async (req,res) => {
    let user = req.body.user;
    console.log(user);
    Diary.findOne({usrname : user},async(err,data) => {
        res.send(data);
    })
})

module.exports = router;