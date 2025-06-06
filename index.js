const express = require("express");
const session = require("express-session");
const { checkedLoggedIn, byPassLogin } = require("./middlewares");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false })); // to use query string library - url encoded configuration

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    name: "session",
    cookie: {
      maxAge: 600000, // 10 minutes
    },
  })
);

// add detail here on the response locals
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

app.get("/", checkedLoggedIn, (req, res) => {
  res.render("home");
});

app.get("/login", byPassLogin, (req, res) => {
  res.render("login", { error: null });
});

app.post("/login", (req, res) => {
  console.log(req.body);

  if (
    req.body.username === process.env.DEMO_USERNAME &&
    req.body.password === process.env.DEMO_PASSWORD
  ) {
    // create session and store user logged details
    req.session.user = { id: 1, username: "eda", name: "Eda Gunay" };
    res.redirect("/");
  } else {
    res.render("login", { error: "Wrong credentials" });
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("session"); // delete from browser
  res.redirect("/login");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
