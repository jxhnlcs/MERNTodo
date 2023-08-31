const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 3333;

const app = express();

app.use(express.json());
app.use(cors());

const MONGODB_URI = 'mongodb+srv://johnfonfon:hiLXnq3IshjiRDpW@john.hqskojc.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexão com o mongo bem sucedida'))
  .catch(console.error);

const Todo = require('./models/Todo')

app.get('/todos', async (req:any, res:any) => {
  const todos = await Todo.find();

  res.json(todos);
})

app.post('/todo/new', (req:any, res:any) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save();

  res.json(todo);
})

app.delete('/todo/delete/:id', async (req:any, res:any) => {
  const result = await Todo.findByIdAndDelete(req.params.id);

  res.json(result);
})

app.listen(PORT || 3333, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});