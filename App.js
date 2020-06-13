
import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import MainNavigator from './src/navigation/MainNavigation';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import logger from 'redux-logger'
import Reactotron from './src/config/ReactotronConfig';
import heartBeatReducer from './src/store/reducers/heartBeat';

const rootReducer = combineReducers({
  heartBeat: heartBeatReducer,
});


let composed = compose(
  applyMiddleware(ReduxThunk)
)

if (__DEV__) { // Check if it's development mode
  composed = compose(
    Reactotron.createEnhancer(),
    applyMiddleware(ReduxThunk, logger)
  )
}


const store = createStore(rootReducer, undefined, composed);

const App = () => {
  return (
    <Provider store={store}>
        <MainNavigator />
    </Provider>
  );
};



export default App;
