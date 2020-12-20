import {EnvironmentUrls} from '../utils/enviroment';
import User from './user.class';

export default class UserApi {
  static baseUrl: string = EnvironmentUrls.baseUrl;
  static usersPath: string = EnvironmentUrls.usersPath;
  
  constructor() {}

  static getUsers() {
    return fetch(`${this.baseUrl}/${this.usersPath}`)
  }

  static sendUser(user: User) {
    return fetch(`${this.baseUrl}/${this.usersPath}`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    });
  }

  static deleteUser(id: string) {
    return fetch(`${this.baseUrl}/${this.usersPath}/${id}`, {
      method: 'delete',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }

  static updateUser(id: string, user: User) {
    return fetch(`${this.baseUrl}/${this.usersPath}/${id}`, {
      method: 'put',
      body: JSON.stringify({...user, id}),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  }
}