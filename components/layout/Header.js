import styled from 'styled-components';
import LayoutWrapper from '../common/LayoutWrapper';
import AnnouncementBanner from '../elements/AnnouncementBanner';
import HeaderLogo from '../elements/HeaderLogo';
import HeaderMenuButton from '../elements/HeaderMenuButton';

const options = require('../../json/siteData.json');

const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
`;

const HeaderInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 0;
`;

const Header = ({ handleMenuOpenClose, menuIsOpen }) => (
	<HeaderWrapper className="header">
		<AnnouncementBanner options={options?.siteInformation} />
		<LayoutWrapper>
			<HeaderInner>
				<HeaderLogo menuIsOpen={menuIsOpen} />
				<HeaderMenuButton
					handleMenuOpenClose={handleMenuOpenClose}
					menuIsOpen={menuIsOpen}
				/>
			</HeaderInner>
		</LayoutWrapper>
	</HeaderWrapper>
);

export default Header;
