import { motion } from 'framer-motion';
import styled from 'styled-components';

const IntroCanvasWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	height: 100lvh;
	width: 100%;
	background: var(--colour-blue);
	z-index: 500;
	pointer-events: none;
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			delay: 1,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			delay: 1,
		},
	},
};

const IntroCanvas = () => (
	<IntroCanvasWrapper
		variants={wrapperVariants}
		initial="visible"
		animate="hidden"
	/>
);

export default IntroCanvas;
