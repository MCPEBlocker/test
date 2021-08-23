const express = require('express');
const initDatabase = require('./database/init');
const regionsRouter = require('./routes/regions');
const subregionsRouter = require('./routes/subregions');

initDatabase();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/regions', regionsRouter);
app.use('/subregions', subregionsRouter);

const port = process.env.PORT || 3456;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})