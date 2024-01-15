import { FC, useEffect, useState } from 'react';
import happyImg from '../../assets/smile.png';
import unhappyImg from '../../assets/unhappy.png';
import withModal from '../Modal';
import { errorsMessage } from './constants';
import './styles.scss';

enum TypeError {
	server,
	advertising,
}

const ErrorComponent: FC<any> = ({ error }) => {
	const [typeError, setTypeError] = useState<TypeError>(TypeError.advertising);

	useEffect(() => {
		if (error.status === 'FETCH_ERROR') {
			setTypeError(TypeError.advertising);
		} else {
			setTypeError(TypeError.server);
		}
	}, [error]);

	return (
		<>
			<img
				className='error-img'
				src={typeError === TypeError.advertising ? happyImg : unhappyImg}
				alt='Smile'
			/>
			<p className='error-text'>
				{typeError === TypeError.advertising
					? errorsMessage.advertising
					: errorsMessage.server}
			</p>
			{typeError === TypeError.advertising && (
				<div className='error-video_wrapper'>
					<video className='error-video' autoPlay loop muted>
						<source src='./example.mp4' type='video/mp4' />
					</video>
				</div>
			)}
		</>
	);
};

const ErrorComponentModal = withModal(ErrorComponent);

export default ErrorComponentModal;
