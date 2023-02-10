import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import LayoutWrapper from '../../common/LayoutWrapper';
import Link from 'next/link';

const FooterSecondaryWrapper = styled.div`
	background: var(--colour-blue);
`;

const FooterSecondaryInner = styled.div`
	padding: 16px 0;
	display: flex;
	justify-content: space-between;
`;

const FooterSecondaryLHS = styled.div``;

const FooterSecondaryRHS = styled.div``;

const Text = styled.p`
	color: var(--colour-yellow);
`;

const LinkTag = styled.a`
	color: var(--colour-yellow);
`;

const FooterSecondary = ({ options }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '15%',
	});

	return (
		<FooterSecondaryWrapper ref={ref}>
			<LayoutWrapper>
				<FooterSecondaryInner
					className={`view-element-fade-in ${
						inView ? 'view-element-fade-in--in-view' : ''
					}`}
				>
					<FooterSecondaryLHS>
						<Text className="type-small">
							© Florian {new Date().getFullYear()}
						</Text>
					</FooterSecondaryLHS>
					<FooterSecondaryRHS>
						<Text className="type-small" $mr="0">
							Built by{' '}
							<Link href="https://www.tayte.co/" passHref>
								<LinkTag className="type-small" target="_blank">
									tayte.co
								</LinkTag>
							</Link>
						</Text>
					</FooterSecondaryRHS>
				</FooterSecondaryInner>
			</LayoutWrapper>
		</FooterSecondaryWrapper>
	);
};

export default FooterSecondary;
