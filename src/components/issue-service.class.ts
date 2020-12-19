import Issue from './issue.class';
import IssueTrackerApi from './issue-tracker-api.class';
import BrowserStorage from './browser-storage.class';
import renderIssue from '../utils/render-issue.function';

export default class IssueService {

  static sendIssueToDatabase() {
    let selectedId: string;
    let selectedName: string;
    let severity: string = (<HTMLSelectElement>document.querySelector('#select')).value;
    let descriptionValue: string = (<HTMLInputElement>document.querySelector('#description')).value;
    let assignedTo: HTMLSelectElement = document.querySelector('#users-list');
    let status = 'Open';

    for (let key of assignedTo.selectedOptions) {
      if (assignedTo.value) {
        selectedId = key.id;
        selectedName = assignedTo.value;
        let issue = new Issue(descriptionValue, severity, selectedId, selectedName, status);
        IssueTrackerApi.sendIssue(issue)
      }
    }
  }

  static showIssue() {
    IssueTrackerApi.getIssues()
    .then(response => response.json())
    .then(data => data.data)
    .then((issues: Issue) => {
      BrowserStorage.setItem('Issues', issues);
      renderIssue();
    })
  }
}
    
