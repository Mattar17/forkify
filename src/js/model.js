import * as config from "./config.js";
import * as helper from "./helpers.js";

export const state = {
    recipe: {}
}

export const loadRecipe = async function (id) {
    if (!id) return;

    try {
        const data = await helper.getJSON(`${config.API_URL}${id}`);
        console.log(data);

        const { recipe } = data.data;
        state.recipe = recipe;
    }

    catch (err) {
        throw err;
    }
}