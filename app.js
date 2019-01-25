const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const phonebookRoute = require('./routes/phonebook.route')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let db_url = 'mongodb://localhost/phonebook';

const mongoDB = process.env.MONGODB_URI || db_url;
const port = process.env.PORT || 5000;

//db connection
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error: "))

// db.collection("phonebook").insertOne({name: 'pranjal', phone: 12312312}, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
// });

app.use('/phone', phonebookRoute);

app.listen(port, ()=>{"Server started at 5000"});





