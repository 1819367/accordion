
/**
 * Finds the correct height of the accordion content
 * @param {HTMLElement} accordion The accordion
 */
function getContentHeight (accordion) {
    const accordionInner = accordion.querySelector('.accordion__inner')

    if(accordion.classList.contains('is-open')) return 0
    return accordionInner.getBoundingClientRect().height
}

/**
 * Updates accordion
 * @param {Number} height px value of height to update
 */
function updateAccordion (accordion, height) {
    const accordionContent = accordion.querySelector('.accordion__content')

    //updates the accordion
    accordion.classList.toggle('is-open')
    accordionContent.style.height = `${height}px` 
}

// Where stuff happens
const accordionContainer = document.querySelector('.accordion__container')
accordionContainer.addEventListener('click', e => {
    const accordionHeader = e.target.closest('.accordion__header')
    if (!accordionHeader) return //simplify with an early return

    const accordion = accordionHeader.parentElement
    const height = getContentHeight(accordion)
    
    updateAccordion(accordion, height)
})







