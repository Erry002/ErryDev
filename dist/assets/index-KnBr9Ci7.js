function sd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function ud(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ma = { exports: {} },
  Ol = {},
  ha = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vr = Symbol.for("react.element"),
  ad = Symbol.for("react.portal"),
  cd = Symbol.for("react.fragment"),
  fd = Symbol.for("react.strict_mode"),
  dd = Symbol.for("react.profiler"),
  pd = Symbol.for("react.provider"),
  md = Symbol.for("react.context"),
  hd = Symbol.for("react.forward_ref"),
  vd = Symbol.for("react.suspense"),
  yd = Symbol.for("react.memo"),
  gd = Symbol.for("react.lazy"),
  Bs = Symbol.iterator;
function wd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bs && e[Bs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var va = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ya = Object.assign,
  ga = {};
function Sn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ga),
    (this.updater = n || va);
}
Sn.prototype.isReactComponent = {};
Sn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Sn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wa() {}
wa.prototype = Sn.prototype;
function Do(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ga),
    (this.updater = n || va);
}
var Ao = (Do.prototype = new wa());
Ao.constructor = Do;
ya(Ao, Sn.prototype);
Ao.isPureReactComponent = !0;
var $s = Array.isArray,
  xa = Object.prototype.hasOwnProperty,
  Uo = { current: null },
  Sa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ea(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      xa.call(t, r) && !Sa.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: vr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Uo.current,
  };
}
function xd(e, t) {
  return {
    $$typeof: vr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Mo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vr;
}
function Sd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Hs = /\/+/g;
function ri(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Sd("" + e.key)
    : t.toString(36);
}
function Wr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case vr:
          case ad:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + ri(o, 0) : r),
      $s(l)
        ? ((n = ""),
          e != null && (n = e.replace(Hs, "$&/") + "/"),
          Wr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Mo(l) &&
            (l = xd(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Hs, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), $s(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + ri(i, s);
      o += Wr(i, t, n, u, l);
    }
  else if (((u = wd(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + ri(i, s++)), (o += Wr(i, t, n, u, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function _r(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Wr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Ed(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  Vr = { transition: null },
  kd = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: Vr,
    ReactCurrentOwner: Uo,
  };
L.Children = {
  map: _r,
  forEach: function (e, t, n) {
    _r(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      _r(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      _r(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Mo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = Sn;
L.Fragment = cd;
L.Profiler = dd;
L.PureComponent = Do;
L.StrictMode = fd;
L.Suspense = vd;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kd;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ya({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Uo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      xa.call(t, u) &&
        !Sa.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: vr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: md,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: pd, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = Ea;
L.createFactory = function (e) {
  var t = Ea.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: hd, render: e };
};
L.isValidElement = Mo;
L.lazy = function (e) {
  return { $$typeof: gd, _payload: { _status: -1, _result: e }, _init: Ed };
};
L.memo = function (e, t) {
  return { $$typeof: yd, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = Vr.transition;
  Vr.transition = {};
  try {
    e();
  } finally {
    Vr.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
L.useContext = function (e) {
  return de.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
L.useId = function () {
  return de.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return de.current.useRef(e);
};
L.useState = function (e) {
  return de.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return de.current.useTransition();
};
L.version = "18.2.0";
ha.exports = L;
var N = ha.exports;
const ka = ud(N),
  Cd = sd({ __proto__: null, default: ka }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nd = N,
  _d = Symbol.for("react.element"),
  Pd = Symbol.for("react.fragment"),
  jd = Object.prototype.hasOwnProperty,
  Rd = Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Td = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ca(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) jd.call(t, r) && !Td.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: _d,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Rd.current,
  };
}
Ol.Fragment = Pd;
Ol.jsx = Ca;
Ol.jsxs = Ca;
ma.exports = Ol;
var v = ma.exports,
  Fi = {},
  Na = { exports: {} },
  ke = {},
  _a = { exports: {} },
  Pa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, O) {
    var z = P.length;
    P.push(O);
    e: for (; 0 < z; ) {
      var G = (z - 1) >>> 1,
        ee = P[G];
      if (0 < l(ee, O)) (P[G] = O), (P[z] = ee), (z = G);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var O = P[0],
      z = P.pop();
    if (z !== O) {
      P[0] = z;
      e: for (var G = 0, ee = P.length, Cr = ee >>> 1; G < Cr; ) {
        var Pt = 2 * (G + 1) - 1,
          ni = P[Pt],
          jt = Pt + 1,
          Nr = P[jt];
        if (0 > l(ni, z))
          jt < ee && 0 > l(Nr, ni)
            ? ((P[G] = Nr), (P[jt] = z), (G = jt))
            : ((P[G] = ni), (P[Pt] = z), (G = Pt));
        else if (jt < ee && 0 > l(Nr, z)) (P[G] = Nr), (P[jt] = z), (G = jt);
        else break e;
      }
    }
    return O;
  }
  function l(P, O) {
    var z = P.sortIndex - O.sortIndex;
    return z !== 0 ? z : P.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var u = [],
    a = [],
    d = 1,
    c = null,
    h = 3,
    x = !1,
    y = !1,
    g = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(P) {
    for (var O = n(a); O !== null; ) {
      if (O.callback === null) r(a);
      else if (O.startTime <= P)
        r(a), (O.sortIndex = O.expirationTime), t(u, O);
      else break;
      O = n(a);
    }
  }
  function S(P) {
    if (((g = !1), m(P), !y))
      if (n(u) !== null) (y = !0), ei(C);
      else {
        var O = n(a);
        O !== null && ti(S, O.startTime - P);
      }
  }
  function C(P, O) {
    (y = !1), g && ((g = !1), p(T), (T = -1)), (x = !0);
    var z = h;
    try {
      for (
        m(O), c = n(u);
        c !== null && (!(c.expirationTime > O) || (P && !ze()));

      ) {
        var G = c.callback;
        if (typeof G == "function") {
          (c.callback = null), (h = c.priorityLevel);
          var ee = G(c.expirationTime <= O);
          (O = e.unstable_now()),
            typeof ee == "function" ? (c.callback = ee) : c === n(u) && r(u),
            m(O);
        } else r(u);
        c = n(u);
      }
      if (c !== null) var Cr = !0;
      else {
        var Pt = n(a);
        Pt !== null && ti(S, Pt.startTime - O), (Cr = !1);
      }
      return Cr;
    } finally {
      (c = null), (h = z), (x = !1);
    }
  }
  var j = !1,
    R = null,
    T = -1,
    K = 5,
    F = -1;
  function ze() {
    return !(e.unstable_now() - F < K);
  }
  function _n() {
    if (R !== null) {
      var P = e.unstable_now();
      F = P;
      var O = !0;
      try {
        O = R(!0, P);
      } finally {
        O ? Pn() : ((j = !1), (R = null));
      }
    } else j = !1;
  }
  var Pn;
  if (typeof f == "function")
    Pn = function () {
      f(_n);
    };
  else if (typeof MessageChannel < "u") {
    var Ms = new MessageChannel(),
      od = Ms.port2;
    (Ms.port1.onmessage = _n),
      (Pn = function () {
        od.postMessage(null);
      });
  } else
    Pn = function () {
      k(_n, 0);
    };
  function ei(P) {
    (R = P), j || ((j = !0), Pn());
  }
  function ti(P, O) {
    T = k(function () {
      P(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || x || ((y = !0), ei(C));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (K = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = h;
      }
      var z = h;
      h = O;
      try {
        return P();
      } finally {
        h = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, O) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = h;
      h = P;
      try {
        return O();
      } finally {
        h = z;
      }
    }),
    (e.unstable_scheduleCallback = function (P, O, z) {
      var G = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? G + z : G))
          : (z = G),
        P)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = z + ee),
        (P = {
          id: d++,
          callback: O,
          priorityLevel: P,
          startTime: z,
          expirationTime: ee,
          sortIndex: -1,
        }),
        z > G
          ? ((P.sortIndex = z),
            t(a, P),
            n(u) === null &&
              P === n(a) &&
              (g ? (p(T), (T = -1)) : (g = !0), ti(S, z - G)))
          : ((P.sortIndex = ee), t(u, P), y || x || ((y = !0), ei(C))),
        P
      );
    }),
    (e.unstable_shouldYield = ze),
    (e.unstable_wrapCallback = function (P) {
      var O = h;
      return function () {
        var z = h;
        h = O;
        try {
          return P.apply(this, arguments);
        } finally {
          h = z;
        }
      };
    });
})(Pa);
_a.exports = Pa;
var Od = _a.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ja = N,
  Ee = Od;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ra = new Set(),
  Xn = {};
function Ht(e, t) {
  pn(e, t), pn(e + "Capture", t);
}
function pn(e, t) {
  for (Xn[e] = t, e = 0; e < t.length; e++) Ra.add(t[e]);
}
var be = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ii = Object.prototype.hasOwnProperty,
  zd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ws = {},
  Vs = {};
function Ld(e) {
  return Ii.call(Vs, e)
    ? !0
    : Ii.call(Ws, e)
    ? !1
    : zd.test(e)
    ? (Vs[e] = !0)
    : ((Ws[e] = !0), !1);
}
function Fd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Id(e, t, n, r) {
  if (t === null || typeof t > "u" || Fd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bo = /[\-:]([a-z])/g;
function $o(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bo, $o);
    ie[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bo, $o);
    ie[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bo, $o);
  ie[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ho(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Id(t, n, l, r) && (n = null),
    r || l === null
      ? Ld(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rt = ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pr = Symbol.for("react.element"),
  Jt = Symbol.for("react.portal"),
  qt = Symbol.for("react.fragment"),
  Wo = Symbol.for("react.strict_mode"),
  Di = Symbol.for("react.profiler"),
  Ta = Symbol.for("react.provider"),
  Oa = Symbol.for("react.context"),
  Vo = Symbol.for("react.forward_ref"),
  Ai = Symbol.for("react.suspense"),
  Ui = Symbol.for("react.suspense_list"),
  Qo = Symbol.for("react.memo"),
  ot = Symbol.for("react.lazy"),
  za = Symbol.for("react.offscreen"),
  Qs = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qs && e[Qs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  li;
function An(e) {
  if (li === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      li = (t && t[1]) || "";
    }
  return (
    `
` +
    li +
    e
  );
}
var ii = !1;
function oi(e, t) {
  if (!e || ii) return "";
  ii = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && l[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || l[o] !== i[s])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (ii = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? An(e) : "";
}
function Dd(e) {
  switch (e.tag) {
    case 5:
      return An(e.type);
    case 16:
      return An("Lazy");
    case 13:
      return An("Suspense");
    case 19:
      return An("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = oi(e.type, !1)), e;
    case 11:
      return (e = oi(e.type.render, !1)), e;
    case 1:
      return (e = oi(e.type, !0)), e;
    default:
      return "";
  }
}
function Mi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qt:
      return "Fragment";
    case Jt:
      return "Portal";
    case Di:
      return "Profiler";
    case Wo:
      return "StrictMode";
    case Ai:
      return "Suspense";
    case Ui:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Oa:
        return (e.displayName || "Context") + ".Consumer";
      case Ta:
        return (e._context.displayName || "Context") + ".Provider";
      case Vo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Qo:
        return (
          (t = e.displayName || null), t !== null ? t : Mi(e.type) || "Memo"
        );
      case ot:
        (t = e._payload), (e = e._init);
        try {
          return Mi(e(t));
        } catch {}
    }
  return null;
}
function Ad(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Mi(t);
    case 8:
      return t === Wo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Et(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function La(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ud(e) {
  var t = La(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function jr(e) {
  e._valueTracker || (e._valueTracker = Ud(e));
}
function Fa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = La(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ll(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bi(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ks(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Et(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ia(e, t) {
  (t = t.checked), t != null && Ho(e, "checked", t, !1);
}
function $i(e, t) {
  Ia(e, t);
  var n = Et(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Hi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Hi(e, t.type, Et(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Gs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Hi(e, t, n) {
  (t !== "number" || ll(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Un = Array.isArray;
function sn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Et(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Js(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Un(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Et(n) };
}
function Da(e, t) {
  var n = Et(t.value),
    r = Et(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function qs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Aa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Aa(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Rr,
  Ua = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Rr = Rr || document.createElement("div"),
          Rr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Rr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $n = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Md = ["Webkit", "ms", "Moz", "O"];
Object.keys($n).forEach(function (e) {
  Md.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($n[t] = $n[e]);
  });
});
function Ma(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($n.hasOwnProperty(e) && $n[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ba(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ma(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Bd = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Qi(e, t) {
  if (t) {
    if (Bd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Ki(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Gi = null;
function Ko(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ji = null,
  un = null,
  an = null;
function Xs(e) {
  if ((e = wr(e))) {
    if (typeof Ji != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Dl(t)), Ji(e.stateNode, e.type, t));
  }
}
function $a(e) {
  un ? (an ? an.push(e) : (an = [e])) : (un = e);
}
function Ha() {
  if (un) {
    var e = un,
      t = an;
    if (((an = un = null), Xs(e), t)) for (e = 0; e < t.length; e++) Xs(t[e]);
  }
}
function Wa(e, t) {
  return e(t);
}
function Va() {}
var si = !1;
function Qa(e, t, n) {
  if (si) return e(t, n);
  si = !0;
  try {
    return Wa(e, t, n);
  } finally {
    (si = !1), (un !== null || an !== null) && (Va(), Ha());
  }
}
function Zn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Dl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var qi = !1;
if (be)
  try {
    var Rn = {};
    Object.defineProperty(Rn, "passive", {
      get: function () {
        qi = !0;
      },
    }),
      window.addEventListener("test", Rn, Rn),
      window.removeEventListener("test", Rn, Rn);
  } catch {
    qi = !1;
  }
function $d(e, t, n, r, l, i, o, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Hn = !1,
  il = null,
  ol = !1,
  Xi = null,
  Hd = {
    onError: function (e) {
      (Hn = !0), (il = e);
    },
  };
function Wd(e, t, n, r, l, i, o, s, u) {
  (Hn = !1), (il = null), $d.apply(Hd, arguments);
}
function Vd(e, t, n, r, l, i, o, s, u) {
  if ((Wd.apply(this, arguments), Hn)) {
    if (Hn) {
      var a = il;
      (Hn = !1), (il = null);
    } else throw Error(E(198));
    ol || ((ol = !0), (Xi = a));
  }
}
function Wt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ka(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ys(e) {
  if (Wt(e) !== e) throw Error(E(188));
}
function Qd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wt(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Ys(l), e;
        if (i === r) return Ys(l), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (s === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (s === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Ga(e) {
  return (e = Qd(e)), e !== null ? Ja(e) : null;
}
function Ja(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ja(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qa = Ee.unstable_scheduleCallback,
  Zs = Ee.unstable_cancelCallback,
  Kd = Ee.unstable_shouldYield,
  Gd = Ee.unstable_requestPaint,
  J = Ee.unstable_now,
  Jd = Ee.unstable_getCurrentPriorityLevel,
  Go = Ee.unstable_ImmediatePriority,
  Xa = Ee.unstable_UserBlockingPriority,
  sl = Ee.unstable_NormalPriority,
  qd = Ee.unstable_LowPriority,
  Ya = Ee.unstable_IdlePriority,
  zl = null,
  Ve = null;
function Xd(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(zl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ae = Math.clz32 ? Math.clz32 : bd,
  Yd = Math.log,
  Zd = Math.LN2;
function bd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Yd(e) / Zd) | 0)) | 0;
}
var Tr = 64,
  Or = 4194304;
function Mn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ul(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? (r = Mn(s)) : ((i &= o), i !== 0 && (r = Mn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Mn(o)) : i !== 0 && (r = Mn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ae(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function ep(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function tp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Ae(i),
      s = 1 << o,
      u = l[o];
    u === -1
      ? (!(s & n) || s & r) && (l[o] = ep(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Yi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Za() {
  var e = Tr;
  return (Tr <<= 1), !(Tr & 4194240) && (Tr = 64), e;
}
function ui(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function yr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ae(t)),
    (e[t] = n);
}
function np(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ae(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Jo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ae(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var A = 0;
function ba(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ec,
  qo,
  tc,
  nc,
  rc,
  Zi = !1,
  zr = [],
  pt = null,
  mt = null,
  ht = null,
  bn = new Map(),
  er = new Map(),
  ut = [],
  rp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pt = null;
      break;
    case "dragenter":
    case "dragleave":
      mt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      bn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      er.delete(t.pointerId);
  }
}
function Tn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = wr(t)), t !== null && qo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function lp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (pt = Tn(pt, e, t, n, r, l)), !0;
    case "dragenter":
      return (mt = Tn(mt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ht = Tn(ht, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return bn.set(i, Tn(bn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), er.set(i, Tn(er.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function lc(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ka(n)), t !== null)) {
          (e.blockedOn = t),
            rc(e.priority, function () {
              tc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Qr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = bi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Gi = r), n.target.dispatchEvent(r), (Gi = null);
    } else return (t = wr(n)), t !== null && qo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function eu(e, t, n) {
  Qr(e) && n.delete(t);
}
function ip() {
  (Zi = !1),
    pt !== null && Qr(pt) && (pt = null),
    mt !== null && Qr(mt) && (mt = null),
    ht !== null && Qr(ht) && (ht = null),
    bn.forEach(eu),
    er.forEach(eu);
}
function On(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zi ||
      ((Zi = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, ip)));
}
function tr(e) {
  function t(l) {
    return On(l, e);
  }
  if (0 < zr.length) {
    On(zr[0], e);
    for (var n = 1; n < zr.length; n++) {
      var r = zr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pt !== null && On(pt, e),
      mt !== null && On(mt, e),
      ht !== null && On(ht, e),
      bn.forEach(t),
      er.forEach(t),
      n = 0;
    n < ut.length;
    n++
  )
    (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
    lc(n), n.blockedOn === null && ut.shift();
}
var cn = rt.ReactCurrentBatchConfig,
  al = !0;
function op(e, t, n, r) {
  var l = A,
    i = cn.transition;
  cn.transition = null;
  try {
    (A = 1), Xo(e, t, n, r);
  } finally {
    (A = l), (cn.transition = i);
  }
}
function sp(e, t, n, r) {
  var l = A,
    i = cn.transition;
  cn.transition = null;
  try {
    (A = 4), Xo(e, t, n, r);
  } finally {
    (A = l), (cn.transition = i);
  }
}
function Xo(e, t, n, r) {
  if (al) {
    var l = bi(e, t, n, r);
    if (l === null) gi(e, t, r, cl, n), bs(e, r);
    else if (lp(l, e, t, n, r)) r.stopPropagation();
    else if ((bs(e, r), t & 4 && -1 < rp.indexOf(e))) {
      for (; l !== null; ) {
        var i = wr(l);
        if (
          (i !== null && ec(i),
          (i = bi(e, t, n, r)),
          i === null && gi(e, t, r, cl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else gi(e, t, r, null, n);
  }
}
var cl = null;
function bi(e, t, n, r) {
  if (((cl = null), (e = Ko(r)), (e = zt(e)), e !== null))
    if (((t = Wt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ka(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (cl = e), null;
}
function ic(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Jd()) {
        case Go:
          return 1;
        case Xa:
          return 4;
        case sl:
        case qd:
          return 16;
        case Ya:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ct = null,
  Yo = null,
  Kr = null;
function oc() {
  if (Kr) return Kr;
  var e,
    t = Yo,
    n = t.length,
    r,
    l = "value" in ct ? ct.value : ct.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Kr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Gr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Lr() {
  return !0;
}
function tu() {
  return !1;
}
function Ce(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Lr
        : tu),
      (this.isPropagationStopped = tu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Lr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Lr));
      },
      persist: function () {},
      isPersistent: Lr,
    }),
    t
  );
}
var En = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zo = Ce(En),
  gr = V({}, En, { view: 0, detail: 0 }),
  up = Ce(gr),
  ai,
  ci,
  zn,
  Ll = V({}, gr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: bo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== zn &&
            (zn && e.type === "mousemove"
              ? ((ai = e.screenX - zn.screenX), (ci = e.screenY - zn.screenY))
              : (ci = ai = 0),
            (zn = e)),
          ai);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ci;
    },
  }),
  nu = Ce(Ll),
  ap = V({}, Ll, { dataTransfer: 0 }),
  cp = Ce(ap),
  fp = V({}, gr, { relatedTarget: 0 }),
  fi = Ce(fp),
  dp = V({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pp = Ce(dp),
  mp = V({}, En, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  hp = Ce(mp),
  vp = V({}, En, { data: 0 }),
  ru = Ce(vp),
  yp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  gp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  wp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function xp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wp[e]) ? !!t[e] : !1;
}
function bo() {
  return xp;
}
var Sp = V({}, gr, {
    key: function (e) {
      if (e.key) {
        var t = yp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Gr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? gp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bo,
    charCode: function (e) {
      return e.type === "keypress" ? Gr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Gr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ep = Ce(Sp),
  kp = V({}, Ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  lu = Ce(kp),
  Cp = V({}, gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bo,
  }),
  Np = Ce(Cp),
  _p = V({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Pp = Ce(_p),
  jp = V({}, Ll, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Rp = Ce(jp),
  Tp = [9, 13, 27, 32],
  es = be && "CompositionEvent" in window,
  Wn = null;
be && "documentMode" in document && (Wn = document.documentMode);
var Op = be && "TextEvent" in window && !Wn,
  sc = be && (!es || (Wn && 8 < Wn && 11 >= Wn)),
  iu = " ",
  ou = !1;
function uc(e, t) {
  switch (e) {
    case "keyup":
      return Tp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ac(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xt = !1;
function zp(e, t) {
  switch (e) {
    case "compositionend":
      return ac(t);
    case "keypress":
      return t.which !== 32 ? null : ((ou = !0), iu);
    case "textInput":
      return (e = t.data), e === iu && ou ? null : e;
    default:
      return null;
  }
}
function Lp(e, t) {
  if (Xt)
    return e === "compositionend" || (!es && uc(e, t))
      ? ((e = oc()), (Kr = Yo = ct = null), (Xt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return sc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fp[e.type] : t === "textarea";
}
function cc(e, t, n, r) {
  $a(r),
    (t = fl(t, "onChange")),
    0 < t.length &&
      ((n = new Zo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vn = null,
  nr = null;
function Ip(e) {
  Sc(e, 0);
}
function Fl(e) {
  var t = bt(e);
  if (Fa(t)) return e;
}
function Dp(e, t) {
  if (e === "change") return t;
}
var fc = !1;
if (be) {
  var di;
  if (be) {
    var pi = "oninput" in document;
    if (!pi) {
      var uu = document.createElement("div");
      uu.setAttribute("oninput", "return;"),
        (pi = typeof uu.oninput == "function");
    }
    di = pi;
  } else di = !1;
  fc = di && (!document.documentMode || 9 < document.documentMode);
}
function au() {
  Vn && (Vn.detachEvent("onpropertychange", dc), (nr = Vn = null));
}
function dc(e) {
  if (e.propertyName === "value" && Fl(nr)) {
    var t = [];
    cc(t, nr, e, Ko(e)), Qa(Ip, t);
  }
}
function Ap(e, t, n) {
  e === "focusin"
    ? (au(), (Vn = t), (nr = n), Vn.attachEvent("onpropertychange", dc))
    : e === "focusout" && au();
}
function Up(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Fl(nr);
}
function Mp(e, t) {
  if (e === "click") return Fl(t);
}
function Bp(e, t) {
  if (e === "input" || e === "change") return Fl(t);
}
function $p(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : $p;
function rr(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ii.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function fu(e, t) {
  var n = cu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = cu(n);
  }
}
function pc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? pc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function mc() {
  for (var e = window, t = ll(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ll(e.document);
  }
  return t;
}
function ts(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Hp(e) {
  var t = mc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ts(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = fu(n, i));
        var o = fu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Wp = be && "documentMode" in document && 11 >= document.documentMode,
  Yt = null,
  eo = null,
  Qn = null,
  to = !1;
function du(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  to ||
    Yt == null ||
    Yt !== ll(r) ||
    ((r = Yt),
    "selectionStart" in r && ts(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Qn && rr(Qn, r)) ||
      ((Qn = r),
      (r = fl(eo, "onSelect")),
      0 < r.length &&
        ((t = new Zo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Yt))));
}
function Fr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zt = {
    animationend: Fr("Animation", "AnimationEnd"),
    animationiteration: Fr("Animation", "AnimationIteration"),
    animationstart: Fr("Animation", "AnimationStart"),
    transitionend: Fr("Transition", "TransitionEnd"),
  },
  mi = {},
  hc = {};
be &&
  ((hc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zt.animationend.animation,
    delete Zt.animationiteration.animation,
    delete Zt.animationstart.animation),
  "TransitionEvent" in window || delete Zt.transitionend.transition);
function Il(e) {
  if (mi[e]) return mi[e];
  if (!Zt[e]) return e;
  var t = Zt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in hc) return (mi[e] = t[n]);
  return e;
}
var vc = Il("animationend"),
  yc = Il("animationiteration"),
  gc = Il("animationstart"),
  wc = Il("transitionend"),
  xc = new Map(),
  pu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ct(e, t) {
  xc.set(e, t), Ht(t, [e]);
}
for (var hi = 0; hi < pu.length; hi++) {
  var vi = pu[hi],
    Vp = vi.toLowerCase(),
    Qp = vi[0].toUpperCase() + vi.slice(1);
  Ct(Vp, "on" + Qp);
}
Ct(vc, "onAnimationEnd");
Ct(yc, "onAnimationIteration");
Ct(gc, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(wc, "onTransitionEnd");
pn("onMouseEnter", ["mouseout", "mouseover"]);
pn("onMouseLeave", ["mouseout", "mouseover"]);
pn("onPointerEnter", ["pointerout", "pointerover"]);
pn("onPointerLeave", ["pointerout", "pointerover"]);
Ht(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ht(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ht(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ht(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ht(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Bn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Kp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));
function mu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Vd(r, t, void 0, e), (e.currentTarget = null);
}
function Sc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== i && l.isPropagationStopped())) break e;
          mu(l, s, a), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          mu(l, s, a), (i = u);
        }
    }
  }
  if (ol) throw ((e = Xi), (ol = !1), (Xi = null), e);
}
function M(e, t) {
  var n = t[oo];
  n === void 0 && (n = t[oo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ec(t, e, 2, !1), n.add(r));
}
function yi(e, t, n) {
  var r = 0;
  t && (r |= 4), Ec(n, e, r, t);
}
var Ir = "_reactListening" + Math.random().toString(36).slice(2);
function lr(e) {
  if (!e[Ir]) {
    (e[Ir] = !0),
      Ra.forEach(function (n) {
        n !== "selectionchange" && (Kp.has(n) || yi(n, !1, e), yi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ir] || ((t[Ir] = !0), yi("selectionchange", !1, t));
  }
}
function Ec(e, t, n, r) {
  switch (ic(t)) {
    case 1:
      var l = op;
      break;
    case 4:
      l = sp;
      break;
    default:
      l = Xo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !qi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function gi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = zt(s)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Qa(function () {
    var a = i,
      d = Ko(n),
      c = [];
    e: {
      var h = xc.get(e);
      if (h !== void 0) {
        var x = Zo,
          y = e;
        switch (e) {
          case "keypress":
            if (Gr(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Ep;
            break;
          case "focusin":
            (y = "focus"), (x = fi);
            break;
          case "focusout":
            (y = "blur"), (x = fi);
            break;
          case "beforeblur":
          case "afterblur":
            x = fi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = nu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = cp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Np;
            break;
          case vc:
          case yc:
          case gc:
            x = pp;
            break;
          case wc:
            x = Pp;
            break;
          case "scroll":
            x = up;
            break;
          case "wheel":
            x = Rp;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = hp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = lu;
        }
        var g = (t & 4) !== 0,
          k = !g && e === "scroll",
          p = g ? (h !== null ? h + "Capture" : null) : h;
        g = [];
        for (var f = a, m; f !== null; ) {
          m = f;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              p !== null && ((S = Zn(f, p)), S != null && g.push(ir(f, S, m)))),
            k)
          )
            break;
          f = f.return;
        }
        0 < g.length &&
          ((h = new x(h, y, null, n, d)), c.push({ event: h, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Gi &&
            (y = n.relatedTarget || n.fromElement) &&
            (zt(y) || y[et]))
        )
          break e;
        if (
          (x || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          x
            ? ((y = n.relatedTarget || n.toElement),
              (x = a),
              (y = y ? zt(y) : null),
              y !== null &&
                ((k = Wt(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = a)),
          x !== y)
        ) {
          if (
            ((g = nu),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = lu),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (k = x == null ? h : bt(x)),
            (m = y == null ? h : bt(y)),
            (h = new g(S, f + "leave", x, n, d)),
            (h.target = k),
            (h.relatedTarget = m),
            (S = null),
            zt(d) === a &&
              ((g = new g(p, f + "enter", y, n, d)),
              (g.target = m),
              (g.relatedTarget = k),
              (S = g)),
            (k = S),
            x && y)
          )
            t: {
              for (g = x, p = y, f = 0, m = g; m; m = Kt(m)) f++;
              for (m = 0, S = p; S; S = Kt(S)) m++;
              for (; 0 < f - m; ) (g = Kt(g)), f--;
              for (; 0 < m - f; ) (p = Kt(p)), m--;
              for (; f--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                (g = Kt(g)), (p = Kt(p));
              }
              g = null;
            }
          else g = null;
          x !== null && hu(c, h, x, g, !1),
            y !== null && k !== null && hu(c, k, y, g, !0);
        }
      }
      e: {
        if (
          ((h = a ? bt(a) : window),
          (x = h.nodeName && h.nodeName.toLowerCase()),
          x === "select" || (x === "input" && h.type === "file"))
        )
          var C = Dp;
        else if (su(h))
          if (fc) C = Bp;
          else {
            C = Up;
            var j = Ap;
          }
        else
          (x = h.nodeName) &&
            x.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = Mp);
        if (C && (C = C(e, a))) {
          cc(c, C, n, d);
          break e;
        }
        j && j(e, h, a),
          e === "focusout" &&
            (j = h._wrapperState) &&
            j.controlled &&
            h.type === "number" &&
            Hi(h, "number", h.value);
      }
      switch (((j = a ? bt(a) : window), e)) {
        case "focusin":
          (su(j) || j.contentEditable === "true") &&
            ((Yt = j), (eo = a), (Qn = null));
          break;
        case "focusout":
          Qn = eo = Yt = null;
          break;
        case "mousedown":
          to = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (to = !1), du(c, n, d);
          break;
        case "selectionchange":
          if (Wp) break;
        case "keydown":
        case "keyup":
          du(c, n, d);
      }
      var R;
      if (es)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Xt
          ? uc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (sc &&
          n.locale !== "ko" &&
          (Xt || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Xt && (R = oc())
            : ((ct = d),
              (Yo = "value" in ct ? ct.value : ct.textContent),
              (Xt = !0))),
        (j = fl(a, T)),
        0 < j.length &&
          ((T = new ru(T, e, null, n, d)),
          c.push({ event: T, listeners: j }),
          R ? (T.data = R) : ((R = ac(n)), R !== null && (T.data = R)))),
        (R = Op ? zp(e, n) : Lp(e, n)) &&
          ((a = fl(a, "onBeforeInput")),
          0 < a.length &&
            ((d = new ru("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: a }),
            (d.data = R)));
    }
    Sc(c, t);
  });
}
function ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Zn(e, n)),
      i != null && r.unshift(ir(e, i, l)),
      (i = Zn(e, t)),
      i != null && r.push(ir(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Kt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      l
        ? ((u = Zn(n, i)), u != null && o.unshift(ir(n, u, s)))
        : l || ((u = Zn(n, i)), u != null && o.push(ir(n, u, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Gp = /\r\n?/g,
  Jp = /\u0000|\uFFFD/g;
function vu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Gp,
      `
`
    )
    .replace(Jp, "");
}
function Dr(e, t, n) {
  if (((t = vu(t)), vu(e) !== t && n)) throw Error(E(425));
}
function dl() {}
var no = null,
  ro = null;
function lo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var io = typeof setTimeout == "function" ? setTimeout : void 0,
  qp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  yu = typeof Promise == "function" ? Promise : void 0,
  Xp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof yu < "u"
      ? function (e) {
          return yu.resolve(null).then(e).catch(Yp);
        }
      : io;
function Yp(e) {
  setTimeout(function () {
    throw e;
  });
}
function wi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), tr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  tr(t);
}
function vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function gu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kn = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + kn,
  or = "__reactProps$" + kn,
  et = "__reactContainer$" + kn,
  oo = "__reactEvents$" + kn,
  Zp = "__reactListeners$" + kn,
  bp = "__reactHandles$" + kn;
function zt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[He])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = gu(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = gu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function wr(e) {
  return (
    (e = e[He] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Dl(e) {
  return e[or] || null;
}
var so = [],
  en = -1;
function Nt(e) {
  return { current: e };
}
function B(e) {
  0 > en || ((e.current = so[en]), (so[en] = null), en--);
}
function U(e, t) {
  en++, (so[en] = e.current), (e.current = t);
}
var kt = {},
  ae = Nt(kt),
  ve = Nt(!1),
  At = kt;
function mn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function pl() {
  B(ve), B(ae);
}
function wu(e, t, n) {
  if (ae.current !== kt) throw Error(E(168));
  U(ae, t), U(ve, n);
}
function kc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(E(108, Ad(e) || "Unknown", l));
  return V({}, n, r);
}
function ml(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kt),
    (At = ae.current),
    U(ae, e),
    U(ve, ve.current),
    !0
  );
}
function xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = kc(e, t, At)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(ve),
      B(ae),
      U(ae, e))
    : B(ve),
    U(ve, n);
}
var Je = null,
  Al = !1,
  xi = !1;
function Cc(e) {
  Je === null ? (Je = [e]) : Je.push(e);
}
function em(e) {
  (Al = !0), Cc(e);
}
function _t() {
  if (!xi && Je !== null) {
    xi = !0;
    var e = 0,
      t = A;
    try {
      var n = Je;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Je = null), (Al = !1);
    } catch (l) {
      throw (Je !== null && (Je = Je.slice(e + 1)), qa(Go, _t), l);
    } finally {
      (A = t), (xi = !1);
    }
  }
  return null;
}
var tn = [],
  nn = 0,
  hl = null,
  vl = 0,
  Ne = [],
  _e = 0,
  Ut = null,
  qe = 1,
  Xe = "";
function Rt(e, t) {
  (tn[nn++] = vl), (tn[nn++] = hl), (hl = e), (vl = t);
}
function Nc(e, t, n) {
  (Ne[_e++] = qe), (Ne[_e++] = Xe), (Ne[_e++] = Ut), (Ut = e);
  var r = qe;
  e = Xe;
  var l = 32 - Ae(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Ae(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (qe = (1 << (32 - Ae(t) + l)) | (n << l) | r),
      (Xe = i + e);
  } else (qe = (1 << i) | (n << l) | r), (Xe = e);
}
function ns(e) {
  e.return !== null && (Rt(e, 1), Nc(e, 1, 0));
}
function rs(e) {
  for (; e === hl; )
    (hl = tn[--nn]), (tn[nn] = null), (vl = tn[--nn]), (tn[nn] = null);
  for (; e === Ut; )
    (Ut = Ne[--_e]),
      (Ne[_e] = null),
      (Xe = Ne[--_e]),
      (Ne[_e] = null),
      (qe = Ne[--_e]),
      (Ne[_e] = null);
}
var Se = null,
  xe = null,
  $ = !1,
  De = null;
function _c(e, t) {
  var n = Pe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Su(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (xe = vt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ut !== null ? { id: qe, overflow: Xe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function uo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ao(e) {
  if ($) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Su(e, t)) {
        if (uo(e)) throw Error(E(418));
        t = vt(n.nextSibling);
        var r = Se;
        t && Su(e, t)
          ? _c(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Se = e));
      }
    } else {
      if (uo(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (Se = e);
    }
  }
}
function Eu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function Ar(e) {
  if (e !== Se) return !1;
  if (!$) return Eu(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !lo(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (uo(e)) throw (Pc(), Error(E(418)));
    for (; t; ) _c(e, t), (t = vt(t.nextSibling));
  }
  if ((Eu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = vt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = Se ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function Pc() {
  for (var e = xe; e; ) e = vt(e.nextSibling);
}
function hn() {
  (xe = Se = null), ($ = !1);
}
function ls(e) {
  De === null ? (De = [e]) : De.push(e);
}
var tm = rt.ReactCurrentBatchConfig;
function Fe(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var yl = Nt(null),
  gl = null,
  rn = null,
  is = null;
function os() {
  is = rn = gl = null;
}
function ss(e) {
  var t = yl.current;
  B(yl), (e._currentValue = t);
}
function co(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function fn(e, t) {
  (gl = e),
    (is = rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Te(e) {
  var t = e._currentValue;
  if (is !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), rn === null)) {
      if (gl === null) throw Error(E(308));
      (rn = e), (gl.dependencies = { lanes: 0, firstContext: e });
    } else rn = rn.next = e;
  return t;
}
var Lt = null;
function us(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function jc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), us(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    tt(e, r)
  );
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var st = !1;
function as(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Rc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ye(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      tt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), us(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function Jr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jo(e, n);
  }
}
function ku(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function wl(e, t, n, r) {
  var l = e.updateQueue;
  st = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), o === null ? (i = a) : (o.next = a), (o = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== o &&
        (s === null ? (d.firstBaseUpdate = a) : (s.next = a),
        (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var c = l.baseState;
    (o = 0), (d = a = u = null), (s = i);
    do {
      var h = s.lane,
        x = s.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            g = s;
          switch (((h = t), (x = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                c = y.call(x, c, h);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (h = typeof y == "function" ? y.call(x, c, h) : y),
                h == null)
              )
                break e;
              c = V({}, c, h);
              break e;
            case 2:
              st = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [s]) : h.push(s));
      } else
        (x = {
          eventTime: x,
          lane: h,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((a = d = x), (u = c)) : (d = d.next = x),
          (o |= h);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (h = s),
          (s = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = c),
      (l.baseState = u),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Bt |= o), (e.lanes = o), (e.memoizedState = c);
  }
}
function Cu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(E(191, l));
        l.call(r);
      }
    }
}
var Tc = new ja.Component().refs;
function fo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = wt(e),
      i = Ye(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = yt(e, i, l)),
      t !== null && (Ue(t, e, l, r), Jr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = wt(e),
      i = Ye(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = yt(e, i, l)),
      t !== null && (Ue(t, e, l, r), Jr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = wt(e),
      l = Ye(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = yt(e, l, r)),
      t !== null && (Ue(t, e, r, n), Jr(t, e, r));
  },
};
function Nu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !rr(n, r) || !rr(l, i)
      : !0
  );
}
function Oc(e, t, n) {
  var r = !1,
    l = kt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Te(i))
      : ((l = ye(t) ? At : ae.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? mn(e, l) : kt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ul),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function _u(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ul.enqueueReplaceState(t, t.state, null);
}
function po(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Tc), as(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Te(i))
    : ((i = ye(t) ? At : ae.current), (l.context = mn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (fo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ul.enqueueReplaceState(l, l.state, null),
      wl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ln(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var s = l.refs;
            s === Tc && (s = l.refs = {}),
              o === null ? delete s[i] : (s[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Ur(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Pu(e) {
  var t = e._init;
  return t(e._payload);
}
function zc(e) {
  function t(p, f) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [f]), (p.flags |= 16)) : m.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function l(p, f) {
    return (p = xt(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, f, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((p.flags |= 2), f) : m)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, f, m, S) {
    return f === null || f.tag !== 6
      ? ((f = Pi(m, p.mode, S)), (f.return = p), f)
      : ((f = l(f, m)), (f.return = p), f);
  }
  function u(p, f, m, S) {
    var C = m.type;
    return C === qt
      ? d(p, f, m.props.children, S, m.key)
      : f !== null &&
        (f.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === ot &&
            Pu(C) === f.type))
      ? ((S = l(f, m.props)), (S.ref = Ln(p, f, m)), (S.return = p), S)
      : ((S = el(m.type, m.key, m.props, null, p.mode, S)),
        (S.ref = Ln(p, f, m)),
        (S.return = p),
        S);
  }
  function a(p, f, m, S) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = ji(m, p.mode, S)), (f.return = p), f)
      : ((f = l(f, m.children || [])), (f.return = p), f);
  }
  function d(p, f, m, S, C) {
    return f === null || f.tag !== 7
      ? ((f = Dt(m, p.mode, S, C)), (f.return = p), f)
      : ((f = l(f, m)), (f.return = p), f);
  }
  function c(p, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Pi("" + f, p.mode, m)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Pr:
          return (
            (m = el(f.type, f.key, f.props, null, p.mode, m)),
            (m.ref = Ln(p, null, f)),
            (m.return = p),
            m
          );
        case Jt:
          return (f = ji(f, p.mode, m)), (f.return = p), f;
        case ot:
          var S = f._init;
          return c(p, S(f._payload), m);
      }
      if (Un(f) || jn(f))
        return (f = Dt(f, p.mode, m, null)), (f.return = p), f;
      Ur(p, f);
    }
    return null;
  }
  function h(p, f, m, S) {
    var C = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return C !== null ? null : s(p, f, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Pr:
          return m.key === C ? u(p, f, m, S) : null;
        case Jt:
          return m.key === C ? a(p, f, m, S) : null;
        case ot:
          return (C = m._init), h(p, f, C(m._payload), S);
      }
      if (Un(m) || jn(m)) return C !== null ? null : d(p, f, m, S, null);
      Ur(p, m);
    }
    return null;
  }
  function x(p, f, m, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(m) || null), s(f, p, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Pr:
          return (p = p.get(S.key === null ? m : S.key) || null), u(f, p, S, C);
        case Jt:
          return (p = p.get(S.key === null ? m : S.key) || null), a(f, p, S, C);
        case ot:
          var j = S._init;
          return x(p, f, m, j(S._payload), C);
      }
      if (Un(S) || jn(S)) return (p = p.get(m) || null), d(f, p, S, C, null);
      Ur(f, S);
    }
    return null;
  }
  function y(p, f, m, S) {
    for (
      var C = null, j = null, R = f, T = (f = 0), K = null;
      R !== null && T < m.length;
      T++
    ) {
      R.index > T ? ((K = R), (R = null)) : (K = R.sibling);
      var F = h(p, R, m[T], S);
      if (F === null) {
        R === null && (R = K);
        break;
      }
      e && R && F.alternate === null && t(p, R),
        (f = i(F, f, T)),
        j === null ? (C = F) : (j.sibling = F),
        (j = F),
        (R = K);
    }
    if (T === m.length) return n(p, R), $ && Rt(p, T), C;
    if (R === null) {
      for (; T < m.length; T++)
        (R = c(p, m[T], S)),
          R !== null &&
            ((f = i(R, f, T)), j === null ? (C = R) : (j.sibling = R), (j = R));
      return $ && Rt(p, T), C;
    }
    for (R = r(p, R); T < m.length; T++)
      (K = x(R, p, T, m[T], S)),
        K !== null &&
          (e && K.alternate !== null && R.delete(K.key === null ? T : K.key),
          (f = i(K, f, T)),
          j === null ? (C = K) : (j.sibling = K),
          (j = K));
    return (
      e &&
        R.forEach(function (ze) {
          return t(p, ze);
        }),
      $ && Rt(p, T),
      C
    );
  }
  function g(p, f, m, S) {
    var C = jn(m);
    if (typeof C != "function") throw Error(E(150));
    if (((m = C.call(m)), m == null)) throw Error(E(151));
    for (
      var j = (C = null), R = f, T = (f = 0), K = null, F = m.next();
      R !== null && !F.done;
      T++, F = m.next()
    ) {
      R.index > T ? ((K = R), (R = null)) : (K = R.sibling);
      var ze = h(p, R, F.value, S);
      if (ze === null) {
        R === null && (R = K);
        break;
      }
      e && R && ze.alternate === null && t(p, R),
        (f = i(ze, f, T)),
        j === null ? (C = ze) : (j.sibling = ze),
        (j = ze),
        (R = K);
    }
    if (F.done) return n(p, R), $ && Rt(p, T), C;
    if (R === null) {
      for (; !F.done; T++, F = m.next())
        (F = c(p, F.value, S)),
          F !== null &&
            ((f = i(F, f, T)), j === null ? (C = F) : (j.sibling = F), (j = F));
      return $ && Rt(p, T), C;
    }
    for (R = r(p, R); !F.done; T++, F = m.next())
      (F = x(R, p, T, F.value, S)),
        F !== null &&
          (e && F.alternate !== null && R.delete(F.key === null ? T : F.key),
          (f = i(F, f, T)),
          j === null ? (C = F) : (j.sibling = F),
          (j = F));
    return (
      e &&
        R.forEach(function (_n) {
          return t(p, _n);
        }),
      $ && Rt(p, T),
      C
    );
  }
  function k(p, f, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === qt &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Pr:
          e: {
            for (var C = m.key, j = f; j !== null; ) {
              if (j.key === C) {
                if (((C = m.type), C === qt)) {
                  if (j.tag === 7) {
                    n(p, j.sibling),
                      (f = l(j, m.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  j.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === ot &&
                    Pu(C) === j.type)
                ) {
                  n(p, j.sibling),
                    (f = l(j, m.props)),
                    (f.ref = Ln(p, j, m)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, j);
                break;
              } else t(p, j);
              j = j.sibling;
            }
            m.type === qt
              ? ((f = Dt(m.props.children, p.mode, S, m.key)),
                (f.return = p),
                (p = f))
              : ((S = el(m.type, m.key, m.props, null, p.mode, S)),
                (S.ref = Ln(p, f, m)),
                (S.return = p),
                (p = S));
          }
          return o(p);
        case Jt:
          e: {
            for (j = m.key; f !== null; ) {
              if (f.key === j)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(p, f.sibling),
                    (f = l(f, m.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = ji(m, p.mode, S)), (f.return = p), (p = f);
          }
          return o(p);
        case ot:
          return (j = m._init), k(p, f, j(m._payload), S);
      }
      if (Un(m)) return y(p, f, m, S);
      if (jn(m)) return g(p, f, m, S);
      Ur(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = l(f, m)), (f.return = p), (p = f))
          : (n(p, f), (f = Pi(m, p.mode, S)), (f.return = p), (p = f)),
        o(p))
      : n(p, f);
  }
  return k;
}
var vn = zc(!0),
  Lc = zc(!1),
  xr = {},
  Qe = Nt(xr),
  sr = Nt(xr),
  ur = Nt(xr);
function Ft(e) {
  if (e === xr) throw Error(E(174));
  return e;
}
function cs(e, t) {
  switch ((U(ur, t), U(sr, e), U(Qe, xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Vi(t, e));
  }
  B(Qe), U(Qe, t);
}
function yn() {
  B(Qe), B(sr), B(ur);
}
function Fc(e) {
  Ft(ur.current);
  var t = Ft(Qe.current),
    n = Vi(t, e.type);
  t !== n && (U(sr, e), U(Qe, n));
}
function fs(e) {
  sr.current === e && (B(Qe), B(sr));
}
var H = Nt(0);
function xl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Si = [];
function ds() {
  for (var e = 0; e < Si.length; e++)
    Si[e]._workInProgressVersionPrimary = null;
  Si.length = 0;
}
var qr = rt.ReactCurrentDispatcher,
  Ei = rt.ReactCurrentBatchConfig,
  Mt = 0,
  W = null,
  Z = null,
  te = null,
  Sl = !1,
  Kn = !1,
  ar = 0,
  nm = 0;
function oe() {
  throw Error(E(321));
}
function ps(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function ms(e, t, n, r, l, i) {
  if (
    ((Mt = i),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (qr.current = e === null || e.memoizedState === null ? om : sm),
    (e = n(r, l)),
    Kn)
  ) {
    i = 0;
    do {
      if (((Kn = !1), (ar = 0), 25 <= i)) throw Error(E(301));
      (i += 1),
        (te = Z = null),
        (t.updateQueue = null),
        (qr.current = um),
        (e = n(r, l));
    } while (Kn);
  }
  if (
    ((qr.current = El),
    (t = Z !== null && Z.next !== null),
    (Mt = 0),
    (te = Z = W = null),
    (Sl = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function hs() {
  var e = ar !== 0;
  return (ar = 0), e;
}
function $e() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (W.memoizedState = te = e) : (te = te.next = e), te;
}
function Oe() {
  if (Z === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = te === null ? W.memoizedState : te.next;
  if (t !== null) (te = t), (Z = e);
  else {
    if (e === null) throw Error(E(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      te === null ? (W.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ki(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var s = (o = null),
      u = null,
      a = i;
    do {
      var d = a.lane;
      if ((Mt & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var c = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = c), (o = r)) : (u = u.next = c),
          (W.lanes |= d),
          (Bt |= d);
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? (o = r) : (u.next = s),
      Me(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (W.lanes |= i), (Bt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ci(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Me(i, t.memoizedState) || (he = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ic() {}
function Dc(e, t) {
  var n = W,
    r = Oe(),
    l = t(),
    i = !Me(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (he = !0)),
    (r = r.queue),
    vs(Mc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fr(9, Uc.bind(null, n, r, l, t), void 0, null),
      ne === null)
    )
      throw Error(E(349));
    Mt & 30 || Ac(n, t, l);
  }
  return l;
}
function Ac(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Uc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Bc(t) && $c(e);
}
function Mc(e, t, n) {
  return n(function () {
    Bc(t) && $c(e);
  });
}
function Bc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function $c(e) {
  var t = tt(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function ju(e) {
  var t = $e();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = im.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function fr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Hc() {
  return Oe().memoizedState;
}
function Xr(e, t, n, r) {
  var l = $e();
  (W.flags |= e),
    (l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ml(e, t, n, r) {
  var l = Oe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (((i = o.destroy), r !== null && ps(r, o.deps))) {
      l.memoizedState = fr(t, n, i, r);
      return;
    }
  }
  (W.flags |= e), (l.memoizedState = fr(1 | t, n, i, r));
}
function Ru(e, t) {
  return Xr(8390656, 8, e, t);
}
function vs(e, t) {
  return Ml(2048, 8, e, t);
}
function Wc(e, t) {
  return Ml(4, 2, e, t);
}
function Vc(e, t) {
  return Ml(4, 4, e, t);
}
function Qc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Kc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ml(4, 4, Qc.bind(null, t, e), n)
  );
}
function ys() {}
function Gc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ps(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ps(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function qc(e, t, n) {
  return Mt & 21
    ? (Me(n, t) || ((n = Za()), (W.lanes |= n), (Bt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function rm(e, t) {
  var n = A;
  (A = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ei.transition;
  Ei.transition = {};
  try {
    e(!1), t();
  } finally {
    (A = n), (Ei.transition = r);
  }
}
function Xc() {
  return Oe().memoizedState;
}
function lm(e, t, n) {
  var r = wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yc(e))
  )
    Zc(t, n);
  else if (((n = jc(e, t, n, r)), n !== null)) {
    var l = fe();
    Ue(n, e, r, l), bc(n, t, r);
  }
}
function im(e, t, n) {
  var r = wt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yc(e)) Zc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Me(s, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), us(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = jc(e, t, l, r)),
      n !== null && ((l = fe()), Ue(n, e, r, l), bc(n, t, r));
  }
}
function Yc(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function Zc(e, t) {
  Kn = Sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function bc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jo(e, n);
  }
}
var El = {
    readContext: Te,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  om = {
    readContext: Te,
    useCallback: function (e, t) {
      return ($e().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Te,
    useEffect: Ru,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Xr(4194308, 4, Qc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Xr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Xr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $e();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $e();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = lm.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $e();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ju,
    useDebugValue: ys,
    useDeferredValue: function (e) {
      return ($e().memoizedState = e);
    },
    useTransition: function () {
      var e = ju(!1),
        t = e[0];
      return (e = rm.bind(null, e[1])), ($e().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        l = $e();
      if ($) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(E(349));
        Mt & 30 || Ac(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Ru(Mc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        fr(9, Uc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $e(),
        t = ne.identifierPrefix;
      if ($) {
        var n = Xe,
          r = qe;
        (n = (r & ~(1 << (32 - Ae(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ar++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = nm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  sm = {
    readContext: Te,
    useCallback: Gc,
    useContext: Te,
    useEffect: vs,
    useImperativeHandle: Kc,
    useInsertionEffect: Wc,
    useLayoutEffect: Vc,
    useMemo: Jc,
    useReducer: ki,
    useRef: Hc,
    useState: function () {
      return ki(cr);
    },
    useDebugValue: ys,
    useDeferredValue: function (e) {
      var t = Oe();
      return qc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = ki(cr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: Ic,
    useSyncExternalStore: Dc,
    useId: Xc,
    unstable_isNewReconciler: !1,
  },
  um = {
    readContext: Te,
    useCallback: Gc,
    useContext: Te,
    useEffect: vs,
    useImperativeHandle: Kc,
    useInsertionEffect: Wc,
    useLayoutEffect: Vc,
    useMemo: Jc,
    useReducer: Ci,
    useRef: Hc,
    useState: function () {
      return Ci(cr);
    },
    useDebugValue: ys,
    useDeferredValue: function (e) {
      var t = Oe();
      return Z === null ? (t.memoizedState = e) : qc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Ci(cr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: Ic,
    useSyncExternalStore: Dc,
    useId: Xc,
    unstable_isNewReconciler: !1,
  };
function gn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Dd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ni(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function mo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var am = typeof WeakMap == "function" ? WeakMap : Map;
function ef(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Cl || ((Cl = !0), (Co = r)), mo(e, t);
    }),
    n
  );
}
function tf(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        mo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        mo(e, t),
          typeof r != "function" &&
            (gt === null ? (gt = new Set([this])) : gt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Tu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new am();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = km.bind(null, e, t, n)), t.then(e, e));
}
function Ou(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ye(-1, 1)), (t.tag = 2), yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var cm = rt.ReactCurrentOwner,
  he = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Lc(t, null, n, r) : vn(t, e.child, n, r);
}
function Lu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    fn(t, l),
    (r = ms(e, t, n, r, i, l)),
    (n = hs()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : ($ && n && ns(t), (t.flags |= 1), ce(e, t, r, l), t.child)
  );
}
function Fu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ns(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), nf(e, t, i, r, l))
      : ((e = el(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : rr), n(o, r) && e.ref === t.ref)
    )
      return nt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = xt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function nf(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (rr(i, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (he = !0);
      else return (t.lanes = e.lanes), nt(e, t, l);
  }
  return ho(e, t, n, r, l);
}
function rf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(on, we),
        (we |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(on, we),
          (we |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        U(on, we),
        (we |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(on, we),
      (we |= r);
  return ce(e, t, l, n), t.child;
}
function lf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ho(e, t, n, r, l) {
  var i = ye(n) ? At : ae.current;
  return (
    (i = mn(t, i)),
    fn(t, l),
    (n = ms(e, t, n, r, i, l)),
    (r = hs()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        nt(e, t, l))
      : ($ && r && ns(t), (t.flags |= 1), ce(e, t, n, l), t.child)
  );
}
function Iu(e, t, n, r, l) {
  if (ye(n)) {
    var i = !0;
    ml(t);
  } else i = !1;
  if ((fn(t, l), t.stateNode === null))
    Yr(e, t), Oc(t, n, r), po(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var u = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Te(a))
      : ((a = ye(n) ? At : ae.current), (a = mn(t, a)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && _u(t, o, r, a)),
      (st = !1);
    var h = t.memoizedState;
    (o.state = h),
      wl(t, r, o, l),
      (u = t.memoizedState),
      s !== r || h !== u || ve.current || st
        ? (typeof d == "function" && (fo(t, n, d, r), (u = t.memoizedState)),
          (s = st || Nu(t, n, s, r, h, u, a))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = a),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Rc(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Fe(t.type, s)),
      (o.props = a),
      (c = t.pendingProps),
      (h = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Te(u))
        : ((u = ye(n) ? At : ae.current), (u = mn(t, u)));
    var x = n.getDerivedStateFromProps;
    (d =
      typeof x == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== c || h !== u) && _u(t, o, r, u)),
      (st = !1),
      (h = t.memoizedState),
      (o.state = h),
      wl(t, r, o, l);
    var y = t.memoizedState;
    s !== c || h !== y || ve.current || st
      ? (typeof x == "function" && (fo(t, n, x, r), (y = t.memoizedState)),
        (a = st || Nu(t, n, a, r, h, y, u) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = u),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vo(e, t, n, r, i, l);
}
function vo(e, t, n, r, l, i) {
  lf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && xu(t, n, !1), nt(e, t, i);
  (r = t.stateNode), (cm.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = vn(t, e.child, null, i)), (t.child = vn(t, null, s, i)))
      : ce(e, t, s, i),
    (t.memoizedState = r.state),
    l && xu(t, n, !0),
    t.child
  );
}
function of(e) {
  var t = e.stateNode;
  t.pendingContext
    ? wu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && wu(e, t.context, !1),
    cs(e, t.containerInfo);
}
function Du(e, t, n, r, l) {
  return hn(), ls(l), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var yo = { dehydrated: null, treeContext: null, retryLane: 0 };
function go(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sf(e, t, n) {
  var r = t.pendingProps,
    l = H.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    U(H, l & 1),
    e === null)
  )
    return (
      ao(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Hl(o, r, 0, null)),
              (e = Dt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = go(n)),
              (t.memoizedState = yo),
              e)
            : gs(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return fm(e, t, o, r, s, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = xt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = xt(s, i)) : ((i = Dt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? go(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = yo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = xt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function gs(e, t) {
  return (
    (t = Hl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Mr(e, t, n, r) {
  return (
    r !== null && ls(r),
    vn(t, e.child, null, n),
    (e = gs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function fm(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ni(Error(E(422)))), Mr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Hl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Dt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && vn(t, e.child, null, o),
        (t.child.memoizedState = go(o)),
        (t.memoizedState = yo),
        i);
  if (!(t.mode & 1)) return Mr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(E(419))), (r = Ni(i, r, void 0)), Mr(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), he || s)) {
    if (((r = ne), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), tt(e, l), Ue(r, e, l, -1));
    }
    return Cs(), (r = Ni(Error(E(421)))), Mr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Cm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (xe = vt(l.nextSibling)),
      (Se = t),
      ($ = !0),
      (De = null),
      e !== null &&
        ((Ne[_e++] = qe),
        (Ne[_e++] = Xe),
        (Ne[_e++] = Ut),
        (qe = e.id),
        (Xe = e.overflow),
        (Ut = t)),
      (t = gs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Au(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), co(e.return, t, n);
}
function _i(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function uf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ce(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Au(e, n, t);
        else if (e.tag === 19) Au(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && xl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          _i(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && xl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        _i(t, !0, n, null, i);
        break;
      case "together":
        _i(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Yr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Bt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function dm(e, t, n) {
  switch (t.tag) {
    case 3:
      of(t), hn();
      break;
    case 5:
      Fc(t);
      break;
    case 1:
      ye(t.type) && ml(t);
      break;
    case 4:
      cs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      U(yl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? sf(e, t, n)
          : (U(H, H.current & 1),
            (e = nt(e, t, n)),
            e !== null ? e.sibling : null);
      U(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return uf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        U(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), rf(e, t, n);
  }
  return nt(e, t, n);
}
var af, wo, cf, ff;
af = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
wo = function () {};
cf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ft(Qe.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Bi(e, l)), (r = Bi(e, r)), (i = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Wi(e, l)), (r = Wi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = dl);
    }
    Qi(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var s = l[a];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Xn.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                s[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Xn.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && M("scroll", e),
                  i || s === u || (i = []))
                : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
ff = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function pm(e, t, n) {
  var r = t.pendingProps;
  switch ((rs(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return se(t), null;
    case 1:
      return ye(t.type) && pl(), se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        yn(),
        B(ve),
        B(ae),
        ds(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ar(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (Po(De), (De = null)))),
        wo(e, t),
        se(t),
        null
      );
    case 5:
      fs(t);
      var l = Ft(ur.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        cf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return se(t), null;
        }
        if (((e = Ft(Qe.current)), Ar(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[He] = t), (r[or] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Bn.length; l++) M(Bn[l], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M("error", r), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              Ks(r, i), M("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                M("invalid", r);
              break;
            case "textarea":
              Js(r, i), M("invalid", r);
          }
          Qi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Dr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Dr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Xn.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  M("scroll", r);
            }
          switch (n) {
            case "input":
              jr(r), Gs(r, i, !0);
              break;
            case "textarea":
              jr(r), qs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = dl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Aa(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[He] = t),
            (e[or] = r),
            af(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Ki(n, r)), n)) {
              case "dialog":
                M("cancel", e), M("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Bn.length; l++) M(Bn[l], e);
                l = r;
                break;
              case "source":
                M("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                M("error", e), M("load", e), (l = r);
                break;
              case "details":
                M("toggle", e), (l = r);
                break;
              case "input":
                Ks(e, r), (l = Bi(e, r)), M("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  M("invalid", e);
                break;
              case "textarea":
                Js(e, r), (l = Wi(e, r)), M("invalid", e);
                break;
              default:
                l = r;
            }
            Qi(n, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? Ba(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Ua(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Yn(e, u)
                    : typeof u == "number" && Yn(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Xn.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && M("scroll", e)
                      : u != null && Ho(e, i, u, o));
              }
            switch (n) {
              case "input":
                jr(e), Gs(e, r, !1);
                break;
              case "textarea":
                jr(e), qs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Et(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? sn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      sn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = dl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return se(t), null;
    case 6:
      if (e && t.stateNode != null) ff(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Ft(ur.current)), Ft(Qe.current), Ar(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[He] = t),
            (i = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                Dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[He] = t),
            (t.stateNode = r);
      }
      return se(t), null;
    case 13:
      if (
        (B(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && xe !== null && t.mode & 1 && !(t.flags & 128))
          Pc(), hn(), (t.flags |= 98560), (i = !1);
        else if (((i = Ar(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(E(317));
            i[He] = t;
          } else
            hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          se(t), (i = !1);
        } else De !== null && (Po(De), (De = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? b === 0 && (b = 3) : Cs())),
          t.updateQueue !== null && (t.flags |= 4),
          se(t),
          null);
    case 4:
      return (
        yn(), wo(e, t), e === null && lr(t.stateNode.containerInfo), se(t), null
      );
    case 10:
      return ss(t.type._context), se(t), null;
    case 17:
      return ye(t.type) && pl(), se(t), null;
    case 19:
      if ((B(H), (i = t.memoizedState), i === null)) return se(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Fn(i, !1);
        else {
          if (b !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = xl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Fn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            J() > wn &&
            ((t.flags |= 128), (r = !0), Fn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !$)
            )
              return se(t), null;
          } else
            2 * J() - i.renderingStartTime > wn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = J()),
          (t.sibling = null),
          (n = H.current),
          U(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (se(t), null);
    case 22:
    case 23:
      return (
        ks(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? we & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function mm(e, t) {
  switch ((rs(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && pl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        yn(),
        B(ve),
        B(ae),
        ds(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return fs(t), null;
    case 13:
      if ((B(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(H), null;
    case 4:
      return yn(), null;
    case 10:
      return ss(t.type._context), null;
    case 22:
    case 23:
      return ks(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Br = !1,
  ue = !1,
  hm = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function ln(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function xo(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var Uu = !1;
function vm(e, t) {
  if (((no = al), (e = mc()), ts(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            u = -1,
            a = 0,
            d = 0,
            c = e,
            h = null;
          t: for (;;) {
            for (
              var x;
              c !== n || (l !== 0 && c.nodeType !== 3) || (s = o + l),
                c !== i || (r !== 0 && c.nodeType !== 3) || (u = o + r),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (x = c.firstChild) !== null;

            )
              (h = c), (c = x);
            for (;;) {
              if (c === e) break t;
              if (
                (h === n && ++a === l && (s = o),
                h === i && ++d === r && (u = o),
                (x = c.nextSibling) !== null)
              )
                break;
              (c = h), (h = c.parentNode);
            }
            c = x;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ro = { focusedElem: e, selectionRange: n }, al = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    k = y.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Fe(t.type, g),
                      k
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (S) {
          Q(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (y = Uu), (Uu = !1), y;
}
function Gn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && xo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Bl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function So(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function df(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), df(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[He], delete t[or], delete t[oo], delete t[Zp], delete t[bp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function pf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || pf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Eo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = dl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Eo(e, t, n), e = e.sibling; e !== null; ) Eo(e, t, n), (e = e.sibling);
}
function ko(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ko(e, t, n), e = e.sibling; e !== null; ) ko(e, t, n), (e = e.sibling);
}
var re = null,
  Ie = !1;
function lt(e, t, n) {
  for (n = n.child; n !== null; ) mf(e, t, n), (n = n.sibling);
}
function mf(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(zl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || ln(n, t);
    case 6:
      var r = re,
        l = Ie;
      (re = null),
        lt(e, t, n),
        (re = r),
        (Ie = l),
        re !== null &&
          (Ie
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        (Ie
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? wi(e.parentNode, n)
              : e.nodeType === 1 && wi(e, n),
            tr(e))
          : wi(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (l = Ie),
        (re = n.stateNode.containerInfo),
        (Ie = !0),
        lt(e, t, n),
        (re = r),
        (Ie = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && xo(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      lt(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (ln(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Q(n, t, s);
        }
      lt(e, t, n);
      break;
    case 21:
      lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), lt(e, t, n), (ue = r))
        : lt(e, t, n);
      break;
    default:
      lt(e, t, n);
  }
}
function Bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hm()),
      t.forEach(function (r) {
        var l = Nm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (re = s.stateNode), (Ie = !1);
              break e;
            case 3:
              (re = s.stateNode.containerInfo), (Ie = !0);
              break e;
            case 4:
              (re = s.stateNode.containerInfo), (Ie = !0);
              break e;
          }
          s = s.return;
        }
        if (re === null) throw Error(E(160));
        mf(i, o, l), (re = null), (Ie = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (a) {
        Q(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) hf(t, e), (t = t.sibling);
}
function hf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), Be(e), r & 4)) {
        try {
          Gn(3, e, e.return), Bl(3, e);
        } catch (g) {
          Q(e, e.return, g);
        }
        try {
          Gn(5, e, e.return);
        } catch (g) {
          Q(e, e.return, g);
        }
      }
      break;
    case 1:
      Le(t, e), Be(e), r & 512 && n !== null && ln(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        Be(e),
        r & 512 && n !== null && ln(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Yn(l, "");
        } catch (g) {
          Q(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Ia(l, i),
              Ki(s, o);
            var a = Ki(s, i);
            for (o = 0; o < u.length; o += 2) {
              var d = u[o],
                c = u[o + 1];
              d === "style"
                ? Ba(l, c)
                : d === "dangerouslySetInnerHTML"
                ? Ua(l, c)
                : d === "children"
                ? Yn(l, c)
                : Ho(l, d, c, a);
            }
            switch (s) {
              case "input":
                $i(l, i);
                break;
              case "textarea":
                Da(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? sn(l, !!i.multiple, x, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? sn(l, !!i.multiple, i.defaultValue, !0)
                      : sn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[or] = i;
          } catch (g) {
            Q(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Le(t, e), Be(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (g) {
          Q(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), Be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          tr(t.containerInfo);
        } catch (g) {
          Q(e, e.return, g);
        }
      break;
    case 4:
      Le(t, e), Be(e);
      break;
    case 13:
      Le(t, e),
        Be(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ss = J())),
        r & 4 && Bu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (a = ue) || d), Le(t, e), (ue = a)) : Le(t, e),
        Be(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !d && e.mode & 1)
        )
          for (_ = e, d = e.child; d !== null; ) {
            for (c = _ = d; _ !== null; ) {
              switch (((h = _), (x = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gn(4, h, h.return);
                  break;
                case 1:
                  ln(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      Q(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ln(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Hu(c);
                    continue;
                  }
              }
              x !== null ? ((x.return = h), (_ = x)) : Hu(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (l = c.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = c.stateNode),
                      (u = c.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Ma("display", o)));
              } catch (g) {
                Q(e, e.return, g);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = a ? "" : c.memoizedProps;
              } catch (g) {
                Q(e, e.return, g);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), Be(e), r & 4 && Bu(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), Be(e);
  }
}
function Be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (pf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Yn(l, ""), (r.flags &= -33));
          var i = Mu(e);
          ko(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = Mu(e);
          Eo(e, s, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (u) {
      Q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ym(e, t, n) {
  (_ = e), vf(e);
}
function vf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Br;
      if (!o) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || ue;
        s = Br;
        var a = ue;
        if (((Br = o), (ue = u) && !a))
          for (_ = l; _ !== null; )
            (o = _),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Wu(l)
                : u !== null
                ? ((u.return = o), (_ = u))
                : Wu(l);
        for (; i !== null; ) (_ = i), vf(i), (i = i.sibling);
        (_ = l), (Br = s), (ue = a);
      }
      $u(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (_ = i)) : $u(e);
  }
}
function $u(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || Bl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Cu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Cu(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var d = a.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && tr(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        ue || (t.flags & 512 && So(t));
      } catch (h) {
        Q(t, t.return, h);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Hu(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Wu(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bl(4, t);
          } catch (u) {
            Q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Q(t, l, u);
            }
          }
          var i = t.return;
          try {
            So(t);
          } catch (u) {
            Q(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            So(t);
          } catch (u) {
            Q(t, o, u);
          }
      }
    } catch (u) {
      Q(t, t.return, u);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (_ = s);
      break;
    }
    _ = t.return;
  }
}
var gm = Math.ceil,
  kl = rt.ReactCurrentDispatcher,
  ws = rt.ReactCurrentOwner,
  je = rt.ReactCurrentBatchConfig,
  D = 0,
  ne = null,
  q = null,
  le = 0,
  we = 0,
  on = Nt(0),
  b = 0,
  dr = null,
  Bt = 0,
  $l = 0,
  xs = 0,
  Jn = null,
  me = null,
  Ss = 0,
  wn = 1 / 0,
  Ge = null,
  Cl = !1,
  Co = null,
  gt = null,
  $r = !1,
  ft = null,
  Nl = 0,
  qn = 0,
  No = null,
  Zr = -1,
  br = 0;
function fe() {
  return D & 6 ? J() : Zr !== -1 ? Zr : (Zr = J());
}
function wt(e) {
  return e.mode & 1
    ? D & 2 && le !== 0
      ? le & -le
      : tm.transition !== null
      ? (br === 0 && (br = Za()), br)
      : ((e = A),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ic(e.type))),
        e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < qn) throw ((qn = 0), (No = null), Error(E(185)));
  yr(e, n, r),
    (!(D & 2) || e !== ne) &&
      (e === ne && (!(D & 2) && ($l |= n), b === 4 && at(e, le)),
      ge(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((wn = J() + 500), Al && _t()));
}
function ge(e, t) {
  var n = e.callbackNode;
  tp(e, t);
  var r = ul(e, e === ne ? le : 0);
  if (r === 0)
    n !== null && Zs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Zs(n), t === 1))
      e.tag === 0 ? em(Vu.bind(null, e)) : Cc(Vu.bind(null, e)),
        Xp(function () {
          !(D & 6) && _t();
        }),
        (n = null);
    else {
      switch (ba(r)) {
        case 1:
          n = Go;
          break;
        case 4:
          n = Xa;
          break;
        case 16:
          n = sl;
          break;
        case 536870912:
          n = Ya;
          break;
        default:
          n = sl;
      }
      n = Cf(n, yf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function yf(e, t) {
  if (((Zr = -1), (br = 0), D & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (dn() && e.callbackNode !== n) return null;
  var r = ul(e, e === ne ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = _l(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var i = wf();
    (ne !== e || le !== t) && ((Ge = null), (wn = J() + 500), It(e, t));
    do
      try {
        Sm();
        break;
      } catch (s) {
        gf(e, s);
      }
    while (!0);
    os(),
      (kl.current = i),
      (D = l),
      q !== null ? (t = 0) : ((ne = null), (le = 0), (t = b));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Yi(e)), l !== 0 && ((r = l), (t = _o(e, l)))), t === 1)
    )
      throw ((n = dr), It(e, 0), at(e, r), ge(e, J()), n);
    if (t === 6) at(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !wm(l) &&
          ((t = _l(e, r)),
          t === 2 && ((i = Yi(e)), i !== 0 && ((r = i), (t = _o(e, i)))),
          t === 1))
      )
        throw ((n = dr), It(e, 0), at(e, r), ge(e, J()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Tt(e, me, Ge);
          break;
        case 3:
          if (
            (at(e, r), (r & 130023424) === r && ((t = Ss + 500 - J()), 10 < t))
          ) {
            if (ul(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = io(Tt.bind(null, e, me, Ge), t);
            break;
          }
          Tt(e, me, Ge);
          break;
        case 4:
          if ((at(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ae(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * gm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = io(Tt.bind(null, e, me, Ge), r);
            break;
          }
          Tt(e, me, Ge);
          break;
        case 5:
          Tt(e, me, Ge);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return ge(e, J()), e.callbackNode === n ? yf.bind(null, e) : null;
}
function _o(e, t) {
  var n = Jn;
  return (
    e.current.memoizedState.isDehydrated && (It(e, t).flags |= 256),
    (e = _l(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && Po(t)),
    e
  );
}
function Po(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function wm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function at(e, t) {
  for (
    t &= ~xs,
      t &= ~$l,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ae(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Vu(e) {
  if (D & 6) throw Error(E(327));
  dn();
  var t = ul(e, 0);
  if (!(t & 1)) return ge(e, J()), null;
  var n = _l(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yi(e);
    r !== 0 && ((t = r), (n = _o(e, r)));
  }
  if (n === 1) throw ((n = dr), It(e, 0), at(e, t), ge(e, J()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Tt(e, me, Ge),
    ge(e, J()),
    null
  );
}
function Es(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((wn = J() + 500), Al && _t());
  }
}
function $t(e) {
  ft !== null && ft.tag === 0 && !(D & 6) && dn();
  var t = D;
  D |= 1;
  var n = je.transition,
    r = A;
  try {
    if (((je.transition = null), (A = 1), e)) return e();
  } finally {
    (A = r), (je.transition = n), (D = t), !(D & 6) && _t();
  }
}
function ks() {
  (we = on.current), B(on);
}
function It(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), qp(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((rs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && pl();
          break;
        case 3:
          yn(), B(ve), B(ae), ds();
          break;
        case 5:
          fs(r);
          break;
        case 4:
          yn();
          break;
        case 13:
          B(H);
          break;
        case 19:
          B(H);
          break;
        case 10:
          ss(r.type._context);
          break;
        case 22:
        case 23:
          ks();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (q = e = xt(e.current, null)),
    (le = we = t),
    (b = 0),
    (dr = null),
    (xs = $l = Bt = 0),
    (me = Jn = null),
    Lt !== null)
  ) {
    for (t = 0; t < Lt.length; t++)
      if (((n = Lt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Lt = null;
  }
  return e;
}
function gf(e, t) {
  do {
    var n = q;
    try {
      if ((os(), (qr.current = El), Sl)) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Sl = !1;
      }
      if (
        ((Mt = 0),
        (te = Z = W = null),
        (Kn = !1),
        (ar = 0),
        (ws.current = null),
        n === null || n.return === null)
      ) {
        (b = 1), (dr = t), (q = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          s = n,
          u = t;
        if (
          ((t = le),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            d = s,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var x = Ou(o);
          if (x !== null) {
            (x.flags &= -257),
              zu(x, o, s, i, t),
              x.mode & 1 && Tu(i, a, t),
              (t = x),
              (u = a);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Tu(i, a, t), Cs();
              break e;
            }
            u = Error(E(426));
          }
        } else if ($ && s.mode & 1) {
          var k = Ou(o);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              zu(k, o, s, i, t),
              ls(gn(u, s));
            break e;
          }
        }
        (i = u = gn(u, s)),
          b !== 4 && (b = 2),
          Jn === null ? (Jn = [i]) : Jn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = ef(i, u, t);
              ku(i, p);
              break e;
            case 1:
              s = u;
              var f = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (gt === null || !gt.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = tf(i, s, t);
                ku(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Sf(n);
    } catch (C) {
      (t = C), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function wf() {
  var e = kl.current;
  return (kl.current = El), e === null ? El : e;
}
function Cs() {
  (b === 0 || b === 3 || b === 2) && (b = 4),
    ne === null || (!(Bt & 268435455) && !($l & 268435455)) || at(ne, le);
}
function _l(e, t) {
  var n = D;
  D |= 2;
  var r = wf();
  (ne !== e || le !== t) && ((Ge = null), It(e, t));
  do
    try {
      xm();
      break;
    } catch (l) {
      gf(e, l);
    }
  while (!0);
  if ((os(), (D = n), (kl.current = r), q !== null)) throw Error(E(261));
  return (ne = null), (le = 0), b;
}
function xm() {
  for (; q !== null; ) xf(q);
}
function Sm() {
  for (; q !== null && !Kd(); ) xf(q);
}
function xf(e) {
  var t = kf(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sf(e) : (q = t),
    (ws.current = null);
}
function Sf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = mm(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (b = 6), (q = null);
        return;
      }
    } else if (((n = pm(n, t, we)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  b === 0 && (b = 5);
}
function Tt(e, t, n) {
  var r = A,
    l = je.transition;
  try {
    (je.transition = null), (A = 1), Em(e, t, n, r);
  } finally {
    (je.transition = l), (A = r);
  }
  return null;
}
function Em(e, t, n, r) {
  do dn();
  while (ft !== null);
  if (D & 6) throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (np(e, i),
    e === ne && ((q = ne = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      $r ||
      (($r = !0),
      Cf(sl, function () {
        return dn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = je.transition), (je.transition = null);
    var o = A;
    A = 1;
    var s = D;
    (D |= 4),
      (ws.current = null),
      vm(e, n),
      hf(n, e),
      Hp(ro),
      (al = !!no),
      (ro = no = null),
      (e.current = n),
      ym(n),
      Gd(),
      (D = s),
      (A = o),
      (je.transition = i);
  } else e.current = n;
  if (
    ($r && (($r = !1), (ft = e), (Nl = l)),
    (i = e.pendingLanes),
    i === 0 && (gt = null),
    Xd(n.stateNode),
    ge(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Cl) throw ((Cl = !1), (e = Co), (Co = null), e);
  return (
    Nl & 1 && e.tag !== 0 && dn(),
    (i = e.pendingLanes),
    i & 1 ? (e === No ? qn++ : ((qn = 0), (No = e))) : (qn = 0),
    _t(),
    null
  );
}
function dn() {
  if (ft !== null) {
    var e = ba(Nl),
      t = je.transition,
      n = A;
    try {
      if (((je.transition = null), (A = 16 > e ? 16 : e), ft === null))
        var r = !1;
      else {
        if (((e = ft), (ft = null), (Nl = 0), D & 6)) throw Error(E(331));
        var l = D;
        for (D |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            o = i.child;
          if (_.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (_ = a; _ !== null; ) {
                  var d = _;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gn(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (_ = c);
                  else
                    for (; _ !== null; ) {
                      d = _;
                      var h = d.sibling,
                        x = d.return;
                      if ((df(d), d === a)) {
                        _ = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = x), (_ = h);
                        break;
                      }
                      _ = x;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var k = g.sibling;
                    (g.sibling = null), (g = k);
                  } while (g !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (_ = o);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gn(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (_ = p);
                break e;
              }
              _ = i.return;
            }
        }
        var f = e.current;
        for (_ = f; _ !== null; ) {
          o = _;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (_ = m);
          else
            e: for (o = f; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bl(9, s);
                  }
                } catch (C) {
                  Q(s, s.return, C);
                }
              if (s === o) {
                _ = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (_ = S);
                break e;
              }
              _ = s.return;
            }
        }
        if (
          ((D = l), _t(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        )
          try {
            Ve.onPostCommitFiberRoot(zl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (A = n), (je.transition = t);
    }
  }
  return !1;
}
function Qu(e, t, n) {
  (t = gn(n, t)),
    (t = ef(e, t, 1)),
    (e = yt(e, t, 1)),
    (t = fe()),
    e !== null && (yr(e, 1, t), ge(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) Qu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (gt === null || !gt.has(r)))
        ) {
          (e = gn(n, e)),
            (e = tf(t, e, 1)),
            (t = yt(t, e, 1)),
            (e = fe()),
            t !== null && (yr(t, 1, e), ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function km(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (le & n) === n &&
      (b === 4 || (b === 3 && (le & 130023424) === le && 500 > J() - Ss)
        ? It(e, 0)
        : (xs |= n)),
    ge(e, t);
}
function Ef(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Or), (Or <<= 1), !(Or & 130023424) && (Or = 4194304))
      : (t = 1));
  var n = fe();
  (e = tt(e, t)), e !== null && (yr(e, t, n), ge(e, n));
}
function Cm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ef(e, n);
}
function Nm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Ef(e, n);
}
var kf;
kf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), dm(e, t, n);
      he = !!(e.flags & 131072);
    }
  else (he = !1), $ && t.flags & 1048576 && Nc(t, vl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Yr(e, t), (e = t.pendingProps);
      var l = mn(t, ae.current);
      fn(t, n), (l = ms(null, t, r, e, l, n));
      var i = hs();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((i = !0), ml(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            as(t),
            (l.updater = Ul),
            (t.stateNode = l),
            (l._reactInternals = t),
            po(t, r, e, n),
            (t = vo(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && ns(t), ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Yr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Pm(r)),
          (e = Fe(r, e)),
          l)
        ) {
          case 0:
            t = ho(null, t, r, e, n);
            break e;
          case 1:
            t = Iu(null, t, r, e, n);
            break e;
          case 11:
            t = Lu(null, t, r, e, n);
            break e;
          case 14:
            t = Fu(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        ho(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Iu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((of(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Rc(e, t),
          wl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = gn(Error(E(423)), t)), (t = Du(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = gn(Error(E(424)), t)), (t = Du(e, t, r, n, l));
            break e;
          } else
            for (
              xe = vt(t.stateNode.containerInfo.firstChild),
                Se = t,
                $ = !0,
                De = null,
                n = Lc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((hn(), r === l)) {
            t = nt(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Fc(t),
        e === null && ao(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        lo(r, l) ? (o = null) : i !== null && lo(r, i) && (t.flags |= 32),
        lf(e, t),
        ce(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && ao(t), null;
    case 13:
      return sf(e, t, n);
    case 4:
      return (
        cs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Lu(e, t, r, l, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          U(yl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Me(i.value, o)) {
            if (i.children === l.children && !ve.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Ye(-1, n & -n)), (u.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var d = a.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (a.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      co(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(E(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  co(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        fn(t, n),
        (l = Te(l)),
        (r = r(l)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Fe(r, t.pendingProps)),
        (l = Fe(r.type, l)),
        Fu(e, t, r, l, n)
      );
    case 15:
      return nf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Yr(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), ml(t)) : (e = !1),
        fn(t, n),
        Oc(t, r, l),
        po(t, r, l, n),
        vo(null, t, r, !0, e, n)
      );
    case 19:
      return uf(e, t, n);
    case 22:
      return rf(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Cf(e, t) {
  return qa(e, t);
}
function _m(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Pe(e, t, n, r) {
  return new _m(e, t, n, r);
}
function Ns(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Pm(e) {
  if (typeof e == "function") return Ns(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vo)) return 11;
    if (e === Qo) return 14;
  }
  return 2;
}
function xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function el(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ns(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case qt:
        return Dt(n.children, l, i, t);
      case Wo:
        (o = 8), (l |= 8);
        break;
      case Di:
        return (
          (e = Pe(12, n, t, l | 2)), (e.elementType = Di), (e.lanes = i), e
        );
      case Ai:
        return (e = Pe(13, n, t, l)), (e.elementType = Ai), (e.lanes = i), e;
      case Ui:
        return (e = Pe(19, n, t, l)), (e.elementType = Ui), (e.lanes = i), e;
      case za:
        return Hl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ta:
              o = 10;
              break e;
            case Oa:
              o = 9;
              break e;
            case Vo:
              o = 11;
              break e;
            case Qo:
              o = 14;
              break e;
            case ot:
              (o = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Pe(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Dt(e, t, n, r) {
  return (e = Pe(7, e, r, t)), (e.lanes = n), e;
}
function Hl(e, t, n, r) {
  return (
    (e = Pe(22, e, r, t)),
    (e.elementType = za),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Pi(e, t, n) {
  return (e = Pe(6, e, null, t)), (e.lanes = n), e;
}
function ji(e, t, n) {
  return (
    (t = Pe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ui(0)),
    (this.expirationTimes = ui(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ui(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function _s(e, t, n, r, l, i, o, s, u) {
  return (
    (e = new jm(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Pe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    as(i),
    e
  );
}
function Rm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Jt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Nf(e) {
  if (!e) return kt;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return kc(e, n, t);
  }
  return t;
}
function _f(e, t, n, r, l, i, o, s, u) {
  return (
    (e = _s(n, r, !0, e, l, i, o, s, u)),
    (e.context = Nf(null)),
    (n = e.current),
    (r = fe()),
    (l = wt(n)),
    (i = Ye(r, l)),
    (i.callback = t ?? null),
    yt(n, i, l),
    (e.current.lanes = l),
    yr(e, l, r),
    ge(e, r),
    e
  );
}
function Wl(e, t, n, r) {
  var l = t.current,
    i = fe(),
    o = wt(l);
  return (
    (n = Nf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ye(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = yt(l, t, o)),
    e !== null && (Ue(e, l, o, i), Jr(e, l, o)),
    o
  );
}
function Pl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ku(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ps(e, t) {
  Ku(e, t), (e = e.alternate) && Ku(e, t);
}
function Tm() {
  return null;
}
var Pf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function js(e) {
  this._internalRoot = e;
}
Vl.prototype.render = js.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Wl(e, t, null, null);
};
Vl.prototype.unmount = js.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $t(function () {
      Wl(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function Vl(e) {
  this._internalRoot = e;
}
Vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = nc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
    ut.splice(n, 0, e), n === 0 && lc(e);
  }
};
function Rs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ql(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Gu() {}
function Om(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = Pl(o);
        i.call(a);
      };
    }
    var o = _f(t, r, e, 0, null, !1, !1, "", Gu);
    return (
      (e._reactRootContainer = o),
      (e[et] = o.current),
      lr(e.nodeType === 8 ? e.parentNode : e),
      $t(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = Pl(u);
      s.call(a);
    };
  }
  var u = _s(e, 0, !1, null, null, !1, !1, "", Gu);
  return (
    (e._reactRootContainer = u),
    (e[et] = u.current),
    lr(e.nodeType === 8 ? e.parentNode : e),
    $t(function () {
      Wl(t, u, n, r);
    }),
    u
  );
}
function Kl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = Pl(o);
        s.call(u);
      };
    }
    Wl(t, o, e, l);
  } else o = Om(n, t, e, l, r);
  return Pl(o);
}
ec = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 &&
          (Jo(t, n | 1), ge(t, J()), !(D & 6) && ((wn = J() + 500), _t()));
      }
      break;
    case 13:
      $t(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var l = fe();
          Ue(r, e, 1, l);
        }
      }),
        Ps(e, 1);
  }
};
qo = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = fe();
      Ue(t, e, 134217728, n);
    }
    Ps(e, 134217728);
  }
};
tc = function (e) {
  if (e.tag === 13) {
    var t = wt(e),
      n = tt(e, t);
    if (n !== null) {
      var r = fe();
      Ue(n, e, t, r);
    }
    Ps(e, t);
  }
};
nc = function () {
  return A;
};
rc = function (e, t) {
  var n = A;
  try {
    return (A = e), t();
  } finally {
    A = n;
  }
};
Ji = function (e, t, n) {
  switch (t) {
    case "input":
      if (($i(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Dl(r);
            if (!l) throw Error(E(90));
            Fa(r), $i(r, l);
          }
        }
      }
      break;
    case "textarea":
      Da(e, n);
      break;
    case "select":
      (t = n.value), t != null && sn(e, !!n.multiple, t, !1);
  }
};
Wa = Es;
Va = $t;
var zm = { usingClientEntryPoint: !1, Events: [wr, bt, Dl, $a, Ha, Es] },
  In = {
    findFiberByHostInstance: zt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Lm = {
    bundleType: In.bundleType,
    version: In.version,
    rendererPackageName: In.rendererPackageName,
    rendererConfig: In.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ga(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: In.findFiberByHostInstance || Tm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hr.isDisabled && Hr.supportsFiber)
    try {
      (zl = Hr.inject(Lm)), (Ve = Hr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zm;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rs(t)) throw Error(E(200));
  return Rm(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!Rs(e)) throw Error(E(299));
  var n = !1,
    r = "",
    l = Pf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = _s(e, 1, !1, null, null, n, !1, r, l)),
    (e[et] = t.current),
    lr(e.nodeType === 8 ? e.parentNode : e),
    new js(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = Ga(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return $t(e);
};
ke.hydrate = function (e, t, n) {
  if (!Ql(t)) throw Error(E(200));
  return Kl(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!Rs(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Pf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = _f(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[et] = t.current),
    lr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Vl(t);
};
ke.render = function (e, t, n) {
  if (!Ql(t)) throw Error(E(200));
  return Kl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!Ql(e)) throw Error(E(40));
  return e._reactRootContainer
    ? ($t(function () {
        Kl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Es;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ql(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Kl(e, t, n, !1, r);
};
ke.version = "18.2.0-next-9e3b772b8-20220608";
function jf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jf);
    } catch (e) {
      console.error(e);
    }
}
jf(), (Na.exports = ke);
var Fm = Na.exports,
  Ju = Fm;
(Fi.createRoot = Ju.createRoot), (Fi.hydrateRoot = Ju.hydrateRoot);
/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pr() {
  return (
    (pr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pr.apply(this, arguments)
  );
}
var dt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(dt || (dt = {}));
const qu = "popstate";
function Im(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: s } = r.location;
    return jo(
      "",
      { pathname: i, search: o, hash: s },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : jl(l);
  }
  return Am(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ts(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Dm() {
  return Math.random().toString(36).substr(2, 8);
}
function Xu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function jo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    pr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Cn(t) : t,
      { state: n, key: (t && t.key) || r || Dm() }
    )
  );
}
function jl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Cn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Am(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    s = dt.Pop,
    u = null,
    a = d();
  a == null && ((a = 0), o.replaceState(pr({}, o.state, { idx: a }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function c() {
    s = dt.Pop;
    let k = d(),
      p = k == null ? null : k - a;
    (a = k), u && u({ action: s, location: g.location, delta: p });
  }
  function h(k, p) {
    s = dt.Push;
    let f = jo(g.location, k, p);
    n && n(f, k), (a = d() + 1);
    let m = Xu(f, a),
      S = g.createHref(f);
    try {
      o.pushState(m, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      l.location.assign(S);
    }
    i && u && u({ action: s, location: g.location, delta: 1 });
  }
  function x(k, p) {
    s = dt.Replace;
    let f = jo(g.location, k, p);
    n && n(f, k), (a = d());
    let m = Xu(f, a),
      S = g.createHref(f);
    o.replaceState(m, "", S),
      i && u && u({ action: s, location: g.location, delta: 0 });
  }
  function y(k) {
    let p = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof k == "string" ? k : jl(k);
    return (
      X(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, p)
    );
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(l, o);
    },
    listen(k) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(qu, c),
        (u = k),
        () => {
          l.removeEventListener(qu, c), (u = null);
        }
      );
    },
    createHref(k) {
      return t(l, k);
    },
    createURL: y,
    encodeLocation(k) {
      let p = y(k);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: h,
    replace: x,
    go(k) {
      return o.go(k);
    },
  };
  return g;
}
var Yu;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Yu || (Yu = {}));
function Um(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Cn(t) : t,
    l = Os(r.pathname || "/", n);
  if (l == null) return null;
  let i = Rf(e);
  Mm(i);
  let o = null;
  for (let s = 0; o == null && s < i.length; ++s) o = Jm(i[s], Ym(l));
  return o;
}
function Rf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, s) => {
    let u = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (X(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let a = St([r, u.relativePath]),
      d = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (X(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Rf(i.children, t, d, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: Km(a, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, o) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) l(i, o);
      else for (let u of Tf(i.path)) l(i, o, u);
    }),
    t
  );
}
function Tf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Tf(r.join("/")),
    s = [];
  return (
    s.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
    l && s.push(...o),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Mm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Gm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Bm = /^:\w+$/,
  $m = 3,
  Hm = 2,
  Wm = 1,
  Vm = 10,
  Qm = -2,
  Zu = (e) => e === "*";
function Km(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Zu) && (r += Qm),
    t && (r += Hm),
    n
      .filter((l) => !Zu(l))
      .reduce((l, i) => l + (Bm.test(i) ? $m : i === "" ? Wm : Vm), r)
  );
}
function Gm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Jm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let s = n[o],
      u = o === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      d = qm(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        a
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let c = s.route;
    i.push({
      params: r,
      pathname: St([l, d.pathname]),
      pathnameBase: nh(St([l, d.pathnameBase])),
      route: c,
    }),
      d.pathnameBase !== "/" && (l = St([l, d.pathnameBase]));
  }
  return i;
}
function qm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Xm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    s = l.slice(1);
  return {
    params: r.reduce((a, d, c) => {
      let { paramName: h, isOptional: x } = d;
      if (h === "*") {
        let g = s[c] || "";
        o = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const y = s[c];
      return x && !y ? (a[h] = void 0) : (a[h] = Zm(y || "", h)), a;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Xm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ts(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (o, s, u) => (
            r.push({ paramName: s, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Ym(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Ts(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Zm(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Ts(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Os(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function bm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Cn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : eh(n, t)) : t,
    search: rh(r),
    hash: lh(l),
  };
}
function eh(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ri(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function th(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Of(e, t) {
  let n = th(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function zf(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Cn(e))
    : ((l = pr({}, e)),
      X(
        !l.pathname || !l.pathname.includes("?"),
        Ri("?", "pathname", "search", l)
      ),
      X(
        !l.pathname || !l.pathname.includes("#"),
        Ri("#", "pathname", "hash", l)
      ),
      X(!l.search || !l.search.includes("#"), Ri("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    s;
  if (o == null) s = n;
  else {
    let c = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (c -= 1);
      l.pathname = h.join("/");
    }
    s = c >= 0 ? t[c] : "/";
  }
  let u = bm(l, s),
    a = o && o !== "/" && o.endsWith("/"),
    d = (i || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (a || d) && (u.pathname += "/"), u;
}
const St = (e) => e.join("/").replace(/\/\/+/g, "/"),
  nh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  rh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  lh = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function ih(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Lf = ["post", "put", "patch", "delete"];
new Set(Lf);
const oh = ["get", ...Lf];
new Set(oh);
/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mr() {
  return (
    (mr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mr.apply(this, arguments)
  );
}
const zs = N.createContext(null),
  sh = N.createContext(null),
  Vt = N.createContext(null),
  Gl = N.createContext(null),
  Qt = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ff = N.createContext(null);
function uh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Sr() || X(!1);
  let { basename: r, navigator: l } = N.useContext(Vt),
    { hash: i, pathname: o, search: s } = Df(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : St([r, o])),
    l.createHref({ pathname: u, search: s, hash: i })
  );
}
function Sr() {
  return N.useContext(Gl) != null;
}
function Jl() {
  return Sr() || X(!1), N.useContext(Gl).location;
}
function If(e) {
  N.useContext(Vt).static || N.useLayoutEffect(e);
}
function ah() {
  let { isDataRoute: e } = N.useContext(Qt);
  return e ? Eh() : ch();
}
function ch() {
  Sr() || X(!1);
  let e = N.useContext(zs),
    { basename: t, future: n, navigator: r } = N.useContext(Vt),
    { matches: l } = N.useContext(Qt),
    { pathname: i } = Jl(),
    o = JSON.stringify(Of(l, n.v7_relativeSplatPath)),
    s = N.useRef(!1);
  return (
    If(() => {
      s.current = !0;
    }),
    N.useCallback(
      function (a, d) {
        if ((d === void 0 && (d = {}), !s.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let c = zf(a, JSON.parse(o), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : St([t, c.pathname])),
          (d.replace ? r.replace : r.push)(c, d.state, d);
      },
      [t, r, o, i, e]
    )
  );
}
function Df(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = N.useContext(Vt),
    { matches: l } = N.useContext(Qt),
    { pathname: i } = Jl(),
    o = JSON.stringify(Of(l, r.v7_relativeSplatPath));
  return N.useMemo(() => zf(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function fh(e, t) {
  return dh(e, t);
}
function dh(e, t, n, r) {
  Sr() || X(!1);
  let { navigator: l } = N.useContext(Vt),
    { matches: i } = N.useContext(Qt),
    o = i[i.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Jl(),
    d;
  if (t) {
    var c;
    let k = typeof t == "string" ? Cn(t) : t;
    u === "/" || ((c = k.pathname) != null && c.startsWith(u)) || X(!1),
      (d = k);
  } else d = a;
  let h = d.pathname || "/",
    x = u === "/" ? h : h.slice(u.length) || "/",
    y = Um(e, { pathname: x }),
    g = yh(
      y &&
        y.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, s, k.params),
            pathname: St([
              u,
              l.encodeLocation
                ? l.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? u
                : St([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && g
    ? N.createElement(
        Gl.Provider,
        {
          value: {
            location: mr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: dt.Pop,
          },
        },
        g
      )
    : g;
}
function ph() {
  let e = Sh(),
    t = ih(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: l }, n) : null,
    null
  );
}
const mh = N.createElement(ph, null);
class hh extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          Qt.Provider,
          { value: this.props.routeContext },
          N.createElement(Ff.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function vh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = N.useContext(zs);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(Qt.Provider, { value: t }, r)
  );
}
function yh(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    s = (l = n) == null ? void 0 : l.errors;
  if (s != null) {
    let d = o.findIndex(
      (c) => c.route.id && (s == null ? void 0 : s[c.route.id])
    );
    d >= 0 || X(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let u = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let c = o[d];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (a = d),
        c.route.id)
      ) {
        let { loaderData: h, errors: x } = n,
          y =
            c.route.loader &&
            h[c.route.id] === void 0 &&
            (!x || x[c.route.id] === void 0);
        if (c.route.lazy || y) {
          (u = !0), a >= 0 ? (o = o.slice(0, a + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, c, h) => {
    let x,
      y = !1,
      g = null,
      k = null;
    n &&
      ((x = s && c.route.id ? s[c.route.id] : void 0),
      (g = c.route.errorElement || mh),
      u &&
        (a < 0 && h === 0
          ? (kh("route-fallback", !1), (y = !0), (k = null))
          : a === h &&
            ((y = !0), (k = c.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, h + 1)),
      f = () => {
        let m;
        return (
          x
            ? (m = g)
            : y
            ? (m = k)
            : c.route.Component
            ? (m = N.createElement(c.route.Component, null))
            : c.route.element
            ? (m = c.route.element)
            : (m = d),
          N.createElement(vh, {
            match: c,
            routeContext: { outlet: d, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || h === 0)
      ? N.createElement(hh, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: x,
          children: f(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Af = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Af || {}),
  Rl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Rl || {});
function gh(e) {
  let t = N.useContext(zs);
  return t || X(!1), t;
}
function wh(e) {
  let t = N.useContext(sh);
  return t || X(!1), t;
}
function xh(e) {
  let t = N.useContext(Qt);
  return t || X(!1), t;
}
function Uf(e) {
  let t = xh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function Sh() {
  var e;
  let t = N.useContext(Ff),
    n = wh(Rl.UseRouteError),
    r = Uf(Rl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Eh() {
  let { router: e } = gh(Af.UseNavigateStable),
    t = Uf(Rl.UseNavigateStable),
    n = N.useRef(!1);
  return (
    If(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, mr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const bu = {};
function kh(e, t, n) {
  !t && !bu[e] && (bu[e] = !0);
}
function Ot(e) {
  X(!1);
}
function Ch(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = dt.Pop,
    navigator: i,
    static: o = !1,
    future: s,
  } = e;
  Sr() && X(!1);
  let u = t.replace(/^\/*/, "/"),
    a = N.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
        future: mr({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, i, o]
    );
  typeof r == "string" && (r = Cn(r));
  let {
      pathname: d = "/",
      search: c = "",
      hash: h = "",
      state: x = null,
      key: y = "default",
    } = r,
    g = N.useMemo(() => {
      let k = Os(d, u);
      return k == null
        ? null
        : {
            location: { pathname: k, search: c, hash: h, state: x, key: y },
            navigationType: l,
          };
    }, [u, d, c, h, x, y, l]);
  return g == null
    ? null
    : N.createElement(
        Vt.Provider,
        { value: a },
        N.createElement(Gl.Provider, { children: n, value: g })
      );
}
function Nh(e) {
  let { children: t, location: n } = e;
  return fh(Ro(t), n);
}
new Promise(() => {});
function Ro(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    N.Children.forEach(e, (r, l) => {
      if (!N.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === N.Fragment) {
        n.push.apply(n, Ro(r.props.children, i));
        return;
      }
      r.type !== Ot && X(!1), !r.props.index || !r.props.children || X(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Ro(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function To() {
  return (
    (To = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    To.apply(this, arguments)
  );
}
function _h(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Ph(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function jh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Ph(e);
}
const Rh = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Th = "startTransition",
  ea = Cd[Th];
function Oh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = N.useRef();
  i.current == null && (i.current = Im({ window: l, v5Compat: !0 }));
  let o = i.current,
    [s, u] = N.useState({ action: o.action, location: o.location }),
    { v7_startTransition: a } = r || {},
    d = N.useCallback(
      (c) => {
        a && ea ? ea(() => u(c)) : u(c);
      },
      [u, a]
    );
  return (
    N.useLayoutEffect(() => o.listen(d), [o, d]),
    N.createElement(Ch, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
      future: r,
    })
  );
}
const zh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Lh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Gt = N.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: s,
        target: u,
        to: a,
        preventScrollReset: d,
        unstable_viewTransition: c,
      } = t,
      h = _h(t, Rh),
      { basename: x } = N.useContext(Vt),
      y,
      g = !1;
    if (typeof a == "string" && Lh.test(a) && ((y = a), zh))
      try {
        let m = new URL(window.location.href),
          S = a.startsWith("//") ? new URL(m.protocol + a) : new URL(a),
          C = Os(S.pathname, x);
        S.origin === m.origin && C != null
          ? (a = C + S.search + S.hash)
          : (g = !0);
      } catch {}
    let k = uh(a, { relative: l }),
      p = Fh(a, {
        replace: o,
        state: s,
        target: u,
        preventScrollReset: d,
        relative: l,
        unstable_viewTransition: c,
      });
    function f(m) {
      r && r(m), m.defaultPrevented || p(m);
    }
    return N.createElement(
      "a",
      To({}, h, { href: y || k, onClick: g || i ? r : f, ref: n, target: u })
    );
  });
var ta;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ta || (ta = {}));
var na;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(na || (na = {}));
function Fh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    u = ah(),
    a = Jl(),
    d = Df(e, { relative: o });
  return N.useCallback(
    (c) => {
      if (jh(c, n)) {
        c.preventDefault();
        let h = r !== void 0 ? r : jl(a) === jl(d);
        u(e, {
          replace: h,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: s,
        });
      }
    },
    [a, u, d, r, l, n, e, i, o, s]
  );
}
function Ih() {
  const [e, t] = N.useState("home");
  return v.jsx("div", {
    className: " flex w-full items-center",
    children: v.jsx("nav", {
      className:
        " flex bg-blue-950 top-0 h-[60px] mb-[-60px] z-10 justify-center w-full ",
      children: v.jsxs("div", {
        className:
          " flex items-center w-full max-w-7xl text-xl justify-between px-5",
        children: [
          v.jsx("div", {
            className: "font-sans font-bold text-3xl rounded-xl p-2 ",
            children: v.jsxs(Gt, {
              to: "/",
              onClick: () => t("/"),
              className: " text-slate-50 rounded-lg p-1 ",
              children: [
                "Er",
                v.jsx("span", { className: " text-blue-300", children: "r" }),
                "y.Dev",
              ],
            }),
          }),
          v.jsxs("div", {
            className: "space-x-5",
            children: [
              v.jsx(Gt, {
                to: "/",
                onClick: () => t("/"),
                className: `${
                  e === "/"
                    ? " underline underline-offset-4 decoration-blue-300 text-blue-300"
                    : "text-slate-50 transition-all shadow-sm"
                }  hover:underline underline-offset-4 hover:text-blue-300`,
                children: "Home",
              }),
              v.jsx(Gt, {
                to: "/about",
                onClick: () => t("/about"),
                className: `${
                  e === "/about"
                    ? " underline underline-offset-4 decoration-blue-300 text-blue-300"
                    : "text-slate-50 transition-all shadow-sm"
                }  hover:underline underline-offset-4 hover:text-blue-300`,
                children: "Chi sono",
              }),
              v.jsx(Gt, {
                to: "/skills",
                onClick: () => t("/skills"),
                className: `${
                  e === "/skills"
                    ? " underline underline-offset-4 decoration-blue-300 text-blue-300"
                    : "text-slate-50 transition-all shadow-sm"
                }  hover:underline underline-offset-4 hover:text-blue-300`,
                children: "Abilità",
              }),
              v.jsx(Gt, {
                to: "/project",
                onClick: () => t("/project"),
                className: `${
                  e === "/project"
                    ? " underline underline-offset-4 decoration-blue-300 text-blue-300"
                    : "text-slate-50 transition-all shadow-sm"
                }  hover:underline underline-offset-4 hover:text-blue-300`,
                children: "Project",
              }),
              v.jsx(Gt, {
                to: "/form",
                onClick: () => t("/form"),
                className: `${
                  e === "/form"
                    ? " underline underline-offset-4 decoration-blue-300 text-blue-300"
                    : "text-slate-50 transition-all shadow-sm"
                }  hover:underline underline-offset-4 hover:text-blue-300`,
                children: "Form",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Dh() {
  return v.jsx("div", {
    className:
      "flex items-center justify-center min-h-screen bg-blue-950 text-white",
    children: v.jsx("div", {
      className: "max-w-7xl w-full px-4",
      children: v.jsxs("div", {
        className: "flex justify-between items-center h-screen",
        children: [
          v.jsxs("div", {
            className: "text-2xl font-black",
            children: [
              v.jsx("h1", {
                className: "font-thin text-base",
                children: "Benvenuto nella mia pagina Web",
              }),
              v.jsx("h2", {
                className: "text-4xl",
                children: "Ciao, Io sono Enrico Garozzo",
              }),
              v.jsx("h2", {
                className: "text-blue-300 text-4xl",
                children: "Sviluppatore Web.",
              }),
              v.jsx("h2", {
                className: "text-4xl",
                children: "Con base in Italia.",
              }),
            ],
          }),
          v.jsx("div", {
            className: "flex justify-center items-center w-64 h-64 bg-red-600",
            children: v.jsx("h1", { children: "This is a photo" }),
          }),
        ],
      }),
    }),
  });
}
function Ah() {
  return v.jsx("div", {
    className: "flex flex-col min-h-screen bg-blue-950 text-white",
    children: v.jsx("div", {
      className: "flex justify-center pt-16",
      children: v.jsx("div", {
        className: "max-w-7xl w-full px-4",
        children: v.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-20",
          children: [
            v.jsx("div", {
              className:
                "border-2 flex items-center justify-center border-emerald-600 h-[400px] md:h-auto w-full md:w-[300px] lg:w-[400px]",
            }),
            v.jsxs("div", {
              children: [
                v.jsxs("h1", {
                  className: "text-2xl font-bold mb-4",
                  children: [
                    "Qu",
                    v.jsx("span", {
                      className: " text-blue-300",
                      children: "a",
                    }),
                    "lcosa su di Me...",
                  ],
                }),
                v.jsx("p", {
                  className: " ml-4",
                  children:
                    "Con diversi anni di esperienza nel campo culinario, fermamente deciso a cambiare lavoro e fortemente motivato, studio informatica all'università di Catania, seguo diversi corsi di formazione sulla programmazione fruttando diverse piattaforme online come: Udemy, FreeCodeCamp.org, Opinno e YouTube.",
                }),
                v.jsx("div", { className: "h-1 w-full bg-blue-300 my-6" }),
                v.jsxs("div", {
                  children: [
                    v.jsxs("h2", {
                      className: "text-2xl font-bold mb-4",
                      children: [
                        "Ed",
                        v.jsx("span", {
                          className: " text-blue-300",
                          children: "u",
                        }),
                        "cazione",
                      ],
                    }),
                    v.jsxs("ul", {
                      className: "",
                      children: [
                        v.jsxs("li", {
                          className: "ml-4 list-disc",
                          children: [
                            "Laurea triennale in Informatica all'università di Catania:",
                            " ",
                            v.jsx("br", {}),
                            v.jsx("span", {
                              className: "font-light text-blue-300",
                              children: "In corso",
                            }),
                          ],
                        }),
                        v.jsxs("li", {
                          className: " list-disc ml-4",
                          children: [
                            "Corso WebDev con Opinno codice corso: ",
                            v.jsx("br", {}),
                            v.jsx("span", {
                              className: "font-extralight",
                              children: "002PROTD2370317",
                            }),
                          ],
                        }),
                        v.jsxs("li", {
                          className: " list-disc ml-4",
                          children: [
                            "Corso WebDev con FreeCodeCamp.org codice attestato: ",
                            v.jsx("br", {}),
                            v.jsx("a", {
                              className: "text-blue-300 hover:text-blue-500",
                              href: "https://www.freecodecamp.org/certification/ErryGz/responsive-web-design",
                              children: "FreeCodeCamp.org",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                v.jsx("div", { className: "h-1 w-full bg-blue-300 my-6" }),
                v.jsxs("div", {
                  children: [
                    v.jsxs("h2", {
                      className: "text-2xl font-bold mb-4",
                      children: [
                        "Es",
                        v.jsx("span", {
                          className: " text-blue-300",
                          children: "p",
                        }),
                        "erienze lavorative",
                      ],
                    }),
                    v.jsxs("ul", {
                      children: [
                        v.jsx("li", {
                          className: "mb-2 ml-4 list-disc text-xl",
                          children:
                            "Family Hotel Schloss - Capo Partita Antipasti",
                        }),
                        v.jsx("span", {
                          className: " ml-4 text-lg",
                          children:
                            "Luogo: Fieberbrunn, Austria | 11/2022 - 04/2023",
                        }),
                        v.jsx("p", {
                          className: " ml-4 my-2 text-[17px]",
                          children:
                            "Ricoprendo il ruolo di capo partita degli antipasti, sono specializzato nella gestione operativa e nel garantire elevati standard culinari, mi occupavo della preparazione e presentazione di piatti di alta qualità, collaborando con uno staff multiculturale e gestendo con efficacia diverse situazioni ad alta pressione.",
                        }),
                        v.jsx("li", {
                          className: " mb-2 ml-4 list-disc text-xl",
                          children: "Sikani Resort & SPA - Demi chef Antipasti",
                        }),
                        v.jsx("span", {
                          className: "ml-4 text-lg",
                          children:
                            "Luogo: Butera, Agrigento | 06/2022 - 10/2022",
                        }),
                        v.jsx("p", {
                          className: " ml-4 my-2 text-[17px]",
                          children:
                            "Collaborando con la brigata di cucina, ho coordinato la creazione di diverse ricette per antipasti. La gestione di situazioni ad alta pressione è diventata una parte della mia routine quotidiana, mentre l'interazione con i clienti ha contribuito a sviluppare una comprensione approfondita delle loro preferenze culinarie. Questa esperienza mi ha permesso di crescere professionalmente, offrendomi l'opportunità di eccellere in un ambiente dinamico e stimolante.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
function Uh() {
  return v.jsx("div", {
    className: "flex flex-col min-h-screen bg-blue-950 text-white",
    children: v.jsx("div", {
      className: "flex justify-center pt-16",
      children: v.jsx("div", {
        className: "max-w-7xl w-full px-4",
        children: v.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-20",
          children: [
            v.jsx("div", {
              className:
                "border-2 border-emerald-600 h-[400px] md:h-auto w-full md:w-[300px] lg:w-[400px]",
            }),
            v.jsxs("div", {
              className:
                "text-slate-100 px-5 flex flex-col justify-center w-full max-w-7xl",
              children: [
                v.jsxs("h1", {
                  className: "font-bold text-4xl mb-8",
                  children: [
                    "Le ",
                    v.jsx("span", {
                      className: "text-blue-300",
                      children: "m",
                    }),
                    "ie skills",
                  ],
                }),
                v.jsx("div", {
                  className: "my-4 h-1 w-[400px] md:w-full bg-blue-300",
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("h1", {
                      className: "mb-3 text-xl underline underline-offset-4",
                      children:
                        "Nell'arco della mia esperienza lavorativa in cucina ho sviluppato diverse skill personali, quelle principali sono:",
                    }),
                    v.jsxs("ul", {
                      className: "ms-5 py-3",
                      children: [
                        v.jsx("li", {
                          className:
                            "list-disc mb-2 font-bold text-lg text-blue-300",
                          children: "Lavoro di squadra:",
                        }),
                        v.jsx("p", {
                          className: "ms-3 mb-2",
                          children:
                            "Cosa sottovalutata in cucina ma molto importante, che ho appreso con i diversi anni di lavoro in cucina.",
                        }),
                        v.jsx("li", {
                          className:
                            "list-disc mb-2 font-bold text-lg text-blue-300",
                          children: "Organizzazione personale e del lavoro",
                        }),
                        v.jsx("p", {
                          className: "ms-3 mb-2",
                          children:
                            'In cucina si dice che "Il tempo è tiranno", quì ho imparato il significato di organizzare il lavoro in tutte le sue sfaccettature, da prima di entrare in cucina, a quando si esce per pensare già al domani.',
                        }),
                        v.jsx("li", {
                          className:
                            "list-disc mb-2 font-bold text-lg text-blue-300",
                          children: "La collaborazione con i colleghi",
                        }),
                        v.jsx("p", {
                          className: "ms-3 mb-2",
                          children:
                            "Sempre in cucina, si è in tanti e andare d'accordo con tutti non è semplice ma è molto importante. In cucina ho imparato a separare quello che sono i colleghi a lavoro dagli amici fuori dal posto di lavoro.",
                        }),
                        v.jsx("li", {
                          className:
                            "list-disc mb-2 font-bold text-lg text-blue-300",
                          children: "Controllo dello stress",
                        }),
                        v.jsx("p", {
                          className: "ms-3 mb-2",
                          children:
                            "La ristorazione, in generale, è stressante. Si lavora tanto e si riposa poco, i clienti sono quello che sono (e si sa, non si può nascondere). Come detto prima, in cucina, il tempo non basta mai per fare tutte le cose, questo porta ad essere in uno stato continuo di ansia e stress, che col tempo sono riuscito a gestire queste situazioni e a farne una skill.",
                        }),
                        v.jsx("li", {
                          className:
                            "list-disc mb-2 font-bold text-lg text-blue-300",
                          children:
                            "Ci sarebbero molte altre skills, ma vi lascio un po' di mistero per darvi la possibilità di mettermi alla prova e vedere quello che so fare in campo personale!",
                        }),
                      ],
                    }),
                  ],
                }),
                v.jsx("div", {
                  className: "my-4 h-1 w-[400px] md:w-full bg-blue-300",
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("h1", {
                      className: "mb-3 text-xl underline underline-offset-4",
                      children:
                        "Invece per quanto riguarda le skill lavorative nel campo della programmazione sono state apprese e maturate con l'università e con i vari corsi che ho seguito con l'aggiunta di qualche progetto personale, come questo portafoglio...",
                    }),
                    v.jsxs("ul", {
                      className: "ms-5 py-3",
                      children: [
                        v.jsx("li", {
                          className:
                            "list-disc mb-2 font-bold text-lg text-blue-300",
                          children: "Programmazione Web come Front End",
                        }),
                        v.jsx("p", {
                          className: "ms-3 mb-2",
                          children:
                            "Dopo aver appreso le basi di come funziona un sito, ho iniziato a studiare e seguire corsi sulle basi della programmazione web, studiando le ultime tecnologie del momento come HTML, CSS e JavaScript.",
                        }),
                        v.jsx("li", {
                          className:
                            "list-disc mb-2 font-bold text-lg text-blue-300",
                          children:
                            "Utilizzo di Framework e librerie specifiche",
                        }),
                        v.jsx("p", {
                          className: "ms-3 mb-2",
                          children:
                            "Dopo aver appreso le basi e averle padroneggiate, ho iniziato a studiare degli strumenti per facilitarmi il lavoro. Con un corso di Oppinno ho imparato a usare React, Tailwind e Node.js.",
                        }),
                        v.jsx("li", {
                          className:
                            "list-disc mb-2 font-bold text-lg text-blue-300",
                          children: "Istruzione Universitaria",
                        }),
                        v.jsx("p", {
                          className: "ms-3 mb-2",
                          children:
                            "Con l'università sto approfondendo il mondo della programmazione con tutto ciò che la comprende. Conosco anche altri linguaggi come C++, assembly e Processing.",
                        }),
                        v.jsx("li", {
                          className:
                            "list-disc mb-2 font-bold text-lg text-blue-300",
                          children: "Continuo studio e approfondimento...",
                        }),
                        v.jsx("p", {
                          className: "ms-3 mb-2",
                          children:
                            'Come è giusto che sia, "Chi si ferma è perduto". Per questo sono in continua formazione e studio delle ultime tecnologie richieste dal mercato. In questo momento sto studiando un framework chiamato Angular, molto usato nel mondo dello sviluppo web, e sto approfondendo Node.js.',
                        }),
                      ],
                    }),
                  ],
                }),
                v.jsx("div", {
                  className: "my-4 h-1 w-[400px] md:w-full bg-blue-300",
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
const Mh = "/assets/landing-7THhp8OX.png",
  Bh = "/assets/cat_facts-igm9tkpM.png",
  $h = "/assets/Sito_giochi-PuRQlagy.png";
function Hh() {
  const e = (t) => {
    window.open(t, "_blank");
  };
  return v.jsx("div", {
    className: "flex w-full min-h-screen bg-blue-950 items-center",
    children: v.jsx("div", {
      className: "w-full flex items-center justify-center",
      children: v.jsxs("div", {
        className:
          "text-slate-100 flex flex-col justify-center px-5 items-center w-full max-w-7xl mb-16",
        children: [
          v.jsx("h1", {
            className: "mb-8 mt-20 text-2xl text-slate-200",
            children: "Qualche mio progetto che potete trovare su GitHub!",
          }),
          v.jsxs("div", {
            className:
              "flex flex-col sm:flex-row items-center justify-between w-full px-5",
            children: [
              v.jsxs("div", {
                className:
                  "h-[600px] sm:w-[350px] flex flex-col items-center rounded-lg m-2 bg-blue-900 overflow-hidden hover:bg-blue-800 hover:scale-105 transition ",
                children: [
                  v.jsx("div", {
                    className: "",
                    children: v.jsx("img", {
                      src: Mh,
                      alt: "logo_card_landing",
                      className: "rounded-lg shadow-xl my-2 w-full",
                    }),
                  }),
                  v.jsxs("div", {
                    className: "p-5",
                    children: [
                      v.jsx("h1", {
                        className: "mt-5 text-xl text-blue-300",
                        children: "Un esempio di landing page personalizzata",
                      }),
                      v.jsxs("p", {
                        className: "mt-5 text-slate-200 mb-6",
                        children: [
                          "Questo è un esempio di landing page di una agenzia di viaggi, completa anche di form per le richieste, completamente responsive. ",
                          v.jsx("br", {}),
                          "Clicca il bottone per vedere il codice su GitHub.",
                        ],
                      }),
                      v.jsx("button", {
                        className:
                          "bg-blue-700 w-full p-2 rounded-xl transition-all hover:underline hover:bg-blue-600 underline-offset-4 mt-auto",
                        onClick: () =>
                          e(
                            "https://github.com/Erry002/simulazione-landing/tree/main/code"
                          ),
                        children: "Apri su GitHub",
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                className:
                  "h-[600px] sm:w-[350px] flex flex-col items-center rounded-lg m-2 bg-blue-900 overflow-hidden hover:bg-blue-800 hover:scale-105 transition ",
                children: [
                  v.jsx("div", {
                    className: " ",
                    children: v.jsx("img", {
                      src: Bh,
                      alt: "logo_card_cat_facts",
                      className: "rounded-lg shadow-xl my-2 w-full",
                    }),
                  }),
                  v.jsxs("div", {
                    className: "w-full px-5 flex flex-col justify-between",
                    children: [
                      v.jsxs("div", {
                        children: [
                          v.jsx("h1", {
                            className: "mt-5 text-xl text-blue-300",
                            children: "Piccolo progetto personale con API",
                          }),
                          v.jsxs("p", {
                            className: "mt-5 text-slate-200 mb-6",
                            children: [
                              "Questo è un esempio è composto da altri piccoli progetti personali che ho fatto, in questo mostro come utilizzare le API",
                              v.jsx("br", {}),
                              "Clicca il bottone per vedere il codice su GitHub.",
                            ],
                          }),
                        ],
                      }),
                      v.jsx("div", {
                        className: "flex justify-between mt-auto",
                        children: v.jsx("button", {
                          className:
                            "bg-blue-700 w-full p-2 rounded-xl sm:mt-7 transition-all hover:underline hover:bg-blue-600 underline-offset-4 ",
                          onClick: () =>
                            e(
                              "https://github.com/Erry002/Cartella-documentazione-corsi-WebDev/blob/main/Corso%20Opinno%20WebDev/Programma%20corso%20Opinno/Giorno_21_introduzione_react/Progetti_con_React_%2B_Vite/progetto_con_vit/doc_amo/src/EsFect.jsx"
                            ),
                          children: "Apri su GitHub",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                className:
                  "h-[600px] sm:w-[350px] flex flex-col items-center rounded-lg m-2 bg-blue-900 overflow-hidden hover:bg-blue-800 hover:scale-105 transition ",
                children: [
                  v.jsx("div", {
                    children: v.jsx("img", {
                      src: $h,
                      alt: "logo_card_games",
                      className: "rounded-lg shadow-xl my-2 w-full",
                    }),
                  }),
                  v.jsxs("div", {
                    className: "w-full px-5 flex flex-col justify-between",
                    children: [
                      v.jsxs("div", {
                        children: [
                          v.jsx("h1", {
                            className: "mt-5 text-xl text-blue-300",
                            children: "Progetto di gruppo di un sito di giochi",
                          }),
                          v.jsxs("p", {
                            className: "mt-5 text-slate-200 mb-9",
                            children: [
                              "Questo progetto rappresenta un'opera collaborativa, nel quale ho contribuito non solo alla realizzazione della pagina iniziale, ma anche alla creazione del gioco denominato 'Reaction Time'.",
                              v.jsx("br", {}),
                              "Clicca il bottone per vedere il codice su GitHub.",
                            ],
                          }),
                        ],
                      }),
                      v.jsx("div", {
                        className: "flex mt-auto",
                        children: v.jsx("button", {
                          className:
                            "bg-blue-700 w-full p-2 rounded-xl transition-all hover:underline hover:bg-blue-600 underline-offset-4 mt-[-13px]",
                          onClick: () =>
                            e(
                              "https://github.com/Erry002/Cartella-documentazione-corsi-WebDev/tree/main/Corso%20Opinno%20WebDev/Programma%20corso%20Opinno/Lavoro_gruppo_dicembre_Sito_giochi"
                            ),
                          children: "Apri su GitHub",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Mf(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Wh } = Object.prototype,
  { getPrototypeOf: Ls } = Object,
  ql = ((e) => (t) => {
    const n = Wh.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ke = (e) => ((e = e.toLowerCase()), (t) => ql(t) === e),
  Xl = (e) => (t) => typeof t === e,
  { isArray: Nn } = Array,
  hr = Xl("undefined");
function Vh(e) {
  return (
    e !== null &&
    !hr(e) &&
    e.constructor !== null &&
    !hr(e.constructor) &&
    Re(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Bf = Ke("ArrayBuffer");
function Qh(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Bf(e.buffer)),
    t
  );
}
const Kh = Xl("string"),
  Re = Xl("function"),
  $f = Xl("number"),
  Yl = (e) => e !== null && typeof e == "object",
  Gh = (e) => e === !0 || e === !1,
  tl = (e) => {
    if (ql(e) !== "object") return !1;
    const t = Ls(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Jh = Ke("Date"),
  qh = Ke("File"),
  Xh = Ke("Blob"),
  Yh = Ke("FileList"),
  Zh = (e) => Yl(e) && Re(e.pipe),
  bh = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Re(e.append) &&
          ((t = ql(e)) === "formdata" ||
            (t === "object" &&
              Re(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  e0 = Ke("URLSearchParams"),
  t0 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Er(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, l;
  if ((typeof e != "object" && (e = [e]), Nn(e)))
    for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let s;
    for (r = 0; r < o; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function Hf(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    l;
  for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
  return null;
}
const Wf =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Vf = (e) => !hr(e) && e !== Wf;
function Oo() {
  const { caseless: e } = (Vf(this) && this) || {},
    t = {},
    n = (r, l) => {
      const i = (e && Hf(t, l)) || l;
      tl(t[i]) && tl(r)
        ? (t[i] = Oo(t[i], r))
        : tl(r)
        ? (t[i] = Oo({}, r))
        : Nn(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && Er(arguments[r], n);
  return t;
}
const n0 = (e, t, n, { allOwnKeys: r } = {}) => (
    Er(
      t,
      (l, i) => {
        n && Re(l) ? (e[i] = Mf(l, n)) : (e[i] = l);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  r0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  l0 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  i0 = (e, t, n, r) => {
    let l, i, o;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), i = l.length; i-- > 0; )
        (o = l[i]), (!r || r(o, e, t)) && !s[o] && ((t[o] = e[o]), (s[o] = !0));
      e = n !== !1 && Ls(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  o0 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  s0 = (e) => {
    if (!e) return null;
    if (Nn(e)) return e;
    let t = e.length;
    if (!$f(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  u0 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ls(Uint8Array)),
  a0 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const i = l.value;
      t.call(e, i[0], i[1]);
    }
  },
  c0 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  f0 = Ke("HTMLFormElement"),
  d0 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  ra = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  p0 = Ke("RegExp"),
  Qf = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Er(n, (l, i) => {
      let o;
      (o = t(l, i, e)) !== !1 && (r[i] = o || l);
    }),
      Object.defineProperties(e, r);
  },
  m0 = (e) => {
    Qf(e, (t, n) => {
      if (Re(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Re(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  h0 = (e, t) => {
    const n = {},
      r = (l) => {
        l.forEach((i) => {
          n[i] = !0;
        });
      };
    return Nn(e) ? r(e) : r(String(e).split(t)), n;
  },
  v0 = () => {},
  y0 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ti = "abcdefghijklmnopqrstuvwxyz",
  la = "0123456789",
  Kf = { DIGIT: la, ALPHA: Ti, ALPHA_DIGIT: Ti + Ti.toUpperCase() + la },
  g0 = (e = 16, t = Kf.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function w0(e) {
  return !!(
    e &&
    Re(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const x0 = (e) => {
    const t = new Array(10),
      n = (r, l) => {
        if (Yl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[l] = r;
            const i = Nn(r) ? [] : {};
            return (
              Er(r, (o, s) => {
                const u = n(o, l + 1);
                !hr(u) && (i[s] = u);
              }),
              (t[l] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  S0 = Ke("AsyncFunction"),
  E0 = (e) => e && (Yl(e) || Re(e)) && Re(e.then) && Re(e.catch),
  w = {
    isArray: Nn,
    isArrayBuffer: Bf,
    isBuffer: Vh,
    isFormData: bh,
    isArrayBufferView: Qh,
    isString: Kh,
    isNumber: $f,
    isBoolean: Gh,
    isObject: Yl,
    isPlainObject: tl,
    isUndefined: hr,
    isDate: Jh,
    isFile: qh,
    isBlob: Xh,
    isRegExp: p0,
    isFunction: Re,
    isStream: Zh,
    isURLSearchParams: e0,
    isTypedArray: u0,
    isFileList: Yh,
    forEach: Er,
    merge: Oo,
    extend: n0,
    trim: t0,
    stripBOM: r0,
    inherits: l0,
    toFlatObject: i0,
    kindOf: ql,
    kindOfTest: Ke,
    endsWith: o0,
    toArray: s0,
    forEachEntry: a0,
    matchAll: c0,
    isHTMLForm: f0,
    hasOwnProperty: ra,
    hasOwnProp: ra,
    reduceDescriptors: Qf,
    freezeMethods: m0,
    toObjectSet: h0,
    toCamelCase: d0,
    noop: v0,
    toFiniteNumber: y0,
    findKey: Hf,
    global: Wf,
    isContextDefined: Vf,
    ALPHABET: Kf,
    generateString: g0,
    isSpecCompliantForm: w0,
    toJSONObject: x0,
    isAsyncFn: S0,
    isThenable: E0,
  };
function I(e, t, n, r, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    l && (this.response = l);
}
w.inherits(I, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: w.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Gf = I.prototype,
  Jf = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Jf[e] = { value: e };
});
Object.defineProperties(I, Jf);
Object.defineProperty(Gf, "isAxiosError", { value: !0 });
I.from = (e, t, n, r, l, i) => {
  const o = Object.create(Gf);
  return (
    w.toFlatObject(
      e,
      o,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    I.call(o, e.message, t, n, r, l),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const k0 = null;
function zo(e) {
  return w.isPlainObject(e) || w.isArray(e);
}
function qf(e) {
  return w.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ia(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, i) {
          return (l = qf(l)), !n && i ? "[" + l + "]" : l;
        })
        .join(n ? "." : "")
    : t;
}
function C0(e) {
  return w.isArray(e) && !e.some(zo);
}
const N0 = w.toFlatObject(w, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Zl(e, t, n) {
  if (!w.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = w.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, k) {
        return !w.isUndefined(k[g]);
      }
    ));
  const r = n.metaTokens,
    l = n.visitor || d,
    i = n.dots,
    o = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && w.isSpecCompliantForm(t);
  if (!w.isFunction(l)) throw new TypeError("visitor must be a function");
  function a(y) {
    if (y === null) return "";
    if (w.isDate(y)) return y.toISOString();
    if (!u && w.isBlob(y))
      throw new I("Blob is not supported. Use a Buffer instead.");
    return w.isArrayBuffer(y) || w.isTypedArray(y)
      ? u && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function d(y, g, k) {
    let p = y;
    if (y && !k && typeof y == "object") {
      if (w.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (w.isArray(y) && C0(y)) ||
        ((w.isFileList(y) || w.endsWith(g, "[]")) && (p = w.toArray(y)))
      )
        return (
          (g = qf(g)),
          p.forEach(function (m, S) {
            !(w.isUndefined(m) || m === null) &&
              t.append(
                o === !0 ? ia([g], S, i) : o === null ? g : g + "[]",
                a(m)
              );
          }),
          !1
        );
    }
    return zo(y) ? !0 : (t.append(ia(k, g, i), a(y)), !1);
  }
  const c = [],
    h = Object.assign(N0, {
      defaultVisitor: d,
      convertValue: a,
      isVisitable: zo,
    });
  function x(y, g) {
    if (!w.isUndefined(y)) {
      if (c.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      c.push(y),
        w.forEach(y, function (p, f) {
          (!(w.isUndefined(p) || p === null) &&
            l.call(t, p, w.isString(f) ? f.trim() : f, g, h)) === !0 &&
            x(p, g ? g.concat(f) : [f]);
        }),
        c.pop();
    }
  }
  if (!w.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function oa(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Fs(e, t) {
  (this._pairs = []), e && Zl(e, this, t);
}
const Xf = Fs.prototype;
Xf.append = function (t, n) {
  this._pairs.push([t, n]);
};
Xf.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, oa);
      }
    : oa;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + "=" + n(l[1]);
    }, "")
    .join("&");
};
function _0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Yf(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || _0,
    l = n && n.serialize;
  let i;
  if (
    (l
      ? (i = l(t, n))
      : (i = w.isURLSearchParams(t) ? t.toString() : new Fs(t, n).toString(r)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class sa {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    w.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Zf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  P0 = typeof URLSearchParams < "u" ? URLSearchParams : Fs,
  j0 = typeof FormData < "u" ? FormData : null,
  R0 = typeof Blob < "u" ? Blob : null,
  T0 = {
    isBrowser: !0,
    classes: { URLSearchParams: P0, FormData: j0, Blob: R0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  bf = typeof window < "u" && typeof document < "u",
  O0 = ((e) => bf && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  z0 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  L0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: bf,
        hasStandardBrowserEnv: O0,
        hasStandardBrowserWebWorkerEnv: z0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  We = { ...L0, ...T0 };
function F0(e, t) {
  return Zl(
    e,
    new We.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, l, i) {
          return We.isNode && w.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function I0(e) {
  return w
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function D0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const l = n.length;
  let i;
  for (r = 0; r < l; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function ed(e) {
  function t(n, r, l, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const s = Number.isFinite(+o),
      u = i >= n.length;
    return (
      (o = !o && w.isArray(l) ? l.length : o),
      u
        ? (w.hasOwnProp(l, o) ? (l[o] = [l[o], r]) : (l[o] = r), !s)
        : ((!l[o] || !w.isObject(l[o])) && (l[o] = []),
          t(n, r, l[o], i) && w.isArray(l[o]) && (l[o] = D0(l[o])),
          !s)
    );
  }
  if (w.isFormData(e) && w.isFunction(e.entries)) {
    const n = {};
    return (
      w.forEachEntry(e, (r, l) => {
        t(I0(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function A0(e, t, n) {
  if (w.isString(e))
    try {
      return (t || JSON.parse)(e), w.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Is = {
  transitional: Zf,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        l = r.indexOf("application/json") > -1,
        i = w.isObject(t);
      if ((i && w.isHTMLForm(t) && (t = new FormData(t)), w.isFormData(t)))
        return l ? JSON.stringify(ed(t)) : t;
      if (
        w.isArrayBuffer(t) ||
        w.isBuffer(t) ||
        w.isStream(t) ||
        w.isFile(t) ||
        w.isBlob(t)
      )
        return t;
      if (w.isArrayBufferView(t)) return t.buffer;
      if (w.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return F0(t, this.formSerializer).toString();
        if ((s = w.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Zl(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return i || l ? (n.setContentType("application/json", !1), A0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Is.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === "json";
      if (t && w.isString(t) && ((r && !this.responseType) || l)) {
        const o = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (o)
            throw s.name === "SyntaxError"
              ? I.from(s, I.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: We.classes.FormData, Blob: We.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
w.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Is.headers[e] = {};
});
const Ds = Is,
  U0 = w.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  M0 = (e) => {
    const t = {};
    let n, r, l;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (l = o.indexOf(":")),
              (n = o.substring(0, l).trim().toLowerCase()),
              (r = o.substring(l + 1).trim()),
              !(!n || (t[n] && U0[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  ua = Symbol("internals");
function Dn(e) {
  return e && String(e).trim().toLowerCase();
}
function nl(e) {
  return e === !1 || e == null ? e : w.isArray(e) ? e.map(nl) : String(e);
}
function B0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const $0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Oi(e, t, n, r, l) {
  if (w.isFunction(r)) return r.call(this, t, n);
  if ((l && (t = n), !!w.isString(t))) {
    if (w.isString(r)) return t.indexOf(r) !== -1;
    if (w.isRegExp(r)) return r.test(t);
  }
}
function H0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function W0(e, t) {
  const n = w.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (l, i, o) {
        return this[r].call(this, t, l, i, o);
      },
      configurable: !0,
    });
  });
}
class bl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const l = this;
    function i(s, u, a) {
      const d = Dn(u);
      if (!d) throw new Error("header name must be a non-empty string");
      const c = w.findKey(l, d);
      (!c || l[c] === void 0 || a === !0 || (a === void 0 && l[c] !== !1)) &&
        (l[c || u] = nl(s));
    }
    const o = (s, u) => w.forEach(s, (a, d) => i(a, d, u));
    return (
      w.isPlainObject(t) || t instanceof this.constructor
        ? o(t, n)
        : w.isString(t) && (t = t.trim()) && !$0(t)
        ? o(M0(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Dn(t)), t)) {
      const r = w.findKey(this, t);
      if (r) {
        const l = this[r];
        if (!n) return l;
        if (n === !0) return B0(l);
        if (w.isFunction(n)) return n.call(this, l, r);
        if (w.isRegExp(n)) return n.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Dn(t)), t)) {
      const r = w.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Oi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let l = !1;
    function i(o) {
      if (((o = Dn(o)), o)) {
        const s = w.findKey(r, o);
        s && (!n || Oi(r, r[s], s, n)) && (delete r[s], (l = !0));
      }
    }
    return w.isArray(t) ? t.forEach(i) : i(t), l;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      l = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Oi(this, this[i], i, t, !0)) && (delete this[i], (l = !0));
    }
    return l;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      w.forEach(this, (l, i) => {
        const o = w.findKey(r, i);
        if (o) {
          (n[o] = nl(l)), delete n[i];
          return;
        }
        const s = t ? H0(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = nl(l)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      w.forEach(this, (r, l) => {
        r != null && r !== !1 && (n[l] = t && w.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((l) => r.set(l)), r;
  }
  static accessor(t) {
    const r = (this[ua] = this[ua] = { accessors: {} }).accessors,
      l = this.prototype;
    function i(o) {
      const s = Dn(o);
      r[s] || (W0(l, o), (r[s] = !0));
    }
    return w.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
bl.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
w.reduceDescriptors(bl.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
w.freezeMethods(bl);
const Ze = bl;
function zi(e, t) {
  const n = this || Ds,
    r = t || n,
    l = Ze.from(r.headers);
  let i = r.data;
  return (
    w.forEach(e, function (s) {
      i = s.call(n, i, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    i
  );
}
function td(e) {
  return !!(e && e.__CANCEL__);
}
function kr(e, t, n) {
  I.call(this, e ?? "canceled", I.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
w.inherits(kr, I, { __CANCEL__: !0 });
function V0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new I(
          "Request failed with status code " + n.status,
          [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Q0 = We.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, l, i) {
        const o = [e + "=" + encodeURIComponent(t)];
        w.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
          w.isString(r) && o.push("path=" + r),
          w.isString(l) && o.push("domain=" + l),
          i === !0 && o.push("secure"),
          (document.cookie = o.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function K0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function G0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function nd(e, t) {
  return e && !K0(t) ? G0(e, t) : t;
}
const J0 = We.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function l(i) {
        let o = i;
        return (
          t && (n.setAttribute("href", o), (o = n.href)),
          n.setAttribute("href", o),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = l(window.location.href)),
        function (o) {
          const s = w.isString(o) ? l(o) : o;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function q0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function X0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let l = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        d = r[i];
      o || (o = a), (n[l] = u), (r[l] = a);
      let c = i,
        h = 0;
      for (; c !== l; ) (h += n[c++]), (c = c % e);
      if (((l = (l + 1) % e), l === i && (i = (i + 1) % e), a - o < t)) return;
      const x = d && a - d;
      return x ? Math.round((h * 1e3) / x) : void 0;
    }
  );
}
function aa(e, t) {
  let n = 0;
  const r = X0(50, 250);
  return (l) => {
    const i = l.loaded,
      o = l.lengthComputable ? l.total : void 0,
      s = i - n,
      u = r(s),
      a = i <= o;
    n = i;
    const d = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && o && a ? (o - i) / u : void 0,
      event: l,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const Y0 = typeof XMLHttpRequest < "u",
  Z0 =
    Y0 &&
    function (e) {
      return new Promise(function (n, r) {
        let l = e.data;
        const i = Ze.from(e.headers).normalize();
        let { responseType: o, withXSRFToken: s } = e,
          u;
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener("abort", u);
        }
        let d;
        if (w.isFormData(l)) {
          if (We.hasStandardBrowserEnv || We.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((d = i.getContentType()) !== !1) {
            const [g, ...k] = d
              ? d
                  .split(";")
                  .map((p) => p.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([g || "multipart/form-data", ...k].join("; "));
          }
        }
        let c = new XMLHttpRequest();
        if (e.auth) {
          const g = e.auth.username || "",
            k = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(g + ":" + k));
        }
        const h = nd(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Yf(h, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function x() {
          if (!c) return;
          const g = Ze.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            p = {
              data:
                !o || o === "text" || o === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: g,
              config: e,
              request: c,
            };
          V0(
            function (m) {
              n(m), a();
            },
            function (m) {
              r(m), a();
            },
            p
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = x)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(x);
              }),
          (c.onabort = function () {
            c &&
              (r(new I("Request aborted", I.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new I("Network Error", I.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let k = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const p = e.transitional || Zf;
            e.timeoutErrorMessage && (k = e.timeoutErrorMessage),
              r(
                new I(
                  k,
                  p.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          We.hasStandardBrowserEnv &&
            (s && w.isFunction(s) && (s = s(e)), s || (s !== !1 && J0(h))))
        ) {
          const g =
            e.xsrfHeaderName && e.xsrfCookieName && Q0.read(e.xsrfCookieName);
          g && i.set(e.xsrfHeaderName, g);
        }
        l === void 0 && i.setContentType(null),
          "setRequestHeader" in c &&
            w.forEach(i.toJSON(), function (k, p) {
              c.setRequestHeader(p, k);
            }),
          w.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          o && o !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", aa(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", aa(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (g) => {
              c &&
                (r(!g || g.type ? new kr(null, e, c) : g),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal &&
              (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
        const y = q0(h);
        if (y && We.protocols.indexOf(y) === -1) {
          r(new I("Unsupported protocol " + y + ":", I.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(l || null);
      });
    },
  Lo = { http: k0, xhr: Z0 };
w.forEach(Lo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ca = (e) => `- ${e}`,
  b0 = (e) => w.isFunction(e) || e === null || e === !1,
  rd = {
    getAdapter: (e) => {
      e = w.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const l = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let o;
        if (
          ((r = n),
          !b0(n) && ((r = Lo[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new I(`Unknown adapter '${o}'`);
        if (r) break;
        l[o || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(l).map(
          ([s, u]) =>
            `adapter ${s} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? i.length > 1
            ? `since :
` +
              i.map(ca).join(`
`)
            : " " + ca(i[0])
          : "as no adapter specified";
        throw new I(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Lo,
  };
function Li(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new kr(null, e);
}
function fa(e) {
  return (
    Li(e),
    (e.headers = Ze.from(e.headers)),
    (e.data = zi.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    rd
      .getAdapter(e.adapter || Ds.adapter)(e)
      .then(
        function (r) {
          return (
            Li(e),
            (r.data = zi.call(e, e.transformResponse, r)),
            (r.headers = Ze.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            td(r) ||
              (Li(e),
              r &&
                r.response &&
                ((r.response.data = zi.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Ze.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const da = (e) => (e instanceof Ze ? e.toJSON() : e);
function xn(e, t) {
  t = t || {};
  const n = {};
  function r(a, d, c) {
    return w.isPlainObject(a) && w.isPlainObject(d)
      ? w.merge.call({ caseless: c }, a, d)
      : w.isPlainObject(d)
      ? w.merge({}, d)
      : w.isArray(d)
      ? d.slice()
      : d;
  }
  function l(a, d, c) {
    if (w.isUndefined(d)) {
      if (!w.isUndefined(a)) return r(void 0, a, c);
    } else return r(a, d, c);
  }
  function i(a, d) {
    if (!w.isUndefined(d)) return r(void 0, d);
  }
  function o(a, d) {
    if (w.isUndefined(d)) {
      if (!w.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, d);
  }
  function s(a, d, c) {
    if (c in t) return r(a, d);
    if (c in e) return r(void 0, a);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (a, d) => l(da(a), da(d), !0),
  };
  return (
    w.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const c = u[d] || l,
        h = c(e[d], t[d], d);
      (w.isUndefined(h) && c !== s) || (n[d] = h);
    }),
    n
  );
}
const ld = "1.6.7",
  As = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    As[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const pa = {};
As.transitional = function (t, n, r) {
  function l(i, o) {
    return (
      "[Axios v" +
      ld +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (i, o, s) => {
    if (t === !1)
      throw new I(
        l(o, " has been removed" + (n ? " in " + n : "")),
        I.ERR_DEPRECATED
      );
    return (
      n &&
        !pa[o] &&
        ((pa[o] = !0),
        console.warn(
          l(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, o, s) : !0
    );
  };
};
function ev(e, t, n) {
  if (typeof e != "object")
    throw new I("options must be an object", I.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const i = r[l],
      o = t[i];
    if (o) {
      const s = e[i],
        u = s === void 0 || o(s, i, e);
      if (u !== !0)
        throw new I("option " + i + " must be " + u, I.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new I("Unknown option " + i, I.ERR_BAD_OPTION);
  }
}
const Fo = { assertOptions: ev, validators: As },
  it = Fo.validators;
class Tl {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new sa(), response: new sa() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let l;
        Error.captureStackTrace
          ? Error.captureStackTrace((l = {}))
          : (l = new Error());
        const i = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = xn(this.defaults, n));
    const { transitional: r, paramsSerializer: l, headers: i } = n;
    r !== void 0 &&
      Fo.assertOptions(
        r,
        {
          silentJSONParsing: it.transitional(it.boolean),
          forcedJSONParsing: it.transitional(it.boolean),
          clarifyTimeoutError: it.transitional(it.boolean),
        },
        !1
      ),
      l != null &&
        (w.isFunction(l)
          ? (n.paramsSerializer = { serialize: l })
          : Fo.assertOptions(
              l,
              { encode: it.function, serialize: it.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = i && w.merge(i.common, i[n.method]);
    i &&
      w.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete i[y];
        }
      ),
      (n.headers = Ze.concat(o, i));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((u = u && g.synchronous), s.unshift(g.fulfilled, g.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (g) {
      a.push(g.fulfilled, g.rejected);
    });
    let d,
      c = 0,
      h;
    if (!u) {
      const y = [fa.bind(this), void 0];
      for (
        y.unshift.apply(y, s),
          y.push.apply(y, a),
          h = y.length,
          d = Promise.resolve(n);
        c < h;

      )
        d = d.then(y[c++], y[c++]);
      return d;
    }
    h = s.length;
    let x = n;
    for (c = 0; c < h; ) {
      const y = s[c++],
        g = s[c++];
      try {
        x = y(x);
      } catch (k) {
        g.call(this, k);
        break;
      }
    }
    try {
      d = fa.call(this, x);
    } catch (y) {
      return Promise.reject(y);
    }
    for (c = 0, h = a.length; c < h; ) d = d.then(a[c++], a[c++]);
    return d;
  }
  getUri(t) {
    t = xn(this.defaults, t);
    const n = nd(t.baseURL, t.url);
    return Yf(n, t.params, t.paramsSerializer);
  }
}
w.forEach(["delete", "get", "head", "options"], function (t) {
  Tl.prototype[t] = function (n, r) {
    return this.request(
      xn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
w.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, s) {
      return this.request(
        xn(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (Tl.prototype[t] = n()), (Tl.prototype[t + "Form"] = n(!0));
});
const rl = Tl;
class Us {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let i;
        const o = new Promise((s) => {
          r.subscribe(s), (i = s);
        }).then(l);
        return (
          (o.cancel = function () {
            r.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, s) {
        r.reason || ((r.reason = new kr(i, o, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Us(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
const tv = Us;
function nv(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function rv(e) {
  return w.isObject(e) && e.isAxiosError === !0;
}
const Io = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Io).forEach(([e, t]) => {
  Io[t] = e;
});
const lv = Io;
function id(e) {
  const t = new rl(e),
    n = Mf(rl.prototype.request, t);
  return (
    w.extend(n, rl.prototype, t, { allOwnKeys: !0 }),
    w.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return id(xn(e, l));
    }),
    n
  );
}
const Y = id(Ds);
Y.Axios = rl;
Y.CanceledError = kr;
Y.CancelToken = tv;
Y.isCancel = td;
Y.VERSION = ld;
Y.toFormData = Zl;
Y.AxiosError = I;
Y.Cancel = Y.CanceledError;
Y.all = function (t) {
  return Promise.all(t);
};
Y.spread = nv;
Y.isAxiosError = rv;
Y.mergeConfig = xn;
Y.AxiosHeaders = Ze;
Y.formToJSON = (e) => ed(w.isHTMLForm(e) ? new FormData(e) : e);
Y.getAdapter = rd.getAdapter;
Y.HttpStatusCode = lv;
Y.default = Y;
function iv() {
  const [e, t] = N.useState(""),
    [n, r] = N.useState(""),
    [l, i] = N.useState(""),
    o = async (s) => {
      s.preventDefault();
      const c = {
        service_id: "service_hozzjlm",
        template_id: "template_u42rl68",
        user_id: "vjw7dcQJizcn3ce0Z",
        template_params: {
          from_name: e,
          from_email: n,
          to_name: "Enrico",
          message: l,
        },
      };
      try {
        const h = await Y.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          c
        );
        console.log(h.data), t(""), r(""), i("");
      } catch (h) {
        console.log(h);
      }
    };
  return v.jsx("div", {
    className: "flex w-full",
    children: v.jsx("div", {
      className: " w-full flex bg-blue-950",
      children: v.jsx("div", {
        className: " text-slate-100 flex justify-center w-full h-screen",
        children: v.jsxs("form", {
          onSubmit: o,
          className: " flex flex-col items-center justify-center gap-10",
          children: [
            v.jsx("h1", {
              className: " text-slate-200 font-bold text-lg",
              children: "Cercami se ti serve qualcosa!!",
            }),
            v.jsx("input", {
              type: "text",
              placeholder: "Inserisci il tuo nome",
              value: e,
              onChange: (s) => t(s.target.value),
              className:
                " rounded-lg bg-blue-950 border-4 border-blue-900 p-4 w-[500px] text-slate-100",
            }),
            v.jsx("input", {
              type: "email",
              placeholder: "Inserisci la tua email",
              value: n,
              onChange: (s) => r(s.target.value),
              className:
                " rounded-lg bg-blue-950 border-4 border-blue-900 p-4 w-[500px] text-slate-100",
            }),
            v.jsx("textarea", {
              cols: "30",
              rows: "10",
              value: l,
              placeholder: "Scrivi un messaggio",
              onChange: (s) => i(s.target.value),
              className:
                " rounded-lg bg-blue-950 border-4 border-blue-900 p-4 w-[500px] text-slate-100",
            }),
            v.jsx("button", {
              type: "submit",
              className:
                " rounded-lg bg-blue-300 border-4 border-blue-900 p-4 w-[500px]",
              children: "Invia il messaggio",
            }),
          ],
        }),
      }),
    }),
  });
}
function ov() {
  return v.jsx("div", {
    className: "flex w-full items-center",
    children: v.jsx("div", {
      className: " w-full flex items-center justify-center bg-blue-950",
      children: v.jsx("div", {
        className:
          " text-slate-100 flex justify-between px-5 items-center w-full h-screen max-w-7xl",
        children: v.jsx("h1", { children: "Pagina skill" }),
      }),
    }),
  });
}
function sv() {
  return v.jsxs("footer", {
    className:
      "bg-blue-950 text-slate-100 flex justify-center items-center z-10 mt-[-70px] gap-10 p-5",
    children: [
      v.jsx("h1", {
        className: "text-lg font-bold",
        children: "Ciao Benvenuto nel mio portfoglio personale!",
      }),
      v.jsx("h1", { className: "", children: "Scritto e ideato da @errygz" }),
      v.jsxs("div", {
        className:
          "footer-links md:flex md:flex-wrap md:justify-center md:items-center gap-5",
        children: [
          v.jsx("a", {
            className: "underline underline-offset-4 hover:text-blue-300",
            href: "https://www.instagram.com/errygz/",
            children: "Il mio Instagram",
          }),
          v.jsx("a", {
            className: "underline underline-offset-4 hover:text-blue-300",
            href: "https://github.com/Erry002",
            children: "Il mio GitHub",
          }),
          v.jsx("a", {
            className: "underline underline-offset-4 hover:text-blue-300",
            href: "https://www.linkedin.com/in/enrico-garozzo-756a31229/",
            children: "Il mio Linkedin",
          }),
        ],
      }),
      v.jsx("h1", {
        className: "text-sm",
        children: "@copyright 2024 by Enrico Garozzo",
      }),
    ],
  });
}
function uv() {
  return v.jsx(v.Fragment, {
    children: v.jsxs(Oh, {
      children: [
        v.jsx(Ih, {}),
        v.jsxs(Nh, {
          children: [
            v.jsx(Ot, { path: "/", element: v.jsx(Dh, {}) }),
            v.jsx(Ot, { path: "/about", element: v.jsx(Ah, {}) }),
            v.jsx(Ot, { path: "/skills", element: v.jsx(Uh, {}) }),
            v.jsx(Ot, { path: "/project", element: v.jsx(Hh, {}) }),
            v.jsx(Ot, { path: "/form", element: v.jsx(iv, {}) }),
            v.jsx(Ot, { path: "*", element: v.jsx(ov, {}) }),
          ],
        }),
        v.jsx(sv, {}),
      ],
    }),
  });
}
Fi.createRoot(document.getElementById("root")).render(
  v.jsx(ka.StrictMode, { children: v.jsx(uv, {}) })
);
