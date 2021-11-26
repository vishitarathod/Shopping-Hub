import http from 'http';
import express from 'express'
import db from './config/database.js'
import './models/product.js';
import './models/user.js';
import router from './routes/index.js'
import cors from 'cors'
const app = express()

//create server
const httpServer = http.createServer(app);

//test connection
db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.log('Unable to connect to the database:', error))

//model automatically create in database
db.sync().then(function (res) {
    if (res) {
        console.log('table created successfully:', res.models);
    }
}).catch((err) => {
    console.log('error:', err);
});

app.use(cors())
app.use(express.json())

app.use('/', router)

httpServer.listen(4000, () => {
    console.log('server running on 4000')
});