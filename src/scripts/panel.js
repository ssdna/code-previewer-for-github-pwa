import $ from './$';

const DEFAULT_OPTIONS = {
    position: 'right',
    swipe: true
};

export default class Panel {
    constructor(options) {
        const opt = this.mergeOptions(options ? options : {});
        this.el = $(`.panel.panel-${opt.position}`);
    }
    mergeOptions(options) {
        let opt = {};
        for (const [key, value] of Object.entries(DEFAULT_OPTIONS)) {
            opt[key] = options[key] ? options[value] : value;
        }
        return opt;
    }
    open() {
        this.el.classList.add('panel-open');
    }
    close() {
        this.el.classList.remove('panel-open');
    }
    toggle() {
        this.el.classList.toggle('panel-open');
    }
}
