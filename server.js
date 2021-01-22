const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

/* connect DB to server */
mongoose.connect(
  "mongodb+srv://user:user@checkpoint-users-mongoo.hlr29.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    else console.log("DB is connected");
  }
);
app.use("/peoples", require("./routes/peopleRoutes"));
/* create server */
app.listen(5000, (err) => {
  if (err) console.log(err);
  else console.log("Server running on port 5000");
});
