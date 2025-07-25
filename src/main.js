
// attach the event listener to the nearest common ancestor
const accordionContainer = document.querySelector('.accordion__container')

//add an event listener with event delegation
accordionContainer.addEventListener('click', e => {
    const accordionHeader = e.target.closest('.accordion__header')

    if (accordionHeader) {
        const accordion = accordionHeader.parentElement
        const accordionContent = accordionHeader.nextElementSibling
        const accordionInner = accordionContent.children[0]

        const height = accordionInner.getBoundingClientRect().height //get the height of accordionInner

        if (accordion.classList.contains('is-open')) {
            accordionContent.style.height = 0
        } else {
            accordionContent.style.height = height + 'px'  //set the correct height
        }
        accordion.classList.toggle('is-open')
    } 
})








