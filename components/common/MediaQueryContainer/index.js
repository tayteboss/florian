import useMediaQuery from '../../../hooks/useMediaQuery';

export function MediaQueryContainer(props) {
	const { children, query } = props;

	const showChildren = useMediaQuery(query);

	return showChildren ? { children } : null;
}

// EXAMPLE USAGE
// <MediaQueryContainer query={`media ${theme.mediaBreakpoints.tabletPortrait}`}>
//	<Component />
// </MediaQueryContainer>;
