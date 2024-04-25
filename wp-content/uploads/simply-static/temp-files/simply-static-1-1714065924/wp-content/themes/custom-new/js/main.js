const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

// window.addEventListener('scroll', function () {
//     var scroll = window.scrollY;
//     if (scroll > 20) {
//         nav[0].style.background = "rgba(255, 255, 255, 1)";
//     } else {
//         nav[0].style.background = "rgba(255, 255, 255, 0.5)";
//     }
// })

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}