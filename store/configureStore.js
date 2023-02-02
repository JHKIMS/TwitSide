import {createWrapper} from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers'

const configStore = () =>{ // state와 reducer를 포함하는게 Store이다.
    const store = configureStore(reducer);
    return store;
}

const wrapper= createWrapper(configureStore,{
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;