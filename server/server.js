const express = require('express')
const mongoose = require('mongoose')
const PORT = 5000

const app = express()

// Middleware
app.use(express.json())

// Database connection
const url = "mongodb://localhost:27017/mernTodoApp"
options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(url, options)
  .then(console.log("Connected to MongoDB"))
  .catch(err => console.log(err))

const todoSchema = new mongoose.Schema({
  title: String,
  complete: {
    type: Boolean,
    default: false
  }
})

const Todo = mongoose.model('todo', todoSchema)

// Routes -----
app.get('/todos', (req, res) => {
  Todo.find()
    .then(todo => res.json(todo))
})

app.post('/todos', (req, res) => {
  const newTodo = new Todo({
    title: req.body.title
  })
  newTodo.save()
    .then(todo => res.json(todo))
})

app.delete('/todos/:id', (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json({remove: true}))
})




// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))