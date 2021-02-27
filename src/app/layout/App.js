import { useState } from 'react';
import './styles.css';
import Header from '../../features/header/Header';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';

const App = () => {
	const [formOpen, setFormOpen] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState(null);

	const handleSelectEvent = (event) => {
		setSelectedEvent(event);
		setFormOpen(true);
	};

	const handleCreateFormOpen = () => {
		setSelectedEvent(null);
		setFormOpen(true);
	};

	return (
		<>
			<Header setFormOpen={handleCreateFormOpen} />

			<Container className='main'>
				<EventDashboard
					setFormOpen={setFormOpen}
					formOpen={formOpen}
					selectEvent={handleSelectEvent}
					selectedEvent={selectedEvent}
				/>
			</Container>
		</>
	);
};

export default App;
