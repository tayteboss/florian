import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import HomeInfo from '../components/blocks/HomeInfo';
import { getHomePage, getSiteData } from '../lib/datocms';
import MediaStack from '../components/common/MediaStack';

const PageWrapper = styled.div`
	.media-stack {
		height: 100vh;
		height: 100lvh;
		width: 100%;
		overflow: hidden;

		/* @media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			height: 90vh;
			height: 90lvh;
		} */

		.image-component-wrapper {
			padding-top: 0;
			height: 100%;
			width: 100%;
			transform: ${(props) => props.$inView ? 'scale(1)' : 'scale(1.1)'};

			transition: all 7000ms var(--transition-ease);
		}
	}
`;

const Page = ({ data, siteData }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	return (
		<PageWrapper ref={ref} $inView={inView}>
			<NextSeo
				title={data?.seoTitle || 'Florian'}
				description={siteData?.seoDescription}
				openGraph={{
					images: [
						{
							url: siteData?.seoImage?.url,
							width: 1200,
							height: 627,
						},
					],
				}}
			/>
			<MediaStack data={data.heroImage[0]} isPriority />
			<HomeInfo options={siteData} />
		</PageWrapper>
	);
};

export async function getStaticProps({ params }) {
	const data = await getHomePage();
	const siteData = await getSiteData();

	return {
		props: {
			data,
			siteData,
		},
	};
}

export default Page;
