import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';
import './styles.scss';

const Loading: FC = () => {
	return (
		<Box className='loading'>
			<CircularProgress
				size={60}
				sx={{
					color: 'var(--accent-color)',
				}}
			/>
		</Box>
	);
};

export default Loading;
