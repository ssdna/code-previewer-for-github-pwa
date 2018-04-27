const $ = function (selector){
    return document.querySelector(selector);
};
$.on = function (dom, type, callback, flag) {
    dom.addEventListener(type, callback, flag);
    return $;
};

export default $
