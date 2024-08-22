import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const html = await response.text();
  
      // Create a temporary DOM element to parse the HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
  
        // Find the element with class="cmp-container"
        const cmpContainer = doc.querySelector('.cmp-container');
  
      // Check if the element exists and append it
      if (cmpContainer) {
        console.log("Found element:", cmpContainer.outerHTML);
        
        // Use innerHTML to properly render the HTML
        footer.innerHTML = cmpContainer.outerHTML;
        block.append(footer);
        return cmpContainer.outerHTML;
      } else {
        console.log("Element with class 'cmp-container' not found.");
        return null;
      }
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  }
  
  fetchData("https://www.beautifulhomes.asianpaints.com/content/experience-fragments/asianpaintsbeautifulhomes/us/en/new-footer-xf/master.html");
  
}
 


document.addEventListener("DOMContentLoaded", function () {
  var categoryContentFragment = document.querySelectorAll('.footer__category__main .cmp-contentfragment');
  categoryContentFragment.forEach(function (item) {
    var categoryTitles = item.querySelector('.cmp-contentfragment__title');
    var categoryValues = item.querySelector('.footer__category__main .cmp-contentfragment__element--categoryLinks .cmp-contentfragment__element-value');
    var categoryList = item.querySelectorAll('.footer__category__main .cmp-contentfragment__element--categoryLink .cmp-contentfragment__element-value ul');
    if (window.innerWidth < 768) {
      categoryTitles.addEventListener('click', function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(this).parents('.cmp-contentfragment').find('.cmp-contentfragment__element-value ul').removeClass('active');
          $(this).parents('.cmp-contentfragment').find('.cmp-contentfragment__element--categoryLinks .cmp-contentfragment__element-value').css('display', 'none');
        }
        else {
          $('.cmp-contentfragment__title').removeClass('active');
          $('.cmp-contentfragment__title').parents('.cmp-contentfragment').find('.cmp-contentfragment__element-value ul').removeClass('active');
          $('.cmp-contentfragment__title').parents('.cmp-contentfragment').find('.cmp-contentfragment__element--categoryLinks .cmp-contentfragment__element-value').css('display', 'none');
          $(this).addClass('active');
          $(this).parents('.cmp-contentfragment').find('.cmp-contentfragment__element-value ul').addClass('active');
          $(this).parents('.cmp-contentfragment').find('.cmp-contentfragment__element--categoryLinks .cmp-contentfragment__element-value').css('display', 'block');

        }

        // Add condition to hide the second ul
        var secondUl = $(this).parents('.cmp-contentfragment').find('.cmp-contentfragment__element-value ul').eq(1);
        if (secondUl) {
          $(secondUl).css('display', 'none');
        }
      })
    }
  })


})

var footer = {
  el: $('.footer'),
  init: function init() {
    this.dropdown.init();
    this.gotop.init();
    this.newsletter.init();
  },
  dropdown: {
    init: function init() {
      this.events.click();
    },
    events: {
      click: function click() {
        var footerElement = footer.el;
        footerElement.find("[data-target$='-dropdown']").on('click', function (e) {
          var thisObj = $(e.currentTarget);
          var targetElement = thisObj.data('target');
          thisObj.toggleClass('active');
          thisObj.find("[class^='icon-']").toggleClass('icon-plus-o icon-minus-o');
          $("#".concat(targetElement)).toggleClass('collapse');
        });
      }
    }
  },
  gotop: {
    el: $('.js-footer-gotop'),
    init: function init() {
      this.event.on.init();
    },
    event: {
      on: {
        init: function init() {
          this.click();
        },
        click: function click() {
          var _footer$gotop = footer.gotop,
            el = _footer$gotop.el,
            event = _footer$gotop.event;
          el.on('click', event.func.gotop);
        }
      },
      func: {
        gotop: function gotop() {
          $('html, body').animate({
            scrollTop: 0
          }, 500);
        }
      }
    }
  },
  newsletter: {
    el: $('.footer__newsletter'),
    init: function init() {
      this.events.click();
    },
    events: {
      click: function click() {
        var newsletterEl = footer.newsletter.el;
        newsletterEl.find('.btn').on('click', function (e) {
          e.preventDefault();
          var newsletterEmail = newsletterEl.find('input').val();

          if (validateEmail(newsletterEmail)) {
            newsletterEl.find('input').val("");
            $(".footer__newsletter-success").show();
          }
        });
      }
    }
  }
};

if (footer.el.length) {
  footer.init();
}

//menuinteraction footer changes
document.addEventListener("DOMContentLoaded", function () {
  $('.footer .cmp-contentfragmentlist:first li a').on("click", function () {
    try {
      var footerLinkText = $(this).text().trim();
      var footerLinkTitle = $(this).closest('ul').prev().is('h3') ?
        $(this).closest('ul').prev().text() : $(this).closest(".cmp-contentfragment__elements").siblings("h3").text().trim()
      menuInteraction(footerLinkText, footerLinkTitle, "footer")
    } catch (c) {
      console.log(c)
    }
  })
})

