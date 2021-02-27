import { Button, Form, Header, Segment } from 'semantic-ui-react';

const EventForm = ({ setFormOpen }) => {
	return (
		<div>
			<Segment clearing>
				<Header content='Create new event' />
				<Form>
					<Form.Field>
						<input type='text' placeholder='Title' />
					</Form.Field>

					<Form.Field>
						<input type='text' placeholder='Category' />
					</Form.Field>

					<Form.Field>
						<input type='text' placeholder='Description' />
					</Form.Field>

					<Form.Field>
						<input type='text' placeholder='City' />
					</Form.Field>

					<Form.Field>
						<input type='text' placeholder='Venue' />
					</Form.Field>

					<Form.Field>
						<input type='date' placeholder='Date' />
					</Form.Field>

					<Button type='submit' floated='right' positive content='Submit' />
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
