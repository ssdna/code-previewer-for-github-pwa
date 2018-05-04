import http from './http.js';

export const getCurrentUserInfo = () => {
    return http.get('https://api.github.com/user');
};

export const getCurrentUserRepos = () => {
    return http.get('https://api.github.com/user/repos');
};

export const searchRepos = (params) => {
    return http.get('https://api.github.com/search/repositories', params, {
        headers: {
            Accept: 'application/vnd.github.v3.text-match+json'
        }
    });
};

