import EventListItem from './EventListItem';

const EventList = ({ events, selectEvent, deleteEvent }) => {
	return (
		<>
			{events.map((event) => (
				<EventListItem
					key={event.id}
					event={event}
					selectEvent={selectEvent}
					deleteEvent={deleteEvent}
				/>
			))}
		</>
	);
};

export default EventList;
