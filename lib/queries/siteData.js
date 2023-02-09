import { linkFragment, richTextFragment } from './fragments';

const SITE_DATA_QUERY = `
	query Query {
		siteInformation {
			menu {
				${linkFragment}
			}
			instagramLink
			addressTitle {
				${richTextFragment}
			}
			hoursInformation {
				${richTextFragment}
			}
			otherInformation {
				${richTextFragment}
			}
			acknowledgementOfCountry {
				${richTextFragment}
			}
			addressGoogleMapsLink
			showAnnouncementBar
			announcement {
				${richTextFragment}
			}
			seoImage {
				url
			}
			seoDescription
			footerLinks {
				${linkFragment}
			}
		}
	}
`;

export default SITE_DATA_QUERY;
