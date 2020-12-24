import BrowserStorage from '../components/browser-storage.class'
import changeIssueStatus from './change-issue-status.function';
import User from '../components/user.class';

export default function renderIssue() {
  let sectionInfo = document.querySelector('#section-info');
  const issueList = BrowserStorage.getItems('Issues') || [];
  const usersList = BrowserStorage.getItems('Users') || [];

  sectionInfo.innerHTML = '';

  for (let i = 0; i < issueList.length; i++) {
    const issue = issueList[i];
    const user = usersList.find((user: User) => user.usersId == issue.assigned);

    sectionInfo.insertAdjacentHTML(
      'afterbegin', 
      `
        <div class="wrapper" id="${issue.id}" onclick="${changeIssueStatus(issue.id)}">
          <h4 class="wrapper-title">Issue Id: ${issue.id}</h4>
          <div>
            <span class="wrapper-status" name="span">${issue.status}</span>
          </div>
          <h4 class="wrapper-issueDescription">${issue.description}</h4>
          <p class="wrapper-issueData">${issue.severity}</p>
          <p class="wrapper-issueData">${user.name}</p>
          <div class="wrapper-buttons">
            <button class="button button-close" name="close">Close</button>
            <button class="button button-delete" name="delete">Delete</button> 
          </div>
        </div>
      `
    )
  }
}