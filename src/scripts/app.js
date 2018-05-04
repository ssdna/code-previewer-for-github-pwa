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
import Searchbar from 'framework7/dist/components/searchbar/searchbar.js';
import Tabs from 'framework7/dist/components/tabs/tabs.js';
import FAB from 'framework7/dist/components/fab/fab.js';
// import Icon from 'framework7/dist/components/icon/icon.js';
// import 'framework7/dist/components/panel/panel.less'


import '../styles/font.css'
import '../styles/hack.css'

/* =================
   import js module
   ================= */
import Auth from '../scripts/auth.js';
import http from '../scripts/http.js';

if (Auth.check()) {
    Auth.getAccessToken();
}

// import Popup from 'framework7/dist/components/popup/popup.js';

// Install F7 Components using .use() method on class:
Framework7.use([Panel, Popup, Searchbar, Tabs, FAB]);

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
});

// Compile templates once on app load/init
app.searchTemplate = $$('script#search-template').html();
app.compiledSearchTemplate = Template7.compile(app.searchTemplate);
console.log(app.compiledSearchTemplate({name: 'fyt'}));

// create searchbar
var searchbar = app.searchbar.create({
    el: '.searchbar',
    searchContainer: '.list',
    searchIn: '.item-title',
    on: {
        search(sb, query, previousQuery) {
            console.log(query, previousQuery);
        }
    }
});

window.a = app;


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
