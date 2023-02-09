import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import styled from 'styled-components';
import { getPage, getSiteData } from '../lib/datocms';

const PageWrapper = styled.div``;

const Page = ({ data, siteData }) => {
	return (
		<PageWrapper>
			{/* <Head>{renderMetaTags(data.seo)}</Head> */}
			Home
		</PageWrapper>
	);
};

export async function getStaticProps({ params }) {
	// const data = await getPage('home');
	const siteData = await getSiteData();
	const data = false;

	return {
		props: {
			data,
			siteData,
		},
	};
}

export default Page;
