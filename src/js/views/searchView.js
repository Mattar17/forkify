class SearchView {
    #parentElement = document.querySelector('.results');
    #query = '';
    #form = document.querySelector('.search');

    getQuery() {
        return this.#query = document.querySelector(".search__field").value;
    }
    addHandlerSearch(handler) {
        this.query = document.querySelector('.search__field').value;
        this.#form.addEventListener('submit', handler);
    }
}

export default new SearchView();