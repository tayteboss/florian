import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import Gallery from '../../components/blocks/Gallery';
import { getGalleryPage, getSiteData } from '../../lib/datocms';

const PageWrapper = styled.div``;

const Page = ({ data, siteData }) => (
	<PageWrapper>
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
		<Gallery data={data?.galleryImages} />
	</PageWrapper>
);

export async function getStaticProps({ params }) {
	const data = await getGalleryPage();
	const siteData = await getSiteData();

	return {
		props: {
			data,
			siteData,
		},
	};
}

export default Page;
