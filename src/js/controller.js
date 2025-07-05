import icons from 'url:../img/icons.svg';
import * as model from './model.js';
import RecipeView from './views/recipeView.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    RecipeView.renderSpinner();
    await model.loadRecipe(id);

    RecipeView.render(model.state.recipe);
  }
  catch (err) {
    console.log(err);
  }

};

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);

['hashchange', 'load'].forEach(
  ev => { window.addEventListener(ev, showRecipe) }
)
