const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended:true}));//html sayfaalrında gelen datayı ayrıştırmak için kullanırız.

const port = 3000

   app.get('/azat', (req, res) => {
    res.send('Hello World!')
   })

  app.get('/calculateage', (req, res) => {
    res.sendFile(__dirname+"/index.html")
  })

  app.get('/faktorel', (req, res) => {
    res.sendFile(__dirname+"/FaktorelAl.html")
  })



  app.post('/', (req, res) => {
     res.send('<div><p><h1>Girilen Ad:'+req.body.name+'</h1></p><br><p><h1>Girilen Yas:'+req.body.age+'</h1></p><br><</div>')
   });

   app.post('/faktorel', (req, res) => {
    console.log("faktorel posted");
    //res.send('<div><p><h1>Sayı:'+req.body.age+' Sonuc:'+faktorelAl(req.body.age)+'</h1></p><br></div>')

    document.getElementById("result").innerText(faktorelAl(req.body.age));

  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function faktorelAl(c) {
    if (c === 1) {
        return 1;
    } else {
        return c * faktorelAl(c - 1);
    }

}
