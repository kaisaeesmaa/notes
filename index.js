const express = require('express')
const app = express()
app.set('view engine', 'pug');
app.set('views', './views');

//Routes
app.get('/notes', require('./controllers/NotesController').get)
app.post('/notes', require('./controllers/NotesController').post)

app.listen(3000)

