import express from 'express';
import dotenv from 'dotenv';
import router from './routes/router';
import createTable from './model/table';

/**
 * teste
 */
const app = express();
const port = 3000;

app.use(express.json());
app.use(router)

dotenv.config()

createTable();


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
