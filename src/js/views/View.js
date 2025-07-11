import icons from 'url:../../img/icons.svg';

export default class View {
  errorMessage = 'Somthing went Wrong! please try again';

  render() {
    const markup = this._generateMarkup(this._data);
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(errMessage = this.errorMessage) {
    const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${errMessage}</p>
          </div>
    `
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);

  }

  renderSpinner() {
    const html =
      `
                  <div class="spinner">
                    <svg>
                      <use href="${icons}#icon-loader"></use>
                    </svg>
                  </div>
        `
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
}