const Bundler = require('parcel-bundler'),
    express = require('express'),
    mongoose = require('mongoose');

const bundler = new Bundler('./public/index.html', {});

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/sims').then(() => {
    console.log('Connected to the DB');
}).catch(err => {
    console.error(err);
    process.exit(-1);
});

app.use('/api', require('./app/routes/api'));

app.use(bundler.middleware());

app.use(express.static('./dist'));
app.use('uploadsInstructor', express.static('uploadsInstructor'));

app.get('/', function (req, res) {
    res.sendFile('./dist/index.html');
});

//To prevent CORS errors
//append headers to any response sent
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

//Error handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Application is running on port 3000');
});

