import { Box, Button, Input } from '@mui/material';
import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
import validationSchema from './validation';
import arrowImg from '../../assets/icon-arrow.svg';
import ErrorText from './ErrorText';

import './styles.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { inputSlice } from '../../store/reducers/InputSlice';

const InputBlock: FC = () => {
	const ipAddress = useAppSelector(state => state.inputReducer.inputText);
	const dispatch = useAppDispatch();
	const { setInput } = inputSlice.actions;

	const formik = useFormik({
		initialValues: {
			ipAddress: ipAddress,
		},
		validationSchema,
		onSubmit: ({ ipAddress }) => {
			if (ipAddress) {
				dispatch(setInput(ipAddress));
			}
		},
	});

	const isError = formik.touched.ipAddress && formik.errors.ipAddress;

	return (
		<form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
			<Box className='inputBlock'>
				<Box className='customInput_block'>
					<Input
						value={formik.values.ipAddress}
						onChange={formik.handleChange}
						className='customInput'
						style={isError ? { color: 'var(--red)' } : { color: 'black' }}
						id='ipAddress'
						name='ipAddress'
						placeholder='Search for any IP address or domain'
					/>
					{isError && (
						<Box className='errorBlock'>
							<ErrorText>{formik.errors.ipAddress}</ErrorText>
						</Box>
					)}
				</Box>
				<Button type='submit' className='submitBtn'>
					<img src={arrowImg} alt='Arrow' />
				</Button>
			</Box>
		</form>
	);
};

export default InputBlock;
