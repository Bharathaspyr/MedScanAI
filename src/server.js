import "dotenv/config"; 

import express, { json } from 'express';
import cors from 'cors';
import reportRoutes from '../src/routes/reportRoutes.js';
import authRoutes from '../src/routes/authRoutes.js';
import { isLoggedIn } from '../src/middleware/authMiddleware.js';

const app = express();

app.use(json());
app.use(cors()); // Enable CORS for cross-origin requests
app.use('/auth', authRoutes);
app.use('/reports', isLoggedIn, reportRoutes);
app.use('/', (req, res) => {
  res.send('Welcome to MedScan AI.');
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});