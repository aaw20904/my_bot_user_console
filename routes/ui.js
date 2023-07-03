const express = require('express');
let router = express.Router();


router.get('/info',(req, res)=>{
    res.render('ui.ejs',{});
})

module.exports = router;