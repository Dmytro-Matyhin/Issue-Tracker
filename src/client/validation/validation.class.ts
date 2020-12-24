export default class ValidateForm {
  static btn: HTMLButtonElement = document.querySelector('#button');
  static form: HTMLFormElement = document.querySelector('#form');
  static validLength: boolean = false;
  static description: HTMLInputElement = document.querySelector('#description');
  static spanLength: HTMLSpanElement = document.createElement('span');
  
  constructor() {}

  static validateInputLength() {
    this.description.oninput = () => {
      let descriptionValue: string = (<HTMLInputElement>document.querySelector('#description')).value

      if (!descriptionValue.length || descriptionValue.length > 100) {
        this.description.classList.add('invalid');
        this.spanLength.textContent = "Input can't be empty! Maximum length 100 characters.";
        this.spanLength.classList.add('error-message');
        this.description.after(this.spanLength);
        this.validLength = false;
      } else {
        this.description.classList.remove('invalid');
        this.spanLength.textContent = '';
        this.spanLength.classList.remove('error-message');
        this.validLength = true;
      }
      this.validateBtn();
    }
  }

  static validateBtn() {
    if (this.validLength) {
      ValidateForm.btn.removeAttribute('disabled');
    } else {
      ValidateForm.btn.setAttribute('disabled', 'disabled');
    }
  }
}