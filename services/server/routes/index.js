const express = require('express');
var db = require('../db');

const router = express.Router();

router.get('/', (req,res) => {
    res.end('Users service running');
});

router.get('/register', (req,res) => {
    db.CreateUser(req, (err) => {
        res.setHeader('Content-Type', 'application/json');
        err ? res.json({error : err}) : res.json({message : 'User created successfully'});
    })
});

router.post('/authenticate', (req,res) => {
    db.Authenticate(req, (err, response) => {
        res.setHeader('Content-Type', 'application/json');
        err ? res.json({error : err}) : res.json(response);
    })
});

 module.exports = router;
