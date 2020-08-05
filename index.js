const express = require("express");
const app = express();
const PORT = process.env.PORT ||5000;

app.listen(PORT,function () {
    console.log("Server is running...");
})

app.use(express.static("public"));
//app.use("view engnine","ejs");
app.set("view engine","ejs");
var counter = 0;
app.get("/",function (req,res) {
    //res.sendFile(__dirname+"/views/Assignment_13.html");
    let title = "du bao thoi tiet"
    res.render("ass13",{
        title:title,
        counter: counter
    });
});

app.get("/login",function (req,res) {
    res.send("day la trang login");
});

const fs = require("fs");
app.get("/danh-muc",function (req,res) {
    let cats = fs.readFileSync("data/data.json","UTF-8");
    cats = JSON.parse(cats);
    res.render("lab10",{
        cats:cats
    });
});

app.get("/chi-tiet/:id", function (req,res) {
    let ID = req.params.id;
    let cats = fs.readFileSync("data/data.json","UTF-8");
    cats = JSON.parse(cats);
    let count = 0;
    cats.map(e=>{
        count++;
        if (e.id == ID){
            res.render("chitiet",{
                cat:e
            });
            count=0;
        }
    })
    if (count>= cats.length){
        res.send("khong tim thay");
    }
    // res.render("chitiet");
})