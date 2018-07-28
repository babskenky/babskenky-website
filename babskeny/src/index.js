import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore,combineReducers} from 'redux';
import logger from 'redux-logger';
// Insert this import line in your code:
import './_include/bootstrap';
import registerServiceWorker from './registerServiceWorker';
import {initialState} from './state'
import {Products,Cat} from './store_reducer/reducer';


const storeReducers = combineReducers({products:Products, cat:Cat,})
const store = createStore(storeReducers,initialState,applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter >
        <App/>
    </BrowserRouter>
    </Provider>, document.getElementById('root')
            );
registerServiceWorker();
