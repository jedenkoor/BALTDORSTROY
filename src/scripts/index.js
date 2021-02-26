// import Swiper JS
import Swiper from 'swiper/swiper-bundle.js'
// import Swiper styles
import 'swiper/swiper-bundle.css'
;(() => {
  window.addEventListener('DOMContentLoaded', () => {
    // Tabs
    if (document.querySelectorAll('.tabs').length) {
      const allTabsNavigationItems = document.querySelectorAll('.tabs__btn')
      allTabsNavigationItems.forEach((item) =>
        item.addEventListener('click', tabChange)
      )
    }

    function tabChange(e) {
      e.preventDefault()
      const tabDataAttr = e.target.getAttribute('data-tab')
      const tabContainers = e.target
        .closest('.tabs')
        .querySelectorAll('.tabs__container')
      const tabNavigationItem = e.target
        .closest('.tabs')
        .querySelectorAll('.tabs__btn')

      tabContainers.forEach((item) => {
        item.classList.remove('tabs__container--active')
        if (item.getAttribute('data-tab') === tabDataAttr) {
          item.classList.add('tabs__container--active')
          initSliderProjects()
        }
      })

      tabNavigationItem.forEach((item) => {
        if (item.getAttribute('data-tab') !== tabDataAttr) {
          item.classList.remove('tabs__btn--active')
        }
      })

      e.target.classList.add('tabs__btn--active')
    }
    // Tabs End

    // Swiper
    initSliderProjects()
    function initSliderProjects() {
      ;(() =>
        new Swiper('.tabs__container--active .swiper-container', {
          speed: 500,
          spaceBetween: 24,
          slideToClickedSlide: true,
          navigation: {
            nextEl: '.tabs__container--active .swiper-button-next',
            prevEl: '.tabs__container--active .swiper-button-prev'
          }
        }))()
    }
    // Swiper End
  })
})()
