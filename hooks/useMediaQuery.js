import { useEffect, useState } from 'react';
import useWindowDimensions from './useWindowDimensions';

const checkQuery = (query) => window.matchMedia(query).matches;

const useMediaQuery = (query) => {
	const [isMatching, setIsMatching] = useState(false);
	const { width, height } = useWindowDimensions();

	useEffect(() => {
		const newMatchingState = checkQuery(query);
		if (isMatching !== newMatchingState) {
			setIsMatching(newMatchingState);
		}
	}, [width, height]);

	return isMatching;
};

export default useMediaQuery;
