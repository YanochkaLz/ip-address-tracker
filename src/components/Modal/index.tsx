import { Box, Modal } from '@mui/material';
import React, { ReactElement } from 'react';

import './styles.scss';

const withModal = <P extends object>(
	WrappedComponent: React.ComponentType<P>
) => {
	return function WithModal(props: P): ReactElement {
		return (
			<Modal className='modal-error' open={true}>
				<Box className='error'>
					<WrappedComponent {...props} />
				</Box>
			</Modal>
		);
	};
};

export default withModal;
