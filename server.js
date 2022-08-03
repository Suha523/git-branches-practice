const express = require('express')

const app = express()

const port = 3000

app.listen(port, function(req, res){
    console.log(`The server listening on port ${port}`);
})