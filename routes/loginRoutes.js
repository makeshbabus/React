const mongoose = require('mongoose');
const Login = mongoose.model('login');

module.exports = app => {



  app.post('/api/signin', async (req, res) => {
    const { username,
            password,
          } = req.body;

    const login = new Login({
            username,
            password,
    });
    console.log("in");
   try {
      await login.save();
      res.send(login);
    } catch (err) {
      res.status(500).send(err);
    }
  });


   app.post('/api/login/search', async(req,res) => {
    
    const { username,password } = req.body;
    const currentEmpShop =await Login.findOne( 
      {
        username: username,
          password:password,
      }, {id:1} ).select();

    if(currentEmpShop)
     {
           res.send({status: true, currentEmpShop});
     }
     else
     {
         res.send({status: false});
     }
  });

};