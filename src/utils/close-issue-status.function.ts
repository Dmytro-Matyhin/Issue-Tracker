import IssueTrackerApi from '../components/issue-tracker-api.class';

export default function closeIssueStatus(id: string) {
  setTimeout(() => {
    let wrapper = document.querySelector('div[class="wrapper"]');
    let div: HTMLDivElement = document.querySelector(id);
    let span: HTMLSpanElement = document.querySelector('span[name="span"]')
    div.addEventListener('click', (event) => {
      let target: any = event.target;
      if (target.name === 'close') {
        span.textContent = 'Closed';
      } else if (target.name === 'delete') {
        IssueTrackerApi.deleteIssue(div.id);
        wrapper.remove();
      }
    })
  }, 0);
}