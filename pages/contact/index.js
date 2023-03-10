import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import Forms from '../../components/blocks/Form';
import FormContent from '../../components/blocks/FormContent';
import PageHeader from '../../components/blocks/PageHeader';
import { getContactPage, getSiteData } from '../../lib/datocms';

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
			<PageHeader data={data?.headerImage[0]} />
			<FormContent
				data={data?.formContent}
			/>
			<Forms isContactForm />
		</PageWrapper>
	);
};

export async function getStaticProps({ params }) {
	const data = await getContactPage();
	const siteData = await getSiteData();

	return {
		props: {
			data,
			siteData,
		},
	};
}

export default Page;
