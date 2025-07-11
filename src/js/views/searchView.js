import View from './View.js';
import icons from 'url:../../img/icons.svg';


class SearchView extends View {
    _parentElement = document.querySelector('.results');
    _data;
    #query = '';
    #form = document.querySelector('.search');

    getQuery() {
        return this.#query = document.querySelector(".search__field").value;
    }
    addHandlerSearch(handler) {
        this.query = document.querySelector('.search__field').value;
        this.#form.addEventListener('submit', handler);
    }

    _generateMarkup() {
        return this._data.map(rec => this._recipeMarkup(rec)).join('');
    }

    _recipeMarkup(rec) {
        return `<li class="preview">
            <a class="preview__link preview__link--active" href="#${rec.id}">
              <figure class="preview__fig">
                <img src="${rec.image_url}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${rec.title}</h4>
                <p class="preview__publisher">${rec.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>`
    }
}

export default new SearchView();