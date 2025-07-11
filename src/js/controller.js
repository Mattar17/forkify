import icons from 'url:../img/icons.svg';
import * as model from './model.js';
import RecipeView from './views/recipeView.js';
import SearchView from './views/searchView.js';
// import { getJSON, responseTimeout } from './helpers.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    RecipeView.renderSpinner();
    await model.loadRecipe(id);
    RecipeView.render(model.state.recipe);
  }
  catch (err) {
    recipeView.renderError(err);
  }

};

const searchRecipe = async function (e) {
  e.preventDefault();
  try {

    SearchView.renderSpinner();
    await model.loadSearchResults(SearchView.getQuery());
    SearchView.render(model.state.search);

  } catch (err) {
    SearchView.renderError(err);
  }

}

const init = function () {
  RecipeView.addHandlerRecipe(showRecipe);
  SearchView.addHandlerSearch(searchRecipe);
}
init();
