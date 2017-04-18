//import mongoose
var mongoose = require('mongoose');
console.log('friends model');
//set up blueprint for db
var FriendSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 2},
    last_name: {type: String, required: true, minlength: 2},
    birthday: {type: Date, required: true}
}, {timestamps: true}
);

//get schema
var Friend = mongoose.model('Friend', FriendSchema);
