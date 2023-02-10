import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import MenuList from './MenuList';
import MenuContent from './MenuContent';
import MenuSocials from './MenuSocials';
import pxToRem from '../../../utils/pxToRem';

const MenuInformationWrapper = styled(motion.div)`
	background: var(--colour-yellow);
	height: calc(var(--vh) * 40);
	padding-bottom: ${pxToRem(16)};
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 2;

	.inner-wrapper {
		width: 100%;
	}

	.end-menu-content {
		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			grid-column: span 4;
		}
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			when: 'afterChildren',
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

const MenuInformation = ({ options, isOpen }) => (
	<AnimatePresence>
		{isOpen && (
			<MenuInformationWrapper
				variants={wrapperVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
			>
				<LayoutWrapper>
					<LayoutGrid>
						<MenuList
							data={options?.siteInformation?.menu}
							isOpen={isOpen}
						/>
						<MenuContent
							content={options?.siteInformation?.addressTitle}
							link={
								options?.siteInformation?.addressGoogleMapsLink
							}
							isOpen={isOpen}
							delay="1000ms"
						/>
						<MenuContent
							content={options?.siteInformation?.hoursInformation}
							isOpen={isOpen}
							delay="300ms"
							className="end-menu-content"
						/>
						<MenuSocials
							title="Instagram"
							link={options?.siteInformation?.instagramLink}
							isOpen={isOpen}
							delay="450ms"
						/>
					</LayoutGrid>
				</LayoutWrapper>
			</MenuInformationWrapper>
		)}
	</AnimatePresence>
);

export default MenuInformation;
