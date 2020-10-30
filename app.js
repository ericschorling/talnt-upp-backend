var port = process.env.PORT || 3333;
const express = require('express'),
    app = express(),
    http = require('http'),
    hostname = '127.0.0.1',
    path = require('path'),
    cors = require('cors'),
    es6Renderer = require('express-es6-template-engine')

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    };
app.engine('html', es6Renderer)
app.set('views', '/views')
app.set('view engine', 'html')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Listening at ${hostname}:${port}`)
})

app.use(cors(corsOptions))

const rootController = require('./routes/index')
const postController = require('./routes/post')
const commentController = require('./routes/comment')

app.use('/', rootController)
app.use('/post', postController)
app.use('/comment',commentController)

module.exports = app;