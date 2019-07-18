import { combineReducers } from 'redux';
import IdsReducer from './IdsReducer';

import shopUserlistReducer from './shopUserlistReducer';
import shoploginReducer from './shoploginReducer';

export default combineReducers({

  shopUserlist:shopUserlistReducer,
    shoplogin:shoploginReducer,
      idDetails : IdsReducer,
  
});
