/**
 * Simple HTTP. 类axois的封装
 * @type {Headers}
 */
import {client_id, client_secret} from "../../token";

const headers = new Headers();
headers.append('Accept', 'application/vnd.github.machine-man-preview+json');

const options = {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default'
};

// const url = `https://api.github.com/emojis?client_id=${client_id}&client_secret=${client_secret}`;
const url = `http://api.github.com/repos/vuejs/vue/git/trees/v2.5.16?client_id=${client_id}&client_secret=${client_secret}`;

const DEFAULT_OPT = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Accept': 'application/vnd.github.machine-man-preview+json'
    },
    mode: 'cors',
};

export const request = new Request(url, options);

export default function http(opt) {
    const options = Object.assign(DEFAULT_OPT, opt);

    const request = new Request(options.url, options);

    return fetch(request)
};

export const queryStringify = function (obj) {
    let params = [];
    for (let key of Object.keys(obj)) {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return params.join('&');
};

