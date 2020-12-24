export default class Issues {
  description: string;
  severity: string;
  assigned: string;
  status: string;
  id?: string;
  
  constructor(description: string, severity: string, assigned: string,  status: string, id?: string) {
    this.description = description;
    this.severity = severity;
    this.assigned = assigned;
    this.status = status;
    this.id = id;
  }
}