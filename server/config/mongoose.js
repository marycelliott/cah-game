const mongoose = require("mongoose");
const uri =
  "mongodb+srv://admin:admin@cah-game-lenko.mongodb.net/test?retryWrites=true&w=majority";

mongoose.set("runValidators", true);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
