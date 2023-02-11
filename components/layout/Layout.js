import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AcknowledgmentModal from '../elements/AcknowledgmentModal';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

const Main = styled.main``;

const Layout = ({ children, hasVisited }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	useEffect(() => {
		const html = document.querySelector('html');

		if (menuIsOpen) {
			html.classList.add('no-scroll');
		} else {
			html.classList.remove('no-scroll');
		}
	}, [menuIsOpen]);

	return (
		<>
			<Header
				handleMenuOpenClose={() => setMenuIsOpen(!menuIsOpen)}
				menuIsOpen={menuIsOpen}
			/>
			<Menu isOpen={menuIsOpen} />
			<AcknowledgmentModal hasVisited={hasVisited} />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
