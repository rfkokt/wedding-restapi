const express = require('express')
const cors = require('cors')
require("dotenv").config();

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const db = require('./app/models/')
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify : true
    })
    .then(() => {
        console.log(`Database connected!`)
    }).catch(() => {
    console.log(`Cannot connect database!`)
    process.exit()

})

app.get('/', (req, res) => {
    res.json({
        message: `Welcome to restful API Rifki Okta Pratama`
    })
})

require('./app/routes/post.routes')(app)

const PORT = 8000

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})