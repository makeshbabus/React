import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { IdDetails,ShopnoSubmit,ShopUserlist} from '../actions';

class User extends Component { 

	  constructor(props){
    super(props);
    this.state={
    	shopId:this.props.shoplogin.currentEmpShop._id,
    	users:[],
   user:[{
   	id:"1",
   	name:"test1"
   },
   {
   	id:"2",
   	name:"test2"
   }]
    };
  }

  	componentDidMount(){	
  	console.log("inside")	
			this.props.ShopUserlist(this.state.shopId);	
					
		
	}
  	
  	componentWillReceiveProps(nextProps){
		if(this.props.shopUserlist != nextProps.shopUserlist ){
			this.setState({users :nextProps.shopUserlist},() => {
				console.log("this.state.user");
	        		console.log(this.state.users);
			})
		}
	}
  render() {
  		console.log(this.props.idDetails.shopId);
  	const { classes } = this.props;
      return (
        <div >
         <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        <div style={{width:"100vw", height:"100vh",display:"flex",marginTop:"100px",overflow:"scroll"}}>
      	   {this.state.users.map((d,index) => {
						return (
      	   <Card key={index} className={classes.cardStyle}>
      	    <table>
      	    <tr>
      	    <td> Name </td>
      	    <td> {d.name} </td>
      	    </tr>

      	    <tr>
      	    <td> age </td>
      	    <td> {d.age} </td>
      	    </tr>



      	    <tr>
      	    <td> gender </td>
      	    <td> {d.gender} </td>
      	    </tr>


      	    <tr>
      	    <td> email </td>
      	    <td> {d.email} </td>
      	    </tr>


      	    <tr>
      	    <td> phone </td>
      	    <td> {d.phone} </td>
      	    </tr>

      	    </table>
      	   </Card>

      	   );
		 })}
      	   </div>
        </div>
      );
  }
}

const styles = {
  cardStyle: {
    color: '#000000',
    backgroundColor:"#7EF9FF",
    margin:10,
    padding:10,
    height:100,
    width:300,
  }
};


function mapStateToProps({ idDetails,shoplogin,shopUserlist }) {  
	console.log(shoplogin);
  return { idDetails , shoplogin,shopUserlist };
};

export default  connect(mapStateToProps, {IdDetails,ShopnoSubmit,ShopUserlist})(withStyles(styles)(User));