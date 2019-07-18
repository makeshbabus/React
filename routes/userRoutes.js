const mongoose = require('mongoose');
const User = mongoose.model('user');
const ObjectId = mongoose.Types.ObjectId;

module.exports = app => {



  app.post('/api/userin', async (req, res) => {
    const { loginId,
            name,
            age,
            gender,
            email,
            phone
          } = req.body;

    const user = new User({
            loginId,
            name,
            age,
            gender,
            email,
            phone
    });
    console.log("loginUser");
   try {
      await user.save();
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/userlist/:shopId', async (req, res) => {

  const { shopId } =req.params;// req.body.values;  
  var shopIdObj = ObjectId(shopId);

 
      await User.find(
            {loginId:shopIdObj},
            {name:1,age:1,gender:1,email:1,phone:1})
      .exec( function (err, result) {
                res.send(result);
            })

  });

};