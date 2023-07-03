const express = require('express');
let router = express.Router();


router.get('/info',(req, res)=>{
    res.json({time: new Date().toLocaleTimeString()});
})

module.exports = router;