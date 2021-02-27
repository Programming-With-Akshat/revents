import { Link } from 'react-router-dom';
import { Button, Header, Image, Item, Segment } from 'semantic-ui-react';

const eventImageStyle = {
	filter: 'brightness(30%)'
};

const eventImageTextStyle = {
	position: 'absolute',
	bottom: '5%',
	left: '5%',
	width: '100%',
	height: 'auto',
	color: 'white'
};

const EventDetailedHeader = () => {
	return (
		<div>
			<Segment.Group>
				<Segment basic attached='top' style={{ padding: '0' }}>
					<Image
						style={eventImageStyle}
						src={`/assets/categoryImages/culture.jpg`}
						fluid
					/>

					<Segment style={eventImageTextStyle} basic>
						<Item.Group>
							<Item>
								<Item.Content>
									<Header
										size='huge'
										content='Event Title'
										style={{ color: 'white' }}
									/>
									<p>Event Date</p>
									<p>
										Hosted by <strong>Bob</strong>
									</p>
								</Item.Content>
							</Item>
						</Item.Group>
					</Segment>
				</Segment>

				<Segment attached='bottom'>
					<Button color='red'>Cancel My Place</Button>
					<Button color='teal'>Join This Event</Button>

					<Button as={Link} to={`/manage/`} color='orange' floated='right'>
						Manage Event
					</Button>
				</Segment>
			</Segment.Group>
		</div>
	);
};

export default EventDetailedHeader;
