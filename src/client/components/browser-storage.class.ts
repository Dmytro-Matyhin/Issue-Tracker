export default class BrowserStorage {
  static setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItems(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }

}