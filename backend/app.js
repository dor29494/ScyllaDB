import express from 'express';
const app = express();
import booksController from './controllers/booksController.js';

app.use('/api', booksController);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});