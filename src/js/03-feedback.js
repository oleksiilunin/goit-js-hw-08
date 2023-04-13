import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const inputEmail = document.querySelector('[name ="email"]');
const inputMessage = document.querySelector('[name ="message"]');
		
const STORAGE_KEY = "feedback-form-state";

let dataFeedback = {};

feedbackForm.addEventListener('input', throttle(onInputText, 500, { leading: false, trailing: true }));
feedbackForm.addEventListener('submit', onSubmit);

fillTextarea();

function onInputText(evt) {
	const currentTargetElement = evt.target.closest(".feedback-form");
	const targetElements = currentTargetElement.elements;
	
	dataFeedback = { email: targetElements.email.value, message: targetElements.message.value };

	localStorage.setItem(STORAGE_KEY, JSON.stringify(dataFeedback));
}

function onSubmit(evt) {
	evt.preventDefault();

	if (inputEmail.value && inputMessage.value) {
		
		evt.currentTarget.reset();

		localStorage.removeItem(STORAGE_KEY);
	
		console.log(dataFeedback);
	} 
}

function fillTextarea() {
	const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

	if (savedData) {
		const { email, message } = savedData;

		inputEmail.value = email;		
		inputMessage.value = message;
	}
}