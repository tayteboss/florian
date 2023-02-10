import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import RichText from '../../common/RichText';
import Cross from '../../svgs/Cross';

const AnnouncementBannerWrapper = styled(motion.div)`
	background: var(--colour-yellow);
	position: relative;
`;

const AnnouncementBannerInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	max-width: 950px;
	margin: 0 auto;
	padding: 16px 64px;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		text-align: left;
		padding: 16px 32px 16px 16px;
	}

	p,
	a {
		color: var(--colour-blue) !important;
	}
`;

const CloseTrigger = styled.button`
	position: absolute;
	top: 50%;
	right: 16px;
	transform: translateY(-50%);

	svg {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	&:hover {
		svg {
			transform: rotate(180deg);
		}
	}
`;

const wrapperVariants = {
	hidden: {
		height: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
	visible: {
		height: 'auto',
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			delay: 1,
		},
	},
};

const AnnouncementBanner = ({ options }) => {
	const [closeAnnouncement, setCloseAnnouncement] = useState(false);

	return (
		<AnimatePresence>
			{options?.showAnnouncementBar && !closeAnnouncement && (
				<AnnouncementBannerWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<LayoutWrapper>
						<AnnouncementBannerInner>
							<RichText data={options?.announcement} />
						</AnnouncementBannerInner>
					</LayoutWrapper>
					<CloseTrigger onClick={() => setCloseAnnouncement(true)}>
						<Cross />
					</CloseTrigger>
				</AnnouncementBannerWrapper>
			)}
		</AnimatePresence>
	);
};

export default AnnouncementBanner;
