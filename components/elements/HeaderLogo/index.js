import Link from 'next/link';
import styled from 'styled-components';
import Logo from '../../svgs/Logo';

const LinkTag = styled.a`
	width: 113px;

	svg {
		path {
			fill: ${(props) => props.$menuIsOpen ? 'var(--colour-blue)' : 'var(--colour-yellow)'};
			transition: all var(--transition-speed-default) var(--transition-ease);
		}
	}
`;

const HeaderLogo = ({ menuIsOpen }) => {
	return (
		<Link href="/" passHref>
			<LinkTag $menuIsOpen={menuIsOpen}>
				<Logo />
			</LinkTag>
		</Link>
	);
};

export default HeaderLogo;
