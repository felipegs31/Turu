import * as actionTypes from '../actions/actionTypes';

const initialState = {
  heartBeat : 90
};


const setHeartBeat = (state, action) => {
  return {
    ...state,
    heartBeat: action.heartBeat
  }
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.SET_HEARTBEAT: return setHeartBeat( state, action );
    default: return state;
  }
};

export default reducer;
