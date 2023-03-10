import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import MenuDeco from './MenuDeco';
import MenuInformation from './MenuInformation';

const options = require('../../../json/siteData.json');

const MenuWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 90;
	height: 100lvh;
	height: 100vh;
	width: 100%;
	overflow-y: hidden;
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		pointerEvents: 'none',
		transition: {
			duration: 0.3,
		},
	},
	visible: {
		opacity: 1,
		pointerEvents: 'all',
		transition: {
			duration: 0.3,
		},
	},
};

const Menu = ({ isOpen }) => (
	<AnimatePresence>
		{isOpen && (
			<MenuWrapper
				variants={wrapperVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
				className="performance"
			>
				<MenuInformation options={options} isOpen={isOpen} />
				<MenuDeco options={options} isOpen={isOpen} />
			</MenuWrapper>
		)}
	</AnimatePresence>
);

export default Menu;
