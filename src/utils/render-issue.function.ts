import BrowserStorage from '../components/browser-storage.class'
import changeIssueStatus from './change-issue-status.function';

export default function renderIssue() {
  let sectionInfo = document.querySelector('#section-info');
  const issueList = BrowserStorage.getItems('Issues') || [];
    sectionInfo.innerHTML = '';
    for (let i = 0; i < issueList.length; i++) {
      sectionInfo.insertAdjacentHTML('afterbegin', 
    `
      <div class="wrapper" id="${issueList[i].id}" onclick="${changeIssueStatus(issueList[i].id)}">
        <h4 class="wrapper-title">Issue Id: ${issueList[i].id}</h4>
        <div>
          <span class="wrapper-status" name="span">${issueList[i].status}</span>
        </div>
        <h4 class="wrapper-issueDescription">${issueList[i].description}</h4>
        <p class="wrapper-issueData">${issueList[i].severity}</p>
        <p class="wrapper-issueData">${issueList[i].userName}</p>
        <div class="wrapper-buttons">
          <button class="button button-close" name="close">Close</button>
          <button class="button button-delete" name="delete">Delete</button> 
        </div>
      </div>
    `
    )
  }
}