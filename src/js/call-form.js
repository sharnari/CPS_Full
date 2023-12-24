let header = document.querySelector('.header')
let sideBar = document.querySelector('.mobile-menu')
let callForm = document.querySelector('.call-block')
let callMuteSide = callForm.querySelector('.call-block__mute-area')
let callBtn = header.querySelector('.circle-button--call-img')
let callBtnMobile = sideBar.querySelector('.circle-button--call-img')
let callClose = callForm.querySelector('.circle-button--close-img')

callBtn.addEventListener('click', function () {
  let classes = callForm.className.split(/\s+/)
  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'call-block--hidden') {
      callForm.classList.remove('call-block--hidden')
    }
  }
})

callBtnMobile.addEventListener('click', function () {
  let classes = callForm.className.split(/\s+/)
  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'call-block--hidden') {
      callForm.classList.remove('call-block--hidden')
    }
  }
})

callClose.addEventListener('click', function () {
  callForm.classList.add('call-block--hidden')
})

callForm.addEventListener('keydown', function (evt) {
  if (evt.key == 'Escape') {
    callForm.classList.add('call-block--hidden')
  }
})

callMuteSide.addEventListener('click', function () {
  callForm.classList.add('call-block--hidden')
})
