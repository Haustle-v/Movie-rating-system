"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var Vuex = require("vuex");
var vueRouter = require("vue-router");
var serverRenderer = require("vue/server-renderer");
var moment = require("moment");
var axios = require("axios");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var Vuex__default = /* @__PURE__ */ _interopDefaultLegacy(Vuex);
var moment__default = /* @__PURE__ */ _interopDefaultLegacy(moment);
var axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios);
var navheader_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$d = {
  name: "navheader",
  setup(props, context) {
    const store = Vuex__default["default"].useStore();
    const router = vueRouter.useRoute();
    const user = vue.computed(() => store.state.userInfo);
    const searchText = vue.ref("");
    vue.watchEffect(() => {
      searchText.value = router.query.searchText;
    });
    return {
      user,
      searchText
    };
  },
  methods: {
    goSearch() {
      this.$router.push({
        path: "/search",
        query: {
          searchText: this.searchText
        }
      });
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "nav-wapper" }, _attrs))} data-v-4e3ecc9c><div class="nav-header" data-v-4e3ecc9c><div class="nav-logo" data-v-4e3ecc9c></div><div class="nav-search" data-v-4e3ecc9c><input id="inp" placeholder="\u641C\u7D22\u7535\u5F71\u3001\u7535\u89C6\u5267\u3001\u7EFC\u827A\u3001\u5F71\u4EBA"${serverRenderer.ssrRenderAttr("value", $setup.searchText)} data-v-4e3ecc9c><div class="search-btn" data-v-4e3ecc9c></div></div>`);
  if ($setup.user.nickname) {
    _push(`<div class="nickname" data-v-4e3ecc9c>${serverRenderer.ssrInterpolate($setup.user.nickname)}\uFF0C<a data-v-4e3ecc9c>\u9000\u51FA</a></div>`);
  } else {
    _push(`<div class="nickname" data-v-4e3ecc9c> \u8BF7\u767B\u9646 </div>`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/navheader/navheader.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var navheader = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-4e3ecc9c"]]);
var navfooter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$c = {
  name: "navfooter",
  setup(props, context) {
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ id: "footer" }, _attrs))} data-v-2bb9c320><span id="icp" class="fleft gray-link" data-v-2bb9c320> \xA9 2021\uFF0D2022 movie.com, all rights reserved \u300AVue3.0\u300B </span></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/navfooter/navfooter.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var navfooter = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-2bb9c320"]]);
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$b = {
  name: "App",
  components: {
    navheader,
    navfooter
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_navheader = vue.resolveComponent("navheader");
  const _component_router_view = vue.resolveComponent("router-view");
  const _component_navfooter = vue.resolveComponent("navfooter");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ style: { "height": "100%" } }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_navheader, null, null, _parent));
  _push(`<div class="container">`);
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, {
    default: vue.withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderVNode(_push2, vue.createVNode(vue.resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
      } else {
        return [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component)))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(serverRenderer.ssrRenderComponent(_component_navfooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
var rankstar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = {
  name: "rankstar",
  props: {
    score: {
      type: Number
    }
  },
  setup(props, context) {
    let posY = vue.computed(() => {
      let res = 0;
      let s = props.score;
      if (s > 9) {
        res = 0;
      } else if (s > 8) {
        res = 11;
      } else if (s > 7) {
        res = 22;
      } else if (s > 6) {
        res = 33;
      } else if (s > 5) {
        res = 44;
      } else if (s > 4) {
        res = 55;
      } else if (s > 3) {
        res = 66;
      } else if (s > 2) {
        res = 77;
      } else if (s > 1) {
        res = 88;
      } else {
        res = 99;
      }
      return res;
    });
    return {
      posY
    };
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    class: "score",
    style: { backgroundPositionY: "-" + $setup.posY + "px" }
  }, _attrs))} data-v-5f30637e></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/rankstar/rankstar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var rankstar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-5f30637e"]]);
var mitem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = {
  name: "mitem",
  components: {
    rankstar
  },
  props: {
    itemData: {
      type: Object
    }
  },
  setup(props, context) {
    const router = vueRouter.useRouter();
    const goDetail = () => {
      let id = props.itemData.id;
      router.push("/detail?id=" + id);
    };
    return {
      goDetail
    };
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_rankstar = vue.resolveComponent("rankstar");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "mv-item" }, _attrs))} data-v-67f88730><img class="top-img"${serverRenderer.ssrRenderAttr("src", $props.itemData.cover.url)} data-v-67f88730><div class="title one-line" data-v-67f88730>${serverRenderer.ssrInterpolate($props.itemData.title)}</div>`);
  if ($props.itemData.rating) {
    _push(`<div class="score" data-v-67f88730><div class="score-content" data-v-67f88730>`);
    _push(serverRenderer.ssrRenderComponent(_component_rankstar, {
      score: Number($props.itemData.rating.value)
    }, null, _parent));
    _push(`<span class="score-text" data-v-67f88730>${serverRenderer.ssrInterpolate($props.itemData.rating.value.toFixed(1))}</span></div></div>`);
  } else {
    _push(`<div class="no-score" data-v-67f88730> \u6682\u65E0\u8BC4\u5206 </div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/mitem/mitem.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var mitem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-67f88730"]]);
var slider_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = {
  name: "slider",
  components: {},
  setup(props, context) {
    const { proxy } = vue.getCurrentInstance();
    let translateX = 0;
    const unit = 675;
    const prePage = () => {
      translateX = translateX - unit;
      if (translateX <= 0) {
        translateX = 0;
      }
      proxy.$refs.scrollContent.style.transform = "translateX(-" + translateX + "px)";
    };
    const nextPage = () => {
      translateX = translateX + unit;
      let maxwidth = proxy.$refs.scrollContent.clientWidth;
      if (translateX >= maxwidth) {
        translateX = Math.max(maxwidth - unit, translateX - unit);
      }
      proxy.$refs.scrollContent.style.transform = "translateX(-" + translateX + "px)";
    };
    return {
      prePage,
      nextPage
    };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "scoll-wrap" }, _attrs))} data-v-6adf0366><div class="scroll-content" data-v-6adf0366>`);
  serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="control" data-v-6adf0366><div class="left" data-v-6adf0366></div><div class="right" data-v-6adf0366></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/slider/slider.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var slider = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-6adf0366"]]);
const baseURL = "http://localhost:8887";
const apiKey = "0ac44ae016490db2204ce0a042db2916";
let service = axios__default["default"].create({
  baseURL,
  withCredentials: true,
  timeout: 3e4
});
service.interceptors.request.use((config) => {
  if (config.params) {
    config.params = {
      apiKey,
      ...config.params
    };
  }
  if (config.data) {
    config.data = {
      apiKey,
      ...config.data
    };
  }
  return config;
}, (error) => {
  Promise.reject(error);
});
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);
const get = (url, params = {}) => {
  return service({
    url,
    method: "get",
    params
  });
};
const post = (url, data = {}) => {
  let sendObject = {
    url,
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    data
  };
  return service(sendObject);
};
var service$1 = {
  get,
  post,
  baseURL
};
const mock = {
  nowmovie: "/json/nowmovie.json",
  recentmovie: "/json/recentmovie.json",
  toprank: "/json/toprank.json",
  detail: () => "/json/detail/detail.json",
  rate: () => "/json/detail/rate.json",
  actors: () => "/json/detail/actors.json",
  comments: () => "/json/detail/comments.json",
  search: "/json/search.json"
};
var home_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = {
  asyncData({ store }) {
    return store.dispatch("getHomeMovieData");
  },
  name: "home",
  components: {
    mitem,
    slider
  },
  setup() {
    const store = Vuex.useStore();
    let nowplayList = vue.computed(() => store.state.nowplayList);
    let recentplayList = vue.computed(() => store.state.recentplayList);
    let rankList = vue.computed(() => store.state.rankList);
    return {
      nowplayList,
      recentplayList,
      rankList
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_slider = vue.resolveComponent("slider");
  const _component_mitem = vue.resolveComponent("mitem");
  const _component_router_link = vue.resolveComponent("router-link");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home-container" }, _attrs))} data-v-040354ce><div class="left-content" data-v-040354ce><div class="now-play play-section" data-v-040354ce><h2 class="title" data-v-040354ce>\u6B63\u5728\u70ED\u6620</h2>`);
  if ($setup.nowplayList && $setup.nowplayList.length) {
    _push(`<div class="section-bottom" data-v-040354ce>`);
    _push(serverRenderer.ssrRenderComponent(_component_slider, null, {
      default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          serverRenderer.ssrRenderList($setup.nowplayList, (item) => {
            _push2(serverRenderer.ssrRenderComponent(_component_mitem, {
              itemData: item,
              key: item.id
            }, null, _parent2, _scopeId));
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($setup.nowplayList, (item) => {
              return vue.openBlock(), vue.createBlock(_component_mitem, {
                itemData: item,
                key: item.id
              }, null, 8, ["itemData"]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="recent-play play-section" data-v-040354ce><h2 class="title" data-v-040354ce>\u6700\u8FD1\u70ED\u95E8\u7535\u5F71</h2>`);
  if ($setup.recentplayList && $setup.recentplayList.length) {
    _push(`<div class="section-bottom" data-v-040354ce>`);
    _push(serverRenderer.ssrRenderComponent(_component_slider, null, {
      default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          serverRenderer.ssrRenderList($setup.recentplayList, (item, index) => {
            _push2(`<div class="recent-item" data-v-040354ce${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(item, (_item, _index) => {
              _push2(serverRenderer.ssrRenderComponent(_component_mitem, {
                itemData: _item,
                key: _item.id
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($setup.recentplayList, (item, index) => {
              return vue.openBlock(), vue.createBlock("div", {
                key: index,
                class: "recent-item"
              }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(item, (_item, _index) => {
                  return vue.openBlock(), vue.createBlock(_component_mitem, {
                    itemData: _item,
                    key: _item.id
                  }, null, 8, ["itemData"]);
                }), 128))
              ]);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="right-content" data-v-040354ce><div class="top-rank" data-v-040354ce><h2 class="title" data-v-040354ce>\u4E00\u5468\u53E3\u7891\u699C</h2><!--[-->`);
  serverRenderer.ssrRenderList($setup.rankList, (item, index) => {
    _push(`<div class="rank-item" data-v-040354ce>${serverRenderer.ssrInterpolate(index + 1)}`);
    _push(serverRenderer.ssrRenderComponent(_component_router_link, {
      to: "/detail?id=" + item.id,
      class: "rank-link"
    }, {
      default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${serverRenderer.ssrInterpolate(item.title)}`);
        } else {
          return [
            vue.createTextVNode(vue.toDisplayString(item.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="coopt" data-v-040354ce><h2 class="title" data-v-040354ce>\u5408\u4F5C\u8054\u7CFB</h2><ul data-v-040354ce><li data-v-040354ce>\u7535\u5F71\u5408\u4F5C\u90AE\u7BB1\uFF1Adouban@lvming.com</li><li data-v-040354ce>\u7535\u89C6\u5267\u5408\u4F5C\u90AE\u7BB1\uFF1Adouban@lvming.com</li></ul></div><div class="fans" data-v-040354ce><h2 class="title" data-v-040354ce>\u5173\u6CE8\u4F5C\u8005</h2><div class="fans-list" data-v-040354ce><div class="fans-item" data-v-040354ce><div class="fans-img weibo" data-v-040354ce></div><div data-v-040354ce><a href="#" data-v-040354ce>\u5FAE\u535A</a></div></div><div class="fans-item" data-v-040354ce><div class="fans-img weixin" data-v-040354ce></div><div data-v-040354ce><a href="#" data-v-040354ce>\u5FAE\u4FE1</a></div></div><div class="fans-item" data-v-040354ce><div class="fans-img zhihu" data-v-040354ce></div><div data-v-040354ce><a href="#" data-v-040354ce>\u77E5\u4E4E</a></div></div></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/home/home.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var home = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-040354ce"]]);
function createRouter() {
  return vueRouter.createRouter({
    history: vueRouter.createMemoryHistory("/"),
    routes: [
      { path: "/", redirect: "/home" },
      { path: "/home", component: home },
      { path: "/detail", component: () => Promise.resolve().then(function() {
        return detail$1;
      }) },
      { path: "/publish", component: () => Promise.resolve().then(function() {
        return publish$1;
      }) },
      { path: "/login", component: () => Promise.resolve().then(function() {
        return login$1;
      }) },
      { path: "/search", component: () => Promise.resolve().then(function() {
        return search$1;
      }) }
    ]
  });
}
function createStore() {
  return Vuex.createStore({
    state: {
      detailTitle: "",
      userInfo: {},
      commentList: [],
      nowplayList: [],
      recentplayList: [],
      rankList: []
    },
    mutations: {
      setTitle(state, title) {
        state.detailTitle = title;
      },
      setUser(state, obj) {
        state.userInfo = obj;
      },
      setCommentList(state, obj) {
        state.commentList.push(obj);
      },
      setHomeData(state, obj) {
        state.rankList = obj.rankList.subject_collection_items || [];
        state.nowplayList = obj.nowplayList.subject_collection_items || [];
        let toArray = (data) => {
          let n = 10;
          let len = data.length;
          let num = len % n == 0 ? len / n : Math.floor(len / n) + 1;
          let res = [];
          for (var i = 0; i < num; i++) {
            res.push(data.slice(i * n, i * n + n));
          }
          return res;
        };
        state.recentplayList = toArray(obj.recentplayList.subject_collection_items || []);
      }
    },
    actions: {
      async getHomeMovieData(context, obj) {
        let nowplayList = await service$1.get(mock.nowmovie, {
          start: 0,
          count: 50
        });
        let recentplayList = await service$1.get(mock.recentmovie, {
          start: 0,
          count: 50
        });
        let rankList = await service$1.get(mock.toprank, {
          start: 0,
          count: 10
        });
        context.commit("setHomeData", {
          nowplayList,
          recentplayList,
          rankList
        });
      }
    }
  });
}
function createApp() {
  const app = vue.createSSRApp(App);
  const router = createRouter();
  const store = createStore();
  app.use(router);
  app.use(store);
  return { app, router, store };
}
const prefetchData = (components, router, store) => {
  const asyncDatas = components.filter(
    (i) => typeof i.asyncData === "function"
  );
  return Promise.all(
    asyncDatas.map((i) => {
      return i.asyncData({ router: router.currentRoute.value, store });
    })
  );
};
const getAsyncData = (router, store, isServer) => {
  return new Promise(async (resolve) => {
    const { matched } = router.currentRoute.value;
    const components = matched.map((i) => {
      return i.components.default;
    });
    if (isServer) {
      await prefetchData(components, router, store);
    }
    resolve();
  });
};
async function render(url, manifest) {
  const { app, router, store } = createApp();
  router.push(url);
  await router.isReady();
  await getAsyncData(router, store, true);
  const ctx = {};
  ctx.state = store.state;
  const html = await serverRenderer.renderToString(app, ctx);
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return [html, preloadLinks, store];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    return "";
  }
}
var movieinfo_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = {
  name: "movieinfo",
  components: {
    rankstar
  },
  setup() {
    const store = Vuex__default["default"].useStore();
    let detailData = vue.ref({});
    let actors = vue.reactive({
      orgin: [],
      short: [],
      isShowMore: true
    });
    let rate = vue.reactive({
      list: [],
      betterList: []
    });
    const route = vueRouter.useRoute();
    let id = vue.computed(() => route.query.id);
    vue.onMounted(async () => {
      detailData.value = await service$1.get(mock.detail(id.value), {});
      store.commit("setTitle", detailData.value.title);
      actors.orgin = detailData.value.actors || [];
      actors.short = actors.orgin.slice(0, 3);
      actors.isShowMore = actors.orgin.length > 3;
      let rateData = await service$1.get(mock.rate(id.value), {});
      rate.list = dealRateData(rateData);
      rate.betterList = rateData.type_ranks || [];
    });
    const dealRateData = (rateData) => {
      let maxwidth = 70;
      let list = [];
      for (let i = 0; i < rateData.stats.length; i++) {
        let r = rateData.stats[i].toFixed(3) * 100;
        list.push({
          index: i + 1,
          count: r,
          width: r * maxwidth / 100
        });
      }
      return list.reverse();
    };
    const expand = () => {
      actors.short = actors.orgin;
      actors.isShowMore = false;
    };
    return {
      detailData,
      actors,
      expand,
      rate
    };
  },
  methods: {
    goPublish() {
      if (this.$store.state.userInfo.nickname) {
        this.$router.push("/publish?id=" + this.detailData.id);
      } else {
        this.$router.push("/login");
      }
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_rankstar = vue.resolveComponent("rankstar");
  if ($setup.detailData.id) {
    _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "movie-info" }, _attrs))} data-v-1fbe2f8c><h1 class="title" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate($setup.detailData.title)} ${serverRenderer.ssrInterpolate($setup.detailData.original_title)}<span class="year" data-v-1fbe2f8c>\uFF08${serverRenderer.ssrInterpolate($setup.detailData.year)}\uFF09</span></h1><div class="desc-content" data-v-1fbe2f8c><img class="mv-img"${serverRenderer.ssrRenderAttr("src", $setup.detailData.cover_url)} data-v-1fbe2f8c><div class="mv-desc" data-v-1fbe2f8c><p data-v-1fbe2f8c>\u5BFC\u6F14: `);
    if ($setup.detailData.directors && $setup.detailData.directors.length) {
      _push(`<a href="#" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate($setup.detailData.directors[0].name)}</a>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</p><p data-v-1fbe2f8c>\u4E3B\u6F14: <!--[-->`);
    serverRenderer.ssrRenderList($setup.actors.short, (item, index) => {
      _push(`<a href="#" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate(item.name)} `);
      if (index != $setup.actors.short.length - 1) {
        _push(`<!--[-->/<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    });
    _push(`<!--]-->`);
    if ($setup.actors.isShowMore) {
      _push(`<span class="more-actors" data-v-1fbe2f8c>\u66F4\u591A..</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</p><p data-v-1fbe2f8c>\u7C7B\u578B: <span class="it" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate($setup.detailData.genres.join("/"))}</span></p><p data-v-1fbe2f8c>\u5236\u7247\u56FD\u5BB6/\u5730\u533A: <span class="it" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate($setup.detailData.countries.join("/"))}</span></p><p data-v-1fbe2f8c>\u8BED\u8A00: <span class="it" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate($setup.detailData.languages.join("/"))}</span></p><p data-v-1fbe2f8c>\u4E0A\u6620\u65E5\u671F: <span class="it" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate($setup.detailData.pubdate.join("/"))}</span></p><p data-v-1fbe2f8c>\u7247\u957F: <span class="it" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate($setup.detailData.durations.join("/"))}</span></p><p data-v-1fbe2f8c>\u53C8\u540D: <span class="it" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate($setup.detailData.aka.join("/"))}</span></p></div><div class="mv-rank" data-v-1fbe2f8c><div class="rank-title" data-v-1fbe2f8c>\u8C46\u74E3\u8BC4\u5206</div><div class="rank-score" data-v-1fbe2f8c><div class="score" data-v-1fbe2f8c><strong class="num" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate($setup.detailData.rating.value)}</strong></div><div class="score-star" data-v-1fbe2f8c>`);
    _push(serverRenderer.ssrRenderComponent(_component_rankstar, {
      score: $setup.detailData.rating.value,
      class: "rankstar"
    }, null, _parent));
    _push(`<div class="score-comment" data-v-1fbe2f8c><a href="#" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate($setup.detailData.rating.count)}</a>\u4EBA\u8BC4\u4EF7</div></div></div><div class="score-rate" data-v-1fbe2f8c><!--[-->`);
    serverRenderer.ssrRenderList($setup.rate.list, (item) => {
      _push(`<div class="rate-item" data-v-1fbe2f8c><span data-v-1fbe2f8c>${serverRenderer.ssrInterpolate(item.index)} \u661F</span><span class="wline" style="${serverRenderer.ssrRenderStyle({ width: item.width + "px" })}" data-v-1fbe2f8c></span><span class="percent" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate(item.count.toFixed(1))} %</span></div>`);
    });
    _push(`<!--]--></div><div class="better-content" data-v-1fbe2f8c><!--[-->`);
    serverRenderer.ssrRenderList($setup.rate.betterList, (item, index) => {
      _push(`<div class="better-item" data-v-1fbe2f8c>\u597D\u4E8E <a href="#" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate((item.rank * 100).toFixed(1) + "%")} ${serverRenderer.ssrInterpolate(item.type)}</a></div>`);
    });
    _push(`<!--]--></div></div></div><div class="opera-box" data-v-1fbe2f8c><div data-v-1fbe2f8c>\u8BF7\u8BC4\u5206\uFF1A</div><div data-v-1fbe2f8c><img src="https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif" data-v-1fbe2f8c>\xA0 <a href="javascript:void(0)" class="comment-link" data-v-1fbe2f8c>\u5199\u5F71\u8BC4</a></div></div><div class="intro" data-v-1fbe2f8c><h2 class="intro-title" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate($setup.detailData.title)}\u7684\u5267\u60C5\u7B80\u4ECB\xB7 \xB7 \xB7 \xB7 \xB7 \xB7 </h2><div style="${serverRenderer.ssrRenderStyle({ "text-indent": "20px" })}" data-v-1fbe2f8c>${serverRenderer.ssrInterpolate($setup.detailData.intro)}</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/detail/movieinfo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var movieinfo = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-1fbe2f8c"]]);
var movieactors_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = {
  name: "movieactors",
  components: {},
  setup() {
    const store = Vuex__default["default"].useStore();
    const title = vue.computed(() => store.state.detailTitle);
    let detailData = vue.reactive({
      list: []
    });
    const route = vueRouter.useRoute();
    let id = vue.computed(() => route.query.id);
    vue.onMounted(async () => {
      let data = await service$1.get(mock.actors(id.value));
      detailData.list = data.directors.concat(data.actors);
    });
    return {
      detailData,
      title
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.detailData.list.length) {
    _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "movie-actors" }, _attrs))} data-v-c0fb93cc><h2 class="intro-title" data-v-c0fb93cc>${serverRenderer.ssrInterpolate($setup.title)}\u7684\u6F14\u804C\u5458\xB7 \xB7 \xB7 \xB7 \xB7 </h2><div class="scroll-wrap" data-v-c0fb93cc><div class="scroll-content" data-v-c0fb93cc><!--[-->`);
    serverRenderer.ssrRenderList($setup.detailData.list, (item) => {
      _push(`<div class="actor-item" data-v-c0fb93cc><img class="actor-img"${serverRenderer.ssrRenderAttr("src", item.cover_url)} data-v-c0fb93cc><div class="actor-name one-line" data-v-c0fb93cc>${serverRenderer.ssrInterpolate(item.name)}</div><div class="actor-character one-line" data-v-c0fb93cc>${serverRenderer.ssrInterpolate(item.character)}</div></div>`);
    });
    _push(`<!--]--></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/detail/movieactors.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var movieactors = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-c0fb93cc"]]);
var moviecomments_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = {
  name: "moviecomments",
  components: {
    rankstar
  },
  setup() {
    const store = Vuex__default["default"].useStore();
    const title = vue.computed(() => store.state.detailTitle);
    const incommentList = vue.computed(() => store.state.commentList);
    let detailData = vue.reactive({
      list: []
    });
    const route = vueRouter.useRoute();
    let id = vue.computed(() => route.query.id);
    vue.onMounted(async () => {
      let data = await service$1.get(mock.comments(id.value), {
        start: 0,
        count: 20
      });
      detailData.list = incommentList.value.concat(data.reviews || []);
    });
    return {
      detailData,
      title
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_rankstar = vue.resolveComponent("rankstar");
  if ($setup.detailData.list.length) {
    _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "movie-comments" }, _attrs))} data-v-4ef703f0><h2 class="intro-title" data-v-4ef703f0>${serverRenderer.ssrInterpolate($setup.title)}\u7684\u5F71\u8BC4\xB7 \xB7 \xB7 \xB7 \xB7 </h2><div class="scroll-wrap" data-v-4ef703f0><!--[-->`);
    serverRenderer.ssrRenderList($setup.detailData.list || [], (item) => {
      _push(`<div class="comment-item" data-v-4ef703f0><div class="top-content" data-v-4ef703f0><img class="avatar"${serverRenderer.ssrRenderAttr("src", item.user.avatar)} data-v-4ef703f0><span class="nickname" data-v-4ef703f0>${serverRenderer.ssrInterpolate(item.user.name)}</span>`);
      if (item.rating && item.rating.value) {
        _push(`<div class="rankstar" data-v-4ef703f0><span class="rank-text" data-v-4ef703f0>\u770B\u8FC7</span>`);
        _push(serverRenderer.ssrRenderComponent(_component_rankstar, {
          score: item.rating.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="time" data-v-4ef703f0>${serverRenderer.ssrInterpolate(item.create_time)}</div></div><div class="content three-line" data-v-4ef703f0>${serverRenderer.ssrInterpolate(item.abstract)}</div></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/detail/moviecomments.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var moviecomments = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-4ef703f0"]]);
var detail_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = {
  name: "detail",
  components: {
    movieinfo,
    movieactors,
    moviecomments
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_movieinfo = vue.resolveComponent("movieinfo");
  const _component_movieactors = vue.resolveComponent("movieactors");
  const _component_moviecomments = vue.resolveComponent("moviecomments");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "detail-container" }, _attrs))} data-v-90210b0a><div class="left-content" data-v-90210b0a>`);
  _push(serverRenderer.ssrRenderComponent(_component_movieinfo, null, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_movieactors, null, null, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_moviecomments, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/detail/detail.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var detail = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-90210b0a"]]);
var detail$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": detail
}, Symbol.toStringTag, { value: "Module" }));
var publish_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = {
  name: "publish",
  components: {},
  setup() {
    let movieData = vue.ref({});
    let content = vue.ref("");
    let starlist2 = vue.reactive({
      list: new Array(5).fill({ state: "normal" })
    });
    const route = vueRouter.useRoute();
    let id = vue.computed(() => route.query.id);
    vue.onMounted(async () => {
      let data = await service$1.get(mock.detail(id.value), {});
      movieData.value = data;
    });
    const changeScore = (index) => {
      let list = [];
      starlist2.list.forEach((item, _index) => {
        if (_index <= index) {
          item.state = "full";
        } else {
          item.state = "normal";
        }
        list.push({ ...item });
      });
      starlist2.list = list;
    };
    return {
      movieData,
      starlist: starlist2,
      content,
      changeScore
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    submit() {
      let count = 0;
      this.starlist.list.forEach((item) => {
        if (item.state == "full") {
          count++;
        }
      });
      this.$store.commit("setCommentList", {
        rating: {
          value: count
        },
        user: {
          avatar: this.userInfo.avatar,
          name: this.userInfo.name
        },
        create_time: moment__default["default"]().format("YYYY-MM-DD HH:mm:ss"),
        abstract: this.content
      });
      this.$router.push("/detail?id=" + this.movieData.id);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "publish-container" }, _attrs))} data-v-655b210a><h1 class="page-title" data-v-655b210a>\u5199\u8BC4\u8BBA</h1>`);
  if ($setup.movieData.title) {
    _push(`<div class="movie-info" data-v-655b210a><img class="info-img"${serverRenderer.ssrRenderAttr("src", $setup.movieData.cover_url)} data-v-655b210a><div class="right-info" data-v-655b210a><div class="title" data-v-655b210a>${serverRenderer.ssrInterpolate($setup.movieData.title)}</div><div class="desc" data-v-655b210a>${serverRenderer.ssrInterpolate($setup.movieData.card_subtitle)} ${serverRenderer.ssrInterpolate($setup.movieData.rating.value)}\u5206(${serverRenderer.ssrInterpolate($setup.movieData.rating.count)}\u8BC4\u4EF7)</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="score-add" data-v-655b210a><div data-v-655b210a>\u7ED9\u4E2A\u8BC4\u4EF7\u5427\uFF1A</div><div class="rankstar" data-v-655b210a><!--[-->`);
  serverRenderer.ssrRenderList($setup.starlist.list || [], (item, index) => {
    _push(`<div class="${serverRenderer.ssrRenderClass(["star-item", item.state])}" data-v-655b210a></div>`);
  });
  _push(`<!--]--></div></div><div class="text-input" data-v-655b210a><textarea id="commentInput" placeholder="\u5199\u8BC4\u8BBA" data-v-655b210a>${serverRenderer.ssrInterpolate($setup.content)}</textarea></div><div id="submitBtn" data-v-655b210a>\u63D0\u4EA4</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/publish/publish.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var publish = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-655b210a"]]);
var publish$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": publish
}, Symbol.toStringTag, { value: "Module" }));
var login_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  name: "login",
  data() {
    return {
      prevRoute: null
    };
  },
  components: {},
  setup() {
    let loginInfo = vue.reactive({
      username: "",
      password: "",
      errorInfo: false
    });
    const userInfo = {
      nickname: "\u5415\u5C0F\u9E23",
      age: 30,
      username: "",
      avatar: "https://qiniu.nihaoshijie.com.cn/images/image-1559844211742.jpeg"
    };
    const store = Vuex__default["default"].useStore();
    const { proxy } = vue.getCurrentInstance();
    const login2 = () => {
      if (loginInfo.username == "lvming" && loginInfo.password == "abc123") {
        store.commit("setUser", userInfo);
        loginInfo.errorInfo = false;
        if (proxy.prevRoute) {
          proxy.$router.push(proxy.prevRoute);
        }
      } else {
        loginInfo.errorInfo = true;
      }
    };
    return {
      loginInfo,
      login: login2
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "login-container" }, _attrs))} data-v-7654060c><div class="login-content" data-v-7654060c><div class="login-logo" data-v-7654060c></div><div class="login-title" data-v-7654060c>\u7528\u6237\u767B\u9646</div><div class="input-wrap" data-v-7654060c><div data-v-7654060c><input class="login-input" type="text" placeholder="\u624B\u673A\u53F7 / \u90AE\u7BB1"${serverRenderer.ssrRenderAttr("value", $setup.loginInfo.username)} data-v-7654060c></div><div data-v-7654060c><input class="login-input" type="password" placeholder="\u5BC6\u7801"${serverRenderer.ssrRenderAttr("value", $setup.loginInfo.password)} data-v-7654060c></div><div class="login-btn" data-v-7654060c>\u767B\u9646</div></div>`);
  if ($setup.loginInfo.errorInfo) {
    _push(`<div class="error-tips" data-v-7654060c>\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="tips" data-v-7654060c>lvming/abc123</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/login/login.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var login = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7654060c"]]);
var login$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": login
}, Symbol.toStringTag, { value: "Module" }));
var search_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "search",
  components: {
    rankstar
  },
  setup() {
    vue.ref({});
    vue.ref("");
    let searchList = vue.reactive({
      list: []
    });
    const route = vueRouter.useRoute();
    vue.computed(() => route.query.searchText);
    vue.watch(
      () => route.query.searchText,
      async (v) => {
        let data = await service$1.get(mock.search, {
          start: 0,
          count: 20,
          q: v
        });
        searchList.list = data.items.filter((item) => {
          return item.target_type == "movie";
        });
      },
      {
        deep: false,
        immediate: true
      }
    );
    vue.onMounted(async () => {
    });
    const changeScore = (index) => {
      let list = [];
      starlist.list.forEach((item, _index) => {
        if (_index <= index) {
          item.state = "full";
        } else {
          item.state = "normal";
        }
        list.push({ ...item });
      });
      starlist.list = list;
    };
    return {
      searchList,
      changeScore
    };
  },
  computed: {},
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_rankstar = vue.resolveComponent("rankstar");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "search-container" }, _attrs))} data-v-f05bf75a><h1 class="page-title" data-v-f05bf75a>\u641C\u7D22\uFF1A${serverRenderer.ssrInterpolate(_ctx.$route.query.searchText)}</h1><div class="search-result" data-v-f05bf75a>`);
  if ($setup.searchList.list.length == 0) {
    _push(`<div data-v-f05bf75a>\u6682\u65E0\u641C\u7D22\u6570\u636E</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  serverRenderer.ssrRenderList($setup.searchList.list, (item) => {
    _push(`<div class="item-content" data-v-f05bf75a><img${serverRenderer.ssrRenderAttr("src", item.target.cover_url)} class="item-img" data-v-f05bf75a><div class="left-content" data-v-f05bf75a>`);
    _push(serverRenderer.ssrRenderComponent(_component_router_link, {
      to: "/detail?id=" + item.target.id,
      class: "title"
    }, {
      default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${serverRenderer.ssrInterpolate(item.target.title)}`);
        } else {
          return [
            vue.createTextVNode(vue.toDisplayString(item.target.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<div class="rank-content" data-v-f05bf75a>`);
    _push(serverRenderer.ssrRenderComponent(_component_rankstar, {
      score: item.target.rating.value,
      class: "rank-star"
    }, null, _parent));
    _push(`<div class="score-text" data-v-f05bf75a>${serverRenderer.ssrInterpolate(item.target.rating.value)}</div></div><div class="place" data-v-f05bf75a>${serverRenderer.ssrInterpolate(item.target.card_subtitle)}</div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/search/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var search = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f05bf75a"]]);
var search$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": search
}, Symbol.toStringTag, { value: "Module" }));
exports.render = render;
