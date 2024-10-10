const app = require('express')();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/hospitaldata")
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, "localhost", () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(err => {
    console.error("Database connection error:", err);
  });

const AdminSchema = new mongoose.Schema({
  username: {
    type: String, 
    required: true
  },
  hashedPw:{
    type:String, 
    required:true
  }
});

const User = mongoose.model("dbAdmin", AdminSchema);

app.get("/", (req, res) => {
  res.send("Hello World");
});
