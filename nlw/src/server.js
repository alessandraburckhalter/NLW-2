const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// configuration nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// configuration static files
server
.use(express.urlencoded({extended: true }))
.use(express.static("public")) 
// routes app
.get("/",  pageLanding)
.get("/study", pageStudy)
.get("/teach", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)