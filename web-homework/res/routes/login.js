var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next) {
  var name = req.query.name,
      psw = req.query.psw,
      callback = req.query.callback;


    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'webwork'
    });

    connection.connect();

    connection.query('SELECT * from user',function (err,rows) {
        if (err){
            throw err;
        }

        var usr = {
          name:rows[0].name,
            psw:rows[0].psw
        };
        if (usr.name === name&&usr.psw === psw){
           if(usr.name === hyq){
               res.send(callback+"("+"{"+
                   "\"status\":\"1\",\n"+
                   "\"url\":\"boss.html\""
                   +"}"+")");
           }
           else {
               res.send(callback+"("+"{"+
                   "\"status\":\"1\",\n"+
                   "\"url\":\"success.html\""
                   +"}"+")");
           }
        }
        else{
            res.send(callback+"("+"{"+
                "\"status\":\"0\",\n"+
                "\"url\":\"null\""
                +"}"+")")
        }
    });

    connection.end();


});

module.exports = router;
