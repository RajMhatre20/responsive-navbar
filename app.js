const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navlinkfade 0.4s ease forwards ${index / 7 + 0.4}s`
            }
        })
        //animate burger
        burger.classList.toggle('burgeranimation');
    })
}

navSlide();














































// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navlinks = document.querySelectorAll('.nav-links li');

//     burger.addEventListener('click', () => {
//         // Toggle nav
//         nav.classList.toggle('nav-active')

//         // Animate nav
//         navlinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = '';
//             }
//             else {
//                 link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.4}s`;
//             }
//         });

//         // Burger Animation
//         burger.classList.toggle('burgeranimation');
//     });
// }
// navSlide();

