import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const initialState = {
    users: [],
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
                users: action.payload.data
            }
        case 'DELETE':
            state.users = state.users.filter((item) => item.id !== action.payload);
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

