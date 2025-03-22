require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const DataRouter = require('./Router/DataRouter');

app.use(cors({
    origin: process.env.URL ||  "http://localhost:5173",
    withCredencials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', DataRouter);

app.listen(3000, () => {
    console.log("Server is running in on 3000");
})