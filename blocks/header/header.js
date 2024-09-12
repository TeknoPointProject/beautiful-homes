import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
}

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', expanded);
  });
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  // enable nav dropdown keyboard accessibility
  const navDrops = navSections.querySelectorAll('.nav-drop');
  if (isDesktop.matches) {
    navDrops.forEach((drop) => {
      if (!drop.hasAttribute('tabindex')) {
        drop.setAttribute('role', 'button');
        drop.setAttribute('tabindex', 0);
        drop.addEventListener('focus', focusNavSection);
      }
    });
  } else {
    navDrops.forEach((drop) => {
      drop.removeAttribute('role');
      drop.removeAttribute('tabindex');
      drop.removeEventListener('focus', focusNavSection);
    });
  }
  // enable menu collapse on escape keypress
  if (!expanded || isDesktop.matches) {
    // collapse menu on escape press
    window.addEventListener('keydown', closeOnEscape);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
  }
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // load nav as fragment
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  // decorate nav DOM
  block.textContent = '';
  const nav = document.createElement('nav');
  nav.id = 'nav';
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  const classes = ['brand', 'sections', 'tools'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });

  const navBrand = nav.querySelector('.nav-brand');
  const brandLink = navBrand.querySelector('.button');
  if (brandLink) {
    brandLink.className = '';
    brandLink.closest('.button-container').className = '';
  }

  const navSections = nav.querySelector('.nav-sections');
  if (navSections) {
    navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
      if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
      navSection.addEventListener('click', () => {
        if (isDesktop.matches) {
          const expanded = navSection.getAttribute('aria-expanded') === 'true';
          toggleAllNavSections(navSections);
          navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        }
      });
    });
  }

  // hamburger for mobile
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`;
  hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
  nav.prepend(hamburger);
  nav.setAttribute('aria-expanded', 'false');
  // prevent mobile nav behavior on window resize
  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));


  var html;
  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  block.append(navWrapper);
  
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
  
      // Check if the element exists
      if (cmpContainer) {
        // Find all image elements within the cmpContainer
        const images = cmpContainer.querySelectorAll('img');
        
        // Iterate over all images and add loading="lazy" except for the specific one
        images.forEach(img => {
          const src = img.getAttribute('src');
          if (src !== '//static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/bh-new-header/bh-logo-main.png') {
            img.setAttribute('loading', 'lazy');
          }
        });
  
        // Use innerHTML to properly render the HTML
        navWrapper.innerHTML = cmpContainer.outerHTML;
        
        return cmpContainer.outerHTML;
      } else {
        console.log("Element with class 'cmp-container' not found.");
        return null;
      }
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  }
  
  fetchData("https://www.beautifulhomes.asianpaints.com/content/experience-fragments/asianpaintsbeautifulhomes/us/en/experience-fragment/master.html");
  
}
 

var loginresponse;
var uid;
function getLoginData(response) {
    console.log("login" + response);
    loginresponse = JSON.stringify(response);
    localStorage.setItem("login", loginresponse);
    if (document.querySelector("#sessionrequired") != null) {
        var issession = document.querySelector("#sessionrequired").getAttribute("data-section");
        if (issession == "project" && document.querySelector("#sessionrequired").value == "true") {
            emailid = JSON.parse(loginresponse);
            emailid = emailid.user.email;
            customer_token_api()
        } else if (issession == "deatils" && document.querySelector("#sessionrequired").value == "true")
            getuserInfo()
    } else if (document.querySelector("#sessionrequiredmain") != null) {
        if (document.querySelector("#sessionrequiredmain").getAttribute("data-section").value == "mainpage" && document.querySelector("#sessionrequiredmain") != null) {
            emailid = JSON.parse(loginresponse);
            emailid = emailid.user.email;
            customer_token_api()
        }
    } else if (clickbookmark == false) {
        var iconredirection = document.querySelectorAll("[data-login-redirection]")[0].getAttribute("data-login-redirection");
        window.location.href = replacepagedomain(iconredirection)
    }
    emailid = JSON.parse(loginresponse);
    emailid = emailid.user.email;
    smartech("identify", emailid);
    readsavedArticle();
    uuidhref()
}
function clicklogin(event) {
    var params = {
        "context": "some content to send through the method"
    };
    gigya.accounts.session.verify(params, {
        callback: function(response) {
            if (response.errorCode == 0) {
                console.log(response);
                if (event != undefined) {
                    if (event.target.parentElement.getAttribute("data-login-redirection")) {
                        gigyagetuuid();
                        var iconredirection = document.querySelectorAll("[data-login-redirection]")[0].getAttribute("data-login-redirection");
                        window.location.href = replacepagedomain(iconredirection)
                    }
                } else
                    gigyagetuuid()
            } else
                gigya.sso.login({
                    "authFlow": "redirect",
                    "redirectURL": window.location.href,
                    "context": {
                        "brand": document.getElementById("brand").value
                    }
                })
        }
    })
}
function getuserInfo() {
    var data = {
        "context": "some content to send through the method"
    };
    gigya.accounts.session.verify(data, {
        callback: function(response) {
            if (response.errorCode == 0) {
                var uuid = localStorage.getItem("login");
                uuid = JSON.parse(uuid);
                uuid = uuid.UID;
                var params = {
                    "UID": uuid,
                    "include": "identities-active,identities-all,identities-global,loginIDs,emails,profile,data, password,lastLoginLocation, regSource,irank,rba,subscriptions,userInfo"
                };
                gigya.accounts.getAccountInfo(params, {
                    callback: function(response) {
                        if (response.errorCode == 0) {
                            console.log(response);
                            var userdetails = response;
                            if (document.querySelector(".me-details__inner") != null && document.querySelector(".me-details__inner") != "")
                                showuserInfo(userdetails);
                            if (document.querySelector("[data-section\x3d'projects']") != "" && document.querySelector("[data-section\x3d'projects']") != null)
                                customer_token_api(userdetails)
                        } else
                            alert("Error :" + response.errorMessage)
                    }
                })
            }
        }
    })
}
function showuserInfo(userdetails) {
    if (userdetails.profile.hasOwnProperty("firstName"))
        document.querySelector("#field_full_name").value = userdetails.profile.firstName;
    if (userdetails.profile.hasOwnProperty("lastName"))
        document.querySelector("#field_full_name").value += " " + userdetails.profile.lastName;
    if (userdetails.profile.hasOwnProperty("firstName"))
        document.querySelector("#field_edit_full_name").value = userdetails.profile.firstName;
    if (userdetails.profile.hasOwnProperty("lastName"))
        document.querySelector("#field_edit_full_name").value += " " + userdetails.profile.lastName;
    if (userdetails.profile.hasOwnProperty("email")) {
        document.querySelector("#field_email").value = userdetails.profile.email;
        document.querySelector("#field_edit_email").value = userdetails.profile.email
    }
    if (userdetails.hasOwnProperty("phoneNumber")) {
        document.querySelector("#field_phone_number").value = userdetails.phoneNumber;
        document.querySelector("#field_edit_phone_number").value = userdetails.phoneNumber
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var paramValue = getParameterByName("uid");
    if (getParameterByName("uid") != "") {
        var loginobj = {};
        loginobj["UID"] = paramValue;
        localStorage.setItem("login", JSON.stringify(loginobj));
        console.log(loginobj);
        clicklogin()
    }
    if (document.querySelector("#sessionrequired") != null && document.querySelector("#sessionrequired") != "") {
        var seesionrequired = document.querySelector("#sessionrequired").value;
        if (seesionrequired == "true")
            if (document.querySelector('[data-section\x3d"deatils"]')) {
                var mobno = localStorage.getItem("login");
                if (mobno == null)
                    clicklogin();
                else
                    getuserInfo()
            }
    }
    var mobno = localStorage.getItem("login");
    if (mobno != null) {
        readsavedArticle();
        uuidhref()
    }
});
function setaccountInfoXHR(userdata) {
    var params = {
        profile: {
            firstName: userdata.firstName,
            lastName: userdata.lastName
        }
    };
    gigya.accounts.setAccountInfo(params)
}
function setaccountInfodetails() {
    var name = [];
    var profileinfo = {};
    if (document.getElementById("field_full_name") != null && document.getElementById("field_full_name") != "") {
        var readname = document.getElementById("field_full_name").value;
        profileinfo["firstName"] = readname;
        profileinfo["lastName"] = ""
    }
    setaccountInfoXHR(profileinfo)
}
function logoutClick(event) {
    var userId = localStorage.getItem("login");
    userId = JSON.parse(userId);
    userId = userId.UID;
    logoutctaClick("Log Out", "Logout", userId);
    var params = {
        "UID": userId
    };
    gigya.accounts.logout(params, {
        callback: function(response) {
            if (response.errorCode == 0) {
                localStorage.removeItem("login");
                window.location.href = location.origin
            }
        }
    })
}
function sidenavbarClick(ctaText, ctaTitle, componentName, loginMethod, loginStatus) {
    gigya.accounts.session.verify(params, {
        callback: function(response) {
            if (response.errorCode == 0) {
                var userId = localStorage.getItem("login");
                userId = JSON.parse(userId);
                userId = userId.UID;
                sidewidgetClick(ctaText, ctaTitle, componentName, loginMethod, loginStatus, userId)
            }
        }
    })
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?\x26]" + name + "\x3d([^\x26#]*)")
      , results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
}
function uuidhref() {
    if (localStorage.getItem("login") != null) {
        var x = document.querySelectorAll("a[href]");
        var uuid = localStorage.getItem("login");
        uuid = JSON.parse(uuid);
        uuid = uuid.UID;
        var domainname = document.querySelector(".domainurls").value;
        domainname = domainname.split(",");
        for (var j = 0; j < domainname.length; j++)
            for (var i = 0; i < x.length; i++)
                if (x[i].getAttribute("href").startsWith(domainname[j])) {
                    var path = x[i].getAttribute("href");
                    x[i].removeAttribute("href");
                    x[i].setAttribute("href", path + "?uid\x3d" + uuid)
                }
    }
}
function gigyagetuuid() {
    var params = {
        "context": "some content to send through the method"
    };
    gigya.accounts.session.verify(params, {
        callback: function(response) {
            if (response.errorCode == 0)
                gigya.accounts.getAccountInfo({
                    callback: getAccountInfoHandler
                })
        }
    })
}
function getAccountInfoHandler(responseObj) {
    localStorage.setItem("login", JSON.stringify(responseObj))
}
document.addEventListener("DOMContentLoaded", function() {
    var gigyaParam = window.location.search.replace("?", "");
    if (gigyaParam == "gig_actions\x3dsso.login\x26gig_brand\x3dbetabh" || gigyaParam == "gig_actions\x3dsso.login\x26gig_brand\x3dbeautifulhomes") {
        clicklogin();
        setTimeout(function() {
            readsavedArticle()
        }, 5E3)
    }
});
document.addEventListener("DOMContentLoaded", function() {
    gigya.hasSession().then(function(sessionExist) {
        if (sessionExist)
            applyLoggedInStyles()
    }).catch(function(error) {
        console.error("Error checking session with Gigya:", error)
    })
});
function applyLoggedInStyles() {
    $(".location-profile-icon [data-login-redirection]").css({
        "background": "linear-gradient(black, black) padding-box, linear-gradient(to right, #FFC63C, #FFA20C) border-box",
        "border-radius": "50%",
        "border": "1.6px solid transparent"
    })
}
var getaccountInfoXHR = function getaccountInfoXHR(url, callback) {
    gigyagetuuid();
    var uuid = localStorage.getItem("login");
    uuid = JSON.parse(uuid);
    uuid = uuid.UID;
    var params = {
        "UID": uuid,
        "include": "identities-active,identities-all,identities-global,loginIDs,emails,profile,data, password,lastLoginLocation, regSource,irank,rba,subscriptions,userInfo"
    };
    gigya.accounts.getAccountInfo(params, {
        callback: function(response) {
            if (response.errorCode == 0)
                callback(null, response);
            else
                alert("Error :" + response.errorMessage)
        }
    })
};
function savedArticleWhislist(bookMark) {
    var currentid;
    var datastatus;
    var key;
    var productkey;
    var data;
    var d = new Date;
    if ($(bookMark.currentTarget).attr("data-type") == "article") {
        key = "savedArticles";
        if ($(bookMark.currentTarget).hasClass("icon-bookmark-o")) {
            datastatus = "add";
            currentid = $(bookMark.currentTarget).attr("data-id")
        } else if ($(bookMark.currentTarget).hasClass("icon-bookmark")) {
            datastatus = "delete";
            currentid = $(bookMark.currentTarget).attr("data-id")
        }
    } else if ($(bookMark.currentTarget).attr("data-type") == "product") {
        key = "wishlist.category.product.product_SKU";
        if ($(bookMark.currentTarget).hasClass("icon-bookmark-o")) {
            datastatus = "add";
            currentid = $(bookMark.currentTarget).attr("data-id")
        } else if ($(bookMark.currentTarget).hasClass("icon-bookmark")) {
            datastatus = "delete";
            currentid = $(bookMark.currentTarget).attr("data-id")
        }
    }
    $(bookMark.currentTarget).toggleClass("icon-bookmark-o icon-bookmark");
    var userdats;
    var params;
    getaccountInfoXHR("getapi", function(err, data) {
        if (err != null)
            console.error(err);
        else
            userdats = data
    });
    setTimeout(function() {
        var uuid = localStorage.getItem("login");
        uuid = JSON.parse(uuid);
        uuid = uuid.UID;
        if ($(bookMark.currentTarget).attr("data-type") == "article") {
            var bookmarked;
            params = {
                "data": {
                    "savedArticles": []
                }
            };
            if (userdats.data.hasOwnProperty("savedArticles"))
                userdats.data.savedArticles.forEach(function(item) {
                    params.data.savedArticles.push(item)
                });
            if (datastatus == "add") {
                var currentSavedArticle = {
                    "articleID": currentid,
                    "type": "article"
                };
                params.data.savedArticles.push(currentSavedArticle)
            } else if (datastatus == "delete")
                params.data.savedArticles = params.data.savedArticles.filter(function(item) {
                    return item.articleID !== currentid
                })
        } else if ($(bookMark.currentTarget).attr("data-type") == "product") {
            var timezone = (new Date).toISOString();
            var bookmarked;
            params = {
                "data": {
                    "wishlist": {
                        "category": {
                            "product": []
                        }
                    }
                }
            };
            if (userdats.data.hasOwnProperty("wishlist")) {
                bookmarked = [];
                userdats.data.wishlist.category.product.forEach(function(item) {
                    params.data.wishlist.category.product.push(item)
                })
            }
            if (datastatus == "add") {
                var currentwishlist = {
                    "product_SKU": currentid,
                    "product_URL": "",
                    "Time_Wishlist": timezone
                };
                params.data.wishlist.category.product.push(currentwishlist)
            } else if (datastatus == "delete")
                params.data.wishlist.category.product = params.data.wishlist.category.product.filter(function(item) {
                    return item.product_SKU !== currentid
                })
        }
        gigya.accounts.setAccountInfo(params)
    }, 5E3)
}
function readsavedArticle() {
    if (localStorage.getItem("login") != null)
        if ($("[class$\x3d'__bookmark']").find("[class^\x3d'icon-bookmark']").length > 0) {
            var userdats;
            getaccountInfoXHR("getapi", function(err, data) {
                if (err != null)
                    console.error(err);
                else {
                    userdats = data;
                    if (userdats.data.hasOwnProperty("savedArticles")) {
                        var savedarticlesID = userdats.data.savedArticles.map(function(item) {
                            return item.articleID
                        });
                        var bookmarkicon = $("[class$\x3d'__bookmark']").find("[class^\x3d'icon-bookmark']");
                        for (var i = 0; i < savedarticlesID.length; i++)
                            for (var j = 0; j < bookmarkicon.length; j++)
                                if (bookmarkicon[j].getAttribute("data-type") == "article")
                                    if (bookmarkicon[j].getAttribute("data-id") == savedarticlesID[i]) {
                                        bookmarkicon[j].classList.remove("icon-bookmark-o");
                                        bookmarkicon[j].classList.add("icon-bookmark")
                                    }
                    }
                    if (userdats.data.hasOwnProperty("wishlist")) {
                        var productsSku = userdats.data.wishlist.category.product.map(function(item) {
                            return item.product_SKU
                        });
                        var bookmarkicon$0 = $("[class$\x3d'__bookmark']").find("[class^\x3d'icon-bookmark']");
                        for (var i = 0; i < productsSku.length; i++)
                            for (var j = 0; j < bookmarkicon$0.length; j++)
                                if (bookmarkicon$0[j].getAttribute("data-type") == "product")
                                    if (bookmarkicon$0[j].getAttribute("data-id") == productsSku[i]) {
                                        bookmarkicon$0[j].classList.remove("icon-bookmark-o");
                                        bookmarkicon$0[j].classList.add("icon-bookmark")
                                    }
                    }
                }
            })
        }
}
document.addEventListener("DOMContentLoaded", function() {
    $(".brand-logo-wrapper").on("click", function() {
        $(".brand-logo-wrapper").removeClass("active");
        $(this).addClass("active");
        $(this).children("white-bh-logo").addClass("dsp-none")
    });
    var brandLogoWrapper = document.querySelectorAll(".brand-logo-wrapper");
    brandLogoWrapper[0].addEventListener("click", function() {
        headerClick("asianpaints", "header")
    });
    brandLogoWrapper[1].addEventListener("click", function() {
        headerClick("beautiful homes", "header")
    });
    $(".contact-details-wrapper a, .location-mobile-icon a").on("click", function() {
        try {
            headerClick($(this).attr("href").split(":")[1], "header")
        } catch (error) {
            console.log("Error in header call" + error)
        }
    });
    $(".primary_new_header_logo a, .header-m__nav-item .header-m__logo-outer").on("click", function() {
        try {
            bhlogoClick("bh logo", "header")
        } catch (error) {
            console.log("Error in logo call" + error)
        }
    });
    $(".location-profile-icon a:not([data-login-redirection])").on("click", function() {
        try {
            headerClick("Store locator icon", "header")
        } catch (error) {
            console.log("Error in header call" + error)
        }
    });
    $(".location-profile-icon a[data-login-redirection]").on("click", function() {
        try {
            headerClick("Profile icon", "header")
        } catch (error) {
            console.log("Error in header call" + error)
        }
    })
});
window.addEventListener("DOMContentLoaded", function() {
    $(".submennu-list-item").on("click", function() {
        var menuText = $(this).text();
        var subMenuText = $(".primary-menu-list__li:hover .primary-menu-item").text().trim();
        var isSubMenuFromMore = $(".primary-menu-list__li:hover .primary-menu-item img").length;
        var menuTitle = "";
        if (isSubMenuFromMore)
            menuTitle = "More";
        else
            menuTitle = subMenuText;
        try {
            menuInteraction(menuText, menuTitle, "header")
        } catch (error) {
            console.log(error)
        }
    });
    $(".nav-menu-cardimage-wrapper a").on("click", function() {
        var bannerTitle = $(this).siblings(".nav-menu-cardimage-text-wrapper").find(".card-image-text").text();
        var subMenuText = $(".primary-menu-list__li:hover .primary-menu-item").text().trim();
        var isSubMenuFromMore = $(".primary-menu-list__li:hover .primary-menu-item img").length;
        var menuTitle = "";
        if (isSubMenuFromMore)
            menuTitle = "More";
        else
            menuTitle = subMenuText;
        menubannerClick(bannerTitle, menuTitle, "header")
    })
});
document.addEventListener("DOMContentLoaded", function() {
    var getStartedEle = document.querySelector(".offer-header-redirect-wrapper a");
    getStartedEle.addEventListener("click", function(e) {
        var getStartedVal = getStartedEle.innerHTML;
        headerClick(getStartedVal, "header")
    })
});

window.addEventListener("DOMContentLoaded", function() {
    $(".bottomNav-track--event").on("click", function() {
        try {
            var menuText = $(this).text().trim();
            var menuTitle = "";
            var bottomNavText = $(".bottom_nav__icon.active").text().trim();
            if (bottomNavText.toLowerCase() == "more")
                menuTitle = "more";
            else
                menuTitle = bottomNavText;
            menuInteraction(menuText, menuTitle, "header")
        } catch (error) {
            console.log(error)
        }
    })
});
"use strict";
var allLielements = document.querySelectorAll(".header__primary.left li");
allLielements.forEach(function(elementData) {
    if (elementData.classList[0] == "active" && elementData.childNodes[0].dataset.target == "#Design-services") {
        var l2tab = elementData.childNodes[0].dataset.target;
        $(l2tab).addClass("active");
        $(l2tab).parent().addClass("active")
    }
});
$(".header__row.middle").on("mouseout", function(e) {
    if ($("[data-target\x3d'#Design-services']").parent().hasClass("active")) {
        $("#Design-services").addClass("active");
        $("#Design-services").parent().addClass("active")
    }
});
var header = {
    el: $(".header"),
    prevScrollPos: 0,
    timeout: 1E3,
    idleID: -1,
    init: function init() {
        this.primaryMenu.init();
        this.secondaryMenu.init();
        this.sticky();
        this.prevScrollPos = window.pageYOffset
    },
    hideMenu: function hideMenu() {
        this.el.removeClass("show")
    },
    sticky: function sticky() {
        var _this = this;
        $(window).scroll(function(e) {
            if (this.oldScroll > this.scrollY)
                if (document.getElementById("leftside") != null)
                    document.getElementById("leftside").scrollBy(0, -100);
                else
                    this.oldScroll = this.scrollY;
            else if (document.getElementById("leftside") != null)
                document.getElementById("leftside").scrollBy(0, 100);
            else
                this.oldScroll = this.scrollY;
            var subheader = header.primaryMenu.left.listItems;
            var loc = window.location.href;
            var subtab = document.querySelector(".header__row.middle.tab-content");
            if ($(e.currentTarget).scrollTop() > 75) {
                $(".header").css("position", "fixed");
                $(".header-m").css("position", "fixed");
                if (window.location.pathname == "/content/asianpaintsbeautifulhomes/us/en.html" || window.location.pathname == "/" || window.location.pathname == "/content/asianpaintsbeautifulhomes/us/en/magazine.html" || window.location.pathname == "/magazine.html")
                    _this.el.addClass("header--sticky")
            } else {
                var megaMenuElement = _this.secondaryMenu.megaMenu.el;
                $(".header").css("position", "relative");
                $(".header-m").css("position", "relative");
                if (window.location.pathname == "/content/asianpaintsbeautifulhomes/us/en.html" || window.location.pathname == "/" || window.location.pathname == "/content/asianpaintsbeautifulhomes/us/en/magazine.html" || window.location.pathname == "/magazine.html")
                    if (!megaMenuElement.is(":visible"))
                        _this.el.removeClass("header--sticky")
            }
            var currentScrollPos = window.pageYOffset;
            if (_this.prevScrollPos > currentScrollPos || currentScrollPos < 200)
                _this.el.removeClass("header--scrolled");
            else if (_this.el.hasClass("search--expanded"))
                _this.el.find(".icon-close-o").trigger("click");
            _this.prevScrollPos = currentScrollPos
        })
    },
    primaryMenu: {
        el: null,
        init: function init() {
            var headerEl = header.el;
            this.el = headerEl.find(".header__primary");
            this.left.init();
            this.right.init()
        },
        left: {
            el: null,
            listItems: null,
            init: function init() {
                var primaryMenuEl = header.primaryMenu.el;
                this.el = primaryMenuEl.filter(".left");
                this.listItems = this.el.find("li");
                this.events.click();
                this.events.hover()
            },
            events: {
                click: function click() {
                    var listItems = header.primaryMenu.left.listItems
                },
                primaryHighlight: function primaryHighlight(e) {
                    var listItems = header.primaryMenu.left.listItems;
                    var thisObj = $(e.currentTarget);
                    if (!thisObj.hasClass("header__logo")) {
                        e.preventDefault();
                        $(".header__mega").hide();
                        listItems.removeClass("active");
                        thisObj.addClass("active");
                        var tid = thisObj.find("a").data("target");
                        $("header .tab-pane").removeClass("active in");
                        var $tab = $(tid);
                        if ($tab.length > 0) {
                            $(tid).addClass("active in");
                            $(tid).parent().addClass("active")
                        } else
                            $("header .middle.tab-content").removeClass("active")
                    }
                },
                handleMouseLeave: function handleMouseLeave() {
                    var _header$primaryMenu$l = header.primaryMenu.left
                      , leftMenu = _header$primaryMenu$l.el
                      , listItems = _header$primaryMenu$l.listItems;
                    listItems.removeClass("active");
                    var activeSecondaryItemId = listItems.find("a").filter(".current").data("target");
                    var currentNav = listItems.find("a").filter(".current");
                    currentNav.addClass("active");
                    this.primaryHighlight({
                        currentTarget: currentNav.parent("li"),
                        preventDefault: function preventDefault() {}
                    })
                },
                hover: function hover() {
                    var _this2 = this;
                    var _header$primaryMenu$l = header.primaryMenu.left
                      , leftMenu = _header$primaryMenu$l.el
                      , listItems = _header$primaryMenu$l.listItems;
                    listItems.on("mouseenter", function(e) {
                        var thisObj = $(e.currentTarget);
                        listItems.removeClass("active");
                        thisObj.addClass("active");
                        _this2.primaryHighlight(e)
                    });
                    leftMenu.on("mouseleave", function(e) {
                        listItems.removeClass("active");
                        if (document.querySelector('[data-target\x3d"#Design-services"]'))
                            document.querySelectorAll(".default").forEach(function(ele) {
                                ele.classList.add("active")
                            });
                        var activeSecondaryItemId = $(".header__middle").filter(".active").attr("id");
                        listItems.has("[data-target\x3d'#".concat(activeSecondaryItemId, "']")).addClass("active");
                        if ($(".header__middle").filter(".active").length == 0) {
                            var subheader = header.primaryMenu.left.listItems;
                            var tid;
                            var loc = window.location.href;
                            var x = document.querySelectorAll(".header__middle.tab-pane.fade");
                            for (var i = 0; i < subheader.length; i++)
                                if (!subheader[i].classList.contains("header__logo"))
                                    if (subheader[i].classList.contains("active"))
                                        subheader[i].classList.remove("active");
                            for (var j = 0; j < x.length; j++)
                                if (x[j].classList.contains("active")) {
                                    x[j].classList.remove("active");
                                    x[j].classList.remove("in")
                                }
                            for (var i = 0; i < subheader.length; i++)
                                if (!subheader[i].classList.contains("header__logo")) {
                                    var current = subheader[i].getElementsByTagName("a")[0].href;
                                    current = current.replace(".html", "");
                                    if (subheader[i].classList.contains("active"))
                                        subheader[i].classList.remove("active");
                                    if (loc.includes(current)) {
                                        subheader[i].classList.add("active");
                                        tid = subheader[i].getElementsByTagName("a")[0].getAttribute("data-target").replace("#", "")
                                    }
                                }
                        }
                    });
                    $("header .middle.tab-content").on("mouseenter", function() {
                        if (document.querySelector("#hovermenu") != null)
                            if (header.idleID > -1)
                                clearTimeout(header.idleID)
                    });
                    $("header .middle.tab-content").on("mouseleave", function() {
                        if (document.querySelector("#hovermenu") != null) {
                            if (header.idleID > -1)
                                clearTimeout(header.idleID);
                            header.idleID = setTimeout(function() {
                                return _this2.handleMouseLeave()
                            }, header.timeout)
                        }
                    })
                }
            }
        },
        right: {
            el: null,
            listItems: null,
            init: function init() {
                var primaryMenuEl = header.primaryMenu.el;
                this.el = primaryMenuEl.filter(".right");
                this.listItems = this.el.find("li");
                this.searchForm.init()
            },
            searchForm: {
                el: null,
                parent: null,
                searchFld: null,
                closeTrigger: null,
                init: function init() {
                    var primaryMenuEl = header.primaryMenu.el;
                    this.el = primaryMenuEl.find(".header__form");
                    this.parent = primaryMenuEl.find(".header__search-outer");
                    this.searchFld = this.el.find("input");
                    this.closeTrigger = primaryMenuEl.find(".icon-close-o");
                    this.click()
                },
                click: function click() {
                    var headerEl = header.el;
                    var listItems = header.primaryMenu.left.listItems;
                    var _header$primaryMenu$r = header.primaryMenu.right.searchForm
                      , parentEl = _header$primaryMenu$r.parent
                      , searchFld = _header$primaryMenu$r.searchFld
                      , closeTrigger = _header$primaryMenu$r.closeTrigger;
                    searchFld.on("click", function(e) {
                        listItems.filter(":not('.header__logo')").hide();
                        headerEl.addClass("search--expanded");
                        if (document.querySelector(".searchdynamic").childElementCount != 0 && document.getElementById("field-search1").value != "" || document.getElementById("field-search__m").value != "") {
                            document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "block";
                            document.querySelector(".searchdynamic").style.display = "block";
                            document.querySelector(".searchresult").style.display = "none"
                        }
                    });
                    searchFld.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        if (headerEl.hasClass("search--expanded")) {
                            listItems.filter(":not('.header__logo')").hide();
                            parentEl.find(".searchresult").show();
                            if (document.querySelector(".searchdynamic").childElementCount != 0 && document.getElementById("field-search1").value != "" || document.getElementById("field-search__m").value != "") {
                                document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "block";
                                document.querySelector(".searchdynamic").style.display = "block";
                                document.querySelector(".searchresult").style.display = "none"
                            }
                        } else
                            listItems.filter(":not('.header__logo')").show()
                    });
                    closeTrigger.on("click", function(e) {
                        headerEl.removeClass("search--expanded");
                        if (document.querySelector(".searchresult").style.display == "block")
                            parentEl.find(".searchresult").hide();
                        if (document.querySelector(".searchdynamic").style.display == "block") {
                            document.querySelector(".searchdynamic").style.display = "none";
                            document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none"
                        }
                    })
                }
            }
        }
    },
    secondaryMenu: {
        el: null,
        listItems: null,
        init: function init() {
            var headerEl = header.el;
            this.el = headerEl.find(".header__secondary");
            this.listItems = this.el.find("li");
            this.megaMenu.init()
        },
        megaMenu: {
            el: $(".header__mega, .dropdown-wrapper"),
            init: function init() {
                var _this3 = this;
                var listItems = header.secondaryMenu.listItems;
                listItems.on("mouseenter", function(e) {
                    var thisObj = $(e.currentTarget);
                    if (!thisObj.data("target"))
                        return;
                    _this3.showBgOverlay();
                    _this3.el.hide();
                    listItems.removeClass("active");
                    thisObj.addClass("active");
                    _this3.el.filter("#".concat(thisObj.data("target"))).show();
                    if ($(window).scrollTop() === 0 && !header.el.hasClass("header--sticky"))
                        header.el.addClass("header--sticky")
                });
                $(".header__middle").on("mouseleave", function(e) {
                    _this3.hideBgOverlay();
                    listItems.removeClass("active");
                    _this3.el.hide();
                    if ($(window).scrollTop() === 0 && header.el.hasClass("header--sticky") && !_this3.el.is(":visible"))
                        header.el.removeClass("header--sticky");
                    var subheader = header.primaryMenu.left.listItems;
                    var tid;
                    var loc = window.location.href;
                    var x = document.querySelectorAll(".header__middle.tab-pane.fade");
                    for (var i = 0; i < subheader.length; i++)
                        if (!subheader[i].classList.contains("header__logo"))
                            if (subheader[i].classList.contains("active"))
                                subheader[i].classList.remove("active");
                    for (var j = 0; j < x.length; j++)
                        if (x[j].classList.contains("active")) {
                            x[j].classList.remove("active");
                            x[j].classList.remove("in")
                        }
                    for (var i = 0; i < subheader.length; i++)
                        if (!subheader[i].classList.contains("header__logo")) {
                            var current = subheader[i].getElementsByTagName("a")[0].href;
                            current = current.replace(".html", "");
                            if (subheader[i].classList.contains("active"))
                                subheader[i].classList.remove("active");
                            if (loc.includes(current)) {
                                subheader[i].classList.add("active");
                                tid = subheader[i].getElementsByTagName("a")[0].getAttribute("data-target").replace("#", "")
                            }
                        }
                    var subtab = document.querySelector(".header__row.middle.tab-content");
                    if (subtab.classList.contains("active"))
                        document.querySelector(".header__row.middle.tab-content").classList.remove("active")
                });
                $(".header__shop").find("a").on("click", function(e) {
                    e.preventDefault();
                    $("#products").find(".header__secondary \x3e li").hide();
                    $("#products").find(".header__secondary \x3e li").filter(".shop-online").show()
                })
            },
            showBgOverlay: function showBgOverlay() {
                $(".overlay--dark").addClass("active")
            },
            hideBgOverlay: function hideBgOverlay() {
                $(".overlay--dark").removeClass("active")
            }
        }
    }
};
var headerMob = {
    el: $(".header-m"),
    prevScrollPos: 0,
    init: function init() {
        this.sticky();
        this.click();
        this.prevScrollPos = window.pageYOffset
    },
    sticky: function sticky() {
        var _this4 = this;
        $(window).scroll(function(e) {
            if ($(e.currentTarget).scrollTop() > 75)
                _this4.el.addClass("header--sticky");
            else
                _this4.el.removeClass("header--sticky");
            var currentScrollPos = window.pageYOffset;
            if (_this4.prevScrollPos > currentScrollPos || currentScrollPos < 200)
                _this4.el.removeClass("header--scrolled");
            else
                _this4.el.addClass("header--scrolled");
            _this4.prevScrollPos = currentScrollPos
        })
    },
    click: function click() {
        this.el.find(".header-m__hamburger").on("click", function(e) {
            headerMob.sidebar_show("m-nav")
        });
        this.el.find(".header-m__sidebar-close").on("click", function(e) {
            headerMob.sidebar_hide();
            var headerElement = headerMob.el;
            var triggerElement = headerElement.find(".collapse \x3e .header-m__nav-dropdown__trigger");
            headerMob.dropdown_hide(triggerElement)
        });
        this.el.find(".header-m__nav-dropdown__trigger").on("click", function(e) {
            e.preventDefault();
            var thisObj = e.currentTarget;
            var href = $(thisObj).attr("href");
            if (typeof href !== "undefined" && $.inArray(href, [false, ""]) === -1)
                window.location.href = href;
            else
                headerMob.dropdown_show(e)
        });
        this.el.find(".header-m__nav-back").on("click", function(e) {
            e.preventDefault();
            var headerElement = headerMob.el;
            var triggerElement = headerElement.find(".collapse \x3e .header-m__nav-dropdown__trigger");
            headerMob.dropdown_hide(triggerElement)
        });
        this.el.find(".header-m__search-trigger").on("click", function(e) {
            headerMob.sidebar_show("m-search");
            try {
                searchInitiate("header")
            } catch (error) {
                console.log("Error in searchInit call" + error)
            }
        });
        var $sub = this.el.find(".header-m__subnav");
        $('a[data-toggle\x3d"submenu"]').on("click", function(e) {
            e.preventDefault();
            var $this = $(e.currentTarget);
            $sub.toggleClass("active");
            $(".header-m__subnav-middle").removeClass("active");
            var p = document.querySelectorAll(".header-m__subnav-middle");
            for (var q = 0; q < p.length; q++)
                if (p[q].getAttribute("id") == $this.data("target"))
                    p[q].classList.add("active")
        });
        $sub.find(".header-m__subnav-back a").on("click", function(e) {
            e.preventDefault();
            $sub.removeClass("active")
        });
        $sub.find(".header-m__subnav-close button").on("click", function(e) {
            e.preventDefault();
            headerMob.sidebar_hide();
            var headerElement = headerMob.el;
            var triggerElement = headerElement.find(".collapse \x3e .header-m__nav-dropdown__trigger");
            headerMob.dropdown_hide(triggerElement);
            $sub.removeClass("active")
        });
        var $mform = this.el.find(".header-m__form");
        this.el.find('a[data-toggle\x3d"design-help-form"]').on("click", function(e) {
            e.preventDefault();
            $mform.addClass("active")
        });
        $mform.find(".js-close").on("click", function(e) {
            e.preventDefault();
            $mform.removeClass("active")
        })
    },
    sidebar_show: function sidebar_show(wrapper) {
        $(".header-m__sidebar").css("left", "0");
        if ($(".header-m__sidebar m-nav").css("left", "0px"))
            $("body").css("overflow", "hidden");
        if (wrapper === "m-nav") {
            $(".header-m__sidebar").addClass("m-nav").removeClass("m-search");
            $(".header-m__wrapper-nav").show();
            $(".header-m__wrapper-search").hide()
        } else if (wrapper === "m-search") {
            $(".header-m__sidebar").addClass("m-search").removeClass("m-nav");
            $(".header-m__wrapper-search").show();
            $(".header-m__wrapper-nav").hide()
        }
    },
    sidebar_hide: function sidebar_hide() {
        $(".header-m__sidebar").css("left", "-100%");
        if ($(".header-m__sidebar m-nav").css("left", "-100%"))
            $("body").css("overflow", "unset")
    },
    dropdown_show: function dropdown_show(element) {
        $(".header-m__sidebar-logo").hide();
        $(".header-m__nav-back").show();
        var thisObj = $(element.currentTarget);
        thisObj.attr("href", thisObj.attr("data-href")).removeAttr("data-href").parent().addClass("collapse");
        $(".header-m__nav-middle").addClass("collapse-outer")
    },
    dropdown_hide: function dropdown_hide(element) {
        $(".header-m__sidebar-logo").show();
        $(".header-m__nav-back").hide();
        var thisObj = element;
        thisObj.attr("data-href", thisObj.attr("href")).removeAttr("href");
        thisObj.parent().removeClass("collapse");
        $(".header-m__nav-middle").removeClass("collapse-outer")
    }
};
$(document).ready(function() {
    if (header.el)
        header.init();
    if (headerMob.el)
        headerMob.init()
});
"use strict";
var mobilerdh_form = {
    el: $("#mobile-rdh__form"),
    init: function init() {
        this.events.register()
    },
    events: {
        register: function register() {
            this.submit()
        },
        _validate: function _validate() {
            var formElement = mobilerdh_form.el;
            formElement.find("input").each(function(i, e) {
                var field = $(e);
                var fieldId = field.attr("id");
                var fieldVal = $.trim(field.val());
                if (fieldVal == "")
                    field.parent().addClass("invalid");
                else {
                    var errorMsg = "";
                    switch (fieldId) {
                    case "form-field__name":
                        if (!validateName(fieldVal))
                            errorMsg = "Entered name is invalid";
                        break;
                    case "form-field__mobile":
                        if (!validateMobile(fieldVal))
                            errorMsg = "Entered mobile number is invalid";
                        break;
                    case "form-field__pincode":
                        if (!validatePincode(fieldVal))
                            errorMsg = "Entered pincode is invalid";
                        break;
                    case "form-field__email":
                        var isValid = validateEmail(fieldVal);
                        if (!isValid)
                            errorMsg = "Entered email ID is invalid";
                        break
                    }
                    if (errorMsg !== "")
                        field.parent().addClass("invalid").find(".error").text(errorMsg)
                }
            });
            formElement.find("input").on("keyup", function(e) {
                var field = $(e.currentTarget);
                if ($.trim(field.val()) == "")
                    field.parent().addClass("invalid");
                else
                    field.parent().removeClass("invalid")
            })
        },
        submit: function submit() {
            var _this = this;
            var formElement = mobilerdh_form.el;
            var submitEl = formElement.find(".btn");
            submitEl.on("click", function(e) {
                e.preventDefault();
                _this._validate()
            })
        }
    }
};
$(function() {
    mobilerdh_form.init()
});
var tabclick = document.querySelectorAll(".header-m__nav-item a[href\x3d'#']");
for (var i = 0; i < tabclick.length; i += 1)
    tabclick[i].addEventListener("click", function(e) {
        $(".header-m__sidebar-logo").hide();
        $(".header-m__nav-back").show();
        e.currentTarget.parentElement.children[1].parentElement.classList.add("collapse");
        $(".header-m__nav-middle").addClass("collapse-outer")
    });


var iconSearch = document.querySelector(".header-m__search-trigger .icon-search");
var headerMSidebarClose = document.querySelector(".header-m__sidebar-close");
var bottonNavIconWrapper = document.querySelector(".bottom_navigation__icons_wrapper");
iconSearch && iconSearch.addEventListener("click", function() {
    bottonNavIconWrapper.style.zIndex = "99"
});
headerMSidebarClose && headerMSidebarClose.addEventListener("click", function() {
    bottonNavIconWrapper.style.zIndex = "9999"
});
// function getform(url) {
//     console.log(`Fetching data from ${url}`);
//     fetch(url, {
//         method: 'GET', 
//         headers: {
//             'Content-Type': 'application/json',
         
//         }
//     })
//     .then(response => {
//         console.log('Response received');
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Data:', data);

    
//         const fields = data.data; 

//         if (!Array.isArray(fields)) {
//             console.error('Expected an array but got:', fields);
//             return;
//         }

       
        const div = document.createElement("div");
        
      
        // const form = document.createElement("form");
        // form.id = "dynamicForm";
        
        
        // fields.forEach(field => {
        //     let inputElement;
            
        //     switch (field.Type) {
        //         case "text-field":
        //             inputElement = document.createElement("input");
        //             inputElement.type = "text";
        //             inputElement.placeholder = field.Placeholder || "";
        //             inputElement.name = field.Field; 
        //             break;
                
        //         case "select":
        //             inputElement = document.createElement("select");
        //             // Handle options if present
        //             if (field.Options) {
        //                 const options = field.Options.split(", ");
        //                 options.forEach(option => {
        //                     const optionElement = document.createElement("option");
        //                     optionElement.value = option;
        //                     optionElement.textContent = option;
        //                     inputElement.appendChild(optionElement);
        //                 });
        //             }
        //             inputElement.name = field.Field; 
        //             break;
                
        //         case "submit":
        //             inputElement = document.createElement("button");
        //             inputElement.type = "submit";
        //             inputElement.textContent = field.Label || "Submit";
        //             inputElement.formAction = field.Extra; 
        //             break;
                
        //         default:
                    
        //             break;
        //     }

        //     if (inputElement) {
        //         const label = document.createElement("label");
        //         label.textContent = field.Label || field.Field;
        //         form.appendChild(label);
        //         form.appendChild(inputElement);
        //         form.appendChild(document.createElement("br")); 
        //     }
        // });

//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });
// }

// Example URL for fetching data
// const proxyUrl = 'https://api.allorigins.win/raw?url=';
// const targetUrl = 'https://main--idfcfirstbank--teknopointproject.hlx.page/email-form.json?nocache=1724407666946';
// getform(proxyUrl + encodeURIComponent(targetUrl));



var domainmain=document.getElementById("domainmain").value;
domainmain=domainmain.split("|");

function replacepagedomain(path){
    path=path.replace(domainmain[0],domainmain[1]);
    return path;
}

// document.body.appendChild(divss);
setTimeout(() => {
    var form = "<div class=\"form_container\"><form class=\"frm head-redesign-help__form\" action=\"#\" autocomplete=\"off\">" +
    "<div class=\"formcontainer simpleouter container responsivegrid\">" +
        "<div class=\"head-redesign-help-right \">" +
            "<div class=\"frm__group\">" +
                "<label class=\"frm__label\" for=\"form-field__C_FirstName\">" +
                    "Full Name" +
                    "<span>*</span>" +
                "</label>" +
                "<input class=\"frm__field keyval\" type=\"text\" data-validation=\"name\" data-json=\"C_FirstName\" id=\"form-field__C_FirstName\" placeholder=\"Enter your name\" required=\"true\">" +
                "<label style=\"display: none;\" class=\"frm__label ids-form-label\" for=\"form-field__C_FirstName\">" +
                    "Full Name" +
                    "<span>*</span>" +
                "</label>" +
                "<span class=\"error\">Please enter your Name</span>" +
            "</div>" +
            "<div class=\"frm__group\">" +
                "<label class=\"frm__label\" for=\"form-field__C_Mobile\">" +
                    "Mobile Number" +
                    "<span>*</span>" +
                "</label>" +
                "<input class=\"frm__field keyval\" type=\"tel\" data-validation=\"mobileNumber\" data-json=\"C_Mobile\" id=\"form-field__C_Mobile\" placeholder=\"Enter mobile number\" required=\"true\" minlength=\"10\" maxlength=\"10\">" +
                "<label style=\"display: none;\" class=\"frm__label ids-form-label\" for=\"form-field__C_Mobile\">" +
                    "Mobile Number" +
                    "<span>*</span>" +
                "</label>" +
                "<span class=\"error\">Please enter your Mobile Number</span>" +
                "<span class=\"country_code\">+91</span>" +
            "</div>" +
            "<div class=\"frm__group\">" +
                "<label class=\"frm__label\" for=\"form-field__C_Pincode\">" +
                    "Pincode" +
                    "<span>*</span>" +
                "</label>" +
                "<input class=\"frm__field keyval\" type=\"tel\" data-validation=\"pincode\" data-json=\"C_Pincode\" id=\"form-field__C_Pincode\" placeholder=\"Enter your Pincode\" required=\"true\" minlength=\"6\" maxlength=\"6\">" +
                "<label style=\"display: none;\" class=\"frm__label ids-form-label\" for=\"form-field__C_Pincode\">" +
                    "Pincode" +
                    "<span>*</span>" +
                "</label>" +
                "<span class=\"error\">Please enter your Pincode</span>" +
            "</div>" +
            "<div class=\"frm__group\">" +
                "<label class=\"frm__label\" for=\"form-field__C_Email\">" +
                    "Email ID" +
                    "<span>*</span>" +
                "</label>" +
                "<input class=\"frm__field keyval\" type=\"email\" data-validation=\"email\" data-json=\"C_Email\" id=\"form-field__C_Email\" placeholder=\"Enter your email\" required=\"true\">" +
                "<label style=\"display: none;\" class=\"frm__label ids-form-label\" for=\"form-field__C_Email\">" +
                    "Email ID" +
                    "<span>*</span>" +
                "</label>" +
                "<span class=\"error\">Please enter your Email ID</span>" +
            "</div>" +
            "<div class=\"form_field_checkbox\">" +
                "<div class=\"form-checkbox\">" +
                    "<label class=\"check-container\">Yes, I would like to receive important updates and notifications on WhatsApp" +
                        "<input type=\"checkbox\" data-json=\"C_WhatsappNotification\" checked=\"false\">" +
                        "<span class=\"checkmark\"></span>" +
                    "</label>" +
                "</div>" +
            "</div>" +
            "<div class=\"form_hidden\">" +
                "<input type=\"hidden\" data-json=\"C_CampaignId\" value=\"DECOR_ORGANIC\">" +
            "</div>" +
            "<div class=\"paragraph text\">" +
                "<div class=\"head-redesign-help__form-description\">" +
                    "<p>By proceeding, you are authorizing Beautiful Homes and its suggested contractors to get in touch with you through calls, sms, or e-mail.</p>" +
                "</div>" +
            "</div>" +
            "<div class=\"form_button\">" +
                "<div class=\"head-redesign-help__form-cta\">" +
                    "<button type=\"button\" class=\"btn btn--primary btn__icon--right black-form-cta-click\" data-redirection=\"/content/asianpaintsbeautifulhomes/us/en/thank-you.html\" onclick=\"sfform(event)\">Submit<span class=\"icon-chevron-right\"></span></button>" +
                "</div>" +
            "</div>" +
        "</div>" +
    "</div>" +
    "</form></div>";
  
  var divss = document.querySelector(".head-redesign-container .columns-wrapper .columns div:nth-child(2)");
  console.log("this is ", divss);
  
  if (divss) {
    divss.innerHTML = form;
  } else {
    console.error("Element not found");
  }
  
  }, 500);


  setTimeout(() => {
    var searchquerys, domainpath;
function debounce(a, b) {
    var d;
    return function() {
        var e = Array.prototype.slice.call(arguments);
        clearTimeout(d);
        d = setTimeout(function() {
            a.apply(this, e)
        }, b)
    }
}
document.querySelector("#field-search1").addEventListener("keyup", debounce(function(a) {
    keyPressSearch(a)
}, 50));
document.querySelector("#field-search__m").addEventListener("keyup", debounce(function(a) {
    keyPressSearch(a)
}, 50));
function keyPressSearch(a) {
    var b = document.querySelector("header").classList;
    b.contains("search--expanded") || b.add("search--expanded");
    if ("" != document.getElementById("field-search1").value) {
        b = document.getElementById("field-search1").value;
        for (var d = b.replace(/\s+/g, " ").trim().split(" "), e = "", c = 0; c < d.length; c++) {
            var f = d[c];
            0 != c && (e += " OR ");
            e += ' (title:"' + f + '"^1000 OR articleTitle:"' + f + '"^1000 OR description:"' + f + '"^500 OR main_category:"' + f + '"^200 OR sub_category:"' + f + '"^100 OR pagedata:"' + f + '"^1)'
        }
        d = '(identifier:"products" OR identifier:"article") AND (' + e + ") \x26fl\x3did,url,title,featuredImg,identifier,sku_code,articleTitle\x26rows\x3d7000\x26sort\x3dscore desc";
        console.log(d);
        if ("Backspace" != a.key || 8 != a.keyCode)
            if ("" == b || 3 > b.length || 50 < b.length)
                return !1;
        13 === a.keyCode && searchpage(a);
        searchquerys = d;
        searchquerys = searchquerys.replaceAll(" ", "%20");
        domainpath = document.getElementById("solrdomain").value;
        searchapi()
    } else if ("" != document.getElementById("field-search__m").value) {
        b = document.getElementById("field-search__m").value;
        d = b.replace(/\s+/g, " ").trim().split(" ");
        e = "";
        for (c = 0; c < d.length; c++)
            f = d[c],
            0 != c && (e += " OR "),
            e += ' (title:"' + f + '"^1000 OR articleTitle:"' + f + '"^1000 OR description:"' + f + '"^500 OR main_category:"' + f + '"^200 OR sub_category:"' + f + '"^100 OR pagedata:"' + f + '"^1)';
        d = '(identifier:"products" OR identifier:"article") AND (' + e + ") \x26fl\x3did,url,title,featuredImg,identifier,sku_code,articleTitle\x26rows\x3d7000\x26sort\x3dscore desc";
        console.log(d);
        if ("Backspace" != a.key || 8 != a.keyCode) {
            if ("" == b) {
                a = document.querySelectorAll(".searchresult");
                for (b = 0; b < a.length; b++)
                    a[b].style.display = "block";
                a = document.querySelectorAll(".searchdynamic");
                for (b = 0; b < a.length; b++)
                    a[b].style.display = "block";
                return !1
            }
            if (3 > b.length || 50 < b.length)
                return !1
        }
        13 === a.keyCode && searchpage(a);
        searchquerys = d;
        searchquerys = searchquerys.replaceAll(" ", "%20");
        domainpath = document.getElementById("solrdomain").value;
        searchapi()
    } else if ("" == document.getElementById("field-search1").value) {
        a = document.querySelectorAll(".searchresult");
        for (b = 0; b < a.length; b++)
            a[b].style.display = "block";
        a = document.querySelectorAll(".searchdynamic");
        for (b = 0; b < a.length; b++)
            a[b].style.display = "none";
        document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none"
    } else if ("" == document.getElementById("field-search__m").value) {
        a = document.querySelectorAll(".searchresult");
        for (b = 0; b < a.length; b++)
            a[b].style.display = "block";
        document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none";
        a = document.querySelectorAll(".searchdynamic");
        for (b = 0; b < a.length; b++)
            a[b].style.display = "none";
        document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none"
    }
}
function searchapi() {
    var a = new XMLHttpRequest;
    a.addEventListener("readystatechange", function() {
        if (4 === this.readyState) {
            var b = JSON.parse(this.response);
            b = b.response.docs;
            0 < b.length && rendersearchresults(b)
        }
    });
    a.open("GET", domainpath + searchquerys);
    a.send()
}
function analyticsearch(a, b, d) {
    "undefined" == a && (a = "");
    trendingsearchClick(a, b)
}
function rendersearchresults(a) {
    if ("" != document.getElementById("field-search1").value)
        var b = document.getElementById("field-search1").value;
    "" != document.getElementById("field-search__m").value && (b = document.getElementById("field-search__m").value);
    for (var d = "", e = document.querySelectorAll(".searchresult"), c = 0; c < e.length; c++)
        e[c].style.display = "none";
    a = nestGroupsBy(a, ["identifier"]);
    console.log("groups", a);
    e = 2;
    if (!a.hasOwnProperty("products") || 3 > a.products.length)
        e = a.hasOwnProperty("products") ? 5 - a.products.length : 5;
    if (a.hasOwnProperty("products"))
        for (c = 0; c < a.products.length; c++)
            if (3 > c) {
                var f = a.products[c].featuredImg + "/" + a.products[c].sku_code + "_PLP.jpg";
                var g = replacepagedomain(a.products[c].url.replaceAll(/-+/g, "-"))
                  , h = '"' + b + "','" + a.products[c].title + "','" + a.products[c].url + '"';
                d += '\x3cli\x3e \x3ca href\x3d"' + g + '" onclick\x3d"analyticsearch(' + h + ')"\x3e \x3cdiv class\x3d"header-m__search-section__thumb"\x3e\x3cimg class\x3d"lozad" data-src\x3d"' + f + '" alt\x3d"Beautifulhomes"\x3e\x3c/div\x3e\x3cdiv class\x3d"header-m__search-section__desc"\x3e' + a.products[c].title + "\x3c/div\x3e \x3c/a\x3e\x3c/li\x3e"
            }
    if (a.hasOwnProperty("article"))
        for (c = 0; c < a.article.length; c++)
            c < e && (f = a.article[c].featuredImg,
            g = replacepagedomain(a.article[c].url.replaceAll(/-+/g, "-")),
            h = '"' + b + "','" + a.article[c].articleTitle + "','" + a.article[c].url + '"',
            d += '\x3cli\x3e \x3ca href\x3d"' + g + '" onclick\x3d"analyticsearch(' + h + ')"\x3e \x3cdiv class\x3d"header-m__search-section__thumb"\x3e\x3cimg class\x3d"lozad" data-src\x3d"' + f + '" alt\x3d"Beautifulhomes"\x3e\x3c/div\x3e\x3cdiv class\x3d"header-m__search-section__desc"\x3e' + a.article[c].articleTitle + "\x3c/div\x3e \x3c/a\x3e\x3c/li\x3e");
    b = document.querySelectorAll(".searchdynamic");
    document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "block";
    for (a = 0; a < b.length; a++)
        b[a].innerHTML = d,
        b[a].style.display = "block";
    lozad().observe()
}
function searchpage(a) {
    if ("" != document.getElementById("field-search1").value) {
        a = document.getElementById("field-search1").value;
        var b = "/content/asianpaintsbeautifulhomes/us/en";
        if (window.location.href.includes("https://www.beautifulhomes.asianpaints.com/")) {
            if (3 < a.length || 50 >= a.length)
                window.location.href = "https://www.beautifulhomes.asianpaints.com/search.html?searchterm\x3d" + a
        } else if (window.location.href.includes("https://betabeautifulhomes.asianpaints.com/"))
            window.location.href = "https://betabeautifulhomes.asianpaints.com/search.html?searchterm\x3d" + a;
        else if (3 < a.length || 50 >= a.length)
            window.location.href = replacepagedomain(b) + "/search.html?searchterm\x3d" + a
    } else if ("" != document.getElementById("field-search__m").value)
        if (a = document.getElementById("field-search__m").value,
        b = "/content/asianpaintsbeautifulhomes/us/en",
        window.location.href.includes("https://www.beautifulhomes.asianpaints.com/")) {
            if (3 < a.length || 50 >= a.length)
                window.location.href = "https://www.beautifulhomes.asianpaints.com/search.html?searchterm\x3d" + a
        } else if (window.location.href.includes("https://betabeautifulhomes.asianpaints.com/"))
            window.location.href = "https://betabeautifulhomes.asianpaints.com/search.html?searchterm\x3d" + a;
        else if (3 < a.length || 50 >= a.length)
            window.location.href = replacepagedomain(b) + "/search.html?searchterm\x3d" + a
        var domainmain=document.getElementById("domainmain").value;
        domainmain=domainmain.split("|");
    
        function replacepagedomain(path){
            path=path.replace(domainmain[0],domainmain[1]);
            return path;
        }


    }
$("#field-search1").on("input", function() {
    var searchTerm = ($("#field-search1").val(),
    $("#field-search1").val().trim());
    /^[A-Za-z0-9\s]+$/.test(searchTerm) || $(this).val("")
});
$("#field-search__m").on("input", function() {
    var searchTerm = ($("#field-search__m").val(),
    $("#field-search__m").val().trim());
    /^[A-Za-z0-9\s]+$/.test(searchTerm) || $(this).val("")
});
function nestGroupsBy(a, b) {
    b = Array.from(b);
    if (1 === b.length)
        return groupBy(a, b[0]);
    property = b.shift();
    a = groupBy(a, property);
    for (var d in a)
        a[d] = nestGroupsBy(a[d], Array.from(b));
    return a
}
function groupBy(a, b) {
    return a.reduce(function(d, e) {
        var c = e[b];
        d[c] || (d[c] = []);
        d[c].push(e);
        return d
    }, {})
}
document.addEventListener("DOMContentLoaded", function() {
    $("#field-search1").on("click", function() {
        try {
            searchInitiate("header")
        } catch (a) {
            console.log("Error in searchInit call" + a)
        }
    })
    
});

  }, 2000);
 
  setTimeout(() => {
    var bottomNavigationItems = document.querySelectorAll(".bottom_navigation__items");
var bottomNavIcon = document.querySelectorAll(".bottom_nav__icon");
var bottomNavigationOverlay = document.querySelector(".bottom_navigation_overlay");
var navGreyLine = document.querySelectorAll(".nav_grey_line");
bottomNavIcon.forEach(function(ele) {
    ele.addEventListener("click", function() {
        var currentIconDataSet = ele.dataset.navicon;
        bottomNavigationItems.forEach(function(itemWrap) {
            var itemWrapperDataSet = itemWrap.dataset.itemwrapper;
            if (currentIconDataSet !== itemWrapperDataSet)
                itemWrap.classList.remove("showItem")
        });
        bottomNavIcon.forEach(function(navicon) {
            var navIcondSet = navicon.dataset.navicon;
            if (navIcondSet !== currentIconDataSet)
                navicon.classList.remove("active")
        });
        bottomNavigationItems.forEach(function(itemWrap) {
            var itemWrapperDataSet = itemWrap.dataset.itemwrapper;
            if (currentIconDataSet == itemWrapperDataSet) {
                itemWrap.classList.toggle("showItem");
                ele.classList.toggle("active")
            }
        });
        if (ele.classList.contains("active")) {
            bottomNavigationOverlay.style.display = "block";
            document.body.classList.add("hide_overflow")
        } else {
            bottomNavigationOverlay.style.display = "none";
            document.body.classList.remove("hide_overflow")
        }
    })
});
navGreyLine.forEach(function(ele) {
    ele.addEventListener("click", function(e) {
        e.stopPropagation();
        bottomNavigationOverlay.style.display = "none";
        document.body.classList.remove("hide_overflow");
        bottomNavIcon.forEach(function(navicon) {
            navicon.classList.remove("active")
        });
        bottomNavigationItems.forEach(function(itemWrap) {
            itemWrap.classList.remove("showItem")
        })
    })
});
bottomNavigationOverlay && bottomNavigationOverlay.addEventListener("click", function() {
    bottomNavigationOverlay.style.display = "none";
    document.body.classList.remove("hide_overflow");
    bottomNavIcon.forEach(function(navicon) {
        navicon.classList.remove("active")
    });
    bottomNavigationItems.forEach(function(itemWrap) {
        itemWrap.classList.remove("showItem")
    })
});
  }, 1000);

  
