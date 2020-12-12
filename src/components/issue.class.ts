import { Issue } from '../modules/issue.interface';
import IssueTrackerApi from './issue-tracker-api.class';

export default class Issues implements Issue {
  static baseUrl: string = 'issues';

  description: string;
  severity: string;
  assigned: string;
  userName: string;
  status?: string;
  id?: string;
  

  constructor(description: string, severity: string, assigned: string, userName: string, status?: string, id?: string) {
    this.description = description;
    this.severity = severity;
    this.assigned = assigned;
    this.userName = userName;
    this.status = status;
    this.id = id;
  }

  static getIssues() {
    return fetch(`http://127.0.0.1:3000/${Issues.baseUrl}`);
  }

  static showIssue() {
    let sectionInfo = document.querySelector('#section-info');
    let issueDescription: string;
    let issueSeverity: string;
    let issueName: string;
    let issueStatus: string;
    let issueId: string;

    IssueTrackerApi.getIssues()
    .then(response => response.json())
    .then(data => data.data)
    .then(issues => {
      for (let i = 0; i < issues.length; i++) {
        issueDescription = issues[i].description;
        issueSeverity = issues[i].severity;
        issueName = issues[i].userName;
        issueStatus = issues[i].status;
        issueId = issues[i].issuesId;
      }
      sectionInfo.insertAdjacentHTML('afterbegin',
      `
        <div class="wrapper">
          <h4 class="section-info-title">Issue Id: ${issueId}</h4>
          <div class="span-status">
            <span class="section-info-status">${issueStatus}</span>
          </div>
          <h4 class="section-issueDescription">${issueDescription}</h4>
          <p class="section-issueData">${issueSeverity}</p>
          <p class="section-issueData">${issueName}</p>
        </div>
      `
      )
    })
  }

  static createIssueList() {
    let select: HTMLSelectElement = document.querySelector('#issue-list');

    Issues.getIssues()
    .then(response => response.json())
    .then(data => data.data)
    .then(issues => {
      select.innerHTML = '';
      issues.forEach((issue: Issue) => {
        let issueDescription: string = issue.description;
        let option: HTMLOptionElement = document.createElement('option');
        option.setAttribute('value', issueDescription);
        option.append(issueDescription);
        select.append(option);
      })
    });
  }
  
}