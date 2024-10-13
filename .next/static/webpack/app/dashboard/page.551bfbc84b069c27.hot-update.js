"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./components/Toggles/AllToggles.tsx":
/*!*******************************************!*\
  !*** ./components/Toggles/AllToggles.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllToggle: function() { return /* binding */ AllToggle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Close */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Close.js\");\n/* harmony import */ var _mui_icons_material_ReceiptLongTwoTone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ReceiptLongTwoTone */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/ReceiptLongTwoTone.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ AllToggle auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AllToggle = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [history, setHistory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const togglePopup = ()=>setIsOpen(!isOpen);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getTotalTransaction = async ()=>{\n            if (status === \"authenticated\") {\n                setIsLoading(true);\n                setError(null);\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/transactions/history\");\n                    setHistory(response.data.accountHistory);\n                } catch (error) {\n                    console.error(\"Failed to fetch transaction history:\", error);\n                    setError(\"Failed to load transaction history. Please try again.\");\n                } finally{\n                    setIsLoading(false);\n                }\n            }\n        };\n        getTotalTransaction();\n    }, [\n        status,\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative  flex items-center justify-center pb-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: togglePopup,\n                className: \"p-4 dark:bg-gray-800 border border-slate-400/20 rounded dark:text-white \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ReceiptLongTwoTone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 10\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                lineNumber: 44,\n                columnNumber: 8\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white dark:bg-slate-800 rounded-lg w-full max-w-md mx-auto relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: togglePopup,\n                            className: \"absolute top-2 right-2 text-gray-500 hover:text-gray-700\",\n                            \"aria-label\": \"Close popup\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"h-6 w-6\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl dark:text-white font-bold mb-4\",\n                                    children: \"Transaction History\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"overflow-y-auto max-h-[70vh]\",\n                                    children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-center dark:text-gray-300\",\n                                        children: \"Loading transactions...\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 19\n                                    }, undefined) : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-center text-red-500 dark:text-red-400\",\n                                        children: error\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 19\n                                    }, undefined) : history.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-center dark:text-gray-300\",\n                                        children: \"No transactions found.\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 19\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"divide-y divide-gray-200 dark:divide-gray-700\",\n                                        children: history.slice(0).map((transaction)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"py-4 px-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex justify-between\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    className: \"text-lg font-semibold text-gray-900 dark:text-gray-100\",\n                                                                    children: transaction.transactionName\n                                                                }, void 0, false, {\n                                                                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                                                    lineNumber: 77,\n                                                                    columnNumber: 29\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    className: \"text-sm text-gray-500 dark:text-gray-400\",\n                                                                    children: new Date(transaction.createdAt).toLocaleString()\n                                                                }, void 0, false, {\n                                                                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                                                    lineNumber: 78,\n                                                                    columnNumber: 29\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                                            lineNumber: 76,\n                                                            columnNumber: 27\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"flex justify-center\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"text-sm font-semibold \".concat(transaction.type === \"income\" ? \"text-green-500\" : \"text-red-500\"),\n                                                                children: transaction.type === \"income\" ? \"+₹\".concat(transaction.amount.toFixed(2)) : \"-₹\".concat(transaction.amount.toFixed(2))\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                                                lineNumber: 81,\n                                                                columnNumber: 27\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 27\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, transaction.id, false, {\n                                                fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 23\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\diWallet\\\\src\\\\components\\\\Toggles\\\\AllToggles.tsx\",\n        lineNumber: 43,\n        columnNumber: 6\n    }, undefined);\n};\n_s(AllToggle, \"xxoIHJ7NaR4kJVkdIPIN6KOXCTk=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = AllToggle;\nvar _c;\n$RefreshReg$(_c, \"AllToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVG9nZ2xlcy9BbGxUb2dnbGVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUyQztBQUNPO0FBQzBCO0FBQy9CO0FBQ25CO0FBSW5CLE1BQU9NLFlBQVk7O0lBQ3hCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQWdCLEVBQUU7SUFDeEQsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBZ0I7SUFFbEQsTUFBTSxFQUFFYyxNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHYiwyREFBVUE7SUFFNUMsTUFBTWMsY0FBYyxJQUFNVixVQUFVLENBQUNEO0lBRXJDUCxnREFBU0EsQ0FBQztRQUNSLE1BQU1tQixzQkFBc0I7WUFDMUIsSUFBSUosV0FBVyxpQkFBaUI7Z0JBQzlCSCxhQUFhO2dCQUNiRSxTQUFTO2dCQUNULElBQUk7b0JBQ0YsTUFBTU0sV0FBVyxNQUFNZiw2Q0FBS0EsQ0FBQ2dCLEdBQUcsQ0FBQztvQkFDakNYLFdBQVdVLFNBQVNKLElBQUksQ0FBQ00sY0FBYztnQkFDekMsRUFBRSxPQUFPVCxPQUFPO29CQUNkVSxRQUFRVixLQUFLLENBQUMsd0NBQXdDQTtvQkFDdERDLFNBQVM7Z0JBQ1gsU0FBVTtvQkFDUkYsYUFBYTtnQkFDZjtZQUNGO1FBQ0Y7UUFFQU87SUFDRixHQUFHO1FBQUNKO1FBQVFFO0tBQVE7SUFFcEIscUJBRUcsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFDQ0MsU0FBU1Q7Z0JBQ1RPLFdBQVU7MEJBRVYsNEVBQUN0Qiw4RUFBc0JBOzs7Ozs7Ozs7O1lBSXpCSSx3QkFDQyw4REFBQ2lCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUNDQyxTQUFTVDs0QkFDVE8sV0FBVTs0QkFDVkcsY0FBVztzQ0FFWCw0RUFBQzFCLGlFQUFTQTtnQ0FBQ3VCLFdBQVU7Ozs7Ozs7Ozs7O3NDQUV2Qiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDSTtvQ0FBR0osV0FBVTs4Q0FBMEM7Ozs7Ozs4Q0FDeEQsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNaZCwwQkFDQyw4REFBQ21CO3dDQUFFTCxXQUFVO2tEQUFpQzs7Ozs7b0RBQzVDWixzQkFDRiw4REFBQ2lCO3dDQUFFTCxXQUFVO2tEQUE4Q1o7Ozs7O29EQUN6REosUUFBUXNCLE1BQU0sS0FBSyxrQkFDckIsOERBQUNEO3dDQUFFTCxXQUFVO2tEQUFpQzs7Ozs7a0VBRTlDLDhEQUFDTzt3Q0FBR1AsV0FBVTtrREFDWGhCLFFBQVF3QixLQUFLLENBQUMsR0FBR0MsR0FBRyxDQUFDLENBQUNDLDRCQUNyQiw4REFBQ0M7Z0RBQXdCWCxXQUFVOzBEQUNqQyw0RUFBQ0Q7b0RBQUlDLFdBQVU7O3NFQUNiLDhEQUFDRDs0REFBSUMsV0FBVTs7OEVBQ2IsOERBQUNLO29FQUFFTCxXQUFVOzhFQUEwRFUsWUFBWUUsZUFBZTs7Ozs7OzhFQUNsRyw4REFBQ1A7b0VBQUVMLFdBQVU7OEVBQTRDLElBQUlhLEtBQUtILFlBQVlJLFNBQVMsRUFBRUMsY0FBYzs7Ozs7Ozs7Ozs7O3NFQUV6Ryw4REFBQ2hCOzREQUFJQyxXQUFVO3NFQUNmLDRFQUFDSztnRUFBRUwsV0FBVyx5QkFBNkYsT0FBcEVVLFlBQVlNLElBQUksS0FBSyxXQUFXLG1CQUFvQjswRUFDMUZOLFlBQVlNLElBQUksS0FBSSxXQUFXLEtBQW1DLE9BQTlCTixZQUFZTyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxNQUFRLEtBQW1DLE9BQTlCUixZQUFZTyxNQUFNLENBQUNDLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBUm5HUixZQUFZUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCM0MsRUFBQztHQXZGV3RDOztRQU1zQkYsdURBQVVBOzs7S0FOaENFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9nZ2xlcy9BbGxUb2dnbGVzLnRzeD85ZWUwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgUmVjZWlwdExvbmdUd29Ub25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1JlY2VpcHRMb25nVHdvVG9uZSc7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCAgQWxsVG9nZ2xlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZTxUcmFuc2FjdGlvbltdPihbXSlcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCB7IHN0YXR1cywgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBvcHVwID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRUb3RhbFRyYW5zYWN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAnYXV0aGVudGljYXRlZCcpIHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcclxuICAgICAgICBzZXRFcnJvcihudWxsKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS90cmFuc2FjdGlvbnMvaGlzdG9yeScpXHJcbiAgICAgICAgICBzZXRIaXN0b3J5KHJlc3BvbnNlLmRhdGEuYWNjb3VudEhpc3RvcnkpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB0cmFuc2FjdGlvbiBoaXN0b3J5OicsIGVycm9yKVxyXG4gICAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHRyYW5zYWN0aW9uIGhpc3RvcnkuIFBsZWFzZSB0cnkgYWdhaW4uJylcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRvdGFsVHJhbnNhY3Rpb24oKVxyXG4gIH0sIFtzdGF0dXMsIHNlc3Npb25dKVxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwYi00XCI+XHJcbiAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBvcHVwfVxyXG4gICAgICAgICBjbGFzc05hbWU9XCJwLTQgZGFyazpiZy1ncmF5LTgwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTQwMC8yMCByb3VuZGVkIGRhcms6dGV4dC13aGl0ZSBcIlxyXG4gICAgICAgPlxyXG4gICAgICAgICA8UmVjZWlwdExvbmdUd29Ub25lSWNvbi8+XHJcbiAgICAgICA8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1zbGF0ZS04MDAgcm91bmRlZC1sZyB3LWZ1bGwgbWF4LXctbWQgbXgtYXV0byByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUG9wdXB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBwb3B1cFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2xvc2VJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTZcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZGFyazp0ZXh0LXdoaXRlIGZvbnQtYm9sZCBtYi00XCI+VHJhbnNhY3Rpb24gSGlzdG9yeTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy15LWF1dG8gbWF4LWgtWzcwdmhdXCI+XHJcbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBkYXJrOnRleHQtZ3JheS0zMDBcIj5Mb2FkaW5nIHRyYW5zYWN0aW9ucy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICkgOiBlcnJvciA/IChcclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1yZWQtNTAwIGRhcms6dGV4dC1yZWQtNDAwXCI+e2Vycm9yfTwvcD5cclxuICAgICAgICAgICAgICAgICkgOiBoaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZGFyazp0ZXh0LWdyYXktMzAwXCI+Tm8gdHJhbnNhY3Rpb25zIGZvdW5kLjwvcD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgZGFyazpkaXZpZGUtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aGlzdG9yeS5zbGljZSgwKS5tYXAoKHRyYW5zYWN0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt0cmFuc2FjdGlvbi5pZH0gY2xhc3NOYW1lPVwicHktNCBweC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTEwMFwiPnt0cmFuc2FjdGlvbi50cmFuc2FjdGlvbk5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPntuZXcgRGF0ZSh0cmFuc2FjdGlvbi5jcmVhdGVkQXQpLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgJHt0cmFuc2FjdGlvbi50eXBlID09PSAnaW5jb21lJyA/ICd0ZXh0LWdyZWVuLTUwMCcgIDogJ3RleHQtcmVkLTUwMCcgfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbi50eXBlPT09ICdpbmNvbWUnID8gYCvigrkke3RyYW5zYWN0aW9uLmFtb3VudC50b0ZpeGVkKDIpfWAgOiAgYC3igrkke3RyYW5zYWN0aW9uLmFtb3VudC50b0ZpeGVkKDIpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxuICB9Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2xvc2VJY29uIiwiUmVjZWlwdExvbmdUd29Ub25lSWNvbiIsInVzZVNlc3Npb24iLCJheGlvcyIsIkFsbFRvZ2dsZSIsImlzT3BlbiIsInNldElzT3BlbiIsImhpc3RvcnkiLCJzZXRIaXN0b3J5IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInN0YXR1cyIsImRhdGEiLCJzZXNzaW9uIiwidG9nZ2xlUG9wdXAiLCJnZXRUb3RhbFRyYW5zYWN0aW9uIiwicmVzcG9uc2UiLCJnZXQiLCJhY2NvdW50SGlzdG9yeSIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiYXJpYS1sYWJlbCIsImgyIiwicCIsImxlbmd0aCIsInVsIiwic2xpY2UiLCJtYXAiLCJ0cmFuc2FjdGlvbiIsImxpIiwidHJhbnNhY3Rpb25OYW1lIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlU3RyaW5nIiwidHlwZSIsImFtb3VudCIsInRvRml4ZWQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Toggles/AllToggles.tsx\n"));

/***/ })

});