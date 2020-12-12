import {User} from '../modules/user.interface';

export default class Users implements User {
  static baseUrl: string = 'users';

  email: string
  name: string
  password: string
  
  constructor(email: string, name: string, password: string) {
    this.email = email;
    this.name = name;
    this.password = password;
  }

  static getUsers() {
    return fetch(`http://127.0.0.1:3000/${Users.baseUrl}`);
  }

  static createUsersList() {
    let select: HTMLSelectElement = document.querySelector('#users-list');

    Users.getUsers()
    .then(response => response.json())
    .then(data => data.data)
    .then(users => {
      users.forEach((user: User) => {
        let userId: string = user.usersId;
        let option: HTMLOptionElement = document.createElement('option');
        option.setAttribute('id', `${userId}`)
        option.append(user.name);
        select.append(option);
      })
    })
  }
}