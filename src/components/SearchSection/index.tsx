import { Stack } from '@mui/material';
import InputBlock from '../InputBlock';
import ResultSection from '../ResultSection';
import { FC } from 'react';
import './styles.scss';

const SearchSection: FC = () => {
	return (
		<Stack alignItems={'center'} gap={'2rem'} className='searchSection'>
			<h1 className='searchSection_title'>IP Address Tracker</h1>
			<InputBlock />
			<ResultSection />
		</Stack>
	);
};

export default SearchSection;
