import { ListItem } from '@mui/material';
import { FC, memo } from 'react';

import './styles.scss';

interface IResultItem {
	property: string;
	value: string;
}

const ResultItem: FC<IResultItem> = ({ property, value }) => {
	return (
		<ListItem sx={{padding: '2rem'}} className='result-list_item'>
			<h3 className='result-list_item-P'>{property}</h3>
			<h2 className='result-list_item-V'>{value}</h2>
		</ListItem>
	);
};

export default memo(ResultItem);
