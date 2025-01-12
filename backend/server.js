const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routers/BookRouter');

const app = express();
const cors = require('cors');

//middleware
app.use(express.json());
app.use(cors());
app.use("/books", router);

//mongoDB connection
mongoose.connect("mongodb+srv://Library_admin:NY5ez33obhCelZGf@cluster0.uaa4e5k.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(3000);
})
.catch((err)=>console.log((err)));