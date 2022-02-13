const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required'],
    },
    usuario: {
        type: String,
        required: [true, 'The usuario text field is required'],
    },
});

// Create model for todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;