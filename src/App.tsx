import { Stack } from '@mui/material';
import SearchSection from './components/SearchSection';
import MapSection from './components/MapSection';
import Attribution from './components/Attribution';

function App() {
	return (
		<>
			<Stack className='display'>
				<SearchSection />
				<MapSection />
			</Stack>
			<Attribution />
		</>
	);
}

export default App;
