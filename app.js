const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/courses", (req, res) => {
    res.render("courses");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/playlist", (req, res) => {
    res.render("playlist");
});

app.get("/profile", (req, res) => {
    res.render("profile");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/teacherProfile", (req, res) => {
    res.render("teacherProfile");
});

app.get("/teachers", (req, res) => {
    res.render("teachers");
});

app.get("/update", (req, res) => {
    res.render("update");
});

app.get("/watchVideo", (req, res) => {
    res.render("watchVideo");
});

app.listen(port, () => {
    console.log(`Server run this port ${port}`);
});