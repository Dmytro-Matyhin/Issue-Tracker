import Issue from './issue.class';
import {EnvironmentUrls} from '../utils/enviroment';

export default class IssueTrackerApi {
  static baseUrl: string =  EnvironmentUrls.baseUrl;
  static issuePath: string = EnvironmentUrls.issuespath;

  static getIssues() {
    return fetch(`${this.baseUrl}/${this.issuePath}`);
  }

  static sendIssue(issue: Issue) {
    return fetch(`${this.baseUrl}/${this.issuePath}`, {
      method: "post",
      body: JSON.stringify(issue),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    });
  }

  static deleteIssue(id: string) {
    return fetch(`${this.baseUrl}/${this.issuePath}/${id}`, {
      method: 'delete',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }

  static updateIssueStatus(id: string, status: string) {
    return fetch(`${this.baseUrl}/${this.issuePath}/${id}`, {
      method: 'put',
      body: JSON.stringify({id, status}),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }
}