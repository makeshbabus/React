import axios from 'axios';
import { SHOPNO_SUBMIT } from './types';

export const ShopnoSubmit = (values) => async dispatch => { 
console.log(values);
  const res = await axios.post('/api/login/search',values)
	.then(function (response) {			
    	dispatch({ type: SHOPNO_SUBMIT, payload: response.data});				   
	})
	.catch(function (error) {
	    console.log(error);
	});   
 
};