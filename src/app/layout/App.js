import './styles.css';
import Header from '../../features/header/Header';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';
import { Route, useLocation } from 'react-router';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import Sandbox from '../../features/sandbox/Sandbox';

const App = () => {
	const { key } = useLocation();

	return (
		<>
			<Route exact path='/' component={HomePage} />
			<Route
				path={'/(.+)'}
				render={() => (
					<>
						<Header />

						<Container className='main'>
							<Route exact path='/events' component={EventDashboard} />
							<Route exact path='/sandbox' component={Sandbox} />
							<Route path='/events/:id' component={EventDetailedPage} />
							<Route
								path={['/createEvent', '/manage/:id']}
								component={EventForm}
								key={key}
							/>
						</Container>
					</>
				)}
			/>
		</>
	);
};

export default App;
