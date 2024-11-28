import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import web from './routes/web.js'
import ConnectDB from './db/connectdb.js';

const app = express();
const port = process.env.PORT || '8000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"

// database connection 
ConnectDB(DATABASE_URL);

//middleware to parse URL encoded data
app.use(express.urlencoded({extended: false}))

// load routes
app.use('/', web)

//set template engine
app.set("view engine","ejs");

//static file
app.use(express.static('public'));

// app.get('/', (req, res) =>{
//     res.send("Hello");
// })

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
    
})