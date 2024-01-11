import React from 'react';
import { ipAddressAPI } from './services/IpAddressService';
import Attribution from './components/Attribution';
const apiKey = process.env.REACT_APP_API_KEY || '';
const ipAddress = '8.8.8.8'

function App() {
  const { data, error, isLoading } = ipAddressAPI.useGetIpDataQuery({ apiKey, ipAddress })

  console.log(data, error)

  return (
    <>
      <Attribution />
    </>
  );
}

export default App;
