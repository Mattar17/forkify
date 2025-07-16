import View from './View.js';
import icons from 'url:../../img/icons.svg';


class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');


    _generateMarkup(data) {
        const numPages = Math.ceil(data.results.length / data.resultsPerPage);
        const currPage = data.page;

        console.log("pagination markup");

        if (currPage === 1 && numPages > 1)
            return `<button class="btn--inline pagination__btn--next">
                <span>Page ${currPage + 1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
            `;

        if (currPage === numPages && numPages > 1)
            return `
            <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>
          `;

        if (currPage > 1 && numPages > 1) {
            return `
                <button class="btn--inline pagination__btn--next">
                <span>Page ${currPage + 1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
                </button>
                <button class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
                </button>
            `;

        }

    }

}
export default new PaginationView();