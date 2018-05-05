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

export const getContents = (params) => {
    if (!params.path) {
        params.path = '';
    }
    return http.get(
        `https://api.github.com/repos/${params.owner}/${params.repo}/contents/${params.path}`,
        {ref: params.ref}
    );
};

export const getTree = (params) => {
    return http.get(`https://api.github.com/repos/${params.owner}/${params.repo}/git/trees/${params.tree_sha}`)
};

export const getTreeRecursive = (params) => {
    return http.get(`https://api.github.com/repos/${params.owner}/${params.repo}/git/trees/${params.tree_sha}?recursive=1`)
};

