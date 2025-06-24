exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 7345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function Layout({ children }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "My Personal Website"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "min-h-screen flex flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: "bg-white/80 backdrop-blur-sm shadow-soft border-b border-gray-100 sticky top-0 z-50",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between items-center h-16 sm:h-18",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            className: "logo-font text-2xl sm:text-3xl font-bold text-gradient hover:scale-105 transition-transform duration-200",
                                            children: "Vinos Samuel"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                            className: "hidden md:flex space-x-8 lg:space-x-10",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/about",
                                                    className: "text-dark-gray hover:text-accent font-medium transition-colors duration-200 relative group",
                                                    children: [
                                                        "About Me",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/projects",
                                                    className: "text-dark-gray hover:text-accent font-medium transition-colors duration-200 relative group",
                                                    children: [
                                                        "Projects",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/thinking",
                                                    className: "text-dark-gray hover:text-accent font-medium transition-colors duration-200 relative group",
                                                    children: [
                                                        "Thinking",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/savyr",
                                                    className: "text-dark-gray hover:text-accent font-medium transition-colors duration-200 relative group",
                                                    children: [
                                                        "Savyr's Corner",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/connect",
                                                    className: "text-dark-gray hover:text-accent font-medium transition-colors duration-200 relative group",
                                                    children: [
                                                        "Connect",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: toggleMobileMenu,
                                            className: "md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200",
                                            "aria-label": "Toggle mobile menu",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "w-6 h-6 text-dark-gray",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: isMobileMenuOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M6 18L18 6M6 6l12 12"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M4 6h16M4 12h16M4 18h16"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                isMobileMenuOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "md:hidden pb-4 pt-2 border-t border-gray-100",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                        className: "flex flex-col space-y-3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/about",
                                                className: "py-2 px-3 text-dark-gray hover:text-accent hover:bg-gray-50 rounded-lg font-medium transition-all duration-200",
                                                onClick: ()=>setIsMobileMenuOpen(false),
                                                children: "About Me"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/projects",
                                                className: "py-2 px-3 text-dark-gray hover:text-accent hover:bg-gray-50 rounded-lg font-medium transition-all duration-200",
                                                onClick: ()=>setIsMobileMenuOpen(false),
                                                children: "Projects"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/thinking",
                                                className: "py-2 px-3 text-dark-gray hover:text-accent hover:bg-gray-50 rounded-lg font-medium transition-all duration-200",
                                                onClick: ()=>setIsMobileMenuOpen(false),
                                                children: "Thinking"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/savyr",
                                                className: "py-2 px-3 text-dark-gray hover:text-accent hover:bg-gray-50 rounded-lg font-medium transition-all duration-200",
                                                onClick: ()=>setIsMobileMenuOpen(false),
                                                children: "Savyr's Corner"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/connect",
                                                className: "py-2 px-3 text-dark-gray hover:text-accent hover:bg-gray-50 rounded-lg font-medium transition-all duration-200",
                                                onClick: ()=>setIsMobileMenuOpen(false),
                                                children: "Connect"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        className: "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8",
                        children: children
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);


function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;