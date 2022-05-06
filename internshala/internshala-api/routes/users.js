var express = require('express');
var router = express.Router();
let dbConnection = require('./../db/data').localConnect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//post methods-register

router.post('/register', (req, res, next) => {
  let {
   email,
   paswd,
   firstname,
   lastname
    
  } = req.body

  let insertcommand = `INSERT INTO INTERNSHALA.login  (email,paswd,firstname,lastname)
   VALUES ('${email}','${paswd}','${ firstname}','${lastname}')`;

  dbConnection.query(insertcommand, (err, result) => {

    if (err) throw err;

    res.send("detailes are fetched from postman api detailes are inserted");

  });

})

//get methods-register
router.get('/register', function (req, res, next) {

  dbConnection.query('SELECT * FROM internshala.login', (error, results, fields) => {
    if (error) throw error;
    res.send(results);

  });

  //res.send('respond with a resource');

});







module.exports = router;
