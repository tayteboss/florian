import styled from 'styled-components';
import PrimaryButton from '../PrimaryButton';

const HeaderMenuButtonWrapper = styled.div``;

const Title = styled.p`
	text-align: right;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		max-width: 180px;
	}
`;

const HeaderMenuButton = ({ handleMenuOpenClose, menuIsOpen }) => (
	<HeaderMenuButtonWrapper>
		{true && (
			<Title>New website coming soon...</Title>
		)}
		{false && (
			<PrimaryButton
				title={!menuIsOpen ? 'Menu' : 'Close'}
				handleMenuOpenClose={handleMenuOpenClose}
				isDarkTheme={menuIsOpen}
			/>
		)}
	</HeaderMenuButtonWrapper>
);

export default HeaderMenuButton;
