import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import MediaStack from '../../elements/MediaStack';

const PageHeaderWrapper = styled(motion.section)`
	position: relative;
	z-index: 1;
`;

const MediaWrapper = styled.div`
	.image-component-wrapper,
	.video-component-wrapper {
		height: 70vh;
	}
`;

const PageHeader = ({ data }) => {
	const { scrollY } = useScroll();
	const y1 = useTransform(scrollY, [0, 2000], [0, 500]);

	return (
		<PageHeaderWrapper style={{ y: y1 }} className="performance">
			<MediaWrapper>
				<MediaStack data={data} isPriority />
			</MediaWrapper>
		</PageHeaderWrapper>
	);
};

export default PageHeader;
