import Issue from './issue.class';
import IssueClass from './issue.class';

export default class IssueTrackerApi {
  static baseUrl = 'issues';

  static getIssues() {
    return fetch(`http://127.0.0.1:3000/${IssueTrackerApi.baseUrl}`);
  }

  static sendIssue(issue: Issue) {
    return fetch(`http://127.0.0.1:3000/${IssueTrackerApi.baseUrl}`, {
      method: "post",
      body: JSON.stringify(issue),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      },
    });
  }
  
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
        let issue = new IssueClass(descriptionValue, severity, selectedId, selectedName)

        IssueTrackerApi.sendIssue(issue)
        .then(data => console.log(data));
      }
    }
  }

  static deleteIssue() {}

  static updateIssue() {}
}