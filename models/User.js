const mongoose = require('mongoose');
const { Schema }= mongoose;

const userSchema = new Schema ({
loginId: { type: Schema.Types.ObjectId, ref: 'Login'},
name: String,
age: String,
gender: String,
email: String,
phone: String
},{ collection: 'user' });


mongoose.model('user', userSchema);