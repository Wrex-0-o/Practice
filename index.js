import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended : true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}...`);
});