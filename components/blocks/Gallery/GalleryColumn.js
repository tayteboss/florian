import { motion } from 'framer-motion';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import MediaStack from '../../elements/MediaStack';

const GalleryColumnWrapper = styled.div`
	grid-column: span 4;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: ${(props) => props.$removeOnMobile ? 'none' : 'block'};
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

	const shuffle = (array) => {
		let currentIndex = array.length;
		let randomIndex;

		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	};

	const shuffledData = shuffle(data);
	const paddingTop = docHeight;

	return (
		<GalleryColumnWrapper
			style={{ paddingTop }}
			$removeOnMobile={removeOnMobile}
		>
			<GalleryColumnInner style={{ y: yScroll }}>
				{shuffledData.map((item, index) => (
					<MediaStack data={item} key={index} useNativeDimensions />
				))}
			</GalleryColumnInner>
		</GalleryColumnWrapper>
	);
};

export default GalleryColumn;
