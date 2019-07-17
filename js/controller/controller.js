import boardView from '../view/boardView.js';
import mainView from '../view/mainView.js';

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
    // await page.addScript();

};
console.log('in controller.js');
window.addEventListener('hashchange', router);
window.addEventListener('load', router);