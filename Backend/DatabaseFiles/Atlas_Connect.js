const mongoose = require("mongoose");
const url =
  "mongodb+srv://Arindam:Arindam%40123@cluster0.aazgw.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to  Database..");
  })
  .catch((e) => {
    console.log(e);
    console.log("Not Connected to  Database..");
  });
