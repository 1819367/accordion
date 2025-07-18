
// attach the event listener to the nearest common ancestor
const accordionContainer = document.querySelector('.accordion__container')

//add an event listener with event delegation
accordionContainer.addEventListener('click', e => {
    const accordionHeader = e.target.closest('.accordion__header')
    if (accordionHeader) {
        const accordion = accordionHeader.parentElement
        accordion.classList.toggle('is-open')
    } 
})








