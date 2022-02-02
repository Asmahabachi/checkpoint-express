const users = require("../users")

const express = require('express')

const router = express.Router

router.get('/users', (req, res) =>{
    res.send(users)
})

router.get("/users/ :id", (req, res) =>{
    res.json(users.filter(user => user.id === parseInt(req.params.id)))
 
 })
 
 router.delete("/users/ :id", (req, res) =>{
     res.json(users.filter(user => user.id !== parseInt(req.params.id)))
 })

 module.exports = router