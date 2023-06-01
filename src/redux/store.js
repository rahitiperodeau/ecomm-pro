import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { productData } from './productReducer';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware]
})

// sagaMiddleware.run(productData);

export default store;