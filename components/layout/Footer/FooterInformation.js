import styled from 'styled-components';
import FooterContent from './FooterContent';
import FooterSocials from './FooterSocials';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';

const FooterInformationWrapper = styled.div`
	background: var(--colour-yellow);
	padding: 32px 0 16px;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		.end-footer-content {
			grid-column: span 4;
		}
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		.end-footer-content {
			grid-column: 1 / -1;
		}
	}
`;

const FooterInformation = ({ options, inView }) => (
	<FooterInformationWrapper>
		<LayoutWrapper>
			<LayoutGrid>
				<FooterContent
					content={options?.siteInformation?.addressTitle}
					link={options?.siteInformation?.addressGoogleMapsLink}
					inView={inView}
					delay="1000ms"
				/>
				<FooterContent
					content={options?.siteInformation?.hoursInformation}
					inView={inView}
					delay="300ms"
					className="end-footer-content"
				/>
				<FooterContent
					content={options?.siteInformation?.otherInformation}
					inView={inView}
					delay="300ms"
					className="end-footer-content"
				/>
				<FooterSocials
					title="Instagram"
					link={options?.siteInformation?.instagramLink}
					inView={inView}
					delay="450ms"
				/>
			</LayoutGrid>
		</LayoutWrapper>
	</FooterInformationWrapper>
);

export default FooterInformation;
