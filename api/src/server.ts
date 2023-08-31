const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
import todoRoutes from './routes/todoRoutes';

const PORT = 3333;

const app = express();

app.use(express.json());
app.use(cors());

const MONGODB_URI = 'mongodb+srv://{USERNAME}:{PASSWORD}@{NAME}.hqskojc.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexão com o mongo bem sucedida'))
  .catch(console.error);

app.use('/', todoRoutes);

app.listen(PORT || 3333, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});
