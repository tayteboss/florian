import { mediaFragment, richTextFragment } from './fragments';

const CATERING_PAGE_QUERY = `
	query Query {
		cateringPage {
			slug
			seoTitle
			headerImage {
				${mediaFragment}
			}
			formContent {
				${richTextFragment}
			}
			cateringPdfButtonTitle
			cateringPdfFile {
				url
			}
		}
	}
`;

export default CATERING_PAGE_QUERY;
