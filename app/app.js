var express = require('express');
var path = require ('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const Route = require('./routes');
// var mongoose   = require('mongoose');
// const dotenv = require('dotenv');



const app = express();


// mongoose.connect('mongodb://localhost/Json-Db', {
//   useMongoClient: true
// });

// // Get Mongoose to use the global promise library
// mongoose.Promise = global.Promise;
// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));





// dotenv.config();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(express.static(__dirname + '/public'));
//Store all HTML files in view folder.

// Require our routes into the application.
Route(app);

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (request, response) => response.status(404).send({
  message: 'INVALID ROUTE!!!.',
}));
app.post('*', (request, response) => response.status(404).send({
  message: 'INVALID ROUTE!!!.',
}));
app.put('*', (request, response) => response.status(404).send({
  message: 'INVALID ROUTE!!!.',
}));
app.delete('*', (request, response) => response.status(404).send({
  message: 'INVALID ROUTE!!!.',
}));

module.exports = app;
