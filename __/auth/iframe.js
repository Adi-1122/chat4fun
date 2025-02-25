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
        var k, aa = function(a) {
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
        , ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math)
                    return c
            }
            throw Error("Cannot find global object");
        }, da = ca(this), ea = function(a, b) {
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
            var b = function(f, g) {
                this.fk = f;
                ba(this, "description", {
                    configurable: !0,
                    writable: !0,
                    value: g
                })
            };
            b.prototype.toString = function() {
                return this.fk
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
        ea("Symbol.iterator", function(a) {
            if (a)
                return a;
            a = Symbol("Symbol.iterator");
            for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
                var d = da[b[c]];
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
        }, ha = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b)
                return b.call(a);
            if ("number" == typeof a.length)
                return {
                    next: aa(a)
                };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        }, ia = function(a) {
            if (!(a instanceof Array)) {
                a = ha(a);
                for (var b, c = []; !(b = a.next()).done; )
                    c.push(b.value);
                a = c
            }
            return a
        }, ja = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        }
        , ka;
        if ("function" == typeof Object.setPrototypeOf)
            ka = Object.setPrototypeOf;
        else {
            var la;
            a: {
                var ma = {
                    a: !0
                }
                  , na = {};
                try {
                    na.__proto__ = ma;
                    la = na.a;
                    break a
                } catch (a) {}
                la = !1
            }
            ka = la ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b)
                    throw new TypeError(a + " is not extensible");
                return a
            }
            : null
        }
        var oa = ka
          , n = function(a, b) {
            a.prototype = ja(b.prototype);
            a.prototype.constructor = a;
            if (oa)
                oa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else
                            a[c] = b[c];
            a.Kd = b.prototype
        }
          , pa = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
                b[c - a] = arguments[c];
            return b
        };
        ea("Promise", function(a) {
            function b() {
                this.nc = null
            }
            function c(g) {
                return g instanceof e ? g : new e(function(h) {
                    h(g)
                }
                )
            }
            if (a)
                return a;
            b.prototype.Vh = function(g) {
                if (null == this.nc) {
                    this.nc = [];
                    var h = this;
                    this.Wh(function() {
                        h.Gk()
                    })
                }
                this.nc.push(g)
            }
            ;
            var d = da.setTimeout;
            b.prototype.Wh = function(g) {
                d(g, 0)
            }
            ;
            b.prototype.Gk = function() {
                for (; this.nc && this.nc.length; ) {
                    var g = this.nc;
                    this.nc = [];
                    for (var h = 0; h < g.length; ++h) {
                        var l = g[h];
                        g[h] = null;
                        try {
                            l()
                        } catch (m) {
                            this.nk(m)
                        }
                    }
                }
                this.nc = null
            }
            ;
            b.prototype.nk = function(g) {
                this.Wh(function() {
                    throw g;
                })
            }
            ;
            var e = function(g) {
                this.Ba = 0;
                this.Ua = void 0;
                this.yd = [];
                this.Si = !1;
                var h = this.vg();
                try {
                    g(h.resolve, h.reject)
                } catch (l) {
                    h.reject(l)
                }
            };
            e.prototype.vg = function() {
                function g(m) {
                    return function(q) {
                        l || (l = !0,
                        m.call(h, q))
                    }
                }
                var h = this
                  , l = !1;
                return {
                    resolve: g(this.Ul),
                    reject: g(this.wh)
                }
            }
            ;
            e.prototype.Ul = function(g) {
                if (g === this)
                    this.wh(new TypeError("A Promise cannot resolve to itself"));
                else if (g instanceof e)
                    this.lm(g);
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
                    h ? this.Tl(g) : this.yi(g)
                }
            }
            ;
            e.prototype.Tl = function(g) {
                var h = void 0;
                try {
                    h = g.then
                } catch (l) {
                    this.wh(l);
                    return
                }
                "function" == typeof h ? this.mm(h, g) : this.yi(g)
            }
            ;
            e.prototype.wh = function(g) {
                this.Mj(2, g)
            }
            ;
            e.prototype.yi = function(g) {
                this.Mj(1, g)
            }
            ;
            e.prototype.Mj = function(g, h) {
                if (0 != this.Ba)
                    throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.Ba);
                this.Ba = g;
                this.Ua = h;
                2 === this.Ba && this.hm();
                this.Ik()
            }
            ;
            e.prototype.hm = function() {
                var g = this;
                d(function() {
                    if (g.Al()) {
                        var h = da.console;
                        "undefined" !== typeof h && h.error(g.Ua)
                    }
                }, 1)
            }
            ;
            e.prototype.Al = function() {
                if (this.Si)
                    return !1;
                var g = da.CustomEvent
                  , h = da.Event
                  , l = da.dispatchEvent;
                if ("undefined" === typeof l)
                    return !0;
                "function" === typeof g ? g = new g("unhandledrejection",{
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection",{
                    cancelable: !0
                }) : (g = da.document.createEvent("CustomEvent"),
                g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.Ua;
                return l(g)
            }
            ;
            e.prototype.Ik = function() {
                if (null != this.yd) {
                    for (var g = 0; g < this.yd.length; ++g)
                        f.Vh(this.yd[g]);
                    this.yd = null
                }
            }
            ;
            var f = new b;
            e.prototype.lm = function(g) {
                var h = this.vg();
                g.Qe(h.resolve, h.reject)
            }
            ;
            e.prototype.mm = function(g, h) {
                var l = this.vg();
                try {
                    g.call(h, l.resolve, l.reject)
                } catch (m) {
                    l.reject(m)
                }
            }
            ;
            e.prototype.then = function(g, h) {
                function l(B, S) {
                    return "function" == typeof B ? function(Ca) {
                        try {
                            m(B(Ca))
                        } catch (Fc) {
                            q(Fc)
                        }
                    }
                    : S
                }
                var m, q, y = new e(function(B, S) {
                    m = B;
                    q = S
                }
                );
                this.Qe(l(g, m), l(h, q));
                return y
            }
            ;
            e.prototype.catch = function(g) {
                return this.then(void 0, g)
            }
            ;
            e.prototype.Qe = function(g, h) {
                function l() {
                    switch (m.Ba) {
                    case 1:
                        g(m.Ua);
                        break;
                    case 2:
                        h(m.Ua);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.Ba);
                    }
                }
                var m = this;
                null == this.yd ? f.Vh(l) : this.yd.push(l);
                this.Si = !0
            }
            ;
            e.resolve = c;
            e.reject = function(g) {
                return new e(function(h, l) {
                    l(g)
                }
                )
            }
            ;
            e.race = function(g) {
                return new e(function(h, l) {
                    for (var m = ha(g), q = m.next(); !q.done; q = m.next())
                        c(q.value).Qe(h, l)
                }
                )
            }
            ;
            e.all = function(g) {
                var h = ha(g)
                  , l = h.next();
                return l.done ? c([]) : new e(function(m, q) {
                    function y(Ca) {
                        return function(Fc) {
                            B[Ca] = Fc;
                            S--;
                            0 == S && m(B)
                        }
                    }
                    var B = []
                      , S = 0;
                    do
                        B.push(void 0),
                        S++,
                        c(l.value).Qe(y(B.length - 1), q),
                        l = h.next();
                    while (!l.done)
                }
                )
            }
            ;
            return e
        });
        var qa = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
        ea("WeakMap", function(a) {
            function b() {}
            function c(l) {
                var m = typeof l;
                return "object" === m && null !== l || "function" === m
            }
            function d(l) {
                if (!qa(l, f)) {
                    var m = new b;
                    ba(l, f, {
                        value: m
                    })
                }
            }
            function e(l) {
                var m = Object[l];
                m && (Object[l] = function(q) {
                    if (q instanceof b)
                        return q;
                    Object.isExtensible(q) && d(q);
                    return m(q)
                }
                )
            }
            if (function() {
                if (!a || !Object.seal)
                    return !1;
                try {
                    var l = Object.seal({})
                      , m = Object.seal({})
                      , q = new a([[l, 2], [m, 3]]);
                    if (2 != q.get(l) || 3 != q.get(m))
                        return !1;
                    q.delete(l);
                    q.set(m, 4);
                    return !q.has(l) && 4 == q.get(m)
                } catch (y) {
                    return !1
                }
            }())
                return a;
            var f = "$jscomp_hidden_" + Math.random();
            e("freeze");
            e("preventExtensions");
            e("seal");
            var g = 0
              , h = function(l) {
                this.Pa = (g += Math.random() + 1).toString();
                if (l) {
                    l = ha(l);
                    for (var m; !(m = l.next()).done; )
                        m = m.value,
                        this.set(m[0], m[1])
                }
            };
            h.prototype.set = function(l, m) {
                if (!c(l))
                    throw Error("Invalid WeakMap key");
                d(l);
                if (!qa(l, f))
                    throw Error("WeakMap key fail: " + l);
                l[f][this.Pa] = m;
                return this
            }
            ;
            h.prototype.get = function(l) {
                return c(l) && qa(l, f) ? l[f][this.Pa] : void 0
            }
            ;
            h.prototype.has = function(l) {
                return c(l) && qa(l, f) && qa(l[f], this.Pa)
            }
            ;
            h.prototype.delete = function(l) {
                return c(l) && qa(l, f) && qa(l[f], this.Pa) ? delete l[f][this.Pa] : !1
            }
            ;
            return h
        });
        ea("Map", function(a) {
            if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                    return !1;
                try {
                    var h = Object.seal({
                        x: 4
                    })
                      , l = new a(ha([[h, "s"]]));
                    if ("s" != l.get(h) || 1 != l.size || l.get({
                        x: 4
                    }) || l.set({
                        x: 4
                    }, "t") != l || 2 != l.size)
                        return !1;
                    var m = l.entries()
                      , q = m.next();
                    if (q.done || q.value[0] != h || "s" != q.value[1])
                        return !1;
                    q = m.next();
                    return q.done || 4 != q.value[0].x || "t" != q.value[1] || !m.next().done ? !1 : !0
                } catch (y) {
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
                    h = ha(h);
                    for (var l; !(l = h.next()).done; )
                        l = l.value,
                        this.set(l[0], l[1])
                }
            };
            c.prototype.set = function(h, l) {
                h = 0 === h ? 0 : h;
                var m = d(this, h);
                m.list || (m.list = this[0][m.id] = []);
                m.Oa ? m.Oa.value = l : (m.Oa = {
                    next: this[1],
                    Yb: this[1].Yb,
                    head: this[1],
                    key: h,
                    value: l
                },
                m.list.push(m.Oa),
                this[1].Yb.next = m.Oa,
                this[1].Yb = m.Oa,
                this.size++);
                return this
            }
            ;
            c.prototype.delete = function(h) {
                h = d(this, h);
                return h.Oa && h.list ? (h.list.splice(h.index, 1),
                h.list.length || delete this[0][h.id],
                h.Oa.Yb.next = h.Oa.next,
                h.Oa.next.Yb = h.Oa.Yb,
                h.Oa.head = null,
                this.size--,
                !0) : !1
            }
            ;
            c.prototype.clear = function() {
                this[0] = {};
                this[1] = this[1].Yb = f();
                this.size = 0
            }
            ;
            c.prototype.has = function(h) {
                return !!d(this, h).Oa
            }
            ;
            c.prototype.get = function(h) {
                return (h = d(this, h).Oa) && h.value
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
            c.prototype.forEach = function(h, l) {
                for (var m = this.entries(), q; !(q = m.next()).done; )
                    q = q.value,
                    h.call(l, q[1], q[0], this)
            }
            ;
            c.prototype[Symbol.iterator] = c.prototype.entries;
            var d = function(h, l) {
                var m = l && typeof l;
                "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++g,
                b.set(l, m)) : m = "p_" + l;
                var q = h[0][m];
                if (q && qa(h[0], m))
                    for (h = 0; h < q.length; h++) {
                        var y = q[h];
                        if (l !== l && y.key !== y.key || l === y.key)
                            return {
                                id: m,
                                list: q,
                                index: h,
                                Oa: y
                            }
                    }
                return {
                    id: m,
                    list: q,
                    index: -1,
                    Oa: void 0
                }
            }
              , e = function(h, l) {
                var m = h[1];
                return fa(function() {
                    if (m) {
                        for (; m.head != h[1]; )
                            m = m.Yb;
                        for (; m.next != m.head; )
                            return m = m.next,
                            {
                                done: !1,
                                value: l(m)
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
                return h.Yb = h.next = h.head = h
            }
              , g = 0;
            return c
        });
        ea("Array.prototype.find", function(a) {
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
        var ra = function(a, b) {
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
        ea("Array.prototype.entries", function(a) {
            return a ? a : function() {
                return ra(this, function(b, c) {
                    return [b, c]
                })
            }
        });
        ea("Array.prototype.keys", function(a) {
            return a ? a : function() {
                return ra(this, function(b) {
                    return b
                })
            }
        });
        ea("Set", function(a) {
            if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                    return !1;
                try {
                    var c = Object.seal({
                        x: 4
                    })
                      , d = new a(ha([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                        x: 4
                    }) != d || 2 != d.size)
                        return !1;
                    var e = d.entries()
                      , f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c)
                        return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }())
                return a;
            var b = function(c) {
                this.ab = new Map;
                if (c) {
                    c = ha(c);
                    for (var d; !(d = c.next()).done; )
                        this.add(d.value)
                }
                this.size = this.ab.size
            };
            b.prototype.add = function(c) {
                c = 0 === c ? 0 : c;
                this.ab.set(c, c);
                this.size = this.ab.size;
                return this
            }
            ;
            b.prototype.delete = function(c) {
                c = this.ab.delete(c);
                this.size = this.ab.size;
                return c
            }
            ;
            b.prototype.clear = function() {
                this.ab.clear();
                this.size = 0
            }
            ;
            b.prototype.has = function(c) {
                return this.ab.has(c)
            }
            ;
            b.prototype.entries = function() {
                return this.ab.entries()
            }
            ;
            b.prototype.values = function() {
                return this.ab.values()
            }
            ;
            b.prototype.keys = b.prototype.values;
            b.prototype[Symbol.iterator] = b.prototype.values;
            b.prototype.forEach = function(c, d) {
                var e = this;
                this.ab.forEach(function(f) {
                    return c.call(d, f, f, e)
                })
            }
            ;
            return b
        });
        ea("String.prototype.startsWith", function(a) {
            return a ? a : function(b, c) {
                if (null == this)
                    throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
                if (b instanceof RegExp)
                    throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
                var d = this + "";
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
        ea("Number.isFinite", function(a) {
            return a ? a : function(b) {
                return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
            }
        });
        ea("Array.from", function(a) {
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
        ea("Object.entries", function(a) {
            return a ? a : function(b) {
                var c = [], d;
                for (d in b)
                    qa(b, d) && c.push([d, b[d]]);
                return c
            }
        });
        ea("Object.values", function(a) {
            return a ? a : function(b) {
                var c = [], d;
                for (d in b)
                    qa(b, d) && c.push(b[d]);
                return c
            }
        });
        ea("Array.prototype.values", function(a) {
            return a ? a : function() {
                return ra(this, function(b, c) {
                    return c
                })
            }
        });
        var sa = sa || {}
          , p = this || self
          , r = function(a, b) {
            a = a.split(".");
            var c = p;
            a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift()); )
                a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
        }
          , ta = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        }
          , ua = function(a) {
            var b = ta(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        }
          , t = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }
          , va = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }
          , wa = function(a, b, c) {
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
          , u = function(a, b, c) {
            u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? va : wa;
            return u.apply(null, arguments)
        }
          , xa = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        }
          , v = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Kd = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Sd = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                    g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        }
          , ya = function(a) {
            return a
        };
        var za = function(a) {
            var b = window.___jsl = window.___jsl || {};
            b.cfg = b.cfg || {};
            b = b.cfg;
            if (!a)
                return b;
            a = a.split("/");
            for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c)
                b = b[a[c]];
            return c === a.length && void 0 !== b ? b : void 0
        };
        function Aa(a, b) {
            if (Error.captureStackTrace)
                Error.captureStackTrace(this, Aa);
            else {
                var c = Error().stack;
                c && (this.stack = c)
            }
            a && (this.message = String(a));
            void 0 !== b && (this.cause = b)
        }
        v(Aa, Error);
        Aa.prototype.name = "CustomError";
        var Ba;
        function Da(a, b) {
            a = a.split("%s");
            for (var c = "", d = a.length - 1, e = 0; e < d; e++)
                c += a[e] + (e < b.length ? b[e] : "%s");
            Aa.call(this, c + a[d])
        }
        v(Da, Aa);
        Da.prototype.name = "AssertionError";
        function Ea(a, b, c, d) {
            var e = "Assertion failed";
            if (c) {
                e += ": " + c;
                var f = d
            } else
                a && (e += ": " + a,
                f = b);
            throw new Da("" + e,f || []);
        }
        var w = function(a, b, c) {
            a || Ea("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        }
          , Fa = function(a, b, c) {
            null == a && Ea("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
            return a
        }
          , Ga = function(a, b) {
            throw new Da("Failure" + (a ? ": " + a : ""),Array.prototype.slice.call(arguments, 1));
        }
          , Ha = function(a, b, c) {
            "number" !== typeof a && Ea("Expected number but got %s: %s.", [ta(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        }
          , Ia = function(a, b, c) {
            "string" !== typeof a && Ea("Expected string but got %s: %s.", [ta(a), a], b, Array.prototype.slice.call(arguments, 2))
        }
          , Ja = function(a, b, c) {
            "function" !== typeof a && Ea("Expected function but got %s: %s.", [ta(a), a], b, Array.prototype.slice.call(arguments, 2))
        };
        var Ka = Array.prototype.indexOf ? function(a, b) {
            w(null != a.length);
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
          , x = Array.prototype.forEach ? function(a, b) {
            w(null != a.length);
            Array.prototype.forEach.call(a, b, void 0)
        }
        : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                e in d && b.call(void 0, d[e], e, a)
        }
        ;
        function La(a, b) {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d)
                d in c && b.call(void 0, c[d], d, a)
        }
        var Ma = Array.prototype.filter ? function(a, b) {
            w(null != a.length);
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
          , Na = Array.prototype.map ? function(a, b) {
            w(null != a.length);
            return Array.prototype.map.call(a, b, void 0)
        }
        : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
                f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        }
          , Oa = Array.prototype.some ? function(a, b) {
            w(null != a.length);
            return Array.prototype.some.call(a, b, void 0)
        }
        : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a))
                    return !0;
            return !1
        }
        ;
        function Pa(a, b) {
            return 0 <= Ka(a, b)
        }
        function Qa(a, b) {
            b = Ka(a, b);
            var c;
            (c = 0 <= b) && Ra(a, b);
            return c
        }
        function Ra(a, b) {
            w(null != a.length);
            return 1 == Array.prototype.splice.call(a, b, 1).length
        }
        function Sa(a, b) {
            var c = 0;
            La(a, function(d, e) {
                b.call(void 0, d, e, a) && Ra(a, e) && c++
            })
        }
        function Ta(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++)
                    c[d] = a[d];
                return c
            }
            return []
        }
        function Ua(a, b) {
            for (var c = 0, d = a.length, e; c < d; ) {
                var f = c + (d - c >>> 1);
                var g = b.call(void 0, a[f], f, a);
                0 < g ? c = f + 1 : (d = f,
                e = !g)
            }
            return e ? c : -c - 1
        }
        ;var Va = Object.freeze || function(a) {
            return a
        }
        ;
        function Wa(a, b) {
            for (var c in a)
                b.call(void 0, a[c], c, a)
        }
        function Xa(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a))
                    return !0;
            return !1
        }
        function Ya(a) {
            for (var b in a)
                return !1;
            return !0
        }
        function Za(a) {
            var b = {}, c;
            for (c in a)
                b[c] = a[c];
            return b
        }
        var $a = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        function ab(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d)
                    a[c] = d[c];
                for (var f = 0; f < $a.length; f++)
                    c = $a[f],
                    Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        }
        ;var bb, cb;
        a: {
            for (var db = ["CLOSURE_FLAGS"], eb = p, fb = 0; fb < db.length; fb++)
                if (eb = eb[db[fb]],
                null == eb) {
                    cb = null;
                    break a
                }
            cb = eb
        }
        var gb = cb && cb[610401301];
        bb = null != gb ? gb : !1;
        var hb, ib = function() {
            if (void 0 === hb) {
                var a = null
                  , b = p.trustedTypes;
                if (b && b.createPolicy)
                    try {
                        a = b.createPolicy("goog#html", {
                            createHTML: ya,
                            createScript: ya,
                            createScriptURL: ya
                        })
                    } catch (c) {
                        p.console && p.console.error(c.message)
                    }
                hb = a
            }
            return hb
        };
        var lb = function(a, b) {
            this.Nh = a === jb && b || "";
            this.hk = kb
        };
        lb.prototype.tc = !0;
        lb.prototype.oc = function() {
            return this.Nh
        }
        ;
        lb.prototype.toString = function() {
            return "Const{" + this.Nh + "}"
        }
        ;
        var mb = function(a) {
            if (a instanceof lb && a.constructor === lb && a.hk === kb)
                return a.Nh;
            Ga("expected object of type Const, got '" + a + "'");
            return "type_error:Const"
        }
          , kb = {}
          , jb = {};
        var ob = function(a, b) {
            if (b !== nb)
                throw Error("TrustedResourceUrl is not meant to be built directly");
            this.mh = a
        };
        ob.prototype.toString = function() {
            return this.mh + ""
        }
        ;
        ob.prototype.tc = !0;
        ob.prototype.oc = function() {
            return this.mh.toString()
        }
        ;
        var pb = function(a) {
            if (a instanceof ob && a.constructor === ob)
                return a.mh;
            Ga("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ta(a));
            return "type_error:TrustedResourceUrl"
        }
          , tb = function(a, b) {
            var c = mb(a);
            if (!qb.test(c))
                throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(rb, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e))
                    throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof lb ? mb(d) : encodeURIComponent(String(d))
            });
            return sb(a)
        }
          , rb = /%{(\w+)}/g
          , qb = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i")
          , nb = {}
          , sb = function(a) {
            var b = ib();
            a = b ? b.createScriptURL(a) : a;
            return new ob(a,nb)
        };
        var ub = /&/g
          , vb = /</g
          , wb = />/g
          , xb = /"/g
          , yb = /'/g
          , zb = /\x00/g
          , Ab = /[\x00&<>"']/
          , z = function(a, b) {
            return -1 != a.indexOf(b)
        };
        var Cb = function(a, b) {
            if (b !== Bb)
                throw Error("SafeUrl is not meant to be built directly");
            this.lh = a
        };
        Cb.prototype.toString = function() {
            return this.lh.toString()
        }
        ;
        Cb.prototype.tc = !0;
        Cb.prototype.oc = function() {
            return this.lh.toString()
        }
        ;
        var Db = function(a) {
            if (a instanceof Cb && a.constructor === Cb)
                return a.lh;
            Ga("expected object of type SafeUrl, got '" + a + "' of type " + ta(a));
            return "type_error:SafeUrl"
        }, Eb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i, Fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, Hb = function(a) {
            if (a instanceof Cb)
                return a;
            a = "object" == typeof a && a.tc ? a.oc() : String(a);
            Fb.test(a) ? a = Gb(a) : (a = String(a).replace(/(%0A|%0D)/g, ""),
            a = a.match(Eb) ? Gb(a) : null);
            return a
        }, Ib;
        try {
            new URL("s://g"),
            Ib = !0
        } catch (a) {
            Ib = !1
        }
        var Jb = Ib
          , Kb = function(a) {
            if (a instanceof Cb)
                return a;
            a = "object" == typeof a && a.tc ? a.oc() : String(a);
            a: {
                var b = a;
                if (Jb) {
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
            w("javascript:" !== b, "%s is a javascript: URL", a) || (a = "about:invalid#zClosurez");
            return Gb(a)
        }
          , Bb = {}
          , Gb = function(a) {
            return new Cb(a,Bb)
        }
          , Lb = Gb("about:invalid#zClosurez");
        Gb("about:blank");
        var Mb = {}
          , Nb = function() {
            if (Mb !== Mb)
                throw Error("SafeStyle is not meant to be built directly");
            this.wj = "";
            this.tc = !0
        };
        Nb.prototype.oc = function() {
            return this.wj
        }
        ;
        Nb.prototype.toString = function() {
            return this.wj.toString()
        }
        ;
        new Nb;
        var Ob = {}
          , Pb = function() {
            if (Ob !== Ob)
                throw Error("SafeStyleSheet is not meant to be built directly");
            this.vj = "";
            this.tc = !0
        };
        Pb.prototype.toString = function() {
            return this.vj.toString()
        }
        ;
        Pb.prototype.oc = function() {
            return this.vj
        }
        ;
        new Pb;
        function Qb() {
            var a = p.navigator;
            return a && (a = a.userAgent) ? a : ""
        }
        var Rb, Sb = p.navigator;
        Rb = Sb ? Sb.userAgentData || null : null;
        function Tb(a) {
            return bb ? Rb ? Rb.brands.some(function(b) {
                return (b = b.brand) && z(b, a)
            }) : !1 : !1
        }
        function A(a) {
            return z(Qb(), a)
        }
        ;function Ub() {
            return bb ? !!Rb && 0 < Rb.brands.length : !1
        }
        function Vb() {
            return Ub() ? !1 : A("Trident") || A("MSIE")
        }
        function Wb() {
            return Ub() ? Tb("Chromium") : (A("Chrome") || A("CriOS")) && !(Ub() ? 0 : A("Edge")) || A("Silk")
        }
        ;var Xb = {}
          , Yb = function(a, b) {
            if (b !== Xb)
                throw Error("SafeHtml is not meant to be built directly");
            this.kh = a;
            this.tc = !0
        };
        Yb.prototype.oc = function() {
            return this.kh.toString()
        }
        ;
        Yb.prototype.toString = function() {
            return this.kh.toString()
        }
        ;
        var Zb = function(a) {
            if (a instanceof Yb && a.constructor === Yb)
                return a.kh;
            Ga("expected object of type SafeHtml, got '" + a + "' of type " + ta(a));
            return "type_error:SafeHtml"
        };
        new Yb(p.trustedTypes && p.trustedTypes.emptyHTML || "",Xb);
        var $b = function(a, b) {
            this.name = a;
            this.value = b
        };
        $b.prototype.toString = function() {
            return this.name
        }
        ;
        var ac = new $b("OFF",Infinity), bc = new $b("SEVERE",1E3), cc = new $b("WARNING",900), dc = new $b("CONFIG",700), ec = new $b("FINE",500), fc = function() {
            this.Re = 0;
            this.clear()
        }, gc;
        fc.prototype.clear = function() {
            this.Yh = Array(this.Re);
            this.ii = -1;
            this.Ri = !1
        }
        ;
        var hc = function(a, b) {
            this.reset(a || ac, b, null, void 0, void 0)
        };
        hc.prototype.reset = function() {}
        ;
        var ic = function(a) {
            this.level = null;
            this.jl = [];
            this.parent = (void 0 === a ? null : a) || null;
            this.children = []
        }, jc = function(a) {
            if (a.level)
                return a.level;
            if (a.parent)
                return jc(a.parent);
            Ga("Root logger has no level set.");
            return ac
        }, kc = function(a, b) {
            for (; a; )
                a.jl.forEach(function(c) {
                    c(b)
                }),
                a = a.parent
        }, lc = function() {
            this.entries = {};
            var a = new ic;
            a.level = dc;
            this.entries[""] = a
        }, mc, nc = function(a, b) {
            var c = a.entries[b];
            if (c)
                return c;
            c = nc(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
            var d = new ic(c);
            a.entries[b] = d;
            c.children.push(d);
            return d
        }, oc = function() {
            mc || (mc = new lc);
            return mc
        }, pc = function(a, b, c) {
            if (a && a && b && b.value >= (a ? jc(nc(oc(), null)) : ac).value) {
                b = b || ac;
                a = nc(oc(), null);
                "function" === typeof c && (c = c());
                gc || (gc = new fc);
                var d = gc;
                if (0 < d.Re) {
                    var e = (d.ii + 1) % d.Re;
                    d.ii = e;
                    d.Ri ? (d = d.Yh[e],
                    d.reset(b, c, null)) : (d.Ri = e == d.Re - 1,
                    d = d.Yh[e] = new hc(b,c))
                } else
                    d = new hc(b,c);
                kc(a, d)
            }
        }, qc = function(a, b) {
            a && pc(a, bc, b)
        }, rc = function(a, b) {
            a && pc(a, ec, b)
        };
        /*
    
     SPDX-License-Identifier: Apache-2.0
    */
        var sc = []
          , tc = function() {};
        -1 === sc.indexOf(tc) && sc.push(tc);
        var uc = function(a, b) {
            if (!t(a) || !t(a) || !t(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI || a.tagName.toUpperCase() !== b.toString()) {
                b = b.toString() + "; got: ";
                if (t(a))
                    try {
                        var c = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
                    } catch (d) {
                        c = "<object could not be stringified>"
                    }
                else
                    c = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
                Ga("Argument is not an HTML Element with tag name " + (b + c))
            }
            return a
        };
        function vc() {
            return A("iPhone") && !A("iPod") && !A("iPad")
        }
        ;var wc = function(a) {
            wc[" "](a);
            return a
        };
        wc[" "] = function() {}
        ;
        var xc = Ub() ? !1 : A("Opera"), yc = Vb(), zc = A("Edge"), Ac = zc || yc, Bc = A("Gecko") && !(z(Qb().toLowerCase(), "webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"), Cc = z(Qb().toLowerCase(), "webkit") && !A("Edge"), Dc = Cc && A("Mobile"), Ec = function() {
            var a = p.document;
            return a ? a.documentMode : void 0
        }, Gc;
        a: {
            var Hc = ""
              , Ic = function() {
                var a = Qb();
                if (Bc)
                    return /rv:([^\);]+)(\)|;)/.exec(a);
                if (zc)
                    return /Edge\/([\d\.]+)/.exec(a);
                if (yc)
                    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Cc)
                    return /WebKit\/(\S+)/.exec(a);
                if (xc)
                    return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
            Ic && (Hc = Ic ? Ic[1] : "");
            if (yc) {
                var Jc = Ec();
                if (null != Jc && Jc > parseFloat(Hc)) {
                    Gc = String(Jc);
                    break a
                }
            }
            Gc = Hc
        }
        var Kc = Gc, Lc;
        if (p.document && yc) {
            var Mc = Ec();
            Lc = Mc ? Mc : parseInt(Kc, 10) || void 0
        } else
            Lc = void 0;
        var Nc = Lc;
        try {
            (new self.OffscreenCanvas(0,0)).getContext("2d")
        } catch (a) {}
        ;var Oc = function() {}
          , Pc = function(a) {
            return "function" === typeof a
        };
        var Qc = function(a, b) {
            Ia(mb(a), "must provide justification");
            w(!/^[\s\xa0]*$/.test(mb(a)), "must provide non-empty justification");
            a = b;
            a = (b = ib()) ? b.createHTML(a) : a;
            return new Yb(a,Xb)
        };
        var Rc = function(a, b) {
            uc(a, "A");
            b = b instanceof Cb ? b : Kb(b);
            a.href = Db(b)
        }
          , Tc = function(a, b) {
            uc(a, "SCRIPT");
            a: {
                var c = (a.ownerDocument && a.ownerDocument.defaultView || p).document;
                if (c.querySelector && (c = c.querySelector("script[nonce]")) && (c = c.nonce || c.getAttribute("nonce")) && Sc.test(c))
                    break a;
                c = ""
            }
            c && a.setAttribute("nonce", c);
            a.src = pb(b)
        }
          , Uc = function(a, b, c, d) {
            a = a instanceof Cb ? a : Kb(a);
            b = b || p;
            c = c instanceof lb ? mb(c) : c || "";
            return void 0 !== d ? b.open(Db(a), c, d) : b.open(Db(a), c)
        }
          , Sc = /^[\w+/_-]+[=]{0,2}$/;
        var Vc = function(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
                d += c.shift() + e.shift();
            return d + c.join("%s")
        };
        var Wc = function(a) {
            var b = document;
            return "string" === typeof a ? b.getElementById(a) : a
        }
          , Yc = function(a, b) {
            Wa(b, function(c, d) {
                c && "object" == typeof c && c.tc && (c = c.oc());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Xc.hasOwnProperty(d) ? a.setAttribute(Xc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        }
          , Xc = {
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
          , $c = function(a, b, c) {
            return Zc(document, arguments)
        }
          , Zc = function(a, b) {
            var c = b[1]
              , d = ad(a, String(b[0]));
            c && ("string" === typeof c ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : Yc(d, c));
            2 < b.length && bd(a, d, b, 2);
            return d
        }
          , bd = function(a, b, c, d) {
            function e(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!ua(f) || t(f) && 0 < f.nodeType)
                    e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (t(f)) {
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
                    x(g ? Ta(f) : f, e)
                }
            }
        }
          , ad = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        }
          , cd = function(a) {
            for (var b; b = a.firstChild; )
                a.removeChild(b)
        }
          , dd = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        }
          , ed = function(a) {
            w(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }
          , fd = function(a) {
            this.Yd = a || p.document || document
        };
        k = fd.prototype;
        k.getElementsByTagName = function(a, b) {
            return (b || this.Yd).getElementsByTagName(String(a))
        }
        ;
        k.xk = function(a, b, c) {
            return Zc(this.Yd, arguments)
        }
        ;
        k.createElement = function(a) {
            return ad(this.Yd, a)
        }
        ;
        k.createTextNode = function(a) {
            return this.Yd.createTextNode(String(a))
        }
        ;
        k.getWindow = function() {
            var a = this.Yd;
            return a.parentWindow || a.defaultView
        }
        ;
        k.appendChild = function(a, b) {
            w(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
            a.appendChild(b)
        }
        ;
        k.append = function(a, b) {
            bd(ed(a), a, arguments, 1)
        }
        ;
        k.canHaveChildren = function(a) {
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
        k.removeNode = dd;
        k.isElement = function(a) {
            return t(a) && 1 == a.nodeType
        }
        ;
        k.contains = function(a, b) {
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
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
        var C = window
          , gd = document
          , hd = /\[native code\]/
          , id = function(a, b, c) {
            return a[b] = a[b] || c
        }
          , jd = function(a) {
            return !!a && "object" === typeof a && hd.test(a.push)
        }
          , kd = function(a) {
            for (var b = 0; b < this.length; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
          , md = function(a, b, c) {
            if (a)
                if (jd(a)) {
                    if (a) {
                        D(jd(a), "arrayForEach was called with a non array value");
                        for (var d = 0; d < a.length; d++)
                            b.call(c, a[d], d)
                    }
                } else
                    for (d in D("object" === typeof a, "objectForEach was called with a non object value"),
                    c = c || a,
                    a)
                        ld(a, d) && void 0 !== a[d] && b.call(c, a[d], d)
        }
          , nd = /&/g
          , od = /</g
          , pd = />/g
          , qd = /"/g
          , rd = /'/g
          , sd = function(a) {
            return String(a).replace(nd, "&amp;").replace(od, "&lt;").replace(pd, "&gt;").replace(qd, "&quot;").replace(rd, "&#39;")
        }
          , td = function() {
            var a;
            if ((a = Object.create) && hd.test(a))
                a = a(null);
            else {
                a = {};
                for (var b in a)
                    a[b] = void 0
            }
            return a
        }
          , ld = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }
          , ud = function(a, b) {
            a = a || {};
            for (var c in a)
                ld(a, c) && (b[c] = a[c])
        }
          , D = function(a, b) {
            if (!a)
                throw Error(b || "");
        }
          , vd = id(C, "gapi", {});
        var wd = function(a, b, c) {
            var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)","g");
            b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)","g");
            if (a = a && (d.exec(a) || b.exec(a)))
                try {
                    c = decodeURIComponent(a[2])
                } catch (e) {}
            return c
        }
          , xd = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source)
          , yd = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g
          , zd = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,"g")
          , Ad = /%([a-f]|[0-9a-fA-F][a-f])/g
          , Bd = /^(https?|ftp|file|chrome-extension):$/i
          , Cd = function(a) {
            a = String(a);
            a = a.replace(yd, function(e) {
                try {
                    return encodeURIComponent(e)
                } catch (f) {
                    return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"))
                }
            }).replace(zd, function(e) {
                return e.replace(/%/g, "%25")
            }).replace(Ad, function(e) {
                return e.toUpperCase()
            });
            a = a.match(xd) || [];
            var b = td()
              , c = function(e) {
                return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g, "%7D")
            }
              , d = !!(a[1] || "").match(Bd);
            b.Sd = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
            d = function(e) {
                return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"))
            }
            ;
            b.query = a[5] ? [d(a[5])] : [];
            b.Rb = a[7] ? [d(a[7])] : [];
            return b
        }
          , Dd = function(a) {
            return a.Sd + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.Rb.length ? "#" + a.Rb.join("&") : "")
        }
          , Ed = function(a, b) {
            var c = [];
            if (a)
                for (var d in a)
                    if (ld(a, d) && null != a[d]) {
                        var e = b ? b(a[d]) : a[d];
                        c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
                    }
            return c
        }
          , Fd = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$","i")
          , Gd = function(a, b) {
            var c = Cd(b);
            b = c.Sd;
            c.query.length && (b += "?" + c.query.join(""));
            c.Rb.length && (b += "#" + c.Rb.join(""));
            var d = "";
            2E3 < b.length && (d = b,
            b = b.substr(0, 2E3),
            b = b.replace(Fd, ""),
            d = d.substr(b.length));
            var e = a.createElement("div");
            a = a.createElement("a");
            c = Cd(b);
            b = c.Sd;
            c.query.length && (b += "?" + c.query.join(""));
            c.Rb.length && (b += "#" + c.Rb.join(""));
            b = null === b ? "null" : void 0 === b ? "undefined" : b;
            if ("string" !== typeof b)
                throw Error("Expected a string");
            b = Gb(b);
            Rc(a, b);
            e.appendChild(a);
            b = Qc(new lb(jb,"Assignment to self."), e.innerHTML);
            if (1 === e.nodeType && (c = e.tagName,
            "SCRIPT" === c || "STYLE" === c))
                throw Error("SCRIPT" === c ? "Use safeScriptEl.setTextContent with a SafeScript." : "Use safeStyleEl.setTextContent with a SafeStyleSheet.");
            e.innerHTML = Zb(b);
            b = String(e.firstChild.href);
            e.parentNode && e.parentNode.removeChild(e);
            c = Cd(b + d);
            d = c.Sd;
            c.query.length && (d += "?" + c.query.join(""));
            c.Rb.length && (d += "#" + c.Rb.join(""));
            return d
        }
          , Hd = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
        var Id;
        var Kd = function(a, b, c) {
            Jd(a, b, c, "add", "at")
        }
          , Jd = function(a, b, c, d, e) {
            if (a[d + "EventListener"])
                a[d + "EventListener"](b, c, !1);
            else if (a[e + "tachEvent"])
                a[e + "tachEvent"]("on" + b, c)
        }
          , Ld = function(a) {
            for (; a.firstChild; )
                a.removeChild(a.firstChild)
        };
        var Md = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//
          , Nd = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//
          , Od = function() {
            var a = za("googleapis.config/sessionIndex");
            "string" === typeof a && 254 < a.length && (a = null);
            null == a && (a = window.__X_GOOG_AUTHUSER);
            "string" === typeof a && 254 < a.length && (a = null);
            if (null == a) {
                var b = window.google;
                b && (a = b.authuser)
            }
            "string" === typeof a && 254 < a.length && (a = null);
            null == a && (b = window.location.href,
            a = wd(b, "authuser") || null,
            null == a && (a = (a = b.match(Md)) ? a[1] : null));
            if (null == a)
                return null;
            a = String(a);
            254 < a.length && (a = null);
            return a
        }
          , Pd = function() {
            var a = za("googleapis.config/sessionDelegate");
            "string" === typeof a && 21 < a.length && (a = null);
            null == a && (a = (a = window.location.href.match(Nd)) ? a[1] : null);
            if (null == a)
                return null;
            a = String(a);
            21 < a.length && (a = null);
            return a
        };
        var Qd = {};
        Qd = id(C, "___jsl", td());
        id(Qd, "I", 0);
        id(Qd, "hel", 10);
        var Rd, Sd, Td = void 0, Ud = function(a) {
            try {
                return p.JSON.parse.call(p.JSON, a)
            } catch (b) {
                return !1
            }
        }, Vd = function(a) {
            return Object.prototype.toString.call(a)
        }, Wd = Vd(0), Xd = Vd(new Date(0)), Yd = Vd(!0), Zd = Vd(""), $d = Vd({}), ae = Vd([]), be = function(a, b) {
            if (b)
                for (var c = 0, d = b.length; c < d; ++c)
                    if (a === b[c])
                        throw new TypeError("Converting circular structure to JSON");
            d = typeof a;
            if ("undefined" !== d) {
                c = Array.prototype.slice.call(b || [], 0);
                c[c.length] = a;
                b = [];
                var e = Vd(a);
                if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a, "toJSON") || (e !== ae || a.constructor !== Array && a.constructor !== Object) && (e !== $d || a.constructor !== Array && a.constructor !== Object) && e !== Zd && e !== Wd && e !== Yd && e !== Xd))
                    return be(a.toJSON.call(a), c);
                if (null == a)
                    b[b.length] = "null";
                else if (e === Wd)
                    a = Number(a),
                    isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"),
                    b[b.length] = String(a);
                else if (e === Yd)
                    b[b.length] = String(!!Number(a));
                else {
                    if (e === Xd)
                        return be(a.toISOString.call(a), c);
                    if (e === ae && Vd(a.length) === Wd) {
                        b[b.length] = "[";
                        var f = 0;
                        for (d = Number(a.length) >> 0; f < d; ++f)
                            f && (b[b.length] = ","),
                            b[b.length] = be(a[f], c) || "null";
                        b[b.length] = "]"
                    } else if (e == Zd && Vd(a.length) === Wd) {
                        b[b.length] = '"';
                        f = 0;
                        for (c = Number(a.length) >> 0; f < c; ++f)
                            d = String.prototype.charAt.call(a, f),
                            e = String.prototype.charCodeAt.call(a, f),
                            b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                        b[b.length] = '"'
                    } else if ("object" === d) {
                        b[b.length] = "{";
                        d = 0;
                        for (f in a)
                            Object.prototype.hasOwnProperty.call(a, f) && (e = be(a[f], c),
                            void 0 !== e && (d++ && (b[b.length] = ","),
                            b[b.length] = be(f),
                            b[b.length] = ":",
                            b[b.length] = e));
                        b[b.length] = "}"
                    } else
                        return
                }
                return b.join("")
            }
        }, ce = /[\0-\x07\x0b\x0e-\x1f]/, de = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/, ee = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/, fe = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/, ge = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g, he = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g, ie = /[ \t\n\r]+/g, je = /[^"]:/, ke = /""/g, le = /true|false|null/g, me = /00/, oe = /[\{]([^0\}]|0[^:])/, pe = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/, qe = /[^\[,:][\[\{]/, re = /^(\{|\}|\[|\]|,|:|0)+/, se = /\u2028/g, te = /\u2029/g, ue = function(a) {
            a = String(a);
            if (ce.test(a) || de.test(a) || ee.test(a) || fe.test(a))
                return !1;
            var b = a.replace(ge, '""');
            b = b.replace(he, "0");
            b = b.replace(ie, "");
            if (je.test(b))
                return !1;
            b = b.replace(ke, "0");
            b = b.replace(le, "0");
            if (me.test(b) || oe.test(b) || pe.test(b) || qe.test(b) || !b || (b = b.replace(re, "")))
                return !1;
            a = a.replace(se, "\\u2028").replace(te, "\\u2029");
            b = void 0;
            try {
                b = Td ? [Ud(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
            } catch (c) {
                return !1
            }
            return b && 1 === b.length ? b[0] : !1
        }, ve = function() {
            var a = ((p.document || {}).scripts || []).length;
            if ((void 0 === Rd || void 0 === Td || Sd !== a) && -1 !== Sd) {
                Rd = Td = !1;
                Sd = -1;
                try {
                    try {
                        Td = !!p.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === p.JSON.stringify.call(p.JSON, {
                            a: [3, !0, new Date(0)],
                            c: function() {}
                        }) && !0 === Ud("true") && 3 === Ud('[{"a":3}]')[0].a
                    } catch (b) {}
                    Rd = Td && !Ud("[00]") && !Ud('"\u0007"') && !Ud('"\\0"') && !Ud('"\\v"')
                } finally {
                    Sd = a
                }
            }
        }, we = function(a) {
            if (-1 === Sd)
                return !1;
            ve();
            return (Rd ? Ud : ue)(a)
        }, xe = function(a) {
            if (-1 !== Sd)
                return ve(),
                Td ? p.JSON.stringify.call(p.JSON, a) : be(a)
        }, ye = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString(), ze = function() {
            var a = Date.prototype.getUTCFullYear.call(this);
            return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("")
        };
        Date.prototype.toISOString = ye ? ze : Date.prototype.toISOString;
        var Ae = function() {
            this.blockSize = -1
        };
        var Be = function() {
            this.blockSize = -1;
            this.blockSize = 64;
            this.va = [];
            this.ng = [];
            this.ik = [];
            this.Cf = [];
            this.Cf[0] = 128;
            for (var a = 1; a < this.blockSize; ++a)
                this.Cf[a] = 0;
            this.bc = this.ud = 0;
            this.reset()
        };
        v(Be, Ae);
        Be.prototype.reset = function() {
            this.va[0] = 1732584193;
            this.va[1] = 4023233417;
            this.va[2] = 2562383102;
            this.va[3] = 271733878;
            this.va[4] = 3285377520;
            this.bc = this.ud = 0
        }
        ;
        var Ce = function(a, b, c) {
            c || (c = 0);
            var d = a.ik;
            if ("string" === typeof b)
                for (var e = 0; 16 > e; e++)
                    d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3),
                    c += 4;
            else
                for (e = 0; 16 > e; e++)
                    d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3],
                    c += 4;
            for (e = 16; 80 > e; e++) {
                var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
                d[e] = (f << 1 | f >>> 31) & 4294967295
            }
            b = a.va[0];
            c = a.va[1];
            var g = a.va[2]
              , h = a.va[3]
              , l = a.va[4];
            for (e = 0; 80 > e; e++) {
                if (40 > e)
                    if (20 > e) {
                        f = h ^ c & (g ^ h);
                        var m = 1518500249
                    } else
                        f = c ^ g ^ h,
                        m = 1859775393;
                else
                    60 > e ? (f = c & g | h & (c | g),
                    m = 2400959708) : (f = c ^ g ^ h,
                    m = 3395469782);
                f = (b << 5 | b >>> 27) + f + l + m + d[e] & 4294967295;
                l = h;
                h = g;
                g = (c << 30 | c >>> 2) & 4294967295;
                c = b;
                b = f
            }
            a.va[0] = a.va[0] + b & 4294967295;
            a.va[1] = a.va[1] + c & 4294967295;
            a.va[2] = a.va[2] + g & 4294967295;
            a.va[3] = a.va[3] + h & 4294967295;
            a.va[4] = a.va[4] + l & 4294967295
        };
        Be.prototype.update = function(a, b) {
            if (null != a) {
                void 0 === b && (b = a.length);
                for (var c = b - this.blockSize, d = 0, e = this.ng, f = this.ud; d < b; ) {
                    if (0 == f)
                        for (; d <= c; )
                            Ce(this, a, d),
                            d += this.blockSize;
                    if ("string" === typeof a)
                        for (; d < b; ) {
                            if (e[f] = a.charCodeAt(d),
                            ++f,
                            ++d,
                            f == this.blockSize) {
                                Ce(this, e);
                                f = 0;
                                break
                            }
                        }
                    else
                        for (; d < b; )
                            if (e[f] = a[d],
                            ++f,
                            ++d,
                            f == this.blockSize) {
                                Ce(this, e);
                                f = 0;
                                break
                            }
                }
                this.ud = f;
                this.bc += b
            }
        }
        ;
        Be.prototype.digest = function() {
            var a = []
              , b = 8 * this.bc;
            56 > this.ud ? this.update(this.Cf, 56 - this.ud) : this.update(this.Cf, this.blockSize - (this.ud - 56));
            for (var c = this.blockSize - 1; 56 <= c; c--)
                this.ng[c] = b & 255,
                b /= 256;
            Ce(this, this.ng);
            for (c = b = 0; 5 > c; c++)
                for (var d = 24; 0 <= d; d -= 8)
                    a[b] = this.va[c] >> d & 255,
                    ++b;
            return a
        }
        ;
        var De = function() {
            this.Hh = new Be
        };
        k = De.prototype;
        k.reset = function() {
            this.Hh.reset()
        }
        ;
        k.updateByteArray = function(a) {
            this.Hh.update(a)
        }
        ;
        k.digestByteArray = function() {
            return this.Hh.digest()
        }
        ;
        k.updateString = function(a) {
            a = unescape(encodeURIComponent(a));
            for (var b = [], c = 0, d = a.length; c < d; ++c)
                b.push(a.charCodeAt(c));
            this.updateByteArray(b)
        }
        ;
        k.digestString = function() {
            for (var a = this.digestByteArray(), b = "", c = 0; c < a.length; c++)
                b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
            return b
        }
        ;
        var Ee = C.crypto
          , Fe = !1
          , Ge = 0
          , He = 0
          , Ie = 1
          , Je = 0
          , Ke = ""
          , Le = function(a) {
            a = a || C.event;
            var b = a.screenX + a.clientX << 16;
            b += a.screenY + a.clientY;
            b *= (new Date).getTime() % 1E6;
            Ie = Ie * b % Je;
            0 < Ge && ++He == Ge && Jd(C, "mousemove", Le, "remove", "de")
        }
          , Me = function(a) {
            var b = new De;
            b.updateString(a);
            return b.digestString()
        };
        Fe = !!Ee && "function" == typeof Ee.getRandomValues;
        Fe || (Je = 1E6 * (screen.width * screen.width + screen.height),
        Ke = Me(gd.cookie + "|" + gd.location + "|" + (new Date).getTime() + "|" + Math.random()),
        Ge = za("random/maxObserveMousemove") || 0,
        0 != Ge && Kd(C, "mousemove", Le));
        var Ne = function() {
            var a = Qd.onl;
            if (!a) {
                a = td();
                Qd.onl = a;
                var b = td();
                a.e = function(c) {
                    var d = b[c];
                    d && (delete b[c],
                    d())
                }
                ;
                a.a = function(c, d) {
                    b[c] = d
                }
                ;
                a.r = function(c) {
                    delete b[c]
                }
            }
            return a
        }
          , Oe = function(a, b) {
            b = b.onload;
            return "function" === typeof b ? (Ne().a(a, b),
            b) : null
        }
          , Pe = function(a) {
            D(/^\w+$/.test(a), "Unsupported id - " + a);
            return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
        }
          , Qe = function(a) {
            Ne().r(a)
        };
        var Re = {
            allowtransparency: "true",
            frameborder: "0",
            hspace: "0",
            marginheight: "0",
            marginwidth: "0",
            scrolling: "no",
            style: "",
            tabindex: "0",
            vspace: "0",
            width: "100%"
        }
          , Se = {
            allowtransparency: !0,
            onload: !0
        }
          , Te = 0
          , Ue = function(a, b) {
            var c = 0;
            do
                var d = b.id || ["I", Te++, "_", (new Date).getTime()].join("");
            while (a.getElementById(d) && 5 > ++c);
            D(5 > c, "Error creating iframe id");
            return d
        }
          , Ve = function(a, b) {
            return a ? b + "/" + a : ""
        }
          , We = function(a, b, c, d) {
            var e = {}
              , f = {};
            a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode);
            ud(d.queryParams || {}, e);
            ud(d.fragmentParams || {}, f);
            var g = d.pfname;
            var h = td();
            za("iframes/dropLegacyIdParam") || (h.id = c);
            h._gfid = c;
            h.parent = a.location.protocol + "//" + a.location.host;
            c = wd(a.location.href, "parent");
            g = g || "";
            !g && c && (g = wd(a.location.href, "_gfid", "") || wd(a.location.href, "id", ""),
            g = Ve(g, wd(a.location.href, "pfname", "")));
            g || (c = we(wd(a.location.href, "jcp", ""))) && "object" == typeof c && (g = Ve(c.id, c.pfname));
            h.pfname = g;
            d.connectWithJsonParam && (g = {},
            g.jcp = xe(h),
            h = g);
            g = wd(b, "rpctoken") || e.rpctoken || f.rpctoken;
            if (!g) {
                if (!(g = d.rpctoken)) {
                    g = String;
                    c = Math;
                    var l = c.round;
                    if (Fe) {
                        var m = new C.Uint32Array(1);
                        Ee.getRandomValues(m);
                        m = Number("0." + m[0])
                    } else
                        m = Ie,
                        m += parseInt(Ke.substr(0, 20), 16),
                        Ke = Me(Ke),
                        m /= Je + Math.pow(16, 20);
                    g = g(l.call(c, 1E8 * m))
                }
                h.rpctoken = g
            }
            d.rpctoken = g;
            ud(h, d.connectWithQueryParams ? e : f);
            h = a.location.href;
            a = td();
            (g = wd(h, "_bsh", Qd.bsh)) && (a._bsh = g);
            (h = Qd.dpo ? Qd.h : wd(h, "jsh", Qd.h)) && (a.jsh = h);
            d.hintInFragment ? ud(a, f) : ud(a, e);
            d = d.paramsSerializer;
            b = Cd(b);
            b.query.push.apply(b.query, Ed(e, d));
            b.Rb.push.apply(b.Rb, Ed(f, d));
            return Dd(b)
        }
          , Xe = function(a) {
            D(!a || Hd.test(a), "Illegal url for new iframe - " + a)
        }
          , Ye = function(a, b, c, d, e) {
            Xe(c.src);
            var f, g = Oe(d, c), h = g ? Pe(d) : "";
            try {
                document.all && (f = a.createElement('<iframe frameborder="' + sd(String(c.frameborder)) + '" scrolling="' + sd(String(c.scrolling)) + '" ' + h + ' name="' + sd(String(c.name)) + '"/>'))
            } catch (m) {} finally {
                f || (f = (a ? new fd(ed(a)) : Ba || (Ba = new fd)).xk("IFRAME"),
                g && (f.onload = function() {
                    f.onload = null;
                    g.call(this)
                }
                ,
                Qe(d)))
            }
            f.setAttribute("ng-non-bindable", "");
            for (var l in c)
                a = c[l],
                "style" === l && "object" === typeof a ? ud(a, f.style) : Se[l] || f.setAttribute(l, String(a));
            (l = e && e.beforeNode || null) || e && e.dontclear || Ld(b);
            b.insertBefore(f, l);
            f = l ? l.previousSibling : b.lastChild;
            c.allowtransparency && (f.allowTransparency = !0);
            return f
        };
        var Ze = /^:[\w]+$/
          , $e = /:([a-zA-Z_]+):/g
          , af = function(a, b) {
            a = Od() || "0";
            var c = Pd();
            var d = Od() || a;
            var e = Pd()
              , f = "";
            d && (f += "u/" + encodeURIComponent(String(d)) + "/");
            e && (f += "b/" + encodeURIComponent(String(e)) + "/");
            d = f || null;
            (f = (e = !1 === za("isLoggedIn")) ? "_/im/" : "") && (d = "");
            var g = za("iframes/:socialhost:")
              , h = za("iframes/:im_socialhost:");
            Id = {
                socialhost: g,
                ctx_socialhost: e ? h : g,
                session_index: a,
                session_delegate: c,
                session_prefix: d,
                im_prefix: f
            };
            return Id[b] || ""
        }
          , bf = function(a) {
            var b = a;
            Ze.test(a) && (b = za("iframes/" + b.substring(1) + "/url"),
            D(!!b, "Unknown iframe url config for - " + a));
            return Gd(gd, b.replace($e, af))
        }
          , cf = function(a, b, c) {
            c = c || {};
            var d = c.attributes || {};
            D(!(c.allowPost || c.forcePost) || !d.onload, "onload is not supported by post iframe (allowPost or forcePost)");
            a = bf(a);
            d = b.ownerDocument || gd;
            var e = Ue(d, c);
            a = We(d, a, e, c);
            var f = c
              , g = td();
            ud(Re, g);
            ud(f.attributes, g);
            g.name = g.id = e;
            g.src = a;
            c.eurl = a;
            c = (f = c) || {};
            var h = !!c.allowPost;
            if (c.forcePost || h && 2E3 < a.length) {
                c = Cd(a);
                g.src = "";
                f.dropDataPostorigin || (g["data-postorigin"] = a);
                a = Ye(d, b, g, e);
                if (-1 != navigator.userAgent.indexOf("WebKit")) {
                    var l = a.contentWindow.document;
                    l.open();
                    g = l.createElement("div");
                    h = {};
                    var m = e + "_inner";
                    h.name = m;
                    h.src = "";
                    h.style = "display:none";
                    Ye(d, g, h, m, f)
                }
                g = (f = c.query[0]) ? f.split("&") : [];
                f = [];
                for (h = 0; h < g.length; h++)
                    m = g[h].split("=", 2),
                    f.push([decodeURIComponent(m[0]), decodeURIComponent(m[1])]);
                c.query = [];
                g = Dd(c);
                D(Hd.test(g), "Invalid URL: " + g);
                c = d.createElement("form");
                c.method = "POST";
                c.target = e;
                c.style.display = "none";
                e = g instanceof Cb ? g : Kb(g);
                uc(c, "FORM").action = Db(e);
                for (e = 0; e < f.length; e++)
                    g = d.createElement("input"),
                    g.type = "hidden",
                    g.name = f[e][0],
                    g.value = f[e][1],
                    c.appendChild(g);
                b.appendChild(c);
                c.submit();
                c.parentNode.removeChild(c);
                l && l.close();
                b = a
            } else
                b = Ye(d, b, g, e, f);
            return b
        };
        window.osapi = window.osapi || {};
        window.___jsl = window.___jsl || {};
        (window.___jsl.cd = window.___jsl.cd || []).push({
            gwidget: {
                parsetags: "explicit"
            },
            appsapi: {
                plus_one_service: "/plus/v1"
            },
            csi: {
                rate: .01
            },
            poshare: {
                hangoutContactPickerServer: "https://plus.google.com"
            },
            gappsutil: {
                required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
                display_on_page_ready: !1
            },
            appsutil: {
                required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
                display_on_page_ready: !1
            },
            "oauth-flow": {
                authUrl: "https://accounts.google.com/o/oauth2/auth",
                proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
                redirectUri: "postmessage"
            },
            iframes: {
                sharebox: {
                    params: {
                        json: "&"
                    },
                    url: ":socialhost:/:session_prefix:_/sharebox/dialog"
                },
                plus: {
                    url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
                },
                ":socialhost:": "https://apis.google.com",
                ":im_socialhost:": "https://plus.googleapis.com",
                domains_suggest: {
                    url: "https://domains.google.com/suggest/flow"
                },
                card: {
                    params: {
                        s: "#",
                        userid: "&"
                    },
                    url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
                },
                ":signuphost:": "https://plus.google.com",
                ":gplus_url:": "https://plus.google.com",
                plusone: {
                    url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
                },
                plus_share: {
                    url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
                },
                plus_circle: {
                    url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
                },
                plus_followers: {
                    url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
                },
                configurator: {
                    url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
                },
                appcirclepicker: {
                    url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
                },
                page: {
                    url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
                },
                person: {
                    url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
                },
                community: {
                    url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
                },
                follow: {
                    url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
                },
                commentcount: {
                    url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
                },
                comments: {
                    url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
                },
                youtube: {
                    url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
                },
                reportabuse: {
                    url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
                },
                additnow: {
                    url: ":socialhost:/additnow/additnow.html"
                },
                appfinder: {
                    url: "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
                },
                ":source:": "1p"
            },
            poclient: {
                update_session: "google.updateSessionCallback"
            },
            "googleapis.config": {
                rpc: "/rpc",
                root: "https://content.googleapis.com",
                "root-1p": "https://clients6.google.com",
                useGapiForXd3: !0,
                xd3: "/static/proxy.html",
                auth: {
                    useInterimAuth: !1
                }
            },
            report: {
                apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
                rate: 1E-4
            },
            client: {
                perApiBatch: !0
            }
        });
        var df = function(a) {
            var b = window.___jsl = window.___jsl || {};
            b[a] = b[a] || [];
            return b[a]
        }
          , ef = function(a) {
            var b = window.___jsl = window.___jsl || {};
            b.cfg = !a && b.cfg || {};
            return b.cfg
        }
          , ff = function(a) {
            return "object" === typeof a && /\[native code\]/.test(a.push)
        }
          , gf = function(a, b, c) {
            if (b && "object" === typeof b)
                for (var d in b)
                    !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !ff(a[d]) && !ff(b[d]) ? gf(a[d], b[d]) : b[d] && "object" === typeof b[d] ? (a[d] = ff(b[d]) ? [] : {},
                    gf(a[d], b[d])) : a[d] = b[d])
        }
          , hf = function(a) {
            if (a && !/^\s+$/.test(a)) {
                for (; 0 == a.charCodeAt(a.length - 1); )
                    a = a.substring(0, a.length - 1);
                try {
                    var b = window.JSON.parse(a)
                } catch (c) {}
                if ("object" === typeof b)
                    return b;
                try {
                    b = (new Function("return (" + a + "\n)"))()
                } catch (c) {}
                if ("object" === typeof b)
                    return b;
                try {
                    b = (new Function("return ({" + a + "\n})"))()
                } catch (c) {}
                return "object" === typeof b ? b : {}
            }
        }
          , jf = function(a, b) {
            var c = {
                ___goc: void 0
            };
            a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
            gf(c, b);
            a.push(c)
        }
          , kf = function(a) {
            ef(!0);
            var b = window.___gcfg
              , c = df("cu")
              , d = window.___gu;
            b && b !== d && (jf(c, b),
            window.___gu = b);
            b = df("cu");
            var e = document.scripts || document.getElementsByTagName("script") || [];
            d = [];
            var f = [];
            f.push.apply(f, df("us"));
            for (var g = 0; g < e.length; ++g)
                for (var h = e[g], l = 0; l < f.length; ++l)
                    h.src && 0 == h.src.indexOf(f[l]) && d.push(h);
            0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
            for (e = 0; e < d.length; ++e)
                d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0),
                (f = d[e]) ? (g = f.nodeType,
                f = 3 == g || 4 == g ? f.nodeValue : f.textContent || "") : f = void 0,
                (f = hf(f)) && b.push(f));
            a && jf(c, a);
            d = df("cd");
            a = 0;
            for (b = d.length; a < b; ++a)
                gf(ef(), d[a], !0);
            d = df("ci");
            a = 0;
            for (b = d.length; a < b; ++a)
                gf(ef(), d[a], !0);
            a = 0;
            for (b = c.length; a < b; ++a)
                gf(ef(), c[a], !0)
        };
        var lf = function() {
            var a = window.__GOOGLEAPIS;
            a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis),
            id(Qd, "ci", []).push(a),
            window.__GOOGLEAPIS = void 0)
        };
        lf && lf();
        kf();
        r("gapi.config.get", function(a, b) {
            var c = ef();
            if (!a)
                return c;
            a = a.split("/");
            for (var d = 0, e = a.length; c && "object" === typeof c && d < e; ++d)
                c = c[a[d]];
            return d === a.length && void 0 !== c ? c : b
        });
        r("gapi.config.update", function(a, b) {
            var c;
            if ("string" === typeof a) {
                var d = c = {};
                a = a.split("/");
                for (var e = 0, f = a.length; e < f - 1; ++e) {
                    var g = {};
                    d = d[a[e]] = g
                }
                d[a[e]] = b
            } else
                c = a;
            kf(c)
        });
        var mf = function(a) {
            if (!a)
                return "";
            if (/^about:(?:blank|srcdoc)$/.test(a))
                return window.origin || "";
            a.startsWith("blob:") && (a = a.substring(5));
            a = a.split("#")[0].split("?")[0];
            a = a.toLowerCase();
            0 == a.indexOf("//") && (a = window.location.protocol + a);
            /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
            var b = a.substring(a.indexOf("://") + 3)
              , c = b.indexOf("/");
            -1 != c && (b = b.substring(0, c));
            c = a.substring(0, a.indexOf("://"));
            if (!c)
                throw Error("URI is missing protocol: " + a);
            if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c)
                throw Error("Invalid URI scheme in origin: " + c);
            a = "";
            var d = b.indexOf(":");
            if (-1 != d) {
                var e = b.substring(d + 1);
                b = b.substring(0, d);
                if ("http" === c && "80" !== e || "https" === c && "443" !== e)
                    a = ":" + e
            }
            return c + "://" + b + a
        };
        var pf = function(a) {
            this.lb = a;
            this.Context = nf(a);
            this.Iframe = of(a)
        };
        k = pf.prototype;
        k.CROSS_ORIGIN_IFRAMES_FILTER = function(a) {
            return this.lb().CROSS_ORIGIN_IFRAMES_FILTER(a)
        }
        ;
        k.SAME_ORIGIN_IFRAMES_FILTER = function(a) {
            return this.lb().SAME_ORIGIN_IFRAMES_FILTER(a)
        }
        ;
        k.create = function(a, b, c) {
            return this.lb().create(a, b, c)
        }
        ;
        k.getBeforeOpenStyle = function(a) {
            return this.lb().getBeforeOpenStyle(a)
        }
        ;
        k.getContext = function() {
            return this.lb().getContext()
        }
        ;
        k.getStyle = function(a) {
            return this.lb().getStyle(a)
        }
        ;
        k.makeWhiteListIframesFilter = function(a) {
            return this.lb().makeWhiteListIframesFilter(a)
        }
        ;
        k.registerBeforeOpenStyle = function(a, b) {
            return this.lb().registerBeforeOpenStyle(a, b)
        }
        ;
        k.registerIframesApi = function(a, b, c) {
            return this.lb().registerIframesApi(a, b, c)
        }
        ;
        k.registerIframesApiHandler = function(a, b, c) {
            return this.lb().registerIframesApiHandler(a, b, c)
        }
        ;
        k.registerStyle = function(a, b) {
            return this.lb().registerStyle(a, b)
        }
        ;
        function nf(a) {
            var b = function(c) {
                return new (a().Context)(c)
            };
            b.prototype.addOnConnectHandler = function(c, d, e, f) {
                return a().Context.prototype.addOnConnectHandler.apply(this, [c, d, e, f])
            }
            ;
            b.prototype.addOnOpenerHandler = function(c, d, e) {
                return a().Context.prototype.addOnOpenerHandler.apply(this, [c, d, e])
            }
            ;
            b.prototype.closeSelf = function(c, d, e) {
                return a().Context.prototype.closeSelf.apply(this, [c, d, e])
            }
            ;
            b.prototype.connectIframes = function(c, d) {
                a().Context.prototype.connectIframes.apply(this, [c, d])
            }
            ;
            b.prototype.getFrameName = function() {
                return a().Context.prototype.getFrameName.apply(this)
            }
            ;
            b.prototype.getGlobalParam = function(c) {
                a().Context.prototype.getGlobalParam.apply(this, [c])
            }
            ;
            b.prototype.getParentIframe = function() {
                return a().Context.prototype.getParentIframe.apply(this)
            }
            ;
            b.prototype.getWindow = function() {
                return a().Context.prototype.getWindow.apply(this)
            }
            ;
            b.prototype.isDisposed = function() {
                return a().Context.prototype.isDisposed.apply(this)
            }
            ;
            b.prototype.open = function(c, d) {
                return a().Context.prototype.open.apply(this, [c, d])
            }
            ;
            b.prototype.openChild = function(c) {
                return a().Context.prototype.openChild.apply(this, [c])
            }
            ;
            b.prototype.ready = function(c, d, e, f) {
                a().Context.prototype.ready.apply(this, [c, d, e, f])
            }
            ;
            b.prototype.removeOnConnectHandler = function(c) {
                a().Context.prototype.removeOnConnectHandler.apply(this, [c])
            }
            ;
            b.prototype.restyleSelf = function(c, d, e) {
                return a().Context.prototype.restyleSelf.apply(this, [c, d, e])
            }
            ;
            b.prototype.setCloseSelfFilter = function(c) {
                a().Context.prototype.setCloseSelfFilter.apply(this, [c])
            }
            ;
            b.prototype.setGlobalParam = function(c, d) {
                a().Context.prototype.setGlobalParam.apply(this, [c, d])
            }
            ;
            b.prototype.setRestyleSelfFilter = function(c) {
                a().Context.prototype.setRestyleSelfFilter.apply(this, [c])
            }
            ;
            return b
        }
        function of(a) {
            var b = function(c, d, e, f) {
                return new (a().Iframe)(c,d,e,f)
            };
            b.prototype.applyIframesApi = function(c) {
                a().Iframe.prototype.applyIframesApi(c)
            }
            ;
            b.prototype.close = function(c, d) {
                return a().Iframe.prototype.close.apply(this, [c, d])
            }
            ;
            b.prototype.getContext = function() {
                return a().Iframe.prototype.getContext.apply(this, [])
            }
            ;
            b.prototype.getFrameName = function() {
                return a().Iframe.prototype.getFrameName.apply(this, [])
            }
            ;
            b.prototype.getId = function() {
                return a().Iframe.prototype.getId.apply(this, [])
            }
            ;
            b.prototype.getIframeEl = function() {
                return a().Iframe.prototype.getIframeEl.apply(this, [])
            }
            ;
            b.prototype.getOrigin = function() {
                return a().Iframe.prototype.getOrigin.apply(this, [])
            }
            ;
            b.prototype.getParam = function(c) {
                a().Iframe.prototype.getParam.apply(this, [c])
            }
            ;
            b.prototype.getSiteEl = function() {
                return a().Iframe.prototype.getSiteEl.apply(this, [])
            }
            ;
            b.prototype.getWindow = function() {
                return a().Iframe.prototype.getWindow.apply(this, [])
            }
            ;
            b.prototype.isDisposed = function() {
                return a().Iframe.prototype.isDisposed.apply(this, [])
            }
            ;
            b.prototype.ping = function(c, d) {
                return a().Iframe.prototype.ping.apply(this, [c, d])
            }
            ;
            b.prototype.register = function(c, d, e) {
                a().Iframe.prototype.register.apply(this, [c, d, e])
            }
            ;
            b.prototype.registerWasClosed = function(c, d) {
                a().Iframe.prototype.registerWasClosed.apply(this, [c, d])
            }
            ;
            b.prototype.registerWasRestyled = function(c, d) {
                a().Iframe.prototype.registerWasRestyled.apply(this, [c, d])
            }
            ;
            b.prototype.restyle = function(c, d) {
                return a().Iframe.prototype.restyle.apply(this, [c, d])
            }
            ;
            b.prototype.send = function(c, d, e, f) {
                return a().Iframe.prototype.send.apply(this, [c, d, e, f])
            }
            ;
            b.prototype.setParam = function(c, d) {
                a().Iframe.prototype.setParam.apply(this, [c, d])
            }
            ;
            b.prototype.setSiteEl = function(c) {
                a().Iframe.prototype.setSiteEl.apply(this, [c])
            }
            ;
            b.prototype.unregister = function(c, d) {
                a().Iframe.prototype.unregister.apply(this, [c, d])
            }
            ;
            return b
        }
        ;function qf(a, b) {
            b = void 0 === b ? new Set : b;
            if (b.has(a))
                return "(Recursive reference)";
            switch (typeof a) {
            case "object":
                if (a) {
                    var c = Object.getPrototypeOf(a);
                    switch (c) {
                    case Map.prototype:
                    case Set.prototype:
                    case Array.prototype:
                        b.add(a);
                        var d = "[" + Array.from(a, function(e) {
                            return qf(e, b)
                        }).join(", ") + "]";
                        b.delete(a);
                        c !== Array.prototype && (d = rf(c.constructor) + "(" + d + ")");
                        return d;
                    case Object.prototype:
                        return b.add(a),
                        c = "{" + Object.entries(a).map(function(e) {
                            var f = ha(e);
                            e = f.next().value;
                            f = f.next().value;
                            return e + ": " + qf(f, b)
                        }).join(", ") + "}",
                        b.delete(a),
                        c;
                    default:
                        return d = "Object",
                        c && c.constructor && (d = rf(c.constructor)),
                        "function" === typeof a.toString && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
                    }
                }
                break;
            case "function":
                return "function " + rf(a);
            case "number":
                if (!Number.isFinite(a))
                    return String(a);
                break;
            case "bigint":
                return a.toString(10) + "n";
            case "symbol":
                return a.toString()
            }
            return JSON.stringify(a)
        }
        function rf(a) {
            var b = a.name;
            b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
            return b
        }
        ;function sf(a) {
            var b = tf
              , c = uf;
            uf = void 0;
            var d = [];
            b = b(a, d);
            !b && d && (a = "Expected exists, got " + qf(a),
            d.push(a));
            b || vf.apply(null, [void 0, c, "Guard exists failed:"].concat(ia(d.reverse())))
        }
        var tf = wf(function(a) {
            return null !== a && void 0 !== a
        });
        function wf(a) {
            a.Om = function() {
                return "exists"
            }
            ;
            return a
        }
        var uf = void 0;
        function vf() {
            throw Error(pa.apply(0, arguments).map(function(a) {
                return "function" === typeof a ? a() : a
            }).filter(function(a) {
                return a
            }).join("\n").trim().replace(/:$/, ""));
        }
        ;var xf = function() {
            this.Bb = [];
            this.oi = this.rk = this.lk = !1
        };
        xf.prototype.lb = function(a) {
            this.oi = !0;
            return this.Bb.length ? yf(this, this.Bb[0], a) : void 0
        }
        ;
        var yf = function(a, b, c) {
            c = void 0 === c ? function(d) {
                return new d
            }
            : c;
            if (!b.Ve)
                return b.instance;
            c = c(b.Ve);
            a.rk && (delete b.Ve,
            b.instance = c);
            return c
        }
          , zf = function() {
            xf.apply(this, arguments)
        };
        n(zf, xf);
        var Bf = function(a) {
            var b = Af.ni;
            w(b.lk || !b.oi, "Cannot register new delegates after instantiation.");
            var c = a.priority
              , d = ~Ua(b.Bb, function(f) {
                return f.priority < c ? -1 : 1
            })
              , e = 0 < d ? b.Bb[d - 1] : null;
            e && e.priority <= c && w(!1, "two delegates registered with same priority (%s): %s and %s", c, e.Ve || e.instance, a.Ve || a.instance);
            b.Bb.splice(d, 0, a)
        };
        var Af = new function() {
            var a = this;
            this.ni = new zf;
            this.instance = new pf(function() {
                var b = a.ni.lb();
                sf(b);
                return b()
            }
            )
        }
        ;
        Bf({
            instance: function() {
                var a = window.gapi;
                sf(a);
                a = a.iframes;
                sf(a);
                return a
            },
            priority: 1
        });
        var Cf = {
            height: !0,
            width: !0
        }
          , Df = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i
          , Ef = function(a) {
            "number" === typeof a && (a = String(a) + "px");
            return a
        };
        var Ff = function(a, b) {
            this.wl = 100;
            this.yk = a;
            this.Sl = b;
            this.Af = 0;
            this.ff = null
        };
        Ff.prototype.get = function() {
            if (0 < this.Af) {
                this.Af--;
                var a = this.ff;
                this.ff = a.next;
                a.next = null
            } else
                a = this.yk();
            return a
        }
        ;
        Ff.prototype.put = function(a) {
            this.Sl(a);
            this.Af < this.wl && (this.Af++,
            a.next = this.ff,
            this.ff = a)
        }
        ;
        var Gf, Hf = function() {
            var a = p.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !A("Presto") && (a = function() {
                var e = ad(document, "IFRAME");
                e.style.display = "none";
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.close();
                var g = "callImmediate" + Math.random()
                  , h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = u(function(l) {
                    if (("*" == h || l.origin == h) && l.data == g)
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
            if ("undefined" !== typeof a && !Vb()) {
                var b = new a
                  , c = {}
                  , d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.cb;
                        c.cb = null;
                        e()
                    }
                }
                ;
                return function(e) {
                    d.next = {
                        cb: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return function(e) {
                p.setTimeout(e, 0)
            }
        };
        function If(a) {
            p.setTimeout(function() {
                throw a;
            }, 0)
        }
        ;var Jf = function() {
            this.Zf = this.Zc = null
        };
        Jf.prototype.add = function(a, b) {
            var c = Kf.get();
            c.set(a, b);
            this.Zf ? this.Zf.next = c : (w(!this.Zc),
            this.Zc = c);
            this.Zf = c
        }
        ;
        Jf.prototype.remove = function() {
            var a = null;
            this.Zc && (a = this.Zc,
            this.Zc = this.Zc.next,
            this.Zc || (this.Zf = null),
            a.next = null);
            return a
        }
        ;
        var Kf = new Ff(function() {
            return new Lf
        }
        ,function(a) {
            return a.reset()
        }
        )
          , Lf = function() {
            this.next = this.scope = this.Zd = null
        };
        Lf.prototype.set = function(a, b) {
            this.Zd = a;
            this.scope = b;
            this.next = null
        }
        ;
        Lf.prototype.reset = function() {
            this.next = this.scope = this.Zd = null
        }
        ;
        var Mf = p.console && p.console.createTask ? p.console.createTask.bind(p.console) : void 0
          , Nf = Mf ? Symbol("consoleTask") : void 0;
        function Of(a, b) {
            function c() {
                var e = pa.apply(0, arguments)
                  , f = this;
                return d.run(function() {
                    return a.call.apply(a, [f].concat(ia(e)))
                })
            }
            b = void 0 === b ? "anonymous" : b;
            if (!Mf || a[Fa(Nf)])
                return a;
            var d = Mf(a.name || b);
            c[Fa(Nf)] = d;
            return c
        }
        ;var Pf, Qf = !1, Rf = new Jf, Tf = function(a, b) {
            Pf || Sf();
            Qf || (Pf(),
            Qf = !0);
            a = Of(a, "goog.async.run");
            Rf.add(a, b)
        }, Sf = function() {
            if (p.Promise && p.Promise.resolve) {
                var a = p.Promise.resolve(void 0);
                Pf = function() {
                    a.then(Uf)
                }
            } else
                Pf = function() {
                    var b = Uf;
                    "function" !== typeof p.setImmediate || p.Window && p.Window.prototype && (Ub() || !A("Edge")) && p.Window.prototype.setImmediate == p.setImmediate ? (Gf || (Gf = Hf()),
                    Gf(b)) : p.setImmediate(b)
                }
        }, Uf = function() {
            for (var a; a = Rf.remove(); ) {
                try {
                    a.Zd.call(a.scope)
                } catch (b) {
                    If(b)
                }
                Kf.put(a)
            }
            Qf = !1
        };
        var Vf = function(a) {
            if (!a)
                return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        };
        var E = function(a, b) {
            this.Ba = 0;
            this.Ua = void 0;
            this.hd = this.Wb = this.Ha = null;
            this.af = this.Cg = !1;
            if (a != Oc)
                try {
                    var c = this;
                    a.call(b, function(d) {
                        Wf(c, 2, d)
                    }, function(d) {
                        if (!(d instanceof Xf))
                            try {
                                if (d instanceof Error)
                                    throw d;
                                throw Error("Promise rejected.");
                            } catch (e) {}
                        Wf(c, 3, d)
                    })
                } catch (d) {
                    Wf(this, 3, d)
                }
        }
          , Yf = function() {
            this.next = this.context = this.xd = this.Sc = this.child = null;
            this.Rd = !1
        };
        Yf.prototype.reset = function() {
            this.context = this.xd = this.Sc = this.child = null;
            this.Rd = !1
        }
        ;
        var Zf = new Ff(function() {
            return new Yf
        }
        ,function(a) {
            a.reset()
        }
        )
          , $f = function(a, b, c) {
            var d = Zf.get();
            d.Sc = a;
            d.xd = b;
            d.context = c;
            return d
        }
          , F = function(a) {
            if (a instanceof E)
                return a;
            var b = new E(Oc);
            Wf(b, 2, a);
            return b
        }
          , G = function(a) {
            return new E(function(b, c) {
                c(a)
            }
            )
        }
          , bg = function(a, b, c) {
            ag(a, b, c, null) || Tf(xa(b, a))
        }
          , cg = function(a) {
            return new E(function(b, c) {
                var d = a.length
                  , e = [];
                if (d)
                    for (var f = function(m, q) {
                        d--;
                        e[m] = q;
                        0 == d && b(e)
                    }, g = function(m) {
                        c(m)
                    }, h = 0, l; h < a.length; h++)
                        l = a[h],
                        bg(l, xa(f, h), g);
                else
                    b(e)
            }
            )
        }
          , dg = function(a) {
            return new E(function(b) {
                var c = a.length
                  , d = [];
                if (c)
                    for (var e = function(h, l, m) {
                        c--;
                        d[h] = l ? {
                            zi: !0,
                            value: m
                        } : {
                            zi: !1,
                            reason: m
                        };
                        0 == c && b(d)
                    }, f = 0, g; f < a.length; f++)
                        g = a[f],
                        bg(g, xa(e, f, !0), xa(e, f, !1));
                else
                    b(d)
            }
            )
        };
        E.prototype.then = function(a, b, c) {
            null != a && Ja(a, "opt_onFulfilled should be a function.");
            null != b && Ja(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
            return eg(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
        }
        ;
        E.prototype.$goog_Thenable = !0;
        E.prototype.Cc = function(a, b) {
            a = $f(a, a, b);
            a.Rd = !0;
            fg(this, a);
            return this
        }
        ;
        E.prototype.l = function(a, b) {
            return eg(this, null, a, b)
        }
        ;
        E.prototype.catch = E.prototype.l;
        E.prototype.cancel = function(a) {
            if (0 == this.Ba) {
                var b = new Xf(a);
                Tf(function() {
                    gg(this, b)
                }, this)
            }
        }
        ;
        var gg = function(a, b) {
            if (0 == a.Ba)
                if (a.Ha) {
                    var c = a.Ha;
                    if (c.Wb) {
                        for (var d = 0, e = null, f = null, g = c.Wb; g && (g.Rd || (d++,
                        g.child == a && (e = g),
                        !(e && 1 < d))); g = g.next)
                            e || (f = g);
                        e && (0 == c.Ba && 1 == d ? gg(c, b) : (f ? (d = f,
                        w(c.Wb),
                        w(null != d),
                        d.next == c.hd && (c.hd = d),
                        d.next = d.next.next) : hg(c),
                        ig(c, e, 3, b)))
                    }
                    a.Ha = null
                } else
                    Wf(a, 3, b)
        }
          , fg = function(a, b) {
            a.Wb || 2 != a.Ba && 3 != a.Ba || jg(a);
            w(null != b.Sc);
            a.hd ? a.hd.next = b : a.Wb = b;
            a.hd = b
        }
          , eg = function(a, b, c, d) {
            b && (b = Of(b, "goog.Promise.then"));
            c && (c = Of(c, "goog.Promise.then"));
            var e = $f(null, null, null);
            e.child = new E(function(f, g) {
                e.Sc = b ? function(h) {
                    try {
                        var l = b.call(d, h);
                        f(l)
                    } catch (m) {
                        g(m)
                    }
                }
                : f;
                e.xd = c ? function(h) {
                    try {
                        var l = c.call(d, h);
                        void 0 === l && h instanceof Xf ? g(h) : f(l)
                    } catch (m) {
                        g(m)
                    }
                }
                : g
            }
            );
            e.child.Ha = a;
            fg(a, e);
            return e.child
        };
        E.prototype.sm = function(a) {
            w(1 == this.Ba);
            this.Ba = 0;
            Wf(this, 2, a)
        }
        ;
        E.prototype.tm = function(a) {
            w(1 == this.Ba);
            this.Ba = 0;
            Wf(this, 3, a)
        }
        ;
        var Wf = function(a, b, c) {
            0 == a.Ba && (a === c && (b = 3,
            c = new TypeError("Promise cannot resolve to itself")),
            a.Ba = 1,
            ag(c, a.sm, a.tm, a) || (a.Ua = c,
            a.Ba = b,
            a.Ha = null,
            jg(a),
            3 != b || c instanceof Xf || kg(a, c)))
        }
          , ag = function(a, b, c, d) {
            if (a instanceof E)
                return null != b && Ja(b, "opt_onFulfilled should be a function."),
                null != c && Ja(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),
                fg(a, $f(b || Oc, c || null, d)),
                !0;
            if (Vf(a))
                return a.then(b, c, d),
                !0;
            if (t(a))
                try {
                    var e = a.then;
                    if ("function" === typeof e)
                        return lg(a, e, b, c, d),
                        !0
                } catch (f) {
                    return c.call(d, f),
                    !0
                }
            return !1
        }
          , lg = function(a, b, c, d, e) {
            var f = !1
              , g = function(l) {
                f || (f = !0,
                c.call(e, l))
            }
              , h = function(l) {
                f || (f = !0,
                d.call(e, l))
            };
            try {
                b.call(a, g, h)
            } catch (l) {
                h(l)
            }
        }
          , jg = function(a) {
            a.Cg || (a.Cg = !0,
            Tf(a.Hk, a))
        }
          , hg = function(a) {
            var b = null;
            a.Wb && (b = a.Wb,
            a.Wb = b.next,
            b.next = null);
            a.Wb || (a.hd = null);
            null != b && w(null != b.Sc);
            return b
        };
        E.prototype.Hk = function() {
            for (var a; a = hg(this); )
                ig(this, a, this.Ba, this.Ua);
            this.Cg = !1
        }
        ;
        var ig = function(a, b, c, d) {
            if (3 == c && b.xd && !b.Rd)
                for (; a && a.af; a = a.Ha)
                    a.af = !1;
            if (b.child)
                b.child.Ha = null,
                mg(b, c, d);
            else
                try {
                    b.Rd ? b.Sc.call(b.context) : mg(b, c, d)
                } catch (e) {
                    ng.call(null, e)
                }
            Zf.put(b)
        }
          , mg = function(a, b, c) {
            2 == b ? a.Sc.call(a.context, c) : a.xd && a.xd.call(a.context, c)
        }
          , kg = function(a, b) {
            a.af = !0;
            Tf(function() {
                a.af && ng.call(null, b)
            })
        }
          , ng = If
          , Xf = function(a) {
            Aa.call(this, a)
        };
        v(Xf, Aa);
        Xf.prototype.name = "cancel";
        var og, pg, qg, rg = /^[\w\.\-]*$/, sg = function(a) {
            return a.getOrigin() === a.getContext().getOrigin()
        }, tg = function() {
            return !0
        }, ug = function(a) {
            for (var b = td(), c = 0; c < a.length; c++)
                b[a[c]] = !0;
            return function(d) {
                return !!b[d.Ib]
            }
        }, wg = function(a, b, c) {
            return function(d) {
                if (!b.isDisposed()) {
                    var e = this.origin
                      , f = b.getOrigin();
                    D(e === f, "Wrong origin " + e + " != " + f);
                    e = this.callback;
                    d = vg(a, d, b);
                    !c && 0 < d.length && cg(d).then(e)
                }
            }
        }, vg = function(a, b, c) {
            a = og[a];
            if (!a)
                return [];
            for (var d = [], e = 0; e < a.length; e++)
                d.push(F(a[e].call(c, b, c)));
            return d
        }, xg = function(a, b, c) {
            D("_default" != a, "Cannot update default api");
            pg[a] = {
                map: b,
                filter: c
            }
        }, yg = function(a, b, c) {
            D("_default" != a, "Cannot update default api");
            id(pg, a, {
                map: {},
                filter: sg
            }).map[b] = c
        }, zg = function(a, b) {
            id(pg, "_default", {
                map: {},
                filter: tg
            }).map[a] = b;
            md(qg.kb, function(c) {
                c.register(a, b, tg)
            })
        }, Ag = function() {
            return qg
        }, Bg = /^https?:\/\/[^\/%\\?#\s]+$/i, Cg = {
            longdesc: !0,
            name: !0,
            src: !0,
            frameborder: !0,
            marginwidth: !0,
            marginheight: !0,
            scrolling: !0,
            align: !0,
            height: !0,
            width: !0,
            id: !0,
            "class": !0,
            title: !0,
            tabindex: !0,
            hspace: !0,
            vspace: !0,
            allowtransparency: !0
        };
        var Dg = function(a) {
            this.i = a || {}
        };
        Dg.prototype.value = function() {
            return this.i
        }
        ;
        Dg.prototype.getIframe = function() {
            return this.i.iframe
        }
        ;
        var Eg = function(a, b) {
            a.i.role = b;
            return a
        }
          , Fg = function(a, b) {
            a.i.data = b;
            return a
        };
        Dg.prototype.ac = function(a) {
            this.i.setRpcReady = a;
            return this
        }
        ;
        var Gg = function(a) {
            return a.i.setRpcReady
        };
        Dg.prototype.Wc = function(a) {
            this.i.rpctoken = a;
            return this
        }
        ;
        var Hg = function(a) {
            return a.i.rpctoken
        }
          , Ig = function(a) {
            a.i.selfConnect = !0;
            return a
        };
        var Jg = function(a) {
            this.i = a
        };
        Jg.prototype.value = function() {
            return this.i
        }
        ;
        Jg.prototype.Kj = function(a) {
            this.i.style = a
        }
        ;
        Jg.prototype.getStyle = function() {
            return this.i.style
        }
        ;
        var Kg = function(a, b) {
            a.i.onload = b
        };
        var Lg = function(a) {
            this.i = a || {}
        };
        Lg.prototype.value = function() {
            return this.i
        }
        ;
        var Ng = function(a) {
            var b = new Mg;
            b.i.role = a;
            return b
        }
          , Og = function(a, b) {
            a.i.handler = b;
            return a
        }
          , Pg = function(a, b) {
            a.i.filter = b;
            return a
        };
        Lg.prototype.Be = function(a) {
            this.i.apis = a;
            return this
        }
        ;
        var Qg = function(a) {
            this.i = a || {}
        };
        k = Qg.prototype;
        k.value = function() {
            return this.i
        }
        ;
        k.setUrl = function(a) {
            this.i.url = a;
            return this
        }
        ;
        k.getUrl = function() {
            return this.i.url
        }
        ;
        k.Kj = function(a) {
            this.i.style = a
        }
        ;
        k.getStyle = function() {
            return this.i.style
        }
        ;
        k.getId = function() {
            return this.i.id
        }
        ;
        k.Wc = function(a) {
            this.i.rpctoken = a;
            return this
        }
        ;
        var Rg = function(a, b) {
            a.i.messageHandlers = b;
            return a
        }
          , Sg = function(a, b) {
            a.i.messageHandlersFilter = b;
            return a
        };
        Qg.prototype.Be = function(a) {
            this.i.apis = a;
            return this
        }
        ;
        var Tg = function(a, b) {
            a.i.onClose = b
        };
        Qg.prototype.getContext = function() {
            return this.i.context
        }
        ;
        var Ug = function(a) {
            a.i.attributes = a.i.attributes || {};
            return new Jg(a.i.attributes)
        }
          , Vg = function(a, b) {
            a.i.controllerData = b
        }
          , Wg = function(a) {
            return (a = a.i.timeout) ? a : null
        };
        var Xg = function() {
            Dg.apply(this, arguments)
        };
        n(Xg, Dg);
        var Mg = function() {
            Lg.apply(this, arguments)
        };
        n(Mg, Lg);
        var Yg = function() {
            Qg.apply(this, arguments)
        };
        n(Yg, Qg);
        var H = function(a) {
            Yg.call(this, a)
        };
        n(H, Yg);
        var Zg = function(a, b) {
            a.i.frameName = b;
            return a
        };
        H.prototype.getFrameName = function() {
            return this.i.frameName
        }
        ;
        var $g = function(a, b) {
            a.i.rpcAddr = b;
            return a
        };
        H.prototype.ob = function() {
            return this.i.rpcAddr
        }
        ;
        var ah = function(a, b) {
            a.i.retAddr = b;
            return a
        };
        H.prototype.Fb = function() {
            return this.i.retAddr
        }
        ;
        var bh = function(a, b) {
            a.i.origin = b;
            return a
        };
        H.prototype.getOrigin = function() {
            return this.i.origin
        }
        ;
        H.prototype.ac = function(a) {
            this.i.setRpcReady = a;
            return this
        }
        ;
        var ch = function(a, b) {
            a.i.context = b
        }
          , dh = function(a, b) {
            a.i._rpcReadyFn = b
        };
        H.prototype.getIframeEl = function() {
            return this.i.iframeEl
        }
        ;
        var eh = function(a, b, c) {
            var d = a.ob()
              , e = b.Fb();
            ah($g(c, a.Fb() + "/" + b.ob()), e + "/" + d);
            bh(Zg(c, b.getFrameName()), b.getOrigin())
        };
        var gh = function(a) {
            this.resolve = this.reject = null;
            this.promise = new E(u(function(b, c) {
                this.resolve = b;
                this.reject = c
            }, this));
            a && (this.promise = fh(this.promise, a))
        }
          , fh = function(a, b) {
            return a.then(function(c) {
                try {
                    b(c)
                } catch (d) {}
                return c
            })
        };
        var hh = function() {
            this.vb = window.console
        };
        hh.prototype.log = function(a) {
            this.vb && this.vb.log && this.vb.log(a)
        }
        ;
        hh.prototype.error = function(a) {
            this.vb && (this.vb.error ? this.vb.error(a) : this.vb.log && this.vb.log(a))
        }
        ;
        hh.prototype.warn = function(a) {
            this.vb && (this.vb.warn ? this.vb.warn(a) : this.vb.log && this.vb.log(a))
        }
        ;
        hh.prototype.debug = function() {}
        ;
        var ih = new hh;
        var qh = function() {
            this.He = {
                Aj: jh ? "../" + jh : null,
                Bk: kh,
                Ei: lh,
                Pm: mh,
                getToken: nh,
                Qm: oh
            };
            this.ub = C;
            this.uj = this.Ak;
            this.Lk = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
            if (this.He.Aj) {
                this.ub = this.He.Ei(this.ub, this.He.Aj);
                var a = this.ub.document
                  , b = a.createElement("script");
                b.setAttribute("type", "text/javascript");
                b.text = "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
                a.body.appendChild(b);
                this.uj = this.ub.doPostMsg
            }
            this.Ih = {};
            this.Sh = {};
            a = u(this.Vk, this);
            Kd(this.ub, "message", a);
            id(Qd, "RPMQ", []).push(a);
            this.ub != this.ub.parent && ph(this, this.ub.parent, this.Yi(this.ub.name), "*")
        };
        qh.prototype.Yi = function(a) {
            return '{"h":"' + escape(a) + '"}'
        }
        ;
        var rh = function(a) {
            var b = null;
            0 === a.indexOf('{"h":"') && a.indexOf('"}') === a.length - 2 && (b = unescape(a.substring(6, a.length - 2)));
            return b
        }
          , sh = function(a) {
            if (!/^\s*{/.test(a))
                return !1;
            a = we(a);
            return null !== a && "object" === typeof a && !!a.g
        };
        qh.prototype.Vk = function(a) {
            var b = String(a.data);
            ih.debug("gapix.rpc.receive(" + mh + "): " + (!b || 512 >= b.length ? b : b.substr(0, 512) + "... (" + b.length + " bytes)"));
            var c = 0 !== b.indexOf("!_");
            c || (b = b.substring(2));
            var d = sh(b);
            if (!c && !d) {
                if (!d && (c = rh(b))) {
                    if (this.Ih[c])
                        this.Ih[c]();
                    else
                        this.Sh[c] = 1;
                    return
                }
                var e = a.origin
                  , f = this.He.Bk;
                this.Lk ? C.setTimeout(function() {
                    f(b, e)
                }, 0) : f(b, e)
            }
        }
        ;
        qh.prototype.setup = function(a, b) {
            ".." === a || this.Sh[a] ? (b(),
            delete this.Sh[a]) : this.Ih[a] = b
        }
        ;
        var ph = function(a, b, c, d) {
            var e = sh(c) ? "" : "!_";
            ih.debug("gapix.rpc.send(" + mh + "): " + (!c || 512 >= c.length ? c : c.substr(0, 512) + "... (" + c.length + " bytes)"));
            a.uj(b, e + c, d)
        };
        qh.prototype.Ak = function(a, b, c) {
            a.postMessage(b, c)
        }
        ;
        qh.prototype.send = function(a, b, c) {
            (a = this.He.Ei(this.ub, a)) && !a.closed && ph(this, a, b, c)
        }
        ;
        var th = 0
          , uh = []
          , vh = {}
          , wh = {}
          , xh = C.location.href
          , yh = wd(xh, "rpctoken")
          , zh = wd(xh, "parent") || gd.referrer
          , jh = wd(xh, "rly")
          , mh = jh || (C !== C.top || C.opener) && C.name || ".."
          , Ah = null
          , Bh = {}
          , Ch = function() {}
          , Dh = {
            send: Ch,
            setup: Ch,
            Yi: Ch
        }
          , lh = function(a, b) {
            "/" == b.charAt(0) && (b = b.substring(1),
            a = C.top);
            if (0 === b.length)
                return a;
            for (b = b.split("/"); b.length; ) {
                var c = b.shift();
                "{" == c.charAt(0) && "}" == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
                if (".." === c)
                    a = a == a.parent ? a.opener : a.parent;
                else if (".." !== c && a.frames[c]) {
                    if (a = a.frames[c],
                    !("postMessage"in a))
                        throw Error("Not a window");
                } else
                    return null
            }
            return a
        }
          , nh = function(a) {
            return (a = vh[a]) && a.token
        }
          , Eh = function(a) {
            if (a.f in {})
                return !1;
            var b = a.t
              , c = vh[a.r];
            a = a.origin;
            return c && (c.token === b || !c.token && !b) && (a === c.origin || "*" === c.origin)
        }
          , Fh = function(a) {
            var b = a.id.split("/")
              , c = b[b.length - 1]
              , d = a.origin;
            return function(e) {
                var f = e.origin;
                return e.f == c && (d == f || "*" == d)
            }
        }
          , Ih = function(a, b, c) {
            a = Gh(a);
            wh[a.name] = {
                Zd: b,
                le: a.le,
                Ca: c || Eh
            };
            Hh()
        }
          , Jh = {}
          , Kh = function(a, b) {
            (a = Jh["_" + a]) && a[1](this) && a[0].call(this, b)
        }
          , Mh = function(a) {
            var b = a.c;
            if (!b)
                return Ch;
            var c = a.r
              , d = a.g ? "legacy__" : "";
            return function() {
                var e = [].slice.call(arguments, 0);
                e.unshift(c, d + "__cb", null, b);
                Lh.apply(null, e)
            }
        }
          , oh = function(a) {
            Ah = a
        }
          , Oh = function(a) {
            Bh[a] || (Bh[a] = C.setTimeout(function() {
                Bh[a] = !1;
                Nh(a)
            }, 0))
        }
          , Nh = function(a) {
            var b = vh[a];
            if (b && b.ready) {
                var c = b.rh;
                for (b.rh = []; c.length; )
                    Dh.send(a, xe(c.shift()), b.origin)
            }
        }
          , Gh = function(a) {
            return 0 === a.indexOf("legacy__") ? {
                name: a.substring(8),
                le: !0
            } : {
                name: a,
                le: !1
            }
        }
          , Hh = function() {
            for (var a = za("rpc/residenceSec") || 60, b = (new Date).getTime() / 1E3, c, d = 0; c = uh[d]; ++d) {
                var e = c.rpc;
                if (!e || 0 < a && b - c.timestamp > a)
                    uh.splice(d, 1),
                    --d;
                else {
                    var f = e.s
                      , g = wh[f] || wh["*"];
                    if (g)
                        if (uh.splice(d, 1),
                        --d,
                        e.origin = c.origin,
                        c = Mh(e),
                        e.callback = c,
                        g.Ca(e)) {
                            if ("__cb" !== f && !!g.le != !!e.g)
                                break;
                            e = g.Zd.apply(e, e.a);
                            void 0 !== e && c(e)
                        } else
                            ih.debug("gapix.rpc.rejected(" + mh + "): " + f)
                }
            }
        }
          , Ph = function(a, b, c) {
            uh.push({
                rpc: a,
                origin: b,
                timestamp: (new Date).getTime() / 1E3
            });
            c || Hh()
        }
          , kh = function(a, b) {
            a = we(a);
            Ph(a, b, !1)
        }
          , Qh = function(a) {
            for (; a.length; )
                Ph(a.shift(), this.origin, !0);
            Hh()
        }
          , Rh = function(a) {
            var b = !1;
            a = a.split("|");
            var c = a[0];
            0 <= c.indexOf("/") && (b = !0);
            return {
                id: c,
                origin: a[1] || "*",
                Qg: b
            }
        }
          , Sh = function(a, b, c, d) {
            var e = Rh(a);
            d && (C.frames[e.id] = C.frames[e.id] || d);
            a = e.id;
            if (!vh.hasOwnProperty(a)) {
                c = c || null;
                d = e.origin;
                if (".." === a)
                    d = mf(zh),
                    c = c || yh;
                else if (!e.Qg) {
                    var f = gd.getElementById(a);
                    f && (f = f.src,
                    d = mf(f),
                    c = c || wd(f, "rpctoken"))
                }
                "*" === e.origin && d || (d = e.origin);
                vh[a] = {
                    token: c,
                    rh: [],
                    origin: d,
                    am: b,
                    yj: function() {
                        var g = a;
                        vh[g].ready = 1;
                        Nh(g)
                    }
                };
                Dh.setup(a, vh[a].yj)
            }
            return vh[a].yj
        }
          , Lh = function(a, b, c, d) {
            a = a || "..";
            Sh(a);
            a = a.split("|", 1)[0];
            var e = b
              , f = [].slice.call(arguments, 3)
              , g = c
              , h = mh
              , l = yh
              , m = vh[a]
              , q = h
              , y = Rh(a);
            if (m && ".." !== a) {
                if (y.Qg) {
                    if (!(l = vh[a].am)) {
                        l = Ah ? Ah.substring(1).split("/") : [mh];
                        q = l.length - 1;
                        for (var B = C.parent; B !== C.top; ) {
                            var S = B.parent;
                            if (!q--) {
                                for (var Ca = null, Fc = S.frames.length, ne = 0; ne < Fc; ++ne)
                                    S.frames[ne] == B && (Ca = ne);
                                l.unshift("{" + Ca + "}")
                            }
                            B = S
                        }
                        l = "/" + l.join("/")
                    }
                    q = l
                } else
                    q = h = "..";
                l = m.token
            }
            g && y ? (m = Eh,
            y.Qg && (m = Fh(y)),
            Jh["_" + ++th] = [g, m],
            g = th) : g = null;
            f = {
                s: e,
                f: h,
                r: q,
                t: l,
                c: g,
                a: f
            };
            e = Gh(e);
            f.s = e.name;
            f.g = e.le;
            vh[a].rh.push(f);
            Oh(a)
        };
        if ("function" === typeof C.postMessage || "object" === typeof C.postMessage)
            Dh = new qh,
            Ih("__cb", Kh, function() {
                return !0
            }),
            Ih("_processBatch", Qh, function() {
                return !0
            }),
            Sh("..");
        !A("Android") || Wb();
        Wb();
        var Th = A("Safari") && !(Wb() || (Ub() ? 0 : A("Coast")) || (Ub() ? 0 : A("Opera")) || (Ub() ? 0 : A("Edge")) || (Ub() ? Tb("Microsoft Edge") : A("Edg/")) || (Ub() ? Tb("Opera") : A("OPR")) || A("Firefox") || A("FxiOS") || A("Silk") || A("Android")) && !(vc() || A("iPad") || A("iPod"));
        var Vh = function(a, b, c) {
            a.setTimeout(function() {
                b.closed || 5 == c ? Uh(b) : (b.close(),
                c++,
                Vh(a, b, c))
            }, 1E3)
        }
          , Uh = function(a) {
            if (!a.closed && a.document && a.document.body)
                if (a = a.document.body,
                w(null != a, "goog.dom.setTextContent expects a non-null value for node"),
                "textContent"in a)
                    a.textContent = "Please close this window.";
                else if (3 == a.nodeType)
                    a.data = "Please close this window.";
                else if (a.firstChild && 3 == a.firstChild.nodeType) {
                    for (; a.lastChild != a.firstChild; )
                        a.removeChild(w(a.lastChild));
                    a.firstChild.data = "Please close this window."
                } else {
                    cd(a);
                    var b = ed(a);
                    a.appendChild(b.createTextNode("Please close this window."))
                }
        };
        var I = function(a, b, c, d) {
            this.Cb = !1;
            this.Ue = a;
            this.yh = b;
            this.qd = c;
            this.Sa = d;
            this.Bj = this.Sa.Fb();
            this.Ib = this.Sa.getOrigin();
            this.ll = this.Sa.getIframeEl();
            this.Pj = this.Sa.i.where;
            this.Bb = [];
            this.applyIframesApi("_default");
            a = this.Sa.i.apis || [];
            for (b = 0; b < a.length; b++)
                this.applyIframesApi(a[b]);
            this.Ue.kb[c] = this
        };
        k = I.prototype;
        k.isDisposed = function() {
            return this.Cb
        }
        ;
        k.Ic = function() {
            if (!this.isDisposed()) {
                for (var a = 0; a < this.Bb.length; a++)
                    this.unregister(this.Bb[a]);
                delete qg.kb[this.getFrameName()];
                this.Cb = !0
            }
        }
        ;
        k.getContext = function() {
            return this.Ue
        }
        ;
        k.getOptions = function() {
            return this.Sa
        }
        ;
        k.ob = function() {
            return this.yh
        }
        ;
        k.Fb = function() {
            return this.Bj
        }
        ;
        k.getFrameName = function() {
            return this.qd
        }
        ;
        k.getIframeEl = function() {
            return this.ll
        }
        ;
        k.getSiteEl = function() {
            return this.Pj
        }
        ;
        k.setSiteEl = function(a) {
            this.Pj = a
        }
        ;
        k.ac = function() {
            (0,
            this.Sa.i._rpcReadyFn)()
        }
        ;
        k.setParam = function(a, b) {
            this.Sa.value()[a] = b
        }
        ;
        k.getParam = function(a) {
            return this.Sa.value()[a]
        }
        ;
        k.Ci = function() {
            return this.Sa.value()
        }
        ;
        k.getId = function() {
            return this.Sa.getId()
        }
        ;
        k.getOrigin = function() {
            return this.Ib
        }
        ;
        var Wh = function(a, b) {
            var c = a.Ue.getFrameName();
            return a.qd + ":" + c + ":" + b
        };
        k = I.prototype;
        k.register = function(a, b, c) {
            D(!this.isDisposed(), "Cannot register handler on disposed iframe " + a);
            D((c || sg)(this), "Rejecting untrusted message " + a);
            c = Wh(this, a);
            1 == id(og, c, []).push(b) && (this.Bb.push(a),
            Ih(c, wg(c, this, "_g_wasClosed" === a)))
        }
        ;
        k.unregister = function(a, b) {
            var c = Wh(this, a)
              , d = og[c];
            d && (b ? (b = kd.call(d, b),
            0 <= b && d.splice(b, 1)) : d.splice(0, d.length),
            0 == d.length && (b = kd.call(this.Bb, a),
            0 <= b && this.Bb.splice(b, 1),
            delete wh[Gh(c).name]))
        }
        ;
        k.Qk = function() {
            return this.Bb
        }
        ;
        k.applyIframesApi = function(a) {
            this.fg = this.fg || [];
            if (!(0 <= kd.call(this.fg, a))) {
                this.fg.push(a);
                a = pg[a] || {
                    map: {}
                };
                for (var b in a.map)
                    ld(a.map, b) && this.register(b, a.map[b], a.filter)
            }
        }
        ;
        k.getWindow = function() {
            if (!sg(this))
                return null;
            var a = this.Sa.i._popupWindow;
            if (a)
                return a;
            var b = this.yh.split("/");
            a = this.getContext().getWindow();
            for (var c = 0; c < b.length && a; c++) {
                var d = b[c];
                a = ".." === d ? a == a.parent ? a.opener : a.parent : a.frames[d]
            }
            return a
        }
        ;
        var Xh = function(a) {
            var b = {};
            if (a)
                for (var c in a)
                    ld(a, c) && ld(Cf, c) && Df.test(a[c]) && (b[c] = a[c]);
            return b
        };
        k = I.prototype;
        k.close = function(a, b) {
            return J(this, "_g_close", a, b)
        }
        ;
        k.restyle = function(a, b) {
            return J(this, "_g_restyle", a, b)
        }
        ;
        k.Wl = function(a, b) {
            return J(this, "_g_restyleDone", a, b)
        }
        ;
        k.sk = function(a) {
            return this.getContext().closeSelf(a, void 0, this)
        }
        ;
        k.Yl = function(a) {
            if (a && "object" === typeof a)
                return this.getContext().restyleSelf(a, void 0, this)
        }
        ;
        k.Zl = function(a) {
            var b = this.Sa.i.onRestyle;
            b && b.call(this, a, this);
            a = a && "object" === typeof a ? Xh(a) : {};
            (b = this.getIframeEl()) && a && "object" === typeof a && (ld(a, "height") && (a.height = Ef(a.height)),
            ld(a, "width") && (a.width = Ef(a.width)),
            ud(a, b.style))
        }
        ;
        k.tk = function(a) {
            var b = this.Sa.i.onClose;
            b && b.call(this, a, this);
            if (b = this.getOptions().i._popupWindow) {
                var c = this.getContext().getWindow().document.getElementById(this.getId());
                c && c.parentNode && c.parentNode.removeChild(c);
                c = this.getContext().getWindow();
                Dc && Th && c ? (c.focus(),
                Vh(c, b, 0)) : (b.close(),
                Uh(b))
            }
            b || (b = this.getIframeEl()) && b.parentNode && b.parentNode.removeChild(b);
            if (b = this.Sa.i.controller)
                c = {},
                c.frameName = this.getFrameName(),
                J(b, "_g_disposeControl", c);
            b = Wh(this, "_g_wasClosed");
            vg(b, a, this)
        }
        ;
        k.registerWasRestyled = function(a, b) {
            this.register("_g_wasRestyled", a, b)
        }
        ;
        k.registerWasClosed = function(a, b) {
            this.register("_g_wasClosed", a, b)
        }
        ;
        k.zm = function() {
            delete this.getContext().kb[this.getFrameName()];
            this.getContext().getWindow().setTimeout(u(function() {
                this.Ic()
            }, this), 0)
        }
        ;
        k.send = function(a, b, c, d) {
            D(!this.isDisposed(), "Cannot send message to disposed iframe - " + a);
            D((d || sg)(this), "Wrong target for message " + a);
            c = new gh(c);
            a = this.Ue.getFrameName() + ":" + this.qd + ":" + a;
            Lh(this.yh, a, c.resolve, b);
            return c.promise
        }
        ;
        var J = function(a, b, c, d) {
            return a.send(b, c, d, tg)
        };
        k = I.prototype;
        k.Ml = function(a) {
            return a
        }
        ;
        k.ping = function(a, b) {
            return J(this, "_g_ping", b, a)
        }
        ;
        k.wk = function(a) {
            a = a && "object" === typeof a ? a : {};
            for (var b = a.rpcAddr, c = (this.ob() + "/" + b).split("/"), d = this.getContext().getWindow(), e; (e = c.shift()) && d; )
                d = ".." == e ? d.parent : d.frames[e];
            D(!!d, "Bad rpc address " + b);
            a._window = d;
            a._parentRpcAddr = this.ob();
            a._parentRetAddr = this.Fb();
            this.getContext();
            b = new K(a);
            this.Dl && this.Dl(b, a.controllerData);
            this.ug = this.ug || [];
            this.ug.push(b, a.controllerData)
        }
        ;
        k.Ck = function(a) {
            a = (a || {}).frameName;
            for (var b = this.ug || [], c = 0; c < b.length; c++)
                if (b[c].getFrameName() === a) {
                    a = b.splice(c, 1)[0];
                    a.Ic();
                    this.El && this.El(a);
                    return
                }
            D(!1, "Unknown contolled iframe to dispose - " + a)
        }
        ;
        k.uk = function(a) {
            var b = new H(a);
            a = new Xg(b.value());
            if (a.i.selfConnect)
                var c = this;
            else
                (D(Bg.test(b.getOrigin()), "Illegal origin for connected iframe - " + b.getOrigin()),
                c = this.getContext().kb[b.getFrameName()],
                c) ? Gg(b) && (c.ac(),
                J(c, "_g_rpcReady")) : (b = Zg(bh(ah($g(new H, b.ob()), b.Fb()), b.getOrigin()), b.getFrameName()).ac(Gg(b)).Wc(Hg(b)),
                c = Yh(this.getContext(), b.value()));
            b = this.getContext();
            var d = a.i.role;
            a = a.i.data;
            Zh(b);
            d = d || "";
            id(b.sg, d, []).push({
                kf: c,
                data: a
            });
            $h(c, a, b.Xg[d])
        }
        ;
        k.Jj = function(a, b) {
            (new H(b)).i._relayedDepth || (b = {},
            Ig(Eg(new Xg(b), "_opener")),
            J(a, "_g_connect", b))
        }
        ;
        k.qj = function(a) {
            var b = this
              , c = a.i.messageHandlers
              , d = a.i.messageHandlersFilter
              , e = a.i.onClose;
            Tg(Sg(Rg(a, null), null), null);
            return J(this, "_g_open", a.value()).then(function(f) {
                var g = new H(f[0])
                  , h = g.getFrameName();
                f = new H;
                var l = b.Fb()
                  , m = g.Fb();
                ah($g(f, b.ob() + "/" + g.ob()), m + "/" + l);
                Zg(f, h);
                bh(f, g.getOrigin());
                f.Be(g.i.apis);
                f.Wc(Hg(a));
                Rg(f, c);
                Sg(f, d);
                Tg(f, e);
                (g = b.getContext().kb[h]) || (g = Yh(b.getContext(), f.value()));
                return g
            })
        }
        ;
        k.zh = function(a) {
            var b = a.getUrl();
            D(!b || Hd.test(b), "Illegal url for new iframe - " + b);
            var c = Ug(a).value();
            b = {};
            for (var d in c)
                ld(c, d) && ld(Cg, d) && (b[d] = c[d]);
            ld(c, "style") && (d = c.style,
            "object" === typeof d && (b.style = Xh(d)));
            a.value().attributes = b
        }
        ;
        k.Jl = function(a) {
            a = new H(a);
            this.zh(a);
            var b = a.i._relayedDepth || 0;
            a.i._relayedDepth = b + 1;
            a.i.openerIframe = this;
            var c = Hg(a);
            a.Wc(null);
            var d = this;
            return this.getContext().open(a.value()).then(function(e) {
                var f = (new H(e.Ci())).i.apis
                  , g = new H;
                eh(e, d, g);
                0 == b && Eg(new Xg(g.value()), "_opener");
                g.ac(!0);
                g.Wc(c);
                J(e, "_g_connect", g.value());
                g = new H;
                bh(Zg(ah($g(g, e.ob()), e.Bj), e.getFrameName()), e.getOrigin()).Be(f);
                return g.value()
            })
        }
        ;
        k.Xl = function(a) {
            this.getContext().addOnOpenerHandler(function(b) {
                b.send("_g_wasRestyled", a, void 0, tg)
            }, null, tg)
        }
        ;
        var ai = td()
          , bi = td()
          , ci = function(a, b) {
            ai[a] = b
        }
          , di = function(a) {
            return ai[a]
        }
          , ei = function(a, b) {
            vd.load("gapi.iframes.style." + a, b)
        }
          , fi = function(a, b) {
            bi[a] = b
        }
          , gi = function(a) {
            return bi[a]
        };
        var hi = function() {
            function a(h, l) {
                h = window.getComputedStyle(h, "").getPropertyValue(l).match(/^([0-9]+)/);
                return parseInt(h[0], 10)
            }
            for (var b = 0, c = [document.body]; 0 < c.length; ) {
                var d = c.shift()
                  , e = d.childNodes;
                if ("undefined" !== typeof d.style) {
                    var f = d.style.overflowY;
                    f || (f = (f = document.defaultView.getComputedStyle(d, null)) ? f.overflowY : null);
                    if ("visible" != f && "inherit" != f && (f = d.style.height,
                    f || (f = (f = document.defaultView.getComputedStyle(d, null)) ? f.height : ""),
                    0 < f.length && "auto" != f))
                        continue
                }
                for (d = 0; d < e.length; d++) {
                    f = e[d];
                    if ("undefined" !== typeof f.offsetTop && "undefined" !== typeof f.offsetHeight) {
                        var g = f.offsetTop + f.offsetHeight + a(f, "margin-bottom");
                        b = Math.max(b, g)
                    }
                    c.push(f)
                }
            }
            return b + a(document.body, "border-bottom") + a(document.body, "margin-bottom") + a(document.body, "padding-bottom")
        }
          , ii = function() {
            var a = 0;
            self.innerHeight ? a = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && (a = document.body.clientHeight);
            var b = document.body
              , c = document.documentElement;
            if ("CSS1Compat" === document.compatMode && c.scrollHeight)
                return c.scrollHeight !== a ? c.scrollHeight : c.offsetHeight;
            if (0 <= navigator.userAgent.indexOf("AppleWebKit"))
                return hi();
            if (b && c) {
                var d = c.scrollHeight
                  , e = c.offsetHeight;
                c.clientHeight !== e && (d = b.scrollHeight,
                e = b.offsetHeight);
                return d > a ? d > e ? d : e : d < e ? d : e
            }
        };
        var K = function(a) {
            a = a || {};
            this.Cb = !1;
            this.wa = td();
            this.kb = td();
            this.ub = a._window || C;
            this.hb = this.ub.location.href;
            this.sj = (this.eh = ji(this.hb, "parent")) ? ji(this.hb, "pfname") : "";
            this.Pa = this.eh ? ji(this.hb, "_gfid") || ji(this.hb, "id") : "";
            this.qd = Ve(this.Pa, this.sj);
            this.Ib = mf(this.hb);
            if (this.Pa) {
                var b = new H;
                $g(b, a._parentRpcAddr || "..");
                ah(b, a._parentRetAddr || this.Pa);
                bh(b, mf(this.eh || this.hb));
                Zg(b, this.sj);
                this.Ha = Yh(this, b.value())
            } else
                this.Ha = null
        };
        k = K.prototype;
        k.isDisposed = function() {
            return this.Cb
        }
        ;
        k.Ic = function() {
            if (!this.isDisposed()) {
                for (var a = ha(Object.values(this.kb)), b = a.next(); !b.done; b = a.next())
                    b.value.Ic();
                this.Cb = !0
            }
        }
        ;
        k.getFrameName = function() {
            return this.qd
        }
        ;
        k.getOrigin = function() {
            return this.Ib
        }
        ;
        k.getWindow = function() {
            return this.ub
        }
        ;
        k.setGlobalParam = function(a, b) {
            this.wa[a] = b
        }
        ;
        k.getGlobalParam = function(a) {
            return this.wa[a]
        }
        ;
        var Yh = function(a, b) {
            D(!a.isDisposed(), "Cannot attach iframe in disposed context");
            b = new H(b);
            b.ob() || $g(b, b.getId());
            b.Fb() || ah(b, "..");
            b.getOrigin() || bh(b, mf(b.getUrl()));
            b.getFrameName() || Zg(b, Ve(b.getId(), a.qd));
            var c = b.getFrameName();
            if (a.kb[c])
                return a.kb[c];
            var d = b.ob()
              , e = d;
            b.getOrigin() && (e = d + "|" + b.getOrigin());
            var f = b.Fb()
              , g = Hg(b);
            g || (g = (g = b.getIframeEl()) && (g.getAttribute("data-postorigin") || g.src) || b.getUrl(),
            g = wd(g, "rpctoken"));
            dh(b, Sh(e, f, g, b.i._popupWindow));
            e = ((window.gadgets || {}).rpc || {}).setAuthToken;
            g && e && e(d, g);
            var h = new I(a,d,c,b)
              , l = b.i.messageHandlersFilter;
            md(b.i.messageHandlers, function(m, q) {
                h.register(q, m, l)
            });
            Gg(b) && h.ac();
            J(h, "_g_rpcReady");
            return h
        };
        K.prototype.zh = function(a) {
            Zg(a, null);
            var b = a.getId();
            !b || rg.test(b) && !this.getWindow().document.getElementById(b) || (ih.log("Ignoring requested iframe ID - " + b),
            a.i.id = null)
        }
        ;
        var ji = function(a, b) {
            var c = wd(a, b);
            c || (c = we(wd(a, "jcp", ""))[b]);
            return c || ""
        };
        K.prototype.openChild = function(a) {
            D(!this.isDisposed(), "Cannot open iframe in disposed context");
            var b = new H(a);
            ki(this, b);
            var c = b.getFrameName();
            if (c && this.kb[c])
                return this.kb[c];
            this.zh(b);
            c = b.getUrl();
            D(c, "No url for new iframe");
            var d = b.i.queryParams || {};
            d.usegapi = "1";
            b.i.queryParams = d;
            d = this.Gi && this.Gi(c, b);
            d || (d = b.i.where,
            D(!!d, "No location for new iframe"),
            c = cf(c, d, a),
            b.i.iframeEl = c,
            d = c.getAttribute("id"));
            $g(b, d).i.id = d;
            bh(b, mf(b.i.eurl || ""));
            this.Zi && this.Zi(b, b.getIframeEl());
            c = Yh(this, a);
            c.Jj && c.Jj(c, a);
            (a = b.i.onCreate) && a(c);
            b.i.disableRelayOpen || c.applyIframesApi("_open");
            return c
        }
        ;
        var li = function(a, b, c) {
            var d = b.i.canvasUrl;
            if (!d)
                return c;
            D(!b.i.allowPost && !b.i.forcePost, "Post is not supported when using canvas url");
            var e = b.getUrl();
            D(e && mf(e) === a.Ib && mf(d) === a.Ib, "Wrong origin for canvas or hidden url " + d);
            b.setUrl(d);
            b.i.waitForOnload = !0;
            b.i.canvasUrl = null;
            return function(f) {
                var g = f.getWindow()
                  , h = g.location.hash;
                h = bf(e) + (/#/.test(e) ? h.replace(/^#/, "&") : h);
                g.location.replace(h);
                c && c(f)
            }
        }
          , mi = function(a, b, c) {
            var d = b.i.relayOpen;
            if (d) {
                var e = a.getParentIframe();
                d instanceof I ? (e = d,
                b.i.relayOpen = 0) : 0 < Number(d) && (b.i.relayOpen = Number(d) - 1);
                if (e) {
                    D(!!e.qj, "Relaying iframe open is disabled");
                    if (d = b.getStyle())
                        if (d = bi[d])
                            ch(b, a),
                            d(b.value()),
                            ch(b, null);
                    b.i.openerIframe = null;
                    c.resolve(e.qj(b));
                    return !0
                }
            }
            return !1
        }
          , ni = function(a, b, c) {
            var d = b.getStyle();
            if (d)
                if (D(!!di, "Defer style is disabled, when requesting style " + d),
                ai[d])
                    ki(a, b);
                else
                    return ei(d, function() {
                        D(!!ai[d], "Fail to load style - " + d);
                        c.resolve(a.open(b.value()))
                    }),
                    !0;
            return !1
        };
        K.prototype.open = function(a, b) {
            D(!this.isDisposed(), "Cannot open iframe in disposed context");
            var c = new H(a);
            b = li(this, c, b);
            var d = new gh(b);
            (b = c.getUrl()) && c.setUrl(bf(b));
            if (mi(this, c, d) || ni(this, c, d) || mi(this, c, d))
                return d.promise;
            if (null != Wg(c)) {
                var e = setTimeout(function() {
                    g.getIframeEl().src = "about:blank";
                    d.reject({
                        timeout: "Exceeded time limit of :" + Wg(c) + "milliseconds"
                    })
                }, Wg(c))
                  , f = d.resolve;
                d.resolve = function(h) {
                    clearTimeout(e);
                    f(h)
                }
            }
            c.i.waitForOnload && Kg(Ug(c), function() {
                d.resolve(g)
            });
            var g = this.openChild(a);
            c.i.waitForOnload || d.resolve(g);
            return d.promise
        }
        ;
        K.prototype.getParentIframe = function() {
            return this.Ha
        }
        ;
        var oi = function(a, b) {
            var c = a.getParentIframe()
              , d = !0;
            b.filter && (d = b.filter.call(b.kf, b.params));
            return F(d).then(function(e) {
                return e && c ? (b.rj && b.rj.call(a, b.params),
                e = b.sender ? b.sender(b.params) : J(c, b.message, b.params),
                b.ym ? e.then(function() {
                    return !0
                }) : !0) : !1
            })
        };
        k = K.prototype;
        k.closeSelf = function(a, b, c) {
            a = oi(this, {
                sender: function(d) {
                    var e = qg.getParentIframe();
                    md(qg.kb, function(f) {
                        f !== e && J(f, "_g_wasClosed", d)
                    });
                    return J(e, "_g_closeMe", d)
                },
                message: "_g_closeMe",
                params: a,
                kf: c,
                filter: this.getGlobalParam("onCloseSelfFilter")
            });
            b = new gh(b);
            b.resolve(a);
            return b.promise
        }
        ;
        k.restyleSelf = function(a, b, c) {
            a = a || {};
            b = new gh(b);
            b.resolve(oi(this, {
                message: "_g_restyleMe",
                params: a,
                kf: c,
                filter: this.getGlobalParam("onRestyleSelfFilter"),
                ym: !0,
                rj: this.Vj
            }));
            return b.promise
        }
        ;
        k.Vj = function(a) {
            "auto" === a.height && (a.height = ii())
        }
        ;
        k.setCloseSelfFilter = function(a) {
            this.setGlobalParam("onCloseSelfFilter", a)
        }
        ;
        k.setRestyleSelfFilter = function(a) {
            this.setGlobalParam("onRestyleSelfFilter", a)
        }
        ;
        var ki = function(a, b) {
            var c = b.getStyle();
            if (c) {
                b.Kj(null);
                var d = ai[c];
                D(d, "No such style: " + c);
                ch(b, a);
                d(b.value());
                ch(b, null)
            }
        };
        K.prototype.ready = function(a, b, c, d) {
            var e = b || {}
              , f = this.getParentIframe();
            this.addOnOpenerHandler(function(h) {
                md(e, function(l, m) {
                    h.register(m, l, d)
                }, this);
                h !== f && h.send("_ready", g, void 0, d)
            }, void 0, d);
            var g = a || {};
            g.height = g.height || "auto";
            this.Vj(g);
            f && f.send("_ready", g, c, tg)
        }
        ;
        K.prototype.connectIframes = function(a, b) {
            a = new Xg(a);
            var c = new Xg(b)
              , d = Gg(a);
            b = a.getIframe();
            var e = c.getIframe();
            if (e) {
                var f = Hg(a)
                  , g = new H;
                eh(b, e, g);
                Fg(Eg((new Xg(g.value())).Wc(f), a.i.role), a.i.data).ac(d);
                var h = new H;
                eh(e, b, h);
                Fg(Eg((new Xg(h.value())).Wc(f), c.i.role), c.i.data).ac(!0);
                J(b, "_g_connect", g.value(), function() {
                    d || J(e, "_g_connect", h.value())
                });
                d && J(e, "_g_connect", h.value())
            } else
                c = {},
                Fg(Eg(Ig(new Xg(c)), a.i.role), a.i.data),
                J(b, "_g_connect", c)
        }
        ;
        var Zh = function(a) {
            a.sg || (a.sg = td(),
            a.Xg = td())
        };
        K.prototype.addOnConnectHandler = function(a, b, c, d) {
            Zh(this);
            "object" === typeof a ? (b = new Mg(a),
            c = b.i.role || "") : (b = Pg(Og(Ng(a), b).Be(c), d),
            c = a);
            d = this.sg[c] || [];
            a = !1;
            for (var e = 0; e < d.length && !a; e++)
                $h(this.kb[d[e].kf.getFrameName()], d[e].data, [b]),
                a = b.i.runOnce;
            c = id(this.Xg, c, []);
            a || b.i.dontWait || c.push(b)
        }
        ;
        K.prototype.removeOnConnectHandler = function(a, b) {
            a = id(this.Xg, a, []);
            if (b)
                for (var c = !1, d = 0; !c && d < a.length; d++)
                    a[d].i.handler === b && (c = !0,
                    a.splice(d, 1));
            else
                a.splice(0, a.length)
        }
        ;
        var $h = function(a, b, c) {
            c = c || [];
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                if (e && a) {
                    var f = e.i.filter || sg;
                    if (a && f(a)) {
                        f = e.i.apis || [];
                        for (var g = 0; g < f.length; g++)
                            a.applyIframesApi(f[g]);
                        e.i.handler && (0,
                        e.i.handler)(a, b);
                        e.i.runOnce && (c.splice(d, 1),
                        --d)
                    }
                }
            }
        };
        K.prototype.addOnOpenerHandler = function(a, b, c) {
            var d = this.addOnConnectHandler;
            a = Pg(Og(Ng("_opener"), a).Be(b), c);
            a.i.runOnce = !0;
            d.call(this, a.value())
        }
        ;
        K.prototype.Zi = function(a, b) {
            var c = a.i.controller;
            if (c) {
                D(c.Ib === a.getOrigin(), "Wrong controller origin " + this.Ib + " !== " + a.getOrigin());
                var d = a.ob();
                $g(a, c.ob());
                ah(a, c.Fb());
                var e = new H;
                Vg($g(e, d), a.i.controllerData);
                Kd(b, "load", function() {
                    c.send("_g_control", e.value())
                })
            }
        }
        ;
        var pi = function(a, b, c) {
            a = a.getWindow();
            var d = a.document
              , e = c.i.reuseWindow;
            if (e) {
                var f = c.getId();
                if (!f)
                    throw Error("If you provide a reuseWindow, you must also provide an ID");
            } else
                f = Ue(d, c);
            var g = f
              , h = c.i.rpcRelayUrl;
            if (h) {
                h = Gd(gd, h.replace($e, af));
                g = c.i.fragmentParams || {};
                g.rly = f;
                c.i.fragmentParams = g;
                g = c.i.where || d.body;
                D(!!g, "Cannot open window in a page with no body");
                var l = {};
                l.src = h;
                l.style = "display:none;";
                l.id = f;
                l.name = f;
                Ye(d, g, l, f);
                g = f + "_relay"
            }
            b = bf(b);
            var m = We(d, b, f, c.value());
            c.i.eurl = m;
            b = c.i.openAsWindow;
            "string" !== typeof b && (b = void 0);
            c = window.navigator.userAgent || "";
            /Trident|MSIE/i.test(c) && /#/.test(c) && (m = "javascript:window.location.replace(" + C.JSON.stringify(m).replace(/#/g, "\\x23") + ")");
            if (e) {
                var q = e;
                setTimeout(function() {
                    q.location.replace(m)
                })
            } else
                q = Uc(m, a, g, b);
            return {
                id: f,
                dk: q
            }
        };
        K.prototype.Gi = function(a, b) {
            if (b.i.openAsWindow) {
                a = pi(this, a, b);
                var c = a.id;
                D(!!a.dk, "Open popup window failed");
                b.i._popupWindow = a.dk
            }
            return c
        }
        ;
        og = td();
        pg = td();
        qg = new K;
        zg("_g_rpcReady", I.prototype.ac);
        zg("_g_discover", I.prototype.Qk);
        zg("_g_ping", I.prototype.Ml);
        zg("_g_close", I.prototype.sk);
        zg("_g_closeMe", I.prototype.tk);
        zg("_g_restyle", I.prototype.Yl);
        zg("_g_restyleMe", I.prototype.Zl);
        zg("_g_wasClosed", I.prototype.zm);
        yg("control", "_g_control", I.prototype.wk);
        yg("control", "_g_disposeControl", I.prototype.Ck);
        var qi = qg.getParentIframe();
        qi && qi.register("_g_restyleDone", I.prototype.Xl, tg);
        zg("_g_connect", I.prototype.uk);
        var ri = {};
        ri._g_open = I.prototype.Jl;
        xg("_open", ri, tg);
        var si = {
            Context: K,
            Iframe: I,
            SAME_ORIGIN_IFRAMES_FILTER: sg,
            CROSS_ORIGIN_IFRAMES_FILTER: tg,
            makeWhiteListIframesFilter: ug,
            getContext: Ag,
            registerIframesApi: xg,
            registerIframesApiHandler: yg,
            registerStyle: ci,
            registerBeforeOpenStyle: fi,
            getStyle: di,
            getBeforeOpenStyle: gi,
            create: cf
        };
        Bf({
            instance: function() {
                return si
            },
            priority: 2
        });
        yg("gapi.load", "_g_gapi.load", function(a) {
            return new E(function(b) {
                vd.load(a && "object" === typeof a && a.features || "", b)
            }
            )
        });
        r("gapi.iframes.registerStyle", ci);
        r("gapi.iframes.registerBeforeOpenStyle", fi);
        r("gapi.iframes.getStyle", di);
        r("gapi.iframes.getBeforeOpenStyle", gi);
        r("gapi.iframes.registerIframesApi", xg);
        r("gapi.iframes.registerIframesApiHandler", yg);
        r("gapi.iframes.getContext", Ag);
        r("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER", sg);
        r("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER", tg);
        r("gapi.iframes.makeWhiteListIframesFilter", ug);
        r("gapi.iframes.Context", K);
        r("gapi.iframes.Context.prototype.isDisposed", K.prototype.isDisposed);
        r("gapi.iframes.Context.prototype.getWindow", K.prototype.getWindow);
        r("gapi.iframes.Context.prototype.getFrameName", K.prototype.getFrameName);
        r("gapi.iframes.Context.prototype.getGlobalParam", K.prototype.getGlobalParam);
        r("gapi.iframes.Context.prototype.setGlobalParam", K.prototype.setGlobalParam);
        r("gapi.iframes.Context.prototype.open", K.prototype.open);
        r("gapi.iframes.Context.prototype.openChild", K.prototype.openChild);
        r("gapi.iframes.Context.prototype.getParentIframe", K.prototype.getParentIframe);
        r("gapi.iframes.Context.prototype.closeSelf", K.prototype.closeSelf);
        r("gapi.iframes.Context.prototype.restyleSelf", K.prototype.restyleSelf);
        r("gapi.iframes.Context.prototype.setCloseSelfFilter", K.prototype.setCloseSelfFilter);
        r("gapi.iframes.Context.prototype.setRestyleSelfFilter", K.prototype.setRestyleSelfFilter);
        r("gapi.iframes.Context.prototype.addOnConnectHandler", K.prototype.addOnConnectHandler);
        r("gapi.iframes.Context.prototype.removeOnConnectHandler", K.prototype.removeOnConnectHandler);
        r("gapi.iframes.Context.prototype.addOnOpenerHandler", K.prototype.addOnOpenerHandler);
        r("gapi.iframes.Context.prototype.connectIframes", K.prototype.connectIframes);
        r("gapi.iframes.Iframe", I);
        r("gapi.iframes.Iframe.prototype.isDisposed", I.prototype.isDisposed);
        r("gapi.iframes.Iframe.prototype.getContext", I.prototype.getContext);
        r("gapi.iframes.Iframe.prototype.getFrameName", I.prototype.getFrameName);
        r("gapi.iframes.Iframe.prototype.getId", I.prototype.getId);
        r("gapi.iframes.Iframe.prototype.register", I.prototype.register);
        r("gapi.iframes.Iframe.prototype.unregister", I.prototype.unregister);
        r("gapi.iframes.Iframe.prototype.send", I.prototype.send);
        r("gapi.iframes.Iframe.prototype.applyIframesApi", I.prototype.applyIframesApi);
        r("gapi.iframes.Iframe.prototype.getIframeEl", I.prototype.getIframeEl);
        r("gapi.iframes.Iframe.prototype.getSiteEl", I.prototype.getSiteEl);
        r("gapi.iframes.Iframe.prototype.setSiteEl", I.prototype.setSiteEl);
        r("gapi.iframes.Iframe.prototype.getWindow", I.prototype.getWindow);
        r("gapi.iframes.Iframe.prototype.getOrigin", I.prototype.getOrigin);
        r("gapi.iframes.Iframe.prototype.close", I.prototype.close);
        r("gapi.iframes.Iframe.prototype.restyle", I.prototype.restyle);
        r("gapi.iframes.Iframe.prototype.restyleDone", I.prototype.Wl);
        r("gapi.iframes.Iframe.prototype.registerWasRestyled", I.prototype.registerWasRestyled);
        r("gapi.iframes.Iframe.prototype.registerWasClosed", I.prototype.registerWasClosed);
        r("gapi.iframes.Iframe.prototype.getParam", I.prototype.getParam);
        r("gapi.iframes.Iframe.prototype.setParam", I.prototype.setParam);
        r("gapi.iframes.Iframe.prototype.ping", I.prototype.ping);
        r("gapi.iframes.Iframe.prototype.getOpenParams", I.prototype.Ci);
        r("gapi.iframes.create", cf);
        var ti = function(a) {
            return Array.prototype.map.call(a, function(b) {
                b = b.toString(16);
                return 1 < b.length ? b : "0" + b
            }).join("")
        };
        var ui = null
          , wi = function(a) {
            var b = [];
            vi(a, function(c) {
                b.push(c)
            });
            return b
        }
          , vi = function(a, b) {
            function c(l) {
                for (; d < a.length; ) {
                    var m = a.charAt(d++)
                      , q = ui[m];
                    if (null != q)
                        return q;
                    if (!/^[\s\xa0]*$/.test(m))
                        throw Error("Unknown base64 encoding at char: " + m);
                }
                return l
            }
            xi();
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
          , xi = function() {
            if (!ui) {
                ui = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                    for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                        var f = d[e]
                          , g = ui[f];
                        void 0 === g ? ui[f] = e : w(g === e)
                    }
            }
        };
        var Ai = function(a, b) {
            this.blockSize = -1;
            this.blockSize = 64;
            this.Te = p.Uint8Array ? new Uint8Array(this.blockSize) : Array(this.blockSize);
            this.bc = this.td = 0;
            this.na = [];
            this.Bl = a;
            this.Pi = b;
            this.xm = p.Int32Array ? new Int32Array(64) : Array(64);
            void 0 === yi && (yi = p.Int32Array ? new Int32Array(zi) : zi);
            this.reset()
        }, yi;
        v(Ai, Ae);
        for (var Bi = [], Ci = 0; 63 > Ci; Ci++)
            Bi[Ci] = 0;
        var Di = [].concat(128, Bi);
        Ai.prototype.reset = function() {
            this.bc = this.td = 0;
            this.na = p.Int32Array ? new Int32Array(this.Pi) : Ta(this.Pi)
        }
        ;
        var Ei = function(a) {
            var b = a.Te;
            w(b.length == a.blockSize);
            for (var c = a.xm, d = 0, e = 0; e < b.length; )
                c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3],
                e = 4 * d;
            for (b = 16; 64 > b; b++) {
                e = c[b - 15] | 0;
                d = c[b - 2] | 0;
                var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0
                  , g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
                c[b] = f + g | 0
            }
            d = a.na[0] | 0;
            e = a.na[1] | 0;
            var h = a.na[2] | 0
              , l = a.na[3] | 0
              , m = a.na[4] | 0
              , q = a.na[5] | 0
              , y = a.na[6] | 0;
            f = a.na[7] | 0;
            for (b = 0; 64 > b; b++) {
                var B = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0;
                g = m & q ^ ~m & y;
                f = f + ((m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) | 0;
                g = g + (yi[b] | 0) | 0;
                g = f + (g + (c[b] | 0) | 0) | 0;
                f = y;
                y = q;
                q = m;
                m = l + g | 0;
                l = h;
                h = e;
                e = d;
                d = g + B | 0
            }
            a.na[0] = a.na[0] + d | 0;
            a.na[1] = a.na[1] + e | 0;
            a.na[2] = a.na[2] + h | 0;
            a.na[3] = a.na[3] + l | 0;
            a.na[4] = a.na[4] + m | 0;
            a.na[5] = a.na[5] + q | 0;
            a.na[6] = a.na[6] + y | 0;
            a.na[7] = a.na[7] + f | 0
        };
        Ai.prototype.update = function(a, b) {
            void 0 === b && (b = a.length);
            var c = 0
              , d = this.td;
            if ("string" === typeof a)
                for (; c < b; )
                    this.Te[d++] = a.charCodeAt(c++),
                    d == this.blockSize && (Ei(this),
                    d = 0);
            else if (ua(a))
                for (; c < b; ) {
                    var e = a[c++];
                    if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0)))
                        throw Error("message must be a byte array");
                    this.Te[d++] = e;
                    d == this.blockSize && (Ei(this),
                    d = 0)
                }
            else
                throw Error("message must be string or array");
            this.td = d;
            this.bc += b
        }
        ;
        Ai.prototype.digest = function() {
            var a = []
              , b = 8 * this.bc;
            56 > this.td ? this.update(Di, 56 - this.td) : this.update(Di, this.blockSize - (this.td - 56));
            for (var c = 63; 56 <= c; c--)
                this.Te[c] = b & 255,
                b /= 256;
            Ei(this);
            for (c = b = 0; c < this.Bl; c++)
                for (var d = 24; 0 <= d; d -= 8)
                    a[b++] = this.na[c] >> d & 255;
            return a
        }
        ;
        var zi = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
        var Gi = function() {
            Ai.call(this, 8, Fi)
        };
        v(Gi, Ai);
        var Fi = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
        var Hi = function() {
            this.Cb = this.Cb;
            this.Bf = this.Bf
        };
        Hi.prototype.Cb = !1;
        Hi.prototype.isDisposed = function() {
            return this.Cb
        }
        ;
        Hi.prototype.Ic = function() {
            this.Cb || (this.Cb = !0,
            this.Xd())
        }
        ;
        Hi.prototype.Xd = function() {
            if (this.Bf)
                for (; this.Bf.length; )
                    this.Bf.shift()()
        }
        ;
        var Ii = function(a, b) {
            this.type = a;
            this.currentTarget = this.target = b;
            this.defaultPrevented = this.ve = !1
        };
        Ii.prototype.stopPropagation = function() {
            this.ve = !0
        }
        ;
        Ii.prototype.preventDefault = function() {
            this.defaultPrevented = !0
        }
        ;
        var Ji = function() {
            if (!p.addEventListener || !Object.defineProperty)
                return !1;
            var a = !1
              , b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            try {
                var c = function() {};
                p.addEventListener("test", c, b);
                p.removeEventListener("test", c, b)
            } catch (d) {}
            return a
        }();
        var Ki = function(a, b) {
            Ii.call(this, a ? a.type : "");
            this.relatedTarget = this.currentTarget = this.target = null;
            this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
            this.key = "";
            this.charCode = this.keyCode = 0;
            this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
            this.state = null;
            this.pointerId = 0;
            this.pointerType = "";
            this.Ya = null;
            a && this.init(a, b)
        };
        v(Ki, Ii);
        var Li = Va({
            2: "touch",
            3: "pen",
            4: "mouse"
        });
        Ki.prototype.init = function(a, b) {
            var c = this.type = a.type
              , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            if (b = a.relatedTarget) {
                if (Bc) {
                    a: {
                        try {
                            wc(b.nodeName);
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
            this.screenY = d.screenY || 0) : (this.offsetX = Cc || void 0 !== a.offsetX ? a.offsetX : a.layerX,
            this.offsetY = Cc || void 0 !== a.offsetY ? a.offsetY : a.layerY,
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
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Li[a.pointerType] || "";
            this.state = a.state;
            this.Ya = a;
            a.defaultPrevented && Ki.Kd.preventDefault.call(this)
        }
        ;
        Ki.prototype.stopPropagation = function() {
            Ki.Kd.stopPropagation.call(this);
            this.Ya.stopPropagation ? this.Ya.stopPropagation() : this.Ya.cancelBubble = !0
        }
        ;
        Ki.prototype.preventDefault = function() {
            Ki.Kd.preventDefault.call(this);
            var a = this.Ya;
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }
        ;
        Ki.prototype.Nk = function() {
            return this.Ya
        }
        ;
        var Mi = "closure_listenable_" + (1E6 * Math.random() | 0);
        var Ni = 0;
        var Oi = function(a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.ef = e;
            this.key = ++Ni;
            this.ze = this.Pe = !1
        }
          , Pi = function(a) {
            a.ze = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.ef = null
        };
        var Qi = function(a) {
            this.src = a;
            this.Qa = {};
            this.Ie = 0
        };
        Qi.prototype.add = function(a, b, c, d, e) {
            var f = a.toString();
            a = this.Qa[f];
            a || (a = this.Qa[f] = [],
            this.Ie++);
            var g = Ri(a, b, d, e);
            -1 < g ? (b = a[g],
            c || (b.Pe = !1)) : (b = new Oi(b,this.src,f,!!d,e),
            b.Pe = c,
            a.push(b));
            return b
        }
        ;
        Qi.prototype.remove = function(a, b, c, d) {
            a = a.toString();
            if (!(a in this.Qa))
                return !1;
            var e = this.Qa[a];
            b = Ri(e, b, c, d);
            return -1 < b ? (Pi(e[b]),
            Ra(e, b),
            0 == e.length && (delete this.Qa[a],
            this.Ie--),
            !0) : !1
        }
        ;
        var Si = function(a, b) {
            var c = b.type;
            c in a.Qa && Qa(a.Qa[c], b) && (Pi(b),
            0 == a.Qa[c].length && (delete a.Qa[c],
            a.Ie--))
        };
        Qi.prototype.removeAll = function(a) {
            a = a && a.toString();
            var b = 0, c;
            for (c in this.Qa)
                if (!a || c == a) {
                    for (var d = this.Qa[c], e = 0; e < d.length; e++)
                        ++b,
                        Pi(d[e]);
                    delete this.Qa[c];
                    this.Ie--
                }
            return b
        }
        ;
        Qi.prototype.Gg = function(a, b, c, d) {
            a = this.Qa[a.toString()];
            var e = -1;
            a && (e = Ri(a, b, c, d));
            return -1 < e ? a[e] : null
        }
        ;
        Qi.prototype.hasListener = function(a, b) {
            var c = void 0 !== a
              , d = c ? a.toString() : ""
              , e = void 0 !== b;
            return Xa(this.Qa, function(f) {
                for (var g = 0; g < f.length; ++g)
                    if (!(c && f[g].type != d || e && f[g].capture != b))
                        return !0;
                return !1
            })
        }
        ;
        var Ri = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.ze && f.listener == b && f.capture == !!c && f.ef == d)
                    return e
            }
            return -1
        };
        var Ti = "closure_lm_" + (1E6 * Math.random() | 0)
          , Ui = {}
          , Vi = 0
          , Xi = function(a, b, c, d, e) {
            if (d && d.once)
                Wi(a, b, c, d, e);
            else if (Array.isArray(b))
                for (var f = 0; f < b.length; f++)
                    Xi(a, b[f], c, d, e);
            else
                c = Yi(c),
                a && a[Mi] ? a.listen(b, c, t(d) ? !!d.capture : !!d, e) : Zi(a, b, c, !1, d, e)
        }
          , Zi = function(a, b, c, d, e, f) {
            if (!b)
                throw Error("Invalid event type");
            var g = t(e) ? !!e.capture : !!e
              , h = $i(a);
            h || (a[Ti] = h = new Qi(a));
            c = h.add(b, c, d, g, f);
            if (!c.proxy) {
                d = aj();
                c.proxy = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener)
                    Ji || (e = g),
                    void 0 === e && (e = !1),
                    a.addEventListener(b.toString(), d, e);
                else if (a.attachEvent)
                    a.attachEvent(bj(b.toString()), d);
                else if (a.addListener && a.removeListener)
                    w("change" === b, "MediaQueryList only has a change event"),
                    a.addListener(d);
                else
                    throw Error("addEventListener and attachEvent are unavailable.");
                Vi++
            }
        }
          , aj = function() {
            var a = cj
              , b = function(c) {
                return a.call(b.src, b.listener, c)
            };
            return b
        }
          , Wi = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++)
                    Wi(a, b[f], c, d, e);
            else
                c = Yi(c),
                a && a[Mi] ? dj(a, b, c, t(d) ? !!d.capture : !!d, e) : Zi(a, b, c, !0, d, e)
        }
          , ej = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++)
                    ej(a, b[f], c, d, e);
            else
                d = t(d) ? !!d.capture : !!d,
                c = Yi(c),
                a && a[Mi] ? a.Eb.remove(String(b), c, d, e) : a && (a = $i(a)) && (b = a.Gg(b, c, d, e)) && fj(b)
        }
          , fj = function(a) {
            if ("number" !== typeof a && a && !a.ze) {
                var b = a.src;
                if (b && b[Mi])
                    Si(b.Eb, a);
                else {
                    var c = a.type
                      , d = a.proxy;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(bj(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    Vi--;
                    (c = $i(b)) ? (Si(c, a),
                    0 == c.Ie && (c.src = null,
                    b[Ti] = null)) : Pi(a)
                }
            }
        }
          , bj = function(a) {
            return a in Ui ? Ui[a] : Ui[a] = "on" + a
        }
          , cj = function(a, b) {
            if (a.ze)
                a = !0;
            else {
                b = new Ki(b,this);
                var c = a.listener
                  , d = a.ef || a.src;
                a.Pe && fj(a);
                a = c.call(d, b)
            }
            return a
        }
          , $i = function(a) {
            a = a[Ti];
            return a instanceof Qi ? a : null
        }
          , gj = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
          , Yi = function(a) {
            w(a, "Listener can not be null.");
            if ("function" === typeof a)
                return a;
            w(a.handleEvent, "An object listener must have handleEvent method.");
            a[gj] || (a[gj] = function(b) {
                return a.handleEvent(b)
            }
            );
            return a[gj]
        };
        var hj = function() {
            Hi.call(this);
            this.Eb = new Qi(this);
            this.jk = this;
            this.dh = null
        };
        v(hj, Hi);
        hj.prototype[Mi] = !0;
        k = hj.prototype;
        k.addEventListener = function(a, b, c, d) {
            Xi(this, a, b, c, d)
        }
        ;
        k.removeEventListener = function(a, b, c, d) {
            ej(this, a, b, c, d)
        }
        ;
        k.dispatchEvent = function(a) {
            ij(this);
            var b = this.dh;
            if (b) {
                var c = [];
                for (var d = 1; b; b = b.dh)
                    c.push(b),
                    w(1E3 > ++d, "infinite loop")
            }
            b = this.jk;
            d = a.type || a;
            if ("string" === typeof a)
                a = new Ii(a,b);
            else if (a instanceof Ii)
                a.target = a.target || b;
            else {
                var e = a;
                a = new Ii(d,b);
                ab(a, e)
            }
            e = !0;
            if (c)
                for (var f = c.length - 1; !a.ve && 0 <= f; f--) {
                    var g = a.currentTarget = c[f];
                    e = jj(g, d, !0, a) && e
                }
            a.ve || (g = a.currentTarget = b,
            e = jj(g, d, !0, a) && e,
            a.ve || (e = jj(g, d, !1, a) && e));
            if (c)
                for (f = 0; !a.ve && f < c.length; f++)
                    g = a.currentTarget = c[f],
                    e = jj(g, d, !1, a) && e;
            return e
        }
        ;
        k.Xd = function() {
            hj.Kd.Xd.call(this);
            this.Eb && this.Eb.removeAll(void 0);
            this.dh = null
        }
        ;
        k.listen = function(a, b, c, d) {
            ij(this);
            return this.Eb.add(String(a), b, !1, c, d)
        }
        ;
        var dj = function(a, b, c, d, e) {
            a.Eb.add(String(b), c, !0, d, e)
        }
          , jj = function(a, b, c, d) {
            b = a.Eb.Qa[String(b)];
            if (!b)
                return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var g = b[f];
                if (g && !g.ze && g.capture == c) {
                    var h = g.listener
                      , l = g.ef || g.src;
                    g.Pe && Si(a.Eb, g);
                    e = !1 !== h.call(l, d) && e
                }
            }
            return e && !d.defaultPrevented
        };
        hj.prototype.Gg = function(a, b, c, d) {
            return this.Eb.Gg(String(a), b, c, d)
        }
        ;
        hj.prototype.hasListener = function(a, b) {
            return this.Eb.hasListener(void 0 !== a ? String(a) : void 0, b)
        }
        ;
        var ij = function(a) {
            w(a.Eb, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
        };
        var kj = function() {};
        kj.prototype.Zh = null;
        kj.prototype.getOptions = function() {
            return this.Zh || (this.Zh = this.qf())
        }
        ;
        var lj, mj = function() {};
        v(mj, kj);
        mj.prototype.Ud = function() {
            var a = nj(this);
            return a ? new ActiveXObject(a) : new XMLHttpRequest
        }
        ;
        mj.prototype.qf = function() {
            var a = {};
            nj(this) && (a[0] = !0,
            a[1] = !0);
            return a
        }
        ;
        var nj = function(a) {
            if (!a.Mi && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d),
                        a.Mi = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.Mi
        };
        lj = new mj;
        var oj = function() {};
        v(oj, kj);
        oj.prototype.Ud = function() {
            var a = new XMLHttpRequest;
            if ("withCredentials"in a)
                return a;
            if ("undefined" != typeof XDomainRequest)
                return new pj;
            throw Error("Unsupported browser");
        }
        ;
        oj.prototype.qf = function() {
            return {}
        }
        ;
        var pj = function() {
            this.Qb = new XDomainRequest;
            this.readyState = 0;
            this.onreadystatechange = null;
            this.responseType = this.responseText = this.response = "";
            this.status = -1;
            this.responseXML = null;
            this.statusText = "";
            this.Qb.onload = u(this.Uk, this);
            this.Qb.onerror = u(this.Fi, this);
            this.Qb.onprogress = u(this.Wk, this);
            this.Qb.ontimeout = u(this.al, this)
        };
        k = pj.prototype;
        k.open = function(a, b, c) {
            if (null != c && !c)
                throw Error("Only async requests are supported.");
            this.Qb.open(a, b)
        }
        ;
        k.send = function(a) {
            if (a)
                if ("string" == typeof a)
                    this.Qb.send(a);
                else
                    throw Error("Only string data is supported");
            else
                this.Qb.send()
        }
        ;
        k.abort = function() {
            this.Qb.abort()
        }
        ;
        k.setRequestHeader = function() {}
        ;
        k.getResponseHeader = function(a) {
            return "content-type" == a.toLowerCase() ? this.Qb.contentType : ""
        }
        ;
        k.Uk = function() {
            this.status = 200;
            this.response = this.responseText = this.Qb.responseText;
            qj(this, 4)
        }
        ;
        k.Fi = function() {
            this.status = 500;
            this.response = this.responseText = "";
            qj(this, 4)
        }
        ;
        k.al = function() {
            this.Fi()
        }
        ;
        k.Wk = function() {
            this.status = 200;
            qj(this, 1)
        }
        ;
        var qj = function(a, b) {
            a.readyState = b;
            if (a.onreadystatechange)
                a.onreadystatechange()
        };
        pj.prototype.getAllResponseHeaders = function() {
            return "content-type: " + this.Qb.contentType
        }
        ;
        var rj = function(a) {
            this.Le = a.Am || null;
            this.De = a.Rm || !1;
            this.ad = this.Hc = void 0
        };
        v(rj, kj);
        rj.prototype.Ud = function() {
            var a = new sj(this.Le,this.De);
            this.Hc && a.Ch(this.Hc);
            this.ad && a.Ij(this.ad);
            return a
        }
        ;
        rj.prototype.qf = function(a) {
            return function() {
                return a
            }
        }({});
        rj.prototype.Ch = function(a) {
            this.Hc = a
        }
        ;
        rj.prototype.Ij = function(a) {
            this.ad = a
        }
        ;
        var sj = function(a, b) {
            hj.call(this);
            this.Le = a;
            this.De = b;
            this.ad = this.Hc = void 0;
            this.status = this.readyState = 0;
            this.responseType = this.responseText = this.response = this.statusText = "";
            this.onreadystatechange = this.responseXML = null;
            this.xh = new Headers;
            this.Hd = null;
            this.cj = "GET";
            this.hb = "";
            this.Sb = !1;
            this.Oh = this.Vd = this.Xe = null
        };
        v(sj, hj);
        sj.prototype.open = function(a, b, c) {
            w(!!c, "Only async requests are supported.");
            if (0 != this.readyState)
                throw this.abort(),
                Error("Error reopening a connection");
            this.cj = a;
            this.hb = b;
            this.readyState = 1;
            tj(this)
        }
        ;
        sj.prototype.send = function(a) {
            if (1 != this.readyState)
                throw this.abort(),
                Error("need to call open() first. ");
            this.Sb = !0;
            var b = {
                headers: this.xh,
                method: this.cj,
                credentials: this.Hc,
                cache: this.ad
            };
            a && (b.body = a);
            (this.Le || p).fetch(new Request(this.hb,b)).then(this.Zk.bind(this), this.df.bind(this))
        }
        ;
        sj.prototype.abort = function() {
            var a = this;
            this.response = this.responseText = "";
            this.xh = new Headers;
            this.status = 0;
            this.Vd && this.Vd.cancel("Request was aborted.").catch(function() {
                var b = a.Ea;
                b && pc(b, cc, "Fetch reader cancellation error.")
            });
            1 <= this.readyState && this.Sb && 4 != this.readyState && (this.Sb = !1,
            uj(this));
            this.readyState = 0
        }
        ;
        sj.prototype.Zk = function(a) {
            if (this.Sb && (this.Xe = a,
            this.Hd || (this.status = this.Xe.status,
            this.statusText = this.Xe.statusText,
            this.Hd = a.headers,
            this.readyState = 2,
            tj(this)),
            this.Sb && (this.readyState = 3,
            tj(this),
            this.Sb)))
                if ("arraybuffer" === this.responseType)
                    a.arrayBuffer().then(this.Xk.bind(this), this.df.bind(this));
                else if ("undefined" !== typeof p.ReadableStream && "body"in a) {
                    this.Vd = a.body.getReader();
                    if (this.De) {
                        if (this.responseType)
                            throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
                        this.response = []
                    } else
                        this.response = this.responseText = "",
                        this.Oh = new TextDecoder;
                    vj(this)
                } else
                    a.text().then(this.Yk.bind(this), this.df.bind(this))
        }
        ;
        var vj = function(a) {
            a.Vd.read().then(a.Sk.bind(a)).catch(a.df.bind(a))
        };
        sj.prototype.Sk = function(a) {
            if (this.Sb) {
                if (this.De && a.value)
                    this.response.push(a.value);
                else if (!this.De) {
                    var b = a.value ? a.value : new Uint8Array(0);
                    if (b = this.Oh.decode(b, {
                        stream: !a.done
                    }))
                        this.response = this.responseText += b
                }
                a.done ? uj(this) : tj(this);
                3 == this.readyState && vj(this)
            }
        }
        ;
        sj.prototype.Yk = function(a) {
            this.Sb && (this.response = this.responseText = a,
            uj(this))
        }
        ;
        sj.prototype.Xk = function(a) {
            this.Sb && (this.response = a,
            uj(this))
        }
        ;
        sj.prototype.df = function() {
            var a = this.Ea;
            a && pc(a, cc, "Failed to fetch url " + this.hb);
            this.Sb && uj(this)
        }
        ;
        var uj = function(a) {
            a.readyState = 4;
            a.Xe = null;
            a.Vd = null;
            a.Oh = null;
            tj(a)
        };
        k = sj.prototype;
        k.setRequestHeader = function(a, b) {
            this.xh.append(a, b)
        }
        ;
        k.getResponseHeader = function(a) {
            return this.Hd ? this.Hd.get(a.toLowerCase()) || "" : ((a = this.Ea) && pc(a, cc, "Attempting to get response header but no headers have been received for url: " + this.hb),
            "")
        }
        ;
        k.getAllResponseHeaders = function() {
            if (!this.Hd) {
                var a = this.Ea;
                a && pc(a, cc, "Attempting to get all response headers but no headers have been received for url: " + this.hb);
                return ""
            }
            a = [];
            for (var b = this.Hd.entries(), c = b.next(); !c.done; )
                c = c.value,
                a.push(c[0] + ": " + c[1]),
                c = b.next();
            return a.join("\r\n")
        }
        ;
        k.Ch = function(a) {
            this.Hc = a
        }
        ;
        k.Ij = function(a) {
            this.ad = a
        }
        ;
        var tj = function(a) {
            a.onreadystatechange && a.onreadystatechange.call(a)
        };
        Object.defineProperty(sj.prototype, "withCredentials", {
            get: function() {
                return "include" === this.Hc
            },
            set: function(a) {
                this.Ch(a ? "include" : "same-origin")
            }
        });
        function wj() {}
        ;/*
    
     Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: MIT
    */
        var xj = function(a, b) {
            this.Qf = [];
            this.fj = a;
            this.mi = b || null;
            this.fe = this.od = !1;
            this.Ua = void 0;
            this.Jh = this.Xh = this.lg = !1;
            this.Wf = 0;
            this.Ha = null;
            this.mg = 0
        };
        v(xj, wj);
        xj.prototype.cancel = function(a) {
            if (this.od)
                this.Ua instanceof xj && this.Ua.cancel();
            else {
                if (this.Ha) {
                    var b = this.Ha;
                    delete this.Ha;
                    a ? b.cancel(a) : (b.mg--,
                    0 >= b.mg && b.cancel())
                }
                this.fj ? this.fj.call(this.mi, this) : this.Jh = !0;
                this.od || yj(this, new zj(this))
            }
        }
        ;
        xj.prototype.fi = function(a, b) {
            this.lg = !1;
            Aj(this, a, b)
        }
        ;
        var Aj = function(a, b, c) {
            a.od = !0;
            a.Ua = c;
            a.fe = !b;
            Bj(a)
        }
          , Dj = function(a) {
            if (a.od) {
                if (!a.Jh)
                    throw new Cj(a);
                a.Jh = !1
            }
        };
        xj.prototype.callback = function(a) {
            Dj(this);
            Ej(a);
            Aj(this, !0, a)
        }
        ;
        var yj = function(a, b) {
            Dj(a);
            Ej(b);
            Aj(a, !1, b)
        }
          , Ej = function(a) {
            w(!(a instanceof xj), "An execution sequence may not be initiated with a blocking Deferred.")
        };
        xj.prototype.addCallback = function(a, b) {
            return Fj(this, a, null, b)
        }
        ;
        var Gj = function(a, b) {
            Fj(a, null, b)
        }
          , Fj = function(a, b, c, d) {
            w(!a.Xh, "Blocking Deferreds can not be re-used");
            a.Qf.push([b, c, d]);
            a.od && Bj(a);
            return a
        };
        xj.prototype.then = function(a, b, c) {
            var d, e, f = new E(function(g, h) {
                e = g;
                d = h
            }
            );
            Fj(this, e, function(g) {
                g instanceof zj ? f.cancel() : d(g);
                return Hj
            }, this);
            return f.then(a, b, c)
        }
        ;
        xj.prototype.$goog_Thenable = !0;
        var Ij = function(a) {
            return Oa(a.Qf, function(b) {
                return "function" === typeof b[1]
            })
        }
          , Hj = {}
          , Bj = function(a) {
            if (a.Wf && a.od && Ij(a)) {
                var b = a.Wf
                  , c = Jj[b];
                c && (p.clearTimeout(c.Pa),
                delete Jj[b]);
                a.Wf = 0
            }
            a.Ha && (a.Ha.mg--,
            delete a.Ha);
            b = a.Ua;
            for (var d = c = !1; a.Qf.length && !a.lg; ) {
                var e = a.Qf.shift()
                  , f = e[0]
                  , g = e[1];
                e = e[2];
                if (f = a.fe ? g : f)
                    try {
                        var h = f.call(e || a.mi, b);
                        h === Hj && (h = void 0);
                        void 0 !== h && (a.fe = a.fe && (h == b || h instanceof Error),
                        a.Ua = b = h);
                        if (Vf(b) || "function" === typeof p.Promise && b instanceof p.Promise)
                            d = !0,
                            a.lg = !0
                    } catch (l) {
                        b = l,
                        a.fe = !0,
                        Ij(a) || (c = !0)
                    }
            }
            a.Ua = b;
            d && (h = u(a.fi, a, !0),
            d = u(a.fi, a, !1),
            b instanceof xj ? (Fj(b, h, d),
            b.Xh = !0) : b.then(h, d));
            c && (b = new Kj(b),
            Jj[b.Pa] = b,
            a.Wf = b.Pa)
        }
          , Cj = function() {
            Aa.call(this)
        };
        v(Cj, Aa);
        Cj.prototype.message = "Deferred has already fired";
        Cj.prototype.name = "AlreadyCalledError";
        var zj = function() {
            Aa.call(this)
        };
        v(zj, Aa);
        zj.prototype.message = "Deferred was canceled";
        zj.prototype.name = "CanceledError";
        var Kj = function(a) {
            this.Pa = p.setTimeout(u(this.rm, this), 0);
            this.yb = a
        };
        Kj.prototype.rm = function() {
            w(Jj[this.Pa], "Cannot throw an error that is not scheduled.");
            delete Jj[this.Pa];
            throw this.yb;
        }
        ;
        var Jj = {};
        var Pj = function(a) {
            var b = {}
              , c = b.document || document
              , d = pb(a).toString()
              , e = (new fd(c)).createElement("SCRIPT")
              , f = {
                Dj: e,
                Ge: void 0
            }
              , g = new xj(Lj,f)
              , h = null
              , l = null != b.timeout ? b.timeout : 5E3;
            0 < l && (h = window.setTimeout(function() {
                Mj(e, !0);
                yj(g, new Nj(1,"Timeout reached for loading script " + d))
            }, l),
            f.Ge = h);
            e.onload = e.onreadystatechange = function() {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Mj(e, b.Nm || !1, h),
                g.callback(null))
            }
            ;
            e.onerror = function() {
                Mj(e, !0, h);
                yj(g, new Nj(0,"Error while loading script " + d))
            }
            ;
            f = b.attributes || {};
            ab(f, {
                type: "text/javascript",
                charset: "UTF-8"
            });
            Yc(e, f);
            Tc(e, a);
            Oj(c).appendChild(e);
            return g
        }
          , Oj = function(a) {
            var b;
            return (b = (a || document).getElementsByTagName("HEAD")) && 0 !== b.length ? b[0] : a.documentElement
        }
          , Lj = function() {
            if (this && this.Dj) {
                var a = this.Dj;
                a && "SCRIPT" == a.tagName && Mj(a, !0, this.Ge)
            }
        }
          , Mj = function(a, b, c) {
            null != c && p.clearTimeout(c);
            a.onload = function() {}
            ;
            a.onerror = function() {}
            ;
            a.onreadystatechange = function() {}
            ;
            b && window.setTimeout(function() {
                dd(a)
            }, 0)
        }
          , Nj = function(a, b) {
            var c = "Jsloader error (code #" + a + ")";
            b && (c += ": " + b);
            Aa.call(this, c);
            this.code = a
        };
        v(Nj, Aa);
        var Qj = function(a, b, c) {
            if ("function" === typeof a)
                c && (a = u(a, c));
            else if (a && "function" == typeof a.handleEvent)
                a = u(a.handleEvent, a);
            else
                throw Error("Invalid listener argument");
            return 2147483647 < Number(b) ? -1 : p.setTimeout(a, b || 0)
        }
          , Rj = function(a) {
            var b = null;
            return (new E(function(c, d) {
                b = Qj(function() {
                    c(void 0)
                }, a);
                -1 == b && d(Error("Failed to schedule timer."))
            }
            )).l(function(c) {
                p.clearTimeout(b);
                throw c;
            })
        };
        var Sj = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
          , Tj = function(a, b) {
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
        var Uj = function(a) {
            hj.call(this);
            this.headers = new Map;
            this.dg = a || null;
            this.kc = !1;
            this.ag = this.u = null;
            this.ke = this.Wi = this.vf = "";
            this.Oc = this.Mg = this.nf = this.Ag = !1;
            this.Ld = 0;
            this.Uf = null;
            this.Lf = "";
            this.Xf = this.Ol = this.ek = !1;
            this.Ph = null
        };
        v(Uj, hj);
        var Vj = /^https?$/i
          , Wj = ["POST", "PUT"];
        Uj.prototype.setTrustToken = function(a) {
            this.Ph = a
        }
        ;
        Uj.prototype.send = function(a, b, c, d) {
            if (this.u)
                throw Error("[goog.net.XhrIo] Object is active with another request=" + this.vf + "; newUri=" + a);
            b = b ? b.toUpperCase() : "GET";
            this.vf = a;
            this.ke = "";
            this.Wi = b;
            this.Ag = !1;
            this.kc = !0;
            this.u = this.dg ? this.dg.Ud() : lj.Ud();
            this.ag = this.dg ? this.dg.getOptions() : lj.getOptions();
            this.u.onreadystatechange = u(this.oj, this);
            this.Ol && "onprogress"in this.u && (this.u.onprogress = u(function(g) {
                this.nj(g, !0)
            }, this),
            this.u.upload && (this.u.upload.onprogress = u(this.nj, this)));
            try {
                rc(this.Ea, Xj(this, "Opening Xhr")),
                this.Mg = !0,
                this.u.open(b, String(a), !0),
                this.Mg = !1
            } catch (g) {
                rc(this.Ea, Xj(this, "Error opening Xhr: " + g.message));
                this.yb(5, g);
                return
            }
            a = c || "";
            c = new Map(this.headers);
            if (d)
                if (Object.getPrototypeOf(d) === Object.prototype)
                    for (var e in d)
                        c.set(e, d[e]);
                else if ("function" === typeof d.keys && "function" === typeof d.get) {
                    e = ha(d.keys());
                    for (var f = e.next(); !f.done; f = e.next())
                        f = f.value,
                        c.set(f, d.get(f))
                } else
                    throw Error("Unknown input type for opt_headers: " + String(d));
            d = Array.from(c.keys()).find(function(g) {
                return "content-type" == g.toLowerCase()
            });
            e = p.FormData && a instanceof p.FormData;
            !Pa(Wj, b) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            b = ha(c);
            for (d = b.next(); !d.done; d = b.next())
                c = ha(d.value),
                d = c.next().value,
                c = c.next().value,
                this.u.setRequestHeader(d, c);
            this.Lf && (this.u.responseType = this.Lf);
            "withCredentials"in this.u && this.u.withCredentials !== this.ek && (this.u.withCredentials = this.ek);
            if ("setTrustToken"in this.u && this.Ph)
                try {
                    this.u.setTrustToken(this.Ph)
                } catch (g) {
                    rc(this.Ea, Xj(this, "Error SetTrustToken: " + g.message))
                }
            try {
                Yj(this),
                0 < this.Ld && (this.Xf = Zj(this.u),
                rc(this.Ea, Xj(this, "Will abort after " + this.Ld + "ms if incomplete, xhr2 " + this.Xf)),
                this.Xf ? (this.u.timeout = this.Ld,
                this.u.ontimeout = u(this.Ge, this)) : this.Uf = Qj(this.Ge, this.Ld, this)),
                rc(this.Ea, Xj(this, "Sending request")),
                this.nf = !0,
                this.u.send(a),
                this.nf = !1
            } catch (g) {
                rc(this.Ea, Xj(this, "Send error: " + g.message)),
                this.yb(5, g)
            }
        }
        ;
        var Zj = function(a) {
            return yc && "number" === typeof a.timeout && void 0 !== a.ontimeout
        };
        Uj.prototype.Ge = function() {
            "undefined" != typeof sa && this.u && (this.ke = "Timed out after " + this.Ld + "ms, aborting",
            rc(this.Ea, Xj(this, this.ke)),
            this.dispatchEvent("timeout"),
            this.abort(8))
        }
        ;
        Uj.prototype.yb = function(a, b) {
            this.kc = !1;
            this.u && (this.Oc = !0,
            this.u.abort(),
            this.Oc = !1);
            this.ke = b;
            ak(this);
            bk(this)
        }
        ;
        var ak = function(a) {
            a.Ag || (a.Ag = !0,
            a.dispatchEvent("complete"),
            a.dispatchEvent("error"))
        };
        Uj.prototype.abort = function() {
            this.u && this.kc && (rc(this.Ea, Xj(this, "Aborting")),
            this.kc = !1,
            this.Oc = !0,
            this.u.abort(),
            this.Oc = !1,
            this.dispatchEvent("complete"),
            this.dispatchEvent("abort"),
            bk(this))
        }
        ;
        Uj.prototype.Xd = function() {
            this.u && (this.kc && (this.kc = !1,
            this.Oc = !0,
            this.u.abort(),
            this.Oc = !1),
            bk(this, !0));
            Uj.Kd.Xd.call(this)
        }
        ;
        Uj.prototype.oj = function() {
            this.isDisposed() || (this.Mg || this.nf || this.Oc ? ck(this) : this.Hl())
        }
        ;
        Uj.prototype.Hl = function() {
            ck(this)
        }
        ;
        var ck = function(a) {
            if (a.kc && "undefined" != typeof sa)
                if (a.ag[1] && 4 == dk(a) && 2 == a.getStatus())
                    rc(a.Ea, Xj(a, "Local request error detected and ignored"));
                else if (a.nf && 4 == dk(a))
                    Qj(a.oj, 0, a);
                else if (a.dispatchEvent("readystatechange"),
                4 == dk(a)) {
                    rc(a.Ea, Xj(a, "Request complete"));
                    a.kc = !1;
                    try {
                        var b = a.getStatus();
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
                                var f = String(a.vf).match(Sj)[1] || null;
                                !f && p.self && p.self.location && (f = p.self.location.protocol.slice(0, -1));
                                e = !Vj.test(f ? f.toLowerCase() : "")
                            }
                            d = e
                        }
                        if (d)
                            a.dispatchEvent("complete"),
                            a.dispatchEvent("success");
                        else {
                            try {
                                var g = 2 < dk(a) ? a.u.statusText : ""
                            } catch (h) {
                                rc(a.Ea, "Can not get status: " + h.message),
                                g = ""
                            }
                            a.ke = g + " [" + a.getStatus() + "]";
                            ak(a)
                        }
                    } finally {
                        bk(a)
                    }
                }
        };
        Uj.prototype.nj = function(a, b) {
            w("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
            this.dispatchEvent(ek(a, "progress"));
            this.dispatchEvent(ek(a, b ? "downloadprogress" : "uploadprogress"))
        }
        ;
        var ek = function(a, b) {
            return {
                type: b,
                lengthComputable: a.lengthComputable,
                loaded: a.loaded,
                total: a.total
            }
        }
          , bk = function(a, b) {
            if (a.u) {
                Yj(a);
                var c = a.u
                  , d = a.ag[0] ? function() {}
                : null;
                a.u = null;
                a.ag = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                    qc(a.Ea, "Problem encountered resetting onreadystatechange: " + e.message)
                }
            }
        }
          , Yj = function(a) {
            a.u && a.Xf && (a.u.ontimeout = null);
            a.Uf && (p.clearTimeout(a.Uf),
            a.Uf = null)
        };
        Uj.prototype.isActive = function() {
            return !!this.u
        }
        ;
        var dk = function(a) {
            return a.u ? a.u.readyState : 0
        };
        Uj.prototype.getStatus = function() {
            try {
                return 2 < dk(this) ? this.u.status : -1
            } catch (a) {
                return -1
            }
        }
        ;
        Uj.prototype.getResponse = function() {
            try {
                if (!this.u)
                    return null;
                if ("response"in this.u)
                    return this.u.response;
                switch (this.Lf) {
                case "":
                case "text":
                    return this.u.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer"in this.u)
                        return this.u.mozResponseArrayBuffer
                }
                qc(this.Ea, "Response type " + this.Lf + " is not supported on this browser");
                return null
            } catch (a) {
                return rc(this.Ea, "Can not get response: " + a.message),
                null
            }
        }
        ;
        Uj.prototype.getResponseHeader = function(a) {
            if (this.u && 4 == dk(this))
                return a = this.u.getResponseHeader(a),
                null === a ? void 0 : a
        }
        ;
        Uj.prototype.getAllResponseHeaders = function() {
            return this.u && 2 <= dk(this) ? this.u.getAllResponseHeaders() || "" : ""
        }
        ;
        var Xj = function(a, b) {
            return b + " [" + a.Wi + " " + a.vf + " " + a.getStatus() + "]"
        };
        var fk = function(a) {
            if (a.Nc && "function" == typeof a.Nc)
                return a.Nc();
            if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set)
                return Array.from(a.values());
            if ("string" === typeof a)
                return a.split("");
            if (ua(a)) {
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
          , gk = function(a) {
            if (a.Fg && "function" == typeof a.Fg)
                return a.Fg();
            if (!a.Nc || "function" != typeof a.Nc) {
                if ("undefined" !== typeof Map && a instanceof Map)
                    return Array.from(a.keys());
                if (!("undefined" !== typeof Set && a instanceof Set)) {
                    if (ua(a) || "string" === typeof a) {
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
          , hk = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach)
                a.forEach(b, c);
            else if (ua(a) || "string" === typeof a)
                Array.prototype.forEach.call(a, b, c);
            else
                for (var d = gk(a), e = fk(a), f = e.length, g = 0; g < f; g++)
                    b.call(c, e[g], d && d[g], a)
        };
        var ik = function(a) {
            this.Ga = this.Xc = this.Va = "";
            this.Tb = null;
            this.Lc = this.Ef = "";
            this.Ab = this.ul = !1;
            if (a instanceof ik) {
                this.Ab = a.Ab;
                jk(this, a.Va);
                var b = a.Xc;
                kk(this);
                this.Xc = b;
                lk(this, a.Ga);
                mk(this, a.Tb);
                this.setPath(a.getPath());
                nk(this, a.rb.clone());
                a = a.Lc;
                kk(this);
                this.Lc = a
            } else
                a && (b = String(a).match(Sj)) ? (this.Ab = !1,
                jk(this, b[1] || "", !0),
                a = b[2] || "",
                kk(this),
                this.Xc = ok(a),
                lk(this, b[3] || "", !0),
                mk(this, b[4]),
                this.setPath(b[5] || "", !0),
                nk(this, b[6] || "", !0),
                a = b[7] || "",
                kk(this),
                this.Lc = ok(a)) : (this.Ab = !1,
                this.rb = new pk(null,this.Ab))
        };
        ik.prototype.toString = function() {
            var a = []
              , b = this.Va;
            b && a.push(qk(b, rk, !0), ":");
            var c = this.Ga;
            if (c || "file" == b)
                a.push("//"),
                (b = this.Xc) && a.push(qk(b, rk, !0), "@"),
                a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                c = this.Tb,
                null != c && a.push(":", String(c));
            if (c = this.getPath())
                this.Ga && "/" != c.charAt(0) && a.push("/"),
                a.push(qk(c, "/" == c.charAt(0) ? sk : tk, !0));
            (c = this.rb.toString()) && a.push("?", c);
            (c = this.Lc) && a.push("#", qk(c, uk));
            return a.join("")
        }
        ;
        ik.prototype.resolve = function(a) {
            var b = this.clone()
              , c = !!a.Va;
            c ? jk(b, a.Va) : c = !!a.Xc;
            if (c) {
                var d = a.Xc;
                kk(b);
                b.Xc = d
            } else
                c = !!a.Ga;
            c ? lk(b, a.Ga) : c = null != a.Tb;
            d = a.getPath();
            if (c)
                mk(b, a.Tb);
            else if (c = !!a.Ef) {
                if ("/" != d.charAt(0))
                    if (this.Ga && !this.Ef)
                        d = "/" + d;
                    else {
                        var e = b.getPath().lastIndexOf("/");
                        -1 != e && (d = b.getPath().slice(0, e + 1) + d)
                    }
                e = d;
                if (".." == e || "." == e)
                    d = "";
                else if (z(e, "./") || z(e, "/.")) {
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
            c ? b.setPath(d) : c = "" !== a.rb.toString();
            c ? nk(b, a.rb.clone()) : c = !!a.Lc;
            c && (a = a.Lc,
            kk(b),
            b.Lc = a);
            return b
        }
        ;
        ik.prototype.clone = function() {
            return new ik(this)
        }
        ;
        var jk = function(a, b, c) {
            kk(a);
            a.Va = c ? ok(b, !0) : b;
            a.Va && (a.Va = a.Va.replace(/:$/, ""))
        }
          , lk = function(a, b, c) {
            kk(a);
            a.Ga = c ? ok(b, !0) : b
        }
          , mk = function(a, b) {
            kk(a);
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b)
                    throw Error("Bad port number " + b);
                a.Tb = b
            } else
                a.Tb = null
        };
        ik.prototype.getPath = function() {
            return this.Ef
        }
        ;
        ik.prototype.setPath = function(a, b) {
            kk(this);
            this.Ef = b ? ok(a, !0) : a;
            return this
        }
        ;
        var nk = function(a, b, c) {
            kk(a);
            b instanceof pk ? (a.rb = b,
            a.rb.Eh(a.Ab)) : (c || (b = qk(b, vk)),
            a.rb = new pk(b,a.Ab))
        };
        ik.prototype.getQuery = function() {
            return this.rb.toString()
        }
        ;
        var L = function(a, b, c) {
            kk(a);
            a.rb.set(b, c)
        }
          , wk = function(a, b) {
            return a.rb.get(b)
        };
        ik.prototype.removeParameter = function(a) {
            kk(this);
            this.rb.remove(a);
            return this
        }
        ;
        var kk = function(a) {
            if (a.ul)
                throw Error("Tried to modify a read-only Uri");
        };
        ik.prototype.Eh = function(a) {
            this.Ab = a;
            this.rb && this.rb.Eh(a)
        }
        ;
        var M = function(a) {
            return a instanceof ik ? a.clone() : new ik(a)
        }
          , xk = function(a, b, c, d) {
            var e = new ik(null);
            a && jk(e, a);
            b && lk(e, b);
            c && mk(e, c);
            d && e.setPath(d);
            return e
        }
          , ok = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        }
          , qk = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, yk),
            c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            a) : null
        }
          , yk = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        }
          , rk = /[#\/\?@]/g
          , tk = /[#\?:]/g
          , sk = /[#\?]/g
          , vk = /[#\?@]/g
          , uk = /#/g
          , pk = function(a, b) {
            this.Na = this.qa = null;
            this.mb = a || null;
            this.Ab = !!b
        }
          , zk = function(a) {
            a.qa || (a.qa = new Map,
            a.Na = 0,
            a.mb && Tj(a.mb, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        }
          , Ak = function(a) {
            var b = gk(a);
            if ("undefined" == typeof b)
                throw Error("Keys are undefined");
            var c = new pk(null);
            a = fk(a);
            for (var d = 0; d < b.length; d++) {
                var e = b[d]
                  , f = a[d];
                Array.isArray(f) ? c.setValues(e, f) : c.add(e, f)
            }
            return c
        };
        pk.prototype.add = function(a, b) {
            zk(this);
            this.mb = null;
            a = this.nb(a);
            var c = this.qa.get(a);
            c || this.qa.set(a, c = []);
            c.push(b);
            this.Na = Ha(this.Na) + 1;
            return this
        }
        ;
        pk.prototype.remove = function(a) {
            zk(this);
            a = this.nb(a);
            return this.qa.has(a) ? (this.mb = null,
            this.Na = Ha(this.Na) - this.qa.get(a).length,
            this.qa.delete(a)) : !1
        }
        ;
        pk.prototype.clear = function() {
            this.qa = this.mb = null;
            this.Na = 0
        }
        ;
        pk.prototype.isEmpty = function() {
            zk(this);
            return 0 == this.Na
        }
        ;
        var Bk = function(a, b) {
            zk(a);
            b = a.nb(b);
            return a.qa.has(b)
        };
        k = pk.prototype;
        k.forEach = function(a, b) {
            zk(this);
            this.qa.forEach(function(c, d) {
                c.forEach(function(e) {
                    a.call(b, e, d, this)
                }, this)
            }, this)
        }
        ;
        k.Fg = function() {
            zk(this);
            for (var a = Array.from(this.qa.values()), b = Array.from(this.qa.keys()), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], f = 0; f < e.length; f++)
                    c.push(b[d]);
            return c
        }
        ;
        k.Nc = function(a) {
            zk(this);
            var b = [];
            if ("string" === typeof a)
                Bk(this, a) && (b = b.concat(this.qa.get(this.nb(a))));
            else {
                a = Array.from(this.qa.values());
                for (var c = 0; c < a.length; c++)
                    b = b.concat(a[c])
            }
            return b
        }
        ;
        k.set = function(a, b) {
            zk(this);
            this.mb = null;
            a = this.nb(a);
            Bk(this, a) && (this.Na = Ha(this.Na) - this.qa.get(a).length);
            this.qa.set(a, [b]);
            this.Na = Ha(this.Na) + 1;
            return this
        }
        ;
        k.get = function(a, b) {
            if (!a)
                return b;
            a = this.Nc(a);
            return 0 < a.length ? String(a[0]) : b
        }
        ;
        k.setValues = function(a, b) {
            this.remove(a);
            0 < b.length && (this.mb = null,
            this.qa.set(this.nb(a), Ta(b)),
            this.Na = Ha(this.Na) + b.length)
        }
        ;
        k.toString = function() {
            if (this.mb)
                return this.mb;
            if (!this.qa)
                return "";
            for (var a = [], b = Array.from(this.qa.keys()), c = 0; c < b.length; c++) {
                var d = b[c]
                  , e = encodeURIComponent(String(d));
                d = this.Nc(d);
                for (var f = 0; f < d.length; f++) {
                    var g = e;
                    "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                    a.push(g)
                }
            }
            return this.mb = a.join("&")
        }
        ;
        k.clone = function() {
            var a = new pk;
            a.mb = this.mb;
            this.qa && (a.qa = new Map(this.qa),
            a.Na = this.Na);
            return a
        }
        ;
        k.nb = function(a) {
            a = String(a);
            this.Ab && (a = a.toLowerCase());
            return a
        }
        ;
        k.Eh = function(a) {
            a && !this.Ab && (zk(this),
            this.mb = null,
            this.qa.forEach(function(b, c) {
                var d = c.toLowerCase();
                c != d && (this.remove(c),
                this.setValues(d, b))
            }, this));
            this.Ab = a
        }
        ;
        k.extend = function(a) {
            for (var b = 0; b < arguments.length; b++)
                hk(arguments[b], function(c, d) {
                    this.add(d, c)
                }, this)
        }
        ;
        var Ck = {
            Dm: {
                Ye: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                Nf: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                jf: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                id: "b"
            },
            Jm: {
                Ye: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                Nf: "https://securetoken.googleapis.com/v1/token",
                jf: "https://identitytoolkit.googleapis.com/v2/",
                id: "p"
            },
            Km: {
                Ye: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                Nf: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                jf: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                id: "s"
            },
            Lm: {
                Ye: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                Nf: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                jf: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
                id: "t"
            }
        }, Dk = function(a) {
            for (var b in Ck)
                if (Ck[b].id === a)
                    return a = Ck[b],
                    {
                        firebaseEndpoint: a.Ye,
                        secureTokenEndpoint: a.Nf,
                        identityPlatformEndpoint: a.jf
                    };
            return null
        }, Ek;
        Ek = Dk("__EID__") ? "__EID__" : void 0;
        var angular, Gk = function() {
            var a = Fk();
            return yc && !!Nc && 11 == Nc || /Edge\/\d+/.test(a)
        }, Hk = function() {
            return p.window && p.window.location.href || self && self.location && self.location.href || ""
        }, Ik = function(a, b) {
            b = b || p.window;
            var c = "about:blank";
            a && (c = Db(Hb(a) || Lb));
            b.location.href = c
        }, Jk = function(a, b) {
            var c = [], d;
            for (d in a)
                d in b ? typeof a[d] != typeof b[d] ? c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < Jk(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
            for (var e in b)
                e in a || c.push(e);
            return c
        }, Lk = function() {
            var a = Fk();
            a = "Chrome" != Kk(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;
            return a && 30 > a ? !1 : !yc || !Nc || 9 < Nc
        }, Mk = function(a) {
            a = (a || Fk()).toLowerCase();
            return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1
        }, Nk = function(a) {
            a = a || p.window;
            try {
                a.close()
            } catch (b) {}
        }, Ok = function(a, b, c) {
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
            c = Fk().toLowerCase();
            d && (b.target = d,
            z(c, "crios/") && (b.target = "_blank"));
            "Firefox" == Kk(Fk()) && (a = a || "http://localhost",
            b.scrollbars = !0);
            e = a || "";
            b || (b = {});
            a = window;
            d = e instanceof Cb ? e : Hb("undefined" != typeof e.href ? e.href : String(e)) || Lb;
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
            (vc() || A("iPad") || A("iPod")) && a.navigator && a.navigator.standalone && e && "_self" != e ? (h = ad(document, "A"),
            Rc(h, d),
            h.target = e,
            c && (h.rel = "noreferrer"),
            d = document.createEvent("MouseEvent"),
            d.initMouseEvent("click", !0, !0, a, 1),
            h.dispatchEvent(d),
            h = {}) : c ? (h = Uc("", a, e, h),
            d = Db(d),
            h && (Ac && z(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"),
            h.opener = null,
            "" === d && (d = "javascript:''"),
            a = new lb(jb,"b/12014412, meta tag with sanitized URL"),
            Ab.test(d) && (-1 != d.indexOf("&") && (d = d.replace(ub, "&amp;")),
            -1 != d.indexOf("<") && (d = d.replace(vb, "&lt;")),
            -1 != d.indexOf(">") && (d = d.replace(wb, "&gt;")),
            -1 != d.indexOf('"') && (d = d.replace(xb, "&quot;")),
            -1 != d.indexOf("'") && (d = d.replace(yb, "&#39;")),
            -1 != d.indexOf("\x00") && (d = d.replace(zb, "&#0;"))),
            a = Qc(a, '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + d + '">'),
            (d = h.document) && d.write && (d.write(Zb(a)),
            d.close()))) : ((h = Uc(d, a, e, h)) && b.noopener && (h.opener = null),
            h && b.noreferrer && (h.opener = null));
            if (h)
                try {
                    h.focus()
                } catch (l) {}
            return h
        }, Pk = function(a) {
            return new E(function(b) {
                var c = function() {
                    Rj(2E3).then(function() {
                        if (!a || a.closed)
                            b();
                        else
                            return c()
                    })
                };
                return c()
            }
            )
        }, Rk = function(a, b) {
            var c = M(b);
            b = c.Va;
            c = c.Ga;
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                0 == e.indexOf("chrome-extension://") ? e = M(e).Ga == c && "chrome-extension" == b : "http" != b && "https" != b ? e = !1 : Qk.test(e) ? e = c == e : (e = e.split(".").join("\\."),
                e = (new RegExp("^(.+\\." + e + "|" + e + ")$","i")).test(c));
                if (e)
                    return !0
            }
            return !1
        }, Qk = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, Sk = /^[^@]+@[^@]+$/, Tk = function() {
            var a = null;
            return (new E(function(b) {
                "complete" == p.document.readyState ? b() : (a = function() {
                    b()
                }
                ,
                Wi(window, "load", a))
            }
            )).l(function(b) {
                ej(window, "load", a);
                throw b;
            })
        }, Vk = function() {
            return Uk() ? Tk().then(function() {
                return new E(function(a, b) {
                    var c = p.document
                      , d = setTimeout(function() {
                        b(Error("Cordova framework is not ready."))
                    }, 1E3);
                    c.addEventListener("deviceready", function() {
                        clearTimeout(d);
                        a()
                    }, !1)
                }
                )
            }) : G(Error("Cordova must run in an Android or iOS file scheme."))
        }, Uk = function() {
            var a = Fk();
            return !("file:" !== Wk() && "ionic:" !== Wk() || !a.toLowerCase().match(/iphone|ipad|ipod|android/))
        }, Xk = function() {
            var a = p.window;
            try {
                return !(!a || a == a.top)
            } catch (b) {
                return !1
            }
        }, Yk = function() {
            return "undefined" !== typeof p.WorkerGlobalScope && "function" === typeof p.importScripts
        }, Zk = function() {
            return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase.INTERNAL.hasOwnProperty("node") ? "Node" : Yk() ? "Worker" : "Browser"
        }, $k = function() {
            var a = Zk();
            return "ReactNative" === a || "Node" === a
        }, al = function() {
            for (var a = 50, b = []; 0 < a; )
                b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
                a--;
            return b.join("")
        }, Kk = function(a) {
            var b = a.toLowerCase();
            if (z(b, "opera/") || z(b, "opr/") || z(b, "opios/"))
                return "Opera";
            if (z(b, "iemobile"))
                return "IEMobile";
            if (z(b, "msie") || z(b, "trident/"))
                return "IE";
            if (z(b, "edge/"))
                return "Edge";
            if (z(b, "firefox/"))
                return "Firefox";
            if (z(b, "silk/"))
                return "Silk";
            if (z(b, "blackberry"))
                return "Blackberry";
            if (z(b, "webos"))
                return "Webos";
            if (!z(b, "safari/") || z(b, "chrome/") || z(b, "crios/") || z(b, "android"))
                if (!z(b, "chrome/") && !z(b, "crios/") || z(b, "edge/")) {
                    if (z(b, "android"))
                        return "Android";
                    if ((a = a.match(RegExp("([a-zA-Z\\d\\.]+)/[a-zA-Z\\d\\.]*$"))) && 2 == a.length)
                        return a[1]
                } else
                    return "Chrome";
            else
                return "Safari";
            return "Other"
        }, bl = {
            DEFAULT: "FirebaseCore-web",
            Fm: "FirebaseUI-web",
            Im: "gcip-iap"
        }, cl = function(a, b, c) {
            c = c || [];
            var d = [], e = {}, f;
            for (f in bl)
                e[bl[f]] = !0;
            for (f = 0; f < c.length; f++)
                "undefined" !== typeof e[c[f]] && (delete e[c[f]],
                d.push(c[f]));
            d.sort();
            c = d;
            c.length || (c = ["FirebaseCore-web"]);
            d = Zk();
            return ("Browser" === d ? Kk(Fk()) : "Worker" === d ? Kk(Fk()) + "-" + d : d) + "/" + a + "/" + b + "/" + c.join(",")
        }, Fk = function() {
            return p.navigator && p.navigator.userAgent || ""
        }, N = function(a, b) {
            a = a.split(".");
            b = b || p;
            var c;
            for (c = 0; c < a.length && "object" == typeof b && null != b; c++)
                b = b[a[c]];
            c != a.length && (b = void 0);
            return b
        }, el = function() {
            try {
                var a = p.localStorage
                  , b = dl();
                if (a)
                    return a.setItem(b, "1"),
                    a.removeItem(b),
                    Gk() ? !!p.indexedDB : !0
            } catch (c) {
                return Yk() && !!p.indexedDB
            }
            return !1
        }, gl = function() {
            return (fl() || "chrome-extension:" === Wk() || Uk()) && !$k() && el() && !Yk()
        }, fl = function() {
            return "http:" === Wk() || "https:" === Wk()
        }, Wk = function() {
            return p.location && p.location.protocol || null
        }, hl = function(a) {
            a = a || Fk();
            return Mk(a) || "Firefox" == Kk(a) ? !1 : !0
        }, il = function(a) {
            return "undefined" === typeof a ? null : JSON.stringify(a)
        }, jl = function(a) {
            var b = {}, c;
            for (c in a)
                a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
            return b
        }, kl = function(a) {
            if (null !== a)
                return JSON.parse(a)
        }, dl = function(a) {
            return a ? a : "" + Math.floor(1E9 * Math.random()).toString()
        }, ll = function(a) {
            a = a || Fk();
            return "Safari" == Kk(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0
        }, ml = function() {
            var a = p.___jsl;
            if (a && a.H)
                for (var b in a.H)
                    if (a.H[b].r = a.H[b].r || [],
                    a.H[b].L = a.H[b].L || [],
                    a.H[b].r = a.H[b].L.concat(),
                    a.CP)
                        for (var c = 0; c < a.CP.length; c++)
                            a.CP[c] = null
        }, nl = function(a, b) {
            if (a > b)
                throw Error("Short delay should be less than long delay!");
            this.Nj = a;
            this.zl = b;
            a = Fk();
            b = Zk();
            this.tl = Mk(a) || "ReactNative" === b
        };
        nl.prototype.get = function() {
            var a = p.navigator;
            return (a && "boolean" === typeof a.onLine && (fl() || "chrome-extension:" === Wk() || "undefined" !== typeof a.connection) ? a.onLine : 1) ? this.tl ? this.zl : this.Nj : Math.min(5E3, this.Nj)
        }
        ;
        var ol = function() {
            var a = p.document;
            return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : !0
        }
          , pl = function() {
            var a = p.document
              , b = null;
            return ol() || !a ? F() : (new E(function(c) {
                b = function() {
                    ol() && (a.removeEventListener("visibilitychange", b, !1),
                    c())
                }
                ;
                a.addEventListener("visibilitychange", b, !1)
            }
            )).l(function(c) {
                a.removeEventListener("visibilitychange", b, !1);
                throw c;
            })
        }
          , ql = function(a) {
            "undefined" !== typeof console && "function" === typeof console.warn && console.warn(a)
        }
          , rl = function(a) {
            try {
                var b = new Date(parseInt(a, 10));
                if (!isNaN(b.getTime()) && !/[^0-9]/.test(a))
                    return b.toUTCString()
            } catch (c) {}
            return null
        }
          , sl = function() {
            return !(!N("fireauth.oauthhelper", p) && !N("fireauth.iframe", p))
        }
          , tl = function() {
            var a = p.navigator;
            return a && a.serviceWorker && a.serviceWorker.controller || null
        }
          , ul = function() {
            var a = p.navigator;
            return a && a.serviceWorker ? F().then(function() {
                return a.serviceWorker.ready
            }).then(function(b) {
                return b.active || null
            }).l(function() {
                return null
            }) : F(null)
        };
        var vl = {}
          , wl = function(a) {
            vl[a] || (vl[a] = !0,
            ql(a))
        };
        var xl;
        try {
            var yl = {};
            Object.defineProperty(yl, "abcd", {
                configurable: !0,
                enumerable: !0,
                value: 1
            });
            Object.defineProperty(yl, "abcd", {
                configurable: !0,
                enumerable: !0,
                value: 2
            });
            xl = 2 == yl.abcd
        } catch (a) {
            xl = !1
        }
        var O = function(a, b, c) {
            xl ? Object.defineProperty(a, b, {
                configurable: !0,
                enumerable: !0,
                value: c
            }) : a[b] = c
        }
          , zl = function(a, b) {
            if (b)
                for (var c in b)
                    b.hasOwnProperty(c) && O(a, c, b[c])
        }
          , Al = function(a) {
            var b = {};
            zl(b, a);
            return b
        }
          , Bl = function(a, b) {
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
          , Cl = function(a) {
            var b = a;
            if ("object" == typeof a && null != a) {
                b = "length"in a ? [] : {};
                for (var c in a)
                    O(b, c, Cl(a[c]))
            }
            return b
        };
        var Dl = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")
          , El = ["client_id", "response_type", "scope", "redirect_uri", "state"]
          , Fl = {
            Em: {
                je: "locale",
                Bd: 700,
                Ad: 600,
                providerId: "facebook.com",
                If: El
            },
            Gm: {
                je: null,
                Bd: 500,
                Ad: 750,
                providerId: "github.com",
                If: El
            },
            Hm: {
                je: "hl",
                Bd: 515,
                Ad: 680,
                providerId: "google.com",
                If: El
            },
            Mm: {
                je: "lang",
                Bd: 485,
                Ad: 705,
                providerId: "twitter.com",
                If: Dl
            },
            Cm: {
                je: "locale",
                Bd: 640,
                Ad: 600,
                providerId: "apple.com",
                If: []
            }
        }
          , Gl = function(a) {
            for (var b in Fl)
                if (Fl[b].providerId == a)
                    return Fl[b];
            return null
        };
        var P = function(a, b, c) {
            this.code = "auth/" + a;
            this.message = b || Hl[a] || "";
            this.Fj = c || null
        };
        v(P, Error);
        P.prototype.T = function() {
            var a = {
                code: this.code,
                message: this.message
            };
            this.Fj && (a.serverResponse = this.Fj);
            return a
        }
        ;
        P.prototype.toJSON = function() {
            return this.T()
        }
        ;
        var Il = function(a) {
            var b = a && a.code;
            return b ? new P(b.substring(5),a.message,a.serverResponse) : null
        }
          , Hl = {
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
        var Jl = function(a, b, c, d, e, f, g) {
            this.Qh = a;
            this.Ja = b || null;
            this.Nd = c || null;
            this.Ae = d || null;
            this.jh = f || null;
            this.ma = g || null;
            this.yb = e || null;
            if (this.Nd || this.yb) {
                if (this.Nd && this.yb)
                    throw new P("invalid-auth-event");
                if (this.Nd && !this.Ae)
                    throw new P("invalid-auth-event");
            } else
                throw new P("invalid-auth-event");
        };
        k = Jl.prototype;
        k.getType = function() {
            return this.Qh
        }
        ;
        k.getUid = function() {
            var a = [];
            a.push(this.Qh);
            this.Ja && a.push(this.Ja);
            this.Ae && a.push(this.Ae);
            this.ma && a.push(this.ma);
            return a.join("-")
        }
        ;
        k.de = function() {
            return this.Ae
        }
        ;
        k.getError = function() {
            return this.yb
        }
        ;
        k.T = function() {
            return {
                type: this.Qh,
                eventId: this.Ja,
                urlResponse: this.Nd,
                sessionId: this.Ae,
                postBody: this.jh,
                tenantId: this.ma,
                error: this.yb && this.yb.T()
            }
        }
        ;
        var Kl = function(a) {
            a = a || {};
            return a.type ? new Jl(a.type,a.eventId,a.urlResponse,a.sessionId,a.error && Il(a.error),a.postBody,a.tenantId) : null
        };
        var Ll = function(a, b) {
            if (!b || !a || !a.mfaEnrollmentId)
                throw new P("internal-error","Internal assert: invalid MultiFactorInfo object");
            O(this, "uid", a.mfaEnrollmentId);
            O(this, "displayName", a.displayName || null);
            O(this, "enrollmentTime", a.enrolledAt ? (new Date(a.enrolledAt)).toUTCString() : null);
            O(this, "factorId", b)
        };
        Ll.prototype.T = function() {
            return {
                uid: this.uid,
                displayName: this.displayName,
                factorId: this.factorId,
                enrollmentTime: this.enrollmentTime
            }
        }
        ;
        var Ol = function(a) {
            try {
                if (a.phoneInfo)
                    return new Ml(a);
                if (a.totpInfo)
                    return new Nl(a)
            } catch (b) {}
            return null
        }
          , Ml = function(a) {
            var b = a.phoneInfo;
            if (!b)
                throw new P("internal-error","Internal assert: invalid Phone MultiFactorInfo object");
            Ll.call(this, a, "phone");
            O(this, "phoneNumber", b)
        };
        n(Ml, Ll);
        Ml.prototype.T = function() {
            var a = Ll.prototype.T.call(this);
            a.phoneNumber = this.phoneNumber;
            return a
        }
        ;
        var Nl = function(a) {
            var b = a.totpInfo;
            if (!b)
                throw new P("internal-error","Internal assert: invalid TOTP MultiFactorInfo object");
            Ll.call(this, a, "totp");
            O(this, "totpInfo", b)
        };
        n(Nl, Ll);
        Nl.prototype.T = function() {
            var a = Ll.prototype.T.call(this);
            a.totpInfo = this.totpInfo;
            return a
        }
        ;
        var Pl = function(a) {
            var b = {}
              , c = a.email
              , d = a.newEmail
              , e = a.requestType;
            a = Ol(a.mfaInfo);
            if (!e || "EMAIL_SIGNIN" != e && "VERIFY_AND_CHANGE_EMAIL" != e && !c || "VERIFY_AND_CHANGE_EMAIL" == e && !d || "REVERT_SECOND_FACTOR_ADDITION" == e && !a)
                throw Error("Invalid checkActionCode response!");
            "VERIFY_AND_CHANGE_EMAIL" == e ? (b.fromEmail = c || null,
            b.previousEmail = c || null,
            b.email = d) : (b.fromEmail = d || null,
            b.previousEmail = d || null,
            b.email = c || null);
            b.multiFactorInfo = a || null;
            O(this, "operation", e);
            O(this, "data", Cl(b))
        };
        var Rl = function(a) {
            a = M(a);
            var b = wk(a, "apiKey") || null
              , c = wk(a, "oobCode") || null
              , d = wk(a, "mode") || null;
            d = d ? Ql[d] || null : null;
            if (!b || !c || !d)
                throw new P("argument-error","apiKey, oobCodeand mode are required in a valid action code URL.");
            zl(this, {
                apiKey: b,
                operation: d,
                code: c,
                continueUrl: wk(a, "continueUrl") || null,
                languageCode: wk(a, "languageCode") || null,
                tenantId: wk(a, "tenantId") || null
            })
        }
          , Sl = function(a) {
            try {
                return new Rl(a)
            } catch (b) {
                return null
            }
        }
          , Ql = {
            recoverEmail: "RECOVER_EMAIL",
            resetPassword: "PASSWORD_RESET",
            revertSecondFactorAddition: "REVERT_SECOND_FACTOR_ADDITION",
            signIn: "EMAIL_SIGNIN",
            verifyAndChangeEmail: "VERIFY_AND_CHANGE_EMAIL",
            verifyEmail: "VERIFY_EMAIL"
        };
        var Tl = function(a) {
            var b = M(a)
              , c = wk(b, "link")
              , d = wk(M(c), "link");
            b = wk(b, "deep_link_id");
            return wk(M(b), "link") || b || d || c || a
        };
        var Ul = function(a) {
            var b = "unauthorized-domain"
              , c = void 0
              , d = M(a);
            a = d.Ga;
            d = d.Va;
            "chrome-extension" == d ? c = Vc("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = Vc("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";
            P.call(this, b, c)
        };
        n(Ul, P);
        var Wl = function(a) {
            var b = Vl(a);
            if (!(b && b.sub && b.iss && b.aud && b.exp))
                throw Error("Invalid JWT");
            this.vl = a;
            this.Dg = b.exp;
            this.xl = b.sub;
            a = Date.now() / 1E3;
            this.kl = b.iat || (a > this.Dg ? this.Dg : a);
            this.Jc = b.email || null;
            this.qh = b.provider_id || b.firebase && b.firebase.sign_in_provider || null;
            this.ma = b.firebase && b.firebase.tenant || null;
            this.mk = !!b.is_anonymous || "anonymous" == this.qh
        };
        Wl.prototype.getEmail = function() {
            return this.Jc
        }
        ;
        Wl.prototype.isAnonymous = function() {
            return this.mk
        }
        ;
        Wl.prototype.toString = function() {
            return this.vl
        }
        ;
        var Xl = function(a) {
            try {
                return new Wl(a)
            } catch (b) {
                return null
            }
        }
          , Vl = function(a) {
            if (!a)
                return null;
            a = a.split(".");
            if (3 != a.length)
                return null;
            a = a[1];
            for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++)
                a += ".";
            try {
                var d = wi(a);
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
                          , l = ((e & 7) << 18 | (f & 63) << 12 | (g & 63) << 6 | h & 63) - 65536;
                        a[c++] = String.fromCharCode(55296 + (l >> 10));
                        a[c++] = String.fromCharCode(56320 + (l & 1023))
                    } else
                        f = d[b++],
                        g = d[b++],
                        a[c++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63)
                }
                return JSON.parse(a.join(""))
            } catch (m) {}
            return null
        };
        var Yl = function(a) {
            var b = Vl(a);
            if (!(b && b.exp && b.auth_time && b.iat))
                throw new P("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
            zl(this, {
                token: a,
                expirationTime: rl(1E3 * b.exp),
                authTime: rl(1E3 * b.auth_time),
                issuedAtTime: rl(1E3 * b.iat),
                signInProvider: b.firebase && b.firebase.sign_in_provider ? b.firebase.sign_in_provider : null,
                signInSecondFactor: b.firebase && b.firebase.sign_in_second_factor ? b.firebase.sign_in_second_factor : null,
                claims: b
            })
        };
        var Zl = function(a, b) {
            if (!a && !b)
                throw new P("internal-error","Internal assert: no raw session string available");
            if (a && b)
                throw new P("internal-error","Internal assert: unable to determine the session type");
            this.hf = a || null;
            this.dj = b || null;
            this.type = this.hf ? "enroll" : "signin"
        };
        Zl.prototype.be = function() {
            return this.hf ? F(this.hf) : F(this.dj)
        }
        ;
        Zl.prototype.T = function() {
            return "enroll" == this.type ? {
                multiFactorSession: {
                    idToken: this.hf
                }
            } : {
                multiFactorSession: {
                    pendingCredential: this.dj
                }
            }
        }
        ;
        var $l = function() {};
        $l.prototype.Mc = function() {}
        ;
        $l.prototype.wd = function() {}
        ;
        $l.prototype.me = function() {}
        ;
        $l.prototype.T = function() {}
        ;
        var am = function(a, b) {
            return a.then(function(c) {
                if (c.idToken) {
                    var d = Xl(c.idToken);
                    if (!d || b != d.xl)
                        throw new P("user-mismatch");
                    return c
                }
                throw new P("user-mismatch");
            }).l(function(c) {
                throw c && c.code && "auth/user-not-found" == c.code ? new P("user-mismatch") : c;
            })
        }
          , bm = function(a, b) {
            if (b)
                this.Xb = b;
            else
                throw new P("internal-error","failed to construct a credential");
            O(this, "providerId", a);
            O(this, "signInMethod", a)
        };
        k = bm.prototype;
        k.Mc = function(a) {
            return cm(a, this.Qc())
        }
        ;
        k.wd = function(a, b) {
            var c = this.Qc();
            c.idToken = b;
            return dm(a, c)
        }
        ;
        k.me = function(a, b) {
            var c = this.Qc();
            return am(em(a, c), b)
        }
        ;
        k.Qc = function() {
            return {
                pendingToken: this.Xb,
                requestUri: "http://localhost"
            }
        }
        ;
        k.T = function() {
            return {
                providerId: this.providerId,
                signInMethod: this.signInMethod,
                pendingToken: this.Xb
            }
        }
        ;
        var fm = function(a) {
            if (a && a.providerId && a.signInMethod && 0 == a.providerId.indexOf("saml.") && a.pendingToken)
                try {
                    return new bm(a.providerId,a.pendingToken)
                } catch (b) {}
            return null
        }
          , gm = function(a, b, c) {
            this.Xb = null;
            if (b.idToken || b.accessToken)
                b.idToken && O(this, "idToken", b.idToken),
                b.accessToken && O(this, "accessToken", b.accessToken),
                b.nonce && !b.pendingToken && O(this, "nonce", b.nonce),
                b.pendingToken && (this.Xb = b.pendingToken);
            else if (b.oauthToken && b.oauthTokenSecret)
                O(this, "accessToken", b.oauthToken),
                O(this, "secret", b.oauthTokenSecret);
            else
                throw new P("internal-error","failed to construct a credential");
            O(this, "providerId", a);
            O(this, "signInMethod", c)
        };
        k = gm.prototype;
        k.Mc = function(a) {
            return cm(a, this.Qc())
        }
        ;
        k.wd = function(a, b) {
            var c = this.Qc();
            c.idToken = b;
            return dm(a, c)
        }
        ;
        k.me = function(a, b) {
            var c = this.Qc();
            return am(em(a, c), b)
        }
        ;
        k.Qc = function() {
            var a = {};
            this.idToken && (a.id_token = this.idToken);
            this.accessToken && (a.access_token = this.accessToken);
            this.secret && (a.oauth_token_secret = this.secret);
            a.providerId = this.providerId;
            this.nonce && !this.Xb && (a.nonce = this.nonce);
            a = {
                postBody: Ak(a).toString(),
                requestUri: "http://localhost"
            };
            this.Xb && (delete a.postBody,
            a.pendingToken = this.Xb);
            return a
        }
        ;
        k.T = function() {
            var a = {
                providerId: this.providerId,
                signInMethod: this.signInMethod
            };
            this.idToken && (a.oauthIdToken = this.idToken);
            this.accessToken && (a.oauthAccessToken = this.accessToken);
            this.secret && (a.oauthTokenSecret = this.secret);
            this.nonce && (a.nonce = this.nonce);
            this.Xb && (a.pendingToken = this.Xb);
            return a
        }
        ;
        var hm = function(a) {
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
                    return new gm(a.providerId,b,a.signInMethod)
                } catch (c) {}
            }
            return null
        }
          , im = function(a, b) {
            this.Rl = b || [];
            zl(this, {
                providerId: a,
                isOAuthProvider: !0
            });
            this.ki = {};
            this.Sg = (Gl(a) || {}).je || null;
            this.xg = null
        };
        im.prototype.setCustomParameters = function(a) {
            this.ki = Za(a);
            return this
        }
        ;
        var jm = function(a) {
            if ("string" !== typeof a || 0 != a.indexOf("saml."))
                throw new P("argument-error",'SAML provider IDs must be prefixed with "saml."');
            im.call(this, a, [])
        };
        v(jm, im);
        var km = function(a) {
            im.call(this, a, El);
            this.Ah = []
        };
        v(km, im);
        km.prototype.addScope = function(a) {
            Pa(this.Ah, a) || this.Ah.push(a);
            return this
        }
        ;
        km.prototype.Di = function() {
            return Ta(this.Ah)
        }
        ;
        km.prototype.credential = function(a, b) {
            a = t(a) ? {
                idToken: a.idToken || null,
                accessToken: a.accessToken || null,
                nonce: a.rawNonce || null
            } : {
                idToken: a || null,
                accessToken: b || null
            };
            if (!a.idToken && !a.accessToken)
                throw new P("argument-error","credential failed: must provide the ID token and/or the access token.");
            return new gm(this.providerId,a,this.providerId)
        }
        ;
        var lm = function() {
            km.call(this, "facebook.com")
        };
        v(lm, km);
        O(lm, "PROVIDER_ID", "facebook.com");
        O(lm, "FACEBOOK_SIGN_IN_METHOD", "facebook.com");
        var mm = function(a) {
            if (!a)
                throw new P("argument-error","credential failed: expected 1 argument (the OAuth access token).");
            var b = a;
            t(a) && (b = a.accessToken);
            return (new lm).credential({
                accessToken: b
            })
        }
          , nm = function() {
            km.call(this, "github.com")
        };
        v(nm, km);
        O(nm, "PROVIDER_ID", "github.com");
        O(nm, "GITHUB_SIGN_IN_METHOD", "github.com");
        var om = function(a) {
            if (!a)
                throw new P("argument-error","credential failed: expected 1 argument (the OAuth access token).");
            var b = a;
            t(a) && (b = a.accessToken);
            return (new nm).credential({
                accessToken: b
            })
        }
          , pm = function() {
            km.call(this, "google.com");
            this.addScope("profile")
        };
        v(pm, km);
        O(pm, "PROVIDER_ID", "google.com");
        O(pm, "GOOGLE_SIGN_IN_METHOD", "google.com");
        var qm = function(a, b) {
            var c = a;
            t(a) && (c = a.idToken,
            b = a.accessToken);
            return (new pm).credential({
                idToken: c,
                accessToken: b
            })
        }
          , rm = function() {
            im.call(this, "twitter.com", Dl)
        };
        v(rm, im);
        O(rm, "PROVIDER_ID", "twitter.com");
        O(rm, "TWITTER_SIGN_IN_METHOD", "twitter.com");
        var sm = function(a, b) {
            var c = a;
            t(c) || (c = {
                oauthToken: a,
                oauthTokenSecret: b
            });
            if (!c.oauthToken || !c.oauthTokenSecret)
                throw new P("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");
            return new gm("twitter.com",c,"twitter.com")
        }
          , um = function(a, b, c) {
            this.Jc = a;
            this.ne = b;
            O(this, "providerId", "password");
            O(this, "signInMethod", c === tm.EMAIL_LINK_SIGN_IN_METHOD ? tm.EMAIL_LINK_SIGN_IN_METHOD : tm.EMAIL_PASSWORD_SIGN_IN_METHOD)
        };
        um.prototype.Mc = function(a) {
            return this.signInMethod == tm.EMAIL_LINK_SIGN_IN_METHOD ? Q(a, vm, {
                email: this.Jc,
                oobCode: this.ne
            }) : Q(a, wm, {
                email: this.Jc,
                password: this.ne
            })
        }
        ;
        um.prototype.wd = function(a, b) {
            return this.signInMethod == tm.EMAIL_LINK_SIGN_IN_METHOD ? Q(a, xm, {
                idToken: b,
                email: this.Jc,
                oobCode: this.ne
            }) : Q(a, ym, {
                idToken: b,
                email: this.Jc,
                password: this.ne
            })
        }
        ;
        um.prototype.me = function(a, b) {
            return am(this.Mc(a), b)
        }
        ;
        um.prototype.T = function() {
            return {
                email: this.Jc,
                password: this.ne,
                signInMethod: this.signInMethod
            }
        }
        ;
        var zm = function(a) {
            return a && a.email && a.password ? new um(a.email,a.password,a.signInMethod) : null
        }
          , tm = function() {
            zl(this, {
                providerId: "password",
                isOAuthProvider: !1
            })
        }
          , Bm = function(a, b) {
            b = Am(b);
            if (!b)
                throw new P("argument-error","Invalid email link!");
            return new um(a,b.code,tm.EMAIL_LINK_SIGN_IN_METHOD)
        }
          , Am = function(a) {
            a = Tl(a);
            return (a = Sl(a)) && "EMAIL_SIGNIN" === a.operation ? a : null
        };
        zl(tm, {
            PROVIDER_ID: "password"
        });
        zl(tm, {
            EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
        });
        zl(tm, {
            EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
        });
        var Cm = function(a) {
            if (!(a.verificationId && a.Yf || a.Fe && a.phoneNumber))
                throw new P("internal-error");
            this.wa = a;
            O(this, "providerId", "phone");
            this.providerId = "phone";
            O(this, "signInMethod", "phone")
        };
        Cm.prototype.Mc = function(a) {
            return a.verifyPhoneNumber(Dm(this))
        }
        ;
        Cm.prototype.wd = function(a, b) {
            var c = Dm(this);
            c.idToken = b;
            return Q(a, Em, c)
        }
        ;
        Cm.prototype.me = function(a, b) {
            var c = Dm(this);
            c.operation = "REAUTH";
            a = Q(a, Fm, c);
            return am(a, b)
        }
        ;
        Cm.prototype.T = function() {
            var a = {
                providerId: "phone"
            };
            this.wa.verificationId && (a.verificationId = this.wa.verificationId);
            this.wa.Yf && (a.verificationCode = this.wa.Yf);
            this.wa.Fe && (a.temporaryProof = this.wa.Fe);
            this.wa.phoneNumber && (a.phoneNumber = this.wa.phoneNumber);
            return a
        }
        ;
        var Gm = function(a) {
            if (a && "phone" === a.providerId && (a.verificationId && a.verificationCode || a.temporaryProof && a.phoneNumber)) {
                var b = {};
                x(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function(c) {
                    a[c] && (b[c] = a[c])
                });
                return new Cm(b)
            }
            return null
        }
          , Dm = function(a) {
            return a.wa.Fe && a.wa.phoneNumber ? {
                temporaryProof: a.wa.Fe,
                phoneNumber: a.wa.phoneNumber
            } : {
                sessionInfo: a.wa.verificationId,
                code: a.wa.Yf
            }
        }
          , Hm = function(a) {
            try {
                this.Oe = a || firebase.auth()
            } catch (b) {
                throw new P("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
            }
            zl(this, {
                providerId: "phone",
                isOAuthProvider: !1
            })
        };
        Hm.prototype.verifyPhoneNumber = function(a, b) {
            var c = this.Oe.o;
            return F(b.verify()).then(function(d) {
                if ("string" !== typeof d)
                    throw new P("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
                switch (b.type) {
                case "recaptcha":
                    var e = t(a) ? a.session : null
                      , f = t(a) ? a.phoneNumber : a;
                    return (e && "enroll" == e.type ? e.be().then(function(g) {
                        return Im(c, {
                            idToken: g,
                            phoneEnrollmentInfo: {
                                phoneNumber: f,
                                recaptchaToken: d
                            }
                        })
                    }) : e && "signin" == e.type ? e.be().then(function(g) {
                        return Jm(c, {
                            mfaPendingCredential: g,
                            mfaEnrollmentId: a.multiFactorHint && a.multiFactorHint.uid || a.multiFactorUid,
                            phoneSignInInfo: {
                                recaptchaToken: d
                            }
                        })
                    }) : Km(c, {
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
        var Lm = function(a, b) {
            if (!a)
                throw new P("missing-verification-id");
            if (!b)
                throw new P("missing-verification-code");
            return new Cm({
                verificationId: a,
                Yf: b
            })
        };
        zl(Hm, {
            PROVIDER_ID: "phone"
        });
        zl(Hm, {
            PHONE_SIGN_IN_METHOD: "phone"
        });
        var Mm = function(a) {
            if (a.temporaryProof && a.phoneNumber)
                return new Cm({
                    Fe: a.temporaryProof,
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
                    return qm(f, c);
                case "facebook.com":
                    return mm(c);
                case "github.com":
                    return om(c);
                case "twitter.com":
                    return sm(c, d);
                default:
                    return c || d || f || g ? g ? 0 == b.indexOf("saml.") ? new bm(b,g) : new gm(b,{
                        pendingToken: g,
                        idToken: a.oauthIdToken,
                        accessToken: a.oauthAccessToken
                    },b) : (new km(b)).credential({
                        idToken: f,
                        accessToken: c,
                        rawNonce: e
                    }) : null
                }
            } catch (h) {
                return null
            }
        }
          , Nm = function(a) {
            if (!a.isOAuthProvider)
                throw new P("invalid-oauth-provider");
        };
        var Om = function(a, b, c) {
            P.call(this, a, c);
            a = b || {};
            a.email && O(this, "email", a.email);
            a.phoneNumber && O(this, "phoneNumber", a.phoneNumber);
            a.credential && O(this, "credential", a.credential);
            a.tenantId && O(this, "tenantId", a.tenantId)
        };
        n(Om, P);
        Om.prototype.T = function() {
            var a = {
                code: this.code,
                message: this.message
            };
            this.email && (a.email = this.email);
            this.phoneNumber && (a.phoneNumber = this.phoneNumber);
            this.tenantId && (a.tenantId = this.tenantId);
            var b = this.credential && this.credential.T();
            b && ab(a, b);
            return a
        }
        ;
        Om.prototype.toJSON = function() {
            return this.T()
        }
        ;
        var Pm = function(a) {
            if (a.code) {
                var b = a.code || "";
                0 == b.indexOf("auth/") && (b = b.substring(5));
                var c = {
                    credential: Mm(a),
                    tenantId: a.tenantId
                };
                if (a.email)
                    c.email = a.email;
                else if (a.phoneNumber)
                    c.phoneNumber = a.phoneNumber;
                else if (!c.credential)
                    return new P(b,a.message || void 0);
                return new Om(b,c,a.message)
            }
            return null
        };
        var Qm = function(a) {
            this.Bm = a
        };
        n(Qm, kj);
        Qm.prototype.Ud = function() {
            return new this.Bm
        }
        ;
        Qm.prototype.qf = function() {
            return {}
        }
        ;
        var Vm = function(a, b, c) {
            this.ha = a;
            b = b || {};
            this.Ej = b.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
            this.im = b.secureTokenTimeout || Rm;
            this.Of = Za(b.secureTokenHeaders || Sm);
            this.xi = b.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
            this.Li = b.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/";
            this.Kk = b.firebaseTimeout || Tm;
            this.nd = Za(b.firebaseHeaders || Um);
            c && (this.nd["X-Client-Version"] = c,
            this.Of["X-Client-Version"] = c);
            a = "Node" == Zk();
            a = p.XMLHttpRequest || a && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;
            if (!a && !Yk())
                throw new P("internal-error","The XMLHttpRequest compatibility library was not found.");
            this.Mf = void 0;
            Yk() ? this.Mf = new rj({
                Am: self
            }) : $k() ? this.Mf = new Qm(a) : this.Mf = new oj;
            this.ma = null
        }, Wm, Xm = function(a, b) {
            b ? a.nd["X-Firebase-Locale"] = b : delete a.nd["X-Firebase-Locale"]
        }, Zm = function(a, b) {
            b && (a.Ej = Ym("https://securetoken.googleapis.com/v1/token", b),
            a.xi = Ym("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", b),
            a.Li = Ym("https://identitytoolkit.googleapis.com/v2/", b))
        }, Ym = function(a, b) {
            a = M(a);
            b = M(b.url);
            a.setPath(a.Ga + a.getPath());
            jk(a, b.Va);
            lk(a, b.Ga);
            mk(a, b.Tb);
            return a.toString()
        }, $m = function(a, b) {
            b ? (a.nd["X-Client-Version"] = b,
            a.Of["X-Client-Version"] = b) : (delete a.nd["X-Client-Version"],
            delete a.Of["X-Client-Version"])
        }, bn = function(a, b, c, d, e, f, g) {
            Lk() || Yk() ? a = u(a.km, a) : (Wm || (Wm = new E(function(h, l) {
                an(h, l)
            }
            )),
            a = u(a.jm, a));
            a(b, c, d, e, f, g)
        };
        Vm.prototype.km = function(a, b, c, d, e, f) {
            if (Yk() && ("undefined" === typeof p.fetch || "undefined" === typeof p.Headers || "undefined" === typeof p.Request))
                throw new P("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
            var g = new Uj(this.Mf);
            if (f) {
                g.Ld = Math.max(0, f);
                var h = setTimeout(function() {
                    g.dispatchEvent("timeout")
                }, f)
            }
            g.listen("complete", function() {
                h && clearTimeout(h);
                var l = null;
                try {
                    var m = JSON
                      , q = m.parse;
                    try {
                        var y = this.u ? this.u.responseText : ""
                    } catch (B) {
                        rc(this.Ea, "Can not get responseText: " + B.message),
                        y = ""
                    }
                    l = q.call(m, y) || null
                } catch (B) {
                    l = null
                }
                b && b(l)
            });
            dj(g, "ready", function() {
                h && clearTimeout(h);
                this.Ic()
            });
            dj(g, "timeout", function() {
                h && clearTimeout(h);
                this.Ic();
                b && b(null)
            });
            g.send(a, c, d, e)
        }
        ;
        var an = function(a, b) {
            if (((window.gapi || {}).client || {}).request)
                a();
            else {
                p[cn] = function() {
                    ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"))
                }
                ;
                var c = tb(dn, {
                    onload: cn
                });
                Gj(Pj(c), function() {
                    b(Error("CORS_UNSUPPORTED"))
                })
            }
        };
        Vm.prototype.jm = function(a, b, c, d, e) {
            var f = this;
            Wm.then(function() {
                window.gapi.client.setApiKey(f.ha);
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
            }).l(function(g) {
                b && b({
                    error: {
                        message: g && g.message || "CORS_UNSUPPORTED"
                    }
                })
            })
        }
        ;
        var fn = function(a, b) {
            return new E(function(c, d) {
                "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? bn(a, a.Ej + "?key=" + encodeURIComponent(a.ha), function(e) {
                    e ? e.error ? d(en(e)) : e.access_token && e.refresh_token ? c(e) : d(new P("internal-error")) : d(new P("network-request-failed"))
                }, "POST", Ak(b).toString(), a.Of, a.im.get()) : d(new P("internal-error"))
            }
            )
        }
          , gn = function(a, b, c, d, e, f, g) {
            var h = M(b + c);
            L(h, "key", a.ha);
            g && L(h, "cb", Date.now().toString());
            var l = "GET" == d;
            if (l)
                for (var m in e)
                    e.hasOwnProperty(m) && L(h, m, e[m]);
            return new E(function(q, y) {
                bn(a, h.toString(), function(B) {
                    B ? B.error ? y(en(B, f || {})) : q(B) : y(new P("network-request-failed"))
                }, d, l ? void 0 : JSON.stringify(jl(e)), a.nd, a.Kk.get())
            }
            )
        }
          , hn = function(a) {
            a = a.email;
            if ("string" !== typeof a || !Sk.test(a))
                throw new P("invalid-email");
        }
          , jn = function(a) {
            "email"in a && hn(a)
        }
          , ln = function(a, b) {
            return Q(a, kn, {
                identifier: b,
                continueUri: fl() ? Hk() : "http://localhost"
            }).then(function(c) {
                return c.signinMethods || []
            })
        }
          , nn = function(a) {
            return Q(a, mn, {}).then(function(b) {
                return b.authorizedDomains || []
            })
        }
          , on = function(a) {
            if (!a.idToken) {
                if (a.mfaPendingCredential)
                    throw new P("multi-factor-auth-required",null,Za(a));
                throw new P("internal-error");
            }
        }
          , pn = function(a) {
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
        k = Vm.prototype;
        k.signInAnonymously = function() {
            return Q(this, qn, {})
        }
        ;
        k.updateEmail = function(a, b) {
            return Q(this, rn, {
                idToken: a,
                email: b
            })
        }
        ;
        k.updatePassword = function(a, b) {
            return Q(this, ym, {
                idToken: a,
                password: b
            })
        }
        ;
        k.updateProfile = function(a, b) {
            var c = {
                idToken: a
            }
              , d = [];
            Wa(sn, function(e, f) {
                var g = b[f];
                null === g ? d.push(e) : f in b && (c[f] = g)
            });
            d.length && (c.deleteAttribute = d);
            return Q(this, rn, c)
        }
        ;
        k.sendPasswordResetEmail = function(a, b) {
            a = {
                requestType: "PASSWORD_RESET",
                email: a
            };
            ab(a, b);
            return Q(this, tn, a)
        }
        ;
        k.sendSignInLinkToEmail = function(a, b) {
            a = {
                requestType: "EMAIL_SIGNIN",
                email: a
            };
            ab(a, b);
            return Q(this, un, a)
        }
        ;
        k.sendEmailVerification = function(a, b) {
            a = {
                requestType: "VERIFY_EMAIL",
                idToken: a
            };
            ab(a, b);
            return Q(this, vn, a)
        }
        ;
        k.verifyBeforeUpdateEmail = function(a, b, c) {
            a = {
                requestType: "VERIFY_AND_CHANGE_EMAIL",
                idToken: a,
                newEmail: b
            };
            ab(a, c);
            return Q(this, wn, a)
        }
        ;
        var Km = function(a, b) {
            return Q(a, xn, b)
        };
        Vm.prototype.verifyPhoneNumber = function(a) {
            return Q(this, yn, a)
        }
        ;
        var Im = function(a, b) {
            return Q(a, zn, b).then(function(c) {
                return c.phoneSessionInfo.sessionInfo
            })
        }
          , An = function(a) {
            if (!a.phoneVerificationInfo)
                throw new P("internal-error");
            if (!a.phoneVerificationInfo.sessionInfo)
                throw new P("missing-verification-id");
            if (!a.phoneVerificationInfo.code)
                throw new P("missing-verification-code");
        }
          , Jm = function(a, b) {
            return Q(a, Bn, b).then(function(c) {
                return c.phoneResponseInfo.sessionInfo
            })
        }
          , Dn = function(a, b, c) {
            return Q(a, Cn, {
                idToken: b,
                deleteProvider: c
            })
        }
          , En = function(a) {
            if (!a.requestUri || !a.sessionId && !a.postBody && !a.pendingToken)
                throw new P("internal-error");
        }
          , Fn = function(a, b) {
            b.oauthIdToken && b.providerId && 0 == b.providerId.indexOf("oidc.") && !b.pendingToken && (a.sessionId ? b.nonce = a.sessionId : a.postBody && (a = new pk(a.postBody),
            Bk(a, "nonce") && (b.nonce = a.get("nonce"))));
            return b
        }
          , Hn = function(a) {
            var b = null;
            a.needConfirmation ? (a.code = "account-exists-with-different-credential",
            b = Pm(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use",
            b = Pm(a)) : "EMAIL_EXISTS" == a.errorMessage ? (a.code = "email-already-in-use",
            b = Pm(a)) : a.errorMessage && (b = Gn(a.errorMessage));
            if (b)
                throw b;
            on(a)
        }
          , cm = function(a, b) {
            b.returnIdpCredential = !0;
            return Q(a, In, b)
        }
          , dm = function(a, b) {
            b.returnIdpCredential = !0;
            return Q(a, Jn, b)
        }
          , em = function(a, b) {
            b.returnIdpCredential = !0;
            b.autoCreate = !1;
            return Q(a, Kn, b)
        }
          , Ln = function(a) {
            if (!a.oobCode)
                throw new P("invalid-action-code");
        };
        Vm.prototype.confirmPasswordReset = function(a, b) {
            return Q(this, Mn, {
                oobCode: a,
                newPassword: b
            })
        }
        ;
        Vm.prototype.checkActionCode = function(a) {
            return Q(this, Nn, {
                oobCode: a
            })
        }
        ;
        Vm.prototype.applyActionCode = function(a) {
            return Q(this, On, {
                oobCode: a
            })
        }
        ;
        var Q = function(a, b, c) {
            if (!Bl(c, b.Ma))
                return G(new P("internal-error"));
            var d = !!b.Je, e = b.httpMethod || "POST", f;
            return F(c).then(b.oa).then(function() {
                b.Mb && (c.returnSecureToken = !0);
                b.ta && a.ma && "undefined" === typeof c.tenantId && (c.tenantId = a.ma);
                return d ? gn(a, a.Li, b.endpoint, e, c, b.ji, b.og || !1) : gn(a, a.xi, b.endpoint, e, c, b.ji, b.og || !1)
            }).then(function(g) {
                f = g;
                return b.Jf ? b.Jf(c, f) : f
            }).then(b.Aa).then(function() {
                if (!b.Zb)
                    return f;
                if (!(b.Zb in f))
                    throw new P("internal-error");
                return f[b.Zb]
            })
        }
          , Gn = function(a) {
            return en({
                error: {
                    errors: [{
                        message: a
                    }],
                    code: 400,
                    reason: a
                }
            })
        }
          , en = function(a, b) {
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
            ab(d, b);
            b = (b = c.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < b.length ? b[1] : void 0;
            for (var e in d)
                if (0 === c.indexOf(e))
                    return new P(d[e],b);
            !b && a && (b = il(a));
            return new P("internal-error",b)
        }
          , Rm = new nl(3E4,6E4)
          , Sm = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
          , Tm = new nl(3E4,6E4)
          , Um = {
            "Content-Type": "application/json"
        }
          , dn = new lb(jb,"https://apis.google.com/js/client.js?onload=%{onload}")
          , cn = "__fcb" + Math.floor(1E6 * Math.random()).toString()
          , sn = {
            displayName: "DISPLAY_NAME",
            photoUrl: "PHOTO_URL"
        }
          , On = {
            endpoint: "setAccountInfo",
            oa: Ln,
            Zb: "email",
            ta: !0
        }
          , Nn = {
            endpoint: "resetPassword",
            oa: Ln,
            Aa: function(a) {
                var b = a.requestType;
                if (!b || !a.email && "EMAIL_SIGNIN" != b && "VERIFY_AND_CHANGE_EMAIL" != b)
                    throw new P("internal-error");
            },
            ta: !0
        }
          , Pn = {
            endpoint: "signupNewUser",
            oa: function(a) {
                hn(a);
                if (!a.password)
                    throw new P("weak-password");
            },
            Aa: on,
            Mb: !0,
            ta: !0
        }
          , kn = {
            endpoint: "createAuthUri",
            ta: !0
        }
          , Qn = {
            endpoint: "deleteAccount",
            Ma: ["idToken"]
        }
          , Cn = {
            endpoint: "setAccountInfo",
            Ma: ["idToken", "deleteProvider"],
            oa: function(a) {
                if (!Array.isArray(a.deleteProvider))
                    throw new P("internal-error");
            }
        }
          , vm = {
            endpoint: "emailLinkSignin",
            Ma: ["email", "oobCode"],
            oa: hn,
            Aa: on,
            Mb: !0,
            ta: !0
        }
          , xm = {
            endpoint: "emailLinkSignin",
            Ma: ["idToken", "email", "oobCode"],
            oa: hn,
            Aa: on,
            Mb: !0
        }
          , Rn = {
            endpoint: "accounts/mfaEnrollment:finalize",
            Ma: ["idToken", "phoneVerificationInfo"],
            oa: An,
            Aa: on,
            ta: !0,
            Je: !0
        }
          , Sn = {
            endpoint: "accounts/mfaSignIn:finalize",
            Ma: ["mfaPendingCredential", "phoneVerificationInfo"],
            oa: An,
            Aa: on,
            ta: !0,
            Je: !0
        }
          , Tn = {
            endpoint: "getAccountInfo"
        }
          , un = {
            endpoint: "getOobConfirmationCode",
            Ma: ["requestType"],
            oa: function(a) {
                if ("EMAIL_SIGNIN" != a.requestType)
                    throw new P("internal-error");
                hn(a)
            },
            Zb: "email",
            ta: !0
        }
          , vn = {
            endpoint: "getOobConfirmationCode",
            Ma: ["idToken", "requestType"],
            oa: function(a) {
                if ("VERIFY_EMAIL" != a.requestType)
                    throw new P("internal-error");
            },
            Zb: "email",
            ta: !0
        }
          , wn = {
            endpoint: "getOobConfirmationCode",
            Ma: ["idToken", "newEmail", "requestType"],
            oa: function(a) {
                if ("VERIFY_AND_CHANGE_EMAIL" != a.requestType)
                    throw new P("internal-error");
            },
            Zb: "email",
            ta: !0
        }
          , tn = {
            endpoint: "getOobConfirmationCode",
            Ma: ["requestType"],
            oa: function(a) {
                if ("PASSWORD_RESET" != a.requestType)
                    throw new P("internal-error");
                hn(a)
            },
            Zb: "email",
            ta: !0
        }
          , mn = {
            og: !0,
            endpoint: "getProjectConfig",
            httpMethod: "GET"
        }
          , Un = {
            og: !0,
            endpoint: "getRecaptchaParam",
            httpMethod: "GET",
            Aa: function(a) {
                if (!a.recaptchaSiteKey)
                    throw new P("internal-error");
            }
        }
          , Mn = {
            endpoint: "resetPassword",
            oa: Ln,
            Zb: "email",
            ta: !0
        }
          , xn = {
            endpoint: "sendVerificationCode",
            Ma: ["phoneNumber", "recaptchaToken"],
            Zb: "sessionInfo",
            ta: !0
        }
          , rn = {
            endpoint: "setAccountInfo",
            Ma: ["idToken"],
            oa: jn,
            Mb: !0
        }
          , ym = {
            endpoint: "setAccountInfo",
            Ma: ["idToken"],
            oa: function(a) {
                jn(a);
                if (!a.password)
                    throw new P("weak-password");
            },
            Aa: on,
            Mb: !0
        }
          , qn = {
            endpoint: "signupNewUser",
            Aa: on,
            Mb: !0,
            ta: !0
        }
          , zn = {
            endpoint: "accounts/mfaEnrollment:start",
            Ma: ["idToken", "phoneEnrollmentInfo"],
            oa: function(a) {
                if (!a.phoneEnrollmentInfo)
                    throw new P("internal-error");
                if (!a.phoneEnrollmentInfo.phoneNumber)
                    throw new P("missing-phone-number");
                if (!a.phoneEnrollmentInfo.recaptchaToken)
                    throw new P("missing-app-credential");
            },
            Aa: function(a) {
                if (!a.phoneSessionInfo || !a.phoneSessionInfo.sessionInfo)
                    throw new P("internal-error");
            },
            ta: !0,
            Je: !0
        }
          , Bn = {
            endpoint: "accounts/mfaSignIn:start",
            Ma: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
            oa: function(a) {
                if (!a.phoneSignInInfo || !a.phoneSignInInfo.recaptchaToken)
                    throw new P("missing-app-credential");
            },
            Aa: function(a) {
                if (!a.phoneResponseInfo || !a.phoneResponseInfo.sessionInfo)
                    throw new P("internal-error");
            },
            ta: !0,
            Je: !0
        }
          , In = {
            endpoint: "verifyAssertion",
            oa: En,
            Jf: Fn,
            Aa: Hn,
            Mb: !0,
            ta: !0
        }
          , Kn = {
            endpoint: "verifyAssertion",
            oa: En,
            Jf: Fn,
            Aa: function(a) {
                if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage)
                    throw new P("user-not-found");
                if (a.errorMessage)
                    throw Gn(a.errorMessage);
                on(a)
            },
            Mb: !0,
            ta: !0
        }
          , Jn = {
            endpoint: "verifyAssertion",
            oa: function(a) {
                En(a);
                if (!a.idToken)
                    throw new P("internal-error");
            },
            Jf: Fn,
            Aa: Hn,
            Mb: !0
        }
          , Vn = {
            endpoint: "verifyCustomToken",
            oa: function(a) {
                if (!a.token)
                    throw new P("invalid-custom-token");
            },
            Aa: on,
            Mb: !0,
            ta: !0
        }
          , wm = {
            endpoint: "verifyPassword",
            oa: function(a) {
                hn(a);
                if (!a.password)
                    throw new P("wrong-password");
            },
            Aa: on,
            Mb: !0,
            ta: !0
        }
          , yn = {
            endpoint: "verifyPhoneNumber",
            oa: pn,
            Aa: on,
            ta: !0
        }
          , Em = {
            endpoint: "verifyPhoneNumber",
            oa: function(a) {
                if (!a.idToken)
                    throw new P("internal-error");
                pn(a)
            },
            Aa: function(a) {
                if (a.temporaryProof)
                    throw a.code = "credential-already-in-use",
                    Pm(a);
                on(a)
            }
        }
          , Fm = {
            ji: {
                USER_NOT_FOUND: "user-not-found"
            },
            endpoint: "verifyPhoneNumber",
            oa: pn,
            Aa: on,
            ta: !0
        }
          , Wn = {
            endpoint: "accounts/mfaEnrollment:withdraw",
            Ma: ["idToken", "mfaEnrollmentId"],
            Aa: function(a) {
                if (!!a.idToken ^ !!a.refreshToken)
                    throw new P("internal-error");
            },
            ta: !0,
            Je: !0
        };
        var Yn = function(a) {
            this.hb = a;
            this.mf = null;
            this.Yg = Xn(this)
        };
        Yn.prototype.onReady = function() {
            return this.Yg
        }
        ;
        var Xn = function(a) {
            return Zn().then(function() {
                return new E(function(b, c) {
                    N("gapi.iframes.getContext")().open({
                        where: document.body,
                        url: a.hb,
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
                        a.mf = d;
                        a.mf.restyle({
                            setHideOnLeave: !1
                        });
                        var e = setTimeout(function() {
                            c(Error("Network Error"))
                        }, $n.get())
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
        Yn.prototype.sendMessage = function(a) {
            var b = this;
            return this.Yg.then(function() {
                return new E(function(c) {
                    b.mf.send(a.type, a, c, N("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                }
                )
            })
        }
        ;
        Yn.prototype.th = function(a, b) {
            var c = this;
            this.Yg.then(function() {
                c.mf.register(a, b, N("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
            })
        }
        ;
        var Zn = function() {
            return ao ? ao : ao = (new E(function(a, b) {
                var c = function() {
                    ml();
                    N("gapi.load")("gapi.iframes", {
                        callback: a,
                        ontimeout: function() {
                            ml();
                            b(Error("Network Error"))
                        },
                        timeout: bo.get()
                    })
                };
                if (N("gapi.iframes.Iframe"))
                    a();
                else if (N("gapi.load"))
                    c();
                else {
                    var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();
                    p[d] = function() {
                        N("gapi.load") ? c() : b(Error("Network Error"))
                    }
                    ;
                    d = tb(co, {
                        onload: d
                    });
                    F(Pj(d)).l(function() {
                        b(Error("Network Error"))
                    })
                }
            }
            )).l(function(a) {
                ao = null;
                throw a;
            })
        }
          , co = new lb(jb,"https://apis.google.com/js/api.js?onload=%{onload}")
          , bo = new nl(3E4,6E4)
          , $n = new nl(5E3,15E3)
          , ao = null;
        var eo = function(a, b, c, d) {
            this.ya = a;
            this.ha = b;
            this.ka = c;
            this.N = d;
            this.Yc = null;
            this.N ? (a = M(this.N.url),
            a = xk(a.Va, a.Ga, a.Tb, "/emulator/auth/iframe")) : a = xk("https", this.ya, null, "/__/auth/iframe");
            this.hc = a;
            L(this.hc, "apiKey", this.ha);
            L(this.hc, "appName", this.ka);
            this.Ia = null;
            this.Da = []
        };
        eo.prototype.Gh = function(a) {
            this.Yc = a;
            return this
        }
        ;
        eo.prototype.Dh = function(a) {
            this.Ia = a;
            return this
        }
        ;
        eo.prototype.toString = function() {
            this.Yc ? L(this.hc, "v", this.Yc) : this.hc.removeParameter("v");
            this.Ia ? L(this.hc, "eid", this.Ia) : this.hc.removeParameter("eid");
            this.Da.length ? L(this.hc, "fw", this.Da.join(",")) : this.hc.removeParameter("fw");
            return this.hc.toString()
        }
        ;
        var fo = function(a, b, c, d, e, f) {
            this.ya = a;
            this.ha = b;
            this.ka = c;
            this.qk = d;
            this.N = f;
            this.Yc = this.Ja = this.sh = null;
            this.Dd = e;
            this.ma = this.Ia = null
        };
        fo.prototype.Fh = function(a) {
            this.ma = a;
            return this
        }
        ;
        fo.prototype.Gh = function(a) {
            this.Yc = a;
            return this
        }
        ;
        fo.prototype.Dh = function(a) {
            this.Ia = a;
            return this
        }
        ;
        fo.prototype.toString = function() {
            if (this.N) {
                var a = M(this.N.url);
                a = xk(a.Va, a.Ga, a.Tb, "/emulator/auth/handler")
            } else
                a = xk("https", this.ya, null, "/__/auth/handler");
            L(a, "apiKey", this.ha);
            L(a, "appName", this.ka);
            L(a, "authType", this.qk);
            if (this.Dd.isOAuthProvider) {
                var b = this.Dd;
                try {
                    var c = firebase.app(this.ka).auth().Gb
                } catch (h) {
                    c = null
                }
                b.xg = c;
                L(a, "providerId", this.Dd.providerId);
                c = this.Dd;
                b = jl(c.ki);
                for (var d in b)
                    b[d] = b[d].toString();
                d = c.Rl;
                b = Za(b);
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    f in b && delete b[f]
                }
                c.Sg && c.xg && !b[c.Sg] && (b[c.Sg] = c.xg);
                Ya(b) || L(a, "customParameters", il(b))
            }
            "function" === typeof this.Dd.Di && (c = this.Dd.Di(),
            c.length && L(a, "scopes", c.join(",")));
            this.sh ? L(a, "redirectUrl", this.sh) : a.removeParameter("redirectUrl");
            this.Ja ? L(a, "eventId", this.Ja) : a.removeParameter("eventId");
            this.Yc ? L(a, "v", this.Yc) : a.removeParameter("v");
            if (this.Me)
                for (var g in this.Me)
                    this.Me.hasOwnProperty(g) && !wk(a, g) && L(a, g, this.Me[g]);
            this.ma ? L(a, "tid", this.ma) : a.removeParameter("tid");
            this.Ia ? L(a, "eid", this.Ia) : a.removeParameter("eid");
            g = go(this.ka);
            g.length && L(a, "fw", g.join(","));
            return a.toString()
        }
        ;
        var go = function(a) {
            try {
                return Ta(firebase.app(a).auth().Da)
            } catch (b) {
                return []
            }
        }
          , ho = function(a, b, c, d, e, f) {
            this.ya = a;
            this.ha = b;
            this.ka = c;
            this.N = f;
            this.Gc = d || null;
            this.Ia = e || null;
            this.o = this.Lg = this.Ai = null;
            this.Vb = [];
            this.rf = this.Hb = null
        }
          , io = function(a) {
            var b = b || Hk();
            return nn(a).then(function(c) {
                if (!Rk(c, b))
                    throw new Ul(Hk());
            })
        };
        k = ho.prototype;
        k.initialize = function() {
            if (this.rf)
                return this.rf;
            var a = this;
            return this.rf = Tk().then(function() {
                if (!a.Lg) {
                    var b = a.Gc
                      , c = a.Ia
                      , d = go(a.ka);
                    b = (new eo(a.ya,a.ha,a.ka,a.N)).Gh(b).Dh(c);
                    b.Da = Ta(d || []);
                    a.Lg = b.toString()
                }
                a.lf = new Yn(a.Lg);
                a.uh()
            })
        }
        ;
        k.Ce = function(a, b, c) {
            var d = new P("popup-closed-by-user")
              , e = new P("web-storage-unsupported")
              , f = this
              , g = !1;
            return this.Pc().then(function() {
                jo(f).then(function(h) {
                    h || (a && Nk(a),
                    b(e),
                    g = !0)
                })
            }).l(function() {}).then(function() {
                if (!g)
                    return Pk(a)
            }).then(function() {
                if (!g)
                    return Rj(c).then(function() {
                        b(d)
                    })
            })
        }
        ;
        k.Oj = function() {
            var a = Fk();
            return !hl(a) && !ll(a)
        }
        ;
        k.Hi = function() {
            return !1
        }
        ;
        k.te = function(a, b, c, d, e, f, g, h) {
            if (!a)
                return G(new P("popup-blocked"));
            if (g && !hl())
                return this.Pc().l(function(m) {
                    Nk(a);
                    e(m)
                }),
                d(),
                F();
            this.Hb || (this.Hb = io(ko(this)));
            var l = this;
            return this.Hb.then(function() {
                var m = l.Pc().l(function(q) {
                    Nk(a);
                    e(q);
                    throw q;
                });
                d();
                return m
            }).then(function() {
                Nm(c);
                if (!g) {
                    var m = lo(l.ya, l.ha, l.ka, b, c, null, f, l.Gc, void 0, l.Ia, h, l.N);
                    Ik(m, a)
                }
            }).l(function(m) {
                "auth/network-request-failed" == m.code && (l.Hb = null);
                throw m;
            })
        }
        ;
        var ko = function(a) {
            a.o || (a.Ai = a.Gc ? cl("JsCore", a.Gc, go(a.ka)) : null,
            a.o = new Vm(a.ha,Dk(a.Ia),a.Ai),
            a.N && Zm(a.o, a.N));
            return a.o
        };
        ho.prototype.ue = function(a, b, c, d) {
            this.Hb || (this.Hb = io(ko(this)));
            var e = this;
            return this.Hb.then(function() {
                Nm(b);
                var f = lo(e.ya, e.ha, e.ka, a, b, Hk(), c, e.Gc, void 0, e.Ia, d, e.N);
                Ik(f)
            }).l(function(f) {
                "auth/network-request-failed" == f.code && (e.Hb = null);
                throw f;
            })
        }
        ;
        ho.prototype.Pc = function() {
            var a = this;
            return this.initialize().then(function() {
                return a.lf.onReady()
            }).l(function() {
                a.Hb = null;
                throw new P("network-request-failed");
            })
        }
        ;
        ho.prototype.Tj = function() {
            return !0
        }
        ;
        var lo = function(a, b, c, d, e, f, g, h, l, m, q, y) {
            a = new fo(a,b,c,d,e,y);
            a.sh = f;
            a.Ja = g;
            f = a.Gh(h);
            f.Me = Za(l || null);
            return f.Dh(m).Fh(q).toString()
        };
        ho.prototype.uh = function() {
            if (!this.lf)
                throw Error("IfcHandler must be initialized!");
            var a = this;
            this.lf.th("authEvent", function(b) {
                var c = {};
                if (b && b.authEvent) {
                    var d = !1;
                    b = Kl(b.authEvent);
                    for (c = 0; c < a.Vb.length; c++)
                        d = a.Vb[c](b) || d;
                    c = {};
                    c.status = d ? "ACK" : "ERROR";
                    return F(c)
                }
                c.status = "ERROR";
                return F(c)
            })
        }
        ;
        var jo = function(a) {
            var b = {
                type: "webStorageSupport"
            };
            return a.initialize().then(function() {
                return a.lf.sendMessage(b)
            }).then(function(c) {
                if (c && c.length && "undefined" !== typeof c[0].webStorageSupport)
                    return c[0].webStorageSupport;
                throw Error();
            })
        };
        ho.prototype.Ec = function(a) {
            this.Vb.push(a)
        }
        ;
        ho.prototype.Gd = function(a) {
            Sa(this.Vb, function(b) {
                return b == a
            })
        }
        ;
        function mo() {}
        mo.prototype.render = function() {}
        ;
        mo.prototype.reset = function() {}
        ;
        mo.prototype.getResponse = function() {}
        ;
        mo.prototype.execute = function() {}
        ;
        var no = function() {
            this.kd = p.grecaptcha ? Infinity : 0;
            this.Ji = null;
            this.rg = "__rcb" + Math.floor(1E6 * Math.random()).toString()
        };
        no.prototype.Xi = function(a) {
            var b = this;
            return new E(function(c, d) {
                var e = setTimeout(function() {
                    d(new P("network-request-failed"))
                }, oo.get());
                if (!p.grecaptcha || a !== b.Ji && !b.kd) {
                    p[b.rg] = function() {
                        if (p.grecaptcha) {
                            b.Ji = a;
                            var g = p.grecaptcha.render;
                            p.grecaptcha.render = function(h, l) {
                                h = g(h, l);
                                b.kd++;
                                return h
                            }
                            ;
                            clearTimeout(e);
                            c(p.grecaptcha)
                        } else
                            clearTimeout(e),
                            d(new P("internal-error"));
                        delete p[b.rg]
                    }
                    ;
                    var f = tb(po, {
                        onload: b.rg,
                        hl: a || ""
                    });
                    F(Pj(f)).l(function() {
                        clearTimeout(e);
                        d(new P("internal-error","Unable to load external reCAPTCHA dependencies!"))
                    })
                } else
                    clearTimeout(e),
                    c(p.grecaptcha)
            }
            )
        }
        ;
        no.prototype.ci = function() {
            this.kd--
        }
        ;
        var po = new lb(jb,"https://www.google.com/recaptcha/api.js?trustedtypes=true&onload=%{onload}&render=explicit&hl=%{hl}")
          , oo = new nl(3E4,6E4)
          , qo = null;
        var ro = function() {
            this.ab = {};
            this.kd = 1E12
        };
        ro.prototype.render = function(a, b) {
            this.ab[this.kd.toString()] = new so(a,b);
            return this.kd++
        }
        ;
        ro.prototype.reset = function(a) {
            var b = to(this, a);
            a = uo(a);
            b && a && (b.delete(),
            delete this.ab[a])
        }
        ;
        ro.prototype.getResponse = function(a) {
            return (a = to(this, a)) ? a.getResponse() : null
        }
        ;
        ro.prototype.execute = function(a) {
            (a = to(this, a)) && a.execute()
        }
        ;
        var to = function(a, b) {
            return (b = uo(b)) ? a.ab[b] || null : null
        }
          , uo = function(a) {
            return (a = "undefined" === typeof a ? 1E12 : a) ? a.toString() : null
        }
          , vo = null
          , so = function(a, b) {
            this.wb = !1;
            this.wa = b;
            this.Md = this.Kf = null;
            this.Ti = "invisible" !== this.wa.size;
            this.ri = Wc(a);
            var c = this;
            this.hj = function() {
                c.execute()
            }
            ;
            this.Ti ? this.execute() : Xi(this.ri, "click", this.hj)
        };
        so.prototype.getResponse = function() {
            wo(this);
            return this.Kf
        }
        ;
        so.prototype.execute = function() {
            wo(this);
            var a = this;
            this.Md || (this.Md = setTimeout(function() {
                a.Kf = al();
                var b = a.wa.callback
                  , c = a.wa["expired-callback"];
                if (b)
                    try {
                        b(a.Kf)
                    } catch (d) {}
                a.Md = setTimeout(function() {
                    a.Md = null;
                    a.Kf = null;
                    if (c)
                        try {
                            c()
                        } catch (d) {}
                    a.Ti && a.execute()
                }, 6E4)
            }, 500))
        }
        ;
        so.prototype.delete = function() {
            wo(this);
            this.wb = !0;
            clearTimeout(this.Md);
            this.Md = null;
            ej(this.ri, "click", this.hj)
        }
        ;
        var wo = function(a) {
            if (a.wb)
                throw Error("reCAPTCHA mock was already deleted!");
        };
        var xo = function() {};
        xo.prototype.Xi = function() {
            vo || (vo = new ro);
            return F(vo)
        }
        ;
        xo.prototype.ci = function() {}
        ;
        var yo = null;
        var zo = function(a, b, c, d, e, f, g) {
            O(this, "type", "recaptcha");
            this.Qd = this.Td = null;
            this.ld = !1;
            this.ei = b;
            this.ee = null;
            g ? (yo || (yo = new xo),
            g = yo) : (qo || (qo = new no),
            g = qo);
            this.zj = g;
            this.vc = c || {
                theme: "light",
                type: "image"
            };
            this.Ka = [];
            if (this.vc.sitekey)
                throw new P("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
            this.tf = "invisible" === this.vc.size;
            if (!p.document)
                throw new P("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
            if (!Wc(b) || !this.tf && Wc(b).hasChildNodes())
                throw new P("argument-error","reCAPTCHA container is either not found or already contains inner elements!");
            this.o = new Vm(a,f || null,e || null);
            this.Pk = d || function() {
                return null
            }
            ;
            var h = this;
            this.Vf = [];
            var l = this.vc.callback;
            this.vc.callback = function(q) {
                h.Wd(q);
                if ("function" === typeof l)
                    l(q);
                else if ("string" === typeof l) {
                    var y = N(l, p);
                    "function" === typeof y && y(q)
                }
            }
            ;
            var m = this.vc["expired-callback"];
            this.vc["expired-callback"] = function() {
                h.Wd(null);
                if ("function" === typeof m)
                    m();
                else if ("string" === typeof m) {
                    var q = N(m, p);
                    "function" === typeof q && q()
                }
            }
        };
        zo.prototype.Wd = function(a) {
            for (var b = 0; b < this.Vf.length; b++)
                try {
                    this.Vf[b](a)
                } catch (c) {}
        }
        ;
        var Ao = function(a, b) {
            Sa(a.Vf, function(c) {
                return c == b
            })
        };
        k = zo.prototype;
        k.v = function(a) {
            var b = this;
            this.Ka.push(a);
            a.Cc(function() {
                Qa(b.Ka, a)
            });
            return a
        }
        ;
        k.ie = function() {
            var a = this;
            return this.Td ? this.Td : this.Td = this.v(F().then(function() {
                if (fl() && !Yk())
                    return Tk();
                throw new P("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
            }).then(function() {
                return a.zj.Xi(a.Pk())
            }).then(function(b) {
                a.ee = b;
                return Q(a.o, Un, {})
            }).then(function(b) {
                a.vc.sitekey = b.recaptchaSiteKey
            }).l(function(b) {
                a.Td = null;
                throw b;
            }))
        }
        ;
        k.render = function() {
            Bo(this);
            var a = this;
            return this.v(this.ie().then(function() {
                if (null === a.Qd) {
                    var b = a.ei;
                    if (!a.tf) {
                        var c = Wc(b);
                        b = $c("DIV");
                        c.appendChild(b)
                    }
                    a.Qd = a.ee.render(b, a.vc)
                }
                return a.Qd
            }))
        }
        ;
        k.verify = function() {
            Bo(this);
            var a = this;
            return this.v(this.render().then(function(b) {
                return new E(function(c) {
                    var d = a.ee.getResponse(b);
                    if (d)
                        c(d);
                    else {
                        var e = function(f) {
                            f && (Ao(a, e),
                            c(f))
                        };
                        a.Vf.push(e);
                        a.tf && a.ee.execute(a.Qd)
                    }
                }
                )
            }))
        }
        ;
        k.reset = function() {
            Bo(this);
            null !== this.Qd && this.ee.reset(this.Qd)
        }
        ;
        var Bo = function(a) {
            if (a.ld)
                throw new P("internal-error","RecaptchaVerifier instance has been destroyed.");
        };
        zo.prototype.clear = function() {
            Bo(this);
            this.ld = !0;
            this.zj.ci();
            for (var a = 0; a < this.Ka.length; a++)
                this.Ka[a].cancel("RecaptchaVerifier instance has been destroyed.");
            this.tf || cd(Wc(this.ei))
        }
        ;
        var Co = function(a, b, c) {
            var d = !1;
            try {
                this.U = c || firebase.app()
            } catch (g) {
                throw new P("argument-error","No firebase.app.App instance is currently initialized.");
            }
            if (this.U.options && this.U.options.apiKey)
                c = this.U.options.apiKey;
            else
                throw new P("invalid-api-key");
            var e = this
              , f = null;
            try {
                f = Ta(this.U.auth().Da)
            } catch (g) {}
            try {
                d = this.U.auth().settings.appVerificationDisabledForTesting
            } catch (g) {}
            f = firebase.SDK_VERSION ? cl("JsCore", firebase.SDK_VERSION, f) : null;
            zo.call(this, c, a, b, function() {
                try {
                    var g = e.U.auth().Gb
                } catch (h) {
                    g = null
                }
                return g
            }, f, Dk(Ek), d)
        };
        v(Co, zo);
        var Do = function(a) {
            this.Le = a
        };
        Do.prototype.postMessage = function(a, b) {
            this.Le.postMessage(a, b)
        }
        ;
        var Eo = function(a) {
            this.Nl = a;
            this.di = !1;
            this.xf = []
        };
        Eo.prototype.send = function(a, b, c) {
            b = void 0 === b ? null : b;
            c = void 0 === c ? !1 : c;
            var d = this, e;
            b = b || {};
            var f, g, h, l = null;
            if (this.di)
                return G(Error("connection_unavailable"));
            var m = c ? 800 : 50
              , q = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            return (new E(function(y, B) {
                q ? (e = "" + Math.floor(Math.random() * Math.pow(10, 20)).toString(),
                q.port1.start(),
                g = setTimeout(function() {
                    B(Error("unsupported_event"))
                }, m),
                f = function(S) {
                    S.data.eventId === e && ("ack" === S.data.status ? (clearTimeout(g),
                    h = setTimeout(function() {
                        B(Error("timeout"))
                    }, 3E3)) : "done" === S.data.status ? (clearTimeout(h),
                    "undefined" !== typeof S.data.response ? y(S.data.response) : B(Error("unknown_error"))) : (clearTimeout(g),
                    clearTimeout(h),
                    B(Error("invalid_response"))))
                }
                ,
                l = {
                    messageChannel: q,
                    onMessage: f
                },
                d.xf.push(l),
                q.port1.addEventListener("message", f),
                d.Nl.postMessage({
                    eventType: a,
                    eventId: e,
                    data: b
                }, [q.port2])) : B(Error("connection_unavailable"))
            }
            )).then(function(y) {
                Fo(d, l);
                return y
            }).l(function(y) {
                Fo(d, l);
                throw y;
            })
        }
        ;
        var Fo = function(a, b) {
            if (b) {
                var c = b.messageChannel
                  , d = b.onMessage;
                c && (c.port1.removeEventListener("message", d),
                c.port1.close());
                Sa(a.xf, function(e) {
                    return e == b
                })
            }
        };
        Eo.prototype.close = function() {
            for (; 0 < this.xf.length; )
                Fo(this, this.xf[0]);
            this.di = !0
        }
        ;
        var Go = function(a) {
            this.Bg = a;
            this.Db = {};
            this.aj = u(this.Tk, this)
        }
          , Io = function(a) {
            x(Ho, function(c) {
                c.Bg == a && (b = c)
            });
            if (!b) {
                var b = new Go(a);
                Ho.push(b)
            }
            return b
        };
        Go.prototype.Tk = function(a) {
            var b = a.data.eventType
              , c = a.data.eventId
              , d = this.Db[b];
            if (d && 0 < d.length) {
                a.ports[0].postMessage({
                    status: "ack",
                    eventId: c,
                    eventType: b,
                    response: null
                });
                var e = [];
                x(d, function(f) {
                    e.push(F().then(function() {
                        return f(a.origin, a.data.data)
                    }))
                });
                dg(e).then(function(f) {
                    var g = [];
                    x(f, function(h) {
                        g.push({
                            fulfilled: h.zi,
                            value: h.value,
                            reason: h.reason ? h.reason.message : void 0
                        })
                    });
                    x(g, function(h) {
                        for (var l in h)
                            "undefined" === typeof h[l] && delete h[l]
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
        Go.prototype.subscribe = function(a, b) {
            Ya(this.Db) && this.Bg.addEventListener("message", this.aj);
            "undefined" === typeof this.Db[a] && (this.Db[a] = []);
            this.Db[a].push(b)
        }
        ;
        Go.prototype.unsubscribe = function(a, b) {
            "undefined" !== typeof this.Db[a] && b ? (Sa(this.Db[a], function(c) {
                return c == b
            }),
            0 == this.Db[a].length && delete this.Db[a]) : b || delete this.Db[a];
            Ya(this.Db) && this.Bg.removeEventListener("message", this.aj)
        }
        ;
        var Ho = [];
        var Jo = function(a) {
            this.tb = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;
            if (!this.tb)
                throw new P("internal-error","The React Native compatibility library was not found.");
            this.type = "asyncStorage"
        };
        k = Jo.prototype;
        k.get = function(a) {
            return F(this.tb.getItem(a)).then(function(b) {
                return b && kl(b)
            })
        }
        ;
        k.set = function(a, b) {
            return F(this.tb.setItem(a, il(b)))
        }
        ;
        k.remove = function(a) {
            return F(this.tb.removeItem(a))
        }
        ;
        k.mc = function() {}
        ;
        k.Bc = function() {}
        ;
        function Ko() {
            this.storage = {};
            this.type = "inMemory"
        }
        k = Ko.prototype;
        k.get = function(a) {
            return F(this.storage[a])
        }
        ;
        k.set = function(a, b) {
            this.storage[a] = b;
            return F()
        }
        ;
        k.remove = function(a) {
            delete this.storage[a];
            return F()
        }
        ;
        k.mc = function() {}
        ;
        k.Bc = function() {}
        ;
        var No = function() {
            if (!Lo()) {
                if ("Node" == Zk())
                    throw new P("internal-error","The LocalStorage compatibility library was not found.");
                throw new P("web-storage-unsupported");
            }
            this.tb = Mo() || firebase.INTERNAL.node.localStorage;
            this.type = "localStorage"
        }
          , Mo = function() {
            try {
                var a = p.localStorage
                  , b = dl();
                a && (a.setItem(b, "1"),
                a.removeItem(b));
                return a
            } catch (c) {
                return null
            }
        }
          , Lo = function() {
            var a = "Node" == Zk();
            a = Mo() || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;
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
        k = No.prototype;
        k.get = function(a) {
            var b = this;
            return F().then(function() {
                var c = b.tb.getItem(a);
                return kl(c)
            })
        }
        ;
        k.set = function(a, b) {
            var c = this;
            return F().then(function() {
                var d = il(b);
                null === d ? c.remove(a) : c.tb.setItem(a, d)
            })
        }
        ;
        k.remove = function(a) {
            var b = this;
            return F().then(function() {
                b.tb.removeItem(a)
            })
        }
        ;
        k.mc = function(a) {
            p.window && Xi(p.window, "storage", a)
        }
        ;
        k.Bc = function(a) {
            p.window && ej(p.window, "storage", a)
        }
        ;
        var Oo = function() {
            this.tb = {};
            this.type = "nullStorage"
        };
        k = Oo.prototype;
        k.get = function() {
            return F(null)
        }
        ;
        k.set = function() {
            return F()
        }
        ;
        k.remove = function() {
            return F()
        }
        ;
        k.mc = function() {}
        ;
        k.Bc = function() {}
        ;
        var Ro = function() {
            if (!Po()) {
                if ("Node" == Zk())
                    throw new P("internal-error","The SessionStorage compatibility library was not found.");
                throw new P("web-storage-unsupported");
            }
            this.tb = Qo() || firebase.INTERNAL.node.sessionStorage;
            this.type = "sessionStorage"
        }
          , Qo = function() {
            try {
                var a = p.sessionStorage
                  , b = dl();
                a && (a.setItem(b, "1"),
                a.removeItem(b));
                return a
            } catch (c) {
                return null
            }
        }
          , Po = function() {
            var a = "Node" == Zk();
            a = Qo() || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;
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
        k = Ro.prototype;
        k.get = function(a) {
            var b = this;
            return F().then(function() {
                var c = b.tb.getItem(a);
                return kl(c)
            })
        }
        ;
        k.set = function(a, b) {
            var c = this;
            return F().then(function() {
                var d = il(b);
                null === d ? c.remove(a) : c.tb.setItem(a, d)
            })
        }
        ;
        k.remove = function(a) {
            var b = this;
            return F().then(function() {
                b.tb.removeItem(a)
            })
        }
        ;
        k.mc = function() {}
        ;
        k.Bc = function() {}
        ;
        var Uo = function() {
            if (!So())
                throw new P("web-storage-unsupported");
            this.li = "firebaseLocalStorageDb";
            this.zf = "firebaseLocalStorage";
            this.wg = "fbase_key";
            this.Zj = "value";
            this.wm = 1;
            this.Ra = {};
            this.Ub = [];
            this.oe = 0;
            this.Oi = p.indexedDB;
            this.type = "indexedDB";
            this.Pf = this.wc = this.Gf = this.hh = null;
            this.Gj = !1;
            this.eg = null;
            var a = this;
            Yk() && self ? (this.wc = Io(Yk() ? self : null),
            this.wc.subscribe("keyChanged", function(b, c) {
                return To(a).then(function(d) {
                    0 < d.length && x(a.Ub, function(e) {
                        e(d)
                    });
                    return {
                        keyProcessed: Pa(d, c.key)
                    }
                })
            }),
            this.wc.subscribe("ping", function() {
                return F(["keyChanged"])
            })) : ul().then(function(b) {
                if (a.eg = b)
                    a.Pf = new Eo(new Do(b)),
                    a.Pf.send("ping", null, !0).then(function(c) {
                        c[0].fulfilled && Pa(c[0].value, "keyChanged") && (a.Gj = !0)
                    }).l(function() {})
            })
        }, Vo, Wo = function(a) {
            return new E(function(b, c) {
                var d = a.Oi.deleteDatabase(a.li);
                d.onsuccess = function() {
                    b()
                }
                ;
                d.onerror = function(e) {
                    c(Error(e.target.error))
                }
            }
            )
        }, Xo = function(a) {
            return new E(function(b, c) {
                var d = a.Oi.open(a.li, a.wm);
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
                        e.createObjectStore(a.zf, {
                            keyPath: a.wg
                        })
                    } catch (f) {
                        c(f)
                    }
                }
                ;
                d.onsuccess = function(e) {
                    e = e.target.result;
                    e.objectStoreNames.contains(a.zf) ? b(e) : Wo(a).then(function() {
                        return Xo(a)
                    }).then(function(f) {
                        b(f)
                    }).l(function(f) {
                        c(f)
                    })
                }
            }
            )
        }, Yo = function(a) {
            a.Ng || (a.Ng = Xo(a));
            return a.Ng
        }, Zo = function(a, b) {
            var c = 0
              , d = function(e, f) {
                Yo(a).then(b).then(e).l(function(g) {
                    if (3 < ++c)
                        f(g);
                    else
                        return Yo(a).then(function(h) {
                            h.close();
                            a.Ng = void 0;
                            return d(e, f)
                        }).l(function(h) {
                            f(h)
                        })
                })
            };
            return new E(d)
        }, So = function() {
            try {
                return !!p.indexedDB
            } catch (a) {
                return !1
            }
        }, $o = function(a, b) {
            return b.objectStore(a.zf)
        }, ap = function(a, b, c) {
            return b.transaction([a.zf], c ? "readwrite" : "readonly")
        }, bp = function(a) {
            return new E(function(b, c) {
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
        Uo.prototype.set = function(a, b) {
            var c = this
              , d = !1;
            return Zo(this, function(e) {
                e = $o(c, ap(c, e, !0));
                return bp(e.get(a))
            }).then(function(e) {
                return Zo(c, function(f) {
                    f = $o(c, ap(c, f, !0));
                    if (e)
                        return e.value = b,
                        bp(f.put(e));
                    c.oe++;
                    d = !0;
                    var g = {};
                    g[c.wg] = a;
                    g[c.Zj] = b;
                    return bp(f.add(g))
                })
            }).then(function() {
                c.Ra[a] = b;
                return cp(c, a)
            }).Cc(function() {
                d && c.oe--
            })
        }
        ;
        var cp = function(a, b) {
            return a.Pf && a.eg && tl() === a.eg ? a.Pf.send("keyChanged", {
                key: b
            }, a.Gj).then(function() {}).l(function() {}) : F()
        };
        Uo.prototype.get = function(a) {
            var b = this;
            return Zo(this, function(c) {
                return bp($o(b, ap(b, c, !1)).get(a))
            }).then(function(c) {
                return c && c.value
            })
        }
        ;
        Uo.prototype.remove = function(a) {
            var b = !1
              , c = this;
            return Zo(this, function(d) {
                b = !0;
                c.oe++;
                return bp($o(c, ap(c, d, !0))["delete"](a))
            }).then(function() {
                delete c.Ra[a];
                return cp(c, a)
            }).Cc(function() {
                b && c.oe--
            })
        }
        ;
        var To = function(a) {
            return Yo(a).then(function(b) {
                var c = $o(a, ap(a, b, !1));
                return c.getAll ? bp(c.getAll()) : new E(function(d, e) {
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
                if (0 == a.oe) {
                    for (d = 0; d < b.length; d++)
                        c[b[d][a.wg]] = b[d][a.Zj];
                    d = Jk(a.Ra, c);
                    a.Ra = c
                }
                return d
            })
        };
        Uo.prototype.mc = function(a) {
            0 == this.Ub.length && this.Kh();
            this.Ub.push(a)
        }
        ;
        Uo.prototype.Bc = function(a) {
            Sa(this.Ub, function(b) {
                return b == a
            });
            0 == this.Ub.length && this.Sf()
        }
        ;
        Uo.prototype.Kh = function() {
            var a = this;
            this.Sf();
            var b = function() {
                a.Gf = setTimeout(function() {
                    a.hh = To(a).then(function(c) {
                        0 < c.length && x(a.Ub, function(d) {
                            d(c)
                        })
                    }).then(function() {
                        b()
                    }).l(function(c) {
                        "STOP_EVENT" != c.message && b()
                    })
                }, 800)
            };
            b()
        }
        ;
        Uo.prototype.Sf = function() {
            this.hh && this.hh.cancel("STOP_EVENT");
            this.Gf && (clearTimeout(this.Gf),
            this.Gf = null)
        }
        ;
        function dp(a) {
            var b = this
              , c = null;
            this.Ub = [];
            this.type = "indexedDB";
            this.ui = a;
            this.Rh = F().then(function() {
                if (So()) {
                    var d = dl()
                      , e = "__sak" + d;
                    Vo || (Vo = new Uo);
                    c = Vo;
                    return c.set(e, d).then(function() {
                        return c.get(e)
                    }).then(function(f) {
                        if (f !== d)
                            throw Error("indexedDB not supported!");
                        return c.remove(e)
                    }).then(function() {
                        return c
                    }).l(function() {
                        return b.ui
                    })
                }
                return b.ui
            }).then(function(d) {
                b.type = d.type;
                d.mc(function(e) {
                    x(b.Ub, function(f) {
                        f(e)
                    })
                });
                return d
            })
        }
        k = dp.prototype;
        k.get = function(a) {
            return this.Rh.then(function(b) {
                return b.get(a)
            })
        }
        ;
        k.set = function(a, b) {
            return this.Rh.then(function(c) {
                return c.set(a, b)
            })
        }
        ;
        k.remove = function(a) {
            return this.Rh.then(function(b) {
                return b.remove(a)
            })
        }
        ;
        k.mc = function(a) {
            this.Ub.push(a)
        }
        ;
        k.Bc = function(a) {
            Sa(this.Ub, function(b) {
                return b == a
            })
        }
        ;
        var ip = function() {
            this.zg = {
                Browser: ep,
                Node: fp,
                ReactNative: gp,
                Worker: hp
            }[Zk()]
        }, jp, ep = {
            ua: No,
            Tf: Ro
        }, fp = {
            ua: No,
            Tf: Ro
        }, gp = {
            ua: Jo,
            Tf: Oo
        }, hp = {
            ua: No,
            Tf: Oo
        };
        var kp = function() {
            this.ig = !1;
            Object.defineProperty(this, "appVerificationDisabled", {
                get: function() {
                    return this.ig
                },
                set: function(a) {
                    this.ig = a
                },
                enumerable: !1
            })
        };
        var lp = function(a) {
            this.Pg(a)
        };
        lp.prototype.Pg = function(a) {
            var b = a.url;
            if ("undefined" === typeof b)
                throw new P("missing-continue-uri");
            if ("string" !== typeof b || "string" === typeof b && !b.length)
                throw new P("invalid-continue-uri");
            this.vk = b;
            this.Uh = this.hg = null;
            this.Qi = !1;
            var c = a.android;
            if (c && "object" === typeof c) {
                b = c.packageName;
                var d = c.installApp;
                c = c.minimumVersion;
                if ("string" === typeof b && b.length) {
                    this.hg = b;
                    if ("undefined" !== typeof d && "boolean" !== typeof d)
                        throw new P("argument-error","installApp property must be a boolean when specified.");
                    this.Qi = !!d;
                    if ("undefined" !== typeof c && ("string" !== typeof c || "string" === typeof c && !c.length))
                        throw new P("argument-error","minimumVersion property must be a non empty string when specified.");
                    this.Uh = c || null
                } else {
                    if ("undefined" !== typeof b)
                        throw new P("argument-error","packageName property must be a non empty string when specified.");
                    if ("undefined" !== typeof d || "undefined" !== typeof c)
                        throw new P("missing-android-pkg-name");
                }
            } else if ("undefined" !== typeof c)
                throw new P("argument-error","android property must be a non null object when specified.");
            this.Ki = null;
            if ((b = a.iOS) && "object" === typeof b)
                if (b = b.bundleId,
                "string" === typeof b && b.length)
                    this.Ki = b;
                else {
                    if ("undefined" !== typeof b)
                        throw new P("argument-error","bundleId property must be a non empty string when specified.");
                }
            else if ("undefined" !== typeof b)
                throw new P("argument-error","iOS property must be a non null object when specified.");
            b = a.handleCodeInApp;
            if ("undefined" !== typeof b && "boolean" !== typeof b)
                throw new P("argument-error","handleCodeInApp property must be a boolean when specified.");
            this.bi = !!b;
            a = a.dynamicLinkDomain;
            if ("undefined" !== typeof a && ("string" !== typeof a || "string" === typeof a && !a.length))
                throw new P("argument-error","dynamicLinkDomain property must be a non empty string when specified.");
            this.Dk = a || null
        }
        ;
        var mp = function(a) {
            var b = {};
            b.continueUrl = a.vk;
            b.canHandleCodeInApp = a.bi;
            if (b.androidPackageName = a.hg)
                b.androidMinimumVersion = a.Uh,
                b.androidInstallApp = a.Qi;
            b.iOSBundleId = a.Ki;
            b.dynamicLinkDomain = a.Dk;
            for (var c in b)
                null === b[c] && delete b[c];
            return b
        };
        var np = function(a, b) {
            this.zk = b;
            O(this, "verificationId", a)
        };
        np.prototype.confirm = function(a) {
            a = Lm(this.verificationId, a);
            return this.zk(a)
        }
        ;
        var op = function(a, b, c, d) {
            return (new Hm(a)).verifyPhoneNumber(b, c).then(function(e) {
                return new np(e,d)
            })
        };
        var pp = function(a, b, c) {
            this.Kl = a;
            this.bm = b;
            this.Rk = c;
            this.wf = 3E4;
            this.Th = 96E4;
            this.dm = !1;
            this.zd = null;
            this.Rc = this.wf;
            if (this.Th < this.wf)
                throw Error("Proactive refresh lower bound greater than upper bound!");
        };
        pp.prototype.start = function() {
            this.Rc = this.wf;
            qp(this, !0)
        }
        ;
        var rp = function(a, b) {
            if (b)
                return a.Rc = a.wf,
                a.Rk();
            b = a.Rc;
            a.Rc *= 2;
            a.Rc > a.Th && (a.Rc = a.Th);
            return b
        }
          , qp = function(a, b) {
            a.stop();
            a.zd = Rj(rp(a, b)).then(function() {
                return a.dm ? F() : pl()
            }).then(function() {
                return a.Kl()
            }).then(function() {
                qp(a, !0)
            }).l(function(c) {
                a.bm(c) && qp(a, !1)
            })
        };
        pp.prototype.stop = function() {
            this.zd && (this.zd.cancel(),
            this.zd = null)
        }
        ;
        var yp = function(a) {
            var b = {};
            b["facebook.com"] = sp;
            b["google.com"] = tp;
            b["github.com"] = up;
            b["twitter.com"] = vp;
            var c = a && a.providerId;
            try {
                if (c)
                    return b[c] ? new b[c](a) : new wp(a);
                if ("undefined" !== typeof a.idToken)
                    return new xp(a)
            } catch (d) {}
            return null
        }
          , xp = function(a) {
            var b = a.providerId;
            if (!b && a.idToken) {
                var c = Xl(a.idToken);
                c && c.qh && (b = c.qh)
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
          , wp = function(a) {
            xp.call(this, a);
            a = kl(a.rawUserInfo || "{}");
            O(this, "profile", Cl(a || {}))
        };
        n(wp, xp);
        var sp = function(a) {
            wp.call(this, a);
            if ("facebook.com" != this.providerId)
                throw Error("Invalid provider ID!");
        };
        n(sp, wp);
        var up = function(a) {
            wp.call(this, a);
            if ("github.com" != this.providerId)
                throw Error("Invalid provider ID!");
            O(this, "username", this.profile && this.profile.login || null)
        };
        n(up, wp);
        var tp = function(a) {
            wp.call(this, a);
            if ("google.com" != this.providerId)
                throw Error("Invalid provider ID!");
        };
        n(tp, wp);
        var vp = function(a) {
            wp.call(this, a);
            if ("twitter.com" != this.providerId)
                throw Error("Invalid provider ID!");
            O(this, "username", a.screenName || null)
        };
        n(vp, wp);
        var zp = {
            LOCAL: "local",
            NONE: "none",
            SESSION: "session"
        }, Ap = function(a) {
            var b = new P("invalid-persistence-type")
              , c = new P("unsupported-persistence-type");
            a: {
                for (d in zp)
                    if (zp[d] == a) {
                        var d = !0;
                        break a
                    }
                d = !1
            }
            if (!d || "string" !== typeof a)
                throw b;
            switch (Zk()) {
            case "ReactNative":
                if ("session" === a)
                    throw c;
                break;
            case "Node":
                if ("none" !== a)
                    throw c;
                break;
            case "Worker":
                if ("session" === a || !So() && "none" !== a)
                    throw c;
                break;
            default:
                if (!el() && "none" !== a)
                    throw c;
            }
        }, Bp = function() {
            var a = !ll(Fk()) && Xk() ? !0 : !1
              , b = hl()
              , c = el();
            this.ej = "firebase";
            this.Bh = ":";
            this.em = a;
            this.Cj = b;
            this.ak = c;
            this.Za = {};
            jp || (jp = new ip);
            a = jp;
            try {
                this.tj = !Gk() && sl() || !p.indexedDB ? new a.zg.ua : new dp(Yk() ? new Ko : new a.zg.ua)
            } catch (d) {
                this.tj = new Ko,
                this.Cj = !0
            }
            try {
                this.Sj = new a.zg.Tf
            } catch (d) {
                this.Sj = new Ko
            }
            this.nl = new Ko;
            this.Mh = u(this.Qj, this);
            this.Ra = {}
        }, Cp, Dp = function() {
            Cp || (Cp = new Bp);
            return Cp
        }, Ep = function(a, b) {
            switch (b) {
            case "session":
                return a.Sj;
            case "none":
                return a.nl;
            default:
                return a.tj
            }
        };
        Bp.prototype.nb = function(a, b) {
            return this.ej + this.Bh + a.name + (b ? this.Bh + b : "")
        }
        ;
        var Fp = function(a, b, c) {
            var d = a.nb(b, c)
              , e = Ep(a, b.ua);
            return a.get(b, c).then(function(f) {
                var g = null;
                try {
                    g = kl(p.localStorage.getItem(d))
                } catch (h) {}
                if (g && !f)
                    return p.localStorage.removeItem(d),
                    a.set(b, g, c);
                g && f && "localStorage" != e.type && p.localStorage.removeItem(d)
            })
        };
        k = Bp.prototype;
        k.get = function(a, b) {
            return Ep(this, a.ua).get(this.nb(a, b))
        }
        ;
        k.remove = function(a, b) {
            b = this.nb(a, b);
            "local" == a.ua && (this.Ra[b] = null);
            return Ep(this, a.ua).remove(b)
        }
        ;
        k.set = function(a, b, c) {
            var d = this.nb(a, c)
              , e = this
              , f = Ep(this, a.ua);
            return f.set(d, b).then(function() {
                return f.get(d)
            }).then(function(g) {
                "local" == a.ua && (e.Ra[d] = g)
            })
        }
        ;
        k.addListener = function(a, b, c) {
            a = this.nb(a, b);
            this.ak && (this.Ra[a] = p.localStorage.getItem(a));
            Ya(this.Za) && this.Kh();
            this.Za[a] || (this.Za[a] = []);
            this.Za[a].push(c)
        }
        ;
        k.removeListener = function(a, b, c) {
            a = this.nb(a, b);
            this.Za[a] && (Sa(this.Za[a], function(d) {
                return d == c
            }),
            0 == this.Za[a].length && delete this.Za[a]);
            Ya(this.Za) && this.Sf()
        }
        ;
        k.Kh = function() {
            Ep(this, "local").mc(this.Mh);
            this.Cj || (Gk() || !sl()) && p.indexedDB || !this.ak || Gp(this)
        }
        ;
        var Gp = function(a) {
            Hp(a);
            a.Ug = setInterval(function() {
                for (var b in a.Za) {
                    var c = p.localStorage.getItem(b)
                      , d = a.Ra[b];
                    c != d && (a.Ra[b] = c,
                    c = new Ki({
                        type: "storage",
                        key: b,
                        target: window,
                        oldValue: d,
                        newValue: c,
                        fh: !0
                    }),
                    a.Qj(c))
                }
            }, 1E3)
        }
          , Hp = function(a) {
            a.Ug && (clearInterval(a.Ug),
            a.Ug = null)
        };
        Bp.prototype.Sf = function() {
            Ep(this, "local").Bc(this.Mh);
            Hp(this)
        }
        ;
        Bp.prototype.Qj = function(a) {
            if (a && a.Nk) {
                var b = a.Ya.key;
                if (null == b)
                    for (var c in this.Za) {
                        var d = this.Ra[c];
                        "undefined" === typeof d && (d = null);
                        var e = p.localStorage.getItem(c);
                        e !== d && (this.Ra[c] = e,
                        this.qg(c))
                    }
                else if (0 == b.indexOf(this.ej + this.Bh) && this.Za[b]) {
                    "undefined" !== typeof a.Ya.fh ? Ep(this, "local").Bc(this.Mh) : Hp(this);
                    if (this.em)
                        if (c = p.localStorage.getItem(b),
                        d = a.Ya.newValue,
                        d !== c)
                            null !== d ? p.localStorage.setItem(b, d) : p.localStorage.removeItem(b);
                        else if (this.Ra[b] === d && "undefined" === typeof a.Ya.fh)
                            return;
                    var f = this;
                    c = function() {
                        if ("undefined" !== typeof a.Ya.fh || f.Ra[b] !== p.localStorage.getItem(b))
                            f.Ra[b] = p.localStorage.getItem(b),
                            f.qg(b)
                    }
                    ;
                    yc && Nc && 10 == Nc && p.localStorage.getItem(b) !== a.Ya.newValue && a.Ya.newValue !== a.Ya.oldValue ? setTimeout(c, 10) : c()
                }
            } else
                x(a, u(this.qg, this))
        }
        ;
        Bp.prototype.qg = function(a) {
            this.Za[a] && x(this.Za[a], function(b) {
                b()
            })
        }
        ;
        var Ip = function(a) {
            this.V = a;
            this.O = Dp()
        }
          , Kp = function(a) {
            return a.O.get(Jp, a.V).then(function(b) {
                return Kl(b)
            })
        }
          , Lp = function(a) {
            return a.O.remove(Jp, a.V)
        };
        Ip.prototype.Ec = function(a) {
            this.O.addListener(Jp, this.V, a)
        }
        ;
        Ip.prototype.Gd = function(a) {
            this.O.removeListener(Jp, this.V, a)
        }
        ;
        var Np = function(a) {
            return a.O.get(Mp, a.V).then(function(b) {
                return Kl(b)
            })
        }
          , Jp = {
            name: "authEvent",
            ua: "local"
        }
          , Mp = {
            name: "redirectEvent",
            ua: "session"
        };
        var Op = function() {
            this.O = Dp()
        };
        Op.prototype.de = function() {
            return this.O.get(Pp, void 0)
        }
        ;
        var Pp = {
            name: "sessionId",
            ua: "session"
        };
        var Qp = function() {
            this.Vg = null;
            this.Se = []
        };
        Qp.prototype.subscribe = function(a) {
            var b = this;
            this.Se.push(a);
            this.Vg || (this.Vg = function(c) {
                for (var d = 0; d < b.Se.length; d++)
                    b.Se[d](c)
            }
            ,
            a = N("universalLinks.subscribe", p),
            "function" === typeof a && a(null, this.Vg))
        }
        ;
        Qp.prototype.unsubscribe = function(a) {
            Sa(this.Se, function(b) {
                return b == a
            })
        }
        ;
        var Rp = null;
        var Sp = function(a, b, c, d, e, f) {
            this.ya = a;
            this.ha = b;
            this.ka = c;
            this.N = f;
            this.Gc = d || null;
            this.Ia = e || null;
            this.Rj = b + ":" + c;
            this.fm = new Op;
            this.Bi = new Ip(this.Rj);
            this.Og = null;
            this.Vb = [];
            this.rl = 500;
            this.Pl = 2E3;
            this.he = this.Ff = null
        }
          , Tp = function(a) {
            return new P("invalid-cordova-configuration",a)
        };
        Sp.prototype.Pc = function() {
            return this.ie ? this.ie : this.ie = Vk().then(function() {
                if ("function" !== typeof N("universalLinks.subscribe", p))
                    throw Tp("cordova-universal-links-plugin-fix is not installed");
                if ("undefined" === typeof N("BuildInfo.packageName", p))
                    throw Tp("cordova-plugin-buildinfo is not installed");
                if ("function" !== typeof N("cordova.plugins.browsertab.openUrl", p))
                    throw Tp("cordova-plugin-browsertab is not installed");
                if ("function" !== typeof N("cordova.InAppBrowser.open", p))
                    throw Tp("cordova-plugin-inappbrowser is not installed");
            }, function() {
                throw new P("cordova-not-ready");
            })
        }
        ;
        var Up = function() {
            for (var a = 20, b = []; 0 < a; )
                b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
                a--;
            return b.join("")
        }
          , Vp = function(a) {
            var b = new Gi;
            b.update(a);
            return ti(b.digest())
        };
        k = Sp.prototype;
        k.Ce = function(a, b) {
            b(new P("operation-not-supported-in-this-environment"));
            return F()
        }
        ;
        k.te = function() {
            return G(new P("operation-not-supported-in-this-environment"))
        }
        ;
        k.Tj = function() {
            return !1
        }
        ;
        k.Oj = function() {
            return !0
        }
        ;
        k.Hi = function() {
            return !0
        }
        ;
        k.ue = function(a, b, c, d) {
            if (this.Ff)
                return G(new P("redirect-operation-pending"));
            var e = this
              , f = p.document
              , g = null
              , h = null
              , l = null
              , m = null;
            return this.Ff = F().then(function() {
                Nm(b);
                return Wp(e)
            }).then(function() {
                return Xp(e, a, b, c, d)
            }).then(function() {
                return (new E(function(q, y) {
                    h = function() {
                        var B = N("cordova.plugins.browsertab.close", p);
                        q();
                        "function" === typeof B && B();
                        e.he && "function" === typeof e.he.close && (e.he.close(),
                        e.he = null);
                        return !1
                    }
                    ;
                    e.Ec(h);
                    l = function() {
                        g || (g = Rj(e.Pl).then(function() {
                            y(new P("redirect-cancelled-by-user"))
                        }))
                    }
                    ;
                    m = function() {
                        ol() && l()
                    }
                    ;
                    f.addEventListener("resume", l, !1);
                    Fk().toLowerCase().match(/android/) || f.addEventListener("visibilitychange", m, !1)
                }
                )).l(function(q) {
                    return Yp(e).then(function() {
                        throw q;
                    })
                })
            }).Cc(function() {
                l && f.removeEventListener("resume", l, !1);
                m && f.removeEventListener("visibilitychange", m, !1);
                g && g.cancel();
                h && e.Gd(h);
                e.Ff = null
            })
        }
        ;
        var Xp = function(a, b, c, d, e) {
            var f = Up()
              , g = new Jl(b,d,null,f,new P("no-auth-event"),null,e)
              , h = N("BuildInfo.packageName", p);
            if ("string" !== typeof h)
                throw new P("invalid-cordova-configuration");
            var l = N("BuildInfo.displayName", p)
              , m = {};
            if (Fk().toLowerCase().match(/iphone|ipad|ipod/))
                m.ibi = h;
            else if (Fk().toLowerCase().match(/android/))
                m.apn = h;
            else
                return G(new P("operation-not-supported-in-this-environment"));
            l && (m.appDisplayName = l);
            f = Vp(f);
            m.sessionId = f;
            var q = lo(a.ya, a.ha, a.ka, b, c, null, d, a.Gc, m, a.Ia, e, a.N);
            return a.Pc().then(function() {
                var y = a.Rj;
                return a.fm.O.set(Jp, g.T(), y)
            }).then(function() {
                var y = N("cordova.plugins.browsertab.isAvailable", p);
                if ("function" !== typeof y)
                    throw new P("invalid-cordova-configuration");
                var B = null;
                y(function(S) {
                    if (S) {
                        B = N("cordova.plugins.browsertab.openUrl", p);
                        if ("function" !== typeof B)
                            throw new P("invalid-cordova-configuration");
                        B(q)
                    } else {
                        B = N("cordova.InAppBrowser.open", p);
                        if ("function" !== typeof B)
                            throw new P("invalid-cordova-configuration");
                        S = B;
                        var Ca = Fk();
                        Ca = !(!Ca.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !Ca.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
                        a.he = S(q, Ca ? "_blank" : "_system", "location=yes")
                    }
                })
            })
        };
        Sp.prototype.Wd = function(a) {
            for (var b = 0; b < this.Vb.length; b++)
                try {
                    this.Vb[b](a)
                } catch (c) {}
        }
        ;
        var Wp = function(a) {
            a.Og || (a.Og = a.Pc().then(function() {
                return new E(function(b) {
                    var c = function(d) {
                        b(d);
                        a.Gd(c);
                        return !1
                    };
                    a.Ec(c);
                    Zp(a)
                }
                )
            }));
            return a.Og
        }
          , Yp = function(a) {
            var b = null;
            return Kp(a.Bi).then(function(c) {
                b = c;
                return Lp(a.Bi)
            }).then(function() {
                return b
            })
        }
          , Zp = function(a) {
            var b = new Jl("unknown",null,null,null,new P("no-auth-event"))
              , c = !1
              , d = Rj(a.rl).then(function() {
                return Yp(a).then(function() {
                    c || a.Wd(b)
                })
            })
              , e = function(g) {
                c = !0;
                d && d.cancel();
                Yp(a).then(function(h) {
                    var l = b;
                    if (h && g && g.url) {
                        var m = null;
                        l = Tl(g.url);
                        -1 != l.indexOf("/__/auth/callback") && (m = M(l),
                        m = kl(wk(m, "firebaseError") || null),
                        m = (m = "object" === typeof m ? Il(m) : null) ? new Jl(h.getType(),h.Ja,null,null,m,null,h.ma) : new Jl(h.getType(),h.Ja,l,h.de(),null,null,h.ma));
                        l = m || b
                    }
                    a.Wd(l)
                })
            }
              , f = p.handleOpenURL;
            p.handleOpenURL = function(g) {
                0 == g.toLowerCase().indexOf(N("BuildInfo.packageName", p).toLowerCase() + "://") && e({
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
            Rp || (Rp = new Qp);
            Rp.subscribe(e)
        };
        Sp.prototype.Ec = function(a) {
            this.Vb.push(a);
            Wp(this).l(function(b) {
                "auth/invalid-cordova-configuration" === b.code && (b = new Jl("unknown",null,null,null,new P("no-auth-event")),
                a(b))
            })
        }
        ;
        Sp.prototype.Gd = function(a) {
            Sa(this.Vb, function(b) {
                return b == a
            })
        }
        ;
        var $p = function(a) {
            this.V = a;
            this.O = Dp()
        }
          , bq = function(a) {
            return a.O.set(aq, "pending", a.V)
        }
          , cq = function(a) {
            return a.O.remove(aq, a.V)
        }
          , dq = function(a) {
            return a.O.get(aq, a.V).then(function(b) {
                return "pending" == b
            })
        }
          , aq = {
            name: "pendingRedirect",
            ua: "session"
        };
        var iq = function(a, b, c, d) {
            this.Hf = {};
            this.Tg = 0;
            this.ya = a;
            this.ha = b;
            this.ka = c;
            this.N = d;
            this.Ee = [];
            this.vd = !1;
            this.kg = u(this.Ig, this);
            this.xc = new eq(this);
            this.ih = new fq(this);
            this.qe = new $p(gq(this.ha, this.ka));
            this.Dc = {};
            this.Dc.unknown = this.xc;
            this.Dc.signInViaRedirect = this.xc;
            this.Dc.linkViaRedirect = this.xc;
            this.Dc.reauthViaRedirect = this.xc;
            this.Dc.signInViaPopup = this.ih;
            this.Dc.linkViaPopup = this.ih;
            this.Dc.reauthViaPopup = this.ih;
            this.qb = hq(this.ya, this.ha, this.ka, Ek, this.N)
        }
          , hq = function(a, b, c, d, e) {
            var f = firebase.SDK_VERSION || null;
            return Uk() ? new Sp(a,b,c,f,d,e) : new ho(a,b,c,f,d,e)
        };
        iq.prototype.reset = function() {
            this.vd = !1;
            this.qb.Gd(this.kg);
            this.qb = hq(this.ya, this.ha, this.ka, null, this.N);
            this.Hf = {}
        }
        ;
        iq.prototype.jd = function() {
            this.xc.jd()
        }
        ;
        iq.prototype.initialize = function() {
            var a = this;
            this.vd || (this.vd = !0,
            this.qb.Ec(this.kg));
            var b = this.qb;
            return this.qb.Pc().l(function(c) {
                a.qb == b && a.reset();
                throw c;
            })
        }
        ;
        var lq = function(a) {
            a.qb.Oj() && a.initialize().l(function(b) {
                var c = new Jl("unknown",null,null,null,new P("operation-not-supported-in-this-environment"));
                jq(b) && a.Ig(c)
            });
            a.qb.Hi() || kq(a.xc)
        };
        k = iq.prototype;
        k.subscribe = function(a) {
            Pa(this.Ee, a) || this.Ee.push(a);
            if (!this.vd) {
                var b = this;
                dq(this.qe).then(function(c) {
                    c ? cq(b.qe).then(function() {
                        b.initialize().l(function(d) {
                            var e = new Jl("unknown",null,null,null,new P("operation-not-supported-in-this-environment"));
                            jq(d) && b.Ig(e)
                        })
                    }) : lq(b)
                }).l(function() {
                    lq(b)
                })
            }
        }
        ;
        k.unsubscribe = function(a) {
            Sa(this.Ee, function(b) {
                return b == a
            })
        }
        ;
        k.Ig = function(a) {
            if (!a)
                throw new P("invalid-auth-event");
            6E5 <= Date.now() - this.Tg && (this.Hf = {},
            this.Tg = 0);
            if (a && a.getUid() && this.Hf.hasOwnProperty(a.getUid()))
                return !1;
            for (var b = !1, c = 0; c < this.Ee.length; c++) {
                var d = this.Ee[c];
                if (d.ai(a.getType(), a.Ja)) {
                    if (b = this.Dc[a.getType()])
                        b.xj(a, d),
                        a && (a.de() || a.Ja) && (this.Hf[a.getUid()] = !0,
                        this.Tg = Date.now());
                    b = !0;
                    break
                }
            }
            kq(this.xc);
            return b
        }
        ;
        k.getRedirectResult = function() {
            return this.xc.getRedirectResult()
        }
        ;
        k.te = function(a, b, c, d, e, f) {
            var g = this;
            return this.qb.te(a, b, c, function() {
                g.vd || (g.vd = !0,
                g.qb.Ec(g.kg))
            }, function() {
                g.reset()
            }, d, e, f)
        }
        ;
        var jq = function(a) {
            return a && "auth/cordova-not-ready" == a.code ? !0 : !1
        };
        iq.prototype.ue = function(a, b, c, d) {
            var e = this, f;
            return bq(this.qe).then(function() {
                return e.qb.ue(a, b, c, d).l(function(g) {
                    if (jq(g))
                        throw new P("operation-not-supported-in-this-environment");
                    f = g;
                    return cq(e.qe).then(function() {
                        throw f;
                    })
                }).then(function() {
                    return e.qb.Tj() ? new E(function() {}
                    ) : cq(e.qe).then(function() {
                        return e.getRedirectResult()
                    }).then(function() {}).l(function() {})
                })
            })
        }
        ;
        iq.prototype.Ce = function(a, b, c, d) {
            return this.qb.Ce(c, function(e) {
                a.Vc(b, null, e, d)
            }, mq.get())
        }
        ;
        var gq = function(a, b, c) {
            a = a + ":" + b;
            c && (a = a + ":" + c.url);
            return a
        }
          , oq = function(a, b, c, d) {
            var e = gq(b, c, d);
            nq[e] || (nq[e] = new iq(a,b,c,d));
            return nq[e]
        }
          , mq = new nl(2E3,1E4)
          , pq = new nl(3E4,6E4)
          , nq = {}
          , eq = function(a) {
            this.O = a;
            this.Fd = null;
            this.xe = [];
            this.we = [];
            this.Ed = null;
            this.Uj = this.ye = !1
        };
        eq.prototype.reset = function() {
            this.Fd = null;
            this.Ed && (this.Ed.cancel(),
            this.Ed = null)
        }
        ;
        eq.prototype.xj = function(a, b) {
            if (a) {
                this.reset();
                this.ye = !0;
                var c = a.getType()
                  , d = a.Ja
                  , e = a.getError() && "auth/web-storage-unsupported" == a.getError().code
                  , f = a.getError() && "auth/operation-not-supported-in-this-environment" == a.getError().code;
                this.Uj = !(!e && !f);
                "unknown" != c || e || f ? a.yb ? this.nh(a, b) : b.ae(c, d) ? this.oh(a, b) : G(new P("invalid-auth-event")) : (qq(this, !1, null, null),
                F())
            } else
                G(new P("invalid-auth-event"))
        }
        ;
        var kq = function(a) {
            a.ye || (a.ye = !0,
            qq(a, !1, null, null))
        };
        eq.prototype.jd = function() {
            this.ye && !this.Uj && qq(this, !1, null, null)
        }
        ;
        eq.prototype.nh = function(a) {
            qq(this, !0, null, a.getError());
            F()
        }
        ;
        eq.prototype.oh = function(a, b) {
            var c = this
              , d = a.Ja
              , e = a.getType();
            b = b.ae(e, d);
            d = a.Nd;
            e = a.de();
            var f = a.jh
              , g = a.ma
              , h = !!a.getType().match(/Redirect$/);
            b(d, e, g, f).then(function(l) {
                qq(c, h, l, null)
            }).l(function(l) {
                qq(c, h, null, l)
            })
        }
        ;
        var rq = function(a, b) {
            a.Fd = function() {
                return G(b)
            }
            ;
            if (a.we.length)
                for (var c = 0; c < a.we.length; c++)
                    a.we[c](b)
        }
          , sq = function(a, b) {
            a.Fd = function() {
                return F(b)
            }
            ;
            if (a.xe.length)
                for (var c = 0; c < a.xe.length; c++)
                    a.xe[c](b)
        }
          , qq = function(a, b, c, d) {
            b ? d ? rq(a, d) : sq(a, c) : sq(a, {
                user: null
            });
            a.xe = [];
            a.we = []
        };
        eq.prototype.getRedirectResult = function() {
            var a = this;
            return new E(function(b, c) {
                a.Fd ? a.Fd().then(b, c) : (a.xe.push(b),
                a.we.push(c),
                tq(a))
            }
            )
        }
        ;
        var tq = function(a) {
            var b = new P("timeout");
            a.Ed && a.Ed.cancel();
            a.Ed = Rj(pq.get()).then(function() {
                a.Fd || (a.ye = !0,
                qq(a, !0, null, b))
            })
        }
          , fq = function(a) {
            this.O = a
        };
        fq.prototype.xj = function(a, b) {
            if (a) {
                var c = a.getType()
                  , d = a.Ja;
                a.yb ? this.nh(a, b) : b.ae(c, d) ? this.oh(a, b) : G(new P("invalid-auth-event"))
            } else
                G(new P("invalid-auth-event"))
        }
        ;
        fq.prototype.nh = function(a, b) {
            var c = a.Ja
              , d = a.getType();
            b.Vc(d, null, a.getError(), c);
            F()
        }
        ;
        fq.prototype.oh = function(a, b) {
            var c = a.Ja
              , d = a.getType()
              , e = b.ae(d, c)
              , f = a.Nd
              , g = a.de();
            e(f, g, a.ma, a.jh).then(function(h) {
                b.Vc(d, h, null, c)
            }).l(function(h) {
                b.Vc(d, null, h, c)
            })
        }
        ;
        var uq = function(a, b, c) {
            var d = b && b.mfaPendingCredential;
            if (!d)
                throw new P("argument-error","Internal assert: Invalid MultiFactorResolver");
            this.Oe = a;
            this.Ek = Za(b);
            this.Gl = c;
            this.Hj = new Zl(null,d);
            this.Ii = [];
            var e = this;
            x(b.mfaInfo || [], function(f) {
                (f = Ol(f)) && e.Ii.push(f)
            });
            O(this, "auth", this.Oe);
            O(this, "session", this.Hj);
            O(this, "hints", this.Ii)
        };
        uq.prototype.resolveSignIn = function(a) {
            var b = this;
            return a.process(this.Oe.o, this.Hj).then(function(c) {
                var d = Za(b.Ek);
                delete d.mfaInfo;
                delete d.mfaPendingCredential;
                ab(d, c);
                return b.Gl(d)
            })
        }
        ;
        var vq = function(a, b, c, d) {
            P.call(this, "multi-factor-auth-required", d, b);
            this.Vl = new uq(a,b,c);
            O(this, "resolver", this.Vl)
        };
        n(vq, P);
        var wq = function(a, b, c) {
            if (a && t(a.serverResponse) && "auth/multi-factor-auth-required" === a.code)
                try {
                    return new vq(b,a.serverResponse,c,a.message)
                } catch (d) {}
            return null
        };
        var xq = function() {};
        xq.prototype.process = function(a, b, c) {
            return "enroll" == b.type ? yq(this, a, b, c) : zq(this, a, b)
        }
        ;
        var yq = function(a, b, c, d) {
            return c.be().then(function(e) {
                e = {
                    idToken: e
                };
                "undefined" !== typeof d && (e.displayName = d);
                ab(e, {
                    phoneVerificationInfo: Dm(a.Wg)
                });
                return Q(b, Rn, e)
            })
        }
          , zq = function(a, b, c) {
            return c.be().then(function(d) {
                d = {
                    mfaPendingCredential: d
                };
                ab(d, {
                    phoneVerificationInfo: Dm(a.Wg)
                });
                return Q(b, Sn, d)
            })
        }
          , Aq = function(a) {
            O(this, "factorId", a.providerId);
            this.Wg = a
        };
        v(Aq, xq);
        var Bq = function(a) {
            Aq.call(this, a);
            if (this.Wg.providerId != Hm.PROVIDER_ID)
                throw new P("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");
        };
        v(Bq, Aq);
        var Cq = function(a, b) {
            Ii.call(this, a);
            for (var c in b)
                this[c] = b[c]
        };
        n(Cq, Ii);
        var Eq = function(a, b) {
            this.jc = a;
            this.We = [];
            this.um = u(this.fl, this);
            Xi(this.jc, "userReloaded", this.um);
            var c = [];
            b && b.multiFactor && b.multiFactor.enrolledFactors && x(b.multiFactor.enrolledFactors, function(d) {
                var e = null
                  , f = {};
                if (d) {
                    d.uid && (f.mfaEnrollmentId = d.uid);
                    d.displayName && (f.displayName = d.displayName);
                    d.enrollmentTime && (f.enrolledAt = (new Date(d.enrollmentTime)).toISOString());
                    if (d.phoneNumber) {
                        f.phoneInfo = d.phoneNumber;
                        try {
                            e = new Ml(f)
                        } catch (g) {}
                    } else if (d.totpInfo) {
                        f.totpInfo = d.totpInfo;
                        try {
                            e = new Nl(f)
                        } catch (g) {}
                    } else
                        e = null;
                    d = e
                } else
                    d = null;
                d && c.push(d)
            });
            Dq(this, c)
        }
          , Fq = function(a) {
            var b = [];
            x(a.mfaInfo || [], function(c) {
                (c = Ol(c)) && b.push(c)
            });
            return b
        };
        Eq.prototype.fl = function(a) {
            Dq(this, Fq(a.vm))
        }
        ;
        var Dq = function(a, b) {
            a.We = b;
            O(a, "enrolledFactors", b)
        };
        k = Eq.prototype;
        k.copy = function(a) {
            Dq(this, a.We)
        }
        ;
        k.getSession = function() {
            return this.jc.getIdToken().then(function(a) {
                return new Zl(a,null)
            })
        }
        ;
        k.enroll = function(a, b) {
            var c = this
              , d = this.jc.o;
            return this.getSession().then(function(e) {
                return a.process(d, e, b)
            }).then(function(e) {
                Gq(c.jc, e);
                return c.jc.reload()
            })
        }
        ;
        k.unenroll = function(a) {
            var b = this
              , c = "string" === typeof a ? a : a.uid
              , d = this.jc.o;
            return this.jc.getIdToken().then(function(e) {
                return Q(d, Wn, {
                    idToken: e,
                    mfaEnrollmentId: c
                })
            }).then(function(e) {
                var f = Ma(b.We, function(g) {
                    return g.uid != c
                });
                Dq(b, f);
                Gq(b.jc, e);
                return b.jc.reload().l(function(g) {
                    if ("auth/user-token-expired" != g.code)
                        throw g;
                })
            })
        }
        ;
        k.T = function() {
            return {
                multiFactor: {
                    enrolledFactors: Na(this.We, function(a) {
                        return a.T()
                    })
                }
            }
        }
        ;
        var Hq = function(a) {
            this.o = a;
            this.Wa = this.Ta = null;
            this.md = Date.now()
        };
        Hq.prototype.T = function() {
            return {
                apiKey: this.o.ha,
                refreshToken: this.Ta,
                accessToken: this.Wa && this.Wa.toString(),
                expirationTime: this.md
            }
        }
        ;
        var Iq = function(a, b) {
            "undefined" === typeof b && (a.Wa ? (b = a.Wa,
            b = b.Dg - b.kl) : b = 0);
            a.md = Date.now() + 1E3 * b
        }
          , Jq = function(a, b) {
            a.Wa = Xl(b.idToken || "");
            a.Ta = b.refreshToken;
            b = b.expiresIn;
            Iq(a, "undefined" !== typeof b ? Number(b) : void 0)
        };
        Hq.prototype.copy = function(a) {
            this.Wa = a.Wa;
            this.Ta = a.Ta;
            this.md = a.md
        }
        ;
        var Kq = function(a, b) {
            return fn(a.o, b).then(function(c) {
                a.Wa = Xl(c.access_token);
                a.Ta = c.refresh_token;
                Iq(a, c.expires_in);
                return {
                    accessToken: a.Wa.toString(),
                    refreshToken: a.Ta
                }
            }).l(function(c) {
                "auth/user-token-expired" == c.code && (a.Ta = null);
                throw c;
            })
        };
        Hq.prototype.getToken = function(a) {
            a = !!a;
            return this.Wa && !this.Ta ? G(new P("user-token-expired")) : a || !this.Wa || Date.now() > this.md - 3E4 ? this.Ta ? Kq(this, {
                grant_type: "refresh_token",
                refresh_token: this.Ta
            }) : F(null) : F({
                accessToken: this.Wa.toString(),
                refreshToken: this.Ta
            })
        }
        ;
        var Lq = function(a, b) {
            this.hi = a || null;
            this.Vi = b || null;
            zl(this, {
                lastSignInTime: rl(b || null),
                creationTime: rl(a || null)
            })
        };
        Lq.prototype.clone = function() {
            return new Lq(this.hi,this.Vi)
        }
        ;
        Lq.prototype.T = function() {
            return {
                lastLoginAt: this.Vi,
                createdAt: this.hi
            }
        }
        ;
        var Mq = function(a, b, c, d, e, f) {
            zl(this, {
                uid: a,
                displayName: d || null,
                photoURL: e || null,
                email: c || null,
                phoneNumber: f || null,
                providerId: b
            })
        }
          , R = function(a, b, c) {
            hj.call(this);
            this.Ka = [];
            this.ha = a.apiKey;
            this.ka = a.appName;
            this.ya = a.authDomain || null;
            var d = firebase.SDK_VERSION ? cl("JsCore", firebase.SDK_VERSION) : null;
            this.o = new Vm(this.ha,Dk(Ek),d);
            (this.N = a.emulatorConfig || null) && Zm(this.o, this.N);
            this.Nb = new Hq(this.o);
            Nq(this, b.idToken);
            Jq(this.Nb, b);
            O(this, "refreshToken", this.Nb.Ta);
            Oq(this, c || {});
            this.re = !1;
            this.ya && gl() && (this.W = oq(this.ya, this.ha, this.ka, this.N));
            this.Rf = [];
            this.Ob = null;
            this.Cd = Pq(this);
            this.Pd = u(this.Kg, this);
            var e = this;
            this.Gb = null;
            this.kj = function(f) {
                e.Id(f.languageCode)
            }
            ;
            this.Rg = null;
            this.ij = function(f) {
                Qq(e, f.emulatorConfig)
            }
            ;
            this.yg = null;
            this.Da = [];
            this.jj = function(f) {
                Rq(e, f.Mk)
            }
            ;
            this.Eg = null;
            this.yf = new Eq(this,c);
            O(this, "multiFactor", this.yf)
        };
        n(R, hj);
        R.prototype.Id = function(a) {
            this.Gb = a;
            Xm(this.o, a)
        }
        ;
        var Qq = function(a, b) {
            a.N = b;
            Zm(a.o, b);
            a.W && (b = a.W,
            a.W = oq(a.ya, a.ha, a.ka, a.N),
            a.re && (b.unsubscribe(a),
            a.W.subscribe(a)))
        }
          , Sq = function(a, b) {
            a.Rg && ej(a.Rg, "languageCodeChanged", a.kj);
            (a.Rg = b) && Xi(b, "languageCodeChanged", a.kj)
        }
          , Tq = function(a, b) {
            a.yg && ej(a.yg, "emulatorConfigChanged", a.ij);
            (a.yg = b) && Xi(b, "emulatorConfigChanged", a.ij)
        }
          , Rq = function(a, b) {
            a.Da = b;
            $m(a.o, firebase.SDK_VERSION ? cl("JsCore", firebase.SDK_VERSION, a.Da) : null)
        }
          , Uq = function(a, b) {
            a.Eg && ej(a.Eg, "frameworkChanged", a.jj);
            (a.Eg = b) && Xi(b, "frameworkChanged", a.jj)
        };
        R.prototype.Kg = function() {
            this.Cd.zd && (this.Cd.stop(),
            this.Cd.start())
        }
        ;
        var Vq = function(a) {
            try {
                return firebase.app(a.ka).auth()
            } catch (b) {
                throw new P("internal-error","No firebase.auth.Auth instance is available for the Firebase App '" + a.ka + "'!");
            }
        }
          , Pq = function(a) {
            return new pp(function() {
                return a.getIdToken(!0)
            }
            ,function(b) {
                return b && "auth/network-request-failed" == b.code ? !0 : !1
            }
            ,function() {
                var b = a.Nb.md - Date.now() - 3E5;
                return 0 < b ? b : 0
            }
            )
        }
          , Wq = function(a) {
            a.ld || a.Cd.zd || (a.Cd.start(),
            ej(a, "tokenChanged", a.Pd),
            Xi(a, "tokenChanged", a.Pd))
        }
          , Xq = function(a) {
            ej(a, "tokenChanged", a.Pd);
            a.Cd.stop()
        }
          , Nq = function(a, b) {
            a.Ui = b;
            O(a, "_lat", b)
        }
          , Yq = function(a, b) {
            Sa(a.Rf, function(c) {
                return c == b
            })
        }
          , Zq = function(a) {
            for (var b = [], c = 0; c < a.Rf.length; c++)
                b.push(a.Rf[c](a));
            return dg(b).then(function() {
                return a
            })
        }
          , $q = function(a) {
            a.W && !a.re && (a.re = !0,
            a.W.subscribe(a))
        }
          , Oq = function(a, b) {
            zl(a, {
                uid: b.uid,
                displayName: b.displayName || null,
                photoURL: b.photoURL || null,
                email: b.email || null,
                emailVerified: b.emailVerified || !1,
                phoneNumber: b.phoneNumber || null,
                isAnonymous: b.isAnonymous || !1,
                tenantId: b.tenantId || null,
                metadata: new Lq(b.createdAt,b.lastLoginAt),
                providerData: []
            });
            a.o.ma = a.tenantId
        }
          , ar = function() {}
          , br = function(a) {
            return F().then(function() {
                if (a.ld)
                    throw new P("app-deleted");
            })
        }
          , cr = function(a) {
            return Na(a.providerData, function(b) {
                return b.providerId
            })
        }
          , er = function(a, b) {
            b && (dr(a, b.providerId),
            a.providerData.push(b))
        }
          , dr = function(a, b) {
            Sa(a.providerData, function(c) {
                return c.providerId == b
            })
        }
          , fr = function(a, b, c) {
            ("uid" != b || c) && a.hasOwnProperty(b) && O(a, b, c)
        };
        R.prototype.copy = function(a) {
            var b = this;
            b != a && (zl(this, {
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
            a.metadata ? O(this, "metadata", a.metadata.clone()) : O(this, "metadata", new Lq),
            x(a.providerData, function(c) {
                er(b, c)
            }),
            this.Nb.copy(a.Nb),
            O(this, "refreshToken", this.Nb.Ta),
            this.yf.copy(a.yf))
        }
        ;
        R.prototype.reload = function() {
            var a = this;
            return this.v(br(this).then(function() {
                return gr(a).then(function() {
                    return Zq(a)
                }).then(ar)
            }))
        }
        ;
        var gr = function(a) {
            return a.getIdToken().then(function(b) {
                var c = a.isAnonymous;
                return Q(a.o, Tn, {
                    idToken: b
                }).then(u(a.Ll, a)).then(function() {
                    c || fr(a, "isAnonymous", !1);
                    return b
                })
            })
        };
        R.prototype.getIdTokenResult = function(a) {
            return this.getIdToken(a).then(function(b) {
                return new Yl(b)
            })
        }
        ;
        R.prototype.getIdToken = function(a) {
            var b = this;
            return this.v(br(this).then(function() {
                return b.Nb.getToken(a)
            }).then(function(c) {
                if (!c)
                    throw new P("internal-error");
                c.accessToken != b.Ui && (Nq(b, c.accessToken),
                b.uc());
                fr(b, "refreshToken", c.refreshToken);
                return c.accessToken
            }))
        }
        ;
        var Gq = function(a, b) {
            b.idToken && a.Ui != b.idToken && (Jq(a.Nb, b),
            a.uc(),
            Nq(a, b.idToken),
            fr(a, "refreshToken", a.Nb.Ta))
        };
        R.prototype.uc = function() {
            this.dispatchEvent(new Cq("tokenChanged"))
        }
        ;
        R.prototype.Ll = function(a) {
            a = a.users;
            if (!a || !a.length)
                throw new P("internal-error");
            a = a[0];
            Oq(this, {
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
            for (var b = hr(a), c = 0; c < b.length; c++)
                er(this, b[c]);
            fr(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
            this.dispatchEvent(new Cq("userReloaded",{
                vm: a
            }))
        }
        ;
        var hr = function(a) {
            return (a = a.providerUserInfo) && a.length ? Na(a, function(b) {
                return new Mq(b.rawId,b.providerId,b.email,b.displayName,b.photoUrl,b.phoneNumber)
            }) : []
        };
        R.prototype.reauthenticateAndRetrieveDataWithCredential = function(a) {
            wl("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");
            return this.reauthenticateWithCredential(a)
        }
        ;
        R.prototype.reauthenticateWithCredential = function(a) {
            var b = this
              , c = null;
            return this.v(a.me(this.o, this.uid).then(function(d) {
                Gq(b, d);
                c = ir(b, d, "reauthenticate");
                b.Ob = null;
                return b.reload()
            }).then(function() {
                return c
            }), !0)
        }
        ;
        var jr = function(a, b) {
            return gr(a).then(function() {
                if (Pa(cr(a), b))
                    return Zq(a).then(function() {
                        throw new P("provider-already-linked");
                    })
            })
        };
        R.prototype.linkAndRetrieveDataWithCredential = function(a) {
            wl("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");
            return this.linkWithCredential(a)
        }
        ;
        R.prototype.linkWithCredential = function(a) {
            var b = this
              , c = null;
            return this.v(jr(this, a.providerId).then(function() {
                return b.getIdToken()
            }).then(function(d) {
                return a.wd(b.o, d)
            }).then(function(d) {
                c = ir(b, d, "link");
                return kr(b, d)
            }).then(function() {
                return c
            }))
        }
        ;
        R.prototype.linkWithPhoneNumber = function(a, b) {
            var c = this;
            return this.v(jr(this, "phone").then(function() {
                return op(Vq(c), a, b, u(c.linkWithCredential, c))
            }))
        }
        ;
        R.prototype.reauthenticateWithPhoneNumber = function(a, b) {
            var c = this;
            return this.v(F().then(function() {
                return op(Vq(c), a, b, u(c.reauthenticateWithCredential, c))
            }), !0)
        }
        ;
        var ir = function(a, b, c) {
            var d = Mm(b);
            b = yp(b);
            return Al({
                user: a,
                credential: d,
                additionalUserInfo: b,
                operationType: c
            })
        }
          , kr = function(a, b) {
            Gq(a, b);
            return a.reload().then(function() {
                return a
            })
        };
        k = R.prototype;
        k.updateEmail = function(a) {
            var b = this;
            return this.v(this.getIdToken().then(function(c) {
                return b.o.updateEmail(c, a)
            }).then(function(c) {
                Gq(b, c);
                return b.reload()
            }))
        }
        ;
        k.updatePhoneNumber = function(a) {
            var b = this;
            return this.v(this.getIdToken().then(function(c) {
                return a.wd(b.o, c)
            }).then(function(c) {
                Gq(b, c);
                return b.reload()
            }))
        }
        ;
        k.updatePassword = function(a) {
            var b = this;
            return this.v(this.getIdToken().then(function(c) {
                return b.o.updatePassword(c, a)
            }).then(function(c) {
                Gq(b, c);
                return b.reload()
            }))
        }
        ;
        k.updateProfile = function(a) {
            if (void 0 === a.displayName && void 0 === a.photoURL)
                return br(this);
            var b = this;
            return this.v(this.getIdToken().then(function(c) {
                return b.o.updateProfile(c, {
                    displayName: a.displayName,
                    photoUrl: a.photoURL
                })
            }).then(function(c) {
                Gq(b, c);
                fr(b, "displayName", c.displayName || null);
                fr(b, "photoURL", c.photoUrl || null);
                x(b.providerData, function(d) {
                    "password" === d.providerId && (O(d, "displayName", b.displayName),
                    O(d, "photoURL", b.photoURL))
                });
                return Zq(b)
            }).then(ar))
        }
        ;
        k.unlink = function(a) {
            var b = this;
            return this.v(gr(this).then(function(c) {
                return Pa(cr(b), a) ? Dn(b.o, c, [a]).then(function(d) {
                    var e = {};
                    x(d.providerUserInfo || [], function(f) {
                        e[f.providerId] = !0
                    });
                    x(cr(b), function(f) {
                        e[f] || dr(b, f)
                    });
                    e[Hm.PROVIDER_ID] || O(b, "phoneNumber", null);
                    return Zq(b)
                }) : Zq(b).then(function() {
                    throw new P("no-such-provider");
                })
            }))
        }
        ;
        k.delete = function() {
            var a = this;
            return this.v(this.getIdToken().then(function(b) {
                return Q(a.o, Qn, {
                    idToken: b
                })
            }).then(function() {
                a.dispatchEvent(new Cq("userDeleted"))
            })).then(function() {
                a.destroy()
            })
        }
        ;
        k.ai = function(a, b) {
            return "linkViaPopup" == a && (this.Kb || null) == b && this.Jb || "reauthViaPopup" == a && (this.Kb || null) == b && this.Jb || "linkViaRedirect" == a && (this.yc || null) == b || "reauthViaRedirect" == a && (this.yc || null) == b ? !0 : !1
        }
        ;
        k.Vc = function(a, b, c, d) {
            "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.Kb || null) || (c && this.Tc ? this.Tc(c) : b && !c && this.Jb && this.Jb(b),
            this.La && (this.La.cancel(),
            this.La = null),
            delete this.Jb,
            delete this.Tc)
        }
        ;
        k.ae = function(a, b) {
            return "linkViaPopup" == a && b == (this.Kb || null) ? u(this.vi, this) : "reauthViaPopup" == a && b == (this.Kb || null) ? u(this.wi, this) : "linkViaRedirect" == a && (this.yc || null) == b ? u(this.vi, this) : "reauthViaRedirect" == a && (this.yc || null) == b ? u(this.wi, this) : null
        }
        ;
        k.Ze = function() {
            return dl(this.uid + ":::")
        }
        ;
        k.linkWithPopup = function(a) {
            var b = this;
            return lr(this, "linkViaPopup", a, function() {
                return jr(b, a.providerId).then(function() {
                    return Zq(b)
                })
            }, !1)
        }
        ;
        k.reauthenticateWithPopup = function(a) {
            return lr(this, "reauthViaPopup", a, function() {
                return F()
            }, !0)
        }
        ;
        var lr = function(a, b, c, d, e) {
            if (!gl())
                return G(new P("operation-not-supported-in-this-environment"));
            if (a.Ob && !e)
                return G(a.Ob);
            var f = Gl(c.providerId)
              , g = a.Ze()
              , h = null;
            (!hl() || Xk()) && a.ya && c.isOAuthProvider && (h = lo(a.ya, a.ha, a.ka, b, c, null, g, firebase.SDK_VERSION || null, null, null, a.tenantId, a.N));
            var l = Ok(h, f && f.Bd, f && f.Ad);
            d = d().then(function() {
                mr(a);
                if (!e)
                    return a.getIdToken().then(function() {})
            }).then(function() {
                return a.W.te(l, b, c, g, !!h, a.tenantId)
            }).then(function() {
                return new E(function(m, q) {
                    a.Vc(b, null, new P("cancelled-popup-request"), a.Kb || null);
                    a.Jb = m;
                    a.Tc = q;
                    a.Kb = g;
                    a.La = a.W.Ce(a, b, l, g)
                }
                )
            }).then(function(m) {
                l && Nk(l);
                return m ? Al(m) : null
            }).l(function(m) {
                l && Nk(l);
                throw m;
            });
            return a.v(d, e)
        };
        R.prototype.linkWithRedirect = function(a) {
            var b = this;
            return nr(this, "linkViaRedirect", a, function() {
                return jr(b, a.providerId)
            }, !1)
        }
        ;
        R.prototype.reauthenticateWithRedirect = function(a) {
            return nr(this, "reauthViaRedirect", a, function() {
                return F()
            }, !0)
        }
        ;
        var nr = function(a, b, c, d, e) {
            if (!gl())
                return G(new P("operation-not-supported-in-this-environment"));
            if (a.Ob && !e)
                return G(a.Ob);
            var f = null
              , g = a.Ze();
            d = d().then(function() {
                mr(a);
                if (!e)
                    return a.getIdToken().then(function() {})
            }).then(function() {
                a.yc = g;
                return Zq(a)
            }).then(function(h) {
                a.zc && (h = a.zc,
                h = h.O.set(or, a.T(), h.V));
                return h
            }).then(function() {
                return a.W.ue(b, c, g, a.tenantId)
            }).l(function(h) {
                f = h;
                if (a.zc)
                    return pr(a.zc);
                throw f;
            }).then(function() {
                if (f)
                    throw f;
            });
            return a.v(d, e)
        }
          , mr = function(a) {
            if (!a.W || !a.re) {
                if (a.W && !a.re)
                    throw new P("internal-error");
                throw new P("auth-domain-config-required");
            }
        };
        k = R.prototype;
        k.vi = function(a, b, c, d) {
            var e = this;
            this.La && (this.La.cancel(),
            this.La = null);
            var f = null;
            c = this.getIdToken().then(function(g) {
                return dm(e.o, {
                    requestUri: a,
                    postBody: d,
                    sessionId: b,
                    idToken: g
                })
            }).then(function(g) {
                f = ir(e, g, "link");
                return kr(e, g)
            }).then(function() {
                return f
            });
            return this.v(c)
        }
        ;
        k.wi = function(a, b, c, d) {
            var e = this;
            this.La && (this.La.cancel(),
            this.La = null);
            var f = null
              , g = F().then(function() {
                return am(em(e.o, {
                    requestUri: a,
                    sessionId: b,
                    postBody: d,
                    tenantId: c
                }), e.uid)
            }).then(function(h) {
                f = ir(e, h, "reauthenticate");
                Gq(e, h);
                e.Ob = null;
                return e.reload()
            }).then(function() {
                return f
            });
            return this.v(g, !0)
        }
        ;
        k.sendEmailVerification = function(a) {
            var b = this
              , c = null;
            return this.v(this.getIdToken().then(function(d) {
                c = d;
                return "undefined" === typeof a || Ya(a) ? {} : mp(new lp(a))
            }).then(function(d) {
                return b.o.sendEmailVerification(c, d)
            }).then(function(d) {
                if (b.email != d)
                    return b.reload()
            }).then(function() {}))
        }
        ;
        k.verifyBeforeUpdateEmail = function(a, b) {
            var c = this
              , d = null;
            return this.v(this.getIdToken().then(function(e) {
                d = e;
                return "undefined" === typeof b || Ya(b) ? {} : mp(new lp(b))
            }).then(function(e) {
                return c.o.verifyBeforeUpdateEmail(d, a, e)
            }).then(function(e) {
                if (c.email != e)
                    return c.reload()
            }).then(function() {}))
        }
        ;
        k.destroy = function() {
            for (var a = 0; a < this.Ka.length; a++)
                this.Ka[a].cancel("app-deleted");
            Sq(this, null);
            Tq(this, null);
            Uq(this, null);
            this.Ka = [];
            this.ld = !0;
            Xq(this);
            O(this, "refreshToken", null);
            this.W && this.W.unsubscribe(this)
        }
        ;
        k.v = function(a, b) {
            var c = this
              , d = qr(this, a, b);
            this.Ka.push(d);
            d.Cc(function() {
                Qa(c.Ka, d)
            });
            return d.l(function(e) {
                var f = null;
                e && "auth/multi-factor-auth-required" === e.code && (f = wq(e.T(), Vq(c), u(c.Jg, c)));
                throw f || e;
            })
        }
        ;
        k.Jg = function(a) {
            var b = null
              , c = this;
            a = am(F(a), c.uid).then(function(d) {
                b = ir(c, d, "reauthenticate");
                Gq(c, d);
                c.Ob = null;
                return c.reload()
            }).then(function() {
                return b
            });
            return this.v(a, !0)
        }
        ;
        var qr = function(a, b, c) {
            return a.Ob && !c ? (b.cancel(),
            G(a.Ob)) : b.l(function(d) {
                !d || "auth/user-disabled" != d.code && "auth/user-token-expired" != d.code || (a.Ob || a.dispatchEvent(new Cq("userInvalidated")),
                a.Ob = d);
                throw d;
            })
        };
        R.prototype.toJSON = function() {
            return this.T()
        }
        ;
        R.prototype.T = function() {
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
                apiKey: this.ha,
                appName: this.ka,
                authDomain: this.ya,
                stsTokenManager: this.Nb.T(),
                redirectEventId: this.yc || null
            };
            this.metadata && ab(a, this.metadata.T());
            x(this.providerData, function(b) {
                var c = a.providerData, d = c.push, e = {}, f;
                for (f in b)
                    b.hasOwnProperty(f) && (e[f] = b[f]);
                d.call(c, e)
            });
            ab(a, this.yf.T());
            return a
        }
        ;
        var rr = function(a) {
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
            a.providerData && x(a.providerData, function(f) {
                f && er(e, Al(f))
            });
            a.redirectEventId && (e.yc = a.redirectEventId);
            return e
        }
          , sr = function(a, b, c, d) {
            var e = new R(a,b);
            c && (e.zc = c);
            d && Rq(e, d);
            return e.reload().then(function() {
                return e
            })
        }
          , tr = function(a, b, c, d) {
            b = b || {
                apiKey: a.ha,
                authDomain: a.ya,
                appName: a.ka
            };
            var e = a.Nb
              , f = {};
            f.idToken = e.Wa && e.Wa.toString();
            f.refreshToken = e.Ta;
            b = new R(b,f);
            c && (b.zc = c);
            d && Rq(b, d);
            b.copy(a);
            return b
        };
        O(R.prototype, "providerId", "firebase");
        var ur = function(a) {
            this.V = a;
            this.O = Dp()
        }
          , pr = function(a) {
            return a.O.remove(or, a.V)
        }
          , vr = function(a, b) {
            return a.O.get(or, a.V).then(function(c) {
                c && b && (c.authDomain = b);
                return rr(c || {})
            })
        }
          , or = {
            name: "redirectUser",
            ua: "session"
        };
        var xr = function(a) {
            this.V = a;
            this.O = Dp();
            this.Xa = null;
            this.Zg = this.Pg();
            this.O.addListener(wr("local"), this.V, u(this.nm, this))
        };
        xr.prototype.nm = function() {
            var a = this
              , b = wr("local");
            yr(this, function() {
                return F().then(function() {
                    return a.Xa && "local" != a.Xa.ua ? a.O.get(b, a.V) : null
                }).then(function(c) {
                    if (c)
                        return zr(a, "local").then(function() {
                            a.Xa = b
                        })
                })
            })
        }
        ;
        var zr = function(a, b) {
            var c = [], d;
            for (d in zp)
                zp[d] !== b && c.push(a.O.remove(wr(zp[d]), a.V));
            c.push(a.O.remove(Ar, a.V));
            return cg(c)
        };
        xr.prototype.Pg = function() {
            var a = this
              , b = wr("local")
              , c = wr("session")
              , d = wr("none");
            return Fp(this.O, b, this.V).then(function() {
                return a.O.get(c, a.V)
            }).then(function(e) {
                return e ? c : a.O.get(d, a.V).then(function(f) {
                    return f ? d : a.O.get(b, a.V).then(function(g) {
                        return g ? b : a.O.get(Ar, a.V).then(function(h) {
                            return h ? wr(h) : b
                        })
                    })
                })
            }).then(function(e) {
                a.Xa = e;
                return zr(a, e.ua)
            }).l(function() {
                a.Xa || (a.Xa = b)
            })
        }
        ;
        var wr = function(a) {
            return {
                name: "authUser",
                ua: a
            }
        };
        xr.prototype.setPersistence = function(a) {
            var b = null
              , c = this;
            Ap(a);
            return yr(this, function() {
                return a != c.Xa.ua ? c.O.get(c.Xa, c.V).then(function(d) {
                    b = d;
                    return zr(c, a)
                }).then(function() {
                    c.Xa = wr(a);
                    if (b)
                        return c.O.set(c.Xa, b, c.V)
                }) : F()
            })
        }
        ;
        var Br = function(a) {
            return yr(a, function() {
                return a.O.set(Ar, a.Xa.ua, a.V)
            })
        }
          , Cr = function(a, b) {
            return yr(a, function() {
                return a.O.set(a.Xa, b.T(), a.V)
            })
        }
          , Dr = function(a) {
            return yr(a, function() {
                return a.O.remove(a.Xa, a.V)
            })
        }
          , Er = function(a, b, c) {
            return yr(a, function() {
                return a.O.get(a.Xa, a.V).then(function(d) {
                    d && b && (d.authDomain = b);
                    d && c && (d.emulatorConfig = c);
                    return rr(d || {})
                })
            })
        }
          , yr = function(a, b) {
            a.Zg = a.Zg.then(b, b);
            return a.Zg
        }
          , Ar = {
            name: "persistence",
            ua: "session"
        };
        var T = function(a) {
            hj.call(this);
            this.wb = !1;
            this.Lj = new kp;
            O(this, "settings", this.Lj);
            O(this, "app", a);
            if (this.U().options && this.U().options.apiKey)
                a = firebase.SDK_VERSION ? cl("JsCore", firebase.SDK_VERSION) : null,
                this.o = new Vm(this.U().options && this.U().options.apiKey,Dk(Ek),a);
            else
                throw new P("invalid-api-key");
            this.Ka = [];
            this.Fc = [];
            this.Od = [];
            this.Fl = firebase.INTERNAL.createSubscribe(u(this.ol, this));
            this.Ke = void 0;
            this.Il = firebase.INTERNAL.createSubscribe(u(this.ql, this));
            Fr(this, null);
            a = this.U().options.apiKey;
            var b = this.U().name;
            this.Pb = new xr(a + ":" + b);
            a = this.U().options.apiKey;
            b = this.U().name;
            this.Uc = new ur(a + ":" + b);
            this.Ne = this.v(Gr(this));
            this.Lb = this.v(Hr(this));
            this.uf = !1;
            this.Hg = u(this.om, this);
            this.Yj = u(this.qc, this);
            this.Pd = u(this.Kg, this);
            this.Wj = u(this.bl, this);
            this.Xj = u(this.dl, this);
            this.W = null;
            Ir(this);
            this.INTERNAL = {};
            this.INTERNAL["delete"] = u(this.delete, this);
            this.INTERNAL.logFramework = u(this.yl, this);
            this.Kc = 0;
            Jr(this);
            this.Da = [];
            this.N = null
        };
        n(T, hj);
        T.prototype.setPersistence = function(a) {
            a = this.Pb.setPersistence(a);
            return this.v(a)
        }
        ;
        T.prototype.Id = function(a) {
            this.Gb === a || this.wb || (this.Gb = a,
            Xm(this.o, this.Gb),
            this.dispatchEvent(new Kr(this.Gb)))
        }
        ;
        T.prototype.useDeviceLanguage = function() {
            var a = p.navigator;
            this.Id(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null)
        }
        ;
        T.prototype.useEmulator = function(a, b) {
            if (!this.N) {
                if (this.W)
                    throw new P("argument-error","useEmulator() must be called immediately following firebase.auth() initialization.");
                b = b ? !!b.disableWarnings : !1;
                Lr(b);
                this.N = {
                    url: a,
                    disableWarnings: b
                };
                this.Lj.ig = !0;
                Zm(this.o, this.N);
                this.dispatchEvent(new Mr(this.N))
            }
        }
        ;
        var Lr = function(a) {
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            p.document && !a && Tk().then(function() {
                var b = p.document.createElement("p");
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
                p.document.body.appendChild(b)
            })
        };
        T.prototype.yl = function(a) {
            this.Da.push(a);
            $m(this.o, firebase.SDK_VERSION ? cl("JsCore", firebase.SDK_VERSION, this.Da) : null);
            this.dispatchEvent(new Nr(this.Da))
        }
        ;
        T.prototype.Fh = function(a) {
            this.ma === a || this.wb || (this.ma = a,
            this.o.ma = this.ma)
        }
        ;
        var Jr = function(a) {
            Object.defineProperty(a, "lc", {
                get: function() {
                    return this.Gb
                },
                set: function(b) {
                    this.Id(b)
                },
                enumerable: !1
            });
            a.Gb = null;
            Object.defineProperty(a, "ti", {
                get: function() {
                    return this.ma
                },
                set: function(b) {
                    this.Fh(b)
                },
                enumerable: !1
            });
            a.ma = null;
            Object.defineProperty(a, "emulatorConfig", {
                get: function() {
                    if (this.N) {
                        var b = M(this.N.url);
                        b = Al({
                            protocol: b.Va,
                            host: b.Ga,
                            port: b.Tb,
                            options: Al({
                                disableWarnings: this.N.disableWarnings
                            })
                        })
                    } else
                        b = null;
                    return b
                },
                enumerable: !1
            })
        };
        T.prototype.toJSON = function() {
            return {
                apiKey: this.U().options.apiKey,
                authDomain: this.U().options.authDomain,
                appName: this.U().name,
                currentUser: U(this) && U(this).T()
            }
        }
        ;
        var Or = function(a) {
            return a.Fk || G(new P("auth-domain-config-required"))
        }
          , Ir = function(a) {
            var b = a.U().options.authDomain
              , c = a.U().options.apiKey;
            b && gl() && (a.Fk = a.Ne.then(function() {
                if (!a.wb) {
                    a.W = oq(b, c, a.U().name, a.N);
                    a.W.subscribe(a);
                    U(a) && $q(U(a));
                    if (a.Ac) {
                        $q(a.Ac);
                        var d = a.Ac;
                        d.Id(a.Gb);
                        Sq(d, a);
                        d = a.Ac;
                        Rq(d, a.Da);
                        Uq(d, a);
                        d = a.Ac;
                        Qq(d, a.N);
                        Tq(d, a);
                        a.Ac = null
                    }
                    return a.W
                }
            }))
        };
        k = T.prototype;
        k.ai = function(a, b) {
            switch (a) {
            case "unknown":
            case "signInViaRedirect":
                return !0;
            case "signInViaPopup":
                return this.Kb == b && !!this.Jb;
            default:
                return !1
            }
        }
        ;
        k.Vc = function(a, b, c, d) {
            "signInViaPopup" == a && this.Kb == d && (c && this.Tc ? this.Tc(c) : b && !c && this.Jb && this.Jb(b),
            this.La && (this.La.cancel(),
            this.La = null),
            delete this.Jb,
            delete this.Tc)
        }
        ;
        k.ae = function(a, b) {
            return "signInViaRedirect" == a || "signInViaPopup" == a && this.Kb == b && this.Jb ? u(this.Jk, this) : null
        }
        ;
        k.Jk = function(a, b, c, d) {
            var e = this
              , f = {
                requestUri: a,
                postBody: d,
                sessionId: b,
                tenantId: c
            };
            this.La && (this.La.cancel(),
            this.La = null);
            return e.Ne.then(function() {
                return Pr(e, cm(e.o, f))
            })
        }
        ;
        k.Ze = function() {
            return dl()
        }
        ;
        k.signInWithPopup = function(a) {
            if (!gl())
                return G(new P("operation-not-supported-in-this-environment"));
            var b = this
              , c = Gl(a.providerId)
              , d = this.Ze()
              , e = null;
            (!hl() || Xk()) && this.U().options.authDomain && a.isOAuthProvider && (e = lo(this.U().options.authDomain, this.U().options.apiKey, this.U().name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null, null, null, this.ma, this.N));
            var f = Ok(e, c && c.Bd, c && c.Ad);
            c = Or(this).then(function(g) {
                return g.te(f, "signInViaPopup", a, d, !!e, b.ma)
            }).then(function() {
                return new E(function(g, h) {
                    b.Vc("signInViaPopup", null, new P("cancelled-popup-request"), b.Kb);
                    b.Jb = g;
                    b.Tc = h;
                    b.Kb = d;
                    b.La = b.W.Ce(b, "signInViaPopup", f, d)
                }
                )
            }).then(function(g) {
                f && Nk(f);
                return g ? Al(g) : null
            }).l(function(g) {
                f && Nk(f);
                throw g;
            });
            return this.v(c)
        }
        ;
        k.signInWithRedirect = function(a) {
            if (!gl())
                return G(new P("operation-not-supported-in-this-environment"));
            var b = this
              , c = Or(this).then(function() {
                return Br(b.Pb)
            }).then(function() {
                return b.W.ue("signInViaRedirect", a, void 0, b.ma)
            });
            return this.v(c)
        }
        ;
        var Qr = function(a) {
            if (!gl())
                return G(new P("operation-not-supported-in-this-environment"));
            var b = Or(a).then(function() {
                return a.W.getRedirectResult()
            }).then(function(c) {
                return c ? Al(c) : null
            });
            return a.v(b)
        };
        T.prototype.getRedirectResult = function() {
            var a = this;
            return Qr(this).then(function(b) {
                a.W && a.W.jd();
                return b
            }).l(function(b) {
                a.W && a.W.jd();
                throw b;
            })
        }
        ;
        T.prototype.updateCurrentUser = function(a) {
            if (!a)
                return G(new P("null-user"));
            if (this.ma != a.tenantId)
                return G(new P("tenant-id-mismatch"));
            var b = this
              , c = {};
            c.apiKey = this.U().options.apiKey;
            c.authDomain = this.U().options.authDomain;
            c.appName = this.U().name;
            var d = tr(a, c, b.Uc, Ta(b.Da));
            return this.v(this.Lb.then(function() {
                if (b.U().options.apiKey != a.ha)
                    return d.reload()
            }).then(function() {
                if (U(b) && a.uid == U(b).uid)
                    return U(b).copy(a),
                    b.qc(a);
                Fr(b, d);
                $q(d);
                return b.qc(d)
            }).then(function() {
                b.uc()
            }))
        }
        ;
        var Rr = function(a, b) {
            var c = {};
            c.apiKey = a.U().options.apiKey;
            c.authDomain = a.U().options.authDomain;
            c.appName = a.U().name;
            a.N && (c.emulatorConfig = a.N);
            return a.Ne.then(function() {
                return sr(c, b, a.Uc, Ta(a.Da))
            }).then(function(d) {
                if (U(a) && d.uid == U(a).uid)
                    return U(a).copy(d),
                    a.qc(d);
                Fr(a, d);
                $q(d);
                return a.qc(d)
            }).then(function() {
                a.uc()
            })
        }
          , Fr = function(a, b) {
            U(a) && (Yq(U(a), a.Yj),
            ej(U(a), "tokenChanged", a.Pd),
            ej(U(a), "userDeleted", a.Wj),
            ej(U(a), "userInvalidated", a.Xj),
            Xq(U(a)));
            b && (b.Rf.push(a.Yj),
            Xi(b, "tokenChanged", a.Pd),
            Xi(b, "userDeleted", a.Wj),
            Xi(b, "userInvalidated", a.Xj),
            0 < a.Kc && Wq(b));
            O(a, "currentUser", b);
            b && (b.Id(a.Gb),
            Sq(b, a),
            Rq(b, a.Da),
            Uq(b, a),
            Qq(b, a.N),
            Tq(b, a))
        };
        T.prototype.signOut = function() {
            var a = this
              , b = this.Lb.then(function() {
                a.W && a.W.jd();
                if (!U(a))
                    return F();
                Fr(a, null);
                return Dr(a.Pb).then(function() {
                    a.uc()
                })
            });
            return this.v(b)
        }
        ;
        var Sr = function(a) {
            var b = a.U().options.authDomain;
            b = vr(a.Uc, b).then(function(c) {
                if (a.Ac = c)
                    c.zc = a.Uc;
                return pr(a.Uc)
            });
            return a.v(b)
        }
          , Gr = function(a) {
            var b = a.U().options.authDomain
              , c = Sr(a).then(function() {
                return Er(a.Pb, b, a.N)
            }).then(function(d) {
                return d ? (d.zc = a.Uc,
                a.Ac && (a.Ac.yc || null) == (d.yc || null) ? d : d.reload().then(function() {
                    return Cr(a.Pb, d).then(function() {
                        return d
                    })
                }).l(function(e) {
                    return "auth/network-request-failed" == e.code ? d : Dr(a.Pb)
                })) : null
            }).then(function(d) {
                Fr(a, d || null)
            });
            return a.v(c)
        }
          , Hr = function(a) {
            return a.Ne.then(function() {
                return Qr(a)
            }).l(function() {}).then(function() {
                if (!a.wb)
                    return a.Hg()
            }).l(function() {}).then(function() {
                if (!a.wb) {
                    a.uf = !0;
                    var b = a.Pb;
                    b.O.addListener(wr("local"), b.V, a.Hg)
                }
            })
        };
        k = T.prototype;
        k.om = function() {
            var a = this
              , b = this.U().options.authDomain;
            return Er(this.Pb, b).then(function(c) {
                if (!a.wb) {
                    var d;
                    if (d = U(a) && c) {
                        d = U(a).uid;
                        var e = c.uid;
                        d = void 0 === d || null === d || "" === d || void 0 === e || null === e || "" === e ? !1 : d == e
                    }
                    if (d)
                        return U(a).copy(c),
                        U(a).getIdToken();
                    if (U(a) || c)
                        Fr(a, c),
                        c && ($q(c),
                        c.zc = a.Uc),
                        a.W && a.W.subscribe(a),
                        a.uc()
                }
            })
        }
        ;
        k.qc = function(a) {
            return Cr(this.Pb, a)
        }
        ;
        k.Kg = function() {
            this.uc();
            this.qc(U(this))
        }
        ;
        k.bl = function() {
            this.signOut()
        }
        ;
        k.dl = function() {
            this.signOut()
        }
        ;
        var Pr = function(a, b) {
            var c = null
              , d = null;
            return a.v(b.then(function(e) {
                c = Mm(e);
                d = yp(e);
                return Rr(a, e)
            }, function(e) {
                var f = null;
                e && "auth/multi-factor-auth-required" === e.code && (f = wq(e.T(), a, u(a.Jg, a)));
                throw f || e;
            }).then(function() {
                return Al({
                    user: U(a),
                    credential: c,
                    additionalUserInfo: d,
                    operationType: "signIn"
                })
            }))
        };
        k = T.prototype;
        k.Jg = function(a) {
            var b = this;
            return this.Lb.then(function() {
                return Pr(b, F(a))
            })
        }
        ;
        k.ol = function(a) {
            var b = this;
            this.addAuthTokenListener(function() {
                a.next(U(b))
            })
        }
        ;
        k.ql = function(a) {
            var b = this;
            Tr(this, function() {
                a.next(U(b))
            })
        }
        ;
        k.onIdTokenChanged = function(a, b, c) {
            var d = this;
            this.uf && firebase.Promise.resolve().then(function() {
                "function" === typeof a ? a(U(d)) : "function" === typeof a.next && a.next(U(d))
            });
            return this.Fl(a, b, c)
        }
        ;
        k.onAuthStateChanged = function(a, b, c) {
            var d = this;
            this.uf && firebase.Promise.resolve().then(function() {
                d.Ke = d.getUid();
                "function" === typeof a ? a(U(d)) : "function" === typeof a.next && a.next(U(d))
            });
            return this.Il(a, b, c)
        }
        ;
        k.Ok = function(a) {
            var b = this
              , c = this.Lb.then(function() {
                return U(b) ? U(b).getIdToken(a).then(function(d) {
                    return {
                        accessToken: d
                    }
                }) : null
            });
            return this.v(c)
        }
        ;
        k.signInWithCustomToken = function(a) {
            var b = this;
            return this.Lb.then(function() {
                return Pr(b, Q(b.o, Vn, {
                    token: a
                }))
            }).then(function(c) {
                var d = c.user;
                fr(d, "isAnonymous", !1);
                b.qc(d);
                return c
            })
        }
        ;
        k.signInWithEmailAndPassword = function(a, b) {
            var c = this;
            return this.Lb.then(function() {
                return Pr(c, Q(c.o, wm, {
                    email: a,
                    password: b
                }))
            })
        }
        ;
        k.createUserWithEmailAndPassword = function(a, b) {
            var c = this;
            return this.Lb.then(function() {
                return Pr(c, Q(c.o, Pn, {
                    email: a,
                    password: b
                }))
            })
        }
        ;
        k.signInWithCredential = function(a) {
            var b = this;
            return this.Lb.then(function() {
                return Pr(b, a.Mc(b.o))
            })
        }
        ;
        k.signInAndRetrieveDataWithCredential = function(a) {
            wl("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");
            return this.signInWithCredential(a)
        }
        ;
        k.signInAnonymously = function() {
            var a = this;
            return this.Lb.then(function() {
                var b = U(a);
                if (b && b.isAnonymous) {
                    var c = Al({
                        providerId: null,
                        isNewUser: !1
                    });
                    return Al({
                        user: b,
                        credential: null,
                        additionalUserInfo: c,
                        operationType: "signIn"
                    })
                }
                return Pr(a, a.o.signInAnonymously()).then(function(d) {
                    var e = d.user;
                    fr(e, "isAnonymous", !0);
                    a.qc(e);
                    return d
                })
            })
        }
        ;
        k.U = function() {
            return this.app
        }
        ;
        var U = function(a) {
            return a.currentUser
        };
        T.prototype.getUid = function() {
            return U(this) && U(this).uid || null
        }
        ;
        var Ur = function(a) {
            return U(a) && U(a)._lat || null
        };
        k = T.prototype;
        k.uc = function() {
            if (this.uf) {
                for (var a = 0; a < this.Fc.length; a++)
                    if (this.Fc[a])
                        this.Fc[a](Ur(this));
                if (this.Ke !== this.getUid() && this.Od.length)
                    for (this.Ke = this.getUid(),
                    a = 0; a < this.Od.length; a++)
                        if (this.Od[a])
                            this.Od[a](Ur(this))
            }
        }
        ;
        k.kk = function(a) {
            this.addAuthTokenListener(a);
            this.Kc++;
            0 < this.Kc && U(this) && Wq(U(this))
        }
        ;
        k.Ql = function(a) {
            var b = this;
            x(this.Fc, function(c) {
                c == a && b.Kc--
            });
            0 > this.Kc && (this.Kc = 0);
            0 == this.Kc && U(this) && Xq(U(this));
            this.removeAuthTokenListener(a)
        }
        ;
        k.addAuthTokenListener = function(a) {
            var b = this;
            this.Fc.push(a);
            this.v(this.Lb.then(function() {
                b.wb || Pa(b.Fc, a) && a(Ur(b))
            }))
        }
        ;
        k.removeAuthTokenListener = function(a) {
            Sa(this.Fc, function(b) {
                return b == a
            })
        }
        ;
        var Tr = function(a, b) {
            a.Od.push(b);
            a.v(a.Lb.then(function() {
                !a.wb && Pa(a.Od, b) && a.Ke !== a.getUid() && (a.Ke = a.getUid(),
                b(Ur(a)))
            }))
        };
        k = T.prototype;
        k.delete = function() {
            this.wb = !0;
            for (var a = 0; a < this.Ka.length; a++)
                this.Ka[a].cancel("app-deleted");
            this.Ka = [];
            this.Pb && (a = this.Pb,
            a.O.removeListener(wr("local"), a.V, this.Hg));
            this.W && (this.W.unsubscribe(this),
            this.W.jd());
            return firebase.Promise.resolve()
        }
        ;
        k.v = function(a) {
            var b = this;
            this.Ka.push(a);
            a.Cc(function() {
                Qa(b.Ka, a)
            });
            return a
        }
        ;
        k.fetchSignInMethodsForEmail = function(a) {
            return this.v(ln(this.o, a))
        }
        ;
        k.isSignInWithEmailLink = function(a) {
            return !!Am(a)
        }
        ;
        k.sendSignInLinkToEmail = function(a, b) {
            var c = this;
            return this.v(F().then(function() {
                var d = new lp(b);
                if (!d.bi)
                    throw new P("argument-error","handleCodeInApp must be true when sending sign in link to email");
                return mp(d)
            }).then(function(d) {
                return c.o.sendSignInLinkToEmail(a, d)
            }).then(function() {}))
        }
        ;
        k.verifyPasswordResetCode = function(a) {
            return this.checkActionCode(a).then(function(b) {
                return b.data.email
            })
        }
        ;
        k.confirmPasswordReset = function(a, b) {
            return this.v(this.o.confirmPasswordReset(a, b).then(function() {}))
        }
        ;
        k.checkActionCode = function(a) {
            return this.v(this.o.checkActionCode(a).then(function(b) {
                return new Pl(b)
            }))
        }
        ;
        k.applyActionCode = function(a) {
            return this.v(this.o.applyActionCode(a).then(function() {}))
        }
        ;
        k.sendPasswordResetEmail = function(a, b) {
            var c = this;
            return this.v(F().then(function() {
                return "undefined" === typeof b || Ya(b) ? {} : mp(new lp(b))
            }).then(function(d) {
                return c.o.sendPasswordResetEmail(a, d)
            }).then(function() {}))
        }
        ;
        k.signInWithPhoneNumber = function(a, b) {
            return this.v(op(this, a, b, u(this.signInWithCredential, this)))
        }
        ;
        k.signInWithEmailLink = function(a, b) {
            var c = this;
            return this.v(F().then(function() {
                b = b || Hk();
                var d = Bm(a, b)
                  , e = Am(b);
                if (!e)
                    throw new P("argument-error","Invalid email link!");
                if (e.tenantId !== c.ma)
                    throw new P("tenant-id-mismatch");
                return c.signInWithCredential(d)
            }))
        }
        ;
        var Kr = function(a) {
            Ii.call(this, "languageCodeChanged");
            this.languageCode = a
        };
        n(Kr, Ii);
        var Mr = function(a) {
            Ii.call(this, "emulatorConfigChanged");
            this.emulatorConfig = a
        };
        n(Mr, Ii);
        var Nr = function(a) {
            Ii.call(this, "frameworkChanged");
            this.Mk = a
        };
        n(Nr, Ii);
        var Wr = function(a, b, c, d) {
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
                        !b[e].Ca(c[e]) && !f) {
                            b = b[e];
                            if (0 > e || e >= Vr.length)
                                throw new P("internal-error","Argument validator received an unsupported number of arguments.");
                            c = Vr[e];
                            d = (d ? "" : c + " argument ") + (b.name ? '"' + b.name + '" ' : "") + "must be " + b.Fa + ".";
                            break a
                        }
                    d = null
                }
            }
            if (d)
                throw new P("argument-error",a + " failed: " + d);
        }
          , Vr = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ")
          , V = function(a, b) {
            return {
                name: a || "",
                Fa: "a valid string",
                optional: !!b,
                Ca: function(c) {
                    return "string" === typeof c
                }
            }
        }
          , Xr = function(a, b) {
            return {
                name: a || "",
                Fa: "a boolean",
                optional: !!b,
                Ca: function(c) {
                    return "boolean" === typeof c
                }
            }
        }
          , W = function(a, b) {
            return {
                name: a || "",
                Fa: "a valid object",
                optional: !!b,
                Ca: t
            }
        }
          , Yr = function(a, b) {
            return {
                name: a || "",
                Fa: "a function",
                optional: !!b,
                Ca: Pc
            }
        }
          , Zr = function(a, b) {
            return {
                name: a || "",
                Fa: "null",
                optional: !!b,
                Ca: function(c) {
                    return null === c
                }
            }
        }
          , $r = function() {
            return {
                name: "",
                Fa: "an HTML element",
                optional: !1,
                Ca: function(a) {
                    return !!(a && a instanceof Element)
                }
            }
        }
          , as = function() {
            return {
                name: "auth",
                Fa: "an instance of Firebase Auth",
                optional: !0,
                Ca: function(a) {
                    return !!(a && a instanceof T)
                }
            }
        }
          , bs = function() {
            return {
                name: "app",
                Fa: "an instance of Firebase App",
                optional: !0,
                Ca: function(a) {
                    return !!(a && a instanceof firebase.app.App)
                }
            }
        }
          , cs = function(a) {
            return {
                name: a ? a + "Credential" : "credential",
                Fa: a ? "a valid " + a + " credential" : "a valid credential",
                optional: !1,
                Ca: function(b) {
                    if (!b)
                        return !1;
                    var c = !a || b.providerId === a;
                    return !(!b.Mc || !c)
                }
            }
        }
          , ds = function() {
            return {
                name: "multiFactorAssertion",
                Fa: "a valid multiFactorAssertion",
                optional: !1,
                Ca: function(a) {
                    return a ? !!a.process : !1
                }
            }
        }
          , es = function() {
            return {
                name: "authProvider",
                Fa: "a valid Auth provider",
                optional: !1,
                Ca: function(a) {
                    return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"))
                }
            }
        }
          , fs = function(a, b) {
            return t(a) && "string" === typeof a.type && a.type === b && "function" === typeof a.be
        }
          , gs = function(a) {
            return t(a) && "string" === typeof a.uid
        }
          , hs = function() {
            return {
                name: "applicationVerifier",
                Fa: "an implementation of firebase.auth.ApplicationVerifier",
                optional: !1,
                Ca: function(a) {
                    return !(!a || "string" !== typeof a.type || "function" !== typeof a.verify)
                }
            }
        }
          , X = function(a, b, c, d) {
            return {
                name: c || "",
                Fa: a.Fa + " or " + b.Fa,
                optional: !!d,
                Ca: function(e) {
                    return a.Ca(e) || b.Ca(e)
                }
            }
        };
        var Y = function(a, b) {
            for (var c in b) {
                var d = b[c].name;
                a[d] = is(d, a[c], b[c].j)
            }
        }
          , js = function(a, b) {
            for (var c in b) {
                var d = b[c].name;
                d !== c && Object.defineProperty(a, d, {
                    get: xa(function(e) {
                        return this[e]
                    }, c),
                    set: xa(function(e, f, g, h) {
                        Wr(e, [g], [h], !0);
                        this[f] = h
                    }, d, c, b[c].jg),
                    enumerable: !0
                })
            }
        }
          , Z = function(a, b, c, d) {
            a[b] = is(b, c, d)
        }
          , is = function(a, b, c) {
            if (!c)
                return b;
            var d = ks(a);
            a = function() {
                var g = Array.prototype.slice.call(arguments);
                Wr(d, c, g);
                return b.apply(this, g)
            }
            ;
            for (var e in b)
                a[e] = b[e];
            for (var f in b.prototype)
                a.prototype[f] = b.prototype[f];
            return a
        }
          , ks = function(a) {
            a = a.split(".");
            return a[a.length - 1]
        };
        function ls() {}
        O(ls, "FACTOR_ID", "phone");
        Y(T.prototype, {
            applyActionCode: {
                name: "applyActionCode",
                j: [V("code")]
            },
            checkActionCode: {
                name: "checkActionCode",
                j: [V("code")]
            },
            confirmPasswordReset: {
                name: "confirmPasswordReset",
                j: [V("code"), V("newPassword")]
            },
            createUserWithEmailAndPassword: {
                name: "createUserWithEmailAndPassword",
                j: [V("email"), V("password")]
            },
            fetchSignInMethodsForEmail: {
                name: "fetchSignInMethodsForEmail",
                j: [V("email")]
            },
            getRedirectResult: {
                name: "getRedirectResult",
                j: []
            },
            isSignInWithEmailLink: {
                name: "isSignInWithEmailLink",
                j: [V("emailLink")]
            },
            onAuthStateChanged: {
                name: "onAuthStateChanged",
                j: [X(W(), Yr(), "nextOrObserver"), Yr("opt_error", !0), Yr("opt_completed", !0)]
            },
            onIdTokenChanged: {
                name: "onIdTokenChanged",
                j: [X(W(), Yr(), "nextOrObserver"), Yr("opt_error", !0), Yr("opt_completed", !0)]
            },
            sendPasswordResetEmail: {
                name: "sendPasswordResetEmail",
                j: [V("email"), X(W("opt_actionCodeSettings", !0), Zr(null, !0), "opt_actionCodeSettings", !0)]
            },
            sendSignInLinkToEmail: {
                name: "sendSignInLinkToEmail",
                j: [V("email"), W("actionCodeSettings")]
            },
            setPersistence: {
                name: "setPersistence",
                j: [V("persistence")]
            },
            signInAndRetrieveDataWithCredential: {
                name: "signInAndRetrieveDataWithCredential",
                j: [cs()]
            },
            signInAnonymously: {
                name: "signInAnonymously",
                j: []
            },
            signInWithCredential: {
                name: "signInWithCredential",
                j: [cs()]
            },
            signInWithCustomToken: {
                name: "signInWithCustomToken",
                j: [V("token")]
            },
            signInWithEmailAndPassword: {
                name: "signInWithEmailAndPassword",
                j: [V("email"), V("password")]
            },
            signInWithEmailLink: {
                name: "signInWithEmailLink",
                j: [V("email"), V("emailLink", !0)]
            },
            signInWithPhoneNumber: {
                name: "signInWithPhoneNumber",
                j: [V("phoneNumber"), hs()]
            },
            signInWithPopup: {
                name: "signInWithPopup",
                j: [es()]
            },
            signInWithRedirect: {
                name: "signInWithRedirect",
                j: [es()]
            },
            updateCurrentUser: {
                name: "updateCurrentUser",
                j: [X(function(a) {
                    return {
                        name: "user",
                        Fa: "an instance of Firebase User",
                        optional: !!a,
                        Ca: function(b) {
                            return !!(b && b instanceof R)
                        }
                    }
                }(), Zr(), "user")]
            },
            signOut: {
                name: "signOut",
                j: []
            },
            toJSON: {
                name: "toJSON",
                j: [V(null, !0)]
            },
            useDeviceLanguage: {
                name: "useDeviceLanguage",
                j: []
            },
            useEmulator: {
                name: "useEmulator",
                j: [V("url"), W("options", !0)]
            },
            verifyPasswordResetCode: {
                name: "verifyPasswordResetCode",
                j: [V("code")]
            }
        });
        js(T.prototype, {
            lc: {
                name: "languageCode",
                jg: X(V(), Zr(), "languageCode")
            },
            ti: {
                name: "tenantId",
                jg: X(V(), Zr(), "tenantId")
            }
        });
        T.Persistence = zp;
        T.Persistence.LOCAL = "local";
        T.Persistence.SESSION = "session";
        T.Persistence.NONE = "none";
        Y(R.prototype, {
            "delete": {
                name: "delete",
                j: []
            },
            getIdTokenResult: {
                name: "getIdTokenResult",
                j: [Xr("opt_forceRefresh", !0)]
            },
            getIdToken: {
                name: "getIdToken",
                j: [Xr("opt_forceRefresh", !0)]
            },
            linkAndRetrieveDataWithCredential: {
                name: "linkAndRetrieveDataWithCredential",
                j: [cs()]
            },
            linkWithCredential: {
                name: "linkWithCredential",
                j: [cs()]
            },
            linkWithPhoneNumber: {
                name: "linkWithPhoneNumber",
                j: [V("phoneNumber"), hs()]
            },
            linkWithPopup: {
                name: "linkWithPopup",
                j: [es()]
            },
            linkWithRedirect: {
                name: "linkWithRedirect",
                j: [es()]
            },
            reauthenticateAndRetrieveDataWithCredential: {
                name: "reauthenticateAndRetrieveDataWithCredential",
                j: [cs()]
            },
            reauthenticateWithCredential: {
                name: "reauthenticateWithCredential",
                j: [cs()]
            },
            reauthenticateWithPhoneNumber: {
                name: "reauthenticateWithPhoneNumber",
                j: [V("phoneNumber"), hs()]
            },
            reauthenticateWithPopup: {
                name: "reauthenticateWithPopup",
                j: [es()]
            },
            reauthenticateWithRedirect: {
                name: "reauthenticateWithRedirect",
                j: [es()]
            },
            reload: {
                name: "reload",
                j: []
            },
            sendEmailVerification: {
                name: "sendEmailVerification",
                j: [X(W("opt_actionCodeSettings", !0), Zr(null, !0), "opt_actionCodeSettings", !0)]
            },
            toJSON: {
                name: "toJSON",
                j: [V(null, !0)]
            },
            unlink: {
                name: "unlink",
                j: [V("provider")]
            },
            updateEmail: {
                name: "updateEmail",
                j: [V("email")]
            },
            updatePassword: {
                name: "updatePassword",
                j: [V("password")]
            },
            updatePhoneNumber: {
                name: "updatePhoneNumber",
                j: [cs("phone")]
            },
            updateProfile: {
                name: "updateProfile",
                j: [W("profile")]
            },
            verifyBeforeUpdateEmail: {
                name: "verifyBeforeUpdateEmail",
                j: [V("email"), X(W("opt_actionCodeSettings", !0), Zr(null, !0), "opt_actionCodeSettings", !0)]
            }
        });
        Y(ro.prototype, {
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
        Y(mo.prototype, {
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
        Y(E.prototype, {
            Cc: {
                name: "finally"
            },
            l: {
                name: "catch"
            },
            then: {
                name: "then"
            }
        });
        js(kp.prototype, {
            appVerificationDisabled: {
                name: "appVerificationDisabledForTesting",
                jg: Xr("appVerificationDisabledForTesting")
            }
        });
        Y(np.prototype, {
            confirm: {
                name: "confirm",
                j: [V("verificationCode")]
            }
        });
        Z($l, "fromJSON", function(a) {
            a = "string" === typeof a ? JSON.parse(a) : a;
            for (var b, c = [hm, zm, Gm, fm], d = 0; d < c.length; d++)
                if (b = c[d](a))
                    return b;
            return null
        }, [X(V(), W(), "json")]);
        Z(tm, "credential", function(a, b) {
            return new um(a,b)
        }, [V("email"), V("password")]);
        Y(um.prototype, {
            T: {
                name: "toJSON",
                j: [V(null, !0)]
            }
        });
        Y(lm.prototype, {
            addScope: {
                name: "addScope",
                j: [V("scope")]
            },
            setCustomParameters: {
                name: "setCustomParameters",
                j: [W("customOAuthParameters")]
            }
        });
        Z(lm, "credential", mm, [X(V(), W(), "token")]);
        Z(tm, "credentialWithLink", Bm, [V("email"), V("emailLink")]);
        Y(nm.prototype, {
            addScope: {
                name: "addScope",
                j: [V("scope")]
            },
            setCustomParameters: {
                name: "setCustomParameters",
                j: [W("customOAuthParameters")]
            }
        });
        Z(nm, "credential", om, [X(V(), W(), "token")]);
        Y(pm.prototype, {
            addScope: {
                name: "addScope",
                j: [V("scope")]
            },
            setCustomParameters: {
                name: "setCustomParameters",
                j: [W("customOAuthParameters")]
            }
        });
        Z(pm, "credential", qm, [X(V(), X(W(), Zr()), "idToken"), X(V(), Zr(), "accessToken", !0)]);
        Y(rm.prototype, {
            setCustomParameters: {
                name: "setCustomParameters",
                j: [W("customOAuthParameters")]
            }
        });
        Z(rm, "credential", sm, [X(V(), W(), "token"), V("secret", !0)]);
        Y(km.prototype, {
            addScope: {
                name: "addScope",
                j: [V("scope")]
            },
            credential: {
                name: "credential",
                j: [X(V(), X(W(), Zr()), "optionsOrIdToken"), X(V(), Zr(), "accessToken", !0)]
            },
            setCustomParameters: {
                name: "setCustomParameters",
                j: [W("customOAuthParameters")]
            }
        });
        Y(gm.prototype, {
            T: {
                name: "toJSON",
                j: [V(null, !0)]
            }
        });
        Y(bm.prototype, {
            T: {
                name: "toJSON",
                j: [V(null, !0)]
            }
        });
        Z(Hm, "credential", Lm, [V("verificationId"), V("verificationCode")]);
        Y(Hm.prototype, {
            verifyPhoneNumber: {
                name: "verifyPhoneNumber",
                j: [X(V(), function(a, b) {
                    return {
                        name: a || "phoneInfoOptions",
                        Fa: "valid phone info options",
                        optional: !!b,
                        Ca: function(c) {
                            return c ? c.session && c.phoneNumber ? fs(c.session, "enroll") && "string" === typeof c.phoneNumber : c.session && c.multiFactorHint ? fs(c.session, "signin") && gs(c.multiFactorHint) : c.session && c.multiFactorUid ? fs(c.session, "signin") && "string" === typeof c.multiFactorUid : c.phoneNumber ? "string" === typeof c.phoneNumber : !1 : !1
                        }
                    }
                }(), "phoneInfoOptions"), hs()]
            }
        });
        Y(Cm.prototype, {
            T: {
                name: "toJSON",
                j: [V(null, !0)]
            }
        });
        Y(P.prototype, {
            toJSON: {
                name: "toJSON",
                j: [V(null, !0)]
            }
        });
        Y(Om.prototype, {
            toJSON: {
                name: "toJSON",
                j: [V(null, !0)]
            }
        });
        Y(Ul.prototype, {
            toJSON: {
                name: "toJSON",
                j: [V(null, !0)]
            }
        });
        Y(vq.prototype, {
            toJSON: {
                name: "toJSON",
                j: [V(null, !0)]
            }
        });
        Y(uq.prototype, {
            resolveSignIn: {
                name: "resolveSignIn",
                j: [ds()]
            }
        });
        Y(Eq.prototype, {
            getSession: {
                name: "getSession",
                j: []
            },
            enroll: {
                name: "enroll",
                j: [ds(), V("displayName", !0)]
            },
            unenroll: {
                name: "unenroll",
                j: [X({
                    name: "multiFactorInfo",
                    Fa: "a valid multiFactorInfo",
                    optional: !1,
                    Ca: gs
                }, V(), "multiFactorInfoIdentifier")]
            }
        });
        Y(Co.prototype, {
            clear: {
                name: "clear",
                j: []
            },
            render: {
                name: "render",
                j: []
            },
            verify: {
                name: "verify",
                j: []
            }
        });
        Z(Rl, "parseLink", Sl, [V("link")]);
        Z(ls, "assertion", function(a) {
            return new Bq(a)
        }, [cs("phone")]);
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
                    Auth: T,
                    AuthCredential: $l,
                    Error: P
                };
                Z(a, "EmailAuthProvider", tm, []);
                Z(a, "FacebookAuthProvider", lm, []);
                Z(a, "GithubAuthProvider", nm, []);
                Z(a, "GoogleAuthProvider", pm, []);
                Z(a, "TwitterAuthProvider", rm, []);
                Z(a, "OAuthProvider", km, [V("providerId")]);
                Z(a, "SAMLAuthProvider", jm, [V("providerId")]);
                Z(a, "PhoneAuthProvider", Hm, [as()]);
                Z(a, "RecaptchaVerifier", Co, [X(V(), $r(), "recaptchaContainer"), W("recaptchaParameters", !0), bs()]);
                Z(a, "ActionCodeURL", Rl, []);
                Z(a, "PhoneMultiFactorGenerator", ls, []);
                firebase.INTERNAL.registerService("auth", function(b, c) {
                    b = new T(b);
                    c({
                        INTERNAL: {
                            getUid: u(b.getUid, b),
                            getToken: u(b.Ok, b),
                            addAuthTokenListener: u(b.kk, b),
                            removeAuthTokenListener: u(b.Ql, b)
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
        var ms = function(a) {
            this.ah = qg.getParentIframe();
            this.Ib = this.ah.getOrigin();
            this.Hb = a;
            this.Lh = !1
        };
        ms.prototype.rd = function() {
            return this.Ib
        }
        ;
        ms.prototype.start = function() {
            var a = this;
            return this.Hb(this.Ib).then(function() {
                a.Lh = !0
            }).l(function(b) {
                throw b;
            })
        }
        ;
        ms.prototype.sendMessage = function(a) {
            var b = this;
            if (this.Lh)
                return new E(function(c) {
                    b.ah.send(a.type, a, c, tg)
                }
                );
            throw new P("missing-iframe-start");
        }
        ;
        ms.prototype.th = function(a, b) {
            if (this.Lh)
                this.ah.register(a, b, tg);
            else
                throw new P("missing-iframe-start");
        }
        ;
        var ns = function(a) {
            this.Df = new ms(a)
        };
        ns.prototype.rd = function() {
            return this.Df.rd()
        }
        ;
        ns.prototype.start = function() {
            var a = this;
            return this.Df.start().then(function() {
                a.uh()
            })
        }
        ;
        var os = function(a, b) {
            return a.Df.sendMessage({
                type: "authEvent",
                authEvent: b && b.T()
            }).then(function(c) {
                if (!c || !c.length || "ACK" != c[c.length - 1].status)
                    throw new P("internal-error");
            })
        };
        ns.prototype.uh = function() {
            this.Df.th("webStorageSupport", function() {
                return F({
                    status: "ACK",
                    webStorageSupport: !0
                })
            })
        }
        ;
        var ps = function(a, b, c) {
            var d = (wk(M(Hk()), "fw") || "").split(",")
              , e = this;
            this.ha = a;
            this.ka = b;
            this.Ia = c || null;
            this.Da = d || [];
            this.Jd = new Ip(this.ha + ":" + this.ka);
            this.Cl = new Op;
            this.o = new Vm(a,Dk(this.Ia),cl("Iframe", "2.20.1", this.Da));
            this.rc = new ns(function(f) {
                return nn(e.o).then(function(g) {
                    if (!Rk(g, f))
                        throw e.destroy(),
                        new Ul(f);
                })
            }
            );
            this.wc = Io(p);
            this.Ni = !1;
            this.wc.subscribe("getParentOrigin", function(f) {
                if (f === p.window.location.origin)
                    return F(e.rc.rd());
                throw Error("Invalid origin");
            });
            this.wc.subscribe("sendAuthEvent", function(f, g) {
                var h = g.storageKey
                  , l = null;
                try {
                    l = Kl(g.authEvent)
                } catch (m) {}
                if (f === p.window.location.origin && h === e.ha + ":" + e.ka && l)
                    return e.Ni ? os(e.rc, l).then(function() {
                        return !0
                    }).l(function() {
                        return !1
                    }) : e.Cl.O.set(Jp, l.T(), h).then(function() {
                        return !0
                    }).l(function() {
                        return !1
                    });
                throw Error("Invalid origin or request");
            })
        };
        ps.prototype.rd = function() {
            return this.rc.rd()
        }
        ;
        ps.prototype.start = function() {
            var a = this;
            return this.rc.start().then(function() {
                a.Ni = !0;
                a.mj = a.lj.bind(a);
                return qs(a).Cc(function() {
                    a.Jd.Ec(a.mj);
                    a.lj(!1)
                })
            })
        }
        ;
        ps.prototype.lj = function(a) {
            var b = this
              , c = null;
            return Kp(this.Jd).then(function(d) {
                if (c = d)
                    return os(b.rc, d);
                if (a)
                    return os(b.rc, new Jl("unknown",null,null,null,new P("no-auth-event")))
            }).then(function() {
                if (c)
                    return Lp(b.Jd)
            }).l(function() {})
        }
        ;
        var qs = function(a) {
            var b = null;
            return Np(a.Jd).then(function(c) {
                if (b = c)
                    return os(a.rc, c);
                c = el() ? "no-auth-event" : "web-storage-unsupported";
                return os(a.rc, new Jl("unknown",null,null,null,new P(c)))
            }).then(function() {
                if (b) {
                    var c = a.Jd;
                    return c.O.remove(Mp, c.V)
                }
            }).l(function() {})
        };
        ps.prototype.destroy = function() {
            this.ld = !0;
            this.Jd.Gd(this.mj);
            this.wc.unsubscribe("getParentOrigin");
            this.wc.unsubscribe("sendAuthEvent")
        }
        ;
        var rs = null
          , ss = function() {
            var a = wk(M(Hk()), "apiKey")
              , b = wk(M(Hk()), "appName") || "";
            if (!a)
                throw new P("invalid-api-key");
            var c = wk(M(Hk()), "eid") || null;
            rs = new ps(a,b,c);
            rs.start().l(function(d) {
                if (d && "auth/unauthorized-domain" == d.code)
                    d = M(rs.rd()),
                    d = "chrome-extension" == d.Va ? Vc("Info: The current chrome extension ID is not authorized for OAuth operations. This will prevent signInWithPopup and linkWithPopup from working. Add your chrome extension (chrome-extension://%s) to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", d.Ga) : Vc("Info: The current domain is not authorized for OAuth operations. This will prevent signInWithPopup, signInWithRedirect, linkWithPopup and linkWithRedirect from working. Add your domain (%s) to the OAuth redirect domains list in the Firebase console -> Authentication -> Settings -> Authorized domains tab.", d.Ga),
                    ql(d);
                else if (d && d.message)
                    ql(d.message);
                else
                    throw d;
            })
        };
        r("fireauth.iframe.AuthRelay.initialize", function() {
            "complete" == p.document.readyState ? ss() : Wi(window, "load", function() {
                ss()
            })
        });
    }
    ).call(this);
    