
import axios from 'axios';
import { SHOP_USERLIST } from './types';

export const ShopUserlist = (values) => async dispatch => { 
console.log(values);
 	var url = `/api/userlist/${values}`;

  const res = await axios.get(url)
	.then(function (response) {	
		 console.log("act resp");
		  console.log(response);		
    	 dispatch({ type: SHOP_USERLIST, payload: response.data});		   
	})
	.catch(function (error) {
	    console.log(error);
	});   

};