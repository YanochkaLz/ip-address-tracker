import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ipAddressAPI } from '../services/IpAddressService';
import inputReducer from './reducers/InputSlice';

const rootReducer = combineReducers({
	inputReducer,
	[ipAddressAPI.reducerPath]: ipAddressAPI.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(ipAddressAPI.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
