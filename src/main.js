
// attach the event listener to the nearest common ancestor
const accordionContainer = document.querySelector('.accordion__container')

//add an event listener with event delegation
accordionContainer.addEventListener('click', e => {
    const accordionHeader = e.target.closest('.accordion__header')

    if (accordionHeader) {
        const accordion = accordionHeader.parentElement
        const accordionContent = accordionHeader.nextElementSibling
        const accordionInner = accordionContent.children[0]

        let height

        if (accordion.classList.contains('is-open')) {
            height = 0
        } else {
            height = accordionInner.getBoundingClientRect().height //get the height of accordionInner
        }
        accordion.classList.toggle('is-open')
        accordionContent.style.height = height + 'px' //set the correct height
    } 
})








