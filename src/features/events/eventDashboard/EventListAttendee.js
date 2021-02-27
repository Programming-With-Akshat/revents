import { Image, List } from 'semantic-ui-react';

const EventListAttendee = ({ atendee }) => {
	return (
		<div style={{ marginRight: 15 }}>
			<List.Item>
				<Image size='mini' circular src={atendee.photoURL} />
			</List.Item>
		</div>
	);
};

export default EventListAttendee;
