import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import OliveBranch from '../../svgs/OliveBranch';
import Vase from '../../svgs/Vase';
import Baguette from '../../svgs/Baguette';
import Rooster from '../../svgs/Rooster';
import Tart from '../../svgs/Tart';
import BayLeaf from '../../svgs/BayLeaf';
import Sausage from '../../svgs/Sausage';
import Sun from '../../svgs/Sun';
import Mushrooms from '../../svgs/Mushroom';
import WineBottle from '../../svgs/WineBottle';
import Croissant from '../../svgs/Croissant';
import Radish from '../../svgs/Radish';
import Sardines from '../../svgs/Sardines';
import Cheese from '../../svgs/SwissCheese';
import Corkscrew from '../../svgs/CorkScrew';
import MenuContent from './MenuContent';
import MenuSocials from './MenuSocials';
import pxToRem from '../../../utils/pxToRem';

const MenuDecoWrapper = styled(motion.div)`
	height: 60lvh;
	height: 60vh;
	background: var(--colour-blue);
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow: hidden;

	svg {
		max-height: 114px;
		max-width: 116px;
		position: absolute;
		top: 100%;
		left: 100%;

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			filter: brightness(0.5);
		}

		path {
			fill: var(--colour-yellow);
		}
	}

	// ROW 1
	.olive-branch {
		top: 5%;
		left: -3%;
	}

	.vase {
		top: 3%;
		left: 15%;
		width: 61px;
		height: 91px;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.baguette {
		top: 25%;
		left: 20%;
		width: 120px;
		height: 40px;
		transform: rotate(45deg);

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.rooster {
		top: 5%;
		left: 35%;
		width: 80px;
		height: 92px;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			top: -2%;
			left: 30%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			display: none;
		}
	}

	.tart {
		top: -3%;
		left: 50%;
		width: 98px;
		height: 83px;
	}

	.bay-leaf {
		top: 1%;
		left: 60%;
		width: 71px;
		height: 101px;
		transform: rotate(25deg);

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			left: 80%;
		}
	}

	.sausage {
		top: 15%;
		left: 70%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.olive-branch-2 {
		top: 6%;
		left: 80%;

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			display: none;
		}
	}

	.vase-2 {
		top: 3%;
		left: 95%;
	}

	// ROW 2
	.sun {
		top: 30%;
		left: 10%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.mushroom {
		top: 35%;
		left: 35%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.wine-bottle {
		top: 25%;
		left: 50%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.sun-2 {
		top: 30%;
		left: 80%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			left: 90%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			display: none;
		}
	}

	.baguette-2 {
		top: 50%;
		left: 95%;
		width: 120px;
		height: 40px;
		transform: rotate(120deg);

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			top: 70%;
			left: 90%;
			transform: rotate(10deg);
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			top: 50%;
			left: 80%;
			transform: rotate(60deg);
		}
	}

	// ROW 3
	.croissant {
		top: 55%;
		left: 3%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			top: 40%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			display: none;
		}
	}

	.radish {
		top: 55%;
		left: 20%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.sardines {
		top: 70%;
		left: 30%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.cheese {
		top: 55%;
		left: 45%;
		width: 80px;
		height: 80px;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.corkscrew {
		top: 50%;
		left: 60%;
		transform: rotate(30deg);

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.croissant-2 {
		top: 65%;
		left: 75%;
		transform: rotate(-30deg);

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.radish-2 {
		top: 60%;
		left: 90%;
		transform: rotate(-30deg);

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.tart {
		top: 80%;
		left: 5%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			top: 70%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			top: 60%;
			left: -10%;
		}
	}

	.bay-leaf-2 {
		top: 85%;
		left: 20%;
		transform: rotate(-20deg);

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.olive-branch-3 {
		top: 90%;
		left: 35%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			left: 30%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			left: 20%;
		}
	}

	.vase-2 {
		top: 85%;
		left: 50%;
		transform: rotate(10deg);

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.rooster-2 {
		top: 92%;
		left: 60%;

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			display: none;
		}
	}

	.tart-3 {
		top: 80%;
		left: 70%;
		transform: rotate(30deg);

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.bay-leaf-3 {
		top: 90%;
		left: 80%;

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			top: 80%;
		}
	}

	.sausage-2 {
		top: 90%;
		left: 95%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}
`;

const MotionWrapper = styled(motion.div)``;

const MenuContentWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	justify-content: center;
	align-items: center;
	flex-direction: column;
	row-gap: ${pxToRem(32)};
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		display: flex;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 100%;
		padding: 0 4px;
	}
`;

const Button = styled.a`
	color: var(--colour-yellow);
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
			when: 'afterChildren',
		},
	},
};

const MenuDeco = ({ isOpen, options }) => (
	<AnimatePresence>
		{isOpen && (
			<MenuDecoWrapper
				variants={wrapperVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
			>
				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.5,
						},
					}}
				>
					<OliveBranch className="olive-branch" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.6,
						},
					}}
				>
					<Vase className="vase" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.3,
						},
					}}
				>
					<Baguette className="baguette" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.55,
						},
					}}
				>
					<Rooster className="rooster" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.6,
						},
					}}
				>
					<Tart className="tart" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.45,
						},
					}}
				>
					<BayLeaf className="bay-leaf" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.7,
						},
					}}
				>
					<Sausage className="sausage" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.35,
						},
					}}
				>
					<OliveBranch className="olive-branch-2" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.5,
						},
					}}
				>
					<Vase className="vase-2" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.65,
						},
					}}
				>
					<Baguette className="baguette-2" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.45,
						},
					}}
				>
					<Sun className="sun" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.4,
						},
					}}
				>
					<Mushrooms className="mushroom" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.55,
						},
					}}
				>
					<WineBottle className="wine-bottle" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.7,
						},
					}}
				>
					<Sun className="sun-2" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.55,
						},
					}}
				>
					<Croissant className="croissant" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.75,
						},
					}}
				>
					<Radish className="radish" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.55,
						},
					}}
				>
					<Sardines className="sardines" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.3,
						},
					}}
				>
					<Cheese className="cheese" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.45,
						},
					}}
				>
					<Corkscrew className="corkscrew" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.65,
						},
					}}
				>
					<Croissant className="croissant-2" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.7,
						},
					}}
				>
					<Radish className="radish-2" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.75,
						},
					}}
				>
					<Tart className="tart-2" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.35,
						},
					}}
				>
					<BayLeaf className="bay-leaf-2" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.4,
						},
					}}
				>
					<Sausage className="sausage-2" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.45,
						},
					}}
				>
					<OliveBranch className="olive-branch-3" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.5,
						},
					}}
				>
					<Vase className="vase-3" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.55,
						},
					}}
				>
					<Rooster className="rooster-2" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.65,
						},
					}}
				>
					<Tart className="tart-3" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.3,
						},
					}}
				>
					<BayLeaf className="bay-leaf-3" />
				</MotionWrapper>

				<MotionWrapper
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.65,
						},
					}}
				>
					<Sausage className="sausage-3" />
				</MotionWrapper>
				<MenuContentWrapper>
					<MenuContent
						content={options?.siteInformation?.addressTitle}
						link={options?.siteInformation?.addressGoogleMapsLink}
						isOpen={isOpen}
						delay="1000ms"
						onMobile
					/>
					<MenuContent
						content={options?.siteInformation?.hoursInformation}
						isOpen={isOpen}
						delay="300ms"
						className="end-menu-content"
						onMobile
					/>
					<MenuSocials
						title="Instagram"
						link={options?.siteInformation?.instagramLink}
						isOpen={isOpen}
						delay="450ms"
						onMobile
					/>
					<Button
						href="https://bookings.obeeapp.com/florian?fbclid=PAZXh0bgNhZW0CMTEAAafB_8GmGWv_zgGop3Tcsbnk-dUNjf3dK3i4CGXZKuaPuray1OLd4xOgqxuNVA_aem_L7i6DSxPLqc0xUYRUjnGqw"
						target="_blank"
					>
						Dinner Bookings
					</Button>
				</MenuContentWrapper>
			</MenuDecoWrapper>
		)}
	</AnimatePresence>
);

export default MenuDeco;
