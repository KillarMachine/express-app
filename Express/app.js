const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const port = 80;

app.use("/static", express.static("static"));
app.use(express.urlencoded());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.status(200).render("home.pug");
});

app.get("/home", (req, res) => {
  res.status(200).render("home.pug");
});

app.get("/buy", (req, res) => {
  res.status(200).render("buy.pug");
});

app.get("/sale", (req, res) => {
  res.status(200).render("sale.pug");
});
app.post("/sale", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let gc = req.body.gc;
  let id = req.body.id;
  let data = `Name:${name},Email:${email},Graphics Card:${gc},ID:${id},`;
  fs.writeFileSync("database.txt", data);
  res.status(200).render("sale.pug");
});

app.listen(port, () => {
  console.log(`port no ${port}`);
});
// app.get("/demo", (req, res)=>{
//     res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
// });

// app.get("/",(req,res)=>{
//     res.send("<h1>home</h1>");
// });
// app.get("/about",(req,res)=>{
//     // res.end(home);
//     res.send("About");
// });
// app.get("/aboutp",(req,res)=>{
//     // res.end(home);
//     res.send("AboutP");
// });
