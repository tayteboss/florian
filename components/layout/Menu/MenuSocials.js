import { motion } from 'framer-motion';
import styled from 'styled-components';

const MenuSocialsWrapper = styled(motion.div)`
	grid-column: span 3;
	text-align: right;
	margin-top: auto;
	display: ${(props) => props.$onMobile ? 'none' : 'block'};

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: span 2;
		display: ${(props) => props.$onMobile ? 'block' : 'none'};
		text-align: center;
	}
`;

const Link = styled.a`
	color: var(--colour-blue);

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		color: var(--colour-yellow);
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			delay: 0.3,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			delay: 0.3,
		},
	},
};

const MenuSocials = ({ title, link, isOpen, onMobile }) => (
	<MenuSocialsWrapper
		variants={wrapperVariants}
		initial="hidden"
		animate={isOpen ? 'visible' : 'hidden'}
		$onMobile={onMobile}
	>
		<Link href={link} target="_blank">
			{title && title}
		</Link>
	</MenuSocialsWrapper>
);

export default MenuSocials;
