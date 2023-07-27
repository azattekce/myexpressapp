import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3005;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.opet.com.tr/api/fuelprices/prices?ProvinceCode=34&IncludeAllProducts=true");
    const result = response.data;
    console.log(result);
    res.render("opetPrice.ejs", { data: result });

  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("opetPrice.ejs", {
      error: error.message,
    });
  }
});



app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
