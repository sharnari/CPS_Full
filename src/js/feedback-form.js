let header = document.querySelector('.header')
let sideBar = document.querySelector('.mobile-menu')
let feedbackForm = document.querySelector('.feedback-block')
let feedbackMuteArea = feedbackForm.querySelector('.feedback-block__mute-area')
let mainChatBtn = header.querySelector('.circle-button--chat-img')
let mobileChatBtn = sideBar.querySelector('.circle-button--chat-img')
let feedbackFormCloseBtn = feedbackForm.querySelector(
  '.circle-button--close-img'
)

mainChatBtn.addEventListener('click', function () {
  let classes = feedbackForm.className.split(/\s+/)
  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'feedback-block--hidden') {
      feedbackForm.classList.remove('feedback-block--hidden')
    }
  }
})

mobileChatBtn.addEventListener('click', function () {
  let classes = feedbackForm.className.split(/\s+/)
  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'feedback-block--hidden') {
      feedbackForm.classList.remove('feedback-block--hidden')
    }
  }
})

feedbackFormCloseBtn.addEventListener('click', function () {
  feedbackForm.classList.add('feedback-block--hidden')
})

feedbackForm.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    feedbackForm.classList.add('feedback-block--hidden')
  }
})

feedbackMuteArea.addEventListener('click', function () {
  feedbackForm.classList.add('feedback-block--hidden')
})
