// js using querySelector.all
// const accordions = document.querySelectorAll('.accordion')


// // assign a variable to each accordion
// const firstAccordion = accordions[0]
// const secondAccordion = accordions[1]
// const thirdAccordion = accordions[2]
// const fourthAccordion = accordions[3]

// // assign a variable and find each accordion header
// const firstAccordionHeader = firstAccordion.querySelector('.accordion__header')
// const secondAccordionHeader = secondAccordion.querySelector('.accordion__header')
// const thirdAccordionHeader = thirdAccordion.querySelector('.accordion__header')
// const fourthAccordionHeader = fourthAccordion.querySelector('.accordion__header')

// //assign a 'click' event listner to each header and toggle the class .is-open on the accordion
// firstAccordionHeader.addEventListener('click', e => {
//     firstAccordion.classList.toggle('is-open')
// })

// secondAccordionHeader.addEventListener('click', e=> {
//     secondAccordion.classList.toggle('is-open')
// })

// thirdAccordionHeader.addEventListener('click', e => {
//     thirdAccordion.classList.toggle('is-open')
// })

// fourthAccordionHeader.addEventListener('click', e => {
//     fourthAccordion.classList.toggle('is-open')
// })

// js using querySelector.all
// const accordions = document.querySelectorAll('.accordion')

// // forEach Loop

// accordions.forEach(accordion => {
//     // find the accordion header
//     const accordionHeader = accordion.querySelector('.accordion__header')

//     // add event listeners to the accordion header, assign is open to accordion
//     accordionHeader.addEventListener('click' , e => {
//         accordion.classList.toggle('is-open')
//     })
// })

// select all the accordions, assign it a variable
const accordions = document.querySelectorAll('.accordion')
// console.log(accordions)

//write a forEach loop
accordions.forEach(accordion => {
    // inside the loop
    //find the accordion header, assign it a variable 
    const accordionHeader = accordion.querySelector('.accordion__header')

    //add an click event listener to the accordion header
    //assign class is-open to the accordion
    accordionHeader.addEventListener('click', e => {
        accordion.classList.toggle('is-open')
    })
   
})



