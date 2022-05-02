var express = require('express');
var router = express.Router();
let dbConnection = require('./../db/data').localConnect();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login', function (req, res, next) {
  dbConnection.query('SELECT * FROM internshala.login', (error,results,fields) => {
    if(error) throw error;
    res.send(results);

  });
  // res.send('respond with a resource');
});

module.exports = router;
