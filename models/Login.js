const mongoose= require('mongoose');
const { Schema } =mongoose;

const loginSchema = new Schema({
username: String,
password: String,
},{ collection: 'login' });

mongoose.model('login', loginSchema);