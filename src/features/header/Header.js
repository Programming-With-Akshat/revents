import { useState } from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

const Header = ({ setFormOpen }) => {
	const [loading, setLoading] = useState(false);

	const openForm = () => {
		setLoading(true);

		setTimeout(() => {
			setFormOpen(true);
			setLoading(false);
		}, 1000);
	};

	return (
		<Menu inverted fixed='top'>
			<Container>
				<Menu.Item header>
					<img src='/assets/logo.png' alt='Logo' style={{ marginRight: 15 }} />
					Re-vents
				</Menu.Item>

				<Menu.Item name='events' />

				<Menu.Item>
					<Button
						onClick={openForm}
						loading={loading}
						positive
						inverted
						content='Create Event'
					/>
				</Menu.Item>

				<Menu.Item position='right'>
					<Button basic inverted content='Login' />
					<Button
						basic
						inverted
						content='Register'
						style={{ marginLeft: '0.5em' }}
					/>
				</Menu.Item>
			</Container>
		</Menu>
	);
};

export default Header;
