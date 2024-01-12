import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ipAddressAPI } from '../services/IpAddressService';

const rootReducer = combineReducers({
	[ipAddressAPI.reducerPath]: ipAddressAPI.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(ipAddressAPI.middleware),
});
