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
          initSliderReviews()
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

    // Swiper projects
    initSliderProjects()
    function initSliderProjects() {
      ;(() =>
        new Swiper('.projects__tab.tabs__container--active .swiper-container', {
          speed: 500,
          spaceBetween: 24,
          slideToClickedSlide: true,
          navigation: {
            nextEl:
              '.projects__tab.tabs__container--active .swiper-button-next',
            prevEl: '.projects__tab.tabs__container--active .swiper-button-prev'
          }
        }))()
    }
    // Swiper projects End

    // Swiper reviews
    initSliderReviews()
    function initSliderReviews() {
      ;(() =>
        new Swiper('.reviews__tab.tabs__container--active .swiper-container', {
          speed: 500,
          spaceBetween: 24,
          slideToClickedSlide: true,
          slidesPerView: 1,
          slidesPerGroup: 1,
          pagination: {
            el: '.reviews__tab.tabs__container--active .swiper-pagination'
          },
          breakpoints: {
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              pagination: {
                el: '.reviews__tab.tabs__container--active .swiper-pagination',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                  function numberAppend(d) {
                    return d < 10 ? '0' + d.toString() : d.toString()
                  }
                  return `<span class="swiper-pagination-customspan">${numberAppend(
                    current
                  )}</span> / <span class="swiper-pagination-totalspan">${numberAppend(
                    total
                  )}</span>`
                }
              },
              navigation: {
                nextEl:
                  '.reviews__tab.tabs__container--active .swiper-button-next',
                prevEl:
                  '.reviews__tab.tabs__container--active .swiper-button-prev'
              }
            }
          }
        }))()
    }
    // Swiper reviews End
  })
})()
