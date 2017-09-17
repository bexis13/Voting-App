const express    = require("express"),
      router     = require("./routes/routes"),
      models     = require("./models/models"),
      app        = express(),
      path       = require("path"),
      cors       = require("cors"),
      bodyParser = require("body-parser"),
      mongoose   = require("mongoose"),
      passport   = require("passport");
      
//app config
app.use(cors());
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));
const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);


app.listen(port, ()=>{
    console.log("app is listening on port");
})
