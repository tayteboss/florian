const cleanUrl = (link) => {
	console.log('link', link);

	if (link?.url) {
		return link.url;
	}
	if (link?.internalLink?.slug) {
		if (link.internalLink.slug === 'home') {
			return '/';
		}
		return link.internalLink.slug;
	}
	if (!link?.useInternalLink && link?.externalLink) {
		return link.externalLink;
	}
	return '/';
};

export default cleanUrl;
