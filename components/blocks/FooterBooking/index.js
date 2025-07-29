import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const FooterBookingWrapper = styled(motion.div)`
	grid-column: span 3;
	text-align: right;
	margin-top: auto;
	margin-bottom: 8px;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		display: none;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
		grid-column: 1 / -1;
		text-align: center;
	}
`;

const Button = styled.a`
	background: transparent;
	color: var(--colour-yellow);
	border: 1px solid var(--colour-yellow);
	padding: 6px 16px;
	border-radius: 100px;
	text-decoration: none;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--colour-blue);
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

const FooterBooking = ({ inView }) => (
	<FooterBookingWrapper
		variants={wrapperVariants}
		initial="hidden"
		animate={inView ? 'visible' : 'hidden'}
	>
		<Button
			href="https://bookings.obeeapp.com/florian?fbclid=PAZXh0bgNhZW0CMTEAAafB_8GmGWv_zgGop3Tcsbnk-dUNjf3dK3i4CGXZKuaPuray1OLd4xOgqxuNVA_aem_L7i6DSxPLqc0xUYRUjnGqw"
			target="_blank"
		>
			Dinner Bookings
		</Button>
	</FooterBookingWrapper>
);

export default FooterBooking;
