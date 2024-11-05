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


var domainmain=document.getElementById("domainmain").value;
domainmain=domainmain.split("|");

function replacepagedomain(path){
    path=path.replace(domainmain[0],domainmain[1]);
    return path;
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
                        const observer = lozad(); // lazy loads elements with default selector as '.lozad'
                        observer.observe();
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



// document.body.appendChild(divss);
setTimeout(() => {
    function sfform(event) {
        event.preventDefault(); // Prevent the default form submission
      
        // Get data from form fields
        const formData = {
          C_FirstName: document.getElementById("form-field__C_FirstName").value,
          C_Mobile: document.getElementById("form-field__C_Mobile").value,
          C_Pincode: document.getElementById("form-field__C_Pincode").value,
          C_Email: document.getElementById("form-field__C_Email").value,
          C_WhatsappNotification: document.querySelector("input[data-json='C_WhatsappNotification']").checked,
          C_CampaignId: document.querySelector("input[data-json='C_CampaignId']").value,
        };
        fetch("http://localhost:8001/api/user/showdata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Failed to submit data");
          })
          .then(data => {
            console.log("Success:", data);
            alert("Form submitted successfully!");
            // Redirect if needed
            window.location.href = "/content/asianpaintsbeautifulhomes/us/en/thank-you.html";
          })
          .catch(error => {
            console.error("Error:", error);
            alert("There was an error submitting the form.");
          });
        }
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

    // Attach event listener to the submit button
    const submitButton = divss.querySelector(".black-form-cta-click");
    submitButton.addEventListener("click", sfform);
} else {
    console.error("Element not found");
}
  
  }, 500);


  setTimeout(() => {
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
            "border-radius": "50%",
            "border": "1.6px solid #FFC63C"
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
        brandLogoWrapper[2].addEventListener("click", function() {
            headerClick("white teak", "header")
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
        var profileIcon = document.querySelector(".location-profile-icon [data-login-redirection]");
        profileIcon && profileIcon.addEventListener("click", function() {
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
        var mobileHomeIcon = document.querySelector(".header-m__logo-outer");
        mobileHomeIcon.addEventListener("click", function() {
            mobileHomeIcon.classList.add("active");
            setTimeout(function() {
                mobileHomeIcon.classList.remove("active")
            }, 500)
        });
        var mobileSearchIcon = document.querySelector(".header-m__right.black-header-wrapper .icon-search");
        mobileSearchIcon.addEventListener("click", function() {
            mobileSearchIcon.classList.add("background_blink");
            setTimeout(function() {
                mobileSearchIcon.classList.remove("background_blink")
            }, 500)
        });
        var mobileCallIcon = document.querySelector(".header-m__right.black-header-wrapper .location-mobile-icon");
        mobileCallIcon.addEventListener("click", function() {
            mobileCallIcon.classList.add("background_blink");
            setTimeout(function() {
                mobileCallIcon.classList.remove("background_blink")
            }, 500)
        });
        var locationAndProfileWrapper = document.querySelector(".header-m__right.black-header-wrapper .location-profile-icon");
        locationAndProfileWrapper.addEventListener("click", function(e) {
            if (e.target.tagName.toLowerCase() === "a" || e.target.tagName.toLowerCase() === "img") {
                e.target.parentNode.classList.add("background_blink");
                setTimeout(function() {
                    e.target.parentNode.classList.remove("background_blink")
                }, 500)
            }
        })
    });
    document.addEventListener("DOMContentLoaded", function() {
        var getStartedEle = document.querySelector(".offer-header-redirect-wrapper a");
        getStartedEle.addEventListener("click", function(e) {
            var getStartedVal = getStartedEle.innerHTML;
            headerClick(getStartedVal, "header")
        })
    });
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
                            const observer = lozad(); // lazy loads elements with default selector as '.lozad'
                            observer.observe();
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
    document.getElementsByTagName("body")[0].addEventListener("click", function(event) {
        if (event.target.classList.contains("field-search") == false) {
            if (document.getElementById("field-search1").value != "")
                document.getElementById("field-search1").value = "";
            if (document.getElementById("field-search__m").value != "")
                document.getElementById("field-search__m").value = "";
            if (document.querySelector(".header").classList.contains("search--expanded")) {
                document.querySelector(".header").classList.remove("search--expanded");
                if (document.querySelector(".searchresult").style.display == "block")
                    document.querySelector(".searchresult").style.display = "none";
                if (document.querySelector(".searchdynamic").style.display == "block") {
                    document.querySelector(".searchdynamic").style.display = "none";
                    document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none"
                }
            }
        }
    });
    document.querySelector("#header_sticky_btn").addEventListener("click", function(e) {
        e.preventDefault();
        $("#dialog-personal-info").css({
            "display": "block"
        });
        $("#field_email").removeAttr("disabled");
        if (document.querySelector("#dialog-personal-info").style.display == "block")
            $("body").css("overflow", "hidden");
        if ($(".new_thankup_popup .dialog__body").hasClass("dsp-none"))
            $(".new_thankup_popup .dialog__container").removeClass("new_style");
        else
            $(".new_thankup_popup .dialog__container").addClass("new_style")
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
}
$("#field-search1").on("input", function() {
    searchTerm = ($("#field-search1").val(),
    $("#field-search1").val().trim());
    /^[A-Za-z0-9\s]+$/.test(searchTerm) || $(this).val("")
});
$("#field-search__m").on("input", function() {
    searchTerm = ($("#field-search__m").val(),
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
var validateName = function(a) {
    return "" !== a && /^[a-zA-Z][a-zA-Z ]*$/.test(a)
}
  , validateDigit = function(a) {
    return "" !== a && /^\d+$/.test(a)
}
  , validateMobile = function(a) {
    return "" !== a && /^[6-9]\d{9}$/gi.test(a)
}
  , validateMobileWithNationalCode = function(a) {
    return "" !== a && /^\+(?:[0-9]-?){6,14}[0-9]$/.test(a)
}
  , validatePincode = function(a) {
    return "" !== a && /^[1-9][0-9]{5}$/.test(a)
}
  , validateEmail = function(a) {
    return "" !== a && /^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.([a-zA-Z]{2,4})$/.test(a)
}
  , validateCardNumber = function(a) {
    return "" !== a && /\b\d{4}([- ]?)\d{4}\1\d{4}\1\d{4}\b/.test(a)
}
  , validateCardExpiryDate = function(a) {
    return "" !== a && /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(a)
}
  , validateCardCvvCode = function(a) {
    return "" !== a && /^\d{3,4}$/.test(a)
}
  , validateUpiId = function(a) {
    return "" !== a && /^[\w.-]+@[\w.-]+$/.test(a)
}
  , validateCouponCode = function(a) {
    return /^[a-zA-Z0-9\s]*$/.test(a)
}
  , validateAddress = function(a) {
    return "" !== a && /^[a-zA-Z0-9\s,'-]*$/.test(a)
}
  , validateGstIn = function(a) {
    return "" !== a && /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/gm.test(a)
}
  , validateflags = !0;
function formvalidation(a) {
    a = a.currentTarget.parentElement.parentElement.parentElement.getElementsByTagName("input");
    validateflags = !0;
    a.forEach(function(b) {
        b = $(b);
        if ("undefined" !== b.attr("data-validation") && !1 !== b.attr && void 0 !== b.attr("data-validation")) {
            var c = b.attr("data-validation")
              , e = $.trim(b.val());
            if ("" == e)
                b.parent().addClass("invalid"),
                validateflags = !1;
            else {
                var d = "";
                switch (c) {
                case "name":
                    validateName(e) || (d = "Please enter a valid Name",
                    validateflags = !1,
                    b.focus());
                    break;
                case "mobileNumber":
                    validateMobile(e) || (d = "Please enter a valid Mobile Number",
                    validateflags = !1,
                    b.focus());
                    break;
                case "pincode":
                    validatePincode(e) || (d = "Please enter a valid PIN code",
                    validateflags = !1,
                    b.focus());
                    break;
                case "email":
                    c = validateEmail(e);
                    c || (d = "Please enter a valid Email ID",
                    validateflags = !1,
                    b.focus());
                    break;
                case "digit":
                    c = validateDigit(e),
                    c || (d = "Enter digit only",
                    validateflags = !1,
                    b.focus());
                case "mobile_number_verfication":
                    c = validateDigit(e);
                    var f = !1;
                    c || (d = "Enter digit only",
                    validateflags = !1,
                    b.focus());
                    validateMobile(e) || (d = "Please enter a valid Mobile Number",
                    validateflags = !1,
                    f = !0,
                    b.focus());
                    0 == f && "Verify" == b[0].nextElementSibling.nextElementSibling.textContent && (d = "Please verify your Mobile Number",
                    validateflags = !1)
                }
                "" !== d && b.parent().addClass("invalid").find(".error").text(d)
            }
        }
    })
}
var fnames = Array.from(document.getElementsByClassName("keyval"));
fnames.forEach(keyupvalidation);
function keyupvalidation(a, b) {
    a.addEventListener("keyup", function(c) {
        ("Enter" !== c.key || "Backspace" !== c.key || "Tab" !== c.key) && a.parentElement.classList.contains("invalid") && a.parentElement.classList.remove("invalid")
    })
}
"use strict";

var dsscf = {
  el: $('.dialog-ssc-prod-list-filters'),
  init: function init() {
    this.events.click();
  },
  events: {
    click: function click() {
      var dialogEl = dsscf.el;
      var clearBtn = $('#btn-clear-filters');
      var sortingBtns = dialogEl.find('.btn-sorting');
      var sideBtns = dialogEl.find('.btn-side');
      var filterList = dialogEl.find('.dialog__list');
      var submitBtn = $('#btn-show-results');
      clearBtn.on('click', function (e) {
        sortingBtns.each(function (i, elem) {
          if ($(elem).hasClass('btn--primary')) {
            $(elem).removeClass('btn--primary').addClass('btn--ghost');
          }
          if (document.querySelector('.left.gallery-filter-left') != null) { 
            $('.left.gallery-filter-left').children().last()[0].innerText = " ";
          }
        });
        sideBtns.each(function (i, elem) {
          var tag = $(elem).data('button-value');

          if ($(elem).hasClass('btn--primary')) {
            $("*[data-value=\"".concat(tag, "\"]")).addClass('hide');
            $(elem).removeClass('btn--primary').addClass('btn--ghost');
          }
          if (document.querySelector('.left.gallery-filter-left') != null) { 
            $('.left.gallery-filter-left').children().last()[0].innerText = " ";
          }
          if (sessionStorage.getItem('Gallery_filter')) { 
            sessionStorage.removeItem("Gallery_filter");
          }
        });
        filterList.find('li').each(function (i, elem2) {
          if ($(elem2).hasClass('active')) {
            $(elem2).removeClass('active');
          }
          filterchange();
        });
        if ($('body').attr('style')) { 
          $('body').css("overflow","unset")
        }
      });
      sortingBtns.on('click', function (e) {
        sortingBtns.each(function (i, elem) {
          if ($(elem).hasClass('btn--primary')) {
            $(elem).removeClass('btn--primary').addClass('btn--ghost');
          }
        });
        var thisObj = $(e.currentTarget);
        thisObj.removeClass('btn--ghost').addClass('btn--primary');
      });
      sideBtns.on('click', function (e) {
        var thisObj = $(e.currentTarget);
        var tag = thisObj.text();
        console.log($("*[data-value=\"".concat(tag, "\"]")));
        if (thisObj.hasClass('btn--primary')) {
          $("*[data-value=\"".concat(tag, "\"]")).addClass('hide');
          thisObj.addClass('btn--ghost').removeClass('btn--primary');
        } else {
          thisObj.removeClass('btn--ghost').addClass('btn--primary');
          $("*[data-value=\"".concat(tag, "\"]")).removeClass('hide');
        }
        filterchange();
      });
      filterList.find('li').on('click', function (e) {
        
        var thisObj = $(e.currentTarget);
        thisObj.toggleClass('active');
      });
      submitBtn.on('click', function (e) {
        $('.sca-prod-listing__filters-selected').css('display', 'flex');
        dialogEl.hide();
        if ($('body').attr('style')) { 
          $('body').css("overflow","unset")
        }
      });
      $('.js-filter-bar-input-tag').on('click', function (e) {
        if (window.matchMedia("(max-width: 767px)").matches) {
          var tag = $(e.currentTarget).data('value');
          $("*[data-value=\"".concat(tag, "\"]")).addClass('hide');
          $("*[data-button-value=\"".concat(tag, "\"]")).addClass('btn--ghost').removeClass('btn--primary');
          var filterType = $(e.currentTarget).data('type').replace("type-", "");
          filterchange(filterType, tag, prodloadnum)
        }
      });

    }
  }
};



"use strict";

var fb = {
  el: $('.filter-bar'),
  clearEl: $('.js-filterbar-clear'),
  applyEl: $('.js-filterbar-select-apply'),
  tagsEl: $('.js-filter-bar-input-tag'),
  totalEl: $('.js-filterbar-total'),
  selected: {
    location: null,
    accommodation: null,
    style: null,
    room: null,
    budget: null,
    celebrity: null
  },
  total: 0,
  init: function init() {
    this.selectedChange();

    if (this.select.el.length > 0) {
      this.select.init();
    }

    this.event.on.init();
  },
  event: {
    on: {
      init: function init() {
        this.click.init();
      },
      click: {
        init: function init() {
          this.clear();
          this.apply();
          this.tags();
        },
        clear: function clear() {
          var clearEl = fb.clearEl;

          if (clearEl.length) {
            clearEl.on('click', fb.eventFunc.clear);
          }
        },
        apply: function apply() {
          var applyEl = fb.applyEl;
          applyEl.on('click', fb.eventFunc.apply);
        },
        tags: function tags() {
          var tagsEl = $('.js-filter-bar-input-tag');
          tagsEl.on('click', fb.eventFunc.tags);
        }
      }
    }
  },
  eventFunc: {
    clear: function clear() {
      fb.clearStyle();
      fb.totalEl.text('');
      fb.tagsEl.addClass('hide');
      fb.clearEl.addClass('hide');
      fb.total = 0;
    },
    apply: function apply() {
      mps.close();
    },
    tags: function tags() {
      if (!window.matchMedia("(max-width: 767px)").matches) {
        var order = $(this).data("order").toString();
        var type = $(this).data("type");
        var choices = $("select[data-filter-type='".concat(type, "']")).multipleSelect("getSelects");
        var index = choices.indexOf(order);

        if (index > -1) {
          choices.splice(index, 1);
          $("select[data-filter-type='".concat(type, "']")).multipleSelect("setSelects", choices);
          $(".js-filter-bar-input-tag[data-type='".concat(type, "'][data-order='").concat(order, "']")).addClass('hide');
          fb.total--;

          if (fb.total === 0) {
            fb.totalEl.text('');
            fb.clearEl.addClass('hide');
          } else {
            fb.totalEl.text(" (".concat(fb.total, ")"));
            fb.clearEl.removeClass('hide');
          }
        }
        filterchange();
      }
    }
  },
  selectedChange: function selectedChange() {

  
  },
  updateStyle: function updateStyle(type, value) {
    console.log("update style: ".concat(type, " ").concat(value));

    if (type === 'date') {} else if (value === 'all') {
      $("select[data-filter-type='".concat(type, "']")).multipleSelect('checkAll');
      $("div[data-filter-type='".concat(type, "']")).removeClass('active');
      $("div.all[data-filter-type='".concat(type, "']")).addClass('active');
    } else if (value === '') {
      $("select[data-filter-type='".concat(type, "']")).multipleSelect('uncheckAll');
      $("div[data-filter-type='".concat(type, "']")).removeClass('active');
    } else {
      var valArray = value.split(',');
      $("div[data-filter-type='".concat(type, "']")).removeClass('active');
      valArray.forEach(function (val) {
        var item = $("div[data-filter-type='".concat(type, "'][data-value='").concat(val, "']"));
        item.addClass('active');
      });
      $("select[data-filter-type='".concat(type, "']")).multipleSelect('setSelects', valArray);
    }
  },
  clearStyle: function clearStyle() {
    this.select.el.multipleSelect('uncheckAll');
  },
  updateListingParams: function updateListingParams(type, value) {
    console.log("update lsiting params: ".concat(type, " ").concat(value));
  },
  select: {
    el: $('.js-filterbar-select'),
    init: function init() {
      this.selectInit();
    },
    event: {
      on: {
        init: function init() {
          this.click.init();
        },
        click: {
          init: function init() {
            this.clear();
            this.apply();
          },
          clear: function clear() {
            var clearEl = fb.clearEl;

            if (clearEl.length) {
              clearEl.on('click', fb.eventFunc.clear);
            }
          },
          apply: function apply() {
            var applyEl = fb.applyEl;
            applyEl.on('click', fb.eventFunc.apply);
          }
        }
      }
    },
    eventFunc: {
      clear: function clear() {
        fb.clearStyle();
        fb.totalEl.text('');
        fb.tagsEl.addClass('hide');
        filterchange();
      },
      apply: function apply() {
        mps.close();
      }
    },
    selectInit: function selectInit() {
      //* desktop multiple select
      var self = this;
      this.el.each(function () {
        var thisEl = $(this);
        var allSelectedText = thisEl.attr('data-all-selected');
        var counterText = thisEl.attr('data-counter-text');
        thisEl.multipleSelect({
          width: '100%',
          minimumCountSelected: 0,
          maxHeight: 'auto',
          selectAll: false,
          animate: 'slide',
          formatAllSelected: function formatAllSelected(count) {
            return "".concat(counterText, " <i>(All)</i>");
          },
          formatCountSelected: function formatCountSelected(count) {
            return "".concat(counterText, " <i>(").concat(count, ")</i>");
          },
          onOpen: function onOpen() {
            thisEl.next('.ms-parent').addClass('opened');
          },
          onClose: function onClose() {
            thisEl.next('.ms-parent').removeClass('opened');
          },
          onClick: function onClick(count) {
            var filterType = thisEl.data('filter-type');
            var filterVal = thisEl.multipleSelect('getSelects').join();
            fb.selected[filterType] = filterVal;

            if (count.selected) {
              fb.total++;
              $(".js-filter-bar-input-tag[data-type='".concat(filterType, "'][data-order='").concat(count.value, "']")).removeClass('hide');
            } else {
              fb.total--;
              $(".js-filter-bar-input-tag[data-type='".concat(filterType, "'][data-order='").concat(count.value, "']")).addClass('hide');
            }

            if (fb.total > 0) {
              fb.clearEl.removeClass('hide');
              fb.totalEl.text(" (".concat(fb.total, ")"));
            } else {
              fb.clearEl.addClass('hide');
              fb.totalEl.text('');
            }
            var selectedItem =    $(".js-filter-bar-input-tag[data-type='".concat(filterType, "'][data-order='").concat(count.value, "']"))[0].innerText;
            filterchange(filterType, selectedItem, prodloadnum);
          }
        });
      });
    }
  }
};

"use strict";

var mps = {
  el: $('.mobile-popup-selection'),
  trigger: $('.js-mobile-popup-selection'),
  closeEls: $('.mobile-popup-selection__bg, .mobile-popup-selection__close'),
  init: function init() {
    this.openEvent();
    this.closeEvent();
  },
  openEvent: function openEvent() {
    var self = this;
    this.trigger.on('click', function () {
      var thisTrigger = $(this);
      var thisId = thisTrigger.data('target-id');

      if ($(window).width() < 780) {
        self.open(typeof thisId !== 'undefined' ? thisId : '');
      }
    });
  },
  closeEvent: function closeEvent() {
    var _this = this;

    this.closeEls.on('click', function () {
      _this.close();
    });
  },
  open: function open(el) {
    if (el.length) {
      $(el).addClass('active');
    } else {
      this.el.addClass('active');
    } // bodyScrollLock.disableBodyScroll();

  },
  close: function close() {
    this.el.removeClass('active'); // bodyScrollLock.enableBodyScroll();
  }
};

if (mps.trigger.length > 0 && mps.el.length > 0) {
 // mps.init();
}
// $(function () {
//   fb.init(); 
// })
var domainpathgallery = document.getElementById("gallerysolr").value;
var prodloadnum = parseInt(document.getElementById("load").value);
var loadmorecount = parseInt(document.getElementById("loadmore").value);
var projectType;

/////to get category of design ideas function
function getCategory() {
    var link = window.location.href;
    var spilttedVal = link.split('/');
    var result = (spilttedVal[spilttedVal.length - 1].split('.')[0]).split('-').join(' ');
    return result;
}

/**On Load Function */
document.addEventListener('readystatechange', function(event) {


    if (event.target.readyState === "interactive") {
        if (getParameterByName('type') != "") {
            var paramValue = getParameterByName('type');
            projectType = paramValue
            document.querySelector(".gallery-heading-content").innerHTML = paramValue;
        }
        //Get Filter Type and Render Value from solr
        var filterstag = document.querySelectorAll(".filter-bar__content-col  select");
        var paths = '';
        if (filterstag != null) {
            for (var i = 0; i < filterstag.length; i++) {
                paths = filterstag[i];
                filtersvalues(paths);
            }
        }
        //On load function to render cards
        if (getParameterByName('room') == "" && getParameterByName('style') == "" && getParameterByName('colour') == "") {
            if (sessionStorage.getItem('Gallery_filter') == null) {
               // galleryloadxhr();
            }
        }
        if (getParameterByName('type') != "") {
           // galleryloadxhr();
        }
        //fb.init();
    }
    // When window loaded call the function that initiate the dropdown filter 
    if (event.target.readyState === "complete") {
        //dsscf.init();
        
        if (getParameterByName('room') != "") {
            var paramValue = getParameterByName('room');
            if (sessionStorage.getItem('Gallery_filter') == null) {
                sessionStorage.setItem('Gallery_filter', paramValue);
            } else { 
                var sessionget = sessionStorage.getItem('Gallery_filter');
                sessionStorage.setItem('Gallery_filter',sessionget+","+paramValue);
            }
        }
    
        if (getParameterByName('style') != "") {
            var paramValue = getParameterByName('style');
            if (sessionStorage.getItem('Gallery_filter') == null) {
                sessionStorage.setItem('Gallery_filter', paramValue);
            }
            else { 
                var sessionget = sessionStorage.getItem('Gallery_filter');
                sessionStorage.setItem('Gallery_filter',sessionget+","+paramValue);
            }
        }
    
        if (getParameterByName('colour') != "") {
            var paramValue = getParameterByName('colour');
            if (sessionStorage.getItem('Gallery_filter') == null) {
                sessionStorage.setItem('Gallery_filter', paramValue);
            }
            else {
                var sessionget = sessionStorage.getItem('Gallery_filter');
                sessionStorage.setItem('Gallery_filter', sessionget+","+paramValue);
            }
           
        }
        if (sessionStorage.getItem('Gallery_filter') != null) {
            var paramValue = sessionStorage.getItem('Gallery_filter');
            filterselected(paramValue);
        }
    }
        
});

/**Function call to get unique values of attributes */
function filtersvalues(paths) {
    var queryString = '';


    if (window.matchMedia("(max-width: 767px)").matches) {
        queryString += paths.getAttribute("data-side-filter-solr-key");
    } else {
        queryString += paths.getAttribute("data-side-filter-solr-key");
    }

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var resptest = JSON.parse(this.response);
            if (resptest.responseHeader.status == 0) {
                renderfilters(resptest, paths, queryString);
            }
        }
    });

    if (projectType != null) {
        xhr.open("GET", domainpathgallery + 'projecttype:"' + projectType + '"&fl=' + queryString + '&facet.field=' + queryString + '&facet=on&rows=100&facet.mincount=1');
    } else {
        xhr.open("GET", domainpathgallery + "*:*&fl=" + queryString + "&facet.field=" + queryString + "&facet=on&rows=100&facet.mincount=1");
    }
    xhr.send();
}

/**Render Filter */
function renderfilters(resp, paths, queryString) {
    var innerhtmlop = '';
    var taginner = '';
    var attrname = resp.facet_counts.facet_fields[queryString];
    if (window.matchMedia("(max-width: 767px)").matches) {
        /**Render Filter For Mobile View */
        if (attrname.length > 0) {
            if (document.getElementById("mob-" + queryString) != null) {
                for (var i = 0; i < attrname.length; i += 2) {
                    if (attrname.length == 2) {
                        innerhtmlop +=
                            '<button class="btn btn--ghost btn--md btn-side" disabled data-type="type-' + queryString + '"  type="button" data-button-value="' + attrname[i] + '" data-order="' + i + '">' + attrname[i] + '</button>';
                    } else {
                        innerhtmlop +=
                            '<button class="btn btn--ghost btn--md btn-side" data-type="type-' + queryString + '"  type="button" data-button-value="' + attrname[i] + '" data-order="' + i + '">' + attrname[i] + '</button>';
                    }
                }
                document.getElementById("mob-" + queryString).innerHTML = innerhtmlop;
            }
            var taglist = document.getElementById("taglist");
            if (taglist != null) {
                for (var i = 0; i < attrname.length; i += 2) {
                    taginner += '<div class="shop-sub-listing__tag-item filter-bar__tag-item hide js-filter-bar-input-tag" data-msidefilter-solr-key="' + queryString + '" data-order="'
                        + i + '" data-type="type-' + queryString + '" data-value="' + attrname[i] +'"><div class="item-text js-filter-bar-tag" data-product-fiter="'+ attrname[i] +'">' + attrname[i] + '</div><div class="item-close js-filter-bar-tag-close"></div> </div>';
                }
                taglist.innerHTML += taginner;
            }
        } else {
            document.getElementById("mob-" + queryString).parentElement.style.display = "none";
        }

    } else {
        /**Render Filter For Desktop View */
        if (attrname.length > 0) {
            if (document.getElementById(queryString) != null) {
                for (var i = 0; i < attrname.length; i += 2) {
                    if (attrname.length == 2) {
                        innerhtmlop += '<option value=' + i + ' disabled selected><span>' + attrname[i] +'</span></option>';
                    } else {
                        innerhtmlop += '<option value=' + i + '><span>' + attrname[i] + '</span></option>';
                    }
                }
                document.getElementById(queryString).innerHTML = innerhtmlop;
            }
            var taglist = document.getElementById("taglist");
            if (taglist != null) {
                for (var i = 0; i < attrname.length; i += 2) {
                    taginner += '<div class="shop-sub-listing__tag-item filter-bar__tag-item hide js-filter-bar-input-tag" data-msidefilter-solr-key="' + queryString + '" data-order="'
                        + i + '" data-type="' + queryString + '"data-value="'+ attrname[i] + '"><div class="item-text js-filter-bar-tag" data-product-fiter="'+ attrname[i] + '">' + attrname[i] + '</div><div class="item-close js-filter-bar-tag-close"></div></div>';
                }
                taglist.innerHTML += taginner;
            }

        } else {
            document.getElementById(queryString).parentElement.style.display = "none";
        }
    }
    $('.filter-bar__content-col select').multipleSelect('destroy');
    fb.init();
}

/**On Load Render the data for Cards */
function galleryloadxhr() {
    var subdomainpathgallery;

    subdomainpathgallery = domainpathgallery + "identifier:gallery";
    if (projectType != null) {
        subdomainpathgallery += ' AND projecttype:"' + projectType + '"';
    }
    var roomType = document.getElementById("roomtype").value;
    if (roomType != null) { 
        subdomainpathgallery += ' AND room:"' + roomType + '"';
    }

    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var resptest = JSON.parse(this.response);
            if (resptest.responseHeader.status == 0) {
                var resptest = resptest.grouped.title.groups;
                galleryCardData(resptest, prodloadnum);
            }
        }
    });

    xhr.open("GET", subdomainpathgallery + "&rows=10000&group=true&group.field=title&sort=publishedDate desc");
    xhr.send();
}
/**Card Rendering Logic */
function galleryCardData(details, count) {
    var cardsrender = '';
    var resp = details;
    if (resp.length > 0) {
        for (var i = 0; i < count; i++) {
            if (resp[i]) {
                var productdetails = resp[i].doclist.docs[0];
                var productinfo;
                if(productdetails.featuredImg[0].includes("$$$")) {
                    productinfo = productdetails.featuredImg[0].split("$$$");
                    productinfo = '<img src="'+ productinfo[0] + '.transform/bh-gallery-listing/image.webp" alt="'+  productinfo[1] + '"title="'+  productinfo[2] + '" class="gallery-room-img ">';
                } else {
                    productinfo = '  <img src="'+ productdetails.featuredImg + '.transform/bh-gallery-listing/image.webp" class="gallery-room-img ">';
                }
                var title = document.querySelector(".gallery-heading-content").innerHTML;
                var funcparams="'"+productdetails.title+"','Design Idea Step 2','"+title+"',''";
                cardsrender += '<a href="' + replacepagedomain(productdetails.url) + '" onclick="designideastepTwo(' + funcparams + ')" class="gallery-filter"> ' + productinfo + '<h2 class="gl-filter-image-content">' + productdetails.title + '</h2>';
                    if (productdetails.hasOwnProperty("degree_view") && productdetails.degree_view != "") {
                        cardsrender += '<img src="/content/dam/asianpaintsbeautifulhomes/ap-beautiful-homes/360-icon.png" class="gallery-360-icon">';
                    }
                cardsrender +=' <div class="gallery-filter__book-consultation"><span>Book Free Site Visit</span></div> </a > ';
            }
        }
        if (resp.length <= count) {
            document.getElementById("gallery_btn").style.display = 'none';
        } else {
            document.getElementById("gallery_btn").style.display = 'inline';
        }
        document.getElementById("gallerycards").innerHTML = cardsrender;
    } else {
        document.getElementById("gallery_btn").style.display = 'none';
        document.getElementById("gallerycards").innerHTML = "No Results Found";
    }
    var observer = lozad();
    observer.observe();
    bookConsultationBtn()
}

/**Load More Button */
function loadmoreCards() {
    var numcount = document.querySelectorAll(".gallery-filter").length + loadmorecount;
    filterchange('', '', numcount);
}
/**Check object is empty or not */
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

/**function to create query on click of each options */
function filterchange(filterType, selectedItem, prodloadnum) {
    
    if (prodloadnum != undefined) { var cardcount = prodloadnum; } else { var cardcount = parseInt(document.getElementById("load").value) }
    var x = {};
    /**Query to filter selection*/
    var filtertags = document.querySelectorAll('[data-product-fiter]');
    if (filtertags.length != 0) {
        for (var i = 0; i < filtertags.length; i++) {
            if (filtertags[i].parentElement.classList.contains("hide") == false) {
                if (x.hasOwnProperty(filtertags[i].parentElement.getAttribute("data-msidefilter-solr-key"))) {
                    if (x[filtertags[i].parentElement.getAttribute("data-msidefilter-solr-key")] != null || x[filtertags[i].parentElement.getAttribute("data-msidefilter-solr-key")] != '') {
                        if (filtertags[i].innerHTML.includes("%") && !filtertags[i].innerHTML.includes("%25")) {
                            var tetx = filtertags[i].innerHTML.replaceAll("%", "***")
                            x[filtertags[i].parentElement.getAttribute("data-msidefilter-solr-key")] += '||' + tetx;

                        } else {
                            x[filtertags[i].parentElement.getAttribute("data-msidefilter-solr-key")] += '||' + (filtertags[i].innerHTML);
                        }
                    }
                } else {
                    if (filtertags[i].innerHTML.includes("%")) {
                        var tetx = filtertags[i].innerHTML.replaceAll("%", "***")
                        x[filtertags[i].parentElement.getAttribute("data-msidefilter-solr-key")] = tetx;
                    } else {
                        x[filtertags[i].parentElement.getAttribute("data-msidefilter-solr-key")] = filtertags[i].innerHTML;
                    }
                }
            }
        }
    }

    var queryString = "";
    if (isEmpty(x) == false) {

        Object.keys(x).forEach(function(key, index){
            if (x[key].includes("||")) {
                queryString += 'AND';
                queryString += '(';
                var keys = x[key].split("||");
                for (var p = 0; p < keys.length; p++) {
                    if (p < keys.length - 1) {
                        var proattr = "[data-filter-type=" + key + "]";
                        var operat;
                        if (document.querySelector(proattr).getAttribute("data-oprator-attribute") != null) {
                            operat = document.querySelector(proattr).getAttribute("data-oprator-attribute");
                        } else {
                            operat = " OR"
                        }
                        queryString += '${key}:"${keys[p]}"' + operat + " ";
                        if (queryString.includes("%")) {
                            queryString = queryString.replaceAll("%", "%25")
                        }
                    } else {
                        queryString += '${key}:"${keys[p]}"';
                    }

                };
                queryString +=')';
            }
            else {
                queryString += 'AND ${key}: "${x[key]}"'
            }
        });
        queryString = queryString.replaceAll(" ", "%20");
        queryString = queryString.replaceAll(":", "%3A");
    } else {
        queryString = queryString.replaceAll(":", "%3A");
    }

    var subdomainpathgallery = domainpathgallery + "identifier:gallery"

    if (queryString.includes("+")) {
        queryString = queryString.replaceAll("+", "%2B");
    }
    if (queryString.includes(" + ")) {
        queryString = queryString.replaceAll(" + ", "\\+\\");
    }
    if (queryString.includes("&nbsp;")) {
        queryString = queryString.replaceAll("&nbsp;", "%20");
    }
    if (queryString.includes("&amp;")) {
        queryString = queryString.replaceAll("&amp;", "%26");
    }
    if (queryString.includes("&")) {
        queryString = queryString.replaceAll("&", "%26");
    }
    if (queryString.includes("***")) {
        queryString = queryString.replaceAll("***", "%25");
    }

    if (projectType != null) {
        queryString += ' AND projecttype:"' + projectType + '"';
    }

    var roomType = document.getElementById("roomtype").value;
    if (roomType != null) { 
        queryString += ' AND room:"' + roomType + '"';
    }

    var filterVal = document.getElementById("filterval").value;
    if(filterVal != null && filterVal!=''){
        queryString += ' AND filters:"' + filterVal + '"';
    }
        var seesionstring = [];

        if (filtertags.length != 0) {
            for (var i = 0; i < filtertags.length; i++) {
                if (filtertags[i].parentElement.classList.contains("hide") == false) {
                    seesionstring.push(filtertags[i].innerHTML);
                }
            }
        }
        if (seesionstring.length == 0) {
            sessionStorage.removeItem("Gallery_filter");
        }
        
        if (seesionstring.length > 0) {
            sessionStorage.setItem("Gallery_filter", seesionstring);
        }
    if (document.querySelector('.left.gallery-filter-left') != null) {
        if (seesionstring.length > 0) {
            $('.left.gallery-filter-left').children().last()[0].innerText = " (" + seesionstring.length + ")";
        } else { 
            $('.left.gallery-filter-left').children().last()[0].innerText = " ";
        }
    }

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var resptest = JSON.parse(this.response);
            if (resptest.responseHeader.status == 0) {
                resptest = resptest.grouped.title.groups;
                galleryCardData(resptest, cardcount);

            }
        }
    });

    // xhr.open("GET", subdomainpathgallery + " " + queryString + "&rows=10000&group=true&group.field=title&sort=degree_view desc,publishedDate desc");
    xhr.open("GET", subdomainpathgallery + " " + queryString + "&rows=10000&group=true&group.field=title&sort=publishedDate desc");
    xhr.send();
}
/**Get URL parmeters */
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/**Filter selction on load */
function filterselected(paramValue) {
    if (window.matchMedia("(max-width: 767px)").matches) {
        var queryvalue = paramValue.toLocaleLowerCase();
        var span = $('.dialog-ssc-prod-list-filters .btn-side')
        if (paramValue.includes(",")) {
            queryvalue = queryvalue.split(",");
        } else {
            queryvalue = paramValue.toLocaleLowerCase();
        }
        for (var i = 0; i < span.length; i++) {
            try {
                if (typeof (queryvalue) == "object") {
                    for (var j = 0; j < queryvalue.length; j++) {
                        if (queryvalue[j] == span[i].innerHTML.toLowerCase()) {
                            $(span[i]).click()
                        }
                    }
                } else if (typeof (queryvalue) == "string") {
                    if (queryvalue == span[i].innerHTML.toLowerCase()) {
                        $(span[i]).click()
                    }
                }
            } catch (err) { }
        }
    } else {
        var queryvalue = paramValue.toLocaleLowerCase();
        var span = $('.ms-drop.bottom ul li')
        var spantag = [];
        var spanInnerData = [];
        if (paramValue.includes(",")) {
            queryvalue = queryvalue.split(",");
        } else {
            queryvalue = paramValue.toLocaleLowerCase();
        }
        for (var i = 0; i < span.length; i++) {
            try {
                if (span[i].childNodes[1].childNodes[1]) {
                    spantag.push(span[i].innerText.trim().toLowerCase())
                    spanInnerData.push(span[i].childNodes[1].childNodes[1])
                }
            } catch (err) { }
        }
        spantag.forEach(function(ele, index) {
            if (typeof (queryvalue) == "object") {
                    for (var j = 0; j < queryvalue.length; j++) {
                        if (queryvalue[j] == ele) {
                            $(spanInnerData[index]).trigger("click");
                        }
                    };
            } else if (typeof (queryvalue) == "string") {
                if (queryvalue == ele) {
                    $(spanInnerData[index]).trigger("click")
                }
            }
        })
    }
}

if (performance.navigation.type == 2) {
    location.reload(true);
 }

 
function bookConsultationBtn(){
    document.querySelectorAll("#gallerycards .gallery-filter__book-consultation").forEach(el => {
        el.addEventListener('click',function (e) {
            e.preventDefault();
            $("#dialog-personal-info").css({ "display": "block" });
            $("#field_email").removeAttr('disabled');
            if (document.querySelector("#dialog-personal-info").style.display == "block") {
            $('body').css("overflow","hidden")
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function(){
    bookConsultationBtn()
  });
$('.design-ideas-comp #gallerycards').slick({
    arrows: true,
    infinite: false,
    slidesToShow: 3.14,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1.03,
            }
        }
    ]
});
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
}
$("#field-search1").on("input", function() {
    searchTerm = ($("#field-search1").val(),
    $("#field-search1").val().trim());
    /^[A-Za-z0-9\s]+$/.test(searchTerm) || $(this).val("")
});
$("#field-search__m").on("input", function() {
    searchTerm = ($("#field-search__m").val(),
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
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
});
  }, 1000);

  
