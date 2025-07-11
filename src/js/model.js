import * as config from "./config.js";
import * as helper from "./helpers.js";

export const state = {
    recipe: {},
    search: []
}

export const loadRecipe = async function (id) {
    if (!id) return;

    try {
        const data = await helper.getJSON(`${config.API_URL}/${id}`);
        const { recipe } = data.data;
        state.recipe = recipe;
    }

    catch (err) {
        throw err;
    }
}

export const loadSearchResults = async function (query) {
    if (!query) return;

    try {
        const data = await helper.getJSON(`${config.API_URL}?search=${query}`);
        if (data.results === 0) throw new Error("Query not found!! try again");
        state.search = data.data.recipes;
    }

    catch (err) {
        throw err;
    }
}