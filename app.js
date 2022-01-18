
// menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

let  tabs = document.querySelectorAll('.navbar li a')
let tabsarry = Array.from(tabs)

// remove navbar
tabsarry.forEach((e) => {
  e.addEventListener('click' , function() {
   // console.log(e)
   tabsarry.forEach( (ele) => {
    ele.classList.remove('active')
})
  })
})


// Button
let  button = document.querySelectorAll('.left p')
let bottonsarry = Array.from(button)


bottonsarry.forEach((e) => {
  e.addEventListener('click' , function() {
   // console.log(e)
   tabsarry.forEach( (ele) => {
    ele.classList.remove('active')
})
  })
})

