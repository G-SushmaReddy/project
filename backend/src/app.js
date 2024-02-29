require('dotenv').config()
const express = require('express')
const app = express()
const createHttpError = require('http-errors')
const UserRouter = require('./routes/user')
const FoodrequestRouter = require('./routes/foodrequest')
const PostRouter = require('./routes/post')
const fileUpload = require('express-fileupload');
const cors = require('cors')

app.use(cors())
app.use(fileUpload());



app.use('/public/posts', express.static('public/posts'))


app.use(express.json())

app.use('/api/user', UserRouter)
app.use('/api/foodrequest', FoodrequestRouter)
app.use('/api/post', PostRouter)


app.use((err, req, res, next) => {
    if (createHttpError.isHttpError(err)) {
        res.status(err.status).send({ message: err.message })
    } else {
        res.status(500).send({ message: err.message })
    }
    //error unknown
    res.status(500).send({ message: "Error Unknown" })
})

module.exports = app;