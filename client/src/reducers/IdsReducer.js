import { SHOP_ID} from '../actions/types';

const Initial_State = {
	shopId : "",
};


export default function(state = Initial_State, action) {
  switch (action.type) {
    case SHOP_ID:
      return { ...state, shopId :action.payload}; 
    default:
      return state;
  }
}
