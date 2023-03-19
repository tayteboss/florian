/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import '../styles/fonts.css';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import Layout from '../components/layout/Layout';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import use1vh from '../hooks/use1vh';
import useHeaderHeight from '../hooks/useHeaderHeight';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import IntroCanvas from '../components/blocks/IntroCanvas';

const pageTransitionVariants = {
	hidden: { opacity: 0, transition: { duration: 0.3 } },
	visible: { opacity: 1, transition: { duration: 0.3, delay: 0.25 } },
};

function App({ Component, pageProps }) {
	const [hasVisited, setHasVisited] = useState(false);

	const router = useRouter();
	const routerEvents = router.events;

	const handleExitComplete = () => {
		window.scrollTo(0, 0);
	};

	use1vh();
	useHeaderHeight();

	useEffect(() => {
		const hasCookies = Cookies.get('visited');

		if (hasCookies) {
			setHasVisited(true);
		}
	}, []);

	return (
		<>
			<GlobalStyles />
			<IntroCanvas />
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<NextSeo
				openGraph={{
					images: [
						{
							url: '/florian-og.jpg',
							width: 1200,
							height: 627,
						},
					],
				}}
			/>
			<ThemeProvider theme={theme}>
				<Layout hasVisited={hasVisited}>
					<AnimatePresence
						mode="wait"
						onExitComplete={() => handleExitComplete()}
					>
						<Component
							{...pageProps}
							key={router.asPath}
							pageTransitionVariants={pageTransitionVariants}
						/>
					</AnimatePresence>
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default App;
