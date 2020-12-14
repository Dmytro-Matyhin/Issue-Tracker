import {EnviromentUrls} from '../utils/enviroment';

export default class Users {
  static baseUrl: string = EnviromentUrls.baseUrl;
  static usersPath: string = EnviromentUrls.usersPath;

  email: string
  name: string
  password: string
  usersId?: string; 
  
  constructor(email: string, name: string, password: string) {
    this.email = email;
    this.name = name;
    this.password = password;
  }

  static getUsers() {
    return fetch(`${this.baseUrl}/${this.usersPath}`)
  }
}