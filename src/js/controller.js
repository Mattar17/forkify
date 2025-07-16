import icons from 'url:../img/icons.svg';
import * as model from './model.js';
import RecipeView from './views/recipeView.js';
import SearchView from './views/searchView.js';
import PaginationView from './views/paginationView.js'
// import { getJSON, responseTimeout } from './helpers.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

///////////////////////////////////////

const showRecipe = async function (e) {
  e.preventDefault();

  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    RecipeView.renderSpinner();
    await model.loadRecipe(id);
    RecipeView.render(model.state.recipe);
    PaginationView.render(model.state.search);
  }
  catch (err) {
    recipeView.renderError(err);
  }

};

const searchRecipe = async function (e) {
  e.preventDefault();
  try {

    model.state.search.query = SearchView.getQuery();
    SearchView.renderSpinner();
    await model.loadSearchResults();
    SearchView.render(model.state.search.results);
    SearchView.render(model.getSearchResultPage());
    PaginationView.render(model.state.search);

  } catch (err) {
    SearchView.renderError(err);
  }

}

const contorlPagination = async function () {
  PaginationView.render(model.state.search);
}

const init = function () {
  RecipeView.addHandlerRecipe(showRecipe);
  SearchView.addHandlerSearch(searchRecipe);
}
init();
