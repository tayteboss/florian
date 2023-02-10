import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import LayoutWrapper from '../components/common/LayoutWrapper';
import PrimaryLink from '../components/elements/PrimaryLink';
import pxToRem from '../utils/pxToRem';

const PageWrapper = styled.div``;

const PageInner = styled.div`
	padding: 80px 0 360px;
`;

const Title = styled.h2`
	margin-bottom: ${pxToRem(32)};
	max-width: 500px;
`;

const Page = () => (
	<PageWrapper>
		<NextSeo title="Florian - 404 Page" />
		<LayoutWrapper>
			<PageInner>
				<Title>Sorry, we couldn't find that page</Title>
				<PrimaryLink title="Go back home" link="/" target="_blank" />
			</PageInner>
		</LayoutWrapper>
	</PageWrapper>
);

export default Page;
