import { PHONE_NO_SUBMIT } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case PHONE_NO_SUBMIT:	
    	return action.payload;
    default:
      return state;
  }
}
