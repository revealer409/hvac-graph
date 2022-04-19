jQuery(function (t) {
    g("[•] Solar Career Map, v04."), g("[•] Run Globals...");
    var a = 202,
        e = !1,
        s = !1,
        r = new Array();
    function n() {
        (px_width_window = t(window).width()),
            (px_height_window = t(window).height()),
            (a = t("#map .map-row .block").width()),
            t("#map .map-row .block").height(a),
            t("#map .map-grid").width(5 * a),
            t("#map .map-grid").height(3 * a),
            t("#map .map-grid .point a.square").width(a / 5),
            t("#map .map-grid .point a.square").height(a / 5),
            t("#map .map-grid .point a.square").css("marginTop", a / 24),
            t("#map .map-grid .point a.square").css("marginLeft", a / 24),
            t("#map .map-grid .point a.square .dot").width(a / 6),
            t("#map .map-grid .point a.square .dot").height(a / 6),
            t("#map .map-grid .point a.square .dot").css("top", a / 12),
            t("#map .map-grid .point a.square .dot").css("left", a / 12),
            t("#map .map-grid .point a.square .border").width(a / 6),
            t("#map .map-grid .point a.square .border").height(a / 6),
            t("#map .map-grid .point a.square .border").css("top", a / 12 - 4),
            t("#map .map-grid .point a.square .border").css("left", a / 12 - 4),
            t("#map .map-grid .point .title").width(0.75 * a),
            t("#map .map-grid .point .description").width(1.25 * a),
            t("#map .map-row .row-label").height(a),
            t("#map .map-row .col-label .tail.left").css("borderWidth", a / 5 + "px " + a / 2.04 + "px 0 0"),
            t("#map .map-row .col-label .tail.right").css("borderWidth", "0 " + a / 2.04 + "px " + a / 5 + "px 0"),
            t("#map .map-row .axis-label").css("paddingTop", a / 5),
            t("#map .map-row .row-label .title").css("width", a),
            t("#map .map-row .row-label .title").css("marginLeft", -a),
            t("#map .map-row .row-label .title").css("lineHeight", t("#map .map-row .row-label").width() + "px"),
            t("#map .map-grid .point.selected").length && m(t("#map .map-grid .point.selected")),
            t(".industry .video-menu").length &&
                t(window).width() > 540 &&
                (t(".industry .video-menu a").css("height", t(".industry .video-menu a").width()), t(".industry .video-menu a .screen").css("height", t(".industry .video-menu a").width())),
            t(".h-sync").each(function () {
                t(this).parent().attr("data-h-sync-px", 0);
            }),
            t(".h-sync").each(function () {
                var a = parseInt(t(this).parent().attr("data-h-sync-px"));
                t(this).css("height", "auto"),
                    t(this).innerHeight() > a && (a = t(this).innerHeight()),
                    t(this).parent().attr("data-h-sync-px", a),
                    t(this).parent().find("> .h-sync").css("height", a),
                    t(this).parent().find("> .h-sync").addClass("h-sync-set");
            }),
            t(".h-sync-md").each(function () {
                t(this).parent().attr("data-h-sync-md-px", 0);
            }),
            t(".h-sync-md").each(function () {
                if ((t(this).css("height", "auto"), px_width_window > px_md_width)) {
                    var a = parseInt(t(this).parent().attr("data-h-sync-md-px"));
                    t(this).innerHeight() > a && (a = t(this).innerHeight()), t(this).parent().attr("data-h-sync-md-px", a), t(this).parent().find("> .h-sync-md").css("height", a);
                }
                t(this).parent().find("> .h-sync-md").addClass("h-sync-md-set");
            }),
            t(".y-center").each(function () {
                t(this).css("top", 0);
            }),
            t(".y-center").each(function () {
                var a = (t(this).parent().height() - t(this).innerHeight()) / 2;
                t(this).css("top", a), t(this).addClass("y-center-set");
            }),
            t(".y-center-md").each(function () {
                t(this).css("top", 0);
            }),
            t(".y-center-md").each(function () {
                if ((t(this).css("height", "auto"), px_width_window > px_md_width)) {
                    var a = (t(this).parent().height() - t(this).innerHeight()) / 2;
                    t(this).css("top", a);
                }
                t(this).addClass("y-center-md-set");
            }),
            t(".vert-match").each(function () {
                for (i = 1; i <= 5; i++)
                    t(this).find(".vert-match-box-" + i).length &&
                        (t(this)
                            .find(".vert-match-box-" + i)
                            .css("height", "auto"),
                        t(this)
                            .find(".vert-match-box-" + i + " .vcenter")
                            .css("paddingTop", 0),
                        (px_height = 0),
                        t(this)
                            .find(".vert-match-box-" + i)
                            .each(function () {
                                t(this).innerHeight() > px_height && (px_height = t(this).innerHeight());
                            }),
                        t(this)
                            .find(".vert-match-box-" + i)
                            .css("height", px_height),
                        t(this)
                            .find(".vert-match-box-" + i)
                            .each(function () {
                                t(this).find(".vcenter").length && ((obj_vcenter = t(this).find(".vcenter")), obj_vcenter.css("paddingTop", (px_height - obj_vcenter.height()) / 2));
                            }));
            });
    }
    function o(a, i) {
        g("[○] plotPoint: " + a),
            (r[r.length] = setTimeout(function () {
                p(t("#map .map-grid .point[data-slug='" + a + "']"), !1);
            }, i));
    }
    function d(a, i, e, s) {
        g("[○] plotPathPoint: " + a + " to " + i),
            (r[r.length] = setTimeout(function () {
                p(t("#map .map-grid .point[data-slug='" + a + "']")), u(a, i, e, 500);
            }, s));
    }
    function p(i, e) {
        g("[○] activatePoint: " + i.attr("data-slug")),
            t("#sidebar .subnav a[data-slug='" + i.attr("data-slug") + "']").addClass("active"),
            t("#map .map-grid .point a.square .dot").addClass("dimmed"),
            i.addClass("active"),
            i.find(".square .dot").width(a / 4),
            i.find(".square .dot").height(a / 4),
            i.find(".square .dot").css("top", a / 24),
            i.find(".square .dot").css("left", a / 24),
            i.find(".square .border").width(a / 4),
            i.find(".square .border").height(a / 4),
            i.find(".square .border").css("top", a / 24 - 4),
            i.find(".square .border").css("left", a / 24 - 4),
            0 != e && l(i);
    }
    function l(t) {
        t.hasClass("x50-design") ? (t.find(".title").css("left", -0.75 * a), t.find(".title").css("textAlign", "right")) : t.find(".title").css("left", a / 3),
            t.find(".title").css("top", a / 6 - t.find(".title").height() / 2),
            t.find(".title").stop().fadeIn(500),
            t.addClass("title-display");
    }
    function c(i) {
        g("[○] deactivatePoint: " + i.attr("data-slug")),
            t("#map .map-grid").hasClass("selected") || t("#map .map-grid .point a.square .dot").removeClass("dimmed"),
            t("#sidebar .subnav a[data-slug='" + i.attr("data-slug") + "']").removeClass("active"),
            i.removeClass("active"),
            i.find(".square .dot").width(a / 6),
            i.find(".square .dot").height(a / 6),
            i.find(".square .dot").css("top", a / 12),
            i.find(".square .dot").css("left", a / 12),
            i.find(".square .border").height(a / 6),
            i.find(".square .border").width(a / 6),
            i.find(".square .border").css("left", a / 12 - 4),
            i.find(".square .border").css("top", a / 12 - 4),
            h(i);
    }
    function h(t) {
        t.removeClass("title-display"), t.find(".title").stop().fadeOut(0);
    }
    function m(a) {
        g("[○] deselectPoint: " + a.attr("data-slug")),
            t("#map .map-grid").removeClass("selected"),
            a.removeClass("selected"),
            t("#sidebar .subnav a[data-slug='" + a.attr("data-slug") + "']").removeClass("selected"),
            a.find(".description").css("display", "none"),
            a.find(".description").css("opacity", 0),
            t("#map .map-grid .line").remove(),
            t("#map .map-grid .tooltip").remove(),
            t("#map .map-grid .point").removeClass("routed"),
            c(a);
    }
     
    /*
    function u(i, e, s, n) {
        g("[/] drawLine: " + i + "-to-" + e);
        var o = t("#map .map-grid .point[data-slug='" + i + "']"),
            d = parseInt(o.css("top")) + a / 6 - 10,
            p = parseInt(o.css("left")) + a / 6,
            l = t("#map .map-grid .point[data-slug='" + e + "']"),
            c = parseInt(l.css("top")) + a / 6 - 10,
            h = parseInt(l.css("left")) + a / 6,
            m = Math.sqrt((p - h) * (p - h) + (d - c) * (d - c)),
            u = (180 * Math.atan2(c - d, h - p)) / Math.PI,
            f = t("<a>")
                .delay(n + 100)
                .appendTo("#map .map-grid")
                .addClass("line")
                .attr("href", "#")
                .attr("data-slug", i + "-to-" + e)
                .css({ display: "block", top: d, left: p, transform: "rotate(" + u + "deg)" })
                .animate({ width: m }, 500);
        f.hover(
            function () {
                g("[/] Line hover on: " + t(this).attr("data-slug")),
                    t(this).addClass("active"),
                    t("#map .map-grid .tooltip[data-slug='" + t(this).attr("data-slug") + "']")
                        .stop()
                        .fadeIn(250);
            },
            function () {
                g("[/] Line hover off: " + t(this).attr("data-slug")),
                    t(this).removeClass("active"),
                    t("#map .map-grid .tooltip[data-slug='" + t(this).attr("data-slug") + "']")
                        .stop()
                        .fadeOut(0);
            }
        ),
            f.click(function () {
                return !1;
            });
        var v = t("<div>")
            .delay(n + 600)
            .appendTo("#map .map-grid")
            .addClass("tooltip")
            .attr("data-slug", i + "-to-" + e);
        if ("" != s) {
            t("<div>")
                .delay(n + 600)
                .appendTo(v)
                .addClass("tooltip-box")
                .html(s);
            var b,
                w,
                C = (d + c) / 2,
                y = (p + h) / 2;
            v.width(0.75 * a),
                u < -45 && u > -135 ? ((b = C - v.height() / 3), v.addClass("arrow-side")) : ((b = C - v.height()), v.addClass("arrow-bottom")),
                (u >= 0 && u <= 180) || (u <= -135 && u >= -180) || (u <= 0 && u >= -45)
                    ? ((w = y - v.width() / 2), v.addClass("arrow-center"))
                    : y > t("#map .map-grid").width() / 2
                    ? ((w = y - v.outerWidth() - 20), v.addClass("arrow-right"))
                    : ((w = y + 20), v.addClass("arrow-left")),
                v.css({ top: b, left: w });
        }
        v.hover(
            function () {
                g("[/] Line tooltip hover on: " + t(this).attr("data-slug")), t("#map .map-grid .line[data-slug='" + t(this).attr("data-slug") + "']").addClass("active"), t(this).show();
            },
            function () {
                g("[/] Line tooltip hover off: " + t(this).attr("data-slug")), t("#map .map-grid .line[data-slug='" + t(this).attr("data-slug") + "']").removeClass("active"), t(this).stop().fadeOut(0);
            }
        ),
            o.addClass("routed"),
            (function (t, a, i) {
                r[r.length] = setTimeout(function () {
                    t.addClass(a);
                }, i);
            })(l, "routed", n + 400);
    }
    */
 
    function g(t) {
        "undefined" != typeof console && ("[!]" == (t += "").substr(0, 3) ? alert(t) : "[" == t.substr(0, 1) ? console.log(t) : console.log("[ ] " + t));
    }
    g("[•] ...Globals complete."),
        t(document).ready(function () {
            g("[•] Run Post-DOM Routine..."),
                (function () {
                    (t = navigator.userAgent || navigator.vendor || window.opera),
                        void (
                            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                                t
                            ) ||
                                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                                    t.substr(0, 4)
                                )) &&
                            (e = !0)
                        ),
                        g("[•] checkBrowser(): Mobile == " + e),
                        g("[•] checkBrowser(): Touch == " + ("ontouchstart" in document.documentElement)),
                        window.navigator.userAgent.indexOf("MSIE ") > 0 && (s = !0);
                    var t;
                    g("[•] checkBrowser(): Internet Explorer == " + s);
                })(),
                n(),
                setTimeout(n, 500),
                t(window).resize(function () {
                    n();
                }),
                t(".faq .faq-table a.question").click(function () {
                    return (
                        t(this).hasClass("active")
                            ? (t(".faq .faq-table .answer").slideUp(250), t(".faq .faq-table a.question.active").removeClass("active"))
                            : (t(".faq .faq-table .answer").slideUp(250), t(".faq .faq-table a.question.active").removeClass("active"), t(this).parent().find(".answer").slideDown(250), t(this).addClass("active")),
                        !1
                    );
                }),
                t(".industry .tabs li a").click(function () {
                    return (
                        g("[i] Industry tab #" + t(this).parent().index() + "clicked."),
                        t(this).hasClass("active")
                            ? (t(".industry .tab-content .text").slideUp(250), t(".industry .tabs li a.active").removeClass("active"))
                            : (t(".industry .tab-content .text").slideUp(250),
                              t(".industry .tabs li a.active").removeClass("active"),
                              t(".industry .tab-content .text").eq(t(this).parent().index()).slideDown(250),
                              t(this).addClass("active")),
                        !1
                    );
                }),
                t(".industry .video-menu a").click(function () {
                    g("[i] Industry video (ID " + t(this).attr("data-video-id") + ") clicked."), t(".industry .video-menu a.active").removeClass("active"), t(this).addClass("active");
                    var a = '<iframe src="https://www.youtube.com/embed/XXX?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>';
                    return (a = a.replace("XXX", t(this).attr("data-video-id"))), t(".industry .video-content").html(a), t(".industry .video-content").slideDown(500), !1;
                }),
                t(".tooltipped .tooltip-toggle").click(function () {
                    g("[t] Tooltip clicked: " + t(this).parent().attr("data-slug"));
                    var a = t(this).parent().find(".tooltip");
                    return a.is(":visible") ? a.fadeOut(100) : (t(".tooltip").hide(), a.fadeIn(250)), !1;
                }),
                t(".tooltipped .tooltip .tooltip-box .close").click(function () {
                    return t(this).parent().parent().fadeOut(100), !1;
                }),
                t("#sidebar ul.map-nav > li > a").click(function () {
                    return (
                        g("[☰] Sidenav section click: " + t(this).parent().attr("class")),
                        (obj_parent_li = t(this).parent()),
                        obj_parent_li.hasClass("open")
                            ? (obj_parent_li.removeClass("open"), obj_parent_li.find(".subnav").slideUp(250))
                            : (t("#sidebar ul.map-nav > li").removeClass("open"), t("#sidebar ul.map-nav > li .subnav").slideUp(250), obj_parent_li.addClass("open"), obj_parent_li.find(".subnav").stop().slideDown(250)),
                        !1
                    );
                }),
                t("#sidebar ul.map-nav > li > ul > li > a").hover(function (a) {
                    t("#map .map-grid .point[data-slug='" + t(this).attr("data-slug") + "'] a.square").trigger(a.type);
                }),
                t("#map .routes a.route-item").click(function () {
                    var a;
                    switch (
                        (g("[→] Route item clicked: " + t(this).attr("data-slug")),
                        g("[○] resetPoints"),
                        (function () {
                            for (var t = 0; t < r.length; t++) clearTimeout(r[t]);
                        })(),
                        t("#map .map-grid .point.selected").each(function () {
                            m(t(this));
                        }),
                        t("#map .map-grid .point.active").each(function () {
                            m(t(this));
                        }),
                        t(this).parent().hasClass("tab") &&
                            (g("[→] Route tab opened: " + (a = t(this).attr("data-slug"))),
                            t("#map .routes ul.tabs li.tab a.active").removeClass("active"),
                            t("#map .routes .tab-content").slideUp(500),
                            t("#map .routes .tab-content[data-slug='" + a + "']").slideDown(500),
                            t("#map .routes ul.tabs li.tab a[data-slug='" + a + "']").addClass("active"),
                            t("#map .routes .tab-content[data-slug='" + a + "'] .subroutes").length && t("#map .routes .tab-content[data-slug='" + a + "'] .subroutes .route-item:first").click()),
                        t(this).hasClass("subroute") && (t(this).parent().parent().find(".subroute.active").removeClass("active"), t(this).addClass("active")),
                        t(this).attr("data-type"))
                    ) {
                        case "careerPath":
                            g("[→] Plot career path: " + t(this).attr("data-careerpath")), t("#map .map-grid").addClass("locked"), t("#map .map-grid").removeClass("with-titles"), t("#map .map-grid .point").removeClass("dimmed");
                            var e = t(this).attr("data-careerpath").split("|"),
                                s = t(this).attr("data-tooltips").split("|");
                            for (i = 0; i < e.length; i++) d(e[i], e[i + 1], s[i + 1], 1e3 * i);
                            break;
                        case "jobList":
                            g("[→] Plot job list: " + t(this).attr("data-joblist")), t("#map .map-grid").addClass("locked"), t("#map .map-grid").addClass("with-titles"), t("#map .map-grid .point").removeClass("dimmed");
                            e = t(this).attr("data-joblist").split("|");
                            for (i = 0; i < e.length; i++) o(e[i], 250 * i);
                            break;
                        case "freeform":
                            t("#map .map-grid").removeClass("locked"), t("#map .map-grid").removeClass("with-titles"), t("#map .map-grid .point").removeClass("dimmed");
                    }
                    return !1;
                }),
                t("#map .map-grid .point a.square").hover(
                    function () {
                        t(this).parent().hasClass("selected") || t("#map .map-grid").hasClass("locked")
                            ? t(this).parent().hasClass("active") &&
                              t("#map .map-grid").hasClass("with-titles") &&
                              (g("[○] Point title hover on: " + t(this).parent().attr("data-slug")), t("#map .map-grid .point").addClass("dimmed"), t(this).parent().removeClass("dimmed"), l(t(this).parent()))
                            : (g("[○] Point hover on: " + t(this).parent().attr("data-slug")), p(t(this).parent()));
                    },
                    function () {
                        t(this).parent().hasClass("selected") || t("#map .map-grid").hasClass("locked")
                            ? t(this).parent().hasClass("active") &&
                              t("#map .map-grid").hasClass("with-titles") &&
                              (g("[○] Point title hover off: " + t(this).parent().attr("data-slug")), t("#map .map-grid .point").removeClass("dimmed"), h(t(this).parent()))
                            : (g("[○] Point hover off: " + t(this).parent().attr("data-slug")), c(t(this).parent()));
                    }
                ),
                t("#map .map-grid .point a.square").click(function () {
                    return (
                        t("#map .map-grid").hasClass("locked")
                            ? (t("#map .routes a.route-item[data-type='freeform']").click(), t(this).click())
                            : t(this).parent().hasClass("selected")
                            ? (g("[○] Point clicked to close: " + t(this).parent().attr("data-slug")), m(t(this).parent()))
                            : (g("[○] Point clicked to open: " + t(this).parent().attr("data-slug")),
                              t("#map .map-grid .point.selected").length && m(t("#map .map-grid .point.selected")),
                              (function (e) {
                                  p(e),
                                      t("#map .map-grid").addClass("selected"),
                                      e.addClass("selected"),
                                      t("#sidebar .subnav a[data-slug='" + e.attr("data-slug") + "']").addClass("selected"),
                                      e.find(".title").stop().fadeOut(0),
                                      e.find(".description").css("display", "block"),
                                      e.hasClass("x10-residential")
                                          ? (e.find(".description").css("left", 8), e.find(".description .description-box").addClass("arrow-left"))
                                          : e.hasClass("x50-design")
                                          ? (e.find(".description").css("left", 16 - (1.25 * a - a / 5)), e.find(".description .description-box").addClass("arrow-right"))
                                          : (e.find(".description").css("left", -(a / 2 - 7)), e.find(".description .description-box").addClass("arrow-center"));
                                  if ((e.find(".description").css("top", a / 3), e.find(".description .description-box").addClass("arrow-top"), e.find(".description").animate({ opacity: 1 }, 100), null != e.attr("data-routes"))) {
                                      var s = e.attr("data-routes").split("|"),
                                          r = e.attr("data-tooltips").split("|");
                                      for (i = 0; i < s.length; i++) u(e.attr("data-slug"), s[i], r[i], 250 * i);
                                  }
                              })(t(this).parent())),
                        !1
                    );
                }),
                t("#map .map-grid .point .description .description-box a.close").click(function () {
                    return g("[○] X clicked to close: " + t(this).parent().parent().parent().attr("data-slug")), m(t(this).parent().parent().parent()), !1;
                }),
                t("body").removeClass("preload"),
                g("[•] Post-DOM Routine complete.");
        });
});
