import Link from 'next/link';
import styled from 'styled-components';
import cleanUrl from '../../../utils/cleanUrl';

const LinkTag = styled.a`
	background: ${(props) =>
		props.$isDarkTheme ? 'var(--colour-blue)' : 'var(--colour-yellow)'};
	color: ${(props) =>
		props.$isDarkTheme ? 'var(--colour-yellow)' : 'var(--colour-blue)'};
	border: 1px solid var(--colour-yellow);
	padding: 6px 16px;
	border-radius: 100px;
	text-decoration: none;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: ${(props) =>
			props.isDarkTheme ? 'var(--colour-yellow)' : 'var(--colour-blue)'};
		color: ${(props) =>
			props.isDarkTheme ? 'var(--colour-blue)' : 'var(--colour-yellow)'};
	}
`;

const PrimaryLink = ({ title, link, target = '_self', isDarkTheme }) => (
	<Link passHref href={cleanUrl(link)}>
		<LinkTag
			$isDarkTheme={isDarkTheme}
			className="primary-link"
			target={target}
		>
			{title || title}
		</LinkTag>
	</Link>
);

export default PrimaryLink;
