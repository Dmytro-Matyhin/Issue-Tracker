import BrowserStorage from '../components/browser-storage.class';
import IssueTrackerApi from '../components/issue-tracker-api.class';
import renderIssue from './render-issue.function';

export default  function changeIssueStatus(id: string) {
  
  setTimeout(() => {
    let wrapper = <HTMLDivElement>document.getElementById(id); 
    let status: string;

    wrapper.addEventListener('click', (event) => {  
      let target: any = event.target
      if (target.name === 'close') {
        status = 'Closed';
        IssueTrackerApi.updateIssueStatus(wrapper.id, status)
        .then(() => IssueTrackerApi.getIssues())
        .then(response => response.json())
        .then(data => data.data)
        .then(issues => {
          BrowserStorage.setItem('Issues', issues);
          renderIssue();
        });
      } else if (target.name === 'delete') {
        IssueTrackerApi.deleteIssue(wrapper.id);

        const issuesList = BrowserStorage.getItems('Issues');
        for (let i = 0; i < issuesList.length; i++) {
          if (issuesList[i].id === wrapper.id) {
            issuesList.splice(i, 1);
          }
        }
        BrowserStorage.setItem('Issues', issuesList)
        wrapper.remove();
      }
      else {
        return;
      }
    })
  }, 0);
}