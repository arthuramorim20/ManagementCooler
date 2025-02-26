import express from 'express';
import router from './src/routes/main.js'
import dotenv from 'dotenv'

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json())
app.use(router);

app.listen(port || 8080, (error) => {
    if (error) {
        console.log(error.message);
        return
    }
    console.log(`Servidor na porta: ${port}`)
})