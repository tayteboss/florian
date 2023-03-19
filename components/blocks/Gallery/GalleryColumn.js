import { motion } from 'framer-motion';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import MediaStack from '../../elements/MediaStack';

const GalleryColumnWrapper = styled.div`
	grid-column: span 4;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: ${(props) => (props.$removeOnMobile ? 'none' : 'block')};
		grid-column: 1 / -1;
		padding: 0 16px;
	}

	.media-stack {
		&:not(:last-of-type) {
			margin-bottom: ${pxToRem(16)};
		}
	}
`;

const GalleryColumnInner = styled(motion.div)``;

const GalleryColumn = ({ data, yScroll, docHeight, removeOnMobile }) => {
	if (data.length <= 0) return;
	const paddingTop = docHeight;

	return (
		<GalleryColumnWrapper
			style={{ paddingTop }}
			$removeOnMobile={removeOnMobile}
		>
			<GalleryColumnInner style={{ y: yScroll }}>
				{data.map((item, index) => (
					<MediaStack
						data={item}
						key={index}
						useNativeDimensions
						isPriority={index === 0 || index === 1}
					/>
				))}
			</GalleryColumnInner>
		</GalleryColumnWrapper>
	);
};

export default GalleryColumn;
