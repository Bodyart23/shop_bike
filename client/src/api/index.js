import {
    fetch,
    fetchMiddleware,
    getFullHeader
} from './fetch';
import url_config from "./url_config";

export const getBikes = () => fetch(
    `${url_config.url}/getTopfive`,
    {
        headers: getFullHeader(),
    }
).then(fetchMiddleware);

export const getAllBikes = () => fetch(
    `${url_config.url}/getAll`,
    {
        headers: getFullHeader(),
    }
).then(fetchMiddleware);

export const getItem = (id) => fetch(
    `${url_config.url}/products/${ id }`,
    {
        headers: getFullHeader(),
    }
).then(fetchMiddleware);
export const getSearchCount = (searchString, count) => fetch(
    `${url_config.url}/search/${searchString}/${count}`,
    {
        headers: getFullHeader(),
    }
).then(fetchMiddleware);