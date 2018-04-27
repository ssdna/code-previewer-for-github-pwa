// import * as a from './touch';
// import zepto from 'zepto/src/zepto';
// import touch from 'zepto/src/touch';

import Panel from './panel';
import $ from './$';

const p = new Panel();
window.p = p;

$('.tool-right').addEventListener('click', () => {
    p.toggle();
});
