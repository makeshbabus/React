import { SHOP_USERLIST } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SHOP_USERLIST:	
    	return action.payload;
    default:
      return state;
  }
}