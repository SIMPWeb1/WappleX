/*!
 * Saola Animate HTML5 Player
 * Copyright (c) Atomi Systems, Inc. All rights reserved.
 * https://atomisystems.com
 * Player Version: 12
 * Date: 2023/04/05
 */
!(function () {
  "use strict";
  var t = {
      IMG: 0,
      AUDIO: 1,
      VIDEO: 2,
      HTML_WIDGET: 3,
      TEXT: 4,
      DIV: 5,
      SYM: 7,
      SHAPE: 9,
      FREEFORM: 11,
      CUSTOM: 12,
    },
    e = 1,
    i = 2,
    s = 3,
    n = 0,
    o = 1,
    r = 2,
    a = 3,
    h = 0,
    l = 1,
    c = 2,
    d = 3,
    u = 0,
    p = 1,
    f = 2,
    m = 3,
    g = 4,
    v = 0,
    y = 1,
    _ = { CIRCLE: 0, ELLIPSE: 1 },
    T = { CLOSE_SIDE: 0, FAR_SIDE: 1, CLOSE_CORNER: 2, FAR_CORNER: 3 },
    w = { VISIBLE: 0, HIDDEN: 1, SCROLL: 2, AUTO: 3 },
    S = {
      RECT: 11,
      ROUND_RECT: 12,
      RECT_COUT: 13,
      ROUND_RECT_COUT: 14,
      RIGHT_ARW: 15,
      LEFT_ARW: 16,
      UP_ARW: 17,
      DOWN_ARW: 18,
      OVAL_COUT: 19,
      CROSS: 20,
      OVAL: 21,
      DIAMOND: 22,
      LEFT_RIGHT_ARW: 25,
      UP_DOWN_ARW: 26,
      RIGHT_ARW_COUT: 27,
      DOWN_ARW_COUT: 28,
      LEFT_ARW_COUT: 29,
      UP_ARW_COUT: 30,
      NOTCH_RIGHT_ARW: 31,
      CHEVRON: 32,
      TRI: 33,
      RIGHT_TRIANGLE: 34,
      DATA: 35,
      POLY_MIN: 36,
      POLY_MAX: 52,
      PLAQUE: 53,
      HEART: 56,
      MOON: 57,
      TRAPE: 61,
      OFFPAGE_CONNECTOR: 69,
      DISPLAY: 71,
      CARD: 72,
      PENTAGON: 73,
      STOREDATA: 74,
      WAVE: 75,
      STAR_MIN: 77,
      STAR_MAX: 589,
      FREEFORM_MIN: 590,
      LINE: 590,
      ARROW: 591,
      DBL_ARW: 592,
      AUTOSHAPE_CUSTOM_CURVE: 593,
      AUTOSHAPE_CUSTOM_FREEFORM_SHAPE: 594,
      AUTOSHAPE_CUSTOM_FREEFORM_SCRIBBLE: 595,
      AUTOSHAPE_CUSTOM_FREEFORM_LINE_AND_CURVE: 596,
      FREEFORM_MAX: 596,
      OVAL_THOUGHT: 1e3,
      ROUND_RECT_THOUGHT: 1001,
    },
    b = { NONE: 0, ARROW: 1, OPEN: 2, STEALTH: 3, DIAMOND: 4, OVAL: 5 },
    E = {
      IMAGE: 0,
      AUDIO: 1,
      VIDEO: 2,
      SYMBOL: 3,
      FONT: 4,
      JS: 5,
      CSS: 6,
      HTML: 7,
    },
    x = {
      NONE: 0,
      LEFT: 1,
      RIGHT: 2,
      HCENTER: 4,
      JUSTIFY: 8,
      TOP: 32,
      BOTTOM: 64,
      VCENTER: 128,
    },
    D = 0,
    A = 1,
    M = 2,
    C = 0,
    P = 1,
    R = 3,
    O = [
      "scripterror",
      "sceneactivate",
      "scenedeactivate",
      "create",
      "ready",
      "destroy",
    ],
    I = {
      0: "none",
      1: "start",
      2: "progress",
      3: "complete",
      4: "itemstart",
      5: "itemcomplete",
      20: "create",
      21: "ready",
      22: "destroy",
      23: "scripterror",
      50: "sceneactivate",
      51: "scenedeactivate",
      52: "scroll",
      53: "keydown",
      54: "keyup",
      55: "orientationchange",
      56: "resize",
      100: "click",
      101: "dblclick",
      102: "mouseover",
      103: "mousedown",
      104: "mousemove",
      105: "mouseup",
      106: "mouseout",
      107: "mouseenter",
      108: "mouseleave",
      109: "focus",
      110: "swipeleft",
      111: "swiperight",
      150: "update",
      151: "play",
      152: "pause",
      153: "complete",
      154: "speedchange",
      155: "reverse",
      156: "seek",
      200: "trigger",
      201: "playback",
    },
    k = {
      NONE: 0,
      TL_ST: 1,
      TL_PL: 2,
      TL_PLF: 3,
      TL_PS: 4,
      TL_PSA: 5,
      TL_TGP: 6,
      TL_SK: 7,
      SYM_ST: 20,
      SYM_PL: 21,
      SYM_PLF: 22,
      SYM_PS: 23,
      SYM_PSA: 24,
      SYM_TGP: 25,
      SYM_SK: 26,
      AV_ST: 40,
      AV_PL: 41,
      AV_PLF: 42,
      AV_PS: 43,
      AV_PSA: 44,
      AV_MUTE: 45,
      AV_VOL: 46,
      AV_TGMUTE: 47,
      AV_MUTE_ALL: 48,
      AV_TGP: 49,
      AV_SK: 50,
      VID_FS: 51,
      ELEM_HIDE: 70,
      ELEM_SHOW: 71,
      ELEM_TGS: 72,
      JUMP_TO_SCENE: 100,
      LINK: 101,
      CHANGE_TEXT: 102,
      JS: 103,
    },
    L = 1,
    N = 2,
    F = 3,
    B = 4,
    H = 5,
    W = { NEXT: -2, PREV: -3, LAST: -4, FIRST: -5 },
    Y = 1,
    V = 2,
    G = 3,
    U = { MAIN: 0, ACROSS: 1 },
    X = 0,
    z = 1,
    $ = 2,
    q = { RAND: -2, START: -3, END: -4, FROM_CENTER: -5, TO_CENTER: -6 },
    Z = { CHARS: 1, WORDS: 2 },
    j = Math.PI,
    Q = window.document,
    J = ["Webkit", "Moz", "ms", "O"],
    K = {},
    tt = "string",
    et = "function",
    it = Q.createElement("div"),
    st = {},
    nt = window.SL_EDITOR;
  function ot(t, e, i) {
    if (e in t || !e) return e;
    var s,
      n,
      o = e.charAt(0).toUpperCase() + e.slice(1),
      r = J.length;
    for (n = 0; n < r; ++n) if ((s = J[n] + o) in t) return s;
    return i ? "" : e;
  }
  function rt(t, e) {
    var i = ot(it.style, t, !0);
    return (
      !!i &&
      ((K[t] = i),
      (it.style[i] = e),
      !(!it.style[i] || "none" == it.style[i]) ||
        (!!(
          i == t &&
          (i = "Webkit" + t.charAt(0).toUpperCase() + t.slice(1)) in it.style &&
          ((it.style[i] = e), it.style[i])
        ) &&
          ((K[t] = i), !0)))
    );
  }
  (st.transform = !!ot(it.style, "transform", !0)),
    (K.transform = ot(it.style, "transform")),
    (K.transformOrigin = ot(it.style, "transformOrigin")),
    (K.transformStyle = ot(it.style, "transformStyle")),
    (K.filter = ot(it.style, "filter")),
    (st.cssFilter = rt(
      "filter",
      "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))"
    )),
    (K.clipPath = ot(it.style, "clipPath")),
    (st.clipPath = rt("clipPath", "polygon(50% 0%, 0% 100%, 100% 100%)")),
    (K.perspective = ot(it.style, "perspective")),
    (K.perspectiveOrigin = ot(it.style, "perspectiveOrigin")),
    (function () {
      if (!window.requestAnimationFrame) {
        for (
          var t = ["webkit", "moz", "ms", "o"], e = 0, i = t.length;
          e < i;
          ++e
        )
          if (
            ((window.requestAnimationFrame =
              window[t[e] + "RequestAnimationFrame"]),
            window.requestAnimationFrame)
          ) {
            window.cancelAnimationFrame =
              window[t[e] + "CancelAnimationFrame"] ||
              window[t[e] + "CancelRequestAnimationFrame"];
            break;
          }
        window.requestAnimationFrame ||
          (window.requestAnimationFrame = function (t) {
            var e = Date.now(),
              i = t.requestAnimationFrameTime
                ? Math.max(0, 16 - (e - t.requestAnimationFrameTime))
                : 0;
            return (
              (t.requestAnimationFrameTime = e + i),
              window.setTimeout(function () {
                t(Date.now());
              }, i)
            );
          }),
          window.cancelAnimationFrame ||
            (window.cancelAnimationFrame = function (t) {
              clearTimeout(t);
            });
      }
    })(),
    (st.gradient = (function () {
      var t,
        e,
        i = {},
        s = it.style,
        n = "linear-gradient",
        o = "(left, red, blue)",
        r = ["", "-webkit-", "-moz-", "-o-"],
        a = ["(to right, red, blue)", o, o, o];
      try {
        for (t = 0, e = r.length; t < e; ++t)
          if (
            ((s.backgroundImage = r[t] + n + a[t]),
            ("" + s.backgroundImage).indexOf("gradient") > -1)
          ) {
            i = {
              linear: r[t] + n,
              radial: "-o-" === r[t] ? void 0 : r[t] + "radial-gradient",
              prefixed: !!r[t],
            };
            break;
          }
      } catch (t) {}
      return i;
    })());
  var at, ht, lt, ct;
  (st.audio = (function () {
    var t,
      e = Q.createElement("audio"),
      i = {},
      s = {
        mp3: "audio/mpeg;",
        ogg: 'audio/ogg; codecs="vorbis"',
        aac: 'audio/mp4; codecs="mp4a.40.2"',
        wav: 'audio/wav; codecs="1"',
      },
      n = /^no$/;
    if (e.canPlayType) {
      for (t in s)
        s.hasOwnProperty(t) &&
          e.canPlayType(s[t]).replace(n, "") &&
          (i[t] = !0);
      (i.oga = i.ogg), (i.mp4 = i.m4a = i.aac);
    }
    return i;
  })()),
    (st.video = (function () {
      var t,
        e = Q.createElement("video"),
        i = {},
        s = {
          mp4: "video/mp4;",
          webm: 'video/webm; codecs="vp8, vorbis"',
          ogg: 'video/ogg; codecs="theora, vorbis"',
        },
        n = /^no$/;
      if (e.canPlayType) {
        for (t in s)
          s.hasOwnProperty(t) &&
            e.canPlayType(s[t]).replace(n, "") &&
            (i[t] = !0);
        (i.ogv = i.ogg), (i.m4v = i.mp4);
      }
      return i;
    })()),
    (st.svgShadowBox =
      ((at = !!Q.documentMode), (ht = !at && !!window.StyleMedia), !at && !ht)),
    (st.filterDropShadow =
      ((lt = !!Q.documentMode),
      (ct = !lt && !!window.StyleMedia),
      !lt && !ct && st.cssFilter));
  var dt = st.filterDropShadow,
    ut = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    pt = Array.isArray;
  function ft() {
    var t,
      e,
      i,
      s,
      n = arguments.length,
      o = 1,
      r = !0;
    if (
      ("boolean" == typeof (t = arguments[0])
        ? ((r = t), (t = arguments[1] || {}), ++o)
        : t || (t = {}),
      n <= 1)
    )
      return t;
    for (; o < n; ++o)
      if ((e = arguments[o]))
        for (i in e)
          void 0 === (s = e[i]) || (!r && void 0 !== t[i]) || (t[i] = s);
    return t;
  }
  function mt(t, e, i) {
    for (
      var s = t.parentNode,
        n = i.words ? t.nodeValue.split(/(\s+)/) : t.nodeValue,
        o = 0,
        r = n.length;
      o < r;
      ++o
    ) {
      var a,
        h,
        l = n[o];
      if (l)
        l.trim()
          ? ((a = Q.createElement("div")),
            (h = Q.createTextNode(l)),
            a.appendChild(h),
            (a.style.display = "inline-block"),
            (a.style.position = "relative"),
            e[i.words ? "words" : "chars"].push(a),
            i.words && i.chars && mt(h, e, { chars: !0 }))
          : (a = Q.createTextNode(l)),
          s.insertBefore(a, t);
    }
    s.removeChild(t);
  }
  function gt(t, e, i) {
    var s, n, o;
    for (s = 0, n = i.length; s < n; ++s) t[(o = i[s])] = vt(e, o);
  }
  function vt(t, e) {
    return function () {
      var i = this[t];
      return !!i && i[e].apply(i, arguments);
    };
  }
  function yt(t, e, i) {
    (t = t || {}),
      arguments.length < 2 && (e = !0),
      arguments.length < 3 && (i = !1);
    var s,
      n,
      o,
      r = this.prototype,
      a = {};
    for (s in t)
      void 0 !== (n = t[s]) &&
        (void 0 === (o = r[s]) ? (r[s] = n) : e && ((a[s] = o), (r[s] = n)));
    var h,
      l,
      c,
      d,
      u = this.childClasses;
    for (h = 0, l = u.length; h < l; ++h) {
      if (((c = u[h]), e && !i)) {
        (d = {}), (r = c.prototype);
        for (s in a) r[s] === a[s] && (d[s] = t[s]);
        c.extend(d, !0, !1);
      }
      c.extend(t, i, i);
    }
    return this;
  }
  function _t() {
    var t,
      e = function () {
        this.$init.apply(this, arguments);
      },
      i = [e.prototype],
      s = 0,
      n = null;
    for (
      typeof arguments[0] === et &&
        ((n = arguments[0]).childClasses || (n.childClasses = []),
        n.childClasses.push(e),
        (s = 1),
        i.push(n.prototype)),
        t = arguments.length;
      s < t;
      ++s
    )
      i.push(arguments[s]);
    return (
      ft.apply(null, i),
      e.prototype.$init || (e.prototype.$init = function () {}),
      (e.prototype.constructor = e),
      (e.parentClass = n),
      (e.childClasses = []),
      (e.extend = yt),
      e
    );
  }
  function Tt(t) {
    window.console && console.log(t);
  }
  function wt(t) {
    wt.disabled || Tt(t);
  }
  function St(t) {
    St.disabled || Tt(t);
  }
  function bt(t, e, i) {
    return Math.min(Math.max(t, e), i);
  }
  function Et(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  }
  wt.disabled = !0;
  var xt = 0;
  function Dt() {
    return ++xt;
  }
  function At(t, e) {
    for (var i in e) t.setAttribute(i, e[i]);
  }
  function Mt(t, e, i, s) {
    return void 0 === e
      ? t
      : void 0 === s || 255 == s
      ? "rgb(" + Math.round(t) + "," + Math.round(e) + "," + Math.round(i) + ")"
      : ((s /= 255),
        "rgba(" +
          Math.round(t) +
          "," +
          Math.round(e) +
          "," +
          Math.round(i) +
          "," +
          s.toFixed(6) +
          ")");
  }
  function Ct(t, e) {
    return t
      .replace("rgb(", "rgba(")
      .replace(")", "," + (e / 255).toFixed(6) + ")");
  }
  var Pt = /[\t\r\n\f]/g,
    Rt = /\S+/g;
  function Ot(t, e, i) {
    var s,
      n,
      o,
      r = e.match(Rt) || [],
      a = r.length,
      h = !1;
    if (t.classList)
      for (s = 0; s < a; ++s)
        i ? t.classList.add(r[s]) : t.classList.remove(r[s]);
    else {
      for (o = (" " + t.className + " ").replace(Pt, " "), s = 0; s < a; ++s)
        if (((n = r[s]), i))
          o.indexOf(" " + n + " ") < 0 && ((o += n + " "), (h = !0));
        else
          for (; o.indexOf(" " + n + " ") >= 0; )
            (o = o.replace(" " + n + " ", " ")), (h = !0);
      h && (t.className = o.trim());
    }
  }
  function It(t, e) {
    var i;
    return (
      "auto" === e &&
        "scroll" === t.style.overflow &&
        ((t.style.overflow = "hidden"), (i = t.offsetWidth)),
      (t.style.overflow = e),
      i
    );
  }
  function kt(t, e, i) {
    var s = t.style,
      n = s.textDecoration,
      o = !1;
    if (i) -1 === n.indexOf(e) && ((n += " " + e), (o = !0));
    else for (; -1 !== n.indexOf(e); ) (n = n.replace(e, "")), (o = !0);
    o && (s.textDecoration = n.trim());
  }
  function Lt(t, e) {
    var i = t ? t.style : null;
    if (i)
      switch (e) {
        case "horizontal":
        case x.HCENTER:
          (i.top = i.bottom = ""),
            (i.marginTop = i.marginBottom = ""),
            (i.left = i.right = 0),
            (i.marginLeft = i.marginRight = "auto");
          break;
        case "vertical":
        case x.VCENTER:
          (i.left = i.right = ""),
            (i.marginLeft = i.marginRight = ""),
            (i.top = i.bottom = 0),
            (i.marginTop = i.marginBottom = "auto");
          break;
        case "both":
        case x.HCENTER | x.VCENTER:
          (i.left = i.right = i.top = i.bottom = 0), (i.margin = "auto");
          break;
        default:
          (i.left = i.right = i.top = i.bottom = ""), (i.margin = "");
      }
  }
  var Nt = _t({
    $init: function () {
      this.$observable = { o: [], d: 0 };
    },
    addObserver: function (t) {
      if (t) {
        var e,
          i,
          s = this.$observable.o;
        for (e = 0, i = s.length; e < i; ++e)
          if (s[e].o === t && !s[e].removed) return;
        s.push({ o: t });
      }
    },
    removeObserver: function (t) {
      if (typeof t === tt) this.removeObserversById(t);
      else {
        var e,
          i = this.$observable.o;
        for (e = i.length - 1; e >= 0; --e)
          if (i[e].o === t && !i[e].removed) {
            this.$observable.d > 0 ? (i[e].removed = !0) : i.splice(e, 1);
            break;
          }
      }
    },
    removeObserversById: function (t) {
      var e,
        i = this.$observable.o;
      for (e = i.length - 1; e >= 0; --e)
        i[e].o.id === t &&
          (this.$observable.d > 0 ? (i[e].removed = !0) : i.splice(e, 1));
    },
    removeObservers: function () {
      var t,
        e,
        i = this.$observable,
        s = i.o;
      if (i.d > 0)
        for (i.removed = !0, t = 0, e = s.length; t < e; ++t) s[t].removed = !0;
      else s.length = 0;
    },
    notifyObservers: function (t, e) {
      if (t) {
        var i,
          s,
          n,
          o = this.$observable,
          r = o.o;
        for (++o.d, i = 0; i < r.length; ++i)
          (s = r[i]).removed ||
            ((s = s.o)[t] &&
              ("$event.handler" === s.id
                ? (n = s[t](this, e))
                : s[t](this, e)));
        if ((--o.d, 0 === o.d))
          if (o.removed) (r.length = 0), (o.removed = !1);
          else
            for (i = r.length - 1; i >= 0; --i) r[i].removed && r.splice(i, 1);
        return n;
      }
    },
  });
  function Ft(t, e, i) {
    try {
      return t ? t.call(i.currentTarget, e || ge, i) : void 0;
    } catch (t) {
      if ("scripterror" !== i.type) {
        var s = i.currentTarget || e;
        ee(s, "scripterror"),
          s.notifyObservers("scripterror", {
            type: i.type,
            message: t.toString(),
          });
      }
      return void St(t);
    }
  }
  function Bt(t, e) {
    return t.getTimeline(-1 === e ? void 0 : e);
  }
  function Ht(t, e) {
    var i;
    switch (e) {
      case -1:
        return t;
      case -2:
        return t.getParentDoc();
      case -3:
        for (; (i = t.getParentDoc()); ) t = i;
        return t;
    }
    return t.getElement(e);
  }
  function Wt(t, e, i) {
    if (typeof t === et) return Ft(t, e, i);
    var s;
    if (e)
      switch ((e.transition && Yt(t) && e.transition.goToEnd(), t[0])) {
        case k.TL_ST:
          (s = Bt(e, t[1])) && s.start(t[2] || 1, t[3] || !1);
          break;
        case k.TL_PL:
          (s = Bt(e, t[1])) && s.play(void 0, t[2] || 1, t[3] || !1);
          break;
        case k.TL_PLF:
          (s = Bt(e, t[1])) && s.play(t[2], t[3] || 1, t[4] || !1);
          break;
        case k.TL_PS:
          (s = Bt(e, t[1])) && s.pause();
          break;
        case k.TL_PSA:
          (s = Bt(e, t[1])) && s.pause(t[2]);
          break;
        case k.TL_TGP:
          (s = Bt(e, t[1])) && (s.isPlaying() ? s.pause() : s.play());
          break;
        case k.TL_SK:
          (s = Bt(e, t[1])) && s.seek(t[2]);
          break;
        case k.SYM_ST:
        case k.AV_ST:
          (s = t[0] === k.SYM_ST ? Ht(e, t[1]) : e.getElement(t[1])) &&
            (s.setSpeed && s.setSpeed(t[2] || 1),
            s.setPlayBackward && s.isPlayBackward && s.getDuration
              ? (s.setPlayBackward(t[3] || !1),
                s.seek && s.seek(s.isPlayBackward() ? s.getDuration() : 0))
              : s.seek && s.seek(0),
            s.play && s.play());
          break;
        case k.SYM_PL:
        case k.AV_PL:
          (s = t[0] === k.SYM_PL ? Ht(e, t[1]) : e.getElement(t[1])) &&
            (s.setSpeed && s.setSpeed(t[2] || 1),
            s.setPlayBackward && s.setPlayBackward(t[3] || !1),
            s.play && s.play());
          break;
        case k.SYM_PLF:
        case k.AV_PLF:
          (s = t[0] === k.SYM_PLF ? Ht(e, t[1]) : e.getElement(t[1])) &&
            (s.setSpeed && s.setSpeed(t[3] || 1),
            s.setPlayBackward && s.setPlayBackward(t[4] || !1),
            s.seek && s.seek(t[2]),
            s.play && s.play());
          break;
        case k.SYM_PS:
        case k.AV_PS:
          (s = t[0] === k.SYM_PS ? Ht(e, t[1]) : e.getElement(t[1])) &&
            s.pause &&
            s.pause();
          break;
        case k.SYM_PSA:
        case k.AV_PSA:
          (s = t[0] === k.SYM_PSA ? Ht(e, t[1]) : e.getElement(t[1])) &&
            (s.pause && s.pause(), s.seek && s.seek(t[2]));
          break;
        case k.SYM_TGP:
        case k.AV_TGP:
          (s = t[0] === k.SYM_TGP ? Ht(e, t[1]) : e.getElement(t[1])) &&
            s.pause &&
            s.play &&
            s.isPlaying &&
            (s.isPlaying() ? s.pause() : s.play());
          break;
        case k.SYM_SK:
        case k.AV_SK:
          (s = t[0] === k.SYM_SK ? Ht(e, t[1]) : e.getElement(t[1])) &&
            s.seek &&
            s.seek(t[2]);
          break;
        case k.AV_MUTE:
          (s = e.getElement(t[1])) && s.setMuted && s.setMuted(!0);
          break;
        case k.AV_VOL:
          (s = e.getElement(t[1])) && s.setVolume && s.setVolume(t[2]);
          break;
        case k.AV_TGMUTE:
          (s = e.getElement(t[1])) &&
            s.setMuted &&
            s.isMuted &&
            s.setMuted(!s.isMuted());
          break;
        case k.AV_MUTE_ALL:
          e.setMuted(!0);
          break;
        case k.VID_FS:
          (s = e.getElement(t[1])) && s.playFullscreen && s.playFullscreen();
          break;
        case k.ELEM_SHOW:
          (s = e.getElement(t[1])) && s.show && s.show(!0);
          break;
        case k.ELEM_HIDE:
          (s = e.getElement(t[1])) && s.show && s.show(!1);
          break;
        case k.ELEM_TGS:
          (s = e.getElement(t[1])) &&
            s.show &&
            s.isVisible &&
            s.show(!s.isVisible());
          break;
        case k.CHANGE_TEXT:
          (s = e.getElement(t[1])) && s.setText && s.setText(t[2] || "");
          break;
        case k.JUMP_TO_SCENE:
          var n;
          switch (
            (void 0 !== t[2] && (n = { transition: [t[2], t[3], t[4], t[5]] }),
            t[1])
          ) {
            case W.FIRST:
              e.showFirstScene(n);
              break;
            case W.LAST:
              e.showLastScene(n);
              break;
            case W.NEXT:
              e.showNextScene(n);
              break;
            case W.PREV:
              e.showPreviousScene(n);
              break;
            default:
              e.showScene(t[1], n);
          }
          break;
        case k.LINK:
          try {
            window.open(t[1], t[2] ? "_blank" : "_self");
          } catch (t) {
            St(t);
          }
          break;
        case k.JS:
          return Ft(e.getFunction(t[1]), e, i);
      }
  }
  function Yt(t) {
    if (typeof t === et) return !1;
    switch (t[0]) {
      case k.AV_MUTE_ALL:
      case k.JUMP_TO_SCENE:
      case k.LINK:
      case k.JS:
        return !1;
      case k.SYM_ST:
      case k.SYM_PL:
      case k.SYM_PLF:
      case k.SYM_PS:
      case k.SYM_PSA:
      case k.SYM_TGP:
      case k.SYM_SK:
        return t[1] >= 0;
    }
    return !0;
  }
  function Vt() {
    return !1;
  }
  function Gt() {
    return !0;
  }
  st.customEvent = (function () {
    if (window.CustomEvent)
      try {
        return void 0 !== new CustomEvent("tmp");
      } catch (t) {}
    return !1;
  })();
  var Ut = _t({
    $init: function (t, e) {
      t && t.type
        ? ((this.domEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented =
            t.defaultPrevented ||
            (void 0 === t.defaultPrevented && !1 === t.returnValue)
              ? Gt
              : Vt))
        : (this.type = t),
        e && ft(this, e);
    },
    isDefaultPrevented: Vt,
    isPropagationStopped: Vt,
    isImmediatePropagationStopped: Vt,
    preventDefault: function () {
      this.isDefaultPrevented = Gt;
      var t = this.domEvent;
      t && t.preventDefault && t.preventDefault();
    },
    stopPropagation: function () {
      this.isPropagationStopped = Gt;
      var t = this.domEvent;
      t && t.stopPropagation && t.stopPropagation();
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = Gt;
      var t = this.domEvent;
      t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
        this.stopPropagation();
    },
  });
  function Xt(t) {
    var e = window.pageXOffset,
      i = window.pageYOffset,
      s = t.clientX,
      n = t.clientY;
    return (
      (0 === t.pageY && Math.floor(n) > Math.floor(t.pageY)) ||
      (0 === t.pageX && Math.floor(s) > Math.floor(t.pageX))
        ? ((s -= e), (n -= i))
        : (n < t.pageY - i || s < t.pageX - e) &&
          ((s = t.pageX - e), (n = t.pageY - i)),
      { x: s, y: n }
    );
  }
  ft(st, {
    touch: "ontouchend" in Q,
    pointer: !!window.PointerEvent,
    msPointer: !!window.MSPointerEvent,
    orientation: "orientation" in window && "onorientationchange" in window,
  });
  var zt,
    $t = "mousedown",
    qt = "mouseup",
    Zt = "mousemove",
    jt = {
      NONE: 0,
      LEFT: 1,
      RIGHT: 2,
      UP: 4,
      DOWN: 8,
      HORIZONTAL: 3,
      VERTICAL: 12,
      ALL: 15,
    };
  function Qt(t, e) {
    return Math.abs(t) >= Math.abs(e)
      ? t < 0
        ? jt.LEFT
        : jt.RIGHT
      : e < 0
      ? jt.UP
      : jt.DOWN;
  }
  function Jt(t, e) {
    switch ((e && 0 == t.indexOf(e) && (t = t.substring(e.length)), t)) {
      case "":
        return jt.ALL;
      case "left":
        return jt.LEFT;
      case "right":
        return jt.RIGHT;
      case "up":
        return jt.UP;
      case "down":
        return jt.DOWN;
    }
    return jt.NONE;
  }
  st.pointer
    ? (($t = "pointerdown"),
      (qt = "pointerup"),
      (Zt = "pointermove"),
      (zt = "pointercancel"))
    : st.touch
    ? (($t = "touchstart"),
      (qt = "touchend"),
      (Zt = "touchmove"),
      (zt = "touchcancel"))
    : st.msPointer &&
      (($t = "MSPointerDown"),
      (qt = "MSPointerUp"),
      (Zt = "MSPointerMove"),
      (zt = "MSPointerCancel"));
  var Kt = {
    swipe: {
      processing: !1,
      minDistance: 30,
      maxDeflection: 200,
      minVelocity: 0.3,
      bind: function (t) {
        var e = this._domEventTarget("swipe"),
          i = {},
          s = this,
          n = this._getBoundActions("swipe", !0);
        if (!e || !e.addEventListener) return null;
        var o = Jt(t, "swipe");
        if (
          (o == jt.ALL
            ? (this._swipeDirAll = !0)
            : (this._swipeDir = (this._swipeDir || 0) | o),
          n.bind)
        )
          return ++n.bind, null;
        (n.bind = 1),
          (i.start = function (t) {
            if (!(Kt.swipe.processing || (t.touches && t.touches.length > 1))) {
              Kt.swipe.processing = !0;
              var e,
                n = {
                  time: Date.now(),
                  pos: t.targetTouches
                    ? Xt(t.targetTouches[0])
                    : { x: t.clientX, y: t.clientY },
                },
                o = { time: n.time, pos: n.pos },
                r = s._swipeDirAll || !s._swipeDir ? jt.ALL : s._swipeDir;
              (i.move = function (t) {
                (o = {
                  time: Date.now(),
                  pos: t.targetTouches
                    ? Xt(t.targetTouches[0])
                    : { x: t.clientX, y: t.clientY },
                }),
                  (e = Qt(o.pos.x - n.pos.x, o.pos.y - n.pos.y)) & r &&
                    t.preventDefault();
              }),
                (i.stop = function (t) {
                  i.cancel && i.cancel.call(this, t), (o.time = Date.now());
                  var r = o.pos.x - n.pos.x,
                    a = o.pos.y - n.pos.y;
                  (((e = Qt(r, a)) & jt.HORIZONTAL &&
                    Math.abs(r) > Kt.swipe.minDistance &&
                    Math.abs(a) < Kt.swipe.maxDeflection) ||
                    (e & jt.VERTICAL &&
                      Math.abs(a) > Kt.swipe.minDistance &&
                      Math.abs(r) < Kt.swipe.maxDeflection)) &&
                    Math.sqrt(r * r + a * a) / (o.time - n.time) >
                      Kt.swipe.minVelocity &&
                    (s.fireEvent("swipe", { direction: e, start: n, stop: o }),
                    s.fireEvent(
                      (function (t, e) {
                        switch (((e = e || ""), t)) {
                          case jt.LEFT:
                            return e + "left";
                          case jt.RIGHT:
                            return e + "right";
                          case jt.UP:
                            return e + "up";
                          case jt.DOWN:
                            return e + "down";
                        }
                        return e;
                      })(e, "swipe"),
                      { direction: e, start: n, stop: o }
                    ));
                }),
                (i.cancel = function (t) {
                  (Kt.swipe.processing = !1),
                    i.move && Q.removeEventListener(Zt, i.move, !1),
                    i.stop && Q.removeEventListener(qt, i.stop, !1),
                    zt && i.cancel && Q.removeEventListener(zt, i.cancel, !1),
                    (i.move = i.stop = i.cancel = null);
                }),
                Q.addEventListener(Zt, i.move, !1),
                Q.addEventListener(qt, i.stop, !1),
                zt && Q.addEventListener(zt, i.cancel, !1);
            }
          }),
          e.addEventListener($t, i.start, !1);
        var r = K.touchAction || (K.touchAction = ot(e.style, "touchAction"));
        return (e.style[r] = "none"), i;
      },
      unbind: function (t, e) {
        var i = this._domEventTarget("swipe"),
          s = this._getBoundActions("swipe", !0),
          n = Jt(t, "swipe");
        if (
          (n == jt.ALL
            ? (this._swipeDirAll = !1)
            : this._swipeDir && (this._swipeDir &= ~n),
          (!s.bind || (--s.bind, !s.bind)) && i && i.removeEventListener && e)
        ) {
          e.start && i.removeEventListener($t, e.start, !1),
            (e.start = null),
            e.cancel && e.cancel.call(i, {});
          var o = K.touchAction || (K.touchAction = ot(i.style, "touchAction"));
          i.style[o] = "";
        }
      },
    },
  };
  function te(t, e, i, s, n) {
    if (
      (i || n) &&
      (typeof e !== tt && (e = I[e]),
      !ge.noHover ||
        ("mouseover" != e &&
          "mouseout" != e &&
          "mouseenter" != e &&
          "mouseleave" != e))
    ) {
      var o,
        r,
        a = t._getBoundActions(e, !0);
      if (
        (n
          ? (a.bubble = !0)
          : s
          ? (a._default = i)
          : a.actions.push({ action: i, status: a.firing > 0 ? 1 : 0 }),
        !a.listener)
      )
        Kt[e] && Kt[e].bind && (a.exListener = Kt[e].bind.call(t, e)),
          t._isDomEvent(e) && (o = t._domEventTarget(e)) && o.addEventListener
            ? ((r = function (e) {
                var i;
                return (
                  e.target !== e.currentTarget &&
                    t.getDoc &&
                    t.getDoc() &&
                    (i = t.getDoc().findElementByDom(e.target)),
                  se(
                    new Ut(e, {
                      target: i || t,
                      currentTarget: t,
                      iData: e.iData,
                    })
                  )
                );
              }),
              o.addEventListener(e, r, !1))
            : (((r = { id: "$event.handler" })[e] = function (t, i) {
                return se(new Ut(e, { target: t, currentTarget: t, iData: i }));
              }),
              t.addObserver(r)),
          (a.listener = r);
    }
  }
  function ee(t, e) {
    te(t, e, !0, !1, !0);
  }
  function ie(t, e) {
    var i,
      s = t._getBoundActions(e, !1);
    !s ||
      s.actions.length ||
      s._default ||
      s.bubble ||
      !s.listener ||
      (Kt[e] && Kt[e].unbind && Kt[e].unbind.call(t, e, s.exListener),
      t._isDomEvent(e) && (i = t._domEventTarget(e)) && i.addEventListener
        ? i.removeEventListener(e, s.listener, !1)
        : t.removeObserver(s.listener),
      (s.listener = null));
  }
  function se(t, e) {
    var i,
      s,
      n,
      o = t.currentTarget,
      r = o && o._getBoundActions(t.type, !1),
      a = r && r.actions;
    if (a) {
      (i = o.getDoc && o.getDoc()),
        void 0 === e &&
          (o.getScene &&
            o.getScene() &&
            o.getScene().getSceneLayer() === U.ACROSS &&
            (e = i && i.acrossScene),
          void 0 === e && (e = i && i.scene));
      var h,
        l = function (t) {
          return (t ? t.getSceneLayer() : U.MAIN) === U.ACROSS
            ? t === i.acrossScene
            : t === i.scene;
        };
      for (
        ++r.firing, s = 0;
        s < a.length &&
        (0 !== (n = a[s]).status ||
          (e && !l(e) && Yt(n.action)) ||
          (!1 === Wt(n.action, i, t) && t.preventDefault(),
          !t.isImmediatePropagationStopped()));
        ++s
      );
      if (
        (!(h = o._parentEventTarget(t.type)) ||
          t.isPropagationStopped() ||
          o._isDomEvent(t.type) ||
          ((t.currentTarget = h), se(t, e), (t.currentTarget = o)),
        t.isDefaultPrevented() ||
          !r._default ||
          (e && !l(e) && Yt(r._default)) ||
          Wt(r._default, i, t),
        --r.firing,
        0 === r.firing)
      ) {
        for (s = a.length - 1; s >= 0; --s)
          2 === a[s].status ? a.splice(s, 1) : (a[s].status = 0);
        a.length || r._default || !r.listener || ie(o, t.type);
      }
      return !t.isDefaultPrevented() && void 0;
    }
  }
  (Kt.swipeleft =
    Kt.swiperight =
    Kt.swipeup =
    Kt.swipedown =
      {
        bind: function (t) {
          return Kt.swipe.bind.call(this, t);
        },
        unbind: function (t, e) {
          Kt.swipe.unbind.call(this, t, e);
        },
      }),
    (Kt.keydown = Kt.keyup =
      {
        bind: function (t) {
          var e = this._domEventTarget(t);
          e && !e.hasAttribute("tabindex") && (e.tabIndex = +e.tabIndex);
        },
      });
  var ne = {
      _getBoundActions: function (t, e) {
        if (!this.$evtActions) {
          if (!e) return null;
          this.$evtActions = {};
        }
        var i = this.$evtActions[t];
        return (
          !i &&
            e &&
            (i = this.$evtActions[t] =
              { actions: [], firing: 0, listener: null }),
          i
        );
      },
      bind: function (t, e) {
        te(this, t, e, !1);
      },
      bindOnce: function (t, e) {
        if (e) {
          var i = function (s, n) {
            return this.unbind(t, i), Wt(e, s, n);
          };
          (i.$orgHandler = e), this.bind(t, i);
        }
      },
      unbind: function (t, e) {
        if (void 0 !== t) {
          typeof t !== tt && (t = I[t]);
          var i = this.$evtActions && this.$evtActions[t];
          if (i) {
            var s,
              n = i.actions;
            if (e || 0 !== i.firing)
              for (s = n.length - 1; s >= 0; --s)
                (n[s].action !== e && e && n[s].action.$orgHandler !== e) ||
                  (i.firing > 0 ? (n[s].status = 2) : n.splice(s, 1));
            else n.length = 0;
            ie(this, t);
          }
        } else if (this.$evtActions)
          for (t in this.$evtActions) void 0 !== t && this.unbind(t, e);
      },
      fireEvent: function (t, e) {
        var i, s, n, o, r, a;
        return (
          typeof t !== tt && (t = I[t]),
          this._isDomEvent(t) &&
          (i = this._domEventTarget(t)) &&
          i.dispatchEvent
            ? i.dispatchEvent(
                ((s = t),
                (r = !0),
                (a = !0),
                (n = { iData: e }) &&
                  (void 0 !== n.bubbles && (r = n.bubbles),
                  void 0 !== n.cancelable && (a = n.cancelable)),
                st.customEvent
                  ? (o = new CustomEvent(s, { bubbles: r, cancelable: a }))
                  : (o = Q.createEvent("Event")).initEvent(s, r, a),
                ft(o, n),
                o)
              )
            : !1 !== this.notifyObservers(t, e)
        );
      },
      _bindAll: function (t) {
        var e, i, s, n, o, r;
        if (t)
          for (e = 0, i = t.length; e < i; ++e)
            for (o = (r = t[e])[0], s = 1, n = r.length; s < n; ++s)
              this.bind(o, r[s]);
      },
      _domEventTarget: function (t) {
        return "resize" === t || "orientationchange" === t ? window : this.dom;
      },
      _isDomEvent: function (t) {
        return O.indexOf(t) < 0;
      },
      _parentEventTarget: function () {
        return null;
      },
    },
    oe = {
      ready: function (t) {
        t
          ? this.bindOnce("ready", t)
          : this.isReady && this.notifyObservers("ready");
      },
      bind: function (t, e) {
        typeof t !== tt && (t = I[t]),
          "ready" === t
            ? e && e.$orgHandler
              ? (ne.bind.call(this, t, e),
                this.isReady && this.notifyObservers(t))
              : this.bindOnce(t, e)
            : ne.bind.call(this, t, e);
      },
    },
    re = { INITIAL: 0, LOADING: 1, LOADED: 2, ERROR: 3, TIMEOUT: 4 };
  function ae(t, e, i) {
    return function (s) {
      t(!s),
        (e.progress = 1),
        s
          ? s.type === i
            ? ((e.status = re.LOADED), e.onload && e.onload())
            : ((e.status = re.ERROR),
              St(
                "Error loading " +
                  e.url +
                  ", event " +
                  s.type +
                  (e.dom.error ? ", error " + e.dom.error.code : "")
              ),
              e.onerror && e.onerror())
          : ((e.status = re.TIMEOUT),
            St("Timeout loading " + e.url),
            e.ontimeout && e.ontimeout()),
        e.oncomplete && e.oncomplete();
    };
  }
  function he(t) {
    var e,
      i = t.dom || (t.dom = new Image()),
      s = function (t) {
        t ||
          (i.removeEventListener("load", n, !1),
          i.removeEventListener("error", n, !1)),
          e && clearTimeout(e) && (e = null);
      },
      n = ae(s, t, "load");
    return (
      i.addEventListener("load", n, !1),
      i.addEventListener("error", n, !1),
      t.maxTime && (e = setTimeout(n, 1e3 * t.maxTime)),
      (t.cancel = function () {
        return s(!1), (this.dom.src = ""), !0;
      }),
      (t.progress = 0),
      (t.status = re.LOADING),
      (i.src = t.url),
      t
    );
  }
  function le(t) {
    var e,
      i,
      s =
        t.dom ||
        (t.dom = Q.createElement("audio" === t.type ? "audio" : "video")),
      n = function (t) {
        t ||
          (s.removeEventListener("canplaythrough", o, !1),
          s.removeEventListener("error", o, !1),
          s.removeEventListener("stalled", o, !1),
          s.removeEventListener("progress", i, !1)),
          e && clearTimeout(e) && (e = null);
      },
      o = ae(n, t, "canplaythrough");
    return (
      s.addEventListener("canplaythrough", o, !1),
      s.addEventListener("error", o, !1),
      t.maxTime
        ? (e = setTimeout(o, 1e3 * t.maxTime))
        : s.addEventListener("stalled", o, !1),
      t.onprogress &&
        ((i = function () {
          if (this.duration) {
            var e,
              i,
              s = 0;
            for (e = 0; e < this.buffered.length; ++e)
              s += this.buffered.end(e) - this.buffered.start(e);
            (i = s / this.duration) > t.progress &&
              ((t.progress = Math.min(i, 1)),
              t.onprogress && t.onprogress(t.progress));
          }
        }),
        s.addEventListener("progress", i, !1)),
      (t.cancel = function () {
        return n(!1), (this.dom.src = ""), !0;
      }),
      (t.progress = 0),
      (t.status = re.LOADING),
      (s.preload = "auto"),
      (s.src = t.url),
      s.load(),
      t
    );
  }
  function ce(t) {
    var e,
      i =
        t.dom || (t.dom = Q.createElement("css" == t.type ? "link" : "script")),
      s = ae(
        function (t) {
          t ||
            (i.removeEventListener("load", s, !1),
            i.removeEventListener("error", s, !1)),
            e && clearTimeout(e) && (e = null);
        },
        t,
        "load"
      );
    return (
      i.addEventListener("load", s, !1),
      i.addEventListener("error", s, !1),
      t.maxTime && (e = setTimeout(s, 1e3 * t.maxTime)),
      (t.cancel = function () {
        return !1;
      }),
      (t.progress = 0),
      (t.status = re.LOADING),
      "css" == t.type
        ? ((i.rel = "stylesheet"), (i.type = "text/css"), (i.href = t.url))
        : ((i.type = "text/javascript"), (i.src = t.url)),
      (
        Q.head ||
        Q.getElementsByTagName("head")[0] ||
        Q.documentElement
      ).insertBefore(i, null),
      t
    );
  }
  var de = { li: !0 },
    ue = _t(
      Nt,
      {
        $init: function (t) {
          Nt.prototype.$init.call(this),
            (this.started = !1),
            (this.paused = !1),
            (this.progress = 0),
            (this.complete = !1),
            (this.items = []),
            (this.loadingItems = []),
            (this.nextIdx = 0),
            (this.loadedCount = 0),
            (this.options = ft(
              {
                maxConnections: 8,
                maxTime: 0,
                maxItemTime: 10,
                holdCompletion: !1,
                audioTags: [],
                videoTags: [],
              },
              t
            ));
          var e = !1;
          (t = this.options).items &&
            ((e = !0), this.add(t.items), delete t.items),
            (this.paused = !!t.paused || !e),
            this.paused || this.load();
        },
        add: function (t) {
          if (t) {
            this.complete && this.clear(), pt(t) || (t = [t]);
            var e,
              i,
              s,
              n,
              o = this,
              r = function () {
                var t = o.loadingItems.indexOf(this);
                t > -1 &&
                  (o.loadingItems.splice(t, 1), ++o.loadedCount, o._update()),
                  o.notifyObservers("itemcomplete", this),
                  o.paused || o.complete || o.load();
              },
              a = function () {
                o._update();
              };
            for (e = 0, i = t.length; e < i; ++e)
              (s = t[e]) &&
                (((n = {
                  url: s.url || s,
                  progress: 0,
                  status: re.INITIAL,
                }).type = s.type || ue.getLoadType(n.url)),
                s.id && (n.id = s.id),
                (n.oncomplete = r),
                (n.onprogress = a),
                this.items.push(n));
            this.paused || this.load();
          }
        },
        load: function (t) {
          if (
            (this.add(t),
            (this.paused = !1),
            !this.started &&
              ((this.started = !0),
              this.notifyObservers("start"),
              this._update(),
              this.options.maxTime))
          ) {
            var e = this;
            this.timeoutId = setTimeout(function () {
              (e.timeoutId = null), e.notifyObservers("timeout");
            }, 1e3 * this.options.maxTime);
          }
          var i, s;
          for (
            i = this.nextIdx, s = this.items.length;
            i < s && !(this.loadingItems.length >= this.options.maxConnections);
            ++i
          )
            this.items[i].status === re.INITIAL
              ? this._loadItem(i)
              : i === this.nextIdx && ++this.nextIdx;
        },
        pause: function () {
          var t, e;
          if (!this.paused)
            for (
              this.paused = !0, t = this.loadingItems.length - 1;
              t >= 0;
              --t
            )
              (e = this.loadingItems[t]) &&
                e.cancel() &&
                (this.loadingItems.splice(t, 1),
                e.status === re.LOADING &&
                  ((e.status = re.INITIAL), (this.nextIdx = 0)));
        },
        clear: function () {
          var t = this.paused;
          this.pause(),
            (this.paused = t),
            (this.started = this.complete = !1),
            (this.progress = 0),
            (this.items.length = 0),
            (this.loadingItems.length = 0),
            (this.nextIdx = 0),
            (this.loadedCount = 0);
        },
        getProgress: function () {
          return this.progress;
        },
        holdCompletion: function (t) {
          void 0 === t && (t = !0),
            this.options.holdCompletion !== t &&
              ((this.options.holdCompletion = t), t || this._update());
        },
        _update: function () {
          if (this.started && !this.complete && !this.paused) {
            var t = 0;
            if (this.items.length) {
              var e, i;
              for (
                t = this.loadedCount, e = 0, i = this.loadingItems.length;
                e < i;
                ++e
              )
                t += this.loadingItems[e].progress;
              t /= this.items.length;
            } else t = 1;
            (t === this.progress && 0 !== t) ||
              (this.options.holdCompletion &&
                this.loadedCount === this.items.length) ||
              ((this.progress = t), this.notifyObservers("progress", t)),
              this.options.holdCompletion ||
                this.loadedCount !== this.items.length ||
                (this.timeoutId &&
                  (clearTimeout(this.timeoutId), (this.timeoutId = null)),
                (this.complete = !0),
                this.notifyObservers("complete"));
          }
        },
        _loadItem: function (t) {
          var e = this.items[t];
          if (e) {
            (e.maxTime = this.options.maxItemTime),
              this.loadingItems.push(e),
              this.notifyObservers("itemstart", this);
            var i = ue.getTypeLoader(e.type);
            i
              ? i(e)
              : ((e.status = re.ERROR),
                St("Error loading " + e.url + ", no loader found"),
                e.oncomplete());
          }
        },
      },
      ne,
      {
        getDoc: function () {
          return this.loaderDoc;
        },
        _isDomEvent: function () {
          return !1;
        },
      }
    );
  function pe(t) {
    var e = t.substr(t.lastIndexOf(".") + 1).toLowerCase(),
      i = e.lastIndexOf("?");
    return i > -1 && (e = e.substring(0, i)), e;
  }
  (ue.getLoadType = function (t) {
    var e = pe(t);
    switch (e) {
      case "js":
        return "javascript";
      case "css":
        return "css";
      default:
        return "mp3 ogg oga aac m4a wav".indexOf(e) >= 0
          ? "audio"
          : "mp4 m4v webm ogv".indexOf(e) >= 0
          ? "video"
          : "image";
    }
  }),
    (ue.getTypeLoader = function (t) {
      switch (t) {
        case "image":
          return he;
        case "audio":
        case "video":
          return le;
        case "javascript":
        case "css":
          return ce;
      }
      return null;
    });
  var fe = new ue(),
    me = [],
    ge = {
      version: 12,
      docVersions: [5, 5],
      docs: [],
      topDocs: [],
      docLoader: fe,
      loadedDocs: [],
      unsupportedBrowser: !st.transform,
      isReady: !1,
      isCompatible: function (t) {
        var e = t.v || this.docVersions[0];
        return this.docVersions[0] <= e && e <= this.docVersions[1];
      },
      openDoc: function (t, e, i) {
        if (((i = i || {}), this.unsupportedBrowser)) {
          if (!i.isPreloader) {
            var s,
              n = (function (t, e, i) {
                var s, n;
                for (
                  s = 0;
                  s < 2 &&
                  (!e ||
                    (e[i] && (n = e[i][t]),
                    !n && e._default && (n = e._default[t]),
                    !n));
                  ++s
                )
                  e = ge.messages;
                return n || "";
              })("unsupportedBrowser");
            typeof e === tt && ((s = e), (e = Q.getElementById(s))),
              e
                ? ge.showMessage(n, e)
                : s &&
                  ge.ready(function () {
                    (e = Q.getElementById(s)) && ge.showMessage(n, e);
                  });
          }
          return null;
        }
        return new mi(t, e, i);
      },
      closeDoc: function (t) {
        t && t.destroy();
      },
      findDoc: function (t, e) {
        var i,
          s,
          n,
          o,
          r = e ? this.docs : this.topDocs;
        if ((typeof t === tt && ((o = t), (t = Q.getElementById(o))), !o && !t))
          return null;
        for (i = 0, s = r.length; i < s; ++i)
          if (
            ((n = r[i]), (o && n.containerId === o) || (t && n.container === t))
          )
            return n;
        return null;
      },
      tick: function (t) {
        for (var e = 0, i = this.topDocs.length; e < i; ++e)
          this.topDocs[e].tick(t);
      },
      setAnimationTime: function (t) {
        ye.setTime(t);
      },
      clearAnimationTime: function () {
        ye.clearTime(), ye.start();
      },
    };
  function ve() {
    Q.removeEventListener("DOMContentLoaded", ve, !1),
      window.removeEventListener("load", ve, !1),
      ge.isReady || ((ge.isReady = !0), ge.ready());
  }
  ft(ge, new Nt(), ne, oe, {
    bind: function (t, e) {
      var i, s;
      if (
        (oe.bind.call(this, t, e),
        typeof t !== tt && (t = I[t]),
        "createdocument" === t)
      )
        for (i = 0, s = this.docs.length; i < s; ++i)
          Wt(e, this.docs[i], new Ut(t, { target: this, currentTarget: this }));
    },
    _isDomEvent: function () {
      return !1;
    },
  }),
    window.AtomiSaola && (ge.AtomiSaolaOld = window.AtomiSaola),
    (window.AtomiSaola = ge),
    window.addEventListener(
      "resize",
      function () {
        var t, e;
        for (t = 0, e = ge.topDocs.length; t < e; ++t)
          ge.topDocs[t].layoutIfNeeded();
      },
      !1
    ),
    "complete" === Q.readyState
      ? setTimeout(function () {
          ge.isReady || ((ge.isReady = !0), ge.ready());
        }, 0)
      : (Q.addEventListener("DOMContentLoaded", ve, !1),
        window.addEventListener("load", ve, !1));
  var ye = {
      FPS: 60,
      INTERVAL: 16,
      time: 0,
      syncTimes: [],
      ticking: !1,
      timerId: null,
      isRunning: function () {
        return !!this.timerId || void 0 !== this.exTime;
      },
      start: function () {
        this.stop(), this.requestNext();
      },
      stop: function () {
        (this.ticking = !1),
          this.timerId &&
            (cancelAnimationFrame(this.timerId), (this.timerId = null));
      },
      now: function () {
        var t = this.syncTimes;
        return (
          this.ticking ||
            ((this.time = void 0 !== this.exTime ? this.exTime : Date.now()),
            (t.length = 0)),
          t.length ? t[t.length - 1] : this.time
        );
      },
      pushSync: function (t) {
        this.syncTimes.push(t);
      },
      popSync: function () {
        this.syncTimes.pop();
      },
      requestNext: function () {
        void 0 === this.exTime && (this.timerId = requestAnimationFrame(Te));
      },
      setTime: function (t) {
        (this.exTime = t), Te();
      },
      clearTime: function () {
        delete this.exTime;
      },
    },
    _e = 0;
  function Te() {
    var t, e;
    if (
      (ye.now(),
      (ye.ticking = !0),
      ye.requestNext(),
      ge.tick(ye.time),
      me.length && ye.time - _e > 500)
    )
      for (_e = ye.time, t = 0, e = me.length; t < e; ++t) di(me[t]);
    ye.ticking = !1;
  }
  var we = {
      instant: function (t) {
        return t < 1 ? 0 : 1;
      },
      linear: function (t) {
        return t;
      },
      inQuad: function (t) {
        return t * t;
      },
      outQuad: function (t) {
        return t * (2 - t);
      },
      inOutQuad: function (t) {
        return t < 0.5 ? 2 * t * t : 2 * t * (2 - t) - 1;
      },
      outInQuad: function (t) {
        return t < 0.5 ? we.outQuad(2 * t) / 2 : 1 - we.outQuad(2 - 2 * t) / 2;
      },
      inCubic: function (t) {
        return t * t * t;
      },
      outCubic: function (t) {
        return --t * t * t + 1;
      },
      inOutCubic: function (t) {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      outInCubic: function (t) {
        return t < 0.5
          ? we.outCubic(2 * t) / 2
          : 1 - we.outCubic(2 - 2 * t) / 2;
      },
      inQuart: function (t) {
        return t * t * t * t;
      },
      outQuart: function (t) {
        return 1 - --t * t * t * t;
      },
      inOutQuart: function (t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      },
      outInQuart: function (t) {
        return t < 0.5
          ? we.outQuart(2 * t) / 2
          : 1 - we.outQuart(2 - 2 * t) / 2;
      },
      inQuint: function (t) {
        return t * t * t * t * t;
      },
      outQuint: function (t) {
        return 1 + --t * t * t * t * t;
      },
      inOutQuint: function (t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
      },
      outInQuint: function (t) {
        return t < 0.5
          ? we.outQuint(2 * t) / 2
          : 1 - we.outQuint(2 - 2 * t) / 2;
      },
      inSine: function (t) {
        return 1 - Math.cos((t * Math.PI) / 2);
      },
      outSine: function (t) {
        return Math.sin((t * Math.PI) / 2);
      },
      inOutSine: function (t) {
        return -(Math.cos(t * Math.PI) - 1) / 2;
      },
      outInSine: function (t) {
        return t < 0.5 ? we.outSine(2 * t) / 2 : 1 - we.outSine(2 - 2 * t) / 2;
      },
      inExpo: function (t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
      },
      outExpo: function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      },
      inOutExpo: function (t) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (t /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (t - 1))
          : 0.5 * (2 - Math.pow(2, -10 * --t));
      },
      outInExpo: function (t) {
        return t < 0.5 ? we.outExpo(2 * t) / 2 : 1 - we.outExpo(2 - 2 * t) / 2;
      },
      inCirc: function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
      },
      outCirc: function (t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2));
      },
      inOutCirc: function (t) {
        return (t /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      },
      outInCirc: function (t) {
        return t < 0.5 ? we.outCirc(2 * t) / 2 : 1 - we.outCirc(2 - 2 * t) / 2;
      },
      inElastic: function (t) {
        return 0 === t || 1 === t
          ? t
          : -Math.pow(2, 8 * (t - 1)) *
              Math.sin(((80 * (t - 1) - 7.5) * j) / 15);
      },
      outElastic: function (t) {
        return 1 - we.inElastic(1 - t);
      },
      inOutElastic: function (t) {
        return t < 0.5
          ? we.inElastic(2 * t) / 2
          : 1 - we.inElastic(2 - 2 * t) / 2;
      },
      outInElastic: function (t) {
        return t < 0.5
          ? we.outElastic(2 * t) / 2
          : 1 - we.outElastic(2 - 2 * t) / 2;
      },
      inBack: function (t) {
        return t * t * (2.70158 * t - 1.70158);
      },
      outBack: function (t) {
        return (t -= 1) * t * (2.70158 * t + 1.70158) + 1;
      },
      inOutBack: function (t) {
        var e = 1.70158;
        return (t /= 0.5) < 1
          ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      },
      outInBack: function (t) {
        return t < 0.5 ? we.outBack(2 * t) / 2 : 1 - we.outBack(2 - 2 * t) / 2;
      },
      inBounce: function (t) {
        for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; );
        return (
          1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        );
      },
      outBounce: function (t) {
        return 1 - we.inBounce(1 - t);
      },
      inOutBounce: function (t) {
        return t < 0.5
          ? we.inBounce(2 * t) / 2
          : 1 - we.inBounce(2 - 2 * t) / 2;
      },
      outInBounce: function (t) {
        return t < 0.5
          ? we.outBounce(2 * t) / 2
          : 1 - we.outBounce(2 - 2 * t) / 2;
      },
    },
    Se = {
      "-1": "instant",
      0: "linear",
      1: "inQuad",
      2: "outQuad",
      3: "inOutQuad",
      4: "outInQuad",
      5: "inCubic",
      6: "outCubic",
      7: "inOutCubic",
      8: "outInCubic",
      9: "inQuart",
      10: "outQuart",
      11: "inOutQuart",
      12: "outInQuart",
      13: "inQuint",
      14: "outQuint",
      15: "inOutQuint",
      16: "outInQuint",
      17: "inSine",
      18: "outSine",
      19: "inOutSine",
      20: "outInSine",
      21: "inExpo",
      22: "outExpo",
      23: "inOutExpo",
      24: "outInExpo",
      25: "inCirc",
      26: "outCirc",
      27: "inOutCirc",
      28: "outInCirc",
      29: "inElastic",
      30: "outElastic",
      31: "inOutElastic",
      32: "outInElastic",
      33: "inBack",
      34: "outBack",
      35: "inOutBack",
      36: "outInBack",
      37: "inBounce",
      38: "outBounce",
      39: "inOutBounce",
      40: "outInBounce",
    };
  we._default = we.inOutQuad;
  var be = _t({
      $init: function (t) {
        (this.t = t[0]),
          (this.d = t[2] || 0),
          (this.actions = t[1] || []),
          (this.fired = !1);
      },
      getStartTime: function () {
        return this.t;
      },
      setup: function (t) {
        this.fired = t.speed < 0 ? this.t + this.d > t.ts : this.t < t.ts;
      },
      reverse: function (t) {
        t.speed < 0
          ? this.t + this.d !== t.ts && (this.fired = this.t + this.d > t.ts)
          : this.t !== t.ts && (this.fired = this.t < t.ts);
      },
      fire: function (t) {
        if (!this.fired) {
          this.fired = !0;
          var e,
            i,
            s = this.actions,
            n = t.getDoc(),
            o = n && n.scene,
            r = { type: "timing", target: t, currentTarget: t };
          for (e = 0, i = s.length; e < i; ++e)
            (o && o !== n.scene && Yt(s[e])) || Wt(s[e], n, r);
        }
      },
    }),
    Ee = _t({
      $init: function (t, e, i) {
        (this.tween = Ee.createTween(t, e, i)),
          (this.t = e.t),
          (this.d = e.d),
          this.setEasing(e.es);
      },
      setup: function () {
        this.complete = this.preCompl = !1;
      },
      reverse: function () {
        this.complete = this.preCompl = !1;
      },
      update: function (t, e) {
        t >= this.d
          ? ((t = 1), e ? (this.preCompl = !0) : (this.complete = !0))
          : t <= 0
          ? ((t = 0), e ? (this.complete = !0) : (this.preCompl = !0))
          : (t = this.easing(t / this.d)),
          this.tween.update(t);
      },
      setEasing: function (t) {
        this.easing = typeof t === et ? t : we[Se[t]] || we[t] || we._default;
      },
      getStartTime: function () {
        return this.t;
      },
      getDuration: function () {
        return this.d;
      },
      getEndTime: function () {
        return this.t + this.d;
      },
    }),
    xe = _t(Ee, {
      $init: function (t, e, i) {
        Ee.prototype.$init.call(this, t, e, i),
          (this.timeline = null),
          (this.isPlayback = !0);
        var s = this;
        this.timelineObs = {
          play: function (t) {
            s.isCurrent(t.ts, t.isPlayBackward(), !1) &&
              s.tween.update(t.ts - s.t, t, Re.Flags.PLAYING);
          },
          pause: function (t) {
            s.isCurrent(t.ts, t.isPlayBackward(), !1) &&
              s.tween.update(t.ts - s.t, t, Re.Flags.PLAYING);
          },
          speedchange: function (t) {
            s.isCurrent(t.ts, t.isPlayBackward(), !1) &&
              s.tween.update(t.ts - s.t, t, Re.Flags.SPEED);
          },
        };
      },
      setup: function (t) {
        (this.timeline = t),
          Ee.prototype.setup.call(this, t),
          this.isCurrent(t.ts, t.isPlayBackward(), !0) &&
            (this.tween.update(t.ts - this.t, t, Re.Flags.ALL),
            (t.isPlayBackward() ? t.ts <= this.t + this.d : t.ts >= this.t) &&
              (this.complete = !0));
      },
      reverse: function (t) {
        (this.timeline = t),
          Ee.prototype.reverse.call(this, t),
          this.isCurrent(t.ts, t.isPlayBackward(), !1) &&
            this.tween.update(t.ts - this.t, t, Re.Flags.DIRECTION);
      },
      update: function (t, e) {
        this.timeline &&
          this.isCurrent(
            this.timeline.ts,
            this.timeline.isPlayBackward(),
            !0
          ) &&
          this.timeline.ts ===
            (this.timeline.isPlayBackward() ? this.t + this.d : this.t) &&
          (this.tween.update(
            this.timeline.ts - this.t,
            this.timeline,
            Re.Flags.ACTION
          ),
          (this.complete = !0));
      },
      isCurrent: function (t, e, i) {
        if (t < this.t) {
          if (this.prev) return e && i && (this.complete = !0), !1;
        } else if (this.next && t >= this.next.t)
          return !e && i && (this.complete = !0), !1;
        return !0;
      },
    }),
    De = /[a-zA-Z%]+$/;
  function Ae(t) {
    var e = { unit: null };
    return (
      typeof t === tt
        ? ((e.value = parseFloat(t)),
          (e.unit = t.match(De)),
          e.unit && (e.unit = e.unit[0]))
        : (e.value = t),
      e
    );
  }
  var Me = _t({
      $init: function (t, e, i) {
        var s;
        ((t = Je.getShortName(t)),
        (this.elem = i),
        (this.p = t),
        (this.d = e.d),
        (this.s = e.s),
        (this.e = e.e),
        (this.u = e.u),
        void 0 === e.u && "ts" != t) &&
          (typeof e.s == tt &&
            ((s = Ae(e.s)),
            isNaN(s.value) || ((this.s = s.value), (this.u = s.unit))),
          typeof e.e == tt &&
            ((s = Ae(e.e)),
            isNaN(s.value) || ((this.e = s.value), (this.u = s.unit))));
        Et(this.s) && Et(this.e) && (this.delta = this.e - this.s);
      },
      update: function (t) {
        void 0 !== this.delta
          ? this.elem.setProperty(this.p, this.s + this.delta * t, this.u)
          : this.elem.setProperty(this.p, t < 1 ? this.s : this.e, this.u);
      },
      getDuration: function () {
        return this.d;
      },
    }),
    Ce = {
      _default: function (t, e, i) {
        return new Me(t, e, i);
      },
    };
  (Ee.regTweenType = function (t) {
    for (var e = arguments.length; --e > 0; ) Ce[arguments[e]] = t;
  }),
    (Ee.createTween = function (t) {
      return (Ce[Je.getShortName(t)] || Ce._default).apply(null, arguments);
    });
  var Pe = _t(Me, {
    update: function (t) {
      this.elem.setProperty(this.p, t < 1 ? this.s : this.e, this.u);
    },
  });
  Ee.regTweenType(
    function (t, e, i) {
      return new Pe(t, e, i);
    },
    "d",
    "ts"
  );
  var Re = _t(Me, {
    $init: function (t, e, i) {
      Me.prototype.$init.call(this, t, e, i),
        (this.action = e.a[0]),
        (this.s = e.a[1]),
        (this.speed = e.a[2] || 1);
    },
    update: function (t, e, i) {
      switch (this.action) {
        case N:
        case L:
        case F:
          var s;
          i & Re.Flags.PLAYING &&
            (s = !e.isPlaying() || (e.isPlayBackward() ? t > this.d : t < 0)) &&
            this.elem.pause(),
            i & Re.Flags.SPEED &&
              this.elem.setSpeed(Math.abs(e.getSpeed() * this.speed)),
            i & Re.Flags.DIRECTION &&
              this.elem.setPlayBackward &&
              this.elem.setPlayBackward(this.speed < 0 !== e.isPlayBackward()),
            (i & Re.Flags.TIME ||
              (i & Re.Flags.TIMEACTION && (this.action !== N || 0 !== t))) &&
              this.elem.seek(this.s + this.speed * t),
            i & Re.Flags.PLAYING &&
              !s &&
              ((this.elem.isEnded && this.elem.isEnded()) || this.elem.play());
          break;
        case B:
        case H:
          i & Re.Flags.PLAYING && this.elem.pause(),
            (i & Re.Flags.TIME ||
              (this.action === H && i & Re.Flags.TIMEACTION)) &&
              this.elem.seek(this.s);
      }
    },
  });
  (Re.Flags = {
    TIME: 1,
    TIMEACTION: 2,
    PLAYING: 4,
    SPEED: 8,
    DIRECTION: 16,
    ACTION: 30,
    ALL: 255,
  }),
    Ee.regTweenType(function (t, e, i) {
      return new Re(t, e, i);
    }, "pb");
  var Oe = _t(Me, {
    $init: function (t, e, i) {
      if ((Me.prototype.$init.call(this, t, e, i), pt(this.s) && pt(this.e))) {
        var s,
          n = this.s[3],
          o = this.e[3];
        for (
          void 0 === n && (n = 255),
            void 0 === o && (o = 255),
            this._s = [],
            this._e = [],
            this.delta = [],
            s = 0;
          s < 3;
          ++s
        )
          (this._s[s] = this.s[s] * n),
            (this._e[s] = this.e[s] * o),
            (this.delta[s] = this._e[s] - this._s[s]);
        (this._s[3] = n), (this._e[3] = o), (this.delta[3] = o - n);
      }
    },
    update: function (t) {
      if (void 0 !== this.delta) {
        var e,
          i,
          s = [],
          n = bt(this._s[3] + this.delta[3] * t, 0, 255);
        for (e = 0; e < 3; ++e)
          (i = this._s[e] + this.delta[e] * t),
            (s[e] = i ? bt(i / n, 0, 255) : i);
        (s[3] = n), this.elem.setProperty(this.p, s);
      } else this.elem.setProperty(this.p, t < 1 ? this.s : this.e, this.u);
    },
  });
  function Ie(t, e, i) {
    var s = i * i,
      n = s * i,
      o = 1 - i,
      r = o * o,
      a = r * o,
      h = 3 * r * i,
      l = 3 * o * s;
    return {
      x: a * t[0] + h * t[4] + l * e[2] + n * e[0],
      y: a * t[1] + h * t[5] + l * e[3] + n * e[1],
    };
  }
  function ke(t, e, i, s, n) {
    var o = Math.floor(i[s].t),
      r = (i[s].t + i[s + 1].t) / 2 - o,
      a = Ie(t, e, r),
      h = { x: i[s].x, y: i[s].y },
      l = { x: i[s + 1].x, y: i[s + 1].y },
      c = 0;
    return (
      (Le(a, { x: (h.x + l.x) / 2, y: (h.y + l.y) / 2 }) > n ||
        Le(h, l) > 4 * n) &&
        ((a.t = o + r),
        i.splice(s + 1, 0, a),
        (c = 1 + ke(t, e, i, s + 1, n)),
        (c += ke(t, e, i, s, n))),
      c
    );
  }
  function Le(t, e) {
    var i = e.x - t.x,
      s = e.y - t.y;
    return Math.sqrt(i * i + s * s);
  }
  Ee.regTweenType(
    function (t, e, i) {
      return new Oe(t, e, i);
    },
    "fc",
    "lc",
    "tc",
    "thc",
    "shc"
  );
  var Ne = _t(Me, {
    $init: function (t, e, i) {
      Me.prototype.$init.call(this, t, e, i),
        (this.cpoints = e.cp || []),
        (this.autoOrient = e.ao || 0),
        this.createPath(),
        this.calcLen();
    },
    update: function (t) {
      if (this.cpoints.length < 2) {
        var e = t < 1 ? this.s : this.e;
        Je.set(this.elem, {
          tX: pt(e) ? e[0] : e,
          tY: pt(e) ? e[1] : e,
          rZM: "",
        });
      } else {
        var i = this.getT(t),
          s = Math.floor(i),
          n = this.cpoints,
          o = n.length - 2;
        s < 0
          ? ((s = 0), (i = 0))
          : (s > o && (s = o), (i -= s) > 1 && (i = 1));
        var r,
          a,
          h,
          l,
          c,
          d,
          u,
          p,
          f,
          m = Ie(n[s], n[s + 1], i),
          g = i,
          v = "";
        g < 1e-6 ? (g = 1e-6) : g > 0.999999 && (g = 0.999999),
          (l = n[s]),
          (c = n[s + 1]),
          (u = (d = g) * d),
          (a = {
            x:
              3 * (f = (p = 1 - d) * p) * (l[4] - l[0]) +
              6 * p * d * (c[2] - l[4]) +
              3 * u * (c[0] - c[2]),
            y:
              3 * f * (l[5] - l[1]) +
              6 * p * d * (c[3] - l[5]) +
              3 * u * (c[1] - c[3]),
          }),
          (t < 0 || t > 1) &&
            (r = Math.sqrt(a.x * a.x + a.y * a.y)) > 0 &&
            ((h = t > 1 ? t - 1 : t),
            (m.x += (h * this.pathLen * a.x) / r),
            (m.y += (h * this.pathLen * a.y) / r)),
          this.autoOrient &&
            ((v = (180 * Math.atan2(a.y, a.x)) / j),
            this.autoOrient < 0 && (v += 180)),
          Je.set(this.elem, { tX: m.x, tY: m.y, rZM: v });
      }
    },
    createPath: function () {
      this.path = [];
      var t,
        e,
        i,
        s,
        n = this.cpoints,
        o = n.length - 1,
        r = this.path;
      for (t = 0; t < o; ++t)
        for (e = 0; e < 4; ++e)
          (i = e / 4), ((s = Ie(n[t], n[t + 1], i)).t = t + i), r.push(s);
      for (
        o >= 0 && (((s = Ie(n[o - 1] || n[o], n[o], 1)).t = o), r.push(s)),
          t = o - 1;
        t >= 0;
        --t
      )
        for (e = 3; e >= 0; --e) ke(n[t], n[t + 1], r, 4 * t + e, 2);
    },
    calcLen: function () {
      this.path || this.createPath();
      var t,
        e = this.path,
        i = 0,
        s = e.length - 1;
      for (t = 0; t < s; ++t) (e[t].l = i), (i += Le(e[t], e[t + 1]));
      s >= 0 && (e[s].l = i), (this.pathLen = i), (this.lenTimes = []);
      var n,
        o,
        r = this.lenTimes,
        a = i,
        h = this.getDuration() > 0 ? (a * ye.INTERVAL) / this.getDuration() : a;
      if (((this.stepLen = h), h > 0))
        for (t = 0, i = 0; t < s; )
          if (e[t + 1].l < i) ++t;
          else if (
            ((n = e[t]),
            (o = e[t + 1]),
            r.push({
              l: i,
              t:
                o.l > n.l ? n.t + ((i - n.l) * (o.t - n.t)) / (o.l - n.l) : n.t,
            }),
            (i += h) > a)
          )
            break;
      0 == r.length && r.push({ l: 0, t: 0 }),
        s >= 0 &&
          (r.length < 2 || r[r.length - 1].t < e[s].t) &&
          r.push({ l: a, t: e[s].t });
    },
    getT: function (t) {
      this.lenTimes || this.calcLen();
      var e,
        i,
        s,
        n,
        o = t * this.pathLen,
        r = this.lenTimes,
        a = r.length;
      return (
        0 == a
          ? (e = 0)
          : 1 == a
          ? (e = r[0].t)
          : ((s =
              r[
                (i =
                  this.stepLen > 0
                    ? Math.min(Math.max(0, Math.floor(o / this.stepLen)), a - 2)
                    : 0)
              ]),
            (e =
              (n = r[i + 1]).l > s.l
                ? s.t + ((o - s.l) * (n.t - s.t)) / (n.l - s.l)
                : s.t)),
        e
      );
    },
  });
  Ee.regTweenType(function (t, e, i) {
    return new Ne(t, e, i);
  }, "pos");
  var Fe = _t(Me, {
    $init: function (t, e, i) {
      Me.prototype.$init.call(this, t, e, i);
      var s = new Ai(),
        n = this.s,
        o = this.e;
      (this.sW = n[1]),
        (this.sH = n[2]),
        (this.eW = o[1]),
        (this.eH = o[2]),
        (n = this.s = n[0]),
        (o = this.e = o[0]),
        typeof n != tt && (s.clear(), Mi(s, n), (n = s.getPath())),
        typeof o != tt && (s.clear(), Mi(s, o), (o = s.getPath())),
        (this._morph = polymorph.interpolate([n, o], {
          addPoints: 0,
          origin: { x: 0, y: 0 },
          optimize: e.dm ? "none" : "fill",
          precision: 0,
        }));
    },
    update: function (t) {
      var e,
        i = this.sW,
        s = this.sH;
      0 == t
        ? (e = this.s)
        : 1 == t
        ? ((e = this.e), (i = this.eW), (s = this.eH))
        : (e = this._morph(t)),
        this.elem.setPath && this.elem.setPath(e, i, s);
    },
  });
  function Be(t) {
    var e = t
      .split(/\s*[\s,]\s*/)
      .filter(function (t) {
        return t && !isNaN(t);
      })
      .map(function (t) {
        return Math.max(+t, 0);
      });
    return e.length % 2 == 1 && (e = e.concat(e)), e;
  }
  Ee.regTweenType(function (t, e, i) {
    return new Fe(t, e, i);
  }, "p");
  var He = _t(Me, {
    $init: function (t, e, i) {
      var s, n, o, r;
      if (
        (Me.prototype.$init.call(this, t, e, i),
        (o = this.s = Be(e.s)),
        (r = this.e = Be(e.e)),
        o.length != r.length)
      ) {
        for (n = Math.max(o.length, r.length); o.length < n; ) o.push(0);
        for (; r.length < n; ) r.push(0);
      }
      for (this.delta = [], s = 0, n = o.length; s < n; ++s)
        this.delta[s] = r[s] - o[s];
    },
    update: function (t) {
      var e,
        i,
        s = [];
      for (e = 0, i = this.delta.length; e < i; ++e)
        s.push(Math.max(this.s[e] + this.delta[e] * t, 0));
      this.elem.setDashArray && this.elem.setDashArray(s);
    },
  });
  Ee.regTweenType(function (t, e, i) {
    return new He(t, e, i);
  }, "da");
  var We = _t({
      $init: function () {
        (this.t = this.d = 0), (this.anims = []);
      },
      setup: function (t) {
        this.complete = this.preCompl = !1;
        var e,
          i = this.anims;
        for (e = 0; e < i.length; ++e) i[e].setup(t);
      },
      reverse: function (t) {
        this.complete = this.preCompl = !1;
        var e,
          i = this.anims;
        for (e = 0; e < i.length; ++e) i[e].reverse(t);
      },
      update: function (t, e) {
        var i,
          s,
          n,
          o = this.anims;
        for (i = 0; i < o.length; ++i)
          if (!(n = o[i]).complete) {
            if (((s = !1), t < n.t)) {
              if ((e ? (n.complete = !0) : (s = !0), n.prev)) continue;
            } else if (
              t > n.t + n.d &&
              (e ? (s = !0) : (n.complete = !0), n.next && t >= n.next.t)
            )
              continue;
            if (s) {
              if (n.preCompl) continue;
              n.preCompl = !0;
            }
            n.update(t - n.t, e);
          }
      },
      getStartTime: function () {
        return this.t;
      },
      getDuration: function () {
        return this.d;
      },
      trim: function () {
        var t,
          e,
          i,
          s = this.anims,
          n = s.length;
        if (!(n < 1)) {
          for (i = s[0].t, e = 1; e < n; ++e) (t = s[e]).t < i && (i = t.t);
          if (i) for (this.t += i, this.d -= i, e = 0; e < n; ++e) s[e].t -= i;
        }
      },
      updateDuration: function () {
        this.d = this._calcDur();
      },
      _calcDur: function () {
        var t,
          e,
          i,
          s = this.anims,
          n = 0;
        for (e = 0, i = s.length; e < i; ++e)
          n < (t = s[e].getEndTime()) && (n = t);
        return n;
      },
      getEndTime: function () {
        return this.t + this.d;
      },
      add: function (t) {
        var e = this.anims,
          i = e[e.length - 1],
          s = t.getEndTime();
        e.push(t),
          this.d < s && (this.d = s),
          (t.prev = t.next = null),
          i &&
            i.tween &&
            t.tween &&
            i.tween.elem == t.tween.elem &&
            i.tween.p == t.tween.p &&
            ((t.prev = i), (i.next = t));
      },
    }),
    Ye = _t(We, {
      $init: function () {
        We.prototype.$init.call(this);
      },
      update: function (t, e) {
        var i,
          s,
          n,
          o,
          r,
          a,
          h,
          l,
          c,
          d = this.anims;
        for (i = d.length - 1; i >= 0; --i)
          if (((r = (s = d[i]).complete), t < s.t))
            e && (s.complete = !0), (!o || o.t > s.t) && ((o = s), (h = r));
          else {
            if (t <= (c = s.t + s.d)) break;
            e || (s.complete = !0),
              (!n || l < c) && ((n = s), (l = c), (a = r));
          }
        i < 0 &&
          ((s = null),
          n
            ? (e && n.preCompl) || ((s = n), (r = a))
            : o && ((!e && o.preCompl) || ((s = o), (r = h)))),
          s && !r && s.update(t - s.t, e);
      },
    });
  function Ve(t, e, i) {
    var s = t && t[e];
    if (!s) return null;
    var n = 0,
      o = 0;
    return (
      (i.textAnimEnabled && !i.textAnimEnabled()) ||
        ((n = s.ta) && (o = n | i._DEF.taf | Ge(t))),
      {
        startTime: s.t,
        endTime: s.t + s.d,
        background: s.ao,
        chars: Z.CHARS & n,
        words: Z.WORDS & n,
        textDirection: s.to,
        firstTextDelay: s.d,
        textDelay: s.d ? (s.d * s.td) / 100 : 1e3 * s.td,
        textDelayEasing: we[Se[s.de]],
        textSplit: {
          chars: Z.CHARS & o,
          words: Z.WORDS & o,
          processStyles: "backgroundColor, textDecoration",
        },
      }
    );
  }
  function Ge(t) {
    var e = 0;
    if (t)
      if (void 0 !== t._taf) e = t._taf;
      else {
        var i, s;
        for (i in t) (s = t[i]) && s.ta && (e |= s.ta);
        t._taf = e;
      }
    return e;
  }
  var Ue =
    "cl c d o tp b lt rt toX toY toZ pos tX tY tZ rX rY rZ rZM skX skY sX sY sZ fz tc ls".split(
      " "
    );
  function Xe(t, e, i) {
    return (
      i &&
      (i.chars || i.words) &&
      t.splitText &&
      Ue.indexOf(e) >= 0 &&
      t.getText()
    );
  }
  function ze(t, e, i, s, n) {
    var o,
      r = null;
    return (
      i &&
        (o = i.length) > 0 &&
        (o > 1 || Xe(t, e, n)
          ? (((r = new We()).elem = t),
            (r.prop = e),
            qe(r, t, e, i, s, n),
            r.trim())
          : (r = Ze.createAnimation(e, i[0], t))),
      r && void 0 !== s && (r.effectId = s),
      r
    );
  }
  function $e(t, e, i, s, n, o, r) {
    var a = Ze.createAnimation(i, s, e);
    a &&
      (e != o && o && (a.ownerElem = o),
      void 0 !== n && (a.effectId = n),
      r && (a.ownerProp = r),
      t.add(a));
  }
  function qe(t, e, i, s, n, o) {
    var r,
      a,
      h,
      l,
      c,
      d,
      u = 0,
      p = [],
      f = Xe(e, i, o);
    if (f) {
      var m = e.splitTexts;
      (!m || (o.chars && !m.chars) || (o.words && !m.words)) &&
        (e.splitText(o.textSplit), (m = e.splitTexts)),
        o.background && (e.hasFill() || e.hasLine())
          ? (p.push(e.painter), (u = o.firstTextDelay))
          : p.push(null),
        m &&
          (o.chars && m.chars
            ? (p = p.concat(m.chars))
            : o.words && m.words && (p = p.concat(m.words)));
    } else p.push(e);
    if (((d = s.length), (a = p.length), d && a)) {
      var g,
        v = 0,
        y = [0];
      if (a > 1) {
        var _ = (function (t, e, i, s) {
          var n,
            o,
            r = 0,
            a = !1,
            h = [],
            l = 0;
          for (
            i == q.END
              ? (r = 1)
              : i == q.FROM_CENTER
              ? (r = 0.5)
              : i == q.TO_CENTER
              ? ((r = 0.5), (a = !0))
              : Math.abs(i) <= 1 && ((r = Math.abs(i)), (a = i < 0)),
              r *= t - 1,
              o = 0;
            o < t;
            ++o
          )
            (n = Math.floor(Math.abs(o - r))), h.push(n), n > l && (l = n);
          for (e *= t - 1, o = 0; o < t; ++o)
            (n = l ? h[o] / l : 0),
              a && (n = 1 - n),
              (h[o] = Math.round((s ? s(n) : n) * e));
          return (
            i == q.RAND &&
              h.sort(function () {
                return Math.random() - 0.5;
              }),
            h
          );
        })(a - 1, o.textDelay, o.textDirection, o.textDelayEasing);
        for (r = 1; r < a; ++r) (g = u + _[r - 1]) > v && (v = g), y.push(g);
      }
      o && (v += o.endTime);
      var T = { t: v, d: 0, s: "", e: "" };
      for (r = 0; r < a; ++r) {
        var w = p[r];
        if (w)
          for (g = y[r], c = 0; c < d; ++c)
            (l = (h = s[c]).t), (h.t += g), $e(t, w, i, h, n, e), (h.t = l);
        else {
          if (0 != r) continue;
          if (
            ((w = e.painter),
            ((h = ft({}, s[0], { t: o.startTime, d: 0 })).e = h.s),
            "pos" == i && h.cp && h.cp.length >= 2)
          ) {
            var S = h.cp,
              b = S[0],
              E = S[1].slice(),
              x = b.slice();
            (E[4] = E[2]),
              (E[5] = E[3]),
              (x[2] = x[4]),
              (x[3] = x[5]),
              (h.cp = [b, E, x]),
              h.ao && (h.ao *= -1);
          }
          $e(t, w, i, h, n, e);
        }
        f && $e(t, w, i, T, n, e);
      }
      if (f) {
        if ((m && !m.processEffects) || !m.processEffects[n]) {
          m.processEffects || (m.processEffects = {}),
            (m.processEffects[n] = i);
          var D = m.listItems;
          if (D)
            for (r = 0; r < D.length; ++r) {
              var A = D[r].dom.style.listStyleType || "";
              $e(
                t,
                D[r],
                "listStyleType",
                { t: o.startTime, d: 0, s: A, e: "none" },
                n,
                e,
                i
              ),
                $e(
                  t,
                  D[r],
                  "listStyleType",
                  { t: v, d: 0, s: "none", e: A },
                  n,
                  e,
                  i
                );
            }
          if (m.processStyles)
            for (var M in m.processStyles) {
              var C = m.processStyles[M];
              if (C && C.length) {
                var P = "backgroundColor" == M ? "textHighlightColor" : M;
                for (r = 1; r < a; ++r)
                  for (c = C.length - 1; c >= 0; --c)
                    if (C[c].dom.contains(p[r].dom)) {
                      var R = C[c].dom.style[M];
                      $e(
                        t,
                        p[r],
                        P,
                        { t: o.startTime, d: 0, s: "", e: R },
                        n,
                        e,
                        i
                      );
                      break;
                    }
                for (r = 0; r < C.length; ++r)
                  (R = C[r].dom.style[M]),
                    $e(
                      t,
                      C[r],
                      P,
                      { t: o.startTime, d: 0, s: R, e: "" },
                      n,
                      e,
                      i
                    ),
                    $e(t, C[r], P, { t: v, d: 0, s: "", e: R }, n, e, i);
              }
            }
        }
        for (
          T.t = o.startTime,
            "d" == i && (T.s = s[0].s),
            s = [T, (h = ft({}, s[d - 1], { t: v, d: 0 }))],
            c = 0;
          c < s.length;
          ++c
        )
          $e(t, e, i, s[c], n, e);
      }
    }
  }
  var Ze = _t(
      We,
      Nt.prototype,
      {
        $init: function (t, e) {
          Nt.prototype.$init.call(this),
            We.prototype.$init.call(this),
            (this.id = t.id),
            (this.name = t.n),
            (this.d = t.dur),
            (this.ts = 0),
            (this.t = void 0),
            (this.paused = !0),
            (this.speed = 1),
            (this.labels = t.l || {}),
            (this.events = []),
            (this.doc = e.getDoc()),
            (this._DEF = t),
            (this._id2Elem = e);
          var i,
            s,
            n = t.t || [];
          for (i = 0, s = n.length; i < s; ++i) this.events.push(new be(n[i]));
          this._recreateAnims(), this._bindAll(t.e);
        },
        getElement: function (t) {
          return this._id2Elem.getElement(t);
        },
        add: function (t) {
          We.prototype.add.call(this, t),
            t.isPlayback &&
              ((t.timingEvent = new be([
                t.getStartTime(),
                [],
                t.getDuration(),
              ])),
              this.addTimingEvent(t.timingEvent),
              this.addObserver(t.timelineObs));
        },
        _getAnimData: function () {
          var t,
            e,
            i,
            s,
            n = this._DEF,
            o = this.doc.hBreakpoint,
            r = this.doc.vBreakpoint,
            a = n.ra || [];
          if (n.anims) s = n.anims;
          else
            for (e = 0, i = a.length; e < i; ++e)
              if ((t = a[e])[0] == o && t[1] == r) {
                s = t[2];
                break;
              }
          return s || [];
        },
        _recreateAnims: function () {
          var t,
            e,
            i,
            s,
            n,
            o,
            r,
            a,
            h,
            l,
            c = this.anims;
          for (e = 0, i = c.length; e < i; ++e)
            (n = (t = c[e]).anims ? t.elem : t.ownerElem || t.tween.elem) &&
              n.splitTexts &&
              delete n.splitTexts.processEffects,
              t.isPlayback &&
                ((s = this.events.indexOf(t.timingEvent)) >= 0 &&
                  this.events.splice(s, 1),
                this.removeObserver(t.timelineObs));
          for (
            c.length = 0, e = 0, i = (c = this._getAnimData()).length;
            e < i;
            ++e
          )
            if (((a = c[e]), (n = this.getElement(a[0]))))
              for (l = a[2], o = 0, r = (a = a[1]).length; o < r; ++o)
                (h = a[o]), this._addPropAnims(n, h[0], h[1], h[2], l);
          if ((this.updateDuration(), void 0 !== this.t)) {
            var d = this.complete;
            this.seek(this.ts), (this.complete = d);
          }
        },
        _hasTextAnim: function (t) {
          var e,
            i,
            s,
            n = this._getAnimData();
          for (e = 0, i = n.length; e < i; ++e)
            if (((s = n[e]), this.getElement(s[0]) == t)) return 0 != Ge(s[2]);
          return !1;
        },
        _recreateTextAnims: function (t) {
          var e,
            i,
            s,
            n,
            o,
            r,
            a,
            h,
            l,
            c = this._getAnimData(),
            d = !1;
          for (e = 0, i = c.length; e < i; ++e)
            if (
              ((o = c[e]),
              (r = this.getElement(o[0])),
              (l = Ge((h = o[2]))),
              r && l && (!t || t(r)))
            )
              for (
                d = !0, this._removePropAnims(r), s = 0, n = (o = o[1]).length;
                s < n;
                ++s
              )
                (a = o[s]), this._addPropAnims(r, a[0], a[1], a[2], h);
          if (d && (this.updateDuration(), void 0 !== this.t)) {
            var u = this.complete;
            this.seek(
              nt && window.canvas && this.paused
                ? window.canvas.currentTime
                : this.ts
            ),
              (this.complete = u);
          }
        },
        _addPropAnims: function (t, e, i, s, n) {
          var o, r;
          if (
            ((e = Je.getShortName(e)),
            s && s.length && (1 != s.length || (i && i.length)))
          ) {
            var a,
              h,
              l,
              c = new Ye();
            for (
              c.elem = t,
                c.prop = e,
                i && i.length && (a = ze(t, e, i)) && c.add(a),
                h = 0,
                l = s.length;
              h < l;
              ++h
            )
              (r = s[h][0]),
                (a = ze(t, e, s[h][1], r, Ve(n, r, t))) && c.add(a);
            c.trim(), this.add(c);
          } else
            s && 1 == s.length ? ((r = s[0][0]), (o = s[0][1])) : (o = i),
              o && qe(this, t, e, o, r, Ve(n, r, t));
        },
        _removePropAnims: function (t, e) {
          e = Je.getShortName(e);
          var i,
            s,
            n,
            o,
            r = this.anims,
            a = !1;
          for (s = r.length - 1; s >= 0; --s)
            if (
              ((i = r[s]).anims
                ? ((n = i.elem), (o = i.prop))
                : ((n = i.ownerElem || i.tween.elem),
                  (o = i.ownerProp || i.tween.p)),
              n == t && (e == o || void 0 === e))
            ) {
              if (
                (r.splice(s, 1), t.splitTexts && t.splitTexts.processEffects)
              ) {
                var h = t.splitTexts;
                if (void 0 === e) delete h.processEffects;
                else
                  for (var l in h.processEffects)
                    h.processEffects[l] == e && delete h.processEffects[l];
              }
              if (
                (!a && i.getEndTime() >= this.d && (a = !0),
                i.isPlayback && this.events)
              ) {
                var c = this.events.indexOf(i.timingEvent);
                c >= 0 && this.events.splice(c, 1),
                  this.removeObserver(i.timelineObs);
              }
            }
          a && this.updateDuration();
        },
        getDoc: function () {
          return this.doc;
        },
        getTimestamp: function () {
          return this.ts;
        },
        getLabelTimestamp: function (t) {
          return this.labels[t];
        },
        _calcDur: function () {
          var t,
            e,
            i,
            s,
            n = We.prototype._calcDur.call(this);
          for (i = 0, s = this.events.length; i < s; ++i)
            n < (e = (t = this.events[i]).t + t.d) && (n = e);
          for (i in this.labels)
            (e = this.labels[i]), !isNaN(e) && n < e && (n = e);
          return n;
        },
        start: function (t, e) {
          var i = e;
          void 0 === i && (i = this.speed < 0),
            this.play(i ? this.getDuration() : 0, t, e);
        },
        play: function (t, e, i) {
          var s = this.doc.scene;
          void 0 !== e && this.setSpeed(e),
            void 0 !== i && this.setPlayBackward(i);
          var n = !1;
          this.paused &&
            ((this.paused = !1), (n = !0), this.notifyObservers("play")),
            typeof t === tt && (t = this.labels[t]),
            void 0 === t
              ? n &&
                (void 0 === this.t
                  ? this.seek(this.speed < 0 ? this.d : 0)
                  : ((this.t =
                      ye.now() -
                      this.ts / (this.doc.getEffectiveSpeed() * this.speed)),
                    this.update(this.ts)))
              : this.seek(t),
            s === this.doc.scene && this._checkComplete();
        },
        pause: function (t) {
          this.paused || ((this.paused = !0), this.notifyObservers("pause")),
            typeof t === tt && (t = this.labels[t]),
            void 0 !== t && this.seek(t);
        },
        isPlaying: function () {
          return !this.paused;
        },
        seek: function (t) {
          if (typeof t !== tt || void 0 !== (t = this.labels[t])) {
            var e,
              i,
              s = (t = bt(t, 0, this.d)) !== this.ts || void 0 === this.t,
              n = this.ts;
            if (
              ((this.ts = t),
              (this.t =
                ye.now() -
                this.ts / (this.doc.getEffectiveSpeed() * this.speed)),
              (this.complete = !1),
              s)
            ) {
              var o = this.events;
              for (e = 0, i = o.length; e < i; ++e) o[e].setup(this);
            }
            var r = this.anims;
            for (e = 0, i = r.length; e < i; ++e) r[e].setup(this);
            this.update(this.ts), s && this.notifyObservers("seek", n);
          }
        },
        setSpeed: function (t) {
          var e = Math.abs(this.speed);
          t > 0 &&
            t !== e &&
            (this.doSetSpeed(this.speed < 0 ? -t : t),
            this.notifyObservers("speedchange", e));
        },
        doSetSpeed: function (t) {
          if (0 !== t && t !== this.speed)
            if (
              (this.paused ||
                (this.t =
                  ye.now() - this.ts / (this.doc.getEffectiveSpeed() * t)),
              this.speed * t < 0)
            ) {
              if (((this.speed = t), void 0 !== this.t)) {
                this.complete = !1;
                var e,
                  i,
                  s = this.events,
                  n = this.anims;
                for (e = 0, i = s.length; e < i; ++e) s[e].reverse(this);
                for (e = 0, i = n.length; e < i; ++e) n[e].reverse(this);
              }
            } else this.speed = t;
        },
        getSpeed: function () {
          return Math.abs(this.speed);
        },
        getEffectiveSpeed: function () {
          return this.doc.getEffectiveSpeed() * Math.abs(this.speed);
        },
        setPlayBackward: function (t) {
          void 0 === t && (t = !0),
            !t != this.speed > 0 &&
              (this.doSetSpeed(-this.speed), this.notifyObservers("reverse"));
        },
        isPlayBackward: function () {
          return this.speed < 0;
        },
        update: function (t) {
          var e,
            i,
            s,
            n = this.events,
            o = n.length,
            r = this.speed < 0,
            a = !1,
            h = this.ts,
            l = this.doc.scene,
            c = !1;
          if (((t = bt(t, 0, this.d)), !this.paused))
            for (i = 0; i < o; ++i)
              if (
                ((e = n[r ? o - 1 - i : i]),
                (s = r ? e.t + e.d : e.t),
                !e.fired && (r ? s >= t : s <= t))
              ) {
                if (
                  ((a = !0),
                  (this.ts = s),
                  We.prototype.update.call(this, this.ts, this.speed < 0),
                  ye.pushSync(
                    this.t +
                      this.ts / (this.doc.getEffectiveSpeed() * this.speed)
                  ),
                  e.fire(this),
                  ye.popSync(),
                  s != this.ts || l != this.doc.scene)
                )
                  return;
                if (this.paused || r != this.speed < 0) {
                  c = !0;
                  break;
                }
              }
          (a && (this.ts == t || c)) ||
            ((this.ts = t),
            We.prototype.update.call(this, this.ts, this.speed < 0)),
            this.notifyObservers("update", h);
        },
        tick: function (t) {
          if (!this.paused) {
            var e = this.doc.scene;
            this.update(
              (t - this.t) * this.doc.getEffectiveSpeed() * this.speed
            ),
              e === this.doc.scene && this._checkComplete();
          }
        },
        addTimingEvent: function (t) {
          var e,
            i,
            s = t.getStartTime(),
            n = this.events;
          for (e = 0, i = n.length; e < i; ++e)
            if (n[e].getStartTime() > s) return void n.splice(e, 0, t);
          n.push(t);
        },
        _checkComplete: function () {
          if (
            (this.speed < 0 ? this.ts <= 0 : this.ts >= this.d) &&
            !this.paused
          ) {
            this.complete = !0;
            var t = this.doc.scene;
            this.pause(),
              this.complete &&
                this.doc.scene === t &&
                this.notifyObservers("complete");
          }
        },
        onLayoutSwitched: function () {
          this._recreateAnims();
        },
      },
      ne,
      {
        _isDomEvent: function () {
          return !1;
        },
      }
    ),
    je = {
      _default: function (t, e, i) {
        return new Ee(t, e, i);
      },
    };
  (Ze.regAnimType = function (t) {
    for (var e = arguments.length; --e > 0; ) je[arguments[e]] = t;
  }),
    Ze.regAnimType(function (t, e, i) {
      return new xe(t, e, i);
    }, "pb"),
    (Ze.createAnimation = function (t) {
      return (je[Je.getShortName(t)] || je._default).apply(null, arguments);
    });
  var Qe = {
      bottom: "b",
      className: "cl",
      color: "tc",
      cursor: "c",
      display: "d",
      fill: "f",
      background: "f",
      fontFamily: "ff",
      fontSize: "fz",
      fontStyle: "fs",
      fontWeight: "fw",
      height: "h",
      backgroundPositionX: "iX",
      backgroundPositionY: "iY",
      letterSpacing: "ls",
      line: "l",
      border: "l",
      borderWidth: "lw",
      lineWidth: "lw",
      borderColor: "lc",
      lineColor: "lc",
      left: "lt",
      lineThrough: "strikeThrough",
      lineHeight: "lh",
      opacity: "o",
      overflow: "of",
      right: "rt",
      rotate: "rZ",
      rotateX: "rX",
      rotateY: "rY",
      rotateZ: "rZ",
      skewX: "skX",
      skewY: "skY",
      scaleX: "sX",
      scaleY: "sY",
      scaleZ: "sZ",
      text: "ts",
      textAlign: "ta",
      textColor: "tc",
      textHighlightColor: "thc",
      textDecoration: "td",
      textHAlign: "ta",
      textIndent: "ti",
      textVAlign: "tv",
      top: "tp",
      transformOriginX: "toX",
      transformOriginY: "toY",
      transformOriginZ: "toZ",
      translateX: "tX",
      translateY: "tY",
      translateZ: "tZ",
      width: "w",
      wordSpacing: "ws",
      volume: "vol",
      autoplay: "ap",
      loop: "lo",
      controls: "ct",
      preload: "pl",
      tabIndex: "tb",
      title: "tl",
      clipRectTop: "crt",
      clipRectRight: "crr",
      clipRectBottom: "crb",
      clipRectLeft: "crl",
      clipOvalVertex: "cov",
      clipOvalCoVertex: "coc",
      clipCircleRadius: "ccr",
      shadowBlurRadius: "shr",
      shadowAngle: "sha",
      shadowDistance: "shd",
      shadowColor: "shc",
      invertFilter: "fif",
      hueFilter: "fhf",
      contrastFilter: "fcf",
      brightnessFilter: "frf",
      saturateFilter: "fsf",
      sepiaFilter: "fpf",
      grayscaleFilter: "fgf",
      blurFilter: "fbf",
      perspectiveOriginX: "psoX",
      perspectiveOriginY: "psoY",
      perspectiveOriginZ: "psoZ",
    },
    Je = {
      setAnyProp: !0,
      getShortName: function (t) {
        return Qe[t] || t;
      },
      set: function (t, e, i) {
        var s, n, o, r, a;
        if ("object" == typeof e)
          for (s in e) e.hasOwnProperty(s) && this.set(t, s, e[s]);
        else if (
          ((s = this.props[e]) || ((a = Qe[e]), (s = this.props[a]) && (e = a)),
          s)
        )
          s.c && t._props[e] !== i && (t._props[e] = i.slice ? i.slice() : i),
            s.s
              ? s.s(t, i)
              : s.p
              ? ((o = this.props[s.p]),
                (r = t._props[s.p]) || (r = t._props[s.p] = []),
                (r[o.c.indexOf(e)] = i),
                ye.ticking && t.getTimelineScene && t.getTimelineScene()
                  ? t
                      .getTimelineScene()
                      ._delayUpdate(s.p + t.domId, function () {
                        Je.set(t, s.p, r);
                      })
                  : Je.set(t, s.p, r))
              : (s.n && (e = s.n),
                (n = (s.o && t[s.o]) || t.dom),
                "a" === s.a
                  ? n.setAttribute(e, i)
                  : ("p" !== s.a &&
                      ((n = n.style), s.b && (e = K[e] || (K[e] = ot(n, e)))),
                    (n[e] = this.prepare(s, i))));
        else if (this.setAnyProp)
          if (K[e] || (K[e] = ot(t.dom.style, e, !0))) t.dom.style[K[e]] = i;
          else if (e in t.dom) t.dom[e] = i;
          else
            try {
              t.dom.setAttribute(e, i);
            } catch (t) {
              St(t.toString());
            }
      },
      prepare: function (t, e) {
        var i, s, n;
        if (t.c)
          if (pt(e)) {
            for (s = 0, n = t.c.length, i = ""; s < n; ++s)
              i += this.prepare(this.props[t.c[s]], e[s]) + " ";
            i = i.trim();
          } else i = e;
        else {
          if (void 0 === (i = e)) {
            if (void 0 === t.v || t.e) return "";
            i = t.v;
          } else if ("" === i) return i;
          if (t.e && (i == t.v || (t.u && i == t.v + t.u))) return "";
          t.d && (i /= t.d),
            t.u && Et(i) && (i += t.u),
            t.f && (i = t.f.replace("{1}", i));
        }
        return i;
      },
      defaultValue: function (t) {
        var e = this.props[t];
        return e && e.v;
      },
      props: {
        cl: {
          s: function (t, e) {
            t.setClass(e);
          },
          v: "",
        },
        c: { n: "cursor", v: "auto" },
        d: {
          s: function (t, e) {
            t.show(e);
          },
          v: 1,
        },
        o: { n: "opacity", d: 100, v: 100 },
        of: {
          s: function (t, e) {
            t.setOverflow(e);
          },
          v: "visible",
        },
        r: {
          s: function (t, n) {
            var o = n[4];
            o == e || o == i ? t.setRight(n[0]) : t.setLeft(n[0]),
              o == s || o == i ? t.setBottom(n[1]) : t.setTop(n[1]);
            var r,
              a,
              h = Ae(n[2]),
              l = Ae(n[3]);
            "a" === h.unit && (h.value /= 100),
              "a" === l.unit && (l.value /= 100),
              (r = !(a = "a" === l.unit) && "a" === h.unit),
              t.setAutoWidth(r).setAutoHeight(a),
              (a || r) && (t._aspectRatio = a ? l.value : h.value),
              r || t.setWidth(n[2]),
              a || t.setHeight(n[3]);
          },
        },
        tp: {
          s: function (t, e) {
            t.setTop(e);
          },
        },
        b: {
          s: function (t, e) {
            t.setBottom(e);
          },
        },
        lt: {
          s: function (t, e) {
            t.setLeft(e);
          },
        },
        rt: {
          s: function (t, e) {
            t.setRight(e);
          },
        },
        w: {
          s: function (t, e) {
            var i = t._autoW;
            t.setWidth(e), (t._autoW = i);
          },
        },
        h: {
          s: function (t, e) {
            var i = t._autoH;
            t.setHeight(e), (t._autoH = i);
          },
        },
        to: { n: "transformOrigin", b: 1, c: ["toX", "toY", "toZ"] },
        toX: { p: "to", u: "%", v: 50 },
        toY: { p: "to", u: "%", v: 50 },
        toZ: { p: "to", u: "px", v: 0 },
        tf: {
          n: "transform",
          b: 1,
          c: [
            "tX",
            "tY",
            "tZ",
            "rX",
            "rY",
            "rZ",
            "rZM",
            "skX",
            "skY",
            "sX",
            "sY",
            "sZ",
          ],
          o: "childrenContainer",
        },
        tX: { p: "tf", u: "px", v: 0, e: 1, f: "translateX({1})" },
        tY: { p: "tf", u: "px", v: 0, e: 1, f: "translateY({1})" },
        tZ: { p: "tf", u: "px", v: 0, e: 1, f: "translateZ({1})" },
        rX: { p: "tf", u: "deg", v: 0, e: 1, f: "rotateX({1})" },
        rY: { p: "tf", u: "deg", v: 0, e: 1, f: "rotateY({1})" },
        rZ: { p: "tf", u: "deg", v: 0, e: 1, f: "rotateZ({1})" },
        rZM: { p: "tf", u: "deg", v: 0, e: 1, f: "rotateZ({1})" },
        skX: { p: "tf", u: "deg", v: 0, e: 1, f: "skewX({1})" },
        skY: { p: "tf", u: "deg", v: 0, e: 1, f: "skewY({1})" },
        sX: { p: "tf", d: 100, v: 100, e: 1, f: "scaleX({1})" },
        sY: { p: "tf", d: 100, v: 100, e: 1, f: "scaleY({1})" },
        sZ: { p: "tf", d: 100, v: 100, e: 1, f: "scaleZ({1})" },
        t: {
          v: [],
          s: function (t, e) {
            var i,
              s = (e = e || [])[4];
            (s && s.length) || (s = ""),
              Je.set(t, "to", s),
              ((s = []).length = 12),
              (i = t._props.tf) && (s[6] = i[6]),
              (i = e[0]) &&
                (i[0] && (s[3] = i[0]),
                i[1] && (s[4] = i[1]),
                i[2] && (s[5] = i[2])),
              (i = e[2]) && (i[0] && (s[7] = i[0]), i[1] && (s[8] = i[1])),
              (i = e[1]) &&
                (100 !== i[0] && (s[9] = i[0]),
                100 !== i[1] && (s[10] = i[1]),
                100 != i[2] && (s[11] = i[2])),
              (i = e[3]) &&
                (i[0] && (s[0] = i[0]),
                i[1] && (s[1] = i[1]),
                i[2] && (s[2] = i[2])),
              Je.set(t, "tf", s);
          },
        },
        s: {
          v: [S.RECT],
          s: function (t, e) {
            t._shapePathData && t._shapePathData(e);
          },
        },
        p: {
          s: function (t, e) {
            t.setPath && t.setPath(e[0], e[1], e[2]);
          },
        },
        l: {
          v: [n],
          s: function (t, e) {
            t._props.l = e.slice();
            var i = e[0];
            if (typeof i != tt)
              switch (i) {
                case o:
                  i = "solid";
                  break;
                case r:
                  i = "dotted";
                  break;
                case a:
                  i = "dashed";
                  break;
                default:
                  i = "none";
              }
            if (
              (t.setBorderStyle(i),
              e.length > 1 && t.setBorderWidth(e[1]),
              e.length > 2 && t.setBorderColor(e[2], e[3], e[4], e[5]),
              e.length > 6 && t.setLineJoin && t.setLineJoin(e[6]),
              e.length > 7 && t.setLineCap && t.setLineCap(e[7]),
              e.length > 8)
            ) {
              var s = e[8];
              t.enableLineDraw && t.enableLineDraw(1 == s[0]),
                1 == s[0]
                  ? t.setLineLength && t.setLineLength(s[1])
                  : t.setDashOffset && t.setDashOffset(2 == s[0] ? s[1] : 0);
            }
          },
        },
        lw: {
          s: function (t, e) {
            t.setBorderWidth(e), t._updateClipRectIfNeed();
          },
        },
        lc: {
          s: function (t, e) {
            typeof e === tt
              ? t.setBorderColor(e)
              : t.setBorderColor(e[0], e[1], e[2], e[3]);
          },
        },
        da: {
          s: function (t, e) {
            t.setDashArray && t.setDashArray(e);
          },
        },
        do: {
          s: function (t, e) {
            t.setDashOffset && t.setDashOffset(e);
          },
        },
        ll: {
          s: function (t, e) {
            t.setLineLength && t.setLineLength(e);
          },
        },
        f: {
          v: [h],
          s: function (t, e) {
            switch (e[0]) {
              case l:
                t.fillSolid(e[1], e[2], e[3], e[4]);
                break;
              case c:
                e[1] == y
                  ? t.fillRadialGradient(e[2], e[3], e[4], e[5], e[6])
                  : t.fillLinearGradient(e[2], e[3]);
                break;
              case d:
                var i = e[1];
                typeof i != tt &&
                  (i = (t.getDoc && t.getDoc().getResource(i)) || ""),
                  t.fillImage(i, e[2], e[3], e[4]);
                break;
              default:
                t.fillNone();
            }
          },
        },
        fc: {
          s: function (t, e) {
            typeof e === tt
              ? t.fillSolid(e)
              : t.fillSolid(e[0], e[1], e[2], e[3]);
          },
        },
        ga: {
          s: function (t, e) {
            t.fillLinearGradient(e);
          },
        },
        gX: {
          s: function (t, e) {
            t.fillRadialGradient(e);
          },
        },
        gY: {
          s: function (t, e) {
            t.fillRadialGradient(void 0, e);
          },
        },
        rs: {
          s: function (e, i) {
            var s = e.getDoc();
            s &&
              (e._DEF.k != t.IMG
                ? e.setResource(s.getResource(i))
                : e._DEF.it == $
                ? e.setResourceInfo(s.getResourceInfo(i))
                : e.setResource(s.getResource(i)));
          },
        },
        ff: { n: "fontFamily", o: "textDom" },
        fs: { n: "fontStyle", o: "textDom" },
        italic: {
          s: function (t, e) {
            (t.textDom || t.dom).style.fontStyle = e ? "italic" : "normal";
          },
        },
        fw: { n: "fontWeight", o: "textDom" },
        bold: {
          s: function (t, e) {
            (t.textDom || t.dom).style.fontWeight = e ? "bold" : "normal";
          },
        },
        fz: { n: "fontSize", o: "textDom", u: "px" },
        ta: {
          s: function (t, e) {
            if (typeof e !== tt)
              switch (e) {
                case x.LEFT:
                  e = "left";
                  break;
                case x.RIGHT:
                  e = "right";
                  break;
                case x.JUSTIFY:
                  e = "justify";
                  break;
                default:
                  e = "center";
              }
            (t.textDom || t.dom).style.textAlign = e;
          },
        },
        tv: {
          s: function (t, e) {
            t.setTextVerticalAlign(e);
          },
        },
        tc: {
          s: function (t, e) {
            (t.textDom || t.dom).style.color =
              typeof e === tt ? e : Mt(e[0], e[1], e[2], e[3]);
          },
        },
        thc: {
          s: function (t, e) {
            t.setTextHighlightColor(e);
          },
        },
        td: { n: "textDecoration", o: "textDom" },
        underline: {
          s: function (t, e) {
            kt(t.textDom || t.dom, "underline", e);
          },
        },
        strikeThrough: {
          s: function (t, e) {
            kt(t.textDom || t.dom, "line-through", e);
          },
        },
        ws: { n: "wordSpacing", o: "textDom", u: "px" },
        ls: { n: "letterSpacing", o: "textDom", u: "px" },
        ti: { n: "textIndent", o: "textDom", u: "px" },
        lh: { n: "lineHeight", o: "textDom", d: 100 },
        txt: {
          v: [""],
          s: function (t, e) {
            var i = "";
            e[7]
              ? (i = e[8] ? "underline line-through" : "underline")
              : e[8] && (i = "line-through"),
              t.setText(e[0] || ""),
              Je.set(t, {
                ff: e[1],
                fz: e[2],
                tc: e[3],
                thc: e[4],
                fw: e[5],
                italic: e[6],
                td: i,
                ta: e[9],
                tv: e[10],
                lh: e[11],
                ti: e[12],
                ws: e[13],
                ls: e[14],
              });
          },
        },
        ts: {
          s: function (t, e) {
            t.setText(e);
          },
        },
        ir: {
          s: function (t, e) {
            t.setBgImg(e);
          },
          v: [0, 0, "100%", "100%"],
        },
        iX: {
          s: function (t, e) {
            t.setBgImgX(e);
          },
        },
        iY: {
          s: function (t, e) {
            t.setBgImgY(e);
          },
        },
        iW: {
          s: function (t, e) {
            t.setBgImgW(e);
          },
        },
        iH: {
          s: function (t, e) {
            t.setBgImgH(e);
          },
        },
        vol: {
          s: function (t, e) {
            t.setVolume(e);
          },
        },
        ap: {
          s: function (t, e) {
            t.setAutoplay && t.setAutoplay(e);
          },
        },
        lo: {
          s: function (t, e) {
            t.setLoop(e);
          },
        },
        ct: { a: "p", n: "controls", o: "mediaDom" },
        pl: {
          s: function (t, e) {
            t.mediaDom.preload = typeof e === tt ? e : e ? "auto" : "metadata";
          },
        },
        url: {
          s: function (t, e) {
            t.setUrl(e);
          },
        },
        lr: {
          v: [0, 0, 0, 0],
          s: function (t, e) {
            (e = e || []),
              (t._props.lr = e.slice()),
              t.setTopLeftRadius(e[0] || 0),
              t.setTopRightRadius(e[1] || 0),
              t.setBottomLeftRadius(e[2] || 0),
              t.setBottomRightRadius(e[3] || 0);
          },
        },
        tlr: {
          s: function (t, e) {
            t.setTopLeftRadius(e);
          },
        },
        trr: {
          s: function (t, e) {
            t.setTopRightRadius(e);
          },
        },
        blr: {
          s: function (t, e) {
            t.setBottomLeftRadius(e);
          },
        },
        brr: {
          s: function (t, e) {
            t.setBottomRightRadius(e);
          },
        },
        wc: {
          v: [],
          s: function (t, e) {
            (e = e || []), t.setClipShape(e);
          },
        },
        crt: {
          s: function (t, e) {
            t.setClipRectTop(e);
          },
        },
        crr: {
          s: function (t, e) {
            t.setClipRectRight(e);
          },
        },
        crb: {
          s: function (t, e) {
            t.setClipRectBottom(e);
          },
        },
        crl: {
          s: function (t, e) {
            t.setClipRectLeft(e);
          },
        },
        cov: {
          s: function (t, e) {
            t.setClipOvalVertex(e);
          },
        },
        coc: {
          s: function (t, e) {
            t.setClipOvalCoVertex(e);
          },
        },
        ccr: {
          s: function (t, e) {
            t.setClipCircleRadius(e);
          },
        },
        srcdoc: {
          s: function (t, e) {
            t.setSrcDoc(e);
          },
        },
        tb: { a: "p", n: "tabIndex" },
        tl: {
          s: function (t, e) {
            t.setTitle(e);
          },
          v: "",
        },
        sh: {
          v: [],
          s: function (t, e) {
            (e = e || []).length > 0
              ? t.applyShadow(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
              : t.clearShadow();
          },
        },
        shr: {
          s: function (t, e) {
            t.setShadowBlurRadius(e);
          },
        },
        sha: {
          s: function (t, e) {
            t.setShadowAngle(e);
          },
        },
        shd: {
          s: function (t, e) {
            t.setShadowDistance(e);
          },
        },
        shc: {
          s: function (t, e) {
            typeof e === tt
              ? t.setShadowColor(e)
              : t.setShadowColor(e[0], e[1], e[2], e[3]);
          },
        },
        fif: {
          s: function (t, e) {
            t.setFilter("invert", "mediaDom", e);
          },
        },
        fhf: {
          s: function (t, e) {
            t.setFilter("hue-rotate", "mediaDom", e);
          },
        },
        fcf: {
          s: function (t, e) {
            t.setFilter("contrast", "mediaDom", e);
          },
        },
        frf: {
          s: function (t, e) {
            t.setFilter("brightness", "mediaDom", e);
          },
        },
        fsf: {
          s: function (t, e) {
            t.setFilter("saturate", "mediaDom", e);
          },
        },
        fpf: {
          s: function (t, e) {
            t.setFilter("sepia", "mediaDom", e);
          },
        },
        fgf: {
          s: function (t, e) {
            t.setFilter("grayscale", "mediaDom", e);
          },
        },
        fbf: {
          s: function (t, e) {
            t.setFilter("blur", "mediaDom", e);
          },
        },
        fe: {
          v: [0, 0, 100, 100, 100, 0, 0, 0],
          s: function (t, e) {
            var i = [0, 0, 100, 100, 100, 0, 0, 0];
            e = e || i;
            var s = [];
            s.length = 8;
            for (var n = 0; n < 8; ++n) e[n] !== i[n] && (s[n] = e[n]);
            t.setFilter("mediaDom", s);
          },
        },
        psoX: {
          s: function (t, e) {
            t.setPerspectiveX && t.setPerspectiveX(e);
          },
        },
        psoY: {
          s: function (t, e) {
            t.setPerspectiveY && t.setPerspectiveY(e);
          },
        },
        psoZ: {
          s: function (t, e) {
            t.setPerspectiveZ && t.setPerspectiveZ(e);
          },
        },
        pso: {
          v: [50, 50, 1200],
          s: function (t, e) {
            if (t.setPerspective) {
              var i = (e = e || [50, 50, 1200])[2];
              e[3] && t.scene && !t.scene.transformStyle && (i = 0),
                t.setPerspective(e[0], e[1], i);
            }
          },
        },
        listStyleType: {},
      },
    };
  function Ke(t, e) {
    if (void 0 === t) t = !0;
    else if (typeof t == tt) return t;
    return t ? (void 0 !== e ? e : "block") : "none";
  }
  function ti(t) {
    if (typeof t != tt)
      switch (t) {
        case w.VISIBLE:
          t = "visible";
          break;
        case w.HIDDEN:
          t = "hidden";
          break;
        case w.SCROLL:
          t = "scroll";
          break;
        default:
          t = "auto";
      }
    return t;
  }
  var ei = _t({
      $init: function (t) {
        (this.dom = t), (this._props = {}), (this.fillType = h);
      },
      setProperty: function (t, e, i) {
        Je.set(this, t, i ? e + i : e);
      },
      addClass: function (t) {
        Ot(this.dom, t, !0);
      },
      removeClass: function (t) {
        Ot(this.dom, t, !1);
      },
      setClass: function (t) {
        this.dom.className = t;
      },
      hasClass: function (t) {
        var e = this.dom;
        return e.classList
          ? e.classList.contains(t)
          : (" " + e.className + " ").replace(Pt, " ").indexOf(" " + t + " ") >
              -1;
      },
      toggleClass: function (t) {
        var e,
          i = this.dom,
          s = t.match(Rt) || [],
          n = s.length;
        if (!(n < 1))
          if (i.classList) for (e = 0; e < n; ++e) i.classList.toggle(s[e]);
          else {
            var o = (" " + i.className + " ").replace(Pt, " ");
            for (e = 0; e < n; ++e) {
              var r = s[e];
              if (o.indexOf(" " + r + " ") < 0) o += r + " ";
              else
                for (; o.indexOf(" " + r + " ") >= 0; )
                  o = o.replace(" " + r + " ", " ");
              i.className = o.trim();
            }
          }
      },
      show: function (t) {
        this.dom.style.visibility =
          (void 0 !== t && "" !== t && !t) || "none" == t || "hidden" == t
            ? "hidden"
            : "";
      },
      setOverflow: function (t) {
        It(this.dom, ti(t));
      },
      setLeft: function (t) {
        var e = this.dom.style;
        (e.left = Et(t) ? t + "px" : t), (e.right = "auto");
      },
      setRight: function (t) {
        var e = this.dom.style;
        (e.right = Et(t) ? t + "px" : t), (e.left = "auto");
      },
      setTop: function (t) {
        var e = this.dom.style;
        (e.top = Et(t) ? t + "px" : t), (e.bottom = "auto");
      },
      setBottom: function (t) {
        var e = this.dom.style;
        (e.bottom = Et(t) ? t + "px" : t), (e.top = "auto");
      },
      setSize: function (t, e) {
        var i = this.dom.style;
        (i.width = Et(t) ? t + "px" : t), (i.height = Et(e) ? e + "px" : e);
      },
      setWidth: function (t) {
        this.dom.style.width = Et(t) ? t + "px" : t;
      },
      setHeight: function (t) {
        this.dom.style.height = Et(t) ? t + "px" : t;
      },
      hasLine: function () {
        var t = this.dom.style.borderStyle;
        return t && "none" != t;
      },
      hasFill: function () {
        return this.fillType != h;
      },
      setBorderStyle: function (t) {
        this.dom.style.borderStyle = t;
      },
      setBorderWidth: function (t) {
        this.dom.style.borderWidth = Et(t) ? t + "px" : t;
      },
      setBorderColor: function (t, e, i, s) {
        this.dom.style.borderColor = Mt(t, e, i, s);
      },
      fillNone: function () {
        this.fillType = h;
        var t = this.dom.style;
        (t.backgroundColor = "transparent"), (t.backgroundImage = "none");
      },
      fillSolid: function (t, e, i, s) {
        this.fillType = l;
        var n = this.dom.style;
        (n.backgroundColor = Mt(t, e, i, s)), (n.backgroundImage = "none");
      },
      fillImage: function (t, e, i, s) {
        if (
          ((this.fillType = d),
          this._imageFillData
            ? ((this._imageFillData[1] = e),
              (this._imageFillData[2] = i),
              (this._imageFillData[3] = s))
            : (this._imageFillData = ["", e, i, s]),
          t && t !== this._imageFillData[0])
        )
          this._imageFillData[0] = t;
        else if (!t)
          return (
            (this._imageFillData[0] = ""),
            (this.dom.style.backgroundImage = "none"),
            void (this.dom.style.backgroundColor = "transparent")
          );
        (this.dom.style.backgroundImage =
          'url("' + t.replace(/"/g, '\\"') + '")'),
          (this.dom.style.backgroundRepeat = "no-repeat"),
          (this.dom.style.backgroundPosition = "center"),
          e === u
            ? (this.dom.style.backgroundSize = "100% 100%")
            : e === m
            ? ((this.dom.style.backgroundPosition = "left top"),
              (this.dom.style.backgroundRepeat = "repeat"),
              (this.dom.style.backgroundSize = "auto"))
            : e === f
            ? (this.dom.style.backgroundSize = "contain")
            : e === g
            ? (this.dom.style.backgroundSize = "cover")
            : e === p &&
              ((this.dom.style.backgroundSize = "auto"),
              (this.dom.style.backgroundPosition = "center")),
          (this.dom.style.backgroundColor = "transparent");
      },
      fillLinearGradient: function (t, e) {
        if (((this.fillType = c), st.gradient.linear)) {
          var i,
            s,
            n,
            o = this.dom.style,
            r = !e,
            a = [],
            h =
              st.gradient.linear +
              "(" +
              (st.gradient.prefixed ? 90 - t : t) +
              "deg";
          if (r) {
            if (!this._gradient || this._gradient[0] != v) return;
            e = this._gradient[1];
          } else this._gradient = [v];
          for (i = 0, s = e.length; i < s; ++i)
            (n = e[i]),
              r || a.push(n.slice()),
              (h += ", " + Mt(n[1], n[2], n[3], n[4]) + " " + n[0] + "%");
          (h += ")"),
            r || this._gradient.push(a),
            (o.backgroundImage = h),
            (o.backgroundColor = "transparent");
        } else if (e && e[0]) {
          var l = e[0];
          this.fillSolid(l[1], l[2], l[3], l[4]);
        }
      },
      fillRadialGradient: function (t, e, i, s, n) {
        if (
          ((this.fillType = c), st.gradient.radial && !st.gradient.prefixed)
        ) {
          var o,
            r,
            a,
            h,
            l = this.dom.style,
            d = !i,
            u = [],
            p = "radial-gradient(";
          if (d) {
            if (!this._gradient || this._gradient[0] != y) return;
            void 0 === t ? (t = this._gradient[1]) : (this._gradient[1] = t),
              void 0 === e ? (e = this._gradient[2]) : (this._gradient[2] = e),
              (i = this._gradient[3]),
              (s = this._gradient[4]),
              (n = this._gradient[5]);
          } else this._gradient = [y, t, e];
          switch (((p += s == _.CIRCLE ? "circle" : "ellipse"), n)) {
            case T.CLOSE_CORNER:
              h = "closest-corner";
              break;
            case T.CLOSE_SIDE:
              h = "closest-side";
              break;
            case T.FAR_SIDE:
              h = "farthest-side";
              break;
            default:
              h = "farthest-corner";
          }
          for (
            p += " " + h + " at " + t + "% " + e + "%", o = 0, r = i.length;
            o < r;
            ++o
          )
            (a = i[o]),
              d || u.push(a.slice()),
              (p += ", " + Mt(a[1], a[2], a[3], a[4]) + " " + a[0] + "%");
          (p += ")"),
            d ||
              (this._gradient.push(u),
              this._gradient.push(s),
              this._gradient.push(n)),
            (l.backgroundImage = p),
            l.backgroundImage.toLowerCase().indexOf(h) < 0 &&
              ((l.backgroundImage = p.replace(t + "%", t + 1 + "%")),
              (l.backgroundImage = p)),
            (l.backgroundColor = "transparent");
        } else if (i && i[0]) {
          var f = i[0];
          this.fillSolid(f[1], f[2], f[3], f[4]);
        }
      },
      setShadowBlurRadius: function (t) {
        var e = void 0 === this._shadowAngle ? 45 : this._shadowAngle,
          i = void 0 === this._shadowDistance ? 10 : this._shadowDistance,
          s = void 0 === this._shadowColor ? "rgb(0, 0, 0)" : this._shadowColor,
          n = void 0 === this._shadowAlpha ? 128 : this._shadowAlpha;
        this.applyShadow(Ae(t).value, e, i, s, n);
      },
      setShadowAngle: function (t) {
        var e = void 0 === this._shadowRadius ? 5 : this._shadowRadius,
          i = void 0 === this._shadowDistance ? 10 : this._shadowDistance,
          s = void 0 === this._shadowColor ? "rgb(0, 0, 0)" : this._shadowColor,
          n = void 0 === this._shadowAlpha ? 128 : this._shadowAlpha;
        this.applyShadow(e, Ae(t).value, i, s, n);
      },
      setShadowDistance: function (t) {
        var e = void 0 === this._shadowRadius ? 5 : this._shadowRadius,
          i = void 0 === this._shadowAngle ? 45 : this._shadowAngle,
          s = void 0 === this._shadowColor ? "rgb(0, 0, 0)" : this._shadowColor,
          n = void 0 === this._shadowAlpha ? 128 : this._shadowAlpha;
        this.applyShadow(e, i, Ae(t).value, s, n);
      },
      setShadowColor: function (t, e, i, s) {
        var n = void 0 === this._shadowRadius ? 5 : this._shadowRadius,
          o = void 0 === this._shadowAngle ? 45 : this._shadowAngle,
          r = void 0 === this._shadowDistance ? 10 : this._shadowDistance,
          a = Mt(t, e, i);
        this.applyShadow(n, o, r, a, s);
      },
      clearShadow: function () {
        if (void 0 !== this._shadowRadius)
          if (
            (delete this._shadowRadius,
            delete this._shadowAngle,
            delete this._shadowDistance,
            delete this._shadowColor,
            delete this._shadowAlpha,
            dt)
          ) {
            ut &&
              this._fixSafariShadow &&
              (delete this._fixSafariShadow, (this.dom.style.willChange = ""));
            var t = this.dom.style[K.filter];
            -1 != t.indexOf("drop-shadow") &&
              (this.dom.style[K.filter] = t
                .replace(/\s*drop-shadow\(([^()]*|\([^()]*\))*\)/, "")
                .trim());
          } else this._obShadow();
      },
      _obShadow: function () {
        void 0 !== this._shadowRadius && (this.hasFill() || this.hasLine())
          ? this._obBgShadow(
              this._shadowRadius,
              this._shadowAngle,
              this._shadowDistance,
              this._shadowColor,
              this._shadowAlpha
            )
          : this._obBgShadow(),
          void 0 === this._shadowRadius || this.hasFill()
            ? this._obTextShadow()
            : this._obTextShadow(
                this._shadowRadius,
                this._shadowAngle,
                this._shadowDistance,
                this._shadowColor,
                this._shadowAlpha
              );
      },
      _obBgShadow: function (t, e, i, s, n) {
        var o = "";
        void 0 !== t &&
          (o =
            i * Math.cos((e / 180) * j) +
            "px " +
            i * Math.sin((e / 180) * j) +
            "px " +
            4 * t +
            "px 0px " +
            Ct(s, n));
        this.dom.style.boxShadow = o;
      },
      _obTextShadow: function (t, e, i, s, n) {
        var o = "";
        void 0 !== t &&
          (o =
            i * Math.cos((e / 180) * j) +
            "px " +
            i * Math.sin((e / 180) * j) +
            "px " +
            t +
            "px " +
            Ct(s, n));
        this.dom.style.textShadow = o;
      },
      _obRefreshShadow: function () {
        void 0 === this._shadowRadius || dt || this._obShadow();
      },
      applyShadow: function (t, e, i, s, n, o, r) {
        if (void 0 !== t) {
          var a;
          (this._shadowRadius = t),
            (this._shadowAngle = e),
            (this._shadowDistance = i),
            typeof s === tt
              ? ((this._shadowColor = s),
                (this._shadowAlpha = n),
                (a = Ct(this._shadowColor, this._shadowAlpha)))
              : ((a = Mt(s, n, o, r)),
                (this._shadowColor = Mt(s, n, o)),
                (this._shadowAlpha = r));
          var h,
            l = i * Math.cos((e / 180) * j),
            c = i * Math.sin((e / 180) * j);
          if (dt) {
            ut &&
              !this._fixSafariShadow &&
              ((this._fixSafariShadow = !0),
              (this.dom.style.willChange = K.filter));
            var d = this.dom.style[K.filter];
            (h = "drop-shadow(" + l + "px " + c + "px " + t + "px " + a + ")"),
              (d =
                -1 != d.indexOf("drop-shadow")
                  ? d.replace(/drop-shadow\(([^()]*|\([^()]*\))*\)/, h)
                  : d
                  ? h + " " + d
                  : h),
              (this.dom.style[K.filter] = d);
          } else this._obShadow();
        } else this.clearShadow();
      },
      setTextHighlightColor: function (t) {
        this.dom.style.backgroundColor =
          typeof t === tt ? t : Mt(t[0], t[1], t[2], t[3]);
      },
    }),
    ii = ei,
    si = _t(
      ei,
      Nt.prototype,
      {
        $init: function (t, e) {
          Nt.prototype.$init.call(this),
            void 0 === this.id && (this.id = t.id),
            (this.name = t.n),
            (this._DEF = t),
            (this.parent = null),
            (this.scene = e),
            (this.elems = []),
            (this.domId = e.genDomId(this));
          var i = this.create(),
            s = i.style;
          (i.id = this.domId),
            (s.position = "absolute"),
            ei.prototype.$init.call(this, i),
            this.painter || (this.painter = new ei(this.dom));
          var n,
            o,
            r,
            a,
            h = t.elems || [];
          for (n = 0, o = h.length; n < o; ++n)
            (a = h[n]), (r = ni.createElem(a.k, a, e)), this.addChild(r);
          var l = Je.setAnyProp;
          (Je.setAnyProp = !1),
            Je.set(this, t),
            (Je.setAnyProp = l),
            this._normLayoutProps(),
            this._setLayoutProps(),
            this._bindAll(t.e);
        },
        create: function () {
          var t = Q.createElement("div");
          return (t.style.pointerEvents = "none"), t;
        },
        _onDetached: function () {
          var t,
            e,
            i,
            s = this.scene;
          for (
            s &&
              (delete s.mapIdElems[this.id],
              delete s.mapNameElems[this.name],
              delete s.mapDomIdElems[this.domId],
              this.tick &&
                (i = s.dynElems.indexOf(this)) > -1 &&
                s.dynElems.splice(i, 1)),
              t = 0,
              e = this.elems.length;
            t < e;
            ++t
          )
            this.elems[t]._onDetached();
        },
        _onRemoved: function (t) {
          var e,
            i,
            s,
            n = this.scene;
          for (e = 0, i = this.elems.length; e < i; ++e)
            this.elems[e]._onRemoved(t);
          (this.dom.style.backgroundImage = "none"),
            this._onRemovedFromDoc && this._onRemovedFromDoc(),
            n &&
              t &&
              (n.mapIdElems[this.id] === this && delete n.mapIdElems[this.id],
              n.mapNameElems[this.name] === this &&
                delete n.mapNameElems[this.name],
              n.mapDomIdElems[this.domId] === this &&
                delete n.mapDomIdElems[this.domId],
              this.tick &&
                (s = n.dynElems.indexOf(this)) > -1 &&
                n.dynElems.splice(s, 1),
              (this.scene = null));
        },
        remove: function () {
          var t,
            e = this.scene && this.scene.transformStyle;
          if ((this._onRemoved(this !== this.scene), this.parent)) {
            var i = this.parent.elems.indexOf(this);
            i > -1 &&
              (this.parent.elems.splice(i, 1),
              e && !this.parent.elems.length && (t = this.parent.dom)),
              (this.parent = null);
          }
          this.dom.parentNode && this.dom.parentNode.removeChild(this.dom),
            t && (t.style[K.transformStyle] = "");
        },
        getScene: function () {
          return this.scene;
        },
        getTimelineScene: function () {
          if (this.scene) {
            if (this.scene.sceneLayer !== U.ACROSS) return this.scene;
            var t = this.getDoc();
            if (t) return t.getScene();
          }
          return null;
        },
        getDoc: function () {
          return this.scene ? this.scene.getDoc() : null;
        },
        _onAdded: function () {
          var t,
            e,
            i = this.scene;
          for (
            i &&
              ((i.mapIdElems[this.id] = this),
              (i.mapNameElems[this.name] = this),
              (i.mapDomIdElems[this.domId] = this),
              this.tick && i.dynElems.push(this)),
              t = 0,
              e = this.elems.length;
            t < e;
            ++t
          )
            this.elems[t]._onAdded();
        },
        addChild: function (t) {
          t &&
            (this.scene &&
              this.scene.transformStyle &&
              this != this.scene &&
              !this.elems.length &&
              (this.dom.style[K.transformStyle] = this.scene.transformStyle),
            (this.childrenContainer || this.dom).appendChild(t.dom),
            (t.parent = this),
            this.elems.push(t),
            t._onAdded());
        },
        show: function (t) {
          (t = Ke(t)),
            (this.dom.style.display = t),
            "none" != t
              ? this._checkIfResized()
              : (this._w && (this._w = 0), this._h && (this._h = 0));
        },
        isVisible: function () {
          return this.dom.offsetWidth > 0 || this.dom.offsetHeight > 0;
        },
        setOverflow: function (t) {
          (t = ti(t)),
            this._setOverflow4Container(t),
            this._setOverflow4Text(t);
        },
        _updatePointerEvents: function () {
          var t = this.dom.style,
            e = t.overflow,
            i = "auto" == e || "scroll" == e,
            s = this.hasFill() || this.hasLine();
          this.dom == this.painter.dom
            ? (t.pointerEvents = s || i ? "auto" : "none")
            : ((t.pointerEvents = i ? "auto" : "none"),
              (this.painter.dom.style.pointerEvents = s ? "auto" : "none"));
        },
        _setOverflow4Container: function (t) {
          this.textContainer
            ? ((this.dom.style.overflow = ""), this._updatePointerEvents())
            : (It(this.dom, t), this._updatePointerEvents());
        },
        _setOverflow4Text: function (t) {
          this.textContainer
            ? (It(this.textContainer, t),
              (this.textContainer.style.pointerEvents =
                "auto" == t || "scroll" == t ? "auto" : ""),
              this._setOverflow4Container(""))
            : (this.removeObserver("text.overflow"),
              this.addObserver({
                id: "text.overflow",
                _initText: function (e) {
                  e._setOverflow4Text(t), e.removeObserver("text.overflow");
                },
              }));
        },
        setTextVerticalAlign: function (t) {
          if (this.textDom) {
            var e = this.textDom.style,
              i = K.transform || (K.transform = ot(e, "transform"));
            switch (t) {
              case "top":
              case x.TOP:
                (e.top = 0), (e.bottom = "auto"), (e[i] = "");
                break;
              case "bottom":
              case x.BOTTOM:
                (e.top = "auto"), (e.bottom = 0), (e[i] = "");
                break;
              default:
                (e.top = "50%"),
                  (e.bottom = "auto"),
                  (e[i] = "translateY(-50%)");
            }
          } else
            this.removeObserver("text.valign"),
              this.addObserver({
                id: "text.valign",
                _initText: function (e) {
                  e.setTextVerticalAlign(t), e.removeObserver("text.valign");
                },
              });
        },
        setTextHighlightColor: function (t) {
          this.textDom
            ? (this.textDom.style.backgroundColor =
                typeof t === tt ? t : Mt(t[0], t[1], t[2], t[3]))
            : (this.removeObserver("text.hlcolor"),
              this.addObserver({
                id: "text.hlcolor",
                _initText: function (e) {
                  e.setTextHighlightColor(t), e.removeObserver("text.hlcolor");
                },
              }));
        },
        setPosition: function (t, e) {
          var i = this.dom.style;
          (i.left = Et(t) ? t + "px" : t),
            (i.top = Et(e) ? e + "px" : e),
            (i.right = "auto"),
            (i.bottom = "auto");
        },
        setAutoWidth: function (t) {
          return (
            (this._autoW = t),
            t &&
              ((this._autoH = !1),
              (this._aspectRatio =
                (this.dom.clientWidth || this._w) /
                  (this.dom.clientHeight || this._h) || 0)),
            this
          );
        },
        setAutoHeight: function (t) {
          return (
            (this._autoH = t),
            t &&
              ((this._autoW = !1),
              (this._aspectRatio =
                (this.dom.clientWidth || this._w) /
                  (this.dom.clientHeight || this._h) || 0)),
            this
          );
        },
        setSize: function (t, e) {
          var i = this.dom.style;
          (i.width = Et(t) ? t + "px" : t),
            (i.height = Et(e) ? e + "px" : e),
            (this._autoW = this._autoH = !1),
            this._checkIfResized();
        },
        setWidth: function (t) {
          (this.dom.style.width = Et(t) ? t + "px" : t),
            (this._autoW = !1),
            this._checkIfResized();
        },
        setHeight: function (t) {
          (this.dom.style.height = Et(t) ? t + "px" : t),
            (this._autoH = !1),
            this._checkIfResized();
        },
        _fillLineChanged: function () {
          this._updatePointerEvents(), this._obRefreshShadow();
        },
        hasLine: function () {
          return this.painter.hasLine();
        },
        hasFill: function () {
          return this.painter.hasFill();
        },
        setBorderStyle: function (t) {
          this.painter.setBorderStyle(t), this._fillLineChanged();
        },
        fillNone: function () {
          var t = this.hasFill();
          this.painter.fillNone(), t && this._fillLineChanged();
        },
        fillSolid: function (t, e, i, s) {
          var n = this.hasFill();
          this.painter.fillSolid(t, e, i, s), !n && this._fillLineChanged();
        },
        fillImage: function (t, e, i, s) {
          var n = this.hasFill();
          this.painter.fillImage(t, e, i, s), !n && this._fillLineChanged();
        },
        fillLinearGradient: function (t, e) {
          var i = this.hasFill();
          this.painter.fillLinearGradient(t, e), !i && this._fillLineChanged();
        },
        fillRadialGradient: function (t, e, i, s, n) {
          var o = this.hasFill();
          this.painter.fillRadialGradient(t, e, i, s, n),
            !o && this._fillLineChanged();
        },
        setResource: function (t) {},
        setTitle: function (t) {
          this.dom.title = t;
        },
        setClipShape: function (t) {
          var e, i;
          if (st.clipPath)
            if (
              !pt(t) ||
              t.length <= 0 ||
              (t[0] == Y && 5 != t.length) ||
              (t[0] == G && 3 != t.length) ||
              (t[0] == V && 2 != t.length)
            )
              (this.dom.style[K.clipPath] = ""), (this._props.wc = []);
            else
              switch (((this._props.wc = t), t[0])) {
                case Y:
                  e = "inset(";
                  for (var s = 1; s < 5; ++s)
                    (e += (i = Ae(t[s])).unit ? t[s] : i.value + "px"),
                      4 != s && (e += " ");
                  (e += ")"), (this.dom.style[K.clipPath] = e);
                  break;
                case G:
                  (e = "ellipse("),
                    (e += ((i = Ae(t[1])).unit ? t[1] : i.value + "px") + " "),
                    (e += (i = Ae(t[2])).unit ? t[2] : i.value + "px"),
                    (e += " at 50% 50%)"),
                    (this.dom.style[K.clipPath] = e);
                  break;
                case V:
                  (e = "circle("),
                    (e += (i = Ae(t[1])).unit ? t[1] : i.value + "px"),
                    (e += " at 50% 50%)"),
                    (this.dom.style[K.clipPath] = e);
              }
          else if (pt(t) && 5 == t.length && t[0] == Y) {
            if (t[0] === Y) {
              this._props.wc = t;
              var n = getComputedStyle(this.dom, null),
                o = Ae(n.width).value,
                r = Ae(n.height).value,
                a = Ae(n.borderTopWidth).value || 0;
              (o += 2 * a),
                (r += 2 * a),
                "%" === (i = Ae(t[1])).unit && (i.value = (r * i.value) / 100),
                (e = "rect(" + i.value + "px, "),
                "%" === (i = Ae(t[2])).unit
                  ? (i.value = o - (o * i.value) / 100)
                  : (i.value = o - i.value),
                (e += i.value + "px, "),
                "%" === (i = Ae(t[3])).unit
                  ? (i.value = r - (r * i.value) / 100)
                  : (i.value = r - i.value),
                (e += i.value + "px, "),
                "%" === (i = Ae(t[4])).unit && (i.value = (o * i.value) / 100),
                (e += i.value + "px)"),
                (this.dom.style.clip = e);
            }
          } else (this.dom.style.clip = ""), (this._props.wc = []);
        },
        _updateClipRectIfNeed: function () {
          var t = this._props.wc;
          t && t[0] === Y && !st.clipPath && this.setClipShape(this._props.wc);
        },
        setClipRectTop: function (t) {
          var e = this._props.wc;
          5 != this._props.wc.length && (e = [Y, 0, 0, 0, 0]),
            (e[1] = t),
            this.setClipShape(e);
        },
        setClipRectRight: function (t) {
          var e = this._props.wc;
          5 != this._props.wc.length && (e = [Y, 0, 0, 0, 0]),
            (e[2] = t),
            this.setClipShape(e);
        },
        setClipRectBottom: function (t) {
          var e = this._props.wc;
          5 != this._props.wc.length && (e = [Y, 0, 0, 0, 0]),
            (e[3] = t),
            this.setClipShape(e);
        },
        setClipRectLeft: function (t) {
          var e = this._props.wc;
          5 != this._props.wc.length && (e = [Y, 0, 0, 0, 0]),
            (e[4] = t),
            this.setClipShape(e);
        },
        setClipOvalVertex: function (t) {
          var e = this._props.wc;
          if (3 != this._props.wc.length && st.clipPath) {
            var i = getComputedStyle(this.dom, null),
              s = Ae(i.width).value,
              n = Ae(i.height).value;
            e = [G, s / 4, n / 2];
          }
          (e[1] = t), this.setClipShape(e);
        },
        setClipOvalCoVertex: function (t) {
          var e = this._props.wc;
          if (3 != this._props.wc.length && st.clipPath) {
            var i = getComputedStyle(this.dom, null),
              s = Ae(i.width).value,
              n = Ae(i.height).value;
            e = [G, s / 4, n / 2];
          }
          (e[2] = t), this.setClipShape(e);
        },
        setClipCircleRadius: function (t) {
          var e = this._props.wc;
          2 != this._props.wc.length && st.clipPath && (e = [V, 0]),
            (e[1] = t),
            this.setClipShape(e);
        },
        _obShadow: function () {
          void 0 === this._shadowRadius ||
          (!this.hasFill() && !this.hasLine() && this.textContainer)
            ? this.painter._obBgShadow()
            : this.painter._obBgShadow(
                this._shadowRadius,
                this._shadowAngle,
                this._shadowDistance,
                this._shadowColor,
                this._shadowAlpha
              ),
            void 0 === this._shadowRadius || this.hasFill()
              ? this._obTextShadow()
              : this._obTextShadow(
                  this._shadowRadius,
                  this._shadowAngle,
                  this._shadowDistance,
                  this._shadowColor,
                  this._shadowAlpha
                );
        },
        setFilter: function () {
          this._filter || (this._filter = {});
          var t,
            e,
            i,
            s,
            n,
            o = "",
            r =
              "invert hue-rotate contrast brightness saturate sepia grayscale blur".split(
                " "
              ),
            a = "% deg % % % % % px".split(" ");
          if (3 === arguments.length) {
            var h = arguments[0];
            for (
              i = arguments[2],
                t = this[(t = arguments[1])] || this.dom,
                this._filter[h] =
                  void 0 === i || typeof i == tt ? i : i + a[r.indexOf(h)],
                s = 0,
                n = r.length;
              s < n;
              ++s
            )
              void 0 !== (e = this._filter[r[s]]) &&
                (o += r[s] + "(" + e + ") ");
          } else if (2 === arguments.length)
            for (
              t = this[(t = arguments[0])] || this.dom,
                i = arguments[1],
                s = 0,
                n = r.length;
              s < n;
              ++s
            )
              void 0 !== (e = i[s]) && typeof e != tt && (e += a[s]),
                (this._filter[r[s]] = e),
                void 0 !== e && (o += r[s] + "(" + e + ") ");
          if (dt && void 0 !== this._shadowRadius) {
            var l =
                this._shadowDistance * Math.cos((this._shadowAngle / 180) * j),
              c =
                this._shadowDistance * Math.sin((this._shadowAngle / 180) * j),
              d = this._shadowColor;
            (d = d
              .replace("rgb(", "rgba(")
              .replace(")", "," + this._shadowAlpha / 255 + ")")),
              (o =
                "drop-shadow(" +
                l +
                "px " +
                c +
                "px " +
                this._shadowRadius +
                "px " +
                d +
                ") " +
                o);
          }
          (o = o.trim()), (t.style[K.filter] = o);
        },
        _initText: function () {
          if (!this.textDom) {
            this.textContainer = Q.createElement("div");
            var t = this.textContainer.style;
            (t.position = "absolute"),
              (t.left = t.top = t.right = t.bottom = 0),
              (this.textDom = Q.createElement("div")),
              (this.textDom.id = this.dom.id + "-text"),
              ((t = this.textDom.style).position = "absolute"),
              (t.left = t.right = 0),
              (t.wordWrap = "break-word"),
              (t.minHeight = "10px"),
              (t.pointerEvents = "auto"),
              this.textContainer.appendChild(this.textDom),
              this.dom.appendChild(this.textContainer),
              (this.textDom.ownerElement = this),
              this.notifyObservers("_initText");
          }
        },
        setText: function (t) {
          var e;
          if (
            ((t += ""),
            this.textDom || (!t && !nt) || this._initText(),
            this.textDom) &&
            ((it.innerHTML = t),
            (this.splitTexts
              ? this.splitTexts._unsplitText
              : this.textDom.innerHTML) != it.innerHTML &&
              (this.splitTexts && (this.unsplitText(), (e = !0)),
              (this.textDom.innerHTML = t),
              e))
          ) {
            var i = this.getDoc(),
              s = i && (i.pendingScene || i.scene),
              n = s ? s.getTimelines() : 0;
            if (n) {
              var o,
                r,
                a = this,
                h = function (t) {
                  return a == t;
                };
              for (o = 0, r = n.length; o < r; ++o) n[o]._recreateTextAnims(h);
            }
          }
        },
        getText: function () {
          return (this.textDom && this.textDom.innerHTML) || "";
        },
        splitText: function (t) {
          if (this.textDom) {
            t && t.chars && !t.words && (t = ft({}, t, { words: !0 }));
            var e,
              i,
              s,
              n,
              o,
              r = this.textDom.innerHTML,
              a = ge.splitText(this.textDom, t),
              h = ["chars", "words"];
            if (((a._unsplitText = r), (this.splitTexts = a), !a.listItems)) {
              a.listItems = [];
              var l = this.textContainer.querySelectorAll("li");
              for (e = 0; e < l.length; ++e) a.listItems.push(new ii(l[e]));
            }
            for (var c = 0; c < 2; ++c) {
              if (1 == c) {
                if (!(a = a.processStyles)) break;
                h.length = 0;
                for (s in a) h.push(s);
              }
              for (n = 0; n < h.length; ++n)
                if ((o = a[(s = h[n])]))
                  for (e = 0, i = o.length; e < i; ++e) o[e] = new ii(o[e]);
            }
          }
        },
        unsplitText: function () {
          if (
            this.textDom &&
            this.splitTexts &&
            void 0 !== this.splitTexts._unsplitText
          ) {
            (this.textDom.innerHTML = this.splitTexts._unsplitText),
              delete this.splitTexts;
            var t = this.painter.dom.style;
            (t[K.transform] = ""),
              (t.opacity = ""),
              (t.display = ""),
              (t.left = 0),
              (t.top = 0);
          }
        },
        _checkIfResized: function () {
          var t = this.dom.offsetWidth,
            e = this.dom.offsetHeight;
          if (t !== this._w || e !== this._h) {
            var i = t - this._w,
              s = e - this._h;
            (this._w = t), (this._h = e), this._onResized(i, s);
            var n,
              o,
              r = this.elems;
            for (n = 0, o = r.length; n < o; ++n) r[n]._checkIfResized();
          }
        },
        _onResized: function (t, e) {
          (this._autoH || this._autoW) &&
            (this._aspectRatio
              ? this._autoH
                ? t &&
                  (this.setHeight(this.dom.clientWidth / this._aspectRatio),
                  (this._autoH = !0))
                : e &&
                  (this.setWidth(this._aspectRatio * this.dom.clientHeight),
                  (this._autoW = !0))
              : (this._aspectRatio =
                  this.dom.clientWidth / this.dom.clientHeight || 0));
        },
        _getPropsData: function () {
          if (!this._DEF.rp) return this._DEF;
          var t,
            e,
            i,
            s = this.getDoc().hBreakpoint,
            n = this.getDoc().vBreakpoint,
            o = this._DEF.rp,
            r = null;
          for (e = 0, i = o.length; e < i; ++e) {
            if ((t = o[e])[0] == s && t[1] == n) return t[2];
            0 == t[0] && 0 == t[1] && (r = t[2]);
          }
          return r;
        },
        _normLayoutProps: function () {
          var t,
            e,
            i,
            s,
            n,
            o,
            r = this._DEF.rp,
            a = {};
          if (r && !r.normed) {
            for (e = 0, i = r.length; e < i; ++e) {
              if (
                ((n = (s = r[e])[2]),
                0 == s[0] && 0 == s[1] && ((o = n), 1 == i))
              )
                return void (r.normed = !0);
              for (t in n) a[t] = 1;
            }
            for (
              o || ((o = {}), r.push([0, 0, o])), e = 0, i = r.length;
              e < i;
              ++e
            ) {
              n = r[e][2];
              for (t in a)
                t in n ||
                  (n == o || (n.or && n.or.indexOf(t) >= 0)
                    ? (n[t] = Je.defaultValue(t))
                    : (t in o || (o[t] = Je.defaultValue(t)), (n[t] = o[t])));
            }
            r.normed = !0;
          }
        },
        _setLayoutProps: function () {
          if (this._DEF.rp) {
            var t = this._getPropsData();
            if (t) {
              var e = Je.setAnyProp;
              (Je.setAnyProp = !1), Je.set(this, t), (Je.setAnyProp = e);
            }
          }
        },
        onLayoutSwitched: function () {
          this._setLayoutProps();
          var t,
            e,
            i = this.elems;
          for (t = 0, e = i.length; t < e; ++t) i[t].onLayoutSwitched();
        },
        findChildById: function (t) {
          var e,
            i,
            s,
            n = this.elems;
          for (e = 0, i = n.length; e < i; ++e) {
            if (n[e].id == t) return n[e];
            if ((s = n[e].findChildById(t))) return s;
          }
          return null;
        },
      },
      ne,
      {
        _parentEventTarget: function (t) {
          return "scripterror" === t ? this.parent || this.scene : null;
        },
      }
    );
  gt(si.prototype, "painter", ["setBorderWidth", "setBorderColor"]);
  var ni = _t(si, {
      $init: function (t, e) {
        (this.id = 0),
          (this.sceneId = t.id),
          (this.autoAdvance = t.aa),
          (this.sceneLayer = t.sceneLayer),
          (this.doc = e),
          (this.mapIdElems = { 0: this }),
          (this.mapNameElems = {}),
          (this.mapDomIdElems = {}),
          (this.dynElems = []),
          (this.perspective = { x: 50, y: 50, z: 1200 }),
          si.prototype.$init.call(this, t, this),
          (this.mapDomIdElems[this.domId] = this),
          (this.timelines = []);
        var i,
          s,
          n = t.timelines;
        (n && n.length) || (n = [{ dur: 0 }]);
        var o = this,
          r = {
            getElement: function (t) {
              var i = U.MAIN,
                s = o;
              return (
                pt(t) && ((t = t[0]), (i = U.ACROSS)),
                s.sceneLayer != i &&
                  (s = i == U.MAIN ? e.scene : e.acrossScene),
                s ? s.getElement(t) : null
              );
            },
            getDoc: function () {
              return e;
            },
          };
        for (i = 0, s = n.length; i < s; ++i)
          this.timelines.push(new Ze(n[i], r));
        this.sceneLayer === U.ACROSS && (this.dom.style.zIndex = 1),
          e.dom.appendChild(this.dom),
          Q.getElementById(this.dom.id) && this._checkIfResized(),
          this.sceneLayer == U.MAIN &&
            te(
              this,
              "sceneactivate",
              function () {
                if (
                  (this.dom.hasAttribute("tabindex") || (this.dom.tabIndex = 0),
                  (this.dom.style.outline = "none"),
                  this.doc &&
                    !this.doc.parent &&
                    (this._getBoundActions("keydown", !1) ||
                      this._getBoundActions("keyup", !1) ||
                      this.doc._getBoundActions("keydown", !1) ||
                      this.doc._getBoundActions("keyup", !1)))
                ) {
                  var t = this.dom.getBoundingClientRect();
                  t.right > 50 &&
                    t.bottom > 50 &&
                    t.left < window.innerWidth - 50 &&
                    t.top < window.innerHeight - 50 &&
                    this.dom.focus({ preventScroll: !0 });
                }
              },
              !0
            );
      },
      create: function () {
        var t = si.prototype.create.call(this);
        if (nt || this._DEF.t3d) {
          (this.transformStyle = "preserve-3d"),
            (this.childrenContainer = Q.createElement("div"));
          var e = this.childrenContainer.style;
          (e.position = "absolute"),
            (e.left = 0),
            (e.top = 0),
            (e.width = "100%"),
            (e.height = "100%"),
            (e[K.transformStyle] = this.transformStyle),
            (e.pointerEvents = "none"),
            t.appendChild(this.childrenContainer);
        }
        return t;
      },
      _onRemovedFromDoc: function () {
        this.doc &&
          (this.doc.prevScene === this && (this.doc.prevScene = null),
          this.doc.scene === this && (this.doc.scene = null),
          this.doc.acrossScene === this && (this.doc.acrossScene = null),
          (this.doc = null));
      },
      isAutoAdvance: function () {
        return this.autoAdvance;
      },
      getDoc: function () {
        return this.doc;
      },
      getSceneLayer: function () {
        return this.sceneLayer;
      },
      start: function (t, e) {
        var i = this.getTimeline(e);
        return !!i && (i.play(t), !0);
      },
      play: function (t, e, i) {
        var s = this.getTimeline(i);
        return !!s && (s.play(t, e), !0);
      },
      pause: function (t) {
        var e = this.getTimeline(t);
        return !!e && (e.pause(), !0);
      },
      seek: function (t, e) {
        var i = this.getTimeline(e);
        return !!i && (i.seek(t), !0);
      },
      getTimeline: function (t) {
        if (void 0 === t) return this.getMainTimeline();
        var e,
          i,
          s = this.timelines,
          n = typeof t === tt ? "name" : "id";
        for (e = 0, i = s.length; e < i; ++e) if (s[e][n] === t) return s[e];
        return null;
      },
      getTimelines: function () {
        return this.timelines;
      },
      getMainTimeline: function () {
        return this.timelines[0] || null;
      },
      tick: function (t) {
        var e,
          i,
          s = this.timelines,
          n = this.dynElems;
        for (e = 0, i = n.length; e < i; ++e) n[e].tick(t);
        if (this.sceneLayer != U.ACROSS) {
          for (e = 0, i = s.length; e < i; ++e) s[e].tick(t);
          for (e in this._delayUpdates) this._delayUpdates[e]();
          this._delayUpdates = {};
        }
      },
      getElement: function (t) {
        return typeof t === tt ? this.mapNameElems[t] : this.mapIdElems[t];
      },
      getElementsByClassName: function (t) {
        var e,
          i,
          s = this.dom.getElementsByClassName(t),
          n = [];
        for (e = 0, i = s.length; e < i; ++e) {
          var o = this.findElementByDom(s[e]);
          o && n.push(o);
        }
        return n;
      },
      findElementByDom: function (t) {
        var e;
        for (typeof t === tt && (t = Q.getElementById(t)); t; ) {
          if ((e = this.mapDomIdElems[t.id])) return e;
          t = t.parentNode;
        }
        return null;
      },
      genDomId: function (t) {
        return t === this ? this.doc.genSceneDomId() : this.doc.genElemDomId();
      },
      setSize: function (t, e) {
        var i = this.dom.style,
          s = this.doc.dom.style,
          n = Ae(t),
          o = Ae(e),
          r = this.sceneLayer == U.MAIN;
        "%" === n.unit
          ? (r && (s.width = t), (i.width = "100%"))
          : ((i.width = n.unit ? t : t + "px"), r && (s.width = i.width)),
          "%" === o.unit
            ? (r && (s.height = e), (i.height = "100%"))
            : ((i.height = o.unit ? e : e + "px"), r && (s.height = i.height)),
          r && this.doc.options.autofit && this.doc.fit(),
          this._checkIfResized();
      },
      setWidth: function (t) {
        var e = this.dom.style,
          i = Ae(t);
        "%" === i.unit
          ? (e.width = "100%")
          : (i.unit || (t += "px"), (e.width = t)),
          this.sceneLayer == U.MAIN && this.doc._setWidth(t),
          this._checkIfResized();
      },
      setHeight: function (t) {
        var e = this.dom.style,
          i = Ae(t);
        "%" === i.unit
          ? (e.height = "100%")
          : (i.unit || (t += "px"), (e.height = t)),
          this.sceneLayer == U.MAIN && this.doc._setHeight(t),
          this._checkIfResized();
      },
      _delayUpdate: function (t, e) {
        this._delayUpdates || (this._delayUpdates = {}),
          (this._delayUpdates[t] = e);
      },
      _parentEventTarget: function () {
        return this.doc;
      },
      onLayoutSwitched: function () {
        si.prototype.onLayoutSwitched.call(this);
      },
      setPerspectiveX: function (t) {
        this.setPerspective(t, this.perspective.y, this.perspective.z);
      },
      setPerspectiveY: function (t) {
        this.setPerspective(this.perspective.x, t, this.perspective.z);
      },
      setPerspectiveZ: function (t) {
        this.setPerspective(this.perspective.x, this.perspective.y, t);
      },
      setPerspective: function (t, e, i) {
        (t = Ae(t).value),
          (e = Ae(e).value),
          (i = Ae(i).value),
          (this.perspective = { x: t, y: e, z: i });
        var s = this.dom.style;
        (s[K.perspectiveOrigin] =
          this.perspective.x + "% " + this.perspective.y + "%"),
          (s[K.perspective] = this.perspective.z
            ? this.perspective.z + "px"
            : "none");
      },
    }),
    oi = {
      _default: function (t, e) {
        return new si(t, e);
      },
    };
  (ni.regElemType = function (t) {
    for (var e = arguments.length; --e > 0; ) oi[arguments[e]] = t;
  }),
    (ni.createElem = function (t) {
      var e = oi[t] || oi._default;
      return e ? e.apply(null, Array.prototype.slice.call(arguments, 1)) : null;
    });
  var ri = _t({
    $init: function (t, e, i) {
      (this.oldScene = t),
        (this.newScene = e),
        (this.oldSceneProps = {}),
        (this.newSceneProps = {}),
        (this.playScene = !0);
      var s = null;
      if (
        (t ? (s = t.getDoc()) : e && (s = e.getDoc()),
        (i && i.length && i[1]) || (i = [D, 0]),
        (this._DEF = i),
        (this.doc = s),
        s)
      ) {
        var n = this._createAnims(i[1], i[2]),
          o = {
            dom: s.dom,
            setProperty: si.prototype.setProperty,
            setWidth: function (t) {
              s._setWidth(Et(t) ? t + "px" : t);
            },
            setHeight: function (t) {
              s._setHeight(Et(t) ? t + "px" : t);
            },
          };
        this.timeline = new Ze(
          { dur: n.length ? i[1] : 0, anims: n },
          {
            getElement: function (i) {
              return 1 === i ? t : 2 === i ? e : o;
            },
            getDoc: function () {
              return s;
            },
          }
        );
        var r = this;
        this.timeline.addObserver({
          complete: function () {
            r._onComplete();
          },
        });
      }
    },
    start: function (t, e, i) {
      if (this.doc) {
        var s = this.timeline,
          n = this._DEF[0] === D;
        e && s.setPlayBackward(!0),
          this._onStart(),
          (s.paused = !!i),
          e || this._onSceneChanged(),
          this.doc.transition === this &&
            ((s.paused = !0),
            void 0 === t && (t = e ? s.getDuration() : 0),
            s.seek(t),
            (this.playScene = !0),
            n ? ((this.playScene = !i), s.play()) : i || s.play());
      }
    },
    goToEnd: function () {
      if (this.doc) {
        var t = this.timeline;
        t.complete ||
          ((this.playScene = t.isPlaying()),
          t.play(t.isPlayBackward() ? 0 : t.getDuration()));
      }
    },
    _onSceneChanged: function () {
      var t, e;
      this.timeline.isPlayBackward()
        ? ((t = this.newScene), (e = this.oldScene))
        : ((t = this.oldScene), (e = this.newScene)),
        t &&
          (ee(t, "scenedeactivate"),
          t.notifyObservers("scenedeactivate", { scene: t, newScene: e })),
        delete this.doc.pendingScene,
        (this.doc.scene = e),
        (this.doc.sceneIndex = e ? e._DEF.index : -1),
        e &&
          (ee(e, "sceneactivate"),
          e.notifyObservers("sceneactivate", { scene: e, oldScene: t }));
    },
    _onStart: function () {},
    _onComplete: function () {
      var t, e, i;
      this.doc.transition === this && (this.doc.transition = null),
        this.timeline.isPlayBackward() && this._onSceneChanged(),
        this.timeline.isPlayBackward()
          ? ((t = this.newScene), (e = this.oldScene), (i = this.oldSceneProps))
          : ((t = this.oldScene),
            (e = this.newScene),
            (i = this.newSceneProps)),
        t && t.remove(),
        e &&
          (e.setProperty(i),
          e.getMainTimeline().setPlayBackward(this.timeline.isPlayBackward()),
          this.playScene && e.play());
    },
    _createAnims: function (t, e) {
      return [];
    },
  });
  gt(ri.prototype, "timeline", [
    "play",
    "pause",
    "seek",
    "setSpeed",
    "setPlayBackward",
    "isPlaying",
    "isPlayBackward",
    "getDuration",
    "getTimestamp",
  ]);
  var ai = {
    _default: function (t, e, i) {
      return new ri(t, e, i);
    },
  };
  (ni.regTransType = function (t) {
    for (var e = arguments.length; --e > 0; ) ai[arguments[e]] = t;
  }),
    (ni.createTransition = function (t) {
      var e = ai[t] || ai._default;
      return e ? e.apply(null, Array.prototype.slice.call(arguments, 1)) : null;
    });
  var hi = _t(ri, {
    _onStart: function () {
      var t,
        e,
        i,
        s,
        n,
        o,
        r,
        a,
        h,
        l = this.doc.dom.style;
      this.newScene
        ? ((r = this.newScene.dom.style),
          (t = this.newScene.dom.offsetWidth),
          (s = this.newScene.dom.offsetHeight),
          this.oldScene
            ? ((a = this.oldScene.dom.style),
              (e = this.oldScene.dom.offsetWidth),
              (n = this.oldScene.dom.offsetHeight))
            : ((e = t), (n = s)))
        : ((t = e = this.oldScene.dom.offsetWidth),
          (s = n = this.oldScene.dom.offsetHeight),
          (a = this.oldScene.dom.style)),
        t !== e &&
          ((i = Math.max(e, t)),
          (l.width = i + "px"),
          r &&
            ((r.width = t + "px"),
            this.doc.options.center & x.HCENTER &&
              (r.left = (i - t) / 2 + "px")),
          a &&
            ((a.width = e + "px"),
            this.doc.options.center & x.HCENTER &&
              (a.left = (i - e) / 2 + "px"))),
        s !== n &&
          ((o = Math.max(n, s)),
          (l.height = o + "px"),
          r &&
            ((r.height = s + "px"),
            this.doc.options.center & x.VCENTER &&
              (r.top = (o - s) / 2 + "px")),
          a &&
            ((a.height = n + "px"),
            this.doc.options.center & x.VCENTER &&
              (a.top = (o - n) / 2 + "px"))),
        ri.prototype._onStart.call(this),
        this.oldScene &&
          (((h = this.oldSceneProps).left = h.top = 0),
          (h.width = this.oldScene.doc.dom.style.width),
          (h.height = this.oldScene.doc.dom.style.height)),
        this.newScene &&
          (((h = this.newSceneProps).left = h.top = 0),
          (h.width = this.newScene.doc.dom.style.width),
          (h.height = this.newScene.doc.dom.style.height));
    },
    _createAnims: function (t, e) {
      var i,
        s = [];
      return (
        this.newScene &&
          ((i = this.newScene.dom.style.opacity),
          s.push([
            2,
            [["o", [{ t: 0, d: t, es: e, s: 0, e: "" === i ? 100 : 100 * i }]]],
          ]),
          "" === i && (this.newSceneProps.opacity = "")),
        this.oldScene &&
          ((i = this.oldScene.dom.style.opacity),
          s.push([
            1,
            [["o", [{ t: 0, d: t, es: e, s: "" === i ? 100 : 100 * i, e: 0 }]]],
          ]),
          "" === i && (this.oldSceneProps.opacity = "")),
        s
      );
    },
  });
  ni.regTransType(function (t, e, i) {
    return new hi(t, e, i);
  }, A);
  var li = _t(hi, {
    _onStart: function () {
      (this.doc.dom.style.overflow = "hidden"),
        hi.prototype._onStart.call(this);
    },
    _onComplete: function () {
      hi.prototype._onComplete.call(this), (this.doc.dom.style.overflow = "");
    },
    _createAnims: function (t, e) {
      var i,
        s,
        n,
        o,
        r,
        a = [],
        h = this._DEF[3];
      return (
        h === P || h === R
          ? (this.newScene
              ? ((s = this.newScene.dom.offsetHeight),
                (i = this.oldScene ? this.oldScene.dom.offsetHeight : s))
              : (s = i = this.oldScene.dom.offsetHeight),
            (r = "h"),
            (n = h === P ? -s : i),
            (o = "tp"))
          : (this.newScene
              ? ((s = this.newScene.dom.offsetWidth),
                (i = this.oldScene ? this.oldScene.dom.offsetWidth : s))
              : (s = i = this.oldScene.dom.offsetWidth),
            (r = "w"),
            (n = h === C ? -s : i),
            (o = "lt")),
        i !== s && a.push([3, [[r, [{ t: 0, d: t, es: e, s: i, e: s }]]]]),
        this.newScene &&
          a.push([2, [[o, [{ t: 0, d: t, es: e, s: n, e: 0 }]]]]),
        this.oldScene &&
          a.push([1, [[o, [{ t: 0, d: t, es: e, s: 0, e: -n }]]]]),
        a
      );
    },
  });
  ni.regTransType(function (t, e, i) {
    return new li(t, e, i);
  }, M);
  var ci = String.fromCharCode;
  function di(t) {
    var e,
      i,
      s,
      n,
      o = t.doc,
      r = t.node,
      a = {
        position: "absolute",
        display: "block",
        zIndex:
          ((o.scene && parseInt(getComputedStyle(o.scene.dom, null).zIndex)) ||
            0) + 1e3,
      },
      h = 15,
      l = "a";
    (h += "px"),
      (l += "lt"),
      r ||
        ((t.node = r = Q.createElement("img")),
        (e = "pointer"),
        (e += "Event"),
        (e += "s"),
        (r.style[e] = "none")),
      (s = "da"),
      (s += "ta"),
      (s += ":i"),
      (s += "ma"),
      (s += "ge"),
      (s += "/p"),
      (s += "ng"),
      (s += ";b"),
      (s += "as"),
      (s += "e6"),
      (s += "4,"),
      (s += o._DEF.wm),
      (e = "min"),
      (i = "20"),
      (i += "0px"),
      (a[(e += "Width")] = i),
      (e = "min"),
      (i = "50"),
      (i += "px"),
      (a[(e += "Height")] = i),
      r.src !== s && (r.src = s),
      (r[l] = ci(83, 97, 111, 108, 97, 32, 65, 110, 105, 109, 97, 116, 101)),
      (a.top = a.right = h),
      (a.left = "auto");
    for (n in a) r.style[n] = a[n];
    (r.parentNode && r.parentNode === o.dom) || o.dom.appendChild(r);
  }
  var ui = _t({
      $init: function (t, e, i) {
        var s, n;
        for (
          this.audio = [],
            this.video = [],
            this.auIdx = -1,
            this.viIdx = -1,
            s = 0;
          s < e;
          ++s
        )
          (n = Q.createElement("audio")), this.audio.push(n);
        for (s = 0; s < i; ++s)
          (n = Q.createElement("video")), this.video.push(n);
        if (!t.isMuted()) {
          var o = Q.createElement("audio").play();
          void 0 !== o &&
            o.catch(function (e) {
              wt("mp init error: " + e),
                "NotAllowedError" == e.name && t._mute4Autoplay();
            });
        }
      },
      resize: function (t, e) {
        for (var i; this.audio.length < t; )
          (i = Q.createElement("audio")), this.audio.push(i);
        for (
          t < this.audio.length &&
          t >= 0 &&
          ((this.audio.length = t), this.auIdx >= t && (this.auIdx = -1));
          this.video.length < e;

        )
          (i = Q.createElement("video")), this.video.push(i);
        e < this.video.length &&
          e >= 0 &&
          ((this.video.length = e), this.viIdx >= e && (this.viIdx = -1));
      },
      getAudio: function () {
        var t,
          e,
          i,
          s,
          n = this.audio.length;
        for (i = (t = this.auIdx + 1) + n; t < i; ++t)
          if (((e = t < n ? t : t - n), !(s = this.audio[e]).parentNode))
            return (this.auIdx = e), this._resetMedia(s), s;
        return wt("mp no audio"), null;
      },
      getVideo: function () {
        var t,
          e,
          i,
          s,
          n = this.video.length;
        for (i = (t = this.viIdx + 1) + n; t < i; ++t)
          if (((e = t < n ? t : t - n), !(s = this.video[e]).parentNode))
            return (this.viIdx = e), this._resetMedia(s), s;
        return wt("mp no video"), null;
      },
      unmute: function () {
        var t, e, i;
        for (t = 0, e = this.audio.length; t < e; ++t)
          (i = this.audio[t]).parentNode || (i.muted = !1);
        for (t = 0, e = this.video.length; t < e; ++t)
          (i = this.video[t]).parentNode || (i.muted = !1);
      },
      _resetMedia: function (t) {
        var e;
        for (t.paused || t.pause(); (e = t.firstChild); )
          e.removeAttribute("src"), t.removeChild(e);
        for (; t.attributes.length > 0; )
          t.removeAttribute(t.attributes[0].name);
        (t.muted = !1), t.load();
      },
    }),
    pi = /^sl-(doc|scene|elem)-/,
    fi = /^(?:[a-z]+:)?\/\//i,
    mi = _t(
      Nt,
      {
        $init: function (t, e, i) {
          Nt.prototype.$init.call(this),
            (this.contentState = "loading"),
            (this.isReady = !1),
            (this.destroyed = !1),
            (this.hBreakpoint = 0),
            (this.vBreakpoint = 0);
          var s,
            n,
            o = (t = t || {});
          if (
            (typeof t === tt && ((s = t), (o = {})),
            (this._DEF = o),
            typeof e === tt
              ? ((n = e), (e = Q.getElementById(e)))
              : e && (n = e.id),
            (this.containerId = n),
            (this.container = e),
            typeof (i = ft({ center: x.HCENTER }, i)).center === tt)
          )
            switch (i.center) {
              case "horizontal":
                i.center = x.HCENTER;
                break;
              case "vertical":
                i.center = x.VCENTER;
                break;
              case "both":
                i.center = x.HCENTER | x.VCENTER;
                break;
              default:
                i.center = x.NONE;
            }
          this.options = i;
          var r = Q.createElement("div"),
            a = r.style,
            h = this;
          (this.dom = r),
            (r.id = "sl-doc-" + (n ? n.replace(pi, "") : "") + "-" + Dt()),
            (this.domId = r.id),
            (a.position = "absolute"),
            (a.width = "100%"),
            (a.height = "100%"),
            (a.WebkitTapHighlightColor = "transparent"),
            (this._idPool = 0),
            (this.speed = i.speed ? i.speed : 1),
            i.backward && (this.speed = -this.speed),
            (this.eSpeed = Math.abs(this.speed)),
            (this.volume = isNaN(i.volume) ? 1 : bt(i.volume, 0, 1)),
            (this.eVolume = this.volume),
            (this.muted = !!i.muted),
            (this.eMuted = !1),
            (this.scene = null),
            (this.prevScene = null),
            (this.sceneIndex = -1),
            (this.parent = i.parentElement || null),
            Lt(r, i.center),
            e
              ? e.appendChild(r)
              : n &&
                ge.ready(function () {
                  h.destroyed ||
                    ((e = Q.getElementById(n))
                      ? ((h.container = e),
                        e.appendChild(r),
                        h.layoutIfNeeded())
                      : St("Not found container id " + n));
                });
          var l,
            c = this.getParentDoc();
          if (
            (c &&
              ((l = {
                id: h,
                eSpeed: function () {
                  h._updateESpeed();
                },
                eVolume: function () {
                  h._updateEVolume();
                },
                eMuted: function () {
                  h._updateEMuted();
                },
              }),
              c.addObserver(l),
              this.addObserver({
                destroy: function (t) {
                  var e = t.getParentDoc();
                  e && e.removeObserver(l);
                },
              })),
            this._updateESpeed(),
            this._updateEVolume(),
            this._updateEMuted(),
            ye.isRunning() || ye.start(),
            !nt && ((!i.parentElement && !i.isPreloader) || s || o.resources))
          ) {
            var d = new ue({ holdCompletion: !0 });
            (this.preloader = d),
              (d.loadingDoc = this),
              d.bind("start", function () {
                this.loaderDoc &&
                  (this.loaderDoc.show(), this.loaderDoc.start());
              }),
              d.bind("complete", function () {
                this.loaderDoc && this.loaderDoc.show(!1);
                var t = this.loadingDoc,
                  e = t.options;
                if (!e.isPreloader && !t.scene && !t.transition) {
                  var i = {
                    paused: e.paused,
                    sceneTime: e.sceneTime,
                    backward: e.backward,
                  };
                  if (
                    (void 0 === i.paused && (i.paused = !!t.parent),
                    typeof e.scene === tt)
                  )
                    t.showAcrossScene(), t.showScene(e.scene, i);
                  else {
                    var s = e.scene;
                    void 0 === s &&
                      (s = e.backward ? t.getScenesData().length - 1 : 0),
                      t.showAcrossScene(),
                      t.showSceneAt(s, i);
                  }
                }
              });
          }
          if (d && !i.isPreloader) {
            var u = new mi(i.preloaderDoc || de, this.dom, {
                isPreloader: !0,
                center: i.center,
                autofit: i.autofit,
                preloaderOptions: i.preloaderOptions,
              }),
              p = {
                create: function (t) {
                  (t.loader = d),
                    t.loadingIndicator &&
                      d.bind("progress", function () {
                        this.loaderDoc &&
                          this.loaderDoc.loadingIndicator &&
                          this.loaderDoc.loadingIndicator.setText(
                            Math.floor(100 * this.progress) + "%"
                          );
                      }),
                    t.removeObserver(p),
                    d._bindAll(t._DEF.pe);
                },
              };
            (d.loaderDoc = u),
              "loading" === u.contentState ? u.addObserver(p) : p.create(u);
          }
          var f = ge.getDoc;
          ge.getDoc = function () {
            return h;
          };
          var m = !ge.fireEvent("createdocument");
          f ? (ge.getDoc = f) : delete ge.getDoc,
            m
              ? this.destroy()
              : (this.parent ||
                  this.options.isPreloader ||
                  ge.topDocs.push(this),
                ge.docs.push(this),
                d && d.load(),
                s
                  ? (fe.bind("itemcomplete", function t(e, i) {
                      var s = i.iData;
                      if (s && s.id === h.domId)
                        if (
                          (i.stopImmediatePropagation(),
                          s.status === re.TIMEOUT)
                        );
                        else {
                          if (
                            (fe.unbind("itemcomplete", t),
                            s.status === re.LOADED)
                          ) {
                            var n = ge.loadedDocs.shift();
                            n
                              ? (h._DEF = n)
                              : ((h.contentState = "error"),
                                alert(
                                  "Error parsing the document. Check the browser console for more information."
                                ));
                          } else h.contentState = "error";
                          h._inited();
                        }
                    }),
                    fe.load({ url: s, type: "javascript", id: this.domId }))
                  : this._inited());
        },
        _inited: function () {
          if (!this.destroyed) {
            var t;
            if ("error" !== this.contentState)
              if (ge.isCompatible(this._DEF))
                this._DEF.li &&
                  ge.CanvasLoader &&
                  ((this.loadingIndicator = new ge.CanvasLoader(
                    this.dom,
                    ft(
                      { zIndex: 1 },
                      this._DEF.li,
                      this.options.preloaderOptions
                    )
                  )),
                  this.loadingIndicator.show()),
                  (this.contentState = "loaded"),
                  this._bindAll(this._DEF.e);
              else
                (t =
                  ge.docVersions[0] === ge.docVersions[1]
                    ? "This document (version " +
                      this._DEF.v +
                      ") is incompatible with the player which supports documents version " +
                      ge.docVersions[0]
                    : "This document (version " +
                      this._DEF.v +
                      ") is incompatible with the player which supports documents from version " +
                      ge.docVersions[0] +
                      " to version " +
                      ge.docVersions[1]),
                  ge.showMessage(t, this.dom),
                  (this._incompatibleDEF = this._DEF),
                  (this._DEF = {}),
                  (this.contentState = "incompatible");
            if (!this.parent) {
              var e = this._DEF.mm || [];
              this.mediaPool = new ui(this, 2 * e[0], 2 * e[1]);
            }
            var i,
              s = this._DEF.scenes,
              n = 0,
              o = 0;
            if (s) {
              for (n = s.length, i = 0; i < n; ++i) s[i].index = i;
              n > 0 && s[0].elems && (o = s[0].elems.length || 0);
            }
            if (
              "loaded" == this.contentState &&
              !this.parent &&
              !this.options.isPreloader
            ) {
              var r = this._DEF.k;
              if (isNaN(r) || (16711935 & r) != (16711935 & ((n << 16) | o))) {
                var a = { doc: this };
                me.push(a), di(a);
              }
            }
            if (
              (this.layoutIfNeeded(),
              this.notifyObservers("create"),
              "loaded" === this.contentState)
            ) {
              if (Q.getElementById(this.domId) === this.dom)
                this.isReady || ((this.isReady = !0), this.ready());
              else {
                var h = this;
                ge.ready(function () {
                  Q.getElementById(h.domId) === h.dom &&
                    (h.isReady || ((h.isReady = !0), h.ready()));
                });
              }
              if (this.preloader)
                this.preloader.add(
                  (function (t) {
                    var e,
                      i,
                      s,
                      n,
                      o,
                      r,
                      a,
                      h,
                      l = t._DEF,
                      c = [];
                    if (
                      (l && l.cssUrl && c.push({ url: l.cssUrl, type: "css" }),
                      l &&
                        l.googleFontIncludeHeader &&
                        c.push({ url: l.googleFontIncludeHeader, type: "css" }),
                      l && l.resources)
                    )
                      for (e = 0, i = (a = l.resources).length; e < i; ++e)
                        switch (
                          ((o = a[e]), (h = t.getResourceFolder(o[1])), o[1])
                        ) {
                          case E.IMAGE:
                            c.push({
                              url: fi.test(o[3]) ? o[3] : h + o[3],
                              type: "image",
                            });
                            break;
                          case E.AUDIO:
                          case E.VIDEO:
                            for (
                              r = o[1] === E.AUDIO ? "audio" : "video",
                                s = 0,
                                n = (o = o[3]).length;
                              s < n;
                              ++s
                            )
                              if (st[r][pe(o[s])]) {
                                c.push({
                                  url: fi.test(o[s]) ? o[s] : h + o[s],
                                  type: r,
                                });
                                break;
                              }
                        }
                    return c;
                  })(this)
                ),
                  this.preloader.holdCompletion(!1);
              else if (!this.scene && !this.transition) {
                var l = {
                  paused: this.options.paused,
                  sceneTime: this.options.sceneTime,
                  backward: this.options.backward,
                };
                if (
                  (void 0 === l.paused && (l.paused = !!this.parent),
                  typeof this.options.scene === tt)
                )
                  this.showAcrossScene(), this.showScene(this.options.scene, l);
                else {
                  var c = this.options.scene;
                  void 0 === c &&
                    (c = this.options.backward
                      ? this.getScenesData().length - 1
                      : 0),
                    this.showAcrossScene(),
                    this.showSceneAt(c, l);
                }
              }
            } else this.preloader && this.preloader.holdCompletion(!1);
          }
        },
        destroy: function () {
          (function (t, e) {
            typeof e !== tt && (e = I[e]);
            var i = t._getBoundActions(e, !1);
            return !(!i || !i._default);
          })(this, "destroy") ||
            te(
              this,
              "destroy",
              function (t, e) {
                this.destroyed = !0;
                var i = ge.docs.indexOf(this);
                i > -1 && ge.docs.splice(i, 1),
                  (i = ge.topDocs.indexOf(this)) > -1 &&
                    ge.topDocs.splice(i, 1),
                  this.parent &&
                    ((this.parent.sym = null), (this.parent = null)),
                  this.preloader &&
                    this.preloader.loaderDoc &&
                    (this.preloader.loaderDoc.destroy(),
                    (this.preloader.loaderDoc = null)),
                  (this.scene = this.transition = null),
                  this.dom.parentNode &&
                    this.dom.parentNode.removeChild(this.dom),
                  this.removeObservers();
              },
              !0
            ),
            this.notifyObservers("destroy");
        },
        _setWidth: function (t) {
          (this.dom.style.width = t), this.options.autofit && this.fit();
        },
        _setHeight: function (t) {
          (this.dom.style.height = t), this.options.autofit && this.fit();
        },
        fit: function () {
          if (this.container && this.dom.clientWidth && this.dom.clientHeight) {
            this.container.style.overflow = "hidden";
            var t,
              e,
              i = this.container.clientWidth,
              s = this.container.clientHeight,
              n = this.dom.clientWidth,
              o = this.dom.clientHeight,
              r = Math.min(i / n, s / o),
              a = this.dom.style;
            1 == r
              ? (a[K.transform] = "")
              : ((a[K.transformOrigin] = "0 0"),
                (a[K.transform] = "scale(" + r + ", " + r + ")"),
                (a.margin = t = e = ""),
                this.options.center & x.HCENTER && (t = (i - n * r) / 2 + "px"),
                this.options.center & x.VCENTER && (e = (s - o * r) / 2 + "px"),
                (a.left = t),
                (a.top = e),
                (a.right = a.bottom = ""));
          }
        },
        layoutIfNeeded: function () {
          if (this.container) {
            var t = !1;
            if (this._DEF.b) {
              var e,
                i = 0,
                s = 0,
                n = this.container.clientWidth,
                o = this._DEF.b.h;
              if (o)
                for (e = o.length - 1; e >= 0; --e)
                  if (o[e][1] <= n) {
                    i = o[e][0];
                    break;
                  }
              if (((n = this.container.clientHeight), (o = this._DEF.b.v)))
                for (e = o.length - 1; e >= 0; --e)
                  if (o[e][1] <= n) {
                    s = o[e][0];
                    break;
                  }
              (i == this.hBreakpoint && s == this.vBreakpoint) ||
                ((this.hBreakpoint = i),
                (this.vBreakpoint = s),
                (t = !0),
                this.onLayoutSwitched());
            }
            t ||
              (this.scene && this.scene._checkIfResized(),
              this.acrossScene && this.acrossScene._checkIfResized(),
              this.prevScene && this.prevScene._checkIfResized()),
              this.options.autofit && this.fit(),
              this.preloader &&
                this.preloader.loaderDoc &&
                this.preloader.loaderDoc.layoutIfNeeded();
          }
        },
        onLayoutSwitched: function () {
          if (
            (this.prevScene && this.prevScene.onLayoutSwitched(), this.scene)
          ) {
            this.scene.onLayoutSwitched(),
              this.acrossScene && this.acrossScene.onLayoutSwitched();
            var t,
              e,
              i = this.scene.getTimelines(),
              s = i[0],
              n = !!s && s.complete;
            for (t = 0, e = i.length; t < e; ++t) i[t].onLayoutSwitched();
            s && n && s.play();
          }
        },
        start: function (t) {
          this.showSceneAt(t || 0);
        },
        showScene: function (t, e) {
          var i,
            s,
            n = this.getScenesData(),
            o = typeof t === tt ? "n" : "id";
          for (i = 0, s = n.length; i < s; ++i)
            if (n[i][o] === t) return this.showSceneByData(n[i], e), !0;
          return !1;
        },
        showSceneAt: function (t, e) {
          var i = this.getScenesData()[t];
          return !!i && (this.showSceneByData(i, e), !0);
        },
        showNextScene: function (t) {
          return this.showSceneAt(this.sceneIndex + 1, t);
        },
        showPreviousScene: function (t) {
          return this.showSceneAt(this.sceneIndex - 1, t);
        },
        showFirstScene: function (t) {
          return this.showSceneAt(0, t);
        },
        showLastScene: function (t) {
          return this.showSceneAt(this.getScenesData().length - 1, t);
        },
        showAcrossScene: function () {
          return (
            !!this.acrossScene ||
            this.showSceneByData(this.getAcrossSceneData())
          );
        },
        showSceneByData: function (t, e) {
          if (t || this.scene) {
            (e = e || {}), this.transition && this.transition.goToEnd();
            var i = t ? new ni(t, this) : null;
            if (
              (i &&
                (i.sceneLayer === U.MAIN && (this.pendingScene = i),
                void 0 === e.sceneTime &&
                  (e.sceneTime = e.backward
                    ? i.getMainTimeline().getDuration()
                    : 0),
                i.seek(e.sceneTime),
                i.sceneLayer === U.MAIN &&
                  te(
                    i.getMainTimeline(),
                    "complete",
                    function (t, e) {
                      if (this.complete)
                        if (this.isPlayBackward()) {
                          var s = t.getScenesData()[t.sceneIndex - 1],
                            n = t.scene && t.scene._DEF.st;
                          ((s && (s.aa || (ge.exportVideo && !t.parent))) ||
                            (!s && n && n[0] !== D && n[1])) &&
                            t.showSceneByData(s, {
                              backward: !0,
                              transition: n || { type: D },
                            });
                        } else
                          (i.isAutoAdvance() ||
                            (ge.exportVideo && !t.parent)) &&
                            t.showNextScene();
                    },
                    !0
                  )),
              t && t.sceneLayer === U.ACROSS)
            )
              this.acrossScene = i;
            else {
              var s,
                n,
                o,
                r = e.transition;
              (s = r
                ? pt(r)
                  ? r
                  : [r.type, r.duration, r.easing, r.option]
                : t
                ? t.st
                : [D]),
                e.backward
                  ? ((n = i), (o = this.scene))
                  : ((n = this.scene), (o = i)),
                (this.transition = ni.createTransition(s ? s[0] : D, n, o, s)),
                this.transition.start(e.transitionTime, e.backward, e.paused);
            }
          }
        },
        show: function (t) {
          (t = Ke(t)),
            (this.dom.style.display = t),
            "none" != t && this.layoutIfNeeded();
        },
        pause: function () {
          this.transition
            ? this.transition.pause()
            : this.scene && this.scene.getMainTimeline().pause();
        },
        play: function () {
          this.transition
            ? this.transition.play()
            : this.scene && this.scene.getMainTimeline().play();
        },
        isPlaying: function () {
          return this.transition
            ? this.transition.isPlaying()
            : !!this.scene && this.scene.getMainTimeline().isPlaying();
        },
        setVolume: function (t) {
          (t = bt(t, 0, 1)) !== this.volume &&
            ((this.volume = t),
            this._updateEVolume(),
            this.muted && t && this.setMuted(!1));
        },
        getVolume: function () {
          return this.volume;
        },
        getEffectiveVolume: function () {
          return this.eVolume;
        },
        _updateEVolume: function () {
          var t = this.eVolume,
            e = this.getParentDoc();
          (this.eVolume = this.volume),
            e && (this.eVolume *= e.getEffectiveVolume()),
            t !== this.eVolume && this.notifyObservers("eVolume", this.eVolume);
        },
        _mute4Autoplay: function () {
          if (!this.muted) {
            this.setMuted(!0), (this._mute4Ap = !0);
            var t = this;
            (this._unmuteOnTap = function () {
              Q.removeEventListener("mousedown", t._unmuteOnTap, !1),
                t._mute4Ap && t.setMuted(!1);
            }),
              Q.addEventListener("mousedown", this._unmuteOnTap, !1);
          }
        },
        setMuted: function (t) {
          delete this._mute4Ap,
            (t = !!t),
            this.muted !== t &&
              (!t && this.mediaPool && this.mediaPool.unmute(),
              (this.muted = t),
              this._updateEMuted());
        },
        isMuted: function () {
          return this.muted;
        },
        isEffectiveMuted: function () {
          return this.eMuted;
        },
        _updateEMuted: function () {
          var t = this.eMuted,
            e = this.getParentDoc();
          (this.eMuted = this.muted),
            !this.eMuted && e && (this.eMuted = e.isEffectiveMuted()),
            t !== this.eMuted && this.notifyObservers("eMuted", this.eMuted);
        },
        setSpeed: function (t) {
          t <= 0 ||
            t === Math.abs(this.speed) ||
            (this.speed < 0 ? (this.speed = -t) : (this.speed = t),
            this._updateESpeed());
        },
        getSpeed: function () {
          return Math.abs(this.speed);
        },
        getEffectiveSpeed: function () {
          return this.eSpeed;
        },
        _updateESpeed: function () {
          var t = this.eSpeed,
            e = this.getParentDoc();
          (this.eSpeed = Math.abs(this.speed)),
            e && (this.eSpeed *= e.getEffectiveSpeed()),
            t !== this.eSpeed && this.notifyObservers("eSpeed", this.eSpeed);
        },
        setPlayBackward: function (t) {
          void 0 === t && (t = !0),
            this.transition && this.transition.setPlayBackward(t),
            this.scene && this.scene.getMainTimeline().setPlayBackward(t),
            !t != this.speed > 0 && (this.speed = -this.speed);
        },
        isPlayBackward: function () {
          return this.transition
            ? this.transition.isPlayBackward()
            : this.scene
            ? this.scene.getMainTimeline().isPlayBackward()
            : this.speed < 0;
        },
        seek: function (t, e) {
          var i,
            s,
            n,
            o = this.getScenesData(),
            r = null,
            a = null,
            h = !1,
            l = !1,
            c = typeof t === tt;
          for (i = 0, s = o.length; i < s; ++i)
            if (
              ((r = a),
              (n = (a = o[i]).timelines ? a.timelines[0] : null)
                ? n.dur || (n.dur = 0)
                : (n = { dur: 0 }),
              c)
            ) {
              if (n.l && void 0 !== n.l[t]) {
                (t = n.l[t]), (h = !0);
                break;
              }
            } else {
              if (a.st && a.st[1]) {
                if (t < a.st[1]) {
                  (h = !0), (l = !0);
                  break;
                }
                t -= a.st[1];
              }
              if (t <= n.dur) {
                h = !0;
                break;
              }
              t -= n.dur;
            }
          if ((!c && !h && s > 0 && ((h = !0), (t = n ? n.dur : 0)), !h))
            return !1;
          if ((t < 0 && (t = 0), e && this.scene && this.scene._DEF == a))
            if (l) {
              if (this.transition) return this.transition.seek(t), !0;
            } else if (!this.isPlayBackward())
              return (
                this.transition && this.transition.goToEnd(),
                this.scene.seek(t),
                !0
              );
          var d = {
            paused: !this.isPlaying(),
            backward: this.isPlayBackward(),
          };
          if (l) {
            d.transitionTime = t;
            var u = {
              paused: !0,
              backward: !1,
              sceneTime: 0,
              transition: { type: D },
            };
            this.isPlayBackward()
              ? ((d.transition = a.st),
                this.showSceneByData(a, u),
                this.showSceneByData(r, d))
              : (r &&
                  r.timelines &&
                  r.timelines[0] &&
                  (u.sceneTime = r.timelines[0].dur || 0),
                this.showSceneByData(r, u),
                this.showSceneByData(a, d));
          } else
            (d.sceneTime = t),
              (d.transition = { type: D }),
              this.showSceneByData(a, d);
          return !0;
        },
        getTimeline: function (t) {
          return this.scene ? this.scene.getTimeline(t) : null;
        },
        pauseTimeline: function (t) {
          var e = this.getTimeline(t);
          return !!e && (e.pause(), !0);
        },
        playTimeline: function (t) {
          var e = this.getTimeline(t);
          return !!e && (e.play(), !0);
        },
        seekTimeline: function (t, e) {
          var i = this.getTimeline(e);
          return !!i && (i.seek(t), !0);
        },
        getScene: function () {
          return this.scene;
        },
        getAcrossScene: function () {
          return this.acrossScene;
        },
        getScenesData: function () {
          return this._DEF.scenes || [];
        },
        getAcrossSceneData: function () {
          return this._DEF.ascene;
        },
        getSceneCount: function () {
          return this.getScenesData().length;
        },
        getDuration: function () {
          return this._DEF.dur || 0;
        },
        tick: function (t) {
          this.preloader &&
            this.preloader.loaderDoc &&
            this.preloader.loaderDoc.tick(t),
            this.transition
              ? this.transition.timeline.tick(t)
              : this.scene &&
                (this.acrossScene && this.acrossScene.tick(t),
                this.scene.tick(t));
        },
        genId: function () {
          return ++this._idPool;
        },
        genSceneDomId: function () {
          return "sl-scene-" + this.domId.replace(pi, "") + "-" + this.genId();
        },
        genElemDomId: function () {
          return "sl-elem-" + this.domId.replace(pi, "") + "-" + this.genId();
        },
        getResourceFolder: function (t) {
          for (var e = this; e && !e._DEF.resources && e.parent; )
            e = e.parent.getDoc();
          e || (e = this);
          var i = e.options.resourceFolder;
          return (
            void 0 === i &&
              void 0 === (i = e._DEF.resourceFolder) &&
              (i = e.options.isPreloader ? "preloader_resources" : "resources"),
            i && "/" !== i.substr(i.length - 1) && (i += "index.html"),
            i
          );
        },
        getResourceInfo: function (t) {
          for (var e = this; e && !e._DEF.resources && e.parent; )
            e = e.parent.getDoc();
          if (e && e._DEF.resources) {
            var i,
              s,
              n = e._DEF.resources,
              o = typeof t == tt ? 2 : 0;
            for (i = 0, s = n.length; i < s; ++i) if (n[i][o] == t) return n[i];
          }
          return null;
        },
        getResource: function (t) {
          var e,
            i = this.getResourceInfo(t);
          if (i) {
            var s = this.getResourceFolder(i[1]);
            switch (i[1]) {
              case E.IMAGE:
              case E.HTML:
                return fi.test(i[3]) ? i[3] : s + i[3];
              case E.AUDIO:
              case E.VIDEO:
                var n = i[3],
                  o = [];
                for (e = 0; e < n.length; e++) {
                  var r = n[e];
                  o.push(fi.test(r) ? r : s + r);
                }
                return o;
              case E.SYMBOL:
                return i[3];
            }
          }
          return null;
        },
        getMediaPool: function () {
          for (var t = this; t && !t.mediaPool && t.parent; )
            t = t.parent.getDoc();
          return (t && t.mediaPool) || null;
        },
        getFunction: function (t) {
          for (
            var e = this, i = typeof t === tt ? 1 : 0;
            e && !e._DEF.f && e.parent;

          )
            e = e.parent.getDoc();
          if (e && e._DEF.f) {
            var s,
              n = e._DEF.f,
              o = n.length;
            for (s = 0; s < o; ++s) if (n[s][i] === t) return n[s][2];
          }
          return null;
        },
        getElement: function (t) {
          var e,
            i,
            s = null;
          return (
            pt(t)
              ? ((t = t[0]), (e = this.acrossScene))
              : ((e = this.scene), (i = typeof t == tt)),
            e && (s = e.getElement(t)),
            !s && i && this.acrossScene && (s = this.acrossScene.getElement(t)),
            s
          );
        },
        getElementsByClassName: function (t) {
          var e = [];
          return (
            this.scene && (e = this.scene.getElementsByClassName(t)),
            this.acrossScene &&
              (e = e.concat(this.acrossScene.getElementsByClassName(t))),
            e
          );
        },
        findElementByDom: function (t) {
          var e = null;
          return (
            this.scene && (e = this.scene.findElementByDom(t)),
            !e &&
              this.acrossScene &&
              (e = this.acrossScene.findElementByDom(t)),
            e
          );
        },
        getParentElem: function () {
          return this.parent;
        },
        getParentDoc: function () {
          return this.parent ? this.parent.getDoc() : null;
        },
        getDoc: function () {
          return this;
        },
      },
      ne,
      oe
    ),
    gi = _t(si, {
      create: function () {
        var t;
        try {
          var e = this._DEF.ch;
          if (e) {
            var i = e[0].trim().toLowerCase(),
              s = e[1];
            if (i)
              (t =
                "svg" == i
                  ? Q.createElementNS(wi, i)
                  : Q.createElement(i)).innerHTML = s;
            else {
              var n = Q.createElement("div");
              (n.innerHTML = s), (t = n.firstElementChild);
            }
          }
        } catch (t) {
          St("CustomElemCreateErr: " + t);
        }
        return (
          t || (t = Q.createElement("div")), (t.style.pointerEvents = "auto"), t
        );
      },
      _updatePointerEvents: function () {},
      setInnerHTML: function (t) {
        this.dom.innerHTML = t;
      },
    });
  ni.regElemType(function (t, e) {
    return new gi(t, e);
  }, t.CUSTOM);
  var vi = _t(si, {
    $init: function (t, e) {
      (this.BgX = 0),
        (this.BgY = 0),
        (this.BgW = "100%"),
        (this.BgH = "100%"),
        (this._imageType = t.it ? t.it : X),
        si.prototype.$init.call(this, t, e);
    },
    create: function () {
      var t, e;
      switch (this._imageType) {
        case z:
          return (
            ((e = (t = Q.createElement("img")).style).pointerEvents = "auto"),
            t.setAttribute("draggable", !1),
            t
          );
        case $:
          return (
            ((t = si.prototype.create.call(this)).style.pointerEvents = "auto"),
            t
          );
        default:
          return (
            (this.imgDom = Q.createElement("div")),
            ((e = this.imgDom.style).backgroundRepeat = "no-repeat"),
            (e.position = "absolute"),
            (e.left = 0),
            (e.top = 0),
            (e.width = "100%"),
            (e.height = "100%"),
            (e.border = "none"),
            (e.pointerEvents = "auto"),
            (t = si.prototype.create.call(this)).appendChild(this.imgDom),
            t
          );
      }
    },
    _updatePointerEvents: function () {},
    _onRemovedFromDoc: function () {
      switch (this._imageType) {
        case X:
          this.imgDom.style.backgroundImage = "none";
          break;
        case z:
          this.dom.src = "";
          break;
        case $:
          this.dom.innerHTML = "";
      }
    },
    setResource: function (t) {
      switch (this._imageType) {
        case X:
          (this.imgDom.style.backgroundImage = "none"),
            (this.imgDom.style.backgroundImage =
              'url("' + t.replace(/"/g, '\\"') + '")');
          break;
        case z:
          this.dom.src = t;
      }
    },
    setResourceInfo: function (t) {
      switch (this._imageType) {
        case $:
          if (void 0 == t || void 0 == t[4]) return;
          this.dom.innerHTML = t[4];
          var e = this.dom.querySelector("svg");
          e && ((e.style.width = "100%"), (e.style.height = "100%"));
      }
    },
    setBgImg: function (t) {
      this._imageType == X &&
        ((this.BgX = Et(t[0]) ? t[0] + "px" : t[0]),
        (this.BgY = Et(t[1]) ? t[1] + "px" : t[1]),
        (this.BgW = Et(t[2]) ? t[2] + "px" : t[2]),
        (this.BgH = Et(t[3]) ? t[3] + "px" : t[3]),
        (this.imgDom.style.backgroundPosition = this.BgX + " " + this.BgY),
        (this.imgDom.style.backgroundSize = this.BgW + " " + this.BgH));
    },
    setBgImgX: function (t) {
      this._imageType == X &&
        ((this.BgX = Et(t) ? t + "px" : t),
        (this.imgDom.style.backgroundPosition = this.BgX + " " + this.BgY));
    },
    setBgImgY: function (t) {
      this._imageType == X &&
        ((this.BgY = Et(t) ? t + "px" : t),
        (this.imgDom.style.backgroundPosition = this.BgX + " " + this.BgY));
    },
    setBgImgW: function (t) {
      this._imageType == X &&
        ((this.BgW = Et(t) ? t + "px" : t),
        (this.imgDom.style.backgroundSize = this.BgW + " " + this.BgH));
    },
    setBgImgH: function (t) {
      this._imageType == X &&
        ((this.BgH = Et(t) ? t + "px" : t),
        (this.imgDom.style.backgroundSize = this.BgW + " " + this.BgH));
    },
  });
  ni.regElemType(function (t, e) {
    return new vi(t, e);
  }, t.IMG);
  var yi = _t(si, {
      $init: function (t, e) {
        (this.speed = 1),
          (this.volume = 1),
          (this.muted = !1),
          si.prototype.$init.call(this, t, e);
        var i = this.getDoc(),
          s = this;
        if (
          (i &&
            (i.addObserver({
              id: this,
              eSpeed: function () {
                s.setSpeed(s.speed);
              },
              eVolume: function () {
                s.setVolume(100 * s.volume);
              },
              eMuted: function () {
                s.setMuted(s.muted);
              },
            }),
            this.setSpeed(this.speed),
            this.setVolume(100 * this.volume),
            this.setMuted(this.muted)),
          this.autoplay)
        ) {
          var n = this;
          setTimeout(function () {
            n.play();
          }, 0);
        }
      },
      create: function () {
        var t = si.prototype.create.call(this),
          e = this.createMedia(),
          i = this;
        return (
          (e.style.pointerEvents = "auto"),
          ge.exportVideo && (e.style.display = "none"),
          t.appendChild(e),
          (this.mediaDom = e),
          (this._updateFromDom = function (t) {
            var e = i.getDoc();
            "volumechange" === t.type
              ? ((this.muted && e.isEffectiveMuted()) || (i.muted = this.muted),
                (i.volume = e
                  ? this.volume / e.getEffectiveVolume()
                  : this.volume))
              : "ratechange" === t.type &&
                (i.speed = e
                  ? this.playbackRate / e.getEffectiveSpeed()
                  : this.playbackRate);
          }),
          e.addEventListener("volumechange", this._updateFromDom, !1),
          e.addEventListener("ratechange", this._updateFromDom, !1),
          (this._loadedMetaData = function () {
            void 0 !== i._pendingVol && i.setVolume(i._pendingVol),
              void 0 !== i._pendingMuted && i.setMuted(i._pendingMuted),
              void 0 !== i._pendingSeek && i.seek(i._pendingSeek),
              i._pendingPlay && i.play();
          }),
          e.addEventListener("loadedmetadata", this._loadedMetaData, !1),
          t
        );
      },
      _onRemovedFromDoc: function () {
        this.mediaDom.removeEventListener(
          "volumechange",
          this._updateFromDom,
          !1
        ),
          this.mediaDom.removeEventListener(
            "ratechange",
            this._updateFromDom,
            !1
          ),
          this.mediaDom.removeEventListener(
            "loadedmetadata",
            this._loadedMetaData,
            !1
          );
        try {
          var t;
          for (
            this.mediaDom.paused || this.mediaDom.pause();
            (t = this.mediaDom.firstChild);

          )
            t.removeAttribute("src"), this.mediaDom.removeChild(t);
          this.mediaDom.removeAttribute("src"),
            nt || this.mediaDom.load(),
            this.mediaDom.parentNode &&
              this.mediaDom.parentNode.removeChild(this.mediaDom);
        } catch (t) {
          St("remove media error " + t);
        }
        var e = this.getDoc();
        e && e.removeObserversById(this);
      },
      setResource: function (t) {
        var e = this.mediaDom.firstChild;
        for (
          e &&
          (delete this._pendingVol,
          delete this._pendingMuted,
          delete this._pendingPlay,
          delete this._pendingSeek);
          e;

        )
          (e.src = ""),
            this.mediaDom.removeChild(e),
            (e = this.mediaDom.firstChild);
        for (var i = 0; i < t.length; i++) {
          var s = Q.createElement("source");
          s.setAttribute("src", t[i]), this.mediaDom.appendChild(s);
        }
        this.mediaDom.load();
      },
      setAutoplay: function (t) {
        this.autoplay = t;
      },
      setVolume: function (t) {
        if (this.mediaDom.readyState < 1) this._pendingVol = t;
        else {
          delete this._pendingVol, (t /= 100), (this.volume = t);
          var e = this.getDoc();
          (this.mediaDom.volume = bt(e ? e.getEffectiveVolume() * t : t, 0, 1)),
            this.muted && this.mediaDom.volume && this.setMuted(!1);
        }
      },
      setLoop: function (t) {
        this.mediaDom.loop = t;
      },
      setMuted: function (t) {
        if (this.mediaDom.readyState < 1) this._pendingMuted = t;
        else {
          delete this._pendingMuted, (this.muted = !!t);
          var e = this.getDoc();
          this.mediaDom.muted = (e && e.isEffectiveMuted()) || this.muted;
        }
      },
      isMuted: function () {
        return this.muted;
      },
      play: function () {
        if (this.mediaDom.readyState < 1) this._pendingPlay = !0;
        else {
          delete this._pendingPlay,
            this._replayingOnError
              ? delete this._replayingOnError
              : (this._replayIfError = 2);
          var t = this.mediaDom.play();
          if (void 0 !== t) {
            var e = this;
            t.catch(function (t) {
              if (
                (St("error play media: " + e.name + ", " + t),
                "NotAllowedError" == t.name)
              ) {
                if (!e._tryPlayMuted) {
                  e._tryPlayMuted = !0;
                  var i = e;
                  if ("video" == e.mediaDom.nodeName.toLowerCase())
                    e.setMuted(!0), e.play();
                  else {
                    var s = e.getDoc();
                    if (s) {
                      for (; s.getParentDoc(); ) s = s.getParentDoc();
                      i = s;
                    }
                  }
                  i.bindOnce("mousedown", function () {
                    e.play(), e.setMuted(!1);
                  });
                }
              } else
                "AbortError" == t.name &&
                  e._replayIfError &&
                  e.mediaDom.readyState <= 1 &&
                  (--e._replayIfError, (e._replayingOnError = !0), e.play());
            });
          }
        }
      },
      pause: function () {
        delete this._pendingPlay,
          delete this._replayIfError,
          this.mediaDom.pause();
      },
      seek: function (t) {
        if (this.mediaDom.readyState < 1) this._pendingSeek = t;
        else {
          delete this._pendingSeek;
          var e = t / 1e3;
          this.mediaDom.currentTime !== e && (this.mediaDom.currentTime = e);
        }
      },
      setSpeed: function (t) {
        this.speed = t;
        var e = this.getDoc();
        try {
          this.mediaDom.defaultPlaybackRate = this.mediaDom.playbackRate = e
            ? e.getEffectiveSpeed() * t
            : t;
        } catch (t) {
          St(t);
        }
      },
      isPlaying: function () {
        return !this.mediaDom.paused;
      },
      isEnded: function () {
        return this.mediaDom.ended && this.mediaDom.readyState >= 1;
      },
    }),
    _i = _t(yi, {
      createMedia: function () {
        var t = this.getDoc(),
          e = t ? t.getMediaPool() : null,
          i = (e && e.getVideo()) || Q.createElement("video"),
          s = i.style;
        return (
          (s.display = "block"),
          (s.width = "100%"),
          (s.height = "100%"),
          i.setAttribute("playsinline", ""),
          i
        );
      },
      create: function () {
        var t = yi.prototype.create.call(this);
        if (ge.exportVideo) {
          var e = Q.createElement("canvas"),
            i = e.style;
          (i.position = "absolute"),
            (i.top = "0px"),
            (i.left = "0px"),
            (i.width = "100%"),
            (i.height = "100%"),
            t.appendChild(e),
            (this.canvasDom = e);
        }
        return t;
      },
      playFullscreen: function () {
        this.mediaDom.requestFullscreen
          ? this.mediaDom.requestFullscreen()
          : this.mediaDom.msRequestFullscreen
          ? this.mediaDom.msRequestFullscreen()
          : this.mediaDom.mozRequestFullScreen
          ? this.mediaDom.mozRequestFullScreen()
          : this.mediaDom.webkitRequestFullscreen &&
            this.mediaDom.webkitRequestFullscreen();
      },
      updateCanvasFrameData: function (t, e, i, s) {
        var n = this.canvasDom;
        if (n) {
          (n.width == i && n.height == s) || ((n.width = i), (n.height = s));
          var o = n.getContext("2d"),
            r = new ImageData(e, i, s);
          o && r && o.putImageData(r, 0, 0);
        }
      },
    }),
    Ti = _t(yi, {
      createMedia: function () {
        var t = this.getDoc(),
          e = t ? t.getMediaPool() : null,
          i = (e && e.getAudio()) || Q.createElement("audio"),
          s = i.style;
        return (s.display = "block"), (s.width = "100%"), i;
      },
    });
  ni.regElemType(function (t, e) {
    return new _i(t, e);
  }, t.VIDEO),
    ni.regElemType(function (t, e) {
      return new Ti(t, e);
    }, t.AUDIO);
  var wi = "http://www.w3.org/2000/svg",
    Si = "userSpaceOnUse",
    bi = {},
    Ei = {},
    xi = _t({
      $init: function (t) {
        var e,
          i = [],
          s = [],
          n = 1,
          o = 1,
          r = -1,
          a = -1;
        for (e = 0; e < t; e++)
          (i[2 * e] = Math.cos((2 * j * e) / t - j / 2)),
            (s[2 * e] = Math.sin((2 * j * e) / t - j / 2)),
            i[2 * e] < n && (n = i[2 * e]),
            s[2 * e] < o && (o = s[2 * e]),
            i[2 * e] > r && (r = i[2 * e]),
            s[2 * e] > a && (a = s[2 * e]),
            (i[2 * e + 1] = Math.cos((2 * j * ((2 * e + 1) / 2)) / t - j / 2)),
            (s[2 * e + 1] = Math.sin((2 * j * ((2 * e + 1) / 2)) / t - j / 2));
        (this.cXs = i),
          (this.cYs = s),
          (this.minX = n),
          (this.minY = o),
          (this.maxX = r),
          (this.maxY = a);
      },
    }),
    Di = _t({
      $init: function (t) {
        var e,
          i = [],
          s = [],
          n = 1,
          o = 1,
          r = -1,
          a = -1;
        for (e = 0; e < t; ++e)
          (i[2 * e] = Math.cos((2 * j * e) / t - j / 2)),
            (s[2 * e] = Math.sin((2 * j * e) / t - j / 2)),
            i[2 * e] < n && (n = i[2 * e]),
            s[2 * e] < o && (o = s[2 * e]),
            i[2 * e] > r && (r = i[2 * e]),
            s[2 * e] > a && (a = s[2 * e]),
            (i[2 * e + 1] = Math.cos((2 * j * ((2 * e + 1) / 2)) / t - j / 2)),
            (s[2 * e + 1] = Math.sin((2 * j * ((2 * e + 1) / 2)) / t - j / 2));
        (this.cXs = i),
          (this.cYs = s),
          (this.minX = n),
          (this.minY = o),
          (this.maxX = r),
          (this.maxY = a);
      },
    }),
    Ai = _t({
      $init: function () {
        this.path = "";
      },
      getPath: function () {
        return this.path;
      },
      clear: function () {
        this.path = "";
      },
      moveTo: function (t, e) {
        this.path += " M" + t + "," + e;
      },
      lineTo: function (t, e) {
        this.path += " L" + t + "," + e;
      },
      arcTo: function (t, e, i, s, n, o) {
        this.path +=
          " A" +
          t +
          "," +
          e +
          " 0 " +
          (n ? 1 : 0) +
          "," +
          (o ? 1 : 0) +
          " " +
          i +
          "," +
          s;
      },
      cubicTo: function (t, e, i, s, n, o) {
        this.path += " C" + t + "," + e + " " + i + "," + s + " " + n + "," + o;
      },
      addEllipse: function (t, e, i, s) {
        this.moveTo(t, e - s),
          this.arcTo(i, s, t, e + s, !0, !0),
          this.arcTo(i, s, t, e - s, !0, !0),
          this.closeSubpath();
      },
      closeSubpath: function () {
        this.path += " Z";
      },
      addRect: function (t, e, i, s) {
        this.moveTo(t, e),
          this.lineTo(t + i, e),
          this.lineTo(t + i, e + s),
          this.lineTo(t, e + s),
          this.closeSubpath();
      },
      addRoundedRect: function (t, e, i, s, n, o) {
        this.moveTo(t + n, e),
          this.lineTo(t + i - n, e),
          this.arcTo(n, o, t + i, e + o, !1, !0),
          this.lineTo(t + i, e + s - o),
          this.arcTo(n, o, t + i - n, e + s, !1, !0),
          this.lineTo(t + n, e + s),
          this.arcTo(n, o, t, e + s - o, !1, !0),
          this.lineTo(t, e + o),
          this.arcTo(n, o, t + n, e, !1, !0),
          this.closeSubpath();
      },
      addStar: function (t, e, i, s, n, o) {
        var r,
          a = bi[o] || (bi[o] = new xi(o)),
          h = a.cXs,
          l = a.cYs,
          c = a.minX,
          d = a.minY,
          u = i / (a.maxX - c),
          p = s / (a.maxY - d);
        for (
          this.moveTo(t + (h[0] - c) * u, e + (l[0] - d) * p),
            this.lineTo(t + (h[1] * n - c) * u, e + (l[1] * n - d) * p),
            r = 1;
          r < o;
          ++r
        )
          this.lineTo(t + (h[2 * r] - c) * u, e + (l[2 * r] - d) * p),
            this.lineTo(
              t + (h[2 * r + 1] * n - c) * u,
              e + (l[2 * r + 1] * n - d) * p
            );
        this.closeSubpath();
      },
      addPolygon: function (t, e, i, s, n) {
        var o,
          r = Ei[n] || (Ei[n] = new Di(n)),
          a = r.cXs,
          h = r.cYs,
          l = r.minX,
          c = r.minY,
          d = i / (r.maxX - l),
          u = s / (r.maxY - c);
        for (
          this.moveTo(t + (a[0] - l) * d, e + (h[0] - c) * u), o = 1;
          o < n;
          ++o
        )
          this.lineTo(t + (a[2 * o] - l) * d, e + (h[2 * o] - c) * u);
        this.closeSubpath();
      },
      addMarker: function (t, e, i) {
        var s, n, o;
        switch (
          ((n = (0 == (s = e % 3) ? 2 : 1 == s ? 3 : 5) * i),
          (o = (0 == (s = Math.floor(e / 3)) ? 2 : 1 == s ? 3 : 5) * i),
          t)
        ) {
          case b.ARROW:
            this.moveTo(0, 0),
              this.lineTo(n, -o / 2),
              this.lineTo(n, o / 2),
              this.closeSubpath();
            break;
          case b.OPEN:
            var r = Math.atan2(o / 2, n),
              a = Math.floor(i / Math.sin(r) / 2);
            this.moveTo(n + a, -o / 2),
              this.lineTo(a, 0),
              this.lineTo(n + a, o / 2);
            break;
          case b.STEALTH:
            this.moveTo(0, 0),
              this.lineTo(n, -o / 2),
              this.lineTo(n / 2, 0),
              this.lineTo(n, o / 2),
              this.closeSubpath();
            break;
          case b.DIAMOND:
            this.moveTo(-n / 2, 0),
              this.lineTo(0, -o / 2),
              this.lineTo(n / 2, 0),
              this.lineTo(0, o / 2),
              this.closeSubpath();
            break;
          case b.OVAL:
            this.addEllipse(0, 0, n / 2, o / 2);
        }
      },
    });
  function Mi(t, e) {
    var i, s, n, o, r;
    for (n = 0, o = e.length; n < o; ++n)
      1 === (i = e[n])[6] || 0 === n
        ? t.moveTo(i[0], i[1])
        : t.cubicTo(s[4], s[5], i[2], i[3], i[0], i[1]),
        (s = i);
    (r = e).length > 1 &&
      2 === r[r.length - 1][6] &&
      ((i = e[0]),
      t.cubicTo(s[4], s[5], i[2], i[3], i[0], i[1]),
      t.closeSubpath());
  }
  function Ci(t, e, i) {
    var s = e % 3,
      n = (0 === s ? 2 : 1 === s ? 3 : 5) * i;
    switch (t) {
      case b.ARROW:
      case b.OPEN:
      case b.STEALTH:
        return e < 3 ? (2.5 * n) / 4 : (2 * n) / 4;
      default:
        return 0;
    }
  }
  var Pi = {
    gen: function (t, e, i, s, n, o) {
      var r = new Ai();
      return (
        this.hasOwnProperty(t)
          ? this[t](r, e, i, s, n, o)
          : t >= S.POLY_MIN && t <= S.POLY_MAX
          ? r.addPolygon(e, i, s, n, t - S.POLY_MIN)
          : t >= S.STAR_MIN &&
            t <= S.STAR_MAX &&
            r.addStar(e, i, s, n, o[0], t - S.STAR_MIN),
        r.getPath()
      );
    },
    11: function (t, e, i, s, n) {
      t.addRect(e, i, s, n);
    },
    12: function (t, e, i, s, n, o) {
      var r = o[0] * Math.min(s / 2, n / 2);
      t.addRoundedRect(e, i, s, n, r, r);
    },
    13: function (t, e, i, s, n, o) {
      this.rectCallout(t, e, i, s, n, o, !1);
    },
    14: function (t, e, i, s, n, o) {
      this.rectCallout(t, e, i, s, n, o, !0);
    },
    15: function (t, e, i, s, n, o) {
      var r = s - Math.min(s, n) * o[0];
      r < 0 ? (r = 0) : r > s && (r = s);
      var a = e + r,
        h = i + (n / 2) * o[1];
      t.moveTo(e, h),
        t.lineTo(a, h),
        t.lineTo(a, i),
        t.lineTo(e + s, i + n / 2),
        t.lineTo(a, i + n),
        t.lineTo(a, i + n - (o[1] * n) / 2),
        t.lineTo(e, i + n - (o[1] * n) / 2),
        t.closeSubpath();
    },
    16: function (t, e, i, s, n, o) {
      var r = Math.min(s, n) * o[0];
      r < 0 ? (r = 0) : r > s && (r = s);
      var a = e + r,
        h = i + (n / 2) * o[1];
      t.moveTo(e + s, i + n - (o[1] * n) / 2),
        t.lineTo(a, i + n - (o[1] * n) / 2),
        t.lineTo(a, i + n),
        t.lineTo(e, i + n / 2),
        t.lineTo(a, i),
        t.lineTo(a, h),
        t.lineTo(e + s, h),
        t.closeSubpath();
    },
    17: function (t, e, i, s, n, o) {
      var r = i + Math.min(s, n) * o[0];
      Math.min(s, n) * o[0] < 0
        ? (r = i)
        : Math.min(s, n) * o[0] > n && (r = i + n);
      var a = e + (s / 2) * o[1];
      t.moveTo(a, i + n),
        t.lineTo(a, r),
        t.lineTo(e, r),
        t.lineTo(e + s / 2, i),
        t.lineTo(e + s, r),
        t.lineTo(e + s - (o[1] * s) / 2, r),
        t.lineTo(e + s - (o[1] * s) / 2, i + n),
        t.closeSubpath();
    },
    18: function (t, e, i, s, n, o) {
      var r = e + (s / 2) * o[1],
        a = i + n - Math.min(s, n) * o[0];
      n - Math.min(s, n) * o[0] < 0
        ? (a = i)
        : n - Math.min(s, n) * o[0] > n && (a = i + n),
        t.moveTo(e + s - (s / 2) * o[1], i),
        t.lineTo(e + s - (s / 2) * o[1], a),
        t.lineTo(e + s, a),
        t.lineTo(e + s / 2, i + n),
        t.lineTo(e, a),
        t.lineTo(r, a),
        t.lineTo(r, i),
        t.closeSubpath();
    },
    19: function (t, e, i, s, n, o) {
      var r = e + (s / 2) * (1 + o[0]),
        a = i + (n / 2) * (1 + o[1]),
        h = Math.atan2(o[1], o[0]),
        l = h - (13 * j) / 180,
        c = h + (14 * j) / 180;
      t.moveTo(r, a),
        t.lineTo(
          e + s / 2 + (s / 2) * Math.cos(c),
          i + n / 2 + (n / 2) * Math.sin(c)
        ),
        t.arcTo(
          s / 2,
          n / 2,
          e + s / 2 + (s / 2) * Math.cos(l),
          i + n / 2 + (n / 2) * Math.sin(l),
          !0,
          !0
        ),
        t.closeSubpath();
    },
    20: function (t, e, i, s, n, o) {
      var r = o[0] * Math.min(s / 2, n / 2);
      t.moveTo(e + r, i),
        t.lineTo(e + s - r, i),
        t.lineTo(e + s - r, i + r),
        t.lineTo(e + s, i + r),
        t.lineTo(e + s, i + n - r),
        t.lineTo(e + s - r, i + n - r),
        t.lineTo(e + s - r, i + n),
        t.lineTo(e + r, i + n),
        t.lineTo(e + r, i + n - r),
        t.lineTo(e, i + n - r),
        t.lineTo(e, i + r),
        t.lineTo(e + r, i + r),
        t.closeSubpath();
    },
    21: function (t, e, i, s, n) {
      t.addEllipse(e + s / 2, i + n / 2, s / 2, n / 2);
    },
    22: function (t, e, i, s, n) {
      t.moveTo(e + s / 2, i),
        t.lineTo(e + s, i + n / 2),
        t.lineTo(e + s / 2, i + n),
        t.lineTo(e, i + n / 2),
        t.closeSubpath();
    },
    25: function (t, e, i, s, n, o) {
      var r = s / 2;
      t.moveTo(e, i + n / 2),
        t.lineTo(e + o[0] * r, i),
        t.lineTo(e + o[0] * r, i + (n / 2) * o[1]),
        t.lineTo(e + s - r * o[0], i + (n / 2) * o[1]),
        t.lineTo(e + s - r * o[0], i),
        t.lineTo(e + s, i + n / 2),
        t.lineTo(e + s - r * o[0], i + n),
        t.lineTo(e + s - r * o[0], i + n - (n / 2) * o[1]),
        t.lineTo(e + o[0] * r, i + n - (n / 2) * o[1]),
        t.lineTo(e + o[0] * r, i + n),
        t.closeSubpath();
    },
    26: function (t, e, i, s, n, o) {
      var r = n / 2;
      t.moveTo(e + s / 2, i),
        t.lineTo(e + s, i + o[1] * r),
        t.lineTo(e + s - (s / 2) * o[0], i + o[1] * r),
        t.lineTo(e + s - (s / 2) * o[0], i + n - r * o[1]),
        t.lineTo(e + s, i + n - r * o[1]),
        t.lineTo(e + s / 2, i + n),
        t.lineTo(e, i + n - r * o[1]),
        t.lineTo(e + (s / 2) * o[0], i + n - r * o[1]),
        t.lineTo(e + (s / 2) * o[0], i + r * o[1]),
        t.lineTo(e, i + o[1] * r),
        t.closeSubpath();
    },
    27: function (t, e, i, s, n, o) {
      var r = o[0] * s,
        a = o[1] * n,
        h = Math.min(o[2], o[0]) * s,
        l = Math.max(o[3], o[1]) * n;
      t.moveTo(e, i),
        t.lineTo(e + h, i),
        t.lineTo(e + h, i + l),
        t.lineTo(e + r, i + l),
        t.lineTo(e + r, i + a),
        t.lineTo(e + s, i + n / 2),
        t.lineTo(e + r, i + n - a),
        t.lineTo(e + r, i + n - l),
        t.lineTo(e + h, i + n - l),
        t.lineTo(e + h, i + n),
        t.lineTo(e, i + n),
        t.closeSubpath();
    },
    28: function (t, e, i, s, n, o) {
      var r = o[1] * s,
        a = o[2] * n,
        h = Math.max(o[0], o[1]) * s,
        l = Math.min(o[2], o[3]) * n;
      t.moveTo(e + s, i),
        t.lineTo(e + s, i + l),
        t.lineTo(e + s - h, i + l),
        t.lineTo(e + s - h, i + a),
        t.lineTo(e + s - r, i + a),
        t.lineTo(e + s / 2, i + n),
        t.lineTo(e + r, i + a),
        t.lineTo(e + h, i + a),
        t.lineTo(e + h, i + l),
        t.lineTo(e, i + l),
        t.lineTo(e, i),
        t.closeSubpath();
    },
    29: function (t, e, i, s, n, o) {
      var r = o[0] * s,
        a = o[1] * n,
        h = Math.max(o[2], o[0]) * s,
        l = Math.max(o[3], o[1]) * n;
      t.moveTo(e + s, i + n),
        t.lineTo(e + h, i + n),
        t.lineTo(e + h, i + n - l),
        t.lineTo(e + r, i + n - l),
        t.lineTo(e + r, i + n - a),
        t.lineTo(e, i + n / 2),
        t.lineTo(e + r, i + a),
        t.lineTo(e + r, i + l),
        t.lineTo(e + h, i + l),
        t.lineTo(e + h, i),
        t.lineTo(e + s, i),
        t.closeSubpath();
    },
    30: function (t, e, i, s, n, o) {
      var r = o[1] * s,
        a = o[2] * n,
        h = Math.max(o[0], o[1]) * s,
        l = Math.max(o[2], o[3]) * n;
      t.moveTo(e, i + n),
        t.lineTo(e, i + l),
        t.lineTo(e + h, i + l),
        t.lineTo(e + h, i + a),
        t.lineTo(e + r, i + a),
        t.lineTo(e + s / 2, i),
        t.lineTo(e + s - r, i + a),
        t.lineTo(e + s - h, i + a),
        t.lineTo(e + s - h, i + l),
        t.lineTo(e + s, i + l),
        t.lineTo(e + s, i + n),
        t.closeSubpath();
    },
    31: function (t, e, i, s, n, o) {
      var r = e + s - s * o[0];
      t.moveTo(e, i + (n / 2) * o[1]),
        t.lineTo(e + r, i + (n / 2) * o[1]),
        t.lineTo(e + r, i),
        t.lineTo(e + s, i + n / 2),
        t.lineTo(e + r, i + n),
        t.lineTo(e + r, i + n - (n / 2) * o[1]),
        t.lineTo(e, i + n - (n / 2) * o[1]),
        t.lineTo(e + (s * o[0]) / 2, i + n / 2),
        t.closeSubpath();
    },
    32: function (t, e, i, s, n, o) {
      var r = s * o[0];
      t.moveTo(e, i),
        t.lineTo(e + s - r, i),
        t.lineTo(e + s, i + n / 2),
        t.lineTo(e + s - r, i + n),
        t.lineTo(e, i + n),
        t.lineTo(e + r, i + n / 2),
        t.closeSubpath();
    },
    33: function (t, e, i, s, n, o) {
      t.moveTo(e + o[0] * s, i),
        t.lineTo(e + s, i + n),
        t.lineTo(e, i + n),
        t.closeSubpath();
    },
    34: function (t, e, i, s, n) {
      t.moveTo(e, i),
        t.lineTo(e + s, i + n),
        t.lineTo(e, i + n),
        t.closeSubpath();
    },
    35: function (t, e, i, s, n) {
      t.moveTo(e + 0.2 * s, i),
        t.lineTo(e + s, i),
        t.lineTo(e + 0.8 * s, i + n),
        t.lineTo(e, i + n),
        t.closeSubpath();
    },
    53: function (t, e, i, s, n, o) {
      var r = o[0] * Math.min(s / 2, n / 2);
      t.moveTo(e + r, i),
        t.lineTo(e + s - r, i),
        t.cubicTo(e + s - r, i, e + s - r, i + r, e + s, i + r),
        t.lineTo(e + s, i + n - r),
        t.cubicTo(e + s, i + n - r, e + s - r, i + n - r, e + s - r, i + n),
        t.lineTo(e + r, i + n),
        t.cubicTo(e + r, i + n, e + r, i + n - r, e, i + n - r),
        t.lineTo(e, i + r),
        t.cubicTo(e, i + r, e + r, i + r, e + r, i),
        t.closeSubpath();
    },
    56: function (t, e, i, s, n) {
      t.moveTo(e + s / 2, i + n / 4),
        t.cubicTo(
          e + 0.75 * s,
          i - n / 3,
          e + 1.5 * s,
          i + n / 4,
          e + s / 2,
          i + n
        ),
        t.cubicTo(
          e - s / 2,
          i + n / 4,
          e + s / 4,
          i - n / 3,
          e + s / 2,
          i + n / 4
        ),
        t.closeSubpath();
    },
    57: function (t, e, i, s, n, o) {
      t.moveTo(e + s, i),
        t.cubicTo(
          e + o[0] * s,
          i,
          e + o[0] * s,
          i + n / 2,
          e + o[0] * s,
          i + n / 2
        ),
        t.cubicTo(e + o[0] * s, i + n / 2, e + o[0] * s, i + n, e + s, i + n),
        t.cubicTo(e, i + n, e, i + n / 2, e, i + n / 2),
        t.cubicTo(e, i + n / 2, e, i, e + s, i),
        t.closeSubpath();
    },
    61: function (t, e, i, s, n, o) {
      var r = o[0] * Math.min(s / 2, n / 2);
      t.moveTo(e + r, i),
        t.lineTo(e + s - r, i),
        t.lineTo(e + s, i + n),
        t.lineTo(e, i + n),
        t.closeSubpath();
    },
    69: function (t, e, i, s, n) {
      t.moveTo(e, i),
        t.lineTo(e + s, i),
        t.lineTo(e + s, i + 0.8 * n),
        t.lineTo(e + s / 2, i + n),
        t.lineTo(e, i + 0.8 * n),
        t.closeSubpath();
    },
    71: function (t, e, i, s, n) {
      t.moveTo(e + s / 6, i),
        t.lineTo(e + (5 / 6) * s, i),
        t.cubicTo(e + (5 / 6) * s, i, e + s, i, e + s, i + n / 2),
        t.cubicTo(e + s, i + n, e + (5 / 6) * s, i + n, e + (5 / 6) * s, i + n),
        t.lineTo(e + s / 6, i + n),
        t.lineTo(e, i + n / 2),
        t.closeSubpath();
    },
    72: function (t, e, i, s, n) {
      t.moveTo(e + 0.2 * s, i),
        t.lineTo(e + s, i),
        t.lineTo(e + s, i + n),
        t.lineTo(e, i + n),
        t.lineTo(e, i + 0.2 * n),
        t.closeSubpath();
    },
    73: function (t, e, i, s, n, o) {
      var r = bt(o[0] * Math.min(s, n), 0, s);
      t.moveTo(e, i),
        t.lineTo(e + s - r, i),
        t.lineTo(e + s, i + n / 2),
        t.lineTo(e + s - r, i + n),
        t.lineTo(e, i + n),
        t.closeSubpath();
    },
    74: function (t, e, i, s, n) {
      t.moveTo(e + s / 6, i),
        t.lineTo(e + s, i),
        t.cubicTo(
          e + (7 * s) / 9,
          i - n / 35,
          e + (7 * s) / 9,
          i + (36 * n) / 35,
          e + s,
          i + n
        ),
        t.lineTo(e + s / 6, i + n),
        t.cubicTo(
          e - s / 18,
          i + (36 * n) / 35,
          e - s / 18,
          i - n / 35,
          e + s / 6,
          i
        ),
        t.closeSubpath();
    },
    75: function (t, e, i, s, n, o) {
      var r = (o[1] * s) / 2,
        a = (o[0] * n) / 2;
      r <= 0
        ? (t.moveTo(e - 2 * r, i + a),
          t.cubicTo(
            e + s / 4 - 2 * r,
            i - 2.5 * a,
            e + (3 * s) / 4,
            i + 5 * a,
            e + s,
            i + a
          ),
          t.lineTo(e + s + 2 * r, i + n - a),
          t.cubicTo(
            e + (3 * s) / 4 + 2.2 * r,
            i + n + 2.5 * a,
            e + s / 4,
            i + n - 5 * a,
            e,
            i + n - a
          ),
          t.lineTo(e - 2 * r, i + a),
          t.closeSubpath())
        : (t.moveTo(e, i + a),
          t.cubicTo(
            e + s / 4,
            i - 2.5 * a,
            e + (3 * s) / 4 - 2 * r,
            i + 5 * a,
            e + s - 2 * r,
            i + a
          ),
          t.lineTo(e + s, i + n - a),
          t.cubicTo(
            e + (3 * s) / 4,
            i + n + 2.5 * a,
            e + s / 4 + 2 * r,
            i + n - 5 * a,
            e + 2 * r,
            i + n - a
          ),
          t.lineTo(e, i + a),
          t.closeSubpath());
    },
    1e3: function (t, e, i, s, n, o) {
      var r,
        a,
        h = Math.min(s, n),
        l = e + (s * (1 + o[0])) / 2,
        c = i + (n * (1 + o[1])) / 2,
        d = (2 * h) / 10;
      t.addEllipse(e + s / 2, i + n / 2, s / 2, n / 2),
        (d = (0.3 * h) / 10),
        t.addEllipse(l, c, d, d),
        (d = (0.8 * h) / 10),
        (r = (e + s / 2 - l) / 7.5),
        (a = (i + n / 2 - c) / 7.5),
        t.addEllipse(l + r, c + a, d, d),
        (d = (1.5 * h) / 10),
        (r = (e + s / 2 - l) / 3),
        (a = (i + n / 2 - c) / 3),
        t.addEllipse(l + r, c + a, d, d);
    },
    1001: function (t, e, i, s, n, o) {
      var r,
        a,
        h = Math.min(s, n),
        l = e + (s * (1 + o[0])) / 2,
        c = i + (n * (1 + o[1])) / 2,
        d = (2 * h) / 10;
      t.addRoundedRect(e, i, s, n, d, d),
        (d = (0.3 * h) / 10),
        t.addEllipse(l, c, d, d),
        (d = (0.8 * h) / 10),
        (r = (e + s / 2 - l) / 7.5),
        (a = (i + n / 2 - c) / 7.5),
        t.addEllipse(l + r, c + a, d, d),
        (d = (1.5 * h) / 10),
        (r = (e + s / 2 - l) / 3),
        (a = (i + n / 2 - c) / 3),
        t.addEllipse(l + r, c + a, d, d);
    },
    rectCallout: function (t, e, i, s, n, o, r) {
      var a = o[0],
        h = o[1],
        l = e + (s / 2) * (1 + a),
        c = i + (n / 2) * (1 + h),
        d = r ? 0.2 * Math.min(s, n) : 0;
      t.moveTo(e + d, i),
        a <= 0 && h <= 0 && Math.abs(a) <= Math.abs(h)
          ? (t.lineTo(e + 0.2 * s, i),
            t.lineTo(l, c),
            t.lineTo(e + 0.4 * s, i),
            t.lineTo(e + s - d, i),
            r && t.arcTo(d, d, e + s, i + d, !1, !0),
            t.lineTo(e + s, i + n - d),
            r && t.arcTo(d, d, e + s - d, i + n, !1, !0),
            t.lineTo(e + d, i + n),
            r && t.arcTo(d, d, e, i + n - d, !1, !0),
            t.lineTo(e, i + d),
            r && t.arcTo(d, d, e + d, i, !1, !0))
          : a <= 0 && h <= 0 && Math.abs(a) > Math.abs(h)
          ? (t.lineTo(e + s - d, i),
            r && t.arcTo(d, d, e + s, i + d, !1, !0),
            t.lineTo(e + s, i + n - d),
            r && t.arcTo(d, d, e + s - d, i + n, !1, !0),
            t.lineTo(e + d, i + n),
            r && t.arcTo(d, d, e, i + n - d, !1, !0),
            t.lineTo(e, i + (4 * n) / 10),
            t.lineTo(l, c),
            t.lineTo(e, i + (2 * n) / 10),
            r && t.arcTo(d, d, e + d, i, !1, !0))
          : a > 0 && h <= 0 && Math.abs(a) <= Math.abs(h)
          ? (t.lineTo(e + (6 * s) / 10, i),
            t.lineTo(l, c),
            t.lineTo(e + (8 * s) / 10, i),
            t.lineTo(e + s - d, i),
            r && t.arcTo(d, d, e + s, i + d, !1, !0),
            t.lineTo(e + s, i + n - d),
            r && t.arcTo(d, d, e + s - d, i + n, !1, !0),
            t.lineTo(e + d, i + n),
            r && t.arcTo(d, d, e, i + n - d, !1, !0),
            t.lineTo(e, i + d),
            r && t.arcTo(d, d, e + d, i, !1, !0))
          : a > 0 && h <= 0 && Math.abs(a) > Math.abs(h)
          ? (t.lineTo(e + s - d, i),
            r && t.arcTo(d, d, e + s, i + d, !1, !0),
            t.lineTo(e + s, i + (2 * n) / 10),
            t.lineTo(l, c),
            t.lineTo(e + s, i + (4 * n) / 10),
            t.lineTo(e + s, i + n - d),
            r && t.arcTo(d, d, e + s - d, i + n, !1, !0),
            t.lineTo(e + d, i + n),
            r && t.arcTo(d, d, e, i + n - d, !1, !0),
            t.lineTo(e, i + d),
            r && t.arcTo(d, d, e + d, i, !1, !0))
          : a <= 0 && h > 0 && Math.abs(a) > Math.abs(h)
          ? (t.lineTo(e + s - d, i),
            r && t.arcTo(d, d, e + s, i + d, !1, !0),
            t.lineTo(e + s, i + n - d),
            r && t.arcTo(d, d, e + s - d, i + n, !1, !0),
            t.lineTo(e + d, i + n),
            r && t.arcTo(d, d, e, i + n - d, !1, !0),
            t.lineTo(e, i + 0.8 * n),
            t.lineTo(l, c),
            t.lineTo(e, i + (6 * n) / 10),
            t.lineTo(e, i + d),
            r && t.arcTo(d, d, e + d, i, !1, !0))
          : a <= 0 && h > 0 && Math.abs(a) <= Math.abs(h)
          ? (t.lineTo(e + s - d, i),
            r && t.arcTo(d, d, e + s, i + d, !1, !0),
            t.lineTo(e + s, i + n - d),
            r && t.arcTo(d, d, e + s - d, i + n, !1, !0),
            t.lineTo(e + (4 * s) / 10, i + n),
            t.lineTo(l, c),
            t.lineTo(e + (2 * s) / 10, i + n),
            t.lineTo(e + d, i + n),
            r && t.arcTo(d, d, e, i + n - d, !1, !0),
            t.lineTo(e, i + d),
            r && t.arcTo(d, d, e + d, i, !1, !0))
          : a > 0 && h > 0 && Math.abs(a) > Math.abs(h)
          ? (t.lineTo(e + s - d, i),
            r && t.arcTo(d, d, e + s, i + d, !1, !0),
            t.lineTo(e + s, i + (6 * n) / 10),
            t.lineTo(l, c),
            t.lineTo(e + s, i + 0.8 * n),
            t.lineTo(e + s, i + n - d),
            r && t.arcTo(d, d, e + s - d, i + n, !1, !0),
            t.lineTo(e + d, i + n),
            r && t.arcTo(d, d, e, i + n - d, !1, !0),
            t.lineTo(e, i + d),
            r && t.arcTo(d, d, e + d, i, !1, !0))
          : a > 0 &&
            h > 0 &&
            Math.abs(a) <= Math.abs(h) &&
            (t.lineTo(e + s - d, i),
            r && t.arcTo(d, d, e + s, i + d, !1, !0),
            t.lineTo(e + s, i + n - d),
            r && t.arcTo(d, d, e + s - d, i + n, !1, !0),
            t.lineTo(e + 0.8 * s, i + n),
            t.lineTo(l, c),
            t.lineTo(e + (6 * s) / 10, i + n),
            t.lineTo(e + d, i + n),
            r && t.arcTo(d, d, e, i + n - d, !1, !0),
            t.lineTo(e, i + d),
            r && t.arcTo(d, d, e + d, i, !1, !0)),
        t.closeSubpath();
    },
  };
  function Ri(t) {
    var e;
    try {
      e = t.getBBox();
    } catch (t) {
      e = { x: 0, y: 0, width: 0, height: 0 };
    }
    return { x: e.x, y: e.y, width: e.width, height: e.height };
  }
  var Oi = _t(si, {
    create: function () {
      var t = si.prototype.create.call(this),
        e = Q.createElement("div"),
        i = e.style;
      return (
        (i.width = "100%"),
        (i.height = "100%"),
        (i.position = "absolute"),
        (i.left = 0),
        (i.top = 0),
        (i.boxSizing = "border-box"),
        t.insertBefore(e, t.firstChild),
        (this.painter = new ei(e)),
        t
      );
    },
    _initText: function () {
      this.textDom ||
        (si.prototype._initText.call(this), this._updateTextRect());
    },
    _updateTextRect: function () {
      if (this.textContainer) {
        var t = this.textContainer.style;
        (t.left = "0%"),
          (t.top = "0%"),
          (t.width = "100%"),
          (t.height = "100%");
      }
    },
    _onResized: function (t, e) {
      this._updateTextRect(), si.prototype._onResized.call(this, t, e);
    },
  });
  ni.regElemType(function (t, e) {
    return new Oi(t, e);
  }, t.TEXT);
  var Ii = _t(Oi, {
    setTopLeftRadius: function (t) {
      var e = Et(t) ? t + "px" : t;
      (this.painter.dom.style.borderTopLeftRadius = e), this._updateTextRect();
    },
    setTopRightRadius: function (t) {
      var e = Et(t) ? t + "px" : t;
      (this.painter.dom.style.borderTopRightRadius = e), this._updateTextRect();
    },
    setBottomLeftRadius: function (t) {
      var e = Et(t) ? t + "px" : t;
      (this.painter.dom.style.borderBottomLeftRadius = e),
        this._updateTextRect();
    },
    setBottomRightRadius: function (t) {
      var e = Et(t) ? t + "px" : t;
      (this.painter.dom.style.borderBottomRightRadius = e),
        this._updateTextRect();
    },
    _updateTextRect: function () {
      if (this.textContainer) {
        var t = Ii.getTextRect(this, 10),
          e = this.textContainer.style;
        (e.left = t.left + "px"),
          (e.top = t.top + "px"),
          (e.width = t.width + "px"),
          (e.height = t.height + "px");
      }
    },
  });
  ni.regElemType(function (t, e) {
    return new Ii(t, e);
  }, t.DIV),
    (Ii.getTextRect = function (t, e) {
      var i = t.dom.offsetWidth,
        s = t.dom.offsetHeight;
      if (i <= 0 || s <= 0) return { left: 0, top: 0, width: 0, height: 0 };
      var n = t.dom.clientWidth,
        o = t.dom.clientHeight,
        r = (i - n) / 2;
      e = e || 10;
      var a = function (t) {
          var e = Ae(t),
            n = { x: 0, y: 0, isPixel: !0 };
          return (
            e &&
              ((n.x = e.value),
              (n.y = e.value),
              "%" === e.unit &&
                ((n.isPixel = !1),
                (n.x = (e.value * i) / 100),
                (n.y = (e.value * s) / 100))),
            n
          );
        },
        h = function (t) {
          var e = t.x,
            i = t.y,
            s = { x: 0, y: 0 };
          if (0 !== e && 0 !== i) {
            var n = i / e;
            e > i
              ? ((s.x = e * (1 - 1 / Math.sqrt(2))), (s.y = s.x * n))
              : ((s.y = i * (1 - 1 / Math.sqrt(2))), (s.x = s.y / n));
          }
          return s;
        },
        l = function (t) {
          if (t.isPixel) {
            var e = Math.min(t.x, t.y);
            (t.x = e), (t.y = e);
          }
        },
        c = a(t.painter.dom.style.borderTopLeftRadius),
        d = a(t.painter.dom.style.borderTopRightRadius),
        u = a(t.painter.dom.style.borderBottomLeftRadius),
        p = a(t.painter.dom.style.borderBottomRightRadius),
        f = s / (c.y + u.y),
        m = s / (d.y + p.y),
        g = i / (c.x + d.x),
        v = i / (u.x + p.x);
      f < 1 && ((c.y *= f), (u.y *= f)),
        m < 1 && ((d.y *= m), (p.y *= m)),
        g < 1 && ((c.x *= g), (d.x *= g)),
        v < 1 && ((u.x *= v), (p.x *= v)),
        l(c),
        l(d),
        l(u),
        l(p),
        (c.x = c.x > r ? c.x - r : 0),
        (c.y = c.y > r ? c.y - r : 0),
        (d.x = d.x > r ? d.x - r : 0),
        (d.y = d.y > r ? d.y - r : 0),
        (u.x = u.x > r ? u.x - r : 0),
        (u.y = u.y > r ? u.y - r : 0),
        (p.x = p.x > r ? p.x - r : 0),
        (p.y = p.y > r ? p.y - r : 0);
      var y = h(c),
        _ = h(d),
        T = h(u),
        w = h(p),
        S = e + Math.max(y.x, T.x),
        b = e + Math.max(_.x, w.x),
        E = e + Math.max(y.y, _.y),
        x = e + Math.max(T.y, w.y);
      return (
        S > n && ((S = n), (b = 0)),
        E > o && ((E = o), (x = 0)),
        { left: S, top: E, width: n - S - b, height: o - E - x }
      );
    });
  var ki = _t(ei, {
      $init: function (t) {
        (this._shapeType = S.RECT),
          (this._shapeAdjs = []),
          (this._lineStyle = "none"),
          (this._lineWidth = 1),
          (this._lineColor = "black"),
          (this._lineAlpha = 255),
          (this._lineCap = "butt"),
          (this._lineJoin = "miter"),
          ei.prototype.$init.call(this, t);
      },
      hasLine: function () {
        return "none" != this._lineStyle;
      },
      _createPathNodes: function () {
        var t,
          e = !this.svgPath,
          i = e,
          s = !1;
        this.hasArrow()
          ? this._lineGroup ||
            ((s = !0),
            this.svgPath &&
              ((this._fillPath.style.stroke = "none"),
              this.svgPath == this._fillPath &&
                (this._fillPath.removeAttribute("transform"),
                this._fillPath.removeAttribute("filter"),
                (i = !0))),
            this._fillPath || (this._fillPath = Q.createElementNS(wi, "path")),
            i &&
              ((this.svgPath = Q.createElementNS(wi, "g")),
              this.svgPath.appendChild(this._fillPath),
              this.dom.appendChild(this.svgPath)),
            (this._lineGroup = Q.createElementNS(wi, "g")),
            (this._linePath = Q.createElementNS(wi, "path")),
            this._lineGroup.appendChild(this._linePath),
            (this._lineStart = Q.createElementNS(wi, "path")),
            ((t = this._lineStart.style).strokeLinecap = "round"),
            (t.strokeLinejoin = "miter"),
            this._lineGroup.appendChild(this._lineStart),
            (this._lineEnd = Q.createElementNS(wi, "path")),
            ((t = this._lineEnd.style).strokeLinecap = "round"),
            (t.strokeLinejoin = "miter"),
            this._lineGroup.appendChild(this._lineEnd),
            this.svgPath.appendChild(this._lineGroup))
          : i &&
            ((this._fillPath = this._linePath = Q.createElementNS(wi, "path")),
            dt || st.svgShadowBox
              ? (this.svgPath = this._fillPath)
              : ((this.svgPath = Q.createElementNS(wi, "g")),
                this.svgPath.appendChild(this._fillPath)),
            this.dom.appendChild(this.svgPath)),
          i &&
            (((t = this.svgPath.style).pointerEvents = "visiblePainted"),
            (t.strokeMiterlimit = 8),
            (t.fill = t.stroke = "none")),
          !e &&
            s &&
            (this.setBorderWidth(this._lineWidth),
            this.setLineJoin(this._lineJoin),
            this.setLineCap(this._lineCap),
            this.setBorderColor(this._lineColor, this._lineAlpha),
            this._dashOffset && this.setDashOffset(this._dashOffset));
      },
      _arrowData: function (t) {
        void 0 !== t[2]
          ? (this._endArrow = { type: t[2], size: t[3] })
          : delete this._endArrow,
          void 0 !== t[4]
            ? (this._startArrow = { type: t[4], size: t[5] })
            : delete this._startArrow;
      },
      _updateArrows: function () {
        !this._lineGroup && this.hasArrow()
          ? this._createPathNodes()
          : (this._updatePath(),
            this.setBorderColor(this._lineColor, this._lineAlpha));
      },
      setStartArrow: function (t, e) {
        (this._startArrow = { type: t, size: e }), this._updateArrows();
      },
      setEndArrow: function (t, e) {
        (this._endArrow = { type: t, size: e }), this._updateArrows();
      },
      hasArrow: function () {
        return (
          (this._startArrow && this._startArrow.type != b.NONE) ||
          (this._endArrow && this._endArrow.type != b.NONE)
        );
      },
      setBorderStyle: function (t) {
        if (((this._lineStyle = t), delete this._lineDash, "none" == t))
          this._lineGroup
            ? (this._lineGroup.style.display = t)
            : (this._linePath.style.stroke = t);
        else {
          this._lineGroup
            ? (this._lineGroup.style.display = "")
            : (this._linePath.style.stroke = this._lineColor);
          var e = this._lineWidth,
            i = "butt" == this._lineCap ? 0 : e;
          "dotted" == t
            ? (this._lineDash = [e - i, e + i])
            : "dashed" == t
            ? (this._lineDash = [3 * e - i, 3 * e + i])
            : "solid" != t && (this._lineDash = Be(t)),
            void 0 !== this._lineFullLen
              ? this._updateLineDraw()
              : (this._linePath.style.strokeDasharray =
                  (this._lineDash && this._lineDash.join(" ")) || "none");
        }
        this._preventLineBlurry();
      },
      setLineJoin: function (t) {
        (this._lineJoin = t), (this._linePath.style.strokeLinejoin = t);
      },
      setLineCap: function (t) {
        (this._lineCap = t),
          (this._linePath.style.strokeLinecap = t),
          this.setBorderStyle(this._lineStyle);
      },
      setLineLength: function (t) {
        (this._linePercent = t),
          void 0 !== this._lineFullLen
            ? ((t /= 100),
              1 == Math.abs(t % 2)
                ? ((this._linePath.style.strokeDasharray =
                    (this._lineDash && this._lineDash.join(" ")) || "none"),
                  this.setDashOffset(0),
                  this._lineDrawFull ||
                    ((this._lineDrawFull = !0),
                    this.hasArrow() && this._updatePath()))
                : (this._lineDrawFull &&
                    (delete this._lineDrawFull,
                    this._updateLineDraw(!0),
                    this.hasArrow() && this._updatePath()),
                  this.setDashOffset((1 - t) * this._lineFullLen)))
            : this._updateLineDraw();
      },
      enableLineDraw: function (t) {
        t
          ? void 0 === this._lineFullLen && this._updateLineDraw()
          : void 0 !== this._lineFullLen &&
            (delete this._lineFullLen,
            delete this._linePercent,
            delete this._lineDrawFull,
            this.setBorderStyle(this._lineStyle),
            this.setDashOffset(0),
            this.hasArrow() && this._updatePath());
      },
      _updateLineDraw: function (t) {
        var e = this._lineFullLen,
          i = this._lineStyle,
          s = "none",
          n = void 0 === e;
        if (
          ((t && !n) ||
            (this._lineFullLen = e =
              Math.ceil(this._linePath.getTotalLength())),
          "solid" == i)
        )
          s = e;
        else if (this._lineDash) {
          var o = this._lineDash.reduce(function (t, e) {
            return t + e;
          }, 0);
          if (o > 0) {
            var r,
              a = Math.floor(e / o),
              h = this._lineDash.join(" ");
            for (s = "", r = 0; r < a; ++r) s += h + " ";
            var l = e - a * o;
            for (r = 0; r < this._lineDash.length; ) {
              if (!((o = this._lineDash[r]) < l)) {
                s += r % 2 == 0 ? l + " " + e : l + e;
                break;
              }
              (s += o + " "), (l -= o), ++r;
            }
          }
        }
        (this._linePath.style.strokeDasharray = s),
          void 0 === this._linePercent && (this._linePercent = 100),
          t || this.setLineLength(this._linePercent),
          n && !this._lineDrawFull && this.hasArrow() && this._updatePath();
      },
      setDashOffset: function (t) {
        (this._dashOffset = t), (this._linePath.style.strokeDashoffset = t);
      },
      setDashArray: function (t) {
        (this._lineDash = t),
          (this._linePath.style.strokeDasharray = t.join(" ") || "none"),
          void 0 !== this._lineFullLen && this._updateLineDraw();
      },
      setBorderWidth: function (t) {
        (this._lineWidth = parseFloat(t) || 0),
          (this._linePath.style.strokeWidth = t),
          this.hasArrow() &&
            (this._updatePath(),
            this._lineStart && (this._lineStart.style.strokeWidth = t),
            this._lineEnd && (this._lineEnd.style.strokeWidth = t)),
          this.setBorderStyle(this._lineStyle);
      },
      setBorderColor: function (t, e, i, s) {
        var n;
        typeof t === tt
          ? ((this._lineColor = t), (s = e))
          : (this._lineColor = Mt(t, e, i)),
          (this._lineAlpha = void 0 === s ? 255 : s),
          this._lineGroup
            ? ((this._lineGroup.style.opacity = this._lineAlpha / 255),
              (this._linePath.style.stroke = this._lineColor),
              this._lineStart &&
                ((n = this._lineStart.style),
                this._startArrow && this._startArrow.type != b.NONE
                  ? this._startArrow.type == b.OPEN
                    ? ((n.stroke = this._lineColor), (n.fill = "none"))
                    : ((n.stroke = "none"), (n.fill = this._lineColor))
                  : (n.stroke = n.fill = "none")),
              this._lineEnd &&
                ((n = this._lineEnd.style),
                this._endArrow && this._endArrow.type !== b.NONE
                  ? this._endArrow.type === b.OPEN
                    ? ((n.stroke = this._lineColor), (n.fill = "none"))
                    : ((n.stroke = "none"), (n.fill = this._lineColor))
                  : (n.stroke = n.fill = "none")))
            : ("none" !== this._lineStyle &&
                (this._linePath.style.stroke = this._lineColor),
              (this._linePath.style.strokeOpacity = this._lineAlpha / 255));
      },
      _preventLineBlurry: function () {
        var t = (this._lineWidth % 2) / 2;
        t && "none" !== this._lineStyle
          ? this.svgPath.setAttribute(
              "transform",
              "translate(" + t + ", " + t + ")"
            )
          : this.svgPath.removeAttribute("transform");
      },
      fillNone: function () {
        (this.fillType = h),
          (this._fillPath.style.fill = "none"),
          (this._gradient = null);
      },
      fillSolid: function (t, e, i, s) {
        (this.fillType = l),
          (this._fillPath.style.fill = Mt(t, e, i)),
          void 0 === s && (s = 255),
          (this._fillPath.style.fillOpacity = s / 255),
          (this._gradient = null);
      },
      fillImage: function (t, e, i, s, n) {
        this.fillType = d;
        var o = this._fillPath.style;
        if (
          (this._imageFillData
            ? ((this._imageFillData[1] = i),
              (this._imageFillData[2] = s),
              (this._imageFillData[3] = n))
            : (this._imageFillData = ["", i, s, n]),
          !this.svgImgPattern)
        ) {
          var r = Q.createElementNS(wi, "pattern");
          (r.id = "sl-imgfill-" + Dt()),
            r.setAttribute("patternUnits", "userSpaceOnUse"),
            (this.svgImgPattern = r),
            this._createDefs(),
            this.svgDefs.appendChild(this.svgImgPattern);
        }
        if (
          (this.svgImage ||
            ((this.svgImage = Q.createElementNS(wi, "image")),
            this.svgImgPattern.appendChild(this.svgImage)),
          t && t !== this._imageFillData[0])
        )
          (this._imageFillData[0] = t),
            this.svgImage.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              t
            );
        else if (!t)
          return (this._imageFillData[0] = ""), void (o.fill = "none");
        var a = {
            x: "0%",
            y: "0%",
            width: "100%",
            height: "100%",
            preserveAspectRatio: "none",
            transform: "matrix(1, 0, 0, 1, 0, 0)",
          },
          h = { width: "100%", height: "100%" };
        i == m
          ? ((a.width = h.width = s + "px"), (a.height = h.height = n + "px"))
          : i === f
          ? (a.preserveAspectRatio = "xMidYMid meet")
          : i === g
          ? (a.preserveAspectRatio = "xMidYMid slice")
          : i === p &&
            ((a.x = "50%"),
            (a.y = "50%"),
            (a.width = s + "px"),
            (a.height = n + "px"),
            (a.transform = "translate(-" + s / 2 + ",-" + n / 2 + ")")),
          At(this.svgImage, a),
          At(this.svgImgPattern, h),
          (o.fill = "url(#" + this.svgImgPattern.id + ")"),
          (o.fillOpacity = 1);
      },
      fillLinearGradient: function (t, e) {
        this.fillType = c;
        var i,
          s,
          n,
          o,
          r,
          a,
          h,
          l,
          d,
          u,
          p,
          f,
          m = this._fillPath.style,
          g = [],
          y =
            ((r = t),
            (a = Ri(this.dom)),
            (p = Math.tan((r * j) / 180)),
            (f = 1 + p * p),
            (r %= 360) < 0 && (r += 360),
            r < 90
              ? ((h = a.x),
                (l = a.y + a.height),
                (d = a.x + a.width),
                (u = a.y))
              : r < 180
              ? ((h = a.x),
                (l = a.y),
                (d = a.x + a.width),
                (u = a.y + a.height))
              : r < 270
              ? ((d = a.x),
                (u = a.y + a.height),
                (h = a.x + a.width),
                (l = a.y))
              : ((d = a.x),
                (u = a.y),
                (h = a.x + a.width),
                (l = a.y + a.height)),
            {
              x1: ((p * h - l) * p) / f,
              y1: (-p * h + l) / f,
              x2: ((p * d - u) * p) / f,
              y2: (-p * d + u) / f,
            }),
          _ = !e,
          T = _ ? this.svgLGrad : Q.createElementNS(wi, "linearGradient");
        if (T)
          if (
            (T.setAttribute("x1", y.x1),
            T.setAttribute("y1", y.y1),
            T.setAttribute("x2", y.x2),
            T.setAttribute("y2", y.y2),
            _)
          )
            this._gradient && this._gradient[0] == v && (this._gradient[1] = t);
          else {
            for (
              T.id = "sl-lgrad-" + Dt(),
                T.setAttribute("gradientUnits", "userSpaceOnUse"),
                i = 0,
                s = e.length;
              i < s;
              ++i
            )
              (n = e[i]),
                g.push(n.slice()),
                (o = Q.createElementNS(wi, "stop")).setAttribute(
                  "offset",
                  n[0] + "%"
                ),
                o.setAttribute("stop-color", Mt(n[1], n[2], n[3])),
                o.setAttribute(
                  "stop-opacity",
                  void 0 === n[4] ? 1 : n[4] / 255
                ),
                T.appendChild(o);
            (this._gradient = [v, t, g]),
              this.svgLGrad && this.svgLGrad.parentNode
                ? this.svgLGrad.parentNode.replaceChild(T, this.svgLGrad)
                : (this._createDefs(), this.svgDefs.appendChild(T)),
              (this.svgLGrad = T),
              (m.fill = "url(#" + T.id + ")"),
              (m.fillOpacity = 1);
          }
      },
      fillRadialGradient: function (t, e, i, s, n) {
        this.fillType = c;
        var o,
          r,
          a,
          h,
          l,
          d = this._fillPath.style,
          u = [],
          p = !i,
          f = p ? this.svgRGrad : Q.createElementNS(wi, "radialGradient");
        if (f) {
          if (p) {
            if (!this._gradient || this._gradient[0] != y) return;
            void 0 === t ? (t = this._gradient[1]) : (this._gradient[1] = t),
              void 0 === e ? (e = this._gradient[2]) : (this._gradient[2] = e),
              (s = this._gradient[4]),
              (n = this._gradient[5]);
          }
          var m, g, v, w, S, b, E, x, D, A, M, C, P, R, O, I, k;
          if (
            ((m = t),
            (g = e),
            (v = s),
            (w = n),
            (S = Ri(this.dom)),
            (D = S.x + (m * S.width) / 100),
            (A = S.y + (g * S.height) / 100),
            (M = Math.abs(D - S.x)),
            (C = Math.abs(S.x + S.width - D)),
            (P = Math.abs(A - S.y)),
            (R = Math.abs(S.y + S.height - A)),
            (O = 1),
            (I = 1),
            (k = ""),
            w == T.CLOSE_SIDE || w == T.CLOSE_CORNER
              ? ((b = Math.min(M, C)),
                (E = Math.min(P, R)),
                v == _.CIRCLE
                  ? (x =
                      w == T.CLOSE_SIDE
                        ? Math.min(b, E)
                        : Math.sqrt(b * b + E * E))
                  : 0 == b || 0 == E
                  ? (x = 0)
                  : b >= E
                  ? ((x = w == T.CLOSE_SIDE ? b : Math.sqrt(2) * b),
                    (I = E / b))
                  : ((x = w == T.CLOSE_SIDE ? E : Math.sqrt(2) * E),
                    (O = b / E)))
              : ((b = Math.max(M, C)),
                (E = Math.max(P, R)),
                v == _.CIRCLE
                  ? (x =
                      w == T.FAR_SIDE
                        ? Math.max(b, E)
                        : Math.sqrt(b * b + E * E))
                  : 0 == b || 0 == E
                  ? (x = 0)
                  : b >= E
                  ? ((x = w == T.FAR_SIDE ? b : Math.sqrt(2) * b), (I = E / b))
                  : ((x = w == T.FAR_SIDE ? E : Math.sqrt(2) * E),
                    (O = b / E))),
            (1 == O && 1 == I) ||
              (k =
                "translate(" +
                D +
                "," +
                A +
                ") scale(" +
                O +
                "," +
                I +
                ") translate(" +
                -D +
                "," +
                -A +
                ")"),
            (l = { x: D, y: A, r: x, t: k }),
            f.setAttribute("cx", l.x),
            f.setAttribute("cy", l.y),
            f.setAttribute("r", l.r),
            "" === l.t
              ? f.removeAttribute("gradientTransform")
              : f.setAttribute("gradientTransform", l.t),
            !p)
          ) {
            for (
              f.id = "sl-rgrad-" + Dt(),
                f.setAttribute("gradientUnits", "userSpaceOnUse"),
                o = 0,
                r = i.length;
              o < r;
              ++o
            )
              (a = i[o]),
                u.push(a.slice()),
                (h = Q.createElementNS(wi, "stop")).setAttribute(
                  "offset",
                  a[0] + "%"
                ),
                h.setAttribute("stop-color", Mt(a[1], a[2], a[3])),
                h.setAttribute(
                  "stop-opacity",
                  void 0 === a[4] ? 1 : a[4] / 255
                ),
                f.appendChild(h);
            (this._gradient = [y, t, e, u, s, n]),
              this.svgRGrad && this.svgRGrad.parentNode
                ? this.svgRGrad.parentNode.replaceChild(f, this.svgRGrad)
                : (this._createDefs(), this.svgDefs.appendChild(f)),
              (this.svgRGrad = f),
              (d.fill = "url(#" + f.id + ")"),
              (d.fillOpacity = 1);
          }
        }
      },
      _obCreateSVGShadow: function () {
        if (!this._svgShadowCreated) {
          (this._filterNode = Q.createElementNS(wi, "filter")),
            (this._filterNode.id = "sl-dropshadow-" + Dt()),
            (this._feFloodNode = Q.createElementNS(wi, "feFlood")),
            (this._feCompositeNode1 = Q.createElementNS(wi, "feComposite")),
            (this._feOffsetNode = Q.createElementNS(wi, "feOffset")),
            (this._feGaussianBlurNode = Q.createElementNS(
              wi,
              "feGaussianBlur"
            )),
            (this._feCompositeNode2 = Q.createElementNS(wi, "feComposite"));
          var t = this._filterNode;
          t.appendChild(this._feFloodNode),
            t.appendChild(this._feCompositeNode1),
            t.appendChild(this._feOffsetNode),
            t.appendChild(this._feGaussianBlurNode),
            t.appendChild(this._feCompositeNode2),
            this._createDefs(),
            this.svgDefs.appendChild(t),
            st.svgShadowBox ||
              ((this._shadowBoxNode = Q.createElementNS(wi, "path")),
              (this._shadowBoxNode.style.fill = "none"),
              (this._shadowBoxNode.style.stroke = "none"),
              this.svgPath.appendChild(this._shadowBoxNode)),
            At(this._filterNode, {
              id: this._filterNode.id,
              filterUnits: Si,
              primitiveUnits: Si,
              style: "color-interpolation-filters:sRGB",
            }),
            At(this._feFloodNode, { result: "flood" }),
            At(this._feCompositeNode1, {
              result: "composite1",
              operator: "in",
              in2: "SourceGraphic",
              in: "flood",
            }),
            At(this._feOffsetNode, { result: "offset", in: "composite1" }),
            this._feGaussianBlurNode &&
              At(this._feGaussianBlurNode, { result: "blur", in: "offset" }),
            At(this._feCompositeNode2, {
              result: "composite2",
              operator: "over",
              in2: "blur",
              in: "SourceGraphic",
            }),
            this.svgPath.setAttribute(
              "filter",
              "url(#" + this._filterNode.id + ")"
            ),
            (this._svgShadowCreated = !0);
        }
      },
      _obRemoveSVGShadow: function () {
        this._svgShadowCreated &&
          (delete this._svgShadowCreated,
          this.svgPath.removeAttribute("filter"),
          this._filterNode &&
            (this.svgDefs && this.svgDefs.removeChild(this._filterNode),
            delete this._filterNode,
            delete this._feFloodNode,
            delete this._feCompositeNode1,
            delete this._feOffsetNode,
            delete this._feGaussianBlurNode,
            delete this._feCompositeNode2),
          this._shadowBoxNode &&
            (this.svgPath.removeChild(this._shadowBoxNode),
            delete this._shadowBoxNode));
      },
      _obShadow: function () {
        this._obBgShadow(
          this._shadowRadius,
          this._shadowAngle,
          this._shadowDistance,
          this._shadowColor,
          this._shadowAlpha
        );
      },
      _obBgShadow: function (t, e, i, s, n) {
        if (void 0 !== t) {
          this._obCreateSVGShadow();
          var o,
            r,
            a,
            h,
            l,
            c,
            d = Ri(this.dom),
            u = i * Math.cos((e / 180) * j),
            p = i * Math.sin((e / 180) * j);
          if (
            ((c = this._lineWidth + ("miter" == this._lineJoin ? 8 : 0)),
            (d.x -= c),
            (d.y -= c),
            (d.width += 2 * c),
            (d.height += 2 * c),
            (t *= 4),
            (o = {
              x: d.x - t + u,
              y: d.y - t + p,
              width: d.width + 2 * t,
              height: d.height + 2 * t,
            }),
            (r = Math.min(d.x, o.x)),
            (a = Math.min(d.y, o.y)),
            (h = Math.max(d.x + d.width, o.x + o.width)),
            (l = Math.max(d.y + d.height, o.y + o.height)),
            this._shadowBoxNode)
          ) {
            var f = new Ai();
            f.addRect(r, a, h - r, l - a),
              this._shadowBoxNode.setAttribute("d", f.getPath());
          }
          At(this._filterNode, { x: r, y: a, width: h - r, height: l - a }),
            At(this._feFloodNode, {
              "flood-color": s,
              "flood-opacity": n / 255,
            }),
            At(this._feOffsetNode, { dx: u, dy: p }),
            At(this._feCompositeNode2, { in2: t > 0 ? "blur" : "offset" }),
            this._feGaussianBlurNode &&
              At(this._feGaussianBlurNode, { stdDeviation: t / 4 });
        } else this._obRemoveSVGShadow();
      },
      getShapeType: function () {
        return this._shapeType;
      },
      getAdjustment: function () {
        return this._shapeAdjs;
      },
      setShape: function (t, e) {
        (this._shapeType = t), (this._shapeAdjs = e || []), this._updatePath();
      },
      setPath: function (t, e, i) {
        if (((this._path = t), void 0 === e || void 0 === i)) {
          var s = (function (t) {
            var e = Q.createElementNS(wi, "svg"),
              i = Q.createElementNS(wi, "path"),
              s = e.style;
            if (
              ((s.position = "absolute"),
              (s.top = s.left = "-10000px"),
              (s.visibility = "hidden"),
              typeof t != tt)
            ) {
              var n = new Ai();
              Mi(n, t), (t = n.getPath());
            }
            i.setAttribute("d", t), e.appendChild(i), Q.body.appendChild(e);
            var o = Ri(i);
            return Q.body.removeChild(e), o;
          })(t || "");
          (e = s.width), (i = s.height);
        }
        (this._w4path = e), (this._h4path = i), this._updatePath();
      },
      getPath: function () {
        return this._path;
      },
      getSize4Path: function () {
        return { w: this._w4path, h: this._h4path };
      },
      _updatePath: function (t) {
        if (this.dom.parentNode && this.dom.parentNode.parentNode) {
          var e = {},
            i = this.dom.parentNode.clientWidth,
            s = this.dom.parentNode.clientHeight;
          if (typeof this._path == tt)
            Math.abs(this._w4path - i) > 1 || Math.abs(this._h4path - s) > 1
              ? (e.line = e.fill =
                  (function (t, e, i) {
                    if (1 == e && 1 == i) return t;
                    var s = !1;
                    return t.replace(/[+-]?(\d*\.)?\d+/g, function (t) {
                      return ((s = !s) ? e : i) * t;
                    });
                  })(
                    this._path,
                    this._w4path ? i / this._w4path : 1,
                    this._h4path ? s / this._h4path : 1
                  ))
              : (e.line = e.fill = this._path);
          else if (this._path) {
            var n,
              o,
              r,
              a,
              h,
              l,
              c,
              d,
              u,
              p = new Ai(),
              f = this._path;
            if (f)
              (Math.abs(this._w4path - i) > 1 ||
                Math.abs(this._h4path - s) > 1) &&
                (f = (function (t, e, i) {
                  if (1 == e && 1 == i) return t;
                  var s,
                    n,
                    o,
                    r,
                    a = [];
                  for (s = 0, n = t.length; s < n; ++s)
                    (r = [
                      (o = t[s])[0] * e,
                      o[1] * i,
                      o[2] * e,
                      o[3] * i,
                      o[4] * e,
                      o[5] * i,
                    ]),
                      o.length > 6 && r.push(o[6]),
                      a.push(r);
                  return a;
                })(
                  f,
                  this._w4path ? i / this._w4path : 1,
                  this._h4path ? s / this._h4path : 1
                )),
                f.length > 1 &&
                  this._lineWidth > 0 &&
                  (this._lineDrawFull || void 0 === this._lineFullLen) &&
                  (this._startArrow &&
                    this._startArrow.type != b.NONE &&
                    ((n = f[0].slice())[5] != n[1] || n[4] != n[0]
                      ? (c = Math.atan2(n[5] - n[1], n[4] - n[0]))
                      : ((r = f[1]),
                        (h = 2 * (1 - (a = 0.01)) * a),
                        (l = a * a),
                        (c = Math.atan2(
                          h * (r[3] - n[5]) + l * (r[1] - r[3]),
                          h * (r[2] - n[4]) + l * (r[0] - r[2])
                        ))),
                    p.clear(),
                    p.addMarker(
                      this._startArrow.type,
                      this._startArrow.size,
                      this._lineWidth
                    ),
                    (e.startArrow = p.getPath()),
                    (e.startArrowTransform =
                      "translate(" +
                      n[0] +
                      "," +
                      n[1] +
                      ") rotate(" +
                      (180 * c) / j +
                      ")"),
                    (d = Ci(
                      this._startArrow.type,
                      this._startArrow.size,
                      this._lineWidth
                    )),
                    (f[0][0] += d * Math.cos(c)),
                    (f[0][1] += d * Math.sin(c))),
                  this._endArrow &&
                    this._endArrow.type !== b.NONE &&
                    ((o = f[(u = f.length - 1)].slice())[3] != o[1] ||
                    o[2] != o[0]
                      ? (c = Math.atan2(o[3] - o[1], o[2] - o[0]))
                      : ((r = f[u - 1]),
                        (h = (a = 0.01) * a),
                        (l = 2 * (1 - a) * a),
                        (c = Math.atan2(
                          h * (r[1] - r[5]) + l * (r[5] - o[3]),
                          h * (r[0] - r[4]) + l * (r[4] - o[2])
                        ))),
                    p.clear(),
                    p.addMarker(
                      this._endArrow.type,
                      this._endArrow.size,
                      this._lineWidth
                    ),
                    (e.endArrow = p.getPath()),
                    (e.endArrowTransform =
                      "translate(" +
                      o[0] +
                      "," +
                      o[1] +
                      ") rotate(" +
                      (180 * c) / j +
                      ")"),
                    (d = Ci(
                      this._endArrow.type,
                      this._endArrow.size,
                      this._lineWidth
                    )),
                    (f[u][0] += d * Math.cos(c)),
                    (f[u][1] += d * Math.sin(c)))),
                p.clear(),
                Mi(p, f),
                (e.line = p.getPath()),
                n && (f[0] = n),
                o && (f[u] = o),
                (n || o) && (p.clear(), Mi(p, f)),
                (e.fill = p.getPath());
          } else
            e.fill = e.line = Pi.gen(
              this._shapeType,
              0,
              0,
              i,
              s,
              this._shapeAdjs
            );
          this._fillPath.setAttribute("d", e.fill || ""),
            this._linePath != this._fillPath &&
              this._linePath.setAttribute("d", e.line || ""),
            this._lineStart &&
              (this._lineStart.setAttribute("d", e.startArrow || ""),
              e.startArrowTransform
                ? this._lineStart.setAttribute(
                    "transform",
                    e.startArrowTransform
                  )
                : this._lineStart.removeAttribute("transform")),
            this._lineEnd &&
              (this._lineEnd.setAttribute("d", e.endArrow || ""),
              e.endArrowTransform
                ? this._lineEnd.setAttribute("transform", e.endArrowTransform)
                : this._lineEnd.removeAttribute("transform")),
            void 0 !== this._lineFullLen && this._updateLineDraw();
        }
      },
      _createDefs: function () {
        this.svgDefs ||
          ((this.svgDefs = Q.createElementNS(wi, "defs")),
          this.dom.appendChild(this.svgDefs));
      },
      _shapePathData: function (t) {
        t[0] >= S.FREEFORM_MIN && t[0] <= S.FREEFORM_MAX
          ? (this._arrowData(t),
            this._updateArrows(),
            (this._shapeType = t[0]),
            (t = t[1]) && this.setPath(t[0], t[1], t[2]))
          : this.setShape(t[0], t[1]);
      },
      layout: function () {
        if ((this._updatePath(), this.fillType === c)) {
          var t = this._gradient;
          t &&
            (t[0] == y
              ? this.fillRadialGradient(t[1], t[2], t[3], t[4], t[5])
              : this.fillLinearGradient(t[1], t[2]));
        } else
          this.fillType === d &&
            this.fillImage(
              this._imageFillData[0],
              this._imageFillData[1],
              this._imageFillData[2],
              this._imageFillData[3]
            );
      },
    }),
    Li = _t(Oi, {
      $init: function (t, e) {
        Oi.prototype.$init.call(this, t, e);
      },
      create: function () {
        var t = si.prototype.create.call(this),
          e = Q.createElementNS(wi, "svg"),
          i = e.style;
        (i.width = "100%"),
          (i.height = "100%"),
          (i.minWidth = "1px"),
          (i.minHeight = "1px"),
          (i.position = "absolute"),
          (i.left = 0),
          (i.top = 0),
          (i.overflow = "visible"),
          (this.svgNode = t.insertBefore(e, t.firstChild)),
          (this.painter = new ki(this.svgNode));
        var s = this._getPropsData();
        if (s && s.s) {
          var n = s.s;
          n[0] >= S.FREEFORM_MIN &&
            n[0] <= S.FREEFORM_MAX &&
            this.painter._arrowData(n);
        }
        return this.painter._createPathNodes(), t;
      },
      _updateTextRect: function () {
        if (this.textContainer) {
          var t = this.textContainer.style,
            e = Li.getTextRect(this);
          (t.left = Math.round(e.left) + "px"),
            (t.top = Math.round(e.top) + "px"),
            (t.width = Math.round(e.width) + "px"),
            (t.height = Math.round(e.height) + "px");
        }
      },
      _updatePointerEvents: function () {},
      _setOverflow4Container: function () {},
      _onResized: function (t, e) {
        this.painter.layout(),
          this._obRefreshShadow(),
          Oi.prototype._onResized.call(this, t, e);
      },
      _shapePathData: function (t) {
        this.painter._shapePathData(t), this._updateTextRect();
      },
      setShape: function (t, e) {
        this.painter.setShape(t, e), this._updateTextRect();
      },
    });
  gt(Li.prototype, "painter", [
    "getShapeType",
    "getAdjustment",
    "setPath",
    "getPath",
    "getSize4Path",
    "setLineJoin",
    "setLineCap",
    "setDashOffset",
    "setLineLength",
    "setDashArray",
    "enableLineDraw",
    "setBorderStyle",
  ]),
    ni.regElemType(function (t, e) {
      return new Li(t, e);
    }, t.SHAPE),
    (Li.getShapeStars = function (t) {
      return bi[t] || (bi[t] = new xi(t));
    }),
    (Li.getShapePolygon = function (t) {
      return Ei[t] || (Ei[t] = new Di(t));
    }),
    (Li.getAdjsPoint = function (t, e, i, s, n, o) {
      var r = t.getShapeType(),
        a = t.getAdjustment(),
        h = 0,
        l = 0;
      switch (r) {
        case S.ROUND_RECT:
          var c = a[0] * Math.min(s / 2, n / 2);
          (h = e + c), (l = i);
          break;
        case S.RECT_COUT:
        case S.ROUND_RECT_COUT:
        case S.OVAL_COUT:
        case S.ROUND_RECT_THOUGHT:
        case S.OVAL_THOUGHT:
          (h = e + (s / 2) * (1 + a[0])), (l = i + (n / 2) * (1 + a[1]));
          break;
        case S.CROSS:
          (h = e + a[0] * Math.min(s / 2, n / 2)), (l = i);
          break;
        case S.PLAQUE:
        case S.TRAPE:
          (h = e + (c = a[0] * Math.min(s / 2, n / 2))), (l = i);
          break;
        case S.MOON:
          (h = e + (c = a[0] * s)), (l = i + n / 2);
          break;
        case S.TRI:
          (h = e + s * a[0]), (l = i);
          break;
        case S.CHEVRON:
          (h = e + s - a[0] * s), (l = i);
          break;
        case S.LEFT_ARW:
          if (0 === o) {
            var d = Math.min(s, n) * a[0];
            d < 0 ? (d = 0) : d > s && (d = s), (h = e + d), (l = i);
          } else 1 === o && ((h = e + s), (l = i + (n / 2) * a[1]));
          break;
        case S.RIGHT_ARW:
          0 === o
            ? ((d = s - Math.min(s, n) * a[0]) < 0 ? (d = 0) : d > s && (d = s),
              (h = e + d),
              (l = i))
            : 1 === o && ((h = e), (l = i + (n / 2) * a[1]));
          break;
        case S.UP_ARW:
          0 === o
            ? ((h = e),
              (l = i + Math.min(s, n) * a[0]),
              Math.min(s, n) * a[0] < 0
                ? (l = i)
                : Math.min(s, n) * a[0] > n && (l = i + n))
            : 1 === o && ((h = e + (s / 2) * a[1]), (l = i + n));
          break;
        case S.DOWN_ARW:
          0 === o
            ? ((h = e),
              (l = i + n - a[0] * Math.min(s, n)),
              n - a[0] * Math.min(s, n) < 0 && (l = 0),
              n - a[0] * Math.min(s, n) > n && (l = i + n))
            : 1 === o && ((h = e + (s / 2) * a[1]), (l = i));
          break;
        case S.LEFT_RIGHT_ARW:
          0 === o
            ? ((h = e + (a[0] * s) / 2), (l = i))
            : 1 === o &&
              ((h = e + s - (a[0] * s) / 2), (l = i + (n / 2) * a[1]));
          break;
        case S.UP_DOWN_ARW:
          0 === o
            ? ((h = e), (l = i + (a[1] * n) / 2))
            : 1 === o &&
              ((h = e + a[0] * (s / 2)), (l = i + n - (a[1] * n) / 2));
          break;
        case S.LEFT_ARW_COUT:
          var u = Math.max(a[2], a[0]),
            p = Math.max(a[3], a[1]);
          0 === o
            ? ((h = e + a[0] * s), (l = i))
            : 1 === o
            ? ((h = e), (l = i + a[1] * n))
            : 2 === o
            ? ((h = e + u * s), (l = i + n))
            : 3 === o && ((h = a[0] * s), (l = i + p * n));
          break;
        case S.RIGHT_ARW_COUT:
          (u = Math.min(a[2], a[0])),
            (p = Math.max(a[3], a[1])),
            0 === o
              ? ((h = e + a[0] * s), (l = i))
              : 1 === o
              ? ((h = e + s), (l = i + a[1] * n))
              : 2 === o
              ? ((h = e + u * s), (l = i + n))
              : 3 === o && ((h = e + a[0] * s), (l = i + p * n));
          break;
        case S.UP_ARW_COUT:
          p = Math.max(a[3], a[2]);
          var f = Math.max(a[0], a[1]);
          0 === o
            ? ((h = e + f * s), (l = i + a[2] * n))
            : 1 === o
            ? ((h = e + a[1] * s), (l = i))
            : 2 === o
            ? ((h = e + s), (l = i + a[2] * n))
            : 3 === o && ((h = e), (l = i + p * n));
          break;
        case S.DOWN_ARW_COUT:
          (p = Math.min(a[3], a[2])),
            (f = Math.max(a[0], a[1])),
            0 === o
              ? ((h = e + f * s), (l = i + a[2] * n))
              : 1 === o
              ? ((h = e + a[1] * s), (l = i + n))
              : 2 === o
              ? ((h = e + s), (l = i + a[2] * n))
              : 3 === o && ((h = e), (l = i + p * n));
          break;
        case S.NOTCH_RIGHT_ARW:
          0 === o
            ? ((h = e + s - s * a[0]), (l = i))
            : 1 === o && ((h = e + s), (l = i + (n / 2) * a[1]));
          break;
        case S.WAVE:
          0 === o
            ? ((h = e), (l = i + (n / 2) * a[0]))
            : 1 === o && ((h = e + s / 2 + (s / 2) * a[1]), (l = i + n));
          break;
        case S.PENTAGON:
          0 === o && ((h = e + s - bt(a[0] * Math.min(s, n), 0, s)), (l = i));
          break;
        default:
          if (r >= S.STAR_MIN && r <= S.STAR_MAX) {
            var m = a[0],
              g = r - S.STAR_MIN,
              v = Li.getShapeStars(g);
            (h = e + s / 2), (l = i + (1 - m) * (n / (v.maxY - v.minY)));
            break;
          }
      }
      return { x: h, y: l };
    }),
    (Li.getTextRect = function (t) {
      var e,
        i,
        s,
        n = 10,
        o = t.getAdjustment(),
        r = t._w || 0,
        a = t._h || 0,
        h = t.getShapeType();
      function l(t) {
        var e = {};
        return (
          (e.left = t.left + n),
          (e.top = t.top + n),
          e.left > t.left + t.width && (e.left = t.left + t.width),
          e.top > t.top + t.height && (e.top = t.top + t.height),
          (e.width = t.width - 2 * n),
          e.width < 0 && (e.width = 0),
          (e.height = t.height - 2 * n),
          e.height < 0 && (e.height = 0),
          e
        );
      }
      switch (h) {
        case S.RECT:
        case S.RECT_COUT:
          return l({ left: 0, top: 0, width: r, height: a });
        case S.ROUND_RECT:
          var c = o[0] * Math.min(r / 2, a / 2);
          return l({
            left: 0 + (e = c * (1 - 1 / Math.sqrt(2))),
            top: 0 + e,
            width: r - 2 * e,
            height: a - 2 * e,
          });
        case S.ROUND_RECT_THOUGHT:
        case S.ROUND_RECT_COUT:
          return l({
            left: 0 + (e = (c = 0.2 * Math.min(r, a)) * (1 - 1 / Math.sqrt(2))),
            top: 0 + e,
            width: r - 2 * e,
            height: a - 2 * e,
          });
        case S.OVAL:
        case S.OVAL_COUT:
        case S.OVAL_THOUGHT:
          return l({
            left: 0 + (i = ((e = 1 - Math.sqrt(2) / 2) * r) / 2),
            top: 0 + (s = (e * a) / 2),
            width: r - 2 * i,
            height: a - 2 * s,
          });
        case S.DIAMOND:
          return l({
            left: 0 + (i = r / 4),
            top: 0 + (s = a / 4),
            width: r - 2 * i,
            height: a - 2 * s,
          });
        case S.HEART:
          return l({
            left: 0 + 0.2 * r,
            top: 0 + 0.25 * a,
            width: 0.6 * r,
            height: 0.4 * a,
          });
        case S.CROSS:
          return l({
            left: 0 + (e = o[0] * Math.min(r / 2, a / 2)),
            top: 0 + e,
            width: r - 2 * e,
            height: a - 2 * e,
          });
        case S.PLAQUE:
          return l({
            left:
              0 + (e = o[0] * Math.min(r / 2, a / 2) * Math.cos(Math.PI / 4)),
            top: 0 + e,
            width: r - 2 * e,
            height: a - 2 * e,
          });
        case S.TRAPE:
          return l({
            left: 0 + (e = o[0] * Math.min(r / 2, a / 2)),
            top: 0 + e,
            width: r - 2 * e,
            height: a - e,
          });
        case S.MOON:
          return l({
            left: 0 + (r * o[0]) / 3,
            top: 0 + (a * (1 - o[0])) / 2,
            width: (2 / 3) * r * o[0],
            height: a * o[0],
          });
        case S.TRI:
          return l({
            left: 0 + (r * o[0]) / 2,
            top: 0 + a / 2,
            width: r / 2,
            height: a / 2,
          });
        case S.CHEVRON:
          return l({
            left: 0 + r * o[0],
            top: 0,
            width: r - 2 * r * o[0],
            height: a,
          });
        case S.LEFT_ARW:
          var d,
            u = Li.getAdjsPoint(t, 0, 0, r, a, 0),
            p = Li.getAdjsPoint(t, 0, 0, r, a, 1),
            f = a - 2 * (p.y - 0);
          return (
            (d = a <= 0 ? r : r - ((u.x - 0) * f) / a),
            l({ left: p.x - d, top: p.y, width: d, height: f })
          );
        case S.RIGHT_ARW:
          return (
            (u = Li.getAdjsPoint(t, 0, 0, r, a, 0)),
            (f = a - 2 * ((p = Li.getAdjsPoint(t, 0, 0, r, a, 1)).y - 0)),
            (d = a <= 0 ? r : r - ((r - u.x + 0) * f) / a),
            l({ left: p.x, top: p.y, width: d, height: f })
          );
        case S.UP_ARW:
          return (
            (u = Li.getAdjsPoint(t, 0, 0, r, a, 0)),
            (d = r - 2 * ((p = Li.getAdjsPoint(t, 0, 0, r, a, 1)).x - 0)),
            (f = r <= 0 ? a : a - ((u.y - 0) * d) / r),
            l({ left: p.x, top: p.y - f, width: d, height: f })
          );
        case S.DOWN_ARW:
          return (
            (u = Li.getAdjsPoint(t, 0, 0, r, a, 0)),
            l({
              left: (p = Li.getAdjsPoint(t, 0, 0, r, a, 1)).x,
              top: p.y,
              width: r - 2 * (p.x - 0),
              height: r <= 0 ? a : a - ((a - u.y - 0) * r) / r,
            })
          );
        case S.LEFT_RIGHT_ARW:
          return l({
            left: 0 + (o[0] * r) / 4,
            top: 0 + (o[1] * a) / 2,
            width: r - (o[0] * r) / 2,
            height: a * (1 - o[1]),
          });
        case S.UP_DOWN_ARW:
          return l({
            left: 0 + (o[0] * r) / 2,
            top: 0 + (o[1] * a) / 4,
            width: r * (1 - o[0]),
            height: a - (o[1] * a) / 2,
          });
        case S.NOTCH_RIGHT_ARW:
          return l({
            left: 0 + (o[0] * r) / 2,
            top: 0 + (a / 2) * o[1],
            width: r * (o[1] + 1 - o[0]) - r / 2,
            height: a - o[1] * a,
          });
        case S.UP_ARW_COUT:
          return l({
            left: 0,
            top: (e = Math.max(o[2], o[3])) * a,
            width: r,
            height: (1 - e) * a,
          });
        case S.DOWN_ARW_COUT:
          return l({
            left: 0,
            top: 0,
            width: r,
            height: a * (e = Math.min(o[2], o[3])),
          });
        case S.LEFT_ARW_COUT:
          var m = Math.max(o[2], o[0]);
          return l({ left: 0 + m * r, top: 0, width: r * (1 - m), height: a });
        case S.RIGHT_ARW_COUT:
          return l({
            left: 0,
            top: 0,
            width: r * (m = Math.min(o[2], o[0])),
            height: a,
          });
        case S.RIGHT_TRIANGLE:
          return l({
            left: 0 + (1 * r) / 10,
            top: 0 + (6 * a) / 10,
            width: r / 2,
            height: (3 * a) / 10,
          });
        case S.DATA:
          return l({
            left: 0 + 0.2 * r,
            top: 0,
            width: r - 0.4 * r,
            height: a,
          });
        case S.OFFPAGE_CONNECTOR:
          return l({ left: 0, top: 0, width: r, height: a - 0.2 * a });
        case S.DISPLAY:
          return l({ left: 0 + r / 6, top: 0, width: r - r / 3, height: a });
        case S.CARD:
          return l({ left: 0, top: 0 + 0.2 * a, width: r, height: 0.8 * a });
        case S.STOREDATA:
          return l({ left: 0 + r / 6, top: 0, width: r - r / 3, height: a });
        case S.WAVE:
          return l({
            left: 0 + 2 * Math.abs((o[1] * r) / 2),
            top: 0 + (2.2 * o[0] * a) / 2,
            width: r - 4 * Math.abs((o[1] * r) / 2),
            height: a - (4.4 * o[0] * a) / 2,
          });
        case S.PENTAGON:
          return l({
            left: 0,
            top: 0,
            width: r - bt(o[0] * Math.min(r, a), 0, r),
            height: a,
          });
        default:
          var g, v, y, _, T, w;
          if (h >= S.STAR_MIN && h <= S.STAR_MAX) {
            w = h - S.STAR_MIN;
            var b = Li.getShapeStars(w);
            return (
              (T = a / (b.maxY - b.minY)),
              (_ = r / (b.maxX - b.minX)),
              (g = 0),
              (v = 0),
              (y = o[0]),
              5 === w
                ? l({
                    left: Math.round(0 + r - (b.cXs[1] * y - b.minX) * _),
                    top: Math.round(0 + (b.cYs[1] * y - b.minY) * T),
                    width: Math.round(
                      r - 2 * (r - (b.cXs[1] * y - b.minX) * _)
                    ),
                    height: Math.round((b.cYs[5] - b.cYs[1]) * y * T),
                  })
                : (4 === w || 6 === w || 8 === w
                    ? ((g = Math.round(r - (b.cXs[1] * y - b.minX) * _)),
                      (v = Math.round((b.cYs[1] * y - b.minY) * T)))
                    : 12 === w
                    ? ((g = Math.round(r - (b.cXs[3] * y - b.minX) * _)),
                      (v = Math.round((b.cYs[3] * y - b.minY) * T)))
                    : 24 === w &&
                      ((g = Math.round(r - (b.cXs[5] * y - b.minX) * _)),
                      (v = Math.round((b.cYs[5] * y - b.minY) * T))),
                  l({
                    left: 0 + g,
                    top: 0 + v,
                    width: r - 2 * g,
                    height: a - 2 * v,
                  }))
            );
          }
          if (h >= S.POLY_MIN && h <= S.POLY_MAX) {
            w = h - S.POLY_MIN;
            var E = Li.getShapePolygon(w);
            if (
              ((y = 0.8),
              (T = a / (E.maxY - E.minY)),
              (_ = r / (E.maxX - E.minX)),
              5 === w)
            )
              return l({
                left: 0 + r - (E.cXs[1] * y - E.minX) * _,
                top: 0 + (E.cYs[1] * y - E.minY) * T,
                width: r - 2 * (r - (E.cXs[1] * y - E.minX) * _),
                height: (E.cYs[w] - E.cYs[1]) * y * T,
              });
            if (6 === w)
              return l({
                left: 0,
                top: 0 + (v = (E.cYs[2 * (w - 1)] - E.minY) * T),
                width: r,
                height: a - 2 * v,
              });
            if (7 === w)
              return l({
                left: 0 + (g = (E.cXs[2 * (w - 1)] - E.minX) * _),
                top: 0 + (v = (E.cYs[2 * (w - 1)] - E.minY) * T),
                width: r - 2 * g,
                height: a - 2 * v,
              });
            if (8 === w)
              return l({
                left: 0 + (g = (E.cXs[2 * (w - 1)] - E.minX) * _),
                top: 0 + (v = (E.cYs[2 * (w - 1)] - E.minY) * T),
                width: r - 2 * g,
                height: a - 2 * v,
              });
          }
          return l({ left: 0, top: 0, width: r, height: a });
      }
    });
  var Ni = _t(si, {
    $init: function (t, e) {
      (this.autoplay = !1),
        t &&
          (void 0 !== t.ap
            ? (this.autoplay = t.ap)
            : void 0 !== t.autoplay && (this.autoplay = t.autoplay)),
        si.prototype.$init.call(this, t, e);
    },
    _onRemovedFromDoc: function () {
      if (this.sym) {
        var t = ge.docs.indexOf(this.sym);
        t > -1 && ge.docs.splice(t, 1),
          (t = ge.topDocs.indexOf(this.sym)) > -1 && ge.topDocs.splice(t, 1);
        var e = this.sym.getParentDoc();
        e && e.removeObserversById(this.sym);
      }
    },
    setAutoplay: function (t) {
      this.autoplay = t;
    },
    setResource: function (t) {
      this.sym && (this.sym.destroy(), (this.sym = null)),
        t &&
          (this.sym = ge.openDoc(t, this.dom, {
            parentElement: this,
            paused: !this.autoplay,
            center: t.align,
            autofit: t.af,
          }));
    },
    _onResized: function (t, e) {
      this.sym && this.sym.layoutIfNeeded(),
        si.prototype._onResized.call(this, t, e);
    },
    tick: function (t) {
      this.sym && this.sym.tick(t);
    },
    getSymbolDoc: function () {
      return this.sym || null;
    },
  });
  gt(Ni.prototype, "sym", [
    "play",
    "pause",
    "seek",
    "setSpeed",
    "setPlayBackward",
    "isPlaying",
    "isPlayBackward",
    "getDuration",
  ]),
    ni.regElemType(function (t, e) {
      return new Ni(t, e);
    }, t.SYM);
  var Fi = "about:blank",
    Bi = _t(si, {
      create: function () {
        var t = si.prototype.create.call(this),
          e = Q.createElement("iframe"),
          i = e.style;
        return (
          (i.display = "block"),
          (i.width = "100%"),
          (i.height = "100%"),
          (i.border = "none"),
          (i.pointerEvents = "auto"),
          e.setAttribute("allowfullscreen", ""),
          e.setAttribute("allow", "autoplay; fullscreen"),
          t.appendChild(e),
          (this.embeddedDom = e),
          void 0 === st.srcdoc && (st.srcdoc = "srcdoc" in e),
          t
        );
      },
      _setOverflow4Container: function (t) {
        (this.embeddedDom.scrolling =
          "hidden" === t ? "no" : "scroll" === t ? "yes" : "auto"),
          this.srcdoc
            ? this.setSrcDoc(this.srcdoc)
            : this.embeddedDom.src &&
              (this.embeddedDom.src = this.embeddedDom.src);
      },
      setUrl: function (t) {
        (t = t || Fi),
          this.iframeUrl !== t &&
            ((this.iframeUrl = t),
            (!st.srcdoc && this.srcdoc) || (this.embeddedDom.src = t));
      },
      setResource: function (t) {
        this.setUrl(t);
      },
      reload: function () {
        (!st.srcdoc && this.srcdoc) || (this.embeddedDom.src += "");
      },
      setSrcDoc: function (t) {
        if (((this.srcdoc = t || ""), st.srcdoc))
          t
            ? (this.embeddedDom.srcdoc = t)
            : (this.embeddedDom.removeAttribute("srcdoc"),
              nt && (this.embeddedDom.src = this.iframeUrl || Fi));
        else if (t) {
          var e = function (i) {
            try {
              i.target.removeEventListener("load", e, !1);
              var s = i.target.contentDocument;
              s.open(), s.write(t), s.close();
            } catch (t) {}
          };
          this.embeddedDom.addEventListener("load", e, !1),
            (this.embeddedDom.src = Fi);
        } else this.embeddedDom.src = this.iframeUrl || Fi;
      },
    });
  ni.regElemType(function (t, e) {
    return new Bi(t, e);
  }, t.HTML_WIDGET);
  var Hi = _t(Li, {});
  ni.regElemType(function (t, e) {
    return new Hi(t, e);
  }, t.FREEFORM),
    ft(ge, {
      Element: si,
      Scene: ni,
      Text: Oi,
      Shape: Li,
      Div: Ii,
      Media: yi,
      Audio: Ti,
      Video: _i,
      Symbol: Ni,
      EmbeddedWidget: Bi,
      CustomElement: gi,
      isNumeric: Et,
      extend: ft,
      Alignment: x,
      centerFixedSizeElement: Lt,
      ShapeType: S,
      createClass: _t,
      PropHelper: Je,
      ShapeStars: bi,
      Timeline: Ze,
      Animation: Ee,
      AnimationGroup: We,
      MotionTween: Ne,
      bezier: Ie,
      logDebug: wt,
      logError: St,
      extractUnit: Ae,
      TimingEvent: be,
      clamp: bt,
      Loader: ue,
      showMessage: function (t, e) {
        if (typeof e === tt) {
          if (!(e = Q.getElementById(e))) return;
        } else e || (e = Q.body);
        var i = Q.createElement("div"),
          s = Q.createElement("div"),
          n = i.style;
        (n.position = "absolute"),
          (n.width = "100%"),
          (n.textAlign = "center"),
          ((n = s.style).textAlign = "justify"),
          (n.marginTop = "5%"),
          (n.maxWidth = "80%"),
          (n.display = "inline-block"),
          (n.padding = "20px"),
          K.boxShadow || (K.boxShadow = ot(n, "boxShadow", !0))
            ? (n[K.boxShadow] = "0 0 10px rgba(0, 0, 0, 0.5)")
            : (n.border = "solid grey 1px"),
          (s.innerHTML = t),
          i.appendChild(s),
          e.appendChild(i);
      },
      FreeForm: Hi,
      bezApprox: ke,
      ResourceType: E,
      cssColor: Mt,
      specialEvents: Kt,
      splitText: function (t, e) {
        var i = [],
          s = {};
        if ((e = e || { words: !0 }).chars || e.words) {
          var n, o;
          if (
            (e.chars && (s.chars = []),
            e.words && (s.words = []),
            (s.processStyles = {}),
            e.processStyles)
          ) {
            var r = e.processStyles.split(",");
            for (n = 0, o = r.length; n < o; ++n)
              s.processStyles[r[n].trim()] = [];
          }
          for (
            (function t(e, i, s) {
              if (e) {
                for (var n in s) e.style && e.style[n] && s[n].push(e);
                for (var o = 0, r = e.childNodes.length; o < r; ++o) {
                  var a = e.childNodes[o];
                  3 == a.nodeType ? i.push(a) : t(a, i);
                }
              }
            })(t, i, s.processStyles),
              n = 0,
              o = i.length;
            n < o;
            ++n
          )
            mt(i[n], s, e);
        }
        return s;
      },
      ElemType: t,
      SVGPath: Ai,
      messages: {
        _default: {
          unsupportedBrowser: "You're using a web browser we don't support.",
        },
      },
    });
})(),
  /*!
   * Heartcode CanvasLoader https://github.com/heartcode/CanvasLoader
   * Copyright (c) 2011 Róbert Pataki
   * Modified by ATOMI
   * Licensed under the MIT license.
   */
  (function (t) {
    "use strict";
    var e = function (t, e) {
        void 0 === e && (e = {}), this.init(t, e);
      },
      i = e.prototype,
      s = ["oval", "spiral", "square", "rect", "roundRect"],
      n = /^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
      o = function (t, e, i) {
        var s,
          n = document.createElement(t);
        for (s in i) n[s] = i[s];
        return void 0 !== e && e.appendChild(n), n;
      },
      r = function (t, e) {
        for (var i in e) t.style[i] = e[i];
        return t;
      },
      a = function (t, e) {
        for (var i in e) t.setAttribute(i, e[i]);
        return t;
      },
      h = function (t, e, i, s) {
        t.save(),
          t.translate(e, i),
          t.rotate(s),
          t.translate(-e, -i),
          t.beginPath();
      };
    (i.init = function (t, e) {
      e || (e = {}),
        "string" == typeof t && (t = document.getElementById(t)),
        t || (t = document.body),
        (this.cont = o("div", t)),
        e.id && (this.cont.id = e.id);
      var i = this.cont.style;
      (i.position = "absolute"),
        (i.margin = "auto"),
        (i.left = i.right = i.top = i.bottom = 0),
        (i.pointerEvents = "none"),
        void 0 !== e.zIndex && (i.zIndex = e.zIndex),
        (this.can = o("canvas", this.cont)),
        (this.con = this.can.getContext("2d")),
        (this.cCan = r(o("canvas", this.cont), { display: "none" })),
        (this.cCon = this.cCan.getContext("2d"));
      var s,
        n,
        a = ["shape", "color", "diameter", "density", "range", "speed", "text"],
        h = ["oval", "#2090e6", 60, 9, 1, 1, ""];
      for (s = 0; s < a.length; ++s)
        this[(n = a[s])] = void 0 !== e[n] ? e[n] : h[s];
      (this.cRGB = this.getRGB(this.color)),
        this.draw(),
        r(this.cont, { display: "none" });
    }),
      (i.cont = {}),
      (i.can = {}),
      (i.con = {}),
      (i.cCan = {}),
      (i.cCon = {}),
      (i.timer = null),
      (i.activeId = 0),
      (i.diameter = 40),
      (i.setDiameter = function (t) {
        (this.diameter = t < 1 ? 1 : t), this.redraw();
      }),
      (i.getDiameter = function () {
        return this.diameter;
      }),
      (i.cRGB = {}),
      (i.color = "#000000"),
      (i.setColor = function (t) {
        (this.color = n.test(t) ? t : "#000000"),
          (this.cRGB = this.getRGB(this.color)),
          this.redraw();
      }),
      (i.getColor = function () {
        return this.color;
      }),
      (i.shape = s[0]),
      (i.setShape = function (t) {
        var e;
        for (e in s)
          if (t === s[e]) {
            (this.shape = t), this.redraw();
            break;
          }
      }),
      (i.getShape = function () {
        return this.shape;
      }),
      (i.density = 40),
      (i.setDensity = function (t) {
        (this.density = Math.round(Math.abs(t))),
          this.density > 360 && (this.density = 360),
          this.density < 2 && (this.density = 2),
          (this.activeId = 0),
          this.redraw();
      }),
      (i.getDensity = function () {
        return this.density;
      }),
      (i.range = 1.3),
      (i.setRange = function (t) {
        (this.range = Math.abs(t)), this.redraw();
      }),
      (i.getRange = function () {
        return this.range;
      }),
      (i.speed = 2),
      (i.setSpeed = function (t) {
        this.speed = Math.round(Math.abs(t));
      }),
      (i.getSpeed = function () {
        return this.speed;
      }),
      (i.text = ""),
      (i.setText = function (t) {
        (this.text = t), (this.textChanged = !0), this.timer && this.tick(!0);
      }),
      (i.getText = function () {
        return this.text;
      }),
      (i.getRGB = function (t) {
        return (
          (t = "#" === t.charAt(0) ? t.substring(1, 7) : t),
          {
            r: parseInt(t.substring(0, 2), 16),
            g: parseInt(t.substring(2, 4), 16),
            b: parseInt(t.substring(4, 6), 16),
          }
        );
      }),
      (i.draw = function () {
        var t,
          e,
          i,
          n,
          o,
          l,
          c,
          d,
          u = 0,
          p = this.density,
          f = Math.round(p * this.range),
          m = this.cCon,
          g = this.diameter,
          v = 0.47;
        if (
          (g < 1 && (this.diameter = g = 1),
          r(this.cont, { width: g + "px", height: g + "px" }),
          a(this.can, { width: g, height: g }),
          this.can.offsetWidth < 1 || this.can.offsetHeight < 1)
        )
          this._pendingDraw = !0;
        else {
          for (
            delete this._pendingDraw,
              m.clearRect(0, 0, 1e3, 1e3),
              a(this.cCan, { width: g, height: g });
            u < p;

          ) {
            switch (
              ((d = u <= f ? 1 - (1 / f) * u : (d = 0)),
              (l = ((270 - (360 / p) * u) / 180) * Math.PI),
              (m.fillStyle =
                "rgba(" +
                this.cRGB.r +
                "," +
                this.cRGB.g +
                "," +
                this.cRGB.b +
                "," +
                d.toString() +
                ")"),
              this.shape)
            ) {
              case s[0]:
              case s[1]:
                (t = 0.07 * g),
                  (n = g * v + Math.cos(l) * (g * v - t) - g * v),
                  (o = g * v + Math.sin(l) * (g * v - t) - g * v),
                  m.beginPath(),
                  this.shape === s[1]
                    ? m.arc(0.5 * g + n, 0.5 * g + o, t * d, 0, 2 * Math.PI, !1)
                    : m.arc(0.5 * g + n, 0.5 * g + o, t, 0, 2 * Math.PI, !1);
                break;
              case s[2]:
                (t = 0.12 * g),
                  (n = Math.cos(l) * (g * v - t) + 0.5 * g),
                  (o = Math.sin(l) * (g * v - t) + 0.5 * g),
                  h(m, n, o, l),
                  m.fillRect(n, o - 0.5 * t, t, t);
                break;
              case s[3]:
              case s[4]:
                (i = 0.27 * (e = 0.3 * g)),
                  (n = Math.cos(l) * (i + 0.13 * (g - i)) + 0.5 * g),
                  (o = Math.sin(l) * (i + 0.13 * (g - i)) + 0.5 * g),
                  h(m, n, o, l),
                  this.shape === s[3]
                    ? m.fillRect(n, o - 0.5 * i, e, i)
                    : ((c = 0.55 * i),
                      m.moveTo(n + c, o - 0.5 * i),
                      m.lineTo(n + e - c, o - 0.5 * i),
                      m.quadraticCurveTo(
                        n + e,
                        o - 0.5 * i,
                        n + e,
                        o - 0.5 * i + c
                      ),
                      m.lineTo(n + e, o - 0.5 * i + i - c),
                      m.quadraticCurveTo(
                        n + e,
                        o - 0.5 * i + i,
                        n + e - c,
                        o - 0.5 * i + i
                      ),
                      m.lineTo(n + c, o - 0.5 * i + i),
                      m.quadraticCurveTo(
                        n,
                        o - 0.5 * i + i,
                        n,
                        o - 0.5 * i + i - c
                      ),
                      m.lineTo(n, o - 0.5 * i + c),
                      m.quadraticCurveTo(n, o - 0.5 * i, n + c, o - 0.5 * i));
            }
            m.closePath(), m.fill(), m.restore(), ++u;
          }
          (this.con.textAlign = "center"),
            (this.con.textBaseline = "middle"),
            (this.con.font = "bold " + this.detectFontSize() + "px Arial"),
            (this.con.fillStyle =
              "rgb(" +
              this.cRGB.r +
              "," +
              this.cRGB.g +
              "," +
              this.cRGB.b +
              ")"),
            this.timer && this.tick(!0);
        }
      }),
      (i.clean = function () {
        this.con.clearRect(0, 0, 1e3, 1e3);
      }),
      (i.redraw = function () {
        this.clean(), this.draw();
      }),
      (i.reset = function () {
        this.timer && (this.hide(), this.show());
      }),
      (i.detectFontSize = function () {
        if (this.diameter < 90) {
          if (this.shape.toLowerCase().indexOf("rect") > -1) {
            if (this.diameter < 65) return 8;
            if (this.diameter < 80) return 10;
          }
          return 12;
        }
        return this.diameter < 120 ? 14 : this.diameter < 140 ? 18 : 22;
      }),
      (i.tick = function (t) {
        if (
          (t && delete this.prevTime,
          !(this.can.offsetWidth < 1 || this.can.offsetHeight < 1))
        )
          if (this._pendingDraw) this.draw();
          else {
            var e,
              i = this.con,
              s = this.diameter,
              n = Date.now();
            if ((s < 1 && (this.diameter = s = 1), this.prevTime)) {
              if (
                ((e = Math.floor(((n - this.prevTime) * this.speed) / 100)) ===
                  this.density && (e = this.density - 1),
                !e && !this.textChanged)
              )
                return;
              (this.activeId += (360 / this.density) * e),
                e && (this.prevTime = (100 * e) / this.speed + this.prevTime);
            } else this.prevTime = n;
            i.clearRect(0, 0, s, s),
              h(i, 0.5 * s, 0.5 * s, (this.activeId / 180) * Math.PI),
              i.drawImage(this.cCan, 0, 0, s, s),
              i.restore(),
              this.text &&
                (i.fillText(this.text, s / 2, s / 2), (this.textChanged = !1));
          }
      }),
      (i.show = function () {
        if (!this.timer) {
          this.prevTime = null;
          var t = this,
            e = function () {
              t.tick(), (t.timer = requestAnimationFrame(e));
            };
          e(), r(this.cont, { display: "block" });
        }
      }),
      (i.hide = function () {
        this.timer &&
          (cancelAnimationFrame(this.timer),
          delete this.timer,
          (this.prevTime = null),
          r(this.cont, { display: "none" }));
      }),
      (i.kill = function () {
        this.hide(),
          this.cont.parentNode && this.cont.parentNode.removeChild(this.cont);
      }),
      document.createElement("canvas").getContext && (t.CanvasLoader = e);
  })(AtomiSaola),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], e)
      : e(((t = t || self).polymorph = {}));
  })(this, function (t) {
    "use strict";
    var e = void 0,
      i = " ",
      s = "fill",
      n = "V",
      o = "H",
      r = "L",
      a = "Z",
      h = "M",
      l = "C",
      c = "S",
      d = "Q",
      u = "T",
      p = "A";
    var f = Math,
      m = f.abs,
      g = f.min,
      v = f.max,
      y = f.floor,
      _ = f.round,
      T = f.sqrt,
      w = f.pow,
      S = f.cos,
      b = f.asin,
      E = f.sin,
      x = f.tan,
      D = f.PI,
      A = 2 / 3,
      M = w(2, -52);
    function C() {
      throw new Error(Array.prototype.join.call(arguments, i));
    }
    var P = "undefined" != typeof window && window.navigator.userAgent,
      R = /(MSIE |Trident\/|Edge\/)/i.test(P) ? Array : Float32Array;
    function O(t) {
      return new R(t);
    }
    function I(t, e, i) {
      var s = (function (t) {
        for (
          var e = t[0], i = t[1], s = i, n = e, o = 2;
          o < t.length;
          o += 6
        ) {
          var r = t[o + 4],
            a = t[o + 5];
          (e = g(e, r)), (n = v(n, r)), (i = g(i, a)), (s = v(s, a));
        }
        return { x: e, w: n - e, y: i, h: s - i };
      })(i);
      return { x: s.x + s.w * t, y: s.y + s.h * e };
    }
    function k(t, e, i, s) {
      return T((t - i) * (t - i) + (e - s) * (e - s));
    }
    function L(t, i, s, n) {
      var o = n.length;
      if (n[o - 2] === n[0] && n[o - 1] === n[1]) {
        if (!t) {
          var r = I(i, s, n);
          (i = r.x), (s = r.y);
        }
        var a,
          h,
          l = n.slice(2);
        o = l.length;
        for (var c = 0; c < o; c += 6) {
          var d = k(i, i, l[c], l[c + 1]);
          (h === e || d < h) && ((h = d), (a = c));
        }
        !(function (t, e) {
          var i,
            s = t.length,
            n = s - e,
            o = O(e);
          for (i = 0; i < e; i++) o[i] = t[i];
          for (i = e; i < s; i++) t[i - e] = t[i];
          for (i = 0; i < e; i++) t[n + i] = o[i];
        })(l, a),
          (n[0] = l[o - 2]),
          (n[1] = l[o - 1]);
        for (c = 0; c < l.length; c++) n[c + 2] = l[c];
      }
    }
    function N(t, e) {
      var i = e - t.length,
        s = Math.ceil(e / t.length),
        n = O(e);
      (n[0] = t[0]), (n[1] = t[1]);
      for (var o = 1, r = 1; r < e - 1; ) {
        (n[++r] = t[++o]),
          (n[++r] = t[++o]),
          (n[++r] = t[++o]),
          (n[++r] = t[++o]);
        var a = (n[++r] = t[++o]),
          h = (n[++r] = t[++o]);
        if (i)
          for (var l = 0; l < s && i; l++)
            (n[r + 5] = n[r + 3] = n[r + 1] = a),
              (n[r + 6] = n[r + 4] = n[r + 2] = h),
              (r += 6),
              (i -= 6);
      }
      return n;
    }
    function F(t) {
      return t
        .map(function (t) {
          return {
            points: t,
            perimeter: (function (t) {
              for (
                var e = t.length, i = t[e - 2], s = t[e - 1], n = 0, o = 0;
                o < e;
                o += 6
              )
                (n += k(t[o], t[o + 1], i, s)), (i = t[o]), (s = t[o + 1]);
              return y(n);
            })(t),
          };
        })
        .sort(function (t, e) {
          return e.perimeter - t.perimeter;
        })
        .map(function (t) {
          return t.points;
        });
    }
    function B(t, e, i) {
      i.optimize === s && ((t = F(t)), (e = F(e))),
        t.length !== e.length &&
          (i.optimize === s
            ? (function t(e, i, s) {
                var n = e.length,
                  o = i.length;
                if (n < o) return t(i, e, s);
                i.length = n;
                for (var r = o; r < n; r++) {
                  var a = e[r],
                    h = s.x,
                    l = s.y;
                  if (!s.absolute) {
                    var c = I(h, l, a);
                    (h = c.x), (l = c.y);
                  }
                  for (var d = O(a.length), u = 0; u < a.length; u += 2)
                    (d[u] = h), (d[u + 1] = l);
                  i[r] = d;
                }
              })(t, e, i.origin)
            : C("optimize:none requires equal lengths"));
      var n = Array(2);
      if (((n[0] = t), (n[1] = e), i.optimize === s)) {
        for (
          var o = i.origin, r = o.x, a = o.y, h = o.absolute, l = 0;
          l < t.length;
          l++
        )
          L(h, r, a, n[0][l]), L(h, r, a, n[1][l]);
        !(function (t, e) {
          for (var i = t[0].length, s = 0; s < i; s++) {
            var n = t[0][s],
              o = t[1][s],
              r = v(n.length + e, o.length + e);
            (t[0][s] = N(n, r)), (t[1][s] = N(o, r));
          }
        })(n, 6 * i.addPoints);
      }
      return n;
    }
    var H = { addPoints: 0, optimize: s, origin: { x: 0, y: 0 }, precision: 0 };
    function W(t, s) {
      (s = (function (t, e) {
        for (var i in e) t.hasOwnProperty(i) || (t[i] = e[i]);
        return t;
      })(s, H)),
        (!t || t.length < 2) && C("invalid arguments");
      for (var n = t.length - 1, o = Array(n), r = 0; r < n; r++)
        o[r] = Y(t[r], t[r + 1], s);
      var a = s.precision
        ? function (t) {
            return t.toFixed(s.precision);
          }
        : e;
      return function (t) {
        var e = n * t,
          s = g(v(0, y(e)), n - 1);
        return (function (t, e) {
          if ((void 0 === e && (e = _), "string" == typeof t)) return t;
          for (var s = [], n = 0; n < t.length; n++) {
            var o = t[n];
            s.push(h, e(o[0]), e(o[1]), l);
            for (var r = void 0, a = 2; a < o.length; a += 6) {
              var c = e(o[a]),
                d = e(o[a + 1]),
                u = e(o[a + 2]),
                p = e(o[a + 3]),
                f = e(o[a + 4]),
                m = e(o[a + 5]);
              (c == f &&
                u == f &&
                d == m &&
                p == m &&
                r == (r = "" + c + d + u + p + f + m)) ||
                s.push(c, d, u, p, f, m);
            }
          }
          return s.join(i);
        })(o[s](e - s), a);
      };
    }
    function Y(t, e, i) {
      var s = B(t.getData(), e.getData(), i),
        n = s[0].length;
      return function (i) {
        if (m(i - 0) < M) return t.getStringData();
        if (m(i - 1) < M) return e.getStringData();
        for (var o = Array(n), r = 0; r < n; r++) o[r] = V(s[0][r], s[1][r], i);
        return o;
      };
    }
    function V(t, e, i) {
      for (var s = g(t.length, e.length), n = O(s), o = 0; o < s; o++)
        n[o] = t[o] + (e[o] - t[o]) * i;
      return n;
    }
    function G(t, i) {
      return t === e ? i : t;
    }
    var U = (120 * D) / 180,
      X = 2 * D;
    function z(t, e, i, s, n, o, r, a, h, l, c, d, u) {
      if (i <= 0 || s <= 0) return [t, e, a, h, a, h];
      var p,
        f = (D / 180) * (+n || 0),
        y = S(f),
        _ = E(f),
        w = !!l;
      if (!w) {
        var A = t,
          M = a,
          C = ((t = A * y - e * -_) - (a = M * y - h * -_)) / 2,
          P = ((e = A * -_ + e * y) - (h = M * -_ + h * y)) / 2,
          R = (C * C) / (i * i) + (P * P) / (s * s);
        R > 1 && ((i *= R = T(R)), (s *= R));
        var O =
          (o === r ? -1 : 1) *
          T(
            m(
              (i * i * s * s - i * i * P * P - s * s * C * C) /
                (i * i * P * P + s * s * C * C)
            )
          );
        (d = (O * i * P) / s + (t + a) / 2),
          (l = b(
            g(v((l = (e - (u = (O * -s * C) / i + (e + h) / 2)) / s), -1), 1)
          )),
          (c = b(g(v((c = (h - u) / s), -1), 1))),
          t < d && (l = D - l),
          a < d && (c = D - c),
          l < 0 && (l += X),
          c < 0 && (c += X),
          r && l > c && (l -= X),
          !r && c > l && (c -= X);
      }
      if (m(c - l) > U) {
        var I = c,
          k = a,
          L = h;
        p = z(
          (a = d + i * S((c = l + U * (r && c > l ? 1 : -1)))),
          (h = u + s * E(c)),
          i,
          s,
          n,
          0,
          r,
          k,
          L,
          c,
          I,
          d,
          u
        );
      } else p = [];
      var N = (4 / 3) * x((c - l) / 4);
      if (
        (p.splice(
          0,
          0,
          2 * t - (t + N * i * E(l)),
          2 * e - (e - N * s * S(l)),
          a + N * i * E(c),
          h - N * s * S(c),
          a,
          h
        ),
        !w)
      )
        for (var F = 0, B = p.length; F < B; F += 2) {
          var H = p[F],
            W = p[F + 1];
          (p[F] = H * y - W * _), (p[F + 1] = H * _ + W * y);
        }
      return p;
    }
    var $ = { M: 2, H: 1, V: 1, L: 2, Z: 0, C: 6, S: 4, Q: 4, T: 2, A: 7 };
    function q(t, e, i, s, n, o, r) {
      var a = t.x,
        h = t.y;
      (t.x = G(o, a)),
        (t.y = G(r, h)),
        t.current.push(
          G(e, a),
          (i = G(i, h)),
          (s = G(s, a)),
          (n = G(n, h)),
          t.x,
          t.y
        ),
        (t.lc = t.c);
    }
    function Z(t) {
      var e = t.c,
        i = t.t,
        s = t.x,
        r = t.y;
      if (e === n) i[0] += r;
      else if (e === o) i[0] += s;
      else if (e === p) (i[5] += s), (i[6] += r);
      else for (var a = 0; a < i.length; a += 2) (i[a] += s), (i[a + 1] += r);
    }
    function j(t) {
      return t.split(i).map(Q);
    }
    function Q(t, e) {
      return 0 === e ? t : +t;
    }
    function J(t) {
      for (
        var i = { x: 0, y: 0, segments: [] },
          s = t
            .replace(
              /[\^\s]*([mhvlzcsqta]|[+-]?\d*\.?\d+(?:[Ee][+-]?\d+)?)[,\$\s]*/gi,
              " $1"
            )
            .replace(/([mhvlzcsqta])/gi, " $1")
            .trim()
            .split("  ")
            .map(j),
          f = 0;
        f < s.length;
        f++
      ) {
        var m = s[f],
          g = m[0],
          v = g.toUpperCase(),
          y = v !== a && v !== g;
        i.c = v;
        var _ = $[v],
          T = m,
          w = 1;
        do {
          (i.t = 1 === T.length ? T : T.slice(w, w + _)), y && Z(i);
          var S = i.t,
            b = i.x,
            E = i.y,
            x = void 0,
            D = void 0,
            M = void 0,
            P = void 0,
            R = void 0,
            O = void 0;
          if (v === h)
            i.segments.push((i.current = [(i.x = S[0]), (i.y = S[1])]));
          else if (v === o) q(i, e, e, e, e, S[0], e);
          else if (v === n) q(i, e, e, e, e, e, S[0]);
          else if (v === r) q(i, e, e, e, e, S[0], S[1]);
          else if (v === a) q(i, e, e, e, e, i.current[0], i.current[1]);
          else if (v === l)
            q(i, S[0], S[1], S[2], S[3], S[4], S[5]),
              (i.cx = S[2]),
              (i.cy = S[3]);
          else if (v === c) {
            var I = i.lc !== c && i.lc !== l;
            q(
              i,
              (x = I ? e : 2 * b - i.cx),
              (D = I ? e : 2 * E - i.cy),
              S[0],
              S[1],
              S[2],
              S[3]
            ),
              (i.cx = S[0]),
              (i.cy = S[1]);
          } else if (v === d) {
            var k = S[0],
              L = S[1];
            (M = S[2]),
              (P = S[3]),
              q(
                i,
                b + (k - b) * A,
                E + (L - E) * A,
                M + (k - M) * A,
                P + (L - P) * A,
                M,
                P
              ),
              (i.cx = k),
              (i.cy = L);
          } else if (v === u)
            (M = S[0]),
              (P = S[1]),
              i.lc === d || i.lc === u
                ? ((x = b + (2 * b - i.cx - b) * A),
                  (D = E + (2 * E - i.cy - E) * A),
                  (R = M + (2 * b - i.cx - M) * A),
                  (O = P + (2 * E - i.cy - P) * A))
                : ((x = R = b), (D = O = E)),
              q(i, x, D, R, O, M, P),
              (i.cx = R),
              (i.cy = O);
          else if (v === p)
            for (
              var N = z(b, E, S[0], S[1], S[2], S[3], S[4], S[5], S[6]), F = 0;
              F < N.length;
              F += 6
            )
              q(i, N[F], N[F + 1], N[F + 2], N[F + 3], N[F + 4], N[F + 5]);
          else C(i.c, " is not supported");
          w += _;
        } while (w < T.length);
      }
      return i.segments;
    }
    var K = /^([#|\.]|path)/i;
    var tt = (function () {
      function t(t) {
        var i = (function (t) {
            if (Array.isArray(t)) return { data: t, stringData: e };
            var i;
            if (
              ("string" == typeof t && K.test(t)
                ? (t = document.querySelector(t))
                : (i = t),
              "string" == typeof t)
            )
              return { data: J(t), stringData: i };
            var s = t;
            return "PATH" === s.tagName.toUpperCase()
              ? { data: J((i = s.getAttribute("d"))), stringData: i }
              : C("Unsupported element ", s.tagName);
          })(t),
          s = i.data,
          n = i.stringData;
        (this.data = s), (this.stringData = n);
      }
      return (
        (t.prototype.getData = function () {
          return this.data;
        }),
        (t.prototype.getStringData = function () {
          return this.stringData || (this.stringData = this.render());
        }),
        (t.prototype.render = function (t) {
          void 0 === t && (t = _);
          for (var e = this.data, s = [], n = 0; n < e.length; n++) {
            var o = e[n];
            s.push(h, t(o[0]), t(o[1]), l);
            for (var r = void 0, a = 2; a < o.length; a += 6) {
              var c = t(o[a]),
                d = t(o[a + 1]),
                u = t(o[a + 2]),
                p = t(o[a + 3]),
                f = t(o[a + 4]),
                m = t(o[a + 5]);
              (c == f &&
                u == f &&
                d == m &&
                p == m &&
                r == (r = "" + c + d + u + p + f + m)) ||
                s.push(c, d, u, p, f, m);
            }
          }
          return s.join(i);
        }),
        t
      );
    })();
    (t.Path = tt),
      (t.interpolate = function (t, e) {
        return W(
          t.map(function (t) {
            return new tt(t);
          }),
          e || {}
        );
      }),
      Object.defineProperty(t, "__esModule", { value: !0 });
  });
