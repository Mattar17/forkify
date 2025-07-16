import * as config from "./config.js";
import * as helper from "./helpers.js";

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: config.PAGE_LENGTH
    }
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

export const loadSearchResults = async function () {
    if (!state.search.query) return;
    console.log(state.search.query);

    try {
        const data = await helper.getJSON(`${config.API_URL}?search=${state.search.query}`);
        console.log(data);
        if (data.results === 0) throw new Error("Query not found!! try again");
        state.search.results = data.data.recipes;
    }

    catch (err) {
        throw err;
    }
}

export const getSearchResultPage = function (page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;

    return state.search.results.slice(start, end);
}