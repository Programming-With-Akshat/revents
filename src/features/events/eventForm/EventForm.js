import { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import cuid from 'cuid';

const EventForm = ({
	setFormOpen,
	setEvents,
	createEvent,
	selectedEvent,
	updateEvent
}) => {
	const [loading, setLoading] = useState(false);

	const initialValues = selectedEvent ?? {
		title: '',
		category: '',
		description: '',
		city: '',
		venue: '',
		date: ''
	};

	const [values, setValues] = useState(initialValues);

	const handleFormSubmit = () => {
		setLoading(true);

		setTimeout(() => {
			selectedEvent
				? updateEvent({ ...selectedEvent, ...values })
				: createEvent({
						...values,
						id: cuid(),
						hostedBy: 'Akshat',
						attendees: [],
						hostPhotoURL: 'assets/user.png'
				  });
			setFormOpen(false);
			setLoading(false);
		}, 1000);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	return (
		<div>
			<Segment clearing>
				<Header
					content={selectedEvent ? 'Edit the event' : 'Create new event'}
				/>
				<Form onSubmit={handleFormSubmit}>
					<Form.Field>
						<input
							type='text'
							placeholder='Title'
							name='title'
							value={values.title}
							onChange={(e) => handleInputChange(e)}
						/>
					</Form.Field>

					<Form.Field>
						<input
							type='text'
							placeholder='Category'
							name='category'
							value={values.category}
							onChange={(e) => handleInputChange(e)}
						/>
					</Form.Field>

					<Form.Field>
						<input
							type='text'
							placeholder='Description'
							name='description'
							value={values.description}
							onChange={(e) => handleInputChange(e)}
						/>
					</Form.Field>

					<Form.Field>
						<input
							type='text'
							placeholder='City'
							name='city'
							value={values.city}
							onChange={(e) => handleInputChange(e)}
						/>
					</Form.Field>

					<Form.Field>
						<input
							type='text'
							placeholder='Venue'
							name='venue'
							value={values.venue}
							onChange={(e) => handleInputChange(e)}
						/>
					</Form.Field>

					<Form.Field>
						<input
							type='date'
							placeholder='Date'
							name='date'
							value={values.date}
							onChange={(e) => handleInputChange(e)}
						/>
					</Form.Field>

					<Button
						type='submit'
						floated='right'
						positive
						content='Submit'
						loading={loading}
					/>
					<Button
						type='submit'
						floated='right'
						color='red'
						content='Cancel'
						onClick={() => setFormOpen(false)}
					/>
				</Form>
			</Segment>
		</div>
	);
};

export default EventForm;
