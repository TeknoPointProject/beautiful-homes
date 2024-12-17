import { getMetadata as e } from "../../scripts/aem.js";
import { loadFragment as t } from "../fragment/fragment.js";
let isDesktop = window.matchMedia("(min-width: 900px)");
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function (ie, e) { "use strict"; var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function (e) { return oe.flat.call(e) } : function (e) { return oe.concat.apply([], e) }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object), le = {}, v = function (e) { return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item }, y = function (e) { return null != e && e === e.window }, C = ie.document, u = { type: !0, src: !0, nonce: !0, noModule: !0 }; function m(e, t, n) { var r, i, o = (n = n || C).createElement("script"); if (o.text = e, t) for (r in u) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i); n.head.appendChild(o).parentNode.removeChild(o) } function x(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e } var t = "3.7.1", l = /HTML$/i, ce = function (e, t) { return new ce.fn.init(e, t) }; function c(e) { var t = !!e && "length" in e && e.length, n = x(e); return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) } function fe(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } ce.fn = ce.prototype = { jquery: t, constructor: ce, length: 0, toArray: function () { return ae.call(this) }, get: function (e) { return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var t = ce.merge(this.constructor(), e); return t.prevObject = this, t }, each: function (e) { return ce.each(this, e) }, map: function (n) { return this.pushStack(ce.map(this, function (e, t) { return n.call(e, t, e) })) }, slice: function () { return this.pushStack(ae.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, even: function () { return this.pushStack(ce.grep(this, function (e, t) { return (t + 1) % 2 })) }, odd: function () { return this.pushStack(ce.grep(this, function (e, t) { return t % 2 })) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: s, sort: oe.sort, splice: oe.splice }, ce.extend = ce.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r)); return a }, ce.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, globalEval: function (e, t, n) { m(e, { nonce: t && t.nonce }, n) }, each: function (e, t) { var n, r = 0; if (c(e)) { for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, text: function (e) { var t, n = "", r = 0, i = e.nodeType; if (!i) while (t = e[r++]) n += ce.text(t); return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n }, makeArray: function (e, t) { var n = t || []; return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : se.call(t, e, n) }, isXMLDoc: function (e) { var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement; return !l.test(t || n && n.nodeName || "HTML") }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r]; return e.length = i, e }, grep: function (e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]); return r }, map: function (e, t, n) { var r, i, o = 0, a = []; if (c(e)) for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g(a) }, guid: 1, support: le }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var pe = oe.pop, de = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]", ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g"); ce.contains = function (e, t) { var n = t && t.parentNode; return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))) }; var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g; function p(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e } ce.escapeSelector = function (e) { return (e + "").replace(f, p) }; var ye = C, me = s; !function () { var e, b, w, o, a, T, r, C, d, i, k = me, S = ce.expando, E = 0, n = 0, s = W(), c = W(), u = W(), h = W(), l = function (e, t) { return e === t && (a = !0), 0 }, f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]", g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)", v = new RegExp(ge + "+", "g"), y = new RegExp("^" + ge + "*," + ge + "*"), m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x = new RegExp(ge + "|>"), j = new RegExp(g), A = new RegExp("^" + t + "$"), D = { ID: new RegExp("^#(" + t + ")"), CLASS: new RegExp("^\\.(" + t + ")"), TAG: new RegExp("^(" + t + "|[*])"), ATTR: new RegExp("^" + p), PSEUDO: new RegExp("^" + g), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"), bool: new RegExp("^(?:" + f + ")$", "i"), needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i") }, N = /^(?:input|select|textarea|button)$/i, q = /^h\d$/i, L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H = /[+~]/, O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), P = function (e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) }, M = function () { V() }, R = J(function (e) { return !0 === e.disabled && fe(e, "fieldset") }, { dir: "parentNode", next: "legend" }); try { k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType } catch (e) { k = { apply: function (e, t) { me.apply(e, ae.call(t)) }, call: function (e) { me.apply(e, ae.call(arguments, 1)) } } } function I(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && (V(e), e = e || T, C)) { if (11 !== p && (u = L.exec(t))) if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return k.call(n, a), n } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n } else { if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n } if (!(h[t + " "] || d && d.test(t))) { if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) { (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length; while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]); c = l.join(",") } try { return k.apply(n, f.querySelectorAll(c)), n } catch (e) { h(t, !0) } finally { s === S && e.removeAttribute("id") } } } return re(t.replace(ve, "$1"), e, n, r) } function W() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } } function F(e) { return e[S] = !0, e } function $(e) { var t = T.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function B(t) { return function (e) { return fe(e, "input") && e.type === t } } function _(t) { return function (e) { return (fe(e, "input") || fe(e, "button")) && e.type === t } } function z(t) { return function (e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t } } function X(a) { return F(function (o) { return o = +o, F(function (e, t) { var n, r = a([], e.length, o), i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) } function U(e) { return e && "undefined" != typeof e.getElementsByTagName && e } function V(e) { var t, n = e ? e.ownerDocument || e : ye; return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function (e) { return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length }), le.disconnectedMatch = $(function (e) { return i.call(e, "*") }), le.scope = $(function () { return T.querySelectorAll(":scope") }), le.cssHas = $(function () { try { return T.querySelector(":has(*,:jqfake)"), !1 } catch (e) { return !0 } }), le.getById ? (b.filter.ID = function (e) { var t = e.replace(O, P); return function (e) { return e.getAttribute("id") === t } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && C) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function (e) { var n = e.replace(O, P); return function (e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && C) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e) }, b.find.CLASS = function (e, t) { if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e) }, d = [], $(function (e) { var t; r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")") }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function (e, t) { if (e === t) return a = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1) }), T } for (e in I.matches = function (e, t) { return I(e, null, null, t) }, I.matchesSelector = function (e, t) { if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try { var n = i.call(e, t); if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { h(t, !0) } return 0 < I(t, T, null, [e]).length }, I.contains = function (e, t) { return (e.ownerDocument || e) != T && V(e), ce.contains(e, t) }, I.attr = function (e, t) { (e.ownerDocument || e) != T && V(e); var n = b.attrHandle[t.toLowerCase()], r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0; return void 0 !== r ? r : e.getAttribute(t) }, I.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, ce.uniqueSort = function (e) { var t, n = [], r = 0, i = 0; if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) he.call(e, n[r], 1) } return o = null, e }, ce.fn.uniqueSort = function () { return this.pushStack(ce.uniqueSort(ae.apply(this))) }, (b = ce.expr = { cacheLength: 50, createPseudo: F, match: D, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(O, P).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return fe(e, t) } }, CLASS: function (e) { var t = s[e + " "]; return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function (e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (n, r, i) { return function (e) { var t = I.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function (d, e, t, h, g) { var v = "nth" !== d.slice(0, 3), y = "last" !== d.slice(-4), m = "of-type" === e; return 1 === h && 0 === g ? function (e) { return !!e.parentNode } : function (e, t, n) { var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling", l = e.parentNode, c = m && e.nodeName.toLowerCase(), f = !n && !m, p = !1; if (l) { if (v) { while (u) { o = e; while (o = o[u]) if (m ? fe(o, c) : 1 === o.nodeType) return !1; s = u = "only" === d && !s && "nextSibling" } return !0 } if (s = [y ? l.firstChild : l.lastChild], y && f) { p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a]; while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if (1 === o.nodeType && ++p && o === e) { i[d] = [E, a, p]; break } } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p) while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break; return (p -= g) === h || p % h == 0 && 0 <= p / h } } }, PSEUDO: function (e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e); return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function (e, t) { var n, r = a(e, o), i = r.length; while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i]) }) : function (e) { return a(e, 0, t) }) : a } }, pseudos: { not: F(function (e) { var r = [], i = [], s = ne(e.replace(ve, "$1")); return s[S] ? F(function (e, t, n, r) { var i, o = s(e, null, r, []), a = e.length; while (a--) (i = o[a]) && (e[a] = !(t[a] = i)) }) : function (e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: F(function (t) { return function (e) { return 0 < I(t, e).length } }), contains: F(function (t) { return t = t.replace(O, P), function (e) { return -1 < (e.textContent || ce.text(e)).indexOf(t) } }), lang: F(function (n) { return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(), function (e) { var t; do { if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function (e) { var t = ie.location && ie.location.hash; return t && t.slice(1) === e.id }, root: function (e) { return e === r }, focus: function (e) { return e === function () { try { return T.activeElement } catch (e) { } }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex) }, enabled: z(!1), disabled: z(!0), checked: function (e) { return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !b.pseudos.empty(e) }, header: function (e) { return q.test(e.nodeName) }, input: function (e) { return N.test(e.nodeName) }, button: function (e) { return fe(e, "input") && "button" === e.type || fe(e, "button") }, text: function (e) { var t; return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: X(function () { return [0] }), last: X(function (e, t) { return [t - 1] }), eq: X(function (e, t, n) { return [n < 0 ? n + t : n] }), even: X(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: X(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: X(function (e, t, n) { var r; for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)e.push(r); return e }), gt: X(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = B(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = _(e); function G() { } function Y(e, t) { var n, r, i, o, a, s, u, l = c[e + " "]; if (l) return t ? 0 : l.slice(0); a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(ve, " ") }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? I.error(e) : c(e, s).slice(0) } function Q(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function J(a, e, t) { var s = e.dir, u = e.next, l = u || s, c = t && "parentNode" === l, f = n++; return e.first ? function (e, t, n) { while (e = e[s]) if (1 === e.nodeType || c) return a(e, t, n); return !1 } : function (e, t, n) { var r, i, o = [E, f]; if (n) { while (e = e[s]) if ((1 === e.nodeType || c) && a(e, t, n)) return !0 } else while (e = e[s]) if (1 === e.nodeType || c) if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e; else { if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2]; if ((i[l] = o)[2] = a(e, t, n)) return !0 } return !1 } } function K(i) { return 1 < i.length ? function (e, t, n) { var r = i.length; while (r--) if (!i[r](e, t, n)) return !1; return !0 } : i[0] } function Z(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function ee(d, h, g, v, y, e) { return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function (e, t, n, r) { var i, o, a, s, u = [], l = [], c = t.length, f = e || function (e, t, n) { for (var r = 0, i = t.length; r < i; r++)I(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []), p = !d || !e && h ? f : Z(f, u, d, n, r); if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) { i = Z(s, l), v(i, [], n, r), o = i.length; while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = s.length; while (o--) (a = s[o]) && i.push(p[o] = a); y(null, s = [], i, r) } o = s.length; while (o--) (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a)) } } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s) }) } function te(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function (e) { return e === i }, a, !0), l = J(function (e) { return -1 < se.call(i, e) }, a, !0), c = [function (e, t, n) { var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)if (t = b.relative[e[s].type]) c = [J(K(c), t)]; else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) { for (n = ++s; n < r; n++)if (b.relative[e[n].type]) break; return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e)) } c.push(t) } return K(c) } function ne(e, t) { var n, v, y, m, x, r, i = [], o = [], a = u[e + " "]; if (!a) { t || (t = Y(e)), n = t.length; while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a); (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) { var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = E += null == p ? 1 : Math.random() || .1, g = d.length; for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument == T || (V(o), n = !C); while (s = v[a++]) if (s(o, t || T, n)) { k.call(r, o); break } i && (E = h) } m && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r)); f = Z(f) } k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r) } return i && (E = h, w = p), c }, m ? F(r) : r))).selector = e } return a } function re(e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e, c = !r && Y(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n; l && (t = t.parentNode), e = e.slice(o.shift().value.length) } i = D.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n; break } } } return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n } G.prototype = b.filters = b.pseudos, b.setFilters = new G, le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function (e) { return 1 & e.compareDocumentPosition(T.createElement("fieldset")) }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort }(); var d = function (e, t, n) { var r = [], i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && ce(e).is(n)) break; r.push(e) } return r }, h = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, b = ce.expr.match.needsContext, w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function T(e, n, r) { return v(n) ? ce.grep(e, function (e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? ce.grep(e, function (e) { return e === n !== r }) : "string" != typeof n ? ce.grep(e, function (e) { return -1 < se.call(n, e) !== r }) : ce.filter(n, e, r) } ce.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function (e) { return 1 === e.nodeType })) }, ce.fn.extend({ find: function (e) { var t, n, r = this.length, i = this; if ("string" != typeof e) return this.pushStack(ce(e).filter(function () { for (t = 0; t < r; t++)if (ce.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++)ce.find(e, i[t], n); return 1 < r ? ce.uniqueSort(n) : n }, filter: function (e) { return this.pushStack(T(this, e || [], !1)) }, not: function (e) { return this.pushStack(T(this, e || [], !0)) }, is: function (e) { return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length } }); var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (ce.fn.init = function (e, t, n) { var r, i; if (!e) return this; if (n = n || k, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this) }).prototype = ce.fn, k = ce(C); var E = /^(?:parents|prev(?:Until|All))/, j = { children: !0, contents: !0, next: !0, prev: !0 }; function A(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } ce.fn.extend({ has: function (e) { var t = ce(e, this), n = t.length; return this.filter(function () { for (var e = 0; e < n; e++)if (ce.contains(this, t[e])) return !0 }) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = "string" != typeof e && ce(e); if (!b.test(e)) for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), ce.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return d(e, "parentNode") }, parentsUntil: function (e, t, n) { return d(e, "parentNode", n) }, next: function (e) { return A(e, "nextSibling") }, prev: function (e) { return A(e, "previousSibling") }, nextAll: function (e) { return d(e, "nextSibling") }, prevAll: function (e) { return d(e, "previousSibling") }, nextUntil: function (e, t, n) { return d(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return d(e, "previousSibling", n) }, siblings: function (e) { return h((e.parentNode || {}).firstChild, e) }, children: function (e) { return h(e.firstChild) }, contents: function (e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes)) } }, function (r, i) { ce.fn[r] = function (e, t) { var n = ce.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n) } }); var D = /[^\x20\t\r\n\f]+/g; function N(e) { return e } function q(e) { throw e } function L(e, t, n, r) { var i; try { e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } ce.Callbacks = function (r) { var e, n; r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function (e, t) { n[t] = !0 }), n) : ce.extend({}, r); var i, t, o, a, s = [], u = [], l = -1, c = function () { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) } r.memory || (t = !1), i = !1, a && (s = t ? [] : "") }, f = { add: function () { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { ce.each(e, function (e, t) { v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function () { return ce.each(arguments, function (e, t) { var n; while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function (e) { return e ? -1 < ce.inArray(e, s) : 0 < s.length }, empty: function () { return s && (s = []), this }, disable: function () { return a = u = [], s = t = "", this }, disabled: function () { return !s }, lock: function () { return a = u = [], t || i || (s = t = ""), this }, locked: function () { return !!a }, fireWith: function (e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function () { return f.fireWith(this, arguments), this }, fired: function () { return !!o } }; return f }, ce.extend({ Deferred: function (e) { var o = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]], i = "pending", a = { state: function () { return i }, always: function () { return s.done(arguments).fail(arguments), this }, "catch": function (e) { return a.then(null, e) }, pipe: function () { var i = arguments; return ce.Deferred(function (r) { ce.each(o, function (e, t) { var n = v(i[t[4]]) && i[t[4]]; s[t[1]](function () { var e = n && n.apply(this, arguments); e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function (t, n, r) { var u = 0; function l(i, o, a, s) { return function () { var n = this, r = arguments, e = function () { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution"); t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } }, t = s ? e : function () { try { e() } catch (e) { ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r)) } }; i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t)) } } return ce.Deferred(function (e) { o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q)) }).promise() }, promise: function (e) { return null != e ? ce.extend(e, a) : a } }, s = {}; return ce.each(o, function (e, t) { var n = t[2], r = t[5]; a[t[1]] = n.add, r && n.add(function () { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function (e) { var n = arguments.length, t = n, r = Array(t), i = ae.call(arguments), o = ce.Deferred(), a = function (t) { return function (e) { r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then(); while (t--) L(i[t], a(t), o.reject); return o.promise() } }); var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; ce.Deferred.exceptionHook = function (e, t) { ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, ce.readyException = function (e) { ie.setTimeout(function () { throw e }) }; var O = ce.Deferred(); function P() { C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready() } ce.fn.ready = function (e) { return O.then(e)["catch"](function (e) { ce.readyException(e) }), this }, ce.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce]) } }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P)); var M = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === x(n)) for (s in i = !0, n) M(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(ce(e), n) })), t)) for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, R = /^-ms-/, I = /-([a-z])/g; function W(e, t) { return t.toUpperCase() } function F(e) { return e.replace(R, "ms-").replace(I, W) } var $ = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }; function B() { this.expando = ce.expando + B.uid++ } B.uid = 1, B.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function (e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[F(t)] = n; else for (r in t) i[F(r)] = t[r]; return i }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)] }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function (e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length; while (n--) delete r[t[n]] } (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !ce.isEmptyObject(t) } }; var _ = new B, z = new B, X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /[A-Z]/g; function V(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i) } catch (e) { } z.set(e, t, n) } else n = void 0; return n } ce.extend({ hasData: function (e) { return z.hasData(e) || _.hasData(e) }, data: function (e, t, n) { return z.access(e, t, n) }, removeData: function (e, t) { z.remove(e, t) }, _data: function (e, t, n) { return _.access(e, t, n) }, _removeData: function (e, t) { _.remove(e, t) } }), ce.fn.extend({ data: function (n, e) { var t, r, i, o = this[0], a = o && o.attributes; if (void 0 === n) { if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r])); _.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function () { z.set(this, n) }) : M(this, function (e) { var t; if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0; this.each(function () { z.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function (e) { return this.each(function () { z.remove(this, e) }) } }), ce.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = ce.queue(e, t), r = n.length, i = n.shift(), o = ce._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () { ce.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return _.get(e, n) || _.access(e, n, { empty: ce.Callbacks("once memory").add(function () { _.remove(e, [t + "queue", n]) }) }) } }), ce.fn.extend({ queue: function (t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function () { var e = ce.queue(this, t, n); ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t) }) }, dequeue: function (e) { return this.each(function () { ce.dequeue(this, e) }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = ce.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--) (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"), Q = ["Top", "Right", "Bottom", "Left"], J = C.documentElement, K = function (e) { return ce.contains(e.ownerDocument, e) }, Z = { composed: !0 }; J.getRootNode && (K = function (e) { return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument }); var ee = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display") }; function te(e, t, n, r) { var i, o, a = 20, s = r ? function () { return r.cur() } : function () { return ce.css(e, t, "") }, u = s(), l = n && n[3] || (ce.cssNumber[t] ? "" : "px"), c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o; c *= 2, ce.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ne = {}; function re(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n))); for (c = 0; c < f; c++)null != l[c] && (e[c].style.display = l[c]); return e } ce.fn.extend({ show: function () { return re(this, !0) }, hide: function () { return re(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { ee(this) ? ce(this).show() : ce(this).hide() }) } }); var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i; xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild; var ke = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; function Se(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n } function Ee(e, t) { for (var n = 0, r = e.length; n < r; n++)_.set(e[n], "globalEval", !t || _.get(t[n], "globalEval")) } ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]); var je = /<|&#?\w+;/; function Ae(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o); else if (je.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild; ce.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o)); f.textContent = "", d = 0; while (o = p[d++]) if (r && -1 < ce.inArray(o, r)) i && i.push(o); else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) { c = 0; while (o = a[c++]) Ce.test(o.type || "") && n.push(o) } return f } var De = /^([^.]*)(?:\.(.+)|)/; function Ne() { return !0 } function qe() { return !1 } function Le(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe; else if (!i) return e; return 1 === o && (a = i, (i = function (e) { return ce().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = ce.guid++)), e.each(function () { ce.event.add(this, t, i, r, n) }) } function He(e, r, t) { t ? (_.set(e, r, !1), ce.event.add(e, r, { namespace: !1, handler: function (e) { var t, n = _.get(this, r); if (1 & e.isTrigger && this[r]) { if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation(); else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne) } })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne) } ce.event = { global: {}, add: function (t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = _.get(t); if ($(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) { return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(D) || [""]).length; while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ce.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0) } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = _.hasData(e) && _.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(D) || [""]).length; while (l--) if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c)); a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d]) } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0); ce.isEmptyObject(u) && _.remove(e, "handle events") } }, dispatch: function (e) { var t, n, r, i, o, a, s = new Array(arguments.length), u = ce.event.fix(e), l = (_.get(this, "events") || Object.create(null))[u.type] || [], c = ce.event.special[u.type] || {}; for (s[0] = u, t = 1; t < arguments.length; t++)s[t] = arguments[t]; if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = ce.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result } }, handlers: function (e, t) { var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r); o.length && s.push({ elem: l, handlers: o }) } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function (t, e) { Object.defineProperty(ce.Event.prototype, t, { enumerable: !0, configurable: !0, get: v(e) ? function () { if (this.originalEvent) return e(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[t] }, set: function (e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function (e) { return e[ce.expando] ? e : new ce.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function (e) { var t = this || e; return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1 }, trigger: function (e) { var t = this || e; return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0 }, _default: function (e) { var t = e.target; return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, ce.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, ce.Event = function (e, t) { if (!(this instanceof ce.Event)) return new ce.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0 }, ce.Event.prototype = { constructor: ce.Event, isDefaultPrevented: qe, isPropagationStopped: qe, isImmediatePropagationStopped: qe, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, ce.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, ce.event.addProp), ce.each({ focus: "focusin", blur: "focusout" }, function (r, i) { function o(e) { if (C.documentMode) { var t = _.get(this, "handle"), n = ce.event.fix(e); n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n) } else ce.event.simulate(i, e.target, ce.event.fix(e)) } ce.event.special[r] = { setup: function () { var e; if (He(this, r, !0), !C.documentMode) return !1; (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1) }, trigger: function () { return He(this, r), !0 }, teardown: function () { var e; if (!C.documentMode) return !1; (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o), _.remove(this, i)) }, _default: function (e) { return _.get(e.target, r) }, delegateType: i }, ce.event.special[i] = { setup: function () { var e = this.ownerDocument || this.document || this, t = C.documentMode ? this : e, n = _.get(t, i); n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1) }, teardown: function () { var e = this.ownerDocument || this.document || this, t = C.documentMode ? this : e, n = _.get(t, i) - 1; n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i)) } } }), ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) { ce.event.special[e] = { delegateType: i, bindType: i, handle: function (e) { var t, n = e.relatedTarget, r = e.handleObj; return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), ce.fn.extend({ on: function (e, t, n, r) { return Le(this, e, t, n, r) }, one: function (e, t, n, r) { return Le(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function () { ce.event.remove(this, e, n, t) }) } }); var Oe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g; function Re(e, t) { return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e } function Ie(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function We(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e } function Fe(e, t) { var n, r, i, o, a, s; if (1 === t.nodeType) { if (_.hasData(e) && (s = _.get(e).events)) for (i in _.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++)ce.event.add(t, i, s[i][n]); z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a)) } } function $e(n, r, i, o) { r = g(r); var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = v(d); if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function (e) { var t = n.eq(e); h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o) }); if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++)u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c); if (s) for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++)u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : m(u.textContent.replace(Me, ""), u, l)) } return n } function Be(e, t, n) { for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r)); return e } ce.extend({ htmlPrefilter: function (e) { return e }, clone: function (e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = K(e); if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++)s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t) if (n) for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++)Fe(o[r], a[r]); else Fe(e, c); return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c }, cleanData: function (e) { for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)if ($(n)) { if (t = n[_.expando]) { if (t.events) for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle); n[_.expando] = void 0 } n[z.expando] && (n[z.expando] = void 0) } } }), ce.fn.extend({ detach: function (e) { return Be(this, e, !0) }, remove: function (e) { return Be(this, e) }, text: function (e) { return M(this, function (e) { return void 0 === e ? ce.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function () { return $e(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e) }) }, prepend: function () { return $e(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Re(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return $e(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return $e(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return ce.clone(this, e, t) }) }, html: function (e) { return M(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) { e = ce.htmlPrefilter(e); try { for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var n = []; return $e(this, arguments, function (e) { var t = this.parentNode; ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this)) }, n) } }), ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) { ce.fn[e] = function (e) { for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++)t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get()); return this.pushStack(n) } }); var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"), ze = /^--/, Xe = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = ie), t.getComputedStyle(e) }, Ue = function (e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r }, Ve = new RegExp(Q.join("|"), "i"); function Ge(e, t, n) { var r, i, o, a, s = ze.test(t), u = e.style; return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a } function Ye(e, t) { return { get: function () { if (!e()) return (this.get = t).apply(this, arguments); delete this.get } } } !function () { function e() { if (l) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l); var e = ie.getComputedStyle(l); n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null } } function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s, u = C.createElement("div"), l = C.createElement("div"); l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, { boxSizingReliable: function () { return e(), r }, pixelBoxStyles: function () { return e(), o }, pixelPosition: function () { return e(), n }, reliableMarginLeft: function () { return e(), s }, scrollboxSize: function () { return e(), i }, reliableTrDimensions: function () { var e, t, n, r; return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a } })) }(); var Qe = ["Webkit", "Moz", "ms"], Je = C.createElement("div").style, Ke = {}; function Ze(e) { var t = ce.cssProps[e] || Ke[e]; return t || (e in Je ? e : Ke[e] = function (e) { var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; while (n--) if ((e = Qe[n] + t) in Je) return e }(e) || e) } var et = /^(none|table(?!-c[ea]).+)/, tt = { position: "absolute", visibility: "hidden", display: "block" }, nt = { letterSpacing: "0", fontWeight: "400" }; function rt(e, t, n) { var r = Y.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t } function it(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0, s = 0, u = 0, l = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2)"margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l } function ot(e, t, n) { var r = Xe(e), i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r), o = i, a = Ge(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1); if (_e.test(a)) { if (!n) return a; a = "auto" } return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px" } function at(e, t, n, r, i) { return new at.prototype.init(e, t, n, r, i) } ce.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Ge(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, aspectRatio: !0, borderImageSlice: !0, columnCount: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, scale: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeMiterlimit: !0, strokeOpacity: !0 }, cssProps: {}, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = F(t), u = ze.test(t), l = e.style; if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function (e, t, n, r) { var i, o, a, s = F(t); return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), ce.each(["height", "width"], function (e, u) { ce.cssHooks[u] = { get: function (e, t, n) { if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function () { return ot(e, u, n) }) }, set: function (e, t, n) { var r, i = Xe(e), o = !le.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i), s = n ? it(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s) } } }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) { if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left })) + "px" }), ce.each({ margin: "", padding: "", border: "Width" }, function (i, o) { ce.cssHooks[i + o] = { expand: function (e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)n[i + Q[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (ce.cssHooks[i + o].set = rt) }), ce.fn.extend({ css: function (e, t) { return M(this, function (e, t, n) { var r, i, o = {}, a = 0; if (Array.isArray(t)) { for (r = Xe(e), i = t.length; a < i; a++)o[t[a]] = ce.css(e, t[a], !1, r); return o } return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t) }, e, t, 1 < arguments.length) } }), ((ce.Tween = at).prototype = { constructor: at, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px") }, cur: function () { var e = at.propHooks[this.prop]; return e && e.get ? e.get(this) : at.propHooks._default.get(this) }, run: function (e) { var t, n = at.propHooks[this.prop]; return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this } }).init.prototype = at.prototype, (at.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = at.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, ce.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, ce.fx = at.prototype.init, ce.fx.step = {}; var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/; function dt() { ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick()) } function ht() { return ie.setTimeout(function () { st = void 0 }), st = Date.now() } function gt(e, t) { var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = Q[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i } function vt(e, t, n) { for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r } function yt(o, e, t) { var n, a, r = 0, i = yt.prefilters.length, s = ce.Deferred().always(function () { delete u.elem }), u = function () { if (a) return !1; for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) }, l = s.promise({ elem: o, props: ce.extend({}, e), opts: ce.extend(!0, { specialEasing: {}, easing: ce.easing._default }, t), originalProperties: e, originalOptions: t, startTime: st || ht(), duration: t.duration, tweens: [], createTween: function (e, t) { var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function (e) { var t = 0, n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++)l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }), c = l.props; for (!function (e, t) { var n, r, i, o, a; for (n in e) if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i }(c, l.opts.specialEasing); r < i; r++)if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n; return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l } ce.Animation = ce.extend(yt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return te(n.elem, e, Y.exec(t), n), n }] }, tweener: function (e, t) { v(e) ? (t = e, e = ["*"]) : e = e.match(D); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t) }, prefilters: [function (e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ee(e), v = _.get(e, "fxshow"); for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () { a.unqueued || s() }), a.unqueued++, p.always(function () { p.always(function () { a.unqueued--, ce.queue(e, "fx").length || a.empty.fire() }) })), t) if (i = t[r], ft.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue; g = !0 } d[r] = v && v[r] || ce.style(e, r) } if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function () { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && re([e], !0), p.done(function () { for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r]) })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function (e, t) { t ? yt.prefilters.unshift(e) : yt.prefilters.push(e) } }), ce.speed = function (e, t, n) { var r = e && "object" == typeof e ? ce.extend({}, e) : { complete: n || !n && t || v(e) && e, duration: e, easing: n && t || t && !v(t) && t }; return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue) }, r }, ce.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (t, e, n, r) { var i = ce.isEmptyObject(t), o = ce.speed(e, n, r), a = function () { var e = yt(this, ce.extend({}, t), o); (i || _.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (i, e, o) { var a = function (e) { var t = e.stop; delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () { var e = !0, t = null != i && i + "queueHooks", n = ce.timers, r = _.get(this); if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]); for (t = n.length; t--;)n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1)); !e && o || ce.dequeue(this, i) }) }, finish: function (a) { return !1 !== a && (a = a || "fx"), this.each(function () { var e, t = _.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = ce.timers, o = n ? n.length : 0; for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;)i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++)n[e] && n[e].finish && n[e].finish.call(this); delete t.finish }) } }), ce.each(["toggle", "show", "hide"], function (e, r) { var i = ce.fn[r]; ce.fn[r] = function (e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n) } }), ce.each({ slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) { ce.fn[e] = function (e, t, n) { return this.animate(r, e, t, n) } }), ce.timers = [], ce.fx.tick = function () { var e, t = 0, n = ce.timers; for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || ce.fx.stop(), st = void 0 }, ce.fx.timer = function (e) { ce.timers.push(e), ce.fx.start() }, ce.fx.interval = 13, ce.fx.start = function () { ut || (ut = !0, dt()) }, ce.fx.stop = function () { ut = null }, ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ce.fn.delay = function (r, e) { return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) { var n = ie.setTimeout(e, r); t.stop = function () { ie.clearTimeout(n) } }) }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value; var mt, xt = ce.expr.attrHandle; ce.fn.extend({ attr: function (e, t) { return M(this, ce.attr, e, t, 1 < arguments.length) }, removeAttr: function (e) { return this.each(function () { ce.removeAttr(this, e) }) } }), ce.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!le.radioValue && "radio" === t && fe(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r = 0, i = t && t.match(D); if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n) } }), mt = { set: function (e, t, n) { return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n } }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) { var a = xt[t] || ce.find.attr; xt[t] = function (e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r } }); var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i; function Tt(e) { return (e.match(D) || []).join(" ") } function Ct(e) { return e.getAttribute && e.getAttribute("class") || "" } function kt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || [] } ce.fn.extend({ prop: function (e, t) { return M(this, ce.prop, e, t, 1 < arguments.length) }, removeProp: function (e) { return this.each(function () { delete this[ce.propFix[e] || e] }) } }), ce.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = ce.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), le.optSelected || (ce.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { ce.propFix[this.toLowerCase()] = this }), ce.fn.extend({ addClass: function (t) { var e, n, r, i, o, a; return v(t) ? this.each(function (e) { ce(this).addClass(t.call(this, e, Ct(this))) }) : (e = kt(t)).length ? this.each(function () { if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") { for (o = 0; o < e.length; o++)i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " "); a = Tt(n), r !== a && this.setAttribute("class", a) } }) : this }, removeClass: function (t) { var e, n, r, i, o, a; return v(t) ? this.each(function (e) { ce(this).removeClass(t.call(this, e, Ct(this))) }) : arguments.length ? (e = kt(t)).length ? this.each(function () { if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") { for (o = 0; o < e.length; o++) { i = e[o]; while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ") } a = Tt(n), r !== a && this.setAttribute("class", a) } }) : this : this.attr("class", "") }, toggleClass: function (t, n) { var e, r, i, o, a = typeof t, s = "string" === a || Array.isArray(t); return v(t) ? this.each(function (e) { ce(this).toggleClass(t.call(this, e, Ct(this), n), n) }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function () { if (s) for (o = ce(this), i = 0; i < e.length; i++)r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r); else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || "")) })) }, hasClass: function (e) { var t, n, r = 0; t = " " + e + " "; while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0; return !1 } }); var St = /\r/g; ce.fn.extend({ val: function (n) { var r, e, i, t = this[0]; return arguments.length ? (i = v(n), this.each(function (e) { var t; 1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function (e) { return null == e ? "" : e + "" })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0 } }), ce.extend({ valHooks: { option: { get: function (e) { var t = ce.find.attr(e, "value"); return null != t ? t : Tt(ce.text(e)) } }, select: { get: function (e) { var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) { if (t = ce(n).val(), a) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = ce.makeArray(t), a = i.length; while (a--) ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), ce.each(["radio", "checkbox"], function () { ce.valHooks[this] = { set: function (e, t) { if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t) } }, le.checkOn || (ce.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }); var Et = ie.location, jt = { guid: Date.now() }, At = /\?/; ce.parseXML = function (e) { var t, n; if (!e || "string" != typeof e) return null; try { t = (new ie.DOMParser).parseFromString(e, "text/xml") } catch (e) { } return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function (e) { return e.textContent }).join("\n") : e)), t }; var Dt = /^(?:focusinfocus|focusoutblur)$/, Nt = function (e) { e.stopPropagation() }; ce.extend(ce.event, { trigger: function (e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || C], d = ue.call(e, "type") ? e.type : e, h = ue.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !y(n)) { for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)p.push(o), a = o; a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie) } i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function (e, t, n) { var r = ce.extend(new ce.Event, n, { type: e, isSimulated: !0 }); ce.event.trigger(r, null, t) } }), ce.fn.extend({ trigger: function (e, t) { return this.each(function () { ce.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return ce.event.trigger(e, t, n, !0) } }); var qt = /\[\]$/, Lt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, Ot = /^(?:input|select|textarea|keygen)/i; function Pt(n, e, r, i) { var t; if (Array.isArray(e)) ce.each(e, function (e, t) { r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) }); else if (r || "object" !== x(e)) i(n, e); else for (t in e) Pt(n + "[" + t + "]", e[t], r, i) } ce.param = function (e, t) { var n, r = [], i = function (e, t) { var n = v(t) ? t() : t; r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function () { i(this.name, this.value) }); else for (n in e) Pt(n, e[n], t, i); return r.join("&") }, ce.fn.extend({ serialize: function () { return ce.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = ce.prop(this, "elements"); return e ? ce.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e)) }).map(function (e, t) { var n = ce(this).val(); return null == n ? null : Array.isArray(n) ? ce.map(n, function (e) { return { name: t.name, value: e.replace(Lt, "\r\n") } }) : { name: t.name, value: n.replace(Lt, "\r\n") } }).get() } }); var Mt = /%20/g, Rt = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/, $t = /^\/\//, Bt = {}, _t = {}, zt = "*/".concat("*"), Xt = C.createElement("a"); function Ut(o) { return function (e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0, i = e.toLowerCase().match(D) || []; if (v(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } } function Vt(t, i, o, a) { var s = {}, u = t === _t; function l(e) { var r; return s[e] = !0, ce.each(t[e] || [], function (e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") } function Gt(e, t) { var n, r, i = ce.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && ce.extend(!0, e, r), e } Xt.href = Et.href, ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": ce.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e) }, ajaxPrefilter: Ut(Bt), ajaxTransport: Ut(_t), ajax: function (e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = ce.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event, x = ce.Deferred(), b = ce.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (h) { if (!n) { n = {}; while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) } t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function () { return h ? p : null }, setRequestHeader: function (e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function (e) { return null == h && (v.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]]; return this }, abort: function (e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) { r = C.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T; for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T; v.async && 0 < v.timeout && (d = ie.setTimeout(function () { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e; l(-1, e) } } else l(-1, "No Transport"); function l(e, t, n, r) { var i, o, a, s, u, l = t; h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) { var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in s) if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () { }), s = function (e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop"))) } return T }, getJSON: function (e, t, n) { return ce.get(e, t, n, "json") }, getScript: function (e, t) { return ce.get(e, void 0, t, "script") } }), ce.each(["get", "post"], function (e, i) { ce[i] = function (e, t, n, r) { return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({ url: e, type: i, dataType: r, data: t, success: n }, ce.isPlainObject(e) && e)) } }), ce.ajaxPrefilter(function (e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), ce._evalUrl = function (e, t, n) { return ce.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () { } }, dataFilter: function (e) { ce.globalEval(e, t, n) } }) }, ce.fn.extend({ wrapAll: function (e) { var t; return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function (n) { return v(n) ? this.each(function (e) { ce(this).wrapInner(n.call(this, e)) }) : this.each(function () { var e = ce(this), t = e.contents(); t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function (t) { var n = v(t); return this.each(function (e) { ce(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function (e) { return this.parent(e).not("body").each(function () { ce(this).replaceWith(this.childNodes) }), this } }), ce.expr.pseudos.hidden = function (e) { return !ce.expr.pseudos.visible(e) }, ce.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, ce.ajaxSettings.xhr = function () { try { return new ie.XMLHttpRequest } catch (e) { } }; var Yt = { 0: 200, 1223: 204 }, Qt = ce.ajaxSettings.xhr(); le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function (i) { var o, a; if (le.cors || Qt && !i.crossDomain) return { send: function (e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]); o = function (e) { return function () { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () { 4 === r.readyState && ie.setTimeout(function () { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function () { o && o() } } }), ce.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) }), ce.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return ce.globalEval(e), e } } }), ce.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), ce.ajaxTransport("script", function (n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function (e, t) { r = ce("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function (e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), C.head.appendChild(r[0]) }, abort: function () { i && i() } } }); var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/; ce.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Kt.pop() || ce.expando + "_" + jt.guid++; return this[e] = !0, e } }), ce.ajaxPrefilter("json jsonp", function (e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () { return o || ce.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function () { o = arguments }, n.always(function () { void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0 }), "script" }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function (e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes))); var r, i, o }, ce.fn.load = function (e, t, n) { var r, i, o, a = this, s = e.indexOf(" "); return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) { o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e) }).always(n && function (e, t) { a.each(function () { n.apply(this, o || [e.responseText, t, e]) }) }), this }, ce.expr.pseudos.animated = function (t) { return ce.grep(ce.timers, function (e) { return t === e.elem }).length }, ce.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l = ce.css(e, "position"), c = ce(e), f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, ce.fn.extend({ offset: function (t) { if (arguments.length) return void 0 === t ? this : this.each(function (e) { ce.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function () { if (this[0]) { var e, t, n, r = this[0], i = { top: 0, left: 0 }; if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect(); else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode; e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - ce.css(r, "marginTop", !0), left: t.left - i.left - ce.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent; while (e && "static" === ce.css(e, "position")) e = e.offsetParent; return e || J }) } }), ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) { var o = "pageYOffset" === i; ce.fn[t] = function (e) { return M(this, function (e, t, n) { var r; if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t]; r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), ce.each(["top", "left"], function (e, n) { ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) { if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t }) }), ce.each({ Height: "height", Width: "width" }, function (a, s) { ce.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) { ce.fn[o] = function (e, t) { var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border"); return M(this, function (e, t, n) { var r; return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { ce.fn[t] = function (e) { return this.on(t, e) } }), ce.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function (e, t) { return this.on("mouseenter", e).on("mouseleave", t || e) } }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) { ce.fn[n] = function (e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }); var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g; ce.proxy = function (e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function () { return e.apply(t || this, r.concat(ae.call(arguments))) }).guid = e.guid = e.guid || ce.guid++, i }, ce.holdReady = function (e) { e ? ce.readyWait++ : ce.ready(!0) }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) { var t = ce.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, ce.trim = function (e) { return null == e ? "" : (e + "").replace(en, "$1") }, "function" == typeof define && define.amd && define("jquery", [], function () { return ce }); var tn = ie.jQuery, nn = ie.$; return ce.noConflict = function (e) { return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce }); /*slick.js-1.9.0*/
(function (i) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery) })(function (i) { "use strict"; var e = window.Slick || {}; e = function () { function e(e, o) { var s, n = this; n.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: i(e), appendDots: i(e), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function (e, t) { return i('<button type="button" />').text(t + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, n.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(e).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0) } var t = 0; return e }(), e.prototype.activateADA = function () { var i = this; i.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) { var s = this; if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1; s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : o === !0 ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) { i(t).attr("data-slick-index", e) }), s.$slidesCache = s.$slides, s.reinit() }, e.prototype.animateHeight = function () { var i = this; if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) { var e = i.$slides.eq(i.currentSlide).outerHeight(!0); i.$list.animate({ height: e }, i.options.speed) } }, e.prototype.animateSlide = function (e, t) { var o = {}, s = this; s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function (i) { i = Math.ceil(i), s.options.vertical === !1 ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o)) }, complete: function () { t && t.call() } })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () { s.disableTransition(), t.call() }, s.options.speed)) }, e.prototype.getNavTarget = function () { var e = this, t = e.options.asNavFor; return t && null !== t && (t = i(t).not(e.$slider)), t }, e.prototype.asNavFor = function (e) { var t = this, o = t.getNavTarget(); null !== o && "object" == typeof o && o.each(function () { var t = i(this).slick("getSlick"); t.unslicked || t.slideHandler(e, !0) }) }, e.prototype.applyTransition = function (i) { var e = this, t = {}; e.options.fade === !1 ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t) }, e.prototype.autoPlay = function () { var i = this; i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed)) }, e.prototype.autoPlayClear = function () { var i = this; i.autoPlayTimer && clearInterval(i.autoPlayTimer) }, e.prototype.autoPlayIterator = function () { var i = this, e = i.currentSlide + i.options.slidesToScroll; i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(e)) }, e.prototype.buildArrows = function () { var e = this; e.options.arrows === !0 && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, e.prototype.buildDots = function () { var e, t, o = this; if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) { for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1)t.append(i("<li />").append(o.options.customPaging.call(this, o, e))); o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active") } }, e.prototype.buildOut = function () { var e = this; e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) { i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "") }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable") }, e.prototype.buildRows = function () { var i, e, t, o, s, n, r, l = this; if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 0) { for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) { var d = document.createElement("div"); for (e = 0; e < l.options.rows; e++) { var a = document.createElement("div"); for (t = 0; t < l.options.slidesPerRow; t++) { var c = i * r + (e * l.options.slidesPerRow + t); n.get(c) && a.appendChild(n.get(c)) } d.appendChild(a) } o.appendChild(d) } l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" }) } }, e.prototype.checkResponsive = function (e, t) { var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width(); if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) { s = null; for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o])); null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || l === !1 || r.$slider.trigger("breakpoint", [r, l]) } }, e.prototype.changeSlide = function (e, t) { var o, s, n, r = this, l = i(e.currentTarget); switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) { case "previous": s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t); break; case "next": s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t); break; case "index": var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll; r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus"); break; default: return } }, e.prototype.checkNavigable = function (i) { var e, t, o = this; if (e = o.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var s in e) { if (i < e[s]) { i = t; break } t = e[s] } return i }, e.prototype.cleanUpEvents = function () { var e = this; e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition) }, e.prototype.cleanUpSlideEvents = function () { var e = this; e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1)) }, e.prototype.cleanUpRows = function () { var i, e = this; e.options.rows > 0 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.empty().append(i)) }, e.prototype.clickHandler = function (i) { var e = this; e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault()) }, e.prototype.destroy = function (e) { var t = this; t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () { i(this).attr("style", i(this).data("originalStyling")) }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]) }, e.prototype.disableTransition = function (i) { var e = this, t = {}; t[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t) }, e.prototype.fadeSlide = function (i, e) { var t = this; t.cssTransitions === !1 ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function () { t.disableTransition(i), e.call() }, t.options.speed)) }, e.prototype.fadeSlideOut = function (i) { var e = this; e.cssTransitions === !1 ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 })) }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) { var e = this; null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit()) }, e.prototype.focusHandler = function () { var e = this; e.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (t) { var o = i(this); setTimeout(function () { e.options.pauseOnFocus && o.is(":focus") && (e.focussed = !0, e.autoPlay()) }, 0) }).on("blur.slick", "*", function (t) { i(this); e.options.pauseOnFocus && (e.focussed = !1, e.autoPlay()) }) }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () { var i = this; return i.currentSlide }, e.prototype.getDotCount = function () { var i = this, e = 0, t = 0, o = 0; if (i.options.infinite === !0) if (i.slideCount <= i.options.slidesToShow) ++o; else for (; e < i.slideCount;)++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (i.options.centerMode === !0) o = i.slideCount; else if (i.options.asNavFor) for (; e < i.slideCount;)++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll); return o - 1 }, e.prototype.getLeft = function (i) { var e, t, o, s, n = this, r = 0; return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, n.options.vertical === !0 && n.options.centerMode === !0 && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll !== 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = n.options.vertical === !1 ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, n.options.variableWidth === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, n.options.centerMode === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e }, e.prototype.getOption = e.prototype.slickGetOption = function (i) { var e = this; return e.options[i] }, e.prototype.getNavigableIndexes = function () { var i, e = this, t = 0, o = 0, s = []; for (e.options.infinite === !1 ? i = e.slideCount : (t = e.options.slidesToScroll * -1, o = e.options.slidesToScroll * -1, i = 2 * e.slideCount); t < i;)s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; return s }, e.prototype.getSlick = function () { return this }, e.prototype.getSlideCount = function () { var e, t, o, s, n = this; return s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0, o = n.swipeLeft * -1 + s, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function (e, s) { var r, l, d; if (r = i(s).outerWidth(), l = s.offsetLeft, n.options.centerMode !== !0 && (l += r / 2), d = l + r, o < d) return t = s, !1 }), e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) { var t = this; t.changeSlide({ data: { message: "index", index: parseInt(i) } }, e) }, e.prototype.init = function (e) { var t = this; i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay()) }, e.prototype.initADA = function () { var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow), o = e.getNavigableIndexes().filter(function (i) { return i >= 0 && i < e.slideCount }); e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) { var s = o.indexOf(t); if (i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), s !== -1) { var n = "slick-slide-control" + e.instanceUid + s; i("#" + n).length && i(this).attr({ "aria-describedby": n }) } }), e.$dots.attr("role", "tablist").find("li").each(function (s) { var n = o[s]; i(this).attr({ role: "presentation" }), i(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" }) }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end()); for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)e.options.focusOnChange ? e.$slides.eq(s).attr({ tabindex: "0" }) : e.$slides.eq(s).removeAttr("tabindex"); e.activateADA() }, e.prototype.initArrowEvents = function () { var i = this; i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler))) }, e.prototype.initDotEvents = function () { var e = this; e.options.dots === !0 && e.slideCount > e.options.slidesToShow && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1)) }, e.prototype.initSlideEvents = function () { var e = this; e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1))) }, e.prototype.initializeEvents = function () { var e = this; e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition) }, e.prototype.initUI = function () { var i = this; i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show() }, e.prototype.keyHandler = function (i) { var e = this; i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({ data: { message: e.options.rtl === !0 ? "next" : "previous" } }) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({ data: { message: e.options.rtl === !0 ? "previous" : "next" } })) }, e.prototype.lazyLoad = function () { function e(e) { i("img[data-lazy]", e).each(function () { var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"), s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"), n = document.createElement("img"); n.onload = function () { e.animate({ opacity: 0 }, 100, function () { o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({ opacity: 1 }, 200, function () { e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }), r.$slider.trigger("lazyLoaded", [r, e, t]) }) }, n.onerror = function () { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t]) }, n.src = t }) } var t, o, s, n, r = this; if (r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), "anticipated" === r.options.lazyLoad) for (var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++)l < 0 && (l = r.slideCount - 1), t = t.add(a.eq(l)), t = t.add(a.eq(d)), l--, d++; e(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), e(o)) }, e.prototype.loadSlider = function () { var i = this; i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad() }, e.prototype.next = e.prototype.slickNext = function () { var i = this; i.changeSlide({ data: { message: "next" } }) }, e.prototype.orientationChange = function () { var i = this; i.checkResponsive(), i.setPosition() }, e.prototype.pause = e.prototype.slickPause = function () { var i = this; i.autoPlayClear(), i.paused = !0 }, e.prototype.play = e.prototype.slickPlay = function () { var i = this; i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1 }, e.prototype.postSlide = function (e) { var t = this; if (!t.unslicked && (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && (t.initADA(), t.options.focusOnChange))) { var o = i(t.$slides.get(t.currentSlide)); o.attr("tabindex", 0).focus() } }, e.prototype.prev = e.prototype.slickPrev = function () { var i = this; i.changeSlide({ data: { message: "previous" } }) }, e.prototype.preventDefault = function (i) { i.preventDefault() }, e.prototype.progressiveLazyLoad = function (e) { e = e || 1; var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider); d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), r = document.createElement("img"), r.onload = function () { s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), l.options.adaptiveHeight === !0 && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad() }, r.onerror = function () { e < 3 ? setTimeout(function () { l.progressiveLazyLoad(e + 1) }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad()) }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]) }, e.prototype.refresh = function (e) { var t, o, s = this; o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, { currentSlide: t }), s.init(), e || s.changeSlide({ data: { message: "index", index: t } }, !1) }, e.prototype.registerBreakpoints = function () { var e, t, o, s = this, n = s.options.responsive || null; if ("array" === i.type(n) && n.length) { s.respondTo = s.options.respondTo || "window"; for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) { for (t = n[e].breakpoint; o >= 0;)s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--; s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings } s.breakpoints.sort(function (i, e) { return s.options.mobileFirst ? i - e : e - i }) } }, e.prototype.reinit = function () { var e = this; e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]) }, e.prototype.resize = function () { var e = this; i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () { e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50)) }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) { var o = this; return "boolean" == typeof i ? (e = i, i = e === !0 ? 0 : o.slideCount - 1) : i = e === !0 ? --i : i, !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) && (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit()) }, e.prototype.setCSS = function (i) { var e, t, o = this, s = {}; o.options.rtl === !0 && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s))) }, e.prototype.setDimensions = function () { var i = this; i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length))); var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width(); i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e) }, e.prototype.setFade = function () { var e, t = this; t.$slides.each(function (o, s) { e = t.slideWidth * o * -1, t.options.rtl === !0 ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 }) }, e.prototype.setHeight = function () { var i = this; if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) { var e = i.$slides.eq(i.currentSlide).outerHeight(!0); i.$list.css("height", e) } }, e.prototype.setOption = e.prototype.slickSetOption = function () { var e, t, o, s, n, r = this, l = !1; if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, function (i, e) { r.options[i] = e }); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]]; else { for (e = r.options.responsive.length - 1; e >= 0;)r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--; r.options.responsive.push(s[t]) } l && (r.unload(), r.reinit()) }, e.prototype.setPosition = function () { var i = this; i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]) }, e.prototype.setProps = function () { var i = this, e = document.body.style; i.positionProp = i.options.vertical === !0 ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1 }, e.prototype.setSlideClasses = function (i) { var e, t, o, s, n = this; if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0) { var r = n.options.slidesToShow % 2 === 0 ? 1 : 0; e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center") } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")); "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad() }, e.prototype.setupInfinite = function () { var e, t, o, s = this; if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) { for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1)t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned"); for (e = 0; e < o + s.slideCount; e += 1)t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned"); s.$slideTrack.find(".slick-cloned").find("[id]").each(function () { i(this).attr("id", "") }) } }, e.prototype.interrupt = function (i) { var e = this; i || e.autoPlay(), e.interrupted = i }, e.prototype.selectHandler = function (e) { var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"), s = parseInt(o.attr("data-slick-index")); return s || (s = 0), t.slideCount <= t.options.slidesToShow ? void t.slideHandler(s, !1, !0) : void t.slideHandler(s) }, e.prototype.slideHandler = function (i, e, t) { var o, s, n, r, l, d = null, a = this; if (e = e || !1, !(a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === i)) return e === !1 && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll) ? void (a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () { a.postSlide(o) }) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (i < 0 || i > a.slideCount - a.options.slidesToScroll) ? void (a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function () { a.postSlide(o) }) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = a.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n), a.fadeSlide(s, function () { a.postSlide(s) })) : a.postSlide(s), void a.animateHeight()) : void (t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(d, function () { a.postSlide(s) }) : a.postSlide(s))) }, e.prototype.startLoad = function () { var i = this; i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading") }, e.prototype.swipeDirection = function () { var i, e, t, o, s = this; return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), o = Math.round(180 * t / Math.PI), o < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : o <= 360 && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && o <= 225 ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && o <= 135 ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function (i) { var e, t, o = this; if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1; if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1; if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) { switch (t = o.swipeDirection()) { case "left": case "down": e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0; break; case "right": case "up": e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1 }"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t])) } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {}) }, e.prototype.swipeHandler = function (i) { var e = this; if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) { case "start": e.swipeStart(i); break; case "move": e.swipeMove(i); break; case "end": e.swipeEnd(i) } }, e.prototype.swipeMove = function (i) { var e, t, o, s, n, r, l = this; return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (l.options.verticalSwiping === !0 && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (l.options.rtl === !1 ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), l.options.verticalSwiping === !0 && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, l.options.infinite === !1 && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), l.options.vertical === !1 ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s), l.options.fade !== !0 && l.options.touchMove !== !1 && (l.animating === !0 ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft)))) }, e.prototype.swipeStart = function (i) { var e, t = this; return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void (t.dragging = !0)) }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () { var i = this; null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit()) }, e.prototype.unload = function () { var e = this; i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }, e.prototype.unslick = function (i) { var e = this; e.$slider.trigger("unslick", [e, i]), e.destroy() }, e.prototype.updateArrows = function () { var i, e = this; i = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))) }, e.prototype.updateDots = function () { var i = this; null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active")) }, e.prototype.visibility = function () { var i = this; i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1) }, i.fn.slick = function () { var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length; for (i = 0; i < r; i++)if ("object" == typeof s || "undefined" == typeof s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), "undefined" != typeof t) return t; return o } });
function closeOnEscape(e) {
    if ("Escape" === e.code) {
        let t = document.getElementById("nav"),
            a = t.querySelector(".nav-sections"),
            r = a.querySelector('[aria-expanded="true"]');
        r && isDesktop.matches ? (toggleAllNavSections(a), r.focus()) : isDesktop.matches || (toggleMenu(t, a), t.querySelector("button").focus());
    }
}
function openOnKeydown(e) {
    let t = document.activeElement,
        a = "nav-drop" === t.className;
    if (a && ("Enter" === e.code || "Space" === e.code)) {
        let r = "true" === t.getAttribute("aria-expanded");
        toggleAllNavSections(t.closest(".nav-sections")), t.setAttribute("aria-expanded", r ? "false" : "true");
    }
}
function focusNavSection() {
    document.activeElement.addEventListener("keydown", openOnKeydown);
}
function toggleAllNavSections(e, t = !1) {
    e.querySelectorAll(".nav-sections .default-content-wrapper > ul > li").forEach((e) => {
        e.setAttribute("aria-expanded", t);
    });
}
function toggleMenu(e, t, a = null) {
    let r = null !== a ? !a : "true" === e.getAttribute("aria-expanded"),
        l = e.querySelector(".nav-hamburger button");
    (document.body.style.overflowY = r || isDesktop.matches ? "" : "hidden"),
        e.setAttribute("aria-expanded", r ? "false" : "true"),
        toggleAllNavSections(t, r || isDesktop.matches ? "false" : "true"),
        l.setAttribute("aria-label", r ? "Open navigation" : "Close navigation");
    let n = t.querySelectorAll(".nav-drop");
    isDesktop.matches
        ? n.forEach((e) => {
              e.hasAttribute("tabindex") || (e.setAttribute("role", "button"), e.setAttribute("tabindex", 0), e.addEventListener("focus", focusNavSection));
          })
        : n.forEach((e) => {
              e.removeAttribute("role"), e.removeAttribute("tabindex"), e.removeEventListener("focus", focusNavSection);
          }),
        !r || isDesktop.matches ? window.addEventListener("keydown", closeOnEscape) : window.removeEventListener("keydown", closeOnEscape);
}
export default async function a(a) {
    let r = e("nav"),
        l = r ? new URL(r, window.location).pathname : "/nav",
        n = await t(l);
    a.textContent = "";
    let s = document.createElement("nav");
    for (s.id = "nav"; n.firstElementChild; ) s.append(n.firstElementChild);
    ["brand", "sections", "tools"].forEach((e, t) => {
        let a = s.children[t];
        a && a.classList.add(`nav-${e}`);
    });
    let o = s.querySelector(".nav-brand"),
        c = o.querySelector(".button");
    c && ((c.className = ""), (c.closest(".button-container").className = ""));
    let d = s.querySelector(".nav-sections");
    d &&
        d.querySelectorAll(":scope .default-content-wrapper > ul > li").forEach((e) => {
            e.querySelector("ul") && e.classList.add("nav-drop"),
                e.addEventListener("click", () => {
                    if (isDesktop.matches) {
                        let t = "true" === e.getAttribute("aria-expanded");
                        toggleAllNavSections(d), e.setAttribute("aria-expanded", t ? "false" : "true");
                    }
                });
        });
    let u = document.createElement("div");
    u.classList.add("nav-hamburger"),
        (u.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`),
        u.addEventListener("click", () => toggleMenu(s, d)),
        s.prepend(u),
        s.setAttribute("aria-expanded", "false"),
        toggleMenu(s, d, isDesktop.matches),
        isDesktop.addEventListener("change", () => toggleMenu(s, d, isDesktop.matches));
    let h = document.createElement("div");
    async function f(e) {
        try {
            let t = await fetch(e);
            if (!t.ok) throw Error(`Network response was not ok: ${t.statusText}`);
            let a = await t.text(),
                r = new DOMParser(),
                l = r.parseFromString(a, "text/html"),
                n = l.querySelector(".cmp-container");
            if (!n) return console.log("Element with class 'cmp-container' not found."), null;
            {
                let s = n.querySelectorAll("img");
                return (
                    s.forEach((e) => {
                        let t = e.getAttribute("src");
                        "//static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/bh-new-header/bh-logo-main.png" !== t && e.setAttribute("loading", "lazy");
                    }),
                    (h.innerHTML = n.outerHTML),
                    n.outerHTML
                );
            }
        } catch (o) {
            console.error("Fetch error: ", o);
        }
    }
    (h.className = "nav-wrapper"), a.append(h), f("https://www.beautifulhomes.asianpaints.com/content/experience-fragments/asianpaintsbeautifulhomes/us/en/experience-fragment/master.html");
}

function clicklogin(e) {
    gigya.accounts.session.verify(
        { context: "some content to send through the method" },
        {
            callback: function (t) {
                if (0 == t.errorCode) {
                    if ((console.log(t), void 0 != e)) {
                        if (e.target.parentElement.getAttribute("data-login-redirection")) {
                            gigyagetuuid();
                            var a = document.querySelectorAll("[data-login-redirection]")[0].getAttribute("data-login-redirection");
                            window.location.href = replacepagedomain(a);
                        }
                    } else gigyagetuuid();
                } else gigya.sso.login({ authFlow: "redirect", redirectURL: window.location.href, context: { brand: document.getElementById("brand").value } });
            },
        }
    );
}
function getuserInfo() {
    gigya.accounts.session.verify(
        { context: "some content to send through the method" },
        {
            callback: function (e) {
                if (0 == e.errorCode) {
                    var t = localStorage.getItem("login"),
                        a = { UID: (t = (t = JSON.parse(t)).UID), include: "identities-active,identities-all,identities-global,loginIDs,emails,profile,data, password,lastLoginLocation, regSource,irank,rba,subscriptions,userInfo" };
                    gigya.accounts.getAccountInfo(a, {
                        callback: function (e) {
                            if (0 == e.errorCode) {
                                console.log(e);
                                var t = e;
                                null != document.querySelector(".me-details__inner") && "" != document.querySelector(".me-details__inner") && showuserInfo(t),
                                    "" != document.querySelector("[data-section='projects']") && null != document.querySelector("[data-section='projects']") && customer_token_api(t);
                            } else alert("Error :" + e.errorMessage);
                        },
                    });
                }
            },
        }
    );
}
function showuserInfo(e) {
    e.profile.hasOwnProperty("firstName") && (document.querySelector("#field_full_name").value = e.profile.firstName),
        e.profile.hasOwnProperty("lastName") && (document.querySelector("#field_full_name").value += " " + e.profile.lastName),
        e.profile.hasOwnProperty("firstName") && (document.querySelector("#field_edit_full_name").value = e.profile.firstName),
        e.profile.hasOwnProperty("lastName") && (document.querySelector("#field_edit_full_name").value += " " + e.profile.lastName),
        e.profile.hasOwnProperty("email") && ((document.querySelector("#field_email").value = e.profile.email), (document.querySelector("#field_edit_email").value = e.profile.email)),
        e.hasOwnProperty("phoneNumber") && ((document.querySelector("#field_phone_number").value = e.phoneNumber), (document.querySelector("#field_edit_phone_number").value = e.phoneNumber));
}
function setaccountInfoXHR(e) {
    var t = { profile: { firstName: e.firstName, lastName: e.lastName } };
    gigya.accounts.setAccountInfo(t);
}


function getParameterByName(e) {
    var t = RegExp("[\\?&]" + (e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")) + "=([^&#]*)").exec(location.search);
    return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
}
function uuidhref() {
    if (null != localStorage.getItem("login")) {
        var e = document.querySelectorAll("a[href]"),
            t = localStorage.getItem("login");
        t = (t = JSON.parse(t)).UID;
        var a = document.querySelector(".domainurls").value;
        a = a.split(",");
        for (var r = 0; r < a.length; r++)
            for (var l = 0; l < e.length; l++)
                if (e[l].getAttribute("href").startsWith(a[r])) {
                    var n = e[l].getAttribute("href");
                    e[l].removeAttribute("href"), e[l].setAttribute("href", n + "?uid=" + t);
                }
    }
}
function gigyagetuuid() {
    gigya.accounts.session.verify(
        { context: "some content to send through the method" },
        {
            callback: function (e) {
                0 == e.errorCode && gigya.accounts.getAccountInfo({ callback: getAccountInfoHandler });
            },
        }
    );
}
function getAccountInfoHandler(e) {
    localStorage.setItem("login", JSON.stringify(e));
}
function applyLoggedInStyles() {
    $(".location-profile-icon [data-login-redirection]").css({ background: "linear-gradient(black, black) padding-box, linear-gradient(to right, #FFC63C, #FFA20C) border-box", "border-radius": "50%", border: "1.6px solid transparent" });
}
document.addEventListener("DOMContentLoaded", function () {
    var e = getParameterByName("uid");
    if ("" != getParameterByName("uid")) {
        var t = {};
        (t.UID = e), localStorage.setItem("login", JSON.stringify(t)), console.log(t), clicklogin();
    }
    if (null != document.querySelector("#sessionrequired") && "" != document.querySelector("#sessionrequired") && "true" == document.querySelector("#sessionrequired").value && document.querySelector('[data-section="deatils"]')) {
        var a = localStorage.getItem("login");
        null == a ? clicklogin() : getuserInfo();
    }
    var a = localStorage.getItem("login");
    null != a && (readsavedArticle(), uuidhref());
}),
    document.addEventListener("DOMContentLoaded", function () {
        var e = window.location.search.replace("?", "");
        ("gig_actions=sso.login&gig_brand=betabh" == e || "gig_actions=sso.login&gig_brand=beautifulhomes" == e) &&
            (clicklogin(),
            setTimeout(function () {
                readsavedArticle();
            }, 5e3));
    }),
    document.addEventListener("DOMContentLoaded", function () {
        gigya
            .hasSession()
            .then(function (e) {
                e && applyLoggedInStyles();
            })
            .catch(function (e) {
                console.error("Error checking session with Gigya:", e);
            });
    });
var loginresponse,
    uid,
    getaccountInfoXHR = function e(t, a) {
        gigyagetuuid();
        var r = localStorage.getItem("login"),
            l = { UID: (r = (r = JSON.parse(r)).UID), include: "identities-active,identities-all,identities-global,loginIDs,emails,profile,data, password,lastLoginLocation, regSource,irank,rba,subscriptions,userInfo" };
        gigya.accounts.getAccountInfo(l, {
            callback: function (e) {
                0 == e.errorCode ? a(null, e) : alert("Error :" + e.errorMessage);
            },
        });
    };

function readsavedArticle() {
    if (null != localStorage.getItem("login") && $("[class$='__bookmark']").find("[class^='icon-bookmark']").length > 0) {
        var e;
        getaccountInfoXHR("getapi", function (t, a) {
            if (null != t) console.error(t);
            else {
                if ((e = a).data.hasOwnProperty("savedArticles"))
                    for (
                        var r = e.data.savedArticles.map(function (e) {
                                return e.articleID;
                            }),
                            l = $("[class$='__bookmark']").find("[class^='icon-bookmark']"),
                            n = 0;
                        n < r.length;
                        n++
                    )
                        for (var s = 0; s < l.length; s++) "article" == l[s].getAttribute("data-type") && l[s].getAttribute("data-id") == r[n] && (l[s].classList.remove("icon-bookmark-o"), l[s].classList.add("icon-bookmark"));
                if (e.data.hasOwnProperty("wishlist"))
                    for (
                        var o = e.data.wishlist.category.product.map(function (e) {
                                return e.product_SKU;
                            }),
                            c = $("[class$='__bookmark']").find("[class^='icon-bookmark']"),
                            n = 0;
                        n < o.length;
                        n++
                    )
                        for (var s = 0; s < c.length; s++) "product" == c[s].getAttribute("data-type") && c[s].getAttribute("data-id") == o[n] && (c[s].classList.remove("icon-bookmark-o"), c[s].classList.add("icon-bookmark"));
            }
        });
    }
}
("use strict");
document.addEventListener("DOMContentLoaded", function () {
    $(".brand-logo-wrapper").on("click", function () {
        $(".brand-logo-wrapper").removeClass("active"), $(this).addClass("active"), $(this).children("white-bh-logo").addClass("dsp-none");
    });
    var e = document.querySelectorAll(".brand-logo-wrapper");
    e[0].addEventListener("click", function () {
        headerClick("asianpaints", "header");
    }),
        e[1].addEventListener("click", function () {
            headerClick("beautiful homes", "header");
        }),
        $(".contact-details-wrapper a, .location-mobile-icon a").on("click", function () {
            try {
                headerClick($(this).attr("href").split(":")[1], "header");
            } catch (e) {
                console.log("Error in header call" + e);
            }
        }),
        $(".primary_new_header_logo a, .header-m__nav-item .header-m__logo-outer").on("click", function () {
            try {
                bhlogoClick("bh logo", "header");
            } catch (e) {
                console.log("Error in logo call" + e);
            }
        }),
        $(".location-profile-icon a:not([data-login-redirection])").on("click", function () {
            try {
                headerClick("Store locator icon", "header");
            } catch (e) {
                console.log("Error in header call" + e);
            }
        }),
        $(".location-profile-icon a[data-login-redirection]").on("click", function () {
            try {
                headerClick("Profile icon", "header");
            } catch (e) {
                console.log("Error in header call" + e);
            }
        });
}),
    window.addEventListener("DOMContentLoaded", function () {
        $(".submennu-list-item").on("click", function () {
            var e = $(this).text(),
                t = $(".primary-menu-list__li:hover .primary-menu-item").text().trim(),
                a = $(".primary-menu-list__li:hover .primary-menu-item img").length,
                r = "";
            r = a ? "More" : t;
            try {
                menuInteraction(e, r, "header");
            } catch (l) {
                console.log(l);
            }
        }),
            $(".nav-menu-cardimage-wrapper a").on("click", function () {
                var e = $(this).siblings(".nav-menu-cardimage-text-wrapper").find(".card-image-text").text(),
                    t = $(".primary-menu-list__li:hover .primary-menu-item").text().trim(),
                    a = $(".primary-menu-list__li:hover .primary-menu-item img").length,
                    r = "";
                (r = a ? "More" : t), menubannerClick(e, r, "header");
            });
    }),
    document.addEventListener("DOMContentLoaded", function () {
        var e = document.querySelector(".offer-header-redirect-wrapper a");
        e.addEventListener("click", function (t) {
            headerClick(e.innerHTML, "header");
        });
    }),
    window.addEventListener("DOMContentLoaded", function () {
        $(".bottomNav-track--event").on("click", function () {
            try {
                var e = $(this).text().trim(),
                    t = "",
                    a = $(".bottom_nav__icon.active").text().trim();
                (t = "more" == a.toLowerCase() ? "more" : a), menuInteraction(e, t, "header");
            } catch (r) {
                console.log(r);
            }
        });
    });
var allLielements = document.querySelectorAll(".header__primary.left li");
allLielements.forEach(function (e) {
    if ("active" == e.classList[0] && "#Design-services" == e.childNodes[0].dataset.target) {
        var t = e.childNodes[0].dataset.target;
        $(t).addClass("active"), $(t).parent().addClass("active");
    }
}),
    $(".header__row.middle").on("mouseout", function (e) {
        $("[data-target='#Design-services']").parent().hasClass("active") && ($("#Design-services").addClass("active"), $("#Design-services").parent().addClass("active"));
    });
("use strict");
var header = {
        el: $(".header"),
        prevScrollPos: 0,
        timeout: 1e3,
        idleID: -1,
        init: function e() {
            this.primaryMenu.init(), this.secondaryMenu.init(), this.sticky(), (this.prevScrollPos = window.pageYOffset);
        },
        hideMenu: function e() {
            this.el.removeClass("show");
        },
        sticky: function e() {
            var t = this;
            $(window).scroll(function (e) {
                if (
                    (this.oldScroll > this.scrollY
                        ? null != document.getElementById("leftside")
                            ? document.getElementById("leftside").scrollBy(0, -100)
                            : (this.oldScroll = this.scrollY)
                        : null != document.getElementById("leftside")
                        ? document.getElementById("leftside").scrollBy(0, 100)
                        : (this.oldScroll = this.scrollY),
                    header.primaryMenu.left.listItems,
                    window.location.href,
                    document.querySelector(".header__row.middle.tab-content"),
                    $(e.currentTarget).scrollTop() > 75)
                )
                    $(".header").css("position", "fixed"),
                        $(".header-m").css("position", "fixed"),
                        ("/content/asianpaintsbeautifulhomes/us/en.html" == window.location.pathname ||
                            "/" == window.location.pathname ||
                            "/content/asianpaintsbeautifulhomes/us/en/magazine.html" == window.location.pathname ||
                            "/magazine.html" == window.location.pathname) &&
                            t.el.addClass("header--sticky");
                else {
                    var a = t.secondaryMenu.megaMenu.el;
                    $(".header").css("position", "relative"),
                        $(".header-m").css("position", "relative"),
                        ("/content/asianpaintsbeautifulhomes/us/en.html" != window.location.pathname &&
                            "/" != window.location.pathname &&
                            "/content/asianpaintsbeautifulhomes/us/en/magazine.html" != window.location.pathname &&
                            "/magazine.html" != window.location.pathname) ||
                            a.is(":visible") ||
                            t.el.removeClass("header--sticky");
                }
                var r = window.pageYOffset;
                t.prevScrollPos > r || r < 200 ? t.el.removeClass("header--scrolled") : t.el.hasClass("search--expanded") && t.el.find(".icon-close-o").trigger("click"), (t.prevScrollPos = r);
            });
        },
        primaryMenu: {
            el: null,
            init: function e() {
                var t = header.el;
                (this.el = t.find(".header__primary")), this.left.init(), this.right.init();
            },
            left: {
                el: null,
                listItems: null,
                init: function e() {
                    var t = header.primaryMenu.el;
                    (this.el = t.filter(".left")), (this.listItems = this.el.find("li")), this.events.click(), this.events.hover();
                },
                events: {
                    click: function e() {
                        header.primaryMenu.left.listItems;
                    },
                    primaryHighlight: function e(t) {
                        var a = header.primaryMenu.left.listItems,
                            r = $(t.currentTarget);
                        if (!r.hasClass("header__logo")) {
                            t.preventDefault(), $(".header__mega").hide(), a.removeClass("active"), r.addClass("active");
                            var l = r.find("a").data("target");
                            $("header .tab-pane").removeClass("active in"), $(l).length > 0 ? ($(l).addClass("active in"), $(l).parent().addClass("active")) : $("header .middle.tab-content").removeClass("active");
                        }
                    },
                    handleMouseLeave: function e() {
                        var t = header.primaryMenu.left,
                            a = (t.el, t.listItems);
                        a.removeClass("active"), a.find("a").filter(".current").data("target");
                        var r = a.find("a").filter(".current");
                        r.addClass("active"), this.primaryHighlight({ currentTarget: r.parent("li"), preventDefault: function e() {} });
                    },
                    hover: function e() {
                        var t = this,
                            a = header.primaryMenu.left,
                            r = a.el,
                            l = a.listItems;
                        l.on("mouseenter", function (e) {
                            var a = $(e.currentTarget);
                            l.removeClass("active"), a.addClass("active"), t.primaryHighlight(e);
                        }),
                            r.on("mouseleave", function (e) {
                                l.removeClass("active"),
                                    document.querySelector('[data-target="#Design-services"]') &&
                                        document.querySelectorAll(".default").forEach(function (e) {
                                            e.classList.add("active");
                                        });
                                var t = $(".header__middle").filter(".active").attr("id");
                                if ((l.has("[data-target='#".concat(t, "']")).addClass("active"), 0 == $(".header__middle").filter(".active").length)) {
                                    for (var a, r = header.primaryMenu.left.listItems, n = window.location.href, s = document.querySelectorAll(".header__middle.tab-pane.fade"), o = 0; o < r.length; o++)
                                        !r[o].classList.contains("header__logo") && r[o].classList.contains("active") && r[o].classList.remove("active");
                                    for (var c = 0; c < s.length; c++) s[c].classList.contains("active") && (s[c].classList.remove("active"), s[c].classList.remove("in"));
                                    for (var o = 0; o < r.length; o++)
                                        if (!r[o].classList.contains("header__logo")) {
                                            var d = r[o].getElementsByTagName("a")[0].href;
                                            (d = d.replace(".html", "")),
                                                r[o].classList.contains("active") && r[o].classList.remove("active"),
                                                n.includes(d) && (r[o].classList.add("active"), (a = r[o].getElementsByTagName("a")[0].getAttribute("data-target").replace("#", "")));
                                        }
                                }
                            }),
                            $("header .middle.tab-content").on("mouseenter", function () {
                                null != document.querySelector("#hovermenu") && header.idleID > -1 && clearTimeout(header.idleID);
                            }),
                            $("header .middle.tab-content").on("mouseleave", function () {
                                null != document.querySelector("#hovermenu") &&
                                    (header.idleID > -1 && clearTimeout(header.idleID),
                                    (header.idleID = setTimeout(function () {
                                        return t.handleMouseLeave();
                                    }, header.timeout)));
                            });
                    },
                },
            },
            right: {
                el: null,
                listItems: null,
                init: function e() {
                    var t = header.primaryMenu.el;
                    (this.el = t.filter(".right")), (this.listItems = this.el.find("li")), this.searchForm.init();
                },
                searchForm: {
                    el: null,
                    parent: null,
                    searchFld: null,
                    closeTrigger: null,
                    init: function e() {
                        var t = header.primaryMenu.el;
                        (this.el = t.find(".header__form")), (this.parent = t.find(".header__search-outer")), (this.searchFld = this.el.find("input")), (this.closeTrigger = t.find(".icon-close-o")), this.click();
                    },
                    click: function e() {
                        var t = header.el,
                            a = header.primaryMenu.left.listItems,
                            r = header.primaryMenu.right.searchForm,
                            l = r.parent,
                            n = r.searchFld,
                            s = r.closeTrigger;
                        n.on("click", function (e) {
                            let r = lozad();
                            r.observe(),
                                a.filter(":not('.header__logo')").hide(),
                                t.addClass("search--expanded"),
                                ((0 != document.querySelector(".searchdynamic").childElementCount && "" != document.getElementById("field-search1").value) || "" != document.getElementById("field-search__m").value) &&
                                    ((document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "block"),
                                    (document.querySelector(".searchdynamic").style.display = "block"),
                                    (document.querySelector(".searchresult").style.display = "none"));
                        }),
                            n.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                                t.hasClass("search--expanded")
                                    ? (a.filter(":not('.header__logo')").hide(),
                                      l.find(".searchresult").show(),
                                      ((0 != document.querySelector(".searchdynamic").childElementCount && "" != document.getElementById("field-search1").value) || "" != document.getElementById("field-search__m").value) &&
                                          ((document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "block"),
                                          (document.querySelector(".searchdynamic").style.display = "block"),
                                          (document.querySelector(".searchresult").style.display = "none")))
                                    : a.filter(":not('.header__logo')").show();
                            }),
                            s.on("click", function (e) {
                                t.removeClass("search--expanded"),
                                    "block" == document.querySelector(".searchresult").style.display && l.find(".searchresult").hide(),
                                    "block" == document.querySelector(".searchdynamic").style.display &&
                                        ((document.querySelector(".searchdynamic").style.display = "none"), (document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none"));
                            });
                    },
                },
            },
        },
        secondaryMenu: {
            el: null,
            listItems: null,
            init: function e() {
                var t = header.el;
                (this.el = t.find(".header__secondary")), (this.listItems = this.el.find("li")), this.megaMenu.init();
            },
            megaMenu: {
                el: $(".header__mega, .dropdown-wrapper"),
                init: function e() {
                    var t = this,
                        a = header.secondaryMenu.listItems;
                    a.on("mouseenter", function (e) {
                        var r = $(e.currentTarget);
                        r.data("target") &&
                            (t.showBgOverlay(),
                            t.el.hide(),
                            a.removeClass("active"),
                            r.addClass("active"),
                            t.el.filter("#".concat(r.data("target"))).show(),
                            0 !== $(window).scrollTop() || header.el.hasClass("header--sticky") || header.el.addClass("header--sticky"));
                    }),
                        $(".header__middle").on("mouseleave", function (e) {
                            t.hideBgOverlay(), a.removeClass("active"), t.el.hide(), 0 === $(window).scrollTop() && header.el.hasClass("header--sticky") && !t.el.is(":visible") && header.el.removeClass("header--sticky");
                            for (var r, l = header.primaryMenu.left.listItems, n = window.location.href, s = document.querySelectorAll(".header__middle.tab-pane.fade"), o = 0; o < l.length; o++)
                                !l[o].classList.contains("header__logo") && l[o].classList.contains("active") && l[o].classList.remove("active");
                            for (var c = 0; c < s.length; c++) s[c].classList.contains("active") && (s[c].classList.remove("active"), s[c].classList.remove("in"));
                            for (var o = 0; o < l.length; o++)
                                if (!l[o].classList.contains("header__logo")) {
                                    var d = l[o].getElementsByTagName("a")[0].href;
                                    (d = d.replace(".html", "")),
                                        l[o].classList.contains("active") && l[o].classList.remove("active"),
                                        n.includes(d) && (l[o].classList.add("active"), (r = l[o].getElementsByTagName("a")[0].getAttribute("data-target").replace("#", "")));
                                }
                            document.querySelector(".header__row.middle.tab-content").classList.contains("active") && document.querySelector(".header__row.middle.tab-content").classList.remove("active");
                        }),
                        $(".header__shop")
                            .find("a")
                            .on("click", function (e) {
                                e.preventDefault(), $("#products").find(".header__secondary > li").hide(), $("#products").find(".header__secondary > li").filter(".shop-online").show();
                            });
                },
                showBgOverlay: function e() {
                    $(".overlay--dark").addClass("active");
                },
                hideBgOverlay: function e() {
                    $(".overlay--dark").removeClass("active");
                },
            },
        },
    },
    headerMob = {
        el: $(".header-m"),
        prevScrollPos: 0,
        init: function e() {
            this.sticky(), this.click(), (this.prevScrollPos = window.pageYOffset);
        },
        sticky: function e() {
            var t = this;
            $(window).scroll(function (e) {
                $(e.currentTarget).scrollTop() > 75 ? t.el.addClass("header--sticky") : t.el.removeClass("header--sticky");
                var a = window.pageYOffset;
                t.prevScrollPos > a || a < 200 ? t.el.removeClass("header--scrolled") : t.el.addClass("header--scrolled"), (t.prevScrollPos = a);
            });
        },
        click: function e() {
            this.el.find(".header-m__hamburger").on("click", function (e) {
                headerMob.sidebar_show("m-nav");
            }),
                this.el.find(".header-m__sidebar-close").on("click", function (e) {
                    headerMob.sidebar_hide();
                    var t = headerMob.el.find(".collapse > .header-m__nav-dropdown__trigger");
                    headerMob.dropdown_hide(t);
                }),
                this.el.find(".header-m__nav-dropdown__trigger").on("click", function (e) {
                    e.preventDefault();
                    var t = $(e.currentTarget).attr("href");
                    void 0 !== t && -1 === $.inArray(t, [!1, ""]) ? (window.location.href = t) : headerMob.dropdown_show(e);
                }),
                this.el.find(".header-m__nav-back").on("click", function (e) {
                    e.preventDefault();
                    var t = headerMob.el.find(".collapse > .header-m__nav-dropdown__trigger");
                    headerMob.dropdown_hide(t);
                }),
                this.el.find(".header-m__search-trigger").on("click", function (e) {
                    headerMob.sidebar_show("m-search");
                    try {
                        searchInitiate("header");
                    } catch (t) {
                        console.log("Error in searchInit call" + t);
                    }
                });
            var t = this.el.find(".header-m__subnav");
            $('a[data-toggle="submenu"]').on("click", function (e) {
                e.preventDefault();
                var a = $(e.currentTarget);
                t.toggleClass("active"), $(".header-m__subnav-middle").removeClass("active");
                for (var r = document.querySelectorAll(".header-m__subnav-middle"), l = 0; l < r.length; l++) r[l].getAttribute("id") == a.data("target") && r[l].classList.add("active");
            }),
                t.find(".header-m__subnav-back a").on("click", function (e) {
                    e.preventDefault(), t.removeClass("active");
                }),
                t.find(".header-m__subnav-close button").on("click", function (e) {
                    e.preventDefault(), headerMob.sidebar_hide();
                    var a = headerMob.el.find(".collapse > .header-m__nav-dropdown__trigger");
                    headerMob.dropdown_hide(a), t.removeClass("active");
                });
            var a = this.el.find(".header-m__form");
            this.el.find('a[data-toggle="design-help-form"]').on("click", function (e) {
                e.preventDefault(), a.addClass("active");
            }),
                a.find(".js-close").on("click", function (e) {
                    e.preventDefault(), a.removeClass("active");
                });
        },
        sidebar_show: function e(t) {
            $(".header-m__sidebar").css("left", "0"),
                $(".header-m__sidebar m-nav").css("left", "0px") && $("body").css("overflow", "hidden"),
                "m-nav" === t
                    ? ($(".header-m__sidebar").addClass("m-nav").removeClass("m-search"), $(".header-m__wrapper-nav").show(), $(".header-m__wrapper-search").hide())
                    : "m-search" === t && ($(".header-m__sidebar").addClass("m-search").removeClass("m-nav"), $(".header-m__wrapper-search").show(), $(".header-m__wrapper-nav").hide());
        },
        sidebar_hide: function e() {
            $(".header-m__sidebar").css("left", "-100%"), $(".header-m__sidebar m-nav").css("left", "-100%") && $("body").css("overflow", "unset");
        },
        dropdown_show: function e(t) {
            $(".header-m__sidebar-logo").hide(), $(".header-m__nav-back").show();
            var a = $(t.currentTarget);
            a.attr("href", a.attr("data-href")).removeAttr("data-href").parent().addClass("collapse"), $(".header-m__nav-middle").addClass("collapse-outer");
        },
        dropdown_hide: function e(t) {
            $(".header-m__sidebar-logo").show(), $(".header-m__nav-back").hide();
            var a = t;
            a.attr("data-href", a.attr("href")).removeAttr("href"), a.parent().removeClass("collapse"), $(".header-m__nav-middle").removeClass("collapse-outer");
        },
    };
$(document).ready(function () {
    header.el && header.init(), headerMob.el && headerMob.init();
});
var mobilerdh_form = {
    el: $("#mobile-rdh__form"),
    init: function e() {
        this.events.register();
    },
    events: {
        register: function e() {
            this.submit();
        },
        _validate: function e() {
            var t = mobilerdh_form.el;
            t.find("input").each(function (e, t) {
                var a = $(t),
                    r = a.attr("id"),
                    l = $.trim(a.val());
                if ("" == l) a.parent().addClass("invalid");
                else {
                    var n = "";
                    switch (r) {
                        case "form-field__name":
                            validateName(l) || (n = "Entered name is invalid");
                            break;
                        case "form-field__mobile":
                            validateMobile(l) || (n = "Entered mobile number is invalid");
                            break;
                        case "form-field__pincode":
                            validatePincode(l) || (n = "Entered pincode is invalid");
                            break;
                        case "form-field__email":
                            validateEmail(l) || (n = "Entered email ID is invalid");
                    }
                    "" !== n && a.parent().addClass("invalid").find(".error").text(n);
                }
            }),
                t.find("input").on("keyup", function (e) {
                    var t = $(e.currentTarget);
                    "" == $.trim(t.val()) ? t.parent().addClass("invalid") : t.parent().removeClass("invalid");
                });
        },
        submit: function e() {
            var t = this;
            mobilerdh_form.el.find(".btn").on("click", function (e) {
                e.preventDefault(), t._validate();
            });
        },
    },
};
$(function () {
    mobilerdh_form.init();
});
for (var tabclick = document.querySelectorAll(".header-m__nav-item a[href='#']"), i = 0; i < tabclick.length; i += 1)
    tabclick[i].addEventListener("click", function (e) {
        $(".header-m__sidebar-logo").hide(), $(".header-m__nav-back").show(), e.currentTarget.parentElement.children[1].parentElement.classList.add("collapse"), $(".header-m__nav-middle").addClass("collapse-outer");
    });
var iconSearch = document.querySelector(".header-m__search-trigger .icon-search"),
    headerMSidebarClose = document.querySelector(".header-m__sidebar-close"),
    bottonNavIconWrapper = document.querySelector(".bottom_navigation__icons_wrapper");
iconSearch &&
    iconSearch.addEventListener("click", function () {
        bottonNavIconWrapper.style.zIndex = "99";
    }),
    headerMSidebarClose &&
        headerMSidebarClose.addEventListener("click", function () {
            bottonNavIconWrapper.style.zIndex = "9999";
        });
let div = document.createElement("div");
setTimeout(() => {
    function e(e) {
        e.preventDefault();
        let t = {
            C_FirstName: document.getElementById("form-field__C_FirstName").value,
            C_Mobile: document.getElementById("form-field__C_Mobile").value,
            C_Pincode: document.getElementById("form-field__C_Pincode").value,
            C_Email: document.getElementById("form-field__C_Email").value,
            C_WhatsappNotification: document.querySelector("input[data-json='C_WhatsappNotification']").checked,
            C_CampaignId: document.querySelector("input[data-json='C_CampaignId']").value,
        };
        fetch("http://localhost:8001/api/user/showdata", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) })
            .then((e) => {
                if (e.ok) return e.json();
                throw Error("Failed to submit data");
            })
            .then((e) => {
                console.log("Success:", e), alert("Form submitted successfully!"), (window.location.href = "/content/asianpaintsbeautifulhomes/us/en/thank-you.html");
            })
            .catch((e) => {
                console.error("Error:", e), alert("There was an error submitting the form.");
            });
    }
    var t =
            '<div class="form_container"><form class="frm head-redesign-help__form" action="#" autocomplete="off"><div class="formcontainer simpleouter container responsivegrid"><div class="head-redesign-help-right "><div class="frm__group"><label class="frm__label" for="form-field__C_FirstName">Full Name<span>*</span></label><input class="frm__field keyval" type="text" data-validation="name" data-json="C_FirstName" id="form-field__C_FirstName" placeholder="Enter your name" required="true"><label style="display: none;" class="frm__label ids-form-label" for="form-field__C_FirstName">Full Name<span>*</span></label><span class="error">Please enter your Name</span></div><div class="frm__group"><label class="frm__label" for="form-field__C_Mobile">Mobile Number<span>*</span></label><input class="frm__field keyval" type="tel" data-validation="mobileNumber" data-json="C_Mobile" id="form-field__C_Mobile" placeholder="Enter mobile number" required="true" minlength="10" maxlength="10"><label style="display: none;" class="frm__label ids-form-label" for="form-field__C_Mobile">Mobile Number<span>*</span></label><span class="error">Please enter your Mobile Number</span><span class="country_code">+91</span></div><div class="frm__group"><label class="frm__label" for="form-field__C_Pincode">Pincode<span>*</span></label><input class="frm__field keyval" type="tel" data-validation="pincode" data-json="C_Pincode" id="form-field__C_Pincode" placeholder="Enter your Pincode" required="true" minlength="6" maxlength="6"><label style="display: none;" class="frm__label ids-form-label" for="form-field__C_Pincode">Pincode<span>*</span></label><span class="error">Please enter your Pincode</span></div><div class="frm__group"><label class="frm__label" for="form-field__C_Email">Email ID<span>*</span></label><input class="frm__field keyval" type="email" data-validation="email" data-json="C_Email" id="form-field__C_Email" placeholder="Enter your email" required="true"><label style="display: none;" class="frm__label ids-form-label" for="form-field__C_Email">Email ID<span>*</span></label><span class="error">Please enter your Email ID</span></div><div class="form_field_checkbox"><div class="form-checkbox"><label class="check-container">Yes, I would like to receive important updates and notifications on WhatsApp<input type="checkbox" data-json="C_WhatsappNotification" checked="false"><span class="checkmark"></span></label></div></div><div class="form_hidden"><input type="hidden" data-json="C_CampaignId" value="DECOR_ORGANIC"></div><div class="paragraph text"><div class="head-redesign-help__form-description"><p>By proceeding, you are authorizing Beautiful Homes and its suggested contractors to get in touch with you through calls, sms, or e-mail.</p></div></div><div class="form_button"><div class="head-redesign-help__form-cta"><button type="button" class="btn btn--primary btn__icon--right black-form-cta-click" data-redirection="/content/asianpaintsbeautifulhomes/us/en/thank-you.html" onclick="sfform(event)">Submit<span class="icon-chevron-right"></span></button></div></div></div></div></form></div>',
        a = document.querySelector(".head-redesign-container .columns-wrapper .columns div:nth-child(2)");
    if ((console.log("this is ", a), a)) {
        a.innerHTML = t;
        let r = a.querySelector(".black-form-cta-click");
        r.addEventListener("click", e);
    } else console.error("Element not found");
}, 500),
    setTimeout(() => {
        function e(e) {
            if ((console.log("login" + e), (v = JSON.stringify(e)), localStorage.setItem("login", v), null != document.querySelector("#sessionrequired"))) {
                var t = document.querySelector("#sessionrequired").getAttribute("data-section");
                "project" == t && "true" == document.querySelector("#sessionrequired").value
                    ? ((emailid = (emailid = JSON.parse(v)).user.email), customer_token_api())
                    : "deatils" == t && "true" == document.querySelector("#sessionrequired").value && a();
            } else if (null != document.querySelector("#sessionrequiredmain"))
                "mainpage" == document.querySelector("#sessionrequiredmain").getAttribute("data-section").value &&
                    null != document.querySelector("#sessionrequiredmain") &&
                    ((emailid = (emailid = JSON.parse(v)).user.email), customer_token_api());
            else if (!1 == clickbookmark) {
                var r = document.querySelectorAll("[data-login-redirection]")[0].getAttribute("data-login-redirection");
                window.location.href = replacepagedomain(r);
            }
            smartech("identify", (emailid = (emailid = JSON.parse(v)).user.email)), C(), d();
        }
        function t(e) {
            gigya.accounts.session.verify(
                { context: "some content to send through the method" },
                {
                    callback: function (t) {
                        if (0 == t.errorCode) {
                            if ((console.log(t), void 0 != e)) {
                                if (e.target.parentElement.getAttribute("data-login-redirection")) {
                                    u();
                                    var a = document.querySelectorAll("[data-login-redirection]")[0].getAttribute("data-login-redirection");
                                    window.location.href = replacepagedomain(a);
                                }
                            } else u();
                        } else gigya.sso.login({ authFlow: "redirect", redirectURL: window.location.href, context: { brand: document.getElementById("brand").value } });
                    },
                }
            );
        }
        function a() {
            gigya.accounts.session.verify(
                { context: "some content to send through the method" },
                {
                    callback: function (e) {
                        if (0 == e.errorCode) {
                            var t = localStorage.getItem("login"),
                                a = { UID: (t = (t = JSON.parse(t)).UID), include: "identities-active,identities-all,identities-global,loginIDs,emails,profile,data, password,lastLoginLocation, regSource,irank,rba,subscriptions,userInfo" };
                            gigya.accounts.getAccountInfo(a, {
                                callback: function (e) {
                                    if (0 == e.errorCode) {
                                        console.log(e);
                                        var t = e;
                                        null != document.querySelector(".me-details__inner") && "" != document.querySelector(".me-details__inner") && r(t),
                                            "" != document.querySelector("[data-section='projects']") && null != document.querySelector("[data-section='projects']") && customer_token_api(t);
                                    } else alert("Error :" + e.errorMessage);
                                },
                            });
                        }
                    },
                }
            );
        }
        function r(e) {
            e.profile.hasOwnProperty("firstName") && (document.querySelector("#field_full_name").value = e.profile.firstName),
                e.profile.hasOwnProperty("lastName") && (document.querySelector("#field_full_name").value += " " + e.profile.lastName),
                e.profile.hasOwnProperty("firstName") && (document.querySelector("#field_edit_full_name").value = e.profile.firstName),
                e.profile.hasOwnProperty("lastName") && (document.querySelector("#field_edit_full_name").value += " " + e.profile.lastName),
                e.profile.hasOwnProperty("email") && ((document.querySelector("#field_email").value = e.profile.email), (document.querySelector("#field_edit_email").value = e.profile.email)),
                e.hasOwnProperty("phoneNumber") && ((document.querySelector("#field_phone_number").value = e.phoneNumber), (document.querySelector("#field_edit_phone_number").value = e.phoneNumber));
        }
        function l(e) {
            var t = { profile: { firstName: e.firstName, lastName: e.lastName } };
            gigya.accounts.setAccountInfo(t);
        }
        function n() {
            var e = {};
            if (null != document.getElementById("field_full_name") && "" != document.getElementById("field_full_name")) {
                var t = document.getElementById("field_full_name").value;
                (e.firstName = t), (e.lastName = "");
            }
            l(e);
        }
        function s(e) {
            var t = localStorage.getItem("login");
            logoutctaClick("Log Out", "Logout", (t = (t = JSON.parse(t)).UID));
            var a = { UID: t };
            gigya.accounts.logout(a, {
                callback: function (e) {
                    0 == e.errorCode && (localStorage.removeItem("login"), (window.location.href = location.origin));
                },
            });
        }
        function o(e, t, a, r, l) {
            gigya.accounts.session.verify(params, {
                callback: function (n) {
                    if (0 == n.errorCode) {
                        var s = localStorage.getItem("login");
                        sidewidgetClick(e, t, a, r, l, (s = (s = JSON.parse(s)).UID));
                    }
                },
            });
        }
        function c(e) {
            var t = RegExp("[\\?&]" + (e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")) + "=([^&#]*)").exec(location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
        }
        function d() {
            if (null != localStorage.getItem("login")) {
                var e = document.querySelectorAll("a[href]"),
                    t = localStorage.getItem("login");
                t = (t = JSON.parse(t)).UID;
                var a = document.querySelector(".domainurls").value;
                a = a.split(",");
                for (var r = 0; r < a.length; r++)
                    for (var l = 0; l < e.length; l++)
                        if (e[l].getAttribute("href").startsWith(a[r])) {
                            var n = e[l].getAttribute("href");
                            e[l].removeAttribute("href"), e[l].setAttribute("href", n + "?uid=" + t);
                        }
            }
        }
        function u() {
            gigya.accounts.session.verify(
                { context: "some content to send through the method" },
                {
                    callback: function (e) {
                        0 == e.errorCode && gigya.accounts.getAccountInfo({ callback: h });
                    },
                }
            );
        }
        function h(e) {
            localStorage.setItem("login", JSON.stringify(e));
        }
        function f() {
            $(".location-profile-icon [data-login-redirection]").css({ "border-radius": "50%", border: "1.6px solid #FFC63C" });
        }
        document.addEventListener("DOMContentLoaded", function () {
            var e = c("uid");
            if ("" != c("uid")) {
                var r = {};
                (r.UID = e), localStorage.setItem("login", JSON.stringify(r)), console.log(r), t();
            }
            if (null != document.querySelector("#sessionrequired") && "" != document.querySelector("#sessionrequired") && "true" == document.querySelector("#sessionrequired").value && document.querySelector('[data-section="deatils"]')) {
                var l = localStorage.getItem("login");
                null == l ? t() : a();
            }
            var l = localStorage.getItem("login");
            null != l && (C(), d());
        }),
            document.addEventListener("DOMContentLoaded", function () {
                var e = window.location.search.replace("?", "");
                ("gig_actions=sso.login&gig_brand=betabh" == e || "gig_actions=sso.login&gig_brand=beautifulhomes" == e) &&
                    (t(),
                    setTimeout(function () {
                        C();
                    }, 5e3));
            }),
            document.addEventListener("DOMContentLoaded", function () {
                gigya
                    .hasSession()
                    .then(function (e) {
                        e && f();
                    })
                    .catch(function (e) {
                        console.error("Error checking session with Gigya:", e);
                    });
            });
        var m,
            p,
            v,
            g,
            y,
            b,
            k,
            E = function e(t, a) {
                u();
                var r = localStorage.getItem("login"),
                    l = { UID: (r = (r = JSON.parse(r)).UID), include: "identities-active,identities-all,identities-global,loginIDs,emails,profile,data, password,lastLoginLocation, regSource,irank,rba,subscriptions,userInfo" };
                gigya.accounts.getAccountInfo(l, {
                    callback: function (e) {
                        0 == e.errorCode ? a(null, e) : alert("Error :" + e.errorMessage);
                    },
                });
            };
        function x(e) {
            var t, a, r, l, n;
            "article" == $(e.currentTarget).attr("data-type")
                ? ((r = "savedArticles"),
                  $(e.currentTarget).hasClass("icon-bookmark-o") ? ((a = "add"), (t = $(e.currentTarget).attr("data-id"))) : $(e.currentTarget).hasClass("icon-bookmark") && ((a = "delete"), (t = $(e.currentTarget).attr("data-id"))))
                : "product" == $(e.currentTarget).attr("data-type") &&
                  ((r = "wishlist.category.product.product_SKU"),
                  $(e.currentTarget).hasClass("icon-bookmark-o") ? ((a = "add"), (t = $(e.currentTarget).attr("data-id"))) : $(e.currentTarget).hasClass("icon-bookmark") && ((a = "delete"), (t = $(e.currentTarget).attr("data-id")))),
                $(e.currentTarget).toggleClass("icon-bookmark-o icon-bookmark"),
                E("getapi", function (e, t) {
                    null != e ? console.error(e) : (l = t);
                }),
                setTimeout(function () {
                    var r = localStorage.getItem("login");
                    if (((r = (r = JSON.parse(r)).UID), "article" == $(e.currentTarget).attr("data-type"))) {
                        if (
                            ((n = { data: { savedArticles: [] } }),
                            l.data.hasOwnProperty("savedArticles") &&
                                l.data.savedArticles.forEach(function (e) {
                                    n.data.savedArticles.push(e);
                                }),
                            "add" == a)
                        ) {
                            var s = { articleID: t, type: "article" };
                            n.data.savedArticles.push(s);
                        } else
                            "delete" == a &&
                                (n.data.savedArticles = n.data.savedArticles.filter(function (e) {
                                    return e.articleID !== t;
                                }));
                    } else if ("product" == $(e.currentTarget).attr("data-type")) {
                        var o,
                            c = new Date().toISOString();
                        if (
                            ((n = { data: { wishlist: { category: { product: [] } } } }),
                            l.data.hasOwnProperty("wishlist") &&
                                ((o = []),
                                l.data.wishlist.category.product.forEach(function (e) {
                                    n.data.wishlist.category.product.push(e);
                                })),
                            "add" == a)
                        ) {
                            var d = { product_SKU: t, product_URL: "", Time_Wishlist: c };
                            n.data.wishlist.category.product.push(d);
                        } else
                            "delete" == a &&
                                (n.data.wishlist.category.product = n.data.wishlist.category.product.filter(function (e) {
                                    return e.product_SKU !== t;
                                }));
                    }
                    gigya.accounts.setAccountInfo(n);
                }, 5e3);
        }
        function C() {
            if (null != localStorage.getItem("login") && $("[class$='__bookmark']").find("[class^='icon-bookmark']").length > 0) {
                var e;
                E("getapi", function (t, a) {
                    if (null != t) console.error(t);
                    else {
                        if ((e = a).data.hasOwnProperty("savedArticles"))
                            for (
                                var r = e.data.savedArticles.map(function (e) {
                                        return e.articleID;
                                    }),
                                    l = $("[class$='__bookmark']").find("[class^='icon-bookmark']"),
                                    n = 0;
                                n < r.length;
                                n++
                            )
                                for (var s = 0; s < l.length; s++) "article" == l[s].getAttribute("data-type") && l[s].getAttribute("data-id") == r[n] && (l[s].classList.remove("icon-bookmark-o"), l[s].classList.add("icon-bookmark"));
                        if (e.data.hasOwnProperty("wishlist"))
                            for (
                                var o = e.data.wishlist.category.product.map(function (e) {
                                        return e.product_SKU;
                                    }),
                                    c = $("[class$='__bookmark']").find("[class^='icon-bookmark']"),
                                    n = 0;
                                n < o.length;
                                n++
                            )
                                for (var s = 0; s < c.length; s++) "product" == c[s].getAttribute("data-type") && c[s].getAttribute("data-id") == o[n] && (c[s].classList.remove("icon-bookmark-o"), c[s].classList.add("icon-bookmark"));
                    }
                });
            }
        }
        document.addEventListener("DOMContentLoaded", function () {
            $(".brand-logo-wrapper").on("click", function () {
                $(".brand-logo-wrapper").removeClass("active"), $(this).addClass("active"), $(this).children("white-bh-logo").addClass("dsp-none");
            });
            var e = document.querySelectorAll(".brand-logo-wrapper");
            e[0].addEventListener("click", function () {
                headerClick("asianpaints", "header");
            }),
                e[1].addEventListener("click", function () {
                    headerClick("beautiful homes", "header");
                }),
                e[2].addEventListener("click", function () {
                    headerClick("white teak", "header");
                }),
                $(".contact-details-wrapper a, .location-mobile-icon a").on("click", function () {
                    try {
                        headerClick($(this).attr("href").split(":")[1], "header");
                    } catch (e) {
                        console.log("Error in header call" + e);
                    }
                }),
                $(".primary_new_header_logo a, .header-m__nav-item .header-m__logo-outer").on("click", function () {
                    try {
                        bhlogoClick("bh logo", "header");
                    } catch (e) {
                        console.log("Error in logo call" + e);
                    }
                }),
                $(".location-profile-icon a:not([data-login-redirection])").on("click", function () {
                    try {
                        headerClick("Store locator icon", "header");
                    } catch (e) {
                        console.log("Error in header call" + e);
                    }
                });
            var t = document.querySelector(".location-profile-icon [data-login-redirection]");
            t &&
                t.addEventListener("click", function () {
                    try {
                        headerClick("Profile icon", "header");
                    } catch (e) {
                        console.log("Error in header call" + e);
                    }
                });
        }),
            window.addEventListener("DOMContentLoaded", function () {
                $(".submennu-list-item").on("click", function () {
                    var e = $(this).text(),
                        t = $(".primary-menu-list__li:hover .primary-menu-item").text().trim(),
                        a = $(".primary-menu-list__li:hover .primary-menu-item img").length,
                        r = "";
                    r = a ? "More" : t;
                    try {
                        menuInteraction(e, r, "header");
                    } catch (l) {
                        console.log(l);
                    }
                }),
                    $(".nav-menu-cardimage-wrapper a").on("click", function () {
                        var e = $(this).siblings(".nav-menu-cardimage-text-wrapper").find(".card-image-text").text(),
                            t = $(".primary-menu-list__li:hover .primary-menu-item").text().trim(),
                            a = $(".primary-menu-list__li:hover .primary-menu-item img").length,
                            r = "";
                        (r = a ? "More" : t), menubannerClick(e, r, "header");
                    });
            }),
            document.addEventListener("DOMContentLoaded", function () {
                var e = document.querySelector(".header-m__logo-outer");
                e.addEventListener("click", function () {
                    e.classList.add("active"),
                        setTimeout(function () {
                            e.classList.remove("active");
                        }, 500);
                });
                var t = document.querySelector(".header-m__right.black-header-wrapper .icon-search");
                t.addEventListener("click", function () {
                    t.classList.add("background_blink"),
                        setTimeout(function () {
                            t.classList.remove("background_blink");
                        }, 500);
                });
                var a = document.querySelector(".header-m__right.black-header-wrapper .location-mobile-icon");
                a.addEventListener("click", function () {
                    a.classList.add("background_blink"),
                        setTimeout(function () {
                            a.classList.remove("background_blink");
                        }, 500);
                }),
                    document.querySelector(".header-m__right.black-header-wrapper .location-profile-icon").addEventListener("click", function (e) {
                        ("a" === e.target.tagName.toLowerCase() || "img" === e.target.tagName.toLowerCase()) &&
                            (e.target.parentNode.classList.add("background_blink"),
                            setTimeout(function () {
                                e.target.parentNode.classList.remove("background_blink");
                            }, 500));
                    });
            }),
            document.addEventListener("DOMContentLoaded", function () {
                var e = document.querySelector(".offer-header-redirect-wrapper a");
                e.addEventListener("click", function (t) {
                    headerClick(e.innerHTML, "header");
                });
            });
        ("use strict");
        var w = document.querySelectorAll(".bottom_navigation__items"),
            S = document.querySelectorAll(".bottom_nav__icon"),
            I = document.querySelector(".bottom_navigation_overlay"),
            L = document.querySelectorAll(".nav_grey_line");
        S.forEach(function (e) {
            e.addEventListener("click", function () {
                var t = e.dataset.navicon;
                w.forEach(function (e) {
                    t !== e.dataset.itemwrapper && e.classList.remove("showItem");
                }),
                    S.forEach(function (e) {
                        e.dataset.navicon !== t && e.classList.remove("active");
                    }),
                    w.forEach(function (a) {
                        t == a.dataset.itemwrapper && (a.classList.toggle("showItem"), e.classList.toggle("active"));
                    }),
                    e.classList.contains("active") ? ((I.style.display = "block"), document.body.classList.add("hide_overflow")) : ((I.style.display = "none"), document.body.classList.remove("hide_overflow"));
            });
        }),
            L.forEach(function (e) {
                e.addEventListener("click", function (e) {
                    e.stopPropagation(),
                        (I.style.display = "none"),
                        document.body.classList.remove("hide_overflow"),
                        S.forEach(function (e) {
                            e.classList.remove("active");
                        }),
                        w.forEach(function (e) {
                            e.classList.remove("showItem");
                        });
                });
            }),
            I &&
                I.addEventListener("click", function () {
                    (I.style.display = "none"),
                        document.body.classList.remove("hide_overflow"),
                        S.forEach(function (e) {
                            e.classList.remove("active");
                        }),
                        w.forEach(function (e) {
                            e.classList.remove("showItem");
                        });
                }),
            window.addEventListener("DOMContentLoaded", function () {
                $(".bottomNav-track--event").on("click", function () {
                    try {
                        var e = $(this).text().trim(),
                            t = "",
                            a = $(".bottom_nav__icon.active").text().trim();
                        (t = "more" == a.toLowerCase() ? "more" : a), menuInteraction(e, t, "header");
                    } catch (r) {
                        console.log(r);
                    }
                });
            }),
            document.querySelectorAll(".header__primary.left li").forEach(function (e) {
                if ("active" == e.classList[0] && "#Design-services" == e.childNodes[0].dataset.target) {
                    var t = e.childNodes[0].dataset.target;
                    $(t).addClass("active"), $(t).parent().addClass("active");
                }
            }),
            $(".header__row.middle").on("mouseout", function (e) {
                $("[data-target='#Design-services']").parent().hasClass("active") && ($("#Design-services").addClass("active"), $("#Design-services").parent().addClass("active"));
            });
        ("use strict");
        var A = {
                el: $(".header"),
                prevScrollPos: 0,
                timeout: 1e3,
                idleID: -1,
                init: function e() {
                    this.primaryMenu.init(), this.secondaryMenu.init(), this.sticky(), (this.prevScrollPos = window.pageYOffset);
                },
                hideMenu: function e() {
                    this.el.removeClass("show");
                },
                sticky: function e() {
                    var t = this;
                    $(window).scroll(function (e) {
                        if (
                            (this.oldScroll > this.scrollY
                                ? null != document.getElementById("leftside")
                                    ? document.getElementById("leftside").scrollBy(0, -100)
                                    : (this.oldScroll = this.scrollY)
                                : null != document.getElementById("leftside")
                                ? document.getElementById("leftside").scrollBy(0, 100)
                                : (this.oldScroll = this.scrollY),
                            A.primaryMenu.left.listItems,
                            window.location.href,
                            document.querySelector(".header__row.middle.tab-content"),
                            $(e.currentTarget).scrollTop() > 75)
                        )
                            $(".header").css("position", "fixed"),
                                $(".header-m").css("position", "fixed"),
                                ("/content/asianpaintsbeautifulhomes/us/en.html" == window.location.pathname ||
                                    "/" == window.location.pathname ||
                                    "/content/asianpaintsbeautifulhomes/us/en/magazine.html" == window.location.pathname ||
                                    "/magazine.html" == window.location.pathname) &&
                                    t.el.addClass("header--sticky");
                        else {
                            var a = t.secondaryMenu.megaMenu.el;
                            $(".header").css("position", "relative"),
                                $(".header-m").css("position", "relative"),
                                ("/content/asianpaintsbeautifulhomes/us/en.html" != window.location.pathname &&
                                    "/" != window.location.pathname &&
                                    "/content/asianpaintsbeautifulhomes/us/en/magazine.html" != window.location.pathname &&
                                    "/magazine.html" != window.location.pathname) ||
                                    a.is(":visible") ||
                                    t.el.removeClass("header--sticky");
                        }
                        var r = window.pageYOffset;
                        t.prevScrollPos > r || r < 200 ? t.el.removeClass("header--scrolled") : t.el.hasClass("search--expanded") && t.el.find(".icon-close-o").trigger("click"), (t.prevScrollPos = r);
                    });
                },
                primaryMenu: {
                    el: null,
                    init: function e() {
                        var t = A.el;
                        (this.el = t.find(".header__primary")), this.left.init(), this.right.init();
                    },
                    left: {
                        el: null,
                        listItems: null,
                        init: function e() {
                            var t = A.primaryMenu.el;
                            (this.el = t.filter(".left")), (this.listItems = this.el.find("li")), this.events.click(), this.events.hover();
                        },
                        events: {
                            click: function e() {
                                A.primaryMenu.left.listItems;
                            },
                            primaryHighlight: function e(t) {
                                var a = A.primaryMenu.left.listItems,
                                    r = $(t.currentTarget);
                                if (!r.hasClass("header__logo")) {
                                    t.preventDefault(), $(".header__mega").hide(), a.removeClass("active"), r.addClass("active");
                                    var l = r.find("a").data("target");
                                    $("header .tab-pane").removeClass("active in"), $(l).length > 0 ? ($(l).addClass("active in"), $(l).parent().addClass("active")) : $("header .middle.tab-content").removeClass("active");
                                }
                            },
                            handleMouseLeave: function e() {
                                var t = A.primaryMenu.left,
                                    a = (t.el, t.listItems);
                                a.removeClass("active"), a.find("a").filter(".current").data("target");
                                var r = a.find("a").filter(".current");
                                r.addClass("active"), this.primaryHighlight({ currentTarget: r.parent("li"), preventDefault: function e() {} });
                            },
                            hover: function e() {
                                var t = this,
                                    a = A.primaryMenu.left,
                                    r = a.el,
                                    l = a.listItems;
                                l.on("mouseenter", function (e) {
                                    var a = $(e.currentTarget);
                                    l.removeClass("active"), a.addClass("active"), t.primaryHighlight(e);
                                }),
                                    r.on("mouseleave", function (e) {
                                        l.removeClass("active"),
                                            document.querySelector('[data-target="#Design-services"]') &&
                                                document.querySelectorAll(".default").forEach(function (e) {
                                                    e.classList.add("active");
                                                });
                                        var t = $(".header__middle").filter(".active").attr("id");
                                        if ((l.has("[data-target='#".concat(t, "']")).addClass("active"), 0 == $(".header__middle").filter(".active").length)) {
                                            for (var a, r = A.primaryMenu.left.listItems, n = window.location.href, s = document.querySelectorAll(".header__middle.tab-pane.fade"), o = 0; o < r.length; o++)
                                                !r[o].classList.contains("header__logo") && r[o].classList.contains("active") && r[o].classList.remove("active");
                                            for (var c = 0; c < s.length; c++) s[c].classList.contains("active") && (s[c].classList.remove("active"), s[c].classList.remove("in"));
                                            for (var o = 0; o < r.length; o++)
                                                if (!r[o].classList.contains("header__logo")) {
                                                    var d = r[o].getElementsByTagName("a")[0].href;
                                                    (d = d.replace(".html", "")),
                                                        r[o].classList.contains("active") && r[o].classList.remove("active"),
                                                        n.includes(d) && (r[o].classList.add("active"), (a = r[o].getElementsByTagName("a")[0].getAttribute("data-target").replace("#", "")));
                                                }
                                        }
                                    }),
                                    $("header .middle.tab-content").on("mouseenter", function () {
                                        null != document.querySelector("#hovermenu") && A.idleID > -1 && clearTimeout(A.idleID);
                                    }),
                                    $("header .middle.tab-content").on("mouseleave", function () {
                                        null != document.querySelector("#hovermenu") &&
                                            (A.idleID > -1 && clearTimeout(A.idleID),
                                            (A.idleID = setTimeout(function () {
                                                return t.handleMouseLeave();
                                            }, A.timeout)));
                                    });
                            },
                        },
                    },
                    right: {
                        el: null,
                        listItems: null,
                        init: function e() {
                            var t = A.primaryMenu.el;
                            (this.el = t.filter(".right")), (this.listItems = this.el.find("li")), this.searchForm.init();
                        },
                        searchForm: {
                            el: null,
                            parent: null,
                            searchFld: null,
                            closeTrigger: null,
                            init: function e() {
                                var t = A.primaryMenu.el;
                                (this.el = t.find(".header__form")), (this.parent = t.find(".header__search-outer")), (this.searchFld = this.el.find("input")), (this.closeTrigger = t.find(".icon-close-o")), this.click();
                            },
                            click: function e() {
                                var t = A.el,
                                    a = A.primaryMenu.left.listItems,
                                    r = A.primaryMenu.right.searchForm,
                                    l = r.parent,
                                    n = r.searchFld,
                                    s = r.closeTrigger;
                                n.on("click", function (e) {
                                    let r = lozad();
                                    r.observe(),
                                        a.filter(":not('.header__logo')").hide(),
                                        t.addClass("search--expanded"),
                                        ((0 != document.querySelector(".searchdynamic").childElementCount && "" != document.getElementById("field-search1").value) || "" != document.getElementById("field-search__m").value) &&
                                            ((document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "block"),
                                            (document.querySelector(".searchdynamic").style.display = "block"),
                                            (document.querySelector(".searchresult").style.display = "none"));
                                }),
                                    n.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                                        t.hasClass("search--expanded")
                                            ? (a.filter(":not('.header__logo')").hide(),
                                              l.find(".searchresult").show(),
                                              ((0 != document.querySelector(".searchdynamic").childElementCount && "" != document.getElementById("field-search1").value) || "" != document.getElementById("field-search__m").value) &&
                                                  ((document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "block"),
                                                  (document.querySelector(".searchdynamic").style.display = "block"),
                                                  (document.querySelector(".searchresult").style.display = "none")))
                                            : a.filter(":not('.header__logo')").show();
                                    }),
                                    s.on("click", function (e) {
                                        t.removeClass("search--expanded"),
                                            "block" == document.querySelector(".searchresult").style.display && l.find(".searchresult").hide(),
                                            "block" == document.querySelector(".searchdynamic").style.display &&
                                                ((document.querySelector(".searchdynamic").style.display = "none"), (document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none"));
                                    });
                            },
                        },
                    },
                },
                secondaryMenu: {
                    el: null,
                    listItems: null,
                    init: function e() {
                        var t = A.el;
                        (this.el = t.find(".header__secondary")), (this.listItems = this.el.find("li")), this.megaMenu.init();
                    },
                    megaMenu: {
                        el: $(".header__mega, .dropdown-wrapper"),
                        init: function e() {
                            var t = this,
                                a = A.secondaryMenu.listItems;
                            a.on("mouseenter", function (e) {
                                var r = $(e.currentTarget);
                                r.data("target") &&
                                    (t.showBgOverlay(),
                                    t.el.hide(),
                                    a.removeClass("active"),
                                    r.addClass("active"),
                                    t.el.filter("#".concat(r.data("target"))).show(),
                                    0 !== $(window).scrollTop() || A.el.hasClass("header--sticky") || A.el.addClass("header--sticky"));
                            }),
                                $(".header__middle").on("mouseleave", function (e) {
                                    t.hideBgOverlay(), a.removeClass("active"), t.el.hide(), 0 === $(window).scrollTop() && A.el.hasClass("header--sticky") && !t.el.is(":visible") && A.el.removeClass("header--sticky");
                                    for (var r, l = A.primaryMenu.left.listItems, n = window.location.href, s = document.querySelectorAll(".header__middle.tab-pane.fade"), o = 0; o < l.length; o++)
                                        !l[o].classList.contains("header__logo") && l[o].classList.contains("active") && l[o].classList.remove("active");
                                    for (var c = 0; c < s.length; c++) s[c].classList.contains("active") && (s[c].classList.remove("active"), s[c].classList.remove("in"));
                                    for (var o = 0; o < l.length; o++)
                                        if (!l[o].classList.contains("header__logo")) {
                                            var d = l[o].getElementsByTagName("a")[0].href;
                                            (d = d.replace(".html", "")),
                                                l[o].classList.contains("active") && l[o].classList.remove("active"),
                                                n.includes(d) && (l[o].classList.add("active"), (r = l[o].getElementsByTagName("a")[0].getAttribute("data-target").replace("#", "")));
                                        }
                                    document.querySelector(".header__row.middle.tab-content").classList.contains("active") && document.querySelector(".header__row.middle.tab-content").classList.remove("active");
                                }),
                                $(".header__shop")
                                    .find("a")
                                    .on("click", function (e) {
                                        e.preventDefault(), $("#products").find(".header__secondary > li").hide(), $("#products").find(".header__secondary > li").filter(".shop-online").show();
                                    });
                        },
                        showBgOverlay: function e() {
                            $(".overlay--dark").addClass("active");
                        },
                        hideBgOverlay: function e() {
                            $(".overlay--dark").removeClass("active");
                        },
                    },
                },
            },
            q = {
                el: $(".header-m"),
                prevScrollPos: 0,
                init: function e() {
                    this.sticky(), this.click(), (this.prevScrollPos = window.pageYOffset);
                },
                sticky: function e() {
                    var t = this;
                    $(window).scroll(function (e) {
                        $(e.currentTarget).scrollTop() > 75 ? t.el.addClass("header--sticky") : t.el.removeClass("header--sticky");
                        var a = window.pageYOffset;
                        t.prevScrollPos > a || a < 200 ? t.el.removeClass("header--scrolled") : t.el.addClass("header--scrolled"), (t.prevScrollPos = a);
                    });
                },
                click: function e() {
                    this.el.find(".header-m__hamburger").on("click", function (e) {
                        q.sidebar_show("m-nav");
                    }),
                        this.el.find(".header-m__sidebar-close").on("click", function (e) {
                            q.sidebar_hide();
                            var t = q.el.find(".collapse > .header-m__nav-dropdown__trigger");
                            q.dropdown_hide(t);
                        }),
                        this.el.find(".header-m__nav-dropdown__trigger").on("click", function (e) {
                            e.preventDefault();
                            var t = $(e.currentTarget).attr("href");
                            void 0 !== t && -1 === $.inArray(t, [!1, ""]) ? (window.location.href = t) : q.dropdown_show(e);
                        }),
                        this.el.find(".header-m__nav-back").on("click", function (e) {
                            e.preventDefault();
                            var t = q.el.find(".collapse > .header-m__nav-dropdown__trigger");
                            q.dropdown_hide(t);
                        }),
                        this.el.find(".header-m__search-trigger").on("click", function (e) {
                            q.sidebar_show("m-search");
                            try {
                                searchInitiate("header");
                            } catch (t) {
                                console.log("Error in searchInit call" + t);
                            }
                        });
                    var t = this.el.find(".header-m__subnav");
                    $('a[data-toggle="submenu"]').on("click", function (e) {
                        e.preventDefault();
                        var a = $(e.currentTarget);
                        t.toggleClass("active"), $(".header-m__subnav-middle").removeClass("active");
                        for (var r = document.querySelectorAll(".header-m__subnav-middle"), l = 0; l < r.length; l++) r[l].getAttribute("id") == a.data("target") && r[l].classList.add("active");
                    }),
                        t.find(".header-m__subnav-back a").on("click", function (e) {
                            e.preventDefault(), t.removeClass("active");
                        }),
                        t.find(".header-m__subnav-close button").on("click", function (e) {
                            e.preventDefault(), q.sidebar_hide();
                            var a = q.el.find(".collapse > .header-m__nav-dropdown__trigger");
                            q.dropdown_hide(a), t.removeClass("active");
                        });
                    var a = this.el.find(".header-m__form");
                    this.el.find('a[data-toggle="design-help-form"]').on("click", function (e) {
                        e.preventDefault(), a.addClass("active");
                    }),
                        a.find(".js-close").on("click", function (e) {
                            e.preventDefault(), a.removeClass("active");
                        });
                },
                sidebar_show: function e(t) {
                    $(".header-m__sidebar").css("left", "0"),
                        $(".header-m__sidebar m-nav").css("left", "0px") && $("body").css("overflow", "hidden"),
                        "m-nav" === t
                            ? ($(".header-m__sidebar").addClass("m-nav").removeClass("m-search"), $(".header-m__wrapper-nav").show(), $(".header-m__wrapper-search").hide())
                            : "m-search" === t && ($(".header-m__sidebar").addClass("m-search").removeClass("m-nav"), $(".header-m__wrapper-search").show(), $(".header-m__wrapper-nav").hide());
                },
                sidebar_hide: function e() {
                    $(".header-m__sidebar").css("left", "-100%"), $(".header-m__sidebar m-nav").css("left", "-100%") && $("body").css("overflow", "unset");
                },
                dropdown_show: function e(t) {
                    $(".header-m__sidebar-logo").hide(), $(".header-m__nav-back").show();
                    var a = $(t.currentTarget);
                    a.attr("href", a.attr("data-href")).removeAttr("data-href").parent().addClass("collapse"), $(".header-m__nav-middle").addClass("collapse-outer");
                },
                dropdown_hide: function e(t) {
                    $(".header-m__sidebar-logo").show(), $(".header-m__nav-back").hide();
                    var a = t;
                    a.attr("data-href", a.attr("href")).removeAttr("href"), a.parent().removeClass("collapse"), $(".header-m__nav-middle").removeClass("collapse-outer");
                },
            };
        $(document).ready(function () {
            A.el && A.init(), q.el && q.init();
        });
        var _ = {
            el: $("#mobile-rdh__form"),
            init: function e() {
                this.events.register();
            },
            events: {
                register: function e() {
                    this.submit();
                },
                _validate: function e() {
                    var t = _.el;
                    t.find("input").each(function (e, t) {
                        var a = $(t),
                            r = a.attr("id"),
                            l = $.trim(a.val());
                        if ("" == l) a.parent().addClass("invalid");
                        else {
                            var n = "";
                            switch (r) {
                                case "form-field__name":
                                    G(l) || (n = "Entered name is invalid");
                                    break;
                                case "form-field__mobile":
                                    Y(l) || (n = "Entered mobile number is invalid");
                                    break;
                                case "form-field__pincode":
                                    K(l) || (n = "Entered pincode is invalid");
                                    break;
                                case "form-field__email":
                                    X(l) || (n = "Entered email ID is invalid");
                            }
                            "" !== n && a.parent().addClass("invalid").find(".error").text(n);
                        }
                    }),
                        t.find("input").on("keyup", function (e) {
                            var t = $(e.currentTarget);
                            "" == $.trim(t.val()) ? t.parent().addClass("invalid") : t.parent().removeClass("invalid");
                        });
                },
                submit: function e() {
                    var t = this;
                    _.el.find(".btn").on("click", function (e) {
                        e.preventDefault(), t._validate();
                    });
                },
            },
        };
        $(function () {
            _.init();
        });
        for (var T = document.querySelectorAll(".header-m__nav-item a[href='#']"), M = 0; M < T.length; M += 1)
            T[M].addEventListener("click", function (e) {
                $(".header-m__sidebar-logo").hide(), $(".header-m__nav-back").show(), e.currentTarget.parentElement.children[1].parentElement.classList.add("collapse"), $(".header-m__nav-middle").addClass("collapse-outer");
            });
        document.getElementsByTagName("body")[0].addEventListener("click", function (e) {
            !1 == e.target.classList.contains("field-search") &&
                ("" != document.getElementById("field-search1").value && (document.getElementById("field-search1").value = ""),
                "" != document.getElementById("field-search__m").value && (document.getElementById("field-search__m").value = ""),
                document.querySelector(".header").classList.contains("search--expanded") &&
                    (document.querySelector(".header").classList.remove("search--expanded"),
                    "block" == document.querySelector(".searchresult").style.display && (document.querySelector(".searchresult").style.display = "none"),
                    "block" == document.querySelector(".searchdynamic").style.display &&
                        ((document.querySelector(".searchdynamic").style.display = "none"), (document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none"))));
        }),
            document.querySelector("#header_sticky_btn").addEventListener("click", function (e) {
                e.preventDefault(),
                    $("#dialog-personal-info").css({ display: "block" }),
                    $("#field_email").removeAttr("disabled"),
                    "block" == document.querySelector("#dialog-personal-info").style.display && $("body").css("overflow", "hidden"),
                    $(".new_thankup_popup .dialog__body").hasClass("dsp-none") ? $(".new_thankup_popup .dialog__container").removeClass("new_style") : $(".new_thankup_popup .dialog__container").addClass("new_style");
            });
        var D = document.querySelector(".header-m__search-trigger .icon-search"),
            B = document.querySelector(".header-m__sidebar-close"),
            N = document.querySelector(".bottom_navigation__icons_wrapper");
        function O(e, t) {
            var a;
            return function () {
                var r = Array.prototype.slice.call(arguments);
                clearTimeout(a),
                    (a = setTimeout(function () {
                        e.apply(this, r);
                    }, t));
            };
        }
        function P(e) {
            var t = document.querySelector("header").classList;
            if ((t.contains("search--expanded") || t.add("search--expanded"), "" != document.getElementById("field-search1").value)) {
                t = document.getElementById("field-search1").value;
                for (var a = t.replace(/\s+/g, " ").trim().split(" "), r = "", l = 0; l < a.length; l++) {
                    var n = a[l];
                    0 != l && (r += " OR "), (r += ' (title:"' + n + '"^1000 OR articleTitle:"' + n + '"^1000 OR description:"' + n + '"^500 OR main_category:"' + n + '"^200 OR sub_category:"' + n + '"^100 OR pagedata:"' + n + '"^1)');
                }
                if (
                    ((a = '(identifier:"products" OR identifier:"article") AND (' + r + ") &fl=id,url,title,featuredImg,identifier,sku_code,articleTitle&rows=7000&sort=score desc"),
                    console.log(a),
                    ("Backspace" != e.key || 8 != e.keyCode) && ("" == t || 3 > t.length || 50 < t.length))
                )
                    return !1;
                13 === e.keyCode && R(e), (y = (y = a).replaceAll(" ", "%20")), (b = document.getElementById("solrdomain").value), j();
            } else if ("" != document.getElementById("field-search__m").value) {
                for (l = 0, a = (t = document.getElementById("field-search__m").value).replace(/\s+/g, " ").trim().split(" "), r = ""; l < a.length; l++)
                    (n = a[l]),
                        0 != l && (r += " OR "),
                        (r += ' (title:"' + n + '"^1000 OR articleTitle:"' + n + '"^1000 OR description:"' + n + '"^500 OR main_category:"' + n + '"^200 OR sub_category:"' + n + '"^100 OR pagedata:"' + n + '"^1)');
                if (((a = '(identifier:"products" OR identifier:"article") AND (' + r + ") &fl=id,url,title,featuredImg,identifier,sku_code,articleTitle&rows=7000&sort=score desc"), console.log(a), "Backspace" != e.key || 8 != e.keyCode)) {
                    if ("" == t) {
                        for (t = 0, e = document.querySelectorAll(".searchresult"); t < e.length; t++) e[t].style.display = "block";
                        for (t = 0, e = document.querySelectorAll(".searchdynamic"); t < e.length; t++) e[t].style.display = "block";
                        return !1;
                    }
                    if (3 > t.length || 50 < t.length) return !1;
                }
                13 === e.keyCode && R(e), (y = (y = a).replaceAll(" ", "%20")), (b = document.getElementById("solrdomain").value), j();
            } else if ("" == document.getElementById("field-search1").value) {
                for (t = 0, e = document.querySelectorAll(".searchresult"); t < e.length; t++) e[t].style.display = "block";
                for (t = 0, e = document.querySelectorAll(".searchdynamic"); t < e.length; t++) e[t].style.display = "none";
                document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none";
            } else if ("" == document.getElementById("field-search__m").value) {
                for (t = 0, e = document.querySelectorAll(".searchresult"); t < e.length; t++) e[t].style.display = "block";
                for (t = 0, document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none", e = document.querySelectorAll(".searchdynamic"); t < e.length; t++) e[t].style.display = "none";
                document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none";
            }
        }
        function j() {
            var e = new XMLHttpRequest();
            e.addEventListener("readystatechange", function () {
                if (4 === this.readyState) {
                    var e = JSON.parse(this.response);
                    0 < (e = e.response.docs).length && F(e);
                }
            }),
                e.open("GET", b + y),
                e.send();
        }
        function H(e, t, a) {
            "undefined" == e && (e = ""), trendingsearchClick(e, t);
        }
        function F(e) {
            if ("" != document.getElementById("field-search1").value) var t = document.getElementById("field-search1").value;
            "" != document.getElementById("field-search__m").value && (t = document.getElementById("field-search__m").value);
            for (var a = "", r = document.querySelectorAll(".searchresult"), l = 0; l < r.length; l++) r[l].style.display = "none";
            if (((e = z(e, ["identifier"])), console.log("groups", e), (r = 2), (!e.hasOwnProperty("products") || 3 > e.products.length) && (r = e.hasOwnProperty("products") ? 5 - e.products.length : 5), e.hasOwnProperty("products"))) {
                for (l = 0; l < e.products.length; l++)
                    if (3 > l) {
                        var n = e.products[l].featuredImg + "/" + e.products[l].sku_code + "_PLP.jpg",
                            s = replacepagedomain(e.products[l].url.replaceAll(/-+/g, "-")),
                            o = '"' + t + "','" + e.products[l].title + "','" + e.products[l].url + '"';
                        a +=
                            '<li> <a href="' +
                            s +
                            '" onclick="analyticsearch(' +
                            o +
                            ')"> <div class="header-m__search-section__thumb"><img class="lozad" data-src="' +
                            n +
                            '" alt="Beautifulhomes"></div><div class="header-m__search-section__desc">' +
                            e.products[l].title +
                            "</div> </a></li>";
                    }
            }
            if (e.hasOwnProperty("article"))
                for (l = 0; l < e.article.length; l++)
                    l < r &&
                        ((n = e.article[l].featuredImg),
                        (a +=
                            '<li> <a href="' +
                            (s = replacepagedomain(e.article[l].url.replaceAll(/-+/g, "-"))) +
                            '" onclick="analyticsearch(' +
                            (o = '"' + t + "','" + e.article[l].articleTitle + "','" + e.article[l].url + '"') +
                            ')"> <div class="header-m__search-section__thumb"><img class="lozad" data-src="' +
                            n +
                            '" alt="Beautifulhomes"></div><div class="header-m__search-section__desc">' +
                            e.article[l].articleTitle +
                            "</div> </a></li>"));
            for (e = 0, t = document.querySelectorAll(".searchdynamic"), document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "block"; e < t.length; e++) (t[e].innerHTML = a), (t[e].style.display = "block");
            lozad().observe();
        }
        function R(e) {
            if ("" != document.getElementById("field-search1").value) {
                e = document.getElementById("field-search1").value;
                var t = "/content/asianpaintsbeautifulhomes/us/en";
                window.location.href.includes("https://www.beautifulhomes.asianpaints.com/")
                    ? (3 < e.length || 50 >= e.length) && (window.location.href = "https://www.beautifulhomes.asianpaints.com/search.html?searchterm=" + e)
                    : window.location.href.includes("https://betabeautifulhomes.asianpaints.com/")
                    ? (window.location.href = "https://betabeautifulhomes.asianpaints.com/search.html?searchterm=" + e)
                    : (3 < e.length || 50 >= e.length) && (window.location.href = replacepagedomain(t) + "/search.html?searchterm=" + e);
            } else
                "" != document.getElementById("field-search__m").value &&
                    (((e = document.getElementById("field-search__m").value), (t = "/content/asianpaintsbeautifulhomes/us/en"), window.location.href.includes("https://www.beautifulhomes.asianpaints.com/"))
                        ? (3 < e.length || 50 >= e.length) && (window.location.href = "https://www.beautifulhomes.asianpaints.com/search.html?searchterm=" + e)
                        : window.location.href.includes("https://betabeautifulhomes.asianpaints.com/")
                        ? (window.location.href = "https://betabeautifulhomes.asianpaints.com/search.html?searchterm=" + e)
                        : (3 < e.length || 50 >= e.length) && (window.location.href = replacepagedomain(t) + "/search.html?searchterm=" + e));
        }
        function z(e, t) {
            if (1 === (t = Array.from(t)).length) return U(e, t[0]);
            for (var a in (e = U(e, (property = t.shift())))) e[a] = z(e[a], Array.from(t));
            return e;
        }
        function U(e, t) {
            return e.reduce(function (e, a) {
                var r = a[t];
                return e[r] || (e[r] = []), e[r].push(a), e;
            }, {});
        }
        D &&
            D.addEventListener("click", function () {
                N.style.zIndex = "99";
            }),
            B &&
                B.addEventListener("click", function () {
                    N.style.zIndex = "9999";
                }),
            document.querySelector("#field-search1").addEventListener(
                "keyup",
                O(function (e) {
                    P(e);
                }, 50)
            ),
            document.querySelector("#field-search__m").addEventListener(
                "keyup",
                O(function (e) {
                    P(e);
                }, 50)
            ),
            $("#field-search1").on("input", function () {
                (searchTerm = ($("#field-search1").val(), $("#field-search1").val().trim())), /^[A-Za-z0-9\s]+$/.test(searchTerm) || $(this).val("");
            }),
            $("#field-search__m").on("input", function () {
                (searchTerm = ($("#field-search__m").val(), $("#field-search__m").val().trim())), /^[A-Za-z0-9\s]+$/.test(searchTerm) || $(this).val("");
            }),
            document.addEventListener("DOMContentLoaded", function () {
                $("#field-search1").on("click", function () {
                    try {
                        searchInitiate("header");
                    } catch (e) {
                        console.log("Error in searchInit call" + e);
                    }
                });
            });
        var G = function (e) {
                return "" !== e && /^[a-zA-Z][a-zA-Z ]*$/.test(e);
            },
            Z = function (e) {
                return "" !== e && /^\d+$/.test(e);
            },
            Y = function (e) {
                return "" !== e && /^[6-9]\d{9}$/gi.test(e);
            },
            W = function (e) {
                return "" !== e && /^\+(?:[0-9]-?){6,14}[0-9]$/.test(e);
            },
            K = function (e) {
                return "" !== e && /^[1-9][0-9]{5}$/.test(e);
            },
            X = function (e) {
                return "" !== e && /^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.([a-zA-Z]{2,4})$/.test(e);
            },
            V = function (e) {
                return "" !== e && /\b\d{4}([- ]?)\d{4}\1\d{4}\1\d{4}\b/.test(e);
            },
            J = function (e) {
                return "" !== e && /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(e);
            },
            Q = function (e) {
                return "" !== e && /^\d{3,4}$/.test(e);
            },
            ee = function (e) {
                return "" !== e && /^[\w.-]+@[\w.-]+$/.test(e);
            },
            et = function (e) {
                return /^[a-zA-Z0-9\s]*$/.test(e);
            },
            ea = function (e) {
                return "" !== e && /^[a-zA-Z0-9\s,'-]*$/.test(e);
            },
            er = function (e) {
                return "" !== e && /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/gm.test(e);
            },
            ei = !0;
        function el(e) {
            (e = e.currentTarget.parentElement.parentElement.parentElement.getElementsByTagName("input")),
                (ei = !0),
                e.forEach(function (e) {
                    if ("undefined" !== (e = $(e)).attr("data-validation") && !1 !== e.attr && void 0 !== e.attr("data-validation")) {
                        var t = e.attr("data-validation"),
                            a = $.trim(e.val());
                        if ("" == a) e.parent().addClass("invalid"), (ei = !1);
                        else {
                            var r = "";
                            switch (t) {
                                case "name":
                                    G(a) || ((r = "Please enter a valid Name"), (ei = !1), e.focus());
                                    break;
                                case "mobileNumber":
                                    Y(a) || ((r = "Please enter a valid Mobile Number"), (ei = !1), e.focus());
                                    break;
                                case "pincode":
                                    K(a) || ((r = "Please enter a valid PIN code"), (ei = !1), e.focus());
                                    break;
                                case "email":
                                    (t = X(a)) || ((r = "Please enter a valid Email ID"), (ei = !1), e.focus());
                                    break;
                                case "digit":
                                    (t = Z(a)) || ((r = "Enter digit only"), (ei = !1), e.focus());
                                case "mobile_number_verfication":
                                    t = Z(a);
                                    var l = !1;
                                    t || ((r = "Enter digit only"), (ei = !1), e.focus()),
                                        Y(a) || ((r = "Please enter a valid Mobile Number"), (ei = !1), (l = !0), e.focus()),
                                        0 == l && "Verify" == e[0].nextElementSibling.nextElementSibling.textContent && ((r = "Please verify your Mobile Number"), (ei = !1));
                            }
                            "" !== r && e.parent().addClass("invalid").find(".error").text(r);
                        }
                    }
                });
        }
        function en(e, t) {
            e.addEventListener("keyup", function (t) {
                ("Enter" !== t.key || "Backspace" !== t.key || "Tab" !== t.key) && e.parentElement.classList.contains("invalid") && e.parentElement.classList.remove("invalid");
            });
        }
        ("use strict");
        Array.from(document.getElementsByClassName("keyval")).forEach(en);
        ("use strict");
        ("use strict");
        var es = {
                el: $(".dialog-ssc-prod-list-filters"),
                init: function e() {
                    this.events.click();
                },
                events: {
                    click: function e() {
                        var t = es.el,
                            a = $("#btn-clear-filters"),
                            r = t.find(".btn-sorting"),
                            l = t.find(".btn-side"),
                            n = t.find(".dialog__list"),
                            s = $("#btn-show-results");
                        a.on("click", function (e) {
                            r.each(function (e, t) {
                                $(t).hasClass("btn--primary") && $(t).removeClass("btn--primary").addClass("btn--ghost"),
                                    null != document.querySelector(".left.gallery-filter-left") && ($(".left.gallery-filter-left").children().last()[0].innerText = " ");
                            }),
                                l.each(function (e, t) {
                                    var a = $(t).data("button-value");
                                    $(t).hasClass("btn--primary") && ($('*[data-value="'.concat(a, '"]')).addClass("hide"), $(t).removeClass("btn--primary").addClass("btn--ghost")),
                                        null != document.querySelector(".left.gallery-filter-left") && ($(".left.gallery-filter-left").children().last()[0].innerText = " "),
                                        sessionStorage.getItem("Gallery_filter") && sessionStorage.removeItem("Gallery_filter");
                                }),
                                n.find("li").each(function (e, t) {
                                    $(t).hasClass("active") && $(t).removeClass("active"), eb();
                                }),
                                $("body").attr("style") && $("body").css("overflow", "unset");
                        }),
                            r.on("click", function (e) {
                                r.each(function (e, t) {
                                    $(t).hasClass("btn--primary") && $(t).removeClass("btn--primary").addClass("btn--ghost");
                                }),
                                    $(e.currentTarget).removeClass("btn--ghost").addClass("btn--primary");
                            }),
                            l.on("click", function (e) {
                                var t = $(e.currentTarget),
                                    a = t.text();
                                console.log($('*[data-value="'.concat(a, '"]'))),
                                    t.hasClass("btn--primary")
                                        ? ($('*[data-value="'.concat(a, '"]')).addClass("hide"), t.addClass("btn--ghost").removeClass("btn--primary"))
                                        : (t.removeClass("btn--ghost").addClass("btn--primary"), $('*[data-value="'.concat(a, '"]')).removeClass("hide")),
                                    eb();
                            }),
                            n.find("li").on("click", function (e) {
                                $(e.currentTarget).toggleClass("active");
                            }),
                            s.on("click", function (e) {
                                $(".sca-prod-listing__filters-selected").css("display", "flex"), t.hide(), $("body").attr("style") && $("body").css("overflow", "unset");
                            }),
                            $(".js-filter-bar-input-tag").on("click", function (e) {
                                if (window.matchMedia("(max-width: 767px)").matches) {
                                    var t = $(e.currentTarget).data("value");
                                    $('*[data-value="'.concat(t, '"]')).addClass("hide"), $('*[data-button-value="'.concat(t, '"]')).addClass("btn--ghost").removeClass("btn--primary");
                                    var a = $(e.currentTarget).data("type").replace("type-", "");
                                    eb(a, t, eu);
                                }
                            });
                    },
                },
            },
            eo = {
                el: $(".filter-bar"),
                clearEl: $(".js-filterbar-clear"),
                applyEl: $(".js-filterbar-select-apply"),
                tagsEl: $(".js-filter-bar-input-tag"),
                totalEl: $(".js-filterbar-total"),
                selected: { location: null, accommodation: null, style: null, room: null, budget: null, celebrity: null },
                total: 0,
                init: function e() {
                    this.selectedChange(), this.select.el.length > 0 && this.select.init(), this.event.on.init();
                },
                event: {
                    on: {
                        init: function e() {
                            this.click.init();
                        },
                        click: {
                            init: function e() {
                                this.clear(), this.apply(), this.tags();
                            },
                            clear: function e() {
                                var t = eo.clearEl;
                                t.length && t.on("click", eo.eventFunc.clear);
                            },
                            apply: function e() {
                                eo.applyEl.on("click", eo.eventFunc.apply);
                            },
                            tags: function e() {
                                $(".js-filter-bar-input-tag").on("click", eo.eventFunc.tags);
                            },
                        },
                    },
                },
                eventFunc: {
                    clear: function e() {
                        eo.clearStyle(), eo.totalEl.text(""), eo.tagsEl.addClass("hide"), eo.clearEl.addClass("hide"), (eo.total = 0);
                    },
                    apply: function e() {
                        ec.close();
                    },
                    tags: function e() {
                        if (!window.matchMedia("(max-width: 767px)").matches) {
                            var t = $(this).data("order").toString(),
                                a = $(this).data("type"),
                                r = $("select[data-filter-type='".concat(a, "']")).multipleSelect("getSelects"),
                                l = r.indexOf(t);
                            l > -1 &&
                                (r.splice(l, 1),
                                $("select[data-filter-type='".concat(a, "']")).multipleSelect("setSelects", r),
                                $(".js-filter-bar-input-tag[data-type='".concat(a, "'][data-order='").concat(t, "']")).addClass("hide"),
                                eo.total--,
                                0 === eo.total ? (eo.totalEl.text(""), eo.clearEl.addClass("hide")) : (eo.totalEl.text(" (".concat(eo.total, ")")), eo.clearEl.removeClass("hide"))),
                                eb();
                        }
                    },
                },
                selectedChange: function e() {},
                updateStyle: function e(t, a) {
                    if ((console.log("update style: ".concat(t, " ").concat(a)), "date" === t));
                    else if ("all" === a)
                        $("select[data-filter-type='".concat(t, "']")).multipleSelect("checkAll"), $("div[data-filter-type='".concat(t, "']")).removeClass("active"), $("div.all[data-filter-type='".concat(t, "']")).addClass("active");
                    else if ("" === a) $("select[data-filter-type='".concat(t, "']")).multipleSelect("uncheckAll"), $("div[data-filter-type='".concat(t, "']")).removeClass("active");
                    else {
                        var r = a.split(",");
                        $("div[data-filter-type='".concat(t, "']")).removeClass("active"),
                            r.forEach(function (e) {
                                $("div[data-filter-type='".concat(t, "'][data-value='").concat(e, "']")).addClass("active");
                            }),
                            $("select[data-filter-type='".concat(t, "']")).multipleSelect("setSelects", r);
                    }
                },
                clearStyle: function e() {
                    this.select.el.multipleSelect("uncheckAll");
                },
                updateListingParams: function e(t, a) {
                    console.log("update lsiting params: ".concat(t, " ").concat(a));
                },
                select: {
                    el: $(".js-filterbar-select"),
                    init: function e() {
                        this.selectInit();
                    },
                    event: {
                        on: {
                            init: function e() {
                                this.click.init();
                            },
                            click: {
                                init: function e() {
                                    this.clear(), this.apply();
                                },
                                clear: function e() {
                                    var t = eo.clearEl;
                                    t.length && t.on("click", eo.eventFunc.clear);
                                },
                                apply: function e() {
                                    eo.applyEl.on("click", eo.eventFunc.apply);
                                },
                            },
                        },
                    },
                    eventFunc: {
                        clear: function e() {
                            eo.clearStyle(), eo.totalEl.text(""), eo.tagsEl.addClass("hide"), eb();
                        },
                        apply: function e() {
                            ec.close();
                        },
                    },
                    selectInit: function e() {
                        this.el.each(function () {
                            var e = $(this);
                            e.attr("data-all-selected");
                            var t = e.attr("data-counter-text");
                            e.multipleSelect({
                                width: "100%",
                                minimumCountSelected: 0,
                                maxHeight: "auto",
                                selectAll: !1,
                                animate: "slide",
                                formatAllSelected: function e(a) {
                                    return "".concat(t, " <i>(All)</i>");
                                },
                                formatCountSelected: function e(a) {
                                    return "".concat(t, " <i>(").concat(a, ")</i>");
                                },
                                onOpen: function t() {
                                    e.next(".ms-parent").addClass("opened");
                                },
                                onClose: function t() {
                                    e.next(".ms-parent").removeClass("opened");
                                },
                                onClick: function t(a) {
                                    var r = e.data("filter-type"),
                                        l = e.multipleSelect("getSelects").join();
                                    (eo.selected[r] = l),
                                        a.selected
                                            ? (eo.total++, $(".js-filter-bar-input-tag[data-type='".concat(r, "'][data-order='").concat(a.value, "']")).removeClass("hide"))
                                            : (eo.total--, $(".js-filter-bar-input-tag[data-type='".concat(r, "'][data-order='").concat(a.value, "']")).addClass("hide")),
                                        eo.total > 0 ? (eo.clearEl.removeClass("hide"), eo.totalEl.text(" (".concat(eo.total, ")"))) : (eo.clearEl.addClass("hide"), eo.totalEl.text(""));
                                    var n = $(".js-filter-bar-input-tag[data-type='".concat(r, "'][data-order='").concat(a.value, "']"))[0].innerText;
                                    eb(r, n, eu);
                                },
                            });
                        });
                    },
                },
            },
            ec = {
                el: $(".mobile-popup-selection"),
                trigger: $(".js-mobile-popup-selection"),
                closeEls: $(".mobile-popup-selection__bg, .mobile-popup-selection__close"),
                init: function e() {
                    this.openEvent(), this.closeEvent();
                },
                openEvent: function e() {
                    var t = this;
                    this.trigger.on("click", function () {
                        var e = $(this).data("target-id");
                        780 > $(window).width() && t.open(void 0 !== e ? e : "");
                    });
                },
                closeEvent: function e() {
                    var t = this;
                    this.closeEls.on("click", function () {
                        t.close();
                    });
                },
                open: function e(t) {
                    t.length ? $(t).addClass("active") : this.el.addClass("active");
                },
                close: function e() {
                    this.el.removeClass("active");
                },
            };
        ec.trigger.length > 0 && ec.el.length;
        var ed = document.getElementById("gallerysolr").value,
            eu = parseInt(document.getElementById("load").value),
            eh = parseInt(document.getElementById("loadmore").value);
        function ef() {
            var e = window.location.href.split("/");
            return e[e.length - 1].split(".")[0].split("-").join(" ");
        }
        function em(e) {
            var t = "";
            window.matchMedia("(max-width: 767px)").matches, (t += e.getAttribute("data-side-filter-solr-key"));
            var a = new XMLHttpRequest();
            a.addEventListener("readystatechange", function () {
                if (4 === this.readyState) {
                    var a = JSON.parse(this.response);
                    0 == a.responseHeader.status && ep(a, e, t);
                }
            }),
                null != k
                    ? a.open("GET", ed + 'projecttype:"' + k + '"&fl=' + t + "&facet.field=" + t + "&facet=on&rows=100&facet.mincount=1")
                    : a.open("GET", ed + "*:*&fl=" + t + "&facet.field=" + t + "&facet=on&rows=100&facet.mincount=1"),
                a.send();
        }
        function ep(e, t, a) {
            var r = "",
                l = "",
                n = e.facet_counts.facet_fields[a];
            if (window.matchMedia("(max-width: 767px)").matches) {
                if (n.length > 0) {
                    if (null != document.getElementById("mob-" + a)) {
                        for (var s = 0; s < n.length; s += 2)
                            2 == n.length
                                ? (r += '<button class="btn btn--ghost btn--md btn-side" disabled data-type="type-' + a + '"  type="button" data-button-value="' + n[s] + '" data-order="' + s + '">' + n[s] + "</button>")
                                : (r += '<button class="btn btn--ghost btn--md btn-side" data-type="type-' + a + '"  type="button" data-button-value="' + n[s] + '" data-order="' + s + '">' + n[s] + "</button>");
                        document.getElementById("mob-" + a).innerHTML = r;
                    }
                    var o = document.getElementById("taglist");
                    if (null != o) {
                        for (var s = 0; s < n.length; s += 2)
                            l +=
                                '<div class="shop-sub-listing__tag-item filter-bar__tag-item hide js-filter-bar-input-tag" data-msidefilter-solr-key="' +
                                a +
                                '" data-order="' +
                                s +
                                '" data-type="type-' +
                                a +
                                '" data-value="' +
                                n[s] +
                                '"><div class="item-text js-filter-bar-tag" data-product-fiter="' +
                                n[s] +
                                '">' +
                                n[s] +
                                '</div><div class="item-close js-filter-bar-tag-close"></div> </div>';
                        o.innerHTML += l;
                    }
                } else document.getElementById("mob-" + a).parentElement.style.display = "none";
            } else if (n.length > 0) {
                if (null != document.getElementById(a)) {
                    for (var s = 0; s < n.length; s += 2) 2 == n.length ? (r += "<option value=" + s + " disabled selected><span>" + n[s] + "</span></option>") : (r += "<option value=" + s + "><span>" + n[s] + "</span></option>");
                    document.getElementById(a).innerHTML = r;
                }
                var o = document.getElementById("taglist");
                if (null != o) {
                    for (var s = 0; s < n.length; s += 2)
                        l +=
                            '<div class="shop-sub-listing__tag-item filter-bar__tag-item hide js-filter-bar-input-tag" data-msidefilter-solr-key="' +
                            a +
                            '" data-order="' +
                            s +
                            '" data-type="' +
                            a +
                            '"data-value="' +
                            n[s] +
                            '"><div class="item-text js-filter-bar-tag" data-product-fiter="' +
                            n[s] +
                            '">' +
                            n[s] +
                            '</div><div class="item-close js-filter-bar-tag-close"></div></div>';
                    o.innerHTML += l;
                }
            } else document.getElementById(a).parentElement.style.display = "none";
            $(".filter-bar__content-col select").multipleSelect("destroy"), eo.init();
        }
        function ev() {
            (e = ed + "identifier:gallery"), null != k && (e += ' AND projecttype:"' + k + '"');
            var e,
                t = document.getElementById("roomtype").value;
            null != t && (e += ' AND room:"' + t + '"');
            var a = new XMLHttpRequest();
            a.addEventListener("readystatechange", function () {
                if (4 === this.readyState) {
                    var e = JSON.parse(this.response);
                    if (0 == e.responseHeader.status) {
                        var e = e.grouped.title.groups;
                        eg(e, eu);
                    }
                }
            }),
                a.open("GET", e + "&rows=10000&group=true&group.field=title&sort=publishedDate desc"),
                a.send();
        }
        function eg(e, t) {
            var a = "",
                r = e;
            if (r.length > 0) {
                for (var l = 0; l < t; l++)
                    if (r[l]) {
                        var n,
                            s = r[l].doclist.docs[0];
                        n = s.featuredImg[0].includes("$$$")
                            ? '<img src="' + (n = s.featuredImg[0].split("$$$"))[0] + '.transform/bh-gallery-listing/image.webp" alt="' + n[1] + '"title="' + n[2] + '" class="gallery-room-img ">'
                            : '  <img src="' + s.featuredImg + '.transform/bh-gallery-listing/image.webp" class="gallery-room-img ">';
                        var o = document.querySelector(".gallery-heading-content").innerHTML,
                            c = "'" + s.title + "','Design Idea Step 2','" + o + "',''";
                        (a += '<a href="' + replacepagedomain(s.url) + '" onclick="designideastepTwo(' + c + ')" class="gallery-filter"> ' + n + '<h2 class="gl-filter-image-content">' + s.title + "</h2>"),
                            s.hasOwnProperty("degree_view") && "" != s.degree_view && (a += '<img src="/content/dam/asianpaintsbeautifulhomes/ap-beautiful-homes/360-icon.png" class="gallery-360-icon">'),
                            (a += ' <div class="gallery-filter__book-consultation"><span>Book Free Site Visit</span></div> </a > ');
                    }
                r.length <= t ? (document.getElementById("gallery_btn").style.display = "none") : (document.getElementById("gallery_btn").style.display = "inline"), (document.getElementById("gallerycards").innerHTML = a);
            } else (document.getElementById("gallery_btn").style.display = "none"), (document.getElementById("gallerycards").innerHTML = "No Results Found");
            lozad().observe(), eE();
        }
        function ey() {
            eb("", "", document.querySelectorAll(".gallery-filter").length + eh);
        }
        function e8(e) {
            return 0 === Object.keys(e).length;
        }
        function eb(e, t, a) {
            if (void 0 != a) var r = a;
            else var r = parseInt(document.getElementById("load").value);
            var l = {},
                n = document.querySelectorAll("[data-product-fiter]");
            if (0 != n.length) {
                for (var s = 0; s < n.length; s++)
                    if (!1 == n[s].parentElement.classList.contains("hide")) {
                        if (l.hasOwnProperty(n[s].parentElement.getAttribute("data-msidefilter-solr-key"))) {
                            if (null != l[n[s].parentElement.getAttribute("data-msidefilter-solr-key")] || "" != l[n[s].parentElement.getAttribute("data-msidefilter-solr-key")]) {
                                if (n[s].innerHTML.includes("%") && !n[s].innerHTML.includes("%25")) {
                                    var o = n[s].innerHTML.replaceAll("%", "***");
                                    l[n[s].parentElement.getAttribute("data-msidefilter-solr-key")] += "||" + o;
                                } else l[n[s].parentElement.getAttribute("data-msidefilter-solr-key")] += "||" + n[s].innerHTML;
                            }
                        } else if (n[s].innerHTML.includes("%")) {
                            var o = n[s].innerHTML.replaceAll("%", "***");
                            l[n[s].parentElement.getAttribute("data-msidefilter-solr-key")] = o;
                        } else l[n[s].parentElement.getAttribute("data-msidefilter-solr-key")] = n[s].innerHTML;
                    }
            }
            var c = "";
            !1 == e8(l)
                ? (Object.keys(l).forEach(function (e, t) {
                      if (l[e].includes("||")) {
                          (c += "AND"), (c += "(");
                          for (var a = l[e].split("||"), r = 0; r < a.length; r++)
                              if (r < a.length - 1) {
                                  var n,
                                      s = "[data-filter-type=" + e + "]";
                                  (c += '${key}:"${keys[p]}"' + (n = null != document.querySelector(s).getAttribute("data-oprator-attribute") ? document.querySelector(s).getAttribute("data-oprator-attribute") : " OR") + " ").includes(
                                      "%"
                                  ) && (c = c.replaceAll("%", "%25"));
                              } else c += '${key}:"${keys[p]}"';
                          c += ")";
                      } else c += 'AND ${key}: "${x[key]}"';
                  }),
                  (c = (c = c.replaceAll(" ", "%20")).replaceAll(":", "%3A")))
                : (c = c.replaceAll(":", "%3A")),
                c.includes("+") && (c = c.replaceAll("+", "%2B")),
                c.includes(" + ") && (c = c.replaceAll(" + ", "\\+\\")),
                c.includes("&nbsp;") && (c = c.replaceAll("&nbsp;", "%20")),
                c.includes("&amp;") && (c = c.replaceAll("&amp;", "%26")),
                c.includes("&") && (c = c.replaceAll("&", "%26")),
                c.includes("***") && (c = c.replaceAll("***", "%25")),
                null != k && (c += ' AND projecttype:"' + k + '"');
            var d = document.getElementById("roomtype").value;
            null != d && (c += ' AND room:"' + d + '"');
            var u = document.getElementById("filterval").value;
            null != u && "" != u && (c += ' AND filters:"' + u + '"');
            var h = [];
            if (0 != n.length) for (var s = 0; s < n.length; s++) !1 == n[s].parentElement.classList.contains("hide") && h.push(n[s].innerHTML);
            0 == h.length && sessionStorage.removeItem("Gallery_filter"),
                h.length > 0 && sessionStorage.setItem("Gallery_filter", h),
                null != document.querySelector(".left.gallery-filter-left") &&
                    (h.length > 0 ? ($(".left.gallery-filter-left").children().last()[0].innerText = " (" + h.length + ")") : ($(".left.gallery-filter-left").children().last()[0].innerText = " "));
            var f = new XMLHttpRequest();
            f.addEventListener("readystatechange", function () {
                if (4 === this.readyState) {
                    var e = JSON.parse(this.response);
                    0 == e.responseHeader.status && eg((e = e.grouped.title.groups), r);
                }
            }),
                f.open("GET", ed + "identifier:gallery " + c + "&rows=10000&group=true&group.field=title&sort=publishedDate desc"),
                f.send();
        }
        function c(e) {
            var t = RegExp("[\\?&]" + (e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")) + "=([^&#]*)").exec(location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
        }
        function ek(e) {
            if (window.matchMedia("(max-width: 767px)").matches) {
                var t = e.toLocaleLowerCase(),
                    a = $(".dialog-ssc-prod-list-filters .btn-side");
                t = e.includes(",") ? t.split(",") : e.toLocaleLowerCase();
                for (var r = 0; r < a.length; r++)
                    try {
                        if ("object" == typeof t) for (var l = 0; l < t.length; l++) t[l] == a[r].innerHTML.toLowerCase() && $(a[r]).click();
                        else "string" == typeof t && t == a[r].innerHTML.toLowerCase() && $(a[r]).click();
                    } catch (n) {}
            } else {
                var t = e.toLocaleLowerCase(),
                    a = $(".ms-drop.bottom ul li"),
                    s = [],
                    o = [];
                t = e.includes(",") ? t.split(",") : e.toLocaleLowerCase();
                for (var r = 0; r < a.length; r++)
                    try {
                        a[r].childNodes[1].childNodes[1] && (s.push(a[r].innerText.trim().toLowerCase()), o.push(a[r].childNodes[1].childNodes[1]));
                    } catch (c) {}
                s.forEach(function (e, a) {
                    if ("object" == typeof t) for (var r = 0; r < t.length; r++) t[r] == e && $(o[a]).trigger("click");
                    else "string" == typeof t && t == e && $(o[a]).trigger("click");
                });
            }
        }
        function eE() {
            document.querySelectorAll("#gallerycards .gallery-filter__book-consultation").forEach((e) => {
                e.addEventListener("click", function (e) {
                    e.preventDefault(),
                        $("#dialog-personal-info").css({ display: "block" }),
                        $("#field_email").removeAttr("disabled"),
                        "block" == document.querySelector("#dialog-personal-info").style.display && $("body").css("overflow", "hidden");
                });
            });
        }
        function O(e, t) {
            var a;
            return function () {
                var r = Array.prototype.slice.call(arguments);
                clearTimeout(a),
                    (a = setTimeout(function () {
                        e.apply(this, r);
                    }, t));
            };
        }
        function P(e) {
            var t = document.querySelector("header").classList;
            if ((t.contains("search--expanded") || t.add("search--expanded"), "" != document.getElementById("field-search1").value)) {
                t = document.getElementById("field-search1").value;
                for (var a = t.replace(/\s+/g, " ").trim().split(" "), r = "", l = 0; l < a.length; l++) {
                    var n = a[l];
                    0 != l && (r += " OR "), (r += ' (title:"' + n + '"^1000 OR articleTitle:"' + n + '"^1000 OR description:"' + n + '"^500 OR main_category:"' + n + '"^200 OR sub_category:"' + n + '"^100 OR pagedata:"' + n + '"^1)');
                }
                if (
                    ((a = '(identifier:"products" OR identifier:"article") AND (' + r + ") &fl=id,url,title,featuredImg,identifier,sku_code,articleTitle&rows=7000&sort=score desc"),
                    console.log(a),
                    ("Backspace" != e.key || 8 != e.keyCode) && ("" == t || 3 > t.length || 50 < t.length))
                )
                    return !1;
                13 === e.keyCode && R(e), (y = (y = a).replaceAll(" ", "%20")), (b = document.getElementById("solrdomain").value), j();
            } else if ("" != document.getElementById("field-search__m").value) {
                for (l = 0, a = (t = document.getElementById("field-search__m").value).replace(/\s+/g, " ").trim().split(" "), r = ""; l < a.length; l++)
                    (n = a[l]),
                        0 != l && (r += " OR "),
                        (r += ' (title:"' + n + '"^1000 OR articleTitle:"' + n + '"^1000 OR description:"' + n + '"^500 OR main_category:"' + n + '"^200 OR sub_category:"' + n + '"^100 OR pagedata:"' + n + '"^1)');
                if (((a = '(identifier:"products" OR identifier:"article") AND (' + r + ") &fl=id,url,title,featuredImg,identifier,sku_code,articleTitle&rows=7000&sort=score desc"), console.log(a), "Backspace" != e.key || 8 != e.keyCode)) {
                    if ("" == t) {
                        for (t = 0, e = document.querySelectorAll(".searchresult"); t < e.length; t++) e[t].style.display = "block";
                        for (t = 0, e = document.querySelectorAll(".searchdynamic"); t < e.length; t++) e[t].style.display = "block";
                        return !1;
                    }
                    if (3 > t.length || 50 < t.length) return !1;
                }
                13 === e.keyCode && R(e), (y = (y = a).replaceAll(" ", "%20")), (b = document.getElementById("solrdomain").value), j();
            } else if ("" == document.getElementById("field-search1").value) {
                for (t = 0, e = document.querySelectorAll(".searchresult"); t < e.length; t++) e[t].style.display = "block";
                for (t = 0, e = document.querySelectorAll(".searchdynamic"); t < e.length; t++) e[t].style.display = "none";
                document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none";
            } else if ("" == document.getElementById("field-search__m").value) {
                for (t = 0, e = document.querySelectorAll(".searchresult"); t < e.length; t++) e[t].style.display = "block";
                for (t = 0, document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none", e = document.querySelectorAll(".searchdynamic"); t < e.length; t++) e[t].style.display = "none";
                document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "none";
            }
        }
        function j() {
            var e = new XMLHttpRequest();
            e.addEventListener("readystatechange", function () {
                if (4 === this.readyState) {
                    var e = JSON.parse(this.response);
                    0 < (e = e.response.docs).length && F(e);
                }
            }),
                e.open("GET", b + y),
                e.send();
        }
        function H(e, t, a) {
            "undefined" == e && (e = ""), trendingsearchClick(e, t);
        }
        function F(e) {
            if ("" != document.getElementById("field-search1").value) var t = document.getElementById("field-search1").value;
            "" != document.getElementById("field-search__m").value && (t = document.getElementById("field-search__m").value);
            for (var a = "", r = document.querySelectorAll(".searchresult"), l = 0; l < r.length; l++) r[l].style.display = "none";
            if (((e = z(e, ["identifier"])), console.log("groups", e), (r = 2), (!e.hasOwnProperty("products") || 3 > e.products.length) && (r = e.hasOwnProperty("products") ? 5 - e.products.length : 5), e.hasOwnProperty("products"))) {
                for (l = 0; l < e.products.length; l++)
                    if (3 > l) {
                        var n = e.products[l].featuredImg + "/" + e.products[l].sku_code + "_PLP.jpg",
                            s = replacepagedomain(e.products[l].url.replaceAll(/-+/g, "-")),
                            o = '"' + t + "','" + e.products[l].title + "','" + e.products[l].url + '"';
                        a +=
                            '<li> <a href="' +
                            s +
                            '" onclick="analyticsearch(' +
                            o +
                            ')"> <div class="header-m__search-section__thumb"><img class="lozad" data-src="' +
                            n +
                            '" alt="Beautifulhomes"></div><div class="header-m__search-section__desc">' +
                            e.products[l].title +
                            "</div> </a></li>";
                    }
            }
            if (e.hasOwnProperty("article"))
                for (l = 0; l < e.article.length; l++)
                    l < r &&
                        ((n = e.article[l].featuredImg),
                        (a +=
                            '<li> <a href="' +
                            (s = replacepagedomain(e.article[l].url.replaceAll(/-+/g, "-"))) +
                            '" onclick="analyticsearch(' +
                            (o = '"' + t + "','" + e.article[l].articleTitle + "','" + e.article[l].url + '"') +
                            ')"> <div class="header-m__search-section__thumb"><img class="lozad" data-src="' +
                            n +
                            '" alt="Beautifulhomes"></div><div class="header-m__search-section__desc">' +
                            e.article[l].articleTitle +
                            "</div> </a></li>"));
            for (e = 0, t = document.querySelectorAll(".searchdynamic"), document.querySelector(".searchdynamic").parentElement.parentElement.style.display = "block"; e < t.length; e++) (t[e].innerHTML = a), (t[e].style.display = "block");
            lozad().observe();
        }
        function R(e) {
            if ("" != document.getElementById("field-search1").value) {
                e = document.getElementById("field-search1").value;
                var t = "/content/asianpaintsbeautifulhomes/us/en";
                window.location.href.includes("https://www.beautifulhomes.asianpaints.com/")
                    ? (3 < e.length || 50 >= e.length) && (window.location.href = "https://www.beautifulhomes.asianpaints.com/search.html?searchterm=" + e)
                    : window.location.href.includes("https://betabeautifulhomes.asianpaints.com/")
                    ? (window.location.href = "https://betabeautifulhomes.asianpaints.com/search.html?searchterm=" + e)
                    : (3 < e.length || 50 >= e.length) && (window.location.href = replacepagedomain(t) + "/search.html?searchterm=" + e);
            } else
                "" != document.getElementById("field-search__m").value &&
                    (((e = document.getElementById("field-search__m").value), (t = "/content/asianpaintsbeautifulhomes/us/en"), window.location.href.includes("https://www.beautifulhomes.asianpaints.com/"))
                        ? (3 < e.length || 50 >= e.length) && (window.location.href = "https://www.beautifulhomes.asianpaints.com/search.html?searchterm=" + e)
                        : window.location.href.includes("https://betabeautifulhomes.asianpaints.com/")
                        ? (window.location.href = "https://betabeautifulhomes.asianpaints.com/search.html?searchterm=" + e)
                        : (3 < e.length || 50 >= e.length) && (window.location.href = replacepagedomain(t) + "/search.html?searchterm=" + e));
        }
        function z(e, t) {
            if (1 === (t = Array.from(t)).length) return U(e, t[0]);
            for (var a in (e = U(e, (property = t.shift())))) e[a] = z(e[a], Array.from(t));
            return e;
        }
        function U(e, t) {
            return e.reduce(function (e, a) {
                var r = a[t];
                return e[r] || (e[r] = []), e[r].push(a), e;
            }, {});
        }
        document.addEventListener("readystatechange", function (e) {
            if ("interactive" === e.target.readyState) {
                if ("" != c("type")) {
                    var t = c("type");
                    (k = t), (document.querySelector(".gallery-heading-content").innerHTML = t);
                }
                var a = document.querySelectorAll(".filter-bar__content-col  select"),
                    r = "";
                if (null != a) for (var l = 0; l < a.length; l++) em((r = a[l]));
                "" == c("room") && "" == c("style") && "" == c("colour") && sessionStorage.getItem("Gallery_filter"), c("type");
            }
            if ("complete" === e.target.readyState) {
                if ("" != c("room")) {
                    var t = c("room");
                    if (null == sessionStorage.getItem("Gallery_filter")) sessionStorage.setItem("Gallery_filter", t);
                    else {
                        var n = sessionStorage.getItem("Gallery_filter");
                        sessionStorage.setItem("Gallery_filter", n + "," + t);
                    }
                }
                if ("" != c("style")) {
                    var t = c("style");
                    if (null == sessionStorage.getItem("Gallery_filter")) sessionStorage.setItem("Gallery_filter", t);
                    else {
                        var n = sessionStorage.getItem("Gallery_filter");
                        sessionStorage.setItem("Gallery_filter", n + "," + t);
                    }
                }
                if ("" != c("colour")) {
                    var t = c("colour");
                    if (null == sessionStorage.getItem("Gallery_filter")) sessionStorage.setItem("Gallery_filter", t);
                    else {
                        var n = sessionStorage.getItem("Gallery_filter");
                        sessionStorage.setItem("Gallery_filter", n + "," + t);
                    }
                }
                if (null != sessionStorage.getItem("Gallery_filter")) {
                    var t = sessionStorage.getItem("Gallery_filter");
                    ek(t);
                }
            }
        }),
            2 == performance.navigation.type && location.reload(!0),
            document.addEventListener("DOMContentLoaded", function () {
                eE();
            }),
            $(".design-ideas-comp #gallerycards").slick({
                arrows: !0,
                infinite: !1,
                slidesToShow: 3.14,
                slidesToScroll: 1,
                lazyLoad: "progressive",
                responsive: [{ breakpoint: 992, settings: { arrows: !1, dots: !0, slidesToShow: 1.03 } }],
            }),
            document.querySelector("#field-search1").addEventListener(
                "keyup",
                O(function (e) {
                    P(e);
                }, 50)
            ),
            document.querySelector("#field-search__m").addEventListener(
                "keyup",
                O(function (e) {
                    P(e);
                }, 50)
            ),
            $("#field-search1").on("input", function () {
                (searchTerm = ($("#field-search1").val(), $("#field-search1").val().trim())), /^[A-Za-z0-9\s]+$/.test(searchTerm) || $(this).val("");
            }),
            $("#field-search__m").on("input", function () {
                (searchTerm = ($("#field-search__m").val(), $("#field-search__m").val().trim())), /^[A-Za-z0-9\s]+$/.test(searchTerm) || $(this).val("");
            }),
            document.addEventListener("DOMContentLoaded", function () {
                $("#field-search1").on("click", function () {
                    try {
                        searchInitiate("header");
                    } catch (e) {
                        console.log("Error in searchInit call" + e);
                    }
                });
            });
    }, 2e3),
    setTimeout(() => {
        var e = document.querySelectorAll(".bottom_navigation__items"),
            t = document.querySelectorAll(".bottom_nav__icon"),
            a = document.querySelector(".bottom_navigation_overlay"),
            r = document.querySelectorAll(".nav_grey_line");
        t.forEach(function (r) {
            r.addEventListener("click", function () {
                var l = r.dataset.navicon;
                e.forEach(function (e) {
                    l !== e.dataset.itemwrapper && e.classList.remove("showItem");
                }),
                    t.forEach(function (e) {
                        e.dataset.navicon !== l && e.classList.remove("active");
                    }),
                    e.forEach(function (e) {
                        l == e.dataset.itemwrapper && (e.classList.toggle("showItem"), r.classList.toggle("active"));
                    }),
                    r.classList.contains("active") ? ((a.style.display = "block"), document.body.classList.add("hide_overflow")) : ((a.style.display = "none"), document.body.classList.remove("hide_overflow"));
            });
        }),
            r.forEach(function (r) {
                r.addEventListener("click", function (r) {
                    r.stopPropagation(),
                        (a.style.display = "none"),
                        document.body.classList.remove("hide_overflow"),
                        t.forEach(function (e) {
                            e.classList.remove("active");
                        }),
                        e.forEach(function (e) {
                            e.classList.remove("showItem");
                        });
                });
            }),
            a &&
                a.addEventListener("click", function () {
                    (a.style.display = "none"),
                        document.body.classList.remove("hide_overflow"),
                        t.forEach(function (e) {
                            e.classList.remove("active");
                        }),
                        e.forEach(function (e) {
                            e.classList.remove("showItem");
                        });
                    let r = lozad();
                    r.observe();
                });
    }, 1e3);
