const express = require('express');
const bodyparser = require('body-parser');
const morgan=require('morgan');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));//html sayfaalrında gelen datayı ayrıştırmak için kullanırız.


//loglama
app.use(logData);


const port = 3000

  app.get('/azat', (req, res) => {
        console.log("Name:"+req.body.name);
        console.log("Surname:"+req.body.surname);

    res.send('Hello World!')
  })


  app.post('/azat', (req, res) => {
    var messaj="Name:"+req.body.name+"Surname:"+req.body.surname;
res.send(messaj)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function logData(req,res,next){

  console.log("loglama ->")
  console.log("loglama ->Method:"+req.method);
  console.log("loglama ->Req:"+req.body.urlencoded);
  console.log("Surname:"+req.body.surname);
  next();
}