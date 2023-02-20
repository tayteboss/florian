import Image from 'next/image';
import styled from 'styled-components';

const ImageComponentWrapper = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	background-color: var(--colour-blue);
`;

const ImageComponent = ({ data, useNativeDimensions, isPriority }) => (
	<ImageComponentWrapper className="image-component-wrapper">
		{useNativeDimensions ? (
			<Image
				src={data.url}
				width={data.width}
				height={data.height}
				layout="responsive"
				objectFit="cover"
				priority={isPriority}
			/>
		) : (
			<Image src={data.url} layout="fill" objectFit="cover" />
		)}
	</ImageComponentWrapper>
);

export default ImageComponent;
