let brendsBlock = document.querySelector('.brends-block')
let devicesBlock = document.querySelector('.devices-block')
let priceListBlock = document.querySelector('.price-list-block')
let showPartBrends = 'brends-list--show-part'
let showPartDevices = 'devices-list--show-part'
let showPartPrices = 'empy-class'
function addSwiperClasses(block, showPart) {
  let containerForSwiper = block.querySelector('.for-swiper')
  let wrapper = containerForSwiper.querySelector('.for-wrapper')
  let slides = wrapper.querySelectorAll('.for-slide')
  let forPagination = containerForSwiper.querySelector('.for-pagination')
  containerForSwiper.classList.add('swiper')
  wrapper.classList.add('swiper-wrapper')
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('swiper-slide')
  }

  forPagination.classList.add('swiper-pagination')
  wrapper.classList.remove(showPart)
}

let swiperInit = function () {
  let swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  })

  return swiper
}

let deleteSwiperClasses = (block, showPart) => {
  let containerForSwiper = block.querySelector('.for-swiper')
  let wrapper = containerForSwiper.querySelector('.for-wrapper')
  let slides = wrapper.querySelectorAll('.for-slide')
  let forPagination = containerForSwiper.querySelector('.for-pagination')
  containerForSwiper.classList.remove('swiper')
  wrapper.classList.remove('swiper-wrapper')
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('swiper-slide')
  }
  forPagination.classList.remove('swiper-pagination')
  forPagination.classList.remove('swiper-pagination-clickable')
  forPagination.classList.remove('swiper-pagination-bullets')
  forPagination.classList.remove('swiper-pagination-horizontal')
  wrapper.classList.add(showPart)
}

document.addEventListener('DOMContentLoaded', function () {
  let windowWidth = document.documentElement.clientWidth
  if (windowWidth < 768) {
    addSwiperClasses(brendsBlock, showPartBrends)
    addSwiperClasses(devicesBlock, showPartDevices)
    addSwiperClasses(priceListBlock, showPartPrices)
    swiperInit()
  }
})

window.addEventListener('resize', function () {
  let windowWidth = document.documentElement.clientWidth
  addSwiperClasses(brendsBlock, showPartBrends)
  addSwiperClasses(devicesBlock, showPartDevices)
  addSwiperClasses(priceListBlock)
  if (windowWidth >= 768) {
    deleteSwiperClasses(brendsBlock, showPartBrends)
    deleteSwiperClasses(devicesBlock, showPartDevices)
    deleteSwiperClasses(priceListBlock, showPartPrices)
  }
})
