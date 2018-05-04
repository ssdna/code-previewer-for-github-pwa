// import * as a from './touch';
// import zepto from 'zepto/src/zepto';
// import touch from 'zepto/src/touch';
/* =================
   import UI component
   ================= */
import Framework7, { Dom7, Request, Template7} from 'framework7';
// import 'framework7/dist/framework7.less';
import 'framework7/dist/css/framework7.css';
import 'framework7-icons/css/framework7-icons.css';
import 'material-design-icons/iconfont/material-icons.css';
// import 'framework7/dist/components/';


// Import additional components
import Panel from 'framework7/dist/components/panel/panel.js';
import Popup from 'framework7/dist/components/popup/popup.js';
import Popover from 'framework7/dist/components/popover/popover.js';
import Searchbar from 'framework7/dist/components/searchbar/searchbar.js';
import Tabs from 'framework7/dist/components/tabs/tabs.js';
import FAB from 'framework7/dist/components/fab/fab.js';
import Input from 'framework7/dist/components/input/input.js';


// css
import '../styles/index.css';

// tpl
import personalInfoTemplate from '../templates/personal.tpl.js';
import reposListTemplate from '../templates/repos.tpl.js';

/* =================
   import js module
   ================= */
import Auth from './auth.js';
import http from './http.js';
import {appDB} from './db.js';
import {
    getCurrentUserInfo,
    getCurrentUserRepos,
    searchRepos
} from './api.js';

window.db = appDB;
window.h = http;


const personalInfo = Template7.compile(personalInfoTemplate);
const reposList = Template7.compile(reposListTemplate);


Auth.checkLocalAccessToken()
    .then(val => console.log(val));

getCurrentUserInfo()
    .then(res => {
        const html = personalInfo(res);
        $$('#personal-profile').html(html);
    });
getCurrentUserRepos()
    .then(res => {
        const html = reposList(res);
        $$('#repos-list').html(html);
    });
// searchRepos({q: 'vue'})
//     .then(res => {
//         const html = reposList({repos: res.items});
//         $$('#search-repos-lis').html(html);
//         console.log(res, html);
//     });


// if (Auth.checkOauthCode()) {
//     Auth.getAccessToken();
// }

// Install F7 Components using .use() method on class:
Framework7.use([Panel, Popup, Searchbar, Tabs, FAB, Input, Popover]);

// import Panel from './panel';
// import $ from './$';
// import http, {request} from './http';

const $$ = Dom7;

const app = new Framework7({
    root: '#app',
    // App id
    id: 'com.fyt.sb',
    //Tell Framework7 to compile templates on app init
    precompileTemplates: true,
    // Enable swipe panel
    panel: {
        swipe: 'right',
    },
    navbar: {
        hideOnPageScroll: true,
        iosCenterTitle: false,
    },
    toolbar: {
        hideOnPageScroll: true,
    },
    input: {
    }
});

// create searchbar
var searchbar = app.searchbar.create({
    el: '.searchbar',
    customSearch: true,
    searchContainer: '.search-result',
    on: {
        search(sb, query, previousQuery) {
            searchRepos({q: query})
                .then(res => {
                    const html = reposList(res.items);
                    $$('#search-repos-list').html(html);
                    console.log(res, html);
                });
        }
    }
});

window.a = app;

$$('#bt-save-token').on('click', (e) => {
    const f7Input = $$('#f7-input-access-token');
    const input = $$('#input-access-token');

    app.input.validate(f7Input);

    if (!f7Input.hasClass('item-input-invalid')) {
        appDB.set('app-access-token', input.val());
        appDB.get('app-access-token').then(val => console.log(val));
    }
});


// $$('.item-input').on('input:notempty', function (el) {
//     console.log('input:notempt', el);
// });

// const mainView = app.views.create('.view-main');

// fetch(request).then((req,res) => {
//     console.log(req);
// });
// {}
//
// const p = new Panel();
// window.p = p;
//
// $('.tool-right').addEventListener('click', () => {
//     p.toggle();
// });
