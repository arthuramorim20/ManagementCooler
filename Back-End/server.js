import express from 'express';
import router from './src/routes/main.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(router);
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Libera para qualquer origem
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(port || 8080, (error) => {
    if (error) {
        console.log(error.message);
        return
    }
    console.log(`Servidor na porta: ${port}`)
})