const express = require('express');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');



const app = express();

const jsonParser = bodyParser.json();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());


app.use('/api/test', apiRouter);



app.listen(process.env.PORT || 3500, () => {
    console.log(`Votre app est disponible sur : ${process.env.PORT || '3500'}`);
})

