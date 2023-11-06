const express = require ('express');
const router = require("./routes/book-routes");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//middlewares

app.use(express.json());
app.use(cors());
app.use("/books", router);//http://localhost:5000/books



mongoose.connect("mongodb+srv://admin:50IUL0hiVtWXpq1F@cluster0.wnhok3m.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(()=>console.log("connected to database"))
.then(()=> {
    app.listen(5000);
})
.catch((error) => console.log(err));









///50IUL0hiVtWXpq1F