import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import ImageComponent from './ImageComponent';
import VideoComponent from './VideoComponent';

const MediaStackWrapper = styled.div`
	overflow: hidden;
`;

const MediaStack = ({ data, useNativeDimensions, isPriority }) => {
	const useVideo = data?.useVideo && data?.video?.url;
	const useImage = !data?.useVideo && data?.image;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	return (
		<MediaStackWrapper
			ref={ref}
			className={`media-stack view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			{useVideo && <VideoComponent data={data.video} inView={inView} />}
			{useImage && (
				<ImageComponent
					data={data.image}
					useNativeDimensions={useNativeDimensions}
					isPriority={isPriority}
				/>
			)}
		</MediaStackWrapper>
	);
};

export default MediaStack;
