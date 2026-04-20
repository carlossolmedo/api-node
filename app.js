const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 4000;

app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({success: "Hello World!"});
});

app.get('/users', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        user: "carlosit"
    })
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

app.listen(port, () => console.log(`API listening on port ${port} !`));