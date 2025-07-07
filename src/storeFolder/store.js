
import {configureStore} from '@reduxjs/toolkit' ;
import todoReducer from '../features/todo/toddSlice'

export  const store = configureStore({
    reducer:{
        counter:todoReducer
    },
}) ;
