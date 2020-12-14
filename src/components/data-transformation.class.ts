import Issue from './issue.class';
import Users from './user.class';
import IssueTrackerApi from './issue-tracker-api.class';
import closeIssueStatus from '../utils/close-issue-status.function';

export default class DataTransformation {

  static createDataObject() {
    let selectedId: string;
    let selectedName: string;
    let severity: string = (<HTMLSelectElement>document.querySelector('#select')).value;
    let descriptionValue: string = (<HTMLInputElement>document.querySelector('#description')).value;
    let assignedTo: HTMLSelectElement = document.querySelector('#users-list');

    for (let key of assignedTo.selectedOptions) {
      if (assignedTo.value) {
        selectedId = key.id;
        selectedName = assignedTo.value;
        let issue = new Issue(descriptionValue, severity, selectedId, selectedName)

        IssueTrackerApi.sendIssue(issue)
        .then(data => console.log(data));
      }
    }
  }

  static showIssue() {
    let sectionInfo = document.querySelector('#section-info');
    let issueDescription: string;
    let issueSeverity: string;
    let issueName: string;
    let issueId: string;

    IssueTrackerApi.getIssues()
    .then(response => response.json())
    .then(data => data.data)
    .then(issues => {
      for (let i = 0; i < issues.length; i++) {
        issueDescription = issues[i].description;
        issueSeverity = issues[i].severity;
        issueName = issues[i].userName;
        issueId = issues[i].id;
      }
      sectionInfo.insertAdjacentHTML('afterbegin',
      `
        <div class="wrapper">
          <h4 class="wrapper-title">Issue Id: ${issueId}</h4>
          <div>
            <span class="wrapper-status" name="span">Open</span>
          </div>
          <h4 class="wrapper-issueDescription">${issueDescription}</h4>
          <p class="wrapper-issueData">${issueSeverity}</p>
          <p class="wrapper-issueData">${issueName}</p>
          <div class="wrapper-buttons" id="${issueId}" onclick="${closeIssueStatus('#'+issueId)}">
            <button class="button button-close" name="close">Close</button>
            <button class="button button-delete" name="delete">Delete</button> 
          </div>
        </div>
      `
      )

      if (issues.length) {
        sectionInfo.classList.remove('dis-none');
      } else {
        sectionInfo.classList.add('dis-none'); 
      }
    })
  }

  static createUsersList() {
    let select: HTMLSelectElement = document.querySelector('#users-list');

    Users.getUsers()
    .then(response => response.json())
    .then(data => data.data)
    .then(users => {
      users.forEach((user: Users) => {
        let userId: string = user.usersId;
        let option: HTMLOptionElement = document.createElement('option');
        option.setAttribute('id', `${userId}`)
        option.append(user.name);
        select.append(option);
      })
    })
  }
}