import { Stack } from '@mui/material';
import React from 'react';
import './styles.scss';
import InputBlock from '../InputBlock';
import ResultSection from '../ResultSection';

const SearchSection = () => {
	return (
		<Stack alignItems={'center'} gap={'2rem'} className='searchSection'>
			<h1 className='searchSection_title'>IP Address Tracker</h1>
			<InputBlock />
			<ResultSection />
		</Stack>
	);
};

export default SearchSection;
