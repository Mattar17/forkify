
export const state = {
    recipe: {}
}

export const loadRecipe = async function (id) {
    if (!id) return;


    try {
        const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`);
        const data = await res.json();

        if (!res.ok) {
            throw new Error(`${data.message}`);
        }

        const { recipe } = data.data;
        state.recipe = recipe;
    }

    catch (err) {
        console.log(err);
    }
}