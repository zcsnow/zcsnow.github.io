/**
 Author: Mahdi Jaberzadeh Ansari
 Email: mahdijaberzadehansari@yahoo.co.uk
 Library: ImageRotatorJS
 Description: By using this library you can create beautiful image rotator banners for your website.
 Licence: MIT Licence
 Version 1.0.7
 Date: 223 Sep 2016
 */
var ImageRotatorJS = function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = function(a, b, c, d, e, f, g, h, i) {
        if (!a || "object" != typeof a)
            throw "Cannot find the container in DOM. Check the containerId that you passed.";
        var j = this;
        this.insertAfter = function(a, b) {
            a.parentNode.insertBefore(b, a.nextSibling)
        }
        ,
        this.isValidNumber = function() {
            var a = /^-/;
            return function(b) {
                return "[object Array]" !== Object.prototype.toString.call(b) && !isNaN(parseFloat(b)) && isFinite(b.toString().replace(a, ""))
            }
        }(),
        this.setTimeOut = function(a, b) {
            this.idOfSetTimeout = setTimeout("window." + this.ref + "." + a, b)
        }
        ,
        this.setStyle = function(a, b) {
            if ("string" == typeof a && (a = document.createElement(a)),
            "object" != typeof a)
                throw "The passed element is not an object.";
            for (var c in b)
                a.style[c] = b[c];
            return a
        }
        ,
        this.position = function(a, b) {
            this.rotatingSwitch = !0,
            this.rotateDirection = a || this.rotateDirection,
            this.holdDelay = b || this.holdDelay,
            this.Counter += this.rotateDirection,
            this.Counter >= this.inc && (this.Counter = 0),
            this.Counter < 0 && (this.Counter = this.inc - 1);
            for (var c = 0; c < this.items.length; c++) {
                var d = (this.Counter + this.items[c].StaticPosition) % this.aary.length;
                if (1 == this.rotateDirection ? d == this.aary.length - 1 && 0 != c ? (this.CurrentItem = c,
                this.items[c].setAttribute("class", "CurrentPlayedIcon")) : 0 == d && 0 == c ? (this.CurrentItem = c,
                this.items[c].setAttribute("class", "CurrentPlayedIcon")) : this.items[c].setAttribute("class", "NotCurrentIcon") : this.rotateDirection == -1 && (d == this.aary.length - 1 && 0 != c ? (this.CurrentItem = c,
                this.items[c].setAttribute("class", "CurrentPlayedIcon")) : 0 == d && 0 == c ? (this.CurrentItem = c,
                this.items[c].setAttribute("class", "CurrentPlayedIcon")) : this.items[c].setAttribute("class", "NotCurrentIcon")),
                this.RequestedIcon == this.items[c] && this.CurrentItem == c) {
                    this.RequestedIcon = null,
                    this.stop = Math.floor(this.inc / this.items.length);
                    break
                }
                var e = Math.abs(Math.sin(this.aary[d][2]) * this.zoomPercentage*0.5)
                  , f = Math.sin(this.aary[d][2]) >= 0 ? this.sizes[c][0] + 3*this.sizes[c][0] * e : this.sizes[c][0] - this.sizes[c][0] * e / 10;
                f = f > 0 ? f : 0;
                var g = Math.sin(this.aary[d][2]) >= 0 ? this.sizes[c][1] + 3*this.sizes[c][1] * e : this.sizes[c][1] - this.sizes[c][1] * e / 10;
                g = g > 0 ? g : 0,
                this.items[c].CurrentPosition = this.aary[d][4],
                this.setStyle(this.items[c], {
                    zIndex: Math.floor(this.aary[d][1] + 1) + "",
                    width: f + "px",
                    height: g + "px",
                    left: this.aary[d][0] - f / 2 + "px",
                    top: this.aary[d][1] - g/10 + 1 + "px",
                    fontSize: this.sizes[c][2] + this.sizes[c][2] * e + "px"
                }),
                this.setStyle(this.Reflects[c], {
                    zIndex: Math.floor(this.aary[d][1] + 2) + "",
                    width: f + "px",
                    height: g * this.reflectionPercentage + "px",
                    left: this.aary[d][0] - f / 2 + "px",
                    top: this.aary[d][1] - 1 + "px",
                    fontSize: this.sizes[c][2] + this.sizes[c][2] * e + "px"
                }),
                this.setStyle(this.Overlay[c], {
                    zIndex: Math.floor(this.aary[d][1] + 3) + "",
                    width: f + "px",
                    height: g * this.reflectionPercentage + 5 + "px",
                    left: this.aary[d][0] - f / 2 + "px",
                    top: this.aary[d][1] - 1 + "px",
                    fontSize: this.sizes[c][2] + this.sizes[c][2] * e + "px"
                }),
                Math.sin(this.aary[d][2]) < -.5 ? (this.setStyle(this.items[c], {
                   /* "-webkit-filter": "blur(2px)",
                    filter: "url(#blur)",
                    "-moz-filter": "blur(2px)",
                    "-o-filter": "blur(2px)",
                    "-ms-filter": "blur(2px)"*/
                }),
                "Microsoft Internet Explorer" !== navigator.appName && this.setStyle(this.Reflects[c].querySelector("img"), {
                    /*"-webkit-filter": "blur(2px)",
                    filter: "url(#blur)",
                    "-moz-filter": "blur(2px)",
                    "-o-filter": "blur(2px)",
                    "-ms-filter": "blur(2px)"*/
                })) : (this.setStyle(this.items[c], {
                    filter: "",
                    "-webkit-filter": "",
                    "-moz-filter": "",
                    "-o-filter": "",
                    "-ms-filter": ""
                }),
                "Microsoft Internet Explorer" !== navigator.appName && this.setStyle(this.Reflects[c].querySelector("img"), {
                    filter: "",
                    "-webkit-filter": "",
                    "-moz-filter": "",
                    "-o-filter": "",
                    "-ms-filter": ""
                }));
                var h = this;
                this.items[c].onclick = function() {
                    h.CurrentItem == -1 || h.items[h.CurrentItem] != this ? (h.RequestedIcon = this,
                    this.CurrentPosition ? (clearTimeout(h.idOfSetTimeout),
                    h.stop = 0,
                    h.position(1, h.holdDelay)) : (clearTimeout(h.idOfSetTimeout),
                    h.stop = 0,
                    h.position(-1, h.holdDelay))) : h.items[h.CurrentItem] != this || h.rotatingSwitch ? (h.rotatingSwitch = !1,
                    clearTimeout(h.idOfSetTimeout),
                    1 == h.rotateDirection ? this.setAttribute("class", "CurrentPausedIconRTL") : this.setAttribute("class", "CurrentPausedIconLTR")) : h.position(h.rotateDirection, h.holdDelay)
                }
            }
            this.Counter % this.stop != 0 ? this.setTimeOut("position();", this.rotationSpeed) : this.holdDelay && this.setTimeOut("position();", this.holdDelay)
        }
        ,
        this.startRotation = function(a, b) {
            clearTimeout(j.idOfSetTimeout),
            j.position(a, b)
        }
        ,
        this.stopRotation = function() {
            j.rotatingSwitch = !1,
            clearTimeout(j.idOfSetTimeout)
        }
        ,
        this.parentDivDOM = a,
        this.rotationSpeed = this.isValidNumber(c) ? c : 10,
        this.holdDelay = this.isValidNumber(e) ? e : 3e3,
        this.zoomPercentage = this.isValidNumber(d) ? d / 100 : .01,
        this.diagonal = [parseInt(this.parentDivDOM.style.width || this.parentDivDOM.offsetWidth), parseInt(this.parentDivDOM.style.height || this.parentDivDOM.offsetHeight)],
        this.items = [],
        this.Reflects = [],
        this.Overlay = [],
        this.setStyle(this.parentDivDOM, {
            cursor: "default",
            "text-align": "center",
            "margin-left": "auto",
            "margin-right": "auto"
        });
        var k = " ." + b + ":hover{cursor:pointer}";
        k += " .CurrentPlayedIcon:hover{cursor:pointer}",
        k += " .CurrentPausedIconRTL:hover{cursor:pointer}",
        k += " .CurrentPausedIconLTR:hover{cursor:,pointer}",
        k += " .NotCurrentIcon:hover{cursor:pointer}";
        var l = document.createElement("style");
        l.styleSheet ? l.styleSheet.cssText = k : l.appendChild(document.createTextNode(k)),
        document.getElementsByTagName("head")[0].appendChild(l);
        for (var m = this.parentDivDOM.getElementsByTagName("*"), n = 0; n < m.length; n++)
            if (m[n].className && m[n].className.match(b)) {
                this.items.push(m[n]);
                var o = document.createElement("div");
                this.insertAfter(m[n], o),
                this.Reflects.push(o);
                var p = document.createElement("img");
                p.src = m[n].src,
                this.setStyle(p, {
                    width: "100%",
                    border: "none",
                    WebkitTransform: "scaleY(-1)",
                    MozTransform: "scaleY(-1)",
                    MsTransform: "scaleY(-1)",
                    OTransform: "scaleY(-1)",
                    transform: "scaleY(-1)",
                    filter: "flipv"
                }),
                o.appendChild(p),
                o = document.createElement("div"),
                this.insertAfter(this.Reflects[this.Reflects.length - 1], o),
                o.setAttribute("class", "IRJS_Overlay"),
                this.Overlay.push(o)
            }
        this.aary = new Array,
        this.Start_Point = Math.PI / 2,
        this.isValidNumber(g) && (this.Start_Point = g / 180 * Math.PI),
        this.Rotation_Angle = 0,
        this.isValidNumber(f) && (this.Rotation_Angle = f / 180 * Math.PI),
        this.reflectionPercentage = this.isValidNumber(h) ? h / 100 : .4;
        var q, r, s = this.diagonal[0] / 2, t = this.diagonal[1] / 2, u = s, v = t, w = Math.floor(Math.PI * (3 * (s + t) - Math.sqrt((3 * s + t) * (s + 3 * t)))), x = w - w % this.items.length, y = w + (this.items.length - w % this.items.length);
        w = w - x <= y - w ? x : y;
        for (var z = this.Start_Point; z < this.Start_Point + 2 * Math.PI && this.aary.length < w; z += 2 * Math.PI / w)
            q = Math.floor(u - t * Math.sin(z) * Math.sin(this.Rotation_Angle) + s * Math.cos(z) * Math.cos(this.Rotation_Angle)),
            r = Math.floor(v + s * Math.cos(z) * Math.sin(this.Rotation_Angle) + t * Math.sin(z) * Math.cos(this.Rotation_Angle)),
            this.aary.push([q, r, z, Math.sin(z) >= 0, Math.cos(z) >= 0]),
            i && this.parentDivDOM.appendChild(this.setStyle("DIV", {
                position: "absolute",
                overflow: "hidden",
                left: this.aary[this.aary.length - 1][0] + "px",
                top: this.aary[this.aary.length - 1][1] + "px",
                width: "1px",
                height: "1px",
                backgroundColor: i
            }));
        this.inc = this.aary.length,
        this.ref = "parentDivDOM" + this.parentDivDOM.id,
        window[this.ref] = this,
        this.idOfSetTimeout = null,
        this.sizes = [];
        for (var A = 0; A < this.items.length; A++)
            this.items[A].StaticPosition = Math.floor((this.aary.length - 1) / this.items.length * A),
            this.sizes.push([this.items[A].offsetWidth, this.items[A].offsetHeight, this.items[A].style.fontSize ? parseInt(this.items[A].style.fontSize) : null]),
            this.setStyle(this.items[A], {
                position: "absolute",
                overflow: "hidden"
            }),
            this.setStyle(this.Reflects[A], {
                position: "absolute",
                border: "none",
                overflow: "hidden"
            }),
            this.Overlay[A].setAttribute("style", "position:absolute; border:none; overflow:hidden;background: -moz-linear-gradient(top,  rgba(193,193,193,0.25) 0%, rgba(0,0,0,0.71) 59%, rgba(0,0,0,0.95) 90%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(193,193,193,0.25)), color-stop(59%,rgba(0,0,0,0.71)), color-stop(90%,rgba(0,0,0,0.95)));background: -webkit-linear-gradient(top,  rgba(193,193,193,0.25) 0%,rgba(0,0,0,0.71) 59%,rgba(0,0,0,0.95) 90%);background: -o-linear-gradient(top,  rgba(193,193,193,0.25) 0%,rgba(0,0,0,0.71) 59%,rgba(0,0,0,0.95) 90%);background: -ms-linear-gradient(top,  rgba(193,193,193,0.25) 0%,rgba(0,0,0,0.71) 59%,rgba(0,0,0,0.95) 90%);background: linear-gradient(to bottom,  rgba(193,193,193,0.25) 0%,rgba(0,0,0,0.71) 59%,rgba(0,0,0,0.95) 90%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#40c1c1c1', endColorstr='#f2000000',GradientType=0 );-ms-filter: 'progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr=#40c1c1c1, endColorstr=#f2000000)';");
        if ("Microsoft Internet Explorer" !== navigator.appName) {
            var B = "http://www.w3.org/2000/svg"
              , C = document.createElementNS(B, "svg")
              , D = document.createElementNS(B, "filter");
            D.setAttributeNS(null, "id", "blur");
            var E = document.createElementNS(B, "feGaussianBlur");
            E.setAttributeNS(null, "in", "SourceGraphic"),
            E.setAttributeNS(null, "stdDeviation", "0.9"),
            D.appendChild(E),
            C.appendChild(D),
            document.querySelector("body").appendChild(C)
        }
        this.stop = Math.floor(this.inc / this.items.length),
        this.CurrentItem = 0,
        this.items[this.CurrentItem].setAttribute("class", "CurrentPlayedIcon"),
        this.Counter = -1,
        this.RequestedIcon = null,
        this.position(1)
    }
      , k = document.getElementById(a);
    if (!k)
        throw "Cannot find the container in DOM. Check the containerId that you passed.";
    return window["IRJS_Ellipse" + a] ? null : (window["IRJS_Ellipse" + a] = new j(k,b,c,d,e,f,g,h,i),
    window["IRJS_Ellipse" + a])
}
  , IRJS_StartRotation = function(a, b, c) {
    "use strict";
    window["IRJS_Ellipse" + a] && window["IRJS_Ellipse" + a].startRotation(b, c)
}
  , IRJS_StopRotation = function(a) {
    "use strict";
    window["IRJS_Ellipse" + a] && window["IRJS_Ellipse" + a].stopRotation()
};
