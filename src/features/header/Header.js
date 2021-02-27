import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

const Header = ({ setFormOpen }) => {
	const history = useHistory();

	const [authenticated, setAuthenticated] = useState(false);

	const handleSignOut = () => {
		setAuthenticated(false);
		history.push('/');
	};

	return (
		<Menu inverted fixed='top'>
			<Container>
				<Menu.Item as={NavLink} exact to='/' header>
					<img src='/assets/logo.png' alt='Logo' style={{ marginRight: 15 }} />
					Re-vents
				</Menu.Item>

				<Menu.Item as={NavLink} to='/events' name='events' />

				{authenticated && (
					<Menu.Item as={NavLink} to='/createEvent'>
						<Button positive inverted content='Create Event' />
					</Menu.Item>
				)}
				{authenticated ? (
					<SignedInMenu signOut={handleSignOut} />
				) : (
					<SignedOutMenu setAuthenticated={setAuthenticated} />
				)}
			</Container>
		</Menu>
	);
};

export default Header;
