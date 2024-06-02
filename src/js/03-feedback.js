import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const saveFormState = (event) => {
  const formElements = event.currentTarget.elements;
  debugger;
  const emailValue = formElements.email.value;
  const messageValue = formElements.message.value;
  const formState = {
    email: emailValue,
    message: messageValue
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

const loadFormState = () => {
  const savedState = localStorage.getItem(STORAGE_KEY);
  if (savedState) {
    const { email, message } = JSON.parse(savedState);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const formElements = event.currentTarget.elements
  console.log({
    email: formElements.email.value,
    message: formElements.message.value,
  });
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
};

form.addEventListener('input', throttle(saveFormState), 500);
form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', loadFormState);
