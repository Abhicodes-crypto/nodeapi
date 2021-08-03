const express = require('express')
const app = express()

const morgan = require('morgan')
app.use(morgan("dev"))

const postRoutes = require('./routes/post')

app.use("/", postRoutes)

const port = 8080
app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})


