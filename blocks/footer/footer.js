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
 




  document.querySelectorAll(".footer__category__main .cmp-contentfragment").forEach(function(a) {
      var b = a.querySelector(".cmp-contentfragment__title");
      a.querySelector(".footer__category__main .cmp-contentfragment__element--categoryLinks .cmp-contentfragment__element-value");
      a.querySelectorAll(".footer__category__main .cmp-contentfragment__element--categoryLink .cmp-contentfragment__element-value ul");
      768 > window.innerWidth && b.addEventListener("click", function() {
          $(this).hasClass("active") ? ($(this).removeClass("active"),
          $(this).parents(".cmp-contentfragment").find(".cmp-contentfragment__element-value ul").removeClass("active"),
          $(this).parents(".cmp-contentfragment").find(".cmp-contentfragment__element--categoryLinks .cmp-contentfragment__element-value").css("display", "none")) : ($(".cmp-contentfragment__title").removeClass("active"),
          $(".cmp-contentfragment__title").parents(".cmp-contentfragment").find(".cmp-contentfragment__element-value ul").removeClass("active"),
          $(".cmp-contentfragment__title").parents(".cmp-contentfragment").find(".cmp-contentfragment__element--categoryLinks .cmp-contentfragment__element-value").css("display", "none"),
          $(this).addClass("active"),
          $(this).parents(".cmp-contentfragment").find(".cmp-contentfragment__element-value ul").addClass("active"),
          $(this).parents(".cmp-contentfragment").find(".cmp-contentfragment__element--categoryLinks .cmp-contentfragment__element-value").css("display", "block"));
          var c = $(this).parents(".cmp-contentfragment").find(".cmp-contentfragment__element-value ul").eq(1);
          c && $(c).css("display", "none")
      })
  })
var footer = {
  el: $(".footer"),
  init: function() {
      this.dropdown.init();
      this.gotop.init();
      this.newsletter.init()
  },
  dropdown: {
      init: function() {
          this.events.click()
      },
      events: {
          click: function() {
              footer.el.find("[data-target$\x3d'-dropdown']").on("click", function(a) {
                  a = $(a.currentTarget);
                  var b = a.data("target");
                  a.toggleClass("active");
                  a.find("[class^\x3d'icon-']").toggleClass("icon-plus-o icon-minus-o");
                  $("#".concat(b)).toggleClass("collapse")
              })
          }
      }
  },
  gotop: {
      el: $(".js-footer-gotop"),
      init: function() {
          this.event.on.init()
      },
      event: {
          on: {
              init: function() {
                  this.click()
              },
              click: function() {
                  var a = footer.gotop;
                  a.el.on("click", a.event.func.gotop)
              }
          },
          func: {
              gotop: function() {
                  $("html, body").animate({
                      scrollTop: 0
                  }, 500)
              }
          }
      }
  },
  newsletter: {
      el: $(".footer__newsletter"),
      init: function() {
          this.events.click()
      },
      events: {
          click: function() {
              var a = footer.newsletter.el;
              a.find(".btn").on("click", function(b) {
                  b.preventDefault();
                  b = a.find("input").val();
                  validateEmail(b) && (a.find("input").val(""),
                  $(".footer__newsletter-success").show())
              })
          }
      }
  }
};
footer.el.length && footer.init();
document.addEventListener("DOMContentLoaded", function() {
  $(".footer .cmp-contentfragmentlist:first li a").on("click", function() {
      try {
          var a = $(this).text().trim()
            , b = $(this).closest("ul").prev().is("h3") ? $(this).closest("ul").prev().text() : $(this).closest(".cmp-contentfragment__elements").siblings("h3").text().trim();
          menuInteraction(a, b, "footer")
      } catch (c) {
          console.log(c)
      }
  })
});

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
const stickyBookConsultation = document.querySelector(".sticky-book-consultation");
  stickyBookConsultation && stickyBookConsultation.addEventListener('click',function (e) {
          e.preventDefault();
          $("#dialog-personal-info").css({ "display": "block" });
          $("#field_email").removeAttr('disabled');
          if (document.querySelector("#dialog-personal-info").style.display == "block") {
          $('body').css("overflow","hidden")
          }
      });

//Footer Analytics Call
window.addEventListener('DOMContentLoaded', function () {
  $('.footer__nav-item a').on('click', function () {
    var menuText = $(this).text().trim();
    var menuTitle =  $(this).closest('.footer__nav').siblings('.footer__nav-title').text().trim()
    try {
      menuInteraction(menuText, menuTitle, "footer")
    } catch (error) {
      console.log(error)
    }
  })
})
