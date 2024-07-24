"use strict";
(() => {
  var Xe = Object.defineProperty;
  var Ze = (o, e, t) =>
    e in o
      ? Xe(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (o[e] = t);
  var u = (o, e, t) => (Ze(o, typeof e != "symbol" ? e + "" : e, t), t);
  var N = (o, e = "flex") =>
      new Promise((t) => {
        (o.style.opacity = "0"),
          (o.style.display = e),
          (function n() {
            let r = parseFloat(o.style.opacity);
            if (r >= 1) {
              t();
              return;
            }
            let s = r + 0.1;
            (o.style.opacity = s.toString()), requestAnimationFrame(n);
          })();
      }),
    U = (o) =>
      new Promise((e) => {
        (o.style.opacity = "1"),
          (function t() {
            let r = parseFloat(o.style.opacity) - 0.1;
            (o.style.opacity = r.toString()),
              r <= 0
                ? ((o.style.display = "none"), e())
                : requestAnimationFrame(t);
          })();
      });
  var x = class {
    static activateAlerts() {
      this.alertsActivated = !0;
    }
    static alert(e, t) {
      if ((this.alertsActivated && window.alert(e), t === "error"))
        throw new Error(e);
    }
  };
  u(x, "alertsActivated", !1);
  var w = (o, e) => !!o && e.includes(o);
  var A = (o, e) => (
    Array.isArray(e) || (e = [e]),
    e.map((n) => o.dispatchEvent(new Event(n, { bubbles: !0 }))).every((n) => n)
  );
  function pe(o, e, t, n = !0) {
    let r = t ? [t] : [];
    if (!o) return r;
    let s = o.split(",").reduce((i, a) => {
      let c = a.trim();
      return (!n || c) && i.push(c), i;
    }, []);
    if (e) {
      let i = s.filter((a) => w(a, e));
      return i.length ? i : r;
    }
    return s;
  }
  var ue = (o) => Object.entries(o);
  var j = (o) => Object.keys(o);
  var Q = (o) => {
    let { overflow: e } = getComputedStyle(o);
    return e === "auto" || e === "scroll";
  };
  var Ae = (o) =>
    !!(o.offsetWidth || o.offsetHeight || o.getClientRects().length);
  var y = (o, e, t = document) => {
    let n = t.querySelector(o);
    if (n instanceof e) return n;
  };
  var me = (o) => o.replace(/\/+$/, "");
  var X = (o, e = !0) => (
    e !== o.checked && ((o.checked = e), A(o, ["click", "input", "change"])),
    o.type === "checkbox" ? o.checked : o.value
  );
  var ke = (o) => new Promise((e) => setTimeout(e, o));
  var Z = class {
    constructor({ element: e, duration: t }) {
      u(this, "element");
      u(this, "active", !1);
      u(this, "running", !1);
      u(this, "runningPromise");
      u(this, "duration");
      u(this, "isActive", () => this.active);
      u(this, "isRunning", () => this.running);
      u(this, "untilFinished", () => this.runningPromise);
      var n, r;
      (this.element =
        typeof e == "string"
          ? y(e, HTMLElement) ||
            x.alert(`No interaction with the ${e} selector was found.`, "error")
          : e),
        (this.duration = {
          first:
            typeof t == "number"
              ? t
              : (n = t == null ? void 0 : t.first) != null
              ? n
              : 0,
          second:
            typeof t == "number"
              ? t
              : (r = t == null ? void 0 : t.second) != null
              ? r
              : 0,
        });
    }
    async trigger(e) {
      return (e === "first" && this.active) || (e === "second" && !this.active)
        ? !1
        : (e || (e = this.active ? "second" : "first"),
          A(this.element, "click"),
          (this.running = !0),
          (this.runningPromise = ke(this.duration[e])),
          await this.runningPromise,
          (this.running = !1),
          (this.active = e === "first"),
          !0);
    }
  };
  var k = class {
    constructor({
      element: e,
      interaction: t,
      displayProperty: n,
      noTransition: r,
      startsHidden: s,
    }) {
      u(this, "interaction");
      u(this, "noTransition");
      u(this, "displayProperty");
      u(this, "visible");
      u(this, "element");
      u(this, "isVisible", () => this.visible);
      if (
        ((this.element =
          typeof e == "string"
            ? y(e, HTMLElement) ||
              x.alert(`No element with the ${e} selector was found.`, "error")
            : e),
        (this.noTransition = r),
        (this.displayProperty = n || "block"),
        s
          ? ((this.element.style.display = "none"), (this.visible = !1))
          : (this.visible = Ae(this.element)),
        t)
      ) {
        let { element: i, duration: a } = t;
        this.interaction = new Z({ element: i, duration: a });
      }
    }
    async show() {
      this.visible ||
        (this.interaction
          ? await this.interaction.trigger("first")
          : this.noTransition
          ? (this.element.style.display = this.displayProperty)
          : await N(this.element, this.displayProperty),
        (this.visible = !0));
    }
    async hide() {
      this.visible &&
        (this.interaction
          ? await this.interaction.trigger("second")
          : this.noTransition
          ? (this.element.style.display = "none")
          : await U(this.element),
        (this.visible = !1));
    }
  };
  u(k, "displayProperties", [
    "block",
    "flex",
    "grid",
    "inline-block",
    "inline",
  ]);
  var he = (o = document) => o.documentElement.getAttribute("data-wf-site");
  var ye = async (o) => {
    var t, n;
    let { Webflow: e } = window;
    if (
      !(!e || !("destroy" in e) || !("ready" in e) || !("require" in e)) &&
      !(o && !o.length)
    ) {
      if ((o || (e.destroy(), e.ready()), !o || o.includes("ix2"))) {
        let r = e.require("ix2");
        if (r) {
          let { store: s, actions: i } = r,
            { eventState: a } = s.getState().ixSession,
            c = Object.entries(a);
          o || r.destroy(),
            r.init(),
            await Promise.all(
              c.map((l) => s.dispatch(i.eventStateChanged(...l)))
            );
        }
      }
      if (!o || o.includes("commerce")) {
        let r = e.require("commerce"),
          s = he();
        r &&
          s &&
          (r.destroy(),
          r.init({ siteId: s, apiUrl: "https://render.webflow.com" }));
      }
      if (
        (o != null &&
          o.includes("lightbox") &&
          ((t = e.require("lightbox")) == null || t.ready()),
        o != null && o.includes("slider"))
      ) {
        let r = e.require("slider");
        r && (r.redraw(), r.ready());
      }
      return (
        o != null &&
          o.includes("tabs") &&
          ((n = e.require("tabs")) == null || n.redraw()),
        new Promise((r) => e.push(() => r(void 0)))
      );
    }
  };
  function et(o) {
    if (Array.isArray(o)) {
      for (var e = 0, t = Array(o.length); e < o.length; e++) t[e] = o[e];
      return t;
    } else return Array.from(o);
  }
  var be = !1;
  typeof window != "undefined" &&
    ((ge = {
      get passive() {
        be = !0;
      },
    }),
    window.addEventListener("testPassive", null, ge),
    window.removeEventListener("testPassive", null, ge));
  var ge,
    ee =
      typeof window != "undefined" &&
      window.navigator &&
      window.navigator.platform &&
      (/iP(ad|hone|od)/.test(window.navigator.platform) ||
        (window.navigator.platform === "MacIntel" &&
          window.navigator.maxTouchPoints > 1)),
    P = [],
    te = !1,
    we = -1,
    R = void 0,
    M = void 0,
    B = void 0,
    Me = function (e) {
      return P.some(function (t) {
        return !!(t.options.allowTouchMove && t.options.allowTouchMove(e));
      });
    },
    oe = function (e) {
      var t = e || window.event;
      return Me(t.target) || t.touches.length > 1
        ? !0
        : (t.preventDefault && t.preventDefault(), !1);
    },
    tt = function (e) {
      if (B === void 0) {
        var t = !!e && e.reserveScrollBarGap === !0,
          n = window.innerWidth - document.documentElement.clientWidth;
        if (t && n > 0) {
          let r = parseInt(
            window
              .getComputedStyle(window.top.document.body)
              .getPropertyValue("padding-right"),
            10
          );
          (B = window.top.document.body.style.paddingRight),
            (window.top.document.body.style.paddingRight = `${r + n}px`);
        }
      }
      R === void 0 &&
        ((R = window.top.document.body.style.overflow),
        (window.top.document.body.style.overflow = "hidden"));
    },
    ot = function () {
      B !== void 0 &&
        ((window.top.document.body.style.paddingRight = B), (B = void 0)),
        R !== void 0 &&
          ((window.top.document.body.style.overflow = R), (R = void 0));
    },
    nt = function () {
      return window.requestAnimationFrame(function () {
        if (M === void 0) {
          M = {
            position: window.top.body.style.position,
            top: window.top.body.style.top,
            left: window.top.body.style.left,
          };
          let { scrollY: e, scrollX: t, innerHeight: n } = window;
          (window.top.document.body.style.position = "fixed"),
            (window.top.document.body.style.top = `${-e}px`),
            (window.top.document.body.style.left = `${-t}px`);
        }
      });
    },
    rt = function () {
      if (M !== void 0) {
        let e = -parseInt(window.top.document.body.style.top, 10),
          t = -parseInt(window.top.document.body.style.left, 10);
        (window.top.body.style.position = M.position),
          (window.top.body.style.top = M.top),
          (window.top.body.style.left = M.left),
          window.scrollTo(t, e),
          (M = void 0);
      }
    },
    it = function (e) {
      return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1;
    },
    st = function (e, t) {
      var n = e.targetTouches[0].clientY - we;
      return Me(e.target)
        ? !1
        : (t && t.scrollTop === 0 && n > 0) || (it(t) && n < 0)
        ? oe(e)
        : (e.stopPropagation(), !0);
    },
    Ie = function (e, t) {
      if (!e) {
        console.error(
          "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
        );
        return;
      }
      if (
        !P.some(function (r) {
          return r.targetElement === e;
        })
      ) {
        var n = { targetElement: e, options: t || {} };
        (P = [].concat(et(P), [n])),
          ee ? nt() : tt(t),
          ee &&
            ((e.ontouchstart = function (r) {
              r.targetTouches.length === 1 && (we = r.targetTouches[0].clientY);
            }),
            (e.ontouchmove = function (r) {
              r.targetTouches.length === 1 && st(r, e);
            }),
            te ||
              (document.addEventListener(
                "touchmove",
                oe,
                be ? { passive: !1 } : void 0
              ),
              (te = !0)));
      }
    },
    Pe = function () {
      ee &&
        (P.forEach(function (e) {
          (e.targetElement.ontouchstart = null),
            (e.targetElement.ontouchmove = null);
        }),
        te &&
          (document.removeEventListener(
            "touchmove",
            oe,
            be ? { passive: !1 } : void 0
          ),
          (te = !1)),
        (we = -1)),
        ee ? rt() : ot(),
        (P = []);
    };
  var v = new WeakMap(),
    S = new WeakMap(),
    b = new WeakMap();
  var ie = Symbol("anyProducer"),
    Le = Promise.resolve(),
    se = Symbol("listenerAdded"),
    ae = Symbol("listenerRemoved"),
    ce = !1,
    ve = !1;
  function L(o) {
    if (typeof o != "string" && typeof o != "symbol" && typeof o != "number")
      throw new TypeError("`eventName` must be a string, symbol, or number");
  }
  function ne(o) {
    if (typeof o != "function")
      throw new TypeError("listener must be a function");
  }
  function $(o, e) {
    let t = S.get(o);
    if (t.has(e)) return t.get(e);
  }
  function H(o, e) {
    let t =
        typeof e == "string" || typeof e == "symbol" || typeof e == "number"
          ? e
          : ie,
      n = b.get(o);
    if (n.has(t)) return n.get(t);
  }
  function at(o, e, t) {
    let n = b.get(o);
    if (n.has(e)) for (let r of n.get(e)) r.enqueue(t);
    if (n.has(ie)) {
      let r = Promise.all([e, t]);
      for (let s of n.get(ie)) s.enqueue(r);
    }
  }
  function $e(o, e) {
    e = Array.isArray(e) ? e : [e];
    let t = !1,
      n = () => {},
      r = [],
      s = {
        enqueue(i) {
          r.push(i), n();
        },
        finish() {
          (t = !0), n();
        },
      };
    for (let i of e) {
      let a = H(o, i);
      a || ((a = new Set()), b.get(o).set(i, a)), a.add(s);
    }
    return {
      async next() {
        return r
          ? r.length === 0
            ? t
              ? ((r = void 0), this.next())
              : (await new Promise((i) => {
                  n = i;
                }),
                this.next())
            : { done: !1, value: await r.shift() }
          : { done: !0 };
      },
      async return(i) {
        r = void 0;
        for (let a of e) {
          let c = H(o, a);
          c && (c.delete(s), c.size === 0 && b.get(o).delete(a));
        }
        return (
          n(),
          arguments.length > 0 ? { done: !0, value: await i } : { done: !0 }
        );
      },
      [Symbol.asyncIterator]() {
        return this;
      },
    };
  }
  function Fe(o) {
    if (o === void 0) return De;
    if (!Array.isArray(o))
      throw new TypeError("`methodNames` must be an array of strings");
    for (let e of o)
      if (!De.includes(e))
        throw typeof e != "string"
          ? new TypeError("`methodNames` element must be a string")
          : new Error(`${e} is not Emittery method`);
    return o;
  }
  var F = (o) => o === se || o === ae;
  function re(o, e, t) {
    if (F(e))
      try {
        (ce = !0), o.emit(e, t);
      } finally {
        ce = !1;
      }
  }
  var h = class o {
      static mixin(e, t) {
        return (
          (t = Fe(t)),
          (n) => {
            if (typeof n != "function")
              throw new TypeError("`target` must be function");
            for (let i of t)
              if (n.prototype[i] !== void 0)
                throw new Error(
                  `The property \`${i}\` already exists on \`target\``
                );
            function r() {
              return (
                Object.defineProperty(this, e, {
                  enumerable: !1,
                  value: new o(),
                }),
                this[e]
              );
            }
            Object.defineProperty(n.prototype, e, { enumerable: !1, get: r });
            let s = (i) =>
              function (...a) {
                return this[e][i](...a);
              };
            for (let i of t)
              Object.defineProperty(n.prototype, i, {
                enumerable: !1,
                value: s(i),
              });
            return n;
          }
        );
      }
      static get isDebugEnabled() {
        var t, n;
        if (
          typeof ((t = globalThis.process) == null ? void 0 : t.env) != "object"
        )
          return ve;
        let { env: e } = (n = globalThis.process) != null ? n : { env: {} };
        return e.DEBUG === "emittery" || e.DEBUG === "*" || ve;
      }
      static set isDebugEnabled(e) {
        ve = e;
      }
      constructor(e = {}) {
        var t;
        v.set(this, new Set()),
          S.set(this, new Map()),
          b.set(this, new Map()),
          b.get(this).set(ie, new Set()),
          (this.debug = (t = e.debug) != null ? t : {}),
          this.debug.enabled === void 0 && (this.debug.enabled = !1),
          this.debug.logger ||
            (this.debug.logger = (n, r, s, i) => {
              try {
                i = JSON.stringify(i);
              } catch {
                i = `Object with the following keys failed to stringify: ${Object.keys(
                  i
                ).join(",")}`;
              }
              (typeof s == "symbol" || typeof s == "number") &&
                (s = s.toString());
              let a = new Date(),
                c = `${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}.${a.getMilliseconds()}`;
              console.log(`[${c}][emittery:${n}][${r}] Event Name: ${s}
	data: ${i}`);
            });
      }
      logIfDebugEnabled(e, t, n) {
        (o.isDebugEnabled || this.debug.enabled) &&
          this.debug.logger(e, this.debug.name, t, n);
      }
      on(e, t) {
        ne(t), (e = Array.isArray(e) ? e : [e]);
        for (let n of e) {
          L(n);
          let r = $(this, n);
          r || ((r = new Set()), S.get(this).set(n, r)),
            r.add(t),
            this.logIfDebugEnabled("subscribe", n, void 0),
            F(n) || re(this, se, { eventName: n, listener: t });
        }
        return this.off.bind(this, e, t);
      }
      off(e, t) {
        ne(t), (e = Array.isArray(e) ? e : [e]);
        for (let n of e) {
          L(n);
          let r = $(this, n);
          r && (r.delete(t), r.size === 0 && S.get(this).delete(n)),
            this.logIfDebugEnabled("unsubscribe", n, void 0),
            F(n) || re(this, ae, { eventName: n, listener: t });
        }
      }
      once(e) {
        let t,
          n = new Promise((r) => {
            t = this.on(e, (s) => {
              t(), r(s);
            });
          });
        return (n.off = t), n;
      }
      events(e) {
        e = Array.isArray(e) ? e : [e];
        for (let t of e) L(t);
        return $e(this, e);
      }
      async emit(e, t) {
        var a;
        if ((L(e), F(e) && !ce))
          throw new TypeError(
            "`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`"
          );
        this.logIfDebugEnabled("emit", e, t), at(this, e, t);
        let n = (a = $(this, e)) != null ? a : new Set(),
          r = v.get(this),
          s = [...n],
          i = F(e) ? [] : [...r];
        await Le,
          await Promise.all([
            ...s.map(async (c) => {
              if (n.has(c)) return c(t);
            }),
            ...i.map(async (c) => {
              if (r.has(c)) return c(e, t);
            }),
          ]);
      }
      async emitSerial(e, t) {
        var a;
        if ((L(e), F(e) && !ce))
          throw new TypeError(
            "`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`"
          );
        this.logIfDebugEnabled("emitSerial", e, t);
        let n = (a = $(this, e)) != null ? a : new Set(),
          r = v.get(this),
          s = [...n],
          i = [...r];
        await Le;
        for (let c of s) n.has(c) && (await c(t));
        for (let c of i) r.has(c) && (await c(e, t));
      }
      onAny(e) {
        return (
          ne(e),
          this.logIfDebugEnabled("subscribeAny", void 0, void 0),
          v.get(this).add(e),
          re(this, se, { listener: e }),
          this.offAny.bind(this, e)
        );
      }
      anyEvent() {
        return $e(this);
      }
      offAny(e) {
        ne(e),
          this.logIfDebugEnabled("unsubscribeAny", void 0, void 0),
          re(this, ae, { listener: e }),
          v.get(this).delete(e);
      }
      clearListeners(e) {
        e = Array.isArray(e) ? e : [e];
        for (let t of e)
          if (
            (this.logIfDebugEnabled("clear", t, void 0),
            typeof t == "string" ||
              typeof t == "symbol" ||
              typeof t == "number")
          ) {
            let n = $(this, t);
            n && n.clear();
            let r = H(this, t);
            if (r) {
              for (let s of r) s.finish();
              r.clear();
            }
          } else {
            v.get(this).clear();
            for (let [n, r] of S.get(this).entries())
              r.clear(), S.get(this).delete(n);
            for (let [n, r] of b.get(this).entries()) {
              for (let s of r) s.finish();
              r.clear(), b.get(this).delete(n);
            }
          }
      }
      listenerCount(e) {
        var n, r, s, i, a, c;
        e = Array.isArray(e) ? e : [e];
        let t = 0;
        for (let l of e) {
          if (typeof l == "string") {
            t +=
              v.get(this).size +
              ((r = (n = $(this, l)) == null ? void 0 : n.size) != null
                ? r
                : 0) +
              ((i = (s = H(this, l)) == null ? void 0 : s.size) != null
                ? i
                : 0) +
              ((c = (a = H(this)) == null ? void 0 : a.size) != null ? c : 0);
            continue;
          }
          typeof l != "undefined" && L(l), (t += v.get(this).size);
          for (let p of S.get(this).values()) t += p.size;
          for (let p of b.get(this).values()) t += p.size;
        }
        return t;
      }
      bindMethods(e, t) {
        if (typeof e != "object" || e === null)
          throw new TypeError("`target` must be an object");
        t = Fe(t);
        for (let n of t) {
          if (e[n] !== void 0)
            throw new Error(
              `The property \`${n}\` already exists on \`target\``
            );
          Object.defineProperty(e, n, {
            enumerable: !1,
            value: this[n].bind(this),
          });
        }
      }
    },
    De = Object.getOwnPropertyNames(h.prototype).filter(
      (o) => o !== "constructor"
    );
  Object.defineProperty(h, "listenerAdded", {
    value: se,
    writable: !1,
    enumerable: !0,
    configurable: !1,
  });
  Object.defineProperty(h, "listenerRemoved", {
    value: ae,
    writable: !1,
    enumerable: !0,
    configurable: !1,
  });
  var ct = ["essential"],
    Ce = ["personalization", "analytics", "marketing"],
    Ee = "uncategorized",
    le = [...ct, ...Ce, Ee],
    f = "fs-cc",
    Co = f + "-ie",
    _e = ["informational", "opt-in", "opt-out"],
    K = { allow: "allow", deny: "deny", submit: "submit" },
    C = {
      banner: `[${f}="banner"]`,
      preferences: `[${f}="preferences"]`,
      manager: `[${f}="manager"]`,
    },
    T = {
      allow: `[${f}="${K.allow}"]`,
      deny: `[${f}="${K.deny}"]`,
      submit: `[${f}="${K.submit}"]`,
      openPreferences: `[${f}="open-preferences"]`,
      close: `[${f}="close"]`,
    },
    xe = { interactionTrigger: `[${f}="interaction"]` },
    m = {
      categories: [`${f}-category`, `${f}-categories`],
      disableScroll: `${f}-scroll`,
      displayProperty: `${f}-display`,
      cookieMaxAge: `${f}-expires`,
      mode: `${f}-mode`,
      debugMode: `${f}-debug`,
      endpoint: `${f}-endpoint`,
      componentsSource: `${f}-source`,
      src: `${f}-src`,
      placeholder: `${f}-placeholder`,
      domain: `${f}-domain`,
      consentMode: `${f}-consentmode`,
    },
    D = { main: f, consentsUpdated: `${f}-updated` };
  var _ = {
    checkbox: (o) => `[${f}-checkbox="${o}"]`,
    gtmEvent: (o) => `${o}-activated`,
  };
  var Ne = `<style>${C.banner},${C.manager},${C.preferences},${xe.interactionTrigger}{display:none}</style>`;
  var lt = { info: "green", warning: "yellow", error: "red" },
    d = class {
      static activate() {
        this.init(), (this.active = !0);
      }
      static init() {
        (this.element = document.createElement("div")),
          Object.assign(this.element.style, {
            position: "fixed",
            left: "auto",
            top: "auto",
            right: "16px",
            bottom: "0px",
            "z-index": "999999",
            "max-width": "320px",
            "font-size": "14px",
            "line-height": "1.25",
          }),
          document.body.appendChild(this.element);
      }
      static alert(e, t) {
        if (!this.active) return;
        let n = document.createElement("div");
        Object.assign(n.style, {
          position: "relative",
          padding: "16px",
          opacity: "0",
          "margin-bottom": "16px",
          "border-left": `4px solid ${lt[t]}`,
          "background-color": "#fff",
          "box-shadow": "1px 1px 3px 0 rgba(0, 0, 0, 0.1)",
          "word-break": "break-all",
        });
        let r = document.createElement("div");
        (r.innerText = e),
          n.appendChild(r),
          n.insertAdjacentHTML(
            "beforeend",
            `<div ${f}="close" style="position: absolute; left: auto; top: 4px; right: 8px; bottom: auto; cursor: pointer">\u2716</div>`
          ),
          this.handleCard(n);
      }
      static handleCard(e) {
        let t = (n) => {
          n.target instanceof Element &&
            n.target.closest(T.close) &&
            (e.removeEventListener("click", t), e.remove());
        };
        e.addEventListener("click", t),
          this.element.insertAdjacentElement("afterbegin", e),
          N(e);
      }
    };
  d.active = !1;
  var de = Object.freeze({
      analytics: !1,
      essential: !0,
      marketing: !1,
      personalization: !1,
      uncategorized: !1,
    }),
    q = Object.freeze({
      analytics: !0,
      essential: !0,
      marketing: !0,
      personalization: !0,
      uncategorized: !0,
    }),
    Ue = "180";
  var z = class {
    constructor() {
      this.confirmed = !1;
      this.bannerText = "empty";
      this.scripts = [];
      this.iFrames = [];
      this.userHasConfirmed = () => this.confirmed;
      this.getStoredElements = () => [...this.scripts, ...this.iFrames];
      this.getActivableElements = () =>
        this.getStoredElements().filter(
          ({ active: e, categories: t }) =>
            !e && t.every((n) => this.consents[n])
        );
      this.getConsents = () => this.consents;
      this.getConsentsEntries = () => ue(this.consents);
      this.getConsent = (e) => this.consents[e];
      this.getBannerText = () => this.bannerText;
      let { currentScript: e } = document,
        t = e == null ? void 0 : e.getAttribute(m.mode);
      switch (((this.mode = w(t, _e) ? t : "opt-in"), this.mode)) {
        case "informational":
        case "opt-out":
          this.consents = { ...q };
          break;
        default:
          this.consents = { ...de };
      }
      this.cookieMaxAge = parseInt(
        (e == null ? void 0 : e.getAttribute(m.cookieMaxAge)) || Ue
      );
      let n = e == null ? void 0 : e.getAttribute(m.debugMode);
      (this.debugMode = n === "" || n === "true"),
        this.debugMode && d.activate();
      let r = e == null ? void 0 : e.getAttribute(m.consentMode);
      (this.consentMode = r === "true"),
        (this.endpoint = e == null ? void 0 : e.getAttribute(m.endpoint)),
        (this.componentsSource =
          e == null ? void 0 : e.getAttribute(m.componentsSource)),
        (this.domain = e == null ? void 0 : e.getAttribute(m.domain)),
        d.alert(
          `The cookie banner is set to ${
            this.mode
          } mode with a consent expiry time of ${this.cookieMaxAge} days.${
            this.endpoint
              ? `The consents will be POSTed to ${this.endpoint}`
              : ""
          }`,
          "info"
        );
    }
    storeScript(e) {
      this.scripts.push({ ...e, type: "script" });
    }
    storeIFrame(e) {
      this.iFrames.push({ ...e, type: "iframe" });
    }
    storeConsents(e) {
      let t = [];
      return (
        j(e).forEach((n) => {
          if (n === "essential") return;
          let r = e[n];
          r === void 0 ||
            r === this.consents[n] ||
            ((this.consents[n] = r), t.push(n));
        }),
        (this.confirmed = !0),
        t
      );
    }
    storeBannerText(e) {
      e && e.textContent && (this.bannerText = e.textContent);
    }
  };
  var je = async (o) => {
      let { origin: e, pathname: t, href: n } = window.shop,
        { origin: r, pathname: s, href: i } = new URL(document.baseURI);
      try {
        if (o.startsWith("/")) {
          let g = i === n ? e : r + s;
          o = me(g) + o;
        }
        let { origin: a, pathname: c } = new URL(o);
        if (a + c === e + t) return;
        let p = await (await fetch(o)).text(),
          G = new DOMParser().parseFromString(p, "text/html");
        Object.values(C).forEach((g) => {
          let J = G.querySelector(g);
          J && document.body.appendChild(J);
        }),
          ye(["ix2"]);
      } catch (a) {
        d.alert(`${a}`, "error");
      }
    },
    Re = (o) => {
      if (Q(o)) return o;
      let e = o.querySelectorAll("*");
      for (let t of e) if (Q(t)) return t;
    },
    Be = ({ element: o }) => {
      let e = document.createElement("script");
      return (
        (e.type = "text/javascript"),
        (e.innerText = o.innerText),
        (e.text = o.text),
        o.src && (e.src = o.src),
        e
      );
    },
    He = ({ element: o, src: e, placeholder: t }) => {
      let n = document.createElement("iframe");
      for (let { name: r, value: s } of o.attributes) n.setAttribute(r, s);
      return (
        (n.innerText = o.innerText),
        (n.src = e),
        t && n.addEventListener("load", () => U(t)),
        n
      );
    };
  var W = class extends h {
    constructor(t, n) {
      super();
      this.element = t;
      this.store = n;
      this.checkboxes = new Map();
      this.initElements(), this.listenEvents(), this.updateCheckboxes();
    }
    initElements() {
      let t = Ce.filter((n) => {
        let r = _.checkbox(n),
          s = this.element.querySelector(`input${r}, ${r} input`);
        return !s || s.type !== "checkbox"
          ? !0
          : (s.checked && X(s, !1), this.checkboxes.set(n, s), !1);
      });
      t.length &&
        d.alert(
          `The Consents Form is missing the following checkboxes: ${t
            .map((n) => _.checkbox(n))
            .join(", ")}.`,
          "warning"
        );
    }
    listenEvents() {
      this.element.addEventListener("submit", (t) => this.handleSubmit(t));
    }
    handleSubmit(t) {
      t.preventDefault(), t.stopPropagation();
      let n = {};
      this.checkboxes.forEach((r, s) => {
        var i;
        n[s] = (i = r.checked) != null ? i : !1;
      }),
        this.emit("submit", n);
    }
    updateCheckboxes() {
      let t = this.store.getConsents();
      this.checkboxes.forEach((n, r) => {
        !!t[r] !== n.checked && X(n, t[r]);
      });
    }
    submit() {
      A(this.element, "submit");
    }
  };
  var I = class extends h {
    constructor(t, n) {
      super();
      this.selector = t;
      this.store = n;
      this.disableScrollOnOpen = !1;
      this.ready = !1;
      this.isReady = () => this.ready;
      document.readyState === "complete"
        ? this.init()
        : window.addEventListener("load", () => this.init());
    }
    init() {
      let { banner: t, manager: n, preferences: r } = C;
      if (!this.initElements()) {
        switch (this.selector) {
          case t:
            d.alert(
              `No element with the ${t} attribute was found, it is required to have it!`,
              "error"
            );
            break;
          case n:
            d.alert(
              `No element with the ${n} attribute was found, did you want to use the Manager component?`,
              "info"
            );
            break;
          case r:
            d.alert(
              `No element with the ${r} attribute was found, did you want to use the Preferences component?`,
              "info"
            );
            break;
        }
        return;
      }
      this.handleAccessibility(),
        this.listenEvents(),
        (this.ready = !0),
        this.emit("ready", this.element);
    }
    initElements() {
      this.element = y(this.selector, HTMLElement);
      let { element: t, store: n } = this;
      if (!t) return !1;
      let r = y("form", HTMLFormElement, t);
      r && (this.form = new W(r, n));
      let s = t.getAttribute(m.displayProperty);
      (this.disableScrollOnOpen =
        t.getAttribute(m.disableScroll) === "disable"),
        this.disableScrollOnOpen && (this.scrollableElement = Re(t));
      let i = y(xe.interactionTrigger, HTMLElement, t);
      return (
        (this.displayController = new k({
          element: t,
          interaction: i ? { element: i } : void 0,
          displayProperty: w(s, k.displayProperties) ? s : "flex",
          startsHidden: !0,
        })),
        !0
      );
    }
    handleAccessibility() {
      let { element: t } = this;
      t &&
        j(T).forEach((n) => {
          let r = t.querySelector(T[n]);
          r &&
            (r.setAttribute("role", "button"), r.setAttribute("tabindex", "0"));
        });
    }
    listenEvents() {
      let { element: t, form: n } = this;
      t &&
        (t.addEventListener("click", (r) => this.handleMouseAndKeyboard(r)),
        t.addEventListener("keydown", (r) => this.handleMouseAndKeyboard(r)),
        n == null || n.on("submit", (r) => this.handleFormSubmit(r)));
    }
    handleMouseAndKeyboard(t) {
      var c;
      let { target: n } = t,
        { allow: r, deny: s, close: i, submit: a } = T;
      n instanceof Element &&
        (("key" in t && t.key !== "Enter") ||
          (n.closest(r)
            ? (this.emit("allow"), this.close())
            : n.closest(s)
            ? (this.emit("deny"), this.close())
            : n.closest(i)
            ? this.close()
            : n.closest(a) && ((c = this.form) == null || c.submit())));
    }
    handleFormSubmit(t) {
      this.emit("formsubmit", t), this.close();
    }
    show(t = !0) {
      let {
        element: n,
        displayController: r,
        disableScrollOnOpen: s,
        scrollableElement: i,
      } = this;
      !n ||
        !r ||
        r.isVisible() === t ||
        (r[t ? "show" : "hide"](),
        s && (t ? Ie(i || n, { reserveScrollBarGap: !0 }) : Pe()),
        this.emit(t ? "open" : "close"));
    }
    open() {
      this.ready ? this.show() : this.once("ready").then(() => this.show());
    }
    close() {
      this.ready ? this.show(!1) : this.once("ready").then(() => this.show(!1));
    }
  };
  var Ke = (o = 21) =>
    crypto
      .getRandomValues(new Uint8Array(o))
      .reduce(
        (e, t) => (
          (t &= 63),
          t < 36
            ? (e += t.toString(36))
            : t < 62
            ? (e += (t - 26).toString(36).toUpperCase())
            : t > 62
            ? (e += "-")
            : (e += "_"),
          e
        ),
        ""
      );
  var qe = async ({
    id: o,
    endpoint: e,
    consents: t,
    action: n,
    bannerText: r,
  }) => {
    if (e)
      try {
        let s = JSON.stringify({
            id: o,
            action: n,
            consents: t,
            bannerText: r,
            url: window.shop.href,
            userAgent: navigator.userAgent,
          }),
          i = await fetch(e, { body: s, method: "POST" });
        if (i.ok)
          d.alert(
            "The new consents were successfully POSTed to the API endpoint.",
            "info"
          );
        else throw new Error(`The API returned a ${i.status} status.`);
      } catch (s) {
        d.alert(`There was an error while POSTing to the API: ${s}`, "error");
      }
  };
  function fe(o) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t) o[n] = t[n];
    }
    return o;
  }
  var dt = {
    read: function (o) {
      return (
        o[0] === '"' && (o = o.slice(1, -1)),
        o.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
      );
    },
    write: function (o) {
      return encodeURIComponent(o).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      );
    },
  };
  function Se(o, e) {
    function t(r, s, i) {
      if (typeof document != "undefined") {
        (i = fe({}, e, i)),
          typeof i.expires == "number" &&
            (i.expires = new Date(Date.now() + i.expires * 864e5)),
          i.expires && (i.expires = i.expires.toUTCString()),
          (r = encodeURIComponent(r)
            .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
            .replace(/[()]/g, escape));
        var a = "";
        for (var c in i)
          i[c] &&
            ((a += "; " + c), i[c] !== !0 && (a += "=" + i[c].split(";")[0]));
        return (document.cookie = r + "=" + o.write(s, r) + a);
      }
    }
    function n(r) {
      if (!(typeof document == "undefined" || (arguments.length && !r))) {
        for (
          var s = document.cookie ? document.cookie.split("; ") : [],
            i = {},
            a = 0;
          a < s.length;
          a++
        ) {
          var c = s[a].split("="),
            l = c.slice(1).join("=");
          try {
            var p = decodeURIComponent(c[0]);
            if (((i[p] = o.read(l, p)), r === p)) break;
          } catch {}
        }
        return r ? i[r] : i;
      }
    }
    return Object.create(
      {
        set: t,
        get: n,
        remove: function (r, s) {
          t(r, "", fe({}, s, { expires: -1 }));
        },
        withAttributes: function (r) {
          return Se(this.converter, fe({}, this.attributes, r));
        },
        withConverter: function (r) {
          return Se(fe({}, this.converter, r), this.attributes);
        },
      },
      {
        attributes: { value: Object.freeze(e) },
        converter: { value: Object.freeze(o) },
      }
    );
  }
  var E = Se(dt, { path: "/" });
  var ze = (o) => Object.keys(o).every((e) => w(e, le));
  var We = (o) => {
      if (!o) return;
      let { hostname: e } = window.shop;
      return e.includes("webflow.io") ? e : o;
    },
    Ve = () => {
      let o = E.get(D.main);
      if (!o) return;
      let e = JSON.parse(decodeURIComponent(o));
      if (e.consents && ze(e.consents)) return e.consents;
    },
    Ye = (o, e, t = 120, n) => {
      let s = encodeURIComponent(JSON.stringify({ id: o, consents: e }));
      (n = We(n)), E.set(D.main, s, { expires: t, domain: n });
    },
    Ge = () => {
      let o = E.get();
      for (let e in o) {
        if (e === D.main) continue;
        let t = window.shop.host.split(".");
        for (; t.length > 1; )
          E.remove(e),
            E.remove(e, { domain: `.${t.join(".")}` }),
            E.remove(e, { domain: `${t.join(".")}` }),
            t.splice(0, 1);
      }
    },
    Je = () => !!E.get(D.consentsUpdated),
    Qe = (o = 120, e) => {
      (e = We(e)), E.set(D.consentsUpdated, "true", { expires: o, domain: e });
    };
  var Te = (o, e) => {
      ft("consent", o, e);
    },
    Oe = (o) => {
      (window.dataLayer = window.dataLayer || []),
        !window.dataLayer.find(
          (t) => typeof t == "object" && "event" in t && t.event === o
        ) &&
          (window.dataLayer.push({ event: o }),
          d.alert(
            `The GTM event ${o} has been fired with its equivalent consent mode.`,
            "info"
          ));
    };
  function ft(...o) {
    (window.dataLayer = window.dataLayer || []),
      window.dataLayer.push(arguments);
  }
  var V = class extends h {
    constructor(t) {
      super();
      this.store = t;
      this.loadConsents(),
        this.storeElements(),
        document.readyState !== "complete" &&
          window.addEventListener("load", () => {
            this.storeElements(), this.applyConsents();
          }),
        this.applyConsents();
    }
    storeElements() {
      let { store: t } = this,
        n = document.querySelectorAll(`script[type="${f}"], iframe[${m.src}]`),
        r = t.getStoredElements();
      [...n]
        .filter((i) => !r.find(({ element: a }) => i === a))
        .forEach((i) => {
          let a = pe(
            i.getAttribute(m.categories[0]) || i.getAttribute(m.categories[1]),
            le,
            Ee
          );
          if (
            (i instanceof HTMLScriptElement &&
              t.storeScript({ categories: a, element: i, active: !1 }),
            i instanceof HTMLIFrameElement)
          ) {
            let c = i.getAttribute(m.src);
            if (!c) return;
            i.src = "";
            let l = i.getAttribute(m.placeholder),
              p = l ? y(l, HTMLElement) : void 0;
            t.storeIFrame({
              categories: a,
              element: i,
              src: c,
              placeholder: p,
              active: !1,
            });
          }
          d.alert(
            `Stored the element: ${i.outerHTML} in the categories: ${a.join(
              ", "
            )}`,
            "info"
          );
        });
    }
    loadConsents() {
      let t = Ve();
      if (
        (this.store.consentMode &&
          Te("default", {
            ad_storage: t != null && t.marketing ? "granted" : "denied",
            ad_user_data: t != null && t.marketing ? "granted" : "denied",
            ad_personalization: t != null && t.marketing ? "granted" : "denied",
            analytics_storage: t != null && t.analytics ? "granted" : "denied",
            functionality_storage:
              t != null && t.personalization ? "granted" : "denied",
            personalization_storage:
              t != null && t.personalization ? "granted" : "denied",
            security_storage: "granted",
          }),
        !t)
      )
        return;
      for (let r in t || {}) {
        let s = r;
        if (t[s]) {
          let a = _.gtmEvent(s);
          Oe(a);
        }
      }
      d.alert(
        `The following consents were loaded from the stored cookies: ${JSON.stringify(
          t
        )}`,
        "info"
      ),
        this.store.storeConsents(t),
        Je() &&
          (Ge(),
          d.alert("Previously denied cookies have been deleted.", "info"));
    }
    async applyConsents() {
      for (let t of this.store.getActivableElements())
        await new Promise((n) => {
          let { element: r } = t,
            { src: s, parentElement: i } = r,
            a;
          if (t.type === "script") a = Be(t);
          else if (t.type === "iframe") a = He(t);
          else {
            n(void 0);
            return;
          }
          let c = () => {
            (t.element = a), (t.active = !0), n(void 0);
          };
          s && a.addEventListener("load", c),
            i == null || i.insertBefore(a, r),
            r.remove(),
            s || c();
        });
    }
    updateConsents(t, n) {
      let { store: r } = this,
        { cookieMaxAge: s, endpoint: i, domain: a } = r,
        c = r.storeConsents(t),
        l = Ke();
      Ye(l, r.getConsents(), s, a);
      let p = {};
      for (let O of c) {
        let G = t[O],
          g = G ? "granted" : "denied";
        if (
          (O === "marketing" &&
            ((p.ad_storage = g),
            (p.ad_user_data = g),
            (p.ad_personalization = g)),
          O === "analytics" && (p.analytics_storage = g),
          O === "personalization" &&
            ((p.functionality_storage = g), (p.personalization_storage = g)),
          G)
        ) {
          let J = _.gtmEvent(O);
          Oe(J);
        }
      }
      r.consentMode && Te("update", p),
        i &&
          qe({
            action: n,
            endpoint: i,
            id: l,
            consents: r.getConsents(),
            bannerText: r.getBannerText() || "",
          }),
        c.length &&
          (Qe(s, a),
          this.applyConsents(),
          d.alert(
            `The following consents were updated: ${c.join(", ")}`,
            "info"
          )),
        this.emit("updateconsents");
    }
  };
  var Y = class {
    constructor(e = []) {
      this.store = new z();
      (this.consentController = new V(this.store)),
        this.initComponents().then(() => this.init(e));
    }
    async initComponents() {
      let { store: e } = this,
        { componentsSource: t } = e,
        { banner: n, preferences: r, manager: s } = C;
      t && (await je(t)),
        (this.banner = new I(n, e)),
        (this.preferences = new I(r, e)),
        (this.manager = new I(s, e));
    }
    init(e = []) {
      let { store: t, manager: n, banner: r } = this;
      document.head.insertAdjacentHTML("beforeend", Ne),
        !/bot|crawler|spider|crawling/i.test(navigator.userAgent) &&
          (this.push(...e),
          t.userHasConfirmed() ? n.open() : r.open(),
          this.listenEvents());
    }
    listenEvents() {
      let { allow: e, deny: t, submit: n } = K,
        r = ["banner", "manager", "preferences"],
        { store: s, consentController: i, banner: a, manager: c } = this;
      document.addEventListener("click", (l) => this.handleMouseAndKeyboard(l)),
        document.addEventListener("keydown", (l) =>
          this.handleMouseAndKeyboard(l)
        ),
        a.isReady()
          ? s.storeBannerText(a.element)
          : a.on("ready", (l) => s.storeBannerText(l)),
        i.on("updateconsents", () => {
          r.forEach((l) => {
            var p;
            return (p = this[l].form) == null ? void 0 : p.updateCheckboxes();
          });
        }),
        r.forEach((l) => {
          this[l].on("allow", () => {
            d.alert(`Allow button was clicked in the ${l} component.`, "info"),
              i.updateConsents(q, e);
          }),
            this[l].on("deny", () => {
              d.alert(`Deny button was clicked in the ${l} component.`, "info"),
                i.updateConsents(de, t);
            }),
            this[l].on("formsubmit", (p) => {
              d.alert(
                `Consents Form was submitted in the ${l} component with the following consents: ${JSON.stringify(
                  p
                )}`,
                "info"
              ),
                i.updateConsents(p, n);
            }),
            l !== "manager" &&
              this[l].on("close", () => {
                d.alert(`The ${l} component was closed.`, "info"),
                  s.mode === "informational" &&
                    (d.alert(
                      `All cookies were accepted because the mode is set to ${s.mode}.`,
                      "warning"
                    ),
                    i.updateConsents(q, e)),
                  c.open();
              });
        });
    }
    handleMouseAndKeyboard(e) {
      let { target: t } = e,
        { banner: n, manager: r, preferences: s } = this;
      t instanceof Element &&
        (("key" in e && e.key !== "Enter") ||
          (t.closest(T.openPreferences) &&
            (n.close(),
            r.close(),
            s.open(),
            d.alert("Open Preferences button was clicked.", "info"))));
    }
    push(...e) {
      e.forEach((t) => t(this));
    }
  };
  var pt = Array.isArray(window.FsCC) ? window.FsCC : [];
  window.FsCC = new Y(pt);
})();
/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)
*/
