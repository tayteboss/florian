import { mediaFragment } from './fragments';

const HOME_PAGE_QUERY = `
	query Query {
		homePage {
			slug
			seoTitle
			heroImage {
				${mediaFragment}
			}
		}
	}
`;

export default HOME_PAGE_QUERY;
