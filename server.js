const express = require("express");
const app = express();

var port = process.env.PORT || 8080;

app.get('/:date', (req, res)=>{
    var date = res.params.date;
    if(date){
        res.end(date);
    }else{
        res.end('Try again with a date');
    };
});

app.get('/', (res, req)=>{
    res.end('Try again with a date');
});

app.listen(port, ()=>{
    console.log('Listening on port ' + port);
});