import express from 'express';
import birds from './birds/birds';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Connected to main api route');
});

routes.use('/birds', birds);

export default routes;