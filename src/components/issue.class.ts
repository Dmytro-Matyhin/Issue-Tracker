export default class Issues {
  description: string;
  severity: string;
  assigned: string;
  userName: string;
  status: string;
  id?: string;
  
  constructor(description: string, severity: string, assigned: string, userName: string, status: string, id?: string) {
    this.description = description;
    this.severity = severity;
    this.assigned = assigned;
    this.userName = userName;
    this.status = status;
    this.id = id;
  }
}