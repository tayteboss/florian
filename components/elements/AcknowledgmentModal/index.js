import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import pxToRem from '../../../utils/pxToRem';
import RichText from '../../common/RichText';
import PrimaryButton from '../PrimaryButton';

const options = require('../../../json/siteData.json');

const AcknowledgmentModalWrapper = styled(motion.div)`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 50;
	background: var(--colour-yellow);
	border: 1px solid var(--colour-blue);
	border-radius: 16px;
	padding: 32px 64px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	row-gap: ${pxToRem(32)};
	width: 80%;
	max-width: 800px;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 32px;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		width: 90%;
		padding: 32px 16px;
	}

	p,
	a {
		color: var(--colour-blue) !important;
	}

	.primary-button {
		border: 1px solid var(--colour-blue);

		&:hover {
			background: var(--colour-yellow);
			color: var(--colour-blue);
		}
	}
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
			delay: 1,
		},
	},
};

const AcknowledgmentModal = ({ hasVisited }) => {
	const [closeModal, setCloseModal] = useState(false);
	const copy = options?.siteInformation?.acknowledgementOfCountry;

	const handleCloseModal = () => {
		setCloseModal(true);
		Cookies.set('visited', 'true', { expires: 1, path: '' });
	};

	return (
		<AnimatePresence>
			{!hasVisited && !closeModal && copy && (
				<AcknowledgmentModalWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<RichText data={copy} />
					<PrimaryButton
						title="Close"
						isDarkTheme
						handleMenuOpenClose={() => handleCloseModal()}
					/>
				</AcknowledgmentModalWrapper>
			)}
		</AnimatePresence>
	);
};

export default AcknowledgmentModal;
