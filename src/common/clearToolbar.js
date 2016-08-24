import f7 from './f7';
let $ = f7.$;

let $pages = $('#pages');

export default () => {
    $pages.removeClass('toolbar-fixed');
};
