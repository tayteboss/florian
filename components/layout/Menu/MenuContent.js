import { motion } from 'framer-motion';
import styled from 'styled-components';
import RichText from '../../common/RichText';

const MenuContentWrapper = styled(motion.div)`
	grid-column: span 3;
	color: var(--colour-blue) !important;
	margin-top: auto;
	display: ${(props) => props.$onMobile ? 'none' : 'block'};

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		display: ${(props) => props.$onMobile ? 'block' : 'none'};
		text-align: center;
		color: var(--colour-yellow) !important;
	}

	p,
	a {
		margin-bottom: 0 !important;
		margin-bottom: 8px !important;
	}
`;

const Link = styled.a`
	color: var(--colour-blue) !important;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		color: var(--colour-yellow) !important;
		text-align: center;
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

const MenuContent = ({ content, link, isOpen, className, onMobile }) => (
	<MenuContentWrapper
		variants={wrapperVariants}
		initial="hidden"
		animate={isOpen ? 'visible' : 'hidden'}
		className={className}
		$onMobile={onMobile}
	>
		{link ? (
			<Link href={link} target="_blank">
				<RichText data={content} />
			</Link>
		) : (
			<RichText data={content} />
		)}
	</MenuContentWrapper>
);

export default MenuContent;
