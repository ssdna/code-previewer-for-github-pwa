import http, {queryStringify} from './http.js';
import {client_id, client_secret} from "../../token";

const Auth = {
    params: {},
    check () {
        const queryString = window.location.search.slice(1);
        const params = queryString
            .split('&')
            .reduce((result, item) => {
                const [key, value] = item.split('=');
                result[key] = value;
                return result;
            }, {});
        Auth.params = params;
        return params.code ? true : false;
    },
    getAccessToken () {
        const s = http({
            method: 'post',
            url: 'https://github.com/login/oauth/access_token',
            body: queryStringify({
                client_id,
                client_secret,
                code: Auth.params.code,
                state: 'fyt'
            })
        }).then(res => {
            console.log(res);
        });
        console.log(s);
    }
};

export default Auth;
