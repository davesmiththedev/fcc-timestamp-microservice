const express = require("express");
const app = express();
const moment = require("moment");

var port = process.env.PORT || 8080;

app.get('/:date', (req, res)=>{
    var date = req.params.date
    var naturalDate;
    var unixDate;

    if(isNaN(date)){
        naturalDate = moment(date).format("MMM D, YYYY");
        unixDate = moment(date).unix();
    }else{
        unixDate = moment.unix(date).unix();
        naturalDate = moment.unix(date).format("MMM D, YYYY");
    };
    if(unixDate){
        res.send({unix: unixDate, natural: naturalDate}, 200);
    }else{
        res.send({unix: null, natural: null}, 200);
    };
});

app.get('/', (req, res)=>{
    res.end('Try again with a date');
});

app.listen(port, ()=>{
    console.log('Listening on port ' + port);
});