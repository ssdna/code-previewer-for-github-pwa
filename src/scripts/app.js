// import * as a from './touch';
// import zepto from 'zepto/src/zepto';
// import touch from 'zepto/src/touch';
import Framework7, { Dom7, Request } from 'framework7';
// import 'framework7/dist/framework7.less';
import 'framework7/dist/css/framework7.css';


// Import additional components
import Panel from 'framework7/dist/components/panel/panel.js';
import Popup from 'framework7/dist/components/popup/popup.js';
// import 'framework7/dist/components/panel/panel.less'


// import Popup from 'framework7/dist/components/popup/popup.js';

// Install F7 Components using .use() method on class:
Framework7.use([Panel, Popup]);

// import Panel from './panel';
// import $ from './$';
// import http, {request} from './http';

const $$ = Dom7;

const app = new Framework7({
    root: '#app',
    // App id
    id: 'com.fyt.sb',
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
