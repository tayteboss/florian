import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

const options = require('../../json/siteData.json');

const Main = styled.main`
	padding-top: var(--header-h);
`;

const Layout = ({ children }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	useEffect(() => {
		const html = document.querySelector('html');

		if (menuIsOpen) {
			html.classList.add('no-scroll');
		} else  {
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
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default Layout;
