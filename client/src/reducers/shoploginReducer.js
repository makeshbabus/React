import { SHOPNO_SUBMIT } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SHOPNO_SUBMIT:	
    	return action.payload;
    default:
      return state;
  }
}