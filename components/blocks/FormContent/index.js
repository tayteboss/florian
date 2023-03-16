import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import LayoutWrapper from '../../common/LayoutWrapper';
import RichText from '../../common/RichText';
import PrimaryLink from '../../elements/PrimaryLink';

const FormContentWrapper = styled.section`
	background: var(--colour-blue);
	position: relative;
	z-index: 2;
	padding: 80px 0 110px;
`;

const FormContentInner = styled.div`
	max-width: 600px;
	margin: 0 auto;
	text-align: center;
`;

const RichTextWrapper = styled.div`
	margin-bottom: 46px;

	p,
	a {
		color: var(--colour-yellow);
		line-height: 1.4;
	}
`;

const FormContent = ({ data, linkTitle, link }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-5%',
	});

	return (
		data && (
			<FormContentWrapper className="performance form-content" ref={ref}>
				<LayoutWrapper>
					<FormContentInner
						className={`view-element-fade-in content ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					>
						<RichTextWrapper>
							<RichText data={data} />
						</RichTextWrapper>
						{linkTitle && link && (
							<PrimaryLink
								title={linkTitle}
								link={link}
								target="_blank"
							/>
						)}
					</FormContentInner>
				</LayoutWrapper>
			</FormContentWrapper>
		)
	);
};

export default FormContent;
