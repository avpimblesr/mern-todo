const express = require('express');
const mongoose = require('mongoose');
PORT = 5000;

const app = express()

// Middle ware
app.use(express.json())

const db = "mongodb://localhost:27017/mernTodoApp"

mongoose.connect(db, ({ useNewUrlParser: true, useUnifiedTopology: true }))
  .then(console.log("Connected to MongoDb"))
  .catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))