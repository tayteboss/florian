import { motion } from 'framer-motion';
import styled from 'styled-components';
import RichText from '../../common/RichText';

const FooterContentWrapper = styled(motion.div)`
	grid-column: span 3;
	color: var(--colour-blue);
	margin-top: auto;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		text-align: center;
		margin-bottom: 32px;
	}

	a,
	p {
		color: var(--colour-yellow) !important;
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

const FooterContent = ({ content, link, inView, className }) => (
	content && (
		<FooterContentWrapper
			variants={wrapperVariants}
			initial="hidden"
			animate={inView ? 'visible' : 'hidden'}
			className={className}
		>
			{link ? (
				<Link href={link} target="_blank">
					<RichText data={content} />
				</Link>
			) : (
				<RichText data={content} />
			)}
		</FooterContentWrapper>
	)
);

export default FooterContent;
