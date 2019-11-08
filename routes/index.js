const express = require('express');
const router = express.Router();

const sql = require('../utilities/sql');

router.get('/', (req, res) => {
    console.log('at the main route');
    let query = "SELECT ID, this, info, cost, happiness FROM tbl_explain";
    
    sql.query(query, (err, result) => {

        console.log(result);
    
        // res.render('home', { things: result[0]}); // 뭉탱이 array 그자체...
        res.render('home', { things: result });
    })
})

router.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    let query = `SELECT * FROM tbl_explain WHERE ID="${req.params.id}"`

    sql.query(query, (err, result) => {
        
     if (err) { throw err; console.log(err); }
        console.log(result);

        res.json(result[0]);
    })
})

module.exports = router;