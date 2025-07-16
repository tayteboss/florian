import { motion } from 'framer-motion';
import styled from 'styled-components';

const MenuBookingWrapper = styled(motion.div)`
	grid-column: span 3;
	color: var(--colour-blue) !important;
	margin-top: auto;
	text-align: right;
	margin-bottom: 8px;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: 6 / -1;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 4 / -1;
	}
`;

const Button = styled.a`
	background: var(--colour-blue);
	color: var(--colour-yellow);
	border: 1px solid var(--colour-blue);
	padding: 6px 16px;
	border-radius: 100px;
	text-decoration: none;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--colour-yellow);
		color: var(--colour-blue);
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

const MenuBooking = ({ isOpen }) => (
	<MenuBookingWrapper
		variants={wrapperVariants}
		initial="hidden"
		animate={isOpen ? 'visible' : 'hidden'}
	>
		<Button
			href="https://bookings.obeeapp.com/florian?fbclid=PAZXh0bgNhZW0CMTEAAafB_8GmGWv_zgGop3Tcsbnk-dUNjf3dK3i4CGXZKuaPuray1OLd4xOgqxuNVA_aem_L7i6DSxPLqc0xUYRUjnGqw"
			target="_blank"
		>
			Bookings
		</Button>
	</MenuBookingWrapper>
);

export default MenuBooking;
