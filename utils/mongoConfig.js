const mongoose = require('mongoose');
const mongoUser = process.env.MONGODB_USER;
const mongoPassword = process.env.MONGODB_PASSWORD;
const mongoName = process.env.MONGODB_NAME;

const url = `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoName}.m4pil.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("error", error => console.log(error));
mongoose.connection.once("open", () => console.log("Mongo DB konektatua"));
/*
MongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
  if (err) throw err;

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err;

    console.log(result);
  });
});*/
module.exports = mongoose;