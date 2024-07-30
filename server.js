const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json({ extended: false }));

const corsOptions = {
    origin: ['https://phenomenal-kheer-0a12d1.netlify.app', 'http://localhost:3000'],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/api/auth', require('./routes/auth'));

app.use('/api/tasks', require('./routes/tasks'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
