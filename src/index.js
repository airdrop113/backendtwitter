import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { twitterRouter } from './routes/twitter.js';
import { tasksRouter } from './routes/tasks.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/twitter', twitterRouter);
app.use('/api/tasks', tasksRouter);

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});