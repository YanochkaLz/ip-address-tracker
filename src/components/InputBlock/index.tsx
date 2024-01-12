import { Box, Button, Input } from '@mui/material';
import React, { FC } from 'react';
import arrowImg from '../../assets/icon-arrow.svg';

import './styles.scss';

const InputBlock: FC = () => {
	return (
		<Box className='inputBlock'>
			<Input
				className='customInput'
				placeholder='Search for any IP address or domain'
			/>
			<Button className='submitBtn'>
				<img src={arrowImg} alt='Arrow' />
			</Button>
		</Box>
	);
};

export default InputBlock;
