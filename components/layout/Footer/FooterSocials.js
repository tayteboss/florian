import { motion } from 'framer-motion';
import styled from 'styled-components';

const FooterSocialsWrapper = styled(motion.div)`
	grid-column: span 3;
	text-align: right;
	margin-top: auto;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		display: none;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
		grid-column: 1 / -1;
		text-align: center;
	}
`;

const Link = styled.a`
	color: var(--colour-blue);
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

const FooterSocials = ({ title, link, inView }) => (
	link && (
		<FooterSocialsWrapper
			variants={wrapperVariants}
			initial="hidden"
			animate={inView ? 'visible' : 'hidden'}
		>
			<Link href={link} target="_blank">
				{title && title}
			</Link>
		</FooterSocialsWrapper>
	)
);

export default FooterSocials;
