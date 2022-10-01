const navToggle=document.querySelector('.mobile-nav-toggle');
const primaryHeader=document.querySelector('.primary-header');
const primaryNav=document.querySelector('.primary-navigation');

navToggle.addEventListener('click',()=>{
    // primaryNav.classList.toggle("opened"); we can do it also by just writing the opened class in css

    primaryNav.hasAttribute('data-visible')
    ?primaryNav.setAttribute('aria-expanded',true)
    :primaryNav.setAttribute('aria-expanded',false);

    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');

})