var express = require('express');
var app = express();
var fs = require('fs');

app.get('/endpoint', function (req, res) {
    fs.writeFileSync("text.json" , JSON.parse(req) ,function(err){
        if(err){
            return res.send({
                status:500,
                message: "error"
            })
        }
        else {
            res.status(200).send('Hello World');

        }
    } )
})
app.post('/endpoint', function (req, res) {
    console.log(req);
    // fs.writeFileSync("text.txt" , req.body ,function(err){
        // if(err){
        //     return res.send({
        //         status:500,
        //         message: "error"
        //     })
        // }
        // else {
            res.status(200).send('Hello World');

        // }
    // } )
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})