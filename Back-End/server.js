import express from 'express';
import router from './src/routes/main.js'
import cors from 'cors'
import bodyParser from 'body-parser';
const port = 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(bodyParser)


app.listen(port || 8080, (error) => {
    if (error) {
        console.log(error.message);
        return
    }
    console.log(`Servidor na porta: ${port}`)
})