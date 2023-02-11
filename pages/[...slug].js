import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { getAllPages, getPage, getSiteData } from '../lib/datocms';
import RichText from '../components/common/RichText';
import LayoutWrapper from '../components/common/LayoutWrapper';

const PageWrapper = styled(motion.div)`
	padding-top: var(--header-h);
`;

const ContentWrapper = styled.section`
	padding: 80px 0 180px;
	max-width: 750px;
	margin: 0 auto;
`;

const Page = ({ pageTransitionVariants, data, siteData }) => (
	<PageWrapper
		variants={pageTransitionVariants}
		initial="hidden"
		animate="visible"
		exit="hidden"
	>
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
		{data?.pageContent && (
			<LayoutWrapper>
				<ContentWrapper className="content">
					<RichText data={data.pageContent} />
				</ContentWrapper>
			</LayoutWrapper>
		)}
	</PageWrapper>
);

export const getStaticPaths = async () => {
	const allPages = await getAllPages();

	return {
		paths: allPages.allPages?.map((page) => `/${page.slug}`) || [],
		fallback: false,
	};
};

export const getStaticProps = async ({ params, preview = false }) => {
	const data = await getPage(params.slug[0], preview);
	const siteData = await getSiteData();

	return {
		props: {
			preview,
			data,
			siteData,
		},
	};
};

export default Page;
