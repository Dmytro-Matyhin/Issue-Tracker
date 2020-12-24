export default class Users {

  email: string
  name: string
  password: string
  usersId?: string; 
  
  constructor(email: string, name: string, password: string) {
    this.email = email;
    this.name = name;
    this.password = password;
  }
}