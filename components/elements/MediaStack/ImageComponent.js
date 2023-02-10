import Image from 'next/image';
import styled from 'styled-components';

const ImageComponentWrapper = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	background-color: var(--colour-system-white-grey-700);
`;

const ImageComponent = ({ data }) => (
	<ImageComponentWrapper className="image-component-wrapper">
		<Image
			src={data.url}
			width={data.width}
			height={data.height}
			layout="responsive"
			objectFit="cover"
		/>
	</ImageComponentWrapper>
);

export default ImageComponent;
