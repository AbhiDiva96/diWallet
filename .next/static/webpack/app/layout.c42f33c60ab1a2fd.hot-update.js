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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"366a75fcc717\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzZhZWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIzNjZhNzVmY2M3MTdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/navbar.tsx":
/*!*******************************!*\
  !*** ./components/navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navbar: function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DarkModeToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DarkModeToggle */ \"(app-pages-browser)/./components/DarkModeToggle.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ Navbar auto */ \nvar _s = $RefreshSig$();\n\n\n\n // Import useRouter for navigation\nconst Navbar = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // Initialize the useRouter hook\n    // Fetch user data from session or API to check if user is logged in\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchUser = async ()=>{\n            const token = localStorage.getItem(\"token\");\n            if (token) {\n                try {\n                    // Assuming you have an API endpoint to fetch user details\n                    const response = await fetch(\"/api/user\", {\n                        method: \"GET\",\n                        headers: {\n                            Authorization: \"Bearer \".concat(token)\n                        }\n                    });\n                    if (response.ok) {\n                        const userData = await response.json();\n                        setUser(userData); // Assuming userData contains { name, avatarUrl }\n                    } else {\n                        setUser(null); // If not logged in, set user to null\n                    }\n                } catch (error) {\n                    console.error(\"Failed to fetch user data\", error);\n                    setUser(null);\n                }\n            } else {\n                setUser(null); // If no token, set user to null\n            }\n        };\n        fetchUser();\n    }, []);\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"token\"); // Remove token from local storage\n        setUser(null); // Clear user state\n        router.push(\"/signin\"); // Redirect to the sign-in page\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-white dark:bg-gray-900 shadow-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex justify-between items-center py-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center text-lg text-black dark:text-white font-bold md:text-xl\",\n                        children: \"YourWallet\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-4\",\n                    children: [\n                        user ? // If user is logged in, show avatar, user details, and logout button\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center space-x-4\",\n                            children: [\n                                user.name,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-black dark:text-white font-bold\",\n                                    children: user.name\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleLogout,\n                                    className: \"border border-gray-800/20 text-lg text-black dark:text-white font-bold md:text-xl p-2 rounded\",\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined) : // If user is not logged in, show login and signup buttons\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: \"/signin\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex justify-center border border-gray-800/20 text-lg text-black dark:text-white font-bold md:text-xl p-2 rounded\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: \"/signup\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex justify-center border border-gray-800/20 text-lg text-black dark:text-white font-bold md:text-xl p-2 rounded\",\n                                        children: \"Sign Up\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DarkModeToggle__WEBPACK_IMPORTED_MODULE_3__.DarkModeToggle, {}, void 0, false, {\n                            fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\navbar.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"ocZTZ8m72GkfgAfkTHk7sW+OJyw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNkI7QUFDZTtBQUNNO0FBQ04sQ0FBQyxrQ0FBa0M7QUFFeEUsTUFBTUssU0FBUzs7SUFDcEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUF5QjtJQUN6RCxNQUFNTyxTQUFTSiwwREFBU0EsSUFBSSxnQ0FBZ0M7SUFFNUQsb0VBQW9FO0lBQ3BFRixnREFBU0EsQ0FBQztRQUNSLE1BQU1PLFlBQVk7WUFDaEIsTUFBTUMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1lBQ25DLElBQUlGLE9BQU87Z0JBQ1QsSUFBSTtvQkFDRiwwREFBMEQ7b0JBQzFELE1BQU1HLFdBQVcsTUFBTUMsTUFBTSxhQUFhO3dCQUN4Q0MsUUFBUTt3QkFDUkMsU0FBUzs0QkFDUEMsZUFBZSxVQUFnQixPQUFOUDt3QkFDM0I7b0JBQ0Y7b0JBQ0EsSUFBSUcsU0FBU0ssRUFBRSxFQUFFO3dCQUNmLE1BQU1DLFdBQVcsTUFBTU4sU0FBU08sSUFBSTt3QkFDcENiLFFBQVFZLFdBQVcsaURBQWlEO29CQUN0RSxPQUFPO3dCQUNMWixRQUFRLE9BQU8scUNBQXFDO29CQUN0RDtnQkFDRixFQUFFLE9BQU9jLE9BQU87b0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO29CQUMzQ2QsUUFBUTtnQkFDVjtZQUNGLE9BQU87Z0JBQ0xBLFFBQVEsT0FBTyxnQ0FBZ0M7WUFDakQ7UUFDRjtRQUVBRTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1jLGVBQWU7UUFDbkJaLGFBQWFhLFVBQVUsQ0FBQyxVQUFVLGtDQUFrQztRQUNwRWpCLFFBQVEsT0FBTyxtQkFBbUI7UUFDbENDLE9BQU9pQixJQUFJLENBQUMsWUFBWSwrQkFBK0I7SUFDekQ7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUMzQixpREFBSUE7b0JBQUM2QixNQUFLOzhCQUNULDRFQUFDRDt3QkFBSUQsV0FBVTtrQ0FBOEU7Ozs7Ozs7Ozs7OzhCQUsvRiw4REFBQ0M7b0JBQUlELFdBQVU7O3dCQUNackIsT0FDQyxxRUFBcUU7c0NBQ3JFLDhEQUFDc0I7NEJBQUlELFdBQVU7O2dDQUNUckIsS0FBS3dCLElBQUk7OENBQ2IsOERBQUNDO29DQUFLSixXQUFVOzhDQUF3Q3JCLEtBQUt3QixJQUFJOzs7Ozs7OENBQ2pFLDhEQUFDRTtvQ0FDQ0MsU0FBU1Y7b0NBQ1RJLFdBQVU7OENBQ1g7Ozs7Ozs7Ozs7O3dDQUtILDBEQUEwRDtzQ0FDMUQ7OzhDQUNFLDhEQUFDM0IsaURBQUlBO29DQUFDNkIsTUFBSzs4Q0FDVCw0RUFBQ0c7d0NBQU9MLFdBQVU7a0RBQW9IOzs7Ozs7Ozs7Ozs4Q0FJeEksOERBQUMzQixpREFBSUE7b0NBQUM2QixNQUFLOzhDQUNULDRFQUFDRzt3Q0FBT0wsV0FBVTtrREFBb0g7Ozs7Ozs7Ozs7Ozs7c0NBTzVJLDhEQUFDeEIsMkRBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCLEVBQUU7R0FwRldFOztRQUVJRCxzREFBU0E7OztLQUZiQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci50c3g/N2YwZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERhcmtNb2RlVG9nZ2xlIH0gZnJvbSAnLi9EYXJrTW9kZVRvZ2dsZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7IC8vIEltcG9ydCB1c2VSb3V0ZXIgZm9yIG5hdmlnYXRpb25cclxuXHJcbmV4cG9ydCBjb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8eyBuYW1lOiBzdHJpbmd9IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IC8vIEluaXRpYWxpemUgdGhlIHVzZVJvdXRlciBob29rXHJcblxyXG4gIC8vIEZldGNoIHVzZXIgZGF0YSBmcm9tIHNlc3Npb24gb3IgQVBJIHRvIGNoZWNrIGlmIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgLy8gQXNzdW1pbmcgeW91IGhhdmUgYW4gQVBJIGVuZHBvaW50IHRvIGZldGNoIHVzZXIgZGV0YWlsc1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2VyJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgc2V0VXNlcih1c2VyRGF0YSk7IC8vIEFzc3VtaW5nIHVzZXJEYXRhIGNvbnRhaW5zIHsgbmFtZSwgYXZhdGFyVXJsIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFVzZXIobnVsbCk7IC8vIElmIG5vdCBsb2dnZWQgaW4sIHNldCB1c2VyIHRvIG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2VyIGRhdGFcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihudWxsKTsgLy8gSWYgbm8gdG9rZW4sIHNldCB1c2VyIHRvIG51bGxcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFVzZXIoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7IC8vIFJlbW92ZSB0b2tlbiBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgIHNldFVzZXIobnVsbCk7IC8vIENsZWFyIHVzZXIgc3RhdGVcclxuICAgIHJvdXRlci5wdXNoKCcvc2lnbmluJyk7IC8vIFJlZGlyZWN0IHRvIHRoZSBzaWduLWluIHBhZ2VcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktOTAwIHNoYWRvdy1tZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWxnIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtZDp0ZXh0LXhsXCI+XHJcbiAgICAgICAgICAgIFlvdXJXYWxsZXRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgIC8vIElmIHVzZXIgaXMgbG9nZ2VkIGluLCBzaG93IGF2YXRhciwgdXNlciBkZXRhaWxzLCBhbmQgbG9nb3V0IGJ1dHRvblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgZm9udC1ib2xkXCI+e3VzZXIubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTgwMC8yMCB0ZXh0LWxnIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtZDp0ZXh0LXhsIHAtMiByb3VuZGVkXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAvLyBJZiB1c2VyIGlzIG5vdCBsb2dnZWQgaW4sIHNob3cgbG9naW4gYW5kIHNpZ251cCBidXR0b25zXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBib3JkZXIgYm9yZGVyLWdyYXktODAwLzIwIHRleHQtbGcgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgZm9udC1ib2xkIG1kOnRleHQteGwgcC0yIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGJvcmRlciBib3JkZXItZ3JheS04MDAvMjAgdGV4dC1sZyB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBmb250LWJvbGQgbWQ6dGV4dC14bCBwLTIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8RGFya01vZGVUb2dnbGUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGFya01vZGVUb2dnbGUiLCJ1c2VSb3V0ZXIiLCJOYXZiYXIiLCJ1c2VyIiwic2V0VXNlciIsInJvdXRlciIsImZldGNoVXNlciIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIm9rIiwidXNlckRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsInB1c2giLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwibmFtZSIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/navbar.tsx\n"));

/***/ })

});