import { TIMEOUT_SEC } from "./config";

export const responseTimeout = function (s) {
    return new Promise((_, reject) => {
        setTimeout(function () {
            reject(`response time out after ${s} seconds`)
        }, 10000);
    });
};


export const getJSON = async function (url) {
    try {
        const apiFetch = fetch(url);
        const res = await Promise.race([apiFetch, responseTimeout(TIMEOUT_SEC)]);
        const data = await res.json();
        if (!res.ok)
            throw Error("We couldn't find the recipe you're looking for!! try again");
        return data;
    }
    catch (err) {
        throw err;
    }
}

