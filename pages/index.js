import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import Facade from '../components/blocks/Facade';
import HomeInfo from '../components/blocks/HomeInfo';
import { getHomePage, getSiteData } from '../lib/datocms';

const PageWrapper = styled.div``;

const Page = ({ data, siteData }) => {
	return (
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
			<Facade />
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
