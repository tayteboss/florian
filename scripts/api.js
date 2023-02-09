const fetch = require('node-fetch');
require('dotenv').config({
	path: '.env.local',
});

const fetchAPI = async (query, { variables } = {}) => {
	const url = `https://graphql.datocms.com/`;
	const json = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	})
		.then((response) => response.json())
		.then((json) => json);
	return json?.data;
};

const getSiteData = async () => {
	const query = `
		query Query {
			siteInformation {
				menu {
					useInternalLink
					internalLink {
						... on HomePageRecord {
							slug
						}
						... on ContactPageRecord {
							slug
						}
						... on CateringPageRecord {
							slug
						}
						... on GalleryPageRecord {
							slug
						}
						... on PageRecord {
							slug
						}
					}
					externalLink
					linkTitle
				}
				instagramLink
				addressTitle {
					blocks
					links
					value
				}
				hoursInformation {
					blocks
					links
					value
				}
				otherInformation {
					blocks
					links
					value
				}
				acknowledgementOfCountry {
					blocks
					links
					value
				}
				addressGoogleMapsLink
				showAnnouncementBar
				announcement {
					blocks
					links
					value
				}
				seoImage {
					url
				}
				seoDescription
				footerLinks {
					useInternalLink
					internalLink {
						... on HomePageRecord {
							slug
						}
						... on ContactPageRecord {
							slug
						}
						... on CateringPageRecord {
							slug
						}
						... on GalleryPageRecord {
							slug
						}
						... on PageRecord {
							slug
						}
					}
					externalLink
					linkTitle
				}
			}
		}
	`;
	const data = await fetchAPI(query);
	if (data.length <= 0) {
		return [];
	}
	return data;
};

module.exports = {
	getSiteData,
};
