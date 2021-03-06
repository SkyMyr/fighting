/*!
 * jQuery JavaScript Library v1.6.1rc1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Tue May 10 13:50:35 2011 -0400
 */
 (function(bb, L) {
    var ar = bb.document,
    bt = bb.navigator,
    bk = bb.location;
    var b = (function() {
        var bD = function(bX, bY) {
            return new bD.fn.init(bX, bY, bB);
        },
        bS = bb.jQuery,
        bF = bb.$,
        bB,
        bW = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        bL = /\S/,
        bH = /^\s+/,
        bC = /\s+$/,
        bG = /\d/,
        bz = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        bM = /^[\],:{}\s]*$/,
        bU = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        bO = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        bI = /(?:^|:|,)(?:\s*\[)+/g,
        bx = /(webkit)[ \/]([\w.]+)/,
        bQ = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        bP = /(msie) ([\w.]+)/,
        bR = /(mozilla)(?:.*? rv:([\w.]+))?/,
        bV = bt.userAgent,
        bT,
        bA,
        e,
        bK = Object.prototype.toString,
        bE = Object.prototype.hasOwnProperty,
        by = Array.prototype.push,
        bJ = Array.prototype.slice,
        bN = String.prototype.trim,
        bu = Array.prototype.indexOf,
        bw = {};
        bD.fn = bD.prototype = {
            constructor: bD,
            init: function(bX, b1, b0) {
                var bZ,
                b2,
                bY,
                b3;
                if (!bX) {
                    return this;
                }
                if (bX.nodeType) {
                    this.context = this[0] = bX;
                    this.length = 1;
                    return this;
                }
                if (bX === "body" && !b1 && ar.body) {
                    this.context = ar;
                    this[0] = ar.body;
                    this.selector = bX;
                    this.length = 1;
                    return this;
                }
                if (typeof bX === "string") {
                    if (bX.charAt(0) === "<" && bX.charAt(bX.length - 1) === ">" && bX.length >= 3) {
                        bZ = [null, bX, null];
                    } else {
                        bZ = bW.exec(bX);
                    }
                    if (bZ && (bZ[1] || !b1)) {
                        if (bZ[1]) {
                            b1 = b1 instanceof bD ? b1[0] : b1;
                            b3 = (b1 ? b1.ownerDocument || b1: ar);
                            bY = bz.exec(bX);
                            if (bY) {
                                if (bD.isPlainObject(b1)) {
                                    bX = [ar.createElement(bY[1])];
                                    bD.fn.attr.call(bX, b1, true);
                                } else {
                                    bX = [b3.createElement(bY[1])];
                                }
                            } else {
                                bY = bD.buildFragment([bZ[1]], [b3]);
                                bX = (bY.cacheable ? bD.clone(bY.fragment) : bY.fragment).childNodes;
                            }
                            return bD.merge(this, bX);
                        } else {
                            b2 = ar.getElementById(bZ[2]);
                            if (b2 && b2.parentNode) {
                                if (b2.id !== bZ[2]) {
                                    return b0.find(bX);
                                }
                                this.length = 1;
                                this[0] = b2;
                            }
                            this.context = ar;
                            this.selector = bX;
                            return this;
                        }
                    } else {
                        if (!b1 || b1.jquery) {
                            return (b1 || b0).find(bX);
                        } else {
                            return this.constructor(b1).find(bX);
                        }
                    }
                } else {
                    if (bD.isFunction(bX)) {
                        return b0.ready(bX);
                    }
                }
                if (bX.selector !== L) {
                    this.selector = bX.selector;
                    this.context = bX.context;
                }
                return bD.makeArray(bX, this);
            },
            selector: "",
            jquery: "1.6.1rc1",
            length: 0,
            size: function() {
                return this.length;
            },
            toArray: function() {
                return bJ.call(this, 0);
            },
            get: function(bX) {
                return bX == null ? this.toArray() : (bX < 0 ? this[this.length + bX] : this[bX]);
            },
            pushStack: function(bY, b0, bX) {
                var bZ = this.constructor();
                if (bD.isArray(bY)) {
                    by.apply(bZ, bY);
                } else {
                    bD.merge(bZ, bY);
                }
                bZ.prevObject = this;
                bZ.context = this.context;
                if (b0 === "find") {
                    bZ.selector = this.selector + (this.selector ? " ": "") + bX;
                } else {
                    if (b0) {
                        bZ.selector = this.selector + "." + b0 + "(" + bX + ")";
                    }
                }
                return bZ;
            },
            each: function(bY, bX) {
                return bD.each(this, bY, bX);
            },
            ready: function(bX) {
                bD.bindReady();
                bA.done(bX);
                return this;
            },
            eq: function(bX) {
                return bX === -1 ? this.slice(bX) : this.slice(bX, +bX + 1);
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq( - 1);
            },
            slice: function() {
                return this.pushStack(bJ.apply(this, arguments), "slice", bJ.call(arguments).join(","));
            },
            map: function(bX) {
                return this.pushStack(bD.map(this, 
                function(bZ, bY) {
                    return bX.call(bZ, bY, bZ);
                }));
            },
            end: function() {
                return this.prevObject || this.constructor(null);
            },
            push: by,
            sort: [].sort,
            splice: [].splice
        };
        bD.fn.init.prototype = bD.fn;
        bD.extend = bD.fn.extend = function() {
            var b6,
            bZ,
            bX,
            bY,
            b3,
            b4,
            b2 = arguments[0] || {},
            b1 = 1,
            b0 = arguments.length,
            b5 = false;
            if (typeof b2 === "boolean") {
                b5 = b2;
                b2 = arguments[1] || {};
                b1 = 2;
            }
            if (typeof b2 !== "object" && !bD.isFunction(b2)) {
                b2 = {};
            }
            if (b0 === b1) {
                b2 = this; --b1;
            }
            for (; b1 < b0; b1++) {
                if ((b6 = arguments[b1]) != null) {
                    for (bZ in b6) {
                        bX = b2[bZ];
                        bY = b6[bZ];
                        if (b2 === bY) {
                            continue;
                        }
                        if (b5 && bY && (bD.isPlainObject(bY) || (b3 = bD.isArray(bY)))) {
                            if (b3) {
                                b3 = false;
                                b4 = bX && bD.isArray(bX) ? bX: [];
                            } else {
                                b4 = bX && bD.isPlainObject(bX) ? bX: {};
                            }
                            b2[bZ] = bD.extend(b5, b4, bY);
                        } else {
                            if (bY !== L) {
                                b2[bZ] = bY;
                            }
                        }
                    }
                }
            }
            return b2;
        };
        bD.extend({
            noConflict: function(bX) {
                if (bb.$ === bD) {
                    bb.$ = bF;
                }
                if (bX && bb.jQuery === bD) {
                    bb.jQuery = bS;
                }
                return bD;
            },
            isReady: false,
            readyWait: 1,
            holdReady: function(bX) {
                if (bX) {
                    bD.readyWait++;
                } else {
                    bD.ready(true);
                }
            },
            ready: function(bX) {
                if ((bX === true && !--bD.readyWait) || (bX !== true && !bD.isReady)) {
                    if (!ar.body) {
                        return setTimeout(bD.ready, 1);
                    }
                    bD.isReady = true;
                    if (bX !== true && --bD.readyWait > 0) {
                        return;
                    }
                    bA.resolveWith(ar, [bD]);
                    if (bD.fn.trigger) {
                        bD(ar).trigger("ready").unbind("ready");
                    }
                }
            },
            bindReady: function() {
                if (bA) {
                    return;
                }
                bA = bD._Deferred();
                if (ar.readyState === "complete") {
                    return setTimeout(bD.ready, 1);
                }
                if (ar.addEventListener) {
                    ar.addEventListener("DOMContentLoaded", e, false);
                    bb.addEventListener("load", bD.ready, false);
                } else {
                    if (ar.attachEvent) {
                        ar.attachEvent("onreadystatechange", e);
                        bb.attachEvent("onload", bD.ready);
                        var bX = false;
                        try {
                            bX = bb.frameElement == null;
                        } catch(bY) {}
                        if (ar.documentElement.doScroll && bX) {
                            bv();
                        }
                    }
                }
            },
            isFunction: function(bX) {
                return bD.type(bX) === "function";
            },
            isArray: Array.isArray || 
            function(bX) {
                return bD.type(bX) === "array";
            },
            isWindow: function(bX) {
                return bX && typeof bX === "object" && "setInterval" in bX;
            },
            isNaN: function(bX) {
                return bX == null || !bG.test(bX) || isNaN(bX);
            },
            type: function(bX) {
                return bX == null ? String(bX) : bw[bK.call(bX)] || "object";
            },
            isPlainObject: function(bY) {
                if (!bY || bD.type(bY) !== "object" || bY.nodeType || bD.isWindow(bY)) {
                    return false;
                }
                if (bY.constructor && !bE.call(bY, "constructor") && !bE.call(bY.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
                var bX;
                for (bX in bY) {}
                return bX === L || bE.call(bY, bX);
            },
            isEmptyObject: function(bY) {
                for (var bX in bY) {
                    return false;
                }
                return true;
            },
            error: function(bX) {
                throw bX;
            },
            parseJSON: function(bX) {
                if (typeof bX !== "string" || !bX) {
                    return null;
                }
                bX = bD.trim(bX);
                if (bb.JSON && bb.JSON.parse) {
                    return bb.JSON.parse(bX);
                }
                if (bM.test(bX.replace(bU, "@").replace(bO, "]").replace(bI, ""))) {
                    return (new Function("return " + bX))();
                }
                bD.error("Invalid JSON: " + bX);
            },
            parseXML: function(bZ, bX, bY) {
                if (bb.DOMParser) {
                    bY = new DOMParser();
                    bX = bY.parseFromString(bZ, "text/xml");
                } else {
                    bX = new ActiveXObject("Microsoft.XMLDOM");
                    bX.async = "false";
                    bX.loadXML(bZ);
                }
                bY = bX.documentElement;
                if (!bY || !bY.nodeName || bY.nodeName === "parsererror") {
                    bD.error("Invalid XML: " + bZ);
                }
                return bX;
            },
            noop: function() {},
            globalEval: function(bX) {
                if (bX && bL.test(bX)) { (bb.execScript || 
                    function(bY) {
                        bb["eval"].call(bb, bY);
                    })(bX);
                }
            },
            nodeName: function(bY, bX) {
                return bY.nodeName && bY.nodeName.toUpperCase() === bX.toUpperCase();
            },
            each: function(b0, b3, bZ) {
                var bY,
                b1 = 0,
                b2 = b0.length,
                bX = b2 === L || bD.isFunction(b0);
                if (bZ) {
                    if (bX) {
                        for (bY in b0) {
                            if (b3.apply(b0[bY], bZ) === false) {
                                break;
                            }
                        }
                    } else {
                        for (; b1 < b2;) {
                            if (b3.apply(b0[b1++], bZ) === false) {
                                break;
                            }
                        }
                    }
                } else {
                    if (bX) {
                        for (bY in b0) {
                            if (b3.call(b0[bY], bY, b0[bY]) === false) {
                                break;
                            }
                        }
                    } else {
                        for (; b1 < b2;) {
                            if (b3.call(b0[b1], b1, b0[b1++]) === false) {
                                break;
                            }
                        }
                    }
                }
                return b0;
            },
            trim: bN ? 
            function(bX) {
                return bX == null ? "": bN.call(bX);
            }: function(bX) {
                return bX == null ? "": bX.toString().replace(bH, "").replace(bC, "");
            },
            makeArray: function(b0, bY) {
                var bX = bY || [];
                if (b0 != null) {
                    var bZ = bD.type(b0);
                    if (b0.length == null || bZ === "string" || bZ === "function" || bZ === "regexp" || bD.isWindow(b0)) {
                        by.call(bX, b0);
                    } else {
                        bD.merge(bX, b0);
                    }
                }
                return bX;
            },
            inArray: function(bZ, b0) {
                if (bu) {
                    return bu.call(b0, bZ);
                }
                for (var bX = 0, bY = b0.length; bX < bY; bX++) {
                    if (b0[bX] === bZ) {
                        return bX;
                    }
                }
                return - 1;
            },
            merge: function(b1, bZ) {
                var b0 = b1.length,
                bY = 0;
                if (typeof bZ.length === "number") {
                    for (var bX = bZ.length; bY < bX; bY++) {
                        b1[b0++] = bZ[bY];
                    }
                } else {
                    while (bZ[bY] !== L) {
                        b1[b0++] = bZ[bY++];
                    }
                }
                b1.length = b0;
                return b1;
            },
            grep: function(bY, b3, bX) {
                var bZ = [],
                b2;
                bX = !!bX;
                for (var b0 = 0, b1 = bY.length; b0 < b1; b0++) {
                    b2 = !!b3(bY[b0], b0);
                    if (bX !== b2) {
                        bZ.push(bY[b0]);
                    }
                }
                return bZ;
            },
            map: function(bX, b4, b5) {
                var b2,
                b3,
                b1 = [],
                bZ = 0,
                bY = bX.length,
                b0 = bX instanceof bD || bY !== L && typeof bY === "number" && ((bY > 0 && bX[0] && bX[bY - 1]) || bY === 0 || bD.isArray(bX));
                if (b0) {
                    for (; bZ < bY; bZ++) {
                        b2 = b4(bX[bZ], bZ, b5);
                        if (b2 != null) {
                            b1[b1.length] = b2;
                        }
                    }
                } else {
                    for (b3 in bX) {
                        b2 = b4(bX[b3], b3, b5);
                        if (b2 != null) {
                            b1[b1.length] = b2;
                        }
                    }
                }
                return b1.concat.apply([], b1);
            },
            guid: 1,
            proxy: function(b1, b0) {
                if (typeof b0 === "string") {
                    var bZ = b1[b0];
                    b0 = b1;
                    b1 = bZ;
                }
                if (!bD.isFunction(b1)) {
                    return L;
                }
                var bX = bJ.call(arguments, 2),
                bY = function() {
                    return b1.apply(b0, bX.concat(bJ.call(arguments)));
                };
                bY.guid = b1.guid = b1.guid || bY.guid || bD.guid++;
                return bY;
            },
            access: function(bX, b5, b3, bZ, b2, b4) {
                var bY = bX.length;
                if (typeof b5 === "object") {
                    for (var b0 in b5) {
                        bD.access(bX, b0, b5[b0], bZ, b2, b3);
                    }
                    return bX;
                }
                if (b3 !== L) {
                    bZ = !b4 && bZ && bD.isFunction(b3);
                    for (var b1 = 0; b1 < bY; b1++) {
                        b2(bX[b1], b5, bZ ? b3.call(bX[b1], b1, b2(bX[b1], b5)) : b3, b4);
                    }
                    return bX;
                }
                return bY ? b2(bX[0], b5) : L;
            },
            now: function() {
                return (new Date()).getTime();
            },
            uaMatch: function(bY) {
                bY = bY.toLowerCase();
                var bX = bx.exec(bY) || bQ.exec(bY) || bP.exec(bY) || bY.indexOf("compatible") < 0 && bR.exec(bY) || [];
                return {
                    browser: bX[1] || "",
                    version: bX[2] || "0"
                };
            },
            sub: function() {
                function bX(b0, b1) {
                    return new bX.fn.init(b0, b1);
                }
                bD.extend(true, bX, this);
                bX.superclass = this;
                bX.fn = bX.prototype = this();
                bX.fn.constructor = bX;
                bX.sub = this.sub;
                bX.fn.init = function bZ(b0, b1) {
                    if (b1 && b1 instanceof bD && !(b1 instanceof bX)) {
                        b1 = bX(b1);
                    }
                    return bD.fn.init.call(this, b0, b1, bY);
                };
                bX.fn.init.prototype = bX.fn;
                var bY = bX(ar);
                return bX;
            },
            browser: {}
        });
        bD.each("Boolean Number String Function Array Date RegExp Object".split(" "), 
        function(bY, bX) {
            bw["[object " + bX + "]"] = bX.toLowerCase();
        });
        bT = bD.uaMatch(bV);
        if (bT.browser) {
            bD.browser[bT.browser] = true;
            bD.browser.version = bT.version;
        }
        if (bD.browser.webkit) {
            bD.browser.safari = true;
        }
        if (bL.test("\xA0")) {
            bH = /^[\s\xA0]+/;
            bC = /[\s\xA0]+$/;
        }
        bB = bD(ar);
        if (ar.addEventListener) {
            e = function() {
                ar.removeEventListener("DOMContentLoaded", e, false);
                bD.ready();
            };
        } else {
            if (ar.attachEvent) {
                e = function() {
                    if (ar.readyState === "complete") {
                        ar.detachEvent("onreadystatechange", e);
                        bD.ready();
                    }
                };
            }
        }
        function bv() {
            if (bD.isReady) {
                return;
            }
            try {
                ar.documentElement.doScroll("left");
            } catch(bX) {
                setTimeout(bv, 1);
                return;
            }
            bD.ready();
        }
        return bD;
    })();
    var a = "done fail isResolved isRejected promise then always pipe".split(" "),
    aH = [].slice;
    b.extend({
        _Deferred: function() {
            var bw = [],
            bx,
            bu,
            bv,
            e = {
                done: function() {
                    if (!bv) {
                        var bz = arguments,
                        bA,
                        bD,
                        bC,
                        bB,
                        by;
                        if (bx) {
                            by = bx;
                            bx = 0;
                        }
                        for (bA = 0, bD = bz.length; bA < bD; bA++) {
                            bC = bz[bA];
                            bB = b.type(bC);
                            if (bB === "array") {
                                e.done.apply(e, bC);
                            } else {
                                if (bB === "function") {
                                    bw.push(bC);
                                }
                            }
                        }
                        if (by) {
                            e.resolveWith(by[0], by[1]);
                        }
                    }
                    return this;
                },
                resolveWith: function(bz, by) {
                    if (!bv && !bx && !bu) {
                        by = by || [];
                        bu = 1;
                        try {
                            while (bw[0]) {
                                bw.shift().apply(bz, by);
                            }
                        } finally {
                            bx = [bz, by];
                            bu = 0;
                        }
                    }
                    return this;
                },
                resolve: function() {
                    e.resolveWith(this, arguments);
                    return this;
                },
                isResolved: function() {
                    return !! (bu || bx);
                },
                cancel: function() {
                    bv = 1;
                    bw = [];
                    return this;
                }
            };
            return e;
        },
        Deferred: function(bu) {
            var e = b._Deferred(),
            bw = b._Deferred(),
            bv;
            b.extend(e, {
                then: function(by, bx) {
                    e.done(by).fail(bx);
                    return this;
                },
                always: function() {
                    return e.done.apply(e, arguments).fail.apply(this, arguments);
                },
                fail: bw.done,
                rejectWith: bw.resolveWith,
                reject: bw.resolve,
                isRejected: bw.isResolved,
                pipe: function(by, bx) {
                    return b.Deferred(function(bz) {
                        b.each({
                            done: [by, "resolve"],
                            fail: [bx, "reject"]
                        },
                        function(bB, bE) {
                            var bA = bE[0],
                            bD = bE[1],
                            bC;
                            if (b.isFunction(bA)) {
                                e[bB](function() {
                                    bC = bA.apply(this, arguments);
                                    if (bC && b.isFunction(bC.promise)) {
                                        bC.promise().then(bz.resolve, bz.reject);
                                    } else {
                                        bz[bD](bC);
                                    }
                                });
                            } else {
                                e[bB](bz[bD]);
                            }
                        });
                    }).promise();
                },
                promise: function(by) {
                    if (by == null) {
                        if (bv) {
                            return bv;
                        }
                        bv = by = {};
                    }
                    var bx = a.length;
                    while (bx--) {
                        by[a[bx]] = e[a[bx]];
                    }
                    return by;
                }
            });
            e.done(bw.cancel).fail(e.cancel);
            delete e.cancel;
            if (bu) {
                bu.call(e, e);
            }
            return e;
        },
        when: function(bz) {
            var bu = arguments,
            bv = 0,
            by = bu.length,
            bx = by,
            e = by <= 1 && bz && b.isFunction(bz.promise) ? bz: b.Deferred();
            function bw(bA) {
                return function(bB) {
                    bu[bA] = arguments.length > 1 ? aH.call(arguments, 0) : bB;
                    if (! (--bx)) {
                        e.resolveWith(e, aH.call(bu, 0));
                    }
                };
            }
            if (by > 1) {
                for (; bv < by; bv++) {
                    if (bu[bv] && b.isFunction(bu[bv].promise)) {
                        bu[bv].promise().then(bw(bv), e.reject);
                    } else {--bx;
                    }
                }
                if (!bx) {
                    e.resolveWith(e, bu);
                }
            } else {
                if (e !== bz) {
                    e.resolveWith(e, by ? [bz] : []);
                }
            }
            return e.promise();
        }
    });
    b.support = (function() {
        var bE = ar.createElement("div"),
        bK = ar.documentElement,
        by,
        bL,
        bF,
        bw,
        bD,
        bz,
        bB,
        bv,
        bC,
        bu,
        bH,
        bx,
        bA,
        bI,
        bM;
        bE.setAttribute("className", "t");
        bE.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        by = bE.getElementsByTagName("*");
        bL = bE.getElementsByTagName("a")[0];
        if (!by || !by.length || !bL) {
            return {};
        }
        bF = ar.createElement("select");
        bw = bF.appendChild(ar.createElement("option"));
        bD = bE.getElementsByTagName("input")[0];
        bB = {
            leadingWhitespace: (bE.firstChild.nodeType === 3),
            tbody: !bE.getElementsByTagName("tbody").length,
            htmlSerialize: !!bE.getElementsByTagName("link").length,
            style: /top/.test(bL.getAttribute("style")),
            hrefNormalized: (bL.getAttribute("href") === "/a"),
            opacity: /^0.55$/.test(bL.style.opacity),
            cssFloat: !!bL.style.cssFloat,
            checkOn: (bD.value === "on"),
            optSelected: bw.selected,
            getSetAttribute: bE.className !== "t",
            submitBubbles: true,
            changeBubbles: true,
            focusinBubbles: false,
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true
        };
        bD.checked = true;
        bB.noCloneChecked = bD.cloneNode(true).checked;
        bF.disabled = true;
        bB.optDisabled = !bw.disabled;
        try {
            delete bE.test;
        } catch(bJ) {
            bB.deleteExpando = false;
        }
        if (!bE.addEventListener && bE.attachEvent && bE.fireEvent) {
            bE.attachEvent("onclick", 
            function bG() {
                bB.noCloneEvent = false;
                bE.detachEvent("onclick", bG);
            });
            bE.cloneNode(true).fireEvent("onclick");
        }
        bD = ar.createElement("input");
        bD.value = "t";
        bD.setAttribute("type", "radio");
        bB.radioValue = bD.value === "t";
        bD.setAttribute("checked", "checked");
        bE.appendChild(bD);
        bv = ar.createDocumentFragment();
        bv.appendChild(bE.firstChild);
        bB.checkClone = bv.cloneNode(true).cloneNode(true).lastChild.checked;
        bE.innerHTML = "";
        bE.style.width = bE.style.paddingLeft = "1px";
        bC = ar.createElement("body");
        bu = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        for (bI in bu) {
            bC.style[bI] = bu[bI];
        }
        bC.appendChild(bE);
        bK.insertBefore(bC, bK.firstChild);
        bB.appendChecked = bD.checked;
        bB.boxModel = bE.offsetWidth === 2;
        if ("zoom" in bE.style) {
            bE.style.display = "inline";
            bE.style.zoom = 1;
            bB.inlineBlockNeedsLayout = (bE.offsetWidth === 2);
            bE.style.display = "";
            bE.innerHTML = "<div style='width:4px;'></div>";
            bB.shrinkWrapBlocks = (bE.offsetWidth !== 2);
        }
        bE.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
        bH = bE.getElementsByTagName("td");
        bM = (bH[0].offsetHeight === 0);
        bH[0].style.display = "";
        bH[1].style.display = "none";
        bB.reliableHiddenOffsets = bM && (bH[0].offsetHeight === 0);
        bE.innerHTML = "";
        if (ar.defaultView && ar.defaultView.getComputedStyle) {
            bz = ar.createElement("div");
            bz.style.width = "0";
            bz.style.marginRight = "0";
            bE.appendChild(bz);
            bB.reliableMarginRight = (parseInt((ar.defaultView.getComputedStyle(bz, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0;
        }
        bC.innerHTML = "";
        bK.removeChild(bC);
        if (bE.attachEvent) {
            for (bI in {
                submit: 1,
                change: 1,
                focusin: 1
            }) {
                bA = "on" + bI;
                bM = (bA in bE);
                if (!bM) {
                    bE.setAttribute(bA, "return;");
                    bM = (typeof bE[bA] === "function");
                }
                bB[bI + "Bubbles"] = bM;
            }
        }
        return bB;
    })();
    b.boxModel = b.support.boxModel;
    var aN = /^(?:\{.*\}|\[.*\])$/,
    ax = /([a-z])([A-Z])/g;
    b.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (b.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        hasData: function(e) {
            e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando];
            return !! e && !U(e);
        },
        data: function(bw, bu, by, bx) {
            if (!b.acceptData(bw)) {
                return;
            }
            var bB = b.expando,
            bA = typeof bu === "string",
            bz,
            bC = bw.nodeType,
            e = bC ? b.cache: bw,
            bv = bC ? bw[b.expando] : bw[b.expando] && b.expando;
            if ((!bv || (bx && bv && !e[bv][bB])) && bA && by === L) {
                return;
            }
            if (!bv) {
                if (bC) {
                    bw[b.expando] = bv = ++b.uuid;
                } else {
                    bv = b.expando;
                }
            }
            if (!e[bv]) {
                e[bv] = {};
                if (!bC) {
                    e[bv].toJSON = b.noop;
                }
            }
            if (typeof bu === "object" || typeof bu === "function") {
                if (bx) {
                    e[bv][bB] = b.extend(e[bv][bB], bu);
                } else {
                    e[bv] = b.extend(e[bv], bu);
                }
            }
            bz = e[bv];
            if (bx) {
                if (!bz[bB]) {
                    bz[bB] = {};
                }
                bz = bz[bB];
            }
            if (by !== L) {
                bz[b.camelCase(bu)] = by;
            }
            if (bu === "events" && !bz[bu]) {
                return bz[bB] && bz[bB].events;
            }
            return bA ? bz[b.camelCase(bu)] : bz;
        },
        removeData: function(bx, bv, by) {
            if (!b.acceptData(bx)) {
                return;
            }
            var bA = b.expando,
            bB = bx.nodeType,
            bu = bB ? b.cache: bx,
            bw = bB ? bx[b.expando] : b.expando;
            if (!bu[bw]) {
                return;
            }
            if (bv) {
                var bz = by ? bu[bw][bA] : bu[bw];
                if (bz) {
                    delete bz[bv];
                    if (!U(bz)) {
                        return;
                    }
                }
            }
            if (by) {
                delete bu[bw][bA];
                if (!U(bu[bw])) {
                    return;
                }
            }
            var e = bu[bw][bA];
            if (b.support.deleteExpando || bu != bb) {
                delete bu[bw];
            } else {
                bu[bw] = null;
            }
            if (e) {
                bu[bw] = {};
                if (!bB) {
                    bu[bw].toJSON = b.noop;
                }
                bu[bw][bA] = e;
            } else {
                if (bB) {
                    if (b.support.deleteExpando) {
                        delete bx[b.expando];
                    } else {
                        if (bx.removeAttribute) {
                            bx.removeAttribute(b.expando);
                        } else {
                            bx[b.expando] = null;
                        }
                    }
                }
            }
        },
        _data: function(bu, e, bv) {
            return b.data(bu, e, bv, true);
        },
        acceptData: function(bu) {
            if (bu.nodeName) {
                var e = b.noData[bu.nodeName.toLowerCase()];
                if (e) {
                    return ! (e === true || bu.getAttribute("classid") !== e);
                }
            }
            return true;
        }
    });
    b.fn.extend({
        data: function(bx, bz) {
            var by = null;
            if (typeof bx === "undefined") {
                if (this.length) {
                    by = b.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var e = this[0].attributes,
                        bv;
                        for (var bw = 0, bu = e.length; bw < bu; bw++) {
                            bv = e[bw].name;
                            if (bv.indexOf("data-") === 0) {
                                bv = b.camelCase(bv.substring(5));
                                a4(this[0], bv, by[bv]);
                            }
                        }
                    }
                }
                return by;
            } else {
                if (typeof bx === "object") {
                    return this.each(function() {
                        b.data(this, bx);
                    });
                }
            }
            var bA = bx.split(".");
            bA[1] = bA[1] ? "." + bA[1] : "";
            if (bz === L) {
                by = this.triggerHandler("getData" + bA[1] + "!", [bA[0]]);
                if (by === L && this.length) {
                    by = b.data(this[0], bx);
                    by = a4(this[0], bx, by);
                }
                return by === L && bA[1] ? this.data(bA[0]) : by;
            } else {
                return this.each(function() {
                    var bC = b(this),
                    bB = [bA[0], bz];
                    bC.triggerHandler("setData" + bA[1] + "!", bB);
                    b.data(this, bx, bz);
                    bC.triggerHandler("changeData" + bA[1] + "!", bB);
                });
            }
        },
        removeData: function(e) {
            return this.each(function() {
                b.removeData(this, e);
            });
        }
    });
    function a4(bw, bv, bx) {
        if (bx === L && bw.nodeType === 1) {
            var bu = "data-" + bv.replace(ax, "$1-$2").toLowerCase();
            bx = bw.getAttribute(bu);
            if (typeof bx === "string") {
                try {
                    bx = bx === "true" ? true: bx === "false" ? false: bx === "null" ? null: !b.isNaN(bx) ? parseFloat(bx) : aN.test(bx) ? b.parseJSON(bx) : bx;
                } catch(by) {}
                b.data(bw, bv, bx);
            } else {
                bx = L;
            }
        }
        return bx;
    }
    function U(bu) {
        for (var e in bu) {
            if (e !== "toJSON") {
                return false;
            }
        }
        return true;
    }
    function bg(bx, bw, bz) {
        var bv = bw + "defer",
        bu = bw + "queue",
        e = bw + "mark",
        by = b.data(bx, bv, L, true);
        if (by && (bz === "queue" || !b.data(bx, bu, L, true)) && (bz === "mark" || !b.data(bx, e, L, true))) {
            setTimeout(function() {
                if (!b.data(bx, bu, L, true) && !b.data(bx, e, L, true)) {
                    b.removeData(bx, bv, true);
                    by.resolve();
                }
            },
            0);
        }
    }
    b.extend({
        _mark: function(bu, e) {
            if (bu) {
                e = (e || "fx") + "mark";
                b.data(bu, e, (b.data(bu, e, L, true) || 0) + 1, true);
            }
        },
        _unmark: function(bx, bw, bu) {
            if (bx !== true) {
                bu = bw;
                bw = bx;
                bx = false;
            }
            if (bw) {
                bu = bu || "fx";
                var e = bu + "mark",
                bv = bx ? 0: ((b.data(bw, e, L, true) || 1) - 1);
                if (bv) {
                    b.data(bw, e, bv, true);
                } else {
                    b.removeData(bw, e, true);
                    bg(bw, bu, "mark");
                }
            }
        },
        queue: function(bu, e, bw) {
            if (bu) {
                e = (e || "fx") + "queue";
                var bv = b.data(bu, e, L, true);
                if (bw) {
                    if (!bv || b.isArray(bw)) {
                        bv = b.data(bu, e, b.makeArray(bw), true);
                    } else {
                        bv.push(bw);
                    }
                }
                return bv || [];
            }
        },
        dequeue: function(bw, bv) {
            bv = bv || "fx";
            var e = b.queue(bw, bv),
            bu = e.shift(),
            bx;
            if (bu === "inprogress") {
                bu = e.shift();
            }
            if (bu) {
                if (bv === "fx") {
                    e.unshift("inprogress");
                }
                bu.call(bw, 
                function() {
                    b.dequeue(bw, bv);
                });
            }
            if (!e.length) {
                b.removeData(bw, bv + "queue", true);
                bg(bw, bv, "queue");
            }
        }
    });
    b.fn.extend({
        queue: function(e, bu) {
            if (typeof e !== "string") {
                bu = e;
                e = "fx";
            }
            if (bu === L) {
                return b.queue(this[0], e);
            }
            return this.each(function() {
                var bv = b.queue(this, e, bu);
                if (e === "fx" && bv[0] !== "inprogress") {
                    b.dequeue(this, e);
                }
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e);
            });
        },
        delay: function(bu, e) {
            bu = b.fx ? b.fx.speeds[bu] || bu: bu;
            e = e || "fx";
            return this.queue(e, 
            function() {
                var bv = this;
                setTimeout(function() {
                    b.dequeue(bv, e);
                },
                bu);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(bC, bv) {
            if (typeof bC !== "string") {
                bv = bC;
                bC = L;
            }
            bC = bC || "fx";
            var e = b.Deferred(),
            bu = this,
            bx = bu.length,
            bA = 1,
            by = bC + "defer",
            bz = bC + "queue",
            bB = bC + "mark",
            bw;
            function bD() {
                if (! (--bA)) {
                    e.resolveWith(bu, [bu]);
                }
            }
            while (bx--) {
                if ((bw = b.data(bu[bx], by, L, true) || (b.data(bu[bx], bz, L, true) || b.data(bu[bx], bB, L, true)) && b.data(bu[bx], by, b._Deferred(), true))) {
                    bA++;
                    bw.done(bD);
                }
            }
            bD();
            return e.promise();
        }
    });
    var aL = /[\n\t\r]/g,
    ad = /\s+/,
    aP = /\r/g,
    g = /^(?:button|input)$/i,
    E = /^(?:button|input|object|select|textarea)$/i,
    l = /^a(?:rea)?$/i,
    al = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    a7 = /\:/,
    a2,
    aW;
    b.fn.extend({
        attr: function(e, bu) {
            return b.access(this, e, bu, true, b.attr);
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e);
            });
        },
        prop: function(e, bu) {
            return b.access(this, e, bu, true, b.prop);
        },
        removeProp: function(e) {
            e = b.propFix[e] || e;
            return this.each(function() {
                try {
                    this[e] = L;
                    delete this[e];
                } catch(bu) {}
            });
        },
        addClass: function(bA) {
            if (b.isFunction(bA)) {
                return this.each(function(bD) {
                    var bC = b(this);
                    bC.addClass(bA.call(this, bD, bC.attr("class") || ""));
                });
            }
            if (bA && typeof bA === "string") {
                var e = (bA || "").split(ad);
                for (var bw = 0, bv = this.length; bw < bv; bw++) {
                    var bu = this[bw];
                    if (bu.nodeType === 1) {
                        if (!bu.className) {
                            bu.className = bA;
                        } else {
                            var bx = " " + bu.className + " ",
                            bz = bu.className;
                            for (var by = 0, bB = e.length; by < bB; by++) {
                                if (bx.indexOf(" " + e[by] + " ") < 0) {
                                    bz += " " + e[by];
                                }
                            }
                            bu.className = b.trim(bz);
                        }
                    }
                }
            }
            return this;
        },
        removeClass: function(by) {
            if (b.isFunction(by)) {
                return this.each(function(bC) {
                    var bB = b(this);
                    bB.removeClass(by.call(this, bC, bB.attr("class")));
                });
            }
            if ((by && typeof by === "string") || by === L) {
                var bz = (by || "").split(ad);
                for (var bv = 0, bu = this.length; bv < bu; bv++) {
                    var bx = this[bv];
                    if (bx.nodeType === 1 && bx.className) {
                        if (by) {
                            var bw = (" " + bx.className + " ").replace(aL, " ");
                            for (var bA = 0, e = bz.length; bA < e; bA++) {
                                bw = bw.replace(" " + bz[bA] + " ", " ");
                            }
                            bx.className = b.trim(bw);
                        } else {
                            bx.className = "";
                        }
                    }
                }
            }
            return this;
        },
        toggleClass: function(bw, bu) {
            var bv = typeof bw,
            e = typeof bu === "boolean";
            if (b.isFunction(bw)) {
                return this.each(function(by) {
                    var bx = b(this);
                    bx.toggleClass(bw.call(this, by, bx.attr("class"), bu), bu);
                });
            }
            return this.each(function() {
                if (bv === "string") {
                    var bz,
                    by = 0,
                    bx = b(this),
                    bA = bu,
                    bB = bw.split(ad);
                    while ((bz = bB[by++])) {
                        bA = e ? bA: !bx.hasClass(bz);
                        bx[bA ? "addClass": "removeClass"](bz);
                    }
                } else {
                    if (bv === "undefined" || bv === "boolean") {
                        if (this.className) {
                            b._data(this, "__className__", this.className);
                        }
                        this.className = this.className || bw === false ? "": b._data(this, "__className__") || "";
                    }
                }
            });
        },
        hasClass: function(e) {
            var bw = " " + e + " ";
            for (var bv = 0, bu = this.length; bv < bu; bv++) {
                if ((" " + this[bv].className + " ").replace(aL, " ").indexOf(bw) > -1) {
                    return true;
                }
            }
            return false;
        },
        val: function(bw) {
            var e,
            bu,
            bv = this[0];
            if (!arguments.length) {
                if (bv) {
                    e = b.valHooks[bv.nodeName.toLowerCase()] || b.valHooks[bv.type];
                    if (e && "get" in e && (bu = e.get(bv, "value")) !== L) {
                        return bu;
                    }
                    return (bv.value || "").replace(aP, "");
                }
                return L;
            }
            var bx = b.isFunction(bw);
            return this.each(function(bz) {
                var by = b(this),
                bA;
                if (this.nodeType !== 1) {
                    return;
                }
                if (bx) {
                    bA = bw.call(this, bz, by.val());
                } else {
                    bA = bw;
                }
                if (bA == null) {
                    bA = "";
                } else {
                    if (typeof bA === "number") {
                        bA += "";
                    } else {
                        if (b.isArray(bA)) {
                            bA = b.map(bA, 
                            function(bB) {
                                return bB == null ? "": bB + "";
                            });
                        }
                    }
                }
                e = b.valHooks[this.nodeName.toLowerCase()] || b.valHooks[this.type];
                if (!e || !("set" in e) || e.set(this, bA, "value") === L) {
                    this.value = bA;
                }
            });
        }
    });
    b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var bu = e.attributes.value;
                    return ! bu || bu.specified ? e.value: e.text;
                }
            },
            select: {
                get: function(e) {
                    var bz,
                    bx = e.selectedIndex,
                    bA = [],
                    bB = e.options,
                    bw = e.type === "select-one";
                    if (bx < 0) {
                        return null;
                    }
                    for (var bu = bw ? bx: 0, by = bw ? bx + 1: bB.length; bu < by; bu++) {
                        var bv = bB[bu];
                        if (bv.selected && (b.support.optDisabled ? !bv.disabled: bv.getAttribute("disabled") === null) && (!bv.parentNode.disabled || !b.nodeName(bv.parentNode, "optgroup"))) {
                            bz = b(bv).val();
                            if (bw) {
                                return bz;
                            }
                            bA.push(bz);
                        }
                    }
                    if (bw && !bA.length && bB.length) {
                        return b(bB[bx]).val();
                    }
                    return bA;
                },
                set: function(bu, bv) {
                    var e = b.makeArray(bv);
                    b(bu).find("option").each(function() {
                        this.selected = b.inArray(b(this).val(), e) >= 0;
                    });
                    if (!e.length) {
                        bu.selectedIndex = -1;
                    }
                    return e;
                }
            }
        },
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attrFix: {
            tabindex: "tabIndex"
        },
        attr: function(bz, bw, bA, by) {
            var bu = bz.nodeType;
            if (!bz || bu === 3 || bu === 8 || bu === 2) {
                return L;
            }
            if (by && bw in b.attrFn) {
                return b(bz)[bw](bA);
            }
            if (! ("getAttribute" in bz)) {
                return b.prop(bz, bw, bA);
            }
            var bv,
            e,
            bx = bu !== 1 || !b.isXMLDoc(bz);
            bw = bx && b.attrFix[bw] || bw;
            e = b.attrHooks[bw];
            if (!e) {
                if (al.test(bw) && (typeof bA === "boolean" || bA === L || bA.toLowerCase() === bw.toLowerCase())) {
                    e = aW;
                } else {
                    if (a2 && (b.nodeName(bz, "form") || a7.test(bw))) {
                        e = a2;
                    }
                }
            }
            if (bA !== L) {
                if (bA === null) {
                    b.removeAttr(bz, bw);
                    return L;
                } else {
                    if (e && "set" in e && bx && (bv = e.set(bz, bA, bw)) !== L) {
                        return bv;
                    } else {
                        bz.setAttribute(bw, "" + bA);
                        return bA;
                    }
                }
            } else {
                if (e && "get" in e && bx) {
                    return e.get(bz, bw);
                } else {
                    bv = bz.getAttribute(bw);
                    return bv === null ? L: bv;
                }
            }
        },
        removeAttr: function(bu, e) {
            var bv;
            if (bu.nodeType === 1) {
                e = b.attrFix[e] || e;
                if (b.support.getSetAttribute) {
                    bu.removeAttribute(e);
                } else {
                    b.attr(bu, e, "");
                    bu.removeAttributeNode(bu.getAttributeNode(e));
                }
                if (al.test(e) && (bv = b.propFix[e] || e) in bu) {
                    bu[bv] = false;
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, bu) {
                    if (g.test(e.nodeName) && e.parentNode) {
                        b.error("type property can't be changed");
                    } else {
                        if (!b.support.radioValue && bu === "radio" && b.nodeName(e, "input")) {
                            var bv = e.value;
                            e.setAttribute("type", bu);
                            if (bv) {
                                e.value = bv;
                            }
                            return bu;
                        }
                    }
                }
            },
            tabIndex: {
                get: function(bu) {
                    var e = bu.getAttributeNode("tabIndex");
                    return e && e.specified ? parseInt(e.value, 10) : E.test(bu.nodeName) || l.test(bu.nodeName) && bu.href ? 0: L;
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
        prop: function(by, bw, bz) {
            var bu = by.nodeType;
            if (!by || bu === 3 || bu === 8 || bu === 2) {
                return L;
            }
            var bv,
            e,
            bx = bu !== 1 || !b.isXMLDoc(by);
            bw = bx && b.propFix[bw] || bw;
            e = b.propHooks[bw];
            if (bz !== L) {
                if (e && "set" in e && (bv = e.set(by, bz, bw)) !== L) {
                    return bv;
                } else {
                    return (by[bw] = bz);
                }
            } else {
                if (e && "get" in e && (bv = e.get(by, bw)) !== L) {
                    return bv;
                } else {
                    return by[bw];
                }
            }
        },
        propHooks: {}
    });
    aW = {
        get: function(bu, e) {
            return bu[b.propFix[e] || e] ? e.toLowerCase() : L;
        },
        set: function(bu, bw, e) {
            var bv;
            if (bw === false) {
                b.removeAttr(bu, e);
            } else {
                bv = b.propFix[e] || e;
                if (bv in bu) {
                    bu[bv] = bw;
                }
                bu.setAttribute(e, e.toLowerCase());
            }
            return e;
        }
    };
    b.attrHooks.value = {
        get: function(bu, e) {
            if (a2 && b.nodeName(bu, "button")) {
                return a2.get(bu, e);
            }
            return bu.value;
        },
        set: function(bu, bv, e) {
            if (a2 && b.nodeName(bu, "button")) {
                return a2.set(bu, bv, e);
            }
            bu.value = bv;
        }
    };
    if (!b.support.getSetAttribute) {
        b.attrFix = b.propFix;
        a2 = b.attrHooks.name = b.valHooks.button = {
            get: function(bv, bu) {
                var e;
                e = bv.getAttributeNode(bu);
                return e && e.nodeValue !== "" ? e.nodeValue: L;
            },
            set: function(bv, bw, bu) {
                var e = bv.getAttributeNode(bu);
                if (e) {
                    e.nodeValue = bw;
                    return bw;
                }
            }
        };
        b.each(["width", "height"], 
        function(bu, e) {
            b.attrHooks[e] = b.extend(b.attrHooks[e], {
                set: function(bv, bw) {
                    if (bw === "") {
                        bv.setAttribute(e, "auto");
                        return bw;
                    }
                }
            });
        });
    }
    if (!b.support.hrefNormalized) {
        b.each(["href", "src", "width", "height"], 
        function(bu, e) {
            b.attrHooks[e] = b.extend(b.attrHooks[e], {
                get: function(bw) {
                    var bv = bw.getAttribute(e, 2);
                    return bv === null ? L: bv;
                }
            });
        });
    }
    if (!b.support.style) {
        b.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || L;
            },
            set: function(e, bu) {
                return (e.style.cssText = "" + bu);
            }
        };
    }
    if (!b.support.optSelected) {
        b.propHooks.selected = b.extend(b.propHooks.selected, {
            get: function(bu) {
                var e = bu.parentNode;
                if (e) {
                    e.selectedIndex;
                    if (e.parentNode) {
                        e.parentNode.selectedIndex;
                    }
                }
            }
        });
    }
    if (!b.support.checkOn) {
        b.each(["radio", "checkbox"], 
        function() {
            b.valHooks[this] = {
                get: function(e) {
                    return e.getAttribute("value") === null ? "on": e.value;
                }
            };
        });
    }
    b.each(["radio", "checkbox"], 
    function() {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function(e, bu) {
                if (b.isArray(bu)) {
                    return (e.checked = b.inArray(b(e).val(), bu) >= 0);
                }
            }
        });
    });
    var aE = Object.prototype.hasOwnProperty,
    aY = /\.(.*)$/,
    bd = /^(?:textarea|input|select)$/i,
    O = /\./g,
    bh = / /g,
    aD = /[^\w\s.|`]/g,
    H = function(e) {
        return e.replace(aD, "\\$&");
    };
    b.event = {
        add: function(bw, bA, bF, by) {
            if (bw.nodeType === 3 || bw.nodeType === 8) {
                return;
            }
            if (bF === false) {
                bF = bj;
            } else {
                if (!bF) {
                    return;
                }
            }
            var bu,
            bE;
            if (bF.handler) {
                bu = bF;
                bF = bu.handler;
            }
            if (!bF.guid) {
                bF.guid = b.guid++;
            }
            var bB = b._data(bw);
            if (!bB) {
                return;
            }
            var bG = bB.events,
            bz = bB.handle;
            if (!bG) {
                bB.events = bG = {};
            }
            if (!bz) {
                bB.handle = bz = function(bH) {
                    return typeof b !== "undefined" && (!bH || b.event.triggered !== bH.type) ? b.event.handle.apply(bz.elem, arguments) : L;
                };
            }
            bz.elem = bw;
            bA = bA.split(" ");
            var bD,
            bx = 0,
            e;
            while ((bD = bA[bx++])) {
                bE = bu ? b.extend({},
                bu) : {
                    handler: bF,
                    data: by
                };
                if (bD.indexOf(".") > -1) {
                    e = bD.split(".");
                    bD = e.shift();
                    bE.namespace = e.slice(0).sort().join(".");
                } else {
                    e = [];
                    bE.namespace = "";
                }
                bE.type = bD;
                if (!bE.guid) {
                    bE.guid = bF.guid;
                }
                var bv = bG[bD],
                bC = b.event.special[bD] || {};
                if (!bv) {
                    bv = bG[bD] = [];
                    if (!bC.setup || bC.setup.call(bw, by, e, bz) === false) {
                        if (bw.addEventListener) {
                            bw.addEventListener(bD, bz, false);
                        } else {
                            if (bw.attachEvent) {
                                bw.attachEvent("on" + bD, bz);
                            }
                        }
                    }
                }
                if (bC.add) {
                    bC.add.call(bw, bE);
                    if (!bE.handler.guid) {
                        bE.handler.guid = bF.guid;
                    }
                }
                bv.push(bE);
                b.event.global[bD] = true;
            }
            bw = null;
        },
        global: {},
        remove: function(bI, bD, bv, bz) {
            if (bI.nodeType === 3 || bI.nodeType === 8) {
                return;
            }
            if (bv === false) {
                bv = bj;
            }
            var bL,
            by,
            bA,
            bF,
            bG = 0,
            bw,
            bB,
            bE,
            bx,
            bC,
            e,
            bK,
            bH = b.hasData(bI) && b._data(bI),
            bu = bH && bH.events;
            if (!bH || !bu) {
                return;
            }
            if (bD && bD.type) {
                bv = bD.handler;
                bD = bD.type;
            }
            if (!bD || typeof bD === "string" && bD.charAt(0) === ".") {
                bD = bD || "";
                for (by in bu) {
                    b.event.remove(bI, by + bD);
                }
                return;
            }
            bD = bD.split(" ");
            while ((by = bD[bG++])) {
                bK = by;
                e = null;
                bw = by.indexOf(".") < 0;
                bB = [];
                if (!bw) {
                    bB = by.split(".");
                    by = bB.shift();
                    bE = new RegExp("(^|\\.)" + b.map(bB.slice(0).sort(), H).join("\\.(?:.*\\.)?") + "(\\.|$)");
                }
                bC = bu[by];
                if (!bC) {
                    continue;
                }
                if (!bv) {
                    for (bF = 0; bF < bC.length; bF++) {
                        e = bC[bF];
                        if (bw || bE.test(e.namespace)) {
                            b.event.remove(bI, bK, e.handler, bF);
                            bC.splice(bF--, 1);
                        }
                    }
                    continue;
                }
                bx = b.event.special[by] || {};
                for (bF = bz || 0; bF < bC.length; bF++) {
                    e = bC[bF];
                    if (bv.guid === e.guid) {
                        if (bw || bE.test(e.namespace)) {
                            if (bz == null) {
                                bC.splice(bF--, 1);
                            }
                            if (bx.remove) {
                                bx.remove.call(bI, e);
                            }
                        }
                        if (bz != null) {
                            break;
                        }
                    }
                }
                if (bC.length === 0 || bz != null && bC.length === 1) {
                    if (!bx.teardown || bx.teardown.call(bI, bB) === false) {
                        b.removeEvent(bI, by, bH.handle);
                    }
                    bL = null;
                    delete bu[by];
                }
            }
            if (b.isEmptyObject(bu)) {
                var bJ = bH.handle;
                if (bJ) {
                    bJ.elem = null;
                }
                delete bH.events;
                delete bH.handle;
                if (b.isEmptyObject(bH)) {
                    b.removeData(bI, L, true);
                }
            }
        },
        customEvent: {
            getData: true,
            setData: true,
            changeData: true
        },
        trigger: function(e, bA, by, bF) {
            var bD = e.type || e,
            bv = [],
            bu;
            if (bD.indexOf("!") >= 0) {
                bD = bD.slice(0, -1);
                bu = true;
            }
            if (bD.indexOf(".") >= 0) {
                bv = bD.split(".");
                bD = bv.shift();
                bv.sort();
            }
            if ((!by || b.event.customEvent[bD]) && !b.event.global[bD]) {
                return;
            }
            e = typeof e === "object" ? e[b.expando] ? e: new b.Event(bD, e) : new b.Event(bD);
            e.type = bD;
            e.exclusive = bu;
            e.namespace = bv.join(".");
            e.namespace_re = new RegExp("(^|\\.)" + bv.join("\\.(?:.*\\.)?") + "(\\.|$)");
            if (bF || !by) {
                e.preventDefault();
                e.stopPropagation();
            }
            if (!by) {
                b.each(b.cache, 
                function() {
                    var bH = b.expando,
                    bG = this[bH];
                    if (bG && bG.events && bG.events[bD]) {
                        b.event.trigger(e, bA, bG.handle.elem);
                    }
                });
                return;
            }
            if (by.nodeType === 3 || by.nodeType === 8) {
                return;
            }
            e.result = L;
            e.target = by;
            bA = bA ? b.makeArray(bA) : [];
            bA.unshift(e);
            var bE = by,
            bw = bD.indexOf(":") < 0 ? "on" + bD: "";
            do {
                var bB = b._data(bE, "handle");
                e.currentTarget = bE;
                if (bB) {
                    bB.apply(bE, bA);
                }
                if (bw && b.acceptData(bE) && bE[bw] && bE[bw].apply(bE, bA) === false) {
                    e.result = false;
                    e.preventDefault();
                }
                bE = bE.parentNode || bE.ownerDocument || bE === e.target.ownerDocument && bb;
            }
            while (bE && !e.isPropagationStopped());
            if (!e.isDefaultPrevented()) {
                var bx,
                bC = b.event.special[bD] || {};
                if ((!bC._default || bC._default.call(by.ownerDocument, e) === false) && !(bD === "click" && b.nodeName(by, "a")) && b.acceptData(by)) {
                    try {
                        if (bw && by[bD]) {
                            bx = by[bw];
                            if (bx) {
                                by[bw] = null;
                            }
                            b.event.triggered = bD;
                            by[bD]();
                        }
                    } catch(bz) {}
                    if (bx) {
                        by[bw] = bx;
                    }
                    b.event.triggered = L;
                }
            }
            return e.result;
        },
        handle: function(bA) {
            bA = b.event.fix(bA || bb.event);
            var bu = ((b._data(this, "events") || {})[bA.type] || []).slice(0),
            bz = !bA.exclusive && !bA.namespace,
            bx = Array.prototype.slice.call(arguments, 0);
            bx[0] = bA;
            bA.currentTarget = this;
            for (var bw = 0, e = bu.length; bw < e; bw++) {
                var by = bu[bw];
                if (bz || bA.namespace_re.test(by.namespace)) {
                    bA.handler = by.handler;
                    bA.data = by.data;
                    bA.handleObj = by;
                    var bv = by.handler.apply(this, bx);
                    if (bv !== L) {
                        bA.result = bv;
                        if (bv === false) {
                            bA.preventDefault();
                            bA.stopPropagation();
                        }
                    }
                    if (bA.isImmediatePropagationStopped()) {
                        break;
                    }
                }
            }
            return bA.result;
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(bx) {
            if (bx[b.expando]) {
                return bx;
            }
            var bu = bx;
            bx = b.Event(bu);
            for (var bv = this.props.length, bz; bv;) {
                bz = this.props[--bv];
                bx[bz] = bu[bz];
            }
            if (!bx.target) {
                bx.target = bx.srcElement || ar;
            }
            if (bx.target.nodeType === 3) {
                bx.target = bx.target.parentNode;
            }
            if (!bx.relatedTarget && bx.fromElement) {
                bx.relatedTarget = bx.fromElement === bx.target ? bx.toElement: bx.fromElement;
            }
            if (bx.pageX == null && bx.clientX != null) {
                var bw = bx.target.ownerDocument || ar,
                by = bw.documentElement,
                e = bw.body;
                bx.pageX = bx.clientX + (by && by.scrollLeft || e && e.scrollLeft || 0) - (by && by.clientLeft || e && e.clientLeft || 0);
                bx.pageY = bx.clientY + (by && by.scrollTop || e && e.scrollTop || 0) - (by && by.clientTop || e && e.clientTop || 0);
            }
            if (bx.which == null && (bx.charCode != null || bx.keyCode != null)) {
                bx.which = bx.charCode != null ? bx.charCode: bx.keyCode;
            }
            if (!bx.metaKey && bx.ctrlKey) {
                bx.metaKey = bx.ctrlKey;
            }
            if (!bx.which && bx.button !== L) {
                bx.which = (bx.button & 1 ? 1: (bx.button & 2 ? 3: (bx.button & 4 ? 2: 0)));
            }
            return bx;
        },
        guid: 100000000,
        proxy: b.proxy,
        special: {
            ready: {
                setup: b.bindReady,
                teardown: b.noop
            },
            live: {
                add: function(e) {
                    b.event.add(this, q(e.origType, e.selector), b.extend({},
                    e, {
                        handler: aj,
                        guid: e.handler.guid
                    }));
                },
                remove: function(e) {
                    b.event.remove(this, q(e.origType, e.selector), e);
                }
            },
            beforeunload: {
                setup: function(bv, bu, e) {
                    if (b.isWindow(this)) {
                        this.onbeforeunload = e;
                    }
                },
                teardown: function(bu, e) {
                    if (this.onbeforeunload === e) {
                        this.onbeforeunload = null;
                    }
                }
            }
        }
    };
    b.removeEvent = ar.removeEventListener ? 
    function(bu, e, bv) {
        if (bu.removeEventListener) {
            bu.removeEventListener(e, bv, false);
        }
    }: function(bu, e, bv) {
        if (bu.detachEvent) {
            bu.detachEvent("on" + e, bv);
        }
    };
    b.Event = function(bu, e) {
        if (!this.preventDefault) {
            return new b.Event(bu, e);
        }
        if (bu && bu.type) {
            this.originalEvent = bu;
            this.type = bu.type;
            this.isDefaultPrevented = (bu.defaultPrevented || bu.returnValue === false || bu.getPreventDefault && bu.getPreventDefault()) ? i: bj;
        } else {
            this.type = bu;
        }
        if (e) {
            b.extend(this, e);
        }
        this.timeStamp = b.now();
        this[b.expando] = true;
    };
    function bj() {
        return false;
    }
    function i() {
        return true;
    }
    b.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = i;
            var bu = this.originalEvent;
            if (!bu) {
                return;
            }
            if (bu.preventDefault) {
                bu.preventDefault();
            } else {
                bu.returnValue = false;
            }
        },
        stopPropagation: function() {
            this.isPropagationStopped = i;
            var bu = this.originalEvent;
            if (!bu) {
                return;
            }
            if (bu.stopPropagation) {
                bu.stopPropagation();
            }
            bu.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = i;
            this.stopPropagation();
        },
        isDefaultPrevented: bj,
        isPropagationStopped: bj,
        isImmediatePropagationStopped: bj
    };
    var ac = function(bv) {
        var bu = bv.relatedTarget;
        bv.type = bv.data;
        try {
            if (bu && bu !== ar && !bu.parentNode) {
                return;
            }
            while (bu && bu !== this) {
                bu = bu.parentNode;
            }
            if (bu !== this) {
                b.event.handle.apply(this, arguments);
            }
        } catch(bw) {}
    },
    aS = function(e) {
        e.type = e.data;
        b.event.handle.apply(this, arguments);
    };
    b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(bu, e) {
        b.event.special[bu] = {
            setup: function(bv) {
                b.event.add(this, e, bv && bv.selector ? aS: ac, bu);
            },
            teardown: function(bv) {
                b.event.remove(this, e, bv && bv.selector ? aS: ac);
            }
        };
    });
    if (!b.support.submitBubbles) {
        b.event.special.submit = {
            setup: function(bu, e) {
                if (!b.nodeName(this, "form")) {
                    b.event.add(this, "click.specialSubmit", 
                    function(bx) {
                        var bw = bx.target,
                        bv = bw.type;
                        if ((bv === "submit" || bv === "image") && b(bw).closest("form").length) {
                            aV("submit", this, arguments);
                        }
                    });
                    b.event.add(this, "keypress.specialSubmit", 
                    function(bx) {
                        var bw = bx.target,
                        bv = bw.type;
                        if ((bv === "text" || bv === "password") && b(bw).closest("form").length && bx.keyCode === 13) {
                            aV("submit", this, arguments);
                        }
                    });
                } else {
                    return false;
                }
            },
            teardown: function(e) {
                b.event.remove(this, ".specialSubmit");
            }
        };
    }
    if (!b.support.changeBubbles) {
        var bm,
        k = function(bu) {
            var e = bu.type,
            bv = bu.value;
            if (e === "radio" || e === "checkbox") {
                bv = bu.checked;
            } else {
                if (e === "select-multiple") {
                    bv = bu.selectedIndex > -1 ? b.map(bu.options, 
                    function(bw) {
                        return bw.selected;
                    }).join("-") : "";
                } else {
                    if (b.nodeName(bu, "select")) {
                        bv = bu.selectedIndex;
                    }
                }
            }
            return bv;
        },
        aa = function aa(bw) {
            var bu = bw.target,
            bv,
            bx;
            if (!bd.test(bu.nodeName) || bu.readOnly) {
                return;
            }
            bv = b._data(bu, "_change_data");
            bx = k(bu);
            if (bw.type !== "focusout" || bu.type !== "radio") {
                b._data(bu, "_change_data", bx);
            }
            if (bv === L || bx === bv) {
                return;
            }
            if (bv != null || bx) {
                bw.type = "change";
                bw.liveFired = L;
                b.event.trigger(bw, arguments[1], bu);
            }
        };
        b.event.special.change = {
            filters: {
                focusout: aa,
                beforedeactivate: aa,
                click: function(bw) {
                    var bv = bw.target,
                    bu = b.nodeName(bv, "input") ? bv.type: "";
                    if (bu === "radio" || bu === "checkbox" || b.nodeName(bv, "select")) {
                        aa.call(this, bw);
                    }
                },
                keydown: function(bw) {
                    var bv = bw.target,
                    bu = b.nodeName(bv, "input") ? bv.type: "";
                    if ((bw.keyCode === 13 && !b.nodeName(bv, "textarea")) || (bw.keyCode === 32 && (bu === "checkbox" || bu === "radio")) || bu === "select-multiple") {
                        aa.call(this, bw);
                    }
                },
                beforeactivate: function(bv) {
                    var bu = bv.target;
                    b._data(bu, "_change_data", k(bu));
                }
            },
            setup: function(bv, bu) {
                if (this.type === "file") {
                    return false;
                }
                for (var e in bm) {
                    b.event.add(this, e + ".specialChange", bm[e]);
                }
                return bd.test(this.nodeName);
            },
            teardown: function(e) {
                b.event.remove(this, ".specialChange");
                return bd.test(this.nodeName);
            }
        };
        bm = b.event.special.change.filters;
        bm.focus = bm.beforeactivate;
    }
    function aV(bu, bw, e) {
        var bv = b.extend({},
        e[0]);
        bv.type = bu;
        bv.originalEvent = {};
        bv.liveFired = L;
        b.event.handle.call(bw, bv);
        if (bv.isDefaultPrevented()) {
            e[0].preventDefault();
        }
    }
    if (!b.support.focusinBubbles) {
        b.each({
            focus: "focusin",
            blur: "focusout"
        },
        function(bw, e) {
            var bu = 0;
            b.event.special[e] = {
                setup: function() {
                    if (bu++===0) {
                        ar.addEventListener(bw, bv, true);
                    }
                },
                teardown: function() {
                    if (--bu === 0) {
                        ar.removeEventListener(bw, bv, true);
                    }
                }
            };
            function bv(bx) {
                var by = b.event.fix(bx);
                by.type = e;
                by.originalEvent = {};
                b.event.trigger(by, null, by.target);
                if (by.isDefaultPrevented()) {
                    bx.preventDefault();
                }
            }
        });
    }
    b.each(["bind", "one"], 
    function(bu, e) {
        b.fn[e] = function(bA, bB, bz) {
            var by;
            if (typeof bA === "object") {
                for (var bx in bA) {
                    this[e](bx, bB, bA[bx], bz);
                }
                return this;
            }
            if (arguments.length === 2 || bB === false) {
                bz = bB;
                bB = L;
            }
            if (e === "one") {
                by = function(bC) {
                    b(this).unbind(bC, by);
                    return bz.apply(this, arguments);
                };
                by.guid = bz.guid || b.guid++;
            } else {
                by = bz;
            }
            if (bA === "unload" && e !== "one") {
                this.one(bA, bB, bz);
            } else {
                for (var bw = 0, bv = this.length; bw < bv; bw++) {
                    b.event.add(this[bw], bA, by, bB);
                }
            }
            return this;
        };
    });
    b.fn.extend({
        unbind: function(bx, bw) {
            if (typeof bx === "object" && !bx.preventDefault) {
                for (var bv in bx) {
                    this.unbind(bv, bx[bv]);
                }
            } else {
                for (var bu = 0, e = this.length; bu < e; bu++) {
                    b.event.remove(this[bu], bx, bw);
                }
            }
            return this;
        },
        delegate: function(e, bu, bw, bv) {
            return this.live(bu, bw, bv, e);
        },
        undelegate: function(e, bu, bv) {
            if (arguments.length === 0) {
                return this.unbind("live");
            } else {
                return this.die(bu, null, bv, e);
            }
        },
        trigger: function(e, bu) {
            return this.each(function() {
                b.event.trigger(e, bu, this);
            });
        },
        triggerHandler: function(e, bu) {
            if (this[0]) {
                return b.event.trigger(e, bu, this[0], true);
            }
        },
        toggle: function(bw) {
            var bu = arguments,
            e = bw.guid || b.guid++,
            bv = 0,
            bx = function(by) {
                var bz = (b.data(this, "lastToggle" + bw.guid) || 0) % bv;
                b.data(this, "lastToggle" + bw.guid, bz + 1);
                by.preventDefault();
                return bu[bz].apply(this, arguments) || false;
            };
            bx.guid = e;
            while (bv < bu.length) {
                bu[bv++].guid = e;
            }
            return this.click(bx);
        },
        hover: function(e, bu) {
            return this.mouseenter(e).mouseleave(bu || e);
        }
    });
    var aQ = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    b.each(["live", "die"], 
    function(bu, e) {
        b.fn[e] = function(bE, bB, bG, bx) {
            var bF,
            bC = 0,
            bD,
            bw,
            bI,
            bz = bx || this.selector,
            bv = bx ? this: b(this.context);
            if (typeof bE === "object" && !bE.preventDefault) {
                for (var bH in bE) {
                    bv[e](bH, bB, bE[bH], bz);
                }
                return this;
            }
            if (e === "die" && !bE && bx && bx.charAt(0) === ".") {
                bv.unbind(bx);
                return this;
            }
            if (bB === false || b.isFunction(bB)) {
                bG = bB || bj;
                bB = L;
            }
            bE = (bE || "").split(" ");
            while ((bF = bE[bC++]) != null) {
                bD = aY.exec(bF);
                bw = "";
                if (bD) {
                    bw = bD[0];
                    bF = bF.replace(aY, "");
                }
                if (bF === "hover") {
                    bE.push("mouseenter" + bw, "mouseleave" + bw);
                    continue;
                }
                bI = bF;
                if (aQ[bF]) {
                    bE.push(aQ[bF] + bw);
                    bF = bF + bw;
                } else {
                    bF = (aQ[bF] || bF) + bw;
                }
                if (e === "live") {
                    for (var bA = 0, by = bv.length; bA < by; bA++) {
                        b.event.add(bv[bA], "live." + q(bF, bz), {
                            data: bB,
                            selector: bz,
                            handler: bG,
                            origType: bF,
                            origHandler: bG,
                            preType: bI
                        });
                    }
                } else {
                    bv.unbind("live." + q(bF, bz), bG);
                }
            }
            return this;
        };
    });
    function aj(bE) {
        var bB,
        bw,
        bK,
        by,
        e,
        bG,
        bD,
        bF,
        bC,
        bJ,
        bA,
        bz,
        bI,
        bH = [],
        bx = [],
        bu = b._data(this, "events");
        if (bE.liveFired === this || !bu || !bu.live || bE.target.disabled || bE.button && bE.type === "click") {
            return;
        }
        if (bE.namespace) {
            bz = new RegExp("(^|\\.)" + bE.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)");
        }
        bE.liveFired = this;
        var bv = bu.live.slice(0);
        for (bD = 0; bD < bv.length; bD++) {
            e = bv[bD];
            if (e.origType.replace(aY, "") === bE.type) {
                bx.push(e.selector);
            } else {
                bv.splice(bD--, 1);
            }
        }
        by = b(bE.target).closest(bx, bE.currentTarget);
        for (bF = 0, bC = by.length; bF < bC; bF++) {
            bA = by[bF];
            for (bD = 0; bD < bv.length; bD++) {
                e = bv[bD];
                if (bA.selector === e.selector && (!bz || bz.test(e.namespace)) && !bA.elem.disabled) {
                    bG = bA.elem;
                    bK = null;
                    if (e.preType === "mouseenter" || e.preType === "mouseleave") {
                        bE.type = e.preType;
                        bK = b(bE.relatedTarget).closest(e.selector)[0];
                        if (bK && b.contains(bG, bK)) {
                            bK = bG;
                        }
                    }
                    if (!bK || bK !== bG) {
                        bH.push({
                            elem: bG,
                            handleObj: e,
                            level: bA.level
                        });
                    }
                }
            }
        }
        for (bF = 0, bC = bH.length; bF < bC; bF++) {
            by = bH[bF];
            if (bw && by.level > bw) {
                break;
            }
            bE.currentTarget = by.elem;
            bE.data = by.handleObj.data;
            bE.handleObj = by.handleObj;
            bI = by.handleObj.origHandler.apply(by.elem, arguments);
            if (bI === false || bE.isPropagationStopped()) {
                bw = by.level;
                if (bI === false) {
                    bB = false;
                }
                if (bE.isImmediatePropagationStopped()) {
                    break;
                }
            }
        }
        return bB;
    }
    function q(bu, e) {
        return (bu && bu !== "*" ? bu + ".": "") + e.replace(O, "`").replace(bh, "&");
    }
    b.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "), 
    function(bu, e) {
        b.fn[e] = function(bw, bv) {
            if (bv == null) {
                bv = bw;
                bw = null;
            }
            return arguments.length > 0 ? this.bind(e, bw, bv) : this.trigger(e);
        };
        if (b.attrFn) {
            b.attrFn[e] = true;
        }
    });
    /*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
    (function() {
        var bE = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        bF = 0,
        bI = Object.prototype.toString,
        bz = false,
        by = true,
        bG = /\\/g,
        bM = /\W/; [0, 0].sort(function() {
            by = false;
            return 0;
        });
        var bw = function(bR, e, bU, bV) {
            bU = bU || [];
            e = e || ar;
            var bX = e;
            if (e.nodeType !== 1 && e.nodeType !== 9) {
                return [];
            }
            if (!bR || typeof bR !== "string") {
                return bU;
            }
            var bO,
            bZ,
            b2,
            bN,
            bY,
            b1,
            b0,
            bT,
            bQ = true,
            bP = bw.isXML(e),
            bS = [],
            bW = bR;
            do {
                bE.exec("");
                bO = bE.exec(bW);
                if (bO) {
                    bW = bO[3];
                    bS.push(bO[1]);
                    if (bO[2]) {
                        bN = bO[3];
                        break;
                    }
                }
            }
            while (bO);
            if (bS.length > 1 && bA.exec(bR)) {
                if (bS.length === 2 && bB.relative[bS[0]]) {
                    bZ = bJ(bS[0] + bS[1], e);
                } else {
                    bZ = bB.relative[bS[0]] ? [e] : bw(bS.shift(), e);
                    while (bS.length) {
                        bR = bS.shift();
                        if (bB.relative[bR]) {
                            bR += bS.shift();
                        }
                        bZ = bJ(bR, bZ);
                    }
                }
            } else {
                if (!bV && bS.length > 1 && e.nodeType === 9 && !bP && bB.match.ID.test(bS[0]) && !bB.match.ID.test(bS[bS.length - 1])) {
                    bY = bw.find(bS.shift(), e, bP);
                    e = bY.expr ? bw.filter(bY.expr, bY.set)[0] : bY.set[0];
                }
                if (e) {
                    bY = bV ? {
                        expr: bS.pop(),
                        set: bC(bV)
                    }: bw.find(bS.pop(), bS.length === 1 && (bS[0] === "~" || bS[0] === "+") && e.parentNode ? e.parentNode: e, bP);
                    bZ = bY.expr ? bw.filter(bY.expr, bY.set) : bY.set;
                    if (bS.length > 0) {
                        b2 = bC(bZ);
                    } else {
                        bQ = false;
                    }
                    while (bS.length) {
                        b1 = bS.pop();
                        b0 = b1;
                        if (!bB.relative[b1]) {
                            b1 = "";
                        } else {
                            b0 = bS.pop();
                        }
                        if (b0 == null) {
                            b0 = e;
                        }
                        bB.relative[b1](b2, b0, bP);
                    }
                } else {
                    b2 = bS = [];
                }
            }
            if (!b2) {
                b2 = bZ;
            }
            if (!b2) {
                bw.error(b1 || bR);
            }
            if (bI.call(b2) === "[object Array]") {
                if (!bQ) {
                    bU.push.apply(bU, b2);
                } else {
                    if (e && e.nodeType === 1) {
                        for (bT = 0; b2[bT] != null; bT++) {
                            if (b2[bT] && (b2[bT] === true || b2[bT].nodeType === 1 && bw.contains(e, b2[bT]))) {
                                bU.push(bZ[bT]);
                            }
                        }
                    } else {
                        for (bT = 0; b2[bT] != null; bT++) {
                            if (b2[bT] && b2[bT].nodeType === 1) {
                                bU.push(bZ[bT]);
                            }
                        }
                    }
                }
            } else {
                bC(b2, bU);
            }
            if (bN) {
                bw(bN, bX, bU, bV);
                bw.uniqueSort(bU);
            }
            return bU;
        };
        bw.uniqueSort = function(bN) {
            if (bH) {
                bz = by;
                bN.sort(bH);
                if (bz) {
                    for (var e = 1; e < bN.length; e++) {
                        if (bN[e] === bN[e - 1]) {
                            bN.splice(e--, 1);
                        }
                    }
                }
            }
            return bN;
        };
        bw.matches = function(e, bN) {
            return bw(e, null, null, bN);
        };
        bw.matchesSelector = function(e, bN) {
            return bw(bN, null, null, [e]).length > 0;
        };
        bw.find = function(bT, e, bU) {
            var bS;
            if (!bT) {
                return [];
            }
            for (var bP = 0, bO = bB.order.length; bP < bO; bP++) {
                var bQ,
                bR = bB.order[bP];
                if ((bQ = bB.leftMatch[bR].exec(bT))) {
                    var bN = bQ[1];
                    bQ.splice(1, 1);
                    if (bN.substr(bN.length - 1) !== "\\") {
                        bQ[1] = (bQ[1] || "").replace(bG, "");
                        bS = bB.find[bR](bQ, e, bU);
                        if (bS != null) {
                            bT = bT.replace(bB.match[bR], "");
                            break;
                        }
                    }
                }
            }
            if (!bS) {
                bS = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName("*") : [];
            }
            return {
                set: bS,
                expr: bT
            };
        };
        bw.filter = function(bX, bW, b0, bQ) {
            var bS,
            e,
            bO = bX,
            b2 = [],
            bU = bW,
            bT = bW && bW[0] && bw.isXML(bW[0]);
            while (bX && bW.length) {
                for (var bV in bB.filter) {
                    if ((bS = bB.leftMatch[bV].exec(bX)) != null && bS[2]) {
                        var b1,
                        bZ,
                        bN = bB.filter[bV],
                        bP = bS[1];
                        e = false;
                        bS.splice(1, 1);
                        if (bP.substr(bP.length - 1) === "\\") {
                            continue;
                        }
                        if (bU === b2) {
                            b2 = [];
                        }
                        if (bB.preFilter[bV]) {
                            bS = bB.preFilter[bV](bS, bU, b0, b2, bQ, bT);
                            if (!bS) {
                                e = b1 = true;
                            } else {
                                if (bS === true) {
                                    continue;
                                }
                            }
                        }
                        if (bS) {
                            for (var bR = 0; (bZ = bU[bR]) != null; bR++) {
                                if (bZ) {
                                    b1 = bN(bZ, bS, bR, bU);
                                    var bY = bQ ^ !!b1;
                                    if (b0 && b1 != null) {
                                        if (bY) {
                                            e = true;
                                        } else {
                                            bU[bR] = false;
                                        }
                                    } else {
                                        if (bY) {
                                            b2.push(bZ);
                                            e = true;
                                        }
                                    }
                                }
                            }
                        }
                        if (b1 !== L) {
                            if (!b0) {
                                bU = b2;
                            }
                            bX = bX.replace(bB.match[bV], "");
                            if (!e) {
                                return [];
                            }
                            break;
                        }
                    }
                }
                if (bX === bO) {
                    if (e == null) {
                        bw.error(bX);
                    } else {
                        break;
                    }
                }
                bO = bX;
            }
            return bU;
        };
        bw.error = function(e) {
            throw "Syntax error, unrecognized expression: " + e;
        };
        var bB = bw.selectors = {
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
                href: function(e) {
                    return e.getAttribute("href");
                },
                type: function(e) {
                    return e.getAttribute("type");
                }
            },
            relative: {
                "+": function(bS, bN) {
                    var bP = typeof bN === "string",
                    bR = bP && !bM.test(bN),
                    bT = bP && !bR;
                    if (bR) {
                        bN = bN.toLowerCase();
                    }
                    for (var bO = 0, e = bS.length, bQ; bO < e; bO++) {
                        if ((bQ = bS[bO])) {
                            while ((bQ = bQ.previousSibling) && bQ.nodeType !== 1) {}
                            bS[bO] = bT || bQ && bQ.nodeName.toLowerCase() === bN ? bQ || false: bQ === bN;
                        }
                    }
                    if (bT) {
                        bw.filter(bN, bS, true);
                    }
                },
                ">": function(bS, bN) {
                    var bR,
                    bQ = typeof bN === "string",
                    bO = 0,
                    e = bS.length;
                    if (bQ && !bM.test(bN)) {
                        bN = bN.toLowerCase();
                        for (; bO < e; bO++) {
                            bR = bS[bO];
                            if (bR) {
                                var bP = bR.parentNode;
                                bS[bO] = bP.nodeName.toLowerCase() === bN ? bP: false;
                            }
                        }
                    } else {
                        for (; bO < e; bO++) {
                            bR = bS[bO];
                            if (bR) {
                                bS[bO] = bQ ? bR.parentNode: bR.parentNode === bN;
                            }
                        }
                        if (bQ) {
                            bw.filter(bN, bS, true);
                        }
                    }
                },
                "": function(bP, bN, bR) {
                    var bQ,
                    bO = bF++,
                    e = bK;
                    if (typeof bN === "string" && !bM.test(bN)) {
                        bN = bN.toLowerCase();
                        bQ = bN;
                        e = bu;
                    }
                    e("parentNode", bN, bO, bP, bQ, bR);
                },
                "~": function(bP, bN, bR) {
                    var bQ,
                    bO = bF++,
                    e = bK;
                    if (typeof bN === "string" && !bM.test(bN)) {
                        bN = bN.toLowerCase();
                        bQ = bN;
                        e = bu;
                    }
                    e("previousSibling", bN, bO, bP, bQ, bR);
                }
            },
            find: {
                ID: function(bN, bO, bP) {
                    if (typeof bO.getElementById !== "undefined" && !bP) {
                        var e = bO.getElementById(bN[1]);
                        return e && e.parentNode ? [e] : [];
                    }
                },
                NAME: function(bO, bR) {
                    if (typeof bR.getElementsByName !== "undefined") {
                        var bN = [],
                        bQ = bR.getElementsByName(bO[1]);
                        for (var bP = 0, e = bQ.length; bP < e; bP++) {
                            if (bQ[bP].getAttribute("name") === bO[1]) {
                                bN.push(bQ[bP]);
                            }
                        }
                        return bN.length === 0 ? null: bN;
                    }
                },
                TAG: function(e, bN) {
                    if (typeof bN.getElementsByTagName !== "undefined") {
                        return bN.getElementsByTagName(e[1]);
                    }
                }
            },
            preFilter: {
                CLASS: function(bP, bN, bO, e, bS, bT) {
                    bP = " " + bP[1].replace(bG, "") + " ";
                    if (bT) {
                        return bP;
                    }
                    for (var bQ = 0, bR; (bR = bN[bQ]) != null; bQ++) {
                        if (bR) {
                            if (bS ^ (bR.className && (" " + bR.className + " ").replace(/[\t\n\r]/g, " ").indexOf(bP) >= 0)) {
                                if (!bO) {
                                    e.push(bR);
                                }
                            } else {
                                if (bO) {
                                    bN[bQ] = false;
                                }
                            }
                        }
                    }
                    return false;
                },
                ID: function(e) {
                    return e[1].replace(bG, "");
                },
                TAG: function(bN, e) {
                    return bN[1].replace(bG, "").toLowerCase();
                },
                CHILD: function(e) {
                    if (e[1] === "nth") {
                        if (!e[2]) {
                            bw.error(e[0]);
                        }
                        e[2] = e[2].replace(/^\+|\s*/g, "");
                        var bN = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = (bN[1] + (bN[2] || 1)) - 0;
                        e[3] = bN[3] - 0;
                    } else {
                        if (e[2]) {
                            bw.error(e[0]);
                        }
                    }
                    e[0] = bF++;
                    return e;
                },
                ATTR: function(bQ, bN, bO, e, bR, bS) {
                    var bP = bQ[1] = bQ[1].replace(bG, "");
                    if (!bS && bB.attrMap[bP]) {
                        bQ[1] = bB.attrMap[bP];
                    }
                    bQ[4] = (bQ[4] || bQ[5] || "").replace(bG, "");
                    if (bQ[2] === "~=") {
                        bQ[4] = " " + bQ[4] + " ";
                    }
                    return bQ;
                },
                PSEUDO: function(bQ, bN, bO, e, bR) {
                    if (bQ[1] === "not") {
                        if ((bE.exec(bQ[3]) || "").length > 1 || /^\w/.test(bQ[3])) {
                            bQ[3] = bw(bQ[3], null, null, bN);
                        } else {
                            var bP = bw.filter(bQ[3], bN, bO, true ^ bR);
                            if (!bO) {
                                e.push.apply(e, bP);
                            }
                            return false;
                        }
                    } else {
                        if (bB.match.POS.test(bQ[0]) || bB.match.CHILD.test(bQ[0])) {
                            return true;
                        }
                    }
                    return bQ;
                },
                POS: function(e) {
                    e.unshift(true);
                    return e;
                }
            },
            filters: {
                enabled: function(e) {
                    return e.disabled === false && e.type !== "hidden";
                },
                disabled: function(e) {
                    return e.disabled === true;
                },
                checked: function(e) {
                    return e.checked === true;
                },
                selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex;
                    }
                    return e.selected === true;
                },
                parent: function(e) {
                    return !! e.firstChild;
                },
                empty: function(e) {
                    return ! e.firstChild;
                },
                has: function(bO, bN, e) {
                    return !! bw(e[3], bO).length;
                },
                header: function(e) {
                    return (/h\d/i).test(e.nodeName);
                },
                text: function(bO) {
                    var e = bO.getAttribute("type"),
                    bN = bO.type;
                    return bO.nodeName.toLowerCase() === "input" && "text" === bN && (e === bN || e === null);
                },
                radio: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "radio" === e.type;
                },
                checkbox: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type;
                },
                file: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "file" === e.type;
                },
                password: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "password" === e.type;
                },
                submit: function(bN) {
                    var e = bN.nodeName.toLowerCase();
                    return (e === "input" || e === "button") && "submit" === bN.type;
                },
                image: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "image" === e.type;
                },
                reset: function(bN) {
                    var e = bN.nodeName.toLowerCase();
                    return (e === "input" || e === "button") && "reset" === bN.type;
                },
                button: function(bN) {
                    var e = bN.nodeName.toLowerCase();
                    return e === "input" && "button" === bN.type || e === "button";
                },
                input: function(e) {
                    return (/input|select|textarea|button/i).test(e.nodeName);
                },
                focus: function(e) {
                    return e === e.ownerDocument.activeElement;
                }
            },
            setFilters: {
                first: function(bN, e) {
                    return e === 0;
                },
                last: function(bO, bN, e, bP) {
                    return bN === bP.length - 1;
                },
                even: function(bN, e) {
                    return e % 2 === 0;
                },
                odd: function(bN, e) {
                    return e % 2 === 1;
                },
                lt: function(bO, bN, e) {
                    return bN < e[3] - 0;
                },
                gt: function(bO, bN, e) {
                    return bN > e[3] - 0;
                },
                nth: function(bO, bN, e) {
                    return e[3] - 0 === bN;
                },
                eq: function(bO, bN, e) {
                    return e[3] - 0 === bN;
                }
            },
            filter: {
                PSEUDO: function(bO, bT, bS, bU) {
                    var e = bT[1],
                    bN = bB.filters[e];
                    if (bN) {
                        return bN(bO, bS, bT, bU);
                    } else {
                        if (e === "contains") {
                            return (bO.textContent || bO.innerText || bw.getText([bO]) || "").indexOf(bT[3]) >= 0;
                        } else {
                            if (e === "not") {
                                var bP = bT[3];
                                for (var bR = 0, bQ = bP.length; bR < bQ; bR++) {
                                    if (bP[bR] === bO) {
                                        return false;
                                    }
                                }
                                return true;
                            } else {
                                bw.error(e);
                            }
                        }
                    }
                },
                CHILD: function(e, bP) {
                    var bS = bP[1],
                    bN = e;
                    switch (bS) {
                    case "only":
                    case "first":
                        while ((bN = bN.previousSibling)) {
                            if (bN.nodeType === 1) {
                                return false;
                            }
                        }
                        if (bS === "first") {
                            return true;
                        }
                        bN = e;
                    case "last":
                        while ((bN = bN.nextSibling)) {
                            if (bN.nodeType === 1) {
                                return false;
                            }
                        }
                        return true;
                    case "nth":
                        var bO = bP[2],
                        bV = bP[3];
                        if (bO === 1 && bV === 0) {
                            return true;
                        }
                        var bR = bP[0],
                        bU = e.parentNode;
                        if (bU && (bU.sizcache !== bR || !e.nodeIndex)) {
                            var bQ = 0;
                            for (bN = bU.firstChild; bN; bN = bN.nextSibling) {
                                if (bN.nodeType === 1) {

                                    bN.nodeIndex = ++bQ;
                                }
                            }
                            bU.sizcache = bR;
                        }
                        var bT = e.nodeIndex - bV;
                        if (bO === 0) {
                            return bT === 0;
                        } else {
                            return (bT % bO === 0 && bT / bO >= 0);
                        }
                    }
                },
                ID: function(bN, e) {
                    return bN.nodeType === 1 && bN.getAttribute("id") === e;
                },
                TAG: function(bN, e) {
                    return (e === "*" && bN.nodeType === 1) || bN.nodeName.toLowerCase() === e;
                },
                CLASS: function(bN, e) {
                    return (" " + (bN.className || bN.getAttribute("class")) + " ").indexOf(e) > -1;
                },
                ATTR: function(bR, bP) {
                    var bO = bP[1],
                    e = bB.attrHandle[bO] ? bB.attrHandle[bO](bR) : bR[bO] != null ? bR[bO] : bR.getAttribute(bO),
                    bS = e + "",
                    bQ = bP[2],
                    bN = bP[4];
                    return e == null ? bQ === "!=": bQ === "=" ? bS === bN: bQ === "*=" ? bS.indexOf(bN) >= 0: bQ === "~=" ? (" " + bS + " ").indexOf(bN) >= 0: !bN ? bS && e !== false: bQ === "!=" ? bS !== bN: bQ === "^=" ? bS.indexOf(bN) === 0: bQ === "$=" ? bS.substr(bS.length - bN.length) === bN: bQ === "|=" ? bS === bN || bS.substr(0, bN.length + 1) === bN + "-": false;
                },
                POS: function(bQ, bN, bO, bR) {
                    var e = bN[2],
                    bP = bB.setFilters[e];
                    if (bP) {
                        return bP(bQ, bO, bN, bR);
                    }
                }
            }
        };
        var bA = bB.match.POS,
        bv = function(bN, e) {
            return "\\" + (e - 0 + 1);
        };
        for (var bx in bB.match) {
            bB.match[bx] = new RegExp(bB.match[bx].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
            bB.leftMatch[bx] = new RegExp(/(^(?:.|\r|\n)*?)/.source + bB.match[bx].source.replace(/\\(\d+)/g, bv));
        }
        var bC = function(bN, e) {
            bN = Array.prototype.slice.call(bN, 0);
            if (e) {
                e.push.apply(e, bN);
                return e;
            }
            return bN;
        };
        try {
            Array.prototype.slice.call(ar.documentElement.childNodes, 0)[0].nodeType;
        } catch(bL) {
            bC = function(bQ, bP) {
                var bO = 0,
                bN = bP || [];
                if (bI.call(bQ) === "[object Array]") {
                    Array.prototype.push.apply(bN, bQ);
                } else {
                    if (typeof bQ.length === "number") {
                        for (var e = bQ.length; bO < e; bO++) {
                            bN.push(bQ[bO]);
                        }
                    } else {
                        for (; bQ[bO]; bO++) {
                            bN.push(bQ[bO]);
                        }
                    }
                }
                return bN;
            };
        }
        var bH,
        bD;
        if (ar.documentElement.compareDocumentPosition) {
            bH = function(bN, e) {
                if (bN === e) {
                    bz = true;
                    return 0;
                }
                if (!bN.compareDocumentPosition || !e.compareDocumentPosition) {
                    return bN.compareDocumentPosition ? -1: 1;
                }
                return bN.compareDocumentPosition(e) & 4 ? -1: 1;
            };
        } else {
            bH = function(bU, bT) {
                if (bU === bT) {
                    bz = true;
                    return 0;
                } else {
                    if (bU.sourceIndex && bT.sourceIndex) {
                        return bU.sourceIndex - bT.sourceIndex;
                    }
                }
                var bR,
                bN,
                bO = [],
                e = [],
                bQ = bU.parentNode,
                bS = bT.parentNode,
                bV = bQ;
                if (bQ === bS) {
                    return bD(bU, bT);
                } else {
                    if (!bQ) {
                        return - 1;
                    } else {
                        if (!bS) {
                            return 1;
                        }
                    }
                }
                while (bV) {
                    bO.unshift(bV);
                    bV = bV.parentNode;
                }
                bV = bS;
                while (bV) {
                    e.unshift(bV);
                    bV = bV.parentNode;
                }
                bR = bO.length;
                bN = e.length;
                for (var bP = 0; bP < bR && bP < bN; bP++) {
                    if (bO[bP] !== e[bP]) {
                        return bD(bO[bP], e[bP]);
                    }
                }
                return bP === bR ? bD(bU, e[bP], -1) : bD(bO[bP], bT, 1);
            };
            bD = function(bN, e, bO) {
                if (bN === e) {
                    return bO;
                }
                var bP = bN.nextSibling;
                while (bP) {
                    if (bP === e) {
                        return - 1;
                    }
                    bP = bP.nextSibling;
                }
                return 1;
            };
        }
        bw.getText = function(e) {
            var bN = "",
            bP;
            for (var bO = 0; e[bO]; bO++) {
                bP = e[bO];
                if (bP.nodeType === 3 || bP.nodeType === 4) {
                    bN += bP.nodeValue;
                } else {
                    if (bP.nodeType !== 8) {
                        bN += bw.getText(bP.childNodes);
                    }
                }
            }
            return bN;
        }; (function() {
            var bN = ar.createElement("div"),
            bO = "script" + (new Date()).getTime(),
            e = ar.documentElement;
            bN.innerHTML = "<a name='" + bO + "'/>";
            e.insertBefore(bN, e.firstChild);
            if (ar.getElementById(bO)) {
                bB.find.ID = function(bQ, bR, bS) {
                    if (typeof bR.getElementById !== "undefined" && !bS) {
                        var bP = bR.getElementById(bQ[1]);
                        return bP ? bP.id === bQ[1] || typeof bP.getAttributeNode !== "undefined" && bP.getAttributeNode("id").nodeValue === bQ[1] ? [bP] : L: [];
                    }
                };
                bB.filter.ID = function(bR, bP) {
                    var bQ = typeof bR.getAttributeNode !== "undefined" && bR.getAttributeNode("id");
                    return bR.nodeType === 1 && bQ && bQ.nodeValue === bP;
                };
            }
            e.removeChild(bN);
            e = bN = null;
        })(); (function() {
            var e = ar.createElement("div");
            e.appendChild(ar.createComment(""));
            if (e.getElementsByTagName("*").length > 0) {
                bB.find.TAG = function(bN, bR) {
                    var bQ = bR.getElementsByTagName(bN[1]);
                    if (bN[1] === "*") {
                        var bP = [];
                        for (var bO = 0; bQ[bO]; bO++) {
                            if (bQ[bO].nodeType === 1) {
                                bP.push(bQ[bO]);
                            }
                        }
                        bQ = bP;
                    }
                    return bQ;
                };
            }
            e.innerHTML = "<a href='#'></a>";
            if (e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#") {
                bB.attrHandle.href = function(bN) {
                    return bN.getAttribute("href", 2);
                };
            }
            e = null;
        })();
        if (ar.querySelectorAll) { (function() {
                var e = bw,
                bP = ar.createElement("div"),
                bO = "__sizzle__";
                bP.innerHTML = "<p class='TEST'></p>";
                if (bP.querySelectorAll && bP.querySelectorAll(".TEST").length === 0) {
                    return;
                }
                bw = function(b0, bR, bV, bZ) {
                    bR = bR || ar;
                    if (!bZ && !bw.isXML(bR)) {
                        var bY = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b0);
                        if (bY && (bR.nodeType === 1 || bR.nodeType === 9)) {
                            if (bY[1]) {
                                return bC(bR.getElementsByTagName(b0), bV);
                            } else {
                                if (bY[2] && bB.find.CLASS && bR.getElementsByClassName) {
                                    return bC(bR.getElementsByClassName(bY[2]), bV);
                                }
                            }
                        }
                        if (bR.nodeType === 9) {
                            if (b0 === "body" && bR.body) {
                                return bC([bR.body], bV);
                            } else {
                                if (bY && bY[3]) {
                                    var bU = bR.getElementById(bY[3]);
                                    if (bU && bU.parentNode) {
                                        if (bU.id === bY[3]) {
                                            return bC([bU], bV);
                                        }
                                    } else {
                                        return bC([], bV);
                                    }
                                }
                            }
                            try {
                                return bC(bR.querySelectorAll(b0), bV);
                            } catch(bW) {}
                        } else {
                            if (bR.nodeType === 1 && bR.nodeName.toLowerCase() !== "object") {
                                var bS = bR,
                                bT = bR.getAttribute("id"),
                                bQ = bT || bO,
                                b2 = bR.parentNode,
                                b1 = /^\s*[+~]/.test(b0);
                                if (!bT) {
                                    bR.setAttribute("id", bQ);
                                } else {
                                    bQ = bQ.replace(/'/g, "\\$&");
                                }
                                if (b1 && b2) {
                                    bR = bR.parentNode;
                                }
                                try {
                                    if (!b1 || b2) {
                                        return bC(bR.querySelectorAll("[id='" + bQ + "'] " + b0), bV);
                                    }
                                } catch(bX) {} finally {
                                    if (!bT) {
                                        bS.removeAttribute("id");
                                    }
                                }
                            }
                        }
                    }
                    return e(b0, bR, bV, bZ);
                };
                for (var bN in e) {
                    bw[bN] = e[bN];
                }
                bP = null;
            })();
        } (function() {
            var e = ar.documentElement,
            bO = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (bO) {
                var bQ = !bO.call(ar.createElement("div"), "div"),
                bN = false;
                try {
                    bO.call(ar.documentElement, "[test!='']:sizzle");
                } catch(bP) {
                    bN = true;
                }
                bw.matchesSelector = function(bS, bU) {
                    bU = bU.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!bw.isXML(bS)) {
                        try {
                            if (bN || !bB.match.PSEUDO.test(bU) && !/!=/.test(bU)) {
                                var bR = bO.call(bS, bU);
                                if (bR || !bQ || bS.document && bS.document.nodeType !== 11) {
                                    return bR;
                                }
                            }
                        } catch(bT) {}
                    }
                    return bw(bU, null, null, [bS]).length > 0;
                };
            }
        })(); (function() {
            var e = ar.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) {
                return;
            }
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) {
                return;
            }
            bB.order.splice(1, 0, "CLASS");
            bB.find.CLASS = function(bN, bO, bP) {
                if (typeof bO.getElementsByClassName !== "undefined" && !bP) {
                    return bO.getElementsByClassName(bN[1]);
                }
            };
            e = null;
        })();
        function bu(bN, bS, bR, bV, bT, bU) {
            for (var bP = 0, bO = bV.length; bP < bO; bP++) {
                var e = bV[bP];
                if (e) {
                    var bQ = false;
                    e = e[bN];
                    while (e) {
                        if (e.sizcache === bR) {
                            bQ = bV[e.sizset];
                            break;
                        }
                        if (e.nodeType === 1 && !bU) {
                            e.sizcache = bR;
                            e.sizset = bP;
                        }
                        if (e.nodeName.toLowerCase() === bS) {
                            bQ = e;
                            break;
                        }
                        e = e[bN];
                    }
                    bV[bP] = bQ;
                }
            }
        }
        function bK(bN, bS, bR, bV, bT, bU) {
            for (var bP = 0, bO = bV.length; bP < bO; bP++) {
                var e = bV[bP];
                if (e) {
                    var bQ = false;
                    e = e[bN];
                    while (e) {
                        if (e.sizcache === bR) {
                            bQ = bV[e.sizset];
                            break;
                        }
                        if (e.nodeType === 1) {
                            if (!bU) {
                                e.sizcache = bR;
                                e.sizset = bP;
                            }
                            if (typeof bS !== "string") {
                                if (e === bS) {
                                    bQ = true;
                                    break;
                                }
                            } else {
                                if (bw.filter(bS, [e]).length > 0) {
                                    bQ = e;
                                    break;
                                }
                            }
                        }
                        e = e[bN];
                    }
                    bV[bP] = bQ;
                }
            }
        }
        if (ar.documentElement.contains) {
            bw.contains = function(bN, e) {
                return bN !== e && (bN.contains ? bN.contains(e) : true);
            };
        } else {
            if (ar.documentElement.compareDocumentPosition) {
                bw.contains = function(bN, e) {
                    return !! (bN.compareDocumentPosition(e) & 16);
                };
            } else {
                bw.contains = function() {
                    return false;
                };
            }
        }
        bw.isXML = function(e) {
            var bN = (e ? e.ownerDocument || e: 0).documentElement;
            return bN ? bN.nodeName !== "HTML": false;
        };
        var bJ = function(e, bT) {
            var bR,
            bP = [],
            bQ = "",
            bO = bT.nodeType ? [bT] : bT;
            while ((bR = bB.match.PSEUDO.exec(e))) {
                bQ += bR[0];
                e = e.replace(bB.match.PSEUDO, "");
            }
            e = bB.relative[e] ? e + "*": e;
            for (var bS = 0, bN = bO.length; bS < bN; bS++) {
                bw(e, bO[bS], bP);
            }
            return bw.filter(bQ, bP);
        };
        b.find = bw;
        b.expr = bw.selectors;
        b.expr[":"] = b.expr.filters;
        b.unique = bw.uniqueSort;
        b.text = bw.getText;
        b.isXMLDoc = bw.isXML;
        b.contains = bw.contains;
    })();
    var Z = /Until$/,
    an = /^(?:parents|prevUntil|prevAll)/,
    a9 = /,/,
    bp = /^.[^:#\[\.,]*$/,
    Q = Array.prototype.slice,
    I = b.expr.match.POS,
    av = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    b.fn.extend({
        find: function(e) {
            var bv = this,
            bx,
            bu;
            if (typeof e !== "string") {
                return b(e).filter(function() {
                    for (bx = 0, bu = bv.length; bx < bu; bx++) {
                        if (b.contains(bv[bx], this)) {
                            return true;
                        }
                    }
                });
            }
            var bw = this.pushStack("", "find", e),
            bz,
            bA,
            by;
            for (bx = 0, bu = this.length; bx < bu; bx++) {
                bz = bw.length;
                b.find(e, this[bx], bw);
                if (bx > 0) {
                    for (bA = bz; bA < bw.length; bA++) {
                        for (by = 0; by < bz; by++) {
                            if (bw[by] === bw[bA]) {
                                bw.splice(bA--, 1);
                                break;
                            }
                        }
                    }
                }
            }
            return bw;
        },
        has: function(bu) {
            var e = b(bu);
            return this.filter(function() {
                for (var bw = 0, bv = e.length; bw < bv; bw++) {
                    if (b.contains(this, e[bw])) {
                        return true;
                    }
                }
            });
        },
        not: function(e) {
            return this.pushStack(aC(this, e, false), "not", e);
        },
        filter: function(e) {
            return this.pushStack(aC(this, e, true), "filter", e);
        },
        is: function(e) {
            return !! e && (typeof e === "string" ? b.filter(e, this).length > 0: this.filter(e).length > 0);
        },
        closest: function(bD, bu) {
            var bA = [],
            bx,
            bv,
            bC = this[0];
            if (b.isArray(bD)) {
                var bz,
                bw,
                by = {},
                e = 1;
                if (bC && bD.length) {
                    for (bx = 0, bv = bD.length; bx < bv; bx++) {
                        bw = bD[bx];
                        if (!by[bw]) {
                            by[bw] = I.test(bw) ? b(bw, bu || this.context) : bw;
                        }
                    }
                    while (bC && bC.ownerDocument && bC !== bu) {
                        for (bw in by) {
                            bz = by[bw];
                            if (bz.jquery ? bz.index(bC) > -1: b(bC).is(bz)) {
                                bA.push({
                                    selector: bw,
                                    elem: bC,
                                    level: e
                                });
                            }
                        }
                        bC = bC.parentNode;
                        e++;
                    }
                }
                return bA;
            }
            var bB = I.test(bD) || typeof bD !== "string" ? b(bD, bu || this.context) : 0;
            for (bx = 0, bv = this.length; bx < bv; bx++) {
                bC = this[bx];
                while (bC) {
                    if (bB ? bB.index(bC) > -1: b.find.matchesSelector(bC, bD)) {
                        bA.push(bC);
                        break;
                    } else {
                        bC = bC.parentNode;
                        if (!bC || !bC.ownerDocument || bC === bu || bC.nodeType === 11) {
                            break;
                        }
                    }
                }
            }
            bA = bA.length > 1 ? b.unique(bA) : bA;
            return this.pushStack(bA, "closest", bD);
        },
        index: function(e) {
            if (!e || typeof e === "string") {
                return b.inArray(this[0], e ? b(e) : this.parent().children());
            }
            return b.inArray(e.jquery ? e[0] : e, this);
        },
        add: function(e, bu) {
            var bw = typeof e === "string" ? b(e, bu) : b.makeArray(e && e.nodeType ? [e] : e),
            bv = b.merge(this.get(), bw);
            return this.pushStack(D(bw[0]) || D(bv[0]) ? bv: b.unique(bv));
        },
        andSelf: function() {
            return this.add(this.prevObject);
        }
    });
    function D(e) {
        return ! e || !e.parentNode || e.parentNode.nodeType === 11;
    }
    b.each({
        parent: function(bu) {
            var e = bu.parentNode;
            return e && e.nodeType !== 11 ? e: null;
        },
        parents: function(e) {
            return b.dir(e, "parentNode");
        },
        parentsUntil: function(bu, e, bv) {
            return b.dir(bu, "parentNode", bv);
        },
        next: function(e) {
            return b.nth(e, 2, "nextSibling");
        },
        prev: function(e) {
            return b.nth(e, 2, "previousSibling");
        },
        nextAll: function(e) {
            return b.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return b.dir(e, "previousSibling");
        },
        nextUntil: function(bu, e, bv) {
            return b.dir(bu, "nextSibling", bv);
        },
        prevUntil: function(bu, e, bv) {
            return b.dir(bu, "previousSibling", bv);
        },
        siblings: function(e) {
            return b.sibling(e.parentNode.firstChild, e);
        },
        children: function(e) {
            return b.sibling(e.firstChild);
        },
        contents: function(e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: b.makeArray(e.childNodes);
        }
    },
    function(e, bu) {
        b.fn[e] = function(by, bv) {
            var bx = b.map(this, bu, by),
            bw = Q.call(arguments);
            if (!Z.test(e)) {
                bv = by;
            }
            if (bv && typeof bv === "string") {
                bx = b.filter(bv, bx);
            }
            bx = this.length > 1 && !av[e] ? b.unique(bx) : bx;
            if ((this.length > 1 || a9.test(bv)) && an.test(e)) {
                bx = bx.reverse();
            }
            return this.pushStack(bx, e, bw.join(","));
        };
    });
    b.extend({
        filter: function(bv, e, bu) {
            if (bu) {
                bv = ":not(" + bv + ")";
            }
            return e.length === 1 ? b.find.matchesSelector(e[0], bv) ? [e[0]] : [] : b.find.matches(bv, e);
        },
        dir: function(bv, bu, bx) {
            var e = [],
            bw = bv[bu];
            while (bw && bw.nodeType !== 9 && (bx === L || bw.nodeType !== 1 || !b(bw).is(bx))) {
                if (bw.nodeType === 1) {
                    e.push(bw);
                }
                bw = bw[bu];
            }
            return e;
        },
        nth: function(bx, e, bv, bw) {
            e = e || 1;
            var bu = 0;
            for (; bx; bx = bx[bv]) {
                if (bx.nodeType === 1 && ++bu === e) {
                    break;
                }
            }
            return bx;
        },
        sibling: function(bv, bu) {
            var e = [];
            for (; bv; bv = bv.nextSibling) {
                if (bv.nodeType === 1 && bv !== bu) {
                    e.push(bv);
                }
            }
            return e;
        }
    });
    function aC(bw, bv, e) {
        bv = bv || 0;
        if (b.isFunction(bv)) {
            return b.grep(bw, 
            function(by, bx) {
                var bz = !!bv.call(by, bx, by);
                return bz === e;
            });
        } else {
            if (bv.nodeType) {
                return b.grep(bw, 
                function(by, bx) {
                    return (by === bv) === e;
                });
            } else {
                if (typeof bv === "string") {
                    var bu = b.grep(bw, 
                    function(bx) {
                        return bx.nodeType === 1;
                    });
                    if (bp.test(bv)) {
                        return b.filter(bv, bu, !e);
                    } else {
                        bv = b.filter(bv, bu);
                    }
                }
            }
        }
        return b.grep(bw, 
        function(by, bx) {
            return (b.inArray(by, bv) >= 0) === e;
        });
    }
    var ae = / jQuery\d+="(?:\d+|null)"/g,
    ao = /^\s+/,
    T = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    d = /<([\w:]+)/,
    x = /<tbody/i,
    W = /<|&#?\w+;/,
    P = /<(?:script|object|embed|option|style)/i,
    o = /checked\s*(?:[^=]|=\s*.checked.)/i,
    bl = /\/(java|ecma)script/i,
    au = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    };
    au.optgroup = au.option;
    au.tbody = au.tfoot = au.colgroup = au.caption = au.thead;
    au.th = au.td;
    if (!b.support.htmlSerialize) {
        au._default = [1, "div<div>", "</div>"];
    }
    b.fn.extend({
        text: function(e) {
            if (b.isFunction(e)) {
                return this.each(function(bv) {
                    var bu = b(this);
                    bu.text(e.call(this, bv, bu.text()));
                });
            }
            if (typeof e !== "object" && e !== L) {
                return this.empty().append((this[0] && this[0].ownerDocument || ar).createTextNode(e));
            }
            return b.text(this);
        },
        wrapAll: function(e) {
            if (b.isFunction(e)) {
                return this.each(function(bv) {
                    b(this).wrapAll(e.call(this, bv));
                });
            }
            if (this[0]) {
                var bu = b(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    bu.insertBefore(this[0]);
                }
                bu.map(function() {
                    var bv = this;
                    while (bv.firstChild && bv.firstChild.nodeType === 1) {
                        bv = bv.firstChild;
                    }
                    return bv;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            if (b.isFunction(e)) {
                return this.each(function(bu) {
                    b(this).wrapInner(e.call(this, bu));
                });
            }
            return this.each(function() {
                var bu = b(this),
                bv = bu.contents();
                if (bv.length) {
                    bv.wrapAll(e);
                } else {
                    bu.append(e);
                }
            });
        },
        wrap: function(e) {
            return this.each(function() {
                b(this).wrapAll(e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!b.nodeName(this, "body")) {
                    b(this).replaceWith(this.childNodes);
                }
            }).end();
        },
        append: function() {
            return this.domManip(arguments, true, 
            function(e) {
                if (this.nodeType === 1) {
                    this.appendChild(e);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, true, 
            function(e) {
                if (this.nodeType === 1) {
                    this.insertBefore(e, this.firstChild);
                }
            });
        },
        before: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, 
                function(bu) {
                    this.parentNode.insertBefore(bu, this);
                });
            } else {
                if (arguments.length) {
                    var e = b(arguments[0]);
                    e.push.apply(e, this.toArray());
                    return this.pushStack(e, "before", arguments);
                }
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, 
                function(bu) {
                    this.parentNode.insertBefore(bu, this.nextSibling);
                });
            } else {
                if (arguments.length) {
                    var e = this.pushStack(this, "after", arguments);
                    e.push.apply(e, b(arguments[0]).toArray());
                    return e;
                }
            }
        },
        remove: function(e, bw) {
            for (var bu = 0, bv; (bv = this[bu]) != null; bu++) {
                if (!e || b.filter(e, [bv]).length) {
                    if (!bw && bv.nodeType === 1) {
                        b.cleanData(bv.getElementsByTagName("*"));
                        b.cleanData([bv]);
                    }
                    if (bv.parentNode) {
                        bv.parentNode.removeChild(bv);
                    }
                }
            }
            return this;
        },
        empty: function() {
            for (var e = 0, bu; (bu = this[e]) != null; e++) {
                if (bu.nodeType === 1) {
                    b.cleanData(bu.getElementsByTagName("*"));
                }
                while (bu.firstChild) {
                    bu.removeChild(bu.firstChild);
                }
            }
            return this;
        },
        clone: function(bu, e) {
            bu = bu == null ? false: bu;
            e = e == null ? bu: e;
            return this.map(function() {
                return b.clone(this, bu, e);
            });
        },
        html: function(bw) {
            if (bw === L) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ae, "") : null;
            } else {
                if (typeof bw === "string" && !P.test(bw) && (b.support.leadingWhitespace || !ao.test(bw)) && !au[(d.exec(bw) || ["", ""])[1].toLowerCase()]) {
                    bw = bw.replace(T, "<$1></$2>");
                    try {
                        for (var bv = 0, bu = this.length; bv < bu; bv++) {
                            if (this[bv].nodeType === 1) {
                                b.cleanData(this[bv].getElementsByTagName("*"));
                                this[bv].innerHTML = bw;
                            }
                        }
                    } catch(bx) {
                        this.empty().append(bw);
                    }
                } else {
                    if (b.isFunction(bw)) {
                        this.each(function(by) {
                            var e = b(this);
                            e.html(bw.call(this, by, e.html()));
                        });
                    } else {
                        this.empty().append(bw);
                    }
                }
            }
            return this;
        },
        replaceWith: function(e) {
            if (this[0] && this[0].parentNode) {
                if (b.isFunction(e)) {
                    return this.each(function(bw) {
                        var bv = b(this),
                        bu = bv.html();
                        bv.replaceWith(e.call(this, bw, bu));
                    });
                }
                if (typeof e !== "string") {
                    e = b(e).detach();
                }
                return this.each(function() {
                    var bv = this.nextSibling,
                    bu = this.parentNode;
                    b(this).remove();
                    if (bv) {
                        b(bv).before(e);
                    } else {
                        b(bu).append(e);
                    }
                });
            } else {
                return this.length ? this.pushStack(b(b.isFunction(e) ? e() : e), "replaceWith", e) : this;
            }
        },
        detach: function(e) {
            return this.remove(e, true);
        },
        domManip: function(bA, bE, bD) {
            var bw,
            bx,
            bz,
            bC,
            bB = bA[0],
            bu = [];
            if (!b.support.checkClone && arguments.length === 3 && typeof bB === "string" && o.test(bB)) {
                return this.each(function() {
                    b(this).domManip(bA, bE, bD, true);
                });
            }
            if (b.isFunction(bB)) {
                return this.each(function(bG) {
                    var bF = b(this);
                    bA[0] = bB.call(this, bG, bE ? bF.html() : L);
                    bF.domManip(bA, bE, bD);
                });
            }
            if (this[0]) {
                bC = bB && bB.parentNode;
                if (b.support.parentNode && bC && bC.nodeType === 11 && bC.childNodes.length === this.length) {
                    bw = {
                        fragment: bC
                    };
                } else {
                    bw = b.buildFragment(bA, this, bu);
                }
                bz = bw.fragment;
                if (bz.childNodes.length === 1) {
                    bx = bz = bz.firstChild;
                } else {
                    bx = bz.firstChild;
                }
                if (bx) {
                    bE = bE && b.nodeName(bx, "tr");
                    for (var bv = 0, e = this.length, by = e - 1; bv < e; bv++) {
                        bD.call(bE ? ba(this[bv], bx) : this[bv], bw.cacheable || (e > 1 && bv < by) ? b.clone(bz, true, true) : bz);
                    }
                }
                if (bu.length) {
                    b.each(bu, bo);
                }
            }
            return this;
        }
    });
    function ba(e, bu) {
        return b.nodeName(e, "table") ? (e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody"))) : e;
    }
    function u(e, bA) {
        if (bA.nodeType !== 1 || !b.hasData(e)) {
            return;
        }
        var bz = b.expando,
        bw = b.data(e),
        bx = b.data(bA, bw);
        if ((bw = bw[bz])) {
            var bB = bw.events;
            bx = bx[bz] = b.extend({},
            bw);
            if (bB) {
                delete bx.handle;
                bx.events = {};
                for (var by in bB) {
                    for (var bv = 0, bu = bB[by].length; bv < bu; bv++) {
                        b.event.add(bA, by + (bB[by][bv].namespace ? ".": "") + bB[by][bv].namespace, bB[by][bv], bB[by][bv].data);
                    }
                }
            }
        }
    }
    function af(bu, e) {
        var bv;
        if (e.nodeType !== 1) {
            return;
        }
        if (e.clearAttributes) {
            e.clearAttributes();
        }
        if (e.mergeAttributes) {
            e.mergeAttributes(bu);
        }
        bv = e.nodeName.toLowerCase();
        if (bv === "object") {
            e.outerHTML = bu.outerHTML;
        } else {
            if (bv === "input" && (bu.type === "checkbox" || bu.type === "radio")) {
                if (bu.checked) {
                    e.defaultChecked = e.checked = bu.checked;
                }
                if (e.value !== bu.value) {
                    e.value = bu.value;
                }
            } else {
                if (bv === "option") {
                    e.selected = bu.defaultSelected;
                } else {
                    if (bv === "input" || bv === "textarea") {
                        e.defaultValue = bu.defaultValue;
                    }
                }
            }
        }
        e.removeAttribute(b.expando);
    }
    b.buildFragment = function(by, bw, bu) {
        var bx,
        e,
        bv,
        bz = (bw && bw[0] ? bw[0].ownerDocument || bw[0] : ar);
        if (by.length === 1 && typeof by[0] === "string" && by[0].length < 512 && bz === ar && by[0].charAt(0) === "<" && !P.test(by[0]) && (b.support.checkClone || !o.test(by[0]))) {
            e = true;
            bv = b.fragments[by[0]];
            if (bv && bv !== 1) {
                bx = bv;
            }
        }
        if (!bx) {
            bx = bz.createDocumentFragment();
            b.clean(by, bz, bx, bu);
        }
        if (e) {
            b.fragments[by[0]] = bv ? bx: 1;
        }
        return {
            fragment: bx,
            cacheable: e
        };
    };
    b.fragments = {};
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, bu) {
        b.fn[e] = function(bv) {
            var by = [],
            bB = b(bv),
            bA = this.length === 1 && this[0].parentNode;
            if (bA && bA.nodeType === 11 && bA.childNodes.length === 1 && bB.length === 1) {
                bB[bu](this[0]);
                return this;
            } else {
                for (var bz = 0, bw = bB.length; bz < bw; bz++) {
                    var bx = (bz > 0 ? this.clone(true) : this).get();
                    b(bB[bz])[bu](bx);
                    by = by.concat(bx);
                }
                return this.pushStack(by, e, bB.selector);
            }
        };
    });
    function be(e) {
        if ("getElementsByTagName" in e) {
            return e.getElementsByTagName("*");
        } else {
            if ("querySelectorAll" in e) {
                return e.querySelectorAll("*");
            } else {
                return [];
            }
        }
    }
    function aw(e) {
        if (e.type === "checkbox" || e.type === "radio") {
            e.defaultChecked = e.checked;
        }
    }
    function F(e) {
        if (b.nodeName(e, "input")) {
            aw(e);
        } else {
            if (e.getElementsByTagName) {
                b.grep(e.getElementsByTagName("input"), aw);
            }
        }
    }
    b.extend({
        clone: function(bx, bz, bv) {
            var by = bx.cloneNode(true),
            e,
            bu,
            bw;
            if ((!b.support.noCloneEvent || !b.support.noCloneChecked) && (bx.nodeType === 1 || bx.nodeType === 11) && !b.isXMLDoc(bx)) {
                af(bx, by);
                e = be(bx);
                bu = be(by);
                for (bw = 0; e[bw]; ++bw) {
                    af(e[bw], bu[bw]);
                }
            }
            if (bz) {
                u(bx, by);
                if (bv) {
                    e = be(bx);
                    bu = be(by);
                    for (bw = 0; e[bw]; ++bw) {
                        u(e[bw], bu[bw]);
                    }
                }
            }
            return by;
        },
        clean: function(bv, bx, bG, bz) {
            var bE;
            bx = bx || ar;
            if (typeof bx.createElement === "undefined") {
                bx = bx.ownerDocument || bx[0] && bx[0].ownerDocument || ar;
            }
            var bH = [],
            bA;
            for (var bD = 0, by; (by = bv[bD]) != null; bD++) {
                if (typeof by === "number") {
                    by += "";
                }
                if (!by) {
                    continue;
                }
                if (typeof by === "string") {
                    if (!W.test(by)) {
                        by = bx.createTextNode(by);
                    } else {
                        by = by.replace(T, "<$1></$2>");
                        var bJ = (d.exec(by) || ["", ""])[1].toLowerCase(),
                        bw = au[bJ] || au._default,
                        bC = bw[0],
                        bu = bx.createElement("div");
                        bu.innerHTML = bw[1] + by + bw[2];
                        while (bC--) {
                            bu = bu.lastChild;
                        }
                        if (!b.support.tbody) {
                            var e = x.test(by),
                            bB = bJ === "table" && !e ? bu.firstChild && bu.firstChild.childNodes: bw[1] === "<table>" && !e ? bu.childNodes: [];
                            for (bA = bB.length - 1; bA >= 0; --bA) {
                                if (b.nodeName(bB[bA], "tbody") && !bB[bA].childNodes.length) {
                                    bB[bA].parentNode.removeChild(bB[bA]);
                                }
                            }
                        }
                        if (!b.support.leadingWhitespace && ao.test(by)) {
                            bu.insertBefore(bx.createTextNode(ao.exec(by)[0]), bu.firstChild);
                        }
                        by = bu.childNodes;
                    }
                }
                var bF;
                if (!b.support.appendChecked) {
                    if (by[0] && typeof(bF = by.length) === "number") {
                        for (bA = 0; bA < bF; bA++) {
                            F(by[bA]);
                        }
                    } else {
                        F(by);
                    }
                }
                if (by.nodeType) {
                    bH.push(by);
                } else {
                    bH = b.merge(bH, by);
                }
            }
            if (bG) {
                bE = function(bK) {
                    return ! bK.type || bl.test(bK.type);
                };
                for (bD = 0; bH[bD]; bD++) {
                    if (bz && b.nodeName(bH[bD], "script") && (!bH[bD].type || bH[bD].type.toLowerCase() === "text/javascript")) {
                        bz.push(bH[bD].parentNode ? bH[bD].parentNode.removeChild(bH[bD]) : bH[bD]);
                    } else {
                        if (bH[bD].nodeType === 1) {
                            var bI = b.grep(bH[bD].getElementsByTagName("script"), bE);
                            bH.splice.apply(bH, [bD + 1, 0].concat(bI));
                        }
                        bG.appendChild(bH[bD]);
                    }
                }
            }
            return bH;
        },
        cleanData: function(bu) {
            var bx,
            bv,
            e = b.cache,
            bC = b.expando,
            bA = b.event.special,
            bz = b.support.deleteExpando;
            for (var by = 0, bw; (bw = bu[by]) != null; by++) {
                if (bw.nodeName && b.noData[bw.nodeName.toLowerCase()]) {
                    continue;
                }
                bv = bw[b.expando];
                if (bv) {
                    bx = e[bv] && e[bv][bC];
                    if (bx && bx.events) {
                        for (var bB in bx.events) {
                            if (bA[bB]) {
                                b.event.remove(bw, bB);
                            } else {
                                b.removeEvent(bw, bB, bx.handle);
                            }
                        }
                        if (bx.handle) {
                            bx.handle.elem = null;
                        }
                    }
                    if (bz) {
                        delete bw[b.expando];
                    } else {
                        if (bw.removeAttribute) {
                            bw.removeAttribute(b.expando);
                        }
                    }
                    delete e[bv];
                }
            }
        }
    });
    function bo(e, bu) {
        if (bu.src) {
            b.ajax({
                url: bu.src,
                async: false,
                dataType: "script"
            });
        } else {
            b.globalEval(bu.text || bu.textContent || bu.innerHTML || "");
        }
        if (bu.parentNode) {
            bu.parentNode.removeChild(bu);
        }
    }
    var ai = /alpha\([^)]*\)/i,
    aq = /opacity=([^)]*)/,
    aU = /-([a-z])/ig,
    A = /([A-Z]|^ms)/g,
    bc = /^-?\d+(?:px)?$/i,
    bn = /^-?\d/,
    J = /^[+\-]=/,
    ah = /[^+\-\.\de]+/g,
    a6 = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    ak = ["Left", "Right"],
    a0 = ["Top", "Bottom"],
    X,
    aG,
    aT,
    n = function(e, bu) {
        return bu.toUpperCase();
    };
    b.fn.css = function(e, bu) {
        if (arguments.length === 2 && bu === L) {
            return this;
        }
        return b.access(this, e, bu, true, 
        function(bw, bv, bx) {
            return bx !== L ? b.style(bw, bv, bx) : b.css(bw, bv);
        });
    };
    b.extend({
        cssHooks: {
            opacity: {
                get: function(bv, bu) {
                    if (bu) {
                        var e = X(bv, "opacity", "opacity");
                        return e === "" ? "1": e;
                    } else {
                        return bv.style.opacity;
                    }
                }
            }
        },
        cssNumber: {
            zIndex: true,
            fontWeight: true,
            opacity: true,
            zoom: true,
            lineHeight: true,
            widows: true,
            orphans: true
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(bw, bv, bC, bx) {
            if (!bw || bw.nodeType === 3 || bw.nodeType === 8 || !bw.style) {
                return;
            }
            var bA,
            bB,
            by = b.camelCase(bv),
            bu = bw.style,
            bD = b.cssHooks[by];
            bv = b.cssProps[by] || by;
            if (bC !== L) {
                bB = typeof bC;
                if (bB === "number" && isNaN(bC) || bC == null) {
                    return;
                }
                if (bB === "string" && J.test(bC)) {
                    bC = +bC.replace(ah, "") + parseFloat(b.css(bw, bv));
                }
                if (bB === "number" && !b.cssNumber[by]) {
                    bC += "px";
                }
                if (!bD || !("set" in bD) || (bC = bD.set(bw, bC)) !== L) {
                    try {
                        bu[bv] = bC;
                    } catch(bz) {}
                }
            } else {
                if (bD && "get" in bD && (bA = bD.get(bw, false, bx)) !== L) {
                    return bA;
                }
                return bu[bv];
            }
        },
        css: function(bx, bw, bu) {
            var bv,
            e;
            bw = b.camelCase(bw);
            e = b.cssHooks[bw];
            bw = b.cssProps[bw] || bw;
            if (bw === "cssFloat") {
                bw = "float";
            }
            if (e && "get" in e && (bv = e.get(bx, true, bu)) !== L) {
                return bv;
            } else {
                if (X) {
                    return X(bx, bw);
                }
            }
        },
        swap: function(bw, bv, bx) {
            var e = {};
            for (var bu in bv) {
                e[bu] = bw.style[bu];
                bw.style[bu] = bv[bu];
            }
            bx.call(bw);
            for (bu in bv) {
                bw.style[bu] = e[bu];
            }
        },
        camelCase: function(e) {
            return e.replace(aU, n);
        }
    });
    b.curCSS = b.css;
    b.each(["height", "width"], 
    function(bu, e) {
        b.cssHooks[e] = {
            get: function(bx, bw, bv) {
                var by;
                if (bw) {
                    if (bx.offsetWidth !== 0) {
                        by = p(bx, e, bv);
                    } else {
                        b.swap(bx, a6, 
                        function() {
                            by = p(bx, e, bv);
                        });
                    }
                    if (by <= 0) {
                        by = X(bx, e, e);
                        if (by === "0px" && aT) {
                            by = aT(bx, e, e);
                        }
                        if (by != null) {
                            return by === "" || by === "auto" ? "0px": by;
                        }
                    }
                    if (by < 0 || by == null) {
                        by = bx.style[e];
                        return by === "" || by === "auto" ? "0px": by;
                    }
                    return typeof by === "string" ? by: by + "px";
                }
            },
            set: function(bv, bw) {
                if (bc.test(bw)) {
                    bw = parseFloat(bw);
                    if (bw >= 0) {
                        return bw + "px";
                    }
                } else {
                    return bw;
                }
            }
        };
    });
    if (!b.support.opacity) {
        b.cssHooks.opacity = {
            get: function(bu, e) {
                return aq.test((e && bu.currentStyle ? bu.currentStyle.filter: bu.style.filter) || "") ? (parseFloat(RegExp.$1) / 100) + "": e ? "1": "";
            },
            set: function(bx, by) {
                var bw = bx.style,
                bu = bx.currentStyle;
                bw.zoom = 1;
                var e = b.isNaN(by) ? "": "alpha(opacity=" + by * 100 + ")",
                bv = bu && bu.filter || bw.filter || "";
                bw.filter = ai.test(bv) ? bv.replace(ai, e) : bv + " " + e;
            }
        };
    }
    b(function() {
        if (!b.support.reliableMarginRight) {
            b.cssHooks.marginRight = {
                get: function(bv, bu) {
                    var e;
                    b.swap(bv, {
                        display: "inline-block"
                    },
                    function() {
                        if (bu) {
                            e = X(bv, "margin-right", "marginRight");
                        } else {
                            e = bv.style.marginRight;
                        }
                    });
                    return e;
                }
            };
        }
    });
    if (ar.defaultView && ar.defaultView.getComputedStyle) {
        aG = function(bx, bv) {
            var bu,
            bw,
            e;
            bv = bv.replace(A, "-$1").toLowerCase();
            if (! (bw = bx.ownerDocument.defaultView)) {
                return L;
            }
            if ((e = bw.getComputedStyle(bx, null))) {
                bu = e.getPropertyValue(bv);
                if (bu === "" && !b.contains(bx.ownerDocument.documentElement, bx)) {
                    bu = b.style(bx, bv);
                }
            }
            return bu;
        };
    }
    if (ar.documentElement.currentStyle) {
        aT = function(bx, bv) {
            var by,
            bu = bx.currentStyle && bx.currentStyle[bv],
            e = bx.runtimeStyle && bx.runtimeStyle[bv],
            bw = bx.style;
            if (!bc.test(bu) && bn.test(bu)) {
                by = bw.left;
                if (e) {
                    bx.runtimeStyle.left = bx.currentStyle.left;
                }
                bw.left = bv === "fontSize" ? "1em": (bu || 0);
                bu = bw.pixelLeft + "px";
                bw.left = by;
                if (e) {
                    bx.runtimeStyle.left = e;
                }
            }
            return bu === "" ? "auto": bu;
        };
    }
    X = aG || aT;
    function p(bv, bu, e) {
        var bx = bu === "width" ? ak: a0,
        bw = bu === "width" ? bv.offsetWidth: bv.offsetHeight;
        if (e === "border") {
            return bw;
        }
        b.each(bx, 
        function() {
            if (!e) {
                bw -= parseFloat(b.css(bv, "padding" + this)) || 0;
            }
            if (e === "margin") {
                bw += parseFloat(b.css(bv, "margin" + this)) || 0;
            } else {
                bw -= parseFloat(b.css(bv, "border" + this + "Width")) || 0;
            }
        });
        return bw;
    }
    if (b.expr && b.expr.filters) {
        b.expr.filters.hidden = function(bv) {
            var bu = bv.offsetWidth,
            e = bv.offsetHeight;
            return (bu === 0 && e === 0) || (!b.support.reliableHiddenOffsets && (bv.style.display || b.css(bv, "display")) === "none");
        };
        b.expr.filters.visible = function(e) {
            return ! b.expr.filters.hidden(e);
        };
    }
    var j = /%20/g,
    am = /\[\]$/,
    bs = /\r?\n/g,
    bq = /#.*$/,
    aA = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    aX = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    aK = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/,
    aM = /^(?:GET|HEAD)$/,
    c = /^\/\//,
    M = /\?/,
    a5 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    r = /^(?:select|textarea)/i,
    h = /\s+/,
    br = /([?&])_=[^&]*/,
    K = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    B = b.fn.load,
    Y = {},
    s = {},
    aB,
    t;
    try {
        aB = bk.href;
    } catch(at) {
        aB = ar.createElement("a");
        aB.href = "";
        aB = aB.href;
    }
    t = K.exec(aB.toLowerCase()) || [];
    function f(e) {
        return function(bx, bz) {
            if (typeof bx !== "string") {
                bz = bx;
                bx = "*";
            }
            if (b.isFunction(bz)) {
                var bw = bx.toLowerCase().split(h),
                bv = 0,
                by = bw.length,
                bu,
                bA,
                bB;
                for (; bv < by; bv++) {
                    bu = bw[bv];
                    bB = /^\+/.test(bu);
                    if (bB) {
                        bu = bu.substr(1) || "*";
                    }
                    bA = e[bu] = e[bu] || [];
                    bA[bB ? "unshift": "push"](bz);
                }
            }
        };
    }
    function aR(bu, bD, by, bC, bA, bw) {
        bA = bA || bD.dataTypes[0];
        bw = bw || {};
        bw[bA] = true;
        var bz = bu[bA],
        bv = 0,
        e = bz ? bz.length: 0,
        bx = (bu === Y),
        bB;
        for (; bv < e && (bx || !bB); bv++) {
            bB = bz[bv](bD, by, bC);
            if (typeof bB === "string") {
                if (!bx || bw[bB]) {
                    bB = L;
                } else {
                    bD.dataTypes.unshift(bB);
                    bB = aR(bu, bD, by, bC, bB, bw);
                }
            }
        }
        if ((bx || !bB) && !bw["*"]) {
            bB = aR(bu, bD, by, bC, "*", bw);
        }
        return bB;
    }
    b.fn.extend({
        load: function(bv, by, bz) {
            if (typeof bv !== "string" && B) {
                return B.apply(this, arguments);
            } else {
                if (!this.length) {
                    return this;
                }
            }
            var bx = bv.indexOf(" ");
            if (bx >= 0) {
                var e = bv.slice(bx, bv.length);
                bv = bv.slice(0, bx);
            }
            var bw = "GET";
            if (by) {
                if (b.isFunction(by)) {
                    bz = by;
                    by = L;
                } else {
                    if (typeof by === "object") {
                        by = b.param(by, b.ajaxSettings.traditional);
                        bw = "POST";
                    }
                }
            }
            var bu = this;
            b.ajax({
                url: bv,
                type: bw,
                dataType: "html",
                data: by,
                complete: function(bB, bA, bC) {
                    bC = bB.responseText;
                    if (bB.isResolved()) {
                        bB.done(function(bD) {
                            bC = bD;
                        });
                        bu.html(e ? b("<div>").append(bC.replace(a5, "")).find(e) : bC);
                    }
                    if (bz) {
                        bu.each(bz, [bC, bA, bB]);
                    }
                }
            });
            return this;
        },
        serialize: function() {
            return b.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? b.makeArray(this.elements) : this;
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || r.test(this.nodeName) || aX.test(this.type));
            }).map(function(e, bu) {
                var bv = b(this).val();
                return bv == null ? null: b.isArray(bv) ? b.map(bv, 
                function(bx, bw) {
                    return {
                        name: bu.name,
                        value: bx.replace(bs, "\r\n")
                    };
                }) : {
                    name: bu.name,
                    value: bv.replace(bs, "\r\n")
                };
            }).get();
        }
    });
    b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), 
    function(e, bu) {
        b.fn[bu] = function(bv) {
            return this.bind(bu, bv);
        };
    });
    b.each(["get", "post"], 
    function(e, bu) {
        b[bu] = function(bv, bx, by, bw) {
            if (b.isFunction(bx)) {
                bw = bw || by;
                by = bx;
                bx = L;
            }
            return b.ajax({
                type: bu,
                url: bv,
                data: bx,
                success: by,
                dataType: bw
            });
        };
    });
    b.extend({
        getScript: function(e, bu) {
            return b.get(e, L, bu, "script");
        },
        getJSON: function(e, bu, bv) {
            return b.get(e, bu, bv, "json");
        },
        ajaxSetup: function(bv, e) {
            if (!e) {
                e = bv;
                bv = b.extend(true, b.ajaxSettings, e);
            } else {
                b.extend(true, bv, b.ajaxSettings, e);
            }
            for (var bu in {
                context: 1,
                url: 1
            }) {
                if (bu in e) {
                    bv[bu] = e[bu];
                } else {
                    if (bu in b.ajaxSettings) {
                        bv[bu] = b.ajaxSettings[bu];
                    }
                }
            }
            return bv;
        },
        ajaxSettings: {
            url: aB,
            isLocal: aK.test(t[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
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
                "* text": bb.String,
                "text html": true,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            }
        },
        ajaxPrefilter: f(Y),
        ajaxTransport: f(s),
        ajax: function(by, bw) {
            if (typeof by === "object") {
                bw = by;
                by = L;
            }
            bw = bw || {};
            var bC = b.ajaxSetup({},
            bw),
            bR = bC.context || bC,
            bF = bR !== bC && (bR.nodeType || bR instanceof b) ? b(bR) : b.event,
            bQ = b.Deferred(),
            bM = b._Deferred(),
            bA = bC.statusCode || {},
            bB,
            bG = {},
            bN = {},
            bP,
            bx,
            bK,
            bD,
            bH,
            bz = 0,
            bv,
            bJ,
            bI = {
                readyState: 0,
                setRequestHeader: function(bS, bT) {
                    if (!bz) {
                        var e = bS.toLowerCase();
                        bS = bN[e] = bN[e] || bS;
                        bG[bS] = bT;
                    }
                    return this;
                },
                getAllResponseHeaders: function() {
                    return bz === 2 ? bP: null;
                },
                getResponseHeader: function(bS) {
                    var e;
                    if (bz === 2) {
                        if (!bx) {
                            bx = {};
                            while ((e = aA.exec(bP))) {
                                bx[e[1].toLowerCase()] = e[2];
                            }
                        }
                        e = bx[bS.toLowerCase()];
                    }
                    return e === L ? null: e;
                },
                overrideMimeType: function(e) {
                    if (!bz) {
                        bC.mimeType = e;
                    }
                    return this;
                },
                abort: function(e) {
                    e = e || "abort";
                    if (bK) {
                        bK.abort(e);
                    }
                    bE(0, e);
                    return this;
                }
            };
            function bE(bX, bV, bY, bU) {
                if (bz === 2) {
                    return;
                }
                bz = 2;
                if (bD) {
                    clearTimeout(bD);
                }
                bK = L;
                bP = bU || "";
                bI.readyState = bX ? 4: 0;
                var bS,
                b2,
                b1,
                bW = bY ? bi(bC, bI, bY) : L,
                bT,
                b0;
                if (bX >= 200 && bX < 300 || bX === 304) {
                    if (bC.ifModified) {
                        if ((bT = bI.getResponseHeader("Last-Modified"))) {
                            b.lastModified[bB] = bT;
                        }
                        if ((b0 = bI.getResponseHeader("Etag"))) {
                            b.etag[bB] = b0;
                        }
                    }
                    if (bX === 304) {
                        bV = "notmodified";
                        bS = true;
                    } else {
                        try {
                            b2 = G(bC, bW);
                            bV = "success";
                            bS = true;
                        } catch(bZ) {
                            bV = "parsererror";
                            b1 = bZ;
                        }
                    }
                } else {
                    b1 = bV;
                    if (!bV || bX) {
                        bV = "error";
                        if (bX < 0) {
                            bX = 0;
                        }
                    }
                }
                bI.status = bX;
                bI.statusText = bV;
                if (bS) {
                    bQ.resolveWith(bR, [b2, bV, bI]);
                } else {
                    bQ.rejectWith(bR, [bI, bV, b1]);
                }
                bI.statusCode(bA);
                bA = L;
                if (bv) {
                    bF.trigger("ajax" + (bS ? "Success": "Error"), [bI, bC, bS ? b2: b1]);
                }
                bM.resolveWith(bR, [bI, bV]);
                if (bv) {
                    bF.trigger("ajaxComplete", [bI, bC]);
                    if (! (--b.active)) {
                        b.event.trigger("ajaxStop");
                    }
                }
            }
            bQ.promise(bI);
            bI.success = bI.done;
            bI.error = bI.fail;
            bI.complete = bM.done;
            bI.statusCode = function(bS) {
                if (bS) {
                    var e;
                    if (bz < 2) {
                        for (e in bS) {
                            bA[e] = [bA[e], bS[e]];
                        }
                    } else {
                        e = bS[bI.status];
                        bI.then(e, e);
                    }
                }
                return this;
            };
            bC.url = ((by || bC.url) + "").replace(bq, "").replace(c, t[1] + "//");
            bC.dataTypes = b.trim(bC.dataType || "*").toLowerCase().split(h);
            if (bC.crossDomain == null) {
                bH = K.exec(bC.url.toLowerCase());
                bC.crossDomain = !!(bH && (bH[1] != t[1] || bH[2] != t[2] || (bH[3] || (bH[1] === "http:" ? 80: 443)) != (t[3] || (t[1] === "http:" ? 80: 443))));
            }
            if (bC.data && bC.processData && typeof bC.data !== "string") {
                bC.data = b.param(bC.data, bC.traditional);
            }
            aR(Y, bC, bw, bI);
            if (bz === 2) {
                return false;
            }
            bv = bC.global;
            bC.type = bC.type.toUpperCase();
            bC.hasContent = !aM.test(bC.type);
            if (bv && b.active++===0) {
                b.event.trigger("ajaxStart");
            }
            if (!bC.hasContent) {
                if (bC.data) {
                    bC.url += (M.test(bC.url) ? "&": "?") + bC.data;
                }
                bB = bC.url;
                if (bC.cache === false) {
                    var bu = b.now(),
                    bO = bC.url.replace(br, "$1_=" + bu);
                    bC.url = bO + ((bO === bC.url) ? (M.test(bC.url) ? "&": "?") + "_=" + bu: "");
                }
            }
            if (bC.data && bC.hasContent && bC.contentType !== false || bw.contentType) {
                bI.setRequestHeader("Content-Type", bC.contentType);
            }
            if (bC.ifModified) {
                bB = bB || bC.url;
                if (b.lastModified[bB]) {
                    bI.setRequestHeader("If-Modified-Since", b.lastModified[bB]);
                }
                if (b.etag[bB]) {
                    bI.setRequestHeader("If-None-Match", b.etag[bB]);
                }
            }
            bI.setRequestHeader("Accept", bC.dataTypes[0] && bC.accepts[bC.dataTypes[0]] ? bC.accepts[bC.dataTypes[0]] + (bC.dataTypes[0] !== "*" ? ", */*; q=0.01": "") : bC.accepts["*"]);
            for (bJ in bC.headers) {
                bI.setRequestHeader(bJ, bC.headers[bJ]);
            }
            if (bC.beforeSend && (bC.beforeSend.call(bR, bI, bC) === false || bz === 2)) {
                bI.abort();
                return false;
            }
            for (bJ in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                bI[bJ](bC[bJ]);
            }
            bK = aR(s, bC, bw, bI);
            if (!bK) {
                bE( - 1, "No Transport");
            } else {
                bI.readyState = 1;
                if (bv) {
                    bF.trigger("ajaxSend", [bI, bC]);
                }
                if (bC.async && bC.timeout > 0) {
                    bD = setTimeout(function() {
                        bI.abort("timeout");
                    },
                    bC.timeout);
                }
                try {
                    bz = 1;
                    bK.send(bG, bE);
                } catch(bL) {
                    if (status < 2) {
                        bE( - 1, bL);
                    } else {
                        b.error(bL);
                    }
                }
            }
            return bI;
        },
        param: function(e, bv) {
            var bu = [],
            bx = function(by, bz) {
                bz = b.isFunction(bz) ? bz() : bz;
                bu[bu.length] = encodeURIComponent(by) + "=" + encodeURIComponent(bz);
            };
            if (bv === L) {
                bv = b.ajaxSettings.traditional;
            }
            if (b.isArray(e) || (e.jquery && !b.isPlainObject(e))) {
                b.each(e, 
                function() {
                    bx(this.name, this.value);
                });
            } else {
                for (var bw in e) {
                    w(bw, e[bw], bv, bx);
                }
            }
            return bu.join("&").replace(j, "+");
        }
    });
    function w(bv, bx, bu, bw) {
        if (b.isArray(bx)) {
            b.each(bx, 
            function(bz, by) {
                if (bu || am.test(bv)) {
                    bw(bv, by);
                } else {
                    w(bv + "[" + (typeof by === "object" || b.isArray(by) ? bz: "") + "]", by, bu, bw);
                }
            });
        } else {
            if (!bu && bx != null && typeof bx === "object") {
                for (var e in bx) {
                    w(bv + "[" + e + "]", bx[e], bu, bw);
                }
            } else {
                bw(bv, bx);
            }
        }
    }
    b.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    function bi(bC, bB, by) {
        var bu = bC.contents,
        bA = bC.dataTypes,
        bv = bC.responseFields,
        bx,
        bz,
        bw,
        e;
        for (bz in bv) {
            if (bz in by) {
                bB[bv[bz]] = by[bz];
            }
        }
        while (bA[0] === "*") {
            bA.shift();
            if (bx === L) {
                bx = bC.mimeType || bB.getResponseHeader("content-type");
            }
        }
        if (bx) {
            for (bz in bu) {
                if (bu[bz] && bu[bz].test(bx)) {
                    bA.unshift(bz);
                    break;
                }
            }
        }
        if (bA[0] in by) {
            bw = bA[0];
        } else {
            for (bz in by) {
                if (!bA[0] || bC.converters[bz + " " + bA[0]]) {
                    bw = bz;
                    break;
                }
                if (!e) {
                    e = bz;
                }
            }
            bw = bw || e;
        }
        if (bw) {
            if (bw !== bA[0]) {
                bA.unshift(bw);
            }
            return by[bw];
        }
    }
    function G(bG, by) {
        if (bG.dataFilter) {
            by = bG.dataFilter(by, bG.dataType);
        }
        var bC = bG.dataTypes,
        bF = {},
        bz,
        bD,
        bv = bC.length,
        bA,
        bB = bC[0],
        bw,
        bx,
        bE,
        bu,
        e;
        for (bz = 1; bz < bv; bz++) {
            if (bz === 1) {
                for (bD in bG.converters) {
                    if (typeof bD === "string") {
                        bF[bD.toLowerCase()] = bG.converters[bD];
                    }
                }
            }
            bw = bB;
            bB = bC[bz];
            if (bB === "*") {
                bB = bw;
            } else {
                if (bw !== "*" && bw !== bB) {
                    bx = bw + " " + bB;
                    bE = bF[bx] || bF["* " + bB];
                    if (!bE) {
                        e = L;
                        for (bu in bF) {
                            bA = bu.split(" ");
                            if (bA[0] === bw || bA[0] === "*") {
                                e = bF[bA[1] + " " + bB];
                                if (e) {
                                    bu = bF[bu];
                                    if (bu === true) {
                                        bE = e;
                                    } else {
                                        if (e === true) {
                                            bE = bu;
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (! (bE || e)) {
                        b.error("No conversion from " + bx.replace(" ", " to "));
                    }
                    if (bE !== true) {
                        by = bE ? bE(by) : e(bu(by));
                    }
                }
            }
        }
        return by;
    }
    var az = b.now(),
    v = /(\=)\?(&|$)|\?\?/i;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return b.expando + "_" + (az++);
        }
    });
    b.ajaxPrefilter("json jsonp", 
    function(bC, bz, bB) {
        var bw = bC.contentType === "application/x-www-form-urlencoded" && (typeof bC.data === "string");
        if (bC.dataTypes[0] === "jsonp" || bC.jsonp !== false && (v.test(bC.url) || bw && v.test(bC.data))) {
            var bA,
            bv = bC.jsonpCallback = b.isFunction(bC.jsonpCallback) ? bC.jsonpCallback() : bC.jsonpCallback,
            by = bb[bv],
            e = bC.url,
            bx = bC.data,
            bu = "$1" + bv + "$2";
            if (bC.jsonp !== false) {
                e = e.replace(v, bu);
                if (bC.url === e) {
                    if (bw) {
                        bx = bx.replace(v, bu);
                    }
                    if (bC.data === bx) {
                        e += (/\?/.test(e) ? "&": "?") + bC.jsonp + "=" + bv;
                    }
                }
            }
            bC.url = e;
            bC.data = bx;
            bb[bv] = function(bD) {
                bA = [bD];
            };
            bB.always(function() {
                bb[bv] = by;
                if (bA && b.isFunction(by)) {
                    bb[bv](bA[0]);
                }
            });
            bC.converters["script json"] = function() {
                if (!bA) {
                    b.error(bv + " was not called");
                }
                return bA[0];
            };
            bC.dataTypes[0] = "json";
            return "script";
        }
    });
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                b.globalEval(e);
                return e;
            }
        }
    });
    b.ajaxPrefilter("script", 
    function(e) {
        if (e.cache === L) {
            e.cache = false;
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false;
        }
    });
    b.ajaxTransport("script", 
    function(bv) {
        if (bv.crossDomain) {
            var e,
            bu = ar.head || ar.getElementsByTagName("head")[0] || ar.documentElement;
            return {
                send: function(bw, bx) {
                    e = ar.createElement("script");
                    e.async = "async";
                    if (bv.scriptCharset) {
                        e.charset = bv.scriptCharset;
                    }
                    e.src = bv.url;
                    e.onload = e.onreadystatechange = function(bz, by) {
                        if (by || !e.readyState || /loaded|complete/.test(e.readyState)) {
                            e.onload = e.onreadystatechange = null;
                            if (bu && e.parentNode) {
                                bu.removeChild(e);
                            }
                            e = L;
                            if (!by) {
                                bx(200, "success");
                            }
                        }
                    };
                    bu.insertBefore(e, bu.firstChild);
                },
                abort: function() {
                    if (e) {
                        e.onload(0, 1);
                    }
                }
            };
        }
    });
    var C = bb.ActiveXObject ? 
    function() {
        for (var e in N) {
            N[e](0, 1);
        }
    }: false,
    z = 0,
    N;
    function aJ() {
        try {
            return new bb.XMLHttpRequest();
        } catch(bu) {}
    }
    function ag() {
        try {
            return new bb.ActiveXObject("Microsoft.XMLHTTP");
        } catch(bu) {}
    }
    b.ajaxSettings.xhr = bb.ActiveXObject ? 
    function() {
        return ! this.isLocal && aJ() || ag();
    }: aJ; (function(e) {
        b.extend(b.support, {
            ajax: !!e,
            cors: !!e && ("withCredentials" in e)
        });
    })(b.ajaxSettings.xhr());
    if (b.support.ajax) {
        b.ajaxTransport(function(e) {
            if (!e.crossDomain || b.support.cors) {
                var bu;
                return {
                    send: function(bA, bv) {
                        var bz = e.xhr(),
                        by,
                        bx;
                        if (e.username) {
                            bz.open(e.type, e.url, e.async, e.username, e.password);
                        } else {
                            bz.open(e.type, e.url, e.async);
                        }
                        if (e.xhrFields) {
                            for (bx in e.xhrFields) {
                                bz[bx] = e.xhrFields[bx];
                            }
                        }
                        if (e.mimeType && bz.overrideMimeType) {
                            bz.overrideMimeType(e.mimeType);
                        }
                        if (!e.crossDomain && !bA["X-Requested-With"]) {
                            bA["X-Requested-With"] = "XMLHttpRequest";
                        }
                        try {
                            for (bx in bA) {
                                bz.setRequestHeader(bx, bA[bx]);
                            }
                        } catch(bw) {}
                        bz.send((e.hasContent && e.data) || null);

                        bu = function(bJ, bD) {
                            var bE,
                            bC,
                            bB,
                            bH,
                            bG;
                            try {
                                if (bu && (bD || bz.readyState === 4)) {
                                    bu = L;
                                    if (by) {
                                        bz.onreadystatechange = b.noop;
                                        if (C) {
                                            delete N[by];
                                        }
                                    }
                                    if (bD) {
                                        if (bz.readyState !== 4) {
                                            bz.abort();
                                        }
                                    } else {
                                        bE = bz.status;
                                        bB = bz.getAllResponseHeaders();
                                        bH = {};
                                        bG = bz.responseXML;
                                        if (bG && bG.documentElement) {
                                            bH.xml = bG;
                                        }
                                        bH.text = bz.responseText;
                                        try {
                                            bC = bz.statusText;
                                        } catch(bI) {
                                            bC = "";
                                        }
                                        if (!bE && e.isLocal && !e.crossDomain) {
                                            bE = bH.text ? 200: 404;
                                        } else {
                                            if (bE === 1223) {
                                                bE = 204;
                                            }
                                        }
                                    }
                                }
                            } catch(bF) {
                                if (!bD) {
                                    bv( - 1, bF);
                                }
                            }
                            if (bH) {
                                bv(bE, bC, bH, bB);
                            }
                        };
                        if (!e.async || bz.readyState === 4) {
                            bu();
                        } else {
                            by = ++z;
                            if (C) {
                                if (!N) {
                                    N = {};
                                    b(bb).unload(C);
                                }
                                N[by] = bu;
                            }
                            bz.onreadystatechange = bu;
                        }
                    },
                    abort: function() {
                        if (bu) {
                            bu(0, 1);
                        }
                    }
                };
            }
        });
    }
    var R = {},
    a8,
    m,
    ay = /^(?:toggle|show|hide)$/,
    aO = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    a1,
    aF = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
    a3,
    S = bb.webkitRequestAnimationFrame || bb.mozRequestAnimationFrame || bb.oRequestAnimationFrame;
    b.fn.extend({
        show: function(bw, bz, by) {
            var bv,
            bx;
            if (bw || bw === 0) {
                return this.animate(aZ("show", 3), bw, bz, by);
            } else {
                for (var bu = 0, e = this.length; bu < e; bu++) {
                    bv = this[bu];
                    if (bv.style) {
                        bx = bv.style.display;
                        if (!b._data(bv, "olddisplay") && bx === "none") {
                            bx = bv.style.display = "";
                        }
                        if (bx === "" && b.css(bv, "display") === "none") {
                            b._data(bv, "olddisplay", y(bv.nodeName));
                        }
                    }
                }
                for (bu = 0; bu < e; bu++) {
                    bv = this[bu];
                    if (bv.style) {
                        bx = bv.style.display;
                        if (bx === "" || bx === "none") {
                            bv.style.display = b._data(bv, "olddisplay") || "";
                        }
                    }
                }
                return this;
            }
        },
        hide: function(bv, by, bx) {
            if (bv || bv === 0) {
                return this.animate(aZ("hide", 3), bv, by, bx);
            } else {
                for (var bu = 0, e = this.length; bu < e; bu++) {
                    if (this[bu].style) {
                        var bw = b.css(this[bu], "display");
                        if (bw !== "none" && !b._data(this[bu], "olddisplay")) {
                            b._data(this[bu], "olddisplay", bw);
                        }
                    }
                }
                for (bu = 0; bu < e; bu++) {
                    if (this[bu].style) {
                        this[bu].style.display = "none";
                    }
                }
                return this;
            }
        },
        _toggle: b.fn.toggle,
        toggle: function(bv, bu, bw) {
            var e = typeof bv === "boolean";
            if (b.isFunction(bv) && b.isFunction(bu)) {
                this._toggle.apply(this, arguments);
            } else {
                if (bv == null || e) {
                    this.each(function() {
                        var bx = e ? bv: b(this).is(":hidden");
                        b(this)[bx ? "show": "hide"]();
                    });
                } else {
                    this.animate(aZ("toggle", 3), bv, bu, bw);
                }
            }
            return this;
        },
        fadeTo: function(e, bw, bv, bu) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: bw
            },
            e, bv, bu);
        },
        animate: function(bx, bu, bw, bv) {
            var e = b.speed(bu, bw, bv);
            if (b.isEmptyObject(bx)) {
                return this.each(e.complete, [false]);
            }
            bx = b.extend({},
            bx);
            return this[e.queue === false ? "each": "queue"](function() {
                if (e.queue === false) {
                    b._mark(this);
                }
                var bB = b.extend({},
                e),
                bI = this.nodeType === 1,
                bF = bI && b(this).is(":hidden"),
                by,
                bC,
                bA,
                bH,
                bG,
                bE,
                bz,
                bD,
                bJ;
                bB.animatedProperties = {};
                for (bA in bx) {
                    by = b.camelCase(bA);
                    if (bA !== by) {
                        bx[by] = bx[bA];
                        delete bx[bA];
                    }
                    bC = bx[by];
                    if (b.isArray(bC)) {
                        bB.animatedProperties[by] = bC[1];
                        bC = bx[by] = bC[0];
                    } else {
                        bB.animatedProperties[by] = bB.specialEasing && bB.specialEasing[by] || bB.easing || "swing";
                    }
                    if (bC === "hide" && bF || bC === "show" && !bF) {
                        return bB.complete.call(this);
                    }
                    if (bI && (by === "height" || by === "width")) {
                        bB.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (b.css(this, "display") === "inline" && b.css(this, "float") === "none") {
                            if (!b.support.inlineBlockNeedsLayout) {
                                this.style.display = "inline-block";
                            } else {
                                bH = y(this.nodeName);
                                if (bH === "inline") {
                                    this.style.display = "inline-block";
                                } else {
                                    this.style.display = "inline";
                                    this.style.zoom = 1;
                                }
                            }
                        }
                    }
                }
                if (bB.overflow != null) {
                    this.style.overflow = "hidden";
                }
                for (bA in bx) {
                    bG = new b.fx(this, bB, bA);
                    bC = bx[bA];
                    if (ay.test(bC)) {
                        bG[bC === "toggle" ? bF ? "show": "hide": bC]();
                    } else {
                        bE = aO.exec(bC);
                        bz = bG.cur();
                        if (bE) {
                            bD = parseFloat(bE[2]);
                            bJ = bE[3] || (b.cssNumber[bA] ? "": "px");
                            if (bJ !== "px") {
                                b.style(this, bA, (bD || 1) + bJ);
                                bz = ((bD || 1) / bG.cur()) * bz;
                                b.style(this, bA, bz + bJ);
                            }
                            if (bE[1]) {
                                bD = ((bE[1] === "-=" ? -1: 1) * bD) + bz;
                            }
                            bG.custom(bz, bD, bJ);
                        } else {
                            bG.custom(bz, bC, "");
                        }
                    }
                }
                return true;
            });
        },
        stop: function(bu, e) {
            if (bu) {
                this.queue([]);
            }
            this.each(function() {
                var bw = b.timers,
                bv = bw.length;
                if (!e) {
                    b._unmark(true, this);
                }
                while (bv--) {
                    if (bw[bv].elem === this) {
                        if (e) {
                            bw[bv](true);
                        }
                        bw.splice(bv, 1);
                    }
                }
            });
            if (!e) {
                this.dequeue();
            }
            return this;
        }
    });
    function bf() {
        setTimeout(ap, 0);
        return (a3 = b.now());
    }
    function ap() {
        a3 = L;
    }
    function aZ(bu, e) {
        var bv = {};
        b.each(aF.concat.apply([], aF.slice(0, e)), 
        function() {
            bv[this] = bu;
        });
        return bv;
    }
    b.each({
        slideDown: aZ("show", 1),
        slideUp: aZ("hide", 1),
        slideToggle: aZ("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, bu) {
        b.fn[e] = function(bv, bx, bw) {
            return this.animate(bu, bv, bx, bw);
        };
    });
    b.extend({
        speed: function(bv, bw, bu) {
            var e = bv && typeof bv === "object" ? b.extend({},
            bv) : {
                complete: bu || !bu && bw || b.isFunction(bv) && bv,
                duration: bv,
                easing: bu && bw || bw && !b.isFunction(bw) && bw
            };
            e.duration = b.fx.off ? 0: typeof e.duration === "number" ? e.duration: e.duration in b.fx.speeds ? b.fx.speeds[e.duration] : b.fx.speeds._default;
            e.old = e.complete;
            e.complete = function(bx) {
                if (e.queue !== false) {
                    b.dequeue(this);
                } else {
                    if (bx !== false) {
                        b._unmark(this);
                    }
                }
                if (b.isFunction(e.old)) {
                    e.old.call(this);
                }
            };
            return e;
        },
        easing: {
            linear: function(bv, bw, e, bu) {
                return e + bu * bv;
            },
            swing: function(bv, bw, e, bu) {
                return (( - Math.cos(bv * Math.PI) / 2) + 0.5) * bu + e;
            }
        },
        timers: [],
        fx: function(bu, e, bv) {
            this.options = e;
            this.elem = bu;
            this.prop = bv;
            e.orig = e.orig || {};
        }
    });
    b.fx.prototype = {
        update: function() {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            } (b.fx.step[this.prop] || b.fx.step._default)(this);
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop];
            }
            var e,
            bu = b.css(this.elem, this.prop);
            return isNaN(e = parseFloat(bu)) ? !bu || bu === "auto" ? 0: bu: e;
        },
        custom: function(bz, by, bw) {
            var e = this,
            bv = b.fx,
            bx;
            this.startTime = a3 || bf();
            this.start = bz;
            this.end = by;
            this.unit = bw || this.unit || (b.cssNumber[this.prop] ? "": "px");
            this.now = this.start;
            this.pos = this.state = 0;
            function bu(bA) {
                return e.step(bA);
            }
            bu.elem = this.elem;
            if (bu() && b.timers.push(bu) && !a1) {
                if (S) {
                    a1 = 1;
                    bx = function() {
                        if (a1) {
                            S(bx);
                            bv.tick();
                        }
                    };
                    S(bx);
                } else {
                    a1 = setInterval(bv.tick, bv.interval);
                }
            }
        },
        show: function() {
            this.options.orig[this.prop] = b.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1: 0, this.cur());
            b(this.elem).show();
        },
        hide: function() {
            this.options.orig[this.prop] = b.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0);
        },
        step: function(bx) {
            var bw = a3 || bf(),
            e = true,
            by = this.elem,
            bu = this.options,
            bv,
            bA;
            if (bx || bw >= bu.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                bu.animatedProperties[this.prop] = true;
                for (bv in bu.animatedProperties) {
                    if (bu.animatedProperties[bv] !== true) {
                        e = false;
                    }
                }
                if (e) {
                    if (bu.overflow != null && !b.support.shrinkWrapBlocks) {
                        b.each(["", "X", "Y"], 
                        function(bB, bC) {
                            by.style["overflow" + bC] = bu.overflow[bB];
                        });
                    }
                    if (bu.hide) {
                        b(by).hide();
                    }
                    if (bu.hide || bu.show) {
                        for (var bz in bu.animatedProperties) {
                            b.style(by, bz, bu.orig[bz]);
                        }
                    }
                    bu.complete.call(by);
                }
                return false;
            } else {
                if (bu.duration == Infinity) {
                    this.now = bw;
                } else {
                    bA = bw - this.startTime;
                    this.state = bA / bu.duration;
                    this.pos = b.easing[bu.animatedProperties[this.prop]](this.state, bA, 0, 1, bu.duration);
                    this.now = this.start + ((this.end - this.start) * this.pos);
                }
                this.update();
            }
            return true;
        }
    };
    b.extend(b.fx, {
        tick: function() {
            for (var bu = b.timers, e = 0; e < bu.length; ++e) {
                if (!bu[e]()) {
                    bu.splice(e--, 1);
                }
            }
            if (!bu.length) {
                b.fx.stop();
            }
        },
        interval: 13,
        stop: function() {
            clearInterval(a1);
            a1 = null;
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                b.style(e.elem, "opacity", e.now);
            },
            _default: function(e) {
                if (e.elem.style && e.elem.style[e.prop] != null) {
                    e.elem.style[e.prop] = (e.prop === "width" || e.prop === "height" ? Math.max(0, e.now) : e.now) + e.unit;
                } else {
                    e.elem[e.prop] = e.now;
                }
            }
        }
    });
    if (b.expr && b.expr.filters) {
        b.expr.filters.animated = function(e) {
            return b.grep(b.timers, 
            function(bu) {
                return e === bu.elem;
            }).length;
        };
    }
    function y(bv) {
        if (!R[bv]) {
            var e = b("<" + bv + ">").appendTo("body"),
            bu = e.css("display");
            e.remove();
            if (bu === "none" || bu === "") {
                if (!a8) {
                    a8 = ar.createElement("iframe");
                    a8.frameBorder = a8.width = a8.height = 0;
                }
                ar.body.appendChild(a8);
                if (!m || !a8.createElement) {
                    m = (a8.contentWindow || a8.contentDocument).document;
                    m.write("<!doctype><html><body></body></html>");
                }
                e = m.createElement(bv);
                m.body.appendChild(e);
                bu = b.css(e, "display");
                ar.body.removeChild(a8);
            }
            R[bv] = bu;
        }
        return R[bv];
    }
    var V = /^t(?:able|d|h)$/i,
    ab = /^(?:body|html)$/i;
    if ("getBoundingClientRect" in ar.documentElement) {
        b.fn.offset = function(bH) {
            var bx = this[0],
            bA;
            if (bH) {
                return this.each(function(e) {
                    b.offset.setOffset(this, bH, e);
                });
            }
            if (!bx || !bx.ownerDocument) {
                return null;
            }
            if (bx === bx.ownerDocument.body) {
                return b.offset.bodyOffset(bx);
            }
            try {
                bA = bx.getBoundingClientRect();
            } catch(bE) {}
            var bG = bx.ownerDocument,
            bv = bG.documentElement;
            if (!bA || !b.contains(bv, bx)) {
                return bA ? {
                    top: bA.top,
                    left: bA.left
                }: {
                    top: 0,
                    left: 0
                };
            }
            var bB = bG.body,
            bC = aI(bG),
            bz = bv.clientTop || bB.clientTop || 0,
            bD = bv.clientLeft || bB.clientLeft || 0,

            bu = bC.pageYOffset || b.support.boxModel && bv.scrollTop || bB.scrollTop,
            by = bC.pageXOffset || b.support.boxModel && bv.scrollLeft || bB.scrollLeft,
            bF = bA.top + bu - bz,
            bw = bA.left + by - bD;
            return {
                top: bF,
                left: bw
            };
        };
    } else {
        b.fn.offset = function(bE) {
            var by = this[0];
            if (bE) {
                return this.each(function(bF) {
                    b.offset.setOffset(this, bE, bF);
                });
            }
            if (!by || !by.ownerDocument) {
                return null;
            }
            if (by === by.ownerDocument.body) {
                return b.offset.bodyOffset(by);
            }
            b.offset.initialize();
            var bB,
            bv = by.offsetParent,
            bu = by,
            bD = by.ownerDocument,
            bw = bD.documentElement,
            bz = bD.body,
            bA = bD.defaultView,
            e = bA ? bA.getComputedStyle(by, null) : by.currentStyle,
            bC = by.offsetTop,
            bx = by.offsetLeft;
            while ((by = by.parentNode) && by !== bz && by !== bw) {
                if (b.offset.supportsFixedPosition && e.position === "fixed") {
                    break;
                }
                bB = bA ? bA.getComputedStyle(by, null) : by.currentStyle;
                bC -= by.scrollTop;
                bx -= by.scrollLeft;
                if (by === bv) {
                    bC += by.offsetTop;
                    bx += by.offsetLeft;
                    if (b.offset.doesNotAddBorder && !(b.offset.doesAddBorderForTableAndCells && V.test(by.nodeName))) {
                        bC += parseFloat(bB.borderTopWidth) || 0;
                        bx += parseFloat(bB.borderLeftWidth) || 0;
                    }
                    bu = bv;
                    bv = by.offsetParent;
                }
                if (b.offset.subtractsBorderForOverflowNotVisible && bB.overflow !== "visible") {
                    bC += parseFloat(bB.borderTopWidth) || 0;
                    bx += parseFloat(bB.borderLeftWidth) || 0;
                }
                e = bB;
            }
            if (e.position === "relative" || e.position === "static") {
                bC += bz.offsetTop;
                bx += bz.offsetLeft;
            }
            if (b.offset.supportsFixedPosition && e.position === "fixed") {
                bC += Math.max(bw.scrollTop, bz.scrollTop);
                bx += Math.max(bw.scrollLeft, bz.scrollLeft);
            }
            return {
                top: bC,
                left: bx
            };
        };
    }
    b.offset = {
        initialize: function() {
            var e = ar.body,
            bu = ar.createElement("div"),
            bx,
            bz,
            by,
            bA,
            bv = parseFloat(b.css(e, "marginTop")) || 0,
            bw = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            b.extend(bu.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            bu.innerHTML = bw;
            e.insertBefore(bu, e.firstChild);
            bx = bu.firstChild;
            bz = bx.firstChild;
            bA = bx.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = (bz.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (bA.offsetTop === 5);
            bz.style.position = "fixed";
            bz.style.top = "20px";
            this.supportsFixedPosition = (bz.offsetTop === 20 || bz.offsetTop === 15);
            bz.style.position = bz.style.top = "";
            bx.style.overflow = "hidden";
            bx.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = (bz.offsetTop === -5);
            this.doesNotIncludeMarginInBodyOffset = (e.offsetTop !== bv);
            e.removeChild(bu);
            b.offset.initialize = b.noop;
        },
        bodyOffset: function(e) {
            var bv = e.offsetTop,
            bu = e.offsetLeft;
            b.offset.initialize();
            if (b.offset.doesNotIncludeMarginInBodyOffset) {
                bv += parseFloat(b.css(e, "marginTop")) || 0;
                bu += parseFloat(b.css(e, "marginLeft")) || 0;
            }
            return {
                top: bv,
                left: bu
            };
        },
        setOffset: function(bw, bF, bz) {
            var bA = b.css(bw, "position");
            if (bA === "static") {
                bw.style.position = "relative";
            }
            var by = b(bw),
            bu = by.offset(),
            e = b.css(bw, "top"),
            bD = b.css(bw, "left"),
            bE = (bA === "absolute" || bA === "fixed") && b.inArray("auto", [e, bD]) > -1,
            bC = {},
            bB = {},
            bv,
            bx;
            if (bE) {
                bB = by.position();
                bv = bB.top;
                bx = bB.left;
            } else {
                bv = parseFloat(e) || 0;
                bx = parseFloat(bD) || 0;
            }
            if (b.isFunction(bF)) {
                bF = bF.call(bw, bz, bu);
            }
            if (bF.top != null) {
                bC.top = (bF.top - bu.top) + bv;
            }
            if (bF.left != null) {
                bC.left = (bF.left - bu.left) + bx;
            }
            if ("using" in bF) {
                bF.using.call(bw, bC);
            } else {
                by.css(bC);
            }
        }
    };
    b.fn.extend({
        position: function() {
            if (!this[0]) {
                return null;
            }
            var bv = this[0],
            bu = this.offsetParent(),
            bw = this.offset(),
            e = ab.test(bu[0].nodeName) ? {
                top: 0,
                left: 0
            }: bu.offset();
            bw.top -= parseFloat(b.css(bv, "marginTop")) || 0;
            bw.left -= parseFloat(b.css(bv, "marginLeft")) || 0;
            e.top += parseFloat(b.css(bu[0], "borderTopWidth")) || 0;
            e.left += parseFloat(b.css(bu[0], "borderLeftWidth")) || 0;
            return {
                top: bw.top - e.top,
                left: bw.left - e.left
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || ar.body;
                while (e && (!ab.test(e.nodeName) && b.css(e, "position") === "static")) {
                    e = e.offsetParent;
                }
                return e;
            });
        }
    });
    b.each(["Left", "Top"], 
    function(bu, e) {
        var bv = "scroll" + e;
        b.fn[bv] = function(by) {
            var bw,
            bx;
            if (by === L) {
                bw = this[0];
                if (!bw) {
                    return null;
                }
                bx = aI(bw);
                return bx ? ("pageXOffset" in bx) ? bx[bu ? "pageYOffset": "pageXOffset"] : b.support.boxModel && bx.document.documentElement[bv] || bx.document.body[bv] : bw[bv];
            }
            return this.each(function() {
                bx = aI(this);
                if (bx) {
                    bx.scrollTo(!bu ? by: b(bx).scrollLeft(), bu ? by: b(bx).scrollTop());
                } else {
                    this[bv] = by;
                }
            });
        };
    });
    function aI(e) {
        return b.isWindow(e) ? e: e.nodeType === 9 ? e.defaultView || e.parentWindow: false;
    }
    b.each(["Height", "Width"], 
    function(bu, e) {
        var bv = e.toLowerCase();
        b.fn["inner" + e] = function() {
            return this[0] ? parseFloat(b.css(this[0], bv, "padding")) : null;
        };
        b.fn["outer" + e] = function(bw) {
            return this[0] ? parseFloat(b.css(this[0], bv, bw ? "margin": "border")) : null;
        };
        b.fn[bv] = function(bx) {
            var by = this[0];
            if (!by) {
                return bx == null ? null: this;
            }
            if (b.isFunction(bx)) {
                return this.each(function(bC) {
                    var bB = b(this);
                    bB[bv](bx.call(this, bC, bB[bv]()));
                });
            }
            if (b.isWindow(by)) {
                var bz = by.document.documentElement["client" + e];
                return by.document.compatMode === "CSS1Compat" && bz || by.document.body["client" + e] || bz;
            } else {
                if (by.nodeType === 9) {
                    return Math.max(by.documentElement["client" + e], by.body["scroll" + e], by.documentElement["scroll" + e], by.body["offset" + e], by.documentElement["offset" + e]);
                } else {
                    if (bx === L) {
                        var bA = b.css(by, bv),
                        bw = parseFloat(bA);
                        return b.isNaN(bw) ? bA: bw;
                    } else {
                        return this.css(bv, typeof bx === "string" ? bx: bx + "px");
                    }
                }
            }
        };
    });
    bb.jQuery = bb.$ = b;
})(window);