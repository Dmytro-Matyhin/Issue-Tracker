import UsersApi from './user-api.class';
import Users from './user.class';
import BrowserStorage from './browser-storage.class';

export default class UsersService {
  
  constructor() {}

  static createUsersList() {
    let select: HTMLSelectElement = document.querySelector('#users-list');

    UsersApi.getUsers()
      .then(response => response.json())
      .then(data => {
        const users = data.data;

        BrowserStorage.setItem('Users', users)
        users.forEach((user: Users) => {
          let userId: string = user.usersId;
          let option: HTMLOptionElement = document.createElement('option');
          option.setAttribute('id', `${userId}`)
          option.append(user.name);
          select.append(option);
        })
      })
  }
}