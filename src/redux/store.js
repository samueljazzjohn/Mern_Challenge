import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice';
import onClickedSlice from './features/onClickedSlice';

const store = configureStore({
    reducer : {
        counter:counterSlice,
        onClick:onClickedSlice
    },
})

export default store;