import { GraphQLClient } from 'graphql-request';
import ALL_PAGES_QUERY from './queries/allPages';
import PAGE_QUERY from './queries/page';
import HOME_PAGE_QUERY from './queries/homePage';
import GALLERY_PAGE_QUERY from './queries/galleryPage';
import SITE_DATA_QUERY from './queries/siteData';

const request = ({ query, variables, preview }) => {
	const endpoint = preview
		? `https://graphql.datocms.com/preview`
		: `https://graphql.datocms.com/`;
	const client = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
		},
	});
	return client.request(query, variables);
};

export const getSiteData = async () => {
	const data = await request({
		query: SITE_DATA_QUERY,
		variables: { siteId: process.env.SITE_ID },
	});

	return data?.siteInformation;
};

export const getAllPages = async (siteId) => {
	const data = await request({
		query: ALL_PAGES_QUERY,
		variables: { siteId },
	});

	return data;
};

export const getPage = async (pageSlug, preview) => {
	const data = await request({
		query: PAGE_QUERY,
		variables: { pageSlug },
		preview,
	});

	return data?.page;
};

export const getHomePage = async (preview) => {
	const data = await request({
		query: HOME_PAGE_QUERY,
		preview,
	});

	return data?.homePage;
};

export const getGalleryPage = async (preview) => {
	const data = await request({
		query: GALLERY_PAGE_QUERY,
		preview,
	});

	return data?.galleryPage;
};
