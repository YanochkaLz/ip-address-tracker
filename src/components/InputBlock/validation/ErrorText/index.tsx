import { Box } from '@mui/material';
import React, { FC } from 'react';

import './styles.scss';

interface IError {
  children: React.ReactNode
}

const ErrorText: FC<IError> = ({children}) => {
	return <Box className='error-input'>{children}</Box>;
};

export default ErrorText;
