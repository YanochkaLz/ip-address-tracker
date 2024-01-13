import React, { useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIcon from '../../assets/icon-location.svg';

import './styles.scss';
import { useAppSelector } from '../../hooks/redux';
import { ipAddressAPI } from '../../services/IpAddressService';

const apiKey = process.env.REACT_APP_API_KEY || '';

const customIcon = new Icon({		
	iconUrl: markerIcon,
	iconSize: [30, 41], 
	iconAnchor: [12, 41],
	popupAnchor: [1, -34]
});

const MapSection = () => {
	const [cords, setCords] = useState({ lat: 0, lng: 0 });
	const ipAddress = useAppSelector(state => state.inputReducer.inputText);
	const { data } = ipAddressAPI.useGetIpDataQuery({
		apiKey,
		ipAddress,
	});

	const [mapKey, setMapKey] = useState(0); 

	useEffect(() => {
		if (data?.location?.lat) {
			const newCoords = {
				lat: data.location.lat || 0,
				lng: data.location.lng || 0,
			};
			setCords(newCoords);
			setMapKey(prevKey => prevKey + 1);
		}
	}, [data]);

	return (
		<Box className='mapSection'>
			<MapContainer
				key={mapKey}
				className='map'
				center={cords}
				zoom={13}
				scrollWheelZoom={true}
			>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
				<Marker position={cords} icon={customIcon} />
			</MapContainer>
		</Box>
	);
};

export default MapSection;
