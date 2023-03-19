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
			use3dFacade
		}
	}
`;

export default CONTACT_PAGE_QUERY;
