import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutGrid from '../../common/LayoutGrid';
import GalleryColumn from './GalleryColumn';

const GalleryWrapper = styled.section`
	.grid {
		grid-template-rows: masonry;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-bottom: 32px;
	}
`;

const Gallery = ({ data }) => {
	const [docHeight, setDocHeight] = useState(1000);

	const { scrollY } = useScroll();
	const y1 = useTransform(scrollY, [0, docHeight], [0, 0]);
	const y2 = useTransform(scrollY, [0, docHeight], [-1000, 0]);
	const y3 = useTransform(scrollY, [0, docHeight], [-2000, 0]);

	useEffect(() => {
		const { body } = document;
		const html = document.documentElement;

		const height = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);

		setDocHeight(height);
	}, []);

	return (
		<GalleryWrapper>
			<LayoutGrid>
				<GalleryColumn data={data} yScroll={y1} docHeight={0} />
				<GalleryColumn
					data={data}
					yScroll={y2}
					docHeight={1000}
					removeOnMobile
				/>
				<GalleryColumn
					data={data}
					yScroll={y3}
					docHeight={2000}
					removeOnMobile
				/>
			</LayoutGrid>
		</GalleryWrapper>
	);
};

export default Gallery;
