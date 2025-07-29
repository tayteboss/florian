import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import FooterDeco from './FooterDeco';
import FooterInformation from './FooterInformation';
import FooterSecondary from './FooterSecondary';
import useViewportWidth from '../../../hooks/useViewportWidth';

const options = require('../../../json/siteData.json');

const FooterWrapper = styled.footer`
	min-height: calc(var(--vh) * 50);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const FooterMainWrapper = styled.div`
	overflow: hidden;
`;

const Footer = () => {
	const [showFooter, setShowFooter] = useState(true);

	const router = useRouter();
	const viewportWidth = useViewportWidth();

	useEffect(() => {
		if (router.pathname === '/') {
			if (viewportWidth === 'tabletPortrait' || viewportWidth === 'mobile') {
				setShowFooter(true);
			} else {
				setShowFooter(false);
			}
		} else {
			setShowFooter(true);
		}
	}, [router, viewportWidth]);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	return (
		showFooter && (
			<FooterWrapper ref={ref}>
				<FooterMainWrapper>
					<FooterDeco options={options} inView={inView} />
					<FooterInformation options={options} inView={inView} />
				</FooterMainWrapper>
				<FooterSecondary options={options} />
			</FooterWrapper>
		)
	);
};

export default Footer;
