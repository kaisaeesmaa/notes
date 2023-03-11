const Note = require('../models/NoteModel' +
    '');
function get(rec, res){
   res.render('index', {notes: Note.get()})
}
function post(rec, res){
    res.send('post')
}
module.exports = {
    get,
    post
}