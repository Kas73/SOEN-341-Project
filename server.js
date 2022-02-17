const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

const db = require("./src/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    })

app.get("/", (req, res) => {
    res.render("./App");
})

require("./src/routes/products.routes")(app);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})