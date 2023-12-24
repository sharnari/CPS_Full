let header = document.querySelector('.main-block')
let readMoreBtnText = header.querySelector('.read-more-button')
let testContent = header.querySelector('.text-content__text')
let textShowPart = 'text-content__text--show-part'
let readMore = 'Читать далее'
let readLess = 'Свернуть'
let brendsBlock = document.querySelector('.brends-block')
let readMoreBtnBrends = brendsBlock.querySelector('.read-more-button')
let brendsList = brendsBlock.querySelector('.brends-list')
let brendsShowPart = 'brends-list--show-part'
let close = 'Скрыть'
let open = 'Показать всё'
let devicesBlock = document.querySelector('.devices-block')
let readMoreBtnDevices = devicesBlock.querySelector('.read-more-button')
let devicesList = devicesBlock.querySelector('.devices-list')
let devicesShowPart = 'devices-list--show-part'

let openClose = function (button, block, showPart, closeText, openText) {
  let classes = block.className.split(/\s+/)
  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === showPart) {
      let classes = block.className.split(/\s+/)
      block.classList.remove(showPart)
      button.classList.remove('read-more-button--close')
      button.classList.add('read-more-button--open')
      button.firstChild.data = closeText
    } else {
      block.classList.add(showPart)
      button.classList.remove('read-more-button--open')
      button.classList.add('read-more-button--slose')
      button.firstChild.data = openText
    }
  }
}

readMoreBtnText.addEventListener('click', function () {
  openClose(readMoreBtnText, testContent, textShowPart, readLess, readMore)
})

readMoreBtnBrends.addEventListener('click', function () {
  openClose(readMoreBtnBrends, brendsList, brendsShowPart, close, open)
})

readMoreBtnDevices.addEventListener('click', function () {
  openClose(readMoreBtnDevices, devicesList, devicesShowPart, close, open)
})
