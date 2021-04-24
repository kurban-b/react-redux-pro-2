import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const initialState = {
    database: [],
    loading: true
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'START-LOADING':
        return {
                ...state,
                loading: false
            }
        case 'getUsers':
            return {
                ...state,
                database: action.payload
            }
        case 'DELETE':
            state.database = state.database.filter((item) => item.id !== action.payload);
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

