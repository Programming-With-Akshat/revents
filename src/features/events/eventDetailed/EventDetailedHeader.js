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

const EventDetailedHeader = ({ event }) => {
	return (
		<div>
			<Segment.Group>
				<Segment basic attached='top' style={{ padding: '0' }}>
					<Image
						style={eventImageStyle}
						src={`/assets/categoryImages/${event.category}.jpg`}
						fluid
					/>

					<Segment style={eventImageTextStyle} basic>
						<Item.Group>
							<Item>
								<Item.Content>
									<Header
										size='huge'
										content={event.title}
										style={{ color: 'white' }}
									/>
									<p>{event.date}</p>
									<p>
										Hosted by <strong>{event.hostedBy}</strong>
									</p>
								</Item.Content>
							</Item>
						</Item.Group>
					</Segment>
				</Segment>

				<Segment attached='bottom'>
					<Button color='red'>Cancel My Place</Button>
					<Button color='teal'>Join This Event</Button>

					<Button
						as={Link}
						to={`/manage/${event.id}`}
						color='orange'
						floated='right'
					>
						Manage Event
					</Button>
				</Segment>
			</Segment.Group>
		</div>
	);
};

export default EventDetailedHeader;
