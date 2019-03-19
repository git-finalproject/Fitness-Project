const 
    express = require('express'),
    app = express(),
    port = 9000,
    bodyParser = require('body-parser'),
    router = require('./router.js'),
    mongoInit = require('./utils/init_mongo'),
    cors = require('cors')

mongoInit()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router.rout)
app.use(express.static('public'))

app.use(async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.listen(port, () => {
    console.log('app running on port ' + port)
})