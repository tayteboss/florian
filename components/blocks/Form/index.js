import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import pxToRem from '../../../utils/pxToRem';

const FormWrapper = styled.div`
	max-width: 460px;
	margin: 0 16px 180px;
	opacity: ${(props) => (props.$disableForm ? 0.3 : 1)};
	pointer-events: ${(props) => (props.$disableForm ? 'none' : 'all')};

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const FormInner = styled.ul`
	opacity: ${(props) => (props.disable ? 0.5 : 1)};
	pointer-events: ${(props) => (props.disable ? 'none' : 'all')};

	transition: all var(--transition-speed-default) ease;
`;

const FieldWrapper = styled.li`
	margin-bottom: 32px;

	input,
	textarea {
		border-bottom: 1px solid #b7bec7;
		padding: 8px 0;

		transition: all var(--transition-speed-default) var(--transition-ease);

		&:focus {
			border-bottom: 1px solid var(--colour-yellow);
		}
	}
`;

const FieldLabel = styled.label``;

const ErrorMessage = styled.div`
	text-align: right;
	color: white;
	margin-top: 4px;
`;

const SubmitButton = styled.button``;

const SuccessTitle = styled.h2`
	margin-bottom: ${pxToRem(32)};
	text-align: center;
`;

const SuccessMessage = styled.p`
	text-align: center;
	margin-bottom: ${pxToRem(80)};
`;

const Forms = ({ isContactForm }) => {
	const [formStatus, setFormStatus] = useState(false);

	const handleSubmit = async (values) => {
		setFormStatus('sending');

		let fetchUrl = '/api/submitCatering';

		if (isContactForm) {
			fetchUrl = '/api/submitContact';
		}

		fetch(fetchUrl, {
			method: 'POST',
			body: JSON.stringify(values),
		})
			.then((response) => response.json())
			.then((res) => {
				if (res.statusCode === 500) {
					setFormStatus('error');
				} else {
					setTimeout(() => {
						setFormStatus('complete');
					}, 500);
				}
			})
			.catch((error) => {
				setTimeout(() => {
					setFormStatus('error');
					console.log('error', error);
				}, 500);
			});
	};

	const initialValues = {
		fullName: '',
		email: '',
		message: '',
	};

	const signupSchema = Yup.object().shape({
		fullName: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
		message: Yup.string().required('Required'),
	});

	return (
		<FormWrapper $disableForm={formStatus === 'sending'}>
			{formStatus === 'error' && (
				<>
					<SuccessTitle>Sorry, there was an error!</SuccessTitle>
					<SuccessMessage>Please check back later.</SuccessMessage>
				</>
			)}
			{formStatus === 'complete' && (
				<>
					<SuccessTitle>Thank you!</SuccessTitle>
					<SuccessMessage>
						We will get back to as soon as we can.
					</SuccessMessage>
				</>
			)}
			{formStatus !== 'complete' && (
				<Formik
					initialValues={initialValues}
					validationSchema={signupSchema}
					onSubmit={(values) => {
						handleSubmit(values);
					}}
				>
					{({ errors, touched }) => (
						<Form>
							<FormInner disabled={formStatus === 'sending'}>
								<FieldWrapper>
									<FieldLabel htmlFor="fullName">
										Full name*
									</FieldLabel>
									<Field
										name="fullName"
										id="fullName"
										required
										type="text"
										placeholder="Enter your full name"
										className={`formik-field ${
											errors.fullName && touched.fullName
												? 'formik-field--error'
												: ''
										}`}
									/>
									{errors.fullName && touched.fullName && (
										<ErrorMessage className="type-small">
											{errors.fullName}
										</ErrorMessage>
									)}
								</FieldWrapper>
								<FieldWrapper>
									<FieldLabel htmlFor="email">
										Email*
									</FieldLabel>
									<Field
										name="email"
										id="email"
										required
										type="email"
										placeholder="Enter your email"
										className={`formik-field ${
											errors.email && touched.email
												? 'formik-field--error'
												: ''
										}`}
									/>
									{errors.email && touched.email && (
										<ErrorMessage className="type-small">
											{errors.email}
										</ErrorMessage>
									)}
								</FieldWrapper>
								<FieldWrapper>
									<FieldLabel htmlFor="message">
										Message*
									</FieldLabel>
									<Field
										className={`formik-field ${
											errors.message && touched.message
												? 'formik-field--error'
												: ''
										}`}
										id="message"
										name="message"
										placeholder="Enter your message"
										as="textarea"
										rows="5"
									/>
									{errors.message && touched.message && (
										<ErrorMessage className="type-small">
											{errors.message}
										</ErrorMessage>
									)}
								</FieldWrapper>
							</FormInner>

							<SubmitButton
								type="submit"
								className="primary-button"
								disabled={formStatus === 'sending'}
							>
								{formStatus === 'sending'
									? 'Sending...'
									: 'Submit'}
							</SubmitButton>
						</Form>
					)}
				</Formik>
			)}
		</FormWrapper>
	);
};

export default Forms;
