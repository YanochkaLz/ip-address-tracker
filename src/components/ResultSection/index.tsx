import { Divider, List } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import ResultItem from './ResultItem';
import { ipAddressAPI } from '../../services/IpAddressService';
import { useAppSelector } from '../../hooks/redux';

import './styles.scss';
import Loading from '../Loading';
import ErrorComponentModal from '../Errors';

interface IResult {
	ipAddress: string;
	location: string;
	timezone: string;
	isp: string;
}

const apiKey = process.env.REACT_APP_API_KEY || '';

const ResultSection: FC = () => {
	const ipAddress = useAppSelector(state => state.inputReducer.inputText);

	const [result, setResult] = useState<IResult>({
		ipAddress: '',
		location: '',
		timezone: '',
		isp: '',
	});

	const { data, error, isLoading } = ipAddressAPI.useGetIpDataQuery({
		apiKey,
		ipAddress,
	});

	useEffect(() => {
		if (data) {
			setResult({
				ipAddress: data.ip,
				location:
					data.location.country +
					', ' +
					data.location.region +
					', ' +
					data.location.city,
				timezone: data.location.timezone,
				isp: data.isp,
			});
		}
	}, [data]);

	if (error && 'status' in error) {
		if (
			error.status === 422 &&
			'data' in error &&
			'messages' in (error.data as any) &&
			(error.data as any).messages === 'Input correct IPv4 or IPv6 address.'
		) {
			return (
				<div className='results-list results-error'>
					The entered IP address does not exist! 
					<br />
					Please check the provided IP
					address and ensure it is valid!
				</div>
			);
		} else {
			return <ErrorComponentModal error={error}/>;
		}
	}

	if (isLoading) {
		return <Loading />;
	}

	return (
		<List className='results-list'>
			<ResultItem property='IP ADDRESS' value={result.ipAddress} />
			<Divider orientation='vertical' variant='middle' flexItem />
			<ResultItem property='LOCATION' value={result.location} />
			<Divider orientation='vertical' variant='middle' flexItem />
			<ResultItem property='TIMEZONE' value={result.timezone} />
			<Divider orientation='vertical' variant='middle' flexItem />
			<ResultItem property='ISP' value={result.isp} />
		</List>
	);
};

export default ResultSection;
