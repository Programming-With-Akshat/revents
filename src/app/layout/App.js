import { useState } from 'react';
import './styles.css';
import Header from '../../features/header/Header';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';

const App = () => {
	const [formOpen, setFormOpen] = useState(false);

	return (
		<>
			<Header setFormOpen={setFormOpen} />

			<Container className='main'>
				<EventDashboard setFormOpen={setFormOpen} formOpen={formOpen} />
			</Container>
		</>
	);
};

export default App;
