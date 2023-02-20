import { mediaFragment, richTextFragment } from './fragments';

const CONTACT_PAGE_QUERY = `
	query Query {
		contactPage {
			slug
			seoTitle
			headerImage {
				${mediaFragment}
			}
			formContent {
				${richTextFragment}
			}
		}
	}
`;

export default CONTACT_PAGE_QUERY;
