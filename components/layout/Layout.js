import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

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
