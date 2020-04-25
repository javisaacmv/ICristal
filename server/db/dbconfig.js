const mongoose = require("mongoose");

const dbRun = prod => {
  const conectionString = prod
    ? "mongodb+srv://javisaacmv:R4GIqzI6C4ZaIY7n@cluster0-gmkbr.mongodb.net/ICristal?retryWrites=true&w=majority"
    : "mongodb+srv://javisaacmv:R4GIqzI6C4ZaIY7n@cluster0-gmkbr.mongodb.net/ICtest?retryWrites=true&w=majority";

  mongoose
    .connect(conectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("db conected");
    });
};
module.exports = dbRun;
