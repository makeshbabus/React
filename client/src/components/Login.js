import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import {IdDetails,ShopnoSubmit} from '../actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  'input': {
    color: '#D8A995',
    '&::placeholder': {
      color: '#D8A995',
    }
  }
};

class Login extends Component { 

  constructor(props){
    super(props);
    this.state={
      user:'',
      password:'',
      loginStatus: false,
      errorUser: '',
      errorPwd:'',
    };
  }


userChange(event){
    this.setState({user:event.target.value}); 
    this.setState({errorUser: ''});   
  }

  pwdChange(event){
    this.setState({password:event.target.value}); 
    this.setState({errorPwd: ''});   
  }


  onSubmit(event){
        const values = ({username : this.state.user, password : this.state.password });
    console.log(values);
     if(this.state.user==""){
        this.setState({errorUser: 'Enter User mail..'})
      }
      else if(this.state.password==""){
        this.setState({errorPwd: 'Enter User Password..'})
      }
      else{
        this.props.ShopnoSubmit(values)
      .then(()=>{
        console.log(this.props.shoplogin);

          if(this.props.shoplogin.status){
            
            const Ids1 = ({name : "shopId", value : this.props.shoplogin.currentEmpShop._id});
            console.log(Ids1);
            this.props.IdDetails(Ids1); 
            this.setState({loginStatus:true});
          }
          else{
            alert("Enter Correct Details");
          }
      });
    }   
  }

      


  renderComponent(){   
    if (this.state.loginStatus===true) {
      return (
        <Redirect to="/User"/>
      );
    }

   
     const { classes } = this.props;
        return(   


          <div>
              <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Login
            </Typography>
          </Toolbar>
        </AppBar>
              <Grid container justify={"center"}>
                  <Grid
                  container
                  className="LoginItem"
                  alignItems={"center"}
                  direction={"row"}
                  justify={"center"}
                  >
                    <Grid item xs={12} sm={6} md={5} lg={4} xl={4}>
                      <Card className="card"  align="center">


                   
                   <div>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          value={this.state.user}
                          onChange={this.userChange.bind(this)}
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                        />
                     <div className="ErrorTextStyle">
                      {this.state.errorUser}
                      </div>
                        <br/>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          value={this.state.password}
                          onChange={this.pwdChange.bind(this)}
                        />
                      <div className="ErrorTextStyle">
                      {this.state.errorPwd}
                      </div>
                        <br/>
                        <Button
                          type="submit"
                          className="Buttonsubmit"
                          variant="contained"
                          color="primary"
                          onClick={this.onSubmit.bind(this)}
                        >
                          Login
                        </Button>
                   </div>  

                     
                      </Card> 
                    </Grid>
                  </Grid>
              </Grid>       
            </div>
        );

    
  }


  render() {
      return (
        <div>
      	   {this.renderComponent()}
        </div>
      );
  }
}

function mapStateToProps({idDetails,shoplogin }) {  
  return {idDetails, shoplogin };
};

export default  connect(mapStateToProps, {IdDetails,ShopnoSubmit}) (withStyles(styles) (Login));


