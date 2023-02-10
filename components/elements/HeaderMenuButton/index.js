import styled from 'styled-components';
import PrimaryButton from '../PrimaryButton';

const HeaderMenuButtonWrapper = styled.div``;

const HeaderMenuButton = ({ handleMenuOpenClose, menuIsOpen }) => (
	<HeaderMenuButtonWrapper>
		<PrimaryButton
			title={!menuIsOpen ? 'Menu' : 'Close'}
			handleMenuOpenClose={handleMenuOpenClose}
			isDarkTheme={menuIsOpen}
		/>
	</HeaderMenuButtonWrapper>
);

export default HeaderMenuButton;
