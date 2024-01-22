
//invocation de dotenv
const dotenv = require('dotenv');

//initialisation de l'app
const cors = require('cors')
const express = require('express');
const app = express();
const db = require('./Services/dbConnection')
const routes = require('./Routes/routes')

//invocation du file .env grace a dotenv
dotenv.config()

//CORS
app.use(cors());

//parse
app.use(express.json())

//initialisation base URL
app.use('/api', routes)



//initialisation du PORT du server
const PORT = process.env.PORT


//connecte au server
db.connectToDatabase()
    .then(() =>{
        app.listen(PORT, () =>{
            console.log('connected to the server...')
        })
    })
    .catch((err) =>{
        console.error('Failed connection:' , err)
    })