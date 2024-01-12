import * as yup from 'yup';

const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;

const validationSchema = yup.object().shape({
	ipAddress: yup
		.string()
		.matches(ipRegex, 'Enter the correct IP address!')
		.required('IP address is required!'),
});

export default validationSchema;
