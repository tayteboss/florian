import { mediaFragment } from './fragments';

const GALLERY_PAGE_QUERY = `
	query Query {
		galleryPage {
			slug
			seoTitle
			galleryImages {
				${mediaFragment}
			}
		}
	}
`;

export default GALLERY_PAGE_QUERY;
