document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        burger.addEventListener('click', function (e) {
            e.stopPropagation();
            nav.classList.toggle('nav-active'); // <-- match CSS
            burger.classList.toggle('active');  // <-- match CSS
        });

        document.addEventListener('click', function (e) {
            if (
                nav.classList.contains('nav-active') &&
                !nav.contains(e.target) &&
                !burger.contains(e.target)
            ) {
                nav.classList.remove('nav-active');
                burger.classList.remove('active');
            }
        });
    } else {
        console.error('Burger or nav element not found. Please check your HTML for elements with class "burger" and "nav-links".');
    }
});
