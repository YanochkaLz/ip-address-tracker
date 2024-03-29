import { FC } from 'react';

import './styles.scss';

const Attribution: FC = () => {
	return (
		<div className='attribution'>
			Challenge by{' '}
			<a
				href='https://www.frontendmentor.io?ref=challenge'
				target='_blank'
				rel='noreferrer'
			>
				Frontend Mentor
			</a>
			. Coded by Yana Lazarieva.
		</div>
	);
};

export default Attribution;
