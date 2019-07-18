const express=require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

require('./models/Login');
require('./models/User');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI,{ useNewUrlParser: true });
const db=mongoose.connection;

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

app.get('/', (req, res) => {
	res.send('entered');
});


require('./routes/loginRoutes')(app);
require('./routes/userRoutes')(app);
//require('./routes/testRoutes')(app);

app.listen(5000);

