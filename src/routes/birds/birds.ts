import express from 'express';

const birds = express.Router();

birds.get('/', (req, res) => {
    res.send('Birds Homepage');
});

birds.get('/about', (req, res) => {
    res.send('Welcome to the birds\' homepage');
});

export default birds;