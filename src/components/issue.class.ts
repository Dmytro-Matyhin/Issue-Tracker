export default class Issues {
  description: string;
  severity: string;
  assigned: string;
  userName: string;
  id?: string;
  
  constructor(description: string, severity: string, assigned: string, userName: string, id?: string) {
    this.description = description;
    this.severity = severity;
    this.assigned = assigned;
    this.userName = userName;
    this.id = id;
  }
}