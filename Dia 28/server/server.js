// npm init
// npm i express mongoose nodemon dotenv

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('server...');
});

const database_url = "mongodb+srv://admin:admin@jsbootcamp.4vjhuhk.mongodb.net/test"
// abrir compass -> new connection -> database_url

// archivo ".env" -> DATABASE_URL = mongodb+srv://<username>:<password>@jsbootcamp.4vjhuhk.mongodb.net/test
require('dotenv').config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('db conectada');
});

// finaliza conexion a mongo

const routes = require('./routes/routes'); //modulzarizado y terminado en routes.js
app.use('/api', routes);

const router = express.Router(); // router propiamente dicho
module.exports = router;

//endpoints
router.post('/post', (request, response) => {
    response.send('post API');
});

router.get('/getAll', (request, response) => {
    response.send('traer todo de API');
});

router.get('/getOne/:username', (request, response) => {
    response.send(request.params.username);
});

router.post('/post', async(request, response) => {
    const user = new Model( {
        email: request.body.email,
        username: request.body.username,
        password: request.body.password
    });
    try {
        const data = await user.save();
        response.status(201).json(data);
    } catch (error) {
        response.status(400).json( {
            mensaje: error.message
        });
    }
});

router.get('/getOne/:email', async(request, response) => {
    try {
        const data = await Model.findById(request.params.id);
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json( {
            mensaje: error.message
        });
    }
});

//model
const userSchema = new mongoose.Schema( {
    email: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Users', userSchema);