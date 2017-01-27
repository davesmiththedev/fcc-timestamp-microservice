const express = require("express");
const app = express();

var port = process.env.PORT || 8080;

app.get('/:date', (req, res)=>{
    res.end(req.params.date);
});

app.get('/', (res, req)=>{
    res.end('Try again with a date');
});

app.listen(port, ()=>{
    console.log('Listening on port ' + port);
});