window.Modernizr = function (ad, ac, ab) {
    function O(f, e) {
        var h = f.charAt(0).toUpperCase() + f.substr(1),
            g = (f + " " + Q.join(h + " ") + h).split(" ");
        return C(g, e)
    }

    function C(e, c) {
        for (var f in e) {
            if (T[e[f]] !== ab) {
                return c == "pfx" ? e[f] : !0
            }
        }
        return !1
    }

    function D(d, c) {
        return !!~ ("" + d).indexOf(c)
    }

    function E(d, c) {
        return typeof d === c
    }

    function F(d, c) {
        return G(prefixes.join(d + ";") + (c || ""))
    }

    function G(b) {
        T.cssText = b
    }
    var aa = "2.0.6",
        Z = {},
        Y = !0,
        X = ac.documentElement,
        W = ac.head || ac.getElementsByTagName("head")[0],
        V = "modernizr",
        U = ac.createElement(V),
        T = U.style,
        S, R = Object.prototype.toString,
        Q = "Webkit Moz O ms Khtml".split(" "),
        P = {},
        N = {},
        M = {},
        K = [],
        J, I = {}.hasOwnProperty,
        H;
    !E(I, ab) && !E(I.call, ab) ? H = function (d, c) {
        return I.call(d, c)
    } : H = function (d, c) {
        return c in d && E(d.constructor.prototype[c], ab)
    }, P.history = function () {
        return !!ad.history && !! history.pushState
    }, P.backgroundsize = function () {
        return O("backgroundSize")
    }, P.video = function () {
        var b = ac.createElement("video"),
            h = !1;
        try {
            if (h = !! b.canPlayType) {
                h = new Boolean(h), h.ogg = b.canPlayType('video/ogg; codecs="theora"');
                var g = 'video/mp4; codecs="avc1.42E01E';
                h.h264 = b.canPlayType(g + '"') || b.canPlayType(g + ', mp4a.40.2"'), h.webm = b.canPlayType('video/webm; codecs="vp8, vorbis"')
            }
        } catch (f) {}
        return h
    }, P.audio = function () {
        var b = ac.createElement("audio"),
            f = !1;
        try {
            if (f = !! b.canPlayType) {
                f = new Boolean(f), f.ogg = b.canPlayType('audio/ogg; codecs="vorbis"'), f.mp3 = b.canPlayType("audio/mpeg;"), f.wav = b.canPlayType('audio/wav; codecs="1"'), f.m4a = b.canPlayType("audio/x-m4a;") || b.canPlayType("audio/aac;")
            }
        } catch (e) {}
        return f
    };
    for (var L in P) {
        H(P, L) && (J = L.toLowerCase(), Z[J] = P[L](), K.push((Z[J] ? "" : "no-") + J))
    }
    G(""), U = S = null, Z._version = aa, Z._domPrefixes = Q, Z.testProp = function (b) {
        return C([b])
    }, Z.testAllProps = O, X.className = X.className.replace(/\bno-js\b/, "") + (Y ? " js " + K.join(" ") : "");
    return Z
}(this, this.document); /*! jQuery v1.6.3 http://jquery.com/ | http://jquery.org/license */
(function (a, b) {
    function cu(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cr(a) {
        if (!cg[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ch || (ch = c.createElement("iframe"), ch.frameBorder = ch.width = ch.height = 0), b.appendChild(ch);
                if (!ci || !ch.createElement) {
                    ci = (ch.contentWindow || ch.contentDocument).document, ci.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), ci.close()
                }
                d = ci.createElement(a), ci.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ch)
            }
            cg[a] = e
        }
        return cg[a]
    }

    function cq(a, b) {
        var c = {};
        f.each(cm.concat.apply([], cm.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function cp() {
        cn = b
    }

    function co() {
        setTimeout(cp, 0);
        return cn = f.now()
    }

    function cf() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ce() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function b$(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) {
                for (h in a.converters) {
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[h])
                }
            }
            l = k, k = d[g];
            if (k === "*") {
                k = l
            } else {
                if (l !== "*" && l !== k) {
                    m = l + " " + k, n = e[m] || e["* " + k];
                    if (!n) {
                        p = b;
                        for (o in e) {
                            j = o.split(" ");
                            if (j[0] === l || j[0] === "*") {
                                p = e[j[1] + " " + k];
                                if (p) {
                                    o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                    break
                                }
                            }
                        }
                    }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
                }
            }
        }
        return c
    }

    function bZ(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) {
            i in d && (c[g[i]] = d[i])
        }
        while (f[0] === "*") {
            f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"))
        }
        if (h) {
            for (i in e) {
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
            }
        }
        if (f[0] in d) {
            j = f[0]
        } else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function bY(a, b, c, d) {
        if (f.isArray(b)) {
            f.each(b, function (b, e) {
                c || bA.test(a) ? d(a, e) : bY(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
            })
        } else {
            if (!c && b != null && typeof b == "object") {
                for (var e in b) {
                    bY(a + "[" + e + "]", b[e], c, d)
                }
            } else {
                d(a, b)
            }
        }
    }

    function bX(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) {
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d])
        }
        e && f.extend(!0, a, e)
    }

    function bW(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bP,
            l;
        for (; i < j && (k || !l); i++) {
            l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bW(a, c, d, e, l, g)))
        }(k || !l) && !g["*"] && (l = bW(a, c, d, e, "*", g));
        return l
    }

    function bV(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bL),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) {
                    h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
                }
            }
        }
    }

    function by(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? bt : bu;
        if (d > 0) {
            c !== "border" && f.each(e, function () {
                c || (d -= parseFloat(f.css(a, "padding" + this)) || 0), c === "margin" ? d += parseFloat(f.css(a, c + this)) || 0 : d -= parseFloat(f.css(a, "border" + this + "Width")) || 0
            });
            return d + "px"
        }
        d = bv(a, b, b);
        if (d < 0 || d == null) {
            d = a.style[b] || 0
        }
        d = parseFloat(d) || 0, c && f.each(e, function () {
            d += parseFloat(f.css(a, "padding" + this)) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + this + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + this)) || 0)
        });
        return d + "px"
    }

    function bl(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bd, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function bk(a) {
        f.nodeName(a, "input") ? bj(a) : "getElementsByTagName" in a && f.grep(a.getElementsByTagName("input"), bj)
    }

    function bj(a) {
        if (a.type === "checkbox" || a.type === "radio") {
            a.defaultChecked = a.checked
        }
    }

    function bi(a) {
        return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
    }

    function bh(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") {
                b.outerHTML = a.outerHTML
            } else {
                if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                    if (c === "option") {
                        b.selected = a.defaultSelected
                    } else {
                        if (c === "input" || c === "textarea") {
                            b.defaultValue = a.defaultValue
                        }
                    }
                } else {
                    a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)
                }
            }
            b.removeAttribute(f.expando)
        }
    }

    function bg(a, b) {
        if (b.nodeType === 1 && !! f.hasData(a)) {
            var c = f.expando,
                d = f.data(a),
                e = f.data(b, d);
            if (d = d[c]) {
                var g = d.events;
                e = e[c] = f.extend({}, d);
                if (g) {
                    delete e.handle, e.events = {};
                    for (var h in g) {
                        for (var i = 0, j = g[h].length; i < j; i++) {
                            f.event.add(b, h + (g[h][i].namespace ? "." : "") + g[h][i].namespace, g[h][i], g[h][i].data)
                        }
                    }
                }
            }
        }
    }

    function bf(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function V(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) {
            return f.grep(a, function (a, d) {
                var e = !! b.call(a, d, a);
                return e === c
            })
        }
        if (b.nodeType) {
            return f.grep(a, function (a, d) {
                return a === b === c
            })
        }
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (Q.test(b)) {
                return f.filter(b, d, !c)
            }
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function U(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function M(a, b) {
        return (a && a !== "*" ? a + "." : "") + b.replace(y, "`").replace(z, "&")
    }

    function L(a) {
        var b, c, d, e, g, h, i, j, k, l, m, n, o, p = [],
            q = [],
            r = f._data(this, "events");
        if (!(a.liveFired === this || !r || !r.live || a.target.disabled || a.button && a.type === "click")) {
            a.namespace && (n = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), a.liveFired = this;
            var s = r.live.slice(0);
            for (i = 0; i < s.length; i++) {
                g = s[i], g.origType.replace(w, "") === a.type ? q.push(g.selector) : s.splice(i--, 1)
            }
            e = f(a.target).closest(q, a.currentTarget);
            for (j = 0, k = e.length; j < k; j++) {
                m = e[j];
                for (i = 0; i < s.length; i++) {
                    g = s[i];
                    if (m.selector === g.selector && (!n || n.test(g.namespace)) && !m.elem.disabled) {
                        h = m.elem, d = null;
                        if (g.preType === "mouseenter" || g.preType === "mouseleave") {
                            a.type = g.preType, d = f(a.relatedTarget).closest(g.selector)[0], d && f.contains(h, d) && (d = h)
                        }(!d || d !== h) && p.push({
                            elem: h,
                            handleObj: g,
                            level: m.level
                        })
                    }
                }
            }
            for (j = 0, k = p.length; j < k; j++) {
                e = p[j];
                if (c && e.level > c) {
                    break
                }
                a.currentTarget = e.elem, a.data = e.handleObj.data, a.handleObj = e.handleObj, o = e.handleObj.origHandler.apply(e.elem, arguments);
                if (o === !1 || a.isPropagationStopped()) {
                    c = e.level, o === !1 && (b = !1);
                    if (a.isImmediatePropagationStopped()) {
                        break
                    }
                }
            }
            return b
        }
    }

    function J(a, c, d) {
        var e = f.extend({}, d[0]);
        e.type = a, e.originalEvent = {}, e.liveFired = b, f.event.handle.call(c, e), e.isDefaultPrevented() && d[0].preventDefault()
    }

    function D() {
        return !0
    }

    function C() {
        return !1
    }

    function m(a, c, d) {
        var e = c + "defer",
            g = c + "queue",
            h = c + "mark",
            i = f.data(a, e, b, !0);
        i && (d === "queue" || !f.data(a, g, b, !0)) && (d === "mark" || !f.data(a, h, b, !0)) && setTimeout(function () {
            !f.data(a, g, b, !0) && !f.data(a, h, b, !0) && (f.removeData(a, e, !0), i.resolve())
        }, 0)
    }

    function l(a) {
        for (var b in a) {
            if (b !== "toJSON") {
                return !1
            }
        }
        return !0
    }

    function k(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(j, "$1-$2").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNaN(d) ? i.test(d) ? f.parseJSON(d) : d : parseFloat(d)
                } catch (g) {}
                f.data(a, c, d)
            } else {
                d = b
            }
        }
        return d
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function () {
            function K() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(K, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function (a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /\d/,
                n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                o = /^[\],:{}\s]*$/,
                p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                r = /(?:^|:|,)(?:\s*\[)+/g,
                s = /(webkit)[ \/]([\w.]+)/,
                t = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                u = /(msie) ([\w.]+)/,
                v = /(mozilla)(?:.*? rv:([\w.]+))?/,
                w = /-([a-z]|[0-9])/ig,
                x = /^-ms-/,
                y = function (a, b) {
                    return (b + "").toUpperCase()
                },
                z = d.userAgent,
                A, B, C, D = Object.prototype.toString,
                E = Object.prototype.hasOwnProperty,
                F = Array.prototype.push,
                G = Array.prototype.slice,
                H = String.prototype.trim,
                I = Array.prototype.indexOf,
                J = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g, h, j, k;
                    if (!a) {
                        return this
                    }
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = n.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) {
                                    return f.find(a)
                                }
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) {
                        return f.ready(a)
                    }
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.6.3",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return G.call(this, 0)
                },
                get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? F.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function (a, b) {
                    return e.each(this, a, b)
                },
                ready: function (a) {
                    e.bindReady(), B.done(a);
                    return this
                },
                eq: function (a) {
                    return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: F,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++) {
                    if ((a = arguments[j]) != null) {
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) {
                                continue
                            }
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                    }
                }
                return i
            }, e.extend({
                noConflict: function (b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function (a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) {
                            return setTimeout(e.ready, 1)
                        }
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) {
                            return
                        }
                        B.resolveWith(c, [e]), e.fn.trigger && e(c).trigger("ready").unbind("ready")
                    }
                },
                bindReady: function () {
                    if (!B) {
                        B = e._Deferred();
                        if (c.readyState === "complete") {
                            return setTimeout(e.ready, 1)
                        }
                        if (c.addEventListener) {
                            c.addEventListener("DOMContentLoaded", C, !1), a.addEventListener("load", e.ready, !1)
                        } else {
                            if (c.attachEvent) {
                                c.attachEvent("onreadystatechange", C), a.attachEvent("onload", e.ready);
                                var b = !1;
                                try {
                                    b = a.frameElement == null
                                } catch (d) {}
                                c.documentElement.doScroll && b && K()
                            }
                        }
                    }
                },
                isFunction: function (a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray ||
                function (a) {
                    return e.type(a) === "array"
                },
                isWindow: function (a) {
                    return a && typeof a == "object" && "setInterval" in a
                },
                isNaN: function (a) {
                    return a == null || !m.test(a) || isNaN(a)
                },
                type: function (a) {
                    return a == null ? String(a) : J[D.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) {
                        return !1
                    }
                    try {
                        if (a.constructor && !E.call(a, "constructor") && !E.call(a.constructor.prototype, "isPrototypeOf")) {
                            return !1
                        }
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a) {}
                    return d === b || E.call(a, d)
                },
                isEmptyObject: function (a) {
                    for (var b in a) {
                        return !1
                    }
                    return !0
                },
                error: function (a) {
                    throw a
                },
                parseJSON: function (b) {
                    if (typeof b != "string" || !b) {
                        return null
                    }
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) {
                        return a.JSON.parse(b)
                    }
                    if (o.test(b.replace(p, "@").replace(q, "]").replace(r, ""))) {
                        return (new Function("return " + b))()
                    }
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function (c) {
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function () {},
                globalEval: function (b) {
                    b && j.test(b) && (a.execScript ||
                    function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (a) {
                    return a.replace(x, "ms-").replace(w, y)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function (a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a) {
                                if (c.apply(a[f], d) === !1) {
                                    break
                                }
                            }
                        } else {
                            for (; g < h;) {
                                if (c.apply(a[g++], d) === !1) {
                                    break
                                }
                            }
                        }
                    } else {
                        if (i) {
                            for (f in a) {
                                if (c.call(a[f], f, a[f]) === !1) {
                                    break
                                }
                            }
                        } else {
                            for (; g < h;) {
                                if (c.call(a[g], g, a[g++]) === !1) {
                                    break
                                }
                            }
                        }
                    }
                    return a
                },
                trim: H ?
                function (a) {
                    return a == null ? "" : H.call(a)
                } : function (a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? F.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function (a, b) {
                    if (!b) {
                        return -1
                    }
                    if (I) {
                        return I.call(b, a)
                    }
                    for (var c = 0, d = b.length; c < d; c++) {
                        if (b[c] === a) {
                            return c
                        }
                    }
                    return -1
                },
                merge: function (a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number") {
                        for (var f = c.length; e < f; e++) {
                            a[d++] = c[e]
                        }
                    } else {
                        while (c[e] !== b) {
                            a[d++] = c[e++]
                        }
                    }
                    a.length = d;
                    return a
                },
                grep: function (a, b, c) {
                    var d = [],
                        e;
                    c = !! c;
                    for (var f = 0, g = a.length; f < g; f++) {
                        e = !! b(a[f], f), c !== e && d.push(a[f])
                    }
                    return d
                },
                map: function (a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k) {
                        for (; i < j; i++) {
                            f = c(a[i], i, d), f != null && (h[h.length] = f)
                        }
                    } else {
                        for (g in a) {
                            f = c(a[g], g, d), f != null && (h[h.length] = f)
                        }
                    }
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function (a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) {
                        return b
                    }
                    var f = G.call(arguments, 2),
                        g = function () {
                            return a.apply(c, f.concat(G.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function (a, c, d, f, g, h) {
                    var i = a.length;
                    if (typeof c == "object") {
                        for (var j in c) {
                            e.access(a, j, c[j], f, g, d)
                        }
                        return a
                    }
                    if (d !== b) {
                        f = !h && f && e.isFunction(d);
                        for (var k = 0; k < i; k++) {
                            g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h)
                        }
                        return a
                    }
                    return i ? g(a[0], c) : b
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = s.exec(a) || t.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && v.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                J["[object " + b + "]"] = b.toLowerCase()
            }), A = e.uaMatch(z), A.browser && (e.browser[A.browser] = !0, e.browser.version = A.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? C = function () {
                c.removeEventListener("DOMContentLoaded", C, !1), e.ready()
            } : c.attachEvent && (C = function () {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", C), e.ready())
            });
            return e
        }(),
        g = "done fail isResolved isRejected promise then always pipe".split(" "),
        h = [].slice;
    f.extend({
        _Deferred: function () {
            var a = [],
                b, c, d, e = {
                    done: function () {
                        if (!d) {
                            var c = arguments,
                                g, h, i, j, k;
                            b && (k = b, b = 0);
                            for (g = 0, h = c.length; g < h; g++) {
                                i = c[g], j = f.type(i), j === "array" ? e.done.apply(e, i) : j === "function" && a.push(i)
                            }
                            k && e.resolveWith(k[0], k[1])
                        }
                        return this
                    },
                    resolveWith: function (e, f) {
                        if (!d && !b && !c) {
                            f = f || [], c = 1;
                            try {
                                while (a[0]) {
                                    a.shift().apply(e, f)
                                }
                            } finally {
                                b = [e, f], c = 0
                            }
                        }
                        return this
                    },
                    resolve: function () {
                        e.resolveWith(this, arguments);
                        return this
                    },
                    isResolved: function () {
                        return !!c || !! b
                    },
                    cancel: function () {
                        d = 1, a = [];
                        return this
                    }
                };
            return e
        },
        Deferred: function (a) {
            var b = f._Deferred(),
                c = f._Deferred(),
                d;
            f.extend(b, {
                then: function (a, c) {
                    b.done(a).fail(c);
                    return this
                },
                always: function () {
                    return b.done.apply(b, arguments).fail.apply(this, arguments)
                },
                fail: c.done,
                rejectWith: c.resolveWith,
                reject: c.resolve,
                isRejected: c.isResolved,
                pipe: function (a, c) {
                    return f.Deferred(function (d) {
                        f.each({
                            done: [a, "resolve"],
                            fail: [c, "reject"]
                        }, function (a, c) {
                            var e = c[0],
                                g = c[1],
                                h;
                            f.isFunction(e) ? b[a](function () {
                                h = e.apply(this, arguments), h && f.isFunction(h.promise) ? h.promise().then(d.resolve, d.reject) : d[g + "With"](this === b ? d : this, [h])
                            }) : b[a](d[g])
                        })
                    }).promise()
                },
                promise: function (a) {
                    if (a == null) {
                        if (d) {
                            return d
                        }
                        d = a = {}
                    }
                    var c = g.length;
                    while (c--) {
                        a[g[c]] = b[g[c]]
                    }
                    return a
                }
            }), b.done(c.cancel).fail(b.cancel), delete b.cancel, a && a.call(b, b);
            return b
        },
        when: function (a) {
            function i(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? h.call(arguments, 0) : c, --e || g.resolveWith(g, h.call(b, 0))
                }
            }
            var b = arguments,
                c = 0,
                d = b.length,
                e = d,
                g = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred();
            if (d > 1) {
                for (; c < d; c++) {
                    b[c] && f.isFunction(b[c].promise) ? b[c].promise().then(i(c), g.reject) : --e
                }
                e || g.resolveWith(g, b)
            } else {
                g !== a && g.resolveWith(g, d ? [a] : [])
            }
            return g.promise()
        }
    }), f.support = function () {
        var a = c.createElement("div"),
            b = c.documentElement,
            d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
        a.setAttribute("className", "t"), a.innerHTML = "   <link><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type=checkbox>", d = a.getElementsByTagName("*"), e = a.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) {
            return {}
        }
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = a.getElementsByTagName("input")[0], k = {
            leadingWhitespace: a.firstChild.nodeType === 3,
            tbody: !a.getElementsByTagName("tbody").length,
            htmlSerialize: !! a.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(e.style.opacity),
            cssFloat: !! e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: a.className !== "t",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, i.checked = !0, k.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, k.optDisabled = !h.disabled;
        try {
            delete a.test
        } catch (v) {
            k.deleteExpando = !1
        }!a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function () {
            k.noCloneEvent = !1
        }), a.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), k.radioValue = i.value === "t", i.setAttribute("checked", "checked"), a.appendChild(i), l = c.createDocumentFragment(), l.appendChild(a.firstChild), k.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "", a.style.width = a.style.paddingLeft = "1px", m = c.getElementsByTagName("body")[0], o = c.createElement(m ? "div" : "body"), p = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, m && f.extend(p, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (t in p) {
            o.style[t] = p[t]
        }
        o.appendChild(a), n = m || b, n.insertBefore(o, n.firstChild), k.appendChecked = i.checked, k.boxModel = a.offsetWidth === 2, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = a.offsetWidth !== 2), a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", q = a.getElementsByTagName("td"), u = q[0].offsetHeight === 0, q[0].style.display = "", q[1].style.display = "none", k.reliableHiddenOffsets = u && q[0].offsetHeight === 0, a.innerHTML = "", c.defaultView && c.defaultView.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", a.appendChild(j), k.reliableMarginRight = (parseInt((c.defaultView.getComputedStyle(j, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0), o.innerHTML = "", n.removeChild(o);
        if (a.attachEvent) {
            for (t in {
                submit: 1,
                change: 1,
                focusin: 1
            }) {
                s = "on" + t, u = s in a, u || (a.setAttribute(s, "return;"), u = typeof a[s] == "function"), k[t + "Bubbles"] = u
            }
        }
        o = l = g = h = m = j = a = i = null;
        return k
    }(), f.boxModel = f.support.boxModel;
    var i = /^(?:\{.*\}|\[.*\])$/,
        j = /([a-z])([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !l(a)
        },
        data: function (a, c, d, e) {
            if ( !! f.acceptData(a)) {
                var g, h, i = f.expando,
                    j = typeof c == "string",
                    k = a.nodeType,
                    l = k ? f.cache : a,
                    m = k ? a[f.expando] : a[f.expando] && f.expando;
                if ((!m || e && m && l[m] && !l[m][i]) && j && d === b) {
                    return
                }
                m || (k ? a[f.expando] = m = ++f.uuid : m = f.expando), l[m] || (l[m] = {}, k || (l[m].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") {
                    e ? l[m][i] = f.extend(l[m][i], c) : l[m] = f.extend(l[m], c)
                }
                g = l[m], e && (g[i] || (g[i] = {}), g = g[i]), d !== b && (g[f.camelCase(c)] = d);
                if (c === "events" && !g[c]) {
                    return g[i] && g[i].events
                }
                j ? (h = g[c], h == null && (h = g[f.camelCase(c)])) : h = g;
                return h
            }
        },
        removeData: function (a, b, c) {
            if ( !! f.acceptData(a)) {
                var d, e = f.expando,
                    g = a.nodeType,
                    h = g ? f.cache : a,
                    i = g ? a[f.expando] : f.expando;
                if (!h[i]) {
                    return
                }
                if (b) {
                    d = c ? h[i][e] : h[i];
                    if (d) {
                        d[b] || (b = f.camelCase(b)), delete d[b];
                        if (!l(d)) {
                            return
                        }
                    }
                }
                if (c) {
                    delete h[i][e];
                    if (!l(h[i])) {
                        return
                    }
                }
                var j = h[i][e];
                f.support.deleteExpando || !h.setInterval ? delete h[i] : h[i] = null, j ? (h[i] = {}, g || (h[i].toJSON = f.noop), h[i][e] = j) : g && (f.support.deleteExpando ? delete a[f.expando] : a.removeAttribute ? a.removeAttribute(f.expando) : a[f.expando] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) {
                    return b !== !0 && a.getAttribute("classid") === b
                }
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    d = f.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var e = this[0].attributes,
                            g;
                        for (var h = 0, i = e.length; h < i; h++) {
                            g = e[h].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), k(this[0], g, d[g]))
                        }
                    }
                }
                return d
            }
            if (typeof a == "object") {
                return this.each(function () {
                    f.data(this, a)
                })
            }
            var j = a.split(".");
            j[1] = j[1] ? "." + j[1] : "";
            if (c === b) {
                d = this.triggerHandler("getData" + j[1] + "!", [j[0]]), d === b && this.length && (d = f.data(this[0], a), d = k(this[0], a, d));
                return d === b && j[1] ? this.data(j[0]) : d
            }
            return this.each(function () {
                var b = f(this),
                    d = [j[0], c];
                b.triggerHandler("setData" + j[1] + "!", d), f.data(this, a, c), b.triggerHandler("changeData" + j[1] + "!", d)
            })
        },
        removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, c) {
            a && (c = (c || "fx") + "mark", f.data(a, c, (f.data(a, c, b, !0) || 0) + 1, !0))
        },
        _unmark: function (a, c, d) {
            a !== !0 && (d = c, c = a, a = !1);
            if (c) {
                d = d || "fx";
                var e = d + "mark",
                    g = a ? 0 : (f.data(c, e, b, !0) || 1) - 1;
                g ? f.data(c, e, g, !0) : (f.removeData(c, e, !0), m(c, d, "mark"))
            }
        },
        queue: function (a, c, d) {
            if (a) {
                c = (c || "fx") + "queue";
                var e = f.data(a, c, b, !0);
                d && (!e || f.isArray(d) ? e = f.data(a, c, f.makeArray(d), !0) : e.push(d));
                return e || []
            }
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e;
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), d.call(a, function () {
                f.dequeue(a, b)
            })), c.length || (f.removeData(a, b + "queue", !0), m(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            typeof a != "string" && (c = a, a = "fx");
            if (c === b) {
                return f.queue(this[0], a)
            }
            return this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function () {
                var c = this;
                setTimeout(function () {
                    f.dequeue(c, b)
                }, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--) {
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f._Deferred(), !0)) {
                    h++, l.done(m)
                }
            }
            m();
            return d.promise()
        }
    });
    var n = /[\n\t\r]/g,
        o = /\s+/,
        p = /\r/g,
        q = /^(?:button|input)$/i,
        r = /^(?:button|input|object|select|textarea)$/i,
        s = /^a(?:rea)?$/i,
        t = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        u, v;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, a, b, !0, f.attr)
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return f.access(this, a, b, !0, f.prop)
        },
        removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).addClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string") {
                b = a.split(o);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) {
                        if (!e.className && b.length === 1) {
                            e.className = a
                        } else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++) {~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ")
                            }
                            e.className = f.trim(g)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(o);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) {
                        if (a) {
                            h = (" " + g.className + " ").replace(n, " ");
                            for (i = 0, j = c.length; i < j; i++) {
                                h = h.replace(" " + c[i] + " ", " ")
                            }
                            g.className = f.trim(h)
                        } else {
                            g.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) {
                return this.each(function (c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b)
                })
            }
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(o);
                    while (e = j[g++]) {
                        i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                    }
                } else {
                    if (c === "undefined" || c === "boolean") {
                        this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function (a) {
            var b = " " + a + " ";
            for (var c = 0, d = this.length; c < d; c++) {
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(n, " ").indexOf(b) > -1) {
                    return !0
                }
            }
            return !1
        },
        val: function (a) {
            var c, d, e = this[0];
            if (!arguments.length) {
                if (e) {
                    c = f.valHooks[e.nodeName.toLowerCase()] || f.valHooks[e.type];
                    if (c && "get" in c && (d = c.get(e, "value")) !== b) {
                        return d
                    }
                    d = e.value;
                    return typeof d == "string" ? d.replace(p, "") : d == null ? "" : d
                }
                return b
            }
            var g = f.isFunction(a);
            return this.each(function (d) {
                var e = f(this),
                    h;
                if (this.nodeType === 1) {
                    g ? h = a.call(this, d, e.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                        return a == null ? "" : a + ""
                    })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                    if (!c || !("set" in c) || c.set(this, h, "value") === b) {
                        this.value = h
                    }
                }
            })
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var b, c = a.selectedIndex,
                        d = [],
                        e = a.options,
                        g = a.type === "select-one";
                    if (c < 0) {
                        return null
                    }
                    for (var h = g ? c : 0, i = g ? c + 1 : e.length; h < i; h++) {
                        var j = e[h];
                        if (j.selected && (f.support.optDisabled ? !j.disabled : j.getAttribute("disabled") === null) && (!j.parentNode.disabled || !f.nodeName(j.parentNode, "optgroup"))) {
                            b = f(j).val();
                            if (g) {
                                return b
                            }
                            d.push(b)
                        }
                    }
                    if (g && !d.length && e.length) {
                        return f(e[c]).val()
                    }
                    return d
                },
                set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attrFix: {
            tabindex: "tabIndex"
        },
        attr: function (a, c, d, e) {
            var g = a.nodeType;
            if (!a || g === 3 || g === 8 || g === 2) {
                return b
            }
            if (e && c in f.attrFn) {
                return f(a)[c](d)
            }
            if (!("getAttribute" in a)) {
                return f.prop(a, c, d)
            }
            var h, i, j = g !== 1 || !f.isXMLDoc(a);
            j && (c = f.attrFix[c] || c, i = f.attrHooks[c], i || (t.test(c) ? i = v : u && (i = u)));
            if (d !== b) {
                if (d === null) {
                    f.removeAttr(a, c);
                    return b
                }
                if (i && "set" in i && j && (h = i.set(a, d, c)) !== b) {
                    return h
                }
                a.setAttribute(c, "" + d);
                return d
            }
            if (i && "get" in i && j && (h = i.get(a, c)) !== null) {
                return h
            }
            h = a.getAttribute(c);
            return h === null ? b : h
        },
        removeAttr: function (a, b) {
            var c;
            a.nodeType === 1 && (b = f.attrFix[b] || b, f.attr(a, b, ""), a.removeAttribute(b), t.test(b) && (c = f.propFix[b] || b) in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (q.test(a.nodeName) && a.parentNode) {
                        f.error("type property can't be changed")
                    } else {
                        if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type", b), c && (a.value = c);
                            return b
                        }
                    }
                }
            },
            value: {
                get: function (a, b) {
                    if (u && f.nodeName(a, "button")) {
                        return u.get(a, b)
                    }
                    return b in a ? a.value : null
                },
                set: function (a, b, c) {
                    if (u && f.nodeName(a, "button")) {
                        return u.set(a, b, c)
                    }
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e = a.nodeType;
            if (!a || e === 3 || e === 8 || e === 2) {
                return b
            }
            var g, h, i = e !== 1 || !f.isXMLDoc(a);
            i && (c = f.propFix[c] || c, h = f.propHooks[c]);
            return d !== b ? h && "set" in h && (g = h.set(a, d, c)) !== b ? g : a[c] = d : h && "get" in h && (g = h.get(a, c)) !== null ? g : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : r.test(a.nodeName) || s.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabIndex = f.propHooks.tabIndex, v = {
        get: function (a, c) {
            var d;
            return f.prop(a, c) === !0 || (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, f.support.getSetAttribute || (u = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && d.nodeValue !== "" ? d.nodeValue : b
        },
        set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    })), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) {
                    return a.checked = f.inArray(f(a).val(), b) >= 0
                }
            }
        })
    });
    var w = /\.(.*)$/,
        x = /^(?:textarea|input|select)$/i,
        y = /\./g,
        z = / /g,
        A = /[^\w\s.|`]/g,
        B = function (a) {
            return a.replace(A, "\\$&")
        };
    f.event = {
        add: function (a, c, d, e) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                if (d === !1) {
                    d = C
                } else {
                    if (!d) {
                        return
                    }
                }
                var g, h;
                d.handler && (g = d, d = g.handler), d.guid || (d.guid = f.guid++);
                var i = f._data(a);
                if (!i) {
                    return
                }
                var j = i.events,
                    k = i.handle;
                j || (i.events = j = {}), k || (i.handle = k = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.handle.apply(k.elem, arguments) : b
                }), k.elem = a, c = c.split(" ");
                var l, m = 0,
                    n;
                while (l = c[m++]) {
                    h = g ? f.extend({}, g) : {
                        handler: d,
                        data: e
                    }, l.indexOf(".") > -1 ? (n = l.split("."), l = n.shift(), h.namespace = n.slice(0).sort().join(".")) : (n = [], h.namespace = ""), h.type = l, h.guid || (h.guid = d.guid);
                    var o = j[l],
                        p = f.event.special[l] || {};
                    if (!o) {
                        o = j[l] = [];
                        if (!p.setup || p.setup.call(a, e, n, k) === !1) {
                            a.addEventListener ? a.addEventListener(l, k, !1) : a.attachEvent && a.attachEvent("on" + l, k)
                        }
                    }
                    p.add && (p.add.call(a, h), h.handler.guid || (h.handler.guid = d.guid)), o.push(h), f.event.global[l] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, c, d, e) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                d === !1 && (d = C);
                var g, h, i, j, k = 0,
                    l, m, n, o, p, q, r, s = f.hasData(a) && f._data(a),
                    t = s && s.events;
                if (!s || !t) {
                    return
                }
                c && c.type && (d = c.handler, c = c.type);
                if (!c || typeof c == "string" && c.charAt(0) === ".") {
                    c = c || "";
                    for (h in t) {
                        f.event.remove(a, h + c)
                    }
                    return
                }
                c = c.split(" ");
                while (h = c[k++]) {
                    r = h, q = null, l = h.indexOf(".") < 0, m = [], l || (m = h.split("."), h = m.shift(), n = new RegExp("(^|\\.)" + f.map(m.slice(0).sort(), B).join("\\.(?:.*\\.)?") + "(\\.|$)")), p = t[h];
                    if (!p) {
                        continue
                    }
                    if (!d) {
                        for (j = 0; j < p.length; j++) {
                            q = p[j];
                            if (l || n.test(q.namespace)) {
                                f.event.remove(a, r, q.handler, j), p.splice(j--, 1)
                            }
                        }
                        continue
                    }
                    o = f.event.special[h] || {};
                    for (j = e || 0; j < p.length; j++) {
                        q = p[j];
                        if (d.guid === q.guid) {
                            if (l || n.test(q.namespace)) {
                                e == null && p.splice(j--, 1), o.remove && o.remove.call(a, q)
                            }
                            if (e != null) {
                                break
                            }
                        }
                    }
                    if (p.length === 0 || e != null && p.length === 1) {
                        (!o.teardown || o.teardown.call(a, m) === !1) && f.removeEvent(a, h, s.handle), g = null, delete t[h]
                    }
                }
                if (f.isEmptyObject(t)) {
                    var u = s.handle;
                    u && (u.elem = null), delete s.events, delete s.handle, f.isEmptyObject(s) && f.removeData(a, b, !0)
                }
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, g) {
            var h = c.type || c,
                i = [],
                j;
            h.indexOf("!") >= 0 && (h = h.slice(0, -1), j = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
            if ( !! e && !f.event.customEvent[h] || !! f.event.global[h]) {
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.exclusive = j, c.namespace = i.join("."), c.namespace_re = new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)");
                if (g || !e) {
                    c.preventDefault(), c.stopPropagation()
                }
                if (!e) {
                    f.each(f.cache, function () {
                        var a = f.expando,
                            b = this[a];
                        b && b.events && b.events[h] && f.event.trigger(c, d, b.handle.elem)
                    });
                    return
                }
                if (e.nodeType === 3 || e.nodeType === 8) {
                    return
                }
                c.result = b, c.target = e, d = d != null ? f.makeArray(d) : [], d.unshift(c);
                var k = e,
                    l = h.indexOf(":") < 0 ? "on" + h : "";
                do {
                    var m = f._data(k, "handle");
                    c.currentTarget = k, m && m.apply(k, d), l && f.acceptData(k) && k[l] && k[l].apply(k, d) === !1 && (c.result = !1, c.preventDefault()), k = k.parentNode || k.ownerDocument || k === c.target.ownerDocument && a
                } while (k && !c.isPropagationStopped());
                if (!c.isDefaultPrevented()) {
                    var n, o = f.event.special[h] || {};
                    if ((!o._default || o._default.call(e.ownerDocument, c) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e)) {
                        try {
                            l && e[h] && (n = e[l], n && (e[l] = null), f.event.triggered = h, e[h]())
                        } catch (p) {}
                        n && (e[l] = n), f.event.triggered = b
                    }
                }
                return c.result
            }
        },
        handle: function (c) {
            c = f.event.fix(c || a.event);
            var d = ((f._data(this, "events") || {})[c.type] || []).slice(0),
                e = !c.exclusive && !c.namespace,
                g = Array.prototype.slice.call(arguments, 0);
            g[0] = c, c.currentTarget = this;
            for (var h = 0, i = d.length; h < i; h++) {
                var j = d[h];
                if (e || c.namespace_re.test(j.namespace)) {
                    c.handler = j.handler, c.data = j.data, c.handleObj = j;
                    var k = j.handler.apply(this, g);
                    k !== b && (c.result = k, k === !1 && (c.preventDefault(), c.stopPropagation()));
                    if (c.isImmediatePropagationStopped()) {
                        break
                    }
                }
            }
            return c.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (a) {
            if (a[f.expando]) {
                return a
            }
            var d = a;
            a = f.Event(d);
            for (var e = this.props.length, g; e;) {
                g = this.props[--e], a[g] = d[g]
            }
            a.target || (a.target = a.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
            if (a.pageX == null && a.clientX != null) {
                var h = a.target.ownerDocument || c,
                    i = h.documentElement,
                    j = h.body;
                a.pageX = a.clientX + (i && i.scrollLeft || j && j.scrollLeft || 0) - (i && i.clientLeft || j && j.clientLeft || 0), a.pageY = a.clientY + (i && i.scrollTop || j && j.scrollTop || 0) - (i && i.clientTop || j && j.clientTop || 0)
            }
            a.which == null && (a.charCode != null || a.keyCode != null) && (a.which = a.charCode != null ? a.charCode : a.keyCode), !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey), !a.which && a.button !== b && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
            return a
        },
        guid: 100000000,
        proxy: f.proxy,
        special: {
            ready: {
                setup: f.bindReady,
                teardown: f.noop
            },
            live: {
                add: function (a) {
                    f.event.add(this, M(a.origType, a.selector), f.extend({}, a, {
                        handler: L,
                        guid: a.handler.guid
                    }))
                },
                remove: function (a) {
                    f.event.remove(this, M(a.origType, a.selector), a)
                }
            },
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }
    }, f.removeEvent = c.removeEventListener ?
    function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!this.preventDefault) {
            return new f.Event(a, b)
        }
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? D : C) : this.type = a, b && f.extend(this, b), this.timeStamp = f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = D;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = D;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = D, this.stopPropagation()
        },
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C
    };
    var E = function (a) {
            var b = a.relatedTarget,
                c = !1,
                d = a.type;
            a.type = a.data, b !== this && (b && (c = f.contains(this, b)), c || (f.event.handle.apply(this, arguments), a.type = d))
        },
        F = function (a) {
            a.type = a.data, f.event.handle.apply(this, arguments)
        };
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        f.event.special[a] = {
            setup: function (c) {
                f.event.add(this, b, c && c.selector ? F : E, a)
            },
            teardown: function (a) {
                f.event.remove(this, b, a && a.selector ? F : E)
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function (a, b) {
            if (!f.nodeName(this, "form")) {
                f.event.add(this, "click.specialSubmit", function (a) {
                    var b = a.target,
                        c = f.nodeName(b, "input") ? b.type : "";
                    (c === "submit" || c === "image") && f(b).closest("form").length && J("submit", this, arguments)
                }), f.event.add(this, "keypress.specialSubmit", function (a) {
                    var b = a.target,
                        c = f.nodeName(b, "input") ? b.type : "";
                    (c === "text" || c === "password") && f(b).closest("form").length && a.keyCode === 13 && J("submit", this, arguments)
                })
            } else {
                return !1
            }
        },
        teardown: function (a) {
            f.event.remove(this, ".specialSubmit")
        }
    });
    if (!f.support.changeBubbles) {
        var G, H = function (a) {
                var b = f.nodeName(a, "input") ? a.type : "",
                    c = a.value;
                b === "radio" || b === "checkbox" ? c = a.checked : b === "select-multiple" ? c = a.selectedIndex > -1 ? f.map(a.options, function (a) {
                    return a.selected
                }).join("-") : "" : f.nodeName(a, "select") && (c = a.selectedIndex);
                return c
            },
            I = function (c) {
                var d = c.target,
                    e, g;
                if ( !! x.test(d.nodeName) && !d.readOnly) {
                    e = f._data(d, "_change_data"), g = H(d), (c.type !== "focusout" || d.type !== "radio") && f._data(d, "_change_data", g);
                    if (e === b || g === e) {
                        return
                    }
                    if (e != null || g) {
                        c.type = "change", c.liveFired = b, f.event.trigger(c, arguments[1], d)
                    }
                }
            };
        f.event.special.change = {
            filters: {
                focusout: I,
                beforedeactivate: I,
                click: function (a) {
                    var b = a.target,
                        c = f.nodeName(b, "input") ? b.type : "";
                    (c === "radio" || c === "checkbox" || f.nodeName(b, "select")) && I.call(this, a)
                },
                keydown: function (a) {
                    var b = a.target,
                        c = f.nodeName(b, "input") ? b.type : "";
                    (a.keyCode === 13 && !f.nodeName(b, "textarea") || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && I.call(this, a)
                },
                beforeactivate: function (a) {
                    var b = a.target;
                    f._data(b, "_change_data", H(b))
                }
            },
            setup: function (a, b) {
                if (this.type === "file") {
                    return !1
                }
                for (var c in G) {
                    f.event.add(this, c + ".specialChange", G[c])
                }
                return x.test(this.nodeName)
            },
            teardown: function (a) {
                f.event.remove(this, ".specialChange");
                return x.test(this.nodeName)
            }
        }, G = f.event.special.change.filters, G.focus = G.beforeactivate
    }
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        function e(a) {
            var c = f.event.fix(a);
            c.type = b, c.originalEvent = {}, f.event.trigger(c, null, c.target), c.isDefaultPrevented() && a.preventDefault()
        }
        var d = 0;
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            },
            teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.each(["bind", "one"], function (a, c) {
        f.fn[c] = function (a, d, e) {
            var g;
            if (typeof a == "object") {
                for (var h in a) {
                    this[c](h, d, a[h], e)
                }
                return this
            }
            if (arguments.length === 2 || d === !1) {
                e = d, d = b
            }
            c === "one" ? (g = function (a) {
                f(this).unbind(a, g);
                return e.apply(this, arguments)
            }, g.guid = e.guid || f.guid++) : g = e;
            if (a === "unload" && c !== "one") {
                this.one(a, d, e)
            } else {
                for (var i = 0, j = this.length; i < j; i++) {
                    f.event.add(this[i], a, g, d)
                }
            }
            return this
        }
    }), f.fn.extend({
        unbind: function (a, b) {
            if (typeof a == "object" && !a.preventDefault) {
                for (var c in a) {
                    this.unbind(c, a[c])
                }
            } else {
                for (var d = 0, e = this.length; d < e; d++) {
                    f.event.remove(this[d], a, b)
                }
            }
            return this
        },
        delegate: function (a, b, c, d) {
            return this.live(b, c, d, a)
        },
        undelegate: function (a, b, c) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, c, a)
        },
        trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            if (this[0]) {
                return f.event.trigger(a, b, this[0], !0)
            }
        },
        toggle: function (a) {
            var b = arguments,
                c = a.guid || f.guid++,
                d = 0,
                e = function (c) {
                    var e = (f.data(this, "lastToggle" + a.guid) || 0) % d;
                    f.data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                    return b[e].apply(this, arguments) || !1
                };
            e.guid = c;
            while (d < b.length) {
                b[d++].guid = c
            }
            return this.click(e)
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var K = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    f.each(["live", "die"], function (a, c) {
        f.fn[c] = function (a, d, e, g) {
            var h, i = 0,
                j, k, l, m = g || this.selector,
                n = g ? this : f(this.context);
            if (typeof a == "object" && !a.preventDefault) {
                for (var o in a) {
                    n[c](o, d, a[o], m)
                }
                return this
            }
            if (c === "die" && !a && g && g.charAt(0) === ".") {
                n.unbind(g);
                return this
            }
            if (d === !1 || f.isFunction(d)) {
                e = d || C, d = b
            }
            a = (a || "").split(" ");
            while ((h = a[i++]) != null) {
                j = w.exec(h), k = "", j && (k = j[0], h = h.replace(w, ""));
                if (h === "hover") {
                    a.push("mouseenter" + k, "mouseleave" + k);
                    continue
                }
                l = h, K[h] ? (a.push(K[h] + k), h = h + k) : h = (K[h] || h) + k;
                if (c === "live") {
                    for (var p = 0, q = n.length; p < q; p++) {
                        f.event.add(n[p], "live." + M(h, m), {
                            data: d,
                            selector: m,
                            handler: e,
                            origType: h,
                            origHandler: e,
                            preType: l
                        })
                    }
                } else {
                    n.unbind("live." + M(h, m), e)
                }
            }
            return this
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0)
    }), function () {
        function u(a, b, c, d, e, f) {
            for (var g = 0, h = d.length; g < h; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    i = i[a];
                    while (i) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        if (i.nodeType === 1) {
                            f || (i.sizcache = c, i.sizset = g);
                            if (typeof b != "string") {
                                if (i === b) {
                                    j = !0;
                                    break
                                }
                            } else {
                                if (k.filter(b, [i]).length > 0) {
                                    j = i;
                                    break
                                }
                            }
                        }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }

        function t(a, b, c, d, e, f) {
            for (var g = 0, h = d.length; g < h; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    i = i[a];
                    while (i) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        i.nodeType === 1 && !f && (i.sizcache = c, i.sizset = g);
                        if (i.nodeName.toLowerCase() === b) {
                            j = i;
                            break
                        }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = 0,
            e = Object.prototype.toString,
            g = !1,
            h = !0,
            i = /\\/g,
            j = /\W/;
        [0, 0].sort(function () {
            h = !1;
            return 0
        });
        var k = function (b, d, f, g) {
                f = f || [], d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9) {
                    return []
                }
                if (!b || typeof b != "string") {
                    return f
                }
                var i, j, n, o, q, r, s, t, u = !0,
                    w = k.isXML(d),
                    x = [],
                    y = b;
                do {
                    a.exec(""), i = a.exec(y);
                    if (i) {
                        y = i[3], x.push(i[1]);
                        if (i[2]) {
                            o = i[3];
                            break
                        }
                    }
                } while (i);
                if (x.length > 1 && m.exec(b)) {
                    if (x.length === 2 && l.relative[x[0]]) {
                        j = v(x[0] + x[1], d)
                    } else {
                        j = l.relative[x[0]] ? [d] : k(x.shift(), d);
                        while (x.length) {
                            b = x.shift(), l.relative[b] && (b += x.shift()), j = v(b, j)
                        }
                    }
                } else {
                    !g && x.length > 1 && d.nodeType === 9 && !w && l.match.ID.test(x[0]) && !l.match.ID.test(x[x.length - 1]) && (q = k.find(x.shift(), d, w), d = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]);
                    if (d) {
                        q = g ? {
                            expr: x.pop(),
                            set: p(g)
                        } : k.find(x.pop(), x.length === 1 && (x[0] === "~" || x[0] === "+") && d.parentNode ? d.parentNode : d, w), j = q.expr ? k.filter(q.expr, q.set) : q.set, x.length > 0 ? n = p(j) : u = !1;
                        while (x.length) {
                            r = x.pop(), s = r, l.relative[r] ? s = x.pop() : r = "", s == null && (s = d), l.relative[r](n, s, w)
                        }
                    } else {
                        n = x = []
                    }
                }
                n || (n = j), n || k.error(r || b);
                if (e.call(n) === "[object Array]") {
                    if (!u) {
                        f.push.apply(f, n)
                    } else {
                        if (d && d.nodeType === 1) {
                            for (t = 0; n[t] != null; t++) {
                                n[t] && (n[t] === !0 || n[t].nodeType === 1 && k.contains(d, n[t])) && f.push(j[t])
                            }
                        } else {
                            for (t = 0; n[t] != null; t++) {
                                n[t] && n[t].nodeType === 1 && f.push(j[t])
                            }
                        }
                    }
                } else {
                    p(n, f)
                }
                o && (k(o, h, f, g), k.uniqueSort(f));
                return f
            };
        k.uniqueSort = function (a) {
            if (r) {
                g = h, a.sort(r);
                if (g) {
                    for (var b = 1; b < a.length; b++) {
                        a[b] === a[b - 1] && a.splice(b--, 1)
                    }
                }
            }
            return a
        }, k.matches = function (a, b) {
            return k(a, null, null, b)
        }, k.matchesSelector = function (a, b) {
            return k(b, null, null, [a]).length > 0
        }, k.find = function (a, b, c) {
            var d;
            if (!a) {
                return []
            }
            for (var e = 0, f = l.order.length; e < f; e++) {
                var g, h = l.order[e];
                if (g = l.leftMatch[h].exec(a)) {
                    var j = g[1];
                    g.splice(1, 1);
                    if (j.substr(j.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(i, ""), d = l.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(l.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        }, k.filter = function (a, c, d, e) {
            var f, g, h = a,
                i = [],
                j = c,
                m = c && c[0] && k.isXML(c[0]);
            while (a && c.length) {
                for (var n in l.filter) {
                    if ((f = l.leftMatch[n].exec(a)) != null && f[2]) {
                        var o, p, q = l.filter[n],
                            r = f[1];
                        g = !1, f.splice(1, 1);
                        if (r.substr(r.length - 1) === "\\") {
                            continue
                        }
                        j === i && (i = []);
                        if (l.preFilter[n]) {
                            f = l.preFilter[n](f, j, d, i, e, m);
                            if (!f) {
                                g = o = !0
                            } else {
                                if (f === !0) {
                                    continue
                                }
                            }
                        }
                        if (f) {
                            for (var s = 0;
                            (p = j[s]) != null; s++) {
                                if (p) {
                                    o = q(p, f, s, j);
                                    var t = e ^ !! o;
                                    d && o != null ? t ? g = !0 : j[s] = !1 : t && (i.push(p), g = !0)
                                }
                            }
                        }
                        if (o !== b) {
                            d || (j = i), a = a.replace(l.match[n], "");
                            if (!g) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (a === h) {
                    if (g == null) {
                        k.error(a)
                    } else {
                        break
                    }
                }
                h = a
            }
            return j
        }, k.error = function (a) {
            throw "Syntax error, unrecognized expression: " + a
        };
        var l = k.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (a) {
                    return a.getAttribute("href")
                },
                type: function (a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function (a, b) {
                    var c = typeof b == "string",
                        d = c && !j.test(b),
                        e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++) {
                        if (h = a[f]) {
                            while ((h = h.previousSibling) && h.nodeType !== 1) {}
                            a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                        }
                    }
                    e && k.filter(b, a, !0)
                },
                ">": function (a, b) {
                    var c, d = typeof b == "string",
                        e = 0,
                        f = a.length;
                    if (d && !j.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                        }
                    } else {
                        for (; e < f; e++) {
                            c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b)
                        }
                        d && k.filter(b, a, !0)
                    }
                },
                "": function (a, b, c) {
                    var e, f = d++,
                        g = u;
                    typeof b == "string" && !j.test(b) && (b = b.toLowerCase(), e = b, g = t), g("parentNode", b, f, a, e, c)
                },
                "~": function (a, b, c) {
                    var e, f = d++,
                        g = u;
                    typeof b == "string" && !j.test(b) && (b = b.toLowerCase(), e = b, g = t), g("previousSibling", b, f, a, e, c)
                }
            },
            find: {
                ID: function (a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                },
                NAME: function (a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [],
                            d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++) {
                            d[e].getAttribute("name") === a[1] && c.push(d[e])
                        }
                        return c.length === 0 ? null : c
                    }
                },
                TAG: function (a, b) {
                    if (typeof b.getElementsByTagName != "undefined") {
                        return b.getElementsByTagName(a[1])
                    }
                }
            },
            preFilter: {
                CLASS: function (a, b, c, d, e, f) {
                    a = " " + a[1].replace(i, "") + " ";
                    if (f) {
                        return a
                    }
                    for (var g = 0, h;
                    (h = b[g]) != null; g++) {
                        h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1))
                    }
                    return !1
                },
                ID: function (a) {
                    return a[1].replace(i, "")
                },
                TAG: function (a, b) {
                    return a[1].replace(i, "").toLowerCase()
                },
                CHILD: function (a) {
                    if (a[1] === "nth") {
                        a[2] || k.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                    } else {
                        a[2] && k.error(a[0])
                    }
                    a[0] = d++;
                    return a
                },
                ATTR: function (a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(i, "");
                    !f && l.attrMap[g] && (a[1] = l.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(i, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                },
                PSEUDO: function (b, c, d, e, f) {
                    if (b[1] === "not") {
                        if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) {
                            b[3] = k(b[3], null, null, c)
                        } else {
                            var g = k.filter(b[3], c, d, !0 ^ f);
                            d || e.push.apply(e, g);
                            return !1
                        }
                    } else {
                        if (l.match.POS.test(b[0]) || l.match.CHILD.test(b[0])) {
                            return !0
                        }
                    }
                    return b
                },
                POS: function (a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function (a) {
                    return a.disabled === !1 && a.type !== "hidden"
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    return a.checked === !0
                },
                selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                },
                parent: function (a) {
                    return !!a.firstChild
                },
                empty: function (a) {
                    return !a.firstChild
                },
                has: function (a, b, c) {
                    return !!k(c[3], a).length
                },
                header: function (a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function (a) {
                    var b = a.getAttribute("type"),
                        c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                },
                radio: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                },
                checkbox: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                },
                file: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                },
                password: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                },
                submit: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                },
                image: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                },
                reset: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                },
                input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus: function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (a, b) {
                    return b === 0
                },
                last: function (a, b, c, d) {
                    return b === d.length - 1
                },
                even: function (a, b) {
                    return b % 2 === 0
                },
                odd: function (a, b) {
                    return b % 2 === 1
                },
                lt: function (a, b, c) {
                    return b < c[3] - 0
                },
                gt: function (a, b, c) {
                    return b > c[3] - 0
                },
                nth: function (a, b, c) {
                    return c[3] - 0 === b
                },
                eq: function (a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function (a, b, c, d) {
                    var e = b[1],
                        f = l.filters[e];
                    if (f) {
                        return f(a, c, b, d)
                    }
                    if (e === "contains") {
                        return (a.textContent || a.innerText || k.getText([a]) || "").indexOf(b[3]) >= 0
                    }
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++) {
                            if (g[h] === a) {
                                return !1
                            }
                        }
                        return !0
                    }
                    k.error(e)
                },
                CHILD: function (a, b) {
                    var c = b[1],
                        d = a;
                    switch (c) {
                    case "only":
                    case "first":
                        while (d = d.previousSibling) {
                            if (d.nodeType === 1) {
                                return !1
                            }
                        }
                        if (c === "first") {
                            return !0
                        }
                        d = a;
                    case "last":
                        while (d = d.nextSibling) {
                            if (d.nodeType === 1) {
                                return !1
                            }
                        }
                        return !0;
                    case "nth":
                        var e = b[2],
                            f = b[3];
                        if (e === 1 && f === 0) {
                            return !0
                        }
                        var g = b[0],
                            h = a.parentNode;
                        if (h && (h.sizcache !== g || !a.nodeIndex)) {
                            var i = 0;
                            for (d = h.firstChild; d; d = d.nextSibling) {
                                d.nodeType === 1 && (d.nodeIndex = ++i)
                            }
                            h.sizcache = g
                        }
                        var j = a.nodeIndex - f;
                        return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
                    }
                },
                ID: function (a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                },
                TAG: function (a, b) {
                    return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                },
                CLASS: function (a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },
                ATTR: function (a, b) {
                    var c = b[1],
                        d = l.attrHandle[c] ? l.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                        e = d + "",
                        f = b[2],
                        g = b[4];
                    return d == null ? f === "!=" : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                },
                POS: function (a, b, c, d) {
                    var e = b[2],
                        f = l.setFilters[e];
                    if (f) {
                        return f(a, c, b, d)
                    }
                }
            }
        },
            m = l.match.POS,
            n = function (a, b) {
                return "\\" + (b - 0 + 1)
            };
        for (var o in l.match) {
            l.match[o] = new RegExp(l.match[o].source + /(?![^\[]*\])(?![^\(]*\))/.source), l.leftMatch[o] = new RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[o].source.replace(/\\(\d+)/g, n))
        }
        var p = function (a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (q) {
            p = function (a, b) {
                var c = 0,
                    d = b || [];
                if (e.call(a) === "[object Array]") {
                    Array.prototype.push.apply(d, a)
                } else {
                    if (typeof a.length == "number") {
                        for (var f = a.length; c < f; c++) {
                            d.push(a[c])
                        }
                    } else {
                        for (; a[c]; c++) {
                            d.push(a[c])
                        }
                    }
                }
                return d
            }
        }
        var r, s;
        c.documentElement.compareDocumentPosition ? r = function (a, b) {
            if (a === b) {
                g = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
                return a.compareDocumentPosition ? -1 : 1
            }
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (r = function (a, b) {
            if (a === b) {
                g = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) {
                return a.sourceIndex - b.sourceIndex
            }
            var c, d, e = [],
                f = [],
                h = a.parentNode,
                i = b.parentNode,
                j = h;
            if (h === i) {
                return s(a, b)
            }
            if (!h) {
                return -1
            }
            if (!i) {
                return 1
            }
            while (j) {
                e.unshift(j), j = j.parentNode
            }
            j = i;
            while (j) {
                f.unshift(j), j = j.parentNode
            }
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++) {
                if (e[k] !== f[k]) {
                    return s(e[k], f[k])
                }
            }
            return k === c ? s(a, f[k], -1) : s(e[k], b, 1)
        }, s = function (a, b, c) {
            if (a === b) {
                return c
            }
            var d = a.nextSibling;
            while (d) {
                if (d === b) {
                    return -1
                }
                d = d.nextSibling
            }
            return 1
        }), k.getText = function (a) {
            var b = "",
                c;
            for (var d = 0; a[d]; d++) {
                c = a[d], c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c.nodeType !== 8 && (b += k.getText(c.childNodes))
            }
            return b
        }, function () {
            var a = c.createElement("div"),
                d = "script" + (new Date).getTime(),
                e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (l.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, l.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (l.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) {
                        c[e].nodeType === 1 && d.push(c[e])
                    }
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (l.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll &&
        function () {
            var a = k,
                b = c.createElement("div"),
                d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                k = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !k.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) {
                                return p(e.getElementsByTagName(b), f)
                            }
                            if (h[2] && l.find.CLASS && e.getElementsByClassName) {
                                return p(e.getElementsByClassName(h[2]), f)
                            }
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) {
                                return p([e.body], f)
                            }
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) {
                                    return p([], f)
                                }
                                if (i.id === h[3]) {
                                    return p([i], f)
                                }
                            }
                            try {
                                return p(e.querySelectorAll(b), f)
                            } catch (j) {}
                        } else {
                            if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                var m = e,
                                    n = e.getAttribute("id"),
                                    o = n || d,
                                    q = e.parentNode,
                                    r = /^\s*[+~]/.test(b);
                                n ? o = o.replace(/'/g, "\\$&") : e.setAttribute("id", o), r && q && (e = e.parentNode);
                                try {
                                    if (!r || q) {
                                        return p(e.querySelectorAll("[id='" + o + "'] " + b), f)
                                    }
                                } catch (s) {} finally {
                                    n || m.removeAttribute("id")
                                }
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) {
                    k[e] = a[e]
                }
                b = null
            }
        }(), function () {
            var a = c.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"),
                    e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                k.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!k.isXML(a)) {
                        try {
                            if (e || !l.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                var f = b.call(a, c);
                                if (f || !d || a.document && a.document.nodeType !== 11) {
                                    return f
                                }
                            }
                        } catch (g) {}
                    }
                    return k(c, null, null, [a]).length > 0
                }
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) {
                    return
                }
                l.order.splice(1, 0, "CLASS"), l.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) {
                        return b.getElementsByClassName(a[1])
                    }
                }, a = null
            }
        }(), c.documentElement.contains ? k.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? k.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : k.contains = function () {
            return !1
        }, k.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var v = function (a, b) {
                var c, d = [],
                    e = "",
                    f = b.nodeType ? [b] : b;
                while (c = l.match.PSEUDO.exec(a)) {
                    e += c[0], a = a.replace(l.match.PSEUDO, "")
                }
                a = l.relative[a] ? a + "*" : a;
                for (var g = 0, h = f.length; g < h; g++) {
                    k(a, f[g], d)
                }
                return k.filter(e, d)
            };
        f.find = k, f.expr = k.selectors, f.expr[":"] = f.expr.filters, f.unique = k.uniqueSort, f.text = k.getText, f.isXMLDoc = k.isXML, f.contains = k.contains
    }();
    var N = /Until$/,
        O = /^(?:parents|prevUntil|prevAll)/,
        P = /,/,
        Q = /^.[^:#\[\.,]*$/,
        R = Array.prototype.slice,
        S = f.expr.match.POS,
        T = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var b = this,
                c, d;
            if (typeof a != "string") {
                return f(a).filter(function () {
                    for (c = 0, d = b.length; c < d; c++) {
                        if (f.contains(b[c], this)) {
                            return !0
                        }
                    }
                })
            }
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) {
                    for (h = g; h < e.length; h++) {
                        for (i = 0; i < g; i++) {
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return e
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++) {
                    if (f.contains(this, b[a])) {
                        return !0
                    }
                }
            })
        },
        not: function (a) {
            return this.pushStack(V(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(V(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a == "string" ? f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h, i, j = {},
                    k = 1;
                if (g && a.length) {
                    for (d = 0, e = a.length; d < e; d++) {
                        i = a[d], j[i] || (j[i] = S.test(i) ? f(i, b || this.context) : i)
                    }
                    while (g && g.ownerDocument && g !== b) {
                        for (i in j) {
                            h = j[i], (h.jquery ? h.index(g) > -1 : f(g).is(h)) && c.push({
                                selector: i,
                                elem: g,
                                level: k
                            })
                        }
                        g = g.parentNode, k++
                    }
                }
                return c
            }
            var l = S.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (l ? l.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) {
                        break
                    }
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function (a) {
            if (!a) {
                return this[0] && this[0].parentNode ? this.prevAll().length : -1
            }
            if (typeof a == "string") {
                return f.inArray(this[0], f(a))
            }
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(U(c[0]) || U(d[0]) ? d : f.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function (a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return f.sibling(a.parentNode.firstChild, a)
        },
        children: function (a) {
            return f.sibling(a.firstChild)
        },
        contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c),
                g = R.call(arguments);
            N.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !T[a] ? f.unique(e) : e, (this.length > 1 || P.test(d)) && O.test(a) && (e = e.reverse());
            return this.pushStack(e, a, g.join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function (a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) {
                g.nodeType === 1 && e.push(g), g = g[c]
            }
            return e
        },
        nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) {
                if (a.nodeType === 1 && ++e === b) {
                    break
                }
            }
            return a
        },
        sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) {
                a.nodeType === 1 && a !== b && c.push(a)
            }
            return c
        }
    });
    var W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|object|embed|option|style)/i,
        bb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bc = /\/(java|ecma)script/i,
        bd = /^\s*<!(?:\[CDATA\[|\-\-)/,
        be = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    be.optgroup = be.option, be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td, f.support.htmlSerialize || (be._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    var c = f(this);
                    c.text(a.call(this, b, c.text()))
                })
            }
            if (typeof a != "object" && a !== b) {
                return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }
            return f.text(this)
        },
        wrapAll: function (a) {
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).wrapInner(a.call(this, b))
                })
            }
            return this.each(function () {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            return this.each(function () {
                f(this).wrapAll(a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this)
                })
            }
            if (arguments.length) {
                var a = f(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                })
            }
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f(arguments[0]).toArray());
                return a
            }
        },
        remove: function (a, b) {
            for (var c = 0, d;
            (d = this[c]) != null; c++) {
                if (!a || f.filter(a, [d]).length) {
                    !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d)
                }
            }
            return this
        },
        empty: function () {
            for (var a = 0, b;
            (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) {
                    b.removeChild(b.firstChild)
                }
            }
            return this
        },
        clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        },
        html: function (a) {
            if (a === b) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null
            }
            if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !be[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) {
                        this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                    }
                } catch (e) {
                    this.empty().append(a)
                }
            } else {
                f.isFunction(a) ? this.each(function (b) {
                    var c = f(this);
                    c.html(a.call(this, b, c.html()))
                }) : this.empty().append(a)
            }
            return this
        },
        replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) {
                    return this.each(function (b) {
                        var c = f(this),
                            d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    })
                }
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bb.test(j)) {
                return this.each(function () {
                    f(this).domManip(a, c, d, !0)
                })
            }
            if (f.isFunction(j)) {
                return this.each(function (e) {
                    var g = f(this);
                    a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
                })
            }
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) {
                        d.call(c ? bf(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                    }
                }
                k.length && f.each(k, bl)
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i;
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof a[0] == "string" && a[0].length < 512 && i === c && a[0].charAt(0) === "<" && !ba.test(a[0]) && (f.support.checkClone || !bb.test(a[0])) && (g = !0, h = f.fragments[a[0]], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[a[0]] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d = a.cloneNode(!0),
                e, g, h;
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bh(a, d), e = bi(a), g = bi(d);
                for (h = 0; e[h]; ++h) {
                    g[h] && bh(e[h], g[h])
                }
            }
            if (b) {
                bg(a, d);
                if (c) {
                    e = bi(a), g = bi(d);
                    for (h = 0; e[h]; ++h) {
                        bg(e[h], g[h])
                    }
                }
            }
            e = g = null;
            return d
        },
        clean: function (a, b, d, e) {
            var g;
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [],
                i;
            for (var j = 0, k;
            (k = a[j]) != null; j++) {
                typeof k == "number" && (k += "");
                if (!k) {
                    continue
                }
                if (typeof k == "string") {
                    if (!_.test(k)) {
                        k = b.createTextNode(k)
                    } else {
                        k = k.replace(Y, "<$1></$2>");
                        var l = (Z.exec(k) || ["", ""])[1].toLowerCase(),
                            m = be[l] || be._default,
                            n = m[0],
                            o = b.createElement("div");
                        o.innerHTML = m[1] + k + m[2];
                        while (n--) {
                            o = o.lastChild
                        }
                        if (!f.support.tbody) {
                            var p = $.test(k),
                                q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                            for (i = q.length - 1; i >= 0; --i) {
                                f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                            }
                        }!f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes
                    }
                }
                var r;
                if (!f.support.appendChecked) {
                    if (k[0] && typeof (r = k.length) == "number") {
                        for (i = 0; i < r; i++) {
                            bk(k[i])
                        }
                    } else {
                        bk(k)
                    }
                }
                k.nodeType ? h.push(k) : h = f.merge(h, k)
            }
            if (d) {
                g = function (a) {
                    return !a.type || bc.test(a.type)
                };
                for (j = 0; h[j]; j++) {
                    if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) {
                        e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j])
                    } else {
                        if (h[j].nodeType === 1) {
                            var s = f.grep(h[j].getElementsByTagName("script"), g);
                            h.splice.apply(h, [j + 1, 0].concat(s))
                        }
                        d.appendChild(h[j])
                    }
                }
            }
            return h
        },
        cleanData: function (a) {
            var b, c, d = f.cache,
                e = f.expando,
                g = f.event.special,
                h = f.support.deleteExpando;
            for (var i = 0, j;
            (j = a[i]) != null; i++) {
                if (j.nodeName && f.noData[j.nodeName.toLowerCase()]) {
                    continue
                }
                c = j[f.expando];
                if (c) {
                    b = d[c] && d[c][e];
                    if (b && b.events) {
                        for (var k in b.events) {
                            g[k] ? f.event.remove(j, k) : f.removeEvent(j, k, b.handle)
                        }
                        b.handle && (b.handle.elem = null)
                    }
                    h ? delete j[f.expando] : j.removeAttribute && j.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bm = /alpha\([^)]*\)/i,
        bn = /opacity=([^)]*)/,
        bo = /([A-Z]|^ms)/g,
        bp = /^-?\d+(?:px)?$/i,
        bq = /^-?\d/,
        br = /^([\-+])=([\-+.\de]+)/,
        bs = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bt = ["Left", "Right"],
        bu = ["Top", "Bottom"],
        bv, bw, bx;
    f.fn.css = function (a, c) {
        if (arguments.length === 2 && c === b) {
            return this
        }
        return f.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bv(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if ( !! a && a.nodeType !== 3 && a.nodeType !== 8 && !! a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) {
                        return g
                    }
                    return j[c]
                }
                h = typeof d, h === "string" && (g = br.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) {
                    return
                }
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) {
                    try {
                        j[c] = d
                    } catch (l) {}
                }
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) {
                return e
            }
            if (bv) {
                return bv(a, c)
            }
        },
        swap: function (a, b, c) {
            var d = {};
            for (var e in b) {
                d[e] = a.style[e], a.style[e] = b[e]
            }
            c.call(a);
            for (e in b) {
                a.style[e] = d[e]
            }
        }
    }), f.curCSS = f.css, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0) {
                        return by(a, b, d)
                    }
                    f.swap(a, bs, function () {
                        e = by(a, b, d)
                    });
                    return e
                }
            },
            set: function (a, b) {
                if (!bp.test(b)) {
                    return b
                }
                b = parseFloat(b);
                if (b >= 0) {
                    return b + "px"
                }
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bn.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bm, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) {
                    return
                }
            }
            c.filter = bm.test(g) ? g.replace(bm, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                var c;
                f.swap(a, {
                    display: "inline-block"
                }, function () {
                    b ? c = bv(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }), c.defaultView && c.defaultView.getComputedStyle && (bw = function (a, c) {
        var d, e, g;
        c = c.replace(bo, "-$1").toLowerCase();
        if (!(e = a.ownerDocument.defaultView)) {
            return b
        }
        if (g = e.getComputedStyle(a, null)) {
            d = g.getPropertyValue(c), d === "" && !f.contains(a.ownerDocument.documentElement, a) && (d = f.style(a, c))
        }
        return d
    }), c.documentElement.currentStyle && (bx = function (a, b) {
        var c, d = a.currentStyle && a.currentStyle[b],
            e = a.runtimeStyle && a.runtimeStyle[b],
            f = a.style;
        !bp.test(d) && bq.test(d) && (c = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e));
        return d === "" ? "auto" : d
    }), bv = bw || bx, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    });
    var bz = /%20/g,
        bA = /\[\]$/,
        bB = /\r?\n/g,
        bC = /#.*$/,
        bD = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bE = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bF = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bG = /^(?:GET|HEAD)$/,
        bH = /^\/\//,
        bI = /\?/,
        bJ = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bK = /^(?:select|textarea)/i,
        bL = /\s+/,
        bM = /([?&])_=[^&]*/,
        bN = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bO = f.fn.load,
        bP = {},
        bQ = {},
        bR, bS, bT = ["*/"] + ["*"];
    try {
        bR = e.href
    } catch (bU) {
        bR = c.createElement("a"), bR.href = "", bR = bR.href
    }
    bS = bN.exec(bR.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bO) {
                return bO.apply(this, arguments)
            }
            if (!this.length) {
                return this
            }
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bJ, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function () {
            return f.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bK.test(this.nodeName) || bE.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bB, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bB, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.bind(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? bX(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), bX(a, b);
            return a
        },
        ajaxSettings: {
            url: bR,
            isLocal: bF.test(bS[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bT
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bV(bP),
        ajaxTransport: bV(bQ),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? bZ(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) {
                                f.lastModified[k] = y
                            }
                            if (z = v.getResponseHeader("Etag")) {
                                f.etag[k] = z
                            }
                        }
                        if (a === 304) {
                            w = "notmodified", o = !0
                        } else {
                            try {
                                r = b$(d, x), w = "success", o = !0
                            } catch (A) {
                                w = "parsererror", u = A
                            }
                        }
                    } else {
                        u = w;
                        if (!w || a) {
                            w = "error", a < 0 && (a = 0)
                        }
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.resolveWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f._Deferred(),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bD.exec(n)) {
                                    o[c[1].toLowerCase()] = c[2]
                                }
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function (a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.done, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2) {
                        for (b in a) {
                            j[b] = [j[b], a[b]]
                        }
                    } else {
                        b = a[v.status], v.then(b, b)
                    }
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bC, "").replace(bH, bS[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bL), d.crossDomain == null && (r = bN.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bS[1] && r[2] == bS[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bS[3] || (bS[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bW(bP, d, c, v);
            if (s === 2) {
                return !1
            }
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bG.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bI.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bM, "$1_=" + x);
                    d.url = y + (y === d.url ? (bI.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bT + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) {
                v.setRequestHeader(u, d.headers[u])
            }
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                v[u](d[u])
            }
            p = bW(bQ, d, c, v);
            if (!p) {
                w(-1, "No Transport")
            } else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    s < 2 ? w(-1, z) : f.error(z)
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [],
                e = function (a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) {
                f.each(a, function () {
                    e(this.name, this.value)
                })
            } else {
                for (var g in a) {
                    bY(g, a[g], c, e)
                }
            }
            return d.join("&").replace(bz, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var b_ = f.now(),
        ca = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + b_++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ca.test(b.url) || e && ca.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(ca, l), b.url === j && (e && (k = k.replace(ca, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) {
                            d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                        }
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var cb = a.ActiveXObject ?
    function () {
        for (var a in cd) {
            cd[a](0, 1)
        }
    } : !1, cc = 0, cd;
    f.ajaxSettings.xhr = a.ActiveXObject ?
    function () {
        return !this.isLocal && ce() || cf()
    } : ce, function (a) {
        f.extend(f.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(),
                        i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) {
                        for (j in c.xhrFields) {
                            h[j] = c.xhrFields[j]
                        }
                    }
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) {
                            h.setRequestHeader(j, e[j])
                        }
                    } catch (k) {}
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, cb && delete cd[i]);
                                if (e) {
                                    h.readyState !== 4 && h.abort()
                                } else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cc, cb && (cd || (cd = {}, f(a).unload(cb)), cd[i] = d), h.onreadystatechange = d)
                },
                abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var cg = {},
        ch, ci, cj = /^(?:toggle|show|hide)$/,
        ck = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        cl, cm = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        cn;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) {
                return this.animate(cq("show", 3), a, b, c)
            }
            for (var g = 0, h = this.length; g < h; g++) {
                d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cr(d.nodeName)))
            }
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") {
                        d.style.display = f._data(d, "olddisplay") || ""
                    }
                }
            }
            return this
        },
        hide: function (a, b, c) {
            if (a || a === 0) {
                return this.animate(cq("hide", 3), a, b, c)
            }
            for (var d = 0, e = this.length; d < e; d++) {
                if (this[d].style) {
                    var g = f.css(this[d], "display");
                    g !== "none" && !f._data(this[d], "olddisplay") && f._data(this[d], "olddisplay", g)
                }
            }
            for (d = 0; d < e; d++) {
                this[d].style && (this[d].style.display = "none")
            }
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cq("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) {
                return this.each(e.complete, [!1])
            }
            a = f.extend({}, a);
            return this[e.queue === !1 ? "each" : "queue"](function () {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) {
                        return b.complete.call(this)
                    }
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (f.support.inlineBlockNeedsLayout ? (j = cr(this.nodeName), j === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) {
                    k = new f.fx(this, b, i), h = a[i], cj.test(h) ? k[h === "toggle" ? d ? "show" : "hide" : h]() : (l = ck.exec(h), m = k.cur(), l ? (n = parseFloat(l[2]), o = l[3] || (f.cssNumber[i] ? "" : "px"), o !== "px" && (f.style(this, i, (n || 1) + o), m = (n || 1) / k.cur() * m, f.style(this, i, m + o)), l[1] && (n = (l[1] === "-=" ? -1 : 1) * n + m), k.custom(m, n, o)) : k.custom(m, h, ""))
                }
                return !0
            })
        },
        stop: function (a, b) {
            a && this.queue([]), this.each(function () {
                var a = f.timers,
                    c = a.length;
                b || f._unmark(!0, this);
                while (c--) {
                    a[c].elem === this && (b && a[c](!0), a.splice(c, 1))
                }
            }), b || this.dequeue();
            return this
        }
    }), f.each({
        slideDown: cq("show", 1),
        slideUp: cq("hide", 1),
        slideToggle: cq("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default, d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue !== !1 ? f.dequeue(this) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function (a, b, c, d) {
                return c + d * a
            },
            swing: function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + 0.5) * d + c
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function (a, b, c) {
            function g(a) {
                return d.step(a)
            }
            var d = this,
                e = f.fx;
            this.startTime = cn || co(), this.start = a, this.end = b, this.unit = c || this.unit || (f.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, g.elem = this.elem, g() && f.timers.push(g) && !cl && (cl = setInterval(e.tick, e.interval))
        },
        show: function () {
            this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b = cn || co(),
                c = !0,
                d = this.elem,
                e = this.options,
                g, h;
            if (a || b >= e.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), e.animatedProperties[this.prop] = !0;
                for (g in e.animatedProperties) {
                    e.animatedProperties[g] !== !0 && (c = !1)
                }
                if (c) {
                    e.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        d.style["overflow" + b] = e.overflow[a]
                    }), e.hide && f(d).hide();
                    if (e.hide || e.show) {
                        for (var i in e.animatedProperties) {
                            f.style(d, i, e.orig[i])
                        }
                    }
                    e.complete.call(d)
                }
                return !1
            }
            e.duration == Infinity ? this.now = b : (h = b - this.startTime, this.state = h / e.duration, this.pos = f.easing[e.animatedProperties[this.prop]](this.state, h, 0, 1, e.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            for (var a = f.timers, b = 0; b < a.length; ++b) {
                a[b]() || a.splice(b--, 1)
            }
            a.length || f.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(cl), cl = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cs = /^t(?:able|d|h)$/i,
        ct = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a) {
        var b = this[0],
            c;
        if (a) {
            return this.each(function (b) {
                f.offset.setOffset(this, a, b)
            })
        }
        if (!b || !b.ownerDocument) {
            return null
        }
        if (b === b.ownerDocument.body) {
            return f.offset.bodyOffset(b)
        }
        try {
            c = b.getBoundingClientRect()
        } catch (d) {}
        var e = b.ownerDocument,
            g = e.documentElement;
        if (!c || !f.contains(g, b)) {
            return c ? {
                top: c.top,
                left: c.left
            } : {
                top: 0,
                left: 0
            }
        }
        var h = e.body,
            i = cu(e),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = c.top + l - j,
            o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    } : f.fn.offset = function (a) {
        var b = this[0];
        if (a) {
            return this.each(function (b) {
                f.offset.setOffset(this, a, b)
            })
        }
        if (!b || !b.ownerDocument) {
            return null
        }
        if (b === b.ownerDocument.body) {
            return f.offset.bodyOffset(b)
        }
        f.offset.initialize();
        var c, d = b.offsetParent,
            e = b,
            g = b.ownerDocument,
            h = g.documentElement,
            i = g.body,
            j = g.defaultView,
            k = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l = b.offsetTop,
            m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.offset.supportsFixedPosition && k.position === "fixed") {
                break
            }
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.offset.doesNotAddBorder && (!f.offset.doesAddBorderForTableAndCells || !cs.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
        }
        if (k.position === "relative" || k.position === "static") {
            l += i.offsetTop, m += i.offsetLeft
        }
        f.offset.supportsFixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        }
    }, f.offset = {
        initialize: function () {
            var a = c.body,
                b = c.createElement("div"),
                d, e, g, h, i = parseFloat(f.css(a, "marginTop")) || 0,
                j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            f.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }), b.innerHTML = j, a.insertBefore(b, a.firstChild), d = b.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, this.doesNotAddBorder = e.offsetTop !== 5, this.doesAddBorderForTableAndCells = h.offsetTop === 5, e.style.position = "fixed", e.style.top = "20px", this.supportsFixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", this.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i, a.removeChild(b), f.offset.initialize = f.noop
        },
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.offset.initialize(), f.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {},
                l = {},
                m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) {
                return null
            }
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = ct.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !ct.test(a.nodeName) && f.css(a, "position") === "static") {
                    a = a.offsetParent
                }
                return a
            })
        }
    }), f.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        f.fn[d] = function (c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e) {
                    return null
                }
                g = cu(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function () {
                g = cu(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }), f.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function () {
            var a = this[0];
            return a && a.style ? parseFloat(f.css(a, d, "padding")) : null
        }, f.fn["outer" + c] = function (a) {
            var b = this[0];
            return b && b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : null
        }, f.fn[d] = function (a) {
            var e = this[0];
            if (!e) {
                return a == null ? null : this
            }
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    var c = f(this);
                    c[d](a.call(this, b, c[d]()))
                })
            }
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c],
                    h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9) {
                return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c])
            }
            if (a === b) {
                var i = f.css(e, d),
                    j = parseFloat(i);
                return f.isNaN(j) ? i : j
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), a.jQuery = a.$ = f
})(window);
(function (v) {
    var u = "0.3.2",
        t = "hasOwnProperty",
        s = /[\.\/]/,
        r = "*",
        q = function () {},
        p = function (d, c) {
            return d - c
        },
        o, n, m = {
            n: {}
        },
        l = function (E, D) {
            var C = m,
                B = n,
                A = Array.prototype.slice.call(arguments, 2),
                z = l.listeners(E),
                y = 0,
                x = !1,
                w, k = [],
                j = {},
                h = [],
                g = [];
            o = E, n = 0;
            for (var G = 0, F = z.length; G < F; G++) {
                "zIndex" in z[G] && (k.push(z[G].zIndex), z[G].zIndex < 0 && (j[z[G].zIndex] = z[G]))
            }
            k.sort(p);
            while (k[y] < 0) {
                w = j[k[y++]], h.push(w.apply(D, A));
                if (n) {
                    n = B;
                    return h
                }
            }
            for (G = 0; G < F; G++) {
                w = z[G];
                if ("zIndex" in w) {
                    if (w.zIndex == k[y]) {
                        h.push(w.apply(D, A));
                        if (n) {
                            n = B;
                            return h
                        }
                        do {
                            y++, w = j[k[y]], w && h.push(w.apply(D, A));
                            if (n) {
                                n = B;
                                return h
                            }
                        } while (w)
                    } else {
                        j[w.zIndex] = w
                    }
                } else {
                    h.push(w.apply(D, A));
                    if (n) {
                        n = B;
                        return h
                    }
                }
            }
            n = B;
            return h.length ? h : null
        };
    l.listeners = function (F) {
        var E = F.split(s),
            D = m,
            C, B, A, z, y, x, w, j, e = [D],
            d = [];
        for (z = 0, y = E.length; z < y; z++) {
            j = [];
            for (x = 0, w = e.length; x < w; x++) {
                D = e[x].n, B = [D[E[z]], D[r]], A = 2;
                while (A--) {
                    C = B[A], C && (j.push(C), d = d.concat(C.f || []))
                }
            }
            e = j
        }
        return d
    }, l.on = function (f, d) {
        var x = f.split(s),
            w = m;
        for (var k = 0, j = x.length; k < j; k++) {
            w = w.n, !w[x[k]] && (w[x[k]] = {
                n: {}
            }), w = w[x[k]]
        }
        w.f = w.f || [];
        for (k = 0, j = w.f.length; k < j; k++) {
            if (w.f[k] == d) {
                return q
            }
        }
        w.f.push(d);
        return function (b) {
            +b == +b && (d.zIndex = +b)
        }
    }, l.stop = function () {
        n = 1
    }, l.nt = function (b) {
        if (b) {
            return (new RegExp("(?:\\.|\\/|^)" + b + "(?:\\.|\\/|$)")).test(o)
        }
        return o
    }, l.unbind = function (C, B) {
        var A = C.split(s),
            z, y, x, w = [m];
        for (var j = 0, e = A.length; j < e; j++) {
            for (var d = 0; d < w.length; d += x.length - 2) {
                x = [d, 1], z = w[d].n;
                if (A[j] != r) {
                    z[A[j]] && x.push(z[A[j]])
                } else {
                    for (y in z) {
                        z[t](y) && x.push(z[y])
                    }
                }
                w.splice.apply(w, x)
            }
        }
        for (j = 0, e = w.length; j < e; j++) {
            z = w[j];
            while (z.n) {
                if (B) {
                    if (z.f) {
                        for (d = 0, jj = z.f.length; d < jj; d++) {
                            if (z.f[d] == B) {
                                z.f.splice(d, 1);
                                break
                            }
                        }!z.f.length && delete z.f
                    }
                    for (y in z.n) {
                        if (z.n[t](y) && z.n[y].f) {
                            var c = z.n[y].f;
                            for (d = 0, jj = c.length; d < jj; d++) {
                                if (c[d] == B) {
                                    c.splice(d, 1);
                                    break
                                }
                            }!c.length && delete z.n[y].f
                        }
                    }
                } else {
                    delete z.f;
                    for (y in z.n) {
                        z.n[t](y) && z.n[y].f && delete z.n[y].f
                    }
                }
                z = z.n
            }
        }
    }, l.version = u, l.toString = function () {
        return "You are running Eve " + u
    }, typeof module != "undefined" && module.exports ? module.exports = l : v.eve = l
})(this), function () {
    function ad(bp, bo, bn, bm, bl, bk) {
        bn = cF(bn);
        var bj, bi, bh, bg = [],
            bf, be, bc, Z = bp.ms,
            X = {},
            V = {},
            T = {};
        if (bm) {
            for (N = 0, s = ak.length; N < s; N++) {
                var R = ak[N];
                if (R.el.id == bo.id && R.anim == bp) {
                    R.percent != bn ? (ak.splice(N, 1), bh = 1) : bi = R, bo.attr(R.totalOrigin);
                    break
                }
            }
        } else {
            bm = +V
        }
        for (var N = 0, s = bp.percents.length; N < s; N++) {
            if (bp.percents[N] == bn || bp.percents[N] > bm * bp.top) {
                bn = bp.percents[N], be = bp.percents[N - 1] || 0, Z = Z / bp.top * (bn - be), bf = bp.percents[N + 1], bj = bp.anim[bn];
                break
            }
            bm && bo.attr(bp.anim[bp.percents[N]])
        }
        if ( !! bj) {
            if (!bi) {
                for (attr in bj) {
                    if (bj[aR](attr)) {
                        if (cx[aR](attr) || bo.paper.customAttributes[aR](attr)) {
                            X[attr] = bo.attr(attr), X[attr] == null && (X[attr] = cz[attr]), V[attr] = bj[attr];
                            switch (cx[attr]) {
                            case c2:
                                T[attr] = (V[attr] - X[attr]) / Z;
                                break;
                            case "colour":
                                X[attr] = a2.getRGB(X[attr]);
                                var bd = a2.getRGB(V[attr]);
                                T[attr] = {
                                    r: (bd.r - X[attr].r) / Z,
                                    g: (bd.g - X[attr].g) / Z,
                                    b: (bd.b - X[attr].b) / Z
                                };
                                break;
                            case "path":
                                var bb = di(X[attr], V[attr]),
                                    ba = bb[1];
                                X[attr] = bb[0], T[attr] = [];
                                for (N = 0, s = X[attr].length; N < s; N++) {
                                    T[attr][N] = [0];
                                    for (var Y = 1, W = X[attr][N].length; Y < W; Y++) {
                                        T[attr][N][Y] = (ba[N][Y] - X[attr][N][Y]) / Z
                                    }
                                }
                                break;
                            case "transform":
                                var U = bo._,
                                    S = c8(U[attr], V[attr]);
                                if (S) {
                                    X[attr] = S.from, V[attr] = S.to, T[attr] = [], T[attr].real = !0;
                                    for (N = 0, s = X[attr].length; N < s; N++) {
                                        T[attr][N] = [X[attr][N][0]];
                                        for (Y = 1, W = X[attr][N].length; Y < W; Y++) {
                                            T[attr][N][Y] = (V[attr][N][Y] - X[attr][N][Y]) / Z
                                        }
                                    }
                                } else {
                                    var Q = bo.matrix || new c7,
                                        C = {
                                            _: {
                                                transform: U.transform
                                            },
                                            getBBox: function () {
                                                return bo.getBBox(1)
                                            }
                                        };
                                    X[attr] = [Q.a, Q.b, Q.c, Q.d, Q.e, Q.f], da(C, V[attr]), V[attr] = C._.transform, T[attr] = [(C.matrix.a - Q.a) / Z, (C.matrix.b - Q.b) / Z, (C.matrix.c - Q.c) / Z, (C.matrix.d - Q.d) / Z, (C.matrix.e - Q.e) / Z, (C.matrix.e - Q.f) / Z]
                                }
                                break;
                            case "csv":
                                var r = aA(bj[attr])[ay](aZ),
                                    n = aA(X[attr])[ay](aZ);
                                if (attr == "clip-rect") {
                                    X[attr] = n, T[attr] = [], N = n.length;
                                    while (N--) {
                                        T[attr][N] = (r[N] - X[attr][N]) / Z
                                    }
                                }
                                V[attr] = r;
                                break;
                            default:
                                r = [][aI](bj[attr]), n = [][aI](X[attr]), T[attr] = [], N = bo.paper.customAttributes[attr].length;
                                while (N--) {
                                    T[attr][N] = ((r[N] || 0) - (n[N] || 0)) / Z
                                }
                            }
                        }
                    }
                }
                var g = bj.easing,
                    c = a2.easing_formulas[g];
                if (!c) {
                    c = aA(g).match(cK);
                    if (c && c.length == 5) {
                        var a = c;
                        c = function (b) {
                            return af(b, +a[1], +a[2], +a[3], +a[4], Z)
                        }
                    } else {
                        c = cA
                    }
                }
                bc = bj.start || bp.start || +(new Date), R = {
                    anim: bp,
                    percent: bn,
                    timestamp: bc,
                    start: bc + (bp.del || 0),
                    status: 0,
                    initstatus: bm || 0,
                    stop: !1,
                    ms: Z,
                    easing: c,
                    from: X,
                    diff: T,
                    to: V,
                    el: bo,
                    callback: bj.callback,
                    prev: be,
                    next: bf,
                    repeat: bk || bp.times,
                    origin: bo.attr(),
                    totalOrigin: bl
                }, ak.push(R);
                if (bm && !bi && !bh) {
                    R.stop = !0, R.start = new Date - Z * bm;
                    if (ak.length == 1) {
                        return ah()
                    }
                }
                bh && (R.start = new Date - R.ms * bm), ak.length == 1 && ai(ah)
            } else {
                bi.initstatus = bm, bi.start = new Date - bi.ms * bm
            }
            eve("anim.start." + bo.id, bo, bp)
        }
    }

    function ae(g, f) {
        var k = [],
            j = {};
        this.ms = f, this.times = 1;
        if (g) {
            for (var h in g) {
                g[aR](h) && (j[cF(h)] = g[h], k.push(cF(h)))
            }
            k.sort(cE)
        }
        this.anim = j, this.top = k[k.length - 1], this.percents = k
    }

    function af(D, C, B, A, z, y) {
        function p(h, g) {
            var F, E, o, n, m, l;
            for (o = h, l = 0; l < 8; l++) {
                n = r(o) - h;
                if (aj(n) < g) {
                    return o
                }
                m = (3 * v * o + 2 * w) * o + x;
                if (aj(m) < 0.000001) {
                    break
                }
                o = o - n / m
            }
            F = 0, E = 1, o = h;
            if (o < F) {
                return F
            }
            if (o > E) {
                return E
            }
            while (F < E) {
                n = r(o);
                if (aj(n - h) < g) {
                    return o
                }
                h > n ? F = o : E = o, o = (E - F) / 2 + F
            }
            return o
        }

        function q(e, d) {
            var f = p(e, d);
            return ((s * f + t) * f + u) * f
        }

        function r(b) {
            return ((v * b + w) * b + x) * b
        }
        var x = 3 * C,
            w = 3 * (A - C) - x,
            v = 1 - x - w,
            u = 3 * B,
            t = 3 * (z - B) - u,
            s = 1 - u - t;
        return q(D, 1 / (200 * y))
    }

    function aC() {
        return this.x + aB + this.y + aB + this.width + " × " + this.height
    }

    function aE() {
        return this.x + aB + this.y
    }

    function c7(h, g, m, l, k, j) {
        h != null ? (this.a = +h, this.b = +g, this.c = +m, this.d = +l, this.e = +k, this.f = +j) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }

    function aV(g) {
        var f = [];
        for (var k = 0, j = g.length; j - 2 > k; k += 2) {
            var h = [{
                x: +g[k],
                y: +g[k + 1]
            }, {
                x: +g[k],
                y: +g[k + 1]
            }, {
                x: +g[k + 2],
                y: +g[k + 3]
            }, {
                x: +g[k + 4],
                y: +g[k + 5]
            }];
            j - 4 == k ? (h[0] = {
                x: +g[k - 2],
                y: +g[k - 1]
            }, h[3] = h[2]) : k && (h[0] = {
                x: +g[k - 2],
                y: +g[k - 1]
            }), f.push(["C", (-h[0].x + 6 * h[1].x + h[2].x) / 6, (-h[0].y + 6 * h[1].y + h[2].y) / 6, (h[1].x + 6 * h[2].x - h[3].x) / 6, (h[1].y + 6 * h[2].y - h[3].y) / 6, h[2].x, h[2].y])
        }
        return f
    }

    function aX() {
        return this.hex
    }

    function a1(f, e, h) {
        function g() {
            var d = Array.prototype.slice.call(arguments, 0),
                c = d.join("␀"),
                b = g.cache = g.cache || {},
                a = g.count = g.count || [];
            if (b[aR](c)) {
                a3(a, c);
                return h ? h(b[c]) : b[c]
            }
            a.length >= 1000 && delete b[a.shift()], a.push(c), b[c] = f[aJ](e, d);
            return h ? h(b[c]) : b[c]
        }
        return g
    }

    function a3(f, e) {
        for (var h = 0, g = f.length; h < g; h++) {
            if (f[h] === e) {
                return f.push(f.splice(h, 1)[0])
            }
        }
    }

    function a2(r) {
        if (a2.is(r, "function")) {
            return a0 ? r() : eve.on("DOMload", r)
        }
        if (a2.is(r, cY)) {
            var q = r,
                p = a2._engine.create[aJ](a2, q.splice(0, 3 + a2.is(q[0], c2))),
                o = p.set(),
                m = 0,
                g = q.length,
                d;
            for (; m < g; m++) {
                d = q[m] || {}, aW[aR](d.type) && o.push(p[d.type]().attr(d))
            }
            return o
        }
        var b = Array.prototype.slice.call(arguments, 0);
        if (a2.is(b[b.length - 1], "function")) {
            var a = b.pop();
            return a0 ? a.call(a2._engine.create[aJ](a2, b)) : eve.on("DOMload", function () {
                a.call(a2._engine.create[aJ](a2, b))
            })
        }
        return a2._engine.create[aJ](a2, arguments)
    }
    a2.version = "2.0.0", a2.eve = eve;
    var a0, aZ = /[, ]+/,
        aW = {
            circle: 1,
            rect: 1,
            path: 1,
            ellipse: 1,
            text: 1,
            image: 1
        },
        aU = /\{(\d+)\}/g,
        aT = "prototype",
        aR = "hasOwnProperty",
        aP = {
            doc: document,
            win: window
        },
        aN = {
            was: Object.prototype[aR].call(aP.win, "Raphael"),
            is: aP.win.Raphael
        },
        aM = function () {
            this.ca = this.customAttributes = {}
        },
        aL, aK = "appendChild",
        aJ = "apply",
        aI = "concat",
        aG = "createTouch" in aP.doc,
        aD = "",
        aB = " ",
        aA = String,
        ay = "split",
        aw = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [ay](aB),
        au = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        },
        ar = aA.prototype.toLowerCase,
        ap = Math,
        an = ap.max,
        al = ap.min,
        aj = ap.abs,
        c6 = ap.pow,
        c4 = ap.PI,
        c2 = "number",
        c0 = "string",
        cY = "array",
        cW = "toString",
        cU = "fill",
        cS = Object.prototype.toString,
        cQ = {},
        cP = "push",
        cO = a2._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
        cN = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
        cM = {
            NaN: 1,
            Infinity: 1,
            "-Infinity": 1
        },
        cK = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        cJ = ap.round,
        cH = "setAttribute",
        cF = parseFloat,
        cD = parseInt,
        cB = aA.prototype.toUpperCase,
        cz = a2._availableAttrs = {
            "arrow-end": "none",
            "arrow-start": "none",
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": "normal",
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            opacity: 1,
            path: "M0,0",
            r: 0,
            rx: 0,
            ry: 0,
            src: "",
            stroke: "#000",
            "stroke-dasharray": "",
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            title: "Raphael",
            transform: "",
            width: 0,
            x: 0,
            y: 0
        },
        cx = a2._availableAnimAttrs = {
            blur: c2,
            "clip-rect": "csv",
            cx: c2,
            cy: c2,
            fill: "colour",
            "fill-opacity": c2,
            "font-size": c2,
            height: c2,
            opacity: c2,
            path: "path",
            r: c2,
            rx: c2,
            ry: c2,
            stroke: "colour",
            "stroke-opacity": c2,
            "stroke-width": c2,
            transform: "transform",
            width: c2,
            x: c2,
            y: c2
        },
        cv = /\s*,\s*/,
        b8 = {
            hs: 1,
            rg: 1
        },
        b6 = /,?([achlmqrstvxz]),?/gi,
        b4 = /([achlmrqstvz])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?\s*,?\s*)+)/ig,
        b2 = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?\s*,?\s*)+)/ig,
        dq = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)\s*,?\s*/ig,
        a6 = a2._radial_gradient = /^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,
        cI = {},
        cG = function (d, c) {
            return d.key - c.key
        },
        cE = function (d, c) {
            return cF(d) - cF(c)
        },
        cC = function () {},
        cA = function (b) {
            return b
        },
        cy = a2._rectPath = function (g, f, k, j, h) {
            if (h) {
                return [["M", g + h, f], ["l", k - h * 2, 0], ["a", h, h, 0, 0, 1, h, h], ["l", 0, j - h * 2], ["a", h, h, 0, 0, 1, -h, h], ["l", h * 2 - k, 0], ["a", h, h, 0, 0, 1, -h, -h], ["l", 0, h * 2 - j], ["a", h, h, 0, 0, 1, h, -h], ["z"]]
            }
            return [["M", g, f], ["l", k, 0], ["l", 0, j], ["l", -k, 0], ["z"]]
        },
        cw = function (f, e, h, g) {
            g == null && (g = h);
            return [["M", f, e], ["m", 0, -g], ["a", h, g, 0, 1, 1, 0, 2 * g], ["a", h, g, 0, 1, 1, 0, -2 * g], ["z"]]
        },
        b9 = a2._getPath = {
            path: function (b) {
                return b.attr("path")
            },
            circle: function (d) {
                var c = d.attrs;
                return cw(c.cx, c.cy, c.r)
            },
            ellipse: function (d) {
                var c = d.attrs;
                return cw(c.cx, c.cy, c.rx, c.ry)
            },
            rect: function (d) {
                var c = d.attrs;
                return cy(c.x, c.y, c.width, c.height, c.r)
            },
            image: function (d) {
                var c = d.attrs;
                return cy(c.x, c.y, c.width, c.height)
            },
            text: function (d) {
                var c = d._getBBox();
                return cy(c.x, c.y, c.width, c.height)
            }
        },
        b7 = a2.mapPath = function (j, h) {
            if (!h) {
                return j
            }
            var o, n, m, l, k;
            j = di(j);
            for (m = 0, ii = j.length; m < ii; m++) {
                k = j[m];
                for (l = 1, jj = k.length; l < jj; l += 2) {
                    o = h.x(k[l], k[l + 1]), n = h.y(k[l], k[l + 1]), k[l] = o, k[l + 1] = n
                }
            }
            return j
        };
    a2._g = aP, a2.type = aP.win.SVGAngle || aP.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
    if (a2.type == "VML") {
        var b5 = aP.doc.createElement("div"),
            b3;
        b5.innerHTML = '<v:shape adj="1"/>', b3 = b5.firstChild, b3.style.behavior = "url(#default#VML)";
        if (!b3 || typeof b3.adj != "object") {
            return a2.type = aD
        }
        b5 = null
    }
    a2.svg = !(a2.vml = a2.type == "VML"), a2._Paper = aM, a2.fn = aL = aM.prototype = a2.prototype, a2._id = 0, a2._oid = 0, a2.is = function (d, c) {
        c = ar.call(c);
        if (c == "finite") {
            return !cM[aR](+d)
        }
        if (c == "array") {
            return d instanceof Array
        }
        return c == "null" && d === null || c == typeof d && d !== null || c == "object" && d === Object(d) || c == "array" && Array.isArray && Array.isArray(d) || cS.call(d).slice(8, -1).toLowerCase() == c
    }, a2.angle = function (a, p, o, n, m, l) {
        if (m == null) {
            var k = a - o,
                j = p - n;
            if (!k && !j) {
                return 0
            }
            return (180 + ap.atan2(-j, -k) * 180 / c4 + 360) % 360
        }
        return a2.angle(a, p, m, l) - a2.angle(o, n, m, l)
    }, a2.rad = function (b) {
        return b % 360 * c4 / 180
    }, a2.deg = function (b) {
        return b * 180 / c4 % 360
    }, a2.snapTo = function (a, k, j) {
        j = a2.is(j, "finite") ? j : 10;
        if (a2.is(a, cY)) {
            var h = a.length;
            while (h--) {
                if (aj(a[h] - k) <= j) {
                    return a[h]
                }
            }
        } else {
            a = +a;
            var g = k % a;
            if (g < j) {
                return k - g
            }
            if (g > a - j) {
                return k - g + a
            }
        }
        return k
    };
    var b1 = a2.createUUID = function (d, c) {
            return function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(d, c).toUpperCase()
            }
        }(/[xy]/g, function (e) {
            var d = ap.random() * 16 | 0,
                f = e == "x" ? d : d & 3 | 8;
            return f.toString(16)
        });
    a2.setWindow = function (a) {
        eve("setWindow", a2, aP.win, a), aP.win = a, aP.doc = aP.win.document, initWin && initWin(aP.win)
    };
    var b0 = function (a) {
            if (a2.vml) {
                var n = /^\s+|\s+$/g,
                    m;
                try {
                    var l = new ActiveXObject("htmlfile");
                    l.write("<body>"), l.close(), m = l.body
                } catch (k) {
                    m = createPopup().document.body
                }
                var j = m.createTextRange();
                b0 = a1(function (d) {
                    try {
                        m.style.color = aA(d).replace(n, aD);
                        var c = j.queryCommandValue("ForeColor");
                        c = (c & 255) << 16 | c & 65280 | (c & 16711680) >>> 16;
                        return "#" + ("000000" + c.toString(16)).slice(-6)
                    } catch (f) {
                        return "none"
                    }
                })
            } else {
                var h = aP.doc.createElement("i");
                h.title = "Raphaël Colour Picker", h.style.display = "none", aP.doc.body.appendChild(h), b0 = a1(function (b) {
                    h.style.color = b;
                    return aP.doc.defaultView.getComputedStyle(h, aD).getPropertyValue("color")
                })
            }
            return b0(a)
        },
        a9 = function () {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        },
        a8 = function () {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        },
        a7 = function () {
            return this.hex
        },
        a5 = function (a, h, g) {
            h == null && a2.is(a, "object") && "r" in a && "g" in a && "b" in a && (g = a.b, h = a.g, a = a.r);
            if (h == null && a2.is(a, c0)) {
                var f = a2.getRGB(a);
                a = f.r, h = f.g, g = f.b
            }
            if (a > 1 || h > 1 || g > 1) {
                a /= 255, h /= 255, g /= 255
            }
            return [a, h, g]
        },
        a4 = function (a, k, j, h) {
            a *= 255, k *= 255, j *= 255;
            var g = {
                r: a,
                g: k,
                b: j,
                hex: a2.rgb(a, k, j),
                toString: a7
            };
            a2.is(h, "finite") && (g.opacity = h);
            return g
        };
    a2.color = function (a) {
        var d;
        a2.is(a, "object") && "h" in a && "s" in a && "b" in a ? (d = a2.hsb2rgb(a), a.r = d.r, a.g = d.g, a.b = d.b, a.hex = d.hex) : a2.is(a, "object") && "h" in a && "s" in a && "l" in a ? (d = a2.hsl2rgb(a), a.r = d.r, a.g = d.g, a.b = d.b, a.hex = d.hex) : (a2.is(a, "string") && (a = a2.getRGB(a)), a2.is(a, "object") && "r" in a && "g" in a && "b" in a ? (d = a2.rgb2hsl(a), a.h = d.h, a.s = d.s, a.l = d.l, d = a2.rgb2hsb(a), a.v = d.b) : (a = {
            hex: "none"
        }, crl.r = a.g = a.b = a.h = a.s = a.v = a.l = -1)), a.toString = a7;
        return a
    }, a2.hsb2rgb = function (r, q, p, o) {
        this.is(r, "object") && "h" in r && "s" in r && "b" in r && (p = r.b, q = r.s, r = r.h, o = r.o), r *= 360;
        var n, m, l, k, j;
        r = r % 360 / 60, j = p * q, k = j * (1 - aj(r % 2 - 1)), n = m = l = p - j, r = ~~r, n += [j, k, 0, 0, k, j][r], m += [k, j, j, k, 0, 0][r], l += [0, 0, k, j, j, k][r];
        return a4(n, m, l, o)
    }, a2.hsl2rgb = function (r, q, p, o) {
        this.is(r, "object") && "h" in r && "s" in r && "l" in r && (p = r.l, q = r.s, r = r.h);
        if (r > 1 || q > 1 || p > 1) {
            r /= 360, q /= 100, p /= 100
        }
        r *= 360;
        var n, m, l, k, j;
        r = r % 360 / 60, j = 2 * q * (p < 0.5 ? p : 1 - p), k = j * (1 - aj(r % 2 - 1)), n = m = l = p - j / 2, r = ~~r, n += [j, k, 0, 0, k, j][r], m += [k, j, j, k, 0, 0][r], l += [0, 0, k, j, j, k][r];
        return a4(n, m, l, o)
    }, a2.rgb2hsb = function (j, h, o) {
        o = a5(j, h, o), j = o[0], h = o[1], o = o[2];
        var n, m, l, k;
        l = an(j, h, o), k = l - al(j, h, o), n = k == 0 ? null : l == j ? (h - o) / k : l == h ? (o - j) / k + 2 : (j - h) / k + 4, n = (n + 360) % 6 * 60 / 360, m = k == 0 ? 0 : k / l;
        return {
            h: n,
            s: m,
            b: l,
            toString: a9
        }
    }, a2.rgb2hsl = function (r, q, p) {
        p = a5(r, q, p), r = p[0], q = p[1], p = p[2];
        var o, n, m, l, k, j;
        l = an(r, q, p), k = al(r, q, p), j = l - k, o = j == 0 ? null : l == r ? (q - p) / j : l == q ? (p - r) / j + 2 : (r - q) / j + 4, o = (o + 360) % 6 * 60 / 360, m = (l + k) / 2, n = j == 0 ? 0 : m < 0.5 ? j / (2 * m) : j / (2 - 2 * m);
        return {
            h: o,
            s: n,
            l: m,
            toString: a8
        }
    }, a2._path2string = function () {
        return this.join(",").replace(b6, "$1")
    };
    var aY = a2._preload = function (e, d) {
            var f = aP.doc.createElement("img");
            f.style.cssText = "position:absolute;left:-9999em;top-9999em", f.onload = function () {
                d.call(this), this.onload = null, aP.doc.body.removeChild(this)
            }, f.onerror = function () {
                aP.doc.body.removeChild(this)
            }, aP.doc.body.appendChild(f), f.src = e
        };
    a2.getRGB = a1(function (r) {
        if (!r || !! ((r = aA(r)).indexOf("-") + 1)) {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: aX
            }
        }
        if (r == "none") {
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: aX
            }
        }!b8[aR](r.toLowerCase().substring(0, 2)) && r.charAt() != "#" && (r = b0(r));
        var q, p, o, n, m, l, g, a = r.match(cN);
        if (a) {
            a[2] && (n = cD(a[2].substring(5), 16), o = cD(a[2].substring(3, 5), 16), p = cD(a[2].substring(1, 3), 16)), a[3] && (n = cD((l = a[3].charAt(3)) + l, 16), o = cD((l = a[3].charAt(2)) + l, 16), p = cD((l = a[3].charAt(1)) + l, 16)), a[4] && (g = a[4][ay](cv), p = cF(g[0]), g[0].slice(-1) == "%" && (p *= 2.55), o = cF(g[1]), g[1].slice(-1) == "%" && (o *= 2.55), n = cF(g[2]), g[2].slice(-1) == "%" && (n *= 2.55), a[1].toLowerCase().slice(0, 4) == "rgba" && (m = cF(g[3])), g[3] && g[3].slice(-1) == "%" && (m /= 100));
            if (a[5]) {
                g = a[5][ay](cv), p = cF(g[0]), g[0].slice(-1) == "%" && (p *= 2.55), o = cF(g[1]), g[1].slice(-1) == "%" && (o *= 2.55), n = cF(g[2]), g[2].slice(-1) == "%" && (n *= 2.55), (g[0].slice(-3) == "deg" || g[0].slice(-1) == "°") && (p /= 360), a[1].toLowerCase().slice(0, 4) == "hsba" && (m = cF(g[3])), g[3] && g[3].slice(-1) == "%" && (m /= 100);
                return a2.hsb2rgb(p, o, n, m)
            }
            if (a[6]) {
                g = a[6][ay](cv), p = cF(g[0]), g[0].slice(-1) == "%" && (p *= 2.55), o = cF(g[1]), g[1].slice(-1) == "%" && (o *= 2.55), n = cF(g[2]), g[2].slice(-1) == "%" && (n *= 2.55), (g[0].slice(-3) == "deg" || g[0].slice(-1) == "°") && (p /= 360), a[1].toLowerCase().slice(0, 4) == "hsla" && (m = cF(g[3])), g[3] && g[3].slice(-1) == "%" && (m /= 100);
                return a2.hsl2rgb(p, o, n, m)
            }
            a = {
                r: p,
                g: o,
                b: n,
                toString: aX
            }, a.hex = "#" + (16777216 | n | o << 8 | p << 16).toString(16).slice(1), a2.is(m, "finite") && (a.opacity = m);
            return a
        }
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: aX
        }
    }, a2), a2.hsb = a1(function (a, f, e) {
        return a2.hsb2rgb(a, f, e).hex
    }), a2.hsl = a1(function (a, f, e) {
        return a2.hsl2rgb(a, f, e).hex
    }), a2.rgb = a1(function (e, d, f) {
        return "#" + (16777216 | f | d << 8 | e << 16).toString(16).slice(1)
    }), a2.getColor = function (e) {
        var d = this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: e || 0.75
        },
            f = this.hsb2rgb(d.h, d.s, d.b);
        d.h += 0.075, d.h > 1 && (d.h = 0, d.s -= 0.2, d.s <= 0 && (this.getColor.start = {
            h: 0,
            s: 1,
            b: d.b
        }));
        return f.hex
    }, a2.getColor.reset = function () {
        delete this.start
    }, a2.parsePathString = a1(function (a) {
        if (!a) {
            return null
        }
        var f = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        },
            e = [];
        a2.is(a, cY) && a2.is(a[0], cY) && (e = aQ(a)), e.length || aA(a).replace(b4, function (d, c, k) {
            var j = [],
                h = c.toLowerCase();
            k.replace(dq, function (l, g) {
                g && j.push(+g)
            }), h == "m" && j.length > 2 && (e.push([c][aI](j.splice(0, 2))), h = "l", c = c == "m" ? "l" : "L");
            if (h == "r") {
                e.push([c][aI](j))
            } else {
                while (j.length >= f[h]) {
                    e.push([c][aI](j.splice(0, f[h])));
                    if (!f[h]) {
                        break
                    }
                }
            }
        }), e.toString = a2._path2string;
        return e
    }), a2.parseTransformString = a1(function (a) {
        if (!a) {
            return null
        }
        var f = {
            r: 3,
            s: 4,
            t: 2,
            m: 6
        },
            e = [];
        a2.is(a, cY) && a2.is(a[0], cY) && (e = aQ(a)), e.length || aA(a).replace(b2, function (g, d, k) {
            var j = [],
                h = ar.call(d);
            k.replace(dq, function (l, c) {
                c && j.push(+c)
            }), e.push([d][aI](j))
        }), e.toString = a2._path2string;
        return e
    }), a2.findDotsAtSegment = function (X, W, V, U, T, S, R, Q, P) {
        var O = 1 - P,
            N = c6(O, 3),
            M = c6(O, 2),
            L = P * P,
            K = L * P,
            J = N * X + M * 3 * P * V + O * 3 * P * P * T + K * R,
            I = N * W + M * 3 * P * U + O * 3 * P * P * S + K * Q,
            H = X + 2 * P * (V - X) + L * (T - 2 * V + X),
            G = W + 2 * P * (U - W) + L * (S - 2 * U + W),
            F = V + 2 * P * (T - V) + L * (R - 2 * T + V),
            E = U + 2 * P * (S - U) + L * (Q - 2 * S + U),
            D = O * X + P * V,
            C = O * W + P * U,
            B = O * T + P * R,
            A = O * S + P * Q,
            w = 90 - ap.atan2(H - F, G - E) * 180 / c4;
        (H > F || G < E) && (w += 180);
        return {
            x: J,
            y: I,
            m: {
                x: H,
                y: G
            },
            n: {
                x: F,
                y: E
            },
            start: {
                x: D,
                y: C
            },
            end: {
                x: B,
                y: A
            },
            alpha: w
        }
    };
    var aS = a1(function (v) {
        if (!v) {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        }
        v = di(v);
        var u = 0,
            t = 0,
            s = [],
            r = [],
            q;
        for (var p = 0, o = v.length; p < o; p++) {
            q = v[p];
            if (q[0] == "M") {
                u = q[1], t = q[2], s.push(u), r.push(t)
            } else {
                var n = dj(u, t, q[1], q[2], q[3], q[4], q[5], q[6]);
                s = s[aI](n.min.x, n.max.x), r = r[aI](n.min.y, n.max.y), u = q[5], t = q[6]
            }
        }
        var m = al[aJ](0, s),
            l = al[aJ](0, r);
        return {
            x: m,
            y: l,
            width: an[aJ](0, s) - m,
            height: an[aJ](0, r) - l
        }
    }, null, function (b) {
        return {
            x: b.x,
            y: b.y,
            width: b.width,
            height: b.height
        }
    }),
        aQ = function (a) {
            var m = [];
            if (!a2.is(a, cY) || !a2.is(a && a[0], cY)) {
                a = a2.parsePathString(a)
            }
            for (var l = 0, k = a.length; l < k; l++) {
                m[l] = [];
                for (var j = 0, h = a[l].length; j < h; j++) {
                    m[l][j] = a[l][j]
                }
            }
            m.toString = a2._path2string;
            return m
        },
        aO = a2._pathToRelative = a1(function (F) {
            if (!a2.is(F, cY) || !a2.is(F && F[0], cY)) {
                F = a2.parsePathString(F)
            }
            var E = [],
                D = 0,
                C = 0,
                B = 0,
                A = 0,
                z = 0;
            F[0][0] == "M" && (D = F[0][1], C = F[0][2], B = D, A = C, z++, E.push(["M", D, C]));
            for (var y = z, x = F.length; y < x; y++) {
                var w = E[y] = [],
                    v = F[y];
                if (v[0] != ar.call(v[0])) {
                    w[0] = ar.call(v[0]);
                    switch (w[0]) {
                    case "a":
                        w[1] = v[1], w[2] = v[2], w[3] = v[3], w[4] = v[4], w[5] = v[5], w[6] = +(v[6] - D).toFixed(3), w[7] = +(v[7] - C).toFixed(3);
                        break;
                    case "v":
                        w[1] = +(v[1] - C).toFixed(3);
                        break;
                    case "m":
                        B = v[1], A = v[2];
                    default:
                        for (var u = 1, t = v.length; u < t; u++) {
                            w[u] = +(v[u] - (u % 2 ? D : C)).toFixed(3)
                        }
                    }
                } else {
                    w = E[y] = [], v[0] == "m" && (B = v[1] + D, A = v[2] + C);
                    for (var s = 0, r = v.length; s < r; s++) {
                        E[y][s] = v[s]
                    }
                }
                var a = E[y].length;
                switch (E[y][0]) {
                case "z":
                    D = B, C = A;
                    break;
                case "h":
                    D += +E[y][a - 1];
                    break;
                case "v":
                    C += +E[y][a - 1];
                    break;
                default:
                    D += +E[y][a - 2], C += +E[y][a - 1]
                }
            }
            E.toString = a2._path2string;
            return E
        }, 0, aQ),
        dp = a2._pathToAbsolute = a1(function (F) {
            if (!a2.is(F, cY) || !a2.is(F && F[0], cY)) {
                F = a2.parsePathString(F)
            }
            if (!F || !F.length) {
                return [["M", 0, 0]]
            }
            var E = [],
                D = 0,
                C = 0,
                B = 0,
                A = 0,
                z = 0;
            F[0][0] == "M" && (D = +F[0][1], C = +F[0][2], B = D, A = C, z++, E[0] = ["M", D, C]);
            for (var y, x, w = z, v = F.length; w < v; w++) {
                E.push(y = []), x = F[w];
                if (x[0] != cB.call(x[0])) {
                    y[0] = cB.call(x[0]);
                    switch (y[0]) {
                    case "A":
                        y[1] = x[1], y[2] = x[2], y[3] = x[3], y[4] = x[4], y[5] = x[5], y[6] = +(x[6] + D), y[7] = +(x[7] + C);
                        break;
                    case "V":
                        y[1] = +x[1] + C;
                        break;
                    case "H":
                        y[1] = +x[1] + D;
                        break;
                    case "R":
                        var u = [D, C][aI](x.slice(1));
                        for (var t = 2, s = u.length; t < s; t++) {
                            u[t] = +u[t] + D, u[++t] = +u[t] + C
                        }
                        E.pop(), E = E[aI](aV(u));
                        break;
                    case "M":
                        B = +x[1] + D, A = +x[2] + C;
                    default:
                        for (t = 1, s = x.length; t < s; t++) {
                            y[t] = +x[t] + (t % 2 ? D : C)
                        }
                    }
                } else {
                    if (x[0] == "R") {
                        u = [D, C][aI](x.slice(1)), E.pop(), E = E[aI](aV(u)), y = ["R"][aI](x.slice(-2))
                    } else {
                        for (var n = 0, a = x.length; n < a; n++) {
                            y[n] = x[n]
                        }
                    }
                }
                switch (y[0]) {
                case "Z":
                    D = B, C = A;
                    break;
                case "H":
                    D = y[1];
                    break;
                case "V":
                    C = y[1];
                    break;
                case "M":
                    B = y[y.length - 2], A = y[y.length - 1];
                default:
                    D = y[y.length - 2], C = y[y.length - 1]
                }
            }
            E.toString = a2._path2string;
            return E
        }, null, aQ),
        dn = function (f, e, h, g) {
            return [f, e, h, g, h, g]
        },
        dm = function (k, j, q, p, o, n) {
            var m = 1 / 3,
                l = 2 / 3;
            return [m * k + l * q, m * j + l * p, m * o + l * q, m * n + l * p, o, n]
        },
        dl = function (bL, bK, bJ, bI, bH, bG, bF, bE, bD, bC) {
            var bB = c4 * 120 / 180,
                bA = c4 / 180 * (+bH || 0),
                bz = [],
                by, bx = a1(function (g, f, k) {
                    var j = g * ap.cos(k) - f * ap.sin(k),
                        h = g * ap.sin(k) + f * ap.cos(k);
                    return {
                        x: j,
                        y: h
                    }
                });
            if (!bC) {
                by = bx(bL, bK, -bA), bL = by.x, bK = by.y, by = bx(bE, bD, -bA), bE = by.x, bD = by.y;
                var bw = ap.cos(c4 / 180 * bH),
                    bv = ap.sin(c4 / 180 * bH),
                    bu = (bL - bE) / 2,
                    bt = (bK - bD) / 2,
                    bs = bu * bu / (bJ * bJ) + bt * bt / (bI * bI);
                bs > 1 && (bs = ap.sqrt(bs), bJ = bs * bJ, bI = bs * bI);
                var br = bJ * bJ,
                    bq = bI * bI,
                    bp = (bG == bF ? -1 : 1) * ap.sqrt(aj((br * bq - br * bt * bt - bq * bu * bu) / (br * bt * bt + bq * bu * bu))),
                    bo = bp * bJ * bt / bI + (bL + bE) / 2,
                    bn = bp * -bI * bu / bJ + (bK + bD) / 2,
                    bm = ap.asin(((bK - bn) / bI).toFixed(9)),
                    bl = ap.asin(((bD - bn) / bI).toFixed(9));
                bm = bL < bo ? c4 - bm : bm, bl = bE < bo ? c4 - bl : bl, bm < 0 && (bm = c4 * 2 + bm), bl < 0 && (bl = c4 * 2 + bl), bF && bm > bl && (bm = bm - c4 * 2), !bF && bl > bm && (bl = bl - c4 * 2)
            } else {
                bm = bC[0], bl = bC[1], bo = bC[2], bn = bC[3]
            }
            var bk = bl - bm;
            if (aj(bk) > bB) {
                var bj = bl,
                    bi = bE,
                    bh = bD;
                bl = bm + bB * (bF && bl > bm ? 1 : -1), bE = bo + bJ * ap.cos(bl), bD = bn + bI * ap.sin(bl), bz = dl(bE, bD, bJ, bI, bH, 0, bF, bi, bh, [bl, bj, bo, bn])
            }
            bk = bl - bm;
            var bg = ap.cos(bm),
                bf = ap.sin(bm),
                be = ap.cos(bl),
                bd = ap.sin(bl),
                bc = ap.tan(bk / 4),
                bb = 4 / 3 * bJ * bc,
                ba = 4 / 3 * bI * bc,
                Z = [bL, bK],
                Y = [bL + bb * bf, bK - ba * bg],
                B = [bE + bb * bd, bD - ba * be],
                z = [bE, bD];
            Y[0] = 2 * Z[0] - Y[0], Y[1] = 2 * Z[1] - Y[1];
            if (bC) {
                return [Y, B, z][aI](bz)
            }
            bz = [Y, B, z][aI](bz).join()[ay](",");
            var w = [];
            for (var s = 0, n = bz.length; s < n; s++) {
                w[s] = s % 2 ? bx(bz[s - 1], bz[s], bA).y : bx(bz[s], bz[s + 1], bA).x
            }
            return w
        },
        dk = function (t, s, r, q, p, o, n, m, l) {
            var k = 1 - l;
            return {
                x: c6(k, 3) * t + c6(k, 2) * 3 * l * r + k * 3 * l * l * p + c6(l, 3) * n,
                y: c6(k, 3) * s + c6(k, 2) * 3 * l * q + k * 3 * l * l * o + c6(l, 3) * m
            }
        },
        dj = a1(function (F, E, D, C, B, A, z, y) {
            var x = B - 2 * D + F - (z - 2 * B + D),
                w = 2 * (D - F) - 2 * (B - D),
                v = F - D,
                u = (-w + ap.sqrt(w * w - 4 * x * v)) / 2 / x,
                t = (-w - ap.sqrt(w * w - 4 * x * v)) / 2 / x,
                s = [E, y],
                r = [F, z],
                m;
            aj(u) > "1e12" && (u = 0.5), aj(t) > "1e12" && (t = 0.5), u > 0 && u < 1 && (m = dk(F, E, D, C, B, A, z, y, u), r.push(m.x), s.push(m.y)), t > 0 && t < 1 && (m = dk(F, E, D, C, B, A, z, y, t), r.push(m.x), s.push(m.y)), x = A - 2 * C + E - (y - 2 * A + C), w = 2 * (C - E) - 2 * (A - C), v = E - C, u = (-w + ap.sqrt(w * w - 4 * x * v)) / 2 / x, t = (-w - ap.sqrt(w * w - 4 * x * v)) / 2 / x, aj(u) > "1e12" && (u = 0.5), aj(t) > "1e12" && (t = 0.5), u > 0 && u < 1 && (m = dk(F, E, D, C, B, A, z, y, u), r.push(m.x), s.push(m.y)), t > 0 && t < 1 && (m = dk(F, E, D, C, B, A, z, y, t), r.push(m.x), s.push(m.y));
            return {
                min: {
                    x: al[aJ](0, r),
                    y: al[aJ](0, s)
                },
                max: {
                    x: an[aJ](0, r),
                    y: an[aJ](0, s)
                }
            }
        }),
        di = a2._path2curve = a1(function (D, C) {
            var B = dp(D),
                A = C && dp(C),
                z = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                },
                y = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                },
                x = function (f, e) {
                    var h, g;
                    if (!f) {
                        return ["C", e.x, e.y, e.x, e.y, e.x, e.y]
                    }!(f[0] in {
                        T: 1,
                        Q: 1
                    }) && (e.qx = e.qy = null);
                    switch (f[0]) {
                    case "M":
                        e.X = f[1], e.Y = f[2];
                        break;
                    case "A":
                        f = ["C"][aI](dl[aJ](0, [e.x, e.y][aI](f.slice(1))));
                        break;
                    case "S":
                        h = e.x + (e.x - (e.bx || e.x)), g = e.y + (e.y - (e.by || e.y)), f = ["C", h, g][aI](f.slice(1));
                        break;
                    case "T":
                        e.qx = e.x + (e.x - (e.qx || e.x)), e.qy = e.y + (e.y - (e.qy || e.y)), f = ["C"][aI](dm(e.x, e.y, e.qx, e.qy, f[1], f[2]));
                        break;
                    case "Q":
                        e.qx = f[1], e.qy = f[2], f = ["C"][aI](dm(e.x, e.y, f[1], f[2], f[3], f[4]));
                        break;
                    case "L":
                        f = ["C"][aI](dn(e.x, e.y, f[1], f[2]));
                        break;
                    case "H":
                        f = ["C"][aI](dn(e.x, e.y, f[1], e.y));
                        break;
                    case "V":
                        f = ["C"][aI](dn(e.x, e.y, e.x, f[1]));
                        break;
                    case "Z":
                        f = ["C"][aI](dn(e.x, e.y, e.X, e.Y))
                    }
                    return f
                },
                w = function (d, c) {
                    if (d[c].length > 7) {
                        d[c].shift();
                        var f = d[c];
                        while (f.length) {
                            d.splice(c++, 0, ["C"][aI](f.splice(0, 6)))
                        }
                        d.splice(c, 1), t = an(B.length, A && A.length || 0)
                    }
                },
                v = function (d, c, k, j, h) {
                    d && c && d[h][0] == "M" && c[h][0] != "M" && (c.splice(h, 0, ["M", j.x, j.y]), k.bx = 0, k.by = 0, k.x = d[h][1], k.y = d[h][2], t = an(B.length, A && A.length || 0))
                };
            for (var u = 0, t = an(B.length, A && A.length || 0); u < t; u++) {
                B[u] = x(B[u], z), w(B, u), A && (A[u] = x(A[u], y)), A && w(A, u), v(B, A, z, y, u), v(A, B, y, z, u);
                var s = B[u],
                    r = A && A[u],
                    n = s.length,
                    m = A && r.length;
                z.x = s[n - 2], z.y = s[n - 1], z.bx = cF(s[n - 4]) || z.x, z.by = cF(s[n - 3]) || z.y, y.bx = A && (cF(r[m - 4]) || y.x), y.by = A && (cF(r[m - 3]) || y.y), y.x = A && r[m - 2], y.y = A && r[m - 1]
            }
            return A ? [B, A] : B
        }, null, aQ),
        dh = a2._parseDots = a1(function (t) {
            var s = [];
            for (var r = 0, q = t.length; r < q; r++) {
                var p = {},
                    o = t[r].match(/^([^:]*):?([\d\.]*)/);
                p.color = a2.getRGB(o[1]);
                if (p.color.error) {
                    return null
                }
                p.color = p.color.hex, o[2] && (p.offset = o[2] + "%"), s.push(p)
            }
            for (r = 1, q = s.length - 1; r < q; r++) {
                if (!s[r].offset) {
                    var n = cF(s[r - 1].offset || 0),
                        m = 0;
                    for (var l = r + 1; l < q; l++) {
                        if (s[l].offset) {
                            m = s[l].offset;
                            break
                        }
                    }
                    m || (m = 100, l = q), m = cF(m);
                    var a = (m - n) / (l - r + 1);
                    for (; r < l; r++) {
                        n += a, s[r].offset = n + "%"
                    }
                }
            }
            return s
        }),
        dg = a2._tear = function (d, c) {
            d == c.top && (c.top = d.prev), d == c.bottom && (c.bottom = d.next), d.next && (d.next.prev = d.prev), d.prev && (d.prev.next = d.next)
        },
        df = a2._tofront = function (d, c) {
            c.top !== d && (dg(d, c), d.next = null, d.prev = c.top, c.top.next = d, c.top = d)
        },
        de = a2._toback = function (d, c) {
            c.bottom !== d && (dg(d, c), d.next = c.bottom, d.prev = null, c.bottom.prev = d, c.bottom = d)
        },
        dd = a2._insertafter = function (e, d, f) {
            dg(e, f), d == f.top && (f.top = e), d.next && (d.next.prev = e), e.next = d.next, e.prev = d, d.next = e
        },
        dc = a2._insertbefore = function (e, d, f) {
            dg(e, f), d == f.bottom && (f.bottom = e), d.prev && (d.prev.next = e), e.prev = d.prev, d.prev = e, e.next = d
        },
        db = function (b) {
            return function () {
                throw new Error("Raphaël: you are calling to method "" + b + "" of removed object")
            }
        },
        da = a2._extractTransform = function (R, Q) {
            if (Q == null) {
                return R._.transform
            }
            Q = aA(Q).replace(/\.{3}|\u2026/g, R._.transform || aD);
            var P = a2.parseTransformString(Q),
                O = 0,
                N = 0,
                M = 0,
                L = 1,
                K = 1,
                J = R._,
                I = new c7;
            J.transform = P || [];
            if (P) {
                for (var H = 0, G = P.length; H < G; H++) {
                    var F = P[H],
                        E = F.length,
                        D = aA(F[0]).toLowerCase(),
                        C = F[0] != D,
                        B = C ? I.invert() : 0,
                        A, z, r, p, a;
                    D == "t" && E == 3 ? C ? (A = B.x(0, 0), z = B.y(0, 0), r = B.x(F[1], F[2]), p = B.y(F[1], F[2]), I.translate(r - A, p - z)) : I.translate(F[1], F[2]) : D == "r" ? E == 2 ? (a = a || R.getBBox(1), I.rotate(F[1], a.x + a.width / 2, a.y + a.height / 2), O += F[1]) : E == 4 && (C ? (r = B.x(F[2], F[3]), p = B.y(F[2], F[3]), I.rotate(F[1], r, p)) : I.rotate(F[1], F[2], F[3]), O += F[1]) : D == "s" ? E == 2 || E == 3 ? (a = a || R.getBBox(1), I.scale(F[1], F[E - 1], a.x + a.width / 2, a.y + a.height / 2), L *= F[1], K *= F[E - 1]) : E == 5 && (C ? (r = B.x(F[3], F[4]), p = B.y(F[3], F[4]), I.scale(F[1], F[2], r, p)) : I.scale(F[1], F[2], F[3], F[4]), L *= F[1], K *= F[2]) : D == "m" && E == 7 && I.add(F[1], F[2], F[3], F[4], F[5], F[6]), J.dirtyT = 1, R.matrix = I
                }
            }
            R.matrix = I, J.sx = L, J.sy = K, J.deg = O, J.dx = N = I.e, J.dy = M = I.f, L == 1 && K == 1 && !O && J.bbox ? (J.bbox.x += +N, J.bbox.y += +M) : J.dirtyT = 1
        },
        c9 = function (d) {
            var c = d[0];
            switch (c.toLowerCase()) {
            case "t":
                return [c, 0, 0];
            case "m":
                return [c, 1, 0, 0, 1, 0, 0];
            case "r":
                return d.length == 4 ? [c, 0, d[2], d[3]] : [c, 0];
            case "s":
                return d.length == 5 ? [c, 1, 1, d[3], d[4]] : d.length == 3 ? [c, 1, 1] : [c, 1]
            }
        },
        c8 = a2._equaliseTransform = function (t, s) {
            s = aA(s).replace(/\.{3}|\u2026/g, t), t = a2.parseTransformString(t) || [], s = a2.parseTransformString(s) || [];
            var r = an(t.length, s.length),
                q = [],
                p = [],
                o = 0,
                n, m, l, a;
            for (; o < r; o++) {
                l = t[o] || c9(s[o]), a = s[o] || c9(l);
                if (l[0] != a[0] || l[0].toLowerCase() == "r" && (l[2] != a[2] || l[3] != a[3]) || l[0].toLowerCase() == "s" && (l[3] != a[3] || l[4] != a[4])) {
                    return
                }
                q[o] = [], p[o] = [];
                for (n = 0, m = an(l.length, a.length); n < m; n++) {
                    n in l && (q[o][n] = l[n]), n in a && (p[o][n] = a[n])
                }
            }
            return {
                from: q,
                to: p
            }
        };
    a2._getContainer = function (a, k, j, h) {
        var g;
        g = h == null && !a2.is(a, "object") ? aP.doc.getElementById(a) : a;
        if (g != null) {
            if (g.tagName) {
                return k == null ? {
                    container: g,
                    width: g.style.pixelWidth || g.offsetWidth,
                    height: g.style.pixelHeight || g.offsetHeight
                } : {
                    container: g,
                    width: k,
                    height: j
                }
            }
            return {
                container: 1,
                x: a,
                y: k,
                width: j,
                height: h
            }
        }
    }, a2.pathToRelative = aO, a2._engine = {}, a2.path2curve = di, a2.matrix = function (h, g, m, l, k, j) {
        return new c7(h, g, m, l, k, j)
    }, function (a) {
        function e(d) {
            var c = ap.sqrt(f(d));
            d[0] && (d[0] /= c), d[1] && (d[1] /= c)
        }

        function f(b) {
            return b[0] * b[0] + b[1] * b[1]
        }
        a.add = function (z, y, x, w, v, u) {
            var t = [
                [],
                [],
                []
            ],
                s = [
                    [this.a, this.c, this.e],
                    [this.b, this.d, this.f],
                    [0, 0, 1]
                ],
                r = [
                    [z, x, v],
                    [y, w, u],
                    [0, 0, 1]
                ],
                q, p, o, n;
            z && z instanceof c7 && (r = [
                [z.a, z.c, z.e],
                [z.b, z.d, z.f],
                [0, 0, 1]
            ]);
            for (q = 0; q < 3; q++) {
                for (p = 0; p < 3; p++) {
                    n = 0;
                    for (o = 0; o < 3; o++) {
                        n += s[q][o] * r[o][p]
                    }
                    t[q][p] = n
                }
            }
            this.a = t[0][0], this.b = t[1][0], this.c = t[0][1], this.d = t[1][1], this.e = t[0][2], this.f = t[1][2]
        }, a.invert = function () {
            var d = this,
                c = d.a * d.d - d.b * d.c;
            return new c7(d.d / c, -d.b / c, -d.c / c, d.a / c, (d.c * d.f - d.d * d.e) / c, (d.b * d.e - d.a * d.f) / c)
        }, a.clone = function () {
            return new c7(this.a, this.b, this.c, this.d, this.e, this.f)
        }, a.translate = function (d, c) {
            this.add(1, 0, 0, 1, d, c)
        }, a.scale = function (h, g, k, j) {
            g == null && (g = h), (k || j) && this.add(1, 0, 0, 1, k, j), this.add(h, 0, 0, g, 0, 0), (k || j) && this.add(1, 0, 0, 1, -k, -j)
        }, a.rotate = function (g, l, k) {
            g = a2.rad(g), l = l || 0, k = k || 0;
            var j = +ap.cos(g).toFixed(9),
                h = +ap.sin(g).toFixed(9);
            this.add(j, h, -h, j, l, k), this.add(1, 0, 0, 1, -l, -k)
        }, a.x = function (d, c) {
            return d * this.a + c * this.c + this.e
        }, a.y = function (d, c) {
            return d * this.b + c * this.d + this.f
        }, a.get = function (b) {
            return +this[aA.fromCharCode(97 + b)].toFixed(4)
        }, a.toString = function () {
            return a2.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        }, a.toFilter = function () {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        }, a.offset = function () {
            return [this.e.toFixed(4), this.f.toFixed(4)]
        }, a.split = function () {
            var c = {};
            c.dx = this.e, c.dy = this.f;
            var j = [
                [this.a, this.c],
                [this.b, this.d]
            ];
            c.scalex = ap.sqrt(f(j[0])), e(j[0]), c.shear = j[0][0] * j[1][0] + j[0][1] * j[1][1], j[1] = [j[1][0] - j[0][0] * c.shear, j[1][1] - j[0][1] * c.shear], c.scaley = ap.sqrt(f(j[1])), e(j[1]), c.shear /= c.scaley;
            var h = -j[0][1],
                d = j[1][1];
            d < 0 ? (c.rotate = a2.deg(ap.acos(d)), h < 0 && (c.rotate = 360 - c.rotate)) : c.rotate = a2.deg(ap.asin(h)), c.isSimple = !+c.shear.toFixed(9) && (c.scalex.toFixed(9) == c.scaley.toFixed(9) || !c.rotate), c.isSuperSimple = !+c.shear.toFixed(9) && c.scalex.toFixed(9) == c.scaley.toFixed(9) && !c.rotate, c.noRotation = !+c.shear.toFixed(9) && !c.rotate;
            return c
        }, a.toTransformString = function (d) {
            var c = d || this[ay]();
            return c.isSimple ? "t" + [c.dx, c.dy] + "s" + [c.scalex, c.scaley, 0, 0] + "r" + [c.rotate, 0, 0] : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
        }
    }(c7.prototype);
    var c5 = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    navigator.vendor == "Apple Computer, Inc." && (c5 && c5[1] < 4 || navigator.platform.slice(0, 2) == "iP") || navigator.vendor == "Google Inc." && c5 && c5[1] < 8 ? aL.safari = function () {
        var b = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function () {
            b.remove()
        })
    } : aL.safari = cC;
    var c3 = function () {
            this.returnValue = !1
        },
        c1 = function () {
            return this.originalEvent.preventDefault()
        },
        cZ = function () {
            this.cancelBubble = !0
        },
        cX = function () {
            return this.originalEvent.stopPropagation()
        },
        cV = function () {
            if (aP.doc.addEventListener) {
                return function (h, g, m, l) {
                    var k = aG && au[g] ? au[g] : g,
                        j = function (q) {
                            var p = aP.doc.documentElement.scrollTop || aP.doc.body.scrollTop,
                                o = aP.doc.documentElement.scrollLeft || aP.doc.body.scrollLeft,
                                d = q.clientX + o,
                                c = q.clientY + p;
                            if (aG && au[aR](g)) {
                                for (var b = 0, a = q.targetTouches && q.targetTouches.length; b < a; b++) {
                                    if (q.targetTouches[b].target == h) {
                                        var r = q;
                                        q = q.targetTouches[b], q.originalEvent = r, q.preventDefault = c1, q.stopPropagation = cX;
                                        break
                                    }
                                }
                            }
                            return m.call(l, q, d, c)
                        };
                    h.addEventListener(k, j, !1);
                    return function () {
                        h.removeEventListener(k, j, !1);
                        return !0
                    }
                }
            }
            if (aP.doc.attachEvent) {
                return function (h, g, m, l) {
                    var k = function (d) {
                            d = d || aP.win.event;
                            var c = aP.doc.documentElement.scrollTop || aP.doc.body.scrollTop,
                                p = aP.doc.documentElement.scrollLeft || aP.doc.body.scrollLeft,
                                o = d.clientX + p,
                                n = d.clientY + c;
                            d.preventDefault = d.preventDefault || c3, d.stopPropagation = d.stopPropagation || cZ;
                            return m.call(l, d, o, n)
                        };
                    h.attachEvent("on" + g, k);
                    var j = function () {
                            h.detachEvent("on" + g, k);
                            return !0
                        };
                    return j
                }
            }
        }(),
        cT = [],
        cR = function (B) {
            var A = B.clientX,
                z = B.clientY,
                y = aP.doc.documentElement.scrollTop || aP.doc.body.scrollTop,
                x = aP.doc.documentElement.scrollLeft || aP.doc.body.scrollLeft,
                w, v = cT.length;
            while (v--) {
                w = cT[v];
                if (aG) {
                    var u = B.touches.length,
                        t;
                    while (u--) {
                        t = B.touches[u];
                        if (t.identifier == w.el._drag.id) {
                            A = t.clientX, z = t.clientY, (B.originalEvent ? B.originalEvent : B).preventDefault();
                            break
                        }
                    }
                } else {
                    B.preventDefault()
                }
                var s = w.el.node,
                    r, q = s.nextSibling,
                    o = s.parentNode,
                    h = s.style.display;
                aP.win.opera && o.removeChild(s), s.style.display = "none", r = w.el.paper.getElementByPoint(A, z), s.style.display = h, aP.win.opera && (q ? o.insertBefore(s, q) : o.appendChild(s)), r && eve("drag.over." + w.el.id, w.el, r), A += x, z += y, eve("drag.move." + w.el.id, w.move_scope || w.el, A - w.el._drag.x, z - w.el._drag.y, A, z, B)
            }
        },
        dr = function (a) {
            a2.unmousemove(cR).unmouseup(dr);
            var f = cT.length,
                e;
            while (f--) {
                e = cT[f], e.el._drag = {}, eve("drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, a)
            }
            cT = []
        },
        cL = a2.el = {};
    for (var aH = aw.length; aH--;) {
        (function (a) {
            a2[a] = cL[a] = function (e, b) {
                a2.is(e, "function") && (this.events = this.events || [], this.events.push({
                    name: a,
                    f: e,
                    unbind: cV(this.shape || this.node || aP.doc, a, e, b || this)
                }));
                return this
            }, a2["un" + a] = cL["un" + a] = function (b) {
                var f = this.events,
                    e = f.length;
                while (e--) {
                    if (f[e].name == a && f[e].f == b) {
                        f[e].unbind(), f.splice(e, 1), !f.length && delete this.events;
                        return this
                    }
                }
                return this
            }
        })(aw[aH])
    }
    cL.data = function (a, h) {
        var g = cI[this.id] = cI[this.id] || {};
        if (arguments.length == 1) {
            if (a2.is(a, "object")) {
                for (var f in a) {
                    a[aR](f) && this.data(f, a[f])
                }
                return this
            }
            eve("data.get." + this.id, this, g[a], a);
            return g[a]
        }
        g[a] = h, eve("data.set." + this.id, this, h, a);
        return this
    }, cL.removeData = function (b) {
        b == null ? cI[this.id] = {} : cI[this.id] && delete cI[this.id][b];
        return this
    }, cL.hover = function (f, e, h, g) {
        return this.mouseover(f, h).mouseout(e, g || h)
    }, cL.unhover = function (d, c) {
        return this.unmouseover(d).unmouseout(c)
    }, cL.drag = function (a, n, m, l, k, j) {
        function h(d) {
            (d.originalEvent || d).preventDefault();
            var c = aP.doc.documentElement.scrollTop || aP.doc.body.scrollTop,
                b = aP.doc.documentElement.scrollLeft || aP.doc.body.scrollLeft;
            this._drag.x = d.clientX + b, this._drag.y = d.clientY + c, this._drag.id = d.identifier, !cT.length && a2.mousemove(cR).mouseup(dr), cT.push({
                el: this,
                move_scope: l,
                start_scope: k,
                end_scope: j
            }), n && eve.on("drag.start." + this.id, n), a && eve.on("drag.move." + this.id, a), m && eve.on("drag.end." + this.id, m), eve("drag.start." + this.id, k || l || this, d.clientX + b, d.clientY + c, d)
        }
        this._drag = {}, this.mousedown(h);
        return this
    }, cL.onDragOver = function (b) {
        b ? eve.on("drag.over." + this.id, b) : eve.unbind("drag.over." + this.id)
    }, cL.undrag = function () {
        var a = cT.length;
        while (a--) {
            cT[a].el == this && (a2.unmousedown(cT[a].start), cT.splice(a++, 1), eve.unbind("drag.*." + this.id))
        }!cT.length && a2.unmousemove(cR).unmouseup(dr)
    }, aL.circle = function (a, h, g) {
        var f = a2._engine.circle(this, a || 0, h || 0, g || 0);
        this.__set__ && this.__set__.push(f);
        return f
    }, aL.rect = function (a, m, l, k, j) {
        var h = a2._engine.rect(this, a || 0, m || 0, l || 0, k || 0, j || 0);
        this.__set__ && this.__set__.push(h);
        return h
    }, aL.ellipse = function (a, k, j, h) {
        var g = a2._engine.ellipse(this, a || 0, k || 0, j || 0, h || 0);
        this.__set__ && this.__set__.push(g);
        return g
    }, aL.path = function (a) {
        a && !a2.is(a, c0) && !a2.is(a[0], cY) && (a += aD);
        var d = a2._engine.path(a2.format[aJ](a2, arguments), this);
        this.__set__ && this.__set__.push(d);
        return d
    }, aL.image = function (a, m, l, k, j) {
        var h = a2._engine.image(this, a || "about:blank", m || 0, l || 0, k || 0, j || 0);
        this.__set__ && this.__set__.push(h);
        return h
    }, aL.text = function (a, h, g) {
        var f = a2._engine.text(this, a || 0, h || 0, aA(g));
        this.__set__ && this.__set__.push(f);
        return f
    }, aL.set = function (a) {
        !a2.is(a, "array") && (a = Array.prototype.splice.call(arguments, 0, arguments.length));
        var d = new ac(a);
        this.__set__ && this.__set__.push(d);
        return d
    }, aL.setStart = function (b) {
        this.__set__ = b || this.set()
    }, aL.setFinish = function (d) {
        var c = this.__set__;
        delete this.__set__;
        return c
    }, aL.setSize = function (a, d) {
        return a2._engine.setSize.call(this, a, d)
    }, aL.setViewBox = function (a, k, j, h, g) {
        return a2._engine.setViewBox.call(this, a, k, j, h, g)
    }, aL.top = aL.bottom = null, aL.raphael = a2;
    var aF = function (r) {
            var q = r.getBoundingClientRect(),
                p = r.ownerDocument,
                o = p.body,
                n = p.documentElement,
                m = n.clientTop || o.clientTop || 0,
                l = n.clientLeft || o.clientLeft || 0,
                k = q.top + (aP.win.pageYOffset || n.scrollTop || o.scrollTop) - m,
                h = q.left + (aP.win.pageXOffset || n.scrollLeft || o.scrollLeft) - l;
            return {
                y: k,
                x: h
            }
        };
    aL.getElementByPoint = function (j, h) {
        var p = this,
            o = p.canvas,
            n = aP.doc.elementFromPoint(j, h);
        if (aP.win.opera && n.tagName == "svg") {
            var m = aF(o),
                l = o.createSVGRect();
            l.x = j - m.x, l.y = h - m.y, l.width = l.height = 1;
            var k = o.getIntersectionList(l, null);
            k.length && (n = k[k.length - 1])
        }
        if (!n) {
            return null
        }
        while (n.parentNode && n != o.parentNode && !n.raphael) {
            n = n.parentNode
        }
        n == p.canvas.parentNode && (n = o), n = n && n.raphael ? p.getById(n.raphaelid) : null;
        return n
    }, aL.getById = function (d) {
        var c = this.bottom;
        while (c) {
            if (c.id == d) {
                return c
            }
            c = c.next
        }
        return null
    }, aL.forEach = function (e, d) {
        var f = this.bottom;
        while (f) {
            if (e.call(d, f) === !1) {
                return this
            }
            f = f.next
        }
        return this
    }, cL.getBBox = function (d) {
        if (this.removed) {
            return {}
        }
        var c = this._;
        if (d) {
            if (c.dirty || !c.bboxwt) {
                this.realPath = b9[this.type](this), c.bboxwt = aS(this.realPath), c.bboxwt.toString = aC, c.dirty = 0
            }
            return c.bboxwt
        }
        if (c.dirty || c.dirtyT || !c.bbox) {
            if (c.dirty || !this.realPath) {
                c.bboxwt = 0, this.realPath = b9[this.type](this)
            }
            c.bbox = aS(b7(this.realPath, this.matrix)), c.bbox.toString = aC, c.dirty = c.dirtyT = 0
        }
        return c.bbox
    }, cL.clone = function () {
        if (this.removed) {
            return null
        }
        var b = this.paper[this.type]().attr(this.attr());
        this.__set__ && this.__set__.push(b);
        return b
    }, cL.glow = function (j) {
        if (this.type == "text") {
            return null
        }
        j = j || {};
        var h = {
            width: (j.width || 10) + (+this.attr("stroke-width") || 1),
            fill: j.fill || !1,
            opacity: j.opacity || 0.5,
            offsetx: j.offsetx || 0,
            offsety: j.offsety || 0,
            color: j.color || "#000"
        },
            o = h.width / 2,
            n = this.paper,
            m = n.set(),
            l = this.realPath || b9[this.type](this);
        l = this.matrix ? b7(l, this.matrix) : l;
        for (var k = 1; k < o + 1; k++) {
            m.push(n.path(l).attr({
                stroke: h.color,
                fill: h.fill ? h.color : "none",
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke-width": +(h.width / o * k).toFixed(3),
                opacity: +(h.opacity / o).toFixed(3)
            }))
        }
        return m.insertBefore(this).translate(h.offsetx, h.offsety)
    };
    var az = {},
        ax = function (H, G, F, E, D, C, B, A, z) {
            var y = 0,
                x = 100,
                w = [H, G, F, E, D, C, B, A].join(),
                v = az[w],
                u, t;
            !v && (az[w] = v = {
                data: []
            }), v.timer && clearTimeout(v.timer), v.timer = setTimeout(function () {
                delete az[w]
            }, 2000);
            if (z != null && !v.precision) {
                var s = ax(H, G, F, E, D, C, B, A);
                v.precision = ~~s * 10, v.data = []
            }
            x = v.precision || x;
            for (var a = 0; a < x + 1; a++) {
                v.data[a * x] ? t = v.data[a * x] : (t = a2.findDotsAtSegment(H, G, F, E, D, C, B, A, a / x), v.data[a * x] = t), a && (y += c6(c6(u.x - t.x, 2) + c6(u.y - t.y, 2), 0.5));
                if (z != null && y >= z) {
                    return t
                }
                u = t
            }
            if (z == null) {
                return y
            }
        },
        av = function (a, d) {
            return function (A, z, y) {
                A = di(A);
                var x, w, v, u, t = "",
                    s = {},
                    r, q = 0;
                for (var c = 0, b = A.length; c < b; c++) {
                    v = A[c];
                    if (v[0] == "M") {
                        x = +v[1], w = +v[2]
                    } else {
                        u = ax(x, w, v[1], v[2], v[3], v[4], v[5], v[6]);
                        if (q + u > z) {
                            if (d && !s.start) {
                                r = ax(x, w, v[1], v[2], v[3], v[4], v[5], v[6], z - q), t += ["C" + r.start.x, r.start.y, r.m.x, r.m.y, r.x, r.y];
                                if (y) {
                                    return t
                                }
                                s.start = t, t = ["M" + r.x, r.y + "C" + r.n.x, r.n.y, r.end.x, r.end.y, v[5], v[6]].join(), q += u, x = +v[5], w = +v[6];
                                continue
                            }
                            if (!a && !d) {
                                r = ax(x, w, v[1], v[2], v[3], v[4], v[5], v[6], z - q);
                                return {
                                    x: r.x,
                                    y: r.y,
                                    alpha: r.alpha
                                }
                            }
                        }
                        q += u, x = +v[5], w = +v[6]
                    }
                    t += v.shift() + v
                }
                s.end = t, r = a ? q : d ? s : a2.findDotsAtSegment(x, w, v[0], v[1], v[2], v[3], v[4], v[5], 1), r.alpha && (r = {
                    x: r.x,
                    y: r.y,
                    alpha: r.alpha
                });
                return r
            }
        },
        at = av(1),
        aq = av(),
        ao = av(0, 1);
    a2.getTotalLength = at, a2.getPointAtLength = aq, a2.getSubpath = function (f, e, h) {
        if (this.getTotalLength(f) - h < 0.000001) {
            return ao(f, e).end
        }
        var g = ao(f, h, 1);
        return e ? ao(g, e).end : g
    }, cL.getTotalLength = function () {
        if (this.type == "path") {
            if (this.node.getTotalLength) {
                return this.node.getTotalLength()
            }
            return at(this.attrs.path)
        }
    }, cL.getPointAtLength = function (b) {
        if (this.type == "path") {
            return aq(this.attrs.path, b)
        }
    }, cL.getSubpath = function (a, d) {
        if (this.type == "path") {
            return a2.getSubpath(this.attrs.path, a, d)
        }
    };
    var am = a2.easing_formulas = {
        linear: function (b) {
            return b
        },
        "<": function (b) {
            return c6(b, 1.7)
        },
        ">": function (b) {
            return c6(b, 0.48)
        },
        "<>": function (k) {
            var j = 0.48 - k / 1.04,
                q = ap.sqrt(0.1734 + j * j),
                p = q - j,
                o = c6(aj(p), 1 / 3) * (p < 0 ? -1 : 1),
                n = -q - j,
                m = c6(aj(n), 1 / 3) * (n < 0 ? -1 : 1),
                l = o + m + 0.5;
            return (1 - l) * 3 * l * l + l * l * l
        },
        backIn: function (d) {
            var c = 1.70158;
            return d * d * ((c + 1) * d - c)
        },
        backOut: function (d) {
            d = d - 1;
            var c = 1.70158;
            return d * d * ((c + 1) * d + c) + 1
        },
        elastic: function (b) {
            if (b == !! b) {
                return b
            }
            return c6(2, -10 * b) * ap.sin((b - 0.075) * 2 * c4 / 0.3) + 1
        },
        bounce: function (f) {
            var e = 7.5625,
                h = 2.75,
                g;
            f < 1 / h ? g = e * f * f : f < 2 / h ? (f -= 1.5 / h, g = e * f * f + 0.75) : f < 2.5 / h ? (f -= 2.25 / h, g = e * f * f + 0.9375) : (f -= 2.625 / h, g = e * f * f + 0.984375);
            return g
        }
    };
    am.easeIn = am["ease-in"] = am["<"], am.easeOut = am["ease-out"] = am[">"], am.easeInOut = am["ease-in-out"] = am["<>"], am["back-in"] = am.backIn, am["back-out"] = am.backOut;
    var ak = [],
        ai = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (b) {
        setTimeout(b, 16)
    }, ah = function () {
        var T = +(new Date),
            S = 0;
        for (; S < ak.length; S++) {
            var R = ak[S];
            if (R.el.removed || R.paused) {
                continue
            }
            var Q = T - R.start,
                P = R.ms,
                O = R.easing,
                N = R.from,
                M = R.diff,
                L = R.to,
                K = R.t,
                J = R.el,
                I = {},
                H, F = {},
                E;
            R.initstatus ? (Q = (R.initstatus * R.anim.top - R.prev) / (R.percent - R.prev) * P, R.status = R.initstatus, delete R.initstatus, R.stop && ak.splice(S--, 1)) : R.status = (R.prev + (R.percent - R.prev) * (Q / P)) / R.anim.top;
            if (Q < 0) {
                continue
            }
            if (Q < P) {
                var D = O(Q / P);
                for (var C in N) {
                    if (N[aR](C)) {
                        switch (cx[C]) {
                        case c2:
                            H = +N[C] + D * P * M[C];
                            break;
                        case "colour":
                            H = "rgb(" + [ag(cJ(N[C].r + D * P * M[C].r)), ag(cJ(N[C].g + D * P * M[C].g)), ag(cJ(N[C].b + D * P * M[C].b))].join(",") + ")";
                            break;
                        case "path":
                            H = [];
                            for (var B = 0, q = N[C].length; B < q; B++) {
                                H[B] = [N[C][B][0]];
                                for (var n = 1, g = N[C][B].length; n < g; n++) {
                                    H[B][n] = +N[C][B][n] + D * P * M[C][B][n]
                                }
                                H[B] = H[B].join(aB)
                            }
                            H = H.join(aB);
                            break;
                        case "transform":
                            if (M[C].real) {
                                H = [];
                                for (B = 0, q = N[C].length; B < q; B++) {
                                    H[B] = [N[C][B][0]];
                                    for (n = 1, g = N[C][B].length; n < g; n++) {
                                        H[B][n] = N[C][B][n] + D * P * M[C][B][n]
                                    }
                                }
                            } else {
                                var a = function (b) {
                                        return +N[C][b] + D * P * M[C][b]
                                    };
                                H = [
                                    ["m", a(0), a(1), a(2), a(3), a(4), a(5)]
                                ]
                            }
                            break;
                        case "csv":
                            if (C == "clip-rect") {
                                H = [], B = 4;
                                while (B--) {
                                    H[B] = +N[C][B] + D * P * M[C][B]
                                }
                            }
                            break;
                        default:
                            var G = [][aI](N[C]);
                            H = [], B = J.paper.customAttributes[C].length;
                            while (B--) {
                                H[B] = +G[B] + D * P * M[C][B]
                            }
                        }
                        I[C] = H
                    }
                }
                J.attr(I), function (e, d, f) {
                    setTimeout(function () {
                        eve("anim.frame." + e, d, f)
                    })
                }(J.id, J, R.anim)
            } else {
                (function (e, h, f) {
                    setTimeout(function () {
                        eve("anim.frame." + h.id, h, f), eve("anim.finish." + h.id, h, f), a2.is(e, "function") && e.call(h)
                    })
                })(R.callback, J, R.anim), J.attr(L), ak.splice(S--, 1);
                if (R.repeat > 1 && !R.next) {
                    for (E in L) {
                        L[aR](E) && (F[E] = R.totalOrigin[E])
                    }
                    R.el.attr(F), ad(R.anim, R.el, R.anim.percents[0], null, R.totalOrigin, R.repeat - 1)
                }
                R.next && !R.stop && ad(R.anim, R.el, R.next, null, R.totalOrigin, R.repeat)
            }
        }
        a2.svg && J && J.paper && J.paper.safari(), ak.length && ai(ah)
    }, ag = function (b) {
        return b > 255 ? 255 : b < 0 ? 0 : b
    };
    cL.animateWith = function (a, o, n, m, l, k) {
        var j = n ? a2.animation(n, m, l, k) : o;
        status = a.status(o);
        return this.animate(j).status(j, status * o.ms / j.ms)
    }, cL.onAnimation = function (b) {
        b ? eve.on("anim.frame." + this.id, b) : eve.unbind("anim.frame." + this.id);
        return this
    }, ae.prototype.delay = function (d) {
        var c = new ae(this.anim, this.ms);
        c.times = this.times, c.del = +d || 0;
        return c
    }, ae.prototype.repeat = function (d) {
        var c = new ae(this.anim, this.ms);
        c.del = this.del, c.times = ap.floor(an(d, 0)) || 1;
        return c
    }, a2.animation = function (a, n, m, l) {
        if (a instanceof ae) {
            return a
        }
        if (a2.is(m, "function") || !m) {
            l = l || m || null, m = null
        }
        a = Object(a), n = +n || 0;
        var k = {},
            j, g;
        for (g in a) {
            a[aR](g) && cF(g) != g && cF(g) + "%" != g && (j = !0, k[g] = a[g])
        }
        if (!j) {
            return new ae(a, n)
        }
        m && (k.easing = m), l && (k.callback = l);
        return new ae({
            100: k
        }, n)
    }, cL.animate = function (a, m, l, k) {
        var j = this;
        if (j.removed) {
            k && k.call(j);
            return j
        }
        var h = a instanceof ae ? a : a2.animation(a, m, l, k);
        ad(h, j, h.percents[0], null, j.attr());
        return j
    }, cL.setTime = function (d, c) {
        d && c != null && this.status(d, al(c, d.ms) / d.ms);
        return this
    }, cL.status = function (h, g) {
        var m = [],
            l = 0,
            k, j;
        if (g != null) {
            ad(h, this, -1, al(g, 1));
            return this
        }
        k = ak.length;
        for (; l < k; l++) {
            j = ak[l];
            if (j.el.id == this.id && (!h || j.anim == h)) {
                if (h) {
                    return j.status
                }
                m.push({
                    anim: j.anim,
                    status: j.status
                })
            }
        }
        if (h) {
            return 0
        }
        return m
    }, cL.pause = function (d) {
        for (var c = 0; c < ak.length; c++) {
            ak[c].el.id == this.id && (!d || ak[c].anim == d) && eve("anim.pause." + this.id, this, ak[c].anim) !== !1 && (ak[c].paused = !0)
        }
        return this
    }, cL.resume = function (e) {
        for (var d = 0; d < ak.length; d++) {
            if (ak[d].el.id == this.id && (!e || ak[d].anim == e)) {
                var f = ak[d];
                eve("anim.resume." + this.id, this, f.anim) !== !1 && (delete f.paused, this.status(f.anim, f.status))
            }
        }
        return this
    }, cL.stop = function (d) {
        for (var c = 0; c < ak.length; c++) {
            ak[c].el.id == this.id && (!d || ak[c].anim == d) && eve("anim.stop." + this.id, this, ak[c].anim) !== !1 && ak.splice(c--, 1)
        }
        return this
    }, cL.toString = function () {
        return "Raphaël's object"
    };
    var ac = function (e) {
            this.items = [], this.length = 0, this.type = "set";
            if (e) {
                for (var d = 0, f = e.length; d < f; d++) {
                    e[d] && (e[d].constructor == cL.constructor || e[d].constructor == ac) && (this[this.items.length] = this.items[this.items.length] = e[d], this.length++)
                }
            }
        },
        ab = ac.prototype;
    ab.push = function () {
        var f, e;
        for (var h = 0, g = arguments.length; h < g; h++) {
            f = arguments[h], f && (f.constructor == cL.constructor || f.constructor == ac) && (e = this.items.length, this[e] = this.items[e] = f, this.length++)
        }
        return this
    }, ab.pop = function () {
        this.length && delete this[this.length--];
        return this.items.pop()
    }, ab.forEach = function (f, e) {
        for (var h = 0, g = this.items.length; h < g; h++) {
            if (f.call(e, this.items[h], h) === !1) {
                return this
            }
        }
        return this
    };
    for (var aa in cL) {
        cL[aR](aa) && (ab[aa] = function (b) {
            return function () {
                var a = arguments;
                return this.forEach(function (d) {
                    d[b][aJ](d, a)
                })
            }
        }(aa))
    }
    ab.attr = function (a, m) {
        if (a && a2.is(a, cY) && a2.is(a[0], "object")) {
            for (var l = 0, k = a.length; l < k; l++) {
                this.items[l].attr(a[l])
            }
        } else {
            for (var j = 0, h = this.items.length; j < h; j++) {
                this.items[j].attr(a, m)
            }
        }
        return this
    }, ab.clear = function () {
        while (this.length) {
            this.pop()
        }
    }, ab.splice = function (k, j, q) {
        k = k < 0 ? an(this.length + k, 0) : k, j = an(0, al(this.length - k, j));
        var p = [],
            o = [],
            n = [],
            m;
        for (m = 2; m < arguments.length; m++) {
            n.push(arguments[m])
        }
        for (m = 0; m < j; m++) {
            o.push(this[k + m])
        }
        for (; m < this.length - k; m++) {
            p.push(this[k + m])
        }
        var l = n.length;
        for (m = 0; m < l + p.length; m++) {
            this.items[k + m] = this[k + m] = m < l ? n[m] : p[m - l]
        }
        m = this.items.length = this.length -= j - l;
        while (this[m]) {
            delete this[m++]
        }
        return new ac(o)
    }, ab.exclude = function (e) {
        for (var d = 0, f = this.length; d < f; d++) {
            if (this[d] == e) {
                this.splice(d, 1);
                return !0
            }
        }
    }, ab.animate = function (t, s, r, q) {
        (a2.is(r, "function") || !r) && (q = r || null);
        var p = this.items.length,
            o = p,
            n, m = this,
            l;
        if (!p) {
            return this
        }
        q && (l = function () {
            !--p && q.call(m)
        }), r = a2.is(r, c0) ? r : l;
        var a = a2.animation(t, s, r, l);
        n = this.items[--o].animate(a);
        while (o--) {
            this.items[o] && !this.items[o].removed && this.items[o].animateWith(n, a)
        }
        return this
    }, ab.insertAfter = function (d) {
        var c = this.items.length;
        while (c--) {
            this.items[c].insertAfter(d)
        }
        return this
    }, ab.getBBox = function () {
        var h = [],
            g = [],
            m = [],
            l = [];
        for (var k = this.items.length; k--;) {
            if (!this.items[k].removed) {
                var j = this.items[k].getBBox();
                h.push(j.x), g.push(j.y), m.push(j.x + j.width), l.push(j.y + j.height)
            }
        }
        h = al[aJ](0, h), g = al[aJ](0, g);
        return {
            x: h,
            y: g,
            width: an[aJ](0, m) - h,
            height: an[aJ](0, l) - g
        }
    }, ab.clone = function (e) {
        e = new ac;
        for (var d = 0, f = this.items.length; d < f; d++) {
            e.push(this.items[d].clone())
        }
        return e
    }, ab.toString = function () {
        return "Raphaël's set"
    }, a2.registerFont = function (j) {
        if (!j.face) {
            return j
        }
        this.fonts = this.fonts || {};
        var g = {
            w: j.w,
            face: {},
            glyphs: {}
        },
            o = j.face["font-family"];
        for (var n in j.face) {
            j.face[aR](n) && (g.face[n] = j.face[n])
        }
        this.fonts[o] ? this.fonts[o].push(g) : this.fonts[o] = [g];
        if (!j.svg) {
            g.face["units-per-em"] = cD(j.face["units-per-em"], 10);
            for (var m in j.glyphs) {
                if (j.glyphs[aR](m)) {
                    var l = j.glyphs[m];
                    g.glyphs[m] = {
                        w: l.w,
                        k: {},
                        d: l.d && "M" + l.d.replace(/[mlcxtrv]/g, function (b) {
                            return {
                                l: "L",
                                c: "C",
                                x: "z",
                                t: "m",
                                r: "l",
                                v: "c"
                            }[b] || "M"
                        }) + "z"
                    };
                    if (l.k) {
                        for (var k in l.k) {
                            l[aR](k) && (g.glyphs[m].k[k] = l.k[k])
                        }
                    }
                }
            }
        }
        return j
    }, aL.getFont = function (t, s, r, q) {
        q = q || "normal", r = r || "normal", s = +s || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }[s] || 400;
        if ( !! a2.fonts) {
            var p = a2.fonts[t];
            if (!p) {
                var o = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, aD) + "(\\s|$)", "i");
                for (var n in a2.fonts) {
                    if (a2.fonts[aR](n) && o.test(n)) {
                        p = a2.fonts[n];
                        break
                    }
                }
            }
            var m;
            if (p) {
                for (var g = 0, a = p.length; g < a; g++) {
                    m = p[g];
                    if (m.face["font-weight"] == s && (m.face["font-style"] == r || !m.face["font-style"]) && m.face["font-stretch"] == q) {
                        break
                    }
                }
            }
            return m
        }
    }, aL.print = function (L, K, J, I, H, G, F) {
        G = G || "middle", F = an(al(F || 0, 1), -1);
        var E = this.set(),
            D = aA(J)[ay](aD),
            C = 0,
            B = aD,
            A;
        a2.is(I, J) && (I = this.getFont(I));
        if (I) {
            A = (H || 16) / I.face["units-per-em"];
            var y = I.face.bbox[ay](aZ),
                x = +y[0],
                s = +y[1] + (G == "baseline" ? y[3] - y[1] + +I.face.descent : (y[3] - y[1]) / 2);
            for (var r = 0, p = D.length; r < p; r++) {
                var c = r && I.glyphs[D[r - 1]] || {},
                    a = I.glyphs[D[r]];
                C += r ? (c.w || I.w) + (c.k && c.k[D[r]] || 0) + I.w * F : 0, a && a.d && E.push(this.path(a.d).attr({
                    fill: "#000",
                    stroke: "none",
                    transform: [
                        ["t", C * A, 0]
                    ]
                }))
            }
            E.transform(["...s", A, A, x, s, "t", (L - x) / A, (K - s) / A])
        }
        return E
    }, a2.format = function (a, f) {
        var e = a2.is(f, cY) ? [0][aI](f) : arguments;
        a && a2.is(a, c0) && e.length - 1 && (a = a.replace(aU, function (d, c) {
            return e[++c] == null ? aD : e[c]
        }));
        return a || aD
    }, a2.fullfill = function () {
        var e = /\{([^\}]+)\}/g,
            d = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
            f = function (b, j, h) {
                var g = h;
                j.replace(d, function (l, k, o, n, m) {
                    k = k || n, g && (k in g && (g = g[k]), typeof g == "function" && m && (g = g()))
                }), g = (g == null || g == h ? b : g) + "";
                return g
            };
        return function (a, c) {
            return String(a).replace(e, function (h, g) {
                return f(h, g, c)
            })
        }
    }(), a2.ninja = function () {
        aN.was ? aP.win.Raphael = aN.is : delete Raphael;
        return a2
    }, a2.st = ab, function (a, h, g) {
        function f() {
            /in/.test(a.readyState) ? setTimeout(f, 9) : a2.eve("DOMload")
        }
        a.readyState == null && a.addEventListener && (a.addEventListener(h, g = function () {
            a.removeEventListener(h, g, !1), a.readyState = "complete"
        }, !1), a.readyState = "loading"), f()
    }(document, "DOMContentLoaded"), aN.was ? aP.win.Raphael = a2 : Raphael = a2, eve.on("DOMload", function () {
        a0 = !0
    })
}(), window.Raphael.svg &&
function (al) {
    var ak = "hasOwnProperty",
        aj = String,
        ai = parseFloat,
        ah = parseInt,
        ag = Math,
        af = ag.max,
        ae = ag.abs,
        ad = ag.pow,
        ac = /[, ]+/,
        ab = al.eve,
        aa = "",
        Z = " ",
        Y = "http://www.w3.org/1999/xlink",
        X = {
            block: "M5,0 0,2.5 5,5z",
            classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
            diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
            open: "M6,1 1,3.5 6,6",
            oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
        },
        W = {};
    al.toString = function () {
        return "Your browser supports SVG.\nYou are running Raphaël " + this.version
    };
    var U = function (c, b) {
            if (b) {
                typeof c == "string" && (c = U(c));
                for (var a in b) {
                    b[ak](a) && (a.substring(0, 6) == "xlink:" ? c.setAttributeNS(Y, a.substring(6), aj(b[a])) : c.setAttribute(a, aj(b[a])))
                }
            } else {
                c = al._g.doc.createElementNS("http://www.w3.org/2000/svg", c), c.style && (c.style.webkitTapHighlightColor = "rgba(0,0,0,0)")
            }
            return c
        },
        S = {},
        Q = /^url\(#(.*)\)$/,
        O = function (a, f) {
            var e = a.getAttribute("fill");
            e = e && e.match(Q), e && !--S[e[1]] && (delete S[e[1]], f.defs.removeChild(al._g.doc.getElementById(e[1])))
        },
        M = function (A, q) {
            var l = "linear",
                h = A.id + q,
                g = 0.5,
                f = 0.5,
                d = A.node,
                c = A.paper,
                a = d.style,
                am = al._g.doc.getElementById(h);
            if (!am) {
                q = aj(q).replace(al._radial_gradient, function (k, j, n) {
                    l = "radial";
                    if (j && n) {
                        g = ai(j), f = ai(n);
                        var m = (f > 0.5) * 2 - 1;
                        ad(g - 0.5, 2) + ad(f - 0.5, 2) > 0.25 && (f = ag.sqrt(0.25 - ad(g - 0.5, 2)) * m + 0.5) && f != 0.5 && (f = f.toFixed(5) - 0.00001 * m)
                    }
                    return aa
                }), q = q.split(/\s*\-\s*/);
                if (l == "linear") {
                    var F = q.shift();
                    F = -ai(F);
                    if (isNaN(F)) {
                        return null
                    }
                    var E = [0, 0, ag.cos(al.rad(F)), ag.sin(al.rad(F))],
                        D = 1 / (af(ae(E[2]), ae(E[3])) || 1);
                    E[2] *= D, E[3] *= D, E[2] < 0 && (E[0] = -E[2], E[2] = 0), E[3] < 0 && (E[1] = -E[3], E[3] = 0)
                }
                var C = al._parseDots(q);
                if (!C) {
                    return null
                }
                A.gradient && (c.defs.removeChild(A.gradient), delete A.gradient), h = h.replace(/[\(\)\s,\xb0#]/g, "-"), am = U(l + "Gradient", {
                    id: h
                }), A.gradient = am, U(am, l == "radial" ? {
                    fx: g,
                    fy: f
                } : {
                    x1: E[0],
                    y1: E[1],
                    x2: E[2],
                    y2: E[3],
                    gradientTransform: A.matrix.invert()
                }), c.defs.appendChild(am);
                for (var B = 0, z = C.length; B < z; B++) {
                    am.appendChild(U("stop", {
                        offset: C[B].offset ? C[B].offset : B ? "100%" : "0%",
                        "stop-color": C[B].color || "#fff"
                    }))
                }
            }
            U(d, {
                fill: "url(#" + h + ")",
                opacity: 1,
                "fill-opacity": 1
            }), a.fill = aa, a.opacity = 1, a.fillOpacity = 1;
            return 1
        },
        K = function (d) {
            var c = d.getBBox(1);
            U(d.pattern, {
                patternTransform: d.matrix.invert() + " translate(" + c.x + "," + c.y + ")"
            })
        },
        J = function (aE, aD, aC) {
            if (aE.type == "path") {
                var aB = aj(aD).toLowerCase().split("-"),
                    aA = aE.paper,
                    az = aC ? "end" : "start",
                    ay = aE.node,
                    ax = aE.attrs,
                    aw = ax["stroke-width"],
                    av = aB.length,
                    ar = "classic",
                    ap, an, q, o, m, c = 3,
                    b = 3,
                    a = 5;
                while (av--) {
                    switch (aB[av]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                        ar = aB[av];
                        break;
                    case "wide":
                        b = 5;
                        break;
                    case "narrow":
                        b = 2;
                        break;
                    case "long":
                        c = 5;
                        break;
                    case "short":
                        c = 2
                    }
                }
                ar == "open" ? (c += 2, b += 2, a += 2, q = 1, o = aC ? 4 : 1, m = {
                    fill: "none",
                    stroke: ax.stroke
                }) : (o = q = c / 2, m = {
                    fill: ax.stroke,
                    stroke: "none"
                }), aE._.arrows ? aC ? (aE._.arrows.endPath && W[aE._.arrows.endPath]--, aE._.arrows.endMarker && W[aE._.arrows.endMarker]--) : (aE._.arrows.startPath && W[aE._.arrows.startPath]--, aE._.arrows.startMarker && W[aE._.arrows.startMarker]--) : aE._.arrows = {};
                if (ar != "none") {
                    var au = "raphael-marker-" + ar,
                        at = "raphael-marker-" + az + ar + c + b;
                    al._g.doc.getElementById(au) ? W[au]++ : (aA.defs.appendChild(U(U("path"), {
                        "stroke-linecap": "round",
                        d: X[ar],
                        id: au
                    })), W[au] = 1);
                    var aq = al._g.doc.getElementById(at),
                        ao;
                    aq ? (W[at]++, ao = aq.getElementsByTagName("use")[0]) : (aq = U(U("marker"), {
                        id: at,
                        markerHeight: b,
                        markerWidth: c,
                        orient: "auto",
                        refX: o,
                        refY: b / 2
                    }), ao = U(U("use"), {
                        "xlink:href": "#" + au,
                        transform: (aC ? " rotate(180 " + c / 2 + " " + b / 2 + ") " : Z) + "scale(" + c / a + "," + b / a + ")",
                        "stroke-width": 1 / ((c / a + b / a) / 2)
                    }), aq.appendChild(ao), aA.defs.appendChild(aq), W[at] = 1), U(ao, m);
                    var am = q * (ar != "diamond" && ar != "oval");
                    aC ? (ap = aE._.arrows.startdx * aw || 0, an = al.getTotalLength(ax.path) - am * aw) : (ap = am * aw, an = al.getTotalLength(ax.path) - (aE._.arrows.enddx * aw || 0)), m = {}, m["marker-" + az] = "url(#" + at + ")";
                    if (an || ap) {
                        m.d = Raphael.getSubpath(ax.path, ap, an)
                    }
                    U(ay, m), aE._.arrows[az + "Path"] = au, aE._.arrows[az + "Marker"] = at, aE._.arrows[az + "dx"] = am, aE._.arrows[az + "Type"] = ar, aE._.arrows[az + "String"] = aD
                } else {
                    aC ? (ap = aE._.arrows.startdx * aw || 0, an = al.getTotalLength(ax.path) - ap) : (ap = 0, an = al.getTotalLength(ax.path) - (aE._.arrows.enddx * aw || 0)), aE._.arrows[az + "Path"] && U(ay, {
                        d: Raphael.getSubpath(ax.path, ap, an)
                    }), delete aE._.arrows[az + "Path"], delete aE._.arrows[az + "Marker"], delete aE._.arrows[az + "dx"], delete aE._.arrows[az + "Type"], delete aE._.arrows[az + "String"]
                }
                for (m in W) {
                    if (W[ak](m) && !W[m]) {
                        var p = al._g.doc.getElementById(m);
                        p && p.parentNode.removeChild(p)
                    }
                }
            }
        },
        I = {
            "": [0],
            none: [0],
            "-": [3, 1],
            ".": [1, 1],
            "-.": [3, 1, 1, 1],
            "-..": [3, 1, 1, 1, 1, 1],
            ". ": [1, 3],
            "- ": [4, 3],
            "--": [8, 3],
            "- .": [4, 3, 1, 3],
            "--.": [8, 3, 1, 3],
            "--..": [8, 3, 1, 3, 1, 3]
        },
        H = function (j, c, o) {
            c = I[aj(c).toLowerCase()];
            if (c) {
                var n = j.attrs["stroke-width"] || "1",
                    m = {
                        round: n,
                        square: n,
                        butt: 0
                    }[j.attrs["stroke-linecap"] || o["stroke-linecap"]] || 0,
                    l = [],
                    k = c.length;
                while (k--) {
                    l[k] = c[k] * n + (k % 2 ? 1 : -1) * m
                }
                U(j.node, {
                    "stroke-dasharray": l.join(",")
                })
            }
        },
        G = function (ap, ao) {
            var an = ap.node,
                am = ap.attrs,
                B = an.style.visibility;
            an.style.visibility = "hidden";
            for (var y in ao) {
                if (ao[ak](y)) {
                    if (!al._availableAttrs[ak](y)) {
                        continue
                    }
                    var w = ao[y];
                    am[y] = w;
                    switch (y) {
                    case "blur":
                        ap.blur(w);
                        break;
                    case "href":
                    case "title":
                    case "target":
                        var u = an.parentNode;
                        if (u.tagName.toLowerCase() != "a") {
                            var l = U("a");
                            u.insertBefore(l, an), l.appendChild(an), u = l
                        }
                        y == "target" && w == "blank" ? u.setAttributeNS(Y, "show", "new") : u.setAttributeNS(Y, y, w);
                        break;
                    case "cursor":
                        an.style.cursor = w;
                        break;
                    case "transform":
                        ap.transform(w);
                        break;
                    case "arrow-start":
                        J(ap, w);
                        break;
                    case "arrow-end":
                        J(ap, w, 1);
                        break;
                    case "clip-rect":
                        var j = aj(w).split(ac);
                        if (j.length == 4) {
                            ap.clip && ap.clip.parentNode.parentNode.removeChild(ap.clip.parentNode);
                            var b = U("clipPath"),
                                a = U("rect");
                            b.id = al.createUUID(), U(a, {
                                x: j[0],
                                y: j[1],
                                width: j[2],
                                height: j[3]
                            }), b.appendChild(a), ap.paper.defs.appendChild(b), U(an, {
                                "clip-path": "url(#" + b.id + ")"
                            }), ap.clip = a
                        }
                        if (!w) {
                            var v = al._g.doc.getElementById(an.getAttribute("clip-path").replace(/(^url\(#|\)$)/g, aa));
                            v && v.parentNode.removeChild(v), U(an, {
                                "clip-path": aa
                            }), delete ap.clip
                        }
                        break;
                    case "path":
                        ap.type == "path" && (U(an, {
                            d: w ? am.path = al._pathToAbsolute(w) : "M0,0"
                        }), ap._.dirty = 1, ap._.arrows && ("startString" in ap._.arrows && J(ap, ap._.arrows.startString), "endString" in ap._.arrows && J(ap, ap._.arrows.endString, 1)));
                        break;
                    case "width":
                        an.setAttribute(y, w), ap._.dirty = 1;
                        if (am.fx) {
                            y = "x", w = am.x
                        } else {
                            break
                        }
                    case "x":
                        am.fx && (w = -am.x - (am.width || 0));
                    case "rx":
                        if (y == "rx" && ap.type == "rect") {
                            break
                        }
                    case "cx":
                        an.setAttribute(y, w), ap.pattern && K(ap), ap._.dirty = 1;
                        break;
                    case "height":
                        an.setAttribute(y, w), ap._.dirty = 1;
                        if (am.fy) {
                            y = "y", w = am.y
                        } else {
                            break
                        }
                    case "y":
                        am.fy && (w = -am.y - (am.height || 0));
                    case "ry":
                        if (y == "ry" && ap.type == "rect") {
                            break
                        }
                    case "cy":
                        an.setAttribute(y, w), ap.pattern && K(ap), ap._.dirty = 1;
                        break;
                    case "r":
                        ap.type == "rect" ? U(an, {
                            rx: w,
                            ry: w
                        }) : an.setAttribute(y, w), ap._.dirty = 1;
                        break;
                    case "src":
                        ap.type == "image" && an.setAttributeNS(Y, "href", w);
                        break;
                    case "stroke-width":
                        if (ap._.sx != 1 || ap._.sy != 1) {
                            w /= af(ae(ap._.sx), ae(ap._.sy)) || 1
                        }
                        ap.paper._vbSize && (w *= ap.paper._vbSize), an.setAttribute(y, w), am["stroke-dasharray"] && H(ap, am["stroke-dasharray"], ao), ap._.arrows && ("startString" in ap._.arrows && J(ap, ap._.arrows.startString), "endString" in ap._.arrows && J(ap, ap._.arrows.endString, 1));
                        break;
                    case "stroke-dasharray":
                        H(ap, w, ao);
                        break;
                    case "fill":
                        var q = aj(w).match(al._ISURL);
                        if (q) {
                            b = U("pattern");
                            var n = U("image");
                            b.id = al.createUUID(), U(b, {
                                x: 0,
                                y: 0,
                                patternUnits: "userSpaceOnUse",
                                height: 1,
                                width: 1
                            }), U(n, {
                                x: 0,
                                y: 0,
                                "xlink:href": q[1]
                            }), b.appendChild(n), function (d) {
                                al._preload(q[1], function () {
                                    var f = this.offsetWidth,
                                        k = this.offsetHeight;
                                    U(d, {
                                        width: f,
                                        height: k
                                    }), U(n, {
                                        width: f,
                                        height: k
                                    }), ap.paper.safari()
                                })
                            }(b), ap.paper.defs.appendChild(b), an.style.fill = "url(#" + b.id + ")", U(an, {
                                fill: "url(#" + b.id + ")"
                            }), ap.pattern = b, ap.pattern && K(ap);
                            break
                        }
                        var h = al.getRGB(w);
                        if (!h.error) {
                            delete ao.gradient, delete am.gradient, !al.is(am.opacity, "undefined") && al.is(ao.opacity, "undefined") && U(an, {
                                opacity: am.opacity
                            }), !al.is(am["fill-opacity"], "undefined") && al.is(ao["fill-opacity"], "undefined") && U(an, {
                                "fill-opacity": am["fill-opacity"]
                            })
                        } else {
                            if ((ap.type == "circle" || ap.type == "ellipse" || aj(w).charAt() != "r") && M(ap, w)) {
                                if ("opacity" in am || "fill-opacity" in am) {
                                    var g = al._g.doc.getElementById(an.getAttribute("fill").replace(/^url\(#|\)$/g, aa));
                                    if (g) {
                                        var e = g.getElementsByTagName("stop");
                                        U(e[e.length - 1], {
                                            "stop-opacity": ("opacity" in am ? am.opacity : 1) * ("fill-opacity" in am ? am["fill-opacity"] : 1)
                                        })
                                    }
                                }
                                am.gradient = w, am.fill = "none";
                                break
                            }
                        }
                        h[ak]("opacity") && U(an, {
                            "fill-opacity": h.opacity > 1 ? h.opacity / 100 : h.opacity
                        });
                    case "stroke":
                        h = al.getRGB(w), an.setAttribute(y, h.hex), y == "stroke" && h[ak]("opacity") && U(an, {
                            "stroke-opacity": h.opacity > 1 ? h.opacity / 100 : h.opacity
                        }), y == "stroke" && ap._.arrows && ("startString" in ap._.arrows && J(ap, ap._.arrows.startString), "endString" in ap._.arrows && J(ap, ap._.arrows.endString, 1));
                        break;
                    case "gradient":
                        (ap.type == "circle" || ap.type == "ellipse" || aj(w).charAt() != "r") && M(ap, w);
                        break;
                    case "opacity":
                        am.gradient && !am[ak]("stroke-opacity") && U(an, {
                            "stroke-opacity": w > 1 ? w / 100 : w
                        });
                    case "fill-opacity":
                        if (am.gradient) {
                            g = al._g.doc.getElementById(an.getAttribute("fill").replace(/^url\(#|\)$/g, aa)), g && (e = g.getElementsByTagName("stop"), U(e[e.length - 1], {
                                "stop-opacity": w
                            }));
                            break
                        }
                    default:
                        y == "font-size" && (w = ah(w, 10) + "px");
                        var c = y.replace(/(\-.)/g, function (d) {
                            return d.substring(1).toUpperCase()
                        });
                        an.style[c] = w, ap._.dirty = 1, an.setAttribute(y, w)
                    }
                }
            }
            T(ap, ao), an.style.visibility = B
        },
        V = 1.2,
        T = function (x, w) {
            if (x.type == "text" && !! (w[ak]("text") || w[ak]("font") || w[ak]("font-size") || w[ak]("x") || w[ak]("y"))) {
                var v = x.attrs,
                    u = x.node,
                    t = u.firstChild ? ah(al._g.doc.defaultView.getComputedStyle(u.firstChild, aa).getPropertyValue("font-size"), 10) : 10;
                if (w[ak]("text")) {
                    v.text = w.text;
                    while (u.firstChild) {
                        u.removeChild(u.firstChild)
                    }
                    var s = aj(w.text).split("\n"),
                        q = [],
                        l;
                    for (var e = 0, c = s.length; e < c; e++) {
                        l = U("tspan"), e && U(l, {
                            dy: t * V,
                            x: v.x
                        }), l.appendChild(al._g.doc.createTextNode(s[e])), u.appendChild(l), q[e] = l
                    }
                } else {
                    q = u.getElementsByTagName("tspan");
                    for (e = 0, c = q.length; e < c; e++) {
                        e ? U(q[e], {
                            dy: t * V,
                            x: v.x
                        }) : U(q[0], {
                            dy: 0
                        })
                    }
                }
                U(u, {
                    x: v.x,
                    y: v.y
                }), x._.dirty = 1;
                var b = x._getBBox(),
                    a = v.y - (b.y + b.height / 2);
                a && al.is(a, "finite") && U(q[0], {
                    dy: a
                })
            }
        },
        R = function (a, h) {
            var g = 0,
                f = 0;
            this[0] = this.node = a, a.raphael = !0, this.id = al._oid++, a.raphaelid = this.id, this.matrix = al.matrix(), this.realPath = null, this.paper = h, this.attrs = this.attrs || {}, this._ = {
                transform: [],
                sx: 1,
                sy: 1,
                deg: 0,
                dx: 0,
                dy: 0,
                dirty: 1
            }, !h.bottom && (h.bottom = this), this.prev = h.top, h.top && (h.top.next = this), h.top = this, this.next = null
        },
        P = al.el;
    R.prototype = P, P.constructor = R, al._engine.path = function (f, e) {
        var h = U("path");
        e.canvas && e.canvas.appendChild(h);
        var g = new R(h, e);
        g.type = "path", G(g, {
            fill: "none",
            stroke: "#000",
            path: f
        });
        return g
    }, P.rotate = function (d, c, h) {
        if (this.removed) {
            return this
        }
        d = aj(d).split(ac), d.length - 1 && (c = ai(d[1]), h = ai(d[2])), d = ai(d[0]), h == null && (c = h);
        if (c == null || h == null) {
            var g = this.getBBox(1);
            c = g.x + g.width / 2, h = g.y + g.height / 2
        }
        this.transform(this._.transform.concat([
            ["r", d, c, h]
        ]));
        return this
    }, P.scale = function (d, c, k, j) {
        if (this.removed) {
            return this
        }
        d = aj(d).split(ac), d.length - 1 && (c = ai(d[1]), k = ai(d[2]), j = ai(d[3])), d = ai(d[0]), c == null && (c = d), j == null && (k = j);
        if (k == null || j == null) {
            var h = this.getBBox(1)
        }
        k = k == null ? h.x + h.width / 2 : k, j = j == null ? h.y + h.height / 2 : j, this.transform(this._.transform.concat([
            ["s", d, c, k, j]
        ]));
        return this
    }, P.translate = function (d, c) {
        if (this.removed) {
            return this
        }
        d = aj(d).split(ac), d.length - 1 && (c = ai(d[1])), d = ai(d[0]) || 0, c = +c || 0, this.transform(this._.transform.concat([
            ["t", d, c]
        ]));
        return this
    }, P.transform = function (f) {
        var b = this._;
        if (f == null) {
            return b.transform
        }
        al._extractTransform(this, f), this.clip && U(this.clip, {
            transform: this.matrix.invert()
        }), this.pattern && K(this), this.node && U(this.node, {
            transform: this.matrix
        });
        if (b.sx != 1 || b.sy != 1) {
            var a = this.attrs[ak]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({
                "stroke-width": a
            })
        }
        return this
    }, P.hide = function () {
        !this.removed && this.paper.safari(this.node.style.display = "none");
        return this
    }, P.show = function () {
        !this.removed && this.paper.safari(this.node.style.display = "");
        return this
    }, P.remove = function () {
        if (!this.removed) {
            this.paper.__set__ && this.paper.__set__.exclude(this), ab.unbind("*.*." + this.id), al._tear(this, this.paper), this.node.parentNode.removeChild(this.node);
            for (var a in this) {
                delete this[a]
            }
            this.removed = !0
        }
    }, P._getBBox = function () {
        if (this.node.style.display == "none") {
            this.show();
            var e = !0
        }
        var d = {};
        try {
            d = this.node.getBBox()
        } catch (f) {} finally {
            d = d || {}
        }
        e && this.hide();
        return d
    }, P.attr = function (x, w) {
        if (this.removed) {
            return this
        }
        if (x == null) {
            var v = {};
            for (var u in this.attrs) {
                this.attrs[ak](u) && (v[u] = this.attrs[u])
            }
            v.gradient && v.fill == "none" && (v.fill = v.gradient) && delete v.gradient, v.transform = this._.transform;
            return v
        }
        if (w == null && al.is(x, "string")) {
            if (x == "fill" && this.attrs.fill == "none" && this.attrs.gradient) {
                return this.attrs.gradient
            }
            if (x == "transform") {
                return this._.transform
            }
            var t = x.split(ac),
                s = {};
            for (var r = 0, q = t.length; r < q; r++) {
                x = t[r], x in this.attrs ? s[x] = this.attrs[x] : al.is(this.paper.customAttributes[x], "function") ? s[x] = this.paper.customAttributes[x].def : s[x] = al._availableAttrs[x]
            }
            return q - 1 ? s : s[t[0]]
        }
        if (w == null && al.is(x, "array")) {
            s = {};
            for (r = 0, q = x.length; r < q; r++) {
                s[x[r]] = this.attr(x[r])
            }
            return s
        }
        if (w != null) {
            var k = {};
            k[x] = w
        } else {
            x != null && al.is(x, "object") && (k = x)
        }
        for (var j in k) {
            ab("attr." + j + "." + this.id, this, k[j])
        }
        for (j in this.paper.customAttributes) {
            if (this.paper.customAttributes[ak](j) && k[ak](j) && al.is(this.paper.customAttributes[j], "function")) {
                var b = this.paper.customAttributes[j].apply(this, [].concat(k[j]));
                this.attrs[j] = k[j];
                for (var a in b) {
                    b[ak](a) && (k[a] = b[a])
                }
            }
        }
        G(this, k);
        return this
    }, P.toFront = function () {
        if (this.removed) {
            return this
        }
        this.node.parentNode.appendChild(this.node);
        var a = this.paper;
        a.top != this && al._tofront(this, a);
        return this
    }, P.toBack = function () {
        if (this.removed) {
            return this
        }
        if (this.node.parentNode.firstChild != this.node) {
            this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), al._toback(this, this.paper);
            var a = this.paper
        }
        return this
    }, P.insertAfter = function (a) {
        if (this.removed) {
            return this
        }
        var d = a.node || a[a.length - 1].node;
        d.nextSibling ? d.parentNode.insertBefore(this.node, d.nextSibling) : d.parentNode.appendChild(this.node), al._insertafter(this, a, this.paper);
        return this
    }, P.insertBefore = function (a) {
        if (this.removed) {
            return this
        }
        var d = a.node || a[0].node;
        d.parentNode.insertBefore(this.node, d), al._insertbefore(this, a, this.paper);
        return this
    }, P.blur = function (a) {
        var h = this;
        if (+a !== 0) {
            var g = U("filter"),
                f = U("feGaussianBlur");
            h.attrs.blur = a, g.id = al.createUUID(), U(f, {
                stdDeviation: +a || 1.5
            }), g.appendChild(f), h.paper.defs.appendChild(g), h._blur = g, U(h.node, {
                filter: "url(#" + g.id + ")"
            })
        } else {
            h._blur && (h._blur.parentNode.removeChild(h._blur), delete h._blur, delete h.attrs.blur), h.node.removeAttribute("filter")
        }
    }, al._engine.circle = function (h, g, m, l) {
        var k = U("circle");
        h.canvas && h.canvas.appendChild(k);
        var j = new R(k, h);
        j.attrs = {
            cx: g,
            cy: m,
            r: l,
            fill: "none",
            stroke: "#000"
        }, j.type = "circle", U(k, j.attrs);
        return j
    }, al._engine.rect = function (k, j, q, p, o, n) {
        var m = U("rect");
        k.canvas && k.canvas.appendChild(m);
        var l = new R(m, k);
        l.attrs = {
            x: j,
            y: q,
            width: p,
            height: o,
            r: n || 0,
            rx: n || 0,
            ry: n || 0,
            fill: "none",
            stroke: "#000"
        }, l.type = "rect", U(m, l.attrs);
        return l
    }, al._engine.ellipse = function (j, h, o, n, m) {
        var l = U("ellipse");
        j.canvas && j.canvas.appendChild(l);
        var k = new R(l, j);
        k.attrs = {
            cx: h,
            cy: o,
            rx: n,
            ry: m,
            fill: "none",
            stroke: "#000"
        }, k.type = "ellipse", U(l, k.attrs);
        return k
    }, al._engine.image = function (k, j, q, p, o, n) {
        var m = U("image");
        U(m, {
            x: q,
            y: p,
            width: o,
            height: n,
            preserveAspectRatio: "none"
        }), m.setAttributeNS(Y, "href", j), k.canvas && k.canvas.appendChild(m);
        var l = new R(m, k);
        l.attrs = {
            x: q,
            y: p,
            width: o,
            height: n,
            src: j
        }, l.type = "image";
        return l
    }, al._engine.text = function (a, m, l, k) {
        var j = U("text");
        a.canvas && a.canvas.appendChild(j);
        var h = new R(j, a);
        h.attrs = {
            x: m,
            y: l,
            "text-anchor": "middle",
            text: k,
            font: al._availableAttrs.font,
            stroke: "none",
            fill: "#000"
        }, h.type = "text", G(h, h.attrs);
        return h
    }, al._engine.setSize = function (d, c) {
        this.width = d || this.width, this.height = c || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox);
        return this
    }, al._engine.create = function () {
        var r = al._getContainer.apply(0, arguments),
            q = r && r.container,
            p = r.x,
            o = r.y,
            n = r.width,
            m = r.height;
        if (!q) {
            throw new Error("SVG container not found.")
        }
        var l = U("svg"),
            k = "overflow:hidden;",
            a;
        p = p || 0, o = o || 0, n = n || 512, m = m || 342, U(l, {
            height: m,
            version: 1.1,
            width: n,
            xmlns: "http://www.w3.org/2000/svg"
        }), q == 1 ? (l.style.cssText = k + "position:absolute;left:" + p + "px;top:" + o + "px", al._g.doc.body.appendChild(l), a = 1) : (l.style.cssText = k + "position:relative", q.firstChild ? q.insertBefore(l, q.firstChild) : q.appendChild(l)), q = new al._Paper, q.width = n, q.height = m, q.canvas = l, q.clear(), q._left = q._top = 0, a && (q.renderfix = function () {}), q.renderfix();
        return q
    }, al._engine.setViewBox = function (t, s, r, q, p) {
        ab("setViewBox", this, this._viewBox, [t, s, r, q, p]);
        var o = af(r / this.width, q / this.height),
            n = this.top,
            m = p ? "meet" : "xMinYMin",
            k, g;
        t == null ? (this._vbSize && (o = 1), delete this._vbSize, k = "0 0 " + this.width + Z + this.height) : (this._vbSize = o, k = t + Z + s + Z + r + Z + q), U(this.canvas, {
            viewBox: k,
            preserveAspectRatio: m
        });
        while (o && n) {
            g = "stroke-width" in n.attrs ? n.attrs["stroke-width"] : 1, n.attr({
                "stroke-width": g
            }), n._.dirty = 1, n._.dirtyT = 1, n = n.prev
        }
        this._viewBox = [t, s, r, q, !! p];
        return this
    }, al.prototype.renderfix = function () {
        var g = this.canvas,
            f = g.style,
            k = g.getScreenCTM() || g.createSVGMatrix(),
            j = -k.e % 1,
            h = -k.f % 1;
        if (j || h) {
            j && (this._left = (this._left + j) % 1, f.left = this._left + "px"), h && (this._top = (this._top + h) % 1, f.top = this._top + "px")
        }
    }, al.prototype.clear = function () {
        al.eve("clear", this);
        var a = this.canvas;
        while (a.firstChild) {
            a.removeChild(a.firstChild)
        }
        this.bottom = this.top = null, (this.desc = U("desc")).appendChild(al._g.doc.createTextNode("Created with Raphaël " + al.version)), a.appendChild(this.desc), a.appendChild(this.defs = U("defs"))
    }, al.prototype.remove = function () {
        ab("remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        for (var b in this) {
            this[b] = removed(b)
        }
    };
    var N = al.st;
    for (var L in P) {
        P[ak](L) && !N[ak](L) && (N[L] = function (b) {
            return function () {
                var a = arguments;
                return this.forEach(function (d) {
                    d[b].apply(d, a)
                })
            }
        }(L))
    }
}(window.Raphael), window.Raphael.vml &&
function (aj) {
    var ai = "hasOwnProperty",
        ah = String,
        ag = parseFloat,
        af = Math,
        ae = af.round,
        ad = af.max,
        ac = af.min,
        ab = af.abs,
        aa = "fill",
        Z = /[, ]+/,
        Y = aj.eve,
        X = " progid:DXImageTransform.Microsoft",
        W = " ",
        V = "",
        U = {
            M: "m",
            L: "l",
            C: "c",
            Z: "x",
            m: "t",
            l: "r",
            c: "v",
            z: "x"
        },
        S = /([clmz]),?([^clmz]*)/gi,
        Q = / progid:\S+Blur\([^\)]+\)/g,
        O = /-?[^,\s-]+/g,
        M = "position:absolute;left:0;top:0;width:1px;height:1px",
        K = 21600,
        J = {
            path: 1,
            rect: 1,
            image: 1
        },
        I = {
            circle: 1,
            ellipse: 1
        },
        H = function (v) {
            var u = /[ahqstv]/ig,
                t = aj._pathToAbsolute;
            ah(v).match(u) && (t = aj._path2curve), u = /[clmz]/g;
            if (t == aj._pathToAbsolute && !ah(v).match(u)) {
                var s = ah(v).replace(S, function (j, h, r) {
                    var m = [],
                        l = h.toLowerCase() == "m",
                        k = U[h];
                    r.replace(O, function (b) {
                        l && m.length == 2 && (k += m + U[h == "m" ? "l" : "L"], m = []), m.push(ae(b * K))
                    });
                    return k + m
                });
                return s
            }
            var q = t(v),
                p, o;
            s = [];
            for (var n = 0, f = q.length; n < f; n++) {
                p = q[n], o = q[n][0].toLowerCase(), o == "z" && (o = "x");
                for (var c = 1, a = p.length; c < a; c++) {
                    o += ae(p[c] * K) + (c != a - 1 ? "," : V)
                }
                s.push(o)
            }
            return s.join(W)
        },
        G = function (a, h, g) {
            var f = aj.matrix();
            f.rotate(-a, 0.5, 0.5);
            return {
                dx: f.x(h, g),
                dy: f.y(h, g)
            }
        },
        F = function (ap, ao, an, am, al, ak) {
            var E = ap._,
                D = ap.matrix,
                C = E.fillpos,
                B = ap.node,
                A = B.style,
                z = 1,
                y = "",
                x, w = K / ao,
                u = K / an;
            A.visibility = "hidden";
            if ( !! ao && !! an) {
                B.coordsize = ab(w) + W + ab(u), A.rotation = ak * (ao * an < 0 ? -1 : 1);
                if (ak) {
                    var n = G(ak, am, al);
                    am = n.dx, al = n.dy
                }
                ao < 0 && (y += "x"), an < 0 && (y += " y") && (z = -1), A.flip = y, B.coordorigin = am * -w + W + al * -u;
                if (C || E.fillsize) {
                    var j = B.getElementsByTagName(aa);
                    j = j && j[0], B.removeChild(j), C && (n = G(ak, D.x(C[0], C[1]), D.y(C[0], C[1])), j.position = n.dx * z + W + n.dy * z), E.fillsize && (j.size = E.fillsize[0] * ab(ao) + W + E.fillsize[1] * ab(an)), B.appendChild(j)
                }
                A.visibility = "visible"
            }
        };
    aj.toString = function () {
        return "Your browser doesn't support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
    }, addArrow = function (t, s, r) {
        var q = ah(s).toLowerCase().split("-"),
            p = r ? "end" : "start",
            o = q.length,
            n = "classic",
            m = "medium",
            l = "medium";
        while (o--) {
            switch (q[o]) {
            case "block":
            case "classic":
            case "oval":
            case "diamond":
            case "open":
            case "none":
                n = q[o];
                break;
            case "wide":
            case "narrow":
                l = q[o];
                break;
            case "long":
            case "short":
                m = q[o]
            }
        }
        var c = t.node.getElementsByTagName("stroke")[0];
        c[p + "arrow"] = n, c[p + "arrowlength"] = m, c[p + "arrowwidth"] = l
    }, setFillAndStroke = function (aB, aA) {
        aB.attrs = aB.attrs || {};
        var az = aB.node,
            ay = aB.attrs,
            ax = az.style,
            av, au = J[aB.type] && (aA.x != ay.x || aA.y != ay.y || aA.width != ay.width || aA.height != ay.height || aA.cx != ay.cx || aA.cy != ay.cy || aA.rx != ay.rx || aA.ry != ay.ry || aA.r != ay.r),
            aq = I[aB.type] && (ay.cx != aA.cx || ay.cy != aA.cy || ay.r != aA.r || ay.rx != aA.rx || ay.ry != aA.ry),
            ap = aB;
        for (var B in aA) {
            aA[ai](B) && (ay[B] = aA[B])
        }
        au && (ay.path = aj._getPath[aB.type](aB), aB._.dirty = 1), aA.href && (az.href = aA.href), aA.title && (az.title = aA.title), aA.target && (az.target = aA.target), aA.cursor && (ax.cursor = aA.cursor), "blur" in aA && aB.blur(aA.blur);
        if (aA.path && aB.type == "path" || au) {
            az.path = H(~ah(ay.path).toLowerCase().indexOf("r") ? aj._pathToAbsolute(ay.path) : ay.path), aB.type == "image" && (aB._.fillpos = [ay.x, ay.y], aB._.fillsize = [ay.width, ay.height], F(aB, 1, 1, 0, 0, 0))
        }
        "transform" in aA && aB.transform(aA.transform);
        if (aq) {
            var aw = +ay.cx,
                at = +ay.cy,
                ar = +ay.rx || +ay.r || 0,
                ao = +ay.ry || +ay.r || 0;
            az.path = aj.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", ae((aw - ar) * K), ae((at - ao) * K), ae((aw + ar) * K), ae((at + ao) * K), ae(aw * K))
        }
        if ("clip-rect" in aA) {
            var an = ah(aA["clip-rect"]).split(Z);
            if (an.length == 4) {
                an[2] = +an[2] + +an[0], an[3] = +an[3] + +an[1];
                var am = az.clipRect || aj._g.doc.createElement("div"),
                    al = am.style;
                al.clip = aj.format("rect({1}px {2}px {3}px {0}px)", an), az.clipRect || (al.position = "absolute", al.top = 0, al.left = 0, al.width = aB.paper.width + "px", al.height = aB.paper.height + "px", az.parentNode.insertBefore(am, az), am.appendChild(az), az.clipRect = am)
            }
            aA["clip-rect"] || az.clipRect && (az.clipRect.style.clip = V)
        }
        if (aB.textpath) {
            var ak = aB.textpath.style;
            aA.font && (ak.font = aA.font), aA["font-family"] && (ak.fontFamily = '"' + aA["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, V) + '"'), aA["font-size"] && (ak.fontSize = aA["font-size"]), aA["font-weight"] && (ak.fontWeight = aA["font-weight"]), aA["font-style"] && (ak.fontStyle = aA["font-style"])
        }
        "arrow-start" in aA && addArrow(ap, aA["arrow-start"]), "arrow-end" in aA && addArrow(ap, aA["arrow-end"], 1);
        if (aA.opacity != null || aA["stroke-width"] != null || aA.fill != null || aA.src != null || aA.stroke != null || aA["stroke-width"] != null || aA["stroke-opacity"] != null || aA["fill-opacity"] != null || aA["stroke-dasharray"] != null || aA["stroke-miterlimit"] != null || aA["stroke-linejoin"] != null || aA["stroke-linecap"] != null) {
            var z = az.getElementsByTagName(aa),
                x = !1;
            z = z && z[0], !z && (x = z = R(aa)), aB.type == "image" && aA.src && (z.src = aA.src), aA.fill && (z.on = !0);
            if (z.on == null || aA.fill == "none" || aA.fill === null) {
                z.on = !1
            }
            if (z.on && aA.fill) {
                var w = ah(aA.fill).match(aj._ISURL);
                if (w) {
                    z.parentNode == az && az.removeChild(z), z.rotate = !0, z.src = w[1], z.type = "tile";
                    var v = aB.getBBox(1);
                    z.position = v.x + W + v.y, aB._.fillpos = [v.x, v.y], aj._preload(w[1], function () {
                        aB._.fillsize = [this.offsetWidth, this.offsetHeight]
                    })
                } else {
                    z.color = aj.getRGB(aA.fill).hex, z.src = V, z.type = "solid", aj.getRGB(aA.fill).error && (ap.type in {
                        circle: 1,
                        ellipse: 1
                    } || ah(aA.fill).charAt() != "r") && addGradientFill(ap, aA.fill, z) && (ay.fill = "none", ay.gradient = aA.fill, z.rotate = !1)
                }
            }
            if ("fill-opacity" in aA || "opacity" in aA) {
                var u = ((+ay["fill-opacity"] + 1 || 2) - 1) * ((+ay.opacity + 1 || 2) - 1) * ((+aj.getRGB(aA.fill).o + 1 || 2) - 1);
                u = ac(ad(u, 0), 1), z.opacity = u, z.src && (z.color = "none")
            }
            az.appendChild(z);
            var o = az.getElementsByTagName("stroke") && az.getElementsByTagName("stroke")[0],
                n = !1;
            !o && (n = o = R("stroke"));
            if (aA.stroke && aA.stroke != "none" || aA["stroke-width"] || aA["stroke-opacity"] != null || aA["stroke-dasharray"] || aA["stroke-miterlimit"] || aA["stroke-linejoin"] || aA["stroke-linecap"]) {
                o.on = !0
            }(aA.stroke == "none" || aA.stroke === null || o.on == null || aA.stroke == 0 || aA["stroke-width"] == 0) && (o.on = !1);
            var k = aj.getRGB(aA.stroke);
            o.on && aA.stroke && (o.color = k.hex), u = ((+ay["stroke-opacity"] + 1 || 2) - 1) * ((+ay.opacity + 1 || 2) - 1) * ((+k.o + 1 || 2) - 1);
            var h = (ag(aA["stroke-width"]) || 1) * 0.75;
            u = ac(ad(u, 0), 1), aA["stroke-width"] == null && (h = ay["stroke-width"]), aA["stroke-width"] && (o.weight = h), h && h < 1 && (u *= h) && (o.weight = 1), o.opacity = u, aA["stroke-linejoin"] && (o.joinstyle = aA["stroke-linejoin"] || "miter"), o.miterlimit = aA["stroke-miterlimit"] || 8, aA["stroke-linecap"] && (o.endcap = aA["stroke-linecap"] == "butt" ? "flat" : aA["stroke-linecap"] == "square" ? "square" : "round");
            if (aA["stroke-dasharray"]) {
                var g = {
                    "-": "shortdash",
                    ".": "shortdot",
                    "-.": "shortdashdot",
                    "-..": "shortdashdotdot",
                    ". ": "dot",
                    "- ": "dash",
                    "--": "longdash",
                    "- .": "dashdot",
                    "--.": "longdashdot",
                    "--..": "longdashdotdot"
                };
                o.dashstyle = g[ai](aA["stroke-dasharray"]) ? g[aA["stroke-dasharray"]] : V
            }
            n && az.appendChild(o)
        }
        if (ap.type == "text") {
            ap.paper.canvas.style.display = V;
            var f = ap.paper.span,
                d = 100,
                c = ay.font && ay.font.match(/\d+(?:\.\d*)?(?=px)/);
            ax = f.style, ay.font && (ax.font = ay.font), ay["font-family"] && (ax.fontFamily = ay["font-family"]), ay["font-weight"] && (ax.fontWeight = ay["font-weight"]), ay["font-style"] && (ax.fontStyle = ay["font-style"]), c = ag(c ? c[0] : ay["font-size"]), ax.fontSize = c * d + "px", ap.textpath.string && (f.innerHTML = ah(ap.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
            var b = f.getBoundingClientRect();
            ap.W = ay.w = (b.right - b.left) / d, ap.H = ay.h = (b.bottom - b.top) / d, ap.X = ay.x, ap.Y = ay.y + ap.H / 2, ("x" in aA || "y" in aA) && (ap.path.v = aj.format("m{0},{1}l{2},{1}", ae(ay.x * K), ae(ay.y * K), ae(ay.x * K) + 1));
            var a = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
            for (var j = 0, aC = a.length; j < aC; j++) {
                if (a[j] in aA) {
                    ap._.dirty = 1;
                    break
                }
            }
            switch (ay["text-anchor"]) {
            case "start":
                ap.textpath.style["v-text-align"] = "left", ap.bbx = ap.W / 2;
                break;
            case "end":
                ap.textpath.style["v-text-align"] = "right", ap.bbx = -ap.W / 2;
                break;
            default:
                ap.textpath.style["v-text-align"] = "center", ap.bbx = 0
            }
            ap.textpath.style["v-text-kern"] = !0
        }
    }, addGradientFill = function (z, y, x) {
        z.attrs = z.attrs || {};
        var w = z.attrs,
            v = Math.pow,
            u, o, n = "linear",
            e = ".5 .5";
        z.attrs.gradient = y, y = ah(y).replace(aj._radial_gradient, function (g, f, h) {
            n = "radial", f && h && (f = ag(f), h = ag(h), v(f - 0.5, 2) + v(h - 0.5, 2) > 0.25 && (h = af.sqrt(0.25 - v(f - 0.5, 2)) * ((h > 0.5) * 2 - 1) + 0.5), e = f + W + h);
            return V
        }), y = y.split(/\s*\-\s*/);
        if (n == "linear") {
            var d = y.shift();
            d = -ag(d);
            if (isNaN(d)) {
                return null
            }
        }
        var c = aj._parseDots(y);
        if (!c) {
            return null
        }
        z = z.shape || z.node;
        if (c.length) {
            z.removeChild(x), x.on = !0, x.method = "none", x.color = c[0].color, x.color2 = c[c.length - 1].color;
            var a = [];
            for (var B = 0, A = c.length; B < A; B++) {
                c[B].offset && a.push(c[B].offset + W + c[B].color)
            }
            x.colors = a.length ? a.join() : "0% " + x.color, n == "radial" ? (x.type = "gradientTitle", x.focus = "100%", x.focussize = "0 0", x.focusposition = e, x.angle = 0) : (x.type = "gradient", x.angle = (270 - d) % 360), z.appendChild(x)
        }
        return 1
    }, Element = function (a, d) {
        this[0] = this.node = a, a.raphael = !0, this.id = aj._oid++, a.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = d, this.matrix = aj.matrix(), this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            dx: 0,
            dy: 0,
            deg: 0,
            dirty: 1,
            dirtyT: 1
        }, !d.bottom && (d.bottom = this), this.prev = d.top, d.top && (d.top.next = this), d.top = this, this.next = null
    };
    var T = aj.el;
    Element.prototype = T, T.constructor = Element, T.transform = function (B) {
        if (B == null) {
            return this._.transform
        }
        var A = this.paper._viewBoxShift,
            z = A ? "s" + [A.scale, A.scale] + "-1-1t" + [A.dx, A.dy] : V,
            y;
        A && (y = B = ah(B).replace(/\.{3}|\u2026/g, this._.transform || V)), aj._extractTransform(this, z + B);
        var x = this.matrix.clone(),
            w = this.skew,
            v = this.node,
            u, t = ~ah(this.attrs.fill).indexOf("-"),
            s = !ah(this.attrs.fill).indexOf("url(");
        x.translate(-0.5, -0.5);
        if (s || t || this.type == "image") {
            w.matrix = "1 0 0 1", w.offset = "0 0", u = x.split();
            if (t && u.noRotation || !u.isSimple) {
                v.style.filter = x.toFilter();
                var o = this.getBBox(),
                    n = this.getBBox(1),
                    c = o.x - n.x,
                    a = o.y - n.y;
                v.coordorigin = c * -K + W + a * -K, F(this, 1, 1, c, a, 0)
            } else {
                v.style.filter = V, F(this, u.scalex, u.scaley, u.dx, u.dy, u.rotate)
            }
        } else {
            v.style.filter = V, w.matrix = ah(x), w.offset = x.offset()
        }
        y && (this._.transform = y);
        return this
    }, T.rotate = function (d, c, h) {
        if (this.removed) {
            return this
        }
        if (d != null) {
            d = ah(d).split(Z), d.length - 1 && (c = ag(d[1]), h = ag(d[2])), d = ag(d[0]), h == null && (c = h);
            if (c == null || h == null) {
                var g = this.getBBox(1);
                c = g.x + g.width / 2, h = g.y + g.height / 2
            }
            this._.dirtyT = 1, this.transform(this._.transform.concat([
                ["r", d, c, h]
            ]));
            return this
        }
    }, T.translate = function (d, c) {
        if (this.removed) {
            return this
        }
        d = ah(d).split(Z), d.length - 1 && (c = ag(d[1])), d = ag(d[0]) || 0, c = +c || 0, this._.bbox && (this._.bbox.x += d, this._.bbox.y += c), this.transform(this._.transform.concat([
            ["t", d, c]
        ]));
        return this
    }, T.scale = function (d, c, k, j) {
        if (this.removed) {
            return this
        }
        d = ah(d).split(Z), d.length - 1 && (c = ag(d[1]), k = ag(d[2]), j = ag(d[3]), isNaN(k) && (k = null), isNaN(j) && (j = null)), d = ag(d[0]), c == null && (c = d), j == null && (k = j);
        if (k == null || j == null) {
            var h = this.getBBox(1)
        }
        k = k == null ? h.x + h.width / 2 : k, j = j == null ? h.y + h.height / 2 : j, this.transform(this._.transform.concat([
            ["s", d, c, k, j]
        ])), this._.dirtyT = 1;
        return this
    }, T.hide = function () {
        !this.removed && (this.node.style.display = "none");
        return this
    }, T.show = function () {
        !this.removed && (this.node.style.display = V);
        return this
    }, T._getBBox = function () {
        if (this.removed) {
            return {}
        }
        return this.type == "text" ? {
            x: this.X + (this.bbx || 0) - this.W / 2,
            y: this.Y - this.H,
            width: this.W,
            height: this.H
        } : pathDimensions(this.attrs.path)
    }, T.remove = function () {
        if (!this.removed) {
            this.paper.__set__ && this.paper.__set__.exclude(this), aj.eve.unbind("*.*." + this.id), aj._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var a in this) {
                delete this[a]
            }
            this.removed = !0
        }
    }, T.attr = function (x, w) {
        if (this.removed) {
            return this
        }
        if (x == null) {
            var v = {};
            for (var u in this.attrs) {
                this.attrs[ai](u) && (v[u] = this.attrs[u])
            }
            v.gradient && v.fill == "none" && (v.fill = v.gradient) && delete v.gradient, v.transform = this._.transform;
            return v
        }
        if (w == null && aj.is(x, "string")) {
            if (x == aa && this.attrs.fill == "none" && this.attrs.gradient) {
                return this.attrs.gradient
            }
            var t = x.split(Z),
                s = {};
            for (var r = 0, l = t.length; r < l; r++) {
                x = t[r], x in this.attrs ? s[x] = this.attrs[x] : aj.is(this.paper.customAttributes[x], "function") ? s[x] = this.paper.customAttributes[x].def : s[x] = aj._availableAttrs[x]
            }
            return l - 1 ? s : s[t[0]]
        }
        if (this.attrs && w == null && aj.is(x, "array")) {
            s = {};
            for (r = 0, l = x.length; r < l; r++) {
                s[x[r]] = this.attr(x[r])
            }
            return s
        }
        var k;
        w != null && (k = {}, k[x] = w), w == null && aj.is(x, "object") && (k = x);
        for (var j in k) {
            Y("attr." + j + "." + this.id, this, k[j])
        }
        if (k) {
            for (j in this.paper.customAttributes) {
                if (this.paper.customAttributes[ai](j) && k[ai](j) && aj.is(this.paper.customAttributes[j], "function")) {
                    var b = this.paper.customAttributes[j].apply(this, [].concat(k[j]));
                    this.attrs[j] = k[j];
                    for (var a in b) {
                        b[ai](a) && (k[a] = b[a])
                    }
                }
            }
            k.text && this.type == "text" && (this.textpath.string = k.text), setFillAndStroke(this, k)
        }
        return this
    }, T.toFront = function () {
        !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && aj._tofront(this, this.paper);
        return this
    }, T.toBack = function () {
        if (this.removed) {
            return this
        }
        this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), aj._toback(this, this.paper));
        return this
    }, T.insertAfter = function (a) {
        if (this.removed) {
            return this
        }
        a.constructor == aj.st.constructor && (a = a[a.length - 1]), a.node.nextSibling ? a.node.parentNode.insertBefore(this.node, a.node.nextSibling) : a.node.parentNode.appendChild(this.node), aj._insertafter(this, a, this.paper);
        return this
    }, T.insertBefore = function (a) {
        if (this.removed) {
            return this
        }
        a.constructor == aj.st.constructor && (a = a[0]), a.node.parentNode.insertBefore(this.node, a.node), aj._insertbefore(this, a, this.paper);
        return this
    }, T.blur = function (a) {
        var f = this.node.runtimeStyle,
            e = f.filter;
        e = e.replace(Q, V), +a !== 0 ? (this.attrs.blur = a, f.filter = e + W + X + ".Blur(pixelradius=" + (+a || 1.5) + ")", f.margin = aj.format("-{0}px 0 0 -{0}px", ae(+a || 1.5))) : (f.filter = e, f.margin = 0, delete this.attrs.blur)
    }, aj._engine.path = function (h, g) {
        var m = R("shape");
        m.style.cssText = M, m.coordsize = K + W + K, m.coordorigin = g.coordorigin;
        var l = new Element(m, g),
            k = {
                fill: "none",
                stroke: "#000"
            };
        h && (k.path = h), l.type = "path", l.path = [], l.Path = V, setFillAndStroke(l, k), g.canvas.appendChild(m);
        var j = R("skew");
        j.on = !0, m.appendChild(j), l.skew = j, l.transform(V);
        return l
    }, aj._engine.rect = function (r, q, p, o, n, m) {
        var l = aj._rectPath(q, p, o, n, m),
            k = r.path(l),
            a = k.attrs;
        k.X = a.x = q, k.Y = a.y = p, k.W = a.width = o, k.H = a.height = n, a.r = m, a.path = l, k.type = "rect";
        return k
    }, aj._engine.ellipse = function (j, h, o, n, m) {
        var l = j.path(),
            k = l.attrs;
        l.X = h - n, l.Y = o - m, l.W = n * 2, l.H = m * 2, l.type = "ellipse", setFillAndStroke(l, {
            cx: h,
            cy: o,
            rx: n,
            ry: m
        });
        return l
    }, aj._engine.circle = function (h, g, m, l) {
        var k = h.path(),
            j = k.attrs;
        k.X = g - l, k.Y = m - l, k.W = k.H = l * 2, k.type = "circle", setFillAndStroke(k, {
            cx: g,
            cy: m,
            r: l
        });
        return k
    }, aj._engine.image = function (v, u, t, s, r, q) {
        var p = aj._rectPath(t, s, r, q),
            o = v.path(p).attr({
                stroke: "none"
            }),
            n = o.attrs,
            j = o.node,
            a = j.getElementsByTagName(aa)[0];
        n.src = u, o.X = n.x = t, o.Y = n.y = s, o.W = n.width = r, o.H = n.height = q, n.path = p, o.type = "image", a.parentNode == j && j.removeChild(a), a.rotate = !0, a.src = u, a.type = "tile", o._.fillpos = [t, s], o._.fillsize = [r, q], j.appendChild(a), F(o, 1, 1, 0, 0, 0);
        return o
    }, aj._engine.text = function (t, s, r, q) {
        var p = R("shape"),
            o = R("path"),
            n = R("textpath");
        s = s || 0, r = r || 0, q = q || "", o.v = aj.format("m{0},{1}l{2},{1}", ae(s * K), ae(r * K), ae(s * K) + 1), o.textpathok = !0, n.string = ah(q), n.on = !0, p.style.cssText = M, p.coordsize = K + W + K, p.coordorigin = "0 0";
        var f = new Element(p, t),
            c = {
                fill: "#000",
                stroke: "none",
                font: aj._availableAttrs.font,
                text: q
            };
        f.shape = p, f.path = o, f.textpath = n, f.type = "text", f.attrs.text = ah(q), f.attrs.x = s, f.attrs.y = r, f.attrs.w = 1, f.attrs.h = 1, setFillAndStroke(f, c), p.appendChild(n), p.appendChild(o), t.canvas.appendChild(p);
        var a = R("skew");
        a.on = !0, p.appendChild(a), f.skew = a, f.transform(V);
        return f
    }, aj._engine.setSize = function (e, d) {
        var f = this.canvas.style;
        this.width = e, this.height = d, e == +e && (e += "px"), d == +d && (d += "px"), f.width = e, f.height = d, f.clip = "rect(0 " + e + " " + d + " 0)", this._viewBox && setViewBox.apply(this, this._viewBox);
        return this
    }, aj._engine.setViewBox = function (t, s, r, q, p) {
        aj.eve("setViewBox", this, this._viewBox, [t, s, r, q, p]);
        var o = this.width,
            n = this.height,
            m = 1 / ad(r / o, q / n),
            g, a;
        p && (g = n / q, a = o / r, r * g < o && (t -= (o - r * g) / 2 / g), q * a < n && (s -= (n - q * a) / 2 / a)), this._viewBox = [t, s, r, q, !! p], this._viewBoxShift = {
            dx: -t,
            dy: -s,
            scale: m
        }, this.forEach(function (b) {
            b.transform("...")
        });
        return this
    };
    var R, P = function (e) {
            var d = e.document;
            d.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
            try {
                !d.namespaces.rvml && d.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), R = function (b) {
                    return d.createElement("<rvml:" + b + ' class="rvml">')
                }
            } catch (f) {
                R = function (b) {
                    return d.createElement("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                }
            }
        };
    P(aj._g.win), aj._engine.create = function () {
        var t = aj._getContainer.apply(0, arguments),
            s = t.container,
            r = t.height,
            q, p = t.width,
            o = t.x,
            n = t.y;
        if (!s) {
            throw new Error("VML container not found.")
        }
        var m = new aj._Paper,
            l = m.canvas = aj._g.doc.createElement("div"),
            a = l.style;
        o = o || 0, n = n || 0, p = p || 512, r = r || 342, m.width = p, m.height = r, p == +p && (p += "px"), r == +r && (r += "px"), m.coordsize = K * 1000 + W + K * 1000, m.coordorigin = "0 0", m.span = aj._g.doc.createElement("span"), m.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(m.span), a.cssText = aj.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", p, r), s == 1 ? (aj._g.doc.body.appendChild(l), a.left = o + "px", a.top = n + "px", a.position = "absolute") : s.firstChild ? s.insertBefore(l, s.firstChild) : s.appendChild(l), m.renderfix = function () {};
        return m
    }, aj.prototype.clear = function () {
        aj.eve("clear", this), this.canvas.innerHTML = V, this.span = aj._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
    }, aj.prototype.remove = function () {
        aj.eve("remove", this), this.canvas.parentNode.removeChild(this.canvas);
        for (var a in this) {
            this[a] = removed(a)
        }
        return !0
    };
    var N = aj.st;
    for (var L in T) {
        T[ai](L) && !N[ai](L) && (N[L] = function (b) {
            return function () {
                var a = arguments;
                return this.forEach(function (d) {
                    d[b].apply(d, a)
                })
            }
        }(L))
    }
}(window.Raphael);
new function () {
    var e = {
        browser: function () {
            return h.browser
        },
        version: {
            number: function () {
                return h.version.number
            },
            string: function () {
                return h.version.string
            }
        },
        OS: function () {
            return h.OS
        },
        aol: function () {
            return h.aol
        },
        camino: function () {
            return h.camino
        },
        firefox: function () {
            return h.firefox
        },
        flock: function () {
            return h.flock
        },
        icab: function () {
            return h.icab
        },
        konqueror: function () {
            return h.konqueror
        },
        mozilla: function () {
            return h.mozilla
        },
        msie: function () {
            return h.msie
        },
        netscape: function () {
            return h.netscape
        },
        opera: function () {
            return h.opera
        },
        safari: function () {
            return h.safari
        },
        linux: function () {
            return h.linux
        },
        mac: function () {
            return h.mac
        },
        win: function () {
            return h.win
        }
    };
    $.browser = e;
    var h = {
        browser: "Unknown",
        version: {
            number: undefined,
            string: "Unknown"
        },
        OS: "Unknown",
        aol: false,
        camino: false,
        firefox: false,
        flock: false,
        icab: false,
        konqueror: false,
        mozilla: false,
        msie: false,
        netscape: false,
        opera: false,
        safari: false,
        linux: false,
        mac: false,
        win: false
    };
    for (var d = 0, a = navigator.userAgent, f = navigator.vendor, c = [{
        name: "Safari",
        browser: function () {
            return /Apple/.test(f)
        }
    }, {
        name: "Opera",
        browser: function () {
            return window.opera != undefined
        }
    }, {
        name: "iCab",
        browser: function () {
            return /iCab/.test(f)
        }
    }, {
        name: "Konqueror",
        browser: function () {
            return /KDE/.test(f)
        }
    }, {
        identifier: "aol",
        name: "AOL Explorer",
        browser: function () {
            return /America Online Browser/.test(a)
        },
        version: function () {
            return a.match(/rev(\d+(?:\.\d+)+)/)
        }
    }, {
        name: "Flock",
        browser: function () {
            return /Flock/.test(a)
        }
    }, {
        name: "Camino",
        browser: function () {
            return /Camino/.test(f)
        }
    }, {
        name: "Firefox",
        browser: function () {
            return /Firefox/.test(a)
        }
    }, {
        name: "Netscape",
        browser: function () {
            return /Netscape/.test(a)
        }
    }, {
        identifier: "msie",
        name: "Internet Explorer",
        browser: function () {
            return /MSIE/.test(a)
        },
        version: function () {
            return a.match(/MSIE (\d+(?:\.\d+)+(?:b\d*)?)/)
        }
    }, {
        name: "Mozilla",
        browser: function () {
            return /Gecko|Mozilla/.test(a)
        },
        version: function () {
            return a.match(/rv:(\d+(?:\.\d+)+)/)
        }
    }]; d < c.length; d++) {
        if (c[d].browser()) {
            var g = c[d].identifier ? c[d].identifier : c[d].name.toLowerCase();
            h[g] = true;
            h.browser = c[d].name;
            var k;
            if (c[d].version != undefined && (k = c[d].version())) {
                h.version.string = k[1];
                h.version.number = parseFloat(k[1])
            } else {
                var j = new RegExp(c[d].name + "(?:\\s|\\/)(\\d+(?:\\.\\d+)+(?:(?:a|b)\\d*)?)");
                k = a.match(j);
                if (k != undefined) {
                    h.version.string = k[1];
                    h.version.number = parseFloat(k[1])
                }
            }
            break
        }
    }
    for (var d = 0, b = navigator.platform, c = [{
        identifier: "win",
        name: "Windows",
        OS: function () {
            return /Win/.test(b)
        }
    }, {
        name: "Mac",
        OS: function () {
            return /Mac/.test(b)
        }
    }, {
        name: "Linux",
        OS: function () {
            return /Linux/.test(b)
        }
    }]; d < c.length; d++) {
        if (c[d].OS()) {
            var g = c[d].identifier ? c[d].identifier : c[d].name.toLowerCase();
            h[g] = true;
            h.OS = c[d].name;
            break
        }
    }
}();
/*!
 * jQuery Form Plugin
 * version: 2.87 (20-OCT-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function (b) {
    b.fn.ajaxSubmit = function (d) {
        if (!this.length) {
            a("ajaxSubmit: skipping submit process - no element selected");
            return this
        }
        var c, r, f, h = this;
        if (typeof d == "function") {
            d = {
                success: d
            }
        }
        c = this.attr("method");
        r = this.attr("action");
        f = (typeof r === "string") ? b.trim(r) : "";
        f = f || window.location.href || "";
        if (f) {
            f = (f.match(/^([^#]+)/) || [])[1]
        }
        d = b.extend(true, {
            url: f,
            success: b.ajaxSettings.success,
            type: c || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, d);
        var l = {};
        this.trigger("form-pre-serialize", [this, d, l]);
        if (l.veto) {
            a("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
            return this
        }
        if (d.beforeSerialize && d.beforeSerialize(this, d) === false) {
            a("ajaxSubmit: submit aborted via beforeSerialize callback");
            return this
        }
        var g = d.traditional;
        if (g === undefined) {
            g = b.ajaxSettings.traditional
        }
        var w, p, k, x = this.formToArray(d.semantic);
        if (d.data) {
            d.extraData = d.data;
            w = b.param(d.data, g)
        }
        if (d.beforeSubmit && d.beforeSubmit(x, this, d) === false) {
            a("ajaxSubmit: submit aborted via beforeSubmit callback");
            return this
        }
        this.trigger("form-submit-validate", [x, this, d, l]);
        if (l.veto) {
            a("ajaxSubmit: submit vetoed via form-submit-validate trigger");
            return this
        }
        var o = b.param(x, g);
        if (w) {
            o = (o ? (o + "&" + w) : w)
        }
        if (d.type.toUpperCase() == "GET") {
            d.url += (d.url.indexOf("?") >= 0 ? "&" : "?") + o;
            d.data = null
        } else {
            d.data = o
        }
        var y = [];
        if (d.resetForm) {
            y.push(function () {
                h.resetForm()
            })
        }
        if (d.clearForm) {
            y.push(function () {
                h.clearForm(d.includeHidden)
            })
        }
        if (!d.dataType && d.target) {
            var e = d.success ||
            function () {};
            y.push(function (q) {
                var n = d.replaceTarget ? "replaceWith" : "html";
                b(d.target)[n](q).each(e, arguments)
            })
        } else {
            if (d.success) {
                y.push(d.success)
            }
        }
        d.success = function (A, q, B) {
            var z = d.context || d;
            for (var v = 0, n = y.length; v < n; v++) {
                y[v].apply(z, [A, q, B || h, h])
            }
        };
        var t = b("input:file", this).length > 0;
        var s = "multipart/form-data";
        var m = (h.attr("enctype") == s || h.attr("encoding") == s);
        if (d.iframe !== false && (t || d.iframe || m)) {
            if (d.closeKeepAlive) {
                b.get(d.closeKeepAlive, function () {
                    j(x)
                })
            } else {
                j(x)
            }
        } else {
            if (b.browser.msie && c == "get" && typeof d.type === "undefined") {
                var u = h[0].getAttribute("method");
                if (typeof u === "string") {
                    d.type = u
                }
            }
            b.ajax(d)
        }
        this.trigger("form-submit-notify", [this, d]);
        return this;

        function j(V) {
            var A = h[0],
                z, R, L, T, O, C, G, E, F, P, S, J;
            var D = !! b.fn.prop;
            if (V) {
                if (D) {
                    for (R = 0; R < V.length; R++) {
                        z = b(A[V[R].name]);
                        z.prop("disabled", false)
                    }
                } else {
                    for (R = 0; R < V.length; R++) {
                        z = b(A[V[R].name]);
                        z.removeAttr("disabled")
                    }
                }
            }
            if (b(":input[name=submit],:input[id=submit]", A).length) {
                alert('Error: Form elements must not have name or id of "submit".');
                return
            }
            L = b.extend(true, {}, b.ajaxSettings, d);
            L.context = L.context || L;
            O = "jqFormIO" + (new Date().getTime());
            if (L.iframeTarget) {
                C = b(L.iframeTarget);
                P = C.attr("name");
                if (P == null) {
                    C.attr("name", O)
                } else {
                    O = P
                }
            } else {
                C = b('<iframe name="' + O + '" src="' + L.iframeSrc + '" />');
                C.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })
            }
            G = C[0];
            E = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function () {},
                getResponseHeader: function () {},
                setRequestHeader: function () {},
                abort: function (n) {
                    var Y = (n === "timeout" ? "timeout" : "aborted");
                    a("aborting upload... " + Y);
                    this.aborted = 1;
                    C.attr("src", L.iframeSrc);
                    E.error = Y;
                    L.error && L.error.call(L.context, E, Y, n);
                    T && b.event.trigger("ajaxError", [E, L, Y]);
                    L.complete && L.complete.call(L.context, E, Y)
                }
            };
            T = L.global;
            if (T && !b.active++) {
                b.event.trigger("ajaxStart")
            }
            if (T) {
                b.event.trigger("ajaxSend", [E, L])
            }
            if (L.beforeSend && L.beforeSend.call(L.context, E, L) === false) {
                if (L.global) {
                    b.active--
                }
                return
            }
            if (E.aborted) {
                return
            }
            F = A.clk;
            if (F) {
                P = F.name;
                if (P && !F.disabled) {
                    L.extraData = L.extraData || {};
                    L.extraData[P] = F.value;
                    if (F.type == "image") {
                        L.extraData[P + ".x"] = A.clk_x;
                        L.extraData[P + ".y"] = A.clk_y
                    }
                }
            }
            var K = 1;
            var H = 2;

            function I(Y) {
                var n = Y.contentWindow ? Y.contentWindow.document : Y.contentDocument ? Y.contentDocument : Y.document;
                return n
            }

            function Q() {
                var aa = h.attr("target"),
                    Y = h.attr("action");
                A.setAttribute("target", O);
                if (!c) {
                    A.setAttribute("method", "POST")
                }
                if (Y != L.url) {
                    A.setAttribute("action", L.url)
                }
                if (!L.skipEncodingOverride && (!c || /post/i.test(c))) {
                    h.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    })
                }
                if (L.timeout) {
                    J = setTimeout(function () {
                        S = true;
                        N(K)
                    }, L.timeout)
                }

                function ab() {
                    try {
                        var n = I(G).readyState;
                        a("state = " + n);
                        if (n.toLowerCase() == "uninitialized") {
                            setTimeout(ab, 50)
                        }
                    } catch (ad) {
                        a("Server abort: ", ad, " (", ad.name, ")");
                        N(H);
                        J && clearTimeout(J);
                        J = undefined
                    }
                }
                var Z = [];
                try {
                    if (L.extraData) {
                        for (var ac in L.extraData) {
                            Z.push(b('<input type="hidden" name="' + ac + '" />').attr("value", L.extraData[ac]).appendTo(A)[0])
                        }
                    }
                    if (!L.iframeTarget) {
                        C.appendTo("body");
                        G.attachEvent ? G.attachEvent("onload", N) : G.addEventListener("load", N, false)
                    }
                    setTimeout(ab, 15);
                    A.submit()
                } finally {
                    A.setAttribute("action", Y);
                    if (aa) {
                        A.setAttribute("target", aa)
                    } else {
                        h.removeAttr("target")
                    }
                    b(Z).remove()
                }
            }
            if (L.forceSync) {
                Q()
            } else {
                setTimeout(Q, 10)
            }
            var W, X, U = 50,
                B;

            function N(ac) {
                if (E.aborted || B) {
                    return
                }
                try {
                    X = I(G)
                } catch (af) {
                    a("cannot access response document: ", af);
                    ac = H
                }
                if (ac === K && E) {
                    E.abort("timeout");
                    return
                } else {
                    if (ac == H && E) {
                        E.abort("server abort");
                        return
                    }
                }
                if (!X || X.location.href == L.iframeSrc) {
                    if (!S) {
                        return
                    }
                }
                G.detachEvent ? G.detachEvent("onload", N) : G.removeEventListener("load", N, false);
                var aa = "success",
                    ae;
                try {
                    if (S) {
                        throw "timeout"
                    }
                    var Z = L.dataType == "xml" || X.XMLDocument || b.isXMLDoc(X);
                    a("isXml=" + Z);
                    if (!Z && window.opera && (X.body == null || X.body.innerHTML == "")) {
                        if (--U) {
                            a("requeing onLoad callback, DOM not available");
                            setTimeout(N, 250);
                            return
                        }
                    }
                    var ag = X.body ? X.body : X.documentElement;
                    E.responseText = ag ? ag.innerHTML : null;
                    E.responseXML = X.XMLDocument ? X.XMLDocument : X;
                    if (Z) {
                        L.dataType = "xml"
                    }
                    E.getResponseHeader = function (aj) {
                        var ai = {
                            "content-type": L.dataType
                        };
                        return ai[aj]
                    };
                    if (ag) {
                        E.status = Number(ag.getAttribute("status")) || E.status;
                        E.statusText = ag.getAttribute("statusText") || E.statusText
                    }
                    var n = (L.dataType || "").toLowerCase();
                    var ad = /(json|script|text)/.test(n);
                    if (ad || L.textarea) {
                        var ab = X.getElementsByTagName("textarea")[0];
                        if (ab) {
                            E.responseText = ab.value;
                            E.status = Number(ab.getAttribute("status")) || E.status;
                            E.statusText = ab.getAttribute("statusText") || E.statusText
                        } else {
                            if (ad) {
                                var Y = X.getElementsByTagName("pre")[0];
                                var ah = X.getElementsByTagName("body")[0];
                                if (Y) {
                                    E.responseText = Y.textContent ? Y.textContent : Y.innerText
                                } else {
                                    if (ah) {
                                        E.responseText = ah.textContent ? ah.textContent : ah.innerText
                                    }
                                }
                            }
                        }
                    } else {
                        if (n == "xml" && !E.responseXML && E.responseText != null) {
                            E.responseXML = M(E.responseText)
                        }
                    }
                    try {
                        W = q(E, n, L)
                    } catch (ac) {

                        aa = "parsererror";
                        E.error = ae = (ac || aa)
                    }
                } catch (ac) {
                    a("error caught: ", ac);
                    aa = "error";
                    E.error = ae = (ac || aa)
                }
                if (E.aborted) {
                    a("upload aborted");
                    aa = null
                }
                if (E.status) {
                    aa = (E.status >= 200 && E.status < 300 || E.status === 304) ? "success" : "error"
                }
                if (aa === "success") {
                    L.success && L.success.call(L.context, W, "success", E);
                    T && b.event.trigger("ajaxSuccess", [E, L])
                } else {
                    if (aa) {
                        if (ae == undefined) {
                            ae = E.statusText
                        }
                        L.error && L.error.call(L.context, E, aa, ae);
                        T && b.event.trigger("ajaxError", [E, L, ae])
                    }
                }
                T && b.event.trigger("ajaxComplete", [E, L]);
                if (T && !--b.active) {
                    b.event.trigger("ajaxStop")
                }
                L.complete && L.complete.call(L.context, E, aa);
                B = true;
                if (L.timeout) {
                    clearTimeout(J)
                }
                setTimeout(function () {
                    if (!L.iframeTarget) {
                        C.remove()
                    }
                    E.responseXML = null
                }, 100)
            }
            var M = b.parseXML ||
            function (n, Y) {
                if (window.ActiveXObject) {
                    Y = new ActiveXObject("Microsoft.XMLDOM");
                    Y.async = "false";
                    Y.loadXML(n)
                } else {
                    Y = (new DOMParser()).parseFromString(n, "text/xml")
                }
                return (Y && Y.documentElement && Y.documentElement.nodeName != "parsererror") ? Y : null
            };
            var v = b.parseJSON ||
            function (n) {
                return window["eval"]("(" + n + ")")
            };
            var q = function (ac, aa, Z) {
                    var Y = ac.getResponseHeader("content-type") || "",
                        n = aa === "xml" || !aa && Y.indexOf("xml") >= 0,
                        ab = n ? ac.responseXML : ac.responseText;
                    if (n && ab.documentElement.nodeName === "parsererror") {
                        b.error && b.error("parsererror")
                    }
                    if (Z && Z.dataFilter) {
                        ab = Z.dataFilter(ab, aa)
                    }
                    if (typeof ab === "string") {
                        if (aa === "json" || !aa && Y.indexOf("json") >= 0) {
                            ab = v(ab)
                        } else {
                            if (aa === "script" || !aa && Y.indexOf("javascript") >= 0) {
                                b.globalEval(ab)
                            }
                        }
                    }
                    return ab
                }
        }
    };
    b.fn.ajaxForm = function (c) {
        if (this.length === 0) {
            var d = {
                s: this.selector,
                c: this.context
            };
            if (!b.isReady && d.s) {
                a("DOM not ready, queuing ajaxForm");
                b(function () {
                    b(d.s, d.c).ajaxForm(c)
                });
                return this
            }
            a("terminating; zero elements found by selector" + (b.isReady ? "" : " (DOM not ready)"));
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", function (f) {
            if (!f.isDefaultPrevented()) {
                f.preventDefault();
                b(this).ajaxSubmit(c)
            }
        }).bind("click.form-plugin", function (k) {
            var j = k.target;
            var g = b(j);
            if (!(g.is(":submit,input:image"))) {
                var f = g.closest(":submit");
                if (f.length == 0) {
                    return
                }
                j = f[0]
            }
            var h = this;
            h.clk = j;
            if (j.type == "image") {
                if (k.offsetX != undefined) {
                    h.clk_x = k.offsetX;
                    h.clk_y = k.offsetY
                } else {
                    if (typeof b.fn.offset == "function") {
                        var l = g.offset();
                        h.clk_x = k.pageX - l.left;
                        h.clk_y = k.pageY - l.top
                    } else {
                        h.clk_x = k.pageX - j.offsetLeft;
                        h.clk_y = k.pageY - j.offsetTop
                    }
                }
            }
            setTimeout(function () {
                h.clk = h.clk_x = h.clk_y = null
            }, 100)
        })
    };
    b.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    };
    b.fn.formToArray = function (q) {
        var p = [];
        if (this.length === 0) {
            return p
        }
        var d = this[0];
        var g = q ? d.getElementsByTagName("*") : d.elements;
        if (!g) {
            return p
        }
        var k, h, f, r, e, m, c;
        for (k = 0, m = g.length; k < m; k++) {
            e = g[k];
            f = e.name;
            if (!f) {
                continue
            }
            if (q && d.clk && e.type == "image") {
                if (!e.disabled && d.clk == e) {
                    p.push({
                        name: f,
                        value: b(e).val()
                    });
                    p.push({
                        name: f + ".x",
                        value: d.clk_x
                    }, {
                        name: f + ".y",
                        value: d.clk_y
                    })
                }
                continue
            }
            r = b.fieldValue(e, true);
            if (r && r.constructor == Array) {
                for (h = 0, c = r.length; h < c; h++) {
                    p.push({
                        name: f,
                        value: r[h]
                    })
                }
            } else {
                if (r !== null && typeof r != "undefined") {
                    p.push({
                        name: f,
                        value: r
                    })
                }
            }
        }
        if (!q && d.clk) {
            var l = b(d.clk),
                o = l[0];
            f = o.name;
            if (f && !o.disabled && o.type == "image") {
                p.push({
                    name: f,
                    value: l.val()
                });
                p.push({
                    name: f + ".x",
                    value: d.clk_x
                }, {
                    name: f + ".y",
                    value: d.clk_y
                })
            }
        }
        return p
    };
    b.fn.formSerialize = function (c) {
        return b.param(this.formToArray(c))
    };
    b.fn.fieldSerialize = function (d) {
        var c = [];
        this.each(function () {
            var h = this.name;
            if (!h) {
                return
            }
            var f = b.fieldValue(this, d);
            if (f && f.constructor == Array) {
                for (var g = 0, e = f.length; g < e; g++) {
                    c.push({
                        name: h,
                        value: f[g]
                    })
                }
            } else {
                if (f !== null && typeof f != "undefined") {
                    c.push({
                        name: this.name,
                        value: f
                    })
                }
            }
        });
        return b.param(c)
    };
    b.fn.fieldValue = function (h) {
        for (var g = [], e = 0, c = this.length; e < c; e++) {
            var f = this[e];
            var d = b.fieldValue(f, h);
            if (d === null || typeof d == "undefined" || (d.constructor == Array && !d.length)) {
                continue
            }
            d.constructor == Array ? b.merge(g, d) : g.push(d)
        }
        return g
    };
    b.fieldValue = function (c, j) {
        var e = c.name,
            p = c.type,
            q = c.tagName.toLowerCase();
        if (j === undefined) {
            j = true
        }
        if (j && (!e || c.disabled || p == "reset" || p == "button" || (p == "checkbox" || p == "radio") && !c.checked || (p == "submit" || p == "image") && c.form && c.form.clk != c || q == "select" && c.selectedIndex == -1)) {
            return null
        }
        if (q == "select") {
            var k = c.selectedIndex;
            if (k < 0) {
                return null
            }
            var m = [],
                d = c.options;
            var g = (p == "select-one");
            var l = (g ? k + 1 : d.length);
            for (var f = (g ? k : 0); f < l; f++) {
                var h = d[f];
                if (h.selected) {
                    var o = h.value;
                    if (!o) {
                        o = (h.attributes && h.attributes.value && !(h.attributes.value.specified)) ? h.text : h.value
                    }
                    if (g) {
                        return o
                    }
                    m.push(o)
                }
            }
            return m
        }
        return b(c).val()
    };
    b.fn.clearForm = function (c) {
        return this.each(function () {
            b("input,select,textarea", this).clearFields(c)
        })
    };
    b.fn.clearFields = b.fn.clearInputs = function (c) {
        var d = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var f = this.type,
                e = this.tagName.toLowerCase();
            if (d.test(f) || e == "textarea" || (c && /hidden/.test(f))) {
                this.value = ""
            } else {
                if (f == "checkbox" || f == "radio") {
                    this.checked = false
                } else {
                    if (e == "select") {
                        this.selectedIndex = -1
                    }
                }
            }
        })
    };
    b.fn.resetForm = function () {
        return this.each(function () {
            if (typeof this.reset == "function" || (typeof this.reset == "object" && !this.reset.nodeType)) {
                this.reset()
            }
        })
    };
    b.fn.enable = function (c) {
        if (c === undefined) {
            c = true
        }
        return this.each(function () {
            this.disabled = !c
        })
    };
    b.fn.selected = function (c) {
        if (c === undefined) {
            c = true
        }
        return this.each(function () {
            var d = this.type;
            if (d == "checkbox" || d == "radio") {
                this.checked = c
            } else {
                if (this.tagName.toLowerCase() == "option") {
                    var e = b(this).parent("select");
                    if (c && e[0] && e[0].type == "select-one") {
                        e.find("option").selected(false)
                    }
                    this.selected = c
                }
            }
        })
    };
    b.fn.ajaxSubmit.debug = false;

    function a() {
        if (!b.fn.ajaxSubmit.debug) {
            return
        }
        var c = "[jquery.form] " + Array.prototype.join.call(arguments, "");
        if (window.console && window.console.log) {
            window.console.log(c)
        } else {
            if (window.opera && window.opera.postError) {
                window.opera.postError(c)
            }
        }
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function (e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function (e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function (e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function (e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function (e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function (e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function (e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function (f, h, e, m, l) {
        var j = 1.70158;
        var k = 0;
        var g = m;
        if (h == 0) {
            return e
        }
        if ((h /= l) == 1) {
            return e + m
        }
        if (!k) {
            k = l * 0.3
        }
        if (g < Math.abs(m)) {
            g = m;
            var j = k / 4
        } else {
            var j = k / (2 * Math.PI) * Math.asin(m / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * l - j) * (2 * Math.PI) / k)) + e
    },
    easeOutElastic: function (f, h, e, m, l) {
        var j = 1.70158;
        var k = 0;
        var g = m;
        if (h == 0) {
            return e
        }
        if ((h /= l) == 1) {
            return e + m
        }
        if (!k) {
            k = l * 0.3
        }
        if (g < Math.abs(m)) {
            g = m;
            var j = k / 4
        } else {
            var j = k / (2 * Math.PI) * Math.asin(m / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * l - j) * (2 * Math.PI) / k) + m + e
    },
    easeInOutElastic: function (f, h, e, m, l) {
        var j = 1.70158;
        var k = 0;
        var g = m;
        if (h == 0) {
            return e
        }
        if ((h /= l / 2) == 2) {
            return e + m
        }
        if (!k) {
            k = l * (0.3 * 1.5)
        }
        if (g < Math.abs(m)) {
            g = m;
            var j = k / 4
        } else {
            var j = k / (2 * Math.PI) * Math.asin(m / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * l - j) * (2 * Math.PI) / k)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * l - j) * (2 * Math.PI) / k) * 0.5 + m + e
    },
    easeInBack: function (e, f, a, j, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return j * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function (e, f, a, j, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return j * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function (e, f, a, j, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return j / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return j / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function (e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function (e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});
(function (a) {
    a.fn.hoverIntent = function (l, k) {
        var m = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        m = a.extend(m, k ? {
            over: l,
            out: k
        } : l);
        var o, n, h, d;
        var e = function (f) {
                o = f.pageX;
                n = f.pageY
            };
        var c = function (g, f) {
                f.hoverIntent_t = clearTimeout(f.hoverIntent_t);
                if ((Math.abs(h - o) + Math.abs(d - n)) < m.sensitivity) {
                    a(f).unbind("mousemove", e);
                    f.hoverIntent_s = 1;
                    return m.over.apply(f, [g])
                } else {
                    h = o;
                    d = n;
                    f.hoverIntent_t = setTimeout(function () {
                        c(g, f)
                    }, m.interval)
                }
            };
        var j = function (g, f) {
                f.hoverIntent_t = clearTimeout(f.hoverIntent_t);
                f.hoverIntent_s = 0;
                return m.out.apply(f, [g])
            };
        var b = function (p) {
                var g = jQuery.extend({}, p);
                var f = this;
                if (f.hoverIntent_t) {
                    f.hoverIntent_t = clearTimeout(f.hoverIntent_t)
                }
                if (p.type == "mouseenter") {
                    h = g.pageX;
                    d = g.pageY;
                    a(f).bind("mousemove", e);
                    if (f.hoverIntent_s != 1) {
                        f.hoverIntent_t = setTimeout(function () {
                            c(g, f)
                        }, m.interval)
                    }
                } else {
                    a(f).unbind("mousemove", e);
                    if (f.hoverIntent_s == 1) {
                        f.hoverIntent_t = setTimeout(function () {
                            j(g, f)
                        }, m.timeout)
                    }
                }
            };
        return this.bind("mouseenter", b).bind("mouseleave", b)
    }
})(jQuery);
/*!
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2011, John Dyer (http://j.hn)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
var mejs = mejs || {};
mejs.version = "2.3.4";
mejs.meIndex = 0;
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg"]
    }]
};
mejs.Utility = {
    encodeUrl: function (a) {
        return encodeURIComponent(a)
    },
    escapeHTML: function (a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function (a) {
        var b = document.createElement("div");
        b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>';
        return b.firstChild.href
    },
    getScriptPath: function (b) {
        var f = 0,
            e, g = "",
            d = "",
            c, a = document.getElementsByTagName("script");
        for (; f < a.length; f++) {
            c = a[f].src;
            for (e = 0; e < b.length; e++) {
                d = b[e];
                if (c.indexOf(d) > -1) {
                    g = c.substring(0, c.indexOf(d));
                    break
                }
            }
            if (g !== "") {
                break
            }
        }
        return g
    },
    secondsToTimeCode: function (c, g, a, b) {
        if (typeof a == "undefined") {
            a = false
        } else {
            if (typeof b == "undefined") {
                b = 25
            }
        }
        var f = Math.floor(c / 3600) % 24,
            d = Math.floor(c / 60) % 60,
            h = Math.floor(c % 60),
            e = Math.floor(((c % 1) * b).toFixed(3)),
            j = ((g || f > 0) ? (f < 10 ? "0" + f : f) + ":" : "") + (d < 10 ? "0" + d : d) + ":" + (h < 10 ? "0" + h : h) + ((a) ? ":" + (e < 10 ? "0" + e : e) : "");
        return j
    },
    timeCodeToSeconds: function (c, k, d, e) {
        if (typeof d == "undefined") {
            d = false
        } else {
            if (typeof e == "undefined") {
                e = 25
            }
        }
        var f = c.split(":"),
            a = parseInt(f[0], 10),
            b = parseInt(f[1], 10),
            h = parseInt(f[2], 10),
            j = 0,
            g = 0;
        if (d) {
            j = parseInt(f[3]) / e
        }
        g = (a * 3600) + (b * 60) + h + j;
        return g
    }
};
mejs.PluginDetector = {
    hasPluginVersion: function (c, a) {
        var b = this.plugins[c];
        a[1] = a[1] || 0;
        a[2] = a[2] || 0;
        return (b[0] > a[0] || (b[0] == a[0] && b[1] > a[1]) || (b[0] == a[0] && b[1] == a[1] && b[2] >= a[2])) ? true : false
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function (d, c, e, a, b) {
        this.plugins[d] = this.detectPlugin(c, e, a, b)
    },
    detectPlugin: function (g, b, c, k) {
        var h = [0, 0, 0],
            j, d, a;
        if (typeof (this.nav.plugins) != "undefined" && typeof this.nav.plugins[g] == "object") {
            j = this.nav.plugins[g].description;
            if (j && !(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[b] && !this.nav.mimeTypes[b].enabledPlugin)) {
                h = j.replace(g, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (d = 0; d < h.length; d++) {
                    h[d] = parseInt(h[d].match(/\d+/), 10)
                }
            }
        } else {
            if (typeof (window.ActiveXObject) != "undefined") {
                try {
                    a = new ActiveXObject(c);
                    if (a) {
                        h = k(a)
                    }
                } catch (f) {}
            }
        }
        return h
    }
};
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (b) {
    var a = [],
        c = b.GetVariable("$version");
    if (c) {
        c = c.split(" ")[1].split(",");
        a = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]
    }
    return a
});
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (b) {
    var a = [0, 0, 0, 0],
        c = function (f, d, e, g) {
            while (f.isVersionSupported(d[0] + "." + d[1] + "." + d[2] + "." + d[3])) {
                d[e] += g
            }
            d[e] -= g
        };
    c(b, a, 0, 1);
    c(b, a, 1, 1);
    c(b, a, 2, 10000);
    c(b, a, 2, 1000);
    c(b, a, 2, 100);
    c(b, a, 2, 10);
    c(b, a, 2, 1);
    c(b, a, 3, 1);
    return a
});
mejs.MediaFeatures = {
    init: function () {
        var e = this,
            h = document,
            g = mejs.PluginDetector.nav,
            c = mejs.PluginDetector.ua.toLowerCase(),
            b, a, f = ["source", "track", "audio", "video"];
        e.isiPad = (c.match(/ipad/i) !== null);
        e.isiPhone = (c.match(/iphone/i) !== null);
        e.isiOS = e.isiPhone || e.isiPad;
        e.isAndroid = (c.match(/android/i) !== null);
        e.isBustedAndroid = (c.match(/android 2\.[12]/) !== null);
        e.isIE = (g.appName.toLowerCase().indexOf("microsoft") != -1);
        e.isChrome = (c.match(/chrome/gi) !== null);
        e.isFirefox = (c.match(/firefox/gi) !== null);
        e.isGecko = (c.match(/gecko/gi) !== null);
        e.isWebkit = (c.match(/webkit/gi) !== null);
        e.hasTouch = ("ontouchstart" in window);
        for (b = 0; b < f.length; b++) {
            a = document.createElement(f[b])
        }
        e.supportsMediaTag = (typeof a.canPlayType !== "undefined" || e.isBustedAndroid);
        e.hasSemiNativeFullScreen = (typeof a.webkitEnterFullscreen !== "undefined");
        e.hasWebkitNativeFullScreen = (typeof a.webkitRequestFullScreen !== "undefined");
        e.hasMozNativeFullScreen = (typeof a.mozRequestFullScreen !== "undefined");
        e.hasTrueNativeFullScreen = (e.hasWebkitNativeFullScreen || e.hasMozNativeFullScreen);
        e.nativeFullScreenEnabled = e.hasTrueNativeFullScreen;
        if (e.hasMozNativeFullScreen) {
            e.nativeFullScreenEnabled = a.mozFullScreenEnabled
        }
        if (this.isChrome) {
            e.hasSemiNativeFullScreen = false
        }
        if (e.hasTrueNativeFullScreen) {
            e.fullScreenEventName = (e.hasWebkitNativeFullScreen) ? "webkitfullscreenchange" : "mozfullscreenchange";
            e.isFullScreen = function () {
                if (a.mozRequestFullScreen) {
                    return h.mozFullScreen
                } else {
                    if (a.webkitRequestFullScreen) {
                        return h.webkitIsFullScreen
                    }
                }
            };
            e.requestFullScreen = function (d) {
                if (e.hasWebkitNativeFullScreen) {
                    d.webkitRequestFullScreen()
                } else {
                    if (e.hasMozNativeFullScreen) {
                        d.mozRequestFullScreen()
                    }
                }
            };
            e.cancelFullScreen = function () {
                if (e.hasWebkitNativeFullScreen) {
                    document.webkitCancelFullScreen()
                } else {
                    if (e.hasMozNativeFullScreen) {
                        document.mozCancelFullScreen()
                    }
                }
            }
        }
        if (e.hasSemiNativeFullScreen && c.match(/mac os x 10_5/i)) {
            e.hasNativeFullScreen = false;
            e.hasSemiNativeFullScreen = false
        }
    }
};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: false,
    setCurrentTime: function (a) {
        this.currentTime = a
    },
    setMuted: function (a) {
        this.muted = a
    },
    setVolume: function (a) {
        this.volume = a
    },
    stop: function () {
        this.pause()
    },
    setSrc: function (a) {
        var c = this.getElementsByTagName("source");
        while (c.length > 0) {
            this.removeChild(c[0])
        }
        if (typeof a == "string") {
            this.src = a
        } else {
            var b, d;
            for (b = 0; b < a.length; b++) {
                d = a[b];
                if (this.canPlayType(d.type)) {
                    this.src = d.src
                }
            }
        }
    },
    setVideoSize: function (b, a) {
        this.width = b;
        this.height = a
    }
};
mejs.PluginMediaElement = function (b, c, a) {
    this.id = b;
    this.pluginType = c;
    this.src = a;
    this.events = {}
};
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: false,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: true,
    ended: false,
    seeking: false,
    duration: 0,
    error: null,
    muted: false,
    volume: 1,
    currentTime: 0,
    play: function () {
        if (this.pluginApi != null) {
            this.pluginApi.playMedia();
            this.paused = false
        }
    },
    load: function () {
        if (this.pluginApi != null) {
            this.pluginApi.loadMedia();
            this.paused = false
        }
    },
    pause: function () {
        if (this.pluginApi != null) {
            this.pluginApi.pauseMedia();
            this.paused = true
        }
    },
    stop: function () {
        if (this.pluginApi != null) {
            this.pluginApi.stopMedia();
            this.paused = true
        }
    },
    canPlayType: function (e) {
        var d, c, a, b = mejs.plugins[this.pluginType];
        for (d = 0; d < b.length; d++) {
            a = b[d];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType, a.version)) {
                for (c = 0; c < a.types.length; c++) {
                    if (e == a.types[c]) {
                        return true
                    }
                }
            }
        }
        return false
    },
    setSrc: function (a) {
        if (typeof a == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));
            this.src = mejs.Utility.absolutizeUrl(a)
        } else {
            var b, c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
                    this.src = mejs.Utility.absolutizeUrl(a)
                }
            }
        }
    },
    setCurrentTime: function (a) {
        if (this.pluginApi != null) {
            this.pluginApi.setCurrentTime(a);
            this.currentTime = a
        }
    },
    setVolume: function (a) {
        if (this.pluginApi != null) {
            this.pluginApi.setVolume(a);
            this.volume = a
        }
    },
    setMuted: function (a) {
        if (this.pluginApi != null) {
            this.pluginApi.setMuted(a);
            this.muted = a
        }
    },
    setVideoSize: function (b, a) {
        if (this.pluginElement.style) {
            this.pluginElement.style.width = b + "px";
            this.pluginElement.style.height = a + "px"
        }
        if (this.pluginApi != null && this.pluginApi.setVideoSize) {
            this.pluginApi.setVideoSize(b, a)
        }
    },
    setFullscreen: function (a) {
        if (this.pluginApi != null) {
            this.pluginApi.setFullscreen(a)
        }
    },
    enterFullScreen: function () {
        this.setFullscreen(true)
    },
    exitFullScreen: function () {
        this.setFullscreen(false)
    },
    addEventListener: function (b, c, a) {
        this.events[b] = this.events[b] || [];
        this.events[b].push(c)
    },
    removeEventListener: function (a, c) {
        if (!a) {
            this.events = {};
            return true
        }
        var b = this.events[a];
        if (!b) {
            return true
        }
        if (!c) {
            this.events[a] = [];
            return true
        }
        for (i = 0; i < b.length; i++) {
            if (b[i] === c) {
                this.events[a].splice(i, 1);
                return true
            }
        }
        return false
    },
    dispatchEvent: function (a) {
        var c, b, d = this.events[a];
        if (d) {
            b = Array.prototype.slice.call(arguments, 1);
            for (c = 0; c < d.length; c++) {
                d[c].apply(null, b)
            }
        }
    }
};
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function (c, a, b) {
        this.pluginMediaElements[c] = a;
        this.htmlMediaElements[c] = b
    },
    initPlugin: function (c) {
        var a = this.pluginMediaElements[c],
            b = this.htmlMediaElements[c];
        switch (a.pluginType) {
        case "flash":
            a.pluginElement = a.pluginApi = document.getElementById(c);
            break;
        case "silverlight":
            a.pluginElement = document.getElementById(a.id);
            a.pluginApi = a.pluginElement.Content.MediaElementJS;
            break
        }
        if (a.pluginApi != null && a.success) {
            a.success(a, b)
        }
    },
    fireEvent: function (h, c, b) {
        var g, f, a, d = this.pluginMediaElements[h];
        d.ended = false;
        d.paused = true;
        g = {
            type: c,
            target: d
        };
        for (f in b) {
            d[f] = b[f];
            g[f] = b[f]
        }
        a = b.bufferedTime || 0;
        g.target.buffered = g.buffered = {
            start: function (e) {
                return 0
            },
            end: function (e) {
                return a
            },
            length: 1
        };
        d.dispatchEvent(g.type, g)
    }
};
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight"],
    enablePluginDebug: false,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    enablePluginSmoothing: false,
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    timerRate: 250,
    startVolume: 0.8,
    success: function () {},
    error: function () {}
};
mejs.MediaElement = function (a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
};
mejs.HtmlMediaElementShim = {
    create: function (e, d) {
        var n = mejs.MediaElementDefaults,
            k = (typeof (e) == "string") ? document.getElementById(e) : e,
            h = k.tagName.toLowerCase(),
            g = (h === "audio" || h === "video"),
            b = (g) ? k.getAttribute("src") : k.getAttribute("href"),
            l = k.getAttribute("poster"),
            f = k.getAttribute("autoplay"),
            j = k.getAttribute("preload"),
            m = k.getAttribute("controls"),
            a, c;
        for (c in d) {
            n[c] = d[c]
        }
        b = (typeof b == "undefined" || b === null || b == "") ? null : b;
        l = (typeof l == "undefined" || l === null) ? "" : l;
        j = (typeof j == "undefined" || j === null || j === "false") ? "none" : j;
        f = !(typeof f == "undefined" || f === null || f === "false");
        m = !(typeof m == "undefined" || m === null || m === "false");
        a = this.determinePlayback(k, n, mejs.MediaFeatures.supportsMediaTag, g, b);
        a.url = (a.url !== null) ? mejs.Utility.absolutizeUrl(a.url) : "";
        if (a.method == "native") {
            if (mejs.MediaFeatures.isBustedAndroid) {
                k.src = a.url;
                k.addEventListener("click", function () {
                    k.play()
                }, false)
            }
            return this.updateNative(a, n, f, j)
        } else {
            if (a.method !== "") {
                return this.createPlugin(a, n, l, f, j, m)
            } else {
                this.createErrorMessage(a, n, l);
                return this
            }
        }
    },
    determinePlayback: function (s, v, b, d, a) {
        var u = [],
            m, h, g, f, c, q, t = {
                method: "",
                url: "",
                htmlMediaElement: s,
                isVideo: (s.tagName.toLowerCase() != "audio")
            },
            o, p, r, e;
        if (typeof v.type != "undefined" && v.type !== "") {
            if (typeof v.type == "string") {
                u.push({
                    type: v.type,
                    url: a
                })
            } else {
                for (m = 0; m < v.type.length; m++) {
                    u.push({
                        type: v.type[m],
                        url: a
                    })
                }
            }
        } else {
            if (a !== null) {
                q = this.formatType(a, s.getAttribute("type"));
                u.push({
                    type: q,
                    url: a
                })
            } else {
                for (m = 0; m < s.childNodes.length; m++) {
                    c = s.childNodes[m];
                    if (c.nodeType == 1 && c.tagName.toLowerCase() == "source") {
                        a = c.getAttribute("src");
                        q = this.formatType(a, c.getAttribute("type"));
                        u.push({
                            type: q,
                            url: a
                        })
                    }
                }
            }
        }
        if (!d && u.length > 0 && u[0].url !== null && this.getTypeFromFile(u[0].url).indexOf("audio") > -1) {
            t.isVideo = false
        }
        if (mejs.MediaFeatures.isBustedAndroid) {
            s.canPlayType = function (j) {
                return (j.match(/video\/(mp4|m4v)/gi) !== null) ? "maybe" : ""
            }
        }
        if (b && (v.mode === "auto" || v.mode === "native")) {
            if (!d) {
                e = document.createElement(t.isVideo ? "video" : "audio");
                s.parentNode.insertBefore(e, s);
                s.style.display = "none";
                t.htmlMediaElement = s = e
            }
            for (m = 0; m < u.length; m++) {
                if (s.canPlayType(u[m].type).replace(/no/, "") !== "" || s.canPlayType(u[m].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "") {
                    t.method = "native";
                    t.url = u[m].url;
                    break
                }
            }
            if (t.method === "native") {
                if (t.url !== null) {
                    s.src = t.url
                }
                return t
            }
        }
        if (v.mode === "auto" || v.mode === "shim") {
            for (m = 0; m < u.length; m++) {
                q = u[m].type;
                for (h = 0; h < v.plugins.length; h++) {
                    o = v.plugins[h];
                    p = mejs.plugins[o];
                    for (g = 0; g < p.length; g++) {
                        r = p[g];
                        if (mejs.PluginDetector.hasPluginVersion(o, r.version)) {
                            for (f = 0; f < r.types.length; f++) {
                                if (q == r.types[f]) {
                                    t.method = o;
                                    t.url = u[m].url;
                                    return t
                                }
                            }
                        }
                    }
                }
            }
        }
        if (t.method === "" && u.length > 0) {
            t.url = u[0].url
        }
        return t
    },
    formatType: function (a, c) {
        var b;
        if (a && !c) {
            return this.getTypeFromFile(a)
        } else {
            if (c && ~c.indexOf(";")) {
                return c.substr(0, c.indexOf(";"))
            } else {
                return c
            }
        }
    },
    getTypeFromFile: function (a) {
        var b = a.substring(a.lastIndexOf(".") + 1);
        return (/(mp4|m4v|ogg|ogv|webm|flv|wmv|mpeg|mov)/gi.test(b) ? "video" : "audio") + "/" + b
    },
    createErrorMessage: function (c, b, g) {
        var d = c.htmlMediaElement,
            a = document.createElement("div");
        a.className = "me-cannotplay";
        try {
            a.style.width = d.width + "px";
            a.style.height = d.height + "px"
        } catch (f) {}
        a.innerHTML = (g !== "") ? '<a href="' + c.url + '"><img src="' + g + '" /></a>' : '<a href="' + c.url + '"><span>Download File</span></a>';
        d.parentNode.insertBefore(a, d);
        d.style.display = "none";
        b.error(d)
    },
    createPlugin: function (b, p, l, f, k, m) {
        var j = b.htmlMediaElement,
            d = 1,
            n = 1,
            e = "me_" + b.method + "_" + (mejs.meIndex++),
            o = new mejs.PluginMediaElement(e, b.method, b.url),
            c = document.createElement("div"),
            h, g, a;
        g = j.parentNode;
        while (g !== null && g.tagName.toLowerCase() != "body") {
            if (g.parentNode.tagName.toLowerCase() == "p") {
                g.parentNode.parentNode.insertBefore(g, g.parentNode);
                break
            }
            g = g.parentNode
        }
        if (b.isVideo) {
            d = (p.videoWidth > 0) ? p.videoWidth : (j.getAttribute("width") !== null) ? j.getAttribute("width") : p.defaultVideoWidth;
            n = (p.videoHeight > 0) ? p.videoHeight : (j.getAttribute("height") !== null) ? j.getAttribute("height") : p.defaultVideoHeight;
            d = mejs.Utility.encodeUrl(d);
            n = mejs.Utility.encodeUrl(n)
        } else {
            if (p.enablePluginDebug) {
                d = 320;
                n = 240
            }
        }
        o.success = p.success;
        mejs.MediaPluginBridge.registerPluginElement(e, o, j);
        c.className = "me-plugin";
        j.parentNode.insertBefore(c, j);
        a = ["id=" + e, "isvideo=" + ((b.isVideo) ? "true" : "false"), "autoplay=" + ((f) ? "true" : "false"), "preload=" + k, "width=" + d, "startvolume=" + p.startVolume, "timerrate=" + p.timerRate, "height=" + n];
        if (b.url !== null) {
            if (b.method == "flash") {
                a.push("file=" + mejs.Utility.encodeUrl(b.url))
            } else {
                a.push("file=" + b.url)
            }
        }
        if (p.enablePluginDebug) {
            a.push("debug=true")
        }
        if (p.enablePluginSmoothing) {
            a.push("smoothing=true")
        }
        if (m) {
            a.push("controls=true")
        }
        switch (b.method) {
        case "silverlight":
            c.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + e + '" name="' + e + '" width="' + d + '" height="' + n + '"><param name="initParams" value="' + a.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + p.pluginPath + p.silverlightName + '" /></object>';
            break;
        case "flash":
            if (mejs.MediaFeatures.isIE) {
                h = document.createElement("div");
                c.appendChild(h);
                h.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e + '" width="' + d + '" height="' + n + '"><param name="movie" value="' + p.pluginPath + p.flashName + "?x=" + (new Date()) + '" /><param name="flashvars" value="' + a.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
            } else {
                c.innerHTML = '<embed id="' + e + '" name="' + e + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + p.pluginPath + p.flashName + '" flashvars="' + a.join("&") + '" width="' + d + '" height="' + n + '"></embed>'
            }
            break
        }
        j.style.display = "none";
        return o
    },
    updateNative: function (d, c, f, b) {
        var e = d.htmlMediaElement,
            a;
        for (a in mejs.HtmlMediaElement) {
            e[a] = mejs.HtmlMediaElement[a]
        }
        c.success(e, e);
        return e
    }
};
window.mejs = mejs;
window.MediaElement = mejs.MediaElement;
/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2011, John Dyer (http://j.hn/)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
if (typeof jQuery != "undefined") {
    mejs.$ = jQuery
} else {
    if (typeof ender != "undefined") {
        mejs.$ = ender
    }
}(function (a) {
    mejs.MepDefaults = {
        poster: "",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        audioWidth: 400,
        audioHeight: 30,
        startVolume: 0.8,
        loop: false,
        enableAutosize: true,
        alwaysShowHours: false,
        showTimecodeFrameCount: false,
        framesPerSecond: 25,
        autosizeProgress: true,
        alwaysShowControls: false,
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: true
    };
    mejs.mepIndex = 0;
    mejs.MediaElementPlayer = function (c, d) {
        if (!(this instanceof mejs.MediaElementPlayer)) {
            return new mejs.MediaElementPlayer(c, d)
        }
        var b = this;
        b.$media = b.$node = a(c);
        b.node = b.media = b.$media[0];
        if (typeof b.node.player != "undefined") {
            return b.node.player
        } else {
            b.node.player = b
        }
        b.options = a.extend({}, mejs.MepDefaults, d);
        b.init();
        return b
    };
    mejs.MediaElementPlayer.prototype = {
        init: function () {
            var c = this,
                d = mejs.MediaFeatures,
                f = a.extend(true, {}, c.options, {
                    success: function (h, g) {
                        c.meReady(h, g)
                    },
                    error: function (g) {
                        c.handleError(g)
                    }
                }),
                b = c.media.tagName.toLowerCase();
            c.isDynamic = (b !== "audio" && b !== "video");
            if (c.isDynamic) {
                c.isVideo = c.options.isVideo
            } else {
                c.isVideo = (b !== "audio" && c.options.isVideo)
            }
            if ((d.isiPad && c.options.iPadUseNativeControls) || (d.isiPhone && c.options.iPhoneUseNativeControls)) {
                c.$media.attr("controls", "controls");
                c.$media.removeAttr("poster");
                if (d.isiPad && c.media.getAttribute("autoplay") !== null) {
                    c.media.load();
                    c.media.play()
                }
            } else {
                if (d.isAndroid && c.AndroidUseNativeControls) {} else {
                    c.$media.removeAttr("controls");
                    c.id = "mep_" + mejs.mepIndex++;
                    c.container = a('<div id="' + c.id + '" class="mejs-container"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(c.$media[0].className).insertBefore(c.$media);
                    c.container.addClass((d.isAndroid ? "mejs-android " : "") + (d.isiOS ? "mejs-ios " : "") + (d.isiPad ? "mejs-ipad " : "") + (d.isiPhone ? "mejs-iphone " : "") + (c.isVideo ? "mejs-video " : "mejs-audio "));
                    if (d.isiOS) {
                        var e = c.$media.clone();
                        c.container.find(".mejs-mediaelement").append(e);
                        c.$media.remove();
                        c.$node = c.$media = e;
                        c.node = c.media = e[0]
                    } else {
                        c.container.find(".mejs-mediaelement").append(c.$media)
                    }
                    c.controls = c.container.find(".mejs-controls");
                    c.layers = c.container.find(".mejs-layers");
                    if (c.isVideo) {
                        if (c.options.videoWidth > 0 || c.options.videoWidth.toString().indexOf("%") > -1) {
                            c.width = c.options.videoWidth
                        } else {
                            if (c.media.style.width !== "" && c.media.style.width !== null) {
                                c.width = c.media.style.width
                            } else {
                                if (c.media.getAttribute("width") !== null) {
                                    c.width = c.$media.attr("width")
                                } else {
                                    c.width = c.options.defaultVideoWidth
                                }
                            }
                        }
                        if (c.options.videoHeight > 0 || c.options.videoHeight.toString().indexOf("%") > -1) {
                            c.height = c.options.videoHeight
                        } else {
                            if (c.media.style.height !== "" && c.media.style.height !== null) {
                                c.height = c.media.style.height
                            } else {
                                if (c.$media[0].getAttribute("height") !== null) {
                                    c.height = c.$media.attr("height")
                                } else {
                                    c.height = c.options.defaultVideoHeight
                                }
                            }
                        }
                    } else {
                        c.width = c.options.audioWidth;
                        c.height = c.options.audioHeight
                    }
                    c.setPlayerSize(c.width, c.height);
                    f.pluginWidth = c.height;
                    f.pluginHeight = c.width
                }
            }
            mejs.MediaElement(c.$media[0], f)
        },
        controlsAreVisible: true,
        showControls: function (b) {
            var c = this;
            b = typeof b == "undefined" || b;
            if (c.controlsAreVisible) {
                return
            }
            if (b) {
                c.controls.css("visibility", "visible").stop(true, true).fadeIn(200, function () {
                    c.controlsAreVisible = true
                });
                c.container.find(".mejs-control").css("visibility", "visible").stop(true, true).fadeIn(200, function () {
                    c.controlsAreVisible = true
                })
            } else {
                c.controls.css("visibility", "visible").css("display", "block");
                c.container.find(".mejs-control").css("visibility", "visible").css("display", "block");
                c.controlsAreVisible = true
            }
            c.setControlsSize()
        },
        hideControls: function (b) {
            var c = this,
                b = typeof b == "undefined" || b;
            if (!c.controlsAreVisible) {
                return
            }
            if (b) {
                c.controls.stop(true, true).fadeOut(200, function () {
                    a(this).css("visibility", "hidden").css("display", "block");
                    c.controlsAreVisible = false
                });
                c.container.find(".mejs-control").stop(true, true).fadeOut(200, function () {
                    a(this).css("visibility", "hidden").css("display", "block")
                })
            } else {
                c.controls.css("visibility", "hidden").css("display", "block");
                c.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
                c.controlsAreVisible = false
            }
        },
        controlsTimer: null,
        startControlsTimer: function (c) {
            var b = this,
                c = typeof c != "undefined" ? c : 500;
            b.killControlsTimer("start");
            b.controlsTimer = setTimeout(function () {
                b.hideControls();
                b.killControlsTimer("hide")
            }, c)
        },
        killControlsTimer: function (c) {
            var b = this;
            if (b.controlsTimer !== null) {
                clearTimeout(b.controlsTimer);
                delete b.controlsTimer;
                b.controlsTimer = null
            }
        },
        controlsEnabled: true,
        disableControls: function () {
            var b = this;
            b.killControlsTimer();
            b.hideControls(false);
            this.controlsEnabled = false
        },
        enableControls: function () {
            var b = this;
            b.showControls(false);
            b.controlsEnabled = true
        },
        meReady: function (c, f) {
            var k = this,
                j = mejs.MediaFeatures,
                g = f.getAttribute("autoplay"),
                d = !(typeof g == "undefined" || g === null || g === "false"),
                b, l;
            if (k.created) {
                return
            } else {
                k.created = true
            }
            k.media = c;
            k.domNode = f;
            if (!(j.isAndroid && k.options.AndroidUseNativeControls) && !(j.isiPad && k.options.iPadUseNativeControls) && !(j.isiPhone && k.options.iPhoneUseNativeControls)) {
                k.buildposter(k, k.controls, k.layers, k.media);
                k.buildoverlays(k, k.controls, k.layers, k.media);
                k.findTracks();
                for (b in k.options.features) {
                    l = k.options.features[b];
                    if (k["build" + l]) {
                        try {
                            k["build" + l](k, k.controls, k.layers, k.media)
                        } catch (h) {}
                    }
                }
                k.container.trigger("controlsready");
                k.setPlayerSize(k.width, k.height);
                k.setControlsSize();
                if (k.isVideo) {
                    if (mejs.MediaFeatures.hasTouch) {
                        console.log("enabling touch control style");
                        k.$media.bind("touchstart", function () {
                            console.log("touch click. visible: " + k.controlsAreVisible + ", enabled: " + k.controlsEnabled);
                            if (k.controlsAreVisible) {
                                k.hideControls(false)
                            } else {
                                if (k.controlsEnabled) {
                                    k.showControls(false)
                                }
                            }
                        })
                    } else {
                        if (k.media.pluginType == "native") {
                            k.$media.click(function () {
                                if (c.paused) {
                                    c.play()
                                } else {
                                    c.pause()
                                }
                            })
                        } else {
                            a(k.media.pluginElement).click(function () {
                                if (c.paused) {
                                    c.play()
                                } else {
                                    c.pause()
                                }
                            })
                        }
                        k.container.bind("mouseenter mouseover", function () {
                            if (k.controlsEnabled) {
                                if (!k.options.alwaysShowControls) {
                                    k.killControlsTimer("enter");
                                    k.showControls();
                                    k.startControlsTimer(2500)
                                }
                            }
                        }).bind("mousemove", function () {
                            if (k.controlsEnabled) {
                                if (!k.controlsAreVisible) {
                                    k.showControls()
                                }
                                if (!k.options.alwaysShowControls) {
                                    k.startControlsTimer(2500)
                                }
                            }
                        }).bind("mouseleave", function () {
                            if (k.controlsEnabled) {
                                if (!k.media.paused && !k.options.alwaysShowControls) {
                                    k.startControlsTimer(1000)
                                }
                            }
                        })
                    }
                    if (d && !k.options.alwaysShowControls) {
                        k.hideControls()
                    }
                    if (k.options.enableAutosize) {
                        k.media.addEventListener("loadedmetadata", function (m) {
                            if (k.options.videoHeight <= 0 && k.domNode.getAttribute("height") === null && !isNaN(m.target.videoHeight)) {
                                k.setPlayerSize(m.target.videoWidth, m.target.videoHeight);
                                k.setControlsSize();
                                k.media.setVideoSize(m.target.videoWidth, m.target.videoHeight)
                            }
                        }, false)
                    }
                }
                k.media.addEventListener("ended", function (m) {
                    try {
                        k.media.setCurrentTime(0)
                    } catch (n) {}
                    k.media.pause();
                    if (k.setProgressRail) {
                        k.setProgressRail()
                    }
                    if (k.setCurrentRail) {
                        k.setCurrentRail()
                    }
                    if (k.options.loop) {
                        k.media.play()
                    } else {
                        if (!k.options.alwaysShowControls && k.controlsEnabled) {
                            k.showControls()
                        }
                    }
                }, false);
                k.media.addEventListener("loadedmetadata", function (m) {
                    if (k.updateDuration) {
                        k.updateDuration()
                    }
                    if (k.updateCurrent) {
                        k.updateCurrent()
                    }
                    if (!k.isFullScreen) {
                        k.setPlayerSize(k.width, k.height);
                        k.setControlsSize()
                    }
                }, false);
                setTimeout(function () {
                    k.setPlayerSize(k.width, k.height);
                    k.setControlsSize()
                }, 50);
                a(window).resize(function () {
                    if (!(k.isFullScreen || (mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen))) {
                        k.setPlayerSize(k.width, k.height)
                    }
                    k.setControlsSize()
                })
            }
            if (d && c.pluginType == "native") {
                c.load();
                c.play()
            }
            if (k.options.success) {
                k.options.success(k.media, k.domNode, k)
            }
        },
        handleError: function (c) {
            var b = this;
            b.controls.hide();
            if (b.options.error) {
                b.options.error(c)
            }
        },
        setPlayerSize: function (g, b) {
            var e = this;
            if (e.height.toString().indexOf("%") > 0) {
                var h = (e.media.videoWidth && e.media.videoWidth > 0) ? e.media.videoWidth : e.options.defaultVideoWidth,
                    d = (e.media.videoHeight && e.media.videoHeight > 0) ? e.media.videoHeight : e.options.defaultVideoHeight,
                    f = e.container.parent().width(),
                    c = parseInt(f * d / h, 10);
                if (e.container.parent()[0].tagName.toLowerCase() === "body") {
                    f = a(window).width();
                    c = a(window).height()
                }
                e.container.width(f).height(c);
                e.$media.width("100%").height("100%");
                e.container.find("object embed").width("100%").height("100%");
                if (e.media.setVideoSize) {
                    e.media.setVideoSize(f, c)
                }
                e.layers.children(".mejs-layer").width("100%").height("100%")
            } else {
                e.container.width(e.width).height(e.height);
                e.layers.children(".mejs-layer").width(e.width).height(e.height)
            }
        },
        setControlsSize: function () {
            var c = this,
                f = 0,
                h = 0,
                g = c.controls.find(".mejs-time-rail"),
                d = c.controls.find(".mejs-time-total"),
                e = c.controls.find(".mejs-time-current"),
                b = c.controls.find(".mejs-time-loaded");
            others = g.siblings();
            if (c.options && !c.options.autosizeProgress) {
                h = parseInt(g.css("width"))
            }
            if (h === 0 || !h) {
                others.each(function () {
                    if (a(this).css("position") != "absolute") {
                        f += a(this).outerWidth(true)
                    }
                });
                h = c.controls.width() - f - (g.outerWidth(true) - g.outerWidth(false))
            }
            g.width(h);
            d.width(h - (d.outerWidth(true) - d.width()));
            if (c.setProgressRail) {
                c.setProgressRail()
            }
            if (c.setCurrentRail) {
                c.setCurrentRail()
            }
        },
        buildposter: function (e, b, g, f) {
            var d = this,
                h = a('<div class="mejs-poster mejs-layer"></div>').appendTo(g),
                c = e.$media.attr("poster");
            if (e.options.poster !== "") {
                c = e.options.poster
            }
            if (c !== "" && c != null) {
                d.setPoster(c)
            } else {
                h.hide()
            }
            f.addEventListener("play", function () {
                h.hide()
            }, false)
        },
        setPoster: function (c) {
            var d = this,
                e = d.container.find(".mejs-poster"),
                b = e.find("img");
            if (b.length == 0) {
                b = a('<img width="100%" height="100%" />').appendTo(e)
            }
            b.attr("src", c)
        },
        buildoverlays: function (e, b, g, f) {
            if (!e.isVideo) {
                return
            }
            var h = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(g),
                c = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(g),
                d = a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(g).click(function () {
                    if (f.paused) {
                        f.play()
                    } else {
                        f.pause()
                    }
                });
            f.addEventListener("play", function () {
                d.hide();
                h.hide();
                c.hide()
            }, false);
            f.addEventListener("playing", function () {
                d.hide();
                h.hide();
                c.hide()
            }, false);
            f.addEventListener("pause", function () {
                if (!mejs.MediaFeatures.isiPhone) {
                    d.show()
                }
            }, false);
            f.addEventListener("waiting", function () {
                h.show()
            }, false);
            f.addEventListener("loadeddata", function () {
                h.show()
            }, false);
            f.addEventListener("canplay", function () {
                h.hide()
            }, false);
            f.addEventListener("error", function () {
                h.hide();
                c.show();
                c.find("mejs-overlay-error").html("Error loading this resource")
            }, false)
        },
        findTracks: function () {
            var b = this,
                c = b.$media.find("track");
            b.tracks = [];
            c.each(function () {
                b.tracks.push({
                    srclang: a(this).attr("srclang").toLowerCase(),
                    src: a(this).attr("src"),
                    kind: a(this).attr("kind"),
                    entries: [],
                    isLoaded: false
                })
            })
        },
        changeSkin: function (b) {
            this.container[0].className = "mejs-container " + b;
            this.setPlayerSize();
            this.setControlsSize()
        },
        play: function () {
            this.media.play()
        },
        pause: function () {
            this.media.pause()
        },
        load: function () {
            this.media.load()
        },
        setMuted: function (b) {
            this.media.setMuted(b)
        },
        setCurrentTime: function (b) {
            this.media.setCurrentTime(b)
        },
        getCurrentTime: function () {
            return this.media.currentTime
        },
        setVolume: function (b) {
            this.media.setVolume(b)
        },
        getVolume: function () {
            return this.media.volume
        },
        setSrc: function (b) {
            this.media.setSrc(b)
        }
    };
    if (typeof jQuery != "undefined") {
        jQuery.fn.mediaelementplayer = function (b) {
            return this.each(function () {
                new mejs.MediaElementPlayer(this, b)
            })
        }
    }
    window.MediaElementPlayer = mejs.MediaElementPlayer
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        playpauseText: "Play/Pause"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildplaypause: function (d, b, g, f) {
            var c = this,
                e = a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + c.id + '" title="' + c.options.playpauseText + '"></button></div>').appendTo(b).click(function (h) {
                    h.preventDefault();
                    if (f.paused) {
                        f.play()
                    } else {
                        f.pause()
                    }
                    return false
                });
            f.addEventListener("play", function () {
                e.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            f.addEventListener("playing", function () {
                e.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            f.addEventListener("pause", function () {
                e.removeClass("mejs-pause").addClass("mejs-play")
            }, false);
            f.addEventListener("paused", function () {
                e.removeClass("mejs-pause").addClass("mejs-play")
            }, false)
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        stopText: "Stop"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildstop: function (e, b, g, f) {
            var d = this,
                c = a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + d.id + '" title="' + d.options.stopText + "></button></div>").appendTo(b).click(function () {
                    if (!f.paused) {
                        f.pause()
                    }
                    if (f.currentTime > 0) {
                        f.setCurrentTime(0);
                        b.find(".mejs-time-current").width("0px");
                        b.find(".mejs-time-handle").css("left", "0px");
                        b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
                        b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));
                        g.find(".mejs-poster").show()
                    }
                })
        }
    })
})(mejs.$);
(function (a) {
    a.extend(MediaElementPlayer.prototype, {
        buildprogress: function (n, o, f, c) {
            a('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(o);
            var p = this,
                l = o.find(".mejs-time-total"),
                g = o.find(".mejs-time-loaded"),
                k = o.find(".mejs-time-current"),
                j = o.find(".mejs-time-handle"),
                m = o.find(".mejs-time-float"),
                b = o.find(".mejs-time-float-current"),
                e = function (u) {
                    var q = u.pageX,
                        v = l.offset(),
                        s = l.outerWidth(),
                        r = 0,
                        t = 0;
                    if (q > v.left && q <= s + v.left && c.duration) {
                        r = ((q - v.left) / s);
                        t = (r <= 0.02) ? 0 : r * c.duration;
                        if (h) {
                            c.setCurrentTime(t)
                        }
                        var w = q - v.left;
                        m.css("left", w);
                        b.html(mejs.Utility.secondsToTimeCode(t))
                    }
                },
                h = false,
                d = false;
            l.bind("mousedown", function (q) {
                if (q.which === 1) {
                    h = true;
                    e(q);
                    return false
                }
            });
            o.find(".mejs-time-total").bind("mouseenter", function (q) {
                d = true
            }).bind("mouseleave", function (q) {
                d = false
            });
            a(document).bind("mouseup", function (q) {
                h = false
            }).bind("mousemove", function (q) {
                if (h || d) {
                    e(q)
                }
            });
            c.addEventListener("progress", function (q) {
                n.setProgressRail(q);
                n.setCurrentRail(q)
            }, false);
            c.addEventListener("timeupdate", function (q) {
                n.setProgressRail(q);
                n.setCurrentRail(q)
            }, false);
            p.loaded = g;
            p.total = l;
            p.current = k;
            p.handle = j
        },
        setProgressRail: function (f) {
            var b = this,
                d = (f != undefined) ? f.target : b.media,
                c = null;
            if (d && d.buffered && d.buffered.length > 0 && d.buffered.end && d.duration) {
                c = d.buffered.end(0) / d.duration
            } else {
                if (d && d.bytesTotal != undefined && d.bytesTotal > 0 && d.bufferedBytes != undefined) {
                    c = d.bufferedBytes / d.bytesTotal
                } else {
                    if (f && f.lengthComputable && f.total != 0) {
                        c = f.loaded / f.total
                    }
                }
            }
            if (c !== null) {
                c = Math.min(1, Math.max(0, c));
                if (b.loaded && b.total) {
                    b.loaded.width(b.total.width() * c)
                }
            }
        },
        setCurrentRail: function () {
            var b = this;
            if (b.media.currentTime != undefined && b.media.duration) {
                if (b.total && b.handle) {
                    var d = b.total.width() * b.media.currentTime / b.media.duration,
                        c = d - (b.handle.outerWidth(true) / 2);
                    b.current.width(d);
                    b.handle.css("left", c)
                }
            }
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        duration: -1
    });
    a.extend(MediaElementPlayer.prototype, {
        buildcurrent: function (d, b, f, e) {
            var c = this;
            a('<div class="mejs-time"><span class="mejs-currenttime">' + (d.options.alwaysShowHours ? "00:" : "") + (d.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(b);
            c.currenttime = c.controls.find(".mejs-currenttime");
            e.addEventListener("timeupdate", function () {
                d.updateCurrent()
            }, false)
        },
        buildduration: function (d, b, f, e) {
            var c = this;
            if (b.children().last().find(".mejs-currenttime").length > 0) {
                a(' <span> | </span> <span class="mejs-duration">' + (c.options.duration > 0 ? mejs.Utility.secondsToTimeCode(c.options.duration, c.options.alwaysShowHours || c.media.duration > 3600, c.options.showTimecodeFrameCount, c.options.framesPerSecond || 25) : ((d.options.alwaysShowHours ? "00:" : "") + (d.options.showTimecodeFrameCount ? "00:00:00" : "00:00"))) + "</span>").appendTo(b.find(".mejs-time"))
            } else {
                b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
                a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (c.options.duration > 0 ? mejs.Utility.secondsToTimeCode(c.options.duration, c.options.alwaysShowHours || c.media.duration > 3600, c.options.showTimecodeFrameCount, c.options.framesPerSecond || 25) : ((d.options.alwaysShowHours ? "00:" : "") + (d.options.showTimecodeFrameCount ? "00:00:00" : "00:00"))) + "</span></div>").appendTo(b)
            }
            c.durationD = c.controls.find(".mejs-duration");
            e.addEventListener("timeupdate", function () {
                d.updateDuration()
            }, false)
        },
        updateCurrent: function () {
            var b = this;
            if (b.currenttime) {
                b.currenttime.html(mejs.Utility.secondsToTimeCode(b.media.currentTime, b.options.alwaysShowHours || b.media.duration > 3600, b.options.showTimecodeFrameCount, b.options.framesPerSecond || 25))
            }
        },
        updateDuration: function () {
            var b = this;
            if (b.media.duration && b.durationD) {
                b.durationD.html(mejs.Utility.secondsToTimeCode(b.media.duration, b.options.alwaysShowHours, b.options.showTimecodeFrameCount, b.options.framesPerSecond || 25))
            }
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        muteText: "Mute Toggle"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildvolume: function (l, m, h, d) {
            if (mejs.MediaFeatures.hasTouch) {
                return
            }
            var n = this,
                e = a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + n.id + '" title="' + n.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(m),
                o = e.find(".mejs-volume-slider"),
                b = e.find(".mejs-volume-total"),
                g = e.find(".mejs-volume-current"),
                f = e.find(".mejs-volume-handle"),
                k = function (s) {
                    if (!o.is(":visible")) {
                        o.show();
                        k(s);
                        o.hide();
                        return
                    }
                    var r = b.height(),
                        q = b.position(),
                        p = r - (r * s);
                    f.css("top", q.top + p - (f.height() / 2));
                    g.height(r - p);
                    g.css("top", q.top + p)
                },
                c = function (u) {
                    var r = b.height(),
                        q = b.offset(),
                        p = parseInt(b.css("top").replace(/px/, ""), 10),
                        t = u.pageY - q.top,
                        s = (r - t) / r;
                    if (q.top == 0) {
                        return
                    }
                    s = Math.max(0, s);
                    s = Math.min(s, 1);
                    if (t < 0) {
                        t = 0
                    } else {
                        if (t > r) {
                            t = r
                        }
                    }
                    f.css("top", t - (f.height() / 2) + p);
                    g.height(r - t);
                    g.css("top", t + p);
                    if (s == 0) {
                        d.setMuted(true);
                        e.removeClass("mejs-mute").addClass("mejs-unmute")
                    } else {
                        d.setMuted(false);
                        e.removeClass("mejs-unmute").addClass("mejs-mute")
                    }
                    s = Math.max(0, s);
                    s = Math.min(s, 1);
                    d.setVolume(s)
                },
                j = false;
            e.hover(function () {
                o.show()
            }, function () {
                o.hide()
            });
            o.bind("mousedown", function (p) {
                c(p);
                j = true;
                return false
            });
            a(document).bind("mouseup", function (p) {
                j = false
            }).bind("mousemove", function (p) {
                if (j) {
                    c(p)
                }
            });
            e.find("button").click(function () {
                d.setMuted(!d.muted)
            });
            d.addEventListener("volumechange", function (p) {
                if (!j) {
                    if (d.muted) {
                        k(0);
                        e.removeClass("mejs-mute").addClass("mejs-unmute")
                    } else {
                        k(p.target.volume);
                        e.removeClass("mejs-unmute").addClass("mejs-mute")
                    }
                }
            }, false);
            k(l.options.startVolume);
            if (d.pluginType === "native") {
                d.setVolume(l.options.startVolume)
            }
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        forcePluginFullScreen: false,
        newWindowCallback: function () {
            return ""
        },
        fullscreenText: "Fullscreen"
    });
    a.extend(MediaElementPlayer.prototype, {
        isFullScreen: false,
        isNativeFullScreen: false,
        docStyleOverflow: null,
        isInIframe: false,
        buildfullscreen: function (h, j, f, d) {
            if (!h.isVideo) {
                return
            }
            h.isInIframe = (window.location != window.parent.location);
            if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                h.container.bind(mejs.MediaFeatures.fullScreenEventName, function (l) {
                    if (mejs.MediaFeatures.isFullScreen()) {
                        h.isNativeFullScreen = true;
                        h.setControlsSize()
                    } else {
                        h.isNativeFullScreen = false;
                        h.exitFullScreen()
                    }
                })
            }
            var k = this,
                g = 0,
                c = 0,
                b = h.container,
                e = a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + k.id + '" title="' + k.options.fullscreenText + '"></button></div>').appendTo(j).click(function () {
                    var l = (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || h.isFullScreen;
                    if (l) {
                        h.exitFullScreen()
                    } else {
                        h.enterFullScreen()
                    }
                });
            h.fullscreenBtn = e;
            a(document).bind("keydown", function (l) {
                if (((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen()) || k.isFullScreen) && l.keyCode == 27) {
                    h.exitFullScreen()
                }
            })
        },
        enterFullScreen: function () {
            var c = this;
            if (c.media.pluginType !== "native" && (mejs.MediaFeatures.isGecko || c.options.forcePluginFullScreen)) {
                c.media.setFullscreen(true);
                return
            }
            docStyleOverflow = document.documentElement.style.overflow;
            document.documentElement.style.overflow = "hidden";
            normalHeight = c.container.height();
            normalWidth = c.container.width();
            if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                mejs.MediaFeatures.requestFullScreen(c.container[0])
            } else {
                if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                    c.media.webkitEnterFullscreen();
                    return
                }
            }
            if (c.isInIframe) {
                var b = c.options.newWindowCallback(this);
                if (b !== "") {
                    if (!mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        c.pause();
                        window.open(b, c.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                        return
                    } else {
                        setTimeout(function () {
                            if (!c.isNativeFullScreen) {
                                c.pause();
                                window.open(b, c.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")
                            }
                        }, 250)
                    }
                }
            }
            c.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
            if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                setTimeout(function () {
                    c.container.css({
                        width: "100%",
                        height: "100%"
                    })
                }, 500)
            }
            if (c.pluginType === "native") {
                c.$media.width("100%").height("100%")
            } else {
                c.container.find("object embed").width("100%").height("100%");
                c.media.setVideoSize(a(window).width(), a(window).height())
            }
            c.layers.children("div").width("100%").height("100%");
            if (c.fullscreenBtn) {
                c.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen")
            }
            c.setControlsSize();
            c.isFullScreen = true
        },
        exitFullScreen: function () {
            var b = this;
            if (b.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) {
                b.media.setFullscreen(false);
                return
            }
            if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || b.isFullScreen)) {
                mejs.MediaFeatures.cancelFullScreen()
            }
            document.documentElement.style.overflow = docStyleOverflow;
            b.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
            if (b.pluginType === "native") {
                b.$media.width(normalWidth).height(normalHeight)
            } else {
                b.container.find("object embed").width(normalWidth).height(normalHeight);
                b.media.setVideoSize(normalWidth, normalHeight)
            }
            b.layers.children("div").width(normalWidth).height(normalHeight);
            b.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
            b.setControlsSize();
            b.isFullScreen = false
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        startLanguage: "",
        translations: [],
        translationSelector: false,
        googleApiKey: "",
        tracksText: "Captions/Subtitles"
    });
    a.extend(MediaElementPlayer.prototype, {
        hasChapters: false,
        buildtracks: function (f, b, h, g) {
            if (!f.isVideo) {
                return
            }
            if (f.tracks.length == 0) {
                return
            }
            var e = this,
                d, c = "";
            f.chapters = a('<div class="mejs-chapters mejs-layer"></div>').prependTo(h).hide();
            f.captions = a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position"><span class="mejs-captions-text"></span></div></div>').prependTo(h).hide();
            f.captionsText = f.captions.find(".mejs-captions-text");
            f.captionsButton = a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + e.id + '" title="' + e.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + f.id + '_captions" id="' + f.id + '_captions_none" value="none" checked="checked" /><label for="' + f.id + '_captions_none">None</label></li></ul></div></div>').appendTo(b).hover(function () {
                a(this).find(".mejs-captions-selector").css("visibility", "visible")
            }, function () {
                a(this).find(".mejs-captions-selector").css("visibility", "hidden")
            }).delegate("input[type=radio]", "click", function () {
                lang = this.value;
                if (lang == "none") {
                    f.selectedTrack = null
                } else {
                    for (d = 0; d < f.tracks.length; d++) {
                        if (f.tracks[d].srclang == lang) {
                            f.selectedTrack = f.tracks[d];
                            f.captions.attr("lang", f.selectedTrack.srclang);
                            f.displayCaptions();
                            break
                        }
                    }
                }
            });
            if (!f.options.alwaysShowControls) {
                f.container.bind("mouseenter", function () {
                    f.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("mouseleave", function () {
                    if (!g.paused) {
                        f.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                    }
                })
            } else {
                f.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
            }
            f.trackToLoad = -1;
            f.selectedTrack = null;
            f.isLoadingTrack = false;
            if (f.tracks.length > 0 && f.options.translations.length > 0) {
                for (d = 0; d < f.options.translations.length; d++) {
                    f.tracks.push({
                        srclang: f.options.translations[d].toLowerCase(),
                        src: null,
                        kind: "subtitles",
                        entries: [],
                        isLoaded: false,
                        isTranslation: true
                    })
                }
            }
            for (d = 0; d < f.tracks.length; d++) {
                if (f.tracks[d].kind == "subtitles") {
                    f.addTrackButton(f.tracks[d].srclang, f.tracks[d].isTranslation)
                }
            }
            f.loadNextTrack();
            g.addEventListener("timeupdate", function (j) {
                f.displayCaptions()
            }, false);
            g.addEventListener("loadedmetadata", function (j) {
                f.displayChapters()
            }, false);
            f.container.hover(function () {
                if (f.hasChapters) {
                    f.chapters.css("visibility", "visible");
                    f.chapters.fadeIn(200)
                }
            }, function () {
                if (f.hasChapters && !g.paused) {
                    f.chapters.fadeOut(200, function () {
                        a(this).css("visibility", "hidden");
                        a(this).css("display", "block")
                    })
                }
            });
            if (f.node.getAttribute("autoplay") !== null) {
                f.chapters.css("visibility", "hidden")
            }
            if (f.options.translationSelector) {
                for (d in mejs.language.codes) {
                    c += '<option value="' + d + '">' + mejs.language.codes[d] + "</option>"
                }
                f.container.find(".mejs-captions-selector ul").before(a('<select class="mejs-captions-translations"><option value="">--Add Translation--</option>' + c + "</select>"));
                f.container.find(".mejs-captions-translations").change(function () {
                    var j = a(this);
                    lang = j.val();
                    if (lang != "") {
                        f.tracks.push({
                            srclang: lang,
                            src: null,
                            entries: [],
                            isLoaded: false,
                            isTranslation: true
                        });
                        if (!f.isLoadingTrack) {
                            f.trackToLoad--;
                            f.addTrackButton(lang, true);
                            f.options.startLanguage = lang;
                            f.loadNextTrack()
                        }
                    }
                })
            }
        },
        loadNextTrack: function () {
            var b = this;
            b.trackToLoad++;
            if (b.trackToLoad < b.tracks.length) {
                b.isLoadingTrack = true;
                b.loadTrack(b.trackToLoad)
            } else {
                b.isLoadingTrack = false
            }
        },
        loadTrack: function (c) {
            var d = this,
                b = d.tracks[c],
                e = function () {
                    b.isLoaded = true;
                    d.enableTrackButton(b.srclang);
                    d.loadNextTrack()
                };
            if (b.isTranslation) {
                mejs.TrackFormatParser.translateTrackText(d.tracks[0].entries, d.tracks[0].srclang, b.srclang, d.options.googleApiKey, function (f) {
                    b.entries = f;
                    e()
                })
            } else {
                a.ajax({
                    url: b.src,
                    success: function (f) {
                        b.entries = mejs.TrackFormatParser.parse(f);
                        e();
                        if (b.kind == "chapters" && d.media.duration > 0) {
                            d.drawChapters(b)
                        }
                    },
                    error: function () {
                        d.loadNextTrack()
                    }
                })
            }
        },
        enableTrackButton: function (c) {
            var b = this;
            b.captionsButton.find("input[value=" + c + "]").prop("disabled", false).siblings("label").html(mejs.language.codes[c] || c);
            if (b.options.startLanguage == c) {
                a("#" + b.id + "_captions_" + c).click()
            }
            b.adjustLanguageBox()
        },
        addTrackButton: function (e, d) {
            var c = this,
                b = mejs.language.codes[e] || e;
            c.captionsButton.find("ul").append(a('<li><input type="radio" name="' + c.id + '_captions" id="' + c.id + "_captions_" + e + '" value="' + e + '" disabled="disabled" /><label for="' + c.id + "_captions_" + e + '">' + b + ((d) ? " (translating)" : " (loading)") + "</label></li>"));
            c.adjustLanguageBox();
            c.container.find(".mejs-captions-translations option[value=" + e + "]").remove()
        },
        adjustLanguageBox: function () {
            var b = this;
            b.captionsButton.find(".mejs-captions-selector").height(b.captionsButton.find(".mejs-captions-selector ul").outerHeight(true) + b.captionsButton.find(".mejs-captions-translations").outerHeight(true))
        },
        displayCaptions: function () {
            if (typeof this.tracks == "undefined") {
                return
            }
            var d = this,
                c, b = d.selectedTrack;
            if (b != null && b.isLoaded) {
                for (c = 0; c < b.entries.times.length; c++) {
                    if (d.media.currentTime >= b.entries.times[c].start && d.media.currentTime <= b.entries.times[c].stop) {
                        d.captionsText.html(b.entries.text[c]);
                        d.captions.show();
                        return
                    }
                }
                d.captions.hide()
            } else {
                d.captions.hide()
            }
        },
        displayChapters: function () {
            var c = this,
                b;
            for (b = 0; b < c.tracks.length; b++) {
                if (c.tracks[b].kind == "chapters" && c.tracks[b].isLoaded) {
                    c.drawChapters(c.tracks[b]);
                    c.hasChapters = true;
                    break
                }
            }
        },
        drawChapters: function (f) {
            var c = this,
                b, d, e = 0,
                g = 0;
            c.chapters.empty();
            for (b = 0; b < f.entries.times.length; b++) {
                d = f.entries.times[b].stop - f.entries.times[b].start;
                e = Math.floor(d / c.media.duration * 100);
                if (e + g > 100 || b == f.entries.times.length - 1 && e + g < 100) {
                    e = 100 - g
                }
                c.chapters.append(a('<div class="mejs-chapter" rel="' + f.entries.times[b].start + '" style="left: ' + g.toString() + "%;width: " + e.toString() + '%;"><div class="mejs-chapter-block' + ((b == f.entries.times.length - 1) ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + f.entries.text[b] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(f.entries.times[b].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(f.entries.times[b].stop) + "</span></div></div>"));
                g += e
            }
            c.chapters.find("div.mejs-chapter").click(function () {
                c.media.setCurrentTime(parseFloat(a(this).attr("rel")));
                if (c.media.paused) {
                    c.media.play()
                }
            });
            c.chapters.show()
        }
    });
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    };
    mejs.TrackFormatParser = {
        pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
        pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
        split2: function (c, b) {
            return c.split(b)
        },
        parse: function (g) {
            var e = 0,
                d = this.split2(g, /\r?\n/),
                c = {
                    text: [],
                    times: []
                },
                b, f;
            for (; e < d.length; e++) {
                if (this.pattern_identifier.exec(d[e])) {
                    e++;
                    b = this.pattern_timecode.exec(d[e]);
                    if (b && e < d.length) {
                        e++;
                        f = d[e];
                        e++;
                        while (d[e] !== "" && e < d.length) {
                            f = f + "\n" + d[e];
                            e++
                        }
                        c.text.push(f);
                        c.times.push({
                            start: mejs.Utility.timeCodeToSeconds(b[1]),
                            stop: mejs.Utility.timeCodeToSeconds(b[3]),
                            settings: b[5]
                        })
                    }
                }
            }
            return c
        },
        translateTrackText: function (f, j, e, g, h) {
            var b = {
                text: [],
                times: []
            },
                c, d;
            this.translateText(f.text.join(" <a></a>"), j, e, g, function (k) {
                c = k.split("<a></a>");
                for (d = 0; d < f.text.length; d++) {
                    b.text[d] = c[d];
                    b.times[d] = {
                        start: f.times[d].start,
                        stop: f.times[d].stop,
                        settings: f.times[d].settings
                    }
                }
                h(b)
            })
        },
        translateText: function (k, f, d, c, j) {
            var m, e = [],
                h, b = 1000,
                l = "",
                g = function () {
                    if (e.length > 0) {
                        h = e.shift();
                        mejs.TrackFormatParser.translateChunk(h, f, d, c, function (n) {
                            if (n != "undefined") {
                                l += n
                            }
                            g()
                        })
                    } else {
                        j(l)
                    }
                };
            while (k.length > 0) {
                if (k.length > b) {
                    m = k.lastIndexOf(".", b);
                    e.push(k.substring(0, m));
                    k = k.substring(m + 1)
                } else {
                    e.push(k);
                    k = ""
                }
            }
            g()
        },
        translateChunk: function (e, g, c, d, f) {
            var b = {
                q: e,
                langpair: g + "|" + c,
                v: "1.0"
            };
            if (d !== "" && d !== null) {
                b.key = d
            }
            a.ajax({
                url: "https://ajax.googleapis.com/ajax/services/language/translate",
                data: b,
                type: "GET",
                dataType: "jsonp",
                success: function (h) {
                    f(h.responseData.translatedText)
                },
                error: function (h) {
                    f(null)
                }
            })
        }
    };
    if ("x\n\ny".split(/\n/gi).length != 3) {
        mejs.TrackFormatParser.split2 = function (f, d) {
            var e = [],
                b = "",
                c;
            for (c = 0; c < f.length; c++) {
                b += f.substring(c, c + 1);
                if (d.test(b)) {
                    e.push(b.replace(d, ""));
                    b = ""
                }
            }
            e.push(b);
            return e
        }
    }
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, contextMenuItems = [{
        render: function (b) {
            if (typeof b.enterFullScreen == "undefined") {
                return null
            }
            if (b.isFullScreen) {
                return "Turn off Fullscreen"
            } else {
                return "Go Fullscreen"
            }
        },
        click: function (b) {
            if (b.isFullScreen) {
                b.exitFullScreen()
            } else {
                b.enterFullScreen()
            }
        }
    }, {
        render: function (b) {
            if (b.media.muted) {
                return "Unmute"
            } else {
                return "Mute"
            }
        },
        click: function (b) {
            if (b.media.muted) {
                b.setMuted(false)
            } else {
                b.setMuted(true)
            }
        }
    }, {
        isSeparator: true
    }, {
        render: function (b) {
            return "Download Video"
        },
        click: function (b) {
            window.location.href = b.media.currentSrc
        }
    }]);
    a.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function (c, b, e, d) {
            c.contextMenu = a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide();
            c.container.bind("contextmenu", function (f) {
                if (c.isContextMenuEnabled) {
                    f.preventDefault();
                    c.renderContextMenu(f.clientX - 1, f.clientY - 1);
                    return false
                }
            });
            c.container.bind("click", function () {
                c.contextMenu.hide()
            });
            c.contextMenu.bind("mouseleave", function () {
                c.startContextMenuTimer()
            })
        },
        isContextMenuEnabled: true,
        enableContextMenu: function () {
            this.isContextMenuEnabled = true
        },
        disableContextMenu: function () {
            this.isContextMenuEnabled = false
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function () {
            var b = this;
            b.killContextMenuTimer();
            b.contextMenuTimer = setTimeout(function () {
                b.hideContextMenu();
                b.killContextMenuTimer()
            }, 750)
        },
        killContextMenuTimer: function () {
            var b = this.contextMenuTimer;
            if (b != null) {
                clearTimeout(b);
                delete b;
                b = null
            }
        },
        hideContextMenu: function () {
            this.contextMenu.hide()
        },
        renderContextMenu: function (b, j) {
            var g = this,
                f = "",
                d = g.options.contextMenuItems;
            for (var e = 0, c = d.length; e < c; e++) {
                if (d[e].isSeparator) {
                    f += '<div class="mejs-contextmenu-separator"></div>'
                } else {
                    var h = d[e].render(g);
                    if (h != null) {
                        f += '<div class="mejs-contextmenu-item" data-itemindex="' + e + '" id="element-' + (Math.random() * 1000000) + '">' + h + "</div>"
                    }
                }
            }
            g.contextMenu.empty().append(a(f)).css({
                top: j,
                left: b
            }).show();
            g.contextMenu.find(".mejs-contextmenu-item").each(function () {
                var k = a(this),
                    l = parseInt(k.data("itemindex"), 10),
                    m = g.options.contextMenuItems[l];
                if (typeof m.show != "undefined") {
                    m.show(k, g)
                }
                k.click(function () {
                    if (typeof m.click != "undefined") {
                        m.click(g)
                    }
                    g.contextMenu.hide()
                })
            });
            setTimeout(function () {
                g.killControlsTimer("rev3")
            }, 100)
        }
    })
})(mejs.$);
(function (b) {
    b.fn.relativeTime = function () {
        this.each(function (d, c) {
            new a(b(c))
        })
    };
    b.relativeTime = {
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    };

    function a(c) {
        var d = this;
        this.el = c;
        this.parseDateString();
        this.updateText();
        setInterval(function () {
            d.updateText()
        }, 10000)
    }
    a.prototype = {
        parseDateString: function () {
            var c = b.trim(this.el.attr("datetime"));
            c = c.replace(/\.\d\d\d+/, "");
            c = c.replace(/-/, "/").replace(/-/, "/");
            c = c.replace(/T/, " ").replace(/Z/, " UTC");
            c = c.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
            this.date = new Date(c)
        },
        updateDelta: function () {
            var f = (new Date().getTime() - this.date.getTime()),
                g = Math.floor(f / 1000),
                e = Math.floor(g / 60),
                c = Math.floor(e / 60),
                h = Math.floor(c / 24),
                d = Math.floor(h / 365);
            this.delta = {
                seconds: g,
                minutes: e,
                hours: c,
                days: h,
                years: d
            }
        },
        getTimeString: function () {
            var e = this.date,
                g = this.delta,
                f = b.relativeTime.monthNames[e.getMonth()],
                c = this.toOrdinal(e.getDate());
            if (g.days > 0) {
                if (g.days < 5) {
                    return g.days + " days ago"
                } else {
                    if (g.days > 365) {
                        return f + " " + c + ", " + e.getFullYear()
                    } else {
                        return f + " " + c
                    }
                }
            } else {
                if (g.seconds < 4) {
                    return "Just now"
                } else {
                    if (g.seconds < 60) {
                        return g.seconds + " seconds ago"
                    } else {
                        if (g.minutes < 60) {
                            return g.minutes + (g.minutes > 1 ? " minutes" : " minute") + " ago"
                        } else {
                            return g.hours + (g.hours > 1 ? " hours" : " hour") + " ago"
                        }
                    }
                }
            }
        },
        toOrdinal: function (c) {
            var d;
            if (c >= 4 && c <= 24 || c >= 24 && c <= 30) {
                d = "th"
            } else {
                d = ["st", "nd", "rd"][c % 10 - 1]
            }
            return c + d
        },
        updateText: function () {
            this.updateDelta();
            this.el.html(this.getTimeString());
            return
        }
    }
}(jQuery));
window.Ply = {
    VERSION: "0.2.4"
};
Ply.core = (function (c) {
    var b = {},
        a = false;
    return {
        notify: function (g, f, j) {
            var h = b[g] || (b[g] = []),
                e = 0,
                d = h.length;
            for (; e < d; e++) {
                h[e].handler.call(h[e].listener, g, f, j)
            }
        },
        listen: function (k, g, j) {
            var h = b[k] || (b[k] = []),
                f = k.split(/\s/),
                d = f.length,
                e = 0;
            if (d > 1) {
                for (; e < d; e++) {
                    this.listen(f[e], g, j)
                }
                return
            }
            h.push({
                handler: g,
                listener: j
            })
        },
        log: function (e, d) {
            if (!a) {
                return
            }
            if (window.console) {
                switch (d) {
                case "warn":
                    console.warn(e);
                    break;
                case "info":
                    console.info(e);
                    break;
                default:
                    console.log(e);
                    break
                }
            }
        },
        error: function (d, e) {
            if (Ply.config.core.onError && typeof Ply.config.core.onError === "function") {
                Ply.config.core.onError(d, e);
                return
            }
            throw d
        },
        debug: function (d) {
            a = d || true;
            if (a) {
                this.log("debugging...", "info");
                this.debugOn = true
            } else {
                this.debugOn = false
            }
        },
        debugOn: function () {
            return !!a
        }()
    }
})(jQuery);
Ply.ajax = (function (a) {
    return {
        request: function (g, j, c) {
            var f = g || {},
                e = f.type || "GET",
                b = f.url || "",
                h = f.data || {};
            if (Ply.core.debugOn) {
                h.debug = true
            }
            try {
                return a.ajax({
                    type: e,
                    url: b,
                    data: h,
                    success: function (l, k, m) {
                        if (j && typeof j === "function") {
                            j(l, k, m)
                        }
                    },
                    error: function (m, k, l) {
                        Ply.core.log("AjaxError: " + k + " - " + b, "warn");
                        Ply.core.error({
                            name: "AjaxError",
                            message: "Status: " + k,
                            description: "URL: " + b
                        }, 1);
                        if (c && typeof c === "function") {
                            c(m, k, l)
                        }
                    }
                })
            } catch (d) {
                Ply.core.log(d.message);
                Ply.core.error(d, 1)
            }
        }
    }
})(jQuery);
Ply.read = (function () {
    return {
        add: function (b, a) {
            if (typeof b === "object") {
                for (var c in b) {
                    if (b.hasOwnProperty(c)) {
                        Ply.read.add(c, b[c])
                    }
                }
                return
            }
            this[b] = function (e, f, d) {
                return Ply.ajax.request({
                    url: a,
                    type: "GET",
                    data: e
                }, f, d)
            }
        }
    }
})();
if (!Object.create) {
    Object.create = function (b) {
        if (arguments.length > 1) {
            throw new Error("Object.create implementation only accepts first parameter.")
        }

        function a() {}
        a.prototype = b;
        return new a()
    }
}
Ply.ui = (function (b) {
    function a(f, c, e, j, h) {
        var d = this;
        this.name = f;
        this.view = c;
        this.delegate = h;
        this.options = b.extend({}, Ply.config.ui.defaults, this.options, e);
        this.data = b.extend({}, this.data, j);
        if (this.__objects) {
            this.objects = {};
            this.__bindObjects = function () {
                for (var k in d.__objects) {
                    if (d.__objects.hasOwnProperty(k)) {
                        d.objects[k] = d.view.find(d.__objects[k])
                    }
                }
            };
            this.__bindObjects()
        }
        if (this.__partials) {
            this.partials = {};
            this.__bindPartials = function () {
                for (var k in d.__partials) {
                    if (d.__partials.hasOwnProperty(k) && d.objects[k] && d.objects[k].length) {
                        d.partials[k] = Ply.ui.register(d.__partials[k], {
                            view: d.objects[k],
                            delegate: d
                        })
                    }
                }
            };
            this.__bindPartials()
        }
        if (this.__notifications) {
            for (var g in this.__notifications) {
                if (this.__notifications.hasOwnProperty(g)) {
                    Ply.core.listen(g, this[this.__notifications[g]], this)
                }
            }
        }
        if (this.__init && typeof this.__init === "function") {
            this.__init()
        }
        return this
    }
    return {
        fn: {},
        define: function (e, d) {
            var c = this,
                f = Ply.config.ui.base || {};
            if (!Ply.read[e]) {
                Ply.read.add(e, d.__url || Ply.config.read.urlGenerator(e))
            }
            this.fn[e] = function (g, h, k, j) {
                return a.call(Object.create(c.fn[e].impl), e, g, h, k, j)
            };
            this.fn[e].impl = b.extend(Object.create(f), d);
            this.fn[e].impl.read = Ply.read[e]
        },
        register: function (e, d) {
            var c = Ply.config.ui;
            d = d && typeof d === "object" ? d : {};
            if (c.onRegister && typeof c.onRegister === "function") {
                if (c.onRegister(e, d) === false) {
                    return
                }
            }
            if (!d.view) {
                d.view = c.selectorGenerator(e);
                Ply.core.log("No view name supplied, implying: " + d.view)
            }
            return this.start(e, d)
        },
        start: function (c, e) {
            Ply.core.log("trying start: " + c, "info");
            try {
                return this.fn[c](b(e.view), e.options, e.data, e.delegate)
            } catch (d) {
                Ply.core.log(c + " failed to start.");
                Ply.core.error(d, 1);
                if (Ply.core.debugOn) {
                    throw d
                }
            }
        }
    }
})(jQuery);
Ply.config = (function (a) {
    return {
        core: {
            onError: function (b, c) {
                a.post("/error/logclienterror", {
                    name: b.name,
                    description: b.description,
                    message: b.message,
                    lineNumber: b.lineNumber,
                    stackTrace: b.stack
                });
                if (c > 1) {
                    alert("An error has occurred. Please refresh your browser")
                }
            }
        },
        read: {
            urlGenerator: function (b) {
                return "/" + b.replace("_", "/").replace("-", "").toLowerCase()
            }
        },
        ui: {
            base: {},
            defaults: {},
            selectorGenerator: function (c) {
                var d = c.match(/[A-Z]?[a-z]+/g).join("_").toLowerCase(),
                    b = d.split("_")[0];
                d = b + "_" + d.substr(b.length + 1).replace("_", "-");
                return ".view-" + d + ", ." + d
            },
            onRegister: function (c, b) {
                if (b.modal) {
                    b.modal = typeof b.modal === "object" ? b.modal : {};
                    a.modal(b.view, {
                        containerId: b.modal.containerId,
                        dataClass: b.modal.dataClass,
                        maxWidth: b.modal.maxWidth || 300,
                        maxHeight: b.modal.maxHeight,
                        updateOnOpen: b.modal.updateOnOpen,
                        onShow: function (d) {
                            b.view = d.data;
                            Ply.ui.start(c, b);
                            d.data.delegate(".modal-close", "click", function (f) {
                                f.preventDefault();
                                a.modal.close()
                            })
                        }
                    })
                }
                return
            }
        }
    }
})(jQuery);
(function (a) {
    Ply.ui.define("shared", {
        __init: function () {
            this.tooltips();
            this.links();
            this.forms();
            return
        },
        __objects: {
            header: ".shared_header",
            tooltips: ".tooltip-target"
        },
        __partials: {
            header: "shared_header"
        },
        tooltips: function () {
            this.view.delegate(".tooltip-target", "hover", function (d) {
                var b = a(this),
                    c = b.find(".tooltip-block"),
                    e = parseInt(c.css("top"), 10);
                b.hoverIntent(function () {
                    c.stop(true, true).css({
                        display: "block",
                        position: "absolute",
                        top: e + 5 + "px"
                    }).animate({
                        top: e + "px",
                        opacity: 1
                    }, 100)
                }, function () {
                    c.stop(true, true).animate({
                        top: e - 15 + "px",
                        opacity: 0
                    }, 200, function () {
                        c.css({
                            display: "none",
                            position: "static",
                            top: e + "px"
                        })
                    })
                }).hover(function (f) {
                    f.stopPropagation()
                }, function (f) {
                    f.stopPropagation()
                });
                b.trigger(d)
            });
            return
        },
        links: function () {
            this.view.delegate("a[rel~=external]", "click", function (b) {
                b.preventDefault();
                console.log(this.rel);
                window.open(this.href)
            });
            return
        },
        forms: function () {
            this.view.find("input.submit").each(function () {
                var c = a(this),
                    b = a('<div class="click-target" />');
                b.click(function (d) {
                    b.closest("form").submit()
                });
                c.after(b);
                c.bind("keypress", function (d) {
                    if (d.keyCode === 13) {
                        d.preventDefault();
                        a(d.currentTarget.form).submit()
                    }
                })
            });
            return
        }
    })
}(jQuery));
(function (b, a) {
    Ply.ui.define("shared_header", {
        __init: function () {
            this.events();
            this.forms();
            return
        },
        __objects: {
            actions: ".action-a",
            actionDownload: ".action-download",
            actionSignin: ".action-user",
            actionUser: ".action .user",
            forms: "form",
            submitFields: ".field-submit",
            phoneConfirmation: ".action-download .confirmation"
        },
        __notifications: {
            "authentication-required": "openSigninModal"
        },
        events: function () {
            var c = this,
                d = c.objects,
                e;
            if (!a.isMobile) {
                d.actions.click(function (f) {
                    f.preventDefault();
                    f.stopPropagation();
                    c.toggleModal(b(this).parent())
                });
                this.view.find(".action-tray").click(function (f) {
                    f.stopPropagation()
                });
                b(document.body).click(function () {
                    c.view.find(".action").removeClass("action-active")
                })
            }
            d.actionUser.parent().each(function () {
                var f = b(this);
                f.hover(function () {
                    clearTimeout(e);
                    f.addClass("action-active")
                }, function () {
                    e = setTimeout(function () {
                        f.removeClass("action-active")
                    }, 600)
                })
            });
            return
        },
        openSigninModal: function () {
            var c = this.objects;
            if (a.isMobile) {
                return (window.location = c.actionSignin.find("a")[0].href)
            }
            this.toggleModal(c.actionSignin, "open");
            return
        },
        toggleModal: function (c, d) {
            c.siblings().removeClass("action-active");
            if (d && d === "open") {
                c.addClass("action-active")
            } else {
                if (d && d === "close") {
                    c.removeClass("action-active")
                } else {
                    c.toggleClass("action-active")
                }
            }
            if (c.hasClass("action-active")) {
                c.find("input:first").focus()
            }
            return
        },
        forms: function () {
            var c = this,
                d = c.objects;
            c.objects.submitFields.bind("keypress", function (f) {
                if (f.keyCode === 13) {
                    f.preventDefault();
                    b(f.currentTarget.form).submit()
                }
            });
            c.view.find(".phone-form").submit(function () {
                var g = b(this).find("input[name=phone]").blur().attr("disabled", "disabled"),
                    e = g.val(),
                    f = {
                        phone: e
                    };
                if (a.referrer) {
                    f.referrer = a.referrer
                }
                if (a.referrerId) {
                    f.referrer_id = a.referrerId
                }
                b.ajax({
                    type: "POST",
                    url: this.action,
                    data: f,
                    success: function () {
                        d.phoneConfirmation.find(".phone-number").html(e);
                        d.phoneConfirmation.fadeIn();
                        g.removeAttr("disabled").val("");
                        setTimeout(function () {
                            c.toggleModal(d.actionDownload, "close");
                            d.phoneConfirmation.hide()
                        }, 2000)
                    }
                });
                return false
            });
            return
        }
    })
}(jQuery, jQuery(document.body).data()));
(function (b, a) {
    Ply.ui.define("home_index", {
        __init: function () {
            this.background();
            this.videos();
            this.getApp();
            this.forms()
        },
        __objects: {
            background: ".video-background",
            videoStills: ".video-still",
            videoModal: ".video-modal",
            videoContainer: ".video-container",
            getAppButton: ".app-download-button",
            textModal: ".text-modal"
        },
        background: function () {
            var c = this,
                g = c.objects,
                e = {
                    h264: (document.location.protocol === "https:" ? "https:" : "http:") + "//studentsangel.com/path/sa-720p.m4v"
                },
                f, d;
            if (Modernizr.video.h264) {
                f = e.h264
            } else {
                return
            }
            d = g.videoBackground = b('<video src="' + f + '" poster="' + document.location.protocol + '//studentsangel.com/path/video-start.jpg" preload width="1920" height="1080" class="media"></video>');
            d.insertBefore(g.background.find(".overlay"));
            setTimeout(function () {
                d[0].play()
            }, 1000);
            return
        },
        startBackgroundVideo: function () {
            var c = this,
                d = this.objects.videoBackground;
            console.log("startBackgroundVideo");
            if (!this.modalPresented) {
                console.log("Modal not presented", d[0].readyState);
                if (d[0].readyState !== 4) {
                    console.log("Video not ready");
                    return
                }
                console.log("Video ready");
                d[0].play();
                d.bind("canplay", function () {
                    console.log("video is ready");
                    c.startBackgroundVideo()
                })
            }
            return
        },
        videos: function () {
            var c = this,
                d = c.objects;
            d.videoStills.click(function () {
                c.showVideoModal(b(this).data("videoId"))
            });
            if (document.location.hash.indexOf("demo") > -1) {
                this.view.find(".video-demo .video-still").click()
            }
            if (document.location.hash.indexOf("ad") > -1) {
                this.view.find(".video-share-life .video-still").click()
            }
            d.videos = {
                "share-life": this.view.find("iframe.video-share-life").clone(),
                demo: this.view.find("iframe.video-demo").clone()
            };
            d.videos.demo[0].src += "&autoplay=true";
            d.videos["share-life"][0].src += "&autoplay=true";
            return
        },
        showVideoModal: function (d) {
            var c = this,
                e = c.objects;
            c.pauseVideo();
            c.modalPresented = true;
            e.videoModal.fadeIn(400, "easeInCubic", function () {
                e.videoModal.click(function () {
                    c.hideVideoModal()
                });
                e.videoContainer.fadeIn(500, "easeInCubic");
                e.videoContainer.html(e.videos[d])
            });
            return
        },
        hideVideoModal: function () {
            var c = this,
                d = c.objects;
            c.modalPresented = false;
            c.resumeVideo();
            d.videoModal.unbind().fadeOut(400, "easeOutCubic", function () {
                d.videoContainer.html("")
            });
            return
        },
        pauseVideo: function () {
            if (!this.objects.videoBackground) {
                return
            }
            this.objects.videoBackground[0].pause();
            this.objects.videoBackground.removeAttr("autoplay")
        },
        resumeVideo: function () {
            if (!this.objects.videoBackground) {
                return
            }
            var c = this.objects.videoBackground[0];
            if (!c.ended) {
                c.play()
            }
        },
        getApp: function () {
            var c = this,
                d = this.objects;
            d.getAppButton.click(function (g) {
                if (this.href.indexOf("#") > -1) {
                    g.preventDefault()
                } else {
                    return
                }
                var f = b(this).parent();
                if (f.hasClass("app-download-focused")) {
                    c.fadeTextModalOut()
                } else {
                    c.fadeTextModalIn()
                }
            })
        },
        fadeTextModalIn: function () {
            var d = this.objects,
                c = d.getAppButton.parent();
            c.addClass("app-download-focused");
            this.view.find("#phone").focus()
        },
        fadeTextModalOut: function () {
            var d = this.objects,
                c = d.getAppButton.parent();
            d.textModal.fadeOut(200, function () {
                c.removeClass("app-download-focused");
                b(this).find(".form").show();
                b(this).find(".confirmation").hide()
            })
        },
        forms: function () {
            var c = this,
                e = c.objects.textModal.find(".form"),
                d = c.objects.textModal.find(".confirmation");
            c.view.find(".phone-form").submit(function (g) {
                g.preventDefault();
                var h = b(this).find("input[name=phone]").blur().attr("disabled", "disabled"),
                    f = h.val();
                b.ajax({
                    type: "POST",
                    url: this.action,
                    data: {
                        referrer: "homepage",
                        phone: f
                    },
                    success: function () {
                        e.hide();
                        d.find(".phone-number").html(f);
                        d.fadeIn();
                        h.removeAttr("disabled").val("");
                        setTimeout(function () {
                            c.fadeTextModalOut()
                        }, 3000)
                    }
                })
            });
            return
        }
    })
}(jQuery, jQuery(document.body).data()));
(function (a) {
    Ply.ui.define("moments_show", {
        __objects: {
            feedback: ".moments_feedback",
            music: ".moments_music",
            video: ".moments_video"
        },
        __partials: {
            feedback: "moments_feedback",
            music: "moments_music",
            video: "moments_video"
        }
    })
}(jQuery));
Ply.ui.define("moments_music", {
    options: {
        canvasWidth: 52,
        canvasHeight: 52,
        radius: 23
    },
    __init: function () {
        this.setupCanvas();
        this.audio();
        return
    },
    __objects: {
        controls: ".music-controls",
        playButton: ".music-play-control",
        progressHolder: ".music-progress-holder",
        audio: "audio"
    },
    setupCanvas: function () {
        var d = this.objects,
            c = this.options,
            a = c.canvasWidth / 2,
            e = c.canvasHeight / 2,
            b = c.radius;
        d.canvas = Raphael(d.progressHolder[0], c.canvasWidth, c.canvasHeight);
        d.canvas.customAttributes.arc = function (j, h) {
            j = Math.min(h, j);
            var l = 360 / h * j,
                g = (90 - l) * Math.PI / 180,
                f = a + b * Math.cos(g),
                m = e - b * Math.sin(g),
                k;
            if (h === j) {
                return
            }
            k = [
                ["M", a, e - b],
                ["A", b, b, 0, +(l > 180), 1, f, m]
            ];
            return {
                path: k,
                opacity: 1
            }
        };
        d.progress = d.canvas.path().attr({
            stroke: "#fff",
            "stroke-width": 5
        }).attr({
            arc: [0, 60, c.radius]
        });
        return
    },
    audio: function () {
        var d = this.objects,
            a = d.audio,
            b = a[0],
            c;
        if (Modernizr.audio.m4a) {
            d.controls.fadeIn()
        }
        d.playButton.click(function (f) {
            f.preventDefault();
            if (b.paused || b.ended) {
                b.play();
                a.trigger("play")
            } else {
                b.pause()
            }
        });
        a.bind("timeupdate", function () {
            d.progress.stop().animate({
                opacity: 1,
                arc: [b.currentTime + 0.9, b.duration]
            }, 900, ">")
        });
        a.bind("play", function () {
            d.controls.addClass("music-controls-playing");
            clearTimeout(c)
        });
        a.bind("pause ended", function () {
            d.controls.removeClass("music-controls-playing")
        });
        a.bind("ended", function () {
            d.progress.animate({
                opacity: 0,
                arc: [0, b.duration]
            }, 1000, ">")
        });
        return
    }
});
(function (b, a) {
    Ply.ui.define("moments_feedback", {
        __init: function () {
            this.comments();
            this.emotions();
            this.seenIts();
            this.updateTimestamps();
            return
        },
        __objects: {
            seenIts: ".seen-it-set",
            comments: ".comment-set",
            commentBlocker: ".comment-blocker",
            commentBox: ".comment-box",
            commentField: ".comment-field",
            commentSizer: ".comment-sizer",
            commentForm: ".comment-form",
            commentButton: ".action-comment",
            emotionButton: ".action-emotion",
            emotionPicker: ".emotion-picker-box",
            seenItContainer: ".seen-it-container",
            seenItToggle: ".seen-it-toggle"
        },
        comments: function () {
            var c = this,
                e = this.objects,
                d = e.commentSizer[0];
            e.commentForm.submit(function (f) {
                f.preventDefault();
                c.submitComment()
            });
            e.commentButton.click(function (f) {
                f.preventDefault();
                if (!a.currentUser) {
                    f.stopPropagation();
                    Ply.core.notify("authentication-required");
                    return
                }
                e.commentField.focus()
            });
            e.commentField.focus(function () {
                c.focusCommentField()
            }).blur(function () {
                c.blurCommentField()
            }).bind("keyup keydown change", function () {
                d.innerHTML = this.value.replace(/\n/g, "<br />") + "&nbsp;&nbsp;" || "&nbsp;"
            }).bind("keydown", function (f) {
                if (f.keyCode === 13) {
                    f.preventDefault();
                    e.commentForm.submit()
                }
            });
            e.commentBlocker.click(function (f) {
                f.stopPropagation();
                Ply.core.notify("authentication-required")
            });
            return
        },
        focusCommentField: function () {
            this.objects.commentBox.addClass("comment-box-focused")
        },
        blurCommentField: function () {
            var c = this.objects;
            if (c.commentField[0].value === "") {
                c.commentBox.removeClass("comment-box-focused")
            }
        },
        seenIts: function () {
            var c = this,
                d = this.objects;
            d.seenItToggle.click(function () {
                if (d.seenItContainer.hasClass("expanded")) {
                    c.collapseSeenItContainer()
                } else {
                    c.expandSeenItContainer()
                }
            });
            return
        },
        expandSeenItContainer: function () {
            var c = this.objects;
            c.seenItContainer.css({
                height: 88,
                overflow: "hidden"
            }).addClass("expanded").stop(true, true).animate({
                height: c.seenIts.outerHeight()
            }, 300, "easeOutCubic", function () {
                c.seenItContainer.css({
                    height: "auto",
                    overflow: "visible"
                })
            });
            c.seenItToggle.animate({
                opacity: 0
            }, 50, "easeOutCubic").delay(200).animate({
                opacity: 1
            }, 200, "easeOutCubic");
            return
        },
        collapseSeenItContainer: function () {
            var c = this.objects;
            c.seenItContainer.stop(true, true).animate({
                height: 88
            }, 300, "easeOutCubic", function () {
                c.seenItContainer.removeClass("expanded")
            });
            c.seenItToggle.animate({
                opacity: 0
            }, 50, "easeOutCubic").delay(200).animate({
                opacity: 1
            }, 200, "easeOutCubic");
            return
        },
        emotions: function () {
            var c = this,
                d = this.objects;
            d.emotionButton.click(function (f) {
                f.preventDefault();
                if (!a.currentUser) {
                    f.stopPropagation();
                    Ply.core.notify("authentication-required");
                    return
                }
                if (!d.emotionPicker.hasClass("emotion-picker-box-visible")) {
                    f.stopPropagation();
                    c.openEmotionPicker()
                }
            });
            d.emotionPicker.find(".emotion-icon-a").click(function (f) {
                f.preventDefault();
                c.submitEmotion(b(this).data("emotionType"))
            });
            b(document.body).click(function () {
                c.closeEmotionPicker()
            });
            return
        },
        openEmotionPicker: function () {
            var c = this.objects;
            c.emotionButton.addClass("action-active");
            c.emotionPicker.removeClass("emotion-picker-box-hidden").addClass("emotion-picker-box-visible").find(".emotion-icon").bind("webkitAnimationEnd mozAnimationEnd", function () {
                this.style.visibility = "visible"
            }).each(function (d) {
                var e = b(this);
                setTimeout(function (f) {
                    e.css("visibility", "visible").addClass("emotion-icon-visible")
                }, 100 + 70 * d)
            });
            return
        },
        closeEmotionPicker: function () {
            var c = this.objects;
            c.emotionButton.removeClass("action-active");
            c.emotionPicker.removeClass("emotion-picker-box-visible").addClass("emotion-picker-box-hidden").bind("webkitAnimationEnd mozAnimationEnd", function () {
                this.style.display = "none"
            }).find(".emotion-icon").removeClass("emotion-icon-visible").css({
                visibility: "hidden"
            });
            return
        },
        submitEmotion: function (c) {
            var d = this,
                e = d.objects;
            e.emotionButton.find("b").removeClass().addClass(c);
            Ply.ajax.request({
                url: "/emotions/create",
                type: "POST",
                data: {
                    type: c,
                    moment_id: this.objects.commentForm[0].moment_id.value
                }
            }, function (f) {
                d.updateEmotions(f)
            });
            return
        },
        submitComment: function () {
            var d = this,
                e = d.objects,
                c = e.commentForm;
            Ply.ajax.request({
                url: "/comments/create",
                type: "POST",
                data: {
                    moment_id: c[0].moment_id.value,
                    body: c[0].body.value
                }
            }, function (f) {
                d.updateComments(f);
                e.commentField.val("").change().blur()
            });
            return
        },
        updateEmotions: function (d) {
            var c = b(d).find(".seen-it-set").html();
            this.objects.seenIts.html(c);
            return
        },
        updateComments: function (c) {
            var d = b(c).find(".comment-set").html();
            this.objects.comments.html(d);
            this.updateTimestamps();
            return
        },
        updateTimestamps: function () {
            this.view.find(".timestamp").relativeTime();
            return
        }
    })
}(jQuery, jQuery(document.body).data()));
(function (a) {
    Ply.ui.define("moments_video", {
        __init: function () {
            this.video();
            return
        },
        __objects: {
            video: "video"
        },
        video: function () {
            this.objects.video.mediaelementplayer({
                features: ["progress"],
                pluginPath: "/static/media/",
                flashName: "flash_video.swf",
                silverlightName: "silverlight_video.xap"
            });
            var b = this.view.find(".mejs-container"),
                c = this.view.find(".video-positioner video")[0];
            a(window).resize(function () {
                c.width = b.width();
                c.height = b.height()
            }).resize();
            return
        }
    })
}(jQuery));
(function (a) {
    Ply.ui.define("sessions_login", {
        __init: function () {
            this.events();
            this.boundPopState = false;
            this.view.find(".block:visible .field:eq(0) input").focus();
            return
        },
        __objects: {
            blocks: ".block",
            loginBlock: ".login-block",
            loginToggle: ".login-toggle",
            signupBlock: ".signup-block",
            signupToggle: ".signup-toggle"
        },
        events: function () {
            var b = this,
                c = this.objects;
            c.body = a(document.body);
            this.objects.loginToggle.click(function (d) {
                d.preventDefault();
                b.showBlock(c.loginBlock);
                b.updateState("/login", "Sign In")
            });
            this.objects.signupToggle.click(function (d) {
                d.preventDefault();
                b.showBlock(c.signupBlock);
                b.updateState("/signup", "Sign Up")
            });
            return
        },
        bindPopState: function () {
            var b = this;
            if (this.boundPopState) {
                return
            }
            if (Modernizr.history) {
                a(window).bind("popstate", function () {
                    b.updateMode()
                })
            }
            this.boundPopState = true;
            return
        },
        showBlock: function (b) {
            this.objects.blocks.hide();
            b.css({
                display: "table",
                opacity: 0
            }).stop(true).animate({
                opacity: 1
            }).find(".field:eq(0) input").focus();
            return
        },
        updateMode: function () {
            if (window.location.pathname.indexOf("signup") > -1) {
                this.showBlock(this.objects.signupBlock)
            } else {
                this.showBlock(this.objects.loginBlock)
            }
            return
        },
        updateState: function (b, c) {
            if (Modernizr.history && window.location.pathname !== b) {
                history.pushState(null, c, b);
                document.title = "Path — " + c;
                this.bindPopState()
            }
            return
        }
    })
}(jQuery));
(function (a) {
    Ply.ui.define("users_settings", {
        __init: function () {
            this.events();
            this.forms()
        },
        __objects: {
            actionCover: ".action-cover",
            coverInput: "input[name=cover_photo]"
        },
        events: function () {
            var b = this;
            this.view.delegate(".push, .email", "click", function (d) {
                var c = a(this),
                    e = c.data("binding"),
                    f = b.view.find("input[name=" + e + "]");
                c.click(function (g) {
                    g.stopPropagation();
                    f.click();
                    if (f.is(":checked")) {
                        c.addClass("checked")
                    } else {
                        c.removeClass("checked")
                    }
                });
                c.trigger(d)
            });
            return
        },
        forms: function () {
            var b = this.objects;
            b.actionCover.click(function (c) {
                c.preventDefault();
                b.coverInput.click()
            });
            b.coverInput.change(function () {
                a(this).closest("form").submit()
            })
        }
    })
}(jQuery));
