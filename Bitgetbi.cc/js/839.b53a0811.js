(self["webpackChunkplex"] = self["webpackChunkplex"] || []).push([[839], {
    9839: function(t, s, e) {
        "use strict";
        e.r(s),
        e.d(s, {
            default: function() {
                return p
            }
        });
        var i = function() {
            var t = this
              , s = t.$createElement
              , i = t._self._c || s;
            return i("div", {
                staticClass: "assets-container"
            }, [i("div", {
                staticClass: "page-title"
            }, [t._v(t._s(t.$t("app.assets.assets")))]), i("div", {
                staticClass: "assetsInfo-wrap"
            }, [i("div", {
                staticClass: "assetsMark-wrap"
            }, [i("div", {
                staticClass: "left"
            }, [i("span", {
                staticClass: "totalAssets-mark"
            }, [t._v(t._s(t.$t("app.assets.text1")))]), i("van-icon", {
                attrs: {
                    name: e(9272),
                    size: "16px"
                },
                on: {
                    click: t.showTips
                }
            })], 1), i("van-icon", {
                attrs: {
                    name: e(3130)("./assets-" + (t.isShow ? "hide" : "show") + ".png"),
                    size: "16px"
                },
                on: {
                    click: function(s) {
                        t.isShow = !t.isShow
                    }
                }
            })], 1), t.isShow ? i("div", {
                staticClass: "total-num"
            }, [t._v(t._s(t.total))]) : i("div", {
                staticClass: "total-num"
            }, t._l(t.total.toString().length, (function(s) {
                return i("span", {
                    key: "total-" + s
                }, [t._v("*")])
            }
            )), 0), i("div", {
                staticClass: "click-btns"
            }, [i("div", {
                staticClass: "click-btns-item",
                on: {
                    click: t.onTopUpCoin
                }
            }, [i("van-icon", {
                attrs: {
                    name: e(1757),
                    size: "36px"
                }
            }), i("div", [t._v(t._s(t.$t("app.assets.recharge")))])], 1), i("div", {
                staticClass: "click-btns-item",
                on: {
                    click: t.onTopDownCoin
                }
            }, [i("van-icon", {
                attrs: {
                    name: e(5166),
                    size: "36px"
                }
            }), i("div", [t._v(t._s(t.$t("app.assets.withdraw")))])], 1)])]), i("div", {
                staticClass: "assets-list"
            }, [i("div", {
                staticClass: "title"
            }, [t._v(t._s(t.$t("app.assets.assetsList")))]), t._l(t.aeestsList, (function(s, n) {
                return i("div", {
                    key: "assets-" + n,
                    staticClass: "list-item",
                    on: {
                        click: function(e) {
                            return t.aeestDetail(s.coinid)
                        }
                    }
                }, [i("div", {
                    staticClass: "assets-type"
                }, [i("span", {
                    staticClass: "assets"
                }, [t._v(t._s(s.name))]), i("img", {
                    staticClass: "arrow-right",
                    attrs: {
                        src: e(5327),
                        alt: ""
                    }
                })]), i("div", {
                    staticClass: "content"
                }, [i("div", {
                    staticClass: "avalible"
                }, [i("span", {
                    staticClass: "prefix"
                }, [t._v(t._s(t.$t("app.assets.usable")))]), i("span", {
                    staticClass: "num"
                }, [t._v(t._s(s.balance))])]), i("div", {
                    staticClass: "froze"
                }, [i("span", {
                    staticClass: "prefix"
                }, [t._v(t._s(t.$t("app.assets.frozen")))]), i("span", {
                    staticClass: "num"
                }, [t._v(t._s(s.frozen))])]), i("div", {
                    staticClass: "equal"
                }, [i("span", {
                    staticClass: "prefix"
                }, [t._v(t._s(t.$t("app.assets.text3")))]), i("span", {
                    staticClass: "num"
                }, [t._v(t._s(s.usdt))])])])])
            }
            ))], 2)])
        }
          , n = []
          , a = e(4302)
          , r = e(6484)
          , o = {
            name: "Assets",
            data() {
                return {
                    isShow: !0,
                    total: null,
                    aeestsList: []
                }
            },
            created() {
                this.getData()
            },
            methods: {
                showTips() {
                    this.$dialog.alert({
                        title: this.$t("app.assets.explain"),
                        message: this.$t("app.assets.text2"),
                        confirmButtonText: this.$t("app.common.confirm"),
                        confirmButtonColor: "#07C160",
                        closeOnClickOverlay: !0
                    })
                },
                onTopUpCoin() {
                    this.$router.push({
                        path: "/recharge/select"
                    }),
                    console.log("充币")
                },
                onTopDownCoin() {
                    this.$store.state.thirdPartyWithdrawalAddress ? window.open(this.$store.state.thirdPartyWithdrawalAddress, "_blank") : this.$router.push({
                        path: "/withdraw"
                    })
                },
                onClickBuyCoin() {
                    this.onComingsoon(),
                    console.log("我要买币")
                },
                getData() {
                    (0,
                    r.eH)().then((t=>{
                        const {total: s, list: e} = t.data;
                        this.total = s,
                        this.aeestsList = e
                    }
                    )).catch((t=>{
                        console.log(t)
                    }
                    ))
                },
                aeestDetail(t) {
                    this.$router.push({
                        path: "/assets/detail",
                        query: {
                            coinid: t
                        }
                    })
                },
                onComingsoon() {
                    this.$dialog.alert({
                        title: a.a.t("app.msg.hint"),
                        message: a.a.t("app.home.comingsoon")
                    })
                }
            }
        }
          , c = o
          , u = e(1001)
          , l = (0,
        u.Z)(c, i, n, !1, null, "3984ce3c", null)
          , p = l.exports
    },
    6484: function(t, s, e) {
        "use strict";
        e.d(s, {
            JV: function() {
                return u
            },
            O7: function() {
                return c
            },
            On: function() {
                return h
            },
            V6: function() {
                return r
            },
            XW: function() {
                return A
            },
            b2: function() {
                return p
            },
            eH: function() {
                return n
            },
            iI: function() {
                return a
            },
            mY: function() {
                return l
            },
            y$: function() {
                return o
            },
            zQ: function() {
                return g
            }
        });
        var i = e(6582);
        function n() {
            return (0,
            i.Z)({
                url: "/assets/list",
                method: "get"
            })
        }
        function a(t) {
            return (0,
            i.Z)({
                url: "/assets/finance",
                method: "get",
                params: t
            })
        }
        function r() {
            return (0,
            i.Z)({
                url: "/withdraw/address",
                method: "get"
            })
        }
        function o(t) {
            return (0,
            i.Z)({
                url: "/withdraw/addaddress",
                method: "post",
                data: t
            })
        }
        function c() {
            return (0,
            i.Z)({
                url: "/recharge/coinlist",
                method: "get"
            })
        }
        function u(t) {
            return (0,
            i.Z)({
                url: "/recharge/rechargeinfo",
                method: "get",
                params: t
            })
        }
        function l(t) {
            return (0,
            i.Z)({
                url: "/recharge/order",
                method: "post",
                data: t
            })
        }
        function p() {
            return (0,
            i.Z)({
                url: "/recharge/list",
                method: "get"
            })
        }
        function A() {
            return (0,
            i.Z)({
                url: "/withdraw/channellist",
                method: "get"
            })
        }
        function g(t) {
            return (0,
            i.Z)({
                url: "/withdraw/deladdress",
                method: "post",
                data: t
            })
        }
        function h(t) {
            return (0,
            i.Z)({
                url: "/withdraw/order",
                method: "post",
                data: t
            })
        }
    },
    3130: function(t, s, e) {
        var i = {
            "./assets-bg.png": 6909,
            "./assets-hide.png": 422,
            "./assets-show.png": 9481
        };
        function n(t) {
            var s = a(t);
            return e(s)
        }
        function a(t) {
            if (!e.o(i, t)) {
                var s = new Error("Cannot find module '" + t + "'");
                throw s.code = "MODULE_NOT_FOUND",
                s
            }
            return i[t]
        }
        n.keys = function() {
            return Object.keys(i)
        }
        ,
        n.resolve = a,
        t.exports = n,
        n.id = 3130
    },
    5327: function(t, s, e) {
        "use strict";
        t.exports = e.p + "img/arrow-right.d1bd2236.svg"
    },
    1757: function(t, s, e) {
        "use strict";
        t.exports = e.p + "img/recharge.800e22c1.svg"
    },
    9272: function(t, s, e) {
        "use strict";
        t.exports = e.p + "img/tip.9945ec68.svg"
    },
    5166: function(t, s, e) {
        "use strict";
        t.exports = e.p + "img/withdraw.30e1d9a0.svg"
    },
    6909: function(t, s, e) {
        "use strict";
        t.exports = e.p + "img/assets-bg.5ea97ef1.png"
    },
    422: function(t) {
        "use strict";
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVbSURBVHgB7Vg/UxtHFH9vRfjjsZBcJLHB4EuRGXcohYm6iC6doXMqoEtn8wmQqowr4BMgunTQZVIhZpKJgMxE/gRZBHhcCiYDDKB7ebtngXS7e7oTeMaFfjNgs7f79vd2398F6KOPPvro4w5AuC8Uslm4eJiDppgSAnIE6HVuRNL3oQbkv4O/jypwT7i7AvmnBUFinghmWVo21hqCBiJt+U3auKsyvSvwYmIBBcyziALcDZKVL8JefQN6QHIF+MSRcPkeiIchCS9noPpBJlkkEk3+fnIFSWx/AvIKHtLgv2J6cjnJong3kH+shG/y/3JR0wiowiK3ANlRYUBCVUr9oeCxg1/ngMQUz5rF7gcQ+za6K/BiPIcipch7YGfdIAFrMCxWoSIbEAd5zwPfLyLCD065Sgm/OQf7x7UoUZEKpPKT8xz6Vl3RhYCJj4iiQZz9pBVO1Z8+wQETrhgR51aReQeFBhEtwt7hFiRVQJMnKDs+8xX7i1BtI8R5QJyNvmal3kSEU4ks09+rlzpGdWAQ6+C4DUJYgKo9StkVmJ6YRcRNqzBl5yOpuY5TD3xkG9zmEIZp43wb6NMKIM1CAiVMBZTNY2rbdoraZHbrbzoGk5N3K6HlTRb5lmyRqME+MRP2CWGQUQ5rI09QMsgzeiSvECiuSpB2VOtFPu2SZX5Wc2OOYFWABbnIaPJ79WJ4XOR1zPYsm0nlC+wnM/pH+QWPWeZ5cDZqHEqEEobSqRsyX3/1C//zI8QkrzGeKfPvbOd8rm8esI/8ebADR6dS/xyf7MKXjzZEyn8CiB25hCNQjr+/NWQfnVRgIsOfoRD6khWXg8P0/vR3vV4P6boG103ynJT2DubAhiBybIdGJY2I75z5IOdlccj/B0K3Rk1/xlXU4fSzTZtj860usUmvisDu0eY0Eh7gIrjgi4JF6FpkMqvJhp4TRko4Mzxdag4yPM4nv6y4C+F/UYSwHavsimKmS2b1jJGmH5k1g52tc6ac85XSigtzCn1hnx1aF+wsz8xN1K8L+Hxg58I5SbICqUW7dpYQ1w4E8yQjTOF2V8scVWq40IqOZmiXgKIkVMVIKUfIOk+vOwVbTIEv7nWk0oqMmhOGqpNc25ylrSUGW05RcQ/C6NFJFZ5mHrHwfGj5czGeATo+2TEkc3jE8Yyqe4bbRrPievAxfSt2QF5chMmL8/SKpZeQsH+4BBYEeQZ/NsgHFYEOvTd5gON0FQfoFYTiOhMsOJWYyIyYcRpzeD30CsYyAGPpERgb9WA8+xKbQ2VbI8R5Zo3zQMVGXreaJiRXwD+BbFwE9NqhCiryrdmY65OiUUU64noCSNqtfwMJyOuI1GqUIFwLKX/wxZzFqbXNGe1eK8TZy4Tu5IO1neS5bbWSV6FdcWsjr2Avp/OcmQkdDkxbhFdLRinsuLlI8u1klIOfpzdd/TYJmoO/zMYmZRV/dFqDidED7l0ttTk+R0jNwpP0O3jPdY6e32iwHa99rF08AEdDE7Sfb9mGF+EP+eFmXJUlV8O/Kf+xLkPuyqqHv9q+RffEqrEBvglHh8WvbWUfr0pmTc8tpSo1bpNkTTf61VC9oyPT6PLHatXCXClMfNuHZXAgRlPvcVPvu5t61SZyl2ZVxIWY7ae2+X3Ze1N/g9g2jhXyaUu/fz78rwaVRqO1HuDaU40+ClVZdn1WqbGPGA5r3RGSwN3u3RusbWsEenhaTBxxYkE/FiCVDD/pgt4fd4NQ62opYyMgjmXXs0k39K5AC0HEWWBBL5M8r3NiVE+QG0lPPIy7K9AOpYx+/1QvcuSFtpLQCqfDA7XYz5B99NFHH318SvwP14hskKS5oRcAAAAASUVORK5CYII="
    },
    9481: function(t) {
        "use strict";
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUgSURBVHgB1Vk7UyNHEO4ecRxQZx6J7TKvDZ2dHIAViszOUOaMI3NmkzmDi1yOgF8A/ALk0BGiyi7L4EDOHC6Pc10orlyHTKFtd88KPXZmVruSTiV9iXZnd3q+nu3nCGGckPvUQ3p2BIB5vqsQPhQQxgWa/OQZX3mtQSyNhwJW8iFGX4EY8gRUHG0FYsgzfEK1MboKJCAPZd8fTQUSkpebwSmQn5+H2oss1NVLpSBLgF77YwTygwAqQMFf8OdtySknBflQbr/ILeUVqS0i2GRp84nmEFQRqRjU6aRDmZTkBb0rsLb8ChVsNZJKP/BZ+T1QD+dpyQvSK8A7joS7AyCeFE7yglQKqC9X9gngexgeYskLkikQ2uYpX2XjXuPEUmKRRUB2VJjwmwvnPXbwxyyQeslvbWKyr9eVPCRSYG0xiyoj5D2ws66SgkOYUgdQ8quQBDnPw4D2AWnT8UYi8oKJuIeZ3MoWh74DvrRGFzanQ5hRewZx9pOncCq3AcEVBEGpFXFqvHWT2X7JCzCWPMGxe5FgG8ptIZDzgHo/+532EXc4lcxZ5Hdk5z1IQF541OWifH0CiRVYX95ExFPbI23n05lCx67Hx++ksJJ/2kRCeGVTwlRAbB4zZ7Zd1Cbzx3VnFBoC+QaqFNQ34PJNpX2iMsiIw9rIE7w2yDM+BHlY87IW853X3Jhj+2BLAbZhZ90t5C+u96LjKreyCy5bZl9gP9kgpG1IQ15w6XO7yGuaCL+21F0NZJpkPvn4R/75ChKS11icO4ZIhCLi+maGfeS3q3NYmuEvNHEE9igWH21u70qwPIds4/nIk3n1MDlF/7z7RW5CH9B1DR6BQZ6T0sVVwbqALinUmUFqWn2hHbyHwswGXF89teUL/sI7bNIHKrR7qW3MRWAG3Z8/UHmL0MOeyLeZhCHzQXPwo+O887uyjlLBsz1jIcmuskh8ZvWMkXpQSUteog3cz+6DCxU/5MKcIk/YZ58fKXaWVWOSNqwapMaEWk1LPiZZtsHOhXOSzwpktu3adXq7AYSKMRSS8SAteSk1XHiKjmZo9wHVayVCKeMIWfcfHTkFY1CBZOi+81InuZZ5rzl40XG2nD2RGYbR27syLM0tsOXkItM/V4tzQG/uzg3Jt+98XJyTumcK+iEvO3l5s2ObHOYZ/DY63qgIftLvNEf/46rS4u2iqVpfsUUp0GV0f+Qlz5y4yOtW0yIXplVzvJnI4G21BssLP/PpgcTcTntDyBtfQkebzD4kTFIOh/U5SRbSkNdyf/XfmgoIbqtV+GzhnJX4xjCNdiV6CJU28vo9WbOdfNi2/mBIldBO6mu48P/upGVDjjMzocOBqcjTsgMhH0lmHDROXYcFpKgAv98Uo+PuljJWCSu6k3e1n2FZYo02epoUhOWbY9uz+J5YGhtgJbofWNnLg1aGrehGvxw5kZMu7n5213nSoRWmHRf57goIuDZHFbib+pQ9rEbC9pMCVZDSOk5UbFOvkalVgSbBuUiUvDT0j/z74t8KlBoOyqcQAI+eNPqoOMrdY57it477AU3ehy6IFzOYaJMK1rY1Bsr5ZMjk5bBAOrg05AV2ExoieX3KgXjMjnrSy3xTgR46qXoA8ldPFVIcr7MPyBHkiRGZUqLTB/ptA8WB9fmnnMhRRAbKvDCcTk1UEh9DdkFLgQH1sMNGqMCYkhfgOJMXKAyeS7r3LM9GnrxAOc7ox4K8gBOZ/KvSgbEhL9CnEtz96IIpzIbjQ17wP0ARGBHxjjGqAAAAAElFTkSuQmCC"
    }
}]);
