const express = require('express');
const router = express.Router();
const pool = require( '../modules/pool.js' ); 



// POST a new order
router.post('/', (req, res)=>{
    console.log( 'POST route OK');
    console.log(req.body);
    let queryString= (`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES($1, $2, $3, $4)`)
    // let values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]
    let values = [req.body[0], req.body[1], req.body[2], req.body[3]];
    pool.query(queryString, values)
    .then((results)=>{
        res.sendStatus(201)
    }).catch((err)=>{
        console.log('error in post route', err);
        res.sendStatus(500);
    })
});


module.exports=router;