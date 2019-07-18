import axios from 'axios';
import { SHOP_ID} from './types';

export const IdDetails = (Ids) => async dispatch => {  

	if(Ids.name === "shopId"){
		dispatch({ type: SHOP_ID, payload: Ids.value});
	}

};
