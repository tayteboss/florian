import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoadingWrapper = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: transparent;
	z-index: 2;
	pointer-events: none;
`;

const Loader = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 16px;
	height: 16px;
	background: var(--colour-white);
	border-radius: 100%;
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
};

const childVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
	visible: {
		opacity: [1, 0],
		transition: {
			duration: 0.6,
			ease: 'easeInOut',
			repeat: 'Infinity',
			repeatType: 'mirror',
		},
	},
};

const FacadeLoading = () => (
	<LoadingWrapper
		variants={wrapperVariants}
		initial="hidden"
		animate="visible"
		exit="hidden"
	>
		<Loader
			variants={childVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		/>
	</LoadingWrapper>
);

export default FacadeLoading;
