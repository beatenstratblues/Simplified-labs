const express = require('express');
const req = require('express/lib/request');

const app = express();
app.use(express.json())


const port=8000

function palendromeRequest(req,res) {
    res.send('Palendrome request is recieved')

}

function palendromeAnswer(req,res) {
    console.log(req);
    let body=req.body;
    let a=body.Name="Harsh"
    res.send(a);
}



app.get('/',palendromeRequest);
app.post('/',palendromeAnswer);

app.listen(port, ()=> {
    console.log("The server has started on the port 8000.")
})

