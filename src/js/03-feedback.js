const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
let dataFeedback = {};

feedbackForm.addEventListener('input', onInputText);
feedbackForm.addEventListener('submit', onSubmit);

fillTextarea();

function onInputText(evt) {
	const { email, message } = evt.currentTarget.elements;

	dataFeedback = { email: email.value, message: message.value };

	localStorage.setItem(STORAGE_KEY, JSON.stringify(dataFeedback));
}

function onSubmit(evt) {
	evt.preventDefault();
	console.log(dataFeedback);
	evt.currentTarget.reset();
	localStorage.removeItem(STORAGE_KEY);
}

function fillTextarea() {
	const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

	if (savedData) {
		const { email, message } = savedData;

		const inputEmail = document.querySelector('[name ="email"]');
		const inputMessage = document.querySelector('[name ="message"]');

		inputEmail.value = email;
		inputMessage.value = message;
	}

}