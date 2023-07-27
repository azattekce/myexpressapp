import express from "express";
import bodyparser from "body-parser";
import morgan from "morgan";
import path from "path";


const app = express();


app.use(morgan("tiny"));
app.use(bodyparser.urlencoded({extended:true}));//html sayfaalrında gelen datayı ayrıştırmak için kullanırız.


person={
  Name,
  SurName,
  Age
}

const list=[person];


const port = 3003;
app.get('/', (req, res) => {
 res.render("home.ejs");
})


app.post("/", (req, res) => {  

  console.log("Name:"+req.body.Name);
  console.log("Surname:"+req.body.SurName);
  console.log("Age:"+req.body.Age);

  const name=req.body.Name;
  const surName=req.body.SurName;
  const age=req.body.Age;

  list.push({Name:name,SurName:surName,Age:age});

  res.render("home.ejs", {
    list
  });
});



app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
