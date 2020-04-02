const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:8000" }));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(8000, () => console.log("Listening on port 8000"));
