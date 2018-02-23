import {
    fetch,
    fetchMiddleware,
    getFullHeader
} from './fetch';
import url_config from "./url_config";

export const getTopbikes = () => fetch(
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

export const getBike = (id) => fetch(
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
export const submitNewBike = (obj) => fetch(
    `${url_config.url}/products/create`,
    {
        method: 'POST',
        headers: getFullHeader(),
        body: JSON.stringify(obj)
    }
).then(fetchMiddleware);

export const updateBike = (obj) => fetch(
    `${url_config.url}/products/update`,
    {
        method: 'POST',
        headers: getFullHeader(),
        body: JSON.stringify(obj)
    }
).then(fetchMiddleware);


export const removeBike = id => fetch(
    `${url_config.url}/products/delete/${id}`,
    {
        method: 'POST',
        headers: getFullHeader(),
    }
).then(fetchMiddleware);