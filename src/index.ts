import './main.scss';
import validateForm from './validation/validation.class';
import DataTransformation from './components/data-transformation.class';

let form: HTMLFormElement = document.querySelector('#form');
let btn: HTMLButtonElement = document.querySelector('#button');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  DataTransformation.createDataObject();
  validateForm.btn.setAttribute('disabled', 'disabled');
  form.reset();
  DataTransformation.showIssue();
})

document.addEventListener('DOMContentLoaded', init);

function init() {
  validateForm.btn.setAttribute('disabled', 'disabled');
  DataTransformation.createUsersList();
  validateForm.validateInputLength();
}