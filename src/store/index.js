import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './combineReducers';
import api from './middleware/api';

export default configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api]
});
