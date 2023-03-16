import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import Gallery from '../../components/blocks/Gallery';
import { getGalleryPage, getSiteData } from '../../lib/datocms';

const PageWrapper = styled.div`
	padding-top: var(--header-h);
`;

const Page = ({
	data,
	siteData,
	galleryColOne,
	galleryColTwo,
	galleryColThree,
}) => (
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
		<Gallery
			galleryColOne={galleryColOne}
			galleryColTwo={galleryColTwo}
			galleryColThree={galleryColThree}
		/>
	</PageWrapper>
);

export async function getStaticProps({ params }) {
	const data = await getGalleryPage();
	const siteData = await getSiteData();

	const shuffle = (array) => {
		let currentIndex = array.length;
		let randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	};

	const galleryImages = shuffle(data.galleryImages);

	const len = galleryImages.length;
	const galleryColOne = galleryImages.slice(0, Math.floor(len / 3));
	const galleryColTwo = galleryImages.slice(
		Math.floor(len / 3),
		Math.floor((len / 3) * 2)
	);
	const galleryColThree = galleryImages.slice(Math.floor((len / 3) * 2));

	return {
		props: {
			data,
			siteData,
			galleryColOne,
			galleryColTwo,
			galleryColThree,
		},
	};
}

export default Page;
