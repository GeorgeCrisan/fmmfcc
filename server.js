const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb').MongoClient;
const multer = require('multer');

const app = express();

app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{

  res.sendFile(__dirname + '/views/index.html');
})





app.listen(process.env.PORT,()=>{
  console.log(`listen at ${process.env.PORT}`);
});
