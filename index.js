// IMPORTING
const express = require("express");
const app = express();
const axios = require("axios");

// .ENV FILE
const dotenv = require("dotenv");
dotenv.config();

// PORT
const PORT = process.env.PORT || 3333;

// BASIC SETTINGS

// templating engine
app.set("view engine", "ejs");
app.set("views", "./views");

// om public zichtbaar te maken
app.use(express.static("public"));

// ROUTING
app.get("/", async (req, res) => {
    res.render("pages/index", { title: "TEST" });
});

// BLOGS
app.get("/kilian", async (req, res) => {
    res.render("pages/kilian", { title: "kilian" });
});

app.get("/fenna", async (req, res) => {
    res.render("pages/fenna", { title: "fenna" });
});
app.get("/hackathon", async (req, res) => {
    res.render("pages/hackathon", { title: "hackathon" });
});
app.get("/jeffrey", async (req, res) => {
    res.render("pages/jeffrey", { title: "jeffrey"});
});
app.get("/jeremy", async (req, res) => {
    res.render("pages/jeremy", { title: "jeremy" });
});
app.get("/marieke", async (req, res) => {
    res.render("pages/marieke", { title: "marieke" });
});
app.get("/nils", async (req, res) => {
    res.render("pages/nils", { title: "nils" });
});
app.get("/rosa", async (req, res) => {
    res.render("pages/rosa", { title: "rosa" });
});

// app.get("/blog/:id/", async (req, res) => {

// });





// ROUTE ERROR(404) PAGINA
app.use(function (req, res) {
    res.locals.title = "Error 404";
    res.status(404).render("pages/404", {
        path: "Error",
    });
});

app.get("/*", (req, res) => {
    res.status(404).render("404", { title: "404" });
});

// PORT
app.listen(PORT, () => {
    console.log(`WeeklyNerd app listening on port ${PORT}`);
});
