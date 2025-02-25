/*! @license Firebase v3.7.5
    Build: 3.7.5-rc.1
    Terms: https://firebase.google.com/terms/ */
    var firebase = null;
    (function() {
        /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
        var aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        }
          , ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype)
                return a;
            a[b] = c.value;
            return a
        }
          , ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math)
                    return c
            }
            throw Error("Cannot find global object");
        }
          , da = ca(this)
          , ea = function(a, b) {
            if (b)
                a: {
                    var c = da;
                    a = a.split(".");
                    for (var d = 0; d < a.length - 1; d++) {
                        var e = a[d];
                        if (!(e in c))
                            break a;
                        c = c[e]
                    }
                    a = a[a.length - 1];
                    d = c[a];
                    b = b(d);
                    b != d && null != b && ba(c, a, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
        };
        ea("Symbol", function(a) {
            if (a)
                return a;
            var b = function(g, k) {
                this.W = g;
                ba(this, "description", {
                    configurable: !0,
                    writable: !0,
                    value: k
                })
            };
            b.prototype.toString = function() {
                return this.W
            }
            ;
            var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
              , d = 0
              , e = function(g) {
                if (this instanceof e)
                    throw new TypeError("Symbol is not a constructor");
                return new b(c + (g || "") + "_" + d++,g)
            };
            return e
        });
        var fa = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b)
                return b.call(a);
            if ("number" == typeof a.length)
                return {
                    next: aa(a)
                };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        }
          , ha = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
                b[c - a] = arguments[c];
            return b
        }
          , l = this || self
          , ia = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }
          , ja = function(a, b, c) {
            if (!a)
                throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }
          , m = function(a, b, c) {
            m = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
            return m.apply(null, arguments)
        }
          , ka = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        }
          , n = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ma = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.base = function(d, e, g) {
                for (var k = Array(arguments.length - 2), f = 2; f < arguments.length; f++)
                    k[f - 2] = arguments[f];
                return b.prototype[e].apply(d, k)
            }
        };
        function t(a, b) {
            if (Error.captureStackTrace)
                Error.captureStackTrace(this, t);
            else {
                var c = Error().stack;
                c && (this.stack = c)
            }
            a && (this.message = String(a));
            void 0 !== b && (this.cause = b)
        }
        n(t, Error);
        t.prototype.name = "CustomError";
        function u(a, b) {
            a = a.split("%s");
            for (var c = "", d = a.length - 1, e = 0; e < d; e++)
                c += a[e] + (e < b.length ? b[e] : "%s");
            t.call(this, c + a[d])
        }
        n(u, t);
        u.prototype.name = "AssertionError";
        function v(a, b, c, d) {
            var e = "Assertion failed";
            if (c) {
                e += ": " + c;
                var g = d
            } else
                a && (e += ": " + a,
                g = b);
            throw new u("" + e,g || []);
        }
        var w = function(a, b, c) {
            a || v("", null, b, Array.prototype.slice.call(arguments, 2))
        }
          , la = function(a, b, c) {
            null == a && v("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
            return a
        }
          , x = function(a, b, c) {
            if ("function" !== typeof a) {
                var d = typeof a;
                d = "object" != d ? d : a ? Array.isArray(a) ? "array" : d : "null";
                v("Expected function but got %s: %s.", [d, a], b, Array.prototype.slice.call(arguments, 2))
            }
        };
        var y = function(a, b) {
            this.ba = 100;
            this.X = a;
            this.ha = b;
            this.F = 0;
            this.D = null
        };
        y.prototype.get = function() {
            if (0 < this.F) {
                this.F--;
                var a = this.D;
                this.D = a.next;
                a.next = null
            } else
                a = this.X();
            return a
        }
        ;
        y.prototype.put = function(a) {
            this.ha(a);
            this.F < this.ba && (this.F++,
            a.next = this.D,
            this.D = a)
        }
        ;
        var z, A;
        a: {
            for (var ma = ["CLOSURE_FLAGS"], B = l, C = 0; C < ma.length; C++)
                if (B = B[ma[C]],
                null == B) {
                    A = null;
                    break a
                }
            A = B
        }
        var na = A && A[610401301];
        z = null != na ? na : !1;
        function D() {
            var a = l.navigator;
            return a && (a = a.userAgent) ? a : ""
        }
        var E, oa = l.navigator;
        E = oa ? oa.userAgentData || null : null;
        function F(a) {
            return -1 != D().indexOf(a)
        }
        ;function G() {
            return z ? !!E && 0 < E.brands.length : !1
        }
        function pa() {
            return G() ? !1 : F("Trident") || F("MSIE")
        }
        ;function H() {
            return z ? !!E && !!E.platform : !1
        }
        function qa() {
            return F("iPhone") && !F("iPod") && !F("iPad")
        }
        ;G() || F("Opera");
        pa();
        F("Edge");
        !F("Gecko") || -1 != D().toLowerCase().indexOf("webkit") && !F("Edge") || F("Trident") || F("MSIE") || F("Edge");
        -1 != D().toLowerCase().indexOf("webkit") && !F("Edge") && F("Mobile");
        H() || F("Macintosh");
        H() || F("Windows");
        (H() ? "Linux" === E.platform : F("Linux")) || H() || F("CrOS");
        var ra = l.navigator || null;
        ra && (ra.appVersion || "").indexOf("X11");
        H() || F("Android");
        qa();
        F("iPad");
        F("iPod");
        qa() || F("iPad") || F("iPod");
        D().toLowerCase().indexOf("kaios");
        var I = function() {};
        var K = function(a) {
            if (sa !== sa)
                throw Error("SafeUrl is not meant to be built directly");
            this.ga = a
        };
        K.prototype.toString = function() {
            return this.ga.toString()
        }
        ;
        var sa = {};
        new K("about:invalid#zClosurez");
        new K("about:blank");
        var ta = {}
          , ua = function() {
            if (ta !== ta)
                throw Error("SafeStyle is not meant to be built directly");
            this.fa = ""
        };
        ua.prototype.toString = function() {
            return this.fa.toString()
        }
        ;
        new ua;
        var va = {}
          , wa = function() {
            if (va !== va)
                throw Error("SafeStyleSheet is not meant to be built directly");
            this.ea = ""
        };
        wa.prototype.toString = function() {
            return this.ea.toString()
        }
        ;
        new wa;
        var xa = {}
          , ya = function() {
            var a = l.trustedTypes && l.trustedTypes.emptyHTML || "";
            if (xa !== xa)
                throw Error("SafeHtml is not meant to be built directly");
            this.da = a
        };
        ya.prototype.toString = function() {
            return this.da.toString()
        }
        ;
        new ya;
        var za = function() {
            var a = document;
            var b = "IFRAME";
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        };
        var L, Aa = function() {
            var a = l.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !F("Presto") && (a = function() {
                var e = za();
                e.style.display = "none";
                document.documentElement.appendChild(e);
                var g = e.contentWindow;
                e = g.document;
                e.open();
                e.close();
                var k = "callImmediate" + Math.random()
                  , f = "file:" == g.location.protocol ? "*" : g.location.protocol + "//" + g.location.host;
                e = m(function(h) {
                    if (("*" == f || h.origin == f) && h.data == k)
                        this.port1.onmessage()
                }, this);
                g.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        g.postMessage(k, f)
                    }
                }
            }
            );
            if ("undefined" !== typeof a && !pa()) {
                var b = new a
                  , c = {}
                  , d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.M;
                        c.M = null;
                        e()
                    }
                }
                ;
                return function(e) {
                    d.next = {
                        M: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return function(e) {
                l.setTimeout(e, 0)
            }
        };
        function Ba(a) {
            l.setTimeout(function() {
                throw a;
            }, 0)
        }
        ;var M = function() {
            this.G = this.o = null
        };
        M.prototype.add = function(a, b) {
            var c = Ca.get();
            c.set(a, b);
            this.G ? this.G.next = c : (w(!this.o),
            this.o = c);
            this.G = c
        }
        ;
        M.prototype.remove = function() {
            var a = null;
            this.o && (a = this.o,
            this.o = this.o.next,
            this.o || (this.G = null),
            a.next = null);
            return a
        }
        ;
        var Ca = new y(function() {
            return new Da
        }
        ,function(a) {
            return a.reset()
        }
        )
          , Da = function() {
            this.next = this.scope = this.fn = null
        };
        Da.prototype.set = function(a, b) {
            this.fn = a;
            this.scope = b;
            this.next = null
        }
        ;
        Da.prototype.reset = function() {
            this.next = this.scope = this.fn = null
        }
        ;
        var Ea = l.console && l.console.createTask ? l.console.createTask.bind(l.console) : void 0
          , Fa = Ea ? Symbol("consoleTask") : void 0;
        function Ga(a, b) {
            function c() {
                var e = ha.apply(0, arguments)
                  , g = this;
                return d.run(function() {
                    var k = a.call
                      , f = k.apply
                      , h = [g]
                      , p = h.concat;
                    if (e instanceof Array)
                        var q = e;
                    else {
                        q = fa(e);
                        for (var J, r = []; !(J = q.next()).done; )
                            r.push(J.value);
                        q = r
                    }
                    return f.call(k, a, p.call(h, q))
                })
            }
            b = void 0 === b ? "anonymous" : b;
            if (!Ea || a[la(Fa)])
                return a;
            var d = Ea(a.name || b);
            c[la(Fa)] = d;
            return c
        }
        ;var N, Ha = !1, Ia = new M, O = function(a, b) {
            N || Ja();
            Ha || (N(),
            Ha = !0);
            a = Ga(a, "goog.async.run");
            Ia.add(a, b)
        }, Ja = function() {
            if (l.Promise && l.Promise.resolve) {
                var a = l.Promise.resolve(void 0);
                N = function() {
                    a.then(Ka)
                }
            } else
                N = function() {
                    var b = Ka;
                    "function" !== typeof l.setImmediate || l.Window && l.Window.prototype && (G() || !F("Edge")) && l.Window.prototype.setImmediate == l.setImmediate ? (L || (L = Aa()),
                    L(b)) : l.setImmediate(b)
                }
        }, Ka = function() {
            for (var a; a = Ia.remove(); ) {
                try {
                    a.fn.call(a.scope)
                } catch (b) {
                    Ba(b)
                }
                Ca.put(a)
            }
            Ha = !1
        };
        var R = function(a, b) {
            this.g = 0;
            this.U = void 0;
            this.s = this.i = this.m = null;
            this.B = this.H = !1;
            if (a != I)
                try {
                    var c = this;
                    a.call(b, function(d) {
                        P(c, 2, d)
                    }, function(d) {
                        if (!(d instanceof Q))
                            try {
                                if (d instanceof Error)
                                    throw d;
                                throw Error("Promise rejected.");
                            } catch (e) {}
                        P(c, 3, d)
                    })
                } catch (d) {
                    P(this, 3, d)
                }
        }
          , La = function() {
            this.next = this.context = this.u = this.l = this.child = null;
            this.v = !1
        };
        La.prototype.reset = function() {
            this.context = this.u = this.l = this.child = null;
            this.v = !1
        }
        ;
        var Ma = new y(function() {
            return new La
        }
        ,function(a) {
            a.reset()
        }
        )
          , Na = function(a, b, c) {
            var d = Ma.get();
            d.l = a;
            d.u = b;
            d.context = c;
            return d
        }
          , Pa = function(a, b, c) {
            Oa(a, b, c, null) || O(ka(b, a))
        };
        R.prototype.then = function(a, b, c) {
            null != a && x(a, "opt_onFulfilled should be a function.");
            null != b && x(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
            return Qa(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
        }
        ;
        R.prototype.$goog_Thenable = !0;
        R.prototype.V = function(a, b) {
            return Qa(this, null, a, b)
        }
        ;
        R.prototype.catch = R.prototype.V;
        R.prototype.cancel = function(a) {
            if (0 == this.g) {
                var b = new Q(a);
                O(function() {
                    Ra(this, b)
                }, this)
            }
        }
        ;
        var Ra = function(a, b) {
            if (0 == a.g)
                if (a.m) {
                    var c = a.m;
                    if (c.i) {
                        for (var d = 0, e = null, g = null, k = c.i; k && (k.v || (d++,
                        k.child == a && (e = k),
                        !(e && 1 < d))); k = k.next)
                            e || (g = k);
                        e && (0 == c.g && 1 == d ? Ra(c, b) : (g ? (d = g,
                        w(c.i),
                        w(null != d),
                        d.next == c.s && (c.s = d),
                        d.next = d.next.next) : Sa(c),
                        Ta(c, e, 3, b)))
                    }
                    a.m = null
                } else
                    P(a, 3, b)
        }
          , Va = function(a, b) {
            a.i || 2 != a.g && 3 != a.g || Ua(a);
            w(null != b.l);
            a.s ? a.s.next = b : a.i = b;
            a.s = b
        }
          , Qa = function(a, b, c, d) {
            b && (b = Ga(b, "goog.Promise.then"));
            c && (c = Ga(c, "goog.Promise.then"));
            var e = Na(null, null, null);
            e.child = new R(function(g, k) {
                e.l = b ? function(f) {
                    try {
                        var h = b.call(d, f);
                        g(h)
                    } catch (p) {
                        k(p)
                    }
                }
                : g;
                e.u = c ? function(f) {
                    try {
                        var h = c.call(d, f);
                        void 0 === h && f instanceof Q ? k(f) : g(h)
                    } catch (p) {
                        k(p)
                    }
                }
                : k
            }
            );
            e.child.m = a;
            Va(a, e);
            return e.child
        };
        R.prototype.ja = function(a) {
            w(1 == this.g);
            this.g = 0;
            P(this, 2, a)
        }
        ;
        R.prototype.ka = function(a) {
            w(1 == this.g);
            this.g = 0;
            P(this, 3, a)
        }
        ;
        var P = function(a, b, c) {
            0 == a.g && (a === c && (b = 3,
            c = new TypeError("Promise cannot resolve to itself")),
            a.g = 1,
            Oa(c, a.ja, a.ka, a) || (a.U = c,
            a.g = b,
            a.m = null,
            Ua(a),
            3 != b || c instanceof Q || Wa(a, c)))
        }
          , Oa = function(a, b, c, d) {
            if (a instanceof R)
                return null != b && x(b, "opt_onFulfilled should be a function."),
                null != c && x(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
                Va(a, Na(b || I, c || null, d)),
                !0;
            if (a)
                try {
                    var e = !!a.$goog_Thenable
                } catch (k) {
                    e = !1
                }
            else
                e = !1;
            if (e)
                return a.then(b, c, d),
                !0;
            e = typeof a;
            if ("object" == e && null != a || "function" == e)
                try {
                    var g = a.then;
                    if ("function" === typeof g)
                        return Xa(a, g, b, c, d),
                        !0
                } catch (k) {
                    return c.call(d, k),
                    !0
                }
            return !1
        }
          , Xa = function(a, b, c, d, e) {
            var g = !1
              , k = function(h) {
                g || (g = !0,
                c.call(e, h))
            }
              , f = function(h) {
                g || (g = !0,
                d.call(e, h))
            };
            try {
                b.call(a, k, f)
            } catch (h) {
                f(h)
            }
        }
          , Ua = function(a) {
            a.H || (a.H = !0,
            O(a.Y, a))
        }
          , Sa = function(a) {
            var b = null;
            a.i && (b = a.i,
            a.i = b.next,
            b.next = null);
            a.i || (a.s = null);
            null != b && w(null != b.l);
            return b
        };
        R.prototype.Y = function() {
            for (var a; a = Sa(this); )
                Ta(this, a, this.g, this.U);
            this.H = !1
        }
        ;
        var Ta = function(a, b, c, d) {
            if (3 == c && b.u && !b.v)
                for (; a && a.B; a = a.m)
                    a.B = !1;
            if (b.child)
                b.child.m = null,
                Ya(b, c, d);
            else
                try {
                    b.v ? b.l.call(b.context) : Ya(b, c, d)
                } catch (e) {
                    Za.call(null, e)
                }
            Ma.put(b)
        }
          , Ya = function(a, b, c) {
            2 == b ? a.l.call(a.context, c) : a.u && a.u.call(a.context, c)
        }
          , Wa = function(a, b) {
            a.B = !0;
            O(function() {
                a.B && Za.call(null, b)
            })
        }
          , Za = Ba
          , Q = function(a) {
            t.call(this, a)
        };
        n(Q, t);
        Q.prototype.name = "cancel";
        R.all = function(a) {
            return new R(function(b, c) {
                var d = a.length
                  , e = [];
                if (d)
                    for (var g = function(p, q) {
                        d--;
                        e[p] = q;
                        0 == d && b(e)
                    }, k = function(p) {
                        c(p)
                    }, f = 0, h; f < a.length; f++)
                        h = a[f],
                        Pa(h, ka(g, f), k);
                else
                    b(e)
            }
            )
        }
        ;
        R.resolve = function(a) {
            if (a instanceof R)
                return a;
            var b = new R(I);
            P(b, 2, a);
            return b
        }
        ;
        R.reject = function(a) {
            return new R(function(b, c) {
                c(a)
            }
            )
        }
        ;
        R.prototype["catch"] = R.prototype.V;
        var $a = R;
        "undefined" !== typeof Promise && ($a = Promise);
        function S(a, b) {
            if (!(b instanceof Object))
                return b;
            switch (b.constructor) {
            case Date:
                return new Date(b.getTime());
            case Object:
                void 0 === a && (a = {});
                break;
            case Array:
                a = [];
                break;
            default:
                return b
            }
            for (var c in b)
                b.hasOwnProperty(c) && (a[c] = S(a[c], b[c]));
            return a
        }
        ;var ab = Error.captureStackTrace
          , U = function(a, b) {
            this.code = a;
            this.message = b;
            if (ab)
                ab(this, T.prototype.create);
            else {
                var c = Error.apply(this, arguments);
                this.name = "FirebaseError";
                Object.defineProperty(this, "stack", {
                    get: function() {
                        return c.stack
                    }
                })
            }
        };
        U.prototype = Object.create(Error.prototype);
        U.prototype.constructor = U;
        U.prototype.name = "FirebaseError";
        var T = function(a, b, c) {
            this.service = a;
            this.ia = b;
            this.errors = c;
            this.pattern = /\{\$([^}]+)}/g
        };
        T.prototype.create = function(a, b) {
            void 0 === b && (b = {});
            var c = this.errors[a];
            a = this.service + "/" + a;
            c = void 0 === c ? "Error" : c.replace(this.pattern, function(e, g) {
                e = b[g];
                return void 0 !== e ? e.toString() : "<" + g + "?>"
            });
            c = this.ia + ": " + c + " (" + a + ").";
            c = new U(a,c);
            for (var d in b)
                b.hasOwnProperty(d) && "_" !== d.slice(-1) && (c[d] = b[d]);
            return c
        }
        ;
        var bb = $a;
        function cb(a, b) {
            a = new V(a,b);
            return a.subscribe.bind(a)
        }
        var V = function(a, b) {
            var c = this;
            this.h = [];
            this.T = 0;
            this.task = bb.resolve();
            this.A = !1;
            this.J = b;
            this.task.then(function() {
                a(c)
            }).catch(function(d) {
                c.error(d)
            })
        };
        V.prototype.next = function(a) {
            db(this, function(b) {
                b.next(a)
            })
        }
        ;
        V.prototype.error = function(a) {
            db(this, function(b) {
                b.error(a)
            });
            this.close(a)
        }
        ;
        V.prototype.complete = function() {
            db(this, function(a) {
                a.complete()
            });
            this.close()
        }
        ;
        V.prototype.subscribe = function(a, b, c) {
            var d = this;
            if (void 0 === a && void 0 === b && void 0 === c)
                throw Error("Missing Observer.");
            var e = eb(a) ? a : {
                next: a,
                error: b,
                complete: c
            };
            void 0 === e.next && (e.next = fb);
            void 0 === e.error && (e.error = fb);
            void 0 === e.complete && (e.complete = fb);
            a = this.la.bind(this, this.h.length);
            this.A && this.task.then(function() {
                try {
                    d.P ? e.error(d.P) : e.complete()
                } catch (g) {}
            });
            this.h.push(e);
            return a
        }
        ;
        V.prototype.la = function(a) {
            void 0 !== this.h && void 0 !== this.h[a] && (delete this.h[a],
            --this.T,
            0 === this.T && void 0 !== this.J && this.J(this))
        }
        ;
        var db = function(a, b) {
            if (!a.A)
                for (var c = 0; c < a.h.length; c++)
                    gb(a, c, b)
        }
          , gb = function(a, b, c) {
            a.task.then(function() {
                if (void 0 !== a.h && void 0 !== a.h[b])
                    try {
                        c(a.h[b])
                    } catch (d) {
                        "undefined" !== typeof console && console.error && console.error(d)
                    }
            })
        };
        V.prototype.close = function(a) {
            var b = this;
            this.A || (this.A = !0,
            void 0 !== a && (this.P = a),
            this.task.then(function() {
                b.h = void 0;
                b.J = void 0
            }))
        }
        ;
        function eb(a) {
            if ("object" !== typeof a || null === a)
                return !1;
            for (var b = fa(["next", "error", "complete"]), c = b.next(); !c.done; c = b.next())
                if (c = c.value,
                c in a && "function" === typeof a[c])
                    return !0;
            return !1
        }
        function fb() {}
        ;var W = $a
          , X = function(a, b, c) {
            var d = this;
            this.R = c;
            this.S = !1;
            this.j = {};
            this.I = b;
            this.K = S(void 0, a);
            a = "serviceAccount"in this.K;
            ("credential"in this.K || a) && "undefined" !== typeof console && console.log("The '" + (a ? "serviceAccount" : "credential") + "' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.");
            Object.keys(c.INTERNAL.factories).forEach(function(e) {
                var g = c.INTERNAL.useAsService(d, e);
                null !== g && (g = d.aa.bind(d, g),
                d[e] = g)
            })
        };
        X.prototype.delete = function() {
            var a = this;
            return (new W(function(b) {
                Y(a);
                b()
            }
            )).then(function() {
                a.R.INTERNAL.removeApp(a.I);
                var b = [];
                Object.keys(a.j).forEach(function(c) {
                    Object.keys(a.j[c]).forEach(function(d) {
                        b.push(a.j[c][d])
                    })
                });
                return W.all(b.filter(function(c) {
                    return "INTERNAL"in c
                }).map(function(c) {
                    return c.INTERNAL.delete()
                }))
            }).then(function() {
                a.S = !0;
                a.j = {}
            })
        }
        ;
        X.prototype.aa = function(a, b) {
            Y(this);
            "undefined" === typeof this.j[a] && (this.j[a] = {});
            var c = b || "[DEFAULT]";
            return "undefined" === typeof this.j[a][c] ? (b = this.R.INTERNAL.factories[a](this, this.Z.bind(this), b),
            this.j[a][c] = b) : this.j[a][c]
        }
        ;
        X.prototype.Z = function(a) {
            S(this, a)
        }
        ;
        var Y = function(a) {
            a.S && Z("app-deleted", {
                name: a.I
            })
        };
        da.Object.defineProperties(X.prototype, {
            name: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    Y(this);
                    return this.I
                }
            },
            options: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    Y(this);
                    return this.K
                }
            }
        });
        X.prototype.name && X.prototype.options || X.prototype.delete || console.log("dc");
        function hb() {
            function a(f) {
                f = f || "[DEFAULT]";
                var h = d[f];
                void 0 === h && Z("no-app", {
                    name: f
                });
                return h
            }
            function b(f, h) {
                Object.keys(e).forEach(function(p) {
                    p = c(f, p);
                    if (null !== p && g[p])
                        g[p](h, f)
                })
            }
            function c(f, h) {
                if ("serverAuth" === h)
                    return null;
                var p = h;
                f = f.options;
                "auth" === h && (f.serviceAccount || f.credential) && (p = "serverAuth",
                "serverAuth"in e || Z("sa-not-supported"));
                return p
            }
            var d = {}
              , e = {}
              , g = {}
              , k = {
                __esModule: !0,
                initializeApp: function(f, h) {
                    void 0 === h ? h = "[DEFAULT]" : ("string" !== typeof h || "" === h) && Z("bad-app-name", {
                        name: h + ""
                    });
                    void 0 !== d[h] && Z("duplicate-app", {
                        name: h
                    });
                    f = new X(f,h,k);
                    d[h] = f;
                    b(f, "create");
                    void 0 != f.INTERNAL && void 0 != f.INTERNAL.getToken || S(f, {
                        INTERNAL: {
                            getUid: function() {
                                return null
                            },
                            getToken: function() {
                                return W.resolve(null)
                            },
                            addAuthTokenListener: function() {},
                            removeAuthTokenListener: function() {}
                        }
                    });
                    return f
                },
                app: a,
                apps: null,
                Promise: W,
                SDK_VERSION: "0.0.0",
                INTERNAL: {
                    registerService: function(f, h, p, q, J) {
                        e[f] && Z("duplicate-service", {
                            name: f
                        });
                        e[f] = J ? h : function(r, ib) {
                            return h(r, ib, "[DEFAULT]")
                        }
                        ;
                        q && (g[f] = q);
                        q = function(r) {
                            void 0 === r && (r = a());
                            "function" !== typeof r[f] && Z("invalid-app-argument", {
                                name: f
                            });
                            return r[f]()
                        }
                        ;
                        void 0 !== p && S(q, p);
                        return k[f] = q
                    },
                    createFirebaseNamespace: hb,
                    extendNamespace: function(f) {
                        S(k, f)
                    },
                    createSubscribe: cb,
                    ErrorFactory: T,
                    removeApp: function(f) {
                        b(d[f], "delete");
                        delete d[f]
                    },
                    factories: e,
                    useAsService: c,
                    Promise: R,
                    deepExtend: S
                }
            };
            k["default"] = k;
            Object.defineProperty(k, "apps", {
                get: function() {
                    return Object.keys(d).map(function(f) {
                        return d[f]
                    })
                }
            });
            a.App = X;
            return k
        }
        function Z(a, b) {
            throw jb.create(a, b);
        }
        var jb = new T("app","Firebase",{
            "no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
            "bad-app-name": "Illegal App name: '{$name}",
            "duplicate-app": "Firebase App named '{$name}' already exists",
            "app-deleted": "Firebase App named '{$name}' already deleted",
            "duplicate-service": "Firebase service named '{$name}' already registered",
            "sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain",
            "invalid-app-argument": "firebase.{$name}() takes either no argument or a Firebase App instance."
        });
        "undefined" !== typeof firebase && (firebase = hb());
    }
    ).call(this);
    firebase.SDK_VERSION = "3.7.5";
    (function() {
        /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
        var l, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        }, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype)
                return a;
            a[b] = c.value;
            return a
        }
        , da = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math)
                    return c
            }
            throw Error("Cannot find global object");
        }, ea = da(this), n = function(a, b) {
            if (b)
                a: {
                    var c = ea;
                    a = a.split(".");
                    for (var d = 0; d < a.length - 1; d++) {
                        var e = a[d];
                        if (!(e in c))
                            break a;
                        c = c[e]
                    }
                    a = a[a.length - 1];
                    d = c[a];
                    b = b(d);
                    b != d && null != b && ba(c, a, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
        };
        n("Symbol", function(a) {
            if (a)
                return a;
            var b = function(f, g) {
                this.Ki = f;
                ba(this, "description", {
                    configurable: !0,
                    writable: !0,
                    value: g
                })
            };
            b.prototype.toString = function() {
                return this.Ki
            }
            ;
            var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
              , d = 0
              , e = function(f) {
                if (this instanceof e)
                    throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++,f)
            };
            return e
        });
        n("Symbol.iterator", function(a) {
            if (a)
                return a;
            a = Symbol("Symbol.iterator");
            for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
                var d = ea[b[c]];
                "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return fa(aa(this))
                    }
                })
            }
            return a
        });
        var fa = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            }
            ;
            return a
        }
          , ha = function(a) {
            return a.raw = a
        }
          , ia = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b)
                return b.call(a);
            if ("number" == typeof a.length)
                return {
                    next: aa(a)
                };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        }
          , ja = function(a) {
            if (!(a instanceof Array)) {
                a = ia(a);
                for (var b, c = []; !(b = a.next()).done; )
                    c.push(b.value);
                a = c
            }
            return a
        }
          , ka = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }
          , la = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d)
                        ka(d, e) && (a[e] = d[e])
            }
            return a
        }
        ;
        n("Object.assign", function(a) {
            return a || la
        });
        var ma = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        }
        , na;
        if ("function" == typeof Object.setPrototypeOf)
            na = Object.setPrototypeOf;
        else {
            var oa;
            a: {
                var pa = {
                    a: !0
                }
                  , qa = {};
                try {
                    qa.__proto__ = pa;
                    oa = qa.a;
                    break a
                } catch (a) {}
                oa = !1
            }
            na = oa ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b)
                    throw new TypeError(a + " is not extensible");
                return a
            }
            : null
        }
        var sa = na
          , q = function(a, b) {
            a.prototype = ma(b.prototype);
            a.prototype.constructor = a;
            if (sa)
                sa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else
                            a[c] = b[c];
            a.Fc = b.prototype
        }
          , ta = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
                b[c - a] = arguments[c];
            return b
        };
        n("Promise", function(a) {
            function b() {
                this.nb = null
            }
            function c(g) {
                return g instanceof e ? g : new e(function(h) {
                    h(g)
                }
                )
            }
            if (a)
                return a;
            b.prototype.Ig = function(g) {
                if (null == this.nb) {
                    this.nb = [];
                    var h = this;
                    this.Jg(function() {
                        h.bj()
                    })
                }
                this.nb.push(g)
            }
            ;
            var d = ea.setTimeout;
            b.prototype.Jg = function(g) {
                d(g, 0)
            }
            ;
            b.prototype.bj = function() {
                for (; this.nb && this.nb.length; ) {
                    var g = this.nb;
                    this.nb = [];
                    for (var h = 0; h < g.length; ++h) {
                        var k = g[h];
                        g[h] = null;
                        try {
                            k()
                        } catch (m) {
                            this.Ri(m)
                        }
                    }
                }
                this.nb = null
            }
            ;
            b.prototype.Ri = function(g) {
                this.Jg(function() {
                    throw g;
                })
            }
            ;
            var e = function(g) {
                this.R = 0;
                this.ma = void 0;
                this.tc = [];
                this.Eh = !1;
                var h = this.pf();
                try {
                    g(h.resolve, h.reject)
                } catch (k) {
                    h.reject(k)
                }
            };
            e.prototype.pf = function() {
                function g(m) {
                    return function(p) {
                        k || (k = !0,
                        m.call(h, p))
                    }
                }
                var h = this
                  , k = !1;
                return {
                    resolve: g(this.ek),
                    reject: g(this.mg)
                }
            }
            ;
            e.prototype.ek = function(g) {
                if (g === this)
                    this.mg(new TypeError("A Promise cannot resolve to itself"));
                else if (g instanceof e)
                    this.vk(g);
                else {
                    a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                    }
                    h ? this.dk(g) : this.nh(g)
                }
            }
            ;
            e.prototype.dk = function(g) {
                var h = void 0;
                try {
                    h = g.then
                } catch (k) {
                    this.mg(k);
                    return
                }
                "function" == typeof h ? this.wk(h, g) : this.nh(g)
            }
            ;
            e.prototype.mg = function(g) {
                this.oi(2, g)
            }
            ;
            e.prototype.nh = function(g) {
                this.oi(1, g)
            }
            ;
            e.prototype.oi = function(g, h) {
                if (0 != this.R)
                    throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.R);
                this.R = g;
                this.ma = h;
                2 === this.R && this.kk();
                this.dj()
            }
            ;
            e.prototype.kk = function() {
                var g = this;
                d(function() {
                    if (g.Nj()) {
                        var h = ea.console;
                        "undefined" !== typeof h && h.error(g.ma)
                    }
                }, 1)
            }
            ;
            e.prototype.Nj = function() {
                if (this.Eh)
                    return !1;
                var g = ea.CustomEvent
                  , h = ea.Event
                  , k = ea.dispatchEvent;
                if ("undefined" === typeof k)
                    return !0;
                "function" === typeof g ? g = new g("unhandledrejection",{
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection",{
                    cancelable: !0
                }) : (g = ea.document.createEvent("CustomEvent"),
                g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.ma;
                return k(g)
            }
            ;
            e.prototype.dj = function() {
                if (null != this.tc) {
                    for (var g = 0; g < this.tc.length; ++g)
                        f.Ig(this.tc[g]);
                    this.tc = null
                }
            }
            ;
            var f = new b;
            e.prototype.vk = function(g) {
                var h = this.pf();
                g.Qd(h.resolve, h.reject)
            }
            ;
            e.prototype.wk = function(g, h) {
                var k = this.pf();
                try {
                    g.call(h, k.resolve, k.reject)
                } catch (m) {
                    k.reject(m)
                }
            }
            ;
            e.prototype.then = function(g, h) {
                function k(t, z) {
                    return "function" == typeof t ? function(ca) {
                        try {
                            m(t(ca))
                        } catch (qb) {
                            p(qb)
                        }
                    }
                    : z
                }
                var m, p, r = new e(function(t, z) {
                    m = t;
                    p = z
                }
                );
                this.Qd(k(g, m), k(h, p));
                return r
            }
            ;
            e.prototype.catch = function(g) {
                return this.then(void 0, g)
            }
            ;
            e.prototype.Qd = function(g, h) {
                function k() {
                    switch (m.R) {
                    case 1:
                        g(m.ma);
                        break;
                    case 2:
                        h(m.ma);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.R);
                    }
                }
                var m = this;
                null == this.tc ? f.Ig(k) : this.tc.push(k);
                this.Eh = !0
            }
            ;
            e.resolve = c;
            e.reject = function(g) {
                return new e(function(h, k) {
                    k(g)
                }
                )
            }
            ;
            e.race = function(g) {
                return new e(function(h, k) {
                    for (var m = ia(g), p = m.next(); !p.done; p = m.next())
                        c(p.value).Qd(h, k)
                }
                )
            }
            ;
            e.all = function(g) {
                var h = ia(g)
                  , k = h.next();
                return k.done ? c([]) : new e(function(m, p) {
                    function r(ca) {
                        return function(qb) {
                            t[ca] = qb;
                            z--;
                            0 == z && m(t)
                        }
                    }
                    var t = []
                      , z = 0;
                    do
                        t.push(void 0),
                        z++,
                        c(k.value).Qd(r(t.length - 1), p),
                        k = h.next();
                    while (!k.done)
                }
                )
            }
            ;
            return e
        });
        n("Array.prototype.find", function(a) {
            return a ? a : function(b, c) {
                a: {
                    var d = this;
                    d instanceof String && (d = String(d));
                    for (var e = d.length, f = 0; f < e; f++) {
                        var g = d[f];
                        if (b.call(c, g, f, d)) {
                            b = g;
                            break a
                        }
                    }
                    b = void 0
                }
                return b
            }
        });
        n("WeakMap", function(a) {
            function b() {}
            function c(k) {
                var m = typeof k;
                return "object" === m && null !== k || "function" === m
            }
            function d(k) {
                if (!ka(k, f)) {
                    var m = new b;
                    ba(k, f, {
                        value: m
                    })
                }
            }
            function e(k) {
                var m = Object[k];
                m && (Object[k] = function(p) {
                    if (p instanceof b)
                        return p;
                    Object.isExtensible(p) && d(p);
                    return m(p)
                }
                )
            }
            if (function() {
                if (!a || !Object.seal)
                    return !1;
                try {
                    var k = Object.seal({})
                      , m = Object.seal({})
                      , p = new a([[k, 2], [m, 3]]);
                    if (2 != p.get(k) || 3 != p.get(m))
                        return !1;
                    p.delete(k);
                    p.set(m, 4);
                    return !p.has(k) && 4 == p.get(m)
                } catch (r) {
                    return !1
                }
            }())
                return a;
            var f = "$jscomp_hidden_" + Math.random();
            e("freeze");
            e("preventExtensions");
            e("seal");
            var g = 0
              , h = function(k) {
                this.Ea = (g += Math.random() + 1).toString();
                if (k) {
                    k = ia(k);
                    for (var m; !(m = k.next()).done; )
                        m = m.value,
                        this.set(m[0], m[1])
                }
            };
            h.prototype.set = function(k, m) {
                if (!c(k))
                    throw Error("Invalid WeakMap key");
                d(k);
                if (!ka(k, f))
                    throw Error("WeakMap key fail: " + k);
                k[f][this.Ea] = m;
                return this
            }
            ;
            h.prototype.get = function(k) {
                return c(k) && ka(k, f) ? k[f][this.Ea] : void 0
            }
            ;
            h.prototype.has = function(k) {
                return c(k) && ka(k, f) && ka(k[f], this.Ea)
            }
            ;
            h.prototype.delete = function(k) {
                return c(k) && ka(k, f) && ka(k[f], this.Ea) ? delete k[f][this.Ea] : !1
            }
            ;
            return h
        });
        n("Map", function(a) {
            if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                    return !1;
                try {
                    var h = Object.seal({
                        x: 4
                    })
                      , k = new a(ia([[h, "s"]]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                        x: 4
                    }) || k.set({
                        x: 4
                    }, "t") != k || 2 != k.size)
                        return !1;
                    var m = k.entries()
                      , p = m.next();
                    if (p.done || p.value[0] != h || "s" != p.value[1])
                        return !1;
                    p = m.next();
                    return p.done || 4 != p.value[0].x || "t" != p.value[1] || !m.next().done ? !1 : !0
                } catch (r) {
                    return !1
                }
            }())
                return a;
            var b = new WeakMap
              , c = function(h) {
                this[0] = {};
                this[1] = f();
                this.size = 0;
                if (h) {
                    h = ia(h);
                    for (var k; !(k = h.next()).done; )
                        k = k.value,
                        this.set(k[0], k[1])
                }
            };
            c.prototype.set = function(h, k) {
                h = 0 === h ? 0 : h;
                var m = d(this, h);
                m.list || (m.list = this[0][m.id] = []);
                m.ha ? m.ha.value = k : (m.ha = {
                    next: this[1],
                    hb: this[1].hb,
                    head: this[1],
                    key: h,
                    value: k
                },
                m.list.push(m.ha),
                this[1].hb.next = m.ha,
                this[1].hb = m.ha,
                this.size++);
                return this
            }
            ;
            c.prototype.delete = function(h) {
                h = d(this, h);
                return h.ha && h.list ? (h.list.splice(h.index, 1),
                h.list.length || delete this[0][h.id],
                h.ha.hb.next = h.ha.next,
                h.ha.next.hb = h.ha.hb,
                h.ha.head = null,
                this.size--,
                !0) : !1
            }
            ;
            c.prototype.clear = function() {
                this[0] = {};
                this[1] = this[1].hb = f();
                this.size = 0
            }
            ;
            c.prototype.has = function(h) {
                return !!d(this, h).ha
            }
            ;
            c.prototype.get = function(h) {
                return (h = d(this, h).ha) && h.value
            }
            ;
            c.prototype.entries = function() {
                return e(this, function(h) {
                    return [h.key, h.value]
                })
            }
            ;
            c.prototype.keys = function() {
                return e(this, function(h) {
                    return h.key
                })
            }
            ;
            c.prototype.values = function() {
                return e(this, function(h) {
                    return h.value
                })
            }
            ;
            c.prototype.forEach = function(h, k) {
                for (var m = this.entries(), p; !(p = m.next()).done; )
                    p = p.value,
                    h.call(k, p[1], p[0], this)
            }
            ;
            c.prototype[Symbol.iterator] = c.prototype.entries;
            var d = function(h, k) {
                var m = k && typeof k;
                "object" == m || "function" == m ? b.has(k) ? m = b.get(k) : (m = "" + ++g,
                b.set(k, m)) : m = "p_" + k;
                var p = h[0][m];
                if (p && ka(h[0], m))
                    for (h = 0; h < p.length; h++) {
                        var r = p[h];
                        if (k !== k && r.key !== r.key || k === r.key)
                            return {
                                id: m,
                                list: p,
                                index: h,
                                ha: r
                            }
                    }
                return {
                    id: m,
                    list: p,
                    index: -1,
                    ha: void 0
                }
            }
              , e = function(h, k) {
                var m = h[1];
                return fa(function() {
                    if (m) {
                        for (; m.head != h[1]; )
                            m = m.hb;
                        for (; m.next != m.head; )
                            return m = m.next,
                            {
                                done: !1,
                                value: k(m)
                            };
                        m = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            }
              , f = function() {
                var h = {};
                return h.hb = h.next = h.head = h
            }
              , g = 0;
            return c
        });
        n("Math.log2", function(a) {
            return a ? a : function(b) {
                return Math.log(b) / Math.LN2
            }
        });
        n("Object.values", function(a) {
            return a ? a : function(b) {
                var c = [], d;
                for (d in b)
                    ka(b, d) && c.push(b[d]);
                return c
            }
        });
        n("Object.is", function(a) {
            return a ? a : function(b, c) {
                return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
            }
        });
        n("Array.prototype.includes", function(a) {
            return a ? a : function(b, c) {
                var d = this;
                d instanceof String && (d = String(d));
                var e = d.length;
                c = c || 0;
                for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                    var f = d[c];
                    if (f === b || Object.is(f, b))
                        return !0
                }
                return !1
            }
        });
        var ua = function(a, b, c) {
            if (null == a)
                throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp)
                throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        };
        n("String.prototype.includes", function(a) {
            return a ? a : function(b, c) {
                return -1 !== ua(this, b, "includes").indexOf(b, c || 0)
            }
        });
        var va = function(a, b) {
            a instanceof String && (a += "");
            var c = 0
              , d = !1
              , e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
            e[Symbol.iterator] = function() {
                return e
            }
            ;
            return e
        };
        n("Array.prototype.entries", function(a) {
            return a ? a : function() {
                return va(this, function(b, c) {
                    return [b, c]
                })
            }
        });
        n("Array.from", function(a) {
            return a ? a : function(b, c, d) {
                c = null != c ? c : function(h) {
                    return h
                }
                ;
                var e = []
                  , f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
                if ("function" == typeof f) {
                    b = f.call(b);
                    for (var g = 0; !(f = b.next()).done; )
                        e.push(c.call(d, f.value, g++))
                } else
                    for (f = b.length,
                    g = 0; g < f; g++)
                        e.push(c.call(d, b[g], g));
                return e
            }
        });
        n("Array.prototype.keys", function(a) {
            return a ? a : function() {
                return va(this, function(b) {
                    return b
                })
            }
        });
        n("Array.prototype.values", function(a) {
            return a ? a : function() {
                return va(this, function(b, c) {
                    return c
                })
            }
        });
        n("Object.entries", function(a) {
            return a ? a : function(b) {
                var c = [], d;
                for (d in b)
                    ka(b, d) && c.push([d, b[d]]);
                return c
            }
        });
        n("String.prototype.startsWith", function(a) {
            return a ? a : function(b, c) {
                var d = ua(this, b, "startsWith");
                b += "";
                var e = d.length
                  , f = b.length;
                c = Math.max(0, Math.min(c | 0, d.length));
                for (var g = 0; g < f && c < e; )
                    if (d[c++] != b[g++])
                        return !1;
                return g >= f
            }
        });
        var wa = wa || {}
          , u = this || self
          , xa = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        }
          , ya = function(a) {
            var b = xa(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }
          , v = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }
          , za = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }
          , Aa = function(a, b, c) {
            if (!a)
                throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }
          , w = function(a, b, c) {
            w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? za : Aa;
            return w.apply(null, arguments)
        }
          , Ba = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        }
          , x = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Fc = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.kl = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                    g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        }
          , Ca = function(a) {
            return a
        };
        function Da(a, b) {
            if (Error.captureStackTrace)
                Error.captureStackTrace(this, Da);
            else {
                var c = Error().stack;
                c && (this.stack = c)
            }
            a && (this.message = String(a));
            void 0 !== b && (this.cause = b)
        }
        x(Da, Error);
        Da.prototype.name = "CustomError";
        var Ea;
        function Fa(a, b) {
            a = a.split("%s");
            for (var c = "", d = a.length - 1, e = 0; e < d; e++)
                c += a[e] + (e < b.length ? b[e] : "%s");
            Da.call(this, c + a[d])
        }
        x(Fa, Da);
        Fa.prototype.name = "AssertionError";
        function Ga(a, b, c, d) {
            var e = "Assertion failed";
            if (c) {
                e += ": " + c;
                var f = d
            } else
                a && (e += ": " + a,
                f = b);
            throw new Fa("" + e,f || []);
        }
        var y = function(a, b, c) {
            a || Ga("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        }
          , Ha = function(a, b, c) {
            null == a && Ga("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
            return a
        }
          , Ia = function(a, b) {
            throw new Fa("Failure" + (a ? ": " + a : ""),Array.prototype.slice.call(arguments, 1));
        }
          , Ja = function(a, b, c) {
            "number" !== typeof a && Ga("Expected number but got %s: %s.", [xa(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        }
          , Ka = function(a, b, c) {
            "string" !== typeof a && Ga("Expected string but got %s: %s.", [xa(a), a], b, Array.prototype.slice.call(arguments, 2))
        }
          , La = function(a, b, c) {
            "function" !== typeof a && Ga("Expected function but got %s: %s.", [xa(a), a], b, Array.prototype.slice.call(arguments, 2))
        }
          , Ma = function(a, b, c) {
            Array.isArray(a) || Ga("Expected array but got %s: %s.", [xa(a), a], b, Array.prototype.slice.call(arguments, 2))
        };
        function Na(a) {
            u.setTimeout(function() {
                throw a;
            }, 0)
        }
        ;var Oa = function(a) {
            return Array.prototype.map.call(a, function(b) {
                b = b.toString(16);
                return 1 < b.length ? b : "0" + b
            }).join("")
        };
        var Pa = String.prototype.trim ? function(a) {
            return a.trim()
        }
        : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        }
          , Xa = function(a) {
            if (!Qa.test(a))
                return a;
            -1 != a.indexOf("&") && (a = a.replace(Ra, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(Sa, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(Ta, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(Ua, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(Va, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(Wa, "&#0;"));
            return a
        }
          , Ra = /&/g
          , Sa = /</g
          , Ta = />/g
          , Ua = /"/g
          , Va = /'/g
          , Wa = /\x00/g
          , Qa = /[\x00&<>"']/
          , A = function(a, b) {
            return -1 != a.indexOf(b)
        };
        var Ya, Za;
        a: {
            for (var $a = ["CLOSURE_FLAGS"], ab = u, bb = 0; bb < $a.length; bb++)
                if (ab = ab[$a[bb]],
                null == ab) {
                    Za = null;
                    break a
                }
            Za = ab
        }
        var cb = Za && Za[610401301];
        Ya = null != cb ? cb : !1;
        function db() {
            var a = u.navigator;
            return a && (a = a.userAgent) ? a : ""
        }
        var eb, fb = u.navigator;
        eb = fb ? fb.userAgentData || null : null;
        function gb(a) {
            return Ya ? eb ? eb.brands.some(function(b) {
                return (b = b.brand) && A(b, a)
            }) : !1 : !1
        }
        function B(a) {
            return A(db(), a)
        }
        ;function hb() {
            return Ya ? !!eb && 0 < eb.brands.length : !1
        }
        function ib() {
            return hb() ? !1 : B("Trident") || B("MSIE")
        }
        function jb() {
            return hb() ? gb("Chromium") : (B("Chrome") || B("CriOS")) && !(hb() ? 0 : B("Edge")) || B("Silk")
        }
        ;var kb = Array.prototype.indexOf ? function(a, b) {
            y(null != a.length);
            return Array.prototype.indexOf.call(a, b, void 0)
        }
        : function(a, b) {
            if ("string" === typeof a)
                return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b)
                    return c;
            return -1
        }
          , C = Array.prototype.forEach ? function(a, b) {
            y(null != a.length);
            Array.prototype.forEach.call(a, b, void 0)
        }
        : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                e in d && b.call(void 0, d[e], e, a)
        }
        ;
        function lb(a, b) {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d)
                d in c && b.call(void 0, c[d], d, a)
        }
        var mb = Array.prototype.filter ? function(a, b) {
            y(null != a.length);
            return Array.prototype.filter.call(a, b, void 0)
        }
        : function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        }
          , nb = Array.prototype.map ? function(a, b) {
            y(null != a.length);
            return Array.prototype.map.call(a, b, void 0)
        }
        : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
                f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        }
          , ob = Array.prototype.some ? function(a, b) {
            y(null != a.length);
            return Array.prototype.some.call(a, b, void 0)
        }
        : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a))
                    return !0;
            return !1
        }
        ;
        function pb(a, b) {
            return 0 <= kb(a, b)
        }
        function rb(a, b) {
            b = kb(a, b);
            var c;
            (c = 0 <= b) && sb(a, b);
            return c
        }
        function sb(a, b) {
            y(null != a.length);
            return 1 == Array.prototype.splice.call(a, b, 1).length
        }
        function tb(a, b) {
            var c = 0;
            lb(a, function(d, e) {
                b.call(void 0, d, e, a) && sb(a, e) && c++
            })
        }
        function ub(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++)
                    c[d] = a[d];
                return c
            }
            return []
        }
        ;var vb = function(a) {
            vb[" "](a);
            return a
        };
        vb[" "] = function() {}
        ;
        var wb = hb() ? !1 : B("Opera"), xb = ib(), yb = B("Edge"), zb = yb || xb, Ab = B("Gecko") && !(A(db().toLowerCase(), "webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"), Bb = A(db().toLowerCase(), "webkit") && !B("Edge"), Cb = function() {
            var a = u.document;
            return a ? a.documentMode : void 0
        }, Db;
        a: {
            var Eb = ""
              , Fb = function() {
                var a = db();
                if (Ab)
                    return /rv:([^\);]+)(\)|;)/.exec(a);
                if (yb)
                    return /Edge\/([\d\.]+)/.exec(a);
                if (xb)
                    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Bb)
                    return /WebKit\/(\S+)/.exec(a);
                if (wb)
                    return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
            Fb && (Eb = Fb ? Fb[1] : "");
            if (xb) {
                var Gb = Cb();
                if (null != Gb && Gb > parseFloat(Eb)) {
                    Db = String(Gb);
                    break a
                }
            }
            Db = Eb
        }
        var Hb = Db, Ib;
        if (u.document && xb) {
            var Jb = Cb();
            Ib = Jb ? Jb : parseInt(Hb, 10) || void 0
        } else
            Ib = void 0;
        var Kb = Ib;
        !B("Android") || jb();
        jb();
        B("Safari") && (jb() || (hb() ? 0 : B("Coast")) || (hb() ? 0 : B("Opera")) || (hb() ? 0 : B("Edge")) || (hb() ? gb("Microsoft Edge") : B("Edg/")) || hb() && gb("Opera"));
        var Lb = null
          , Nb = function(a) {
            var b = [];
            Mb(a, function(c) {
                b.push(c)
            });
            return b
        }
          , Mb = function(a, b) {
            function c(k) {
                for (; d < a.length; ) {
                    var m = a.charAt(d++)
                      , p = Lb[m];
                    if (null != p)
                        return p;
                    if (!/^[\s\xa0]*$/.test(m))
                        throw Error("Unknown base64 encoding at char: " + m);
                }
                return k
            }
            Ob();
            for (var d = 0; ; ) {
                var e = c(-1)
                  , f = c(0)
                  , g = c(64)
                  , h = c(64);
                if (64 === h && -1 === e)
                    break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2),
                64 != h && b(g << 6 & 192 | h))
            }
        }
          , Ob = function() {
            if (!Lb) {
                Lb = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                    for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                        var f = d[e]
                          , g = Lb[f];
                        void 0 === g ? Lb[f] = e : y(g === e)
                    }
            }
        };
        y(!0);
        var Pb = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;
        y(8 === Math.log2(256));
        y(9 === Math.log2(Math.max.apply(Math, ja(Object.values({
            al: 1,
            Zk: 2,
            Yk: 4,
            cl: 8,
            bl: 16,
            Ok: 32,
            il: 64,
            Vk: 128,
            Uk: 256,
            Xk: 512
        })))));
        var Qb = Object.getOwnPropertyDescriptor(Array.prototype, "Hj");
        Object.defineProperties(Array.prototype, {
            Hj: {
                get: function() {
                    function a(e, f) {
                        e & b && c.push(f)
                    }
                    var b = Rb(this)
                      , c = [];
                    a(1, "IS_REPEATED_FIELD");
                    a(2, "IS_IMMUTABLE_ARRAY");
                    a(4, "IS_API_FORMATTED");
                    a(8, "ONLY_MUTABLE_VALUES");
                    a(16, "MUTABLE_REFERENCES_ARE_OWNED");
                    a(32, "CONSTRUCTED");
                    a(64, "TRANSFERRED");
                    a(128, "HAS_SPARSE_OBJECT");
                    a(256, "HAS_MESSAGE_ID");
                    a(512, "IMMUTABLE_CACHED_VALUE_IS_CLEAN");
                    var d = Sb(b);
                    536870912 !== d && c.push("pivot: " + d);
                    d = c.join(",");
                    return Qb ? Qb.get.call(this) + "|" + d : d
                },
                configurable: !0,
                enumerable: !1
            }
        });
        var Rb = Pb ? function(a) {
            Ma(a, "state is only maintained on arrays.");
            return a[Pb] | 0
        }
        : function(a) {
            Ma(a, "state is only maintained on arrays.");
            return a.ml | 0
        }
        ;
        function Sb(a) {
            a = a >> 10 & 1023;
            return 0 === a ? 536870912 : a
        }
        ;var Tb = function() {
            throw Error("please construct maps as mutable then call toImmutable");
        };
        if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
            var Ub = function() {
                throw Error("Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information");
            }
              , Vb = {};
            Object.defineProperties(Tb, (Vb[Symbol.hasInstance] = {
                value: Ub,
                configurable: !1,
                writable: !1,
                enumerable: !1
            },
            Vb));
            y(Tb[Symbol.hasInstance] === Ub, "defineProperties did not work: was it monkey-patched?")
        }
        ;if ("undefined" !== typeof Proxy) {
            var Xb = Wb;
            new Proxy({},{
                getPrototypeOf: Xb,
                setPrototypeOf: Xb,
                isExtensible: Xb,
                preventExtensions: Xb,
                getOwnPropertyDescriptor: Xb,
                defineProperty: Xb,
                has: Xb,
                get: Xb,
                set: Xb,
                deleteProperty: Xb,
                apply: Xb,
                construct: Xb
            })
        }
        function Wb() {
            throw Error("this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array");
            throw Error();
        }
        ;function Yb() {}
        ;(function() {
            var a = u.jspbGetTypeName;
            u.jspbGetTypeName = a ? function(b) {
                return a(b) || void 0
            }
            : Yb
        }
        )();
        /*
     SPDX-License-Identifier: Apache-2.0 */
        var Zb = "key";
        var $b = !1
          , ac = !1;
        function bc(a) {
            if (!a)
                throw Error("Expected value to be defined");
            return a
        }
        function cc(a) {
            var b = $b;
            $b = a;
            return b
        }
        function dc(a) {
            var b = ac;
            ac = a;
            return b
        }
        ;var ec = Object.prototype.hasOwnProperty;
        function fc() {}
        fc.prototype = Object.create(null);
        function gc(a, b, c) {
            bc("style"in a);
            a = a.style;
            if ("string" === typeof c)
                a.cssText = c;
            else {
                a.cssText = "";
                for (var d in c)
                    ec.call(c, d) && (b = c[d],
                    0 <= d.indexOf("-") ? a.setProperty(d, b) : a[d] = b)
            }
        }
        function hc(a, b, c) {
            var d = typeof c;
            "object" === d || "function" === d ? a[b] = c : null == c ? a.removeAttribute(b) : (d = 0 === b.lastIndexOf("xml:", 0) ? "http://www.w3.org/XML/1998/namespace" : 0 === b.lastIndexOf("xlink:", 0) ? "http://www.w3.org/1999/xlink" : null) ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)
        }
        function ic() {
            var a = new fc;
            a.__default = hc;
            a.style = gc;
            return a
        }
        ic();
        var jc = function(a) {
            this.Xi = [];
            this.node = a
        };
        var kc = "undefined" !== typeof Node && Node.prototype.getRootNode || function() {
            for (var a = this, b = a; a; )
                b = a,
                a = a.parentNode;
            return b
        }
        ;
        function lc(a) {
            var b = mc;
            var c = kc.call(a);
            if ((c = 11 === c.nodeType || 9 === c.nodeType ? c.activeElement : null) && a.contains(c))
                for (a = []; c !== b; )
                    c = bc(c),
                    a.push(c),
                    c = c.parentNode || (b ? c.host : null)
        }
        ;var nc = function(a) {
            this.Fg = null;
            this.key = a;
            this.text = void 0
        };
        var oc = null
          , pc = null
          , mc = null;
        function qc(a, b) {
            b = void 0 === b ? {} : b;
            var c = void 0 === b.Wh ? !1 : b.Wh;
            return function(d, e, f) {
                var g = oc
                  , h = pc
                  , k = mc
                  , m = !1
                  , p = !1;
                oc = new jc(d);
                pc = null;
                mc = d.parentNode;
                lc(d);
                m = function(t) {
                    return t.data.startsWith("?child-node-part") || t.data.startsWith("?node-part") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                }
                ;
                m.acceptNode = m;
                c && document.createTreeWalker(d, NodeFilter.SHOW_COMMENT, m, !1);
                m = cc(!1);
                p = dc(!1);
                try {
                    var r = a(d, e, f);
                    if ($b)
                        throw Error("elementOpenEnd() must be called after calling elementOpenStart().");
                    return r
                } finally {
                    oc = g,
                    pc = h,
                    mc = k,
                    cc(m),
                    dc(p)
                }
            }
        }
        ;var rc = ic();
        var sc = function(a, b) {
            if (!v(a) || !v(a) || !v(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI || a.tagName.toUpperCase() !== b.toString()) {
                b = b.toString() + "; got: ";
                if (v(a))
                    try {
                        var c = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
                    } catch (d) {
                        c = "<object could not be stringified>"
                    }
                else
                    c = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
                Ia("Argument is not an HTML Element with tag name " + (b + c))
            }
        };
        var tc = function() {}
          , uc = function(a) {
            return "function" === typeof a
        };
        function vc(a, b) {
            for (var c in a)
                b.call(void 0, a[c], c, a)
        }
        function wc(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a))
                    return !0;
            return !1
        }
        function xc(a) {
            for (var b in a)
                return !1;
            return !0
        }
        function yc(a) {
            var b = {}, c;
            for (c in a)
                b[c] = a[c];
            return b
        }
        var zc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        function Ac(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d)
                    a[c] = d[c];
                for (var f = 0; f < zc.length; f++)
                    c = zc[f],
                    Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        }
        ;var Bc, Cc = function() {
            if (void 0 === Bc) {
                var a = null
                  , b = u.trustedTypes;
                if (b && b.createPolicy)
                    try {
                        a = b.createPolicy("goog#html", {
                            createHTML: Ca,
                            createScript: Ca,
                            createScriptURL: Ca
                        })
                    } catch (c) {
                        u.console && u.console.error(c.message)
                    }
                Bc = a
            }
            return Bc
        };
        var Fc = function(a, b) {
            this.zg = a === Dc && b || "";
            this.Ni = Ec
        };
        Fc.prototype.bb = !0;
        Fc.prototype.Ra = function() {
            return this.zg
        }
        ;
        Fc.prototype.toString = function() {
            return "Const{" + this.zg + "}"
        }
        ;
        var Gc = function(a) {
            if (a instanceof Fc && a.constructor === Fc && a.Ni === Ec)
                return a.zg;
            Ia("expected object of type Const, got '" + a + "'");
            return "type_error:Const"
        }
          , Hc = function(a) {
            return new Fc(Dc,a)
        }
          , Ec = {}
          , Dc = {};
        var Jc = function(a, b) {
            if (b !== Ic)
                throw Error("TrustedResourceUrl is not meant to be built directly");
            this.hg = a
        };
        Jc.prototype.toString = function() {
            return this.hg + ""
        }
        ;
        Jc.prototype.bb = !0;
        Jc.prototype.Ra = function() {
            return this.hg.toString()
        }
        ;
        var Kc = function(a) {
            if (a instanceof Jc && a.constructor === Jc)
                return a.hg;
            Ia("expected object of type TrustedResourceUrl, got '" + a + "' of type " + xa(a));
            return "type_error:TrustedResourceUrl"
        }
          , Oc = function(a, b) {
            var c = Gc(a);
            if (!Lc.test(c))
                throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(Mc, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e))
                    throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof Fc ? Gc(d) : encodeURIComponent(String(d))
            });
            return Nc(a)
        }
          , Mc = /%{(\w+)}/g
          , Lc = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i")
          , Ic = {}
          , Nc = function(a) {
            var b = Cc();
            a = b ? b.createScriptURL(a) : a;
            return new Jc(a,Ic)
        };
        var D = function(a, b) {
            if (b !== Pc)
                throw Error("SafeUrl is not meant to be built directly");
            this.gg = a
        };
        D.prototype.toString = function() {
            return this.gg.toString()
        }
        ;
        D.prototype.bb = !0;
        D.prototype.Ra = function() {
            return this.gg.toString()
        }
        ;
        var Qc = function(a) {
            if (a instanceof D && a.constructor === D)
                return a.gg;
            Ia("expected object of type SafeUrl, got '" + a + "' of type " + xa(a));
            return "type_error:SafeUrl"
        }, Rc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i, Sc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, Tc = function(a) {
            if (a instanceof D)
                return a;
            a = "object" == typeof a && a.bb ? a.Ra() : String(a);
            Sc.test(a) ? a = new D(a,Pc) : (a = String(a).replace(/(%0A|%0D)/g, ""),
            a = a.match(Rc) ? new D(a,Pc) : null);
            return a
        }, Uc;
        try {
            new URL("s://g"),
            Uc = !0
        } catch (a) {
            Uc = !1
        }
        var Vc = Uc
          , Wc = function(a) {
            if (a instanceof D)
                return a;
            a = "object" == typeof a && a.bb ? a.Ra() : String(a);
            a: {
                var b = a;
                if (Vc) {
                    try {
                        var c = new URL(b)
                    } catch (d) {
                        b = "https:";
                        break a
                    }
                    b = c.protocol
                } else
                    b: {
                        c = document.createElement("a");
                        try {
                            c.href = b
                        } catch (d) {
                            b = void 0;
                            break b
                        }
                        b = c.protocol;
                        b = ":" === b || "" === b ? "https:" : b
                    }
            }
            y("javascript:" !== b, "%s is a javascript: URL", a) || (a = "about:invalid#zClosurez");
            return new D(a,Pc)
        }
          , Pc = {}
          , Xc = new D("about:invalid#zClosurez",Pc);
        new D("about:blank",Pc);
        var Yc = {}
          , Zc = function() {
            if (Yc !== Yc)
                throw Error("SafeStyle is not meant to be built directly");
            this.Yh = "";
            this.bb = !0
        };
        Zc.prototype.Ra = function() {
            return this.Yh
        }
        ;
        Zc.prototype.toString = function() {
            return this.Yh.toString()
        }
        ;
        new Zc;
        var $c = {}
          , ad = function(a, b) {
            if (b !== $c)
                throw Error("SafeStyleSheet is not meant to be built directly");
            this.fg = a;
            this.bb = !0
        };
        ad.prototype.toString = function() {
            return this.fg.toString()
        }
        ;
        ad.prototype.Ra = function() {
            return this.fg
        }
        ;
        var bd = new ad("",$c);
        var cd = {}
          , dd = function(a, b) {
            if (b !== cd)
                throw Error("SafeHtml is not meant to be built directly");
            this.eg = a;
            this.bb = !0
        };
        dd.prototype.Ra = function() {
            return this.eg.toString()
        }
        ;
        dd.prototype.toString = function() {
            return this.eg.toString()
        }
        ;
        var ed = function(a) {
            if (a instanceof dd && a.constructor === dd)
                return a.eg;
            Ia("expected object of type SafeHtml, got '" + a + "' of type " + xa(a));
            return "type_error:SafeHtml"
        }
          , gd = function(a) {
            return a instanceof dd ? a : fd(Xa("object" == typeof a && a.bb ? a.Ra() : String(a)))
        }
          , fd = function(a) {
            var b = Cc();
            a = b ? b.createHTML(a) : a;
            return new dd(a,cd)
        }
          , hd = new dd(u.trustedTypes && u.trustedTypes.emptyHTML || "",cd);
        var id = function(a, b) {
            Ka(Gc(a), "must provide justification");
            y(!/^[\s\xa0]*$/.test(Gc(a)), "must provide non-empty justification");
            return fd(b)
        };
        var jd = function(a) {
            var b = !1, c;
            return function() {
                b || (c = a(),
                b = !0);
                return c
            }
        }(function() {
            if ("undefined" === typeof document)
                return !1;
            var a = document.createElement("div")
              , b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            if (!a.firstChild)
                return !1;
            b = a.firstChild.firstChild;
            a.innerHTML = ed(hd);
            return !b.parentElement
        })
          , ld = function(a, b) {
            sc(a, "SCRIPT");
            var c = kd("script[nonce]", a.ownerDocument && a.ownerDocument.defaultView);
            c && a.setAttribute("nonce", c);
            a.src = Kc(b)
        }
          , md = function(a, b, c, d) {
            a = a instanceof D ? a : Wc(a);
            b = b || u;
            c = c instanceof Fc ? Gc(c) : c || "";
            return void 0 !== d ? b.open(Qc(a), c, d) : b.open(Qc(a), c)
        }
          , nd = /^[\w+/_-]+[=]{0,2}$/
          , kd = function(a, b) {
            b = (b || u).document;
            return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && nd.test(a) ? a : "" : ""
        };
        var od = function(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
                d += c.shift() + e.shift();
            return d + c.join("%s")
        };
        var pd = function(a) {
            if (a.qb && "function" == typeof a.qb)
                return a.qb();
            if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set)
                return Array.from(a.values());
            if ("string" === typeof a)
                return a.split("");
            if (ya(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++)
                    b.push(a[d]);
                return b
            }
            b = [];
            c = 0;
            for (d in a)
                b[c++] = a[d];
            return b
        }
          , qd = function(a) {
            if (a.ae && "function" == typeof a.ae)
                return a.ae();
            if (!a.qb || "function" != typeof a.qb) {
                if ("undefined" !== typeof Map && a instanceof Map)
                    return Array.from(a.keys());
                if (!("undefined" !== typeof Set && a instanceof Set)) {
                    if (ya(a) || "string" === typeof a) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++)
                            b.push(c);
                        return b
                    }
                    b = [];
                    c = 0;
                    for (var d in a)
                        b[c++] = d;
                    return b
                }
            }
        }
          , rd = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach)
                a.forEach(b, c);
            else if (ya(a) || "string" === typeof a)
                Array.prototype.forEach.call(a, b, c);
            else
                for (var d = qd(a), e = pd(a), f = e.length, g = 0; g < f; g++)
                    b.call(c, e[g], d && d[g], a)
        };
        var sd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
          , td = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("=")
                      , e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else
                        f = a[c];
                    b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        };
        var ud = function(a) {
            this.ga = this.Yb = this.ta = "";
            this.Ua = null;
            this.kc = this.fb = "";
            this.Aa = this.Gj = !1;
            if (a instanceof ud) {
                this.Aa = a.Aa;
                vd(this, a.ta);
                var b = a.Yb;
                wd(this);
                this.Yb = b;
                xd(this, a.ga);
                yd(this, a.Ua);
                zd(this, a.fb);
                Ad(this, a.xa.clone());
                Bd(this, a.kc)
            } else
                a && (b = String(a).match(sd)) ? (this.Aa = !1,
                vd(this, b[1] || "", !0),
                a = b[2] || "",
                wd(this),
                this.Yb = Cd(a),
                xd(this, b[3] || "", !0),
                yd(this, b[4]),
                zd(this, b[5] || "", !0),
                Ad(this, b[6] || "", !0),
                Bd(this, b[7] || "", !0)) : (this.Aa = !1,
                this.xa = new Dd(null,this.Aa))
        };
        ud.prototype.toString = function() {
            var a = []
              , b = this.ta;
            b && a.push(Ed(b, Fd, !0), ":");
            var c = this.ga;
            if (c || "file" == b)
                a.push("//"),
                (b = this.Yb) && a.push(Ed(b, Fd, !0), "@"),
                a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                c = this.Ua,
                null != c && a.push(":", String(c));
            if (c = this.fb)
                this.ga && "/" != c.charAt(0) && a.push("/"),
                a.push(Ed(c, "/" == c.charAt(0) ? Gd : Hd, !0));
            (c = this.xa.toString()) && a.push("?", c);
            (c = this.kc) && a.push("#", Ed(c, Id));
            return a.join("")
        }
        ;
        ud.prototype.resolve = function(a) {
            var b = this.clone()
              , c = !!a.ta;
            c ? vd(b, a.ta) : c = !!a.Yb;
            if (c) {
                var d = a.Yb;
                wd(b);
                b.Yb = d
            } else
                c = !!a.ga;
            c ? xd(b, a.ga) : c = null != a.Ua;
            d = a.fb;
            if (c)
                yd(b, a.Ua);
            else if (c = !!a.fb) {
                if ("/" != d.charAt(0))
                    if (this.ga && !this.fb)
                        d = "/" + d;
                    else {
                        var e = b.fb.lastIndexOf("/");
                        -1 != e && (d = b.fb.slice(0, e + 1) + d)
                    }
                e = d;
                if (".." == e || "." == e)
                    d = "";
                else if (A(e, "./") || A(e, "/.")) {
                    d = 0 == e.lastIndexOf("/", 0);
                    e = e.split("/");
                    for (var f = [], g = 0; g < e.length; ) {
                        var h = e[g++];
                        "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                        d && g == e.length && f.push("")) : (f.push(h),
                        d = !0)
                    }
                    d = f.join("/")
                } else
                    d = e
            }
            c ? zd(b, d) : c = "" !== a.xa.toString();
            c ? Ad(b, a.xa.clone()) : c = !!a.kc;
            c && Bd(b, a.kc);
            return b
        }
        ;
        ud.prototype.clone = function() {
            return new ud(this)
        }
        ;
        var vd = function(a, b, c) {
            wd(a);
            a.ta = c ? Cd(b, !0) : b;
            a.ta && (a.ta = a.ta.replace(/:$/, ""))
        }
          , xd = function(a, b, c) {
            wd(a);
            a.ga = c ? Cd(b, !0) : b
        }
          , yd = function(a, b) {
            wd(a);
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b)
                    throw Error("Bad port number " + b);
                a.Ua = b
            } else
                a.Ua = null
        }
          , zd = function(a, b, c) {
            wd(a);
            a.fb = c ? Cd(b, !0) : b;
            return a
        }
          , Ad = function(a, b, c) {
            wd(a);
            b instanceof Dd ? (a.xa = b,
            a.xa.tg(a.Aa)) : (c || (b = Ed(b, Jd)),
            a.xa = new Dd(b,a.Aa));
            return a
        };
        ud.prototype.getQuery = function() {
            return this.xa.toString()
        }
        ;
        var E = function(a, b, c) {
            wd(a);
            a.xa.set(b, c)
        }
          , F = function(a, b) {
            return a.xa.get(b)
        }
          , Bd = function(a, b, c) {
            wd(a);
            a.kc = c ? Cd(b) : b;
            return a
        };
        ud.prototype.removeParameter = function(a) {
            wd(this);
            this.xa.remove(a);
            return this
        }
        ;
        var wd = function(a) {
            if (a.Gj)
                throw Error("Tried to modify a read-only Uri");
        };
        ud.prototype.tg = function(a) {
            this.Aa = a;
            this.xa && this.xa.tg(a)
        }
        ;
        var G = function(a) {
            return a instanceof ud ? a.clone() : new ud(a)
        }
          , Kd = function(a, b, c, d, e, f) {
            var g = new ud(null);
            a && vd(g, a);
            b && xd(g, b);
            c && yd(g, c);
            d && zd(g, d);
            e && Ad(g, e);
            f && Bd(g, f);
            return g
        }
          , Cd = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        }
          , Ed = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, Ld),
            c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            a) : null
        }
          , Ld = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }
          , Fd = /[#\/\?@]/g
          , Hd = /[#\?:]/g
          , Gd = /[#\?]/g
          , Jd = /[#\?@]/g
          , Id = /#/g
          , Dd = function(a, b) {
            this.ea = this.K = null;
            this.ua = a || null;
            this.Aa = !!b
        }
          , Md = function(a) {
            a.K || (a.K = new Map,
            a.ea = 0,
            a.ua && td(a.ua, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        }
          , Od = function(a) {
            var b = qd(a);
            if ("undefined" == typeof b)
                throw Error("Keys are undefined");
            var c = new Dd(null);
            a = pd(a);
            for (var d = 0; d < b.length; d++) {
                var e = b[d]
                  , f = a[d];
                Array.isArray(f) ? Nd(c, e, f) : c.add(e, f)
            }
            return c
        };
        l = Dd.prototype;
        l.add = function(a, b) {
            Md(this);
            this.ua = null;
            a = this.va(a);
            var c = this.K.get(a);
            c || this.K.set(a, c = []);
            c.push(b);
            this.ea = Ja(this.ea) + 1;
            return this
        }
        ;
        l.remove = function(a) {
            Md(this);
            a = this.va(a);
            return this.K.has(a) ? (this.ua = null,
            this.ea = Ja(this.ea) - this.K.get(a).length,
            this.K.delete(a)) : !1
        }
        ;
        l.clear = function() {
            this.K = this.ua = null;
            this.ea = 0
        }
        ;
        l.Ch = function() {
            Md(this);
            return 0 == this.ea
        }
        ;
        l.Pc = function(a) {
            Md(this);
            a = this.va(a);
            return this.K.has(a)
        }
        ;
        l.forEach = function(a, b) {
            Md(this);
            this.K.forEach(function(c, d) {
                c.forEach(function(e) {
                    a.call(b, e, d, this)
                }, this)
            }, this)
        }
        ;
        l.ae = function() {
            Md(this);
            for (var a = Array.from(this.K.values()), b = Array.from(this.K.keys()), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], f = 0; f < e.length; f++)
                    c.push(b[d]);
            return c
        }
        ;
        l.qb = function(a) {
            Md(this);
            var b = [];
            if ("string" === typeof a)
                this.Pc(a) && (b = b.concat(this.K.get(this.va(a))));
            else {
                a = Array.from(this.K.values());
                for (var c = 0; c < a.length; c++)
                    b = b.concat(a[c])
            }
            return b
        }
        ;
        l.set = function(a, b) {
            Md(this);
            this.ua = null;
            a = this.va(a);
            this.Pc(a) && (this.ea = Ja(this.ea) - this.K.get(a).length);
            this.K.set(a, [b]);
            this.ea = Ja(this.ea) + 1;
            return this
        }
        ;
        l.get = function(a, b) {
            if (!a)
                return b;
            a = this.qb(a);
            return 0 < a.length ? String(a[0]) : b
        }
        ;
        var Nd = function(a, b, c) {
            a.remove(b);
            0 < c.length && (a.ua = null,
            a.K.set(a.va(b), ub(c)),
            a.ea = Ja(a.ea) + c.length)
        };
        l = Dd.prototype;
        l.toString = function() {
            if (this.ua)
                return this.ua;
            if (!this.K)
                return "";
            for (var a = [], b = Array.from(this.K.keys()), c = 0; c < b.length; c++) {
                var d = b[c]
                  , e = encodeURIComponent(String(d));
                d = this.qb(d);
                for (var f = 0; f < d.length; f++) {
                    var g = e;
                    "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                    a.push(g)
                }
            }
            return this.ua = a.join("&")
        }
        ;
        l.clone = function() {
            var a = new Dd;
            a.ua = this.ua;
            this.K && (a.K = new Map(this.K),
            a.ea = this.ea);
            return a
        }
        ;
        l.va = function(a) {
            a = String(a);
            this.Aa && (a = a.toLowerCase());
            return a
        }
        ;
        l.tg = function(a) {
            a && !this.Aa && (Md(this),
            this.ua = null,
            this.K.forEach(function(b, c) {
                var d = c.toLowerCase();
                c != d && (this.remove(c),
                Nd(this, d, b))
            }, this));
            this.Aa = a
        }
        ;
        l.extend = function(a) {
            for (var b = 0; b < arguments.length; b++)
                rd(arguments[b], function(c, d) {
                    this.add(d, c)
                }, this)
        }
        ;
        /*
    
     SPDX-License-Identifier: Apache-2.0
    */
        var Pd = "src srcdoc codebase data href rel action formaction sandbox cite poster icon".split(" ");
        var Qd = {};
        var Rd = function() {}
          , Sd = function(a, b) {
            if (b !== Qd)
                throw Error("Bad secret");
            this.Wj = a
        };
        q(Sd, Rd);
        Sd.prototype.toString = function() {
            return this.Wj
        }
        ;
        var Td = ha([""])
          , Ud = -1 === function() {
            return ""
        }
        .toString().indexOf("`");
        var Vd = Object.freeze || function(a) {
            return a
        }
        ;
        var Wd = function(a, b) {
            this.name = a;
            this.value = b
        };
        Wd.prototype.toString = function() {
            return this.name
        }
        ;
        var Xd = new Wd("OFF",Infinity), Yd = new Wd("SEVERE",1E3), Zd = new Wd("WARNING",900), $d = new Wd("CONFIG",700), ae = new Wd("FINE",500), be = function() {
            this.Rd = 0;
            this.clear()
        }, ce;
        be.prototype.clear = function() {
            this.Mg = Array(this.Rd);
            this.ah = -1;
            this.Dh = !1
        }
        ;
        var de = function(a, b, c) {
            this.reset(a || Xd, b, c, void 0, void 0)
        };
        de.prototype.reset = function() {}
        ;
        var ee = function(a, b) {
            this.level = null;
            this.vj = [];
            this.parent = (void 0 === b ? null : b) || null;
            this.children = [];
            this.Pf = {
                getName: function() {
                    return a
                }
            }
        }, fe = function(a) {
            if (a.level)
                return a.level;
            if (a.parent)
                return fe(a.parent);
            Ia("Root logger has no level set.");
            return Xd
        }, ge = function(a, b) {
            for (; a; )
                a.vj.forEach(function(c) {
                    c(b)
                }),
                a = a.parent
        }, he = function() {
            this.entries = {};
            var a = new ee("");
            a.level = $d;
            this.entries[""] = a
        }, ie, je = function(a, b) {
            var c = a.entries[b];
            if (c)
                return c;
            c = je(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
            var d = new ee(b,c);
            a.entries[b] = d;
            c.children.push(d);
            return d
        }, ke = function() {
            ie || (ie = new he);
            return ie
        }, le = function(a, b, c) {
            var d;
            if (d = a)
                if (d = a && b) {
                    d = b.value;
                    var e = a ? fe(je(ke(), a.getName())) : Xd;
                    d = d >= e.value
                }
            if (d) {
                b = b || Xd;
                d = je(ke(), a.getName());
                "function" === typeof c && (c = c());
                ce || (ce = new be);
                e = ce;
                a = a.getName();
                if (0 < e.Rd) {
                    var f = (e.ah + 1) % e.Rd;
                    e.ah = f;
                    e.Dh ? (e = e.Mg[f],
                    e.reset(b, c, a),
                    a = e) : (e.Dh = f == e.Rd - 1,
                    a = e.Mg[f] = new de(b,c,a))
                } else
                    a = new de(b,c,a);
                ge(d, a)
            }
        }, me = function(a, b) {
            a && le(a, Yd, b)
        }, ne = function(a, b) {
            a && le(a, ae, b)
        };
        var oe = []
          , pe = function(a) {
            var b = je(ke(), "safevalues").Pf;
            b && le(b, Zd, "A URL with content '" + a + "' was sanitized away.")
        };
        -1 === oe.indexOf(pe) && oe.push(pe);
        var qe = {
            ql: !0
        }
          , re = function() {
            throw Error("Do not instantiate directly");
        };
        re.prototype.Vg = null;
        re.prototype.toString = function() {
            return this.content
        }
        ;
        re.prototype.yi = function() {
            if (this.Wg !== qe)
                throw Error("Sanitized content was not of kind HTML.");
            return id(Hc("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), this.toString())
        }
        ;
        var se = function() {
            re.call(this)
        };
        x(se, re);
        se.prototype.Wg = qe;
        var te = function(a) {
            var b = null != a && a.Wg === qe;
            b && y(a.constructor === se);
            return b
        };
        var ue = function(a) {
            if (null != a)
                switch (a.Vg) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
                }
            return null
        }
          , ye = function(a) {
            return te(a) ? a : a instanceof dd ? ve(ed(a).toString()) : a instanceof dd ? ve(ed(a).toString()) : ve(String(String(a)).replace(we, xe), ue(a))
        }
          , ve = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.Vg = d);
                return c
            }
        }(se)
          , Ae = {}
          , H = function(a) {
            if (te(a)) {
                var b = String;
                a = String(a.content).replace(Be, "").replace(Ce, "&lt;");
                b = b(a).replace(De, xe)
            } else
                b = String(a).replace(we, xe);
            return b
        }
          , Ee = function(a, b, c, d) {
            a || (a = c instanceof Function ? c.displayName || c.name || "unknown type name" : c instanceof Object ? c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) : null === c ? "null" : typeof c,
            Ia("expected @param " + b + " of type " + d + ", but got " + a + "."),
            Ia("parameter type error. Enable DEBUG to see details."));
            return c
        }
          , Fe = {}
          , Ge = function() {
            y(Fe === Fe, "found an incorrect call marker, was an internal function called from the top level?")
        }
          , He = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        }
          , xe = function(a) {
            return He[a]
        }
          , we = /[\x00\x22\x26\x27\x3c\x3e]/g
          , De = /[\x00\x22\x27\x3c\x3e]/g
          , Be = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
          , Ce = /</g;
        var Ie = ha(["data-soyloggingfunction-"]);
        (function(a) {
            if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !Ud && a === a.raw || !(Ud && (!Object.isFrozen(Td) || !Object.isFrozen(Td.raw)) || Object.isFrozen(a) && Object.isFrozen(a.raw)) || 1 !== a.length)
                throw new TypeError("\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################");
            var b = a[0].toLowerCase();
            if (0 === b.indexOf("on") || 0 === "on".indexOf(b))
                throw Error("Prefix '" + a[0] + "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers.");
            Pd.forEach(function(c) {
                if (0 === c.indexOf(b))
                    throw Error("Prefix '" + a[0] + "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" + (c + "'. Please use native or safe DOM APIs to set the attribute."));
            });
            return new Sd(b,Qd)
        }
        )(Ie);
        var Je = {
            matches: function(a, b, c, d, e) {
                return b === c && (d == e ? !0 : "string" === typeof d && "string" === typeof e ? d.startsWith(e) || e.startsWith(d) : !1)
            }
        };
        (function(a) {
            return qc(function(b, c, d) {
                var e = {
                    nextSibling: b
                };
                var f = b.nextSibling;
                var g = b.previousSibling;
                pc = e;
                c(d);
                if (b.__incrementalDOMData)
                    c = b.__incrementalDOMData;
                else if (c = Zb,
                c = 1 === b.nodeType && null != c ? b.getAttribute(c) : null,
                c = new nc(1 === b.nodeType ? c || void 0 : null),
                b.__incrementalDOMData = c,
                1 === b.nodeType) {
                    d = b.attributes;
                    var h = d.length;
                    if (h) {
                        var k;
                        if (!(k = c.Fg)) {
                            for (k = Array(2 * h); 0 < k.length; )
                                k.pop();
                            k = c.Fg = k
                        }
                        for (var m = 0, p = 0; m < h; m += 1,
                        p += 2) {
                            var r = d[m]
                              , t = r.value;
                            k[p] = r.name;
                            k[p + 1] = t
                        }
                    }
                }
                c.key && (mc || console.warn("patchOuter requires the node have a parent if there is a key."));
                d = pc;
                c = bc(e);
                d = bc(d);
                h = d.nextSibling === c.nextSibling && d.previousSibling === g;
                if (!(d.nextSibling === f && d.previousSibling === g || h || d === c))
                    throw Error("There must be exactly one top level call corresponding to the patched element.");
                if (mc)
                    for (b = b.nextSibling,
                    f = mc,
                    g = pc ? pc.nextSibling : mc.firstChild; g !== b; )
                        c = g.nextSibling,
                        f.removeChild(g),
                        oc.Xi.push(g),
                        g = c;
                return e === pc ? null : pc
            }, a)
        }
        )(Je);
        Object.assign({}, {
            yj: !0
        }, Je);
        Object.assign({}, {
            yj: !0,
            Wh: !0
        }, Je);
        try {
            (new self.OffscreenCanvas(0,0)).getContext("2d")
        } catch (a) {}
        ;var Ke = function(a) {
            var b = document;
            return "string" === typeof a ? b.getElementById(a) : a
        }
          , Me = function(a, b) {
            vc(b, function(c, d) {
                c && "object" == typeof c && c.bb && (c = c.Ra());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Le.hasOwnProperty(d) ? a.setAttribute(Le[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        }
          , Le = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        }
          , Oe = function(a, b, c) {
            return Ne(document, arguments)
        }
          , Ne = function(a, b) {
            var c = b[1]
              , d = Pe(a, String(b[0]));
            c && ("string" === typeof c ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : Me(d, c));
            2 < b.length && Qe(a, d, b, 2);
            return d
        }
          , Qe = function(a, b, c, d) {
            function e(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!ya(f) || v(f) && 0 < f.nodeType)
                    e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (v(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    C(g ? ub(f) : f, e)
                }
            }
        }
          , Pe = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        }
          , Re = function(a, b) {
            y(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
            a.appendChild(b)
        }
          , Se = function(a) {
            for (var b; b = a.firstChild; )
                a.removeChild(b)
        }
          , Te = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        }
          , Ue = function() {
            var a = document.body;
            if (void 0 !== a.lastElementChild)
                a = a.lastElementChild;
            else
                for (a = a.lastChild; a && 1 != a.nodeType; )
                    a = a.previousSibling;
            return a
        }
          , Ve = function(a) {
            y(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }
          , We = function(a, b) {
            y(null != a, "goog.dom.setTextContent expects a non-null value for node");
            if ("textContent"in a)
                a.textContent = b;
            else if (3 == a.nodeType)
                a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild; )
                    a.removeChild(y(a.lastChild));
                a.firstChild.data = String(b)
            } else {
                Se(a);
                var c = Ve(a);
                a.appendChild(c.createTextNode(String(b)))
            }
        }
          , Xe = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        }
          , Ye = {
            IMG: " ",
            BR: "\n"
        }
          , $e = function(a) {
            var b = [];
            Ze(a, b, !0);
            a = b.join("");
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            a = a.replace(/ +/g, " ");
            " " != a && (a = a.replace(/^\s*/, ""));
            return a
        }
          , Ze = function(a, b, c) {
            if (!(a.nodeName in Xe))
                if (3 == a.nodeType)
                    c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in Ye)
                    b.push(Ye[a.nodeName]);
                else
                    for (a = a.firstChild; a; )
                        Ze(a, b, c),
                        a = a.nextSibling
        }
          , af = function(a) {
            this.Qa = a || u.document || document
        };
        af.prototype.getElementsByTagName = function(a, b) {
            return (b || this.Qa).getElementsByTagName(String(a))
        }
        ;
        var bf = function(a, b) {
            a = a.Qa;
            b = b && "*" != b ? String(b).toUpperCase() : "";
            b = a.querySelectorAll && a.querySelector && b ? a.querySelectorAll(b + "") : a.getElementsByTagName(b || "*");
            return b
        };
        l = af.prototype;
        l.Yg = function(a, b, c) {
            return Ne(this.Qa, arguments)
        }
        ;
        l.createElement = function(a) {
            return Pe(this.Qa, a)
        }
        ;
        l.createTextNode = function(a) {
            return this.Qa.createTextNode(String(a))
        }
        ;
        l.getWindow = function() {
            var a = this.Qa;
            return a.parentWindow || a.defaultView
        }
        ;
        l.appendChild = Re;
        l.append = function(a, b) {
            Qe(Ve(a), a, arguments, 1)
        }
        ;
        l.canHaveChildren = function(a) {
            if (1 != a.nodeType)
                return !1;
            switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
            }
            return !0
        }
        ;
        l.removeNode = Te;
        l.contains = function(a, b) {
            if (!a || !b)
                return !1;
            if (a.contains && 1 == b.nodeType)
                return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition)
                return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b; )
                b = b.parentNode;
            return b == a
        }
        ;
        /*
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
        var cf = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i
          , df = {};
        rc.checked = function(a, b, c) {
            null == c ? (a.removeAttribute("checked"),
            a.checked = !1) : (a.setAttribute("checked", String(c)),
            a.checked = !(!1 === c || "false" === c))
        }
        ;
        rc.value = function(a, b, c) {
            null == c ? (a.removeAttribute("value"),
            a.value = "") : (a.setAttribute("value", String(c)),
            a.value = String(c))
        }
        ;
        Zb = "ssk";
        var ef = function(a, b) {
            return Ae["fireauth.oauthhelper.ui.soy.pendingScreen"] ? Ae["fireauth.oauthhelper.ui.soy.pendingScreen"](a, b) : ve('<div id="pending-screen"><div id="progressBar" class="' + H("mdl-progress") + " " + H("mdl-js-progress") + " " + H("mdl-progress__indeterminate") + " " + H("firebase-progress-bar") + '"></div></div>')
        }
          , ff = function(a, b) {
            a = a || {};
            a = a.appName;
            Ge();
            Ae["fireauth.oauthhelper.ui.soy.continueScreen"] ? b = Ae["fireauth.oauthhelper.ui.soy.continueScreen"]({
                appName: a
            }, b) : (a = Ee(null == a || "string" === typeof a, "appName", a, "null|string|undefined"),
            b = '<div id="continue-screen" class="' + H("mdl-card") + " " + H("mdl-shadow--2dp") + " " + H("firebase-container") + '"><button id="continue" class="' + H("mdl-button") + " " + H("mdl-button--raised") + " " + H("mdl-button--colored") + '">',
            a ? (a = "Continue to " + ye(a),
            b += a) : b += "Continue to the app",
            b = ve(b + "</button></div>"));
            return b
        }
          , gf = function(a, b) {
            a = a.errorMessage;
            Ge();
            Ae["fireauth.oauthhelper.ui.soy.errorScreen"] ? b = Ae["fireauth.oauthhelper.ui.soy.errorScreen"]({
                errorMessage: a
            }, b) : (b = Ee("string" === typeof a, "errorMessage", a, "string"),
            b = ve('<div id="error-screen" class="' + H("mdl-card") + " " + H("mdl-shadow--2dp") + " " + H("firebase-container") + '">' + ye(b) + "</div>"));
            return b
        }
          , hf = function(a, b) {
            if (Ae["fireauth.oauthhelper.ui.soy.appVerificationScreen"])
                return Ae["fireauth.oauthhelper.ui.soy.appVerificationScreen"](a, b);
            a = '<div id="app-verification-screen" class="' + H("mdl-card") + " " + H("mdl-shadow--2dp") + " " + H("firebase-container") + '"><button id="verify" class="' + H("mdl-button") + " " + H("firebase-hidden-button") + '">';
            return ve(a + 'Verify</button><div id="status-container"><h1 class="firebase-title" id="status-container-label">Verifying you\'re not a robot...</h1><div id="app-verification-progress-bar" class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebase-middle-progress-bar"></div></div></div>')
        };
        var jf = function() {
            this.blockSize = -1
        };
        var mf = function(a, b) {
            this.blockSize = -1;
            this.blockSize = 64;
            this.Td = u.Uint8Array ? new Uint8Array(this.blockSize) : Array(this.blockSize);
            this.Se = this.pc = 0;
            this.F = [];
            this.Oj = a;
            this.Ah = b;
            this.Ik = u.Int32Array ? new Int32Array(64) : Array(64);
            void 0 === kf && (kf = u.Int32Array ? new Int32Array(lf) : lf);
            this.reset()
        }, kf;
        x(mf, jf);
        for (var nf = [], of = 0; 63 > of; of++)
            nf[of] = 0;
        var pf = [].concat(128, nf);
        mf.prototype.reset = function() {
            this.Se = this.pc = 0;
            this.F = u.Int32Array ? new Int32Array(this.Ah) : ub(this.Ah)
        }
        ;
        var qf = function(a) {
            var b = a.Td;
            y(b.length == a.blockSize);
            for (var c = a.Ik, d = 0, e = 0; e < b.length; )
                c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3],
                e = 4 * d;
            for (b = 16; 64 > b; b++) {
                e = c[b - 15] | 0;
                d = c[b - 2] | 0;
                var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0
                  , g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
                c[b] = f + g | 0
            }
            d = a.F[0] | 0;
            e = a.F[1] | 0;
            var h = a.F[2] | 0
              , k = a.F[3] | 0
              , m = a.F[4] | 0
              , p = a.F[5] | 0
              , r = a.F[6] | 0;
            f = a.F[7] | 0;
            for (b = 0; 64 > b; b++) {
                var t = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0;
                g = m & p ^ ~m & r;
                f = f + ((m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) | 0;
                g = g + (kf[b] | 0) | 0;
                g = f + (g + (c[b] | 0) | 0) | 0;
                f = r;
                r = p;
                p = m;
                m = k + g | 0;
                k = h;
                h = e;
                e = d;
                d = g + t | 0
            }
            a.F[0] = a.F[0] + d | 0;
            a.F[1] = a.F[1] + e | 0;
            a.F[2] = a.F[2] + h | 0;
            a.F[3] = a.F[3] + k | 0;
            a.F[4] = a.F[4] + m | 0;
            a.F[5] = a.F[5] + p | 0;
            a.F[6] = a.F[6] + r | 0;
            a.F[7] = a.F[7] + f | 0
        };
        mf.prototype.update = function(a, b) {
            void 0 === b && (b = a.length);
            var c = 0
              , d = this.pc;
            if ("string" === typeof a)
                for (; c < b; )
                    this.Td[d++] = a.charCodeAt(c++),
                    d == this.blockSize && (qf(this),
                    d = 0);
            else if (ya(a))
                for (; c < b; ) {
                    var e = a[c++];
                    if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0)))
                        throw Error("message must be a byte array");
                    this.Td[d++] = e;
                    d == this.blockSize && (qf(this),
                    d = 0)
                }
            else
                throw Error("message must be string or array");
            this.pc = d;
            this.Se += b
        }
        ;
        mf.prototype.digest = function() {
            var a = []
              , b = 8 * this.Se;
            56 > this.pc ? this.update(pf, 56 - this.pc) : this.update(pf, this.blockSize - (this.pc - 56));
            for (var c = 63; 56 <= c; c--)
                this.Td[c] = b & 255,
                b /= 256;
            qf(this);
            for (c = b = 0; c < this.Oj; c++)
                for (var d = 24; 0 <= d; d -= 8)
                    a[b++] = this.F[c] >> d & 255;
            return a
        }
        ;
        var lf = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
        var sf = function() {
            mf.call(this, 8, rf)
        };
        x(sf, mf);
        var rf = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
        var tf = function() {
            this.Vc = this.Vc;
            this.xe = this.xe
        };
        tf.prototype.Vc = !1;
        tf.prototype.isDisposed = function() {
            return this.Vc
        }
        ;
        tf.prototype.Gb = function() {
            this.Vc || (this.Vc = !0,
            this.Uc())
        }
        ;
        tf.prototype.Uc = function() {
            if (this.xe)
                for (; this.xe.length; )
                    this.xe.shift()()
        }
        ;
        var uf = function(a, b) {
            this.type = a;
            this.currentTarget = this.target = b;
            this.defaultPrevented = this.pd = !1
        };
        uf.prototype.stopPropagation = function() {
            this.pd = !0
        }
        ;
        uf.prototype.preventDefault = function() {
            this.defaultPrevented = !0
        }
        ;
        var vf = function() {
            if (!u.addEventListener || !Object.defineProperty)
                return !1;
            var a = !1
              , b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            try {
                var c = function() {};
                u.addEventListener("test", c, b);
                u.removeEventListener("test", c, b)
            } catch (d) {}
            return a
        }();
        var wf = function(a, b) {
            uf.call(this, a ? a.type : "");
            this.relatedTarget = this.currentTarget = this.target = null;
            this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
            this.key = "";
            this.charCode = this.keyCode = 0;
            this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
            this.state = null;
            this.pointerId = 0;
            this.pointerType = "";
            this.qa = null;
            a && this.init(a, b)
        };
        x(wf, uf);
        var xf = Vd({
            2: "touch",
            3: "pen",
            4: "mouse"
        });
        wf.prototype.init = function(a, b) {
            var c = this.type = a.type
              , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            if (b = a.relatedTarget) {
                if (Ab) {
                    a: {
                        try {
                            vb(b.nodeName);
                            var e = !0;
                            break a
                        } catch (f) {}
                        e = !1
                    }
                    e || (b = null)
                }
            } else
                "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
            this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
            this.screenX = d.screenX || 0,
            this.screenY = d.screenY || 0) : (this.offsetX = Bb || void 0 !== a.offsetX ? a.offsetX : a.layerX,
            this.offsetY = Bb || void 0 !== a.offsetY ? a.offsetY : a.layerY,
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
            this.screenX = a.screenX || 0,
            this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : xf[a.pointerType] || "";
            this.state = a.state;
            this.qa = a;
            a.defaultPrevented && wf.Fc.preventDefault.call(this)
        }
        ;
        wf.prototype.stopPropagation = function() {
            wf.Fc.stopPropagation.call(this);
            this.qa.stopPropagation ? this.qa.stopPropagation() : this.qa.cancelBubble = !0
        }
        ;
        wf.prototype.preventDefault = function() {
            wf.Fc.preventDefault.call(this);
            var a = this.qa;
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }
        ;
        wf.prototype.gj = function() {
            return this.qa
        }
        ;
        var yf = "closure_listenable_" + (1E6 * Math.random() | 0);
        var zf = 0;
        var Af = function(a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.ee = e;
            this.key = ++zf;
            this.ud = this.Pd = !1
        }
          , Bf = function(a) {
            a.ud = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.ee = null
        };
        var Cf = function(a) {
            this.src = a;
            this.ia = {};
            this.Dd = 0
        };
        Cf.prototype.add = function(a, b, c, d, e) {
            var f = a.toString();
            a = this.ia[f];
            a || (a = this.ia[f] = [],
            this.Dd++);
            var g = Df(a, b, d, e);
            -1 < g ? (b = a[g],
            c || (b.Pd = !1)) : (b = new Af(b,this.src,f,!!d,e),
            b.Pd = c,
            a.push(b));
            return b
        }
        ;
        Cf.prototype.remove = function(a, b, c, d) {
            a = a.toString();
            if (!(a in this.ia))
                return !1;
            var e = this.ia[a];
            b = Df(e, b, c, d);
            return -1 < b ? (Bf(e[b]),
            sb(e, b),
            0 == e.length && (delete this.ia[a],
            this.Dd--),
            !0) : !1
        }
        ;
        var Ef = function(a, b) {
            var c = b.type;
            c in a.ia && rb(a.ia[c], b) && (Bf(b),
            0 == a.ia[c].length && (delete a.ia[c],
            a.Dd--))
        };
        Cf.prototype.Df = function(a, b, c, d) {
            a = this.ia[a.toString()];
            var e = -1;
            a && (e = Df(a, b, c, d));
            return -1 < e ? a[e] : null
        }
        ;
        Cf.prototype.hasListener = function(a, b) {
            var c = void 0 !== a
              , d = c ? a.toString() : ""
              , e = void 0 !== b;
            return wc(this.ia, function(f) {
                for (var g = 0; g < f.length; ++g)
                    if (!(c && f[g].type != d || e && f[g].capture != b))
                        return !0;
                return !1
            })
        }
        ;
        var Df = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.ud && f.listener == b && f.capture == !!c && f.ee == d)
                    return e
            }
            return -1
        };
        var Ff = "closure_lm_" + (1E6 * Math.random() | 0)
          , Gf = {}
          , Hf = 0
          , Jf = function(a, b, c, d, e) {
            if (d && d.once)
                return If(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++)
                    Jf(a, b[f], c, d, e);
                return null
            }
            c = Kf(c);
            return a && a[yf] ? a.listen(b, c, v(d) ? !!d.capture : !!d, e) : Lf(a, b, c, !1, d, e)
        }
          , Lf = function(a, b, c, d, e, f) {
            if (!b)
                throw Error("Invalid event type");
            var g = v(e) ? !!e.capture : !!e
              , h = Mf(a);
            h || (a[Ff] = h = new Cf(a));
            c = h.add(b, c, d, g, f);
            if (c.proxy)
                return c;
            d = Nf();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener)
                vf || (e = g),
                void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent)
                a.attachEvent(Of(b.toString()), d);
            else if (a.addListener && a.removeListener)
                y("change" === b, "MediaQueryList only has a change event"),
                a.addListener(d);
            else
                throw Error("addEventListener and attachEvent are unavailable.");
            Hf++;
            return c
        }
          , Nf = function() {
            var a = Pf
              , b = function(c) {
                return a.call(b.src, b.listener, c)
            };
            return b
        }
          , If = function(a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++)
                    If(a, b[f], c, d, e);
                return null
            }
            c = Kf(c);
            return a && a[yf] ? Qf(a, b, c, v(d) ? !!d.capture : !!d, e) : Lf(a, b, c, !0, d, e)
        }
          , Rf = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++)
                    Rf(a, b[f], c, d, e);
            else
                d = v(d) ? !!d.capture : !!d,
                c = Kf(c),
                a && a[yf] ? a.Da.remove(String(b), c, d, e) : a && (a = Mf(a)) && (b = a.Df(b, c, d, e)) && Sf(b)
        }
          , Sf = function(a) {
            if ("number" !== typeof a && a && !a.ud) {
                var b = a.src;
                if (b && b[yf])
                    Ef(b.Da, a);
                else {
                    var c = a.type
                      , d = a.proxy;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Of(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    Hf--;
                    (c = Mf(b)) ? (Ef(c, a),
                    0 == c.Dd && (c.src = null,
                    b[Ff] = null)) : Bf(a)
                }
            }
        }
          , Of = function(a) {
            return a in Gf ? Gf[a] : Gf[a] = "on" + a
        }
          , Pf = function(a, b) {
            if (a.ud)
                a = !0;
            else {
                b = new wf(b,this);
                var c = a.listener
                  , d = a.ee || a.src;
                a.Pd && Sf(a);
                a = c.call(d, b)
            }
            return a
        }
          , Mf = function(a) {
            a = a[Ff];
            return a instanceof Cf ? a : null
        }
          , Tf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
          , Kf = function(a) {
            y(a, "Listener can not be null.");
            if ("function" === typeof a)
                return a;
            y(a.handleEvent, "An object listener must have handleEvent method.");
            a[Tf] || (a[Tf] = function(b) {
                return a.handleEvent(b)
            }
            );
            return a[Tf]
        };
        var Uf = function() {
            tf.call(this);
            this.Da = new Cf(this);
            this.Oi = this;
            this.Yf = null
        };
        x(Uf, tf);
        Uf.prototype[yf] = !0;
        l = Uf.prototype;
        l.addEventListener = function(a, b, c, d) {
            Jf(this, a, b, c, d)
        }
        ;
        l.removeEventListener = function(a, b, c, d) {
            Rf(this, a, b, c, d)
        }
        ;
        l.dispatchEvent = function(a) {
            Vf(this);
            var b = this.Yf;
            if (b) {
                var c = [];
                for (var d = 1; b; b = b.Yf)
                    c.push(b),
                    y(1E3 > ++d, "infinite loop")
            }
            b = this.Oi;
            d = a.type || a;
            if ("string" === typeof a)
                a = new uf(a,b);
            else if (a instanceof uf)
                a.target = a.target || b;
            else {
                var e = a;
                a = new uf(d,b);
                Ac(a, e)
            }
            e = !0;
            if (c)
                for (var f = c.length - 1; !a.pd && 0 <= f; f--) {
                    var g = a.currentTarget = c[f];
                    e = Wf(g, d, !0, a) && e
                }
            a.pd || (g = a.currentTarget = b,
            e = Wf(g, d, !0, a) && e,
            a.pd || (e = Wf(g, d, !1, a) && e));
            if (c)
                for (f = 0; !a.pd && f < c.length; f++)
                    g = a.currentTarget = c[f],
                    e = Wf(g, d, !1, a) && e;
            return e
        }
        ;
        l.Uc = function() {
            Uf.Fc.Uc.call(this);
            if (this.Da) {
                var a = this.Da, b = 0, c;
                for (c in a.ia) {
                    for (var d = a.ia[c], e = 0; e < d.length; e++)
                        ++b,
                        Bf(d[e]);
                    delete a.ia[c];
                    a.Dd--
                }
            }
            this.Yf = null
        }
        ;
        l.listen = function(a, b, c, d) {
            Vf(this);
            return this.Da.add(String(a), b, !1, c, d)
        }
        ;
        var Qf = function(a, b, c, d, e) {
            return a.Da.add(String(b), c, !0, d, e)
        }
          , Wf = function(a, b, c, d) {
            b = a.Da.ia[String(b)];
            if (!b)
                return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var g = b[f];
                if (g && !g.ud && g.capture == c) {
                    var h = g.listener
                      , k = g.ee || g.src;
                    g.Pd && Ef(a.Da, g);
                    e = !1 !== h.call(k, d) && e
                }
            }
            return e && !d.defaultPrevented
        };
        Uf.prototype.Df = function(a, b, c, d) {
            return this.Da.Df(String(a), b, c, d)
        }
        ;
        Uf.prototype.hasListener = function(a, b) {
            return this.Da.hasListener(void 0 !== a ? String(a) : void 0, b)
        }
        ;
        var Vf = function(a) {
            y(a.Da, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
        };
        var Xf = function() {};
        Xf.prototype.Og = null;
        var Yf = function(a) {
            return a.Og || (a.Og = a.le())
        };
        var Zf, $f = function() {};
        x($f, Xf);
        $f.prototype.Qc = function() {
            var a = ag(this);
            return a ? new ActiveXObject(a) : new XMLHttpRequest
        }
        ;
        $f.prototype.le = function() {
            var a = {};
            ag(this) && (a[0] = !0,
            a[1] = !0);
            return a
        }
        ;
        var ag = function(a) {
            if (!a.yh && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d),
                        a.yh = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.yh
        };
        Zf = new $f;
        var bg = function() {};
        x(bg, Xf);
        bg.prototype.Qc = function() {
            var a = new XMLHttpRequest;
            if ("withCredentials"in a)
                return a;
            if ("undefined" != typeof XDomainRequest)
                return new cg;
            throw Error("Unsupported browser");
        }
        ;
        bg.prototype.le = function() {
            return {}
        }
        ;
        var cg = function() {
            this.Na = new XDomainRequest;
            this.readyState = 0;
            this.onreadystatechange = null;
            this.responseType = this.responseText = this.response = "";
            this.status = -1;
            this.responseXML = null;
            this.statusText = "";
            this.Na.onload = w(this.mj, this);
            this.Na.onerror = w(this.sh, this);
            this.Na.onprogress = w(this.nj, this);
            this.Na.ontimeout = w(this.rj, this)
        };
        l = cg.prototype;
        l.open = function(a, b, c) {
            if (null != c && !c)
                throw Error("Only async requests are supported.");
            this.Na.open(a, b)
        }
        ;
        l.send = function(a) {
            if (a)
                if ("string" == typeof a)
                    this.Na.send(a);
                else
                    throw Error("Only string data is supported");
            else
                this.Na.send()
        }
        ;
        l.abort = function() {
            this.Na.abort()
        }
        ;
        l.setRequestHeader = function() {}
        ;
        l.getResponseHeader = function(a) {
            return "content-type" == a.toLowerCase() ? this.Na.contentType : ""
        }
        ;
        l.mj = function() {
            this.status = 200;
            this.response = this.responseText = this.Na.responseText;
            dg(this, 4)
        }
        ;
        l.sh = function() {
            this.status = 500;
            this.response = this.responseText = "";
            dg(this, 4)
        }
        ;
        l.rj = function() {
            this.sh()
        }
        ;
        l.nj = function() {
            this.status = 200;
            dg(this, 1)
        }
        ;
        var dg = function(a, b) {
            a.readyState = b;
            if (a.onreadystatechange)
                a.onreadystatechange()
        };
        cg.prototype.getAllResponseHeaders = function() {
            return "content-type: " + this.Na.contentType
        }
        ;
        var eg = function(a) {
            this.Gd = a.Kk || null;
            this.zd = a.rl || !1;
            this.dc = this.Fb = void 0
        };
        x(eg, Xf);
        eg.prototype.Qc = function() {
            var a = new fg(this.Gd,this.zd);
            this.Fb && a.rg(this.Fb);
            this.dc && a.mi(this.dc);
            return a
        }
        ;
        eg.prototype.le = function(a) {
            return function() {
                return a
            }
        }({});
        eg.prototype.rg = function(a) {
            this.Fb = a
        }
        ;
        eg.prototype.mi = function(a) {
            this.dc = a
        }
        ;
        var fg = function(a, b) {
            Uf.call(this);
            this.Gd = a;
            this.zd = b;
            this.dc = this.Fb = void 0;
            this.status = this.readyState = 0;
            this.responseType = this.responseText = this.response = this.statusText = "";
            this.onreadystatechange = this.responseXML = null;
            this.ng = new Headers;
            this.Dc = null;
            this.Lh = "GET";
            this.Xb = "";
            this.Sa = !1;
            this.P = je(ke(), "goog.net.FetchXmlHttp").Pf;
            this.Ag = this.Rc = this.Xd = null
        };
        x(fg, Uf);
        fg.prototype.open = function(a, b, c) {
            y(!!c, "Only async requests are supported.");
            if (0 != this.readyState)
                throw this.abort(),
                Error("Error reopening a connection");
            this.Lh = a;
            this.Xb = b;
            this.readyState = 1;
            gg(this)
        }
        ;
        fg.prototype.send = function(a) {
            if (1 != this.readyState)
                throw this.abort(),
                Error("need to call open() first. ");
            this.Sa = !0;
            var b = {
                headers: this.ng,
                method: this.Lh,
                credentials: this.Fb,
                cache: this.dc
            };
            a && (b.body = a);
            (this.Gd || u).fetch(new Request(this.Xb,b)).then(this.qj.bind(this), this.ce.bind(this))
        }
        ;
        fg.prototype.abort = function() {
            var a = this;
            this.response = this.responseText = "";
            this.ng = new Headers;
            this.status = 0;
            this.Rc && this.Rc.cancel("Request was aborted.").catch(function() {
                var b = a.P;
                b && le(b, Zd, "Fetch reader cancellation error.")
            });
            1 <= this.readyState && this.Sa && 4 != this.readyState && (this.Sa = !1,
            hg(this));
            this.readyState = 0
        }
        ;
        fg.prototype.qj = function(a) {
            if (this.Sa && (this.Xd = a,
            this.Dc || (this.status = this.Xd.status,
            this.statusText = this.Xd.statusText,
            this.Dc = a.headers,
            this.readyState = 2,
            gg(this)),
            this.Sa && (this.readyState = 3,
            gg(this),
            this.Sa)))
                if ("arraybuffer" === this.responseType)
                    a.arrayBuffer().then(this.oj.bind(this), this.ce.bind(this));
                else if ("undefined" !== typeof u.ReadableStream && "body"in a) {
                    this.Rc = a.body.getReader();
                    if (this.zd) {
                        if (this.responseType)
                            throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
                        this.response = []
                    } else
                        this.response = this.responseText = "",
                        this.Ag = new TextDecoder;
                    ig(this)
                } else
                    a.text().then(this.pj.bind(this), this.ce.bind(this))
        }
        ;
        var ig = function(a) {
            a.Rc.read().then(a.kj.bind(a)).catch(a.ce.bind(a))
        };
        fg.prototype.kj = function(a) {
            if (this.Sa) {
                if (this.zd && a.value)
                    this.response.push(a.value);
                else if (!this.zd) {
                    var b = a.value ? a.value : new Uint8Array(0);
                    if (b = this.Ag.decode(b, {
                        stream: !a.done
                    }))
                        this.response = this.responseText += b
                }
                a.done ? hg(this) : gg(this);
                3 == this.readyState && ig(this)
            }
        }
        ;
        fg.prototype.pj = function(a) {
            this.Sa && (this.response = this.responseText = a,
            hg(this))
        }
        ;
        fg.prototype.oj = function(a) {
            this.Sa && (this.response = a,
            hg(this))
        }
        ;
        fg.prototype.ce = function() {
            var a = this.P;
            a && le(a, Zd, "Failed to fetch url " + this.Xb);
            this.Sa && hg(this)
        }
        ;
        var hg = function(a) {
            a.readyState = 4;
            a.Xd = null;
            a.Rc = null;
            a.Ag = null;
            gg(a)
        };
        l = fg.prototype;
        l.setRequestHeader = function(a, b) {
            this.ng.append(a, b)
        }
        ;
        l.getResponseHeader = function(a) {
            return this.Dc ? this.Dc.get(a.toLowerCase()) || "" : ((a = this.P) && le(a, Zd, "Attempting to get response header but no headers have been received for url: " + this.Xb),
            "")
        }
        ;
        l.getAllResponseHeaders = function() {
            if (!this.Dc) {
                var a = this.P;
                a && le(a, Zd, "Attempting to get all response headers but no headers have been received for url: " + this.Xb);
                return ""
            }
            a = [];
            for (var b = this.Dc.entries(), c = b.next(); !c.done; )
                c = c.value,
                a.push(c[0] + ": " + c[1]),
                c = b.next();
            return a.join("\r\n")
        }
        ;
        l.rg = function(a) {
            this.Fb = a
        }
        ;
        l.mi = function(a) {
            this.dc = a
        }
        ;
        var gg = function(a) {
            a.onreadystatechange && a.onreadystatechange.call(a)
        };
        Object.defineProperty(fg.prototype, "withCredentials", {
            get: function() {
                return "include" === this.Fb
            },
            set: function(a) {
                this.rg(a ? "include" : "same-origin")
            }
        });
        var jg = function(a, b) {
            this.Jj = 100;
            this.Vi = a;
            this.ck = b;
            this.ve = 0;
            this.fe = null
        };
        jg.prototype.get = function() {
            if (0 < this.ve) {
                this.ve--;
                var a = this.fe;
                this.fe = a.next;
                a.next = null
            } else
                a = this.Vi();
            return a
        }
        ;
        jg.prototype.put = function(a) {
            this.ck(a);
            this.ve < this.Jj && (this.ve++,
            a.next = this.fe,
            this.fe = a)
        }
        ;
        var kg, lg = function() {
            var a = u.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !B("Presto") && (a = function() {
                var e = Pe(document, "IFRAME");
                e.style.display = "none";
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.close();
                var g = "callImmediate" + Math.random()
                  , h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = w(function(k) {
                    if (("*" == h || k.origin == h) && k.data == g)
                        this.port1.onmessage()
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        f.postMessage(g, h)
                    }
                }
            }
            );
            if ("undefined" !== typeof a && !ib()) {
                var b = new a
                  , c = {}
                  , d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.Rg;
                        c.Rg = null;
                        e()
                    }
                }
                ;
                return function(e) {
                    d.next = {
                        Rg: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return function(e) {
                u.setTimeout(e, 0)
            }
        };
        var mg = function() {
            this.Xe = this.ac = null
        };
        mg.prototype.add = function(a, b) {
            var c = ng.get();
            c.set(a, b);
            this.Xe ? this.Xe.next = c : (y(!this.ac),
            this.ac = c);
            this.Xe = c
        }
        ;
        mg.prototype.remove = function() {
            var a = null;
            this.ac && (a = this.ac,
            this.ac = this.ac.next,
            this.ac || (this.Xe = null),
            a.next = null);
            return a
        }
        ;
        var ng = new jg(function() {
            return new og
        }
        ,function(a) {
            return a.reset()
        }
        )
          , og = function() {
            this.next = this.scope = this.Bf = null
        };
        og.prototype.set = function(a, b) {
            this.Bf = a;
            this.scope = b;
            this.next = null
        }
        ;
        og.prototype.reset = function() {
            this.next = this.scope = this.Bf = null
        }
        ;
        var pg = u.console && u.console.createTask ? u.console.createTask.bind(u.console) : void 0
          , qg = pg ? Symbol("consoleTask") : void 0;
        function rg(a, b) {
            function c() {
                var e = ta.apply(0, arguments)
                  , f = this;
                return d.run(function() {
                    return a.call.apply(a, [f].concat(ja(e)))
                })
            }
            b = void 0 === b ? "anonymous" : b;
            if (!pg || a[Ha(qg)])
                return a;
            var d = pg(a.name || b);
            c[Ha(qg)] = d;
            return c
        }
        ;var sg, tg = !1, ug = new mg, wg = function(a, b) {
            sg || vg();
            tg || (sg(),
            tg = !0);
            a = rg(a, "goog.async.run");
            ug.add(a, b)
        }, vg = function() {
            if (u.Promise && u.Promise.resolve) {
                var a = u.Promise.resolve(void 0);
                sg = function() {
                    a.then(xg)
                }
            } else
                sg = function() {
                    var b = xg;
                    "function" !== typeof u.setImmediate || u.Window && u.Window.prototype && (hb() || !B("Edge")) && u.Window.prototype.setImmediate == u.setImmediate ? (kg || (kg = lg()),
                    kg(b)) : u.setImmediate(b)
                }
        }, xg = function() {
            for (var a; a = ug.remove(); ) {
                try {
                    a.Bf.call(a.scope)
                } catch (b) {
                    Na(b)
                }
                ng.put(a)
            }
            tg = !1
        };
        function yg() {}
        ;var zg = function(a) {
            if (!a)
                return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        };
        var I = function(a, b) {
            this.R = 0;
            this.ma = void 0;
            this.ec = this.Za = this.sa = null;
            this.be = this.xf = !1;
            if (a != tc)
                try {
                    var c = this;
                    a.call(b, function(d) {
                        Ag(c, 2, d)
                    }, function(d) {
                        if (!(d instanceof Bg))
                            try {
                                if (d instanceof Error)
                                    throw d;
                                throw Error("Promise rejected.");
                            } catch (e) {}
                        Ag(c, 3, d)
                    })
                } catch (d) {
                    Ag(this, 3, d)
                }
        }
          , Cg = function() {
            this.next = this.context = this.sc = this.Rb = this.child = null;
            this.Mc = !1
        };
        Cg.prototype.reset = function() {
            this.context = this.sc = this.Rb = this.child = null;
            this.Mc = !1
        }
        ;
        var Dg = new jg(function() {
            return new Cg
        }
        ,function(a) {
            a.reset()
        }
        )
          , Eg = function(a, b, c) {
            var d = Dg.get();
            d.Rb = a;
            d.sc = b;
            d.context = c;
            return d
        }
          , J = function(a) {
            if (a instanceof I)
                return a;
            var b = new I(tc);
            Ag(b, 2, a);
            return b
        }
          , K = function(a) {
            return new I(function(b, c) {
                c(a)
            }
            )
        }
          , Gg = function(a, b, c) {
            Fg(a, b, c, null) || wg(Ba(b, a))
        }
          , Hg = function(a) {
            return new I(function(b, c) {
                var d = a.length
                  , e = [];
                if (d)
                    for (var f = function(m, p) {
                        d--;
                        e[m] = p;
                        0 == d && b(e)
                    }, g = function(m) {
                        c(m)
                    }, h = 0, k; h < a.length; h++)
                        k = a[h],
                        Gg(k, Ba(f, h), g);
                else
                    b(e)
            }
            )
        }
          , Ig = function(a) {
            return new I(function(b) {
                var c = a.length
                  , d = [];
                if (c)
                    for (var e = function(h, k, m) {
                        c--;
                        d[h] = k ? {
                            oh: !0,
                            value: m
                        } : {
                            oh: !1,
                            reason: m
                        };
                        0 == c && b(d)
                    }, f = 0, g; f < a.length; f++)
                        g = a[f],
                        Gg(g, Ba(e, f, !0), Ba(e, f, !1));
                else
                    b(d)
            }
            )
        }
          , Jg = function(a) {
            return new I(function(b, c) {
                var d = a.length
                  , e = [];
                if (d)
                    for (var f = function(m) {
                        b(m)
                    }, g = function(m, p) {
                        d--;
                        e[m] = p;
                        0 == d && c(e)
                    }, h = 0, k; h < a.length; h++)
                        k = a[h],
                        Gg(k, f, Ba(g, h));
                else
                    b(void 0)
            }
            )
        };
        I.prototype.then = function(a, b, c) {
            null != a && La(a, "opt_onFulfilled should be a function.");
            null != b && La(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
            return Kg(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
        }
        ;
        I.prototype.$goog_Thenable = !0;
        I.prototype.Ab = function(a, b) {
            a = Eg(a, a, b);
            a.Mc = !0;
            Lg(this, a);
            return this
        }
        ;
        I.prototype.h = function(a, b) {
            return Kg(this, null, a, b)
        }
        ;
        I.prototype.catch = I.prototype.h;
        I.prototype.cancel = function(a) {
            if (0 == this.R) {
                var b = new Bg(a);
                wg(function() {
                    Mg(this, b)
                }, this)
            }
        }
        ;
        var Mg = function(a, b) {
            if (0 == a.R)
                if (a.sa) {
                    var c = a.sa;
                    if (c.Za) {
                        for (var d = 0, e = null, f = null, g = c.Za; g && (g.Mc || (d++,
                        g.child == a && (e = g),
                        !(e && 1 < d))); g = g.next)
                            e || (f = g);
                        e && (0 == c.R && 1 == d ? Mg(c, b) : (f ? (d = f,
                        y(c.Za),
                        y(null != d),
                        d.next == c.ec && (c.ec = d),
                        d.next = d.next.next) : Ng(c),
                        Og(c, e, 3, b)))
                    }
                    a.sa = null
                } else
                    Ag(a, 3, b)
        }
          , Lg = function(a, b) {
            a.Za || 2 != a.R && 3 != a.R || Pg(a);
            y(null != b.Rb);
            a.ec ? a.ec.next = b : a.Za = b;
            a.ec = b
        }
          , Kg = function(a, b, c, d) {
            b && (b = rg(b, "goog.Promise.then"));
            c && (c = rg(c, "goog.Promise.then"));
            var e = Eg(null, null, null);
            e.child = new I(function(f, g) {
                e.Rb = b ? function(h) {
                    try {
                        var k = b.call(d, h);
                        f(k)
                    } catch (m) {
                        g(m)
                    }
                }
                : f;
                e.sc = c ? function(h) {
                    try {
                        var k = c.call(d, h);
                        void 0 === k && h instanceof Bg ? g(h) : f(k)
                    } catch (m) {
                        g(m)
                    }
                }
                : g
            }
            );
            e.child.sa = a;
            Lg(a, e);
            return e.child
        };
        I.prototype.Dk = function(a) {
            y(1 == this.R);
            this.R = 0;
            Ag(this, 2, a)
        }
        ;
        I.prototype.Ek = function(a) {
            y(1 == this.R);
            this.R = 0;
            Ag(this, 3, a)
        }
        ;
        var Ag = function(a, b, c) {
            0 == a.R && (a === c && (b = 3,
            c = new TypeError("Promise cannot resolve to itself")),
            a.R = 1,
            Fg(c, a.Dk, a.Ek, a) || (a.ma = c,
            a.R = b,
            a.sa = null,
            Pg(a),
            3 != b || c instanceof Bg || Qg(a, c)))
        }
          , Fg = function(a, b, c, d) {
            if (a instanceof I)
                return null != b && La(b, "opt_onFulfilled should be a function."),
                null != c && La(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
                Lg(a, Eg(b || tc, c || null, d)),
                !0;
            if (zg(a))
                return a.then(b, c, d),
                !0;
            if (v(a))
                try {
                    var e = a.then;
                    if ("function" === typeof e)
                        return Rg(a, e, b, c, d),
                        !0
                } catch (f) {
                    return c.call(d, f),
                    !0
                }
            return !1
        }
          , Rg = function(a, b, c, d, e) {
            var f = !1
              , g = function(k) {
                f || (f = !0,
                c.call(e, k))
            }
              , h = function(k) {
                f || (f = !0,
                d.call(e, k))
            };
            try {
                b.call(a, g, h)
            } catch (k) {
                h(k)
            }
        }
          , Pg = function(a) {
            a.xf || (a.xf = !0,
            wg(a.cj, a))
        }
          , Ng = function(a) {
            var b = null;
            a.Za && (b = a.Za,
            a.Za = b.next,
            b.next = null);
            a.Za || (a.ec = null);
            null != b && y(null != b.Rb);
            return b
        };
        I.prototype.cj = function() {
            for (var a; a = Ng(this); )
                Og(this, a, this.R, this.ma);
            this.xf = !1
        }
        ;
        var Og = function(a, b, c, d) {
            if (3 == c && b.sc && !b.Mc)
                for (; a && a.be; a = a.sa)
                    a.be = !1;
            if (b.child)
                b.child.sa = null,
                Sg(b, c, d);
            else
                try {
                    b.Mc ? b.Rb.call(b.context) : Sg(b, c, d)
                } catch (e) {
                    Tg.call(null, e)
                }
            Dg.put(b)
        }
          , Sg = function(a, b, c) {
            2 == b ? a.Rb.call(a.context, c) : a.sc && a.sc.call(a.context, c)
        }
          , Qg = function(a, b) {
            a.be = !0;
            wg(function() {
                a.be && Tg.call(null, b)
            })
        }
          , Tg = Na
          , Bg = function(a) {
            Da.call(this, a)
        };
        x(Bg, Da);
        Bg.prototype.name = "cancel";
        /*
    
     Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: MIT
    */
        var Ug = function(a, b) {
            this.Le = [];
            this.Oh = a;
            this.fh = b || null;
            this.bd = this.jc = !1;
            this.ma = void 0;
            this.wg = this.Lg = this.gf = !1;
            this.Te = 0;
            this.sa = null;
            this.hf = 0
        };
        x(Ug, yg);
        Ug.prototype.cancel = function(a) {
            if (this.jc)
                this.ma instanceof Ug && this.ma.cancel();
            else {
                if (this.sa) {
                    var b = this.sa;
                    delete this.sa;
                    a ? b.cancel(a) : (b.hf--,
                    0 >= b.hf && b.cancel())
                }
                this.Oh ? this.Oh.call(this.fh, this) : this.wg = !0;
                this.jc || Vg(this, new Wg(this))
            }
        }
        ;
        Ug.prototype.Xg = function(a, b) {
            this.gf = !1;
            Xg(this, a, b)
        }
        ;
        var Xg = function(a, b, c) {
            a.jc = !0;
            a.ma = c;
            a.bd = !b;
            Yg(a)
        }
          , $g = function(a) {
            if (a.jc) {
                if (!a.wg)
                    throw new Zg(a);
                a.wg = !1
            }
        };
        Ug.prototype.callback = function(a) {
            $g(this);
            ah(a);
            Xg(this, !0, a)
        }
        ;
        var Vg = function(a, b) {
            $g(a);
            ah(b);
            Xg(a, !1, b)
        }
          , ah = function(a) {
            y(!(a instanceof Ug), "An execution sequence may not be initiated with a blocking Deferred.")
        };
        Ug.prototype.addCallback = function(a, b) {
            return bh(this, a, null, b)
        }
        ;
        var ch = function(a, b) {
            bh(a, null, b)
        }
          , bh = function(a, b, c, d) {
            y(!a.Lg, "Blocking Deferreds can not be re-used");
            a.Le.push([b, c, d]);
            a.jc && Yg(a);
            return a
        };
        Ug.prototype.then = function(a, b, c) {
            var d, e, f = new I(function(g, h) {
                e = g;
                d = h
            }
            );
            bh(this, e, function(g) {
                g instanceof Wg ? f.cancel() : d(g);
                return dh
            }, this);
            return f.then(a, b, c)
        }
        ;
        Ug.prototype.$goog_Thenable = !0;
        var eh = function(a) {
            return ob(a.Le, function(b) {
                return "function" === typeof b[1]
            })
        }
          , dh = {}
          , Yg = function(a) {
            if (a.Te && a.jc && eh(a)) {
                var b = a.Te
                  , c = fh[b];
                c && (u.clearTimeout(c.Ea),
                delete fh[b]);
                a.Te = 0
            }
            a.sa && (a.sa.hf--,
            delete a.sa);
            b = a.ma;
            for (var d = c = !1; a.Le.length && !a.gf; ) {
                var e = a.Le.shift()
                  , f = e[0]
                  , g = e[1];
                e = e[2];
                if (f = a.bd ? g : f)
                    try {
                        var h = f.call(e || a.fh, b);
                        h === dh && (h = void 0);
                        void 0 !== h && (a.bd = a.bd && (h == b || h instanceof Error),
                        a.ma = b = h);
                        if (zg(b) || "function" === typeof u.Promise && b instanceof u.Promise)
                            d = !0,
                            a.gf = !0
                    } catch (k) {
                        b = k,
                        a.bd = !0,
                        eh(a) || (c = !0)
                    }
            }
            a.ma = b;
            d && (h = w(a.Xg, a, !0),
            d = w(a.Xg, a, !1),
            b instanceof Ug ? (bh(b, h, d),
            b.Lg = !0) : b.then(h, d));
            c && (b = new gh(b),
            fh[b.Ea] = b,
            a.Te = b.Ea)
        }
          , Zg = function() {
            Da.call(this)
        };
        x(Zg, Da);
        Zg.prototype.message = "Deferred has already fired";
        Zg.prototype.name = "AlreadyCalledError";
        var Wg = function() {
            Da.call(this)
        };
        x(Wg, Da);
        Wg.prototype.message = "Deferred was canceled";
        Wg.prototype.name = "CanceledError";
        var gh = function(a) {
            this.Ea = u.setTimeout(w(this.Ck, this), 0);
            this.Y = a
        };
        gh.prototype.Ck = function() {
            y(fh[this.Ea], "Cannot throw an error that is not scheduled.");
            delete fh[this.Ea];
            throw this.Y;
        }
        ;
        var fh = {};
        var lh = function(a) {
            var b = {}
              , c = b.document || document
              , d = Kc(a).toString()
              , e = (new af(c)).createElement("SCRIPT")
              , f = {
                gi: e,
                Cd: void 0
            }
              , g = new Ug(hh,f)
              , h = null
              , k = null != b.timeout ? b.timeout : 5E3;
            0 < k && (h = window.setTimeout(function() {
                ih(e, !0);
                Vg(g, new jh(1,"Timeout reached for loading script " + d))
            }, k),
            f.Cd = h);
            e.onload = e.onreadystatechange = function() {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (ih(e, b.ll || !1, h),
                g.callback(null))
            }
            ;
            e.onerror = function() {
                ih(e, !0, h);
                Vg(g, new jh(0,"Error while loading script " + d))
            }
            ;
            f = b.attributes || {};
            Ac(f, {
                type: "text/javascript",
                charset: "UTF-8"
            });
            Me(e, f);
            ld(e, a);
            kh(c).appendChild(e);
            return g
        }
          , kh = function(a) {
            var b = (a || document).getElementsByTagName("HEAD");
            return b && 0 !== b.length ? b[0] : a.documentElement
        }
          , hh = function() {
            if (this && this.gi) {
                var a = this.gi;
                a && "SCRIPT" == a.tagName && ih(a, !0, this.Cd)
            }
        }
          , ih = function(a, b, c) {
            null != c && u.clearTimeout(c);
            a.onload = function() {}
            ;
            a.onerror = function() {}
            ;
            a.onreadystatechange = function() {}
            ;
            b && window.setTimeout(function() {
                Te(a)
            }, 0)
        }
          , jh = function(a, b) {
            var c = "Jsloader error (code #" + a + ")";
            b && (c += ": " + b);
            Da.call(this, c);
            this.code = a
        };
        x(jh, Da);
        var mh = function(a, b, c) {
            if ("function" === typeof a)
                c && (a = w(a, c));
            else if (a && "function" == typeof a.handleEvent)
                a = w(a.handleEvent, a);
            else
                throw Error("Invalid listener argument");
            return 2147483647 < Number(b) ? -1 : u.setTimeout(a, b || 0)
        }
          , nh = function(a) {
            var b = null;
            return (new I(function(c, d) {
                b = mh(function() {
                    c(void 0)
                }, a);
                -1 == b && d(Error("Failed to schedule timer."))
            }
            )).h(function(c) {
                u.clearTimeout(b);
                throw c;
            })
        };
        var L = function(a) {
            Uf.call(this);
            this.headers = new Map;
            this.Ze = a || null;
            this.lb = !1;
            this.Ye = this.j = null;
            this.gd = this.Ih = this.pe = "";
            this.Nb = this.Jf = this.ke = this.vf = !1;
            this.Gc = 0;
            this.Qe = null;
            this.Ge = "";
            this.Ue = this.Xj = this.Ji = !1;
            this.Bg = null
        };
        x(L, Uf);
        L.prototype.P = je(ke(), "goog.net.XhrIo").Pf;
        var oh = /^https?$/i
          , ph = ["POST", "PUT"];
        L.prototype.setTrustToken = function(a) {
            this.Bg = a
        }
        ;
        L.prototype.send = function(a, b, c, d) {
            if (this.j)
                throw Error("[goog.net.XhrIo] Object is active with another request=" + this.pe + "; newUri=" + a);
            b = b ? b.toUpperCase() : "GET";
            this.pe = a;
            this.gd = "";
            this.Ih = b;
            this.vf = !1;
            this.lb = !0;
            this.j = this.Ze ? this.Ze.Qc() : Zf.Qc();
            this.Ye = this.Ze ? Yf(this.Ze) : Yf(Zf);
            this.j.onreadystatechange = w(this.Vh, this);
            this.Xj && "onprogress"in this.j && (this.j.onprogress = w(function(g) {
                this.Uh(g, !0)
            }, this),
            this.j.upload && (this.j.upload.onprogress = w(this.Uh, this)));
            try {
                ne(this.P, qh(this, "Opening Xhr")),
                this.Jf = !0,
                this.j.open(b, String(a), !0),
                this.Jf = !1
            } catch (g) {
                ne(this.P, qh(this, "Error opening Xhr: " + g.message));
                this.Y(5, g);
                return
            }
            a = c || "";
            c = new Map(this.headers);
            if (d)
                if (Object.getPrototypeOf(d) === Object.prototype)
                    for (var e in d)
                        c.set(e, d[e]);
                else if ("function" === typeof d.keys && "function" === typeof d.get) {
                    e = ia(d.keys());
                    for (var f = e.next(); !f.done; f = e.next())
                        f = f.value,
                        c.set(f, d.get(f))
                } else
                    throw Error("Unknown input type for opt_headers: " + String(d));
            d = Array.from(c.keys()).find(function(g) {
                return "content-type" == g.toLowerCase()
            });
            e = u.FormData && a instanceof u.FormData;
            !pb(ph, b) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            b = ia(c);
            for (d = b.next(); !d.done; d = b.next())
                c = ia(d.value),
                d = c.next().value,
                c = c.next().value,
                this.j.setRequestHeader(d, c);
            this.Ge && (this.j.responseType = this.Ge);
            "withCredentials"in this.j && this.j.withCredentials !== this.Ji && (this.j.withCredentials = this.Ji);
            if ("setTrustToken"in this.j && this.Bg)
                try {
                    this.j.setTrustToken(this.Bg)
                } catch (g) {
                    ne(this.P, qh(this, "Error SetTrustToken: " + g.message))
                }
            try {
                rh(this),
                0 < this.Gc && (this.Ue = sh(this.j),
                ne(this.P, qh(this, "Will abort after " + this.Gc + "ms if incomplete, xhr2 " + this.Ue)),
                this.Ue ? (this.j.timeout = this.Gc,
                this.j.ontimeout = w(this.Cd, this)) : this.Qe = mh(this.Cd, this.Gc, this)),
                ne(this.P, qh(this, "Sending request")),
                this.ke = !0,
                this.j.send(a),
                this.ke = !1
            } catch (g) {
                ne(this.P, qh(this, "Send error: " + g.message)),
                this.Y(5, g)
            }
        }
        ;
        var sh = function(a) {
            return xb && "number" === typeof a.timeout && void 0 !== a.ontimeout
        };
        L.prototype.Cd = function() {
            "undefined" != typeof wa && this.j && (this.gd = "Timed out after " + this.Gc + "ms, aborting",
            ne(this.P, qh(this, this.gd)),
            this.dispatchEvent("timeout"),
            this.abort(8))
        }
        ;
        L.prototype.Y = function(a, b) {
            this.lb = !1;
            this.j && (this.Nb = !0,
            this.j.abort(),
            this.Nb = !1);
            this.gd = b;
            th(this);
            uh(this)
        }
        ;
        var th = function(a) {
            a.vf || (a.vf = !0,
            a.dispatchEvent("complete"),
            a.dispatchEvent("error"))
        };
        L.prototype.abort = function() {
            this.j && this.lb && (ne(this.P, qh(this, "Aborting")),
            this.lb = !1,
            this.Nb = !0,
            this.j.abort(),
            this.Nb = !1,
            this.dispatchEvent("complete"),
            this.dispatchEvent("abort"),
            uh(this))
        }
        ;
        L.prototype.Uc = function() {
            this.j && (this.lb && (this.lb = !1,
            this.Nb = !0,
            this.j.abort(),
            this.Nb = !1),
            uh(this, !0));
            L.Fc.Uc.call(this)
        }
        ;
        L.prototype.Vh = function() {
            this.isDisposed() || (this.Jf || this.ke || this.Nb ? vh(this) : this.Rj())
        }
        ;
        L.prototype.Rj = function() {
            vh(this)
        }
        ;
        var vh = function(a) {
            if (a.lb && "undefined" != typeof wa)
                if (a.Ye[1] && 4 == wh(a) && 2 == xh(a))
                    ne(a.P, qh(a, "Local request error detected and ignored"));
                else if (a.ke && 4 == wh(a))
                    mh(a.Vh, 0, a);
                else if (a.dispatchEvent("readystatechange"),
                4 == wh(a)) {
                    ne(a.P, qh(a, "Request complete"));
                    a.lb = !1;
                    try {
                        var b = xh(a);
                        a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1
                        }
                        var d;
                        if (!(d = c)) {
                            var e;
                            if (e = 0 === b) {
                                var f = String(a.pe).match(sd)[1] || null;
                                !f && u.self && u.self.location && (f = u.self.location.protocol.slice(0, -1));
                                e = !oh.test(f ? f.toLowerCase() : "")
                            }
                            d = e
                        }
                        if (d)
                            a.dispatchEvent("complete"),
                            a.dispatchEvent("success");
                        else {
                            try {
                                var g = 2 < wh(a) ? a.j.statusText : ""
                            } catch (h) {
                                ne(a.P, "Can not get status: " + h.message),
                                g = ""
                            }
                            a.gd = g + " [" + xh(a) + "]";
                            th(a)
                        }
                    } finally {
                        uh(a)
                    }
                }
        };
        L.prototype.Uh = function(a, b) {
            y("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
            this.dispatchEvent(yh(a, "progress"));
            this.dispatchEvent(yh(a, b ? "downloadprogress" : "uploadprogress"))
        }
        ;
        var yh = function(a, b) {
            return {
                type: b,
                lengthComputable: a.lengthComputable,
                loaded: a.loaded,
                total: a.total
            }
        }
          , uh = function(a, b) {
            if (a.j) {
                rh(a);
                var c = a.j
                  , d = a.Ye[0] ? function() {}
                : null;
                a.j = null;
                a.Ye = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                    me(a.P, "Problem encountered resetting onreadystatechange: " + e.message)
                }
            }
        }
          , rh = function(a) {
            a.j && a.Ue && (a.j.ontimeout = null);
            a.Qe && (u.clearTimeout(a.Qe),
            a.Qe = null)
        };
        L.prototype.isActive = function() {
            return !!this.j
        }
        ;
        var wh = function(a) {
            return a.j ? a.j.readyState : 0
        }
          , xh = function(a) {
            try {
                return 2 < wh(a) ? a.j.status : -1
            } catch (b) {
                return -1
            }
        };
        L.prototype.getResponse = function() {
            try {
                if (!this.j)
                    return null;
                if ("response"in this.j)
                    return this.j.response;
                switch (this.Ge) {
                case "":
                case "text":
                    return this.j.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer"in this.j)
                        return this.j.mozResponseArrayBuffer
                }
                me(this.P, "Response type " + this.Ge + " is not supported on this browser");
                return null
            } catch (a) {
                return ne(this.P, "Can not get response: " + a.message),
                null
            }
        }
        ;
        L.prototype.getResponseHeader = function(a) {
            if (this.j && 4 == wh(this))
                return a = this.j.getResponseHeader(a),
                null === a ? void 0 : a
        }
        ;
        L.prototype.getAllResponseHeaders = function() {
            return this.j && 2 <= wh(this) ? this.j.getAllResponseHeaders() || "" : ""
        }
        ;
        var qh = function(a, b) {
            return b + " [" + a.Ih + " " + a.pe + " " + xh(a) + "]"
        };
        var zh = {
            Nk: {
                Yd: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                Ie: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                he: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                id: "b"
            },
            dl: {
                Yd: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                Ie: "https://securetoken.googleapis.com/v1/token",
                he: "https://identitytoolkit.googleapis.com/v2/",
                id: "p"
            },
            fl: {
                Yd: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                Ie: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                he: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                id: "s"
            },
            gl: {
                Yd: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                Ie: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                he: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
                id: "t"
            }
        }, Ah = function(a) {
            for (var b in zh)
                if (zh[b].id === a)
                    return a = zh[b],
                    {
                        firebaseEndpoint: a.Yd,
                        secureTokenEndpoint: a.Ie,
                        identityPlatformEndpoint: a.he
                    };
            return null
        }, Bh;
        Bh = Ah("__EID__") ? "__EID__" : void 0;
        var Ch = function() {
            var a = M();
            return xb && !!Kb && 11 == Kb || /Edge\/\d+/.test(a)
        }
          , Fh = function() {
            return u.window && u.window.location.href || self && self.location && self.location.href || ""
        }
          , Gh = function(a, b) {
            b = b || u.window;
            var c = "about:blank";
            a && (c = Qc(Tc(a) || Xc));
            b.location.href = c
        }
          , Hh = function(a, b, c) {
            b = b || u.window;
            c ? b.location.replace(a) : b.location.replace(Qc(Tc(a) || Xc))
        }
          , Ih = function(a, b) {
            var c = [], d;
            for (d in a)
                d in b ? typeof a[d] != typeof b[d] ? c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < Ih(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
            for (var e in b)
                e in a || c.push(e);
            return c
        }
          , Kh = function() {
            var a = M();
            a = "Chrome" != Jh(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;
            return a && 30 > a ? !1 : !xb || !Kb || 9 < Kb
        }
          , Lh = function(a) {
            a = (a || M()).toLowerCase();
            return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1
        }
          , Mh = function(a) {
            a = a || u.window;
            try {
                a.close()
            } catch (b) {}
        }
          , Nh = function(a, b, c) {
            var d = Math.floor(1E9 * Math.random()).toString();
            b = b || 500;
            c = c || 600;
            var e = (window.screen.availHeight - c) / 2
              , f = (window.screen.availWidth - b) / 2;
            b = {
                width: b,
                height: c,
                top: 0 < e ? e : 0,
                left: 0 < f ? f : 0,
                location: !0,
                resizable: !0,
                statusbar: !0,
                toolbar: !1
            };
            c = M().toLowerCase();
            d && (b.target = d,
            A(c, "crios/") && (b.target = "_blank"));
            "Firefox" == Jh(M()) && (a = a || "http://localhost",
            b.scrollbars = !0);
            e = a || "";
            b || (b = {});
            a = window;
            d = e instanceof D ? e : Tc("undefined" != typeof e.href ? e.href : String(e)) || Xc;
            f = void 0 !== self.crossOriginIsolated;
            c = "strict-origin-when-cross-origin";
            window.Request && (c = (new Request("/")).referrerPolicy);
            var g = "unsafe-url" === c;
            c = b.noreferrer;
            if (f && c) {
                if (g)
                    throw Error("Cannot use the noreferrer option on a page that sets a referrer-policy of `unsafe-url` in modern browsers!");
                c = !1
            }
            e = b.target || e.target;
            f = [];
            for (h in b)
                switch (h) {
                case "width":
                case "height":
                case "top":
                case "left":
                    f.push(h + "=" + b[h]);
                    break;
                case "target":
                case "noopener":
                case "noreferrer":
                    break;
                default:
                    f.push(h + "=" + (b[h] ? 1 : 0))
                }
            var h = f.join(",");
            (B("iPhone") && !B("iPod") && !B("iPad") || B("iPad") || B("iPod")) && a.navigator && a.navigator.standalone && e && "_self" != e ? (h = Pe(document, "A"),
            sc(h, "A"),
            d = d instanceof D ? d : Wc(d),
            h.href = Qc(d),
            h.target = e,
            c && (h.rel = "noreferrer"),
            d = document.createEvent("MouseEvent"),
            d.initMouseEvent("click", !0, !0, a, 1),
            h.dispatchEvent(d),
            h = {}) : c ? (h = md("", a, e, h),
            d = Qc(d),
            h && (zb && A(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"),
            h.opener = null,
            "" === d && (d = "javascript:''"),
            a = Hc("b/12014412, meta tag with sanitized URL"),
            d = Xa(d),
            a = id(a, '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + d + '">'),
            (d = h.document) && d.write && (d.write(ed(a)),
            d.close()))) : ((h = md(d, a, e, h)) && b.noopener && (h.opener = null),
            h && b.noreferrer && (h.opener = null));
            if (h)
                try {
                    h.focus()
                } catch (k) {}
            return h
        }
          , Oh = function() {
            var a = M().match(/OS (\d+)_.*CriOS\/(\d+)\./i);
            return a && 2 < a.length ? 10 <= parseInt(a[1], 10) && 55 <= parseInt(a[2], 10) : !1
        }
          , Ph = function(a) {
            return new I(function(b) {
                var c = function() {
                    nh(2E3).then(function() {
                        if (!a || a.closed)
                            b();
                        else
                            return c()
                    })
                };
                return c()
            }
            )
        }
          , Rh = function(a, b) {
            var c = G(b);
            b = c.ta;
            c = c.ga;
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                0 == e.indexOf("chrome-extension://") ? e = G(e).ga == c && "chrome-extension" == b : "http" != b && "https" != b ? e = !1 : Qh.test(e) ? e = c == e : (e = e.split(".").join("\\."),
                e = (new RegExp("^(.+\\." + e + "|" + e + ")$","i")).test(c));
                if (e)
                    return !0
            }
            return !1
        }
          , Qh = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
          , Sh = /^[^@]+@[^@]+$/
          , Th = function() {
            var a = null;
            return (new I(function(b) {
                "complete" == u.document.readyState ? b() : (a = function() {
                    b()
                }
                ,
                If(window, "load", a))
            }
            )).h(function(b) {
                Rf(window, "load", a);
                throw b;
            })
        }
          , Vh = function() {
            return Uh() ? Th().then(function() {
                return new I(function(a, b) {
                    var c = u.document
                      , d = setTimeout(function() {
                        b(Error("Cordova framework is not ready."))
                    }, 1E3);
                    c.addEventListener("deviceready", function() {
                        clearTimeout(d);
                        a()
                    }, !1)
                }
                )
            }) : K(Error("Cordova must run in an Android or iOS file scheme."))
        }
          , Uh = function() {
            var a = M();
            return !("file:" !== Wh() && "ionic:" !== Wh() || !a.toLowerCase().match(/iphone|ipad|ipod|android/))
        }
          , Xh = function(a) {
            a = a || u.window;
            try {
                return !(!a || a == a.top)
            } catch (b) {
                return !1
            }
        }
          , Yh = function() {
            var a = u.window;
            try {
                var b = a && a.opener;
                return !(!b || !Xh(b))
            } catch (c) {
                return !1
            }
        }
          , Zh = function() {
            return "undefined" !== typeof u.WorkerGlobalScope && "function" === typeof u.importScripts
        }
          , $h = function() {
            return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase.INTERNAL.hasOwnProperty("node") ? "Node" : Zh() ? "Worker" : "Browser"
        }
          , ai = function() {
            var a = $h();
            return "ReactNative" === a || "Node" === a
        }
          , bi = function() {
            for (var a = 50, b = []; 0 < a; )
                b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
                a--;
            return b.join("")
        }
          , Jh = function(a) {
            var b = a.toLowerCase();
            if (A(b, "opera/") || A(b, "opr/") || A(b, "opios/"))
                return "Opera";
            if (A(b, "iemobile"))
                return "IEMobile";
            if (A(b, "msie") || A(b, "trident/"))
                return "IE";
            if (A(b, "edge/"))
                return "Edge";
            if (A(b, "firefox/"))
                return "Firefox";
            if (A(b, "silk/"))
                return "Silk";
            if (A(b, "blackberry"))
                return "Blackberry";
            if (A(b, "webos"))
                return "Webos";
            if (!A(b, "safari/") || A(b, "chrome/") || A(b, "crios/") || A(b, "android"))
                if (!A(b, "chrome/") && !A(b, "crios/") || A(b, "edge/")) {
                    if (A(b, "android"))
                        return "Android";
                    if ((a = a.match(RegExp("([a-zA-Z\\d\\.]+)/[a-zA-Z\\d\\.]*$"))) && 2 == a.length)
                        return a[1]
                } else
                    return "Chrome";
            else
                return "Safari";
            return "Other"
        }
          , ci = {
            Pk: "FirebaseCore-web",
            Rk: "FirebaseUI-web",
            Wk: "gcip-iap"
        }
          , di = function(a, b, c) {
            c = c || [];
            var d = [], e = {}, f;
            for (f in ci)
                e[ci[f]] = !0;
            for (f = 0; f < c.length; f++)
                "undefined" !== typeof e[c[f]] && (delete e[c[f]],
                d.push(c[f]));
            d.sort();
            c = d;
            c.length || (c = ["FirebaseCore-web"]);
            d = $h();
            return ("Browser" === d ? Jh(M()) : "Worker" === d ? Jh(M()) + "-" + d : d) + "/" + a + "/" + b + "/" + c.join(",")
        }
          , M = function() {
            return u.navigator && u.navigator.userAgent || ""
        }
          , N = function(a, b) {
            a = a.split(".");
            b = b || u;
            var c;
            for (c = 0; c < a.length && "object" == typeof b && null != b; c++)
                b = b[a[c]];
            c != a.length && (b = void 0);
            return b
        }
          , fi = function() {
            try {
                var a = u.localStorage
                  , b = ei();
                if (a)
                    return a.setItem(b, "1"),
                    a.removeItem(b),
                    Ch() ? !!u.indexedDB : !0
            } catch (c) {
                return Zh() && !!u.indexedDB
            }
            return !1
        }
          , hi = function() {
            return (gi() || "chrome-extension:" === Wh() || Uh()) && !ai() && fi() && !Zh()
        }
          , gi = function() {
            return "http:" === Wh() || "https:" === Wh()
        }
          , Wh = function() {
            return u.location && u.location.protocol || null
        }
          , ii = function(a) {
            a = a || M();
            return Lh(a) || "Firefox" == Jh(a) ? !1 : !0
        }
          , ji = function(a) {
            return "undefined" === typeof a ? null : JSON.stringify(a)
        }
          , ki = function(a) {
            var b = {}, c;
            for (c in a)
                a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
            return b
        }
          , li = function(a, b) {
            a = yc(a);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d in a && delete a[d]
            }
            return a
        }
          , mi = function(a) {
            if (null !== a)
                return JSON.parse(a)
        }
          , ei = function(a) {
            return a ? a : "" + Math.floor(1E9 * Math.random()).toString()
        }
          , ni = function(a) {
            a = a || M();
            return "Safari" == Jh(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0
        }
          , oi = function() {
            var a = u.___jsl;
            if (a && a.H)
                for (var b in a.H)
                    if (a.H[b].r = a.H[b].r || [],
                    a.H[b].L = a.H[b].L || [],
                    a.H[b].r = a.H[b].L.concat(),
                    a.CP)
                        for (var c = 0; c < a.CP.length; c++)
                            a.CP[c] = null
        }
          , pi = function(a, b) {
            if (a > b)
                throw Error("Short delay should be less than long delay!");
            this.ri = a;
            this.Mj = b;
            a = M();
            b = $h();
            this.Ej = Lh(a) || "ReactNative" === b
        };
        pi.prototype.get = function() {
            var a = u.navigator;
            return (a && "boolean" === typeof a.onLine && (gi() || "chrome-extension:" === Wh() || "undefined" !== typeof a.connection) ? a.onLine : 1) ? this.Ej ? this.Mj : this.ri : Math.min(5E3, this.ri)
        }
        ;
        var qi = function() {
            var a = u.document;
            return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : !0
        }
          , ri = function() {
            var a = u.document
              , b = null;
            return qi() || !a ? J() : (new I(function(c) {
                b = function() {
                    qi() && (a.removeEventListener("visibilitychange", b, !1),
                    c())
                }
                ;
                a.addEventListener("visibilitychange", b, !1)
            }
            )).h(function(c) {
                a.removeEventListener("visibilitychange", b, !1);
                throw c;
            })
        }
          , si = function(a) {
            "undefined" !== typeof console && "function" === typeof console.error && console.error(a)
        }
          , ti = function(a) {
            try {
                var b = new Date(parseInt(a, 10));
                if (!isNaN(b.getTime()) && !/[^0-9]/.test(a))
                    return b.toUTCString()
            } catch (c) {}
            return null
        }
          , ui = function() {
            return !(!N("fireauth.oauthhelper", u) && !N("fireauth.iframe", u))
        }
          , vi = function() {
            if (u.document)
                try {
                    var a = Oe("META", {
                        name: "referrer",
                        content: "no-referrer"
                    })
                      , b = document.getElementsByTagName("HEAD");
                    b.length && b[0].appendChild(a)
                } catch (c) {}
        }
          , wi = function() {
            var a = u.navigator;
            return a && a.serviceWorker && a.serviceWorker.controller || null
        }
          , xi = function() {
            var a = u.navigator;
            return a && a.serviceWorker ? J().then(function() {
                return a.serviceWorker.ready
            }).then(function(b) {
                return b.active || null
            }).h(function() {
                return null
            }) : J(null)
        }
          , yi = function(a) {
            var b = {};
            a.split("&").forEach(function(c) {
                c = c.split("=");
                1 < c.length && (b[decodeURIComponent(c[0])] = decodeURIComponent(c[1]))
            });
            return b
        };
        var zi = {}
          , Ai = function(a) {
            zi[a] || (zi[a] = !0,
            "undefined" !== typeof console && "function" === typeof console.warn && console.warn(a))
        };
        var Bi;
        try {
            var Ci = {};
            Object.defineProperty(Ci, "abcd", {
                configurable: !0,
                enumerable: !0,
                value: 1
            });
            Object.defineProperty(Ci, "abcd", {
                configurable: !0,
                enumerable: !0,
                value: 2
            });
            Bi = 2 == Ci.abcd
        } catch (a) {
            Bi = !1
        }
        var O = function(a, b, c) {
            Bi ? Object.defineProperty(a, b, {
                configurable: !0,
                enumerable: !0,
                value: c
            }) : a[b] = c
        }
          , Di = function(a, b) {
            if (b)
                for (var c in b)
                    b.hasOwnProperty(c) && O(a, c, b[c])
        }
          , Ei = function(a) {
            var b = {};
            Di(b, a);
            return b
        }
          , Fi = function(a, b) {
            if (!b || !b.length)
                return !0;
            if (!a)
                return !1;
            for (var c = 0; c < b.length; c++) {
                var d = a[b[c]];
                if (void 0 === d || null === d || "" === d)
                    return !1
            }
            return !0
        }
          , Gi = function(a) {
            var b = a;
            if ("object" == typeof a && null != a) {
                b = "length"in a ? [] : {};
                for (var c in a)
                    O(b, c, Gi(a[c]))
            }
            return b
        };
        var Hi = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")
          , Ii = ["client_id", "response_type", "scope", "redirect_uri", "state"]
          , Ji = {
            Qk: {
                fd: "locale",
                wc: 700,
                vc: 600,
                providerId: "facebook.com",
                vd: Ii
            },
            Sk: {
                fd: null,
                wc: 500,
                vc: 750,
                providerId: "github.com",
                vd: Ii
            },
            Tk: {
                fd: "hl",
                wc: 515,
                vc: 680,
                providerId: "google.com",
                vd: Ii
            },
            jl: {
                fd: "lang",
                wc: 485,
                vc: 705,
                providerId: "twitter.com",
                vd: Hi
            },
            Mk: {
                fd: "locale",
                wc: 640,
                vc: 600,
                providerId: "apple.com",
                vd: []
            }
        }
          , Ki = function(a) {
            for (var b in Ji)
                if (Ji[b].providerId == a)
                    return Ji[b];
            return null
        }
          , Li = function(a) {
            return (a = Ki(a)) && a.vd || []
        }
          , Mi = function(a) {
            return "string" === typeof a && 0 == a.indexOf("saml.")
        };
        var P = function(a, b, c) {
            this.code = "auth/" + a;
            this.message = b || Ni[a] || "";
            this.ji = c || null
        };
        x(P, Error);
        P.prototype.m = function() {
            var a = {
                code: this.code,
                message: this.message
            };
            this.ji && (a.serverResponse = this.ji);
            return a
        }
        ;
        P.prototype.toJSON = function() {
            return this.m()
        }
        ;
        var Oi = function(a) {
            var b = a && a.code;
            return b ? new P(b.substring(5),a.message,a.serverResponse) : null
        }
          , Ni = {
            "api-key-service-blocked": "The request is denied because it violates [API key HTTP restrictions](https://cloud.google.com/docs/authentication/api-keys#adding_http_restrictions).",
            "admin-restricted-operation": "This operation is restricted to administrators only.",
            "argument-error": "",
            "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
            "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
            "bad-request": "The requested action is invalid.",
            "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
            "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
            "cordova-not-ready": "Cordova framework is not ready.",
            "cors-unsupported": "This browser is not supported.",
            "credential-already-in-use": "This credential is already associated with a different user account.",
            "custom-token-mismatch": "The custom token corresponds to a different audience.",
            "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
            "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
            "email-change-needs-verification": "Multi-factor users must always have a verified email.",
            "email-already-in-use": "The email address is already in use by another account.",
            "expired-action-code": "The action code has expired. ",
            "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
            "internal-error": "An internal error has occurred.",
            "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
            "invalid-app-id": "The mobile app identifier is not registed for the current project.",
            "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
            "invalid-auth-event": "An internal error has occurred.",
            "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
            "invalid-continue-uri": "The continue URL provided in the request is invalid.",
            "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
            "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
            "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
            "invalid-email": "The email address is badly formatted.",
            "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
            "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
            "invalid-credential": "The supplied auth credential is malformed or has expired.",
            "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
            "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
            "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
            "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
            "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
            "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
            "wrong-password": "The password is invalid or the user does not have a password.",
            "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
            "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
            "invalid-provider-id": "The specified provider ID is invalid.",
            "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
            "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
            "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
            "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
            "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
            "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
            "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
            "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
            "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
            "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
            "missing-continue-uri": "A continue URL must be provided in the request.",
            "missing-iframe-start": "An internal error has occurred.",
            "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
            "missing-multi-factor-info": "No second factor identifier is provided.",
            "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
            "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
            "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
            "app-deleted": "This instance of FirebaseApp has been deleted.",
            "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
            "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
            "no-auth-event": "An internal error has occurred.",
            "no-such-provider": "User was not linked to an account with the given provider.",
            "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
            "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
            "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
            "password-does-not-meet-requirements": "The provided password does not meet the configured requirements.",
            "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
            "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
            "provider-already-linked": "User can only be linked to one identity for the given provider.",
            "quota-exceeded": "The project's quota for this operation has been exceeded.",
            "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
            "redirect-operation-pending": "A redirect sign-in operation is already pending.",
            "rejected-credential": "The request contains malformed or mismatching credentials.",
            "second-factor-already-in-use": "The second factor is already enrolled on this account.",
            "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
            "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
            timeout: "The operation has timed out.",
            "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
            "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
            "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
            "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
            "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
            "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
            "unverified-email": "The operation requires a verified email.",
            "user-cancelled": "The user did not grant your application the permissions it requested.",
            "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
            "user-disabled": "The user account has been disabled by an administrator.",
            "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
            "user-signed-out": "",
            "weak-password": "The password must be 6 characters long or more.",
            "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
        };
        var Pi = function(a, b, c, d, e, f, g) {
            this.Ic = a;
            this.T = b || null;
            this.Xa = c || null;
            this.xd = d || null;
            this.dg = f || null;
            this.C = g || null;
            this.Y = e || null;
            if (this.Xa || this.Y) {
                if (this.Xa && this.Y)
                    throw new P("invalid-auth-event");
                if (this.Xa && !this.xd)
                    throw new P("invalid-auth-event");
            } else
                throw new P("invalid-auth-event");
        };
        l = Pi.prototype;
        l.getType = function() {
            return this.Ic
        }
        ;
        l.getUid = function() {
            var a = [];
            a.push(this.Ic);
            this.T && a.push(this.T);
            this.xd && a.push(this.xd);
            this.C && a.push(this.C);
            return a.join("-")
        }
        ;
        l.mc = function() {
            return this.xd
        }
        ;
        l.getError = function() {
            return this.Y
        }
        ;
        l.m = function() {
            return {
                type: this.Ic,
                eventId: this.T,
                urlResponse: this.Xa,
                sessionId: this.xd,
                postBody: this.dg,
                tenantId: this.C,
                error: this.Y && this.Y.m()
            }
        }
        ;
        var Qi = function(a) {
            a = a || {};
            return a.type ? new Pi(a.type,a.eventId,a.urlResponse,a.sessionId,a.error && Oi(a.error),a.postBody,a.tenantId) : null
        };
        var Ri = function(a, b, c, d, e, f, g, h, k, m, p, r, t, z, ca, qb, ra) {
            this.A = a;
            this.B = b;
            this.Ic = c;
            this.T = d || null;
            this.Bc = e || null;
            this.Pa = f || null;
            this.sf = g || null;
            this.cc = h || null;
            this.cd = k || null;
            this.hh = m || null;
            this.U = p || [];
            this.Eb = r || null;
            this.pi = t || null;
            this.C = z || null;
            this.yc = ca || null;
            this.Jb = qb || null;
            this.bi = ra || null
        };
        Ri.prototype.getType = function() {
            return this.Ic
        }
        ;
        Ri.prototype.m = function() {
            return {
                apiKey: this.A,
                appName: this.B,
                type: this.Ic,
                eventId: this.T,
                redirectUrl: this.Bc,
                clientVersion: this.Pa,
                displayName: this.sf,
                apn: this.cc,
                ibi: this.cd,
                eid: this.hh,
                fw: this.U,
                clientId: this.Eb,
                sha1Cert: this.pi,
                tenantId: this.C,
                providerId: this.yc,
                appId: this.Jb,
                publicKey: this.bi
            }
        }
        ;
        var Si = function(a, b) {
            if (!b || !a || !a.mfaEnrollmentId)
                throw new P("internal-error","Internal assert: invalid MultiFactorInfo object");
            O(this, "uid", a.mfaEnrollmentId);
            O(this, "displayName", a.displayName || null);
            O(this, "enrollmentTime", a.enrolledAt ? (new Date(a.enrolledAt)).toUTCString() : null);
            O(this, "factorId", b)
        };
        Si.prototype.m = function() {
            return {
                uid: this.uid,
                displayName: this.displayName,
                factorId: this.factorId,
                enrollmentTime: this.enrollmentTime
            }
        }
        ;
        var Vi = function(a) {
            try {
                if (a.phoneInfo)
                    return new Ti(a);
                if (a.totpInfo)
                    return new Ui(a)
            } catch (b) {}
            return null
        }
          , Ti = function(a) {
            var b = a.phoneInfo;
            if (!b)
                throw new P("internal-error","Internal assert: invalid Phone MultiFactorInfo object");
            Si.call(this, a, "phone");
            O(this, "phoneNumber", b)
        };
        q(Ti, Si);
        Ti.prototype.m = function() {
            var a = Si.prototype.m.call(this);
            a.phoneNumber = this.phoneNumber;
            return a
        }
        ;
        var Ui = function(a) {
            var b = a.totpInfo;
            if (!b)
                throw new P("internal-error","Internal assert: invalid TOTP MultiFactorInfo object");
            Si.call(this, a, "totp");
            O(this, "totpInfo", b)
        };
        q(Ui, Si);
        Ui.prototype.m = function() {
            var a = Si.prototype.m.call(this);
            a.totpInfo = this.totpInfo;
            return a
        }
        ;
        var Wi = function(a) {
            var b = {}
              , c = a.email
              , d = a.newEmail
              , e = a.requestType;
            a = Vi(a.mfaInfo);
            if (!e || "EMAIL_SIGNIN" != e && "VERIFY_AND_CHANGE_EMAIL" != e && !c || "VERIFY_AND_CHANGE_EMAIL" == e && !d || "REVERT_SECOND_FACTOR_ADDITION" == e && !a)
                throw Error("Invalid checkActionCode response!");
            "VERIFY_AND_CHANGE_EMAIL" == e ? (b.fromEmail = c || null,
            b.previousEmail = c || null,
            b.email = d) : (b.fromEmail = d || null,
            b.previousEmail = d || null,
            b.email = c || null);
            b.multiFactorInfo = a || null;
            O(this, "operation", e);
            O(this, "data", Gi(b))
        };
        var Yi = function(a) {
            a = G(a);
            var b = F(a, "apiKey") || null
              , c = F(a, "oobCode") || null
              , d = F(a, "mode") || null;
            d = d ? Xi[d] || null : null;
            if (!b || !c || !d)
                throw new P("argument-error","apiKey, oobCodeand mode are required in a valid action code URL.");
            Di(this, {
                apiKey: b,
                operation: d,
                code: c,
                continueUrl: F(a, "continueUrl") || null,
                languageCode: F(a, "languageCode") || null,
                tenantId: F(a, "tenantId") || null
            })
        }
          , Zi = function(a) {
            try {
                return new Yi(a)
            } catch (b) {
                return null
            }
        }
          , Xi = {
            recoverEmail: "RECOVER_EMAIL",
            resetPassword: "PASSWORD_RESET",
            revertSecondFactorAddition: "REVERT_SECOND_FACTOR_ADDITION",
            signIn: "EMAIL_SIGNIN",
            verifyAndChangeEmail: "VERIFY_AND_CHANGE_EMAIL",
            verifyEmail: "VERIFY_EMAIL"
        };
        var $i = function(a, b, c, d, e, f, g) {
            this.jh = "https://" + d + "/__/auth/handler?firebaseError=" + encodeURIComponent(ji((new P("app-not-installed")).m()));
            O(this, "fallbackUrl", this.jh);
            this.Af = a;
            O(this, "fdlDomain", a);
            this.Ae = b;
            O(this, "platform", b);
            this.Jd = c;
            O(this, "appIdentifier", c);
            this.J = d;
            O(this, "authDomain", d);
            this.qe = e;
            O(this, "payload", e);
            this.B = null;
            O(this, "appName", null);
            this.Eb = f || null;
            O(this, "clientId", this.Eb);
            this.Jb = g || null;
            O(this, "firebaseAppId", this.Jb)
        }
          , aj = function(a, b) {
            a.B = b || null;
            O(a, "appName", b)
        }
          , bj = function(a) {
            var b = G(a);
            a = F(b, "fdlDomain");
            var c = F(b, "platform")
              , d = F(b, "appIdentifier")
              , e = F(b, "authDomain")
              , f = F(b, "link");
            b = F(b, "appName");
            return a && c && d && e && f && b ? (a = new $i(a,c,d,e,f),
            aj(a, b),
            a) : null
        }
          , cj = function(a) {
            var b = G(a)
              , c = F(b, "link")
              , d = F(G(c), "link");
            b = F(b, "deep_link_id");
            return F(G(b), "link") || b || d || c || a
        }
          , dj = function(a, b) {
            var c = Kd("https", a.Af, null, "/");
            "android" == a.Ae ? (E(c, "apn", a.Jd),
            E(c, "afl", b)) : "ios" == a.Ae && (E(c, "ibi", a.Jd),
            E(c, "ifl", b));
            return c
        };
        $i.prototype.toString = function(a) {
            if ("android_non_gmscore" == this.Ae)
                a = this.qe;
            else if (this.Af)
                if (a) {
                    a = Kd("https", this.J, null, "/__/auth/callback");
                    E(a, "fdlDomain", this.Af);
                    E(a, "platform", this.Ae);
                    E(a, "appIdentifier", this.Jd);
                    E(a, "authDomain", this.J);
                    E(a, "link", this.qe);
                    E(a, "appName", this.B || "");
                    var b = dj(this, a.toString());
                    E(b, "link", a.toString());
                    a = b.toString()
                } else
                    a = dj(this, this.jh),
                    E(a, "link", this.qe),
                    a = a.toString();
            else
                a = this.Eb ? this.Eb.split(".").reverse().join(".") : this.Jb ? "app-" + this.Jb.replace(/:/g, "-") : this.Jd,
                a = Kd(a, this.Eb || this.Jb ? "firebaseauth" : "google", null, "/link"),
                E(a, "deep_link_id", this.qe),
                a = a.toString();
            return a
        }
        ;
        var ej = function(a) {
            var b = "unauthorized-domain"
              , c = void 0
              , d = G(a);
            a = d.ga;
            d = d.ta;
            "chrome-extension" == d ? c = od("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = od("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";
            P.call(this, b, c)
        };
        q(ej, P);
        var gj = function(a) {
            var b = fj(a);
            if (!(b && b.sub && b.iss && b.aud && b.exp))
                throw Error("Invalid JWT");
            this.Ij = a;
            this.yf = b.exp;
            this.Kj = b.sub;
            a = Date.now() / 1E3;
            this.wj = b.iat || (a > this.yf ? this.yf : a);
            this.Hb = b.email || null;
            this.yc = b.provider_id || b.firebase && b.firebase.sign_in_provider || null;
            this.C = b.firebase && b.firebase.tenant || null;
            this.Qi = !!b.is_anonymous || "anonymous" == this.yc;
            this.sf = b.display_name || null
        };
        gj.prototype.getEmail = function() {
            return this.Hb
        }
        ;
        gj.prototype.isAnonymous = function() {
            return this.Qi
        }
        ;
        gj.prototype.toString = function() {
            return this.Ij
        }
        ;
        var hj = function(a) {
            try {
                return new gj(a)
            } catch (b) {
                return null
            }
        }
          , fj = function(a) {
            if (!a)
                return null;
            a = a.split(".");
            if (3 != a.length)
                return null;
            a = a[1];
            for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++)
                a += ".";
            try {
                var d = Nb(a);
                a = [];
                for (c = b = 0; b < d.length; ) {
                    var e = d[b++];
                    if (128 > e)
                        a[c++] = String.fromCharCode(e);
                    else if (191 < e && 224 > e) {
                        var f = d[b++];
                        a[c++] = String.fromCharCode((e & 31) << 6 | f & 63)
                    } else if (239 < e && 365 > e) {
                        f = d[b++];
                        var g = d[b++]
                          , h = d[b++]
                          , k = ((e & 7) << 18 | (f & 63) << 12 | (g & 63) << 6 | h & 63) - 65536;
                        a[c++] = String.fromCharCode(55296 + (k >> 10));
                        a[c++] = String.fromCharCode(56320 + (k & 1023))
                    } else
                        f = d[b++],
                        g = d[b++],
                        a[c++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63)
                }
                return JSON.parse(a.join(""))
            } catch (m) {}
            return null
        };
        var ij = function(a) {
            var b = fj(a);
            if (!(b && b.exp && b.auth_time && b.iat))
                throw new P("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
            Di(this, {
                token: a,
                expirationTime: ti(1E3 * b.exp),
                authTime: ti(1E3 * b.auth_time),
                issuedAtTime: ti(1E3 * b.iat),
                signInProvider: b.firebase && b.firebase.sign_in_provider ? b.firebase.sign_in_provider : null,
                signInSecondFactor: b.firebase && b.firebase.sign_in_second_factor ? b.firebase.sign_in_second_factor : null,
                claims: b
            })
        };
        var jj = function(a, b) {
            if (!a && !b)
                throw new P("internal-error","Internal assert: no raw session string available");
            if (a && b)
                throw new P("internal-error","Internal assert: unable to determine the session type");
            this.ge = a || null;
            this.Mh = b || null;
            this.type = this.ge ? "enroll" : "signin"
        };
        jj.prototype.Zc = function() {
            return this.ge ? J(this.ge) : J(this.Mh)
        }
        ;
        jj.prototype.m = function() {
            return "enroll" == this.type ? {
                multiFactorSession: {
                    idToken: this.ge
                }
            } : {
                multiFactorSession: {
                    pendingCredential: this.Mh
                }
            }
        }
        ;
        var kj = function() {};
        kj.prototype.Mb = function() {}
        ;
        kj.prototype.rc = function() {}
        ;
        kj.prototype.hd = function() {}
        ;
        kj.prototype.m = function() {}
        ;
        var lj = function(a, b) {
            return a.then(function(c) {
                if (c.idToken) {
                    var d = hj(c.idToken);
                    if (!d || b != d.Kj)
                        throw new P("user-mismatch");
                    return c
                }
                throw new P("user-mismatch");
            }).h(function(c) {
                throw c && c.code && "auth/user-not-found" == c.code ? new P("user-mismatch") : c;
            })
        }
          , mj = function(a, b) {
            if (b)
                this.gb = b;
            else
                throw new P("internal-error","failed to construct a credential");
            O(this, "providerId", a);
            O(this, "signInMethod", a)
        };
        l = mj.prototype;
        l.Mb = function(a) {
            return nj(a, this.Pb())
        }
        ;
        l.rc = function(a, b) {
            var c = this.Pb();
            c.idToken = b;
            return oj(a, c)
        }
        ;
        l.hd = function(a, b) {
            var c = this.Pb();
            return lj(pj(a, c), b)
        }
        ;
        l.Pb = function() {
            return {
                pendingToken: this.gb,
                requestUri: "http://localhost"
            }
        }
        ;
        l.m = function() {
            return {
                providerId: this.providerId,
                signInMethod: this.signInMethod,
                pendingToken: this.gb
            }
        }
        ;
        var qj = function(a) {
            if (a && a.providerId && a.signInMethod && 0 == a.providerId.indexOf("saml.") && a.pendingToken)
                try {
                    return new mj(a.providerId,a.pendingToken)
                } catch (b) {}
            return null
        }
          , rj = function(a, b, c) {
            this.gb = null;
            if (b.idToken || b.accessToken)
                b.idToken && O(this, "idToken", b.idToken),
                b.accessToken && O(this, "accessToken", b.accessToken),
                b.nonce && !b.pendingToken && O(this, "nonce", b.nonce),
                b.pendingToken && (this.gb = b.pendingToken);
            else if (b.oauthToken && b.oauthTokenSecret)
                O(this, "accessToken", b.oauthToken),
                O(this, "secret", b.oauthTokenSecret);
            else
                throw new P("internal-error","failed to construct a credential");
            O(this, "providerId", a);
            O(this, "signInMethod", c)
        };
        l = rj.prototype;
        l.Mb = function(a) {
            return nj(a, this.Pb())
        }
        ;
        l.rc = function(a, b) {
            var c = this.Pb();
            c.idToken = b;
            return oj(a, c)
        }
        ;
        l.hd = function(a, b) {
            var c = this.Pb();
            return lj(pj(a, c), b)
        }
        ;
        l.Pb = function() {
            var a = {};
            this.idToken && (a.id_token = this.idToken);
            this.accessToken && (a.access_token = this.accessToken);
            this.secret && (a.oauth_token_secret = this.secret);
            a.providerId = this.providerId;
            this.nonce && !this.gb && (a.nonce = this.nonce);
            a = {
                postBody: Od(a).toString(),
                requestUri: "http://localhost"
            };
            this.gb && (delete a.postBody,
            a.pendingToken = this.gb);
            return a
        }
        ;
        l.m = function() {
            var a = {
                providerId: this.providerId,
                signInMethod: this.signInMethod
            };
            this.idToken && (a.oauthIdToken = this.idToken);
            this.accessToken && (a.oauthAccessToken = this.accessToken);
            this.secret && (a.oauthTokenSecret = this.secret);
            this.nonce && (a.nonce = this.nonce);
            this.gb && (a.pendingToken = this.gb);
            return a
        }
        ;
        var sj = function(a) {
            if (a && a.providerId && a.signInMethod) {
                var b = {
                    idToken: a.oauthIdToken,
                    accessToken: a.oauthTokenSecret ? null : a.oauthAccessToken,
                    oauthTokenSecret: a.oauthTokenSecret,
                    oauthToken: a.oauthTokenSecret && a.oauthAccessToken,
                    nonce: a.nonce,
                    pendingToken: a.pendingToken
                };
                try {
                    return new rj(a.providerId,b,a.signInMethod)
                } catch (c) {}
            }
            return null
        }
          , tj = function(a, b) {
            this.bk = b || [];
            Di(this, {
                providerId: a,
                isOAuthProvider: !0
            });
            this.dh = {};
            this.Nf = (Ki(a) || {}).fd || null;
            this.rf = null
        };
        tj.prototype.setCustomParameters = function(a) {
            this.dh = yc(a);
            return this
        }
        ;
        var uj = function(a) {
            if (!Mi(a))
                throw new P("argument-error",'SAML provider IDs must be prefixed with "saml."');
            tj.call(this, a, [])
        };
        x(uj, tj);
        var vj = function(a) {
            tj.call(this, a, Ii);
            this.og = []
        };
        x(vj, tj);
        vj.prototype.addScope = function(a) {
            pb(this.og, a) || this.og.push(a);
            return this
        }
        ;
        vj.prototype.rh = function() {
            return ub(this.og)
        }
        ;
        vj.prototype.credential = function(a, b) {
            a = v(a) ? {
                idToken: a.idToken || null,
                accessToken: a.accessToken || null,
                nonce: a.rawNonce || null
            } : {
                idToken: a || null,
                accessToken: b || null
            };
            if (!a.idToken && !a.accessToken)
                throw new P("argument-error","credential failed: must provide the ID token and/or the access token.");
            return new rj(this.providerId,a,this.providerId)
        }
        ;
        var wj = function() {
            vj.call(this, "facebook.com")
        };
        x(wj, vj);
        O(wj, "PROVIDER_ID", "facebook.com");
        O(wj, "FACEBOOK_SIGN_IN_METHOD", "facebook.com");
        var xj = function(a) {
            if (!a)
                throw new P("argument-error","credential failed: expected 1 argument (the OAuth access token).");
            var b = a;
            v(a) && (b = a.accessToken);
            return (new wj).credential({
                accessToken: b
            })
        }
          , yj = function() {
            vj.call(this, "github.com")
        };
        x(yj, vj);
        O(yj, "PROVIDER_ID", "github.com");
        O(yj, "GITHUB_SIGN_IN_METHOD", "github.com");
        var zj = function(a) {
            if (!a)
                throw new P("argument-error","credential failed: expected 1 argument (the OAuth access token).");
            var b = a;
            v(a) && (b = a.accessToken);
            return (new yj).credential({
                accessToken: b
            })
        }
          , Aj = function() {
            vj.call(this, "google.com");
            this.addScope("profile")
        };
        x(Aj, vj);
        O(Aj, "PROVIDER_ID", "google.com");
        O(Aj, "GOOGLE_SIGN_IN_METHOD", "google.com");
        var Bj = function(a, b) {
            var c = a;
            v(a) && (c = a.idToken,
            b = a.accessToken);
            return (new Aj).credential({
                idToken: c,
                accessToken: b
            })
        }
          , Cj = function() {
            tj.call(this, "twitter.com", Hi)
        };
        x(Cj, tj);
        O(Cj, "PROVIDER_ID", "twitter.com");
        O(Cj, "TWITTER_SIGN_IN_METHOD", "twitter.com");
        var Dj = function(a, b) {
            var c = a;
            v(c) || (c = {
                oauthToken: a,
                oauthTokenSecret: b
            });
            if (!c.oauthToken || !c.oauthTokenSecret)
                throw new P("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");
            return new rj("twitter.com",c,"twitter.com")
        }
          , Fj = function(a, b, c) {
            this.Hb = a;
            this.jd = b;
            O(this, "providerId", "password");
            O(this, "signInMethod", c === Ej.EMAIL_LINK_SIGN_IN_METHOD ? Ej.EMAIL_LINK_SIGN_IN_METHOD : Ej.EMAIL_PASSWORD_SIGN_IN_METHOD)
        };
        Fj.prototype.Mb = function(a) {
            return this.signInMethod == Ej.EMAIL_LINK_SIGN_IN_METHOD ? Q(a, Gj, {
                email: this.Hb,
                oobCode: this.jd
            }) : Q(a, Hj, {
                email: this.Hb,
                password: this.jd
            })
        }
        ;
        Fj.prototype.rc = function(a, b) {
            return this.signInMethod == Ej.EMAIL_LINK_SIGN_IN_METHOD ? Q(a, Ij, {
                idToken: b,
                email: this.Hb,
                oobCode: this.jd
            }) : Q(a, Jj, {
                idToken: b,
                email: this.Hb,
                password: this.jd
            })
        }
        ;
        Fj.prototype.hd = function(a, b) {
            return lj(this.Mb(a), b)
        }
        ;
        Fj.prototype.m = function() {
            return {
                email: this.Hb,
                password: this.jd,
                signInMethod: this.signInMethod
            }
        }
        ;
        var Kj = function(a) {
            return a && a.email && a.password ? new Fj(a.email,a.password,a.signInMethod) : null
        }
          , Ej = function() {
            Di(this, {
                providerId: "password",
                isOAuthProvider: !1
            })
        }
          , Mj = function(a, b) {
            b = Lj(b);
            if (!b)
                throw new P("argument-error","Invalid email link!");
            return new Fj(a,b.code,Ej.EMAIL_LINK_SIGN_IN_METHOD)
        }
          , Lj = function(a) {
            a = cj(a);
            return (a = Zi(a)) && "EMAIL_SIGNIN" === a.operation ? a : null
        };
        Di(Ej, {
            PROVIDER_ID: "password"
        });
        Di(Ej, {
            EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
        });
        Di(Ej, {
            EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
        });
        var Nj = function(a) {
            if (!(a.verificationId && a.Ve || a.Bd && a.phoneNumber))
                throw new P("internal-error");
            this.V = a;
            O(this, "providerId", "phone");
            this.providerId = "phone";
            O(this, "signInMethod", "phone")
        };
        Nj.prototype.Mb = function(a) {
            return a.verifyPhoneNumber(Oj(this))
        }
        ;
        Nj.prototype.rc = function(a, b) {
            var c = Oj(this);
            c.idToken = b;
            return Q(a, Pj, c)
        }
        ;
        Nj.prototype.hd = function(a, b) {
            var c = Oj(this);
            c.operation = "REAUTH";
            a = Q(a, Qj, c);
            return lj(a, b)
        }
        ;
        Nj.prototype.m = function() {
            var a = {
                providerId: "phone"
            };
            this.V.verificationId && (a.verificationId = this.V.verificationId);
            this.V.Ve && (a.verificationCode = this.V.Ve);
            this.V.Bd && (a.temporaryProof = this.V.Bd);
            this.V.phoneNumber && (a.phoneNumber = this.V.phoneNumber);
            return a
        }
        ;
        var Rj = function(a) {
            if (a && "phone" === a.providerId && (a.verificationId && a.verificationCode || a.temporaryProof && a.phoneNumber)) {
                var b = {};
                C(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function(c) {
                    a[c] && (b[c] = a[c])
                });
                return new Nj(b)
            }
            return null
        }
          , Oj = function(a) {
            return a.V.Bd && a.V.phoneNumber ? {
                temporaryProof: a.V.Bd,
                phoneNumber: a.V.phoneNumber
            } : {
                sessionInfo: a.V.verificationId,
                code: a.V.Ve
            }
        }
          , Sj = function(a) {
            try {
                this.Md = a || firebase.auth()
            } catch (b) {
                throw new P("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
            }
            Di(this, {
                providerId: "phone",
                isOAuthProvider: !1
            })
        };
        Sj.prototype.verifyPhoneNumber = function(a, b) {
            var c = this.Md.i;
            return J(b.verify()).then(function(d) {
                if ("string" !== typeof d)
                    throw new P("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
                switch (b.type) {
                case "recaptcha":
                    var e = v(a) ? a.session : null
                      , f = v(a) ? a.phoneNumber : a;
                    return (e && "enroll" == e.type ? e.Zc().then(function(g) {
                        return Tj(c, {
                            idToken: g,
                            phoneEnrollmentInfo: {
                                phoneNumber: f,
                                recaptchaToken: d
                            }
                        })
                    }) : e && "signin" == e.type ? e.Zc().then(function(g) {
                        return Uj(c, {
                            mfaPendingCredential: g,
                            mfaEnrollmentId: a.multiFactorHint && a.multiFactorHint.uid || a.multiFactorUid,
                            phoneSignInInfo: {
                                recaptchaToken: d
                            }
                        })
                    }) : Vj(c, {
                        phoneNumber: f,
                        recaptchaToken: d
                    })).then(function(g) {
                        "function" === typeof b.reset && b.reset();
                        return g
                    }, function(g) {
                        "function" === typeof b.reset && b.reset();
                        throw g;
                    });
                default:
                    throw new P("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
                }
            })
        }
        ;
        var Wj = function(a, b) {
            if (!a)
                throw new P("missing-verification-id");
            if (!b)
                throw new P("missing-verification-code");
            return new Nj({
                verificationId: a,
                Ve: b
            })
        };
        Di(Sj, {
            PROVIDER_ID: "phone"
        });
        Di(Sj, {
            PHONE_SIGN_IN_METHOD: "phone"
        });
        var Xj = function(a) {
            if (a.temporaryProof && a.phoneNumber)
                return new Nj({
                    Bd: a.temporaryProof,
                    phoneNumber: a.phoneNumber
                });
            var b = a && a.providerId;
            if (!b || "password" === b)
                return null;
            var c = a && a.oauthAccessToken
              , d = a && a.oauthTokenSecret
              , e = a && a.nonce
              , f = a && a.oauthIdToken
              , g = a && a.pendingToken;
            try {
                switch (b) {
                case "google.com":
                    return Bj(f, c);
                case "facebook.com":
                    return xj(c);
                case "github.com":
                    return zj(c);
                case "twitter.com":
                    return Dj(c, d);
                default:
                    return c || d || f || g ? g ? 0 == b.indexOf("saml.") ? new mj(b,g) : new rj(b,{
                        pendingToken: g,
                        idToken: a.oauthIdToken,
                        accessToken: a.oauthAccessToken
                    },b) : (new vj(b)).credential({
                        idToken: f,
                        accessToken: c,
                        rawNonce: e
                    }) : null
                }
            } catch (h) {
                return null
            }
        }
          , Yj = function(a) {
            if (!a.isOAuthProvider)
                throw new P("invalid-oauth-provider");
        };
        var Zj = function(a, b, c) {
            P.call(this, a, c);
            a = b || {};
            a.email && O(this, "email", a.email);
            a.phoneNumber && O(this, "phoneNumber", a.phoneNumber);
            a.credential && O(this, "credential", a.credential);
            a.tenantId && O(this, "tenantId", a.tenantId)
        };
        q(Zj, P);
        Zj.prototype.m = function() {
            var a = {
                code: this.code,
                message: this.message
            };
            this.email && (a.email = this.email);
            this.phoneNumber && (a.phoneNumber = this.phoneNumber);
            this.tenantId && (a.tenantId = this.tenantId);
            var b = this.credential && this.credential.m();
            b && Ac(a, b);
            return a
        }
        ;
        Zj.prototype.toJSON = function() {
            return this.m()
        }
        ;
        var ak = function(a) {
            if (a.code) {
                var b = a.code || "";
                0 == b.indexOf("auth/") && (b = b.substring(5));
                var c = {
                    credential: Xj(a),
                    tenantId: a.tenantId
                };
                if (a.email)
                    c.email = a.email;
                else if (a.phoneNumber)
                    c.phoneNumber = a.phoneNumber;
                else if (!c.credential)
                    return new P(b,a.message || void 0);
                return new Zj(b,c,a.message)
            }
            return null
        };
        var bk = function(a) {
            this.Lk = a
        };
        q(bk, Xf);
        bk.prototype.Qc = function() {
            return new this.Lk
        }
        ;
        bk.prototype.le = function() {
            return {}
        }
        ;
        var gk = function(a, b, c, d) {
            this.A = a;
            b = b || {};
            this.ii = b.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
            this.nk = b.secureTokenTimeout || ck;
            this.Je = yc(b.secureTokenHeaders || dk);
            this.mh = b.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
            this.xh = b.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/";
            this.fj = b.firebaseTimeout || ek;
            this.Kb = yc(b.firebaseHeaders || fk);
            c && (this.Kb["X-Client-Version"] = c,
            this.Je["X-Client-Version"] = c);
            d && (this.Kb["X-Firebase-AppCheck"] = d);
            a = "Node" == $h();
            a = u.XMLHttpRequest || a && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;
            if (!a && !Zh())
                throw new P("internal-error","The XMLHttpRequest compatibility library was not found.");
            this.He = void 0;
            Zh() ? this.He = new eg({
                Kk: self
            }) : ai() ? this.He = new bk(a) : this.He = new bg;
            this.C = null
        }, hk, ik = function(a, b) {
            b ? a.Kb["X-Firebase-Locale"] = b : delete a.Kb["X-Firebase-Locale"]
        }, kk = function(a, b) {
            b && (a.ii = jk("https://securetoken.googleapis.com/v1/token", b),
            a.mh = jk("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", b),
            a.xh = jk("https://identitytoolkit.googleapis.com/v2/", b))
        }, jk = function(a, b) {
            a = G(a);
            b = G(b.url);
            zd(a, a.ga + a.fb);
            vd(a, b.ta);
            xd(a, b.ga);
            yd(a, b.Ua);
            return a.toString()
        }, lk = function(a, b) {
            b ? (a.Kb["X-Client-Version"] = b,
            a.Je["X-Client-Version"] = b) : (delete a.Kb["X-Client-Version"],
            delete a.Je["X-Client-Version"])
        }, nk = function(a, b, c, d, e, f, g) {
            Kh() || Zh() ? a = w(a.qk, a) : (hk || (hk = new I(function(h, k) {
                mk(h, k)
            }
            )),
            a = w(a.pk, a));
            a(b, c, d, e, f, g)
        };
        gk.prototype.qk = function(a, b, c, d, e, f) {
            if (Zh() && ("undefined" === typeof u.fetch || "undefined" === typeof u.Headers || "undefined" === typeof u.Request))
                throw new P("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
            var g = new L(this.He);
            if (f) {
                g.Gc = Math.max(0, f);
                var h = setTimeout(function() {
                    g.dispatchEvent("timeout")
                }, f)
            }
            g.listen("complete", function() {
                h && clearTimeout(h);
                var k = null;
                try {
                    var m = JSON
                      , p = m.parse;
                    try {
                        var r = this.j ? this.j.responseText : ""
                    } catch (t) {
                        ne(this.P, "Can not get responseText: " + t.message),
                        r = ""
                    }
                    k = p.call(m, r) || null
                } catch (t) {
                    k = null
                }
                b && b(k)
            });
            Qf(g, "ready", function() {
                h && clearTimeout(h);
                this.Gb()
            });
            Qf(g, "timeout", function() {
                h && clearTimeout(h);
                this.Gb();
                b && b(null)
            });
            g.send(a, c, d, e)
        }
        ;
        var mk = function(a, b) {
            if (((window.gapi || {}).client || {}).request)
                a();
            else {
                u[ok] = function() {
                    ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"))
                }
                ;
                var c = Oc(pk, {
                    onload: ok
                });
                ch(lh(c), function() {
                    b(Error("CORS_UNSUPPORTED"))
                })
            }
        };
        gk.prototype.pk = function(a, b, c, d, e) {
            var f = this;
            hk.then(function() {
                window.gapi.client.setApiKey(f.A);
                var g = window.gapi.auth.getToken();
                window.gapi.auth.setToken(null);
                window.gapi.client.request({
                    path: a,
                    method: c,
                    body: d,
                    headers: e,
                    authType: "none",
                    callback: function(h) {
                        window.gapi.auth.setToken(g);
                        b && b(h)
                    }
                })
            }).h(function(g) {
                b && b({
                    error: {
                        message: g && g.message || "CORS_UNSUPPORTED"
                    }
                })
            })
        }
        ;
        var rk = function(a, b) {
            return new I(function(c, d) {
                "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? nk(a, a.ii + "?key=" + encodeURIComponent(a.A), function(e) {
                    e ? e.error ? d(qk(e)) : e.access_token && e.refresh_token ? c(e) : d(new P("internal-error")) : d(new P("network-request-failed"))
                }, "POST", Od(b).toString(), a.Je, a.nk.get()) : d(new P("internal-error"))
            }
            )
        }
          , sk = function(a, b, c, d, e, f, g) {
            var h = G(b + c);
            E(h, "key", a.A);
            g && E(h, "cb", Date.now().toString());
            var k = "GET" == d;
            if (k)
                for (var m in e)
                    e.hasOwnProperty(m) && E(h, m, e[m]);
            return new I(function(p, r) {
                nk(a, h.toString(), function(t) {
                    t ? t.error ? r(qk(t, f || {})) : p(t) : r(new P("network-request-failed"))
                }, d, k ? void 0 : JSON.stringify(ki(e)), a.Kb, a.fj.get())
            }
            )
        }
          , tk = function(a) {
            a = a.email;
            if ("string" !== typeof a || !Sh.test(a))
                throw new P("invalid-email");
        }
          , uk = function(a) {
            "email"in a && tk(a)
        }
          , wk = function(a, b, c, d, e, f) {
            var g = Mi(b);
            var h = {};
            e && e.length ? (h[b] = e.join(","),
            e = JSON.stringify(h)) : e = null;
            c = {
                identifier: null,
                providerId: b,
                continueUri: c,
                customParameter: d || {},
                oauthScope: e,
                sessionId: f
            };
            g && (delete c.customParameter,
            delete c.oauthScope);
            f && "google.com" == b && (c.authFlowType = "CODE_FLOW");
            return Q(a, vk, c)
        }
          , yk = function(a, b) {
            return Q(a, xk, {
                identifier: b,
                continueUri: gi() ? Fh() : "http://localhost"
            }).then(function(c) {
                return c.signinMethods || []
            })
        }
          , Ak = function(a) {
            return Q(a, zk, {}).then(function(b) {
                return b.authorizedDomains || []
            })
        }
          , Bk = function(a, b) {
            return Q(a, zk, {
                iosBundleId: b
            }).then(function() {})
        }
          , Ck = function(a, b, c) {
            b = {
                androidPackageName: b
            };
            c && (b.sha1Cert = c);
            return Q(a, zk, b).then(function() {})
        }
          , Dk = function(a, b) {
            return Q(a, zk, {
                clientId: b
            }).then(function() {})
        }
          , Ek = function(a, b) {
            return Q(a, zk, {
                firebaseAppId: b
            }).then(function() {})
        }
          , Fk = function(a) {
            if (!a.idToken) {
                if (a.mfaPendingCredential)
                    throw new P("multi-factor-auth-required",null,yc(a));
                throw new P("internal-error");
            }
        }
          , Gk = function(a) {
            if (a.phoneNumber || a.temporaryProof) {
                if (!a.phoneNumber || !a.temporaryProof)
                    throw new P("internal-error");
            } else {
                if (!a.sessionInfo)
                    throw new P("missing-verification-id");
                if (!a.code)
                    throw new P("missing-verification-code");
            }
        };
        l = gk.prototype;
        l.signInAnonymously = function() {
            return Q(this, Hk, {})
        }
        ;
        l.updateEmail = function(a, b) {
            return Q(this, Ik, {
                idToken: a,
                email: b
            })
        }
        ;
        l.updatePassword = function(a, b) {
            return Q(this, Jj, {
                idToken: a,
                password: b
            })
        }
        ;
        l.updateProfile = function(a, b) {
            var c = {
                idToken: a
            }
              , d = [];
            vc(Jk, function(e, f) {
                var g = b[f];
                null === g ? d.push(e) : f in b && (c[f] = g)
            });
            d.length && (c.deleteAttribute = d);
            return Q(this, Ik, c)
        }
        ;
        l.sendPasswordResetEmail = function(a, b) {
            a = {
                requestType: "PASSWORD_RESET",
                email: a
            };
            Ac(a, b);
            return Q(this, Kk, a)
        }
        ;
        l.sendSignInLinkToEmail = function(a, b) {
            a = {
                requestType: "EMAIL_SIGNIN",
                email: a
            };
            Ac(a, b);
            return Q(this, Lk, a)
        }
        ;
        l.sendEmailVerification = function(a, b) {
            a = {
                requestType: "VERIFY_EMAIL",
                idToken: a
            };
            Ac(a, b);
            return Q(this, Mk, a)
        }
        ;
        l.verifyBeforeUpdateEmail = function(a, b, c) {
            a = {
                requestType: "VERIFY_AND_CHANGE_EMAIL",
                idToken: a,
                newEmail: b
            };
            Ac(a, c);
            return Q(this, Nk, a)
        }
        ;
        var Vj = function(a, b) {
            return Q(a, Ok, b)
        };
        gk.prototype.verifyPhoneNumber = function(a) {
            return Q(this, Pk, a)
        }
        ;
        var Tj = function(a, b) {
            return Q(a, Qk, b).then(function(c) {
                return c.phoneSessionInfo.sessionInfo
            })
        }
          , Rk = function(a) {
            if (!a.phoneVerificationInfo)
                throw new P("internal-error");
            if (!a.phoneVerificationInfo.sessionInfo)
                throw new P("missing-verification-id");
            if (!a.phoneVerificationInfo.code)
                throw new P("missing-verification-code");
        }
          , Uj = function(a, b) {
            return Q(a, Sk, b).then(function(c) {
                return c.phoneResponseInfo.sessionInfo
            })
        }
          , Uk = function(a, b, c) {
            return Q(a, Tk, {
                idToken: b,
                deleteProvider: c
            })
        }
          , Vk = function(a) {
            if (!a.requestUri || !a.sessionId && !a.postBody && !a.pendingToken)
                throw new P("internal-error");
        }
          , Wk = function(a, b) {
            b.oauthIdToken && b.providerId && 0 == b.providerId.indexOf("oidc.") && !b.pendingToken && (a.sessionId ? b.nonce = a.sessionId : a.postBody && (a = new Dd(a.postBody),
            a.Pc("nonce") && (b.nonce = a.get("nonce"))));
            return b
        }
          , Yk = function(a) {
            var b = null;
            a.needConfirmation ? (a.code = "account-exists-with-different-credential",
            b = ak(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use",
            b = ak(a)) : "EMAIL_EXISTS" == a.errorMessage ? (a.code = "email-already-in-use",
            b = ak(a)) : a.errorMessage && (b = Xk(a.errorMessage));
            if (b)
                throw b;
            Fk(a)
        }
          , nj = function(a, b) {
            b.returnIdpCredential = !0;
            return Q(a, Zk, b)
        }
          , oj = function(a, b) {
            b.returnIdpCredential = !0;
            return Q(a, $k, b)
        }
          , pj = function(a, b) {
            b.returnIdpCredential = !0;
            b.autoCreate = !1;
            return Q(a, al, b)
        }
          , bl = function(a) {
            if (!a.oobCode)
                throw new P("invalid-action-code");
        };
        gk.prototype.confirmPasswordReset = function(a, b) {
            return Q(this, cl, {
                oobCode: a,
                newPassword: b
            })
        }
        ;
        gk.prototype.checkActionCode = function(a) {
            return Q(this, dl, {
                oobCode: a
            })
        }
        ;
        gk.prototype.applyActionCode = function(a) {
            return Q(this, el, {
                oobCode: a
            })
        }
        ;
        var Q = function(a, b, c) {
            if (!Fi(c, b.ba))
                return K(new P("internal-error"));
            var d = !!b.Ed, e = b.httpMethod || "POST", f;
            return J(c).then(b.G).then(function() {
                b.Ja && (c.returnSecureToken = !0);
                b.I && a.C && "undefined" === typeof c.tenantId && (c.tenantId = a.C);
                return d ? sk(a, a.xh, b.endpoint, e, c, b.bh, b.Od || !1) : sk(a, a.mh, b.endpoint, e, c, b.bh, b.Od || !1)
            }).then(function(g) {
                f = g;
                return b.Ee ? b.Ee(c, f) : f
            }).then(b.O).then(function() {
                if (!b.Va)
                    return f;
                if (!(b.Va in f))
                    throw new P("internal-error");
                return f[b.Va]
            })
        }
          , Xk = function(a) {
            return qk({
                error: {
                    errors: [{
                        message: a
                    }],
                    code: 400,
                    reason: a
                }
            })
        }
          , qk = function(a, b) {
            var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
            var d = {
                keyInvalid: "invalid-api-key",
                ipRefererBlocked: "app-not-authorized"
            };
            if (c = d[c] ? new P(d[c]) : null)
                return c;
            c = a.error && (a.error.reason || a.error.message) || "";
            d = {
                INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                CREDENTIAL_MISMATCH: "custom-token-mismatch",
                MISSING_CUSTOM_TOKEN: "internal-error",
                INVALID_IDENTIFIER: "invalid-email",
                MISSING_CONTINUE_URI: "internal-error",
                INVALID_EMAIL: "invalid-email",
                INVALID_PASSWORD: "wrong-password",
                USER_DISABLED: "user-disabled",
                MISSING_PASSWORD: "internal-error",
                EMAIL_EXISTS: "email-already-in-use",
                PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                INVALID_IDP_RESPONSE: "invalid-credential",
                INVALID_PENDING_TOKEN: "invalid-credential",
                FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
                INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
                INVALID_SENDER: "invalid-sender",
                EMAIL_NOT_FOUND: "user-not-found",
                RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                EXPIRED_OOB_CODE: "expired-action-code",
                INVALID_OOB_CODE: "invalid-action-code",
                MISSING_OOB_CODE: "internal-error",
                INVALID_PROVIDER_ID: "invalid-provider-id",
                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                INVALID_ID_TOKEN: "invalid-user-token",
                TOKEN_EXPIRED: "user-token-expired",
                USER_NOT_FOUND: "user-token-expired",
                CORS_UNSUPPORTED: "cors-unsupported",
                DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                INVALID_APP_ID: "invalid-app-id",
                TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                WEAK_PASSWORD: "weak-password",
                PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
                OPERATION_NOT_ALLOWED: "operation-not-allowed",
                USER_CANCELLED: "user-cancelled",
                CAPTCHA_CHECK_FAILED: "captcha-check-failed",
                INVALID_APP_CREDENTIAL: "invalid-app-credential",
                INVALID_CODE: "invalid-verification-code",
                INVALID_PHONE_NUMBER: "invalid-phone-number",
                INVALID_SESSION_INFO: "invalid-verification-id",
                INVALID_TEMPORARY_PROOF: "invalid-credential",
                INVALID_TENANT_ID: "invalid-tenant-id",
                MISSING_APP_CREDENTIAL: "missing-app-credential",
                MISSING_CODE: "missing-verification-code",
                MISSING_PHONE_NUMBER: "missing-phone-number",
                MISSING_SESSION_INFO: "missing-verification-id",
                QUOTA_EXCEEDED: "quota-exceeded",
                SESSION_EXPIRED: "code-expired",
                REJECTED_CREDENTIAL: "rejected-credential",
                INVALID_CONTINUE_URI: "invalid-continue-uri",
                MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
                UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
                INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                INVALID_CERT_HASH: "invalid-cert-hash",
                UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
                TENANT_ID_MISMATCH: "tenant-id-mismatch",
                ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
                SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
                UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
                UNVERIFIED_EMAIL: "unverified-email",
                API_KEY_SERVICE_BLOCKED: "api-key-service-blocked"
            };
            b = b || {};
            Ac(d, b);
            b = (b = c.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < b.length ? b[1] : void 0;
            for (var e in d)
                if (0 === c.indexOf(e))
                    return new P(d[e],b);
            !b && a && (b = ji(a));
            return new P("internal-error",b)
        }
          , ck = new pi(3E4,6E4)
          , dk = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
          , ek = new pi(3E4,6E4)
          , fk = {
            "Content-Type": "application/json"
        }
          , pk = Hc("https://apis.google.com/js/client.js?onload=%{onload}")
          , ok = "__fcb" + Math.floor(1E6 * Math.random()).toString()
          , Jk = {
            displayName: "DISPLAY_NAME",
            photoUrl: "PHOTO_URL"
        }
          , el = {
            endpoint: "setAccountInfo",
            G: bl,
            Va: "email",
            I: !0
        }
          , dl = {
            endpoint: "resetPassword",
            G: bl,
            O: function(a) {
                var b = a.requestType;
                if (!b || !a.email && "EMAIL_SIGNIN" != b && "VERIFY_AND_CHANGE_EMAIL" != b)
                    throw new P("internal-error");
            },
            I: !0
        }
          , fl = {
            endpoint: "signupNewUser",
            G: function(a) {
                tk(a);
                if (!a.password)
                    throw new P("weak-password");
            },
            O: Fk,
            Ja: !0,
            I: !0
        }
          , xk = {
            endpoint: "createAuthUri",
            I: !0
        }
          , gl = {
            endpoint: "deleteAccount",
            ba: ["idToken"]
        }
          , Tk = {
            endpoint: "setAccountInfo",
            ba: ["idToken", "deleteProvider"],
            G: function(a) {
                if (!Array.isArray(a.deleteProvider))
                    throw new P("internal-error");
            }
        }
          , Gj = {
            endpoint: "emailLinkSignin",
            ba: ["email", "oobCode"],
            G: tk,
            O: Fk,
            Ja: !0,
            I: !0
        }
          , Ij = {
            endpoint: "emailLinkSignin",
            ba: ["idToken", "email", "oobCode"],
            G: tk,
            O: Fk,
            Ja: !0
        }
          , hl = {
            endpoint: "accounts/mfaEnrollment:finalize",
            ba: ["idToken", "phoneVerificationInfo"],
            G: Rk,
            O: Fk,
            I: !0,
            Ed: !0
        }
          , il = {
            endpoint: "accounts/mfaSignIn:finalize",
            ba: ["mfaPendingCredential", "phoneVerificationInfo"],
            G: Rk,
            O: Fk,
            I: !0,
            Ed: !0
        }
          , jl = {
            endpoint: "getAccountInfo"
        }
          , vk = {
            endpoint: "createAuthUri",
            G: function(a) {
                if (!a.continueUri)
                    throw new P("missing-continue-uri");
                if (!a.providerId)
                    throw new P("internal-error","A provider ID must be provided in the request.");
            },
            O: function(a) {
                if (!a.authUri)
                    throw new P("internal-error","Unable to determine the authorization endpoint for the specified provider. This may be an issue in the provider configuration.");
                if (!a.sessionId)
                    throw new P("internal-error");
            },
            I: !0
        }
          , Lk = {
            endpoint: "getOobConfirmationCode",
            ba: ["requestType"],
            G: function(a) {
                if ("EMAIL_SIGNIN" != a.requestType)
                    throw new P("internal-error");
                tk(a)
            },
            Va: "email",
            I: !0
        }
          , Mk = {
            endpoint: "getOobConfirmationCode",
            ba: ["idToken", "requestType"],
            G: function(a) {
                if ("VERIFY_EMAIL" != a.requestType)
                    throw new P("internal-error");
            },
            Va: "email",
            I: !0
        }
          , Nk = {
            endpoint: "getOobConfirmationCode",
            ba: ["idToken", "newEmail", "requestType"],
            G: function(a) {
                if ("VERIFY_AND_CHANGE_EMAIL" != a.requestType)
                    throw new P("internal-error");
            },
            Va: "email",
            I: !0
        }
          , Kk = {
            endpoint: "getOobConfirmationCode",
            ba: ["requestType"],
            G: function(a) {
                if ("PASSWORD_RESET" != a.requestType)
                    throw new P("internal-error");
                tk(a)
            },
            Va: "email",
            I: !0
        }
          , zk = {
            Od: !0,
            endpoint: "getProjectConfig",
            httpMethod: "GET"
        }
          , kl = {
            Od: !0,
            endpoint: "getRecaptchaParam",
            httpMethod: "GET",
            O: function(a) {
                if (!a.recaptchaSiteKey)
                    throw new P("internal-error");
            }
        }
          , cl = {
            endpoint: "resetPassword",
            G: bl,
            Va: "email",
            I: !0
        }
          , ll = {
            Od: !0,
            endpoint: "getProjectConfig",
            httpMethod: "GET",
            Va: "dynamicLinksDomain"
        }
          , Ok = {
            endpoint: "sendVerificationCode",
            ba: ["phoneNumber", "recaptchaToken"],
            Va: "sessionInfo",
            I: !0
        }
          , Ik = {
            endpoint: "setAccountInfo",
            ba: ["idToken"],
            G: uk,
            Ja: !0
        }
          , Jj = {
            endpoint: "setAccountInfo",
            ba: ["idToken"],
            G: function(a) {
                uk(a);
                if (!a.password)
                    throw new P("weak-password");
            },
            O: Fk,
            Ja: !0
        }
          , Hk = {
            endpoint: "signupNewUser",
            O: Fk,
            Ja: !0,
            I: !0
        }
          , Qk = {
            endpoint: "accounts/mfaEnrollment:start",
            ba: ["idToken", "phoneEnrollmentInfo"],
            G: function(a) {
                if (!a.phoneEnrollmentInfo)
                    throw new P("internal-error");
                if (!a.phoneEnrollmentInfo.phoneNumber)
                    throw new P("missing-phone-number");
                if (!a.phoneEnrollmentInfo.recaptchaToken)
                    throw new P("missing-app-credential");
            },
            O: function(a) {
                if (!a.phoneSessionInfo || !a.phoneSessionInfo.sessionInfo)
                    throw new P("internal-error");
            },
            I: !0,
            Ed: !0
        }
          , Sk = {
            endpoint: "accounts/mfaSignIn:start",
            ba: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
            G: function(a) {
                if (!a.phoneSignInInfo || !a.phoneSignInInfo.recaptchaToken)
                    throw new P("missing-app-credential");
            },
            O: function(a) {
                if (!a.phoneResponseInfo || !a.phoneResponseInfo.sessionInfo)
                    throw new P("internal-error");
            },
            I: !0,
            Ed: !0
        }
          , Zk = {
            endpoint: "verifyAssertion",
            G: Vk,
            Ee: Wk,
            O: Yk,
            Ja: !0,
            I: !0
        }
          , al = {
            endpoint: "verifyAssertion",
            G: Vk,
            Ee: Wk,
            O: function(a) {
                if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage)
                    throw new P("user-not-found");
                if (a.errorMessage)
                    throw Xk(a.errorMessage);
                Fk(a)
            },
            Ja: !0,
            I: !0
        }
          , $k = {
            endpoint: "verifyAssertion",
            G: function(a) {
                Vk(a);
                if (!a.idToken)
                    throw new P("internal-error");
            },
            Ee: Wk,
            O: Yk,
            Ja: !0
        }
          , ml = {
            endpoint: "verifyCustomToken",
            G: function(a) {
                if (!a.token)
                    throw new P("invalid-custom-token");
            },
            O: Fk,
            Ja: !0,
            I: !0
        }
          , Hj = {
            endpoint: "verifyPassword",
            G: function(a) {
                tk(a);
                if (!a.password)
                    throw new P("wrong-password");
            },
            O: Fk,
            Ja: !0,
            I: !0
        }
          , Pk = {
            endpoint: "verifyPhoneNumber",
            G: Gk,
            O: Fk,
            I: !0
        }
          , Pj = {
            endpoint: "verifyPhoneNumber",
            G: function(a) {
                if (!a.idToken)
                    throw new P("internal-error");
                Gk(a)
            },
            O: function(a) {
                if (a.temporaryProof)
                    throw a.code = "credential-already-in-use",
                    ak(a);
                Fk(a)
            }
        }
          , Qj = {
            bh: {
                USER_NOT_FOUND: "user-not-found"
            },
            endpoint: "verifyPhoneNumber",
            G: Gk,
            O: Fk,
            I: !0
        }
          , nl = {
            endpoint: "accounts/mfaEnrollment:withdraw",
            ba: ["idToken", "mfaEnrollmentId"],
            O: function(a) {
                if (!!a.idToken ^ !!a.refreshToken)
                    throw new P("internal-error");
            },
            I: !0,
            Ed: !0
        };
        var pl = function(a) {
            this.Xb = a;
            this.je = null;
            this.Wf = ol(this)
        }
          , ol = function(a) {
            return ql().then(function() {
                return new I(function(b, c) {
                    N("gapi.iframes.getContext")().open({
                        where: document.body,
                        url: a.Xb,
                        messageHandlersFilter: N("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                        attributes: {
                            style: {
                                position: "absolute",
                                top: "-100px",
                                width: "1px",
                                height: "1px"
                            }
                        },
                        dontclear: !0
                    }, function(d) {
                        a.je = d;
                        a.je.restyle({
                            setHideOnLeave: !1
                        });
                        var e = setTimeout(function() {
                            c(Error("Network Error"))
                        }, rl.get())
                          , f = function() {
                            clearTimeout(e);
                            b()
                        };
                        d.ping(f).then(f, function() {
                            c(Error("Network Error"))
                        })
                    })
                }
                )
            })
        };
        pl.prototype.sendMessage = function(a) {
            var b = this;
            return this.Wf.then(function() {
                return new I(function(c) {
                    b.je.send(a.type, a, c, N("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                }
                )
            })
        }
        ;
        var sl = function(a, b) {
            a.Wf.then(function() {
                a.je.register("authEvent", b, N("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
            })
        }
          , ql = function() {
            return tl ? tl : tl = (new I(function(a, b) {
                var c = function() {
                    oi();
                    N("gapi.load")("gapi.iframes", {
                        callback: a,
                        ontimeout: function() {
                            oi();
                            b(Error("Network Error"))
                        },
                        timeout: ul.get()
                    })
                };
                if (N("gapi.iframes.Iframe"))
                    a();
                else if (N("gapi.load"))
                    c();
                else {
                    var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();
                    u[d] = function() {
                        N("gapi.load") ? c() : b(Error("Network Error"))
                    }
                    ;
                    d = Oc(vl, {
                        onload: d
                    });
                    J(lh(d)).h(function() {
                        b(Error("Network Error"))
                    })
                }
            }
            )).h(function(a) {
                tl = null;
                throw a;
            })
        }
          , vl = Hc("https://apis.google.com/js/api.js?onload=%{onload}")
          , ul = new pi(3E4,6E4)
          , rl = new pi(5E3,15E3)
          , tl = null;
        var wl = function(a, b, c, d) {
            this.J = a;
            this.A = b;
            this.B = c;
            this.s = d;
            this.Zb = null;
            this.s ? (a = G(this.s.url),
            a = Kd(a.ta, a.ga, a.Ua, "/emulator/auth/iframe", null, null)) : a = Kd("https", this.J, null, "/__/auth/iframe", null, null);
            this.jb = a;
            E(this.jb, "apiKey", this.A);
            E(this.jb, "appName", this.B);
            this.pa = null;
            this.U = []
        };
        wl.prototype.vg = function(a) {
            this.Zb = a;
            return this
        }
        ;
        wl.prototype.sg = function(a) {
            this.pa = a;
            return this
        }
        ;
        wl.prototype.toString = function() {
            this.Zb ? E(this.jb, "v", this.Zb) : this.jb.removeParameter("v");
            this.pa ? E(this.jb, "eid", this.pa) : this.jb.removeParameter("eid");
            this.U.length ? E(this.jb, "fw", this.U.join(",")) : this.jb.removeParameter("fw");
            return this.jb.toString()
        }
        ;
        var xl = function(a, b, c, d, e, f) {
            this.J = a;
            this.A = b;
            this.B = c;
            this.Si = d;
            this.s = f;
            this.Zb = this.T = this.Bc = null;
            this.zc = e;
            this.C = this.pa = null
        };
        xl.prototype.ug = function(a) {
            this.C = a;
            return this
        }
        ;
        xl.prototype.vg = function(a) {
            this.Zb = a;
            return this
        }
        ;
        xl.prototype.sg = function(a) {
            this.pa = a;
            return this
        }
        ;
        xl.prototype.toString = function() {
            if (this.s) {
                var a = G(this.s.url);
                a = Kd(a.ta, a.ga, a.Ua, "/emulator/auth/handler", null, null)
            } else
                a = Kd("https", this.J, null, "/__/auth/handler", null, null);
            E(a, "apiKey", this.A);
            E(a, "appName", this.B);
            E(a, "authType", this.Si);
            if (this.zc.isOAuthProvider) {
                var b = this.zc;
                try {
                    var c = firebase.app(this.B).auth().Fa
                } catch (f) {
                    c = null
                }
                b.rf = c;
                E(a, "providerId", this.zc.providerId);
                c = this.zc;
                b = ki(c.dh);
                for (var d in b)
                    b[d] = b[d].toString();
                d = li(b, c.bk);
                c.Nf && c.rf && !d[c.Nf] && (d[c.Nf] = c.rf);
                xc(d) || E(a, "customParameters", ji(d))
            }
            "function" === typeof this.zc.rh && (d = this.zc.rh(),
            d.length && E(a, "scopes", d.join(",")));
            this.Bc ? E(a, "redirectUrl", this.Bc) : a.removeParameter("redirectUrl");
            this.T ? E(a, "eventId", this.T) : a.removeParameter("eventId");
            this.Zb ? E(a, "v", this.Zb) : a.removeParameter("v");
            if (this.Hd)
                for (var e in this.Hd)
                    this.Hd.hasOwnProperty(e) && !F(a, e) && E(a, e, this.Hd[e]);
            this.C ? E(a, "tid", this.C) : a.removeParameter("tid");
            this.pa ? E(a, "eid", this.pa) : a.removeParameter("eid");
            e = yl(this.B);
            e.length && E(a, "fw", e.join(","));
            return a.toString()
        }
        ;
        var yl = function(a) {
            try {
                return ub(firebase.app(a).auth().U)
            } catch (b) {
                return []
            }
        }
          , zl = function(a, b, c, d, e, f) {
            this.J = a;
            this.A = b;
            this.B = c;
            this.s = f;
            this.Pa = d || null;
            this.pa = e || null;
            this.i = this.If = this.ph = null;
            this.Ya = [];
            this.me = this.eb = null
        }
          , Al = function(a) {
            var b = b || Fh();
            return Ak(a).then(function(c) {
                if (!Rh(c, b))
                    throw new ej(Fh());
            })
        };
        l = zl.prototype;
        l.initialize = function() {
            if (this.me)
                return this.me;
            var a = this;
            return this.me = Th().then(function() {
                if (!a.If) {
                    var b = a.Pa
                      , c = a.pa
                      , d = yl(a.B);
                    b = (new wl(a.J,a.A,a.B,a.s)).vg(b).sg(c);
                    b.U = ub(d || []);
                    a.If = b.toString()
                }
                a.ie = new pl(a.If);
                Bl(a)
            })
        }
        ;
        l.yd = function(a, b, c) {
            var d = new P("popup-closed-by-user")
              , e = new P("web-storage-unsupported")
              , f = this
              , g = !1;
            return this.Ob().then(function() {
                Cl(f).then(function(h) {
                    h || (a && Mh(a),
                    b(e),
                    g = !0)
                })
            }).h(function() {}).then(function() {
                if (!g)
                    return Ph(a)
            }).then(function() {
                if (!g)
                    return nh(c).then(function() {
                        b(d)
                    })
            })
        }
        ;
        l.si = function() {
            var a = M();
            return !ii(a) && !ni(a)
        }
        ;
        l.uh = function() {
            return !1
        }
        ;
        l.nd = function(a, b, c, d, e, f, g, h) {
            if (!a)
                return K(new P("popup-blocked"));
            if (g && !ii())
                return this.Ob().h(function(m) {
                    Mh(a);
                    e(m)
                }),
                d(),
                J();
            this.eb || (this.eb = Al(Dl(this)));
            var k = this;
            return this.eb.then(function() {
                var m = k.Ob().h(function(p) {
                    Mh(a);
                    e(p);
                    throw p;
                });
                d();
                return m
            }).then(function() {
                Yj(c);
                if (!g) {
                    var m = El(k.J, k.A, k.B, b, c, null, f, k.Pa, void 0, k.pa, h, k.s);
                    Gh(m, a)
                }
            }).h(function(m) {
                "auth/network-request-failed" == m.code && (k.eb = null);
                throw m;
            })
        }
        ;
        var Dl = function(a) {
            a.i || (a.ph = a.Pa ? di("JsCore", a.Pa, yl(a.B)) : null,
            a.i = new gk(a.A,Ah(a.pa),a.ph),
            a.s && kk(a.i, a.s));
            return a.i
        };
        zl.prototype.od = function(a, b, c, d) {
            this.eb || (this.eb = Al(Dl(this)));
            var e = this;
            return this.eb.then(function() {
                Yj(b);
                var f = El(e.J, e.A, e.B, a, b, Fh(), c, e.Pa, void 0, e.pa, d, e.s);
                Gh(f)
            }).h(function(f) {
                "auth/network-request-failed" == f.code && (e.eb = null);
                throw f;
            })
        }
        ;
        zl.prototype.Ob = function() {
            var a = this;
            return this.initialize().then(function() {
                return a.ie.Wf
            }).h(function() {
                a.eb = null;
                throw new P("network-request-failed");
            })
        }
        ;
        zl.prototype.zi = function() {
            return !0
        }
        ;
        var El = function(a, b, c, d, e, f, g, h, k, m, p, r) {
            a = new xl(a,b,c,d,e,r);
            a.Bc = f;
            a.T = g;
            f = a.vg(h);
            f.Hd = yc(k || null);
            return f.sg(m).ug(p).toString()
        }
          , Bl = function(a) {
            if (!a.ie)
                throw Error("IfcHandler must be initialized!");
            sl(a.ie, function(b) {
                var c = {};
                if (b && b.authEvent) {
                    var d = !1;
                    b = Qi(b.authEvent);
                    for (c = 0; c < a.Ya.length; c++)
                        d = a.Ya[c](b) || d;
                    c = {};
                    c.status = d ? "ACK" : "ERROR";
                    return J(c)
                }
                c.status = "ERROR";
                return J(c)
            })
        }
          , Cl = function(a) {
            var b = {
                type: "webStorageSupport"
            };
            return a.initialize().then(function() {
                return a.ie.sendMessage(b)
            }).then(function(c) {
                if (c && c.length && "undefined" !== typeof c[0].webStorageSupport)
                    return c[0].webStorageSupport;
                throw Error();
            })
        };
        zl.prototype.bc = function(a) {
            this.Ya.push(a)
        }
        ;
        zl.prototype.td = function(a) {
            tb(this.Ya, function(b) {
                return b == a
            })
        }
        ;
        function Fl() {}
        Fl.prototype.render = function() {}
        ;
        Fl.prototype.reset = function() {}
        ;
        Fl.prototype.getResponse = function() {}
        ;
        Fl.prototype.execute = function() {}
        ;
        var Gl = function() {
            this.hc = u.grecaptcha ? Infinity : 0;
            this.oc = null;
            this.lf = "__rcb" + Math.floor(1E6 * Math.random()).toString()
        };
        Gl.prototype.Jh = function(a) {
            var b = this;
            return new I(function(c, d) {
                var e = setTimeout(function() {
                    d(new P("network-request-failed"))
                }, Hl.get());
                if (!u.grecaptcha || a !== b.oc && !b.hc) {
                    u[b.lf] = function() {
                        if (u.grecaptcha) {
                            b.oc = a;
                            var g = u.grecaptcha.render;
                            u.grecaptcha.render = function(h, k) {
                                h = g(h, k);
                                b.hc++;
                                return h
                            }
                            ;
                            clearTimeout(e);
                            c(u.grecaptcha)
                        } else
                            clearTimeout(e),
                            d(new P("internal-error"));
                        delete u[b.lf]
                    }
                    ;
                    var f = Oc(Il, {
                        onload: b.lf,
                        hl: a || ""
                    });
                    J(lh(f)).h(function() {
                        clearTimeout(e);
                        d(new P("internal-error","Unable to load external reCAPTCHA dependencies!"))
                    })
                } else
                    clearTimeout(e),
                    c(u.grecaptcha)
            }
            )
        }
        ;
        Gl.prototype.Sg = function() {
            this.hc--
        }
        ;
        var Il = Hc("https://www.google.com/recaptcha/api.js?trustedtypes=true&onload=%{onload}&render=explicit&hl=%{hl}")
          , Hl = new pi(3E4,6E4)
          , Jl = null;
        var Kl = function() {
            this.Rf = {};
            this.hc = 1E12
        };
        Kl.prototype.render = function(a, b) {
            this.Rf[this.hc.toString()] = new Ll(a,b);
            return this.hc++
        }
        ;
        Kl.prototype.reset = function(a) {
            var b = Ml(this, a);
            a = Nl(a);
            b && a && (b.delete(),
            delete this.Rf[a])
        }
        ;
        Kl.prototype.getResponse = function(a) {
            return (a = Ml(this, a)) ? a.getResponse() : null
        }
        ;
        Kl.prototype.execute = function(a) {
            (a = Ml(this, a)) && a.execute()
        }
        ;
        var Ml = function(a, b) {
            return (b = Nl(b)) ? a.Rf[b] || null : null
        }
          , Nl = function(a) {
            return (a = "undefined" === typeof a ? 1E12 : a) ? a.toString() : null
        }
          , Ol = null
          , Ll = function(a, b) {
            this.za = !1;
            this.V = b;
            this.Hc = this.Fe = null;
            this.Fh = "invisible" !== this.V.size;
            this.S = Ke(a);
            var c = this;
            this.Ph = function() {
                c.execute()
            }
            ;
            this.Fh ? this.execute() : Jf(this.S, "click", this.Ph)
        };
        Ll.prototype.getResponse = function() {
            Pl(this);
            return this.Fe
        }
        ;
        Ll.prototype.execute = function() {
            Pl(this);
            var a = this;
            this.Hc || (this.Hc = setTimeout(function() {
                a.Fe = bi();
                var b = a.V.callback
                  , c = a.V["expired-callback"];
                if (b)
                    try {
                        b(a.Fe)
                    } catch (d) {}
                a.Hc = setTimeout(function() {
                    a.Hc = null;
                    a.Fe = null;
                    if (c)
                        try {
                            c()
                        } catch (d) {}
                    a.Fh && a.execute()
                }, 6E4)
            }, 500))
        }
        ;
        Ll.prototype.delete = function() {
            Pl(this);
            this.za = !0;
            clearTimeout(this.Hc);
            this.Hc = null;
            Rf(this.S, "click", this.Ph)
        }
        ;
        var Pl = function(a) {
            if (a.za)
                throw Error("reCAPTCHA mock was already deleted!");
        };
        var Ql = function() {};
        Ql.prototype.Jh = function() {
            Ol || (Ol = new Kl);
            return J(Ol)
        }
        ;
        Ql.prototype.Sg = function() {}
        ;
        var Rl = null;
        var Sl = function(a, b, c, d, e, f, g) {
            O(this, "type", "recaptcha");
            this.Lc = this.Nc = null;
            this.Sc = !1;
            this.Oc = b;
            this.ad = null;
            g ? (Rl || (Rl = new Ql),
            g = Rl) : (Jl || (Jl = new Gl),
            g = Jl);
            this.ci = g;
            this.Ta = c || {
                theme: "light",
                type: "image"
            };
            this.Z = [];
            if (this.Ta.sitekey)
                throw new P("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
            this.ne = "invisible" === this.Ta.size;
            if (!u.document)
                throw new P("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
            if (!Ke(b) || !this.ne && Ke(b).hasChildNodes())
                throw new P("argument-error","reCAPTCHA container is either not found or already contains inner elements!");
            this.i = new gk(a,f || null,e || null);
            this.ij = d || function() {
                return null
            }
            ;
            var h = this;
            this.Re = [];
            var k = this.Ta.callback;
            this.Ta.callback = function(p) {
                h.Tc(p);
                if ("function" === typeof k)
                    k(p);
                else if ("string" === typeof k) {
                    var r = N(k, u);
                    "function" === typeof r && r(p)
                }
            }
            ;
            var m = this.Ta["expired-callback"];
            this.Ta["expired-callback"] = function() {
                h.Tc(null);
                if ("function" === typeof m)
                    m();
                else if ("string" === typeof m) {
                    var p = N(m, u);
                    "function" === typeof p && p()
                }
            }
        };
        Sl.prototype.Tc = function(a) {
            for (var b = 0; b < this.Re.length; b++)
                try {
                    this.Re[b](a)
                } catch (c) {}
        }
        ;
        var Tl = function(a, b) {
            tb(a.Re, function(c) {
                return c == b
            })
        };
        l = Sl.prototype;
        l.l = function(a) {
            var b = this;
            this.Z.push(a);
            a.Ab(function() {
                rb(b.Z, a)
            });
            return a
        }
        ;
        l.ed = function() {
            var a = this;
            return this.Nc ? this.Nc : this.Nc = this.l(J().then(function() {
                if (gi() && !Zh())
                    return Th();
                throw new P("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
            }).then(function() {
                return a.ci.Jh(a.ij())
            }).then(function(b) {
                a.ad = b;
                return Q(a.i, kl, {})
            }).then(function(b) {
                a.Ta.sitekey = b.recaptchaSiteKey
            }).h(function(b) {
                a.Nc = null;
                throw b;
            }))
        }
        ;
        l.render = function() {
            Ul(this);
            var a = this;
            return this.l(this.ed().then(function() {
                if (null === a.Lc) {
                    var b = a.Oc;
                    if (!a.ne) {
                        var c = Ke(b);
                        b = Oe("DIV");
                        c.appendChild(b)
                    }
                    a.Lc = a.ad.render(b, a.Ta)
                }
                return a.Lc
            }))
        }
        ;
        l.verify = function() {
            Ul(this);
            var a = this;
            return this.l(this.render().then(function(b) {
                return new I(function(c) {
                    var d = a.ad.getResponse(b);
                    if (d)
                        c(d);
                    else {
                        var e = function(f) {
                            f && (Tl(a, e),
                            c(f))
                        };
                        a.Re.push(e);
                        a.ne && a.ad.execute(a.Lc)
                    }
                }
                )
            }))
        }
        ;
        l.reset = function() {
            Ul(this);
            null !== this.Lc && this.ad.reset(this.Lc)
        }
        ;
        var Ul = function(a) {
            if (a.Sc)
                throw new P("internal-error","RecaptchaVerifier instance has been destroyed.");
        };
        Sl.prototype.clear = function() {
            Ul(this);
            this.Sc = !0;
            this.ci.Sg();
            for (var a = 0; a < this.Z.length; a++)
                this.Z[a].cancel("RecaptchaVerifier instance has been destroyed.");
            this.ne || Se(Ke(this.Oc))
        }
        ;
        var Vl = function(a, b, c) {
            var d = !1;
            try {
                this.u = c || firebase.app()
            } catch (g) {
                throw new P("argument-error","No firebase.app.App instance is currently initialized.");
            }
            if (this.u.options && this.u.options.apiKey)
                c = this.u.options.apiKey;
            else
                throw new P("invalid-api-key");
            var e = this
              , f = null;
            try {
                f = ub(this.u.auth().U)
            } catch (g) {}
            try {
                d = this.u.auth().settings.appVerificationDisabledForTesting
            } catch (g) {}
            f = firebase.SDK_VERSION ? di("JsCore", firebase.SDK_VERSION, f) : null;
            Sl.call(this, c, a, b, function() {
                try {
                    var g = e.u.auth().Fa
                } catch (h) {
                    g = null
                }
                return g
            }, f, Ah(Bh), d)
        };
        x(Vl, Sl);
        var Wl = function(a, b) {
            this.Jk = a;
            this.zk = b || "*"
        };
        Wl.prototype.postMessage = function(a, b) {
            this.Jk.postMessage(a, this.zk, b)
        }
        ;
        var Xl = function(a) {
            this.Gd = a
        };
        Xl.prototype.postMessage = function(a, b) {
            this.Gd.postMessage(a, b)
        }
        ;
        var Yl = function(a) {
            this.Vj = a;
            this.Tg = !1;
            this.se = []
        }
          , Zl = function(a, b, c, d) {
            var e = Date.now();
            return a.send(b, c).h(function(f) {
                if (f && "connection_unavailable" === f.message)
                    throw f;
                var g = Date.now() - e;
                if (g > d)
                    throw f;
                return Zl(a, b, c, d - g)
            })
        };
        Yl.prototype.send = function(a, b, c) {
            b = void 0 === b ? null : b;
            c = void 0 === c ? !1 : c;
            var d = this, e;
            b = b || {};
            var f, g, h, k = null;
            if (this.Tg)
                return K(Error("connection_unavailable"));
            var m = c ? 800 : 50
              , p = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            return (new I(function(r, t) {
                p ? (e = "" + Math.floor(Math.random() * Math.pow(10, 20)).toString(),
                p.port1.start(),
                g = setTimeout(function() {
                    t(Error("unsupported_event"))
                }, m),
                f = function(z) {
                    z.data.eventId === e && ("ack" === z.data.status ? (clearTimeout(g),
                    h = setTimeout(function() {
                        t(Error("timeout"))
                    }, 3E3)) : "done" === z.data.status ? (clearTimeout(h),
                    "undefined" !== typeof z.data.response ? r(z.data.response) : t(Error("unknown_error"))) : (clearTimeout(g),
                    clearTimeout(h),
                    t(Error("invalid_response"))))
                }
                ,
                k = {
                    messageChannel: p,
                    onMessage: f
                },
                d.se.push(k),
                p.port1.addEventListener("message", f),
                d.Vj.postMessage({
                    eventType: a,
                    eventId: e,
                    data: b
                }, [p.port2])) : t(Error("connection_unavailable"))
            }
            )).then(function(r) {
                $l(d, k);
                return r
            }).h(function(r) {
                $l(d, k);
                throw r;
            })
        }
        ;
        var $l = function(a, b) {
            if (b) {
                var c = b.messageChannel
                  , d = b.onMessage;
                c && (c.port1.removeEventListener("message", d),
                c.port1.close());
                tb(a.se, function(e) {
                    return e == b
                })
            }
        };
        Yl.prototype.close = function() {
            for (; 0 < this.se.length; )
                $l(this, this.se[0]);
            this.Tg = !0
        }
        ;
        var am = function(a) {
            this.wf = a;
            this.Ca = {};
            this.Kh = w(this.lj, this)
        }
          , cm = function() {
            var a = Zh() ? self : null;
            C(bm, function(c) {
                c.wf == a && (b = c)
            });
            if (!b) {
                var b = new am(a);
                bm.push(b)
            }
            return b
        };
        am.prototype.lj = function(a) {
            var b = a.data.eventType
              , c = a.data.eventId
              , d = this.Ca[b];
            if (d && 0 < d.length) {
                a.ports[0].postMessage({
                    status: "ack",
                    eventId: c,
                    eventType: b,
                    response: null
                });
                var e = [];
                C(d, function(f) {
                    e.push(J().then(function() {
                        return f(a.origin, a.data.data)
                    }))
                });
                Ig(e).then(function(f) {
                    var g = [];
                    C(f, function(h) {
                        g.push({
                            fulfilled: h.oh,
                            value: h.value,
                            reason: h.reason ? h.reason.message : void 0
                        })
                    });
                    C(g, function(h) {
                        for (var k in h)
                            "undefined" === typeof h[k] && delete h[k]
                    });
                    a.ports[0].postMessage({
                        status: "done",
                        eventId: c,
                        eventType: b,
                        response: g
                    })
                })
            }
        }
        ;
        am.prototype.subscribe = function(a, b) {
            xc(this.Ca) && this.wf.addEventListener("message", this.Kh);
            "undefined" === typeof this.Ca[a] && (this.Ca[a] = []);
            this.Ca[a].push(b)
        }
        ;
        am.prototype.unsubscribe = function(a, b) {
            "undefined" !== typeof this.Ca[a] && b ? (tb(this.Ca[a], function(c) {
                return c == b
            }),
            0 == this.Ca[a].length && delete this.Ca[a]) : b || delete this.Ca[a];
            xc(this.Ca) && this.wf.removeEventListener("message", this.Kh)
        }
        ;
        var bm = [];
        var dm = function(a) {
            this.ya = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;
            if (!this.ya)
                throw new P("internal-error","The React Native compatibility library was not found.");
            this.type = "asyncStorage"
        };
        l = dm.prototype;
        l.get = function(a) {
            return J(this.ya.getItem(a)).then(function(b) {
                return b && mi(b)
            })
        }
        ;
        l.set = function(a, b) {
            return J(this.ya.setItem(a, ji(b)))
        }
        ;
        l.remove = function(a) {
            return J(this.ya.removeItem(a))
        }
        ;
        l.mb = function() {}
        ;
        l.yb = function() {}
        ;
        function em() {
            this.storage = {};
            this.type = "inMemory"
        }
        l = em.prototype;
        l.get = function(a) {
            return J(this.storage[a])
        }
        ;
        l.set = function(a, b) {
            this.storage[a] = b;
            return J()
        }
        ;
        l.remove = function(a) {
            delete this.storage[a];
            return J()
        }
        ;
        l.mb = function() {}
        ;
        l.yb = function() {}
        ;
        var hm = function() {
            if (!fm()) {
                if ("Node" == $h())
                    throw new P("internal-error","The LocalStorage compatibility library was not found.");
                throw new P("web-storage-unsupported");
            }
            this.ya = gm() || firebase.INTERNAL.node.localStorage;
            this.type = "localStorage"
        }
          , gm = function() {
            try {
                var a = u.localStorage
                  , b = ei();
                a && (a.setItem(b, "1"),
                a.removeItem(b));
                return a
            } catch (c) {
                return null
            }
        }
          , fm = function() {
            var a = "Node" == $h();
            a = gm() || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;
            if (!a)
                return !1;
            try {
                return a.setItem("__sak", "1"),
                a.removeItem("__sak"),
                !0
            } catch (b) {
                return !1
            }
        };
        l = hm.prototype;
        l.get = function(a) {
            var b = this;
            return J().then(function() {
                var c = b.ya.getItem(a);
                return mi(c)
            })
        }
        ;
        l.set = function(a, b) {
            var c = this;
            return J().then(function() {
                var d = ji(b);
                null === d ? c.remove(a) : c.ya.setItem(a, d)
            })
        }
        ;
        l.remove = function(a) {
            var b = this;
            return J().then(function() {
                b.ya.removeItem(a)
            })
        }
        ;
        l.mb = function(a) {
            u.window && Jf(u.window, "storage", a)
        }
        ;
        l.yb = function(a) {
            u.window && Rf(u.window, "storage", a)
        }
        ;
        var im = function() {
            this.ya = {};
            this.type = "nullStorage"
        };
        l = im.prototype;
        l.get = function() {
            return J(null)
        }
        ;
        l.set = function() {
            return J()
        }
        ;
        l.remove = function() {
            return J()
        }
        ;
        l.mb = function() {}
        ;
        l.yb = function() {}
        ;
        var lm = function() {
            if (!jm()) {
                if ("Node" == $h())
                    throw new P("internal-error","The SessionStorage compatibility library was not found.");
                throw new P("web-storage-unsupported");
            }
            this.ya = km() || firebase.INTERNAL.node.sessionStorage;
            this.type = "sessionStorage"
        }
          , km = function() {
            try {
                var a = u.sessionStorage
                  , b = ei();
                a && (a.setItem(b, "1"),
                a.removeItem(b));
                return a
            } catch (c) {
                return null
            }
        }
          , jm = function() {
            var a = "Node" == $h();
            a = km() || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;
            if (!a)
                return !1;
            try {
                return a.setItem("__sak", "1"),
                a.removeItem("__sak"),
                !0
            } catch (b) {
                return !1
            }
        };
        l = lm.prototype;
        l.get = function(a) {
            var b = this;
            return J().then(function() {
                var c = b.ya.getItem(a);
                return mi(c)
            })
        }
        ;
        l.set = function(a, b) {
            var c = this;
            return J().then(function() {
                var d = ji(b);
                null === d ? c.remove(a) : c.ya.setItem(a, d)
            })
        }
        ;
        l.remove = function(a) {
            var b = this;
            return J().then(function() {
                b.ya.removeItem(a)
            })
        }
        ;
        l.mb = function() {}
        ;
        l.yb = function() {}
        ;
        var om = function() {
            if (!mm())
                throw new P("web-storage-unsupported");
            this.eh = "firebaseLocalStorageDb";
            this.ue = "firebaseLocalStorage";
            this.qf = "fbase_key";
            this.Hi = "value";
            this.Hk = 1;
            this.ka = {};
            this.Wa = [];
            this.kd = 0;
            this.zh = u.indexedDB;
            this.type = "indexedDB";
            this.Ke = this.lg = this.Be = this.ag = null;
            this.ki = !1;
            this.af = null;
            var a = this;
            Zh() && self ? (this.lg = cm(),
            this.lg.subscribe("keyChanged", function(b, c) {
                return nm(a).then(function(d) {
                    0 < d.length && C(a.Wa, function(e) {
                        e(d)
                    });
                    return {
                        keyProcessed: pb(d, c.key)
                    }
                })
            }),
            this.lg.subscribe("ping", function() {
                return J(["keyChanged"])
            })) : xi().then(function(b) {
                if (a.af = b)
                    a.Ke = new Yl(new Xl(b)),
                    a.Ke.send("ping", null, !0).then(function(c) {
                        c[0].fulfilled && pb(c[0].value, "keyChanged") && (a.ki = !0)
                    }).h(function() {})
            })
        }, pm, qm = function(a) {
            return new I(function(b, c) {
                var d = a.zh.deleteDatabase(a.eh);
                d.onsuccess = function() {
                    b()
                }
                ;
                d.onerror = function(e) {
                    c(Error(e.target.error))
                }
            }
            )
        }, rm = function(a) {
            return new I(function(b, c) {
                var d = a.zh.open(a.eh, a.Hk);
                d.onerror = function(e) {
                    try {
                        e.preventDefault()
                    } catch (f) {}
                    c(Error(e.target.error))
                }
                ;
                d.onupgradeneeded = function(e) {
                    e = e.target.result;
                    try {
                        e.createObjectStore(a.ue, {
                            keyPath: a.qf
                        })
                    } catch (f) {
                        c(f)
                    }
                }
                ;
                d.onsuccess = function(e) {
                    e = e.target.result;
                    e.objectStoreNames.contains(a.ue) ? b(e) : qm(a).then(function() {
                        return rm(a)
                    }).then(function(f) {
                        b(f)
                    }).h(function(f) {
                        c(f)
                    })
                }
            }
            )
        }, sm = function(a) {
            a.Kf || (a.Kf = rm(a));
            return a.Kf
        }, tm = function(a, b) {
            var c = 0
              , d = function(e, f) {
                sm(a).then(b).then(e).h(function(g) {
                    if (3 < ++c)
                        f(g);
                    else
                        return sm(a).then(function(h) {
                            h.close();
                            a.Kf = void 0;
                            return d(e, f)
                        }).h(function(h) {
                            f(h)
                        })
                })
            };
            return new I(d)
        }, mm = function() {
            try {
                return !!u.indexedDB
            } catch (a) {
                return !1
            }
        }, um = function(a, b) {
            return b.objectStore(a.ue)
        }, vm = function(a, b, c) {
            return b.transaction([a.ue], c ? "readwrite" : "readonly")
        }, wm = function(a) {
            return new I(function(b, c) {
                a.onsuccess = function(d) {
                    d && d.target ? b(d.target.result) : b()
                }
                ;
                a.onerror = function(d) {
                    c(d.target.error)
                }
            }
            )
        };
        om.prototype.set = function(a, b) {
            var c = this
              , d = !1;
            return tm(this, function(e) {
                e = um(c, vm(c, e, !0));
                return wm(e.get(a))
            }).then(function(e) {
                return tm(c, function(f) {
                    f = um(c, vm(c, f, !0));
                    if (e)
                        return e.value = b,
                        wm(f.put(e));
                    c.kd++;
                    d = !0;
                    var g = {};
                    g[c.qf] = a;
                    g[c.Hi] = b;
                    return wm(f.add(g))
                })
            }).then(function() {
                c.ka[a] = b;
                return xm(c, a)
            }).Ab(function() {
                d && c.kd--
            })
        }
        ;
        var xm = function(a, b) {
            return a.Ke && a.af && wi() === a.af ? a.Ke.send("keyChanged", {
                key: b
            }, a.ki).then(function() {}).h(function() {}) : J()
        };
        om.prototype.get = function(a) {
            var b = this;
            return tm(this, function(c) {
                return wm(um(b, vm(b, c, !1)).get(a))
            }).then(function(c) {
                return c && c.value
            })
        }
        ;
        om.prototype.remove = function(a) {
            var b = !1
              , c = this;
            return tm(this, function(d) {
                b = !0;
                c.kd++;
                return wm(um(c, vm(c, d, !0))["delete"](a))
            }).then(function() {
                delete c.ka[a];
                return xm(c, a)
            }).Ab(function() {
                b && c.kd--
            })
        }
        ;
        var nm = function(a) {
            return sm(a).then(function(b) {
                var c = um(a, vm(a, b, !1));
                return c.getAll ? wm(c.getAll()) : new I(function(d, e) {
                    var f = []
                      , g = c.openCursor();
                    g.onsuccess = function(h) {
                        (h = h.target.result) ? (f.push(h.value),
                        h["continue"]()) : d(f)
                    }
                    ;
                    g.onerror = function(h) {
                        e(h.target.error)
                    }
                }
                )
            }).then(function(b) {
                var c = {}
                  , d = [];
                if (0 == a.kd) {
                    for (d = 0; d < b.length; d++)
                        c[b[d][a.qf]] = b[d][a.Hi];
                    d = Ih(a.ka, c);
                    a.ka = c
                }
                return d
            })
        };
        om.prototype.mb = function(a) {
            0 == this.Wa.length && this.xg();
            this.Wa.push(a)
        }
        ;
        om.prototype.yb = function(a) {
            tb(this.Wa, function(b) {
                return b == a
            });
            0 == this.Wa.length && this.Ne()
        }
        ;
        om.prototype.xg = function() {
            var a = this;
            this.Ne();
            var b = function() {
                a.Be = setTimeout(function() {
                    a.ag = nm(a).then(function(c) {
                        0 < c.length && C(a.Wa, function(d) {
                            d(c)
                        })
                    }).then(function() {
                        b()
                    }).h(function(c) {
                        "STOP_EVENT" != c.message && b()
                    })
                }, 800)
            };
            b()
        }
        ;
        om.prototype.Ne = function() {
            this.ag && this.ag.cancel("STOP_EVENT");
            this.Be && (clearTimeout(this.Be),
            this.Be = null)
        }
        ;
        function ym(a) {
            var b = this
              , c = null;
            this.Wa = [];
            this.type = "indexedDB";
            this.ih = a;
            this.Cg = J().then(function() {
                if (mm()) {
                    var d = ei()
                      , e = "__sak" + d;
                    pm || (pm = new om);
                    c = pm;
                    return c.set(e, d).then(function() {
                        return c.get(e)
                    }).then(function(f) {
                        if (f !== d)
                            throw Error("indexedDB not supported!");
                        return c.remove(e)
                    }).then(function() {
                        return c
                    }).h(function() {
                        return b.ih
                    })
                }
                return b.ih
            }).then(function(d) {
                b.type = d.type;
                d.mb(function(e) {
                    C(b.Wa, function(f) {
                        f(e)
                    })
                });
                return d
            })
        }
        l = ym.prototype;
        l.get = function(a) {
            return this.Cg.then(function(b) {
                return b.get(a)
            })
        }
        ;
        l.set = function(a, b) {
            return this.Cg.then(function(c) {
                return c.set(a, b)
            })
        }
        ;
        l.remove = function(a) {
            return this.Cg.then(function(b) {
                return b.remove(a)
            })
        }
        ;
        l.mb = function(a) {
            this.Wa.push(a)
        }
        ;
        l.yb = function(a) {
            tb(this.Wa, function(b) {
                return b == a
            })
        }
        ;
        var Dm = function() {
            this.uf = {
                Browser: zm,
                Node: Am,
                ReactNative: Bm,
                Worker: Cm
            }[$h()]
        }, Em, zm = {
            M: hm,
            Oe: lm
        }, Am = {
            M: hm,
            Oe: lm
        }, Bm = {
            M: dm,
            Oe: im
        }, Cm = {
            M: hm,
            Oe: im
        };
        var Fm = function() {
            this.cf = !1;
            Object.defineProperty(this, "appVerificationDisabled", {
                get: function() {
                    return this.cf
                },
                set: function(a) {
                    this.cf = a
                },
                enumerable: !1
            })
        };
        var Gm = function(a) {
            this.cb(a)
        };
        Gm.prototype.cb = function(a) {
            var b = a.url;
            if ("undefined" === typeof b)
                throw new P("missing-continue-uri");
            if ("string" !== typeof b || "string" === typeof b && !b.length)
                throw new P("invalid-continue-uri");
            this.Ui = b;
            this.Gg = this.cc = null;
            this.Bh = !1;
            var c = a.android;
            if (c && "object" === typeof c) {
                b = c.packageName;
                var d = c.installApp;
                c = c.minimumVersion;
                if ("string" === typeof b && b.length) {
                    this.cc = b;
                    if ("undefined" !== typeof d && "boolean" !== typeof d)
                        throw new P("argument-error","installApp property must be a boolean when specified.");
                    this.Bh = !!d;
                    if ("undefined" !== typeof c && ("string" !== typeof c || "string" === typeof c && !c.length))
                        throw new P("argument-error","minimumVersion property must be a non empty string when specified.");
                    this.Gg = c || null
                } else {
                    if ("undefined" !== typeof b)
                        throw new P("argument-error","packageName property must be a non empty string when specified.");
                    if ("undefined" !== typeof d || "undefined" !== typeof c)
                        throw new P("missing-android-pkg-name");
                }
            } else if ("undefined" !== typeof c)
                throw new P("argument-error","android property must be a non null object when specified.");
            this.cd = null;
            if ((b = a.iOS) && "object" === typeof b)
                if (b = b.bundleId,
                "string" === typeof b && b.length)
                    this.cd = b;
                else {
                    if ("undefined" !== typeof b)
                        throw new P("argument-error","bundleId property must be a non empty string when specified.");
                }
            else if ("undefined" !== typeof b)
                throw new P("argument-error","iOS property must be a non null object when specified.");
            b = a.handleCodeInApp;
            if ("undefined" !== typeof b && "boolean" !== typeof b)
                throw new P("argument-error","handleCodeInApp property must be a boolean when specified.");
            this.Qg = !!b;
            a = a.dynamicLinkDomain;
            if ("undefined" !== typeof a && ("string" !== typeof a || "string" === typeof a && !a.length))
                throw new P("argument-error","dynamicLinkDomain property must be a non empty string when specified.");
            this.Yi = a || null
        }
        ;
        var Hm = function(a) {
            var b = {};
            b.continueUrl = a.Ui;
            b.canHandleCodeInApp = a.Qg;
            if (b.androidPackageName = a.cc)
                b.androidMinimumVersion = a.Gg,
                b.androidInstallApp = a.Bh;
            b.iOSBundleId = a.cd;
            b.dynamicLinkDomain = a.Yi;
            for (var c in b)
                null === b[c] && delete b[c];
            return b
        };
        var Im = function(a, b) {
            this.Wi = b;
            O(this, "verificationId", a)
        };
        Im.prototype.confirm = function(a) {
            a = Wj(this.verificationId, a);
            return this.Wi(a)
        }
        ;
        var Jm = function(a, b, c, d) {
            return (new Sj(a)).verifyPhoneNumber(b, c).then(function(e) {
                return new Im(e,d)
            })
        };
        var Km = function(a, b, c) {
            this.Tj = a;
            this.gk = b;
            this.jj = c;
            this.re = 3E4;
            this.Eg = 96E4;
            this.hk = !1;
            this.uc = null;
            this.Qb = this.re;
            if (this.Eg < this.re)
                throw Error("Proactive refresh lower bound greater than upper bound!");
        };
        Km.prototype.start = function() {
            this.Qb = this.re;
            Lm(this, !0)
        }
        ;
        var Mm = function(a, b) {
            if (b)
                return a.Qb = a.re,
                a.jj();
            b = a.Qb;
            a.Qb *= 2;
            a.Qb > a.Eg && (a.Qb = a.Eg);
            return b
        }
          , Lm = function(a, b) {
            a.stop();
            a.uc = nh(Mm(a, b)).then(function() {
                return a.hk ? J() : ri()
            }).then(function() {
                return a.Tj()
            }).then(function() {
                Lm(a, !0)
            }).h(function(c) {
                a.gk(c) && Lm(a, !1)
            })
        };
        Km.prototype.stop = function() {
            this.uc && (this.uc.cancel(),
            this.uc = null)
        }
        ;
        var Tm = function(a) {
            var b = {};
            b["facebook.com"] = Nm;
            b["google.com"] = Om;
            b["github.com"] = Pm;
            b["twitter.com"] = Qm;
            var c = a && a.providerId;
            try {
                if (c)
                    return b[c] ? new b[c](a) : new Rm(a);
                if ("undefined" !== typeof a.idToken)
                    return new Sm(a)
            } catch (d) {}
            return null
        }
          , Sm = function(a) {
            var b = a.providerId;
            if (!b && a.idToken) {
                var c = hj(a.idToken);
                c && c.yc && (b = c.yc)
            }
            if (!b)
                throw Error("Invalid additional user info!");
            if ("anonymous" == b || "custom" == b)
                b = null;
            c = !1;
            "undefined" !== typeof a.isNewUser ? c = !!a.isNewUser : "identitytoolkit#SignupNewUserResponse" === a.kind && (c = !0);
            O(this, "providerId", b);
            O(this, "isNewUser", c)
        }
          , Rm = function(a) {
            Sm.call(this, a);
            a = mi(a.rawUserInfo || "{}");
            O(this, "profile", Gi(a || {}))
        };
        q(Rm, Sm);
        var Nm = function(a) {
            Rm.call(this, a);
            if ("facebook.com" != this.providerId)
                throw Error("Invalid provider ID!");
        };
        q(Nm, Rm);
        var Pm = function(a) {
            Rm.call(this, a);
            if ("github.com" != this.providerId)
                throw Error("Invalid provider ID!");
            O(this, "username", this.profile && this.profile.login || null)
        };
        q(Pm, Rm);
        var Om = function(a) {
            Rm.call(this, a);
            if ("google.com" != this.providerId)
                throw Error("Invalid provider ID!");
        };
        q(Om, Rm);
        var Qm = function(a) {
            Rm.call(this, a);
            if ("twitter.com" != this.providerId)
                throw Error("Invalid provider ID!");
            O(this, "username", a.screenName || null)
        };
        q(Qm, Rm);
        var Um = {
            LOCAL: "local",
            NONE: "none",
            SESSION: "session"
        }, Vm = function(a) {
            var b = new P("invalid-persistence-type")
              , c = new P("unsupported-persistence-type");
            a: {
                for (d in Um)
                    if (Um[d] == a) {
                        var d = !0;
                        break a
                    }
                d = !1
            }
            if (!d || "string" !== typeof a)
                throw b;
            switch ($h()) {
            case "ReactNative":
                if ("session" === a)
                    throw c;
                break;
            case "Node":
                if ("none" !== a)
                    throw c;
                break;
            case "Worker":
                if ("session" === a || !mm() && "none" !== a)
                    throw c;
                break;
            default:
                if (!fi() && "none" !== a)
                    throw c;
            }
        }, Wm = function() {
            var a = !ni(M()) && Xh() ? !0 : !1
              , b = ii()
              , c = fi();
            this.Nh = "firebase";
            this.pg = ":";
            this.ik = a;
            this.ei = b;
            this.Ii = c;
            this.ra = {};
            Em || (Em = new Dm);
            a = Em;
            try {
                this.Xh = !Ch() && ui() || !u.indexedDB ? new a.uf.M : new ym(Zh() ? new em : new a.uf.M)
            } catch (d) {
                this.Xh = new em,
                this.ei = !0
            }
            try {
                this.xi = new a.uf.Oe
            } catch (d) {
                this.xi = new em
            }
            this.xj = new em;
            this.yg = w(this.ui, this);
            this.ka = {}
        }, Xm, Ym = function() {
            Xm || (Xm = new Wm);
            return Xm
        }, Zm = function(a, b) {
            switch (b) {
            case "session":
                return a.xi;
            case "none":
                return a.xj;
            default:
                return a.Xh
            }
        };
        Wm.prototype.va = function(a, b) {
            return this.Nh + this.pg + a.name + (b ? this.pg + b : "")
        }
        ;
        var $m = function(a, b, c) {
            var d = a.va(b, c)
              , e = Zm(a, b.M);
            return a.get(b, c).then(function(f) {
                var g = null;
                try {
                    g = mi(u.localStorage.getItem(d))
                } catch (h) {}
                if (g && !f)
                    return u.localStorage.removeItem(d),
                    a.set(b, g, c);
                g && f && "localStorage" != e.type && u.localStorage.removeItem(d)
            })
        };
        l = Wm.prototype;
        l.get = function(a, b) {
            return Zm(this, a.M).get(this.va(a, b))
        }
        ;
        l.remove = function(a, b) {
            b = this.va(a, b);
            "local" == a.M && (this.ka[b] = null);
            return Zm(this, a.M).remove(b)
        }
        ;
        l.set = function(a, b, c) {
            var d = this.va(a, c)
              , e = this
              , f = Zm(this, a.M);
            return f.set(d, b).then(function() {
                return f.get(d)
            }).then(function(g) {
                "local" == a.M && (e.ka[d] = g)
            })
        }
        ;
        l.addListener = function(a, b, c) {
            a = this.va(a, b);
            this.Ii && (this.ka[a] = u.localStorage.getItem(a));
            xc(this.ra) && this.xg();
            this.ra[a] || (this.ra[a] = []);
            this.ra[a].push(c)
        }
        ;
        l.removeListener = function(a, b, c) {
            a = this.va(a, b);
            this.ra[a] && (tb(this.ra[a], function(d) {
                return d == c
            }),
            0 == this.ra[a].length && delete this.ra[a]);
            xc(this.ra) && this.Ne()
        }
        ;
        l.xg = function() {
            Zm(this, "local").mb(this.yg);
            this.ei || (Ch() || !ui()) && u.indexedDB || !this.Ii || an(this)
        }
        ;
        var an = function(a) {
            bn(a);
            a.Qf = setInterval(function() {
                for (var b in a.ra) {
                    var c = u.localStorage.getItem(b)
                      , d = a.ka[b];
                    c != d && (a.ka[b] = c,
                    c = new wf({
                        type: "storage",
                        key: b,
                        target: window,
                        oldValue: d,
                        newValue: c,
                        Zf: !0
                    }),
                    a.ui(c))
                }
            }, 1E3)
        }
          , bn = function(a) {
            a.Qf && (clearInterval(a.Qf),
            a.Qf = null)
        };
        Wm.prototype.Ne = function() {
            Zm(this, "local").yb(this.yg);
            bn(this)
        }
        ;
        Wm.prototype.ui = function(a) {
            if (a && a.gj) {
                var b = a.qa.key;
                if (null == b)
                    for (var c in this.ra) {
                        var d = this.ka[c];
                        "undefined" === typeof d && (d = null);
                        var e = u.localStorage.getItem(c);
                        e !== d && (this.ka[c] = e,
                        this.jf(c))
                    }
                else if (0 == b.indexOf(this.Nh + this.pg) && this.ra[b]) {
                    "undefined" !== typeof a.qa.Zf ? Zm(this, "local").yb(this.yg) : bn(this);
                    if (this.ik)
                        if (c = u.localStorage.getItem(b),
                        d = a.qa.newValue,
                        d !== c)
                            null !== d ? u.localStorage.setItem(b, d) : u.localStorage.removeItem(b);
                        else if (this.ka[b] === d && "undefined" === typeof a.qa.Zf)
                            return;
                    var f = this;
                    c = function() {
                        if ("undefined" !== typeof a.qa.Zf || f.ka[b] !== u.localStorage.getItem(b))
                            f.ka[b] = u.localStorage.getItem(b),
                            f.jf(b)
                    }
                    ;
                    xb && Kb && 10 == Kb && u.localStorage.getItem(b) !== a.qa.newValue && a.qa.newValue !== a.qa.oldValue ? setTimeout(c, 10) : c()
                }
            } else
                C(a, w(this.jf, this))
        }
        ;
        Wm.prototype.jf = function(a) {
            this.ra[a] && C(this.ra[a], function(b) {
                b()
            })
        }
        ;
        var cn = function(a) {
            this.D = a;
            this.o = Ym()
        }
          , en = function(a) {
            return a.o.get(dn, a.D).then(function(b) {
                return Qi(b)
            })
        };
        cn.prototype.bc = function(a) {
            this.o.addListener(dn, this.D, a)
        }
        ;
        cn.prototype.td = function(a) {
            this.o.removeListener(dn, this.D, a)
        }
        ;
        var dn = {
            name: "authEvent",
            M: "local"
        }
          , fn = {
            name: "redirectEvent",
            M: "session"
        };
        var gn = function() {
            this.o = Ym()
        };
        gn.prototype.mc = function(a) {
            return this.o.get(hn, a)
        }
        ;
        var kn = function(a) {
            return a.o.get(jn).then(function(b) {
                b = b || {};
                return b.type && b.apiKey ? new Ri(b.apiKey,b.appName || "",b.type,b.eventId,b.redirectUrl,b.clientVersion,b.displayName,b.apn,b.ibi,b.eid,b.fw,b.clientId,b.sha1Cert,b.tenantId,b.providerId,b.appId,b.publicKey) : null
            })
        }
          , ln = function(a, b, c) {
            return a.o.set(dn, c.m(), b)
        }
          , jn = {
            name: "oauthHelperState",
            M: "session"
        }
          , hn = {
            name: "sessionId",
            M: "session"
        };
        var mn = function() {
            this.Sf = null;
            this.Sd = []
        };
        mn.prototype.subscribe = function(a) {
            var b = this;
            this.Sd.push(a);
            this.Sf || (this.Sf = function(c) {
                for (var d = 0; d < b.Sd.length; d++)
                    b.Sd[d](c)
            }
            ,
            a = N("universalLinks.subscribe", u),
            "function" === typeof a && a(null, this.Sf))
        }
        ;
        mn.prototype.unsubscribe = function(a) {
            tb(this.Sd, function(b) {
                return b == a
            })
        }
        ;
        var nn = null;
        var on = function(a, b, c, d, e, f) {
            this.J = a;
            this.A = b;
            this.B = c;
            this.s = f;
            this.Pa = d || null;
            this.pa = e || null;
            this.wi = b + ":" + c;
            this.jk = new gn;
            this.qh = new cn(this.wi);
            this.Lf = null;
            this.Ya = [];
            this.Bj = 500;
            this.Yj = 2E3;
            this.dd = this.ze = null
        }
          , pn = function(a) {
            return new P("invalid-cordova-configuration",a)
        };
        on.prototype.Ob = function() {
            return this.ed ? this.ed : this.ed = Vh().then(function() {
                if ("function" !== typeof N("universalLinks.subscribe", u))
                    throw pn("cordova-universal-links-plugin-fix is not installed");
                if ("undefined" === typeof N("BuildInfo.packageName", u))
                    throw pn("cordova-plugin-buildinfo is not installed");
                if ("function" !== typeof N("cordova.plugins.browsertab.openUrl", u))
                    throw pn("cordova-plugin-browsertab is not installed");
                if ("function" !== typeof N("cordova.InAppBrowser.open", u))
                    throw pn("cordova-plugin-inappbrowser is not installed");
            }, function() {
                throw new P("cordova-not-ready");
            })
        }
        ;
        var qn = function() {
            for (var a = 20, b = []; 0 < a; )
                b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
                a--;
            return b.join("")
        }
          , rn = function(a) {
            var b = new sf;
            b.update(a);
            return Oa(b.digest())
        };
        l = on.prototype;
        l.yd = function(a, b) {
            b(new P("operation-not-supported-in-this-environment"));
            return J()
        }
        ;
        l.nd = function() {
            return K(new P("operation-not-supported-in-this-environment"))
        }
        ;
        l.zi = function() {
            return !1
        }
        ;
        l.si = function() {
            return !0
        }
        ;
        l.uh = function() {
            return !0
        }
        ;
        l.od = function(a, b, c, d) {
            if (this.ze)
                return K(new P("redirect-operation-pending"));
            var e = this
              , f = u.document
              , g = null
              , h = null
              , k = null
              , m = null;
            return this.ze = J().then(function() {
                Yj(b);
                return sn(e)
            }).then(function() {
                return tn(e, a, b, c, d)
            }).then(function() {
                return (new I(function(p, r) {
                    h = function() {
                        var t = N("cordova.plugins.browsertab.close", u);
                        p();
                        "function" === typeof t && t();
                        e.dd && "function" === typeof e.dd.close && (e.dd.close(),
                        e.dd = null);
                        return !1
                    }
                    ;
                    e.bc(h);
                    k = function() {
                        g || (g = nh(e.Yj).then(function() {
                            r(new P("redirect-cancelled-by-user"))
                        }))
                    }
                    ;
                    m = function() {
                        qi() && k()
                    }
                    ;
                    f.addEventListener("resume", k, !1);
                    M().toLowerCase().match(/android/) || f.addEventListener("visibilitychange", m, !1)
                }
                )).h(function(p) {
                    return un(e).then(function() {
                        throw p;
                    })
                })
            }).Ab(function() {
                k && f.removeEventListener("resume", k, !1);
                m && f.removeEventListener("visibilitychange", m, !1);
                g && g.cancel();
                h && e.td(h);
                e.ze = null
            })
        }
        ;
        var tn = function(a, b, c, d, e) {
            var f = qn()
              , g = new Pi(b,d,null,f,new P("no-auth-event"),null,e)
              , h = N("BuildInfo.packageName", u);
            if ("string" !== typeof h)
                throw new P("invalid-cordova-configuration");
            var k = N("BuildInfo.displayName", u)
              , m = {};
            if (M().toLowerCase().match(/iphone|ipad|ipod/))
                m.ibi = h;
            else if (M().toLowerCase().match(/android/))
                m.apn = h;
            else
                return K(new P("operation-not-supported-in-this-environment"));
            k && (m.appDisplayName = k);
            f = rn(f);
            m.sessionId = f;
            var p = El(a.J, a.A, a.B, b, c, null, d, a.Pa, m, a.pa, e, a.s);
            return a.Ob().then(function() {
                return ln(a.jk, a.wi, g)
            }).then(function() {
                var r = N("cordova.plugins.browsertab.isAvailable", u);
                if ("function" !== typeof r)
                    throw new P("invalid-cordova-configuration");
                var t = null;
                r(function(z) {
                    if (z) {
                        t = N("cordova.plugins.browsertab.openUrl", u);
                        if ("function" !== typeof t)
                            throw new P("invalid-cordova-configuration");
                        t(p)
                    } else {
                        t = N("cordova.InAppBrowser.open", u);
                        if ("function" !== typeof t)
                            throw new P("invalid-cordova-configuration");
                        z = t;
                        var ca = M();
                        ca = !(!ca.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !ca.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
                        a.dd = z(p, ca ? "_blank" : "_system", "location=yes")
                    }
                })
            })
        };
        on.prototype.Tc = function(a) {
            for (var b = 0; b < this.Ya.length; b++)
                try {
                    this.Ya[b](a)
                } catch (c) {}
        }
        ;
        var sn = function(a) {
            a.Lf || (a.Lf = a.Ob().then(function() {
                return new I(function(b) {
                    var c = function(d) {
                        b(d);
                        a.td(c);
                        return !1
                    };
                    a.bc(c);
                    vn(a)
                }
                )
            }));
            return a.Lf
        }
          , un = function(a) {
            var b = null;
            return en(a.qh).then(function(c) {
                b = c;
                c = a.qh;
                return c.o.remove(dn, c.D)
            }).then(function() {
                return b
            })
        }
          , vn = function(a) {
            var b = new Pi("unknown",null,null,null,new P("no-auth-event"))
              , c = !1
              , d = nh(a.Bj).then(function() {
                return un(a).then(function() {
                    c || a.Tc(b)
                })
            })
              , e = function(g) {
                c = !0;
                d && d.cancel();
                un(a).then(function(h) {
                    var k = b;
                    if (h && g && g.url) {
                        var m = null;
                        k = cj(g.url);
                        -1 != k.indexOf("/__/auth/callback") && (m = G(k),
                        m = mi(F(m, "firebaseError") || null),
                        m = (m = "object" === typeof m ? Oi(m) : null) ? new Pi(h.getType(),h.T,null,null,m,null,h.C) : new Pi(h.getType(),h.T,k,h.mc(),null,null,h.C));
                        k = m || b
                    }
                    a.Tc(k)
                })
            }
              , f = u.handleOpenURL;
            u.handleOpenURL = function(g) {
                0 == g.toLowerCase().indexOf(N("BuildInfo.packageName", u).toLowerCase() + "://") && e({
                    url: g
                });
                if ("function" === typeof f)
                    try {
                        f(g)
                    } catch (h) {
                        console.error(h)
                    }
            }
            ;
            nn || (nn = new mn);
            nn.subscribe(e)
        };
        on.prototype.bc = function(a) {
            this.Ya.push(a);
            sn(this).h(function(b) {
                "auth/invalid-cordova-configuration" === b.code && (b = new Pi("unknown",null,null,null,new P("no-auth-event")),
                a(b))
            })
        }
        ;
        on.prototype.td = function(a) {
            tb(this.Ya, function(b) {
                return b == a
            })
        }
        ;
        var wn = function(a) {
            this.D = a;
            this.o = Ym()
        }
          , yn = function(a) {
            return a.o.set(xn, "pending", a.D)
        }
          , zn = function(a) {
            return a.o.remove(xn, a.D)
        }
          , An = function(a) {
            return a.o.get(xn, a.D).then(function(b) {
                return "pending" == b
            })
        }
          , xn = {
            name: "pendingRedirect",
            M: "session"
        };
        var Fn = function(a, b, c, d) {
            this.De = {};
            this.Of = 0;
            this.J = a;
            this.A = b;
            this.B = c;
            this.s = d;
            this.Ad = [];
            this.qc = !1;
            this.ef = w(this.Ff, this);
            this.ub = new Bn(this);
            this.cg = new Cn(this);
            this.ld = new wn(Dn(this.A, this.B));
            this.Bb = {};
            this.Bb.unknown = this.ub;
            this.Bb.signInViaRedirect = this.ub;
            this.Bb.linkViaRedirect = this.ub;
            this.Bb.reauthViaRedirect = this.ub;
            this.Bb.signInViaPopup = this.cg;
            this.Bb.linkViaPopup = this.cg;
            this.Bb.reauthViaPopup = this.cg;
            this.wa = En(this.J, this.A, this.B, Bh, this.s)
        }
          , En = function(a, b, c, d, e) {
            var f = firebase.SDK_VERSION || null;
            return Uh() ? new on(a,b,c,f,d,e) : new zl(a,b,c,f,d,e)
        };
        Fn.prototype.reset = function() {
            this.qc = !1;
            this.wa.td(this.ef);
            this.wa = En(this.J, this.A, this.B, null, this.s);
            this.De = {}
        }
        ;
        Fn.prototype.fc = function() {
            this.ub.fc()
        }
        ;
        Fn.prototype.initialize = function() {
            var a = this;
            this.qc || (this.qc = !0,
            this.wa.bc(this.ef));
            var b = this.wa;
            return this.wa.Ob().h(function(c) {
                a.wa == b && a.reset();
                throw c;
            })
        }
        ;
        var In = function(a) {
            a.wa.si() && a.initialize().h(function(b) {
                var c = new Pi("unknown",null,null,null,new P("operation-not-supported-in-this-environment"));
                Gn(b) && a.Ff(c)
            });
            a.wa.uh() || Hn(a.ub)
        };
        l = Fn.prototype;
        l.subscribe = function(a) {
            pb(this.Ad, a) || this.Ad.push(a);
            if (!this.qc) {
                var b = this;
                An(this.ld).then(function(c) {
                    c ? zn(b.ld).then(function() {
                        b.initialize().h(function(d) {
                            var e = new Pi("unknown",null,null,null,new P("operation-not-supported-in-this-environment"));
                            Gn(d) && b.Ff(e)
                        })
                    }) : In(b)
                }).h(function() {
                    In(b)
                })
            }
        }
        ;
        l.unsubscribe = function(a) {
            tb(this.Ad, function(b) {
                return b == a
            })
        }
        ;
        l.Ff = function(a) {
            if (!a)
                throw new P("invalid-auth-event");
            6E5 <= Date.now() - this.Of && (this.De = {},
            this.Of = 0);
            if (a && a.getUid() && this.De.hasOwnProperty(a.getUid()))
                return !1;
            for (var b = !1, c = 0; c < this.Ad.length; c++) {
                var d = this.Ad[c];
                if (d.Pg(a.getType(), a.T)) {
                    if (b = this.Bb[a.getType()])
                        b.Zh(a, d),
                        a && (a.mc() || a.T) && (this.De[a.getUid()] = !0,
                        this.Of = Date.now());
                    b = !0;
                    break
                }
            }
            Hn(this.ub);
            return b
        }
        ;
        l.getRedirectResult = function() {
            return this.ub.getRedirectResult()
        }
        ;
        l.nd = function(a, b, c, d, e, f) {
            var g = this;
            return this.wa.nd(a, b, c, function() {
                g.qc || (g.qc = !0,
                g.wa.bc(g.ef))
            }, function() {
                g.reset()
            }, d, e, f)
        }
        ;
        var Gn = function(a) {
            return a && "auth/cordova-not-ready" == a.code ? !0 : !1
        };
        Fn.prototype.od = function(a, b, c, d) {
            var e = this, f;
            return yn(this.ld).then(function() {
                return e.wa.od(a, b, c, d).h(function(g) {
                    if (Gn(g))
                        throw new P("operation-not-supported-in-this-environment");
                    f = g;
                    return zn(e.ld).then(function() {
                        throw f;
                    })
                }).then(function() {
                    return e.wa.zi() ? new I(function() {}
                    ) : zn(e.ld).then(function() {
                        return e.getRedirectResult()
                    }).then(function() {}).h(function() {})
                })
            })
        }
        ;
        Fn.prototype.yd = function(a, b, c, d) {
            return this.wa.yd(c, function(e) {
                a.Vb(b, null, e, d)
            }, Jn.get())
        }
        ;
        var Dn = function(a, b, c) {
            a = a + ":" + b;
            c && (a = a + ":" + c.url);
            return a
        }
          , Ln = function(a, b, c, d) {
            var e = Dn(b, c, d);
            Kn[e] || (Kn[e] = new Fn(a,b,c,d));
            return Kn[e]
        }
          , Jn = new pi(2E3,1E4)
          , Mn = new pi(3E4,6E4)
          , Kn = {}
          , Bn = function(a) {
            this.o = a;
            this.Cc = null;
            this.rd = [];
            this.qd = [];
            this.Ac = null;
            this.Ai = this.sd = !1
        };
        Bn.prototype.reset = function() {
            this.Cc = null;
            this.Ac && (this.Ac.cancel(),
            this.Ac = null)
        }
        ;
        Bn.prototype.Zh = function(a, b) {
            if (a) {
                this.reset();
                this.sd = !0;
                var c = a.getType()
                  , d = a.T
                  , e = a.getError() && "auth/web-storage-unsupported" == a.getError().code
                  , f = a.getError() && "auth/operation-not-supported-in-this-environment" == a.getError().code;
                this.Ai = !(!e && !f);
                "unknown" != c || e || f ? a.Y ? this.ig(a, b) : b.Xc(c, d) ? this.jg(a, b) : K(new P("invalid-auth-event")) : (Nn(this, !1, null, null),
                J())
            } else
                K(new P("invalid-auth-event"))
        }
        ;
        var Hn = function(a) {
            a.sd || (a.sd = !0,
            Nn(a, !1, null, null))
        };
        Bn.prototype.fc = function() {
            this.sd && !this.Ai && Nn(this, !1, null, null)
        }
        ;
        Bn.prototype.ig = function(a) {
            Nn(this, !0, null, a.getError());
            J()
        }
        ;
        Bn.prototype.jg = function(a, b) {
            var c = this
              , d = a.T
              , e = a.getType();
            b = b.Xc(e, d);
            d = a.Xa;
            e = a.mc();
            var f = a.dg
              , g = a.C
              , h = !!a.getType().match(/Redirect$/);
            b(d, e, g, f).then(function(k) {
                Nn(c, h, k, null)
            }).h(function(k) {
                Nn(c, h, null, k)
            })
        }
        ;
        var On = function(a, b) {
            a.Cc = function() {
                return K(b)
            }
            ;
            if (a.qd.length)
                for (var c = 0; c < a.qd.length; c++)
                    a.qd[c](b)
        }
          , Pn = function(a, b) {
            a.Cc = function() {
                return J(b)
            }
            ;
            if (a.rd.length)
                for (var c = 0; c < a.rd.length; c++)
                    a.rd[c](b)
        }
          , Nn = function(a, b, c, d) {
            b ? d ? On(a, d) : Pn(a, c) : Pn(a, {
                user: null
            });
            a.rd = [];
            a.qd = []
        };
        Bn.prototype.getRedirectResult = function() {
            var a = this;
            return new I(function(b, c) {
                a.Cc ? a.Cc().then(b, c) : (a.rd.push(b),
                a.qd.push(c),
                Qn(a))
            }
            )
        }
        ;
        var Qn = function(a) {
            var b = new P("timeout");
            a.Ac && a.Ac.cancel();
            a.Ac = nh(Mn.get()).then(function() {
                a.Cc || (a.sd = !0,
                Nn(a, !0, null, b))
            })
        }
          , Cn = function(a) {
            this.o = a
        };
        Cn.prototype.Zh = function(a, b) {
            if (a) {
                var c = a.getType()
                  , d = a.T;
                a.Y ? this.ig(a, b) : b.Xc(c, d) ? this.jg(a, b) : K(new P("invalid-auth-event"))
            } else
                K(new P("invalid-auth-event"))
        }
        ;
        Cn.prototype.ig = function(a, b) {
            var c = a.T
              , d = a.getType();
            b.Vb(d, null, a.getError(), c);
            J()
        }
        ;
        Cn.prototype.jg = function(a, b) {
            var c = a.T
              , d = a.getType()
              , e = b.Xc(d, c)
              , f = a.Xa
              , g = a.mc();
            e(f, g, a.C, a.dg).then(function(h) {
                b.Vb(d, h, null, c)
            }).h(function(h) {
                b.Vb(d, null, h, c)
            })
        }
        ;
        var Rn = function(a, b, c) {
            var d = b && b.mfaPendingCredential;
            if (!d)
                throw new P("argument-error","Internal assert: Invalid MultiFactorResolver");
            this.Md = a;
            this.Zi = yc(b);
            this.Qj = c;
            this.li = new jj(null,d);
            this.vh = [];
            var e = this;
            C(b.mfaInfo || [], function(f) {
                (f = Vi(f)) && e.vh.push(f)
            });
            O(this, "auth", this.Md);
            O(this, "session", this.li);
            O(this, "hints", this.vh)
        };
        Rn.prototype.resolveSignIn = function(a) {
            var b = this;
            return a.process(this.Md.i, this.li).then(function(c) {
                var d = yc(b.Zi);
                delete d.mfaInfo;
                delete d.mfaPendingCredential;
                Ac(d, c);
                return b.Qj(d)
            })
        }
        ;
        var Sn = function(a, b, c, d) {
            P.call(this, "multi-factor-auth-required", d, b);
            this.fk = new Rn(a,b,c);
            O(this, "resolver", this.fk)
        };
        q(Sn, P);
        var Tn = function(a, b, c) {
            if (a && v(a.serverResponse) && "auth/multi-factor-auth-required" === a.code)
                try {
                    return new Sn(b,a.serverResponse,c,a.message)
                } catch (d) {}
            return null
        };
        var Un = function() {};
        Un.prototype.process = function(a, b, c) {
            return "enroll" == b.type ? Vn(this, a, b, c) : Wn(this, a, b)
        }
        ;
        var Vn = function(a, b, c, d) {
            return c.Zc().then(function(e) {
                e = {
                    idToken: e
                };
                "undefined" !== typeof d && (e.displayName = d);
                Ac(e, {
                    phoneVerificationInfo: Oj(a.Uf)
                });
                return Q(b, hl, e)
            })
        }
          , Wn = function(a, b, c) {
            return c.Zc().then(function(d) {
                d = {
                    mfaPendingCredential: d
                };
                Ac(d, {
                    phoneVerificationInfo: Oj(a.Uf)
                });
                return Q(b, il, d)
            })
        }
          , Xn = function(a) {
            O(this, "factorId", a.providerId);
            this.Uf = a
        };
        x(Xn, Un);
        var Yn = function(a) {
            Xn.call(this, a);
            if (this.Uf.providerId != Sj.PROVIDER_ID)
                throw new P("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");
        };
        x(Yn, Xn);
        var Zn = function(a, b) {
            uf.call(this, a);
            for (var c in b)
                this[c] = b[c]
        };
        q(Zn, uf);
        var ao = function(a, b) {
            this.kb = a;
            this.Wd = [];
            this.Fk = w(this.uj, this);
            Jf(this.kb, "userReloaded", this.Fk);
            var c = [];
            b && b.multiFactor && b.multiFactor.enrolledFactors && C(b.multiFactor.enrolledFactors, function(d) {
                var e = null
                  , f = {};
                if (d) {
                    d.uid && (f.mfaEnrollmentId = d.uid);
                    d.displayName && (f.displayName = d.displayName);
                    d.enrollmentTime && (f.enrolledAt = (new Date(d.enrollmentTime)).toISOString());
                    if (d.phoneNumber) {
                        f.phoneInfo = d.phoneNumber;
                        try {
                            e = new Ti(f)
                        } catch (g) {}
                    } else if (d.totpInfo) {
                        f.totpInfo = d.totpInfo;
                        try {
                            e = new Ui(f)
                        } catch (g) {}
                    } else
                        e = null;
                    d = e
                } else
                    d = null;
                d && c.push(d)
            });
            $n(this, c)
        }
          , bo = function(a) {
            var b = [];
            C(a.mfaInfo || [], function(c) {
                (c = Vi(c)) && b.push(c)
            });
            return b
        };
        ao.prototype.uj = function(a) {
            $n(this, bo(a.Gk))
        }
        ;
        var $n = function(a, b) {
            a.Wd = b;
            O(a, "enrolledFactors", b)
        };
        l = ao.prototype;
        l.copy = function(a) {
            $n(this, a.Wd)
        }
        ;
        l.getSession = function() {
            return this.kb.getIdToken().then(function(a) {
                return new jj(a,null)
            })
        }
        ;
        l.enroll = function(a, b) {
            var c = this
              , d = this.kb.i;
            return this.getSession().then(function(e) {
                return a.process(d, e, b)
            }).then(function(e) {
                co(c.kb, e);
                return c.kb.reload()
            })
        }
        ;
        l.unenroll = function(a) {
            var b = this
              , c = "string" === typeof a ? a : a.uid
              , d = this.kb.i;
            return this.kb.getIdToken().then(function(e) {
                return Q(d, nl, {
                    idToken: e,
                    mfaEnrollmentId: c
                })
            }).then(function(e) {
                var f = mb(b.Wd, function(g) {
                    return g.uid != c
                });
                $n(b, f);
                co(b.kb, e);
                return b.kb.reload().h(function(g) {
                    if ("auth/user-token-expired" != g.code)
                        throw g;
                })
            })
        }
        ;
        l.m = function() {
            return {
                multiFactor: {
                    enrolledFactors: nb(this.Wd, function(a) {
                        return a.m()
                    })
                }
            }
        }
        ;
        var eo = function(a) {
            this.i = a;
            this.na = this.la = null;
            this.ic = Date.now()
        };
        eo.prototype.m = function() {
            return {
                apiKey: this.i.A,
                refreshToken: this.la,
                accessToken: this.na && this.na.toString(),
                expirationTime: this.ic
            }
        }
        ;
        var fo = function(a, b) {
            "undefined" === typeof b && (a.na ? (b = a.na,
            b = b.yf - b.wj) : b = 0);
            a.ic = Date.now() + 1E3 * b
        }
          , go = function(a, b) {
            a.na = hj(b.idToken || "");
            a.la = b.refreshToken;
            b = b.expiresIn;
            fo(a, "undefined" !== typeof b ? Number(b) : void 0)
        };
        eo.prototype.copy = function(a) {
            this.na = a.na;
            this.la = a.la;
            this.ic = a.ic
        }
        ;
        var ho = function(a, b) {
            return rk(a.i, b).then(function(c) {
                a.na = hj(c.access_token);
                a.la = c.refresh_token;
                fo(a, c.expires_in);
                return {
                    accessToken: a.na.toString(),
                    refreshToken: a.la
                }
            }).h(function(c) {
                "auth/user-token-expired" == c.code && (a.la = null);
                throw c;
            })
        };
        eo.prototype.getToken = function(a) {
            a = !!a;
            return this.na && !this.la ? K(new P("user-token-expired")) : a || !this.na || Date.now() > this.ic - 3E4 ? this.la ? ho(this, {
                grant_type: "refresh_token",
                refresh_token: this.la
            }) : J(null) : J({
                accessToken: this.na.toString(),
                refreshToken: this.la
            })
        }
        ;
        var io = function(a, b) {
            this.Zg = a || null;
            this.Hh = b || null;
            Di(this, {
                lastSignInTime: ti(b || null),
                creationTime: ti(a || null)
            })
        };
        io.prototype.clone = function() {
            return new io(this.Zg,this.Hh)
        }
        ;
        io.prototype.m = function() {
            return {
                lastLoginAt: this.Hh,
                createdAt: this.Zg
            }
        }
        ;
        var jo = function(a, b, c, d, e, f) {
            Di(this, {
                uid: a,
                displayName: d || null,
                photoURL: e || null,
                email: c || null,
                phoneNumber: f || null,
                providerId: b
            })
        }
          , R = function(a, b, c) {
            Uf.call(this);
            this.Z = [];
            this.A = a.apiKey;
            this.B = a.appName;
            this.J = a.authDomain || null;
            var d = firebase.SDK_VERSION ? di("JsCore", firebase.SDK_VERSION) : null;
            this.i = new gk(this.A,Ah(Bh),d);
            (this.s = a.emulatorConfig || null) && kk(this.i, this.s);
            this.Ka = new eo(this.i);
            ko(this, b.idToken);
            go(this.Ka, b);
            O(this, "refreshToken", this.Ka.la);
            lo(this, c || {});
            this.md = !1;
            this.J && hi() && (this.v = Ln(this.J, this.A, this.B, this.s));
            this.Me = [];
            this.La = null;
            this.xc = mo(this);
            this.Kc = w(this.Hf, this);
            var e = this;
            this.Fa = null;
            this.Sh = function(f) {
                e.Ec(f.languageCode)
            }
            ;
            this.Mf = null;
            this.Qh = function(f) {
                no(e, f.emulatorConfig)
            }
            ;
            this.tf = null;
            this.U = [];
            this.Rh = function(f) {
                oo(e, f.Wc)
            }
            ;
            this.Cf = null;
            this.te = new ao(this,c);
            O(this, "multiFactor", this.te)
        };
        q(R, Uf);
        R.prototype.Ec = function(a) {
            this.Fa = a;
            ik(this.i, a)
        }
        ;
        var no = function(a, b) {
            a.s = b;
            kk(a.i, b);
            a.v && (b = a.v,
            a.v = Ln(a.J, a.A, a.B, a.s),
            a.md && (b.unsubscribe(a),
            a.v.subscribe(a)))
        }
          , po = function(a, b) {
            a.Mf && Rf(a.Mf, "languageCodeChanged", a.Sh);
            (a.Mf = b) && Jf(b, "languageCodeChanged", a.Sh)
        }
          , qo = function(a, b) {
            a.tf && Rf(a.tf, "emulatorConfigChanged", a.Qh);
            (a.tf = b) && Jf(b, "emulatorConfigChanged", a.Qh)
        }
          , oo = function(a, b) {
            a.U = b;
            lk(a.i, firebase.SDK_VERSION ? di("JsCore", firebase.SDK_VERSION, a.U) : null)
        }
          , ro = function(a, b) {
            a.Cf && Rf(a.Cf, "frameworkChanged", a.Rh);
            (a.Cf = b) && Jf(b, "frameworkChanged", a.Rh)
        };
        R.prototype.Hf = function() {
            this.xc.uc && (this.xc.stop(),
            this.xc.start())
        }
        ;
        var so = function(a) {
            try {
                return firebase.app(a.B).auth()
            } catch (b) {
                throw new P("internal-error","No firebase.auth.Auth instance is available for the Firebase App '" + a.B + "'!");
            }
        }
          , mo = function(a) {
            return new Km(function() {
                return a.getIdToken(!0)
            }
            ,function(b) {
                return b && "auth/network-request-failed" == b.code ? !0 : !1
            }
            ,function() {
                var b = a.Ka.ic - Date.now() - 3E5;
                return 0 < b ? b : 0
            }
            )
        }
          , to = function(a) {
            a.Sc || a.xc.uc || (a.xc.start(),
            Rf(a, "tokenChanged", a.Kc),
            Jf(a, "tokenChanged", a.Kc))
        }
          , uo = function(a) {
            Rf(a, "tokenChanged", a.Kc);
            a.xc.stop()
        }
          , ko = function(a, b) {
            a.Gh = b;
            O(a, "_lat", b)
        }
          , vo = function(a, b) {
            tb(a.Me, function(c) {
                return c == b
            })
        }
          , wo = function(a) {
            for (var b = [], c = 0; c < a.Me.length; c++)
                b.push(a.Me[c](a));
            return Ig(b).then(function() {
                return a
            })
        }
          , xo = function(a) {
            a.v && !a.md && (a.md = !0,
            a.v.subscribe(a))
        }
          , lo = function(a, b) {
            Di(a, {
                uid: b.uid,
                displayName: b.displayName || null,
                photoURL: b.photoURL || null,
                email: b.email || null,
                emailVerified: b.emailVerified || !1,
                phoneNumber: b.phoneNumber || null,
                isAnonymous: b.isAnonymous || !1,
                tenantId: b.tenantId || null,
                metadata: new io(b.createdAt,b.lastLoginAt),
                providerData: []
            });
            a.i.C = a.tenantId
        }
          , yo = function() {}
          , zo = function(a) {
            return J().then(function() {
                if (a.Sc)
                    throw new P("app-deleted");
            })
        }
          , Ao = function(a) {
            return nb(a.providerData, function(b) {
                return b.providerId
            })
        }
          , Co = function(a, b) {
            b && (Bo(a, b.providerId),
            a.providerData.push(b))
        }
          , Bo = function(a, b) {
            tb(a.providerData, function(c) {
                return c.providerId == b
            })
        }
          , Do = function(a, b, c) {
            ("uid" != b || c) && a.hasOwnProperty(b) && O(a, b, c)
        };
        R.prototype.copy = function(a) {
            var b = this;
            b != a && (Di(this, {
                uid: a.uid,
                displayName: a.displayName,
                photoURL: a.photoURL,
                email: a.email,
                emailVerified: a.emailVerified,
                phoneNumber: a.phoneNumber,
                isAnonymous: a.isAnonymous,
                tenantId: a.tenantId,
                providerData: []
            }),
            a.metadata ? O(this, "metadata", a.metadata.clone()) : O(this, "metadata", new io),
            C(a.providerData, function(c) {
                Co(b, c)
            }),
            this.Ka.copy(a.Ka),
            O(this, "refreshToken", this.Ka.la),
            this.te.copy(a.te))
        }
        ;
        R.prototype.reload = function() {
            var a = this;
            return this.l(zo(this).then(function() {
                return Eo(a).then(function() {
                    return wo(a)
                }).then(yo)
            }))
        }
        ;
        var Eo = function(a) {
            return a.getIdToken().then(function(b) {
                var c = a.isAnonymous;
                return Q(a.i, jl, {
                    idToken: b
                }).then(w(a.Uj, a)).then(function() {
                    c || Do(a, "isAnonymous", !1);
                    return b
                })
            })
        };
        R.prototype.getIdTokenResult = function(a) {
            return this.getIdToken(a).then(function(b) {
                return new ij(b)
            })
        }
        ;
        R.prototype.getIdToken = function(a) {
            var b = this;
            return this.l(zo(this).then(function() {
                return b.Ka.getToken(a)
            }).then(function(c) {
                if (!c)
                    throw new P("internal-error");
                c.accessToken != b.Gh && (ko(b, c.accessToken),
                b.tb());
                Do(b, "refreshToken", c.refreshToken);
                return c.accessToken
            }))
        }
        ;
        var co = function(a, b) {
            b.idToken && a.Gh != b.idToken && (go(a.Ka, b),
            a.tb(),
            ko(a, b.idToken),
            Do(a, "refreshToken", a.Ka.la))
        };
        R.prototype.tb = function() {
            this.dispatchEvent(new Zn("tokenChanged"))
        }
        ;
        R.prototype.Uj = function(a) {
            a = a.users;
            if (!a || !a.length)
                throw new P("internal-error");
            a = a[0];
            lo(this, {
                uid: a.localId,
                displayName: a.displayName,
                photoURL: a.photoUrl,
                email: a.email,
                emailVerified: !!a.emailVerified,
                phoneNumber: a.phoneNumber,
                lastLoginAt: a.lastLoginAt,
                createdAt: a.createdAt,
                tenantId: a.tenantId
            });
            for (var b = Fo(a), c = 0; c < b.length; c++)
                Co(this, b[c]);
            Do(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
            this.dispatchEvent(new Zn("userReloaded",{
                Gk: a
            }))
        }
        ;
        var Fo = function(a) {
            return (a = a.providerUserInfo) && a.length ? nb(a, function(b) {
                return new jo(b.rawId,b.providerId,b.email,b.displayName,b.photoUrl,b.phoneNumber)
            }) : []
        };
        R.prototype.reauthenticateAndRetrieveDataWithCredential = function(a) {
            Ai("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");
            return this.reauthenticateWithCredential(a)
        }
        ;
        R.prototype.reauthenticateWithCredential = function(a) {
            var b = this
              , c = null;
            return this.l(a.hd(this.i, this.uid).then(function(d) {
                co(b, d);
                c = Go(b, d, "reauthenticate");
                b.La = null;
                return b.reload()
            }).then(function() {
                return c
            }), !0)
        }
        ;
        var Ho = function(a, b) {
            return Eo(a).then(function() {
                if (pb(Ao(a), b))
                    return wo(a).then(function() {
                        throw new P("provider-already-linked");
                    })
            })
        };
        R.prototype.linkAndRetrieveDataWithCredential = function(a) {
            Ai("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");
            return this.linkWithCredential(a)
        }
        ;
        R.prototype.linkWithCredential = function(a) {
            var b = this
              , c = null;
            return this.l(Ho(this, a.providerId).then(function() {
                return b.getIdToken()
            }).then(function(d) {
                return a.rc(b.i, d)
            }).then(function(d) {
                c = Go(b, d, "link");
                return Io(b, d)
            }).then(function() {
                return c
            }))
        }
        ;
        R.prototype.linkWithPhoneNumber = function(a, b) {
            var c = this;
            return this.l(Ho(this, "phone").then(function() {
                return Jm(so(c), a, b, w(c.linkWithCredential, c))
            }))
        }
        ;
        R.prototype.reauthenticateWithPhoneNumber = function(a, b) {
            var c = this;
            return this.l(J().then(function() {
                return Jm(so(c), a, b, w(c.reauthenticateWithCredential, c))
            }), !0)
        }
        ;
        var Go = function(a, b, c) {
            var d = Xj(b);
            b = Tm(b);
            return Ei({
                user: a,
                credential: d,
                additionalUserInfo: b,
                operationType: c
            })
        }
          , Io = function(a, b) {
            co(a, b);
            return a.reload().then(function() {
                return a
            })
        };
        l = R.prototype;
        l.updateEmail = function(a) {
            var b = this;
            return this.l(this.getIdToken().then(function(c) {
                return b.i.updateEmail(c, a)
            }).then(function(c) {
                co(b, c);
                return b.reload()
            }))
        }
        ;
        l.updatePhoneNumber = function(a) {
            var b = this;
            return this.l(this.getIdToken().then(function(c) {
                return a.rc(b.i, c)
            }).then(function(c) {
                co(b, c);
                return b.reload()
            }))
        }
        ;
        l.updatePassword = function(a) {
            var b = this;
            return this.l(this.getIdToken().then(function(c) {
                return b.i.updatePassword(c, a)
            }).then(function(c) {
                co(b, c);
                return b.reload()
            }))
        }
        ;
        l.updateProfile = function(a) {
            if (void 0 === a.displayName && void 0 === a.photoURL)
                return zo(this);
            var b = this;
            return this.l(this.getIdToken().then(function(c) {
                return b.i.updateProfile(c, {
                    displayName: a.displayName,
                    photoUrl: a.photoURL
                })
            }).then(function(c) {
                co(b, c);
                Do(b, "displayName", c.displayName || null);
                Do(b, "photoURL", c.photoUrl || null);
                C(b.providerData, function(d) {
                    "password" === d.providerId && (O(d, "displayName", b.displayName),
                    O(d, "photoURL", b.photoURL))
                });
                return wo(b)
            }).then(yo))
        }
        ;
        l.unlink = function(a) {
            var b = this;
            return this.l(Eo(this).then(function(c) {
                return pb(Ao(b), a) ? Uk(b.i, c, [a]).then(function(d) {
                    var e = {};
                    C(d.providerUserInfo || [], function(f) {
                        e[f.providerId] = !0
                    });
                    C(Ao(b), function(f) {
                        e[f] || Bo(b, f)
                    });
                    e[Sj.PROVIDER_ID] || O(b, "phoneNumber", null);
                    return wo(b)
                }) : wo(b).then(function() {
                    throw new P("no-such-provider");
                })
            }))
        }
        ;
        l.delete = function() {
            var a = this;
            return this.l(this.getIdToken().then(function(b) {
                return Q(a.i, gl, {
                    idToken: b
                })
            }).then(function() {
                a.dispatchEvent(new Zn("userDeleted"))
            })).then(function() {
                for (var b = 0; b < a.Z.length; b++)
                    a.Z[b].cancel("app-deleted");
                po(a, null);
                qo(a, null);
                ro(a, null);
                a.Z = [];
                a.Sc = !0;
                uo(a);
                O(a, "refreshToken", null);
                a.v && a.v.unsubscribe(a)
            })
        }
        ;
        l.Pg = function(a, b) {
            return "linkViaPopup" == a && (this.Ha || null) == b && this.Ga || "reauthViaPopup" == a && (this.Ha || null) == b && this.Ga || "linkViaRedirect" == a && (this.vb || null) == b || "reauthViaRedirect" == a && (this.vb || null) == b ? !0 : !1
        }
        ;
        l.Vb = function(a, b, c, d) {
            "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.Ha || null) || (c && this.Sb ? this.Sb(c) : b && !c && this.Ga && this.Ga(b),
            this.aa && (this.aa.cancel(),
            this.aa = null),
            delete this.Ga,
            delete this.Sb)
        }
        ;
        l.Xc = function(a, b) {
            return "linkViaPopup" == a && b == (this.Ha || null) ? w(this.kh, this) : "reauthViaPopup" == a && b == (this.Ha || null) ? w(this.lh, this) : "linkViaRedirect" == a && (this.vb || null) == b ? w(this.kh, this) : "reauthViaRedirect" == a && (this.vb || null) == b ? w(this.lh, this) : null
        }
        ;
        l.Zd = function() {
            return ei(this.uid + ":::")
        }
        ;
        l.linkWithPopup = function(a) {
            var b = this;
            return Jo(this, "linkViaPopup", a, function() {
                return Ho(b, a.providerId).then(function() {
                    return wo(b)
                })
            }, !1)
        }
        ;
        l.reauthenticateWithPopup = function(a) {
            return Jo(this, "reauthViaPopup", a, function() {
                return J()
            }, !0)
        }
        ;
        var Jo = function(a, b, c, d, e) {
            if (!hi())
                return K(new P("operation-not-supported-in-this-environment"));
            if (a.La && !e)
                return K(a.La);
            var f = Ki(c.providerId)
              , g = a.Zd()
              , h = null;
            (!ii() || Xh()) && a.J && c.isOAuthProvider && (h = El(a.J, a.A, a.B, b, c, null, g, firebase.SDK_VERSION || null, null, null, a.tenantId, a.s));
            var k = Nh(h, f && f.wc, f && f.vc);
            d = d().then(function() {
                Ko(a);
                if (!e)
                    return a.getIdToken().then(function() {})
            }).then(function() {
                return a.v.nd(k, b, c, g, !!h, a.tenantId)
            }).then(function() {
                return new I(function(m, p) {
                    a.Vb(b, null, new P("cancelled-popup-request"), a.Ha || null);
                    a.Ga = m;
                    a.Sb = p;
                    a.Ha = g;
                    a.aa = a.v.yd(a, b, k, g)
                }
                )
            }).then(function(m) {
                k && Mh(k);
                return m ? Ei(m) : null
            }).h(function(m) {
                k && Mh(k);
                throw m;
            });
            return a.l(d, e)
        };
        R.prototype.linkWithRedirect = function(a) {
            var b = this;
            return Lo(this, "linkViaRedirect", a, function() {
                return Ho(b, a.providerId)
            }, !1)
        }
        ;
        R.prototype.reauthenticateWithRedirect = function(a) {
            return Lo(this, "reauthViaRedirect", a, function() {
                return J()
            }, !0)
        }
        ;
        var Lo = function(a, b, c, d, e) {
            if (!hi())
                return K(new P("operation-not-supported-in-this-environment"));
            if (a.La && !e)
                return K(a.La);
            var f = null
              , g = a.Zd();
            d = d().then(function() {
                Ko(a);
                if (!e)
                    return a.getIdToken().then(function() {})
            }).then(function() {
                a.vb = g;
                return wo(a)
            }).then(function(h) {
                a.wb && (h = a.wb,
                h = h.o.set(Mo, a.m(), h.D));
                return h
            }).then(function() {
                return a.v.od(b, c, g, a.tenantId)
            }).h(function(h) {
                f = h;
                if (a.wb)
                    return No(a.wb);
                throw f;
            }).then(function() {
                if (f)
                    throw f;
            });
            return a.l(d, e)
        }
          , Ko = function(a) {
            if (!a.v || !a.md) {
                if (a.v && !a.md)
                    throw new P("internal-error");
                throw new P("auth-domain-config-required");
            }
        };
        l = R.prototype;
        l.kh = function(a, b, c, d) {
            var e = this;
            this.aa && (this.aa.cancel(),
            this.aa = null);
            var f = null;
            c = this.getIdToken().then(function(g) {
                return oj(e.i, {
                    requestUri: a,
                    postBody: d,
                    sessionId: b,
                    idToken: g
                })
            }).then(function(g) {
                f = Go(e, g, "link");
                return Io(e, g)
            }).then(function() {
                return f
            });
            return this.l(c)
        }
        ;
        l.lh = function(a, b, c, d) {
            var e = this;
            this.aa && (this.aa.cancel(),
            this.aa = null);
            var f = null
              , g = J().then(function() {
                return lj(pj(e.i, {
                    requestUri: a,
                    sessionId: b,
                    postBody: d,
                    tenantId: c
                }), e.uid)
            }).then(function(h) {
                f = Go(e, h, "reauthenticate");
                co(e, h);
                e.La = null;
                return e.reload()
            }).then(function() {
                return f
            });
            return this.l(g, !0)
        }
        ;
        l.sendEmailVerification = function(a) {
            var b = this
              , c = null;
            return this.l(this.getIdToken().then(function(d) {
                c = d;
                return "undefined" === typeof a || xc(a) ? {} : Hm(new Gm(a))
            }).then(function(d) {
                return b.i.sendEmailVerification(c, d)
            }).then(function(d) {
                if (b.email != d)
                    return b.reload()
            }).then(function() {}))
        }
        ;
        l.verifyBeforeUpdateEmail = function(a, b) {
            var c = this
              , d = null;
            return this.l(this.getIdToken().then(function(e) {
                d = e;
                return "undefined" === typeof b || xc(b) ? {} : Hm(new Gm(b))
            }).then(function(e) {
                return c.i.verifyBeforeUpdateEmail(d, a, e)
            }).then(function(e) {
                if (c.email != e)
                    return c.reload()
            }).then(function() {}))
        }
        ;
        l.l = function(a, b) {
            var c = this
              , d = Oo(this, a, b);
            this.Z.push(d);
            d.Ab(function() {
                rb(c.Z, d)
            });
            return d.h(function(e) {
                var f = null;
                e && "auth/multi-factor-auth-required" === e.code && (f = Tn(e.m(), so(c), w(c.Gf, c)));
                throw f || e;
            })
        }
        ;
        l.Gf = function(a) {
            var b = null
              , c = this;
            a = lj(J(a), c.uid).then(function(d) {
                b = Go(c, d, "reauthenticate");
                co(c, d);
                c.La = null;
                return c.reload()
            }).then(function() {
                return b
            });
            return this.l(a, !0)
        }
        ;
        var Oo = function(a, b, c) {
            return a.La && !c ? (b.cancel(),
            K(a.La)) : b.h(function(d) {
                !d || "auth/user-disabled" != d.code && "auth/user-token-expired" != d.code || (a.La || a.dispatchEvent(new Zn("userInvalidated")),
                a.La = d);
                throw d;
            })
        };
        R.prototype.toJSON = function() {
            return this.m()
        }
        ;
        R.prototype.m = function() {
            var a = {
                uid: this.uid,
                displayName: this.displayName,
                photoURL: this.photoURL,
                email: this.email,
                emailVerified: this.emailVerified,
                phoneNumber: this.phoneNumber,
                isAnonymous: this.isAnonymous,
                tenantId: this.tenantId,
                providerData: [],
                apiKey: this.A,
                appName: this.B,
                authDomain: this.J,
                stsTokenManager: this.Ka.m(),
                redirectEventId: this.vb || null
            };
            this.metadata && Ac(a, this.metadata.m());
            C(this.providerData, function(b) {
                var c = a.providerData, d = c.push, e = {}, f;
                for (f in b)
                    b.hasOwnProperty(f) && (e[f] = b[f]);
                d.call(c, e)
            });
            Ac(a, this.te.m());
            return a
        }
        ;
        var Po = function(a) {
            if (!a.apiKey)
                return null;
            var b = {
                apiKey: a.apiKey,
                authDomain: a.authDomain,
                appName: a.appName,
                emulatorConfig: a.emulatorConfig
            }
              , c = {};
            if (a.stsTokenManager && a.stsTokenManager.accessToken) {
                c.idToken = a.stsTokenManager.accessToken;
                c.refreshToken = a.stsTokenManager.refreshToken || null;
                var d = a.stsTokenManager.expirationTime;
                d && (c.expiresIn = (d - Date.now()) / 1E3)
            } else
                return null;
            var e = new R(b,c,a);
            a.providerData && C(a.providerData, function(f) {
                f && Co(e, Ei(f))
            });
            a.redirectEventId && (e.vb = a.redirectEventId);
            return e
        }
          , Qo = function(a, b, c, d) {
            var e = new R(a,b);
            c && (e.wb = c);
            d && oo(e, d);
            return e.reload().then(function() {
                return e
            })
        }
          , Ro = function(a, b, c, d) {
            b = b || {
                apiKey: a.A,
                authDomain: a.J,
                appName: a.B
            };
            var e = a.Ka
              , f = {};
            f.idToken = e.na && e.na.toString();
            f.refreshToken = e.la;
            b = new R(b,f);
            c && (b.wb = c);
            d && oo(b, d);
            b.copy(a);
            return b
        };
        O(R.prototype, "providerId", "firebase");
        var So = function(a) {
            this.D = a;
            this.o = Ym()
        }
          , No = function(a) {
            return a.o.remove(Mo, a.D)
        }
          , To = function(a, b) {
            return a.o.get(Mo, a.D).then(function(c) {
                c && b && (c.authDomain = b);
                return Po(c || {})
            })
        }
          , Mo = {
            name: "redirectUser",
            M: "session"
        };
        var Vo = function(a) {
            this.D = a;
            this.o = Ym();
            this.oa = null;
            this.Xf = this.cb();
            this.o.addListener(Uo("local"), this.D, w(this.xk, this))
        };
        Vo.prototype.xk = function() {
            var a = this
              , b = Uo("local");
            Wo(this, function() {
                return J().then(function() {
                    return a.oa && "local" != a.oa.M ? a.o.get(b, a.D) : null
                }).then(function(c) {
                    if (c)
                        return Xo(a, "local").then(function() {
                            a.oa = b
                        })
                })
            })
        }
        ;
        var Xo = function(a, b) {
            var c = [], d;
            for (d in Um)
                Um[d] !== b && c.push(a.o.remove(Uo(Um[d]), a.D));
            c.push(a.o.remove(Yo, a.D));
            return Hg(c)
        };
        Vo.prototype.cb = function() {
            var a = this
              , b = Uo("local")
              , c = Uo("session")
              , d = Uo("none");
            return $m(this.o, b, this.D).then(function() {
                return a.o.get(c, a.D)
            }).then(function(e) {
                return e ? c : a.o.get(d, a.D).then(function(f) {
                    return f ? d : a.o.get(b, a.D).then(function(g) {
                        return g ? b : a.o.get(Yo, a.D).then(function(h) {
                            return h ? Uo(h) : b
                        })
                    })
                })
            }).then(function(e) {
                a.oa = e;
                return Xo(a, e.M)
            }).h(function() {
                a.oa || (a.oa = b)
            })
        }
        ;
        var Uo = function(a) {
            return {
                name: "authUser",
                M: a
            }
        };
        Vo.prototype.setPersistence = function(a) {
            var b = null
              , c = this;
            Vm(a);
            return Wo(this, function() {
                return a != c.oa.M ? c.o.get(c.oa, c.D).then(function(d) {
                    b = d;
                    return Xo(c, a)
                }).then(function() {
                    c.oa = Uo(a);
                    if (b)
                        return c.o.set(c.oa, b, c.D)
                }) : J()
            })
        }
        ;
        var Zo = function(a) {
            return Wo(a, function() {
                return a.o.set(Yo, a.oa.M, a.D)
            })
        }
          , $o = function(a, b) {
            return Wo(a, function() {
                return a.o.set(a.oa, b.m(), a.D)
            })
        }
          , ap = function(a) {
            return Wo(a, function() {
                return a.o.remove(a.oa, a.D)
            })
        }
          , bp = function(a, b, c) {
            return Wo(a, function() {
                return a.o.get(a.oa, a.D).then(function(d) {
                    d && b && (d.authDomain = b);
                    d && c && (d.emulatorConfig = c);
                    return Po(d || {})
                })
            })
        }
          , Wo = function(a, b) {
            a.Xf = a.Xf.then(b, b);
            return a.Xf
        }
          , Yo = {
            name: "persistence",
            M: "session"
        };
        var S = function(a) {
            Uf.call(this);
            this.za = !1;
            this.ni = new Fm;
            O(this, "settings", this.ni);
            O(this, "app", a);
            if (this.u().options && this.u().options.apiKey)
                a = firebase.SDK_VERSION ? di("JsCore", firebase.SDK_VERSION) : null,
                this.i = new gk(this.u().options && this.u().options.apiKey,Ah(Bh),a);
            else
                throw new P("invalid-api-key");
            this.Z = [];
            this.Db = [];
            this.Jc = [];
            this.Pj = firebase.INTERNAL.createSubscribe(w(this.zj, this));
            this.Fd = void 0;
            this.Sj = firebase.INTERNAL.createSubscribe(w(this.Aj, this));
            cp(this, null);
            this.Ma = new Vo(this.nc());
            this.Ub = new So(this.nc());
            this.Ld = this.l(dp(this));
            this.Ia = this.l(ep(this));
            this.oe = !1;
            this.Ef = w(this.yk, this);
            this.Gi = w(this.rb, this);
            this.Kc = w(this.Hf, this);
            this.Ei = w(this.sj, this);
            this.Fi = w(this.tj, this);
            this.v = null;
            fp(this);
            this.INTERNAL = {};
            this.INTERNAL["delete"] = w(this.delete, this);
            this.INTERNAL.logFramework = w(this.Lj, this);
            this.Lb = 0;
            gp(this);
            this.U = [];
            this.s = null
        };
        q(S, Uf);
        S.prototype.setPersistence = function(a) {
            a = this.Ma.setPersistence(a);
            return this.l(a)
        }
        ;
        S.prototype.Ec = function(a) {
            this.Fa === a || this.za || (this.Fa = a,
            ik(this.i, this.Fa),
            this.dispatchEvent(new hp(this.Fa)))
        }
        ;
        S.prototype.useDeviceLanguage = function() {
            var a = u.navigator;
            this.Ec(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null)
        }
        ;
        S.prototype.useEmulator = function(a, b) {
            if (!this.s) {
                if (this.v)
                    throw new P("argument-error","useEmulator() must be called immediately following firebase.auth() initialization.");
                b = b ? !!b.disableWarnings : !1;
                ip(b);
                this.s = {
                    url: a,
                    disableWarnings: b
                };
                this.ni.cf = !0;
                kk(this.i, this.s);
                this.dispatchEvent(new jp(this.s))
            }
        }
        ;
        var ip = function(a) {
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            u.document && !a && Th().then(function() {
                var b = u.document.createElement("p");
                b.innerText = "Running in emulator mode. Do not use with production credentials.";
                b.style.position = "fixed";
                b.style.width = "100%";
                b.style.backgroundColor = "#ffffff";
                b.style.border = ".1em solid #000000";
                b.style.color = "#b50000";
                b.style.bottom = "0px";
                b.style.left = "0px";
                b.style.margin = "0px";
                b.style.zIndex = 1E4;
                b.style.textAlign = "center";
                b.classList.add("firebase-emulator-warning");
                u.document.body.appendChild(b)
            })
        };
        S.prototype.Lj = function(a) {
            this.U.push(a);
            lk(this.i, firebase.SDK_VERSION ? di("JsCore", firebase.SDK_VERSION, this.U) : null);
            this.dispatchEvent(new kp(this.U))
        }
        ;
        S.prototype.ug = function(a) {
            this.C === a || this.za || (this.C = a,
            this.i.C = this.C)
        }
        ;
        var gp = function(a) {
            Object.defineProperty(a, "lc", {
                get: function() {
                    return this.Fa
                },
                set: function(b) {
                    this.Ec(b)
                },
                enumerable: !1
            });
            a.Fa = null;
            Object.defineProperty(a, "ti", {
                get: function() {
                    return this.C
                },
                set: function(b) {
                    this.ug(b)
                },
                enumerable: !1
            });
            a.C = null;
            Object.defineProperty(a, "emulatorConfig", {
                get: function() {
                    if (this.s) {
                        var b = G(this.s.url);
                        b = Ei({
                            protocol: b.ta,
                            host: b.ga,
                            port: b.Ua,
                            options: Ei({
                                disableWarnings: this.s.disableWarnings
                            })
                        })
                    } else
                        b = null;
                    return b
                },
                enumerable: !1
            })
        };
        S.prototype.toJSON = function() {
            return {
                apiKey: this.u().options.apiKey,
                authDomain: this.u().options.authDomain,
                appName: this.u().name,
                currentUser: T(this) && T(this).m()
            }
        }
        ;
        var lp = function(a) {
            return a.aj || K(new P("auth-domain-config-required"))
        }
          , fp = function(a) {
            var b = a.u().options.authDomain
              , c = a.u().options.apiKey;
            b && hi() && (a.aj = a.Ld.then(function() {
                if (!a.za) {
                    a.v = Ln(b, c, a.u().name, a.s);
                    a.v.subscribe(a);
                    T(a) && xo(T(a));
                    if (a.xb) {
                        xo(a.xb);
                        var d = a.xb;
                        d.Ec(a.Fa);
                        po(d, a);
                        d = a.xb;
                        oo(d, a.U);
                        ro(d, a);
                        d = a.xb;
                        no(d, a.s);
                        qo(d, a);
                        a.xb = null
                    }
                    return a.v
                }
            }))
        };
        l = S.prototype;
        l.Pg = function(a, b) {
            switch (a) {
            case "unknown":
            case "signInViaRedirect":
                return !0;
            case "signInViaPopup":
                return this.Ha == b && !!this.Ga;
            default:
                return !1
            }
        }
        ;
        l.Vb = function(a, b, c, d) {
            "signInViaPopup" == a && this.Ha == d && (c && this.Sb ? this.Sb(c) : b && !c && this.Ga && this.Ga(b),
            this.aa && (this.aa.cancel(),
            this.aa = null),
            delete this.Ga,
            delete this.Sb)
        }
        ;
        l.Xc = function(a, b) {
            return "signInViaRedirect" == a || "signInViaPopup" == a && this.Ha == b && this.Ga ? w(this.ej, this) : null
        }
        ;
        l.ej = function(a, b, c, d) {
            var e = this
              , f = {
                requestUri: a,
                postBody: d,
                sessionId: b,
                tenantId: c
            };
            this.aa && (this.aa.cancel(),
            this.aa = null);
            return e.Ld.then(function() {
                return mp(e, nj(e.i, f))
            })
        }
        ;
        l.Zd = function() {
            return ei()
        }
        ;
        l.signInWithPopup = function(a) {
            if (!hi())
                return K(new P("operation-not-supported-in-this-environment"));
            var b = this
              , c = Ki(a.providerId)
              , d = this.Zd()
              , e = null;
            (!ii() || Xh()) && this.u().options.authDomain && a.isOAuthProvider && (e = El(this.u().options.authDomain, this.u().options.apiKey, this.u().name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null, null, null, this.C, this.s));
            var f = Nh(e, c && c.wc, c && c.vc);
            c = lp(this).then(function(g) {
                return g.nd(f, "signInViaPopup", a, d, !!e, b.C)
            }).then(function() {
                return new I(function(g, h) {
                    b.Vb("signInViaPopup", null, new P("cancelled-popup-request"), b.Ha);
                    b.Ga = g;
                    b.Sb = h;
                    b.Ha = d;
                    b.aa = b.v.yd(b, "signInViaPopup", f, d)
                }
                )
            }).then(function(g) {
                f && Mh(f);
                return g ? Ei(g) : null
            }).h(function(g) {
                f && Mh(f);
                throw g;
            });
            return this.l(c)
        }
        ;
        l.signInWithRedirect = function(a) {
            if (!hi())
                return K(new P("operation-not-supported-in-this-environment"));
            var b = this
              , c = lp(this).then(function() {
                return Zo(b.Ma)
            }).then(function() {
                return b.v.od("signInViaRedirect", a, void 0, b.C)
            });
            return this.l(c)
        }
        ;
        var np = function(a) {
            if (!hi())
                return K(new P("operation-not-supported-in-this-environment"));
            var b = lp(a).then(function() {
                return a.v.getRedirectResult()
            }).then(function(c) {
                return c ? Ei(c) : null
            });
            return a.l(b)
        };
        S.prototype.getRedirectResult = function() {
            var a = this;
            return np(this).then(function(b) {
                a.v && a.v.fc();
                return b
            }).h(function(b) {
                a.v && a.v.fc();
                throw b;
            })
        }
        ;
        S.prototype.updateCurrentUser = function(a) {
            if (!a)
                return K(new P("null-user"));
            if (this.C != a.tenantId)
                return K(new P("tenant-id-mismatch"));
            var b = this
              , c = {};
            c.apiKey = this.u().options.apiKey;
            c.authDomain = this.u().options.authDomain;
            c.appName = this.u().name;
            var d = Ro(a, c, b.Ub, ub(b.U));
            return this.l(this.Ia.then(function() {
                if (b.u().options.apiKey != a.A)
                    return d.reload()
            }).then(function() {
                if (T(b) && a.uid == T(b).uid)
                    return T(b).copy(a),
                    b.rb(a);
                cp(b, d);
                xo(d);
                return b.rb(d)
            }).then(function() {
                b.tb()
            }))
        }
        ;
        var op = function(a, b) {
            var c = {};
            c.apiKey = a.u().options.apiKey;
            c.authDomain = a.u().options.authDomain;
            c.appName = a.u().name;
            a.s && (c.emulatorConfig = a.s);
            return a.Ld.then(function() {
                return Qo(c, b, a.Ub, ub(a.U))
            }).then(function(d) {
                if (T(a) && d.uid == T(a).uid)
                    return T(a).copy(d),
                    a.rb(d);
                cp(a, d);
                xo(d);
                return a.rb(d)
            }).then(function() {
                a.tb()
            })
        }
          , cp = function(a, b) {
            T(a) && (vo(T(a), a.Gi),
            Rf(T(a), "tokenChanged", a.Kc),
            Rf(T(a), "userDeleted", a.Ei),
            Rf(T(a), "userInvalidated", a.Fi),
            uo(T(a)));
            b && (b.Me.push(a.Gi),
            Jf(b, "tokenChanged", a.Kc),
            Jf(b, "userDeleted", a.Ei),
            Jf(b, "userInvalidated", a.Fi),
            0 < a.Lb && to(b));
            O(a, "currentUser", b);
            b && (b.Ec(a.Fa),
            po(b, a),
            oo(b, a.U),
            ro(b, a),
            no(b, a.s),
            qo(b, a))
        };
        S.prototype.signOut = function() {
            var a = this
              , b = this.Ia.then(function() {
                a.v && a.v.fc();
                if (!T(a))
                    return J();
                cp(a, null);
                return ap(a.Ma).then(function() {
                    a.tb()
                })
            });
            return this.l(b)
        }
        ;
        var pp = function(a) {
            var b = a.u().options.authDomain;
            b = To(a.Ub, b).then(function(c) {
                if (a.xb = c)
                    c.wb = a.Ub;
                return No(a.Ub)
            });
            return a.l(b)
        }
          , dp = function(a) {
            var b = a.u().options.authDomain
              , c = pp(a).then(function() {
                return bp(a.Ma, b, a.s)
            }).then(function(d) {
                return d ? (d.wb = a.Ub,
                a.xb && (a.xb.vb || null) == (d.vb || null) ? d : d.reload().then(function() {
                    return $o(a.Ma, d).then(function() {
                        return d
                    })
                }).h(function(e) {
                    return "auth/network-request-failed" == e.code ? d : ap(a.Ma)
                })) : null
            }).then(function(d) {
                cp(a, d || null)
            });
            return a.l(c)
        }
          , ep = function(a) {
            return a.Ld.then(function() {
                return np(a)
            }).h(function() {}).then(function() {
                if (!a.za)
                    return a.Ef()
            }).h(function() {}).then(function() {
                if (!a.za) {
                    a.oe = !0;
                    var b = a.Ma;
                    b.o.addListener(Uo("local"), b.D, a.Ef)
                }
            })
        };
        l = S.prototype;
        l.yk = function() {
            var a = this
              , b = this.u().options.authDomain;
            return bp(this.Ma, b).then(function(c) {
                if (!a.za) {
                    var d;
                    if (d = T(a) && c) {
                        d = T(a).uid;
                        var e = c.uid;
                        d = void 0 === d || null === d || "" === d || void 0 === e || null === e || "" === e ? !1 : d == e
                    }
                    if (d)
                        return T(a).copy(c),
                        T(a).getIdToken();
                    if (T(a) || c)
                        cp(a, c),
                        c && (xo(c),
                        c.wb = a.Ub),
                        a.v && a.v.subscribe(a),
                        a.tb()
                }
            })
        }
        ;
        l.rb = function(a) {
            return $o(this.Ma, a)
        }
        ;
        l.Hf = function() {
            this.tb();
            this.rb(T(this))
        }
        ;
        l.sj = function() {
            this.signOut()
        }
        ;
        l.tj = function() {
            this.signOut()
        }
        ;
        var mp = function(a, b) {
            var c = null
              , d = null;
            return a.l(b.then(function(e) {
                c = Xj(e);
                d = Tm(e);
                return op(a, e)
            }, function(e) {
                var f = null;
                e && "auth/multi-factor-auth-required" === e.code && (f = Tn(e.m(), a, w(a.Gf, a)));
                throw f || e;
            }).then(function() {
                return Ei({
                    user: T(a),
                    credential: c,
                    additionalUserInfo: d,
                    operationType: "signIn"
                })
            }))
        };
        l = S.prototype;
        l.Gf = function(a) {
            var b = this;
            return this.Ia.then(function() {
                return mp(b, J(a))
            })
        }
        ;
        l.zj = function(a) {
            var b = this;
            this.addAuthTokenListener(function() {
                a.next(T(b))
            })
        }
        ;
        l.Aj = function(a) {
            var b = this;
            qp(this, function() {
                a.next(T(b))
            })
        }
        ;
        l.onIdTokenChanged = function(a, b, c) {
            var d = this;
            this.oe && firebase.Promise.resolve().then(function() {
                "function" === typeof a ? a(T(d)) : "function" === typeof a.next && a.next(T(d))
            });
            return this.Pj(a, b, c)
        }
        ;
        l.onAuthStateChanged = function(a, b, c) {
            var d = this;
            this.oe && firebase.Promise.resolve().then(function() {
                d.Fd = d.getUid();
                "function" === typeof a ? a(T(d)) : "function" === typeof a.next && a.next(T(d))
            });
            return this.Sj(a, b, c)
        }
        ;
        l.hj = function(a) {
            var b = this
              , c = this.Ia.then(function() {
                return T(b) ? T(b).getIdToken(a).then(function(d) {
                    return {
                        accessToken: d
                    }
                }) : null
            });
            return this.l(c)
        }
        ;
        l.signInWithCustomToken = function(a) {
            var b = this;
            return this.Ia.then(function() {
                return mp(b, Q(b.i, ml, {
                    token: a
                }))
            }).then(function(c) {
                var d = c.user;
                Do(d, "isAnonymous", !1);
                b.rb(d);
                return c
            })
        }
        ;
        l.signInWithEmailAndPassword = function(a, b) {
            var c = this;
            return this.Ia.then(function() {
                return mp(c, Q(c.i, Hj, {
                    email: a,
                    password: b
                }))
            })
        }
        ;
        l.createUserWithEmailAndPassword = function(a, b) {
            var c = this;
            return this.Ia.then(function() {
                return mp(c, Q(c.i, fl, {
                    email: a,
                    password: b
                }))
            })
        }
        ;
        l.signInWithCredential = function(a) {
            var b = this;
            return this.Ia.then(function() {
                return mp(b, a.Mb(b.i))
            })
        }
        ;
        l.signInAndRetrieveDataWithCredential = function(a) {
            Ai("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");
            return this.signInWithCredential(a)
        }
        ;
        l.signInAnonymously = function() {
            var a = this;
            return this.Ia.then(function() {
                var b = T(a);
                if (b && b.isAnonymous) {
                    var c = Ei({
                        providerId: null,
                        isNewUser: !1
                    });
                    return Ei({
                        user: b,
                        credential: null,
                        additionalUserInfo: c,
                        operationType: "signIn"
                    })
                }
                return mp(a, a.i.signInAnonymously()).then(function(d) {
                    var e = d.user;
                    Do(e, "isAnonymous", !0);
                    a.rb(e);
                    return d
                })
            })
        }
        ;
        l.nc = function() {
            var a = this.u().options.apiKey
              , b = this.u().name;
            return a + ":" + b
        }
        ;
        l.u = function() {
            return this.app
        }
        ;
        var T = function(a) {
            return a.currentUser
        };
        S.prototype.getUid = function() {
            return T(this) && T(this).uid || null
        }
        ;
        var rp = function(a) {
            return T(a) && T(a)._lat || null
        };
        l = S.prototype;
        l.tb = function() {
            if (this.oe) {
                for (var a = 0; a < this.Db.length; a++)
                    if (this.Db[a])
                        this.Db[a](rp(this));
                if (this.Fd !== this.getUid() && this.Jc.length)
                    for (this.Fd = this.getUid(),
                    a = 0; a < this.Jc.length; a++)
                        if (this.Jc[a])
                            this.Jc[a](rp(this))
            }
        }
        ;
        l.Pi = function(a) {
            this.addAuthTokenListener(a);
            this.Lb++;
            0 < this.Lb && T(this) && to(T(this))
        }
        ;
        l.Zj = function(a) {
            var b = this;
            C(this.Db, function(c) {
                c == a && b.Lb--
            });
            0 > this.Lb && (this.Lb = 0);
            0 == this.Lb && T(this) && uo(T(this));
            this.removeAuthTokenListener(a)
        }
        ;
        l.addAuthTokenListener = function(a) {
            var b = this;
            this.Db.push(a);
            this.l(this.Ia.then(function() {
                b.za || pb(b.Db, a) && a(rp(b))
            }))
        }
        ;
        l.removeAuthTokenListener = function(a) {
            tb(this.Db, function(b) {
                return b == a
            })
        }
        ;
        var qp = function(a, b) {
            a.Jc.push(b);
            a.l(a.Ia.then(function() {
                !a.za && pb(a.Jc, b) && a.Fd !== a.getUid() && (a.Fd = a.getUid(),
                b(rp(a)))
            }))
        };
        l = S.prototype;
        l.delete = function() {
            this.za = !0;
            for (var a = 0; a < this.Z.length; a++)
                this.Z[a].cancel("app-deleted");
            this.Z = [];
            this.Ma && (a = this.Ma,
            a.o.removeListener(Uo("local"), a.D, this.Ef));
            this.v && (this.v.unsubscribe(this),
            this.v.fc());
            return firebase.Promise.resolve()
        }
        ;
        l.l = function(a) {
            var b = this;
            this.Z.push(a);
            a.Ab(function() {
                rb(b.Z, a)
            });
            return a
        }
        ;
        l.fetchSignInMethodsForEmail = function(a) {
            return this.l(yk(this.i, a))
        }
        ;
        l.isSignInWithEmailLink = function(a) {
            return !!Lj(a)
        }
        ;
        l.sendSignInLinkToEmail = function(a, b) {
            var c = this;
            return this.l(J().then(function() {
                var d = new Gm(b);
                if (!d.Qg)
                    throw new P("argument-error","handleCodeInApp must be true when sending sign in link to email");
                return Hm(d)
            }).then(function(d) {
                return c.i.sendSignInLinkToEmail(a, d)
            }).then(function() {}))
        }
        ;
        l.verifyPasswordResetCode = function(a) {
            return this.checkActionCode(a).then(function(b) {
                return b.data.email
            })
        }
        ;
        l.confirmPasswordReset = function(a, b) {
            return this.l(this.i.confirmPasswordReset(a, b).then(function() {}))
        }
        ;
        l.checkActionCode = function(a) {
            return this.l(this.i.checkActionCode(a).then(function(b) {
                return new Wi(b)
            }))
        }
        ;
        l.applyActionCode = function(a) {
            return this.l(this.i.applyActionCode(a).then(function() {}))
        }
        ;
        l.sendPasswordResetEmail = function(a, b) {
            var c = this;
            return this.l(J().then(function() {
                return "undefined" === typeof b || xc(b) ? {} : Hm(new Gm(b))
            }).then(function(d) {
                return c.i.sendPasswordResetEmail(a, d)
            }).then(function() {}))
        }
        ;
        l.signInWithPhoneNumber = function(a, b) {
            return this.l(Jm(this, a, b, w(this.signInWithCredential, this)))
        }
        ;
        l.signInWithEmailLink = function(a, b) {
            var c = this;
            return this.l(J().then(function() {
                b = b || Fh();
                var d = Mj(a, b)
                  , e = Lj(b);
                if (!e)
                    throw new P("argument-error","Invalid email link!");
                if (e.tenantId !== c.C)
                    throw new P("tenant-id-mismatch");
                return c.signInWithCredential(d)
            }))
        }
        ;
        var hp = function(a) {
            uf.call(this, "languageCodeChanged");
            this.languageCode = a
        };
        q(hp, uf);
        var jp = function(a) {
            uf.call(this, "emulatorConfigChanged");
            this.emulatorConfig = a
        };
        q(jp, uf);
        var kp = function(a) {
            uf.call(this, "frameworkChanged");
            this.Wc = a
        };
        q(kp, uf);
        var tp = function(a, b, c, d) {
            a: {
                c = Array.prototype.slice.call(c);
                var e = 0;
                for (var f = !1, g = 0; g < b.length; g++)
                    if (b[g].optional)
                        f = !0;
                    else {
                        if (f)
                            throw new P("internal-error","Argument validator encountered a required argument after an optional argument.");
                        e++
                    }
                f = b.length;
                if (c.length < e || f < c.length)
                    d = "Expected " + (e == f ? 1 == e ? "1 argument" : e + " arguments" : e + "-" + f + " arguments") + " but got " + c.length + ".";
                else {
                    for (e = 0; e < c.length; e++)
                        if (f = b[e].optional && void 0 === c[e],
                        !b[e].X(c[e]) && !f) {
                            b = b[e];
                            if (0 > e || e >= sp.length)
                                throw new P("internal-error","Argument validator received an unsupported number of arguments.");
                            c = sp[e];
                            d = (d ? "" : c + " argument ") + (b.name ? '"' + b.name + '" ' : "") + "must be " + b.W + ".";
                            break a
                        }
                    d = null
                }
            }
            if (d)
                throw new P("argument-error",a + " failed: " + d);
        }
          , sp = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ")
          , U = function(a, b) {
            return {
                name: a || "",
                W: "a valid string",
                optional: !!b,
                X: function(c) {
                    return "string" === typeof c
                }
            }
        }
          , up = function(a, b) {
            return {
                name: a || "",
                W: "a boolean",
                optional: !!b,
                X: function(c) {
                    return "boolean" === typeof c
                }
            }
        }
          , V = function(a, b) {
            return {
                name: a || "",
                W: "a valid object",
                optional: !!b,
                X: v
            }
        }
          , vp = function(a, b) {
            return {
                name: a || "",
                W: "a function",
                optional: !!b,
                X: uc
            }
        }
          , wp = function(a, b) {
            return {
                name: a || "",
                W: "null",
                optional: !!b,
                X: function(c) {
                    return null === c
                }
            }
        }
          , xp = function() {
            return {
                name: "",
                W: "an HTML element",
                optional: !1,
                X: function(a) {
                    return !!(a && a instanceof Element)
                }
            }
        }
          , yp = function() {
            return {
                name: "auth",
                W: "an instance of Firebase Auth",
                optional: !0,
                X: function(a) {
                    return !!(a && a instanceof S)
                }
            }
        }
          , zp = function() {
            return {
                name: "app",
                W: "an instance of Firebase App",
                optional: !0,
                X: function(a) {
                    return !!(a && a instanceof firebase.app.App)
                }
            }
        }
          , Ap = function(a) {
            return {
                name: a ? a + "Credential" : "credential",
                W: a ? "a valid " + a + " credential" : "a valid credential",
                optional: !1,
                X: function(b) {
                    if (!b)
                        return !1;
                    var c = !a || b.providerId === a;
                    return !(!b.Mb || !c)
                }
            }
        }
          , Bp = function() {
            return {
                name: "multiFactorAssertion",
                W: "a valid multiFactorAssertion",
                optional: !1,
                X: function(a) {
                    return a ? !!a.process : !1
                }
            }
        }
          , Cp = function() {
            return {
                name: "authProvider",
                W: "a valid Auth provider",
                optional: !1,
                X: function(a) {
                    return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"))
                }
            }
        }
          , Dp = function(a, b) {
            return v(a) && "string" === typeof a.type && a.type === b && "function" === typeof a.Zc
        }
          , Ep = function(a) {
            return v(a) && "string" === typeof a.uid
        }
          , Fp = function() {
            return {
                name: "applicationVerifier",
                W: "an implementation of firebase.auth.ApplicationVerifier",
                optional: !1,
                X: function(a) {
                    return !(!a || "string" !== typeof a.type || "function" !== typeof a.verify)
                }
            }
        }
          , W = function(a, b, c, d) {
            return {
                name: c || "",
                W: a.W + " or " + b.W,
                optional: !!d,
                X: function(e) {
                    return a.X(e) || b.X(e)
                }
            }
        };
        var X = function(a, b) {
            for (var c in b) {
                var d = b[c].name;
                a[d] = Gp(d, a[c], b[c].g)
            }
        }
          , Hp = function(a, b) {
            for (var c in b) {
                var d = b[c].name;
                d !== c && Object.defineProperty(a, d, {
                    get: Ba(function(e) {
                        return this[e]
                    }, c),
                    set: Ba(function(e, f, g, h) {
                        tp(e, [g], [h], !0);
                        this[f] = h
                    }, d, c, b[c].df),
                    enumerable: !0
                })
            }
        }
          , Y = function(a, b, c, d) {
            a[b] = Gp(b, c, d)
        }
          , Gp = function(a, b, c) {
            if (!c)
                return b;
            var d = Ip(a);
            a = function() {
                var g = Array.prototype.slice.call(arguments);
                tp(d, c, g);
                return b.apply(this, g)
            }
            ;
            for (var e in b)
                a[e] = b[e];
            for (var f in b.prototype)
                a.prototype[f] = b.prototype[f];
            return a
        }
          , Ip = function(a) {
            a = a.split(".");
            return a[a.length - 1]
        };
        function Jp() {}
        O(Jp, "FACTOR_ID", "phone");
        X(S.prototype, {
            applyActionCode: {
                name: "applyActionCode",
                g: [U("code")]
            },
            checkActionCode: {
                name: "checkActionCode",
                g: [U("code")]
            },
            confirmPasswordReset: {
                name: "confirmPasswordReset",
                g: [U("code"), U("newPassword")]
            },
            createUserWithEmailAndPassword: {
                name: "createUserWithEmailAndPassword",
                g: [U("email"), U("password")]
            },
            fetchSignInMethodsForEmail: {
                name: "fetchSignInMethodsForEmail",
                g: [U("email")]
            },
            getRedirectResult: {
                name: "getRedirectResult",
                g: []
            },
            isSignInWithEmailLink: {
                name: "isSignInWithEmailLink",
                g: [U("emailLink")]
            },
            onAuthStateChanged: {
                name: "onAuthStateChanged",
                g: [W(V(), vp(), "nextOrObserver"), vp("opt_error", !0), vp("opt_completed", !0)]
            },
            onIdTokenChanged: {
                name: "onIdTokenChanged",
                g: [W(V(), vp(), "nextOrObserver"), vp("opt_error", !0), vp("opt_completed", !0)]
            },
            sendPasswordResetEmail: {
                name: "sendPasswordResetEmail",
                g: [U("email"), W(V("opt_actionCodeSettings", !0), wp(null, !0), "opt_actionCodeSettings", !0)]
            },
            sendSignInLinkToEmail: {
                name: "sendSignInLinkToEmail",
                g: [U("email"), V("actionCodeSettings")]
            },
            setPersistence: {
                name: "setPersistence",
                g: [U("persistence")]
            },
            signInAndRetrieveDataWithCredential: {
                name: "signInAndRetrieveDataWithCredential",
                g: [Ap()]
            },
            signInAnonymously: {
                name: "signInAnonymously",
                g: []
            },
            signInWithCredential: {
                name: "signInWithCredential",
                g: [Ap()]
            },
            signInWithCustomToken: {
                name: "signInWithCustomToken",
                g: [U("token")]
            },
            signInWithEmailAndPassword: {
                name: "signInWithEmailAndPassword",
                g: [U("email"), U("password")]
            },
            signInWithEmailLink: {
                name: "signInWithEmailLink",
                g: [U("email"), U("emailLink", !0)]
            },
            signInWithPhoneNumber: {
                name: "signInWithPhoneNumber",
                g: [U("phoneNumber"), Fp()]
            },
            signInWithPopup: {
                name: "signInWithPopup",
                g: [Cp()]
            },
            signInWithRedirect: {
                name: "signInWithRedirect",
                g: [Cp()]
            },
            updateCurrentUser: {
                name: "updateCurrentUser",
                g: [W(function(a) {
                    return {
                        name: "user",
                        W: "an instance of Firebase User",
                        optional: !!a,
                        X: function(b) {
                            return !!(b && b instanceof R)
                        }
                    }
                }(), wp(), "user")]
            },
            signOut: {
                name: "signOut",
                g: []
            },
            toJSON: {
                name: "toJSON",
                g: [U(null, !0)]
            },
            useDeviceLanguage: {
                name: "useDeviceLanguage",
                g: []
            },
            useEmulator: {
                name: "useEmulator",
                g: [U("url"), V("options", !0)]
            },
            verifyPasswordResetCode: {
                name: "verifyPasswordResetCode",
                g: [U("code")]
            }
        });
        Hp(S.prototype, {
            lc: {
                name: "languageCode",
                df: W(U(), wp(), "languageCode")
            },
            ti: {
                name: "tenantId",
                df: W(U(), wp(), "tenantId")
            }
        });
        S.Persistence = Um;
        S.Persistence.LOCAL = "local";
        S.Persistence.SESSION = "session";
        S.Persistence.NONE = "none";
        X(R.prototype, {
            "delete": {
                name: "delete",
                g: []
            },
            getIdTokenResult: {
                name: "getIdTokenResult",
                g: [up("opt_forceRefresh", !0)]
            },
            getIdToken: {
                name: "getIdToken",
                g: [up("opt_forceRefresh", !0)]
            },
            linkAndRetrieveDataWithCredential: {
                name: "linkAndRetrieveDataWithCredential",
                g: [Ap()]
            },
            linkWithCredential: {
                name: "linkWithCredential",
                g: [Ap()]
            },
            linkWithPhoneNumber: {
                name: "linkWithPhoneNumber",
                g: [U("phoneNumber"), Fp()]
            },
            linkWithPopup: {
                name: "linkWithPopup",
                g: [Cp()]
            },
            linkWithRedirect: {
                name: "linkWithRedirect",
                g: [Cp()]
            },
            reauthenticateAndRetrieveDataWithCredential: {
                name: "reauthenticateAndRetrieveDataWithCredential",
                g: [Ap()]
            },
            reauthenticateWithCredential: {
                name: "reauthenticateWithCredential",
                g: [Ap()]
            },
            reauthenticateWithPhoneNumber: {
                name: "reauthenticateWithPhoneNumber",
                g: [U("phoneNumber"), Fp()]
            },
            reauthenticateWithPopup: {
                name: "reauthenticateWithPopup",
                g: [Cp()]
            },
            reauthenticateWithRedirect: {
                name: "reauthenticateWithRedirect",
                g: [Cp()]
            },
            reload: {
                name: "reload",
                g: []
            },
            sendEmailVerification: {
                name: "sendEmailVerification",
                g: [W(V("opt_actionCodeSettings", !0), wp(null, !0), "opt_actionCodeSettings", !0)]
            },
            toJSON: {
                name: "toJSON",
                g: [U(null, !0)]
            },
            unlink: {
                name: "unlink",
                g: [U("provider")]
            },
            updateEmail: {
                name: "updateEmail",
                g: [U("email")]
            },
            updatePassword: {
                name: "updatePassword",
                g: [U("password")]
            },
            updatePhoneNumber: {
                name: "updatePhoneNumber",
                g: [Ap("phone")]
            },
            updateProfile: {
                name: "updateProfile",
                g: [V("profile")]
            },
            verifyBeforeUpdateEmail: {
                name: "verifyBeforeUpdateEmail",
                g: [U("email"), W(V("opt_actionCodeSettings", !0), wp(null, !0), "opt_actionCodeSettings", !0)]
            }
        });
        X(Kl.prototype, {
            execute: {
                name: "execute"
            },
            render: {
                name: "render"
            },
            reset: {
                name: "reset"
            },
            getResponse: {
                name: "getResponse"
            }
        });
        X(Fl.prototype, {
            execute: {
                name: "execute"
            },
            render: {
                name: "render"
            },
            reset: {
                name: "reset"
            },
            getResponse: {
                name: "getResponse"
            }
        });
        X(I.prototype, {
            Ab: {
                name: "finally"
            },
            h: {
                name: "catch"
            },
            then: {
                name: "then"
            }
        });
        Hp(Fm.prototype, {
            appVerificationDisabled: {
                name: "appVerificationDisabledForTesting",
                df: up("appVerificationDisabledForTesting")
            }
        });
        X(Im.prototype, {
            confirm: {
                name: "confirm",
                g: [U("verificationCode")]
            }
        });
        Y(kj, "fromJSON", function(a) {
            a = "string" === typeof a ? JSON.parse(a) : a;
            for (var b, c = [sj, Kj, Rj, qj], d = 0; d < c.length; d++)
                if (b = c[d](a))
                    return b;
            return null
        }, [W(U(), V(), "json")]);
        Y(Ej, "credential", function(a, b) {
            return new Fj(a,b)
        }, [U("email"), U("password")]);
        X(Fj.prototype, {
            m: {
                name: "toJSON",
                g: [U(null, !0)]
            }
        });
        X(wj.prototype, {
            addScope: {
                name: "addScope",
                g: [U("scope")]
            },
            setCustomParameters: {
                name: "setCustomParameters",
                g: [V("customOAuthParameters")]
            }
        });
        Y(wj, "credential", xj, [W(U(), V(), "token")]);
        Y(Ej, "credentialWithLink", Mj, [U("email"), U("emailLink")]);
        X(yj.prototype, {
            addScope: {
                name: "addScope",
                g: [U("scope")]
            },
            setCustomParameters: {
                name: "setCustomParameters",
                g: [V("customOAuthParameters")]
            }
        });
        Y(yj, "credential", zj, [W(U(), V(), "token")]);
        X(Aj.prototype, {
            addScope: {
                name: "addScope",
                g: [U("scope")]
            },
            setCustomParameters: {
                name: "setCustomParameters",
                g: [V("customOAuthParameters")]
            }
        });
        Y(Aj, "credential", Bj, [W(U(), W(V(), wp()), "idToken"), W(U(), wp(), "accessToken", !0)]);
        X(Cj.prototype, {
            setCustomParameters: {
                name: "setCustomParameters",
                g: [V("customOAuthParameters")]
            }
        });
        Y(Cj, "credential", Dj, [W(U(), V(), "token"), U("secret", !0)]);
        X(vj.prototype, {
            addScope: {
                name: "addScope",
                g: [U("scope")]
            },
            credential: {
                name: "credential",
                g: [W(U(), W(V(), wp()), "optionsOrIdToken"), W(U(), wp(), "accessToken", !0)]
            },
            setCustomParameters: {
                name: "setCustomParameters",
                g: [V("customOAuthParameters")]
            }
        });
        X(rj.prototype, {
            m: {
                name: "toJSON",
                g: [U(null, !0)]
            }
        });
        X(mj.prototype, {
            m: {
                name: "toJSON",
                g: [U(null, !0)]
            }
        });
        Y(Sj, "credential", Wj, [U("verificationId"), U("verificationCode")]);
        X(Sj.prototype, {
            verifyPhoneNumber: {
                name: "verifyPhoneNumber",
                g: [W(U(), function(a, b) {
                    return {
                        name: a || "phoneInfoOptions",
                        W: "valid phone info options",
                        optional: !!b,
                        X: function(c) {
                            return c ? c.session && c.phoneNumber ? Dp(c.session, "enroll") && "string" === typeof c.phoneNumber : c.session && c.multiFactorHint ? Dp(c.session, "signin") && Ep(c.multiFactorHint) : c.session && c.multiFactorUid ? Dp(c.session, "signin") && "string" === typeof c.multiFactorUid : c.phoneNumber ? "string" === typeof c.phoneNumber : !1 : !1
                        }
                    }
                }(), "phoneInfoOptions"), Fp()]
            }
        });
        X(Nj.prototype, {
            m: {
                name: "toJSON",
                g: [U(null, !0)]
            }
        });
        X(P.prototype, {
            toJSON: {
                name: "toJSON",
                g: [U(null, !0)]
            }
        });
        X(Zj.prototype, {
            toJSON: {
                name: "toJSON",
                g: [U(null, !0)]
            }
        });
        X(ej.prototype, {
            toJSON: {
                name: "toJSON",
                g: [U(null, !0)]
            }
        });
        X(Sn.prototype, {
            toJSON: {
                name: "toJSON",
                g: [U(null, !0)]
            }
        });
        X(Rn.prototype, {
            resolveSignIn: {
                name: "resolveSignIn",
                g: [Bp()]
            }
        });
        X(ao.prototype, {
            getSession: {
                name: "getSession",
                g: []
            },
            enroll: {
                name: "enroll",
                g: [Bp(), U("displayName", !0)]
            },
            unenroll: {
                name: "unenroll",
                g: [W({
                    name: "multiFactorInfo",
                    W: "a valid multiFactorInfo",
                    optional: !1,
                    X: Ep
                }, U(), "multiFactorInfoIdentifier")]
            }
        });
        X(Vl.prototype, {
            clear: {
                name: "clear",
                g: []
            },
            render: {
                name: "render",
                g: []
            },
            verify: {
                name: "verify",
                g: []
            }
        });
        Y(Yi, "parseLink", Zi, [U("link")]);
        Y(Jp, "assertion", function(a) {
            return new Yn(a)
        }, [Ap("phone")]);
        (function() {
            if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
                var a = {
                    ActionCodeInfo: {
                        Operation: {
                            EMAIL_SIGNIN: "EMAIL_SIGNIN",
                            PASSWORD_RESET: "PASSWORD_RESET",
                            RECOVER_EMAIL: "RECOVER_EMAIL",
                            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
                            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
                            VERIFY_EMAIL: "VERIFY_EMAIL"
                        }
                    },
                    Auth: S,
                    AuthCredential: kj,
                    Error: P
                };
                Y(a, "EmailAuthProvider", Ej, []);
                Y(a, "FacebookAuthProvider", wj, []);
                Y(a, "GithubAuthProvider", yj, []);
                Y(a, "GoogleAuthProvider", Aj, []);
                Y(a, "TwitterAuthProvider", Cj, []);
                Y(a, "OAuthProvider", vj, [U("providerId")]);
                Y(a, "SAMLAuthProvider", uj, [U("providerId")]);
                Y(a, "PhoneAuthProvider", Sj, [yp()]);
                Y(a, "RecaptchaVerifier", Vl, [W(U(), xp(), "recaptchaContainer"), V("recaptchaParameters", !0), zp()]);
                Y(a, "ActionCodeURL", Yi, []);
                Y(a, "PhoneMultiFactorGenerator", Jp, []);
                firebase.INTERNAL.registerService("auth", function(b, c) {
                    b = new S(b);
                    c({
                        INTERNAL: {
                            getUid: w(b.getUid, b),
                            getToken: w(b.hj, b),
                            addAuthTokenListener: w(b.Pi, b),
                            removeAuthTokenListener: w(b.Zj, b)
                        }
                    });
                    return b
                }, a, function(b, c) {
                    if ("create" === b)
                        try {
                            c.auth()
                        } catch (d) {}
                });
                firebase.INTERNAL.extendNamespace({
                    User: R
                })
            } else
                throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
        }
        )();
        var Kp = function() {
            this.Qa = ("undefined" == typeof document ? null : document) || {
                cookie: ""
            }
        };
        l = Kp.prototype;
        l.isEnabled = function() {
            if (!u.navigator.cookieEnabled)
                return !1;
            if (!this.Ch())
                return !0;
            this.set("TESTCOOKIESENABLED", "1", {
                Tf: 60
            });
            if ("1" !== this.get("TESTCOOKIESENABLED"))
                return !1;
            this.remove("TESTCOOKIESENABLED");
            return !0
        }
        ;
        l.set = function(a, b, c) {
            var d = !1;
            if ("object" === typeof c) {
                var e = c.ol;
                d = c.mk || !1;
                var f = c.domain || void 0;
                var g = c.path || void 0;
                var h = c.Tf
            }
            if (/[;=\s]/.test(a))
                throw Error('Invalid cookie name "' + a + '"');
            if (/[;\r\n]/.test(b))
                throw Error('Invalid cookie value "' + b + '"');
            void 0 === h && (h = -1);
            this.qg(a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : ""))
        }
        ;
        l.get = function(a, b) {
            for (var c = a + "=", d = (this.Yc() || "").split(";"), e = 0, f; e < d.length; e++) {
                f = Pa(d[e]);
                if (0 == f.lastIndexOf(c, 0))
                    return f.slice(c.length);
                if (f == a)
                    return ""
            }
            return b
        }
        ;
        l.remove = function(a, b, c) {
            var d = this.Pc(a);
            this.set(a, "", {
                Tf: 0,
                path: b,
                domain: c
            });
            return d
        }
        ;
        l.ae = function() {
            return Lp(this).keys
        }
        ;
        l.qb = function() {
            return Lp(this).values
        }
        ;
        l.Ch = function() {
            return !this.Yc()
        }
        ;
        l.Pc = function(a) {
            return void 0 !== this.get(a)
        }
        ;
        l.clear = function() {
            for (var a = Lp(this).keys, b = a.length - 1; 0 <= b; b--)
                this.remove(a[b])
        }
        ;
        l.qg = function(a) {
            this.Qa.cookie = a
        }
        ;
        l.Yc = function() {
            return this.Qa.cookie
        }
        ;
        var Lp = function(a) {
            a = (a.Yc() || "").split(";");
            for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
                e = Pa(a[f]),
                d = e.indexOf("="),
                -1 == d ? (b.push(""),
                c.push(e)) : (b.push(e.substring(0, d)),
                c.push(e.substring(d + 1)));
            return {
                keys: b,
                values: c
            }
        }
          , Mp = new Kp;
        var Np = /\.(firebaseapp\-staging\.com|staging\-web\.app)$/;
        var Op = function() {
            var a = u.EXPERIMENTS || {};
            this.N = {};
            var b;
            for (b in a) {
                var c = "" + a[b].id;
                this.N[c] = a[b];
                "undefined" !== typeof this.N[c].stagingRollout && (0 > this.N[c].stagingRollout && (this.N[c].stagingRollout = 0),
                1 < this.N[c].stagingRollout && (this.N[c].stagingRollout = 1));
                "undefined" !== typeof this.N[c].rollout && (0 > this.N[c].rollout && (this.N[c].rollout = 0),
                1 < this.N[c].rollout && (this.N[c].rollout = 1))
            }
        };
        Op.prototype.isEnabled = function(a) {
            var b = a.id;
            a = a.id.toString();
            if ("undefined" !== typeof this.N[a]) {
                var c = void 0 === c ? u.window : c;
                if (!(c && c.navigator && c.navigator.cookieEnabled) || this.N[a].expiration && this.N[a].expiration.getTime() <= Date.now())
                    return !!this.N[a].defaultValue;
                var d;
                c = this.Yc("e_gcip_" + b);
                null === c && (c = parseInt(1E4 * Math.random(), 10) / 1E4,
                this.N[b.toString()].expiration && (d = parseInt((this.N[b.toString()].expiration.getTime() - Date.now()) / 1E3, 10)),
                this.qg("e_gcip_" + b, c.toString(), d));
                b = parseFloat(c);
                var e;
                return (e = void 0 === e ? u.window : e) && e.location && e.location.hostname && Np.test(e.location.hostname) && "undefined" !== typeof this.N[a].stagingRollout ? 0 === b ? !1 : b <= this.N[a].stagingRollout : "undefined" !== typeof this.N[a].rollout ? 0 === b ? !1 : b <= this.N[a].rollout : !!this.N[a].defaultValue
            }
            return !1
        }
        ;
        Op.prototype.qg = function(a, b, c) {
            Mp.set(a, b, {
                Tf: c ? c : 2592E3,
                path: "/__/auth/",
                domain: u.window.location.hostname,
                mk: !0
            })
        }
        ;
        Op.prototype.Yc = function(a) {
            return Mp.get(a) || null
        }
        ;
        var Pp = function() {
            this.zf = new Op
        };
        Pp.prototype.Dj = function() {
            var a = (u.EXPERIMENTS || {}).DISPLAY_CONTINUE_BUTTON_IF_NOT_REDIRECT;
            return "undefined" === typeof a ? !1 : this.zf.isEnabled(a)
        }
        ;
        Pp.prototype.Fj = function() {
            var a = (u.EXPERIMENTS || {}).POPUP_POST_MESSAGE_TO_IFRAME;
            return "undefined" === typeof a ? !1 : this.zf.isEnabled(a)
        }
        ;
        Pp.prototype.Cj = function() {
            var a = (u.EXPERIMENTS || {}).CHECK_OAUTH_STATE_STORED_BEFORE_REDIRECT;
            return "undefined" === typeof a ? !1 : this.zf.isEnabled(a)
        }
        ;
        var Qp = new Pp
          , Rp = Qp.Dj.bind(Qp)
          , Sp = Qp.Fj.bind(Qp)
          , Tp = Qp.Cj.bind(Qp);
        var Up = function(a) {
            return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
        }
          , Vp = function(a, b) {
            if (a.classList)
                a.classList.add(b);
            else if (a.classList ? !a.classList.contains(b) : !pb(a.classList ? a.classList : Up(a).match(/\S+/g) || [], b)) {
                var c = Up(a);
                b = c + (0 < c.length ? " " + b : b);
                "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
            }
        };
        function Wp(a, b) {
            a = u[a];
            return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
        }
        Wp("Element", "attributes") || Wp("Node", "attributes");
        Wp("Element", "innerHTML") || Wp("HTMLElement", "innerHTML");
        Wp("Node", "nodeName");
        Wp("Node", "nodeType");
        Wp("Node", "parentNode");
        Wp("Node", "childNodes");
        Wp("HTMLElement", "style") || Wp("Element", "style");
        Wp("HTMLStyleElement", "sheet");
        Wp("Element", "namespaceURI") || Wp("Node", "namespaceURI");
        je(ke(), "goog.html.sanitizer.SafeDomTreeProcessor");
        var Xp = function(a, b) {
            b instanceof ad && b.constructor === ad ? b = b.fg : (Ia("expected object of type SafeStyleSheet, got '" + b + "' of type " + xa(b)),
            b = "type_error:SafeStyleSheet");
            xb && void 0 !== a.cssText ? a.cssText = b : u.trustedTypes ? We(a, b) : a.innerHTML = b
        };
        /*
    
     Copyright 2015 Google Inc. All Rights Reserved.
    
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at
    
          http://www.apache.org/licenses/LICENSE-2.0
    
     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
        var Z = {
            Bi: function() {},
            Ci: function() {},
            Di: function() {},
            Dg: function() {},
            di: function() {},
            register: function() {},
            gh: function() {}
        };
        Z = function() {
            function a(p, r) {
                for (var t = 0; t < k.length; t++)
                    if (k[t].className === p)
                        return "undefined" !== typeof r && (k[t] = r),
                        k[t];
                return !1
            }
            function b(p) {
                p = p.getAttribute("data-upgraded");
                return null === p ? [""] : p.split(",")
            }
            function c(p, r) {
                return -1 !== b(p).indexOf(r)
            }
            function d(p, r, t) {
                if ("CustomEvent"in window && "function" === typeof window.CustomEvent)
                    return new CustomEvent(p,{
                        bubbles: r,
                        cancelable: t
                    });
                var z = document.createEvent("Events");
                z.initEvent(p, r, t);
                return z
            }
            function e(p, r) {
                if ("undefined" === typeof p && "undefined" === typeof r)
                    for (p = 0; p < k.length; p++)
                        e(k[p].className, k[p].ob);
                else {
                    if ("undefined" === typeof r) {
                        var t = a(p);
                        t && (r = t.ob)
                    }
                    r = document.querySelectorAll("." + r);
                    for (t = 0; t < r.length; t++)
                        f(r[t], p)
                }
            }
            function f(p, r) {
                if (!("object" === typeof p && p instanceof Element))
                    throw Error("Invalid argument provided to upgrade MDL element.");
                var t = d("mdl-componentupgrading", !0, !0);
                p.dispatchEvent(t);
                if (!t.defaultPrevented) {
                    t = b(p);
                    var z = [];
                    if (r)
                        c(p, r) || z.push(a(r));
                    else {
                        var ca = p.classList;
                        k.forEach(function(ze) {
                            ca.contains(ze.ob) && -1 === z.indexOf(ze) && !c(p, ze.className) && z.push(ze)
                        })
                    }
                    r = 0;
                    for (var qb = z.length, ra; r < qb; r++) {
                        if (ra = z[r]) {
                            t.push(ra.className);
                            p.setAttribute("data-upgraded", t.join(","));
                            var Dh = new ra.Ti(p);
                            Dh.mdlComponentConfigInternal_ = ra;
                            m.push(Dh);
                            for (var Eh = 0, wq = ra.kf.length; Eh < wq; Eh++)
                                ra.kf[Eh](p);
                            ra.We && (p[ra.className] = Dh)
                        } else
                            throw Error("Unable to find a registered component for the given class.");
                        ra = d("mdl-componentupgraded", !0, !1);
                        p.dispatchEvent(ra)
                    }
                }
            }
            function g(p) {
                Array.isArray(p) || (p = p instanceof Element ? [p] : Array.prototype.slice.call(p));
                for (var r = 0, t = p.length, z; r < t; r++)
                    z = p[r],
                    z instanceof HTMLElement && (f(z),
                    0 < z.children.length && g(z.children))
            }
            function h(p) {
                if (p) {
                    m.splice(m.indexOf(p), 1);
                    var r = p.S.getAttribute("data-upgraded").split(",");
                    r.splice(r.indexOf(p.mdlComponentConfigInternal_.nf), 1);
                    p.S.setAttribute("data-upgraded", r.join(","));
                    r = d("mdl-componentdowngraded", !0, !1);
                    p.S.dispatchEvent(r)
                }
            }
            var k = []
              , m = [];
            return {
                Bi: e,
                Ci: f,
                Di: g,
                Dg: function() {
                    for (var p = 0; p < k.length; p++)
                        e(k[p].className)
                },
                di: function(p, r) {
                    (p = a(p)) && p.kf.push(r)
                },
                register: function(p) {
                    var r = !0;
                    if ("undefined" !== typeof p.We || "undefined" !== typeof p.widget)
                        r = p.We || p.widget;
                    var t = {
                        Ti: p.constructor || p.constructor,
                        className: p.nf || p.classAsString,
                        ob: p.ob || p.cssClass,
                        We: r,
                        kf: []
                    };
                    k.forEach(function(z) {
                        if (z.ob === t.ob)
                            throw Error("The provided cssClass has already been registered: " + z.ob);
                        if (z.className === t.className)
                            throw Error("The provided className has already been registered");
                    });
                    if (p.constructor.prototype.hasOwnProperty("mdlComponentConfigInternal_"))
                        throw Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");
                    a(p.nf, t) || k.push(t)
                },
                gh: function(p) {
                    var r = function(z) {
                        m.filter(function(ca) {
                            return ca.S === z
                        }).forEach(h)
                    };
                    if (p instanceof Array || p instanceof NodeList)
                        for (var t = 0; t < p.length; t++)
                            r(p[t]);
                    else if (p instanceof Node)
                        r(p);
                    else
                        throw Error("Invalid argument provided to downgrade MDL nodes.");
                }
            }
        }();
        Z.upgradeDom = Z.Bi;
        Z.upgradeElement = Z.Ci;
        Z.upgradeElements = Z.Di;
        Z.upgradeAllRegistered = Z.Dg;
        Z.registerUpgradedCallback = Z.di;
        Z.register = Z.register;
        Z.downgradeElements = Z.gh;
        window.componentHandler = Z;
        window.addEventListener("load", function() {
            "classList"in document.createElement("div") && "querySelector"in document && "addEventListener"in window && Array.prototype.forEach && (document.documentElement.classList.add("mdl-js"),
            Z.Dg())
        });
        (function() {
            var a = function(b) {
                this.S = b;
                this.init()
            };
            window.MaterialProgress = a;
            a.prototype.Li = {
                Mi: "mdl-progress__indeterminate"
            };
            a.prototype.tk = function(b) {
                this.S.classList.contains(this.Li.Mi) || (this.ai.style.width = b + "%")
            }
            ;
            a.prototype.setProgress = a.prototype.tk;
            a.prototype.rk = function(b) {
                this.Ng.style.width = b + "%";
                this.Kg.style.width = 100 - b + "%"
            }
            ;
            a.prototype.setBuffer = a.prototype.rk;
            a.prototype.init = function() {
                if (this.S) {
                    var b = document.createElement("div");
                    b.className = "progressbar bar bar1";
                    this.S.appendChild(b);
                    this.ai = b;
                    b = document.createElement("div");
                    b.className = "bufferbar bar bar2";
                    this.S.appendChild(b);
                    this.Ng = b;
                    b = document.createElement("div");
                    b.className = "auxbar bar bar3";
                    this.S.appendChild(b);
                    this.Kg = b;
                    this.ai.style.width = "0%";
                    this.Ng.style.width = "100%";
                    this.Kg.style.width = "0%";
                    this.S.classList.add("is-upgraded")
                }
            }
            ;
            Z.register({
                constructor: a,
                nf: "MaterialProgress",
                ob: "mdl-js-progress",
                We: !0
            })
        }
        )();
        var Yp = {
            "244437093285883777": {
                ar: "\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u0623\u0643\u0651\u062f \u0645\u0646 \u0623\u0646\u0643 \u0644\u0633\u062a \u0628\u0631\u0646\u0627\u0645\u062c \u0631\u0648\u0628\u0648\u062a...",
                ar_xb: "\u200f\u202eVerifying\u202c\u200f \u200f\u202eyou\u202c\u200f'\u200f\u202ere\u202c\u200f \u200f\u202enot\u202c\u200f \u200f\u202ea\u202c\u200f \u200f\u202erobot\u202c\u200f...",
                bg: "\u041f\u043e\u0442\u0432\u044a\u0440\u0436\u0434\u0430\u0432\u0430 \u0441\u0435, \u0447\u0435 \u043d\u0435 \u0441\u0442\u0435 \u0440\u043e\u0431\u043e\u0442\u2026",
                ca: "S'est\u00e0 comprovant que no siguis un robot...",
                cs: "Ov\u011b\u0159ujeme, zda nejste robot\u2026",
                da: "Bekr\u00e6fter, at du ikke er en robot\u2026",
                de: "Best\u00e4tigen Sie bitte, dass Sie kein Roboter sind.",
                el: "\u0395\u03c0\u03b1\u03bb\u03ae\u03b8\u03b5\u03c5\u03c3\u03b7 \u03cc\u03c4\u03b9 \u03b4\u03b5\u03bd \u03b5\u03af\u03c3\u03c4\u03b5 \u03c1\u03bf\u03bc\u03c0\u03cc\u03c4\u2026",
                en: "Verifying you're not a robot...",
                en_gb: "Verifying you're not a robot...",
                en_xa: "[V\u00e9\u0155\u00ee\u0192\u00fd\u00ee\u00f1\u011d \u00fd\u00f6\u00fb'\u0155\u00e9 \u00f1\u00f6\u0163 \u00e5 \u0155\u00f6\u0431\u00f6\u0163... one two three four five six seven]",
                es: "Estamos comprobando que no eres un robot...",
                es_419: "Estamos verificando que no eres un robot\u2026",
                fa: "\u062f\u0631\u062d\u0627\u0644 \u062a\u0623\u06cc\u06cc\u062f \u0627\u06cc\u0646\u06a9\u0647 \u0634\u0645\u0627 \u0631\u0628\u0627\u062a \u0646\u06cc\u0633\u062a\u06cc\u062f\u2026",
                fi: "Tarkistamme, ettet ole robotti\u2026",
                fil: "Vine-verify na hindi ka robot...",
                fr: "Nous v\u00e9rifions que vous n'\u00eates pas un robot\u2026",
                hi: "\u0906\u092a \u0930\u094b\u092c\u094b\u091f \u0928\u0939\u0940\u0902 \u0939\u0948\u0902 \u0907\u0938\u0915\u0940 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0940 \u091c\u093e \u0930\u0939\u0940 \u0939\u0948...",
                hr: "Potvr\u0111ujemo da niste robot...",
                hu: "Annak ellen\u0151rz\u00e9se, hogy \u00d6n nem robot...",
                id: "Memverifikasi bahwa Anda bukan robot...",
                it: "Stiamo verificando che non sei un robot\u2026",
                iw: "\u05de\u05d5\u05d5\u05d3\u05d0 \u05e9\u05d0\u05d9\u05e0\u05da \u05e8\u05d5\u05d1\u05d5\u05d8...",
                ja: "\u30ed\u30dc\u30c3\u30c8\u306b\u3088\u308b\u64cd\u4f5c\u3067\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u3044\u307e\u3059...",
                ko: "\ub85c\ubd07\uc774 \uc544\ub2cc \uc2e4\uc81c \uc0ac\uc6a9\uc790\uc784\uc744 \ud655\uc778 \uc911...",
                lt: "Tikrinama, ar nesate robotas...",
                lv: "Notiek verifik\u0101cija, lai p\u0101rliecin\u0101tos, ka neesat robots...",
                nl: "Verifi\u00ebren of u geen robot bent...",
                no: "Bekrefter at du ikke er en robot ...",
                pl: "Potwierd\u017a, \u017ce nie jeste\u015b robotem.",
                pt: "Verificando se voc\u00ea n\u00e3o \u00e9 um rob\u00f4...",
                pt_pt: "A verificar se \u00e9 um rob\u00f4...",
                ro: "Se verific\u0103 dac\u0103 sunte\u021bi un robot...",
                ru: "\u041d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0432\u044b \u043d\u0435 \u0440\u043e\u0431\u043e\u0442...",
                sk: "Overuje sa, \u017ee nie ste robot...",
                sl: "Preverjamo, da niste robot ...",
                sr: "\u041f\u043e\u0442\u0432\u0440\u0452\u0443\u0458\u0435\u043c\u043e \u0434\u0430 \u043d\u0438\u0441\u0442\u0435 \u0440\u043e\u0431\u043e\u0442\u2026",
                sv: "Verifierar att du inte \u00e4r en robot \u2026",
                th: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e2b\u0e38\u0e48\u0e19\u0e22\u0e19\u0e15\u0e4c...",
                tr: "Robot olmad\u0131\u011f\u0131n\u0131z do\u011frulan\u0131yor...",
                uk: "\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0454\u043c\u043e, \u0447\u0438 \u0432\u0438 \u043d\u0435 \u0440\u043e\u0431\u043e\u0442\u2026",
                vi: "\u0110ang x\u00e1c minh b\u1ea1n kh\u00f4ng ph\u1ea3i l\u00e0 r\u00f4 b\u1ed1t...",
                zh_cn: "\u6b63\u5728\u9a8c\u8bc1\u60a8\u662f\u5426\u4e3a\u673a\u5668\u4eba\u2026",
                zh_tw: "\u6b63\u5728\u9a57\u8b49\u60a8\u662f\u5426\u70ba\u81ea\u52d5\u7a0b\u5f0f..."
            }
        }
          , Zp = null
          , $p = "ar ar_xb iw fa ps sd so tk ug ur he yi syc ks ku".split(" ")
          , aq = function(a, b) {
            if (!Zp) {
                Zp = {};
                for (var c in Yp)
                    Zp[Yp[c].en] = c
            }
            b = b.replace("-", "_").toLowerCase();
            return "undefined" !== typeof Zp[a] && (c = Zp[a],
            "undefined" !== typeof Yp[c][b]) ? Yp[c][b] : a
        };
        var bq = function(a, b) {
            this.Bk = a;
            this.Ak = b;
            this.S = null
        };
        bq.prototype.render = function(a) {
            var b = (0,
            this.Bk)(this.Ak || df, void 0);
            var c = Ea || (Ea = new af);
            if (b && b.ak)
                c = b.ak();
            else {
                c = c.createElement("DIV");
                b: if (v(b)) {
                    if (b.yi) {
                        var d = b.yi();
                        if (d instanceof dd) {
                            b = d;
                            break b
                        }
                    }
                    Ia("Soy template output is unsafe for use as HTML: " + b);
                    b = gd("zSoyz")
                } else
                    b = gd(String(b));
                d = b.Ra();
                var e = d.match(cf);
                y(!e, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", e && e[0], d);
                d = c;
                if (jd())
                    for (; d.lastChild; )
                        d.removeChild(d.lastChild);
                d.innerHTML = ed(b)
            }
            1 == c.childNodes.length && (b = c.firstChild,
            1 == b.nodeType && (c = b));
            this.S = c;
            Re(a, this.S);
            this.Id()
        }
        ;
        bq.prototype.Id = function() {}
        ;
        bq.prototype.Nd = function() {}
        ;
        bq.prototype.Gb = function() {
            this.S && (this.Nd(),
            Te(this.S),
            this.S = null)
        }
        ;
        var cq = function() {
            bq.call(this, ef)
        };
        q(cq, bq);
        cq.prototype.Id = function() {
            var a = Ke("progressBar");
            window.componentHandler && window.componentHandler.upgradeElement && window.componentHandler.upgradeElement(a)
        }
        ;
        cq.prototype.Nd = function() {
            var a = Ke("progressBar");
            window.componentHandler && window.componentHandler.downgradeElements && window.componentHandler.downgradeElements(a)
        }
        ;
        var dq = function(a, b) {
            bq.call(this, ff, {
                appName: a
            });
            this.we = b;
            this.ab = null
        };
        q(dq, bq);
        dq.prototype.Id = function() {
            var a = Ke("continue")
              , b = this;
            this.ab = Jf(a, "click", function() {
                b.we()
            })
        }
        ;
        dq.prototype.Nd = function() {
            this.ab && (Sf(this.ab),
            this.ab = null)
        }
        ;
        var eq = function(a) {
            bq.call(this, gf, {
                errorMessage: a
            })
        };
        q(eq, bq);
        var fq = function(a, b) {
            bq.call(this, hf, {});
            this.we = a || null;
            this.oc = b || null;
            this.ab = null
        };
        q(fq, bq);
        fq.prototype.Id = function() {
            var a = Ke("verify")
              , b = this;
            this.we && (this.ab = Jf(a, "click", function() {
                b.we()
            }));
            a = Ke("app-verification-progress-bar");
            window.componentHandler && window.componentHandler.upgradeElement && window.componentHandler.upgradeElement(a);
            if ((a = Ke("status-container-label")) && this.oc) {
                var c = aq($e(a), this.oc);
                We(a, c);
                pb($p, this.oc.replace("-", "_").toLowerCase()) && Vp(a, "firebase-rtl")
            }
        }
        ;
        var gq = function() {
            var a = Ke("status-container");
            Vp(a, "firebase-hidden")
        };
        fq.prototype.Nd = function() {
            this.ab && (Sf(this.ab),
            this.ab = null);
            var a = Ke("app-verification-progress-bar");
            window.componentHandler && window.componentHandler.downgradeElements && window.componentHandler.downgradeElements(a)
        }
        ;
        var hq = function(a) {
            this.kg = Oe("DIV", {
                id: "progressBarContainer"
            });
            var b = this;
            this.zb = new gn;
            this.uri = G(a);
            this.apiKey = F(this.uri, "apiKey") || null;
            this.appName = F(this.uri, "appName") || "";
            this.authType = F(this.uri, "authType") || null;
            this.Ib = F(this.uri, "eventId") || null;
            this.Ba = F(this.uri, "redirectUrl") || null;
            this.ye = F(this.uri, "v") || null;
            this.lk = (a = F(this.uri, "scopes")) ? a.split(",") : [];
            this.Ud = {};
            this.sessionId = F(this.uri, "sessionId") || null;
            this.bf = F(this.uri, "appDisplayName") || null;
            this.Oa = F(this.uri, "apn") || null;
            this.sb = F(this.uri, "ibi") || null;
            this.Vd = F(this.uri, "eid") || null;
            this.clientId = F(this.uri, "clientId") || null;
            this.pb = F(this.uri, "appId") || null;
            (this.Hg = (new Dd(this.uri.kc)).get("fac") || null) && console.log("App Check token found.");
            this.wh = F(this.uri, "hl") || null;
            this.Wb = F(this.uri, "sha1Cert") || null;
            this.publicKey = F(this.uri, "publicKey") || null;
            this.Pe = F(this.uri, "tid") || null;
            a = mi(F(this.uri, "customParameters") || "{}");
            this.Ud = "object" == typeof a ? a || {} : {};
            this.providerId = F(this.uri, "providerId") || null;
            this.Ce = "string" === typeof u.POST_BODY && "{{POST_BODY}}" != u.POST_BODY && 0 != u.POST_BODY.length ? u.POST_BODY : null;
            this.providerId && (this.Ud = li(this.Ud, Li(this.providerId)));
            this.Wc = (a = F(this.uri, "fw")) ? a.split(",") : [];
            this.mode = "oauth";
            this.Tb = null;
            this.Th = this.Vf = Th().then(function() {
                document.body.appendChild(b.kg);
                b.Tb = new cq;
                b.Tb.render(b.kg)
            });
            this.ib = null
        }
          , iq = {}
          , jq = {
            ff: ["facebook.com"]
        }
          , kq = {}
          , lq = {
            ff: ["facebook.com", "apple.com"]
        }
          , mq = {}
          , nq = function(a) {
            if (a.Ba)
                try {
                    return Ad(Bd(zd(G(a.Ba), ""), ""), "").toString()
                } catch (b) {}
            else {
                if (a.Oa)
                    return "file://asset/www/index.html?apn=" + encodeURIComponent(a.Oa);
                if (a.sb)
                    return "file://asset/www/index.html?ibi=" + encodeURIComponent(a.sb)
            }
            return null
        }
          , oq = function(a, b) {
            return F(a, b)
        }
          , pq = function(a) {
            if (!a.apiKey)
                throw si("No API key available"),
                new P("bad-request");
            a.ib = new gk(a.apiKey,Ah(a.Vd),di("Handler", "2.20.1", a.Wc),a.Hg);
            a.ib.C = a.Pe
        }
          , rq = function(a) {
            qq(a);
            a.Vf.then(function() {
                a.Tb = new cq;
                a.Tb.render(a.kg)
            })
        }
          , qq = function(a) {
            a.Th && a.Th.cancel();
            a.Tb && (a.Tb.Gb(),
            a.Tb = null)
        };
        hq.prototype.nc = function() {
            return this.apiKey ? this.apiKey + ":" + (this.appName || "") : null
        }
        ;
        hq.prototype.handleError = function(a) {
            var b = this;
            if ("auth/bad-request" === a.code)
                return Th().then(function() {
                    qq(b);
                    (new eq(a.message)).render(document.body)
                });
            var c = new Pi(this.authType || "unknown",this.Ib,null,null,a);
            return sq(this, c)
        }
        ;
        var tq = function(a, b, c, d) {
            b = new Pi(a.authType,a.Ib,b,c,null,d,a.Pe);
            return sq(a, b)
        }
          , sq = function(a, b) {
            var c = a.nc()
              , d = !1
              , e = J();
            Oh() && !a.Ba && (e = nh(500));
            return e.then(function() {
                if ((a.Oa || a.sb) && a.ib)
                    return d = !0,
                    uq(a.ib, b, a.Oa, a.sb, a.clientId, a.Wb, a.bf, a.Ib, a.pb, a.publicKey);
                if ("verifyApp" === a.authType && b.Y)
                    return d = !0,
                    vq(b.getError());
                if (c) {
                    var f = a.zb;
                    return b.getType().match(/Redirect$/) ? f.o.set(fn, b.m(), c) : xq(f, c, b)
                }
            }).then(function() {
                return a.zb.o.remove(jn)
            }).then(function() {
                if (c)
                    return a.zb.o.remove(hn, c)
            }).Ab(function() {
                d ? qq(a) : /redirect/i.test(a.authType || "") ? (qq(a),
                vi(),
                Hh(a.Ba)) : a.ye && ii() && !Yh() ? a.apiKey ? setTimeout(function() {
                    qq(a);
                    Mh()
                }, 15E3) : (qq(a),
                Mh()) : (qq(a),
                Mh())
            })
        }
          , uq = function(a, b, c, d, e, f, g, h, k, m) {
            return J().then(function() {
                if ("verifyApp" === b.getType() && d) {
                    if (!e && !k)
                        throw new P("invalid-app-id");
                    yq(null, b, c, d, e, f, g, h, k, m)
                } else
                    return "verifyApp" === b.getType() && c ? yq(null, b, c, d, e, f, g, h, k, m) : c ? Ck(a, c, f).then(function() {
                        var p = null;
                        p = f ? J("playservices.app.goo.gl") : Q(a, ll, {
                            returnDynamicLink: !0
                        });
                        return p.then(function(r) {
                            yq(r, b, c, d, e, f, g, h, k, m)
                        })
                    }) : (e ? Dk(a, e) : k ? Ek(a, k) : Bk(a, d)).then(function() {
                        yq(null, b, c, d, e, f, g, h, k, m)
                    })
            }).h(function(p) {
                return vq(p)
            })
        }
          , vq = function(a) {
            var b = !a || "auth/dynamic-link-not-activated" != a.code && "auth/invalid-app-id" != a.code && "auth/invalid-oauth-client-id" != a.code && "auth/invalid-api-key" != a.code && "auth/internal-error" != a.code && "auth/invalid-cert-hash" != a.code ? (Ae["fireauth.oauthhelper.ui.soy.temporaryErrorMessage"] ? Ae["fireauth.oauthhelper.ui.soy.temporaryErrorMessage"](void 0, void 0) : "An error occurred. Please try again later.").toString() : a.message;
            return Th().then(function() {
                (new eq(b)).render(document.body)
            })
        }
          , yq = function(a, b, c, d, e, f, g, h, k, m) {
            m = m ? "android_non_gmscore" : c ? "android" : "ios";
            var p = c ? c : d
              , r = null;
            f ? (r = zq(b, c, h, m),
            p = "com.google.android.gms") : (e || k) && d && "verifyApp" !== b.getType() && !b.Y ? (r = window.location.protocol + "//" + window.location.host + "/__/auth/callback?authType=" + encodeURIComponent(b.getType()) + "&link=" + encodeURIComponent(b.Xa),
            h && (r += "&eventId=" + h)) : b.Y ? (r = window.location.protocol + "//" + window.location.host + "/__/auth/callback?firebaseError=" + encodeURIComponent(ji(b.getError().m())) + "&authType=" + encodeURIComponent(b.getType()),
            h && (r += "&eventId=" + h)) : r = b.Xa.replace("/handler", "/callback");
            a = new $i(a,m,p,window.location.host,r,e,k);
            "android" == m ? (aj(a, g),
            Hh(a.toString(!f))) : Hh(a.toString(), void 0, !0);
            setTimeout(function() {
                Gh(null)
            }, 4E3)
        }
          , zq = function(a, b, c, d) {
            if ("android_non_gmscore" === d) {
                d = a.Xa;
                var e = window.location.protocol + "//" + window.location.host + "/__/auth/handler";
                b = "intent://firebase.auth/#Intent;scheme=" + ("verifyApp" === a.getType() ? "recaptcha" : "genericidp") + ";package=" + b + ";S.authType=" + a.getType() + ";";
                c && (b += "S.eventId=" + c + ";");
                a.Y ? b += "S.firebaseError=" + encodeURIComponent(ji(a.getError().m())) + ";" : (b += "S.link=" + encodeURIComponent(d) + ";",
                b += "B.encryptionEnabled=false;");
                b += "S.browser_fallback_url=" + encodeURIComponent(e) + ";";
                a = b + "end;"
            } else
                d = Kd("https", "fir-auth-gms.firebaseapp.com", null, "/", null, null),
                E(d, "authType", a.getType()),
                E(d, "cpn", b),
                c && E(d, "eventId", c),
                a.Y ? E(d, "firebaseError", ji(a.getError().m())) : E(d, "link", a.Xa),
                a = d.toString();
            return a
        }
          , xq = function(a, b, c) {
            var d = u.window && u.window.opener || null;
            if (Sp() && d && /popup/i.test(c.getType() || "")) {
                for (var e = [], f = b.split(":"), g = 0; g < d.frames.length; g++) {
                    var h = d.frames[g];
                    try {
                        var k = G(h.location.href);
                        f[0] === F(k, "apiKey") && f[1] === F(k, "appName") && e.push(new Yl(new Wl(h,h.location.origin)))
                    } catch (p) {}
                }
                if (0 === e.length)
                    return ln(a, b, c);
                var m = [];
                e.forEach(function(p) {
                    var r = !1;
                    m.push(Zl(p, "sendAuthEvent", {
                        storageKey: b,
                        authEvent: c.m()
                    }, 2E4).then(function(t) {
                        for (var z = 0; z < t.length; z++)
                            t[z].fulfilled && t[z].value && (r = t[z].value);
                        if (!r)
                            throw Error("Unable to send the auth event");
                    }))
                });
                return Jg(m).h(function() {
                    return ln(a, b, c)
                }).then(function() {
                    e.forEach(function(p) {
                        p.close()
                    })
                })
            }
            return ln(a, b, c)
        };
        var Aq = function(a) {
            this.Ug = !1;
            this.Oc = Oe("DIV");
            if ("verifyApp" !== oq(G(a), "authType"))
                throw Error("Invalid mode!");
            this.Ta = {
                size: "invisible",
                type: "image",
                tabindex: 0,
                theme: "light"
            };
            hq.call(this, a);
            this.Kd = new fq(null,this.wh);
            this.mf = this.Cb = null;
            this.mode = "verifyApp"
        };
        x(Aq, hq);
        Aq.prototype.start = function() {
            var a = this;
            return this.cb().then(function() {
                return Bq(a)
            }).h(function(b) {
                a.Cb && a.Cb.clear();
                rq(a);
                a.Kd && a.Kd.Gb();
                return b instanceof P ? a.handleError(b) : a.handleError(new P("internal-error"))
            })
        }
        ;
        Aq.prototype.cb = function() {
            var a = this;
            return J().then(function() {
                if (!(a.apiKey && a.sb && (a.clientId || a.pb) || a.apiKey && a.Oa && a.Wb && a.publicKey)) {
                    if (!a.apiKey)
                        throw new P("invalid-api-key");
                    if (!a.clientId && !a.pb)
                        throw new P("invalid-app-id");
                    throw new P("internal-error");
                }
            }).then(function() {
                pq(a);
                if (a.clientId)
                    return Dk(a.ib, a.clientId);
                if (a.pb)
                    return Ek(a.ib, a.pb);
                if (a.Oa && a.Wb)
                    return Ck(a.ib, a.Oa, a.Wb);
                throw new P("internal-error");
            })
        }
        ;
        var Bq = function(a) {
            var b, c;
            return a.Vf.then(function() {
                c = function() {
                    var d = Ue();
                    d && d.style.width && (d.style.width = "")
                }
                ;
                a.Ug || (a.Ug = !0,
                document.body.appendChild(a.Oc));
                qq(a);
                a.Kd.render(a.Oc);
                b = Ke("verify");
                a.Cb = new Sl(a.apiKey,b,a.Ta,function() {
                    return a.wh
                }
                ,a.ye,Ah(a.Vd));
                return a.Cb.render()
            }).then(function() {
                b.click();
                return nh(2500)
            }).then(function() {
                c();
                gq();
                a.mf = setInterval(function() {
                    Ue().style.visibility && "hidden" === Ue().style.visibility && b.click()
                }, 1E3);
                u.window.addEventListener("orientationchange", c);
                u.window.addEventListener("resize", c);
                return a.Cb.verify()
            }).then(function(d) {
                rq(a);
                clearInterval(a.mf);
                u.window.removeEventListener("orientationchange", c);
                u.window.removeEventListener("resize", c);
                a.Cb.clear();
                a.Cb = null;
                d = window.location.protocol + "//" + window.location.host + "/__/auth/callback?authType=" + encodeURIComponent(a.mode) + "&recaptchaToken=" + encodeURIComponent(d);
                a.Ib && (d += "&eventId=" + encodeURIComponent(a.Ib));
                a.Kd.Gb();
                return tq(a, d, "blank")
            }).h(function(d) {
                clearInterval(a.mf);
                u.window.removeEventListener("orientationchange", c);
                u.window.removeEventListener("resize", c);
                throw d;
            })
        };
        var Cq = function(a) {
            this.wd = [];
            hq.call(this, a)
        };
        x(Cq, hq);
        var Dq = function(a) {
            var b = u.window && u.window.opener || null;
            if (!a.Ba && b && /popup/i.test(a.authType || "")) {
                for (var c = 0; c < b.frames.length; c++) {
                    var d = b.frames[c];
                    try {
                        var e = G(d.location.href);
                        a.apiKey === F(e, "apiKey") && a.appName === F(e, "appName") && a.wd.push(new Yl(new Wl(d,d.location.origin)))
                    } catch (f) {}
                }
                b = [];
                for (c = 0; c < a.wd.length; c++)
                    b.push(Zl(a.wd[c], "getParentOrigin", null, 2E4).then(function(f) {
                        for (var g = 0; g < f.length; g++)
                            f[g].fulfilled && f[g].value && (a.Ba = f[g].value);
                        if (!a.Ba)
                            throw Error("Unable to determine origin");
                    }));
                return Jg(b).h(function() {}).then(function() {
                    for (var f = 0; f < a.wd.length; f++)
                        a.wd[f].close()
                })
            }
            return J()
        };
        Cq.prototype.start = function() {
            var a = this;
            return this.cb().then(function() {
                return Eq(a, a.providerId, a.Ud, a.lk, a.sessionId)
            }).h(function(b) {
                return b instanceof P ? a.handleError(b) : a.handleError(new P("internal-error"))
            })
        }
        ;
        Cq.prototype.cb = function() {
            var a = this;
            return J().then(function() {
                pq(a);
                if (a.apiKey && a.authType && a.providerId) {
                    var b = new Ri(a.apiKey,a.appName,a.authType,a.Ib,a.Ba,a.ye,a.bf,a.Oa,a.sb,a.Vd,a.Wc,a.clientId,a.Wb,a.Pe,a.providerId,a.pb,a.publicKey);
                    return (a.Ba ? Ak(a.ib).h(function() {
                        si("Unable to verify that the app domain is authorized");
                        throw new P("bad-request");
                    }).then(function(c) {
                        if (!Rh(c, a.Ba))
                            throw si("App domain is unauthorized"),
                            new P("bad-request");
                    }) : J()).then(function() {
                        var c = a.Oa ? a.Wb ? jq : kq : a.sb ? a.clientId || a.pb ? lq : mq : iq;
                        if (c.ff && c.ff.includes(a.providerId))
                            throw new P("operation-not-supported-in-this-environment","This web-based operation for the " + a.providerId + " provider is not supported in this environment. Please use the identity provider's native SDK instead.");
                        return a.zb.o.set(jn, b.m())
                    })
                }
                si("Request is missing required data");
                throw new P("bad-request");
            })
        }
        ;
        var Eq = function(a, b, c, d, e) {
            var f, g = Ad(Bd(G(a.uri.toString()), ""), "").toString(), h = null;
            return wk(a.ib, b, g, c, d, e).then(function(k) {
                f = k;
                return Dq(a)
            }).then(function() {
                var k = G(f.authUri), m = nq(a), p;
                (p = (p = u.window) && p.innerWidth && p.innerHeight ? {
                    width: parseFloat(p.innerWidth),
                    height: parseFloat(p.innerHeight)
                } : null) && 800 > p.width && "facebook.com" == b && !a.Ba && E(k, "display", "popup");
                m && E(k, "context_uri", m);
                h = k.toString();
                k = a.nc();
                return a.zb.o.set(hn, f.sessionId, k)
            }).then(function() {
                return Fq(a)
            }).then(function() {
                qq(a);
                var k = Fh();
                Hh(h);
                Rp() && "Safari" === Jh(M()) && setTimeout(function() {
                    k === Fh() && (new dq(null,function() {
                        a.handleError(new P("user-cancelled"))
                    }
                    )).render(document.body)
                }, 1E3)
            })
        }
          , Fq = function(a) {
            if (!Tp())
                return J();
            var b = 0;
            return new I(function(c, d) {
                var e = function() {
                    10 <= b++ ? (si("Unable to save initial state."),
                    d(new P("bad-request","Unable to save initial state. This may happen if browser sessionStorage is inaccessible."))) : kn(a.zb).then(function(f) {
                        f ? c() : setTimeout(e, 1)
                    })
                };
                e()
            }
            )
        };
        var Gq = function(a) {
            hq.call(this, a)
        };
        q(Gq, hq);
        Gq.prototype.start = function() {
            var a = this;
            return this.cb().then(function() {
                return Hq(a)
            }).h(function(b) {
                return b instanceof P ? a.handleError(b) : a.handleError(new P("internal-error"))
            })
        }
        ;
        Gq.prototype.cb = function() {
            var a = this;
            return kn(this.zb).then(function(b) {
                if (!b)
                    throw si("Unable to process request due to missing initial state."),
                    new P("bad-request","Unable to process request due to missing initial state. This may happen if browser sessionStorage is inaccessible or accidentally cleared.");
                var c = b && b.A
                  , d = b && b.getType();
                if (!c)
                    throw new P("invalid-api-key");
                if (!d)
                    throw new P("internal-error");
                a.apiKey = b.A;
                a.Vd = b.hh;
                a.Wc = b.U;
                pq(a);
                a.appName = b.B;
                a.authType = b.getType();
                a.Ib = b.T;
                a.Ba = b.Bc;
                a.ye = b.Pa;
                a.bf = b.sf;
                a.Oa = b.cc;
                a.sb = b.cd;
                a.clientId = b.Eb;
                a.Wb = b.pi;
                a.Pe = b.C;
                a.providerId = b.yc;
                a.pb = b.Jb;
                a.publicKey = b.bi
            })
        }
        ;
        var Iq = function(a, b) {
            if (a.Ce && "apple.com" === a.providerId) {
                b = G(b);
                var c = yi(a.Ce);
                a.Ce = null;
                for (var d in c)
                    c.hasOwnProperty(d) && E(b, d, c[d]);
                return b.toString()
            }
            return b
        }
          , Hq = function(a) {
            var b = Iq(a, a.uri.toString())
              , c = a.nc();
            return a.zb.mc(c).then(function(d) {
                if (!d)
                    throw new P("internal-error");
                return tq(a, b, d, a.Ce)
            })
        };
        var Jq = null;
        function Kq(a) {
            Lq();
            Th().then(function() {
                var b = new dq(a.appName,function() {
                    b.Gb();
                    Hh(a.toString());
                    setTimeout(function() {
                        Gh(null)
                    }, 4E3)
                }
                );
                b.render(document.body)
            })
        }
        function Mq(a) {
            var b = a;
            try {
                var c = Oi(mi(a));
                c && c.message && (b = c.message)
            } catch (d) {}
            Lq();
            Th().then(function() {
                (new eq(b)).render(document.body)
            })
        }
        function Lq() {
            var a = Gc(Hc('.mdl-card{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:16px;font-weight:400;min-height:200px;overflow:hidden;width:330px;z-index:1;position:relative;background:#fff;border-radius:2px;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__media{background-color:#ff4081;background-repeat:repeat;background-position:50% 50%;background-size:cover;background-origin:padding-box;background-attachment:scroll;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__title{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:#000;display:block;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-moz-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;line-height:normal;padding:16px 16px;-webkit-perspective-origin:165px 56px;perspective-origin:165px 56px;-webkit-transform-origin:165px 56px;transform-origin:165px 56px;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__title.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__title-text{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;color:inherit;display:block;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:24px;font-weight:300;line-height:normal;overflow:hidden;-webkit-transform-origin:149px 48px;transform-origin:149px 48px;margin:0}.mdl-card__subtitle-text{font-size:14px;color:rgba(0,0,0,.54);margin:0}.mdl-card__supporting-text{color:rgba(0,0,0,.54);font-size:1rem;line-height:18px;overflow:hidden;padding:16px 16px;width:90%}.mdl-card__supporting-text.mdl-card--border{border-bottom:1px solid rgba(0,0,0,.1)}.mdl-card__actions{font-size:16px;line-height:normal;width:100%;background-color:transparent;padding:8px;-moz-box-sizing:border-box;box-sizing:border-box}.mdl-card__actions.mdl-card--border{border-top:1px solid rgba(0,0,0,.1)}.mdl-card--expand{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.mdl-card__menu{position:absolute;right:16px;top:16px}.mdl-button{background:transparent;border:none;border-radius:2px;color:#000;position:relative;height:36px;margin:0;min-width:64px;padding:0 16px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;line-height:1;letter-spacing:0;overflow:hidden;will-change:box-shadow;-webkit-transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:none;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:hsla(0,0%,62%,.2)}.mdl-button:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button:active{background-color:hsla(0,0%,62%,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button.mdl-button--colored:focus:not(:active){background-color:rgba(0,0,0,.12)}input.mdl-button[type=submit]{-webkit-appearance:none}.mdl-button--raised{background:hsla(0,0%,62%,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.mdl-button--raised:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--raised.mdl-button--colored{background:#3f51b5;color:#fff}.mdl-button--raised.mdl-button--colored:hover{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored:active{background-color:#3f51b5}.mdl-button--raised.mdl-button--colored:focus:not(:active){background-color:#3f51b5}.mdl-button--raised.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--fab{border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;background:hsla(0,0%,62%,.2);box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal}.mdl-button--fab .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--fab.mdl-button--mini-fab{height:40px;min-width:40px;width:40px}.mdl-button--fab .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button--fab:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab:focus:not(:active){box-shadow:0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);background-color:hsla(0,0%,62%,.4)}.mdl-button--fab.mdl-button--colored{background:#ff4081;color:#fff}.mdl-button--fab.mdl-button--colored:hover{background-color:#ff4081}.mdl-button--fab.mdl-button--colored:focus:not(:active){background-color:#ff4081}.mdl-button--fab.mdl-button--colored:active{background-color:#ff4081}.mdl-button--fab.mdl-button--colored .mdl-ripple{background:#fff}.mdl-button--icon{border-radius:50%;font-size:24px;height:32px;margin-left:0;margin-right:0;min-width:32px;width:32px;padding:0;overflow:hidden;color:inherit;line-height:normal}.mdl-button--icon .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon{height:24px;min-width:24px;width:24px}.mdl-button--icon.mdl-button--mini-icon .material-icons{top:0;left:0}.mdl-button--icon .mdl-button__ripple-container{border-radius:50%;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.mdl-button__ripple-container{display:block;height:100%;left:0;position:absolute;top:0;width:100%;z-index:0;overflow:hidden}.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple,.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple{background-color:transparent}.mdl-button--primary.mdl-button--primary{color:#3f51b5}.mdl-button--primary.mdl-button--primary .mdl-ripple{background:#fff}.mdl-button--primary.mdl-button--primary.mdl-button--fab,.mdl-button--primary.mdl-button--primary.mdl-button--raised{color:#fff;background-color:#3f51b5}.mdl-button--accent.mdl-button--accent{color:#ff4081}.mdl-button--accent.mdl-button--accent .mdl-ripple{background:#fff}.mdl-button--accent.mdl-button--accent.mdl-button--fab,.mdl-button--accent.mdl-button--accent.mdl-button--raised{color:#fff;background-color:#ff4081}.mdl-button.mdl-button--disabled.mdl-button--disabled,.mdl-button[disabled][disabled]{color:rgba(0,0,0,.26);cursor:default;background-color:transparent}.mdl-button--fab.mdl-button--disabled.mdl-button--disabled,.mdl-button--fab[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26)}.mdl-button--raised.mdl-button--disabled.mdl-button--disabled,.mdl-button--raised[disabled][disabled]{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.26);box-shadow:none}.mdl-button--colored.mdl-button--disabled.mdl-button--disabled,.mdl-button--colored[disabled][disabled]{color:rgba(0,0,0,.26)}.mdl-button .material-icons{vertical-align:middle}.mdl-progress{display:block;position:relative;height:4px;width:500px;max-width:100%}.mdl-progress>.bar{display:block;position:absolute;top:0;bottom:0;width:0;-webkit-transition:width .2s cubic-bezier(.4,0,.2,1);transition:width .2s cubic-bezier(.4,0,.2,1)}.mdl-progress>.progressbar{background-color:#3f51b5;z-index:1;left:0}.mdl-progress>.bufferbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.7)),to(hsla(0,0%,100%,.7))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),-webkit-linear-gradient(left,#3f51b5,#3f51b5);background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);z-index:0;left:0}.mdl-progress>.auxbar{right:0}@supports (-webkit-appearance:none){.mdl-progress:not(.mdl-progress--indeterminate):not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate)>.auxbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.7)),to(hsla(0,0%,100%,.7))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),-webkit-linear-gradient(left,#3f51b5,#3f51b5);background-image:linear-gradient(90deg,hsla(0,0%,100%,.7),hsla(0,0%,100%,.7)),linear-gradient(90deg,#3f51b5,#3f51b5);-webkit-mask:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=");mask:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=")}}.mdl-progress:not(.mdl-progress--indeterminate)>.auxbar,.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar{background-image:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,.9)),to(hsla(0,0%,100%,.9))),-webkit-gradient(linear,left top,right top,from(#3f51b5),to(#3f51b5));background-image:-webkit-linear-gradient(left,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),-webkit-linear-gradient(left,#3f51b5,#3f51b5);background-image:linear-gradient(90deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.9)),linear-gradient(90deg,#3f51b5,#3f51b5)}.mdl-progress.mdl-progress--indeterminate>.bar1,.mdl-progress.mdl-progress__indeterminate>.bar1{background-color:#3f51b5;-webkit-animation-name:indeterminate1;animation-name:indeterminate1;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.mdl-progress.mdl-progress--indeterminate>.bar3,.mdl-progress.mdl-progress__indeterminate>.bar3{background-image:none;background-color:#3f51b5;-webkit-animation-name:indeterminate2;animation-name:indeterminate2;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@keyframes indeterminate1{0%{left:0;width:0}50%{left:25%;width:75%}75%{left:100%;width:0}}@-webkit-keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}@keyframes indeterminate2{0%{left:0;width:0}50%{left:0;width:0}75%{left:0;width:25%}to{left:100%;width:0}}body{margin:0}.firebase-container{background-color:#fff;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;color:rgba(0,0,0,.87);direction:ltr;font:16px Roboto,arial,sans-serif;margin:0 auto;max-width:360px;overflow:hidden;padding-top:8px;position:relative;width:100%}.firebase-progress-bar{height:5px;left:0;position:absolute;top:0;width:100%}.firebase-hidden-button{height:1px;visibility:hidden;width:1px}.firebase-container#app-verification-screen{top:100px}.firebase-title{color:rgba(0,0,0,.87);direction:ltr;font-size:24px;font-weight:500;line-height:24px;margin:0;padding:0;text-align:center}.firebase-middle-progress-bar{height:5px;margin-left:auto;margin-right:auto;top:20px;width:250px}.firebase-hidden{display:none}.firebase-rtl{direction:rtl;text-align:right}@media (max-width:520px){.firebase-container{box-shadow:none;max-width:none;width:100%}}'));
            0 === a.length ? a = bd : (y(!A(a, "<"), "Forbidden '<' character in style sheet string: " + a),
            a = new ad(a,$c));
            var b = Ea || (Ea = new af)
              , c = b.Qa;
            if (xb && c.createStyleSheet)
                b = c.createStyleSheet(),
                Xp(b, a);
            else {
                c = bf(b, "HEAD")[0];
                if (!c) {
                    var d = bf(b, "BODY")[0];
                    c = b.Yg("HEAD");
                    d.parentNode.insertBefore(c, d)
                }
                d = b.Yg("STYLE");
                var e = kd('style[nonce],link[rel="stylesheet"][nonce]');
                e && d.setAttribute("nonce", e);
                Xp(d, a);
                b.appendChild(c, d)
            }
        }
        ;var Nq = function() {
            var a = Fh();
            switch (F(G(a), "blank") ? "blank" : "verifyApp" === oq(G(a), "authType") ? "verifyApp" : bj(a) ? "dynamicLink" : F(G(a), "firebaseError") ? "error" : oq(G(a), "apiKey") ? "starter" : "finisher") {
            case "blank":
                Gh(null);
                return;
            case "dynamicLink":
                a = bj(a);
                Kq(a);
                return;
            case "error":
                a = F(G(a), "firebaseError") || null;
                Mq(a);
                return;
            case "starter":
                Jq = new Cq(a);
                break;
            case "finisher":
                Jq = new Gq(a);
                break;
            case "verifyApp":
                Jq = new Aq(a)
            }
            Lq();
            Jq.start()
        }
          , Oq = ["fireauth", "oauthhelper", "widget", "initialize"]
          , Pq = u;
        Oq[0]in Pq || "undefined" == typeof Pq.execScript || Pq.execScript("var " + Oq[0]);
        for (var Qq; Oq.length && (Qq = Oq.shift()); )
            Oq.length || void 0 === Nq ? Pq = Pq[Qq] && Pq[Qq] !== Object.prototype[Qq] ? Pq[Qq] : Pq[Qq] = {} : Pq[Qq] = Nq;
    }
    ).call(this);
    