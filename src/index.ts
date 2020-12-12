import './main.scss';
import IssueTrackerApi from './components/issue-tracker-api.class';
import Users from './components/user.class';
import validateForm from './validation/validation.class';
import IssueClass from './components/issue.class';

let form: HTMLFormElement = document.querySelector('#form');
let btn: HTMLButtonElement = document.querySelector('#button');

document.addEventListener('DOMContentLoaded', init);

function init() {
  validateForm.btn.setAttribute('disabled', 'disabled');
  Users.createUsersList();
  validateForm.validateInputLength();
}

btn.addEventListener('click', (event) => {
  event.preventDefault();
  IssueTrackerApi.createDataObject();
  validateForm.btn.setAttribute('disabled', 'disabled');
  form.reset();
  IssueClass.showIssue();
  IssueClass.createIssueList();
})