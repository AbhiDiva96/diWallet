"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"84ed394f9f86\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzZhZWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI4NGVkMzk0ZjlmODZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/navbar.tsx":
/*!*******************************!*\
  !*** ./components/navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navbar: function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DarkModeToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DarkModeToggle */ \"(app-pages-browser)/./components/DarkModeToggle.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _mui_icons_material_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/AccountBalanceWallet */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/AccountBalanceWallet.js\");\n/* harmony import */ var _context_amountProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/amountProvider */ \"(app-pages-browser)/./context/amountProvider.tsx\");\n/* harmony import */ var _ui_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/Avatar */ \"(app-pages-browser)/./components/ui/Avatar.tsx\");\n/* __next_internal_client_entry_do_not_use__ Navbar auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { totalAmount } = (0,_context_amountProvider__WEBPACK_IMPORTED_MODULE_5__.useTotalAmount)();\n    const handleLogout = async ()=>{\n        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-white dark:bg-gray-900 shadow-md px-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex justify-between items-center py-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center text-lg text-black dark:text-white font-bold md:text-xl\",\n                        children: \"YourWallet\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-4\",\n                    children: [\n                        session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex justify-center gap-2 dark:bg-gray-400/20 p-2 rounded border border-slate-400/20\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-center gap-2 dark:text-white\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 20\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"flex justify-center text-xl \".concat(totalAmount < 0 ? \"text-red-500\" : \"text-green-500\", \" font-bold \"),\n                                                children: \"₹\".concat(totalAmount)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Avatar__WEBPACK_IMPORTED_MODULE_6__.AvatarToggle, {\n                                    username: \"{session.user?.name}\",\n                                    onLogout: handleLogout\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 18\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),\n                                    className: \"flex justify-center border border-gray-800/20 text-lg text-black dark:text-white font-bold md:text-xl p-2 rounded\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: \"/signup\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex justify-center border border-gray-800/20 text-lg text-black dark:text-white font-bold md:text-xl p-2 rounded\",\n                                        children: \"Sign Up\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DarkModeToggle__WEBPACK_IMPORTED_MODULE_3__.DarkModeToggle, {}, void 0, false, {\n                            fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"5A7plCmTCgTY226M3XudclpeHT4=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _context_amountProvider__WEBPACK_IMPORTED_MODULE_5__.useTotalAmount\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDaUM7QUFDWjtBQUNOO0FBQ29DO0FBQ3RCO0FBQ2Y7QUFFcEMsTUFBTVMsU0FBUzs7SUFDcEIsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR1YsMkRBQVVBO0lBQ3BDLE1BQU1XLFNBQVNQLDBEQUFTQTtJQUV4QixNQUFNLEVBQUVRLFdBQVcsRUFBRSxHQUFHTix1RUFBY0E7SUFFdEMsTUFBTU8sZUFBZTtRQUNuQixNQUFNWCx3REFBT0E7UUFDYlMsT0FBT0csSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNqQixpREFBSUE7b0JBQUNtQixNQUFLOzhCQUNULDRFQUFDRDt3QkFBSUQsV0FBVTtrQ0FBOEU7Ozs7Ozs7Ozs7OzhCQUsvRiw4REFBQ0M7b0JBQUlELFdBQVU7O3dCQUNaTix3QkFDQyw4REFBQ087NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBSUQsV0FBVTs7c0RBQ2IsOERBQUNDOzRDQUFJRCxXQUFVO3NEQUNaLDRFQUFDWCxnRkFBd0JBOzs7Ozs7Ozs7O3NEQUU1Qiw4REFBQ1k7NENBQUlELFdBQVU7c0RBQ2IsNEVBQUNHO2dEQUFFSCxXQUFXLCtCQUFtRixPQUFwREosY0FBYyxJQUFJLGlCQUFpQixrQkFBaUI7MERBQzlGLElBQWdCLE9BQVpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FXUiw4REFBQ0wsb0RBQVlBO29DQUFDYSxVQUFXO29DQUF1QkMsVUFBVVI7Ozs7Ozs7Ozs7O3NEQUcvRDs7OENBQ0UsOERBQUNTO29DQUFPQyxTQUFTLElBQU10Qix1REFBTUE7b0NBQUllLFdBQVU7OENBQW9IOzs7Ozs7OENBRy9KLDhEQUFDakIsaURBQUlBO29DQUFDbUIsTUFBSzs4Q0FDVCw0RUFBQ0k7d0NBQU9OLFdBQVU7a0RBQW9IOzs7Ozs7Ozs7Ozs7O3NDQU01SSw4REFBQ2IsMkRBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCLEVBQUU7R0EzRFdLOztRQUNlUix1REFBVUE7UUFDckJJLHNEQUFTQTtRQUVBRSxtRUFBY0E7OztLQUozQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIudHN4PzdmMGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgeyBEYXJrTW9kZVRvZ2dsZSB9IGZyb20gJy4vRGFya01vZGVUb2dnbGUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgQWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudEJhbGFuY2VXYWxsZXQnO1xyXG5pbXBvcnQgeyB1c2VUb3RhbEFtb3VudCB9IGZyb20gJ0AvY29udGV4dC9hbW91bnRQcm92aWRlcic7XHJcbmltcG9ydCB7IEF2YXRhclRvZ2dsZSB9IGZyb20gJy4vdWkvQXZhdGFyJztcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHsgdG90YWxBbW91bnQgfSA9IHVzZVRvdGFsQW1vdW50KCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IHNpZ25PdXQoKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1ncmF5LTkwMCBzaGFkb3ctbWQgcHgtNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWxnIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtZDp0ZXh0LXhsXCI+XHJcbiAgICAgICAgICAgIFlvdXJXYWxsZXRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAge3Nlc3Npb24gPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBmbGV4IGp1c3RpZnktY2VudGVyIGdhcC0yIGRhcms6YmctZ3JheS00MDAvMjAgcC0yIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1zbGF0ZS00MDAvMjAnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTIgZGFyazp0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgICAgICAgICAgIDxBY2NvdW50QmFsYW5jZVdhbGxldEljb24vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC14bCAke3RvdGFsQW1vdW50IDwgMCA/ICd0ZXh0LXJlZC01MDAnIDogJ3RleHQtZ3JlZW4tNTAwJ30gZm9udC1ib2xkIGB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtg4oK5JHt0b3RhbEFtb3VudH1gfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgZm9udC1ib2xkXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fSBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktODAwLzIwIHRleHQtbGcgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgZm9udC1ib2xkIG1kOnRleHQteGwgcC0yIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgPEF2YXRhclRvZ2dsZSB1c2VybmFtZT17YHtzZXNzaW9uLnVzZXI/Lm5hbWV9YH0gb25Mb2dvdXQ9e2hhbmRsZUxvZ291dH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBib3JkZXIgYm9yZGVyLWdyYXktODAwLzIwIHRleHQtbGcgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgZm9udC1ib2xkIG1kOnRleHQteGwgcC0yIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBib3JkZXIgYm9yZGVyLWdyYXktODAwLzIwIHRleHQtbGcgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgZm9udC1ib2xkIG1kOnRleHQteGwgcC0yIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8RGFya01vZGVUb2dnbGUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59OyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJEYXJrTW9kZVRvZ2dsZSIsInVzZVJvdXRlciIsIkFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiIsInVzZVRvdGFsQW1vdW50IiwiQXZhdGFyVG9nZ2xlIiwiTmF2YmFyIiwiZGF0YSIsInNlc3Npb24iLCJyb3V0ZXIiLCJ0b3RhbEFtb3VudCIsImhhbmRsZUxvZ291dCIsInB1c2giLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwicCIsInVzZXJuYW1lIiwib25Mb2dvdXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/navbar.tsx\n"));

/***/ })

});