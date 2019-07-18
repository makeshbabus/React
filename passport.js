const passport    = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;
const mongoose = require('mongoose');
const Employee = mongoose.model('employee');

passport.use(new LocalStrategy({
        usernameField: 'phone',
        passwordField: 'password'
    },
    (phone, password, cb) => {
        //Assume there is a DB module pproviding a global UserModel
        return Employee.findOne({phone, password})
            .then(employee => {
                if (!employee) {
                    return cb(null, false, {message: 'Incorrect phone or password.'});
                }
                return cb(null, employee, {
                    message: 'Logged In Successfully'
                });
            })
            .catch(err => {
            	console.log(err);
                return cb(err);
            });
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'mahesiva1985'
    },
    function (jwtPayload, cb) {
        return cb(null, 'Authendicated');
        //find the user in db if needed
        // return Employee.findOne({_id:jwtPayload._id})
        //     .then(employee => {
        //         return cb(null, employee);
        //     })
        //     .catch(err => {
        //         return cb(err);
        //     });
    }
));