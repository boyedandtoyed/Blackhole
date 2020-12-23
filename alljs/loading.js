var loader = document.querySelector('.loader');

function loaderGoAway() {
    removeTheLoader();
    // just created this timeout to at least be able to see the loading screen for a while.

}
var removeTheLoader = () => { loader.remove(); };
// var body = document.querySelector('body');
// body.addEventListener("load", loaderGoAway);