const express = require('express');
const router = express.Router();
const Employee = require('../models/employees');



//for homepage load:

router.get('/', (req, res)=>{
    res.render('index', {
        title: "Employee Details"
    });
});




module.exports = router;