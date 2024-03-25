const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const errorController = require("./controllers/error");

// const mongoConnect = require("./util/database").mongoConnect;

// const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findById("65fbbaf5abb20e921f4a8f9e")
//     .then((user) => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       console.log(req.user);
//       next();
//     })
//     .catch((err) => console.log("error finding UserById", err));
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://abhishekcareer1993:aC8jqUcCWRJp0u64@cluster0.enfqfx7.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((result) => {
    app.listen(3000);
    console.log("connection stablished");
  })
  .catch((err) => {
    console.log(err);
  });
