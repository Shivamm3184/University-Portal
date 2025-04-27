const express = require('express')
const app = express()
const port = 4000 
const web = require('./routes/web')
const connectDb = require('./database/connectDb')   
const { connect } = require('mongoose')
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser')



// image upload
app.use(fileupload({ useTempFiles: true }))
//token
app.use(cookieParser())


// view set ejs
app.set('view engine','ejs')

// image css link
app.use(express.static('public'))
//connect db
connectDb()
// for getting data in terminal 
app.use(express.urlencoded({ extended:false}))

// connect flash and session
const session = require('express-session')
const flash = require('connect-flash')

//message
app.use(session({
    secret: 'secret',
    cookie: {maxAge:60000},
    resave: false,
    saveUninitialized:false
}));



//false message
app.use(flash());




// route load
app.use('/',web)

// server create
app.listen(port,()=>{
    console.log(`server start localhost:${port}`)
    console.log(`login with: http://localhost:4000/`)
})