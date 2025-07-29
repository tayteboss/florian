import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import FooterContent from '../../layout/Footer/FooterContent';
import FooterSocials from '../../layout/Footer/FooterSocials';
import FooterBooking from '../FooterBooking';

const HomeInfoWrapper = styled.section`
	position: fixed;
	bottom: 16px;
	left: 0;
	width: 100%;

	.content {
			p {
				margin-bottom: 8px !important;
			}
		}

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		.end-home-content {
			grid-column: span 4;
		}
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const HomeInfo = ({ options }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '15%',
	});

	return (
		<HomeInfoWrapper ref={ref}>
			<LayoutWrapper>
				<LayoutGrid>
					<FooterContent
						content={options?.hoursInformation}
						inView={inView}
						delay="300ms"
						className="end-home-content"
					/>
					<FooterContent
						content={options?.addressTitle}
						link={options?.addressGoogleMapsLink}
						inView={inView}
						delay="1000ms"
					/>
					<FooterContent
						content={options?.otherInformation}
						inView={inView}
						delay="300ms"
						className="end-home-content"
					/>
					{/* <FooterSocials
						title="Instagram"
						link={options?.instagramLink}
						inView={inView}
						delay="450ms"
					/> */}
					<FooterBooking inView={inView} />
				</LayoutGrid>
			</LayoutWrapper>
		</HomeInfoWrapper>
	);
};

export default HomeInfo;
