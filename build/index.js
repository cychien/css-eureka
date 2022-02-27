var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/justinchien/css-eureka/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/styles/app.css
var app_default = "/build/_assets/app-CQQLW3XH.css";

// app/components/Navbar/index.ts
init_react();

// app/components/Navbar/Navbar.tsx
init_react();
var import_remix2 = __toModule(require_remix());
var import_classnames3 = __toModule(require("classnames"));

// app/utils/hooks/useToggle.ts
init_react();
var React2 = __toModule(require("react"));
function useToggle(initialState) {
  const [state, setState] = React2.useState(initialState);
  const toggle = React2.useCallback(() => {
    setState((prev) => !prev);
  }, []);
  return [state, toggle];
}

// app/components/Navbar/MobileMenuButton.tsx
init_react();
var React3 = __toModule(require("react"));
var import_classnames = __toModule(require("classnames"));
function MobileMenuButton({
  isOpen,
  onClick,
  className
}) {
  return /* @__PURE__ */ React3.createElement("button", {
    "aria-label": "Open menu",
    className: (0, import_classnames.default)("relative h-[19px] w-[24px]", className),
    onClick
  }, /* @__PURE__ */ React3.createElement(Bar, {
    className: (0, import_classnames.default)("absolute top-0", isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100")
  }), /* @__PURE__ */ React3.createElement(Bar, {
    className: (0, import_classnames.default)("absolute top-[8px]", isOpen ? "rotate-45 !bg-primary-500" : "rotate-0")
  }), /* @__PURE__ */ React3.createElement(Bar, {
    className: (0, import_classnames.default)("absolute top-[8px]", isOpen ? "-rotate-45 !bg-primary-500" : "rotate-0")
  }), /* @__PURE__ */ React3.createElement(Bar, {
    className: (0, import_classnames.default)("absolute top-[16px]", isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100")
  }));
}
function Bar({ className }) {
  return /* @__PURE__ */ React3.createElement("span", {
    className: (0, import_classnames.default)("block h-[3px] w-[24px] bg-gray-500 transition ease-in-out duration-200", className)
  });
}
var MobileMenuButton_default = MobileMenuButton;

// app/components/Navbar/Navbar.tsx
var import_framer_motion = __toModule(require("framer-motion"));

// app/components/Spacer/index.ts
init_react();

// app/components/Spacer/Spacer.tsx
init_react();
var import_classnames2 = __toModule(require("classnames"));
var spacerSizes = {
  "0": "h-0",
  "2xs": "h-2xs",
  xs: "h-xs",
  sm: "h-sm",
  md: "h-md",
  lg: "h-lg",
  xl: "h-xl",
  "2xl": "h-2xl",
  "3xl": "h-3xl",
  "4xl": "h-4xl"
};
function Spacer({
  size,
  className
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: (0, import_classnames2.default)(spacerSizes[size], className)
  });
}
var Spacer_default = Spacer;

// app/components/ShiftBy/index.ts
init_react();

// app/components/ShiftBy/ShiftBy.tsx
init_react();
var React4 = __toModule(require("react"));
function ShiftBy({ children, x = 0, y = 0, className }) {
  return /* @__PURE__ */ React4.createElement("div", {
    style: {
      transform: `translate(${x}px, ${y}px)`
    },
    className
  }, children);
}
var ShiftBy_default = ShiftBy;

// app/constants/pages.ts
init_react();
var PAGES = [
  { name: "\u6587\u7AE0", link: "/articles" },
  { name: "\u85DD\u5ECA", link: "/gallery" }
];
var pages_default = PAGES;

// app/components/Navbar/Navbar.tsx
function Navbar() {
  const [isMobileMenuOpen, toggleMobileMenu] = useToggle(false);
  const { pathname } = (0, import_remix2.useLocation)();
  return /* @__PURE__ */ React.createElement("header", {
    className: "py-xl z-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto flex justify-between items-center sm:items-baseline"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/",
    prefetch: "intent",
    className: "text-3xl font-logo font-bold text-primary-500 leading-none rotate-0 transition-transform will-change-transform hover:-rotate-3"
  }, "CSS Eureka"), /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Main navigation",
    className: "hidden sm:block"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex space-x-xl"
  }, pages_default.map((page) => /* @__PURE__ */ React.createElement("li", {
    key: page.link
  }, /* @__PURE__ */ React.createElement(ShiftBy_default, {
    y: -10
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: page.link,
    prefetch: "intent",
    className: (0, import_classnames3.default)("block font-medium relative text-lg", (page.link === "/articles" ? pathname.match(/^(\/articles|\/article)/) : pathname.startsWith(page.link)) ? "!text-primary-500" : "text-gray-400 hover:text-gray-500")
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, page.name, (page.link === "/articles" ? pathname.match(/^(\/articles|\/article)/) : pathname.startsWith(page.link)) && /* @__PURE__ */ React.createElement("svg", {
    className: "absolute bottom-[-10px] left-[-4px] max-w-none",
    width: "46",
    height: "7",
    viewBox: "0 0 46 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M2 5C19.6018 2.73613 52.2588 -0.433289 42.0722 5",
    stroke: "#FDA4AF",
    strokeWidth: "3",
    strokeLinecap: "round",
    className: "animate-[draw-navlink-stroke_300ms_ease-out]"
  }))))))))), /* @__PURE__ */ React.createElement(import_framer_motion.motion.nav, {
    "aria-label": "Main navigation",
    className: (0, import_classnames3.default)("fixed inset-x-0 top-0 bg-secondary-300 p-md z-10 sm:hidden", !isMobileMenuOpen && "hidden"),
    initial: "closed",
    animate: isMobileMenuOpen ? "open" : "closed",
    variants: {
      open: { opacity: 1, height: "100vh" },
      closed: { opacity: 0, height: 0 }
    }
  }, /* @__PURE__ */ React.createElement(Spacer_default, {
    size: "3xl"
  }), /* @__PURE__ */ React.createElement(import_framer_motion.motion.ul, {
    className: "space-y-lg",
    variants: {
      open: {
        transition: { delayChildren: 0.2, staggerChildren: 0.1 }
      }
    }
  }, pages_default.map((page) => /* @__PURE__ */ React.createElement(import_framer_motion.motion.li, {
    key: page.link,
    className: "font-medium text-2xl",
    variants: { open: { opacity: 1 }, closed: { opacity: 0 } }
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: page.link,
    prefetch: "intent",
    className: (page.link === "/articles" ? pathname.match(/^(\/articles|\/article)/) : pathname.startsWith(page.link)) ? "text-primary-500" : "text-primary-300"
  }, page.name))))), /* @__PURE__ */ React.createElement(ShiftBy_default, {
    y: -10,
    className: "z-10 sm:hidden"
  }, /* @__PURE__ */ React.createElement(MobileMenuButton_default, {
    isOpen: isMobileMenuOpen,
    onClick: toggleMobileMenu
  }))));
}
var Navbar_default = Navbar;

// app/components/Footer/index.ts
init_react();

// app/components/Footer/Footer.tsx
init_react();
var import_remix3 = __toModule(require_remix());
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "pt-xl pb-2xl md:pb-3xl bg-bg-200 border-t-[1px] border-t-bg-300"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between flex-col md:flex-row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-3xl"
  }, pages_default.map((page) => /* @__PURE__ */ React.createElement(import_remix3.Link, {
    key: page.link,
    to: page.link,
    prefetch: "intent",
    className: "text-gray-500 hover:text-gray-700"
  }, page.name))), /* @__PURE__ */ React.createElement(Spacer_default, {
    size: "lg",
    className: "block md:hidden"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    prefetch: "intent",
    className: "text-2xl font-logo font-bold text-primary-500"
  }, "CSS Eureka"), /* @__PURE__ */ React.createElement(Spacer_default, {
    size: "xs"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-gray-500"
  }, "\u5982\u679C\u4F60\u66FE\u6DF1\u5165\u7814\u7A76\u904E CSS \u898F\u7BC4\uFF0C\u90A3\u4F60\u53EF\u80FD\u770B\u904E\u6A19"), /* @__PURE__ */ React.createElement(Spacer_default, {
    size: "lg"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-sm"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-[32px] w-[32px] bg-gray-200 rounded-full"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "h-[32px] w-[32px] bg-gray-200 rounded-full"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "h-[32px] w-[32px] bg-gray-200 rounded-full"
  }))))));
}
var Footer_default = Footer;

// route:/Users/justinchien/css-eureka/app/root.tsx
var meta = () => {
  return { title: "CSS Eureka", description: "\u5E36\u4F60\u91CD\u65B0\u7406\u89E3 CSS" };
};
var links = () => {
  return [
    { rel: "stylesheet", href: app_default },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      crossOrigin: "anonymous",
      href: "https://fonts.gstatic.com"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Noto+Sans+TC:wght@400;500;700&display=swap"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null), /* @__PURE__ */ React.createElement(Spacer_default, {
    size: "0",
    className: "!h-[120px] md:!h-[142px]"
  }), /* @__PURE__ */ React.createElement(Footer_default, null), /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
}

// route:/Users/justinchien/css-eureka/app/routes/article.$slug.tsx
var article_slug_exports = {};
__export(article_slug_exports, {
  default: () => article_slug_default,
  loader: () => loader
});
init_react();
var React6 = __toModule(require("react"));
var import_remix5 = __toModule(require_remix());

// app/components/Tag/index.ts
init_react();

// app/components/Tag/Tag.tsx
init_react();
function Tag({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "inline-block rounded-lg py-[6px] px-sm bg-secondary-200 text-secondary-700 text-sm"
  }, children);
}
var Tag_default = Tag;

// app/constants/categories.ts
init_react();
var categoryKeys = ["mechanism", "flexbox"];
var CATEGORIES = {
  mechanism: "\u6E32\u67D3\u6A5F\u5236",
  flexbox: "Flexbox"
};
var categories_default = CATEGORIES;

// app/utils/mdx.server.ts
init_react();
var import_gray_matter = __toModule(require("gray-matter"));
var import_mdx_bundler = __toModule(require("mdx-bundler"));
var import_tiny_invariant2 = __toModule(require("tiny-invariant"));

// app/utils/github.server.ts
init_react();
var import_octokit = __toModule(require("octokit"));
var import_tiny_invariant = __toModule(require("tiny-invariant"));
var octokit = new import_octokit.Octokit({ auth: process.env.OCTOKIT_TOKEN });
async function downloadDirList(path2) {
  const { data } = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
    owner: "cychien",
    repo: "css-eureka",
    path: path2
  });
  (0, import_tiny_invariant.default)(Array.isArray(data), `Tried to download content from ${path2}. GitHub did not return an array of files. This should never happen...`);
  return data;
}
async function downloadFile(path2) {
  const { data } = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
    owner: "cychien",
    repo: "css-eureka",
    path: path2
  });
  (0, import_tiny_invariant.default)(data.content && data.encoding, `Tried to get ${path2} but got back something that was unexpected. It doesn't have a content or encoding property`);
  const encoding = data.encoding;
  return Buffer.from(data.content, encoding).toString();
}

// app/utils/mdx.server.ts
var import_promises = __toModule(require("fs/promises"));
var import_path = __toModule(require("path"));

// app/utils/rehype/rehypeMdxCodeMeta.ts
init_react();
var rehypeMdxCodeMeta = async () => {
  const { visit } = await import("unist-util-visit");
  return (options = {}) => {
    return (tree) => {
      visit(tree, "element", visitor);
    };
    function visitor(node, index, parentNode) {
      if (node.tagName === "code" && node.data && node.data.meta) {
        const blocks = node.data.meta.split(" ");
        node.properties = blocks.reduce((props, block) => {
          const [prop, value] = block.split("=");
          if (typeof value === "undefined") {
            props.line = prop;
            return props;
          }
          props[prop] = value;
          return props;
        }, node.properties);
      }
    }
  };
};
var rehypeMdxCodeMeta_default = rehypeMdxCodeMeta;

// app/utils/mdx.server.ts
function isValidMeta(meta3) {
  return meta3 && meta3.title && meta3.excerpt && meta3.publish_date && categoryKeys.includes(meta3.category);
}
var POSTS_PATH = import_path.default.join(process.cwd(), "posts");
async function getSpecificComponents(slug) {
  if (true) {
    const dirList2 = await import_promises.default.readdir(`${POSTS_PATH}/${slug}`);
    const componentContents2 = await Promise.all(dirList2.filter((filename) => filename !== "index.mdx").map(async (filename) => {
      const filePath = import_path.default.join(`${POSTS_PATH}/${slug}`, filename);
      const source = await import_promises.default.readFile(filePath, "utf-8");
      return {
        [`./${filename}`]: source
      };
    }));
    let result2 = {};
    componentContents2.forEach((c) => {
      result2[Object.keys(c)[0]] = Object.values(c)[0];
    });
    return result2;
  }
  const dirList = await downloadDirList(`posts/${slug}`);
  const componentContents = await Promise.all(dirList.filter((file) => file.name !== "index.mdx").map(async (file) => {
    const filePath = file.path;
    const source = await downloadFile(filePath);
    return {
      [`./${file.name}`]: source
    };
  }));
  let result = {};
  componentContents.forEach((c) => {
    result[Object.keys(c)[0]] = Object.values(c)[0];
  });
  return result;
}
async function getMdxPost(slug) {
  let source;
  if (true) {
    const filePath = import_path.default.join(POSTS_PATH, slug, "index.mdx");
    source = await import_promises.default.readFile(filePath, "utf-8");
  } else {
    const contentPath = `posts/${slug}/index.mdx`;
    source = await downloadFile(contentPath);
  }
  const { content, data } = (0, import_gray_matter.default)(source);
  const specificComps = await getSpecificComponents(slug);
  const { default: rehypeSlug } = await import("rehype-slug");
  const { default: rehypeAutolinkHeadings } = await import("rehype-autolink-headings");
  const { h, s } = await import("hastscript");
  const rehypeMdxCodeMetaPlugin = await rehypeMdxCodeMeta_default();
  const { code } = await (0, import_mdx_bundler.bundleMDX)({
    source: content,
    xdmOptions(options) {
      options.rehypePlugins = [
        ...options.rehypePlugins ?? [],
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "prepend",
            properties: { class: "heading-link" },
            content: () => [
              h("span.sr-only", "Link to this heading"),
              s("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewbox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }, [
                s("path", {
                  d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                }),
                s("path", {
                  d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                })
              ])
            ]
          }
        ],
        rehypeMdxCodeMetaPlugin
      ];
      return options;
    },
    files: __spreadValues({}, specificComps)
  });
  (0, import_tiny_invariant2.default)(isValidMeta(data), `${slug} has bad meta data!`);
  (0, import_tiny_invariant2.default)(typeof code === "string", `invalid code`);
  return __spreadValues({
    code
  }, data);
}
async function getAllMdxPosts() {
  if (true) {
    const dirList2 = await import_promises.default.readdir(POSTS_PATH);
    return await Promise.all(dirList2.map(async (filename) => {
      const filePath = import_path.default.join(POSTS_PATH, filename, "index.mdx");
      const source = await import_promises.default.readFile(filePath);
      const { data } = (0, import_gray_matter.default)(source);
      (0, import_tiny_invariant2.default)(isValidMeta(data), `${filename} has bad meta data!`);
      return __spreadValues({
        slug: filename
      }, data);
    }));
  }
  const dirList = await downloadDirList("posts");
  return await Promise.all(dirList.map(async (subDir) => {
    const subDirPath = subDir.path;
    const source = await downloadFile(`${subDirPath}/index.mdx`);
    const { data } = (0, import_gray_matter.default)(source);
    (0, import_tiny_invariant2.default)(isValidMeta(data), `${subDir.name} has bad meta data!`);
    return __spreadValues({
      slug: subDir.name
    }, data);
  }));
}

// route:/Users/justinchien/css-eureka/app/routes/article.$slug.tsx
var import_client = __toModule(require("mdx-bundler/client"));
var import_react_feather = __toModule(require("react-feather"));

// app/components/mdx/RefsSection/index.ts
init_react();

// app/components/mdx/RefsSection/RefsSection.tsx
init_react();
var React5 = __toModule(require("react"));
function RefsSection() {
  return /* @__PURE__ */ React5.createElement("div", null, "RefsSection");
}
var RefsSection_default = RefsSection;

// app/components/mdx/CodeBlock/index.ts
init_react();

// app/components/mdx/CodeBlock/CodeBlock.tsx
init_react();
var import_prism_react_renderer = __toModule(require("prism-react-renderer"));
var import_oceanicNext = __toModule(require("prism-react-renderer/themes/oceanicNext"));
var import_classnames4 = __toModule(require("classnames"));
var import_parse_numeric_range = __toModule(require("parse-numeric-range"));
var calculateLinesToHighlight = (meta3) => {
  var _a;
  const RE = /{([\d,-]+)}/;
  if (RE.test(meta3)) {
    const strlineNumbers = (_a = RE.exec(meta3)) == null ? void 0 : _a[1];
    const lineNumbers = (0, import_parse_numeric_range.default)(strlineNumbers);
    return (index) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};
function CodeBlock(preProps) {
  var _a;
  const language = ((_a = preProps.children.props.className) == null ? void 0 : _a.replace(/language-/, "")) ?? "plain text";
  const shouldHighlightLine = calculateLinesToHighlight(preProps.children.props.line);
  return /* @__PURE__ */ React.createElement(import_prism_react_renderer.default, __spreadProps(__spreadValues({}, import_prism_react_renderer.defaultProps), {
    theme: import_oceanicNext.default,
    code: preProps.children.props.children.trim(),
    language
  }), ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ React.createElement("pre", {
    className: (0, import_classnames4.default)("font-mono rounded-lg font-medium", className),
    style
  }, /* @__PURE__ */ React.createElement("code", {
    className: "inline-block text-[1em]"
  }, tokens.map((line, i) => {
    const lineProps = getLineProps({ line, key: i });
    if (shouldHighlightLine(i)) {
      lineProps.className = `${lineProps.className} highlight-line`;
    }
    return /* @__PURE__ */ React.createElement("div", __spreadValues({}, lineProps), line.map((token, key) => /* @__PURE__ */ React.createElement("span", __spreadValues({}, getTokenProps({ token, key })))));
  }))));
}

// app/components/mdx/InlineCode/index.ts
init_react();

// app/components/mdx/InlineCode/InlineCode.tsx
init_react();
function InlineCode({ children }) {
  return /* @__PURE__ */ React.createElement("span", {
    className: "inline-block px-sm py-[2px] rounded-md bg-bg-300 text-gray-700 text-md"
  }, children);
}
var InlineCode_default = InlineCode;

// route:/Users/justinchien/css-eureka/app/routes/article.$slug.tsx
async function getLoaderData(slug) {
  return await getMdxPost(slug);
}
var loader = async ({ params }) => {
  if (!params.slug) {
    throw new Response("Not Found", {
      status: 404
    });
  }
  try {
    return await getLoaderData(params.slug);
  } catch (err) {
    throw new Response("Not Found", {
      status: 404
    });
  }
};
function Article() {
  const post = (0, import_remix5.useLoaderData)();
  const code = post.code;
  const PostComponent = React6.useMemo(() => (0, import_client.getMDXComponent)(code), [code]);
  return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(Spacer_default, {
    size: "0",
    className: "!h-[24px] sm:!h-[40px]"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React6.createElement("h1", {
    className: "text-3xl font-bold"
  }, post.title), /* @__PURE__ */ React6.createElement(Spacer_default, {
    size: "lg"
  }), /* @__PURE__ */ React6.createElement(Tag_default, null, categories_default[post.category]), /* @__PURE__ */ React6.createElement("svg", {
    width: "102",
    height: "65",
    viewBox: "0 0 102 65",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    className: "absolute right-0 top-[12px] hidden sm:block"
  }, /* @__PURE__ */ React6.createElement("rect", {
    width: "102",
    height: "65",
    fill: "url(#pattern0)"
  }), /* @__PURE__ */ React6.createElement("defs", null, /* @__PURE__ */ React6.createElement("pattern", {
    id: "pattern0",
    patternContentUnits: "objectBoundingBox",
    width: "1",
    height: "1"
  }, /* @__PURE__ */ React6.createElement("use", {
    xlinkHref: "#image0_55_118",
    transform: "scale(0.00980392 0.0153846)"
  })), /* @__PURE__ */ React6.createElement("image", {
    id: "image0_55_118",
    width: "102",
    height: "65",
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABBCAYAAAAjdtHsAAAGx0lEQVR4Xu2cXU4bSRCAq3ps9okVCMNqJWzwY2KSwAkWn2DNCcAnCJwgcILACYAThJwA9gRYxCSPNhgJCYziXe0+YM90rXr8A5jxeKa7x8OYsRQpD9PV3fV1dVdVV4MQ/16kBnAUo6rcfltlBAXDYH8SwWKnzwYAlYjzw8zc+4NRjCNKfQQKplI5nUpM/rIPQAU3pRBAFbi1EwN60FJgYK6vTxet5MQxQc9Chi9YhO30TG5n+Ifj/0UgYISlJCcnTn1B6egagW3Mp94cjr/q3WcYCJjLu++fkWhTUrkN02hms9MrDcn2Y9FMOxixhZnJiYqKdjjxnYXZd9sqMqLeVjuYy5uzDWTGvopihDOQSeWyKjKi3lY7mKv6eUXmbOlXpNlqZrO/r1SjrmDZ8WsFo8NauhNBTivzc0sl2YlFvZ1WMLV6+RgAV7UohXg+PfvuRIusCArRBkZE9wlkx7p0YBrN6dfsmWkDc3lTPkCG6zrAEGI1M/M2PvxVlanDRX48BkI4yMzkiqrjinJ7LRaj01qEMk2DZbPTbxw9MrFlGojrDHG1lxBFKAFB1QTrMJt6fxRlID3nR3US2q2F6GtmdulZ0lMASSLbH+aKixjIajXzUXe1lS1GqycmVomDN1a7O/8EBH4yAQ0EthnlnJsSGN2emNOhLwGluwk0kFM+qrGQEhhdUX5XkwRUzKSWepdmClDaIhFK6Znciup2HUZ7aTA6o3x7B+tzkS9uy5sM8bOqUkzLWsv+Fj2HQBpMkNZydVNeJoanqlA6ZnOSTr3N65E1OilSYIK0lg4UkUGY0qSGRjqVmx4kq3JTXjYYLBNRpxYBGxyolA05HeQbjNSV8RANd8+WIGTbcVFfptquRfh14iMQiMs8xwVg1yEAnFit5k4YrrdvMIq3k88Qdc+WoKDYPsCjTHXn7Prk1SLbgKytjETgKhYATBqrjHAZEReI09+AWPVikb7A6A4m7UMfqJhstU58F2742eeI581/zVJiMvlFNvvtpxZB6KlpJDYZYyJ3ONgiXSqDfIHRnXoR1mL9c78iW7jhlY24qjaQrQ/LGgyR5ykukrFIp0yFZzBBWAsn2mKA64Cw7FXJ4X6HAz28tn6S+zIW6ZRG8gxGd+pFWAsSlIYVA4YLwqF3h5SR1zye61z6gmFPYCr1s0ICjC9aldTOCEfEUh7P/KnVKGcnHol+XB3kCYzuYFIr4BCEmZxW4L9WVcWZGDDsXk3dUDC6g8kQ9Ki9SwI4YACris6E47iIW0VRwz0UTGwt2rm6ChTQM6lc0RVMbC2jhdKO69rFjq5gYmsZPRg7hWQ0pweCia0lHCh2r8TzA8HE1vICwcTWEiIUN4vRHeWHPM3IdZ9O5fDZVqa7wCJyWgl5wNQp33oGRncGOeR5Rq/7Ti7uCZggMsjR00yYI6a9dGrJfiL5BExsLSFCQSiZrJnvvnDogYmtJTwoBHhoGfebj5+d9MDELvLowRDRXwi07fRAqwfmNQaUiFh9KFsKCAxCg8gqMs6qhDQl/on/t5KtqtvDLBvMS3SRxQ0nkfWVAfsYhMqIUxGYOGRR6YW169jsc4OtDXpS4tbWBvPSDn27SINhPmGai6Dx+aCtCIQGMsrPT7cf3tbuzk+DuUl98LBkFpYN5iVtY10o3VVWq38/BiAtD277Zdtzb5fjaqv8tGsZuFVUfdiLVzeny8QmNNUJy6yNhzZOiqvdflvVYjUu28plvbyhvKUhNIDDnplo7up41IsvxhtzUVytXt4FQOmzxskd7V9Cl/WzAoL9Fz3810wzPDIRt2TOkkFLGS/q5V2mMGk1G+m07guunGRe1ssHKGrQfP6QaGt+dmnXS7Prnz8WW5a17bUfkddCoF3VbctpbBh2JtnLau4OvHZ7vg0Iou54+E+UR3G+JaM0AahpmZsoao4ZfgDqWdEFEZSI0QlnrQMdW9ZAi6nVy1UAXBg+0yC+8O+5dFc1Q/aHUwwigjZAvitTBB7EDGVlYq1+TrKNldoR7KRnc34evD7rzvaokOwzAQkbw4I2pfGOuPHowYhI2KKtzNzDW8sRzzkS3QkwP6U8EYnpCXeYMb7WDe4kRLyaJhhc5PtUh2LvtxKtQpAH5jhRG427rOE8GSele5kLaousHXrTlZ7wMpFx+8bOlenMR/UUZEfD98V465JbMm0wuvJRtt/avn+Iehwhp059rXoXZb6i6oH9055ptLZjK1EH9KQYQxaO2xWp+hBfp4RndWViWxN/N9nLlWs7/SHec8TBou7lM7jav35WAGAFcbuHiB/sjsX5wemCkE4YwZFMglD3BMZV3v9v9Hu/tHfC8wAAAABJRU5ErkJggg=="
  })))), /* @__PURE__ */ React6.createElement(Spacer_default, {
    size: "0",
    className: "!h-[50px] lg:!h-[84px]"
  }), /* @__PURE__ */ React6.createElement("main", {
    className: "relative lg:pl-[84px]"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "absolute left-0 top-[14px] bg-secondary-300 h-[8px] w-[42px] rounded-r hidden lg:block"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "flex items-start space-x-4xl"
  }, /* @__PURE__ */ React6.createElement("article", {
    className: "prose prose-lg max-w-full prose-h2:text-2xl prose-h3:text-xl prose-a:no-underline prose-headings:relative lg:max-w-[676px]"
  }, /* @__PURE__ */ React6.createElement(PostComponent, {
    components: { RefsSection: RefsSection_default, pre: CodeBlock, code: InlineCode_default }
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "sticky top-[96px] items-center space-x-xs hidden lg:flex"
  }, /* @__PURE__ */ React6.createElement("button", {
    className: "rounded-full p-sm border border-gray-200 bg-gray-100 group transition-transform will-change-transform hover:scale-125"
  }, /* @__PURE__ */ React6.createElement(import_react_feather.ThumbsUp, {
    className: "text-gray-400 group-hover:text-gray-500"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "text-sm text-gray-500"
  }, "Likes"))))));
}
var article_slug_default = Article;

// route:/Users/justinchien/css-eureka/app/routes/articles.tsx
var articles_exports = {};
__export(articles_exports, {
  default: () => Articles,
  loader: () => loader2,
  meta: () => meta2
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/components/MainPage/index.ts
init_react();

// app/components/MainPage/MainPage.tsx
init_react();
var React7 = __toModule(require("react"));
function MainPage({ pageName, title, subTitle, children }) {
  return /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement("div", {
    className: "mt-[-94px] pt-[94px] bg-secondary-100"
  }, /* @__PURE__ */ React7.createElement(Spacer_default, {
    size: "xl",
    className: "hidden md:block"
  }), /* @__PURE__ */ React7.createElement(Spacer_default, {
    size: "md",
    className: "md:hidden"
  }), /* @__PURE__ */ React7.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React7.createElement("h1", {
    className: "sr-only"
  }, pageName), /* @__PURE__ */ React7.createElement("h2", {
    className: "text-xl text-gray-700 font-medium"
  }, title), /* @__PURE__ */ React7.createElement(Spacer_default, {
    size: "md"
  }), /* @__PURE__ */ React7.createElement("div", {
    className: "text-gray-500"
  }, subTitle), /* @__PURE__ */ React7.createElement(Spacer_default, {
    size: "2xl"
  }))), /* @__PURE__ */ React7.createElement(Spacer_default, {
    size: "3xl",
    className: "hidden md:block"
  }), /* @__PURE__ */ React7.createElement(Spacer_default, {
    size: "2xl",
    className: "md:hidden"
  }), /* @__PURE__ */ React7.createElement("main", {
    className: "container mx-auto"
  }, children));
}
var MainPage_default = MainPage;

// route:/Users/justinchien/css-eureka/app/routes/articles.tsx
var import_react_feather2 = __toModule(require("react-feather"));
var import_classnames5 = __toModule(require("classnames"));
var meta2 = () => {
  return { title: "\u6587\u7AE0", description: "\u5E36\u4F60\u5EFA\u7ACB\u5B8C\u6574\u7684 CSS mental model" };
};
async function getLoaderData2(category) {
  const allPosts = await getAllMdxPosts();
  const filteredPosts = category ? allPosts.filter((post) => post.category === category) : allPosts;
  const sortedPosts = filteredPosts.sort((a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime());
  return sortedPosts;
}
var loader2 = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const category = searchParams.get("category");
  return await getLoaderData2(category);
};
function Articles() {
  const { pathname, search } = (0, import_remix6.useLocation)();
  const posts = (0, import_remix6.useLoaderData)();
  const currentCategory = new URLSearchParams(search).get("category");
  return /* @__PURE__ */ React.createElement(MainPage_default, {
    pageName: "\u6587\u7AE0",
    title: "\u5E36\u4F60\u5EFA\u7ACB\u5B8C\u6574\u7684 CSS mental model",
    subTitle: "\u5982\u679C\u4F60\u66FE\u6DF1\u5165\u7814\u7A76\u904E CSS \u898F\u7BC4\uFF0C\u90A3\u4F60\u53EF\u80FD\u770B\u904E\u6A19\u984C\u4E0A\u9019\u5E7E\u500B\u540D\u8A5E"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row-reverse justify-between items-baseline"
  }, /* @__PURE__ */ React.createElement("aside", {
    className: "hidden flex-1 md:max-w-[120px] lg:max-w-[150px] md:block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-medium text-gray-500"
  }, "\u5206\u985E"), /* @__PURE__ */ React.createElement(Spacer_default, {
    size: "lg"
  }), /* @__PURE__ */ React.createElement("ul", {
    className: "space-y-sm"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: pathname,
    prefetch: "intent",
    className: (0, import_classnames5.default)("block text-sm", !currentCategory ? "text-primary-500" : "text-gray-500 hover:text-gray-700")
  }, "\u6240\u6709\u6587\u7AE0")), Object.entries(categories_default).map(([value, name]) => /* @__PURE__ */ React.createElement("li", {
    key: value
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: `${pathname}?category=${value}`,
    prefetch: "intent",
    className: (0, import_classnames5.default)("block text-sm", currentCategory === value ? "text-primary-500" : "text-gray-500 hover:text-gray-700")
  }, name))))), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2xl flex-1 md:max-w-[500px] lg:max-w-[664px]"
  }, posts.map((post) => /* @__PURE__ */ React.createElement(Article2, {
    key: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    publishDate: post.publish_date,
    category: post.category,
    link: `/article/${post.slug}`
  })))));
}
function Article2({
  title,
  excerpt,
  publishDate,
  category,
  link
}) {
  return /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: link,
    prefetch: "intent",
    className: "block group"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-xl font-bold group-hover:text-primary-500"
  }, title), /* @__PURE__ */ React.createElement(Spacer_default, {
    size: "0",
    className: "!h-[20px]"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "leading-relaxed text-gray-500"
  }, excerpt), /* @__PURE__ */ React.createElement(Spacer_default, {
    size: "sm"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-md items-center"
  }, /* @__PURE__ */ React.createElement(Tag_default, null, categories_default[category]), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-gray-500 group-hover:text-gray-700"
  }, "Read more"), /* @__PURE__ */ React.createElement("div", {
    className: "opacity-0 translate-x-0 transition ease-out will-change-transform group-hover:opacity-100 group-hover:translate-x-2xs"
  }, /* @__PURE__ */ React.createElement(ShiftBy_default, {
    y: 1
  }, /* @__PURE__ */ React.createElement(import_react_feather2.ArrowRight, {
    className: "h-[16px] w-[16px] text-gray-700"
  }))))));
}

// route:/Users/justinchien/css-eureka/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/blog",
    rel: "noreferrer"
  }, "15m Quickstart Blog Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/jokes",
    rel: "noreferrer"
  }, "Deep Dive Jokes App Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/docs",
    rel: "noreferrer"
  }, "Remix Docs"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "52736501", "entry": { "module": "/build/entry.client-4V4Q536C.js", "imports": ["/build/_shared/chunk-T6FGNKVJ.js", "/build/_shared/chunk-HMCZQNCK.js", "/build/_shared/chunk-FVSE6P6F.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-F5MLNGIU.js", "imports": ["/build/_shared/chunk-5KP77CLG.js", "/build/_shared/chunk-RILF6BKC.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/article.$slug": { "id": "routes/article.$slug", "parentId": "root", "path": "article/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/article.$slug-ATP3GLYX.js", "imports": ["/build/_shared/chunk-KSVDACCR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/articles": { "id": "routes/articles", "parentId": "root", "path": "articles", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/articles-6YAR6JQN.js", "imports": ["/build/_shared/chunk-KSVDACCR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-GNRDLBIF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-52736501.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/article.$slug": {
    id: "routes/article.$slug",
    parentId: "root",
    path: "article/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: article_slug_exports
  },
  "routes/articles": {
    id: "routes/articles",
    parentId: "root",
    path: "articles",
    index: void 0,
    caseSensitive: void 0,
    module: articles_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9qdXN0aW5jaGllbi9jc3MtZXVyZWthL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9OYXZiYXIvaW5kZXgudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci50c3giLCAiLi4vYXBwL3V0aWxzL2hvb2tzL3VzZVRvZ2dsZS50cyIsICIuLi9hcHAvY29tcG9uZW50cy9OYXZiYXIvTW9iaWxlTWVudUJ1dHRvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU3BhY2VyL2luZGV4LnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NwYWNlci9TcGFjZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NoaWZ0QnkvaW5kZXgudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvU2hpZnRCeS9TaGlmdEJ5LnRzeCIsICIuLi9hcHAvY29uc3RhbnRzL3BhZ2VzLnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC50cyIsICIuLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLnRzeCIsICJyb3V0ZTovVXNlcnMvanVzdGluY2hpZW4vY3NzLWV1cmVrYS9hcHAvcm91dGVzL2FydGljbGUuJHNsdWcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1RhZy9pbmRleC50cyIsICIuLi9hcHAvY29tcG9uZW50cy9UYWcvVGFnLnRzeCIsICIuLi9hcHAvY29uc3RhbnRzL2NhdGVnb3JpZXMudHMiLCAiLi4vYXBwL3V0aWxzL21keC5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2dpdGh1Yi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL3JlaHlwZS9yZWh5cGVNZHhDb2RlTWV0YS50cyIsICIuLi9hcHAvY29tcG9uZW50cy9tZHgvUmVmc1NlY3Rpb24vaW5kZXgudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvbWR4L1JlZnNTZWN0aW9uL1JlZnNTZWN0aW9uLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tZHgvQ29kZUJsb2NrL2luZGV4LnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL21keC9Db2RlQmxvY2svQ29kZUJsb2NrLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tZHgvSW5saW5lQ29kZS9pbmRleC50cyIsICIuLi9hcHAvY29tcG9uZW50cy9tZHgvSW5saW5lQ29kZS9JbmxpbmVDb2RlLnRzeCIsICJyb3V0ZTovVXNlcnMvanVzdGluY2hpZW4vY3NzLWV1cmVrYS9hcHAvcm91dGVzL2FydGljbGVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9NYWluUGFnZS9pbmRleC50cyIsICIuLi9hcHAvY29tcG9uZW50cy9NYWluUGFnZS9NYWluUGFnZS50c3giLCAicm91dGU6L1VzZXJzL2p1c3RpbmNoaWVuL2Nzcy1ldXJla2EvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvanVzdGluY2hpZW4vY3NzLWV1cmVrYS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvanVzdGluY2hpZW4vY3NzLWV1cmVrYS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2p1c3RpbmNoaWVuL2Nzcy1ldXJla2EvYXBwL3JvdXRlcy9hcnRpY2xlLiRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvanVzdGluY2hpZW4vY3NzLWV1cmVrYS9hcHAvcm91dGVzL2FydGljbGVzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvanVzdGluY2hpZW4vY3NzLWV1cmVrYS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXJ0aWNsZS4kc2x1Z1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXJ0aWNsZS4kc2x1Z1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhcnRpY2xlLzpzbHVnXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hcnRpY2xlc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXJ0aWNsZXNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXJ0aWNsZXNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi9jb21wb25lbnRzL1NwYWNlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJDU1MgRXVyZWthXCIsIGRlc2NyaXB0aW9uOiBcIlx1NUUzNlx1NEY2MFx1OTFDRFx1NjVCMFx1NzQwNlx1ODlFMyBDU1NcIiB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG4gICAgeyByZWw6IFwicHJlY29ubmVjdFwiLCBocmVmOiBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJwcmVjb25uZWN0XCIsXG4gICAgICBjcm9zc09yaWdpbjogXCJhbm9ueW1vdXNcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYWxhbTp3Z2h0QDcwMCZmYW1pbHk9Tm90bytTYW5zK1RDOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXCIsXG4gICAgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U3BhY2VyIHNpemU9XCIwXCIgY2xhc3NOYW1lPVwiIWgtWzEyMHB4XSBtZDohaC1bMTQycHhdXCIgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL05hdmJhclwiO1xuIiwgImltcG9ydCB7IExpbmssIE5hdkxpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSBcIn4vdXRpbHMvaG9va3MvdXNlVG9nZ2xlXCI7XG5pbXBvcnQgTW9iaWxlTWVudUJ1dHRvbiBmcm9tIFwiLi9Nb2JpbGVNZW51QnV0dG9uXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi4vU3BhY2VyXCI7XG5pbXBvcnQgU2hpZnRCeSBmcm9tIFwiLi4vU2hpZnRCeVwiO1xuaW1wb3J0IFBBR0VTIGZyb20gXCJ+L2NvbnN0YW50cy9wYWdlc1wiO1xuXG5mdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IFtpc01vYmlsZU1lbnVPcGVuLCB0b2dnbGVNb2JpbGVNZW51XSA9IHVzZVRvZ2dsZShmYWxzZSk7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInB5LXhsIHotMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHNtOml0ZW1zLWJhc2VsaW5lXCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89XCIvXCJcbiAgICAgICAgICBwcmVmZXRjaD1cImludGVudFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1sb2dvIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnktNTAwIGxlYWRpbmctbm9uZSByb3RhdGUtMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSB3aWxsLWNoYW5nZS10cmFuc2Zvcm0gaG92ZXI6LXJvdGF0ZS0zXCJcbiAgICAgICAgPlxuICAgICAgICAgIENTUyBFdXJla2FcbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIk1haW4gbmF2aWdhdGlvblwiIGNsYXNzTmFtZT1cImhpZGRlbiBzbTpibG9ja1wiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgteGxcIj5cbiAgICAgICAgICAgIHtQQUdFUy5tYXAoKHBhZ2UpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17cGFnZS5saW5rfT5cbiAgICAgICAgICAgICAgICA8U2hpZnRCeSB5PXstMTB9PlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgdG89e3BhZ2UubGlua31cbiAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9XCJpbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgICAgICAgIFwiYmxvY2sgZm9udC1tZWRpdW0gcmVsYXRpdmUgdGV4dC1sZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UubGluayA9PT0gXCIvYXJ0aWNsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBhdGhuYW1lLm1hdGNoKC9eKFxcL2FydGljbGVzfFxcL2FydGljbGUpLylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXRobmFtZS5zdGFydHNXaXRoKHBhZ2UubGluaylcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiIXRleHQtcHJpbWFyeS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAge3BhZ2UubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICB7KHBhZ2UubGluayA9PT0gXCIvYXJ0aWNsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXRobmFtZS5tYXRjaCgvXihcXC9hcnRpY2xlc3xcXC9hcnRpY2xlKS8pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBhdGhuYW1lLnN0YXJ0c1dpdGgocGFnZS5saW5rKSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tWy0xMHB4XSBsZWZ0LVstNHB4XSBtYXgtdy1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ2IDdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMiA1QzE5LjYwMTggMi43MzYxMyA1Mi4yNTg4IC0wLjQzMzI4OSA0Mi4wNzIyIDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNGREE0QUZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbmltYXRlLVtkcmF3LW5hdmxpbmstc3Ryb2tlXzMwMG1zX2Vhc2Utb3V0XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L1NoaWZ0Qnk+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cblxuICAgICAgICA8bW90aW9uLm5hdlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJNYWluIG5hdmlnYXRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICBcImZpeGVkIGluc2V0LXgtMCB0b3AtMCBiZy1zZWNvbmRhcnktMzAwIHAtbWQgei0xMCBzbTpoaWRkZW5cIixcbiAgICAgICAgICAgICFpc01vYmlsZU1lbnVPcGVuICYmIFwiaGlkZGVuXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxuICAgICAgICAgIGFuaW1hdGU9e2lzTW9iaWxlTWVudU9wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgIG9wZW46IHsgb3BhY2l0eTogMSwgaGVpZ2h0OiBcIjEwMHZoXCIgfSxcbiAgICAgICAgICAgIGNsb3NlZDogeyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNwYWNlciBzaXplPVwiM3hsXCIgLz5cbiAgICAgICAgICA8bW90aW9uLnVsXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzcGFjZS15LWxnXCJcbiAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgIG9wZW46IHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7IGRlbGF5Q2hpbGRyZW46IDAuMiwgc3RhZ2dlckNoaWxkcmVuOiAwLjEgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1BBR0VTLm1hcCgocGFnZSkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmxpXG4gICAgICAgICAgICAgICAga2V5PXtwYWdlLmxpbmt9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC0yeGxcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt7IG9wZW46IHsgb3BhY2l0eTogMSB9LCBjbG9zZWQ6IHsgb3BhY2l0eTogMCB9IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89e3BhZ2UubGlua31cbiAgICAgICAgICAgICAgICAgIHByZWZldGNoPVwiaW50ZW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICBwYWdlLmxpbmsgPT09IFwiL2FydGljbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcGF0aG5hbWUubWF0Y2goL14oXFwvYXJ0aWNsZXN8XFwvYXJ0aWNsZSkvKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXRobmFtZS5zdGFydHNXaXRoKHBhZ2UubGluaylcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LXByaW1hcnktNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1wcmltYXJ5LTMwMFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3BhZ2UubmFtZX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9tb3Rpb24udWw+XG4gICAgICAgIDwvbW90aW9uLm5hdj5cblxuICAgICAgICA8U2hpZnRCeSB5PXstMTB9IGNsYXNzTmFtZT1cInotMTAgc206aGlkZGVuXCI+XG4gICAgICAgICAgPE1vYmlsZU1lbnVCdXR0b25cbiAgICAgICAgICAgIGlzT3Blbj17aXNNb2JpbGVNZW51T3Blbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1vYmlsZU1lbnV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TaGlmdEJ5PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVG9nZ2xlKGluaXRpYWxTdGF0ZTogYm9vbGVhbikge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3QgdG9nZ2xlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN0YXRlKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gW3N0YXRlLCB0b2dnbGVdIGFzIGNvbnN0O1xufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbnR5cGUgTW9iaWxlTWVudUJ1dHRvblByb3BzID0ge1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50PjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gTW9iaWxlTWVudUJ1dHRvbih7XG4gIGlzT3BlbixcbiAgb25DbGljayxcbiAgY2xhc3NOYW1lLFxufTogTW9iaWxlTWVudUJ1dHRvblByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gbWVudVwiXG4gICAgICBjbGFzc05hbWU9e2N4KFwicmVsYXRpdmUgaC1bMTlweF0gdy1bMjRweF1cIiwgY2xhc3NOYW1lKX1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgPEJhclxuICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgIFwiYWJzb2x1dGUgdG9wLTBcIixcbiAgICAgICAgICBpc09wZW4gPyBcInNjYWxlLXgtMCBvcGFjaXR5LTBcIiA6IFwic2NhbGUteC0xMDAgb3BhY2l0eS0xMDBcIlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICAgIDxCYXJcbiAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICBcImFic29sdXRlIHRvcC1bOHB4XVwiLFxuICAgICAgICAgIGlzT3BlbiA/IFwicm90YXRlLTQ1ICFiZy1wcmltYXJ5LTUwMFwiIDogXCJyb3RhdGUtMFwiXG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICAgPEJhclxuICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgIFwiYWJzb2x1dGUgdG9wLVs4cHhdXCIsXG4gICAgICAgICAgaXNPcGVuID8gXCItcm90YXRlLTQ1ICFiZy1wcmltYXJ5LTUwMFwiIDogXCJyb3RhdGUtMFwiXG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICAgPEJhclxuICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgIFwiYWJzb2x1dGUgdG9wLVsxNnB4XVwiLFxuICAgICAgICAgIGlzT3BlbiA/IFwic2NhbGUteC0wIG9wYWNpdHktMFwiIDogXCJzY2FsZS14LTEwMCBvcGFjaXR5LTEwMFwiXG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG50eXBlIEJhclByb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBCYXIoeyBjbGFzc05hbWUgfTogQmFyUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgXCJibG9jayBoLVszcHhdIHctWzI0cHhdIGJnLWdyYXktNTAwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMjAwXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51QnV0dG9uO1xuIiwgImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9TcGFjZXJcIjtcbiIsICJpbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY29uc3Qgc3BhY2VyU2l6ZXMgPSB7XG4gIFwiMFwiOiBcImgtMFwiLFxuICBcIjJ4c1wiOiBcImgtMnhzXCIsXG4gIHhzOiBcImgteHNcIixcbiAgc206IFwiaC1zbVwiLFxuICBtZDogXCJoLW1kXCIsXG4gIGxnOiBcImgtbGdcIixcbiAgeGw6IFwiaC14bFwiLFxuICBcIjJ4bFwiOiBcImgtMnhsXCIsXG4gIFwiM3hsXCI6IFwiaC0zeGxcIixcbiAgXCI0eGxcIjogXCJoLTR4bFwiLFxufTtcblxuZnVuY3Rpb24gU3BhY2VyKHtcbiAgc2l6ZSxcbiAgY2xhc3NOYW1lLFxufToge1xuICBzaXplOiBrZXlvZiB0eXBlb2Ygc3BhY2VyU2l6ZXM7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeChzcGFjZXJTaXplc1tzaXplXSwgY2xhc3NOYW1lKX0gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwYWNlcjtcbiIsICJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vU2hpZnRCeVwiO1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB4PzogbnVtYmVyO1xuICB5PzogbnVtYmVyO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBTaGlmdEJ5KHsgY2hpbGRyZW4sIHggPSAwLCB5ID0gMCwgY2xhc3NOYW1lIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWAsXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlmdEJ5O1xuIiwgImNvbnN0IFBBR0VTID0gW1xuICB7IG5hbWU6IFwiXHU2NTg3XHU3QUUwXCIsIGxpbms6IFwiL2FydGljbGVzXCIgfSxcbiAgeyBuYW1lOiBcIlx1ODVERFx1NUVDQVwiLCBsaW5rOiBcIi9nYWxsZXJ5XCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IFBBR0VTO1xuIiwgImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Gb290ZXJcIjtcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgUEFHRVMgZnJvbSBcIn4vY29uc3RhbnRzL3BhZ2VzXCI7XG5pbXBvcnQgU3BhY2VyIGZyb20gXCIuLi9TcGFjZXJcIjtcblxuZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicHQteGwgcGItMnhsIG1kOnBiLTN4bCBiZy1iZy0yMDAgYm9yZGVyLXQtWzFweF0gYm9yZGVyLXQtYmctMzAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZmxleC1jb2wgbWQ6ZmxleC1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0zeGxcIj5cbiAgICAgICAgICAgIHtQQUdFUy5tYXAoKHBhZ2UpID0+IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e3BhZ2UubGlua31cbiAgICAgICAgICAgICAgICB0bz17cGFnZS5saW5rfVxuICAgICAgICAgICAgICAgIHByZWZldGNoPVwiaW50ZW50XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BhZ2UubmFtZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNwYWNlciBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJibG9jayBtZDpoaWRkZW5cIiAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgICAgICBwcmVmZXRjaD1cImludGVudFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbG9nbyBmb250LWJvbGQgdGV4dC1wcmltYXJ5LTUwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENTUyBFdXJla2FcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxTcGFjZXIgc2l6ZT1cInhzXCIgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICBcdTU5ODJcdTY3OUNcdTRGNjBcdTY2RkVcdTZERjFcdTUxNjVcdTc4MTRcdTdBNzZcdTkwNEUgQ1NTIFx1ODk4Rlx1N0JDNFx1RkYwQ1x1OTBBM1x1NEY2MFx1NTNFRlx1ODBGRFx1NzcwQlx1OTA0RVx1NkExOVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPFNwYWNlciBzaXplPVwibGdcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtc21cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVszMnB4XSB3LVszMnB4XSBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVszMnB4XSB3LVszMnB4XSBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVszMnB4XSB3LVszMnB4XSBiZy1ncmF5LTIwMCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IFNwYWNlciBmcm9tIFwifi9jb21wb25lbnRzL1NwYWNlclwiO1xuaW1wb3J0IFRhZyBmcm9tIFwifi9jb21wb25lbnRzL1RhZ1wiO1xuaW1wb3J0IENBVEVHT1JJRVMgZnJvbSBcIn4vY29uc3RhbnRzL2NhdGVnb3JpZXNcIjtcbmltcG9ydCB7IGdldE1keFBvc3QgfSBmcm9tIFwifi91dGlscy9tZHguc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRNRFhDb21wb25lbnQgfSBmcm9tIFwibWR4LWJ1bmRsZXIvY2xpZW50XCI7XG5pbXBvcnQgeyBUaHVtYnNVcCB9IGZyb20gXCJyZWFjdC1mZWF0aGVyXCI7XG5pbXBvcnQgUmVmc1NlY3Rpb24gZnJvbSBcIn4vY29tcG9uZW50cy9tZHgvUmVmc1NlY3Rpb25cIjtcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIn4vY29tcG9uZW50cy9tZHgvQ29kZUJsb2NrXCI7XG5pbXBvcnQgSW5saW5lQ29kZSBmcm9tIFwifi9jb21wb25lbnRzL21keC9JbmxpbmVDb2RlXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExvYWRlckRhdGEoc2x1Zzogc3RyaW5nKSB7XG4gIHJldHVybiBhd2FpdCBnZXRNZHhQb3N0KHNsdWcpO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGlmICghcGFyYW1zLnNsdWcpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJOb3QgRm91bmRcIiwge1xuICAgICAgc3RhdHVzOiA0MDQsXG4gICAgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBnZXRMb2FkZXJEYXRhKHBhcmFtcy5zbHVnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiTm90IEZvdW5kXCIsIHtcbiAgICAgIHN0YXR1czogNDA0LFxuICAgIH0pO1xuICB9XG59O1xuXG50eXBlIExvYWRlckRhdGEgPSBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIGdldExvYWRlckRhdGE+PjtcblxuZnVuY3Rpb24gQXJ0aWNsZSgpIHtcbiAgY29uc3QgcG9zdCA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICBjb25zdCBjb2RlID0gcG9zdC5jb2RlO1xuICBjb25zdCBQb3N0Q29tcG9uZW50ID0gUmVhY3QudXNlTWVtbygoKSA9PiBnZXRNRFhDb21wb25lbnQoY29kZSksIFtjb2RlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNwYWNlciBzaXplPVwiMFwiIGNsYXNzTmFtZT1cIiFoLVsyNHB4XSBzbTohaC1bNDBweF1cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPFNwYWNlciBzaXplPVwibGdcIiAvPlxuICAgICAgICAgIDxUYWc+e0NBVEVHT1JJRVNbcG9zdC5jYXRlZ29yeV19PC9UYWc+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxMDJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNjVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDIgNjVcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHRvcC1bMTJweF0gaGlkZGVuIHNtOmJsb2NrXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjEwMlwiIGhlaWdodD1cIjY1XCIgZmlsbD1cInVybCgjcGF0dGVybjApXCIgLz5cbiAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICA8cGF0dGVyblxuICAgICAgICAgICAgICAgIGlkPVwicGF0dGVybjBcIlxuICAgICAgICAgICAgICAgIHBhdHRlcm5Db250ZW50VW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx1c2VcbiAgICAgICAgICAgICAgICAgIHhsaW5rSHJlZj1cIiNpbWFnZTBfNTVfMTE4XCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInNjYWxlKDAuMDA5ODAzOTIgMC4wMTUzODQ2KVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9wYXR0ZXJuPlxuICAgICAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICAgICAgICBpZD1cImltYWdlMF81NV8xMThcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAyXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2NVwiXG4gICAgICAgICAgICAgICAgeGxpbmtIcmVmPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHWUFBQUJCQ0FZQUFBQWpkdEhzQUFBR3gwbEVRVlI0WHUyY1hVNGJTUkNBcTNwczlva1ZDTU5xSld6d1kyS1N3QWtXbjJETkNjQW5DSndnY0lMQUNZQVRoSndBOWdSWXhDU1BOaGdKQ1l6aVhlMCtZTTkwclhyOEE1anhlS2E3eDhPWXNSUXBEOVBWM2ZWMWRWZFZWNE1RLzE2a0JuQVVvNnJjZmx0bEJBWERZSDhTd1dLbnp3WUFsWWp6dzh6Yys0TlJqQ05LZlFRS3BsSTVuVXBNL3JJUFFBVTNwUkJBRmJpMUV3TjYwRkpnWUs2dlR4ZXQ1TVF4UWM5Q2hpOVloTzMwVEc1bitJZmovMFVnWUlTbEpDY25UbjFCNmVnYWdXM01wOTRjanIvcTNXY1lDSmpMdSsrZmtXaFRVcmtOMDJobXM5TXJEY24yWTlGTU94aXhoWm5KaVlxS2RqanhuWVhaZDlzcU1xTGVWanVZeTV1ekRXVEd2b3BpaERPUVNlV3lLaktpM2xZN21LdjZlVVhtYk9sWHBObHFack8vcjFTanJtRFo4V3NGbzhOYXVoTkJUaXZ6YzBzbDJZbEZ2WjFXTUxWNitSZ0FWN1VvaFhnK1BmdnVSSXVzQ0FyUkJrWkU5d2xreDdwMFlCck42ZGZzbVdrRGMzbFRQa0NHNnpyQUVHSTFNL00yUHZ4VmxhbkRSWDQ4QmtJNHlNemtpcXJqaW5KN0xSYWowMXFFTWsyRFpiUFRieHc5TXJGbEdvanJESEcxbHhCRktBRkIxUVRyTUp0NmZ4UmxJRDNuUjNVUzJxMkY2R3RtZHVsWjBsTUFTU0xiSCthS2l4aklhalh6VVhlMWxTMUdxeWNtVm9tRE4xYTdPLzhFQkg0eUFRMEV0aG5sbkpzU0dOMmVtTk9oTHdHbHV3azBrRk0rcXJHUUVoaGRVWDVYa3dSVXpLU1dlcGRtQ2xEYUloRks2Wm5jaXVwMkhVWjdhVEE2bzN4N0IrdHprUzl1eTVzTThiT3FVa3pMV3N2K0ZqMkhRQnBNa05aeWRWTmVKb2FucWxBNlpuT1NUcjNONjVFMU9pbFNZSUswbGc0VWtVR1kwcVNHUmpxVm14NGtxM0pUWGpZWUxCTlJweFlCR3h5b2xBMDVIZVFiak5TVjhSQU5kOCtXSUdUYmNWRmZwdHF1UmZoMTRpTVFpTXM4eHdWZzF5RUFuRml0NWs0WXJyZHZNSXEzazg4UWRjK1dvS0RZUHNDalRIWG43UHJrMVNMYmdLeXRqRVRnS2hZQVRCcXJqSEFaRVJlSTA5K0FXUFZpa2I3QTZBNG03VU1mcUpoc3RVNThGMjc0MmVlSTU4MS96VkppTXZsRk52dnRweFpCNktscEpEWVpZeUozT05naVhTcURmSUhSblhvUjFtTDljNzhpVzdqaGxZMjRxamFRclEvTEdneVI1eWt1a3JGSXAweUZaekJCV0FzbjJtS0E2NEN3N0ZYSjRYNkhBejI4dG42Uyt6SVc2WlJHOGd4R2QrcEZXQXNTbElZVkE0WUx3cUYzaDVTUjF6eWU2MXo2Z21GUFlDcjFzMElDakM5YWxkVE9DRWZFVWg3UC9LblZLR2NuSG9sK1hCM2tDWXp1WUZJcjRCQ0VtWnhXNEw5V1ZjV1pHRERzWGszZFVEQzZnOGtROUtpOVN3STRZQUNyaXM2RTQ3aUlXMFZSd3owVVRHd3Qycm02Q2hUUU02bGMwUlZNYkMyamhkS082OXJGanE1Z1ltc1pQUmc3aFdRMHB3ZUNpYTBsSENoMnI4VHpBOEhFMXZJQ3djVFdFaUlVTjR2UkhlV0hQTTNJZFo5TzVmRFpWcWE3d0NKeVdnbDV3TlFwMzNvR1JuY0dPZVI1UnEvN1RpN3VDWmdnTXNqUjAweVlJNmE5ZEdySmZpTDVCRXhzTFNGQ1FTaVpySm52dm5Eb2dZbXRKVHdvQkhob0dmZWJqNStkOU1ERUx2TG93UkRSWHdpMDdmUkFxd2ZtTlFhVWlGaDlLRnNLQ0F4Q2c4Z3FNczZxaERRbC9vbi90NUt0cXR2RExCdk1TM1NSeFEwbmtmV1ZBZnNZaE1xSVV4R1lPR1JSNllXMTY5anNjNE90RFhwUzR0YldCdlBTRG4yN1NJTmhQbUdhaTZEeCthQ3RDSVFHTXNyUFQ3Y2YzdGJ1emsrRHVVbDk4TEJrRnBZTjVpVnRZMTBvM1ZWV3EzOC9CaUF0RDI3N1pkdHpiNWZqYXF2OHRHc1p1RlZVZmRpTFZ6ZW55OFFtTk5VSnk2eU5oelpPaXF2ZGZsdlZZalV1MjhwbHZieWh2S1VoTklERG5wbG83dXA0MUlzdnhodHpVVnl0WHQ0RlFPbXp4c2tkN1Y5Q2wvV3pBb0w5RnozODEwd3pQRElSdDJUT2trRkxHUy9xNVYybU1HazFHK20wN2d1dW5HUmUxc3NIS0dyUWZQNlFhR3QrZG1uWFM3UHJuejhXVzVhMTdiVWZrZGRDb0YzVmJjdHBiQmgySnRuTGF1NE92SFo3dmcwSW91NTQrRStVUjNHK0phTTBBYWhwbVpzb2FvNFpmZ0RxV2RFRkVaU0kwUWxuclFNZFc5WkFpNm5WeTFVQVhCZysweUMrOE8rNWRGYzFRL2FIVXd3aWdqWkF2aXRUQkI3RURHVmxZcTErVHJLTmxkb1I3S1JuYzM0ZXZEN3J6dmFva093ekFRa2J3NEkycGZHT3VQSG93WWhJMktLdHpOekRXOHNSenprUzNRa3dQNlU4RVlucENYZVlNYjdXRGU0a1JMeWFKaGhjNVB0VWgyTHZ0eEt0UXBBSDVqaFJHNDI3ck9FOEdTZWxlNWtMYW91c0hYclRsWjd3TXBGeCs4Yk9sZW5NUi9VVVpFZkQ5OFY0NjVKYk1tMHd1dkpSdHQvYXZuK0llaHdocDA1OXJYb1haYjZpNm9IOTA1NXB0TFpqSzFFSDlLUVlReGFPMnhXcCtoQmZwNFJuZFdWaVd4Ti9OOW5MbFdzNy9TSGVjOFRCb3U3bE03amF2MzVXQUdBRmNidUhpQi9zanNYNXdlbUNrRTRZd1pGTWdsRDNCTVpWM3Y5djlIdS90SGZDOHdBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNwYWNlciBzaXplPVwiMFwiIGNsYXNzTmFtZT1cIiFoLVs1MHB4XSBsZzohaC1bODRweF1cIiAvPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBsZzpwbC1bODRweF1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtWzE0cHhdIGJnLXNlY29uZGFyeS0zMDAgaC1bOHB4XSB3LVs0MnB4XSByb3VuZGVkLXIgaGlkZGVuIGxnOmJsb2NrXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgc3BhY2UteC00eGxcIj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInByb3NlIHByb3NlLWxnIG1heC13LWZ1bGwgcHJvc2UtaDI6dGV4dC0yeGwgcHJvc2UtaDM6dGV4dC14bCBwcm9zZS1hOm5vLXVuZGVybGluZSBwcm9zZS1oZWFkaW5nczpyZWxhdGl2ZSBsZzptYXgtdy1bNjc2cHhdXCI+XG4gICAgICAgICAgICAgIDxQb3N0Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3sgUmVmc1NlY3Rpb24sIHByZTogQ29kZUJsb2NrLCBjb2RlOiBJbmxpbmVDb2RlIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSB0b3AtWzk2cHhdIGl0ZW1zLWNlbnRlciBzcGFjZS14LXhzIGhpZGRlbiBsZzpmbGV4XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHAtc20gYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBiZy1ncmF5LTEwMCBncm91cCB0cmFuc2l0aW9uLXRyYW5zZm9ybSB3aWxsLWNoYW5nZS10cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTI1XCI+XG4gICAgICAgICAgICAgICAgPFRodW1ic1VwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTUwMFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkxpa2VzPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7XG4iLCAiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL1RhZ1wiO1xuIiwgInR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5mdW5jdGlvbiBUYWcoeyBjaGlsZHJlbiB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJvdW5kZWQtbGcgcHktWzZweF0gcHgtc20gYmctc2Vjb25kYXJ5LTIwMCB0ZXh0LXNlY29uZGFyeS03MDAgdGV4dC1zbVwiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWc7XG4iLCAiY29uc3QgY2F0ZWdvcnlLZXlzID0gW1wibWVjaGFuaXNtXCIsIFwiZmxleGJveFwiXSBhcyBjb25zdDtcblxuY29uc3QgQ0FURUdPUklFUzogUmVjb3JkPHR5cGVvZiBjYXRlZ29yeUtleXNbbnVtYmVyXSwgc3RyaW5nPiA9IHtcbiAgbWVjaGFuaXNtOiBcIlx1NkUzMlx1NjdEM1x1NkE1Rlx1NTIzNlwiLFxuICBmbGV4Ym94OiBcIkZsZXhib3hcIixcbn07XG5cbmV4cG9ydCB7IGNhdGVnb3J5S2V5cyB9O1xuZXhwb3J0IGRlZmF1bHQgQ0FURUdPUklFUztcbiIsICJpbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IHsgYnVuZGxlTURYIH0gZnJvbSBcIm1keC1idW5kbGVyXCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHsgZG93bmxvYWREaXJMaXN0LCBkb3dubG9hZEZpbGUgfSBmcm9tIFwiLi9naXRodWIuc2VydmVyXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzL3Byb21pc2VzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY2F0ZWdvcnlLZXlzIH0gZnJvbSBcIn4vY29uc3RhbnRzL2NhdGVnb3JpZXNcIjtcbmltcG9ydCByZWh5cGVNZHhDb2RlTWV0YSBmcm9tIFwiLi9yZWh5cGUvcmVoeXBlTWR4Q29kZU1ldGFcIjtcblxudHlwZSBGcm9udE1hdHRlciA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZXhjZXJwdDogc3RyaW5nO1xuICBwdWJsaXNoX2RhdGU6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHR5cGVvZiBjYXRlZ29yeUtleXNbbnVtYmVyXTtcbn07XG5cbmZ1bmN0aW9uIGlzVmFsaWRNZXRhKG1ldGE6IGFueSk6IG1ldGEgaXMgRnJvbnRNYXR0ZXIge1xuICByZXR1cm4gKFxuICAgIG1ldGEgJiZcbiAgICBtZXRhLnRpdGxlICYmXG4gICAgbWV0YS5leGNlcnB0ICYmXG4gICAgbWV0YS5wdWJsaXNoX2RhdGUgJiZcbiAgICBjYXRlZ29yeUtleXMuaW5jbHVkZXMobWV0YS5jYXRlZ29yeSlcbiAgKTtcbn1cblxuY29uc3QgUE9TVFNfUEFUSCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInBvc3RzXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRTcGVjaWZpY0NvbXBvbmVudHMoc2x1Zzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgY29uc3QgZGlyTGlzdCA9IGF3YWl0IGZzLnJlYWRkaXIoYCR7UE9TVFNfUEFUSH0vJHtzbHVnfWApO1xuXG4gICAgY29uc3QgY29tcG9uZW50Q29udGVudHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGRpckxpc3RcbiAgICAgICAgLmZpbHRlcigoZmlsZW5hbWUpID0+IGZpbGVuYW1lICE9PSBcImluZGV4Lm1keFwiKVxuICAgICAgICAubWFwKGFzeW5jIChmaWxlbmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKGAke1BPU1RTX1BBVEh9LyR7c2x1Z31gLCBmaWxlbmFtZSk7XG4gICAgICAgICAgY29uc3Qgc291cmNlID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsIFwidXRmLThcIik7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW2AuLyR7ZmlsZW5hbWV9YF06IHNvdXJjZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICBsZXQgcmVzdWx0ID0ge30gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxuICAgIGNvbXBvbmVudENvbnRlbnRzLmZvckVhY2goKGMpID0+IHtcbiAgICAgIHJlc3VsdFtPYmplY3Qua2V5cyhjKVswXV0gPSBPYmplY3QudmFsdWVzKGMpWzBdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IGRpckxpc3QgPSBhd2FpdCBkb3dubG9hZERpckxpc3QoYHBvc3RzLyR7c2x1Z31gKTtcblxuICBjb25zdCBjb21wb25lbnRDb250ZW50cyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGRpckxpc3RcbiAgICAgIC5maWx0ZXIoKGZpbGUpID0+IGZpbGUubmFtZSAhPT0gXCJpbmRleC5tZHhcIilcbiAgICAgIC5tYXAoYXN5bmMgKGZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLnBhdGg7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGF3YWl0IGRvd25sb2FkRmlsZShmaWxlUGF0aCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYC4vJHtmaWxlLm5hbWV9YF06IHNvdXJjZSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICk7XG5cbiAgbGV0IHJlc3VsdCA9IHt9IGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbiAgY29tcG9uZW50Q29udGVudHMuZm9yRWFjaCgoYykgPT4ge1xuICAgIHJlc3VsdFtPYmplY3Qua2V5cyhjKVswXV0gPSBPYmplY3QudmFsdWVzKGMpWzBdO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRNZHhQb3N0KHNsdWc6IHN0cmluZykge1xuICBsZXQgc291cmNlOiBzdHJpbmc7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihQT1NUU19QQVRILCBzbHVnLCBcImluZGV4Lm1keFwiKTtcbiAgICBzb3VyY2UgPSBhd2FpdCBmcy5yZWFkRmlsZShmaWxlUGF0aCwgXCJ1dGYtOFwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjb250ZW50UGF0aCA9IGBwb3N0cy8ke3NsdWd9L2luZGV4Lm1keGA7XG4gICAgc291cmNlID0gYXdhaXQgZG93bmxvYWRGaWxlKGNvbnRlbnRQYXRoKTtcbiAgfVxuXG4gIGNvbnN0IHsgY29udGVudCwgZGF0YSB9ID0gbWF0dGVyKHNvdXJjZSk7XG5cbiAgY29uc3Qgc3BlY2lmaWNDb21wcyA9IGF3YWl0IGdldFNwZWNpZmljQ29tcG9uZW50cyhzbHVnKTtcblxuICBjb25zdCB7IGRlZmF1bHQ6IHJlaHlwZVNsdWcgfSA9IGF3YWl0IGltcG9ydChcInJlaHlwZS1zbHVnXCIpO1xuICBjb25zdCB7IGRlZmF1bHQ6IHJlaHlwZUF1dG9saW5rSGVhZGluZ3MgfSA9IGF3YWl0IGltcG9ydChcbiAgICBcInJlaHlwZS1hdXRvbGluay1oZWFkaW5nc1wiXG4gICk7XG4gIGNvbnN0IHsgaCwgcyB9ID0gYXdhaXQgaW1wb3J0KFwiaGFzdHNjcmlwdFwiKTtcbiAgY29uc3QgcmVoeXBlTWR4Q29kZU1ldGFQbHVnaW4gPSBhd2FpdCByZWh5cGVNZHhDb2RlTWV0YSgpO1xuXG4gIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgYnVuZGxlTURYKHtcbiAgICBzb3VyY2U6IGNvbnRlbnQsXG4gICAgeGRtT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICBvcHRpb25zLnJlaHlwZVBsdWdpbnMgPSBbXG4gICAgICAgIC4uLihvcHRpb25zLnJlaHlwZVBsdWdpbnMgPz8gW10pLFxuICAgICAgICByZWh5cGVTbHVnLFxuICAgICAgICBbXG4gICAgICAgICAgcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWhhdmlvcjogXCJwcmVwZW5kXCIsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7IGNsYXNzOiBcImhlYWRpbmctbGlua1wiIH0sXG4gICAgICAgICAgICBjb250ZW50OiAoKSA9PiBbXG4gICAgICAgICAgICAgIGgoXCJzcGFuLnNyLW9ubHlcIiwgXCJMaW5rIHRvIHRoaXMgaGVhZGluZ1wiKSxcbiAgICAgICAgICAgICAgcyhcbiAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICB2aWV3Ym94OiBcIjAgMCAyNCAyNFwiLFxuICAgICAgICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgcyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICBkOiBcIk0xMCAxM2E1IDUgMCAwIDAgNy41NC41NGwzLTNhNSA1IDAgMCAwLTcuMDctNy4wN2wtMS43MiAxLjcxXCIsXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIHMoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZDogXCJNMTQgMTFhNSA1IDAgMCAwLTcuNTQtLjU0bC0zIDNhNSA1IDAgMCAwIDcuMDcgNy4wN2wxLjcxLTEuNzFcIixcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgcmVoeXBlTWR4Q29kZU1ldGFQbHVnaW4sXG4gICAgICBdO1xuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfSxcbiAgICBmaWxlczoge1xuICAgICAgLi4uc3BlY2lmaWNDb21wcyxcbiAgICB9LFxuICB9KTtcblxuICBpbnZhcmlhbnQoaXNWYWxpZE1ldGEoZGF0YSksIGAke3NsdWd9IGhhcyBiYWQgbWV0YSBkYXRhIWApO1xuICBpbnZhcmlhbnQodHlwZW9mIGNvZGUgPT09IFwic3RyaW5nXCIsIGBpbnZhbGlkIGNvZGVgKTtcblxuICByZXR1cm4ge1xuICAgIGNvZGUsXG4gICAgLi4uZGF0YSxcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsTWR4UG9zdHMoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgY29uc3QgZGlyTGlzdCA9IGF3YWl0IGZzLnJlYWRkaXIoUE9TVFNfUEFUSCk7XG5cbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBkaXJMaXN0Lm1hcChhc3luYyAoZmlsZW5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oUE9TVFNfUEFUSCwgZmlsZW5hbWUsIFwiaW5kZXgubWR4XCIpO1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCBmcy5yZWFkRmlsZShmaWxlUGF0aCk7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gbWF0dGVyKHNvdXJjZSk7XG5cbiAgICAgICAgaW52YXJpYW50KGlzVmFsaWRNZXRhKGRhdGEpLCBgJHtmaWxlbmFtZX0gaGFzIGJhZCBtZXRhIGRhdGEhYCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzbHVnOiBmaWxlbmFtZSxcbiAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgY29uc3QgZGlyTGlzdCA9IGF3YWl0IGRvd25sb2FkRGlyTGlzdChcInBvc3RzXCIpO1xuXG4gIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBkaXJMaXN0Lm1hcChhc3luYyAoc3ViRGlyKSA9PiB7XG4gICAgICBjb25zdCBzdWJEaXJQYXRoID0gc3ViRGlyLnBhdGg7XG4gICAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCBkb3dubG9hZEZpbGUoYCR7c3ViRGlyUGF0aH0vaW5kZXgubWR4YCk7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IG1hdHRlcihzb3VyY2UpO1xuXG4gICAgICBpbnZhcmlhbnQoaXNWYWxpZE1ldGEoZGF0YSksIGAke3N1YkRpci5uYW1lfSBoYXMgYmFkIG1ldGEgZGF0YSFgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2x1Zzogc3ViRGlyLm5hbWUsXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICB9O1xuICAgIH0pXG4gICk7XG59XG5cbmV4cG9ydCB7IGdldE1keFBvc3QsIGdldEFsbE1keFBvc3RzIH07XG4iLCAiaW1wb3J0IHsgT2N0b2tpdCB9IGZyb20gXCJvY3Rva2l0XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuXG5jb25zdCBvY3Rva2l0ID0gbmV3IE9jdG9raXQoeyBhdXRoOiBwcm9jZXNzLmVudi5PQ1RPS0lUX1RPS0VOIH0pO1xuXG5hc3luYyBmdW5jdGlvbiBkb3dubG9hZERpckxpc3QocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgb2N0b2tpdC5yZXF1ZXN0KFxuICAgIFwiR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfS9jb250ZW50cy97cGF0aH1cIixcbiAgICB7XG4gICAgICBvd25lcjogXCJjeWNoaWVuXCIsXG4gICAgICByZXBvOiBcImNzcy1ldXJla2FcIixcbiAgICAgIHBhdGgsXG4gICAgfVxuICApO1xuXG4gIGludmFyaWFudChcbiAgICBBcnJheS5pc0FycmF5KGRhdGEpLFxuICAgIGBUcmllZCB0byBkb3dubG9hZCBjb250ZW50IGZyb20gJHtwYXRofS4gR2l0SHViIGRpZCBub3QgcmV0dXJuIGFuIGFycmF5IG9mIGZpbGVzLiBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW4uLi5gXG4gICk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8vIGV4LiBwb3N0cy9hYWEubWR4XG5hc3luYyBmdW5jdGlvbiBkb3dubG9hZEZpbGUocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gKGF3YWl0IG9jdG9raXQucmVxdWVzdChcbiAgICBcIkdFVCAvcmVwb3Mve293bmVyfS97cmVwb30vY29udGVudHMve3BhdGh9XCIsXG4gICAge1xuICAgICAgb3duZXI6IFwiY3ljaGllblwiLFxuICAgICAgcmVwbzogXCJjc3MtZXVyZWthXCIsXG4gICAgICBwYXRoLFxuICAgIH1cbiAgKSkgYXMgeyBkYXRhOiB7IGNvbnRlbnQ/OiBzdHJpbmc7IGVuY29kaW5nPzogc3RyaW5nIH0gfTtcblxuICBpbnZhcmlhbnQoXG4gICAgZGF0YS5jb250ZW50ICYmIGRhdGEuZW5jb2RpbmcsXG4gICAgYFRyaWVkIHRvIGdldCAke3BhdGh9IGJ1dCBnb3QgYmFjayBzb21ldGhpbmcgdGhhdCB3YXMgdW5leHBlY3RlZC4gSXQgZG9lc24ndCBoYXZlIGEgY29udGVudCBvciBlbmNvZGluZyBwcm9wZXJ0eWBcbiAgKTtcblxuICBjb25zdCBlbmNvZGluZyA9IGRhdGEuZW5jb2RpbmcgYXMgUGFyYW1ldGVyczx0eXBlb2YgQnVmZmVyLmZyb20+W1wiMVwiXTtcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKGRhdGEuY29udGVudCwgZW5jb2RpbmcpLnRvU3RyaW5nKCk7XG59XG5cbmV4cG9ydCB7IGRvd25sb2FkRGlyTGlzdCwgZG93bmxvYWRGaWxlIH07XG4iLCAiY29uc3QgcmVoeXBlTWR4Q29kZU1ldGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgdmlzaXQgfSA9IGF3YWl0IGltcG9ydChcInVuaXN0LXV0aWwtdmlzaXRcIik7XG5cbiAgcmV0dXJuIChvcHRpb25zID0ge30pID0+IHtcbiAgICByZXR1cm4gKHRyZWUpID0+IHtcbiAgICAgIHZpc2l0KHRyZWUsIFwiZWxlbWVudFwiLCB2aXNpdG9yKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdmlzaXRvcihub2RlLCBpbmRleCwgcGFyZW50Tm9kZSkge1xuICAgICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gXCJjb2RlXCIgJiYgbm9kZS5kYXRhICYmIG5vZGUuZGF0YS5tZXRhKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrcyA9IG5vZGUuZGF0YS5tZXRhLnNwbGl0KFwiIFwiKSBhcyBzdHJpbmdbXTtcblxuICAgICAgICBub2RlLnByb3BlcnRpZXMgPSBibG9ja3MucmVkdWNlKChwcm9wcywgYmxvY2spID0+IHtcbiAgICAgICAgICBjb25zdCBbcHJvcCwgdmFsdWVdID0gYmxvY2suc3BsaXQoXCI9XCIpO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcHJvcHMubGluZSA9IHByb3A7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcm9wc1twcm9wXSA9IHZhbHVlO1xuXG4gICAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgICB9LCBub2RlLnByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlaHlwZU1keENvZGVNZXRhO1xuIiwgImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9SZWZzU2VjdGlvblwiO1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBSZWZzU2VjdGlvbigpIHtcbiAgcmV0dXJuIDxkaXY+UmVmc1NlY3Rpb248L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZnNTZWN0aW9uO1xuIiwgImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Db2RlQmxvY2tcIjtcbiIsICJpbXBvcnQgSGlnaGxpZ2h0LCB7IGRlZmF1bHRQcm9wcywgTGFuZ3VhZ2UgfSBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXJcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXIvdGhlbWVzL29jZWFuaWNOZXh0XCI7XG5pbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCByYW5nZVBhcnNlciBmcm9tIFwicGFyc2UtbnVtZXJpYy1yYW5nZVwiO1xuXG50eXBlIGFkZFByZWZpeDxUS2V5LCBUUHJlZml4IGV4dGVuZHMgc3RyaW5nPiA9IFRLZXkgZXh0ZW5kcyBMYW5ndWFnZVxuICA/IGAke1RQcmVmaXh9JHtUS2V5fWBcbiAgOiBuZXZlcjtcblxuY29uc3QgY2FsY3VsYXRlTGluZXNUb0hpZ2hsaWdodCA9IChtZXRhOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgUkUgPSAveyhbXFxkLC1dKyl9LztcbiAgaWYgKFJFLnRlc3QobWV0YSkpIHtcbiAgICBjb25zdCBzdHJsaW5lTnVtYmVycyA9IFJFLmV4ZWMobWV0YSk/LlsxXSBhcyBzdHJpbmc7XG4gICAgY29uc3QgbGluZU51bWJlcnMgPSByYW5nZVBhcnNlcihzdHJsaW5lTnVtYmVycyk7XG4gICAgcmV0dXJuIChpbmRleDogbnVtYmVyKSA9PiBsaW5lTnVtYmVycy5pbmNsdWRlcyhpbmRleCArIDEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoKSA9PiBmYWxzZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZUJsb2NrKHByZVByb3BzOiB7XG4gIGNoaWxkcmVuOiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNoaWxkcmVuOiBzdHJpbmc7XG4gICAgICBjbGFzc05hbWU6IGFkZFByZWZpeDxMYW5ndWFnZSwgXCJsYW5ndWFnZS1cIj47XG4gICAgICBsaW5lOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbn0pIHtcbiAgY29uc3QgbGFuZ3VhZ2UgPVxuICAgIChwcmVQcm9wcy5jaGlsZHJlbi5wcm9wcy5jbGFzc05hbWU/LnJlcGxhY2UoL2xhbmd1YWdlLS8sIFwiXCIpIGFzIExhbmd1YWdlKSA/P1xuICAgIFwicGxhaW4gdGV4dFwiO1xuXG4gIGNvbnN0IHNob3VsZEhpZ2hsaWdodExpbmUgPSBjYWxjdWxhdGVMaW5lc1RvSGlnaGxpZ2h0KFxuICAgIHByZVByb3BzLmNoaWxkcmVuLnByb3BzLmxpbmVcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxIaWdobGlnaHRcbiAgICAgIHsuLi5kZWZhdWx0UHJvcHN9XG4gICAgICB0aGVtZT17dGhlbWV9XG4gICAgICBjb2RlPXtwcmVQcm9wcy5jaGlsZHJlbi5wcm9wcy5jaGlsZHJlbi50cmltKCl9XG4gICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XG4gICAgPlxuICAgICAgeyh7IGNsYXNzTmFtZSwgc3R5bGUsIHRva2VucywgZ2V0TGluZVByb3BzLCBnZXRUb2tlblByb3BzIH0pID0+IChcbiAgICAgICAgPHByZVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goXCJmb250LW1vbm8gcm91bmRlZC1sZyBmb250LW1lZGl1bVwiLCBjbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LVsxZW1dXCI+XG4gICAgICAgICAgICB7dG9rZW5zLm1hcCgobGluZSwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBsaW5lUHJvcHMgPSBnZXRMaW5lUHJvcHMoeyBsaW5lLCBrZXk6IGkgfSk7XG4gICAgICAgICAgICAgIGlmIChzaG91bGRIaWdobGlnaHRMaW5lKGkpKSB7XG4gICAgICAgICAgICAgICAgbGluZVByb3BzLmNsYXNzTmFtZSA9IGAke2xpbmVQcm9wcy5jbGFzc05hbWV9IGhpZ2hsaWdodC1saW5lYDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiB7Li4ubGluZVByb3BzfT5cbiAgICAgICAgICAgICAgICAgIHtsaW5lLm1hcCgodG9rZW4sIGtleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uZ2V0VG9rZW5Qcm9wcyh7IHRva2VuLCBrZXkgfSl9IC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgPC9wcmU+XG4gICAgICApfVxuICAgIDwvSGlnaGxpZ2h0PlxuICApO1xufVxuIiwgImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9JbmxpbmVDb2RlXCI7XG4iLCAidHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmZ1bmN0aW9uIElubGluZUNvZGUoeyBjaGlsZHJlbiB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweC1zbSBweS1bMnB4XSByb3VuZGVkLW1kIGJnLWJnLTMwMCB0ZXh0LWdyYXktNzAwIHRleHQtbWRcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IElubGluZUNvZGU7XG4iLCAiaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSwgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IE1haW5QYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvTWFpblBhZ2VcIjtcbmltcG9ydCBTcGFjZXIgZnJvbSBcIn4vY29tcG9uZW50cy9TcGFjZXJcIjtcbmltcG9ydCBTaGlmdEJ5IGZyb20gXCJ+L2NvbXBvbmVudHMvU2hpZnRCeVwiO1xuaW1wb3J0IENBVEVHT1JJRVMsIHsgY2F0ZWdvcnlLZXlzIH0gZnJvbSBcIn4vY29uc3RhbnRzL2NhdGVnb3JpZXNcIjtcbmltcG9ydCB7IGdldEFsbE1keFBvc3RzIH0gZnJvbSBcIn4vdXRpbHMvbWR4LnNlcnZlclwiO1xuaW1wb3J0IHsgQXJyb3dSaWdodCB9IGZyb20gXCJyZWFjdC1mZWF0aGVyXCI7XG5pbXBvcnQgY3ggZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBUYWcgZnJvbSBcIn4vY29tcG9uZW50cy9UYWdcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiXHU2NTg3XHU3QUUwXCIsIGRlc2NyaXB0aW9uOiBcIlx1NUUzNlx1NEY2MFx1NUVGQVx1N0FDQlx1NUI4Q1x1NjU3NFx1NzY4NCBDU1MgbWVudGFsIG1vZGVsXCIgfTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExvYWRlckRhdGEoY2F0ZWdvcnk6IHN0cmluZyB8IG51bGwpIHtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxNZHhQb3N0cygpO1xuICBjb25zdCBmaWx0ZXJlZFBvc3RzID0gY2F0ZWdvcnlcbiAgICA/IGFsbFBvc3RzLmZpbHRlcigocG9zdCkgPT4gcG9zdC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpXG4gICAgOiBhbGxQb3N0cztcbiAgY29uc3Qgc29ydGVkUG9zdHMgPSBmaWx0ZXJlZFBvc3RzLnNvcnQoXG4gICAgKGEsIGIpID0+XG4gICAgICBuZXcgRGF0ZShiLnB1Ymxpc2hfZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYS5wdWJsaXNoX2RhdGUpLmdldFRpbWUoKVxuICApO1xuICByZXR1cm4gc29ydGVkUG9zdHM7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnNlYXJjaFBhcmFtcztcbiAgY29uc3QgY2F0ZWdvcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiY2F0ZWdvcnlcIik7XG4gIHJldHVybiBhd2FpdCBnZXRMb2FkZXJEYXRhKGNhdGVnb3J5KTtcbn07XG5cbnR5cGUgTG9hZGVyRGF0YSA9IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgZ2V0TG9hZGVyRGF0YT4+O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlcygpIHtcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoIH0gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBwb3N0cyA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCkuZ2V0KFwiY2F0ZWdvcnlcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpblBhZ2VcbiAgICAgIHBhZ2VOYW1lPVwiXHU2NTg3XHU3QUUwXCJcbiAgICAgIHRpdGxlPVwiXHU1RTM2XHU0RjYwXHU1RUZBXHU3QUNCXHU1QjhDXHU2NTc0XHU3Njg0IENTUyBtZW50YWwgbW9kZWxcIlxuICAgICAgc3ViVGl0bGU9XCJcdTU5ODJcdTY3OUNcdTRGNjBcdTY2RkVcdTZERjFcdTUxNjVcdTc4MTRcdTdBNzZcdTkwNEUgQ1NTIFx1ODk4Rlx1N0JDNFx1RkYwQ1x1OTBBM1x1NEY2MFx1NTNFRlx1ODBGRFx1NzcwQlx1OTA0RVx1NkExOVx1OTg0Q1x1NEUwQVx1OTAxOVx1NUU3RVx1NTAwQlx1NTQwRFx1OEE1RVwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93LXJldmVyc2UganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWJhc2VsaW5lXCI+XG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJoaWRkZW4gZmxleC0xIG1kOm1heC13LVsxMjBweF0gbGc6bWF4LXctWzE1MHB4XSBtZDpibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPlx1NTIwNlx1OTg1RTwvZGl2PlxuICAgICAgICAgIDxTcGFjZXIgc2l6ZT1cImxnXCIgLz5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS1zbVwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHRvPXtwYXRobmFtZX1cbiAgICAgICAgICAgICAgICBwcmVmZXRjaD1cImludGVudFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChcbiAgICAgICAgICAgICAgICAgIFwiYmxvY2sgdGV4dC1zbVwiLFxuICAgICAgICAgICAgICAgICAgIWN1cnJlbnRDYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1wcmltYXJ5LTUwMFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBcdTYyNDBcdTY3MDlcdTY1ODdcdTdBRTBcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhDQVRFR09SSUVTKS5tYXAoKFt2YWx1ZSwgbmFtZV0pID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17dmFsdWV9PlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz17YCR7cGF0aG5hbWV9P2NhdGVnb3J5PSR7dmFsdWV9YH1cbiAgICAgICAgICAgICAgICAgIHByZWZldGNoPVwiaW50ZW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgICAgIFwiYmxvY2sgdGV4dC1zbVwiLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2F0ZWdvcnkgPT09IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtcHJpbWFyeS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMnhsIGZsZXgtMSBtZDptYXgtdy1bNTAwcHhdIGxnOm1heC13LVs2NjRweF1cIj5cbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8QXJ0aWNsZVxuICAgICAgICAgICAgICBrZXk9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGV4Y2VycHQ9e3Bvc3QuZXhjZXJwdH1cbiAgICAgICAgICAgICAgcHVibGlzaERhdGU9e3Bvc3QucHVibGlzaF9kYXRlfVxuICAgICAgICAgICAgICBjYXRlZ29yeT17cG9zdC5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgbGluaz17YC9hcnRpY2xlLyR7cG9zdC5zbHVnfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTWFpblBhZ2U+XG4gICk7XG59XG5cbnR5cGUgQXJ0aWNsZVByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBleGNlcnB0OiBzdHJpbmc7XG4gIHB1Ymxpc2hEYXRlOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiB0eXBlb2YgY2F0ZWdvcnlLZXlzW251bWJlcl07XG4gIGxpbms6IHN0cmluZztcbn07XG5cbmZ1bmN0aW9uIEFydGljbGUoe1xuICB0aXRsZSxcbiAgZXhjZXJwdCxcbiAgcHVibGlzaERhdGUsXG4gIGNhdGVnb3J5LFxuICBsaW5rLFxufTogQXJ0aWNsZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e2xpbmt9IHByZWZldGNoPVwiaW50ZW50XCIgY2xhc3NOYW1lPVwiYmxvY2sgZ3JvdXBcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBncm91cC1ob3Zlcjp0ZXh0LXByaW1hcnktNTAwXCI+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvaDM+XG4gICAgICA8U3BhY2VyIHNpemU9XCIwXCIgY2xhc3NOYW1lPVwiIWgtWzIwcHhdXCIgLz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktNTAwXCI+e2V4Y2VycHR9PC9wPlxuICAgICAgPFNwYWNlciBzaXplPVwic21cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtbWQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxUYWc+e0NBVEVHT1JJRVNbY2F0ZWdvcnldfTwvVGFnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGdyb3VwLWhvdmVyOnRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgIFJlYWQgbW9yZVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHktMCB0cmFuc2xhdGUteC0wIHRyYW5zaXRpb24gZWFzZS1vdXQgd2lsbC1jaGFuZ2UtdHJhbnNmb3JtIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTJ4c1wiPlxuICAgICAgICAgICAgPFNoaWZ0QnkgeT17MX0+XG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cImgtWzE2cHhdIHctWzE2cHhdIHRleHQtZ3JheS03MDBcIiAvPlxuICAgICAgICAgICAgPC9TaGlmdEJ5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn1cbiIsICJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vTWFpblBhZ2VcIjtcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTcGFjZXIgZnJvbSBcIi4uL1NwYWNlclwiO1xuXG50eXBlIFBhZ2VQcm9wcyA9IHtcbiAgcGFnZU5hbWU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc3ViVGl0bGU6IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmZ1bmN0aW9uIE1haW5QYWdlKHsgcGFnZU5hbWUsIHRpdGxlLCBzdWJUaXRsZSwgY2hpbGRyZW4gfTogUGFnZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWy05NHB4XSBwdC1bOTRweF0gYmctc2Vjb25kYXJ5LTEwMFwiPlxuICAgICAgICA8U3BhY2VyIHNpemU9XCJ4bFwiIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiIC8+XG4gICAgICAgIDxTcGFjZXIgc2l6ZT1cIm1kXCIgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzci1vbmx5XCI+e3BhZ2VOYW1lfTwvaDE+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTcwMCBmb250LW1lZGl1bVwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgIDxTcGFjZXIgc2l6ZT1cIm1kXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj57c3ViVGl0bGV9PC9kaXY+XG4gICAgICAgICAgPFNwYWNlciBzaXplPVwiMnhsXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTcGFjZXIgc2l6ZT1cIjN4bFwiIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiIC8+XG4gICAgICA8U3BhY2VyIHNpemU9XCIyeGxcIiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIiAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj57Y2hpbGRyZW59PC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XG4gICAgICA8aDE+V2VsY29tZSB0byBSZW1peDwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi90dXRvcmlhbHMvYmxvZ1wiXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAxNW0gUXVpY2tzdGFydCBCbG9nIFR1dG9yaWFsXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vdHV0b3JpYWxzL2pva2VzXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIERlZXAgRGl2ZSBKb2tlcyBBcHAgVHV0b3JpYWxcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vZG9jc1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgIFJlbWl4IERvY3NcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzUyNzM2NTAxJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC00VjRRNTM2Qy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVDZGR05LVkouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITUNaUU5DSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZWU0U2UDZGLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1GNU1MTkdJVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNUtQNzdDTEcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1SSUxGNkJLQy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXJ0aWNsZS4kc2x1Zyc6eydpZCc6J3JvdXRlcy9hcnRpY2xlLiRzbHVnJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FydGljbGUvOnNsdWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXJ0aWNsZS4kc2x1Zy1BVFAzR0xZWC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstS1NWREFDQ1IuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXJ0aWNsZXMnOnsnaWQnOidyb3V0ZXMvYXJ0aWNsZXMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXJ0aWNsZXMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXJ0aWNsZXMtNllBUjZKUU4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUtTVkRBQ0NSLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUdOUkRMQklGLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTUyNzM2NTAxLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztB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
