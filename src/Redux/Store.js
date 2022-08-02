import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './MovieReducers/MovieSlice'

export const Store  = configureStore({
    reducer:{
        movies:movieReducer
    }
})