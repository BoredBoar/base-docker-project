const express = require('express');
const app = express();
const massive = require('massive');
var connectionString = "postgres://new_user:new_pass@db/new_db";
var db = massive.connectSync({connectionString : connectionString});
db.saveDoc("test_doc", {test:'this is text text'}, function(err,doc) {
    if (err) console.error("Error encoutered:", err);
    console.log('Add doc:', doc);
});

app.get('/', function (req, res) {
  db.test_doc.findDoc(function(err, res) {
      if (err) console.error("Error encoutered:", err);
      console.log('found docs:', res);
  })
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
