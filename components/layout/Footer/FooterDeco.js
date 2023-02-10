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
import Logo from '../../svgs/Logo';

const FooterDecoOuter = styled.div`
	height: calc(var(--vh) * 50);
	background: var(--colour-yellow);
`;

const FooterDecoWrapper = styled(motion.div)`
	height: calc(var(--vh) * 50);
	overflow: hidden;
	position: relative;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		overflow: visible;
	}

	svg {
		max-height: 114px;
		max-width: 116px;
		position: absolute;
		top: 100%;
		left: 100%;

		path {
			fill: var(--colour-blue);
		}
	}

	// ROW 1
	.olive-branch {
		top: -2%;
		left: -3%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			top: 8%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			display: none;
		}
	}

	.vase {
		top: 5%;
		left: 15%;
		width: 61px;
		height: 91px;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.baguette {
		top: -5%;
		left: 25%;
		width: 120px;
		height: 40px;
		transform: rotate(45deg);

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			top: 5%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			left: 3%;
		}
	}

	.rooster {
		top: 5%;
		left: 40%;
		width: 80px;
		height: 92px;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
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
	}

	.sausage {
		top: 10%;
		left: 70%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.olive-branch-2 {
		top: 2%;
		left: 90%;

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
		top: 40%;
		left: 10%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.mushroom {
		display: none;
	}

	.wine-bottle {
		display: none;
	}

	.sun-2 {
		top: 30%;
		left: 80%;

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			top: 20%;
			left: 90%;
			width: 100px;
		}
	}

	.baguette-2 {
		top: 50%;
		left: 95%;
		width: 120px;
		height: 40px;
		transform: rotate(120deg);

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			top: 60%;
			left: 93%;
			transform: rotate(150deg);
		}

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			top: 80%;
			left: 70%;
			transform: rotate(20deg);
		}
	}

	// ROW 3
	.croissant {
		top: 55%;
		left: -3%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			top: 50%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			left: -25%;
		}
	}

	.radish {
		top: 35%;
		left: 25%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			top: 30%;
			left: 20%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			top: 140%;
			left: 1%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			left: -10%;
		}
	}

	.sardines {
		display: none;
	}

	.cheese {
		display: none;
	}

	.corkscrew {
		display: none;
	}

	.croissant-2 {
		top: 45%;
		left: 65%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.radish-2 {
		display: none;
	}

	.tart {
		top: 80%;
		left: 5%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			top: 100%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			left: -15%;
		}
	}

	.bay-leaf-2 {
		top: 70%;
		left: 20%;
		transform: rotate(-20deg);

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			left: 30%;
		}
	}

	.olive-branch-3 {
		top: 65%;
		left: 35%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.vase-2 {
		top: 70%;
		left: 50%;
		transform: rotate(10deg);
		width: 60px;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			left: 55%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			top: 120%;
			left: 85%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			left: 90%;
			width: 100px;
		}
	}

	.rooster-2 {
		top: 72%;
		left: 65%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}

	.tart-3 {
		display: none;
	}

	.bay-leaf-3 {
		top: 65%;
		left: 80%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			top: 70%;
		}

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			display: none;
		}
	}

	.sausage-2 {
		top: 80%;
		left: 95%;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			display: none;
		}
	}
`;

const MotionWrapper = styled(motion.div)``;

const LogoWrapper = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;

	svg {
		width: 281px;
		height: 67px;
		max-height: unset;
		max-width: unset;
		transform: translate(-50%, -50%);
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
			when: 'afterChildren',
		},
	},
};

const FooterDeco = ({ inView }) => (
	<FooterDecoOuter>
		<AnimatePresence>
			{inView && (
				<FooterDecoWrapper
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
					<LogoWrapper
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
						<Logo />
					</LogoWrapper>
				</FooterDecoWrapper>
			)}
		</AnimatePresence>
	</FooterDecoOuter>
);

export default FooterDeco;
