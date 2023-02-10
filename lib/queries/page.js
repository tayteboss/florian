const PAGE_QUERY = `
	query Query($pageSlug: String) {
		page(filter: {pageSlug: {eq: $pageSlug}}) {
			slug
		}
	}
`;

export default PAGE_QUERY;
