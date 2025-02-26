import express from 'express';
import router from './src/routes/main.js'
const port = 8080;
const app = express();

app.use(router);
<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
=======
// app.use(express.urlencoded({ extended: true }))
>>>>>>> refs/remotes/origin/master

app.listen(port || 8080, (error) => {
    if (error) {
        console.log(error.message);
        return
    }
    console.log(`Servidor na porta: ${port}`)
})