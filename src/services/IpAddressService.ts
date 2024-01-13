import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';

export const ipAddressAPI = createApi({
	reducerPath: 'ipAddressAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://geo.ipify.org/api/v2/country,city',
	}),
	endpoints: build => ({
		getIpData: build.query<any, { apiKey: string; ipAddress: string }>({
			query: ({ apiKey, ipAddress }) => ({
				url: '',
				method: 'GET',
				params: {
					apiKey,
					ipAddress,
				},
			}),
		}),
	}),
});


