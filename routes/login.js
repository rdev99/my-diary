const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Diary = require('../models/diary');

router.post('/login',async (req,res) => {
    try {
        Diary.find({'usrname' : req.body.usrname}, async (err,data) => {
            if(data.length==0)
            {
                res.send("Wrong username");
            }
            else
            {
                bcrypt.compare(req.body.password,data[0].password,function (err,rs){
                    if(err)
                    {
                        res.status(500).send({"Error" : err});
                    }
                    if(rs)
                    {
                        res.status(200).send("Login");
                    }
                    else
                    {
                        res.status(200).send("Incorrect");
                    }
                });
            }
        })
    }
    catch(err) {
        res.status(500).send({"Error" : "Server Error"});
    }
    
})

router.post('/signup',async (req,res) => {
    try {
        Diary.find({'usrname' : req.body.usrname}, async (err,data) => {
            if(data.length!=0)
            {
                res.send("Notavailable");
            }
            else
            {
                const hashedPassword = await bcrypt.hash(req.body.password, 10)
                /*await Diary.create({
                    name : req.body.name,
                    usrname : req.body.usrname,
                    diaryname : req.body.diaryname,
                    password : req.body.password
                });*/
                const newDiary = new Diary({
                    name : req.body.name,
                    usrname : req.body.usrname,
                    diaryname : req.body.diaryname,
                    password : hashedPassword
                });
                newDiary.save().then(diary => res.send('Registered'));
            }
        })
    }
    catch(err) {
        res.status(500).send({"Error" : "Server Error"});
    }
})

module.exports = router;