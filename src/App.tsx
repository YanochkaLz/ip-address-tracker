import { Stack } from '@mui/material';
import SearchSection from './components/SearchSection';
import MapSection from './components/MapSection';

function App() {
	return (
		<>
			<Stack className='display'>
				<SearchSection />
				<MapSection />
			</Stack>
			{/* <Attribution /> */}
		</>
	);
}

export default App;
