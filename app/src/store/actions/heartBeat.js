import * as actionTypes from './actionTypes';


export const setHeartBeat = (heartBeat) => {
    return {
      type: actionTypes.SET_HEARTBEAT,
      heartBeat
    }
  }
