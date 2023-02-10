const cleanUrl = (link) => {
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
