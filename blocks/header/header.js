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
    });
    $(".bottom_nav__icon").on("click", function() {
        try {
            menuInteraction("", $(this).find(".menuInt-title--event").text().toLowerCase(), "header")
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
