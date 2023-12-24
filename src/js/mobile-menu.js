let header = document.querySelector('.header')
let mobileMenu = document.querySelector('.mobile-menu-block')
let mobileMenuMuteArea = mobileMenu.querySelector(
  '.mobile-menu-block__mute-area'
)

let mainBurgerBtn = header.querySelector('.circle-button--burger-img')
let mobileMenuCloseButton = mobileMenu.querySelector(
  '.circle-button--close-img'
)

mainBurgerBtn.addEventListener('click', function () {
  let classes = mobileMenu.className.split(/\s+/)
  mainBurgerBtn.classList.add('circle-button--none')
  if (classes[classes.length - 1] === 'mobile-menu-block--hidden') {
    mobileMenu.classList.remove('mobile-menu-block--hidden')
  }
})

mobileMenuCloseButton.addEventListener('click', function () {
  mobileMenu.classList.add('mobile-menu-block--hidden')
  mainBurgerBtn.classList.remove('circle-button--none')
})

mobileMenu.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    mobileMenu.classList.add('mobile-menu-block--hidden')
    mainBurgerBtn.classList.remove('circle-button--none')
  }
})

mobileMenuMuteArea.addEventListener('click', function () {
  mobileMenu.classList.add('mobile-menu-block--hidden')
  mainBurgerBtn.classList.remove('circle-button--none')
})
