const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const someAPIRoute = async (req, res) => {
	const handleError = (error) => {
		res.status(500).json({
			statusCode: 500,
			message: error,
		});
	};

	const handleSuccess = () => {
		res.status(200).json({
			statusCode: 200,
			message: 'Success',
		});
	};

	const parsedReqBody = JSON.parse(req.body);

	const msg = {
		to: 'hello@floriancarlton.com.au', // Change to your recipient
		from: 'hello@floriancarlton.com.au', // Change to your verified sender
		subject: `Contact Enquiry - ${parsedReqBody.fullName} - ${parsedReqBody.email}`,
		text: parsedReqBody.message,
	};

	sgMail
		.send(msg)
		.then(() => {
			handleSuccess();
		})
		.catch((error) => {
			console.log('error', error);
			handleError(error.response.body.errors);
		});
};

export default someAPIRoute;
