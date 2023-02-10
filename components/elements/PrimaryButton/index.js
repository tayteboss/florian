import styled from 'styled-components';

const PrimaryButtonWrapper = styled.button`
	background: ${(props) =>
		props.$isDarkTheme ? 'var(--colour-blue)' : 'var(--colour-yellow)'};
	color: ${(props) =>
		props.$isDarkTheme ? 'var(--colour-yellow)' : 'var(--colour-blue)'};
	border: 1px solid var(--colour-yellow);
	padding: 6px 16px;
	border-radius: 100px;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: ${(props) =>
			props.isDarkTheme ? 'var(--colour-yellow)' : 'var(--colour-blue)'};
		color: ${(props) =>
			props.isDarkTheme ? 'var(--colour-blue)' : 'var(--colour-yellow)'};
	}
`;

const PrimaryButton = ({ title, handleMenuOpenClose, isDarkTheme }) => (
	<PrimaryButtonWrapper
		onClick={() => handleMenuOpenClose()}
		$isDarkTheme={isDarkTheme}
		className="primary-button"
	>
		{title || title}
	</PrimaryButtonWrapper>
);

export default PrimaryButton;
