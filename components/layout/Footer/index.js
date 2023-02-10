import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import FooterDeco from './FooterDeco';
import FooterInformation from './FooterInformation';
import FooterSecondary from './FooterSecondary';

const options = require('../../../json/siteData.json');

const FooterWrapper = styled.footer`
	min-height: calc(var(--vh) * 50);
`;

const FooterMainWrapper = styled.div`
	overflow: hidden;
`;

const Footer = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	return (
		<FooterWrapper ref={ref}>
			<FooterMainWrapper>
				<FooterDeco options={options} inView={inView} />
				<FooterInformation options={options} inView={inView} />
			</FooterMainWrapper>
			<FooterSecondary options={options} />
		</FooterWrapper>
	);
};

export default Footer;
