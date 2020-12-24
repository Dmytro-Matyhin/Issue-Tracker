import './main.scss';
import validateForm from './validation/validation.class';
import IssueService from './components/issue-service.class';
import UsersService from './components/users-service.class';
import renderIssue from './utils/render-issue.function';

let form: HTMLFormElement = document.querySelector('#form');
let btn: HTMLButtonElement = document.querySelector('#button');

document.addEventListener('DOMContentLoaded', init);

function init() {
  validateForm.btn.setAttribute('disabled', 'disabled');
  UsersService.createUsersList();
  validateForm.validateInputLength();
  renderIssue();
}

btn.addEventListener('click', (event) => {
  event.preventDefault();
  IssueService.sendIssueToDatabase();
  validateForm.btn.setAttribute('disabled', 'disabled');
  form.reset();
  IssueService.showIssue();
})