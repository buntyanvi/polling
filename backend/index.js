import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const url = 'mongodb://localhost:27017/'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log('Error connecting to the database');
    console.error(error);
}
);

const app = express();




app.listen(process.env.PORT, () => {
    console.log('Server is running on port ${PORT}');
});