import express from 'express';
import morgan from 'morgan';
import routes from './routes/router';

const app = express();
const port = 3000;

app.use(morgan("common"));
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})