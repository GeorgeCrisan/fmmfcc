const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb').MongoClient;
const multer = require('multer');
let upload = multer({des:'files/'});

const app = express();

app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{

  res.sendFile(__dirname + '/views/index.html');
});

app.post("/upload",upload.single('goFile'),(req,res,next)=>{
   console.log(req.file.size);
   res.json({size: req.file.size + ' bytes'});
});






app.listen(process.env.PORT,()=>{
  console.log(`listen at ${process.env.PORT}`);
});
