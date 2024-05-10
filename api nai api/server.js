const express = require('express');
const bodyParser = require('body=parser');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
        next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

var port = preocess.env.PORT

var ApiRouters = require('./routes/main');

app.get('/NodeApi', function (req, res){
    res.send('H1 br0');
});

app.listen(port);
console.log('server running on port' + port);
