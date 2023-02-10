import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import cleanUrl from '../../../utils/cleanUrl';

const MenuListWrapper = styled(motion.div)`
	grid-column: span 3;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const MenuItemWrapper = styled(motion.div)`
	display: flex;
	align-items: center;
	position: relative;
	opacity: ${(props) => (props.$isHovered ? 0.3 : 1)};

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		opacity: 1;

		.menu-icon {
			opacity: 1;
			transform: translateX(0) translateY(-50%);
		}

		.menu-item {
			transform: translateX(40px);
		}
	}
`;

const MenuItem = styled.a`
	color: var(--colour-blue);
	text-decoration: none;
	position: relative;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const Icon = styled.img`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateX(-5px) translateY(-50%);
	max-height: 30px;
	max-width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;

	transition: all var(--transition-speed-default) var(--transition-ease);
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
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const childVariants = {
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
		},
	},
};

const MenuList = ({ data, isOpen }) => {
	const [isHovered, setIsHovered] = useState(false);
	const hasData = data.length > 0;

	return (
		<MenuListWrapper
			variants={wrapperVariants}
			initial="hidden"
			animate={isOpen ? 'visible' : 'hidden'}
		>
			{hasData &&
				data.map((item, index) => (
					<MenuItemWrapper
						key={index}
						onMouseOver={() => setIsHovered(true)}
						onMouseOut={() => setIsHovered(false)}
						$isHovered={isHovered}
						variants={childVariants}
					>
						<Icon
							className="menu-icon"
							src={`icons/menu-icon-${index + 1}.svg`}
						/>
						<Link href={cleanUrl(item)} passHref>
							<MenuItem className="type-h2 menu-item">
								{item?.linkTitle && item?.linkTitle}
							</MenuItem>
						</Link>
					</MenuItemWrapper>
				))}
		</MenuListWrapper>
	);
};

export default MenuList;
