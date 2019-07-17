import boardView from './js/view/boardView.js';

const routes = {
    '/board' : boardView,
    '/' : mainView,
    '' : mainView,
};

const router = async () => {
    const pageContainer = document.getElementById('page_container');
    console.log(window.location);
    let url = window.location.hash.slice(1);
    console.log('url = ' + url);
    let page = routes[url];

    pageContainer.innerHTML = await page.render();
    await page.addScript();

};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);