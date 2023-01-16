const express = require('express');
const router = require('../router/router');
const app = express();

// use middleware to parse json payloads into the request model
app.use(express.json());
// req.body.username req.body.password

// use middleware for cors
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header","Origin, X-requested-with, Content-Type, Accept, Authorization");
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
    }
    next();
});

// service actuator - localhost:3000 
app.get('/', (req,res,next)=>{
    res.status(200).json({message:'Service is up'});
});

// use middleware to define my router
app.use('/assignment', router);

// use middleware to handle errors and bad url paths
app.use((req,res,next)=>{
    const error = new Error('URL Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});

module.exports = app;