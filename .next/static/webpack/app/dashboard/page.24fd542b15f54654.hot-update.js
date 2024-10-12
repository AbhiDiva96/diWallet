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

/***/ "(app-pages-browser)/./app/dashboard/page.tsx":
/*!********************************!*\
  !*** ./app/dashboard/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        amount: 0,\n        name: \"\",\n        type: \"income\"\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [walletAmount, setWalletAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (status === \"unauthenticated\") {\n            router.push(\"/signin\");\n        }\n    }, [\n        status,\n        router\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchWalletAmount = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/transactions\");\n                setWalletAmount(response.data.total);\n            } catch (error) {\n                setError(\"Failed to fetch wallet amount\");\n                console.error(error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchWalletAmount(); // Fetch wallet amount on component load\n    }, [\n        session,\n        status\n    ]);\n    const handleTypeChange = (type)=>{\n        setFormData((prevData)=>({\n                ...prevData,\n                type\n            }));\n    };\n    // Handle form input changes\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prevData)=>({\n                ...prevData,\n                [name]: name === \"amount\" ? Number(value) : value\n            }));\n    };\n    // Handle form submission\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        setError(null);\n        setSuccess(null);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api\", formData); // formData has the correct number type for amount\n            if (response.status === 200) {\n                setSuccess(response.data.message);\n            }\n            // Update wallet amount after successful transaction\n            // You can re-fetch wallet amount if needed\n            // Reset form data\n            setFormData({\n                amount: 0,\n                name: \"\",\n                type: \"income\"\n            });\n        } catch (error) {\n            var _error_response_data, _error_response;\n            setError(((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || \"An error occurred\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n            lineNumber: 98,\n            columnNumber: 12\n        }, this);\n    }\n    if (!session) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center dark:bg-gray-900 justify-center min-h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-8 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold text-gray-700\",\n                        children: \"Total Wallet Amount\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl \".concat(walletAmount < 0 ? \"text-red-500\" : \"text-green-500\", \" font-bold mt-2\"),\n                        children: \"₹\".concat(walletAmount)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white shadow-lg rounded-lg p-8 w-full max-w-md dark:bg-gray-700/20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-semibold text-center text-gray-700 dark:text-white mb-6\",\n                        children: \"Add Transaction\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 text-center mb-4\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 19\n                    }, this),\n                    success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-green-500 text-center mb-4\",\n                        children: success\n                    }, void 0, false, {\n                        fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"amount\",\n                                        className: \"block text-sm font-medium text-gray-700 dark:text-white\",\n                                        children: \"Amount\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"number\",\n                                        id: \"amount\",\n                                        name: \"amount\",\n                                        placeholder: \"Enter Amount\",\n                                        value: formData.amount,\n                                        onChange: handleChange,\n                                        className: \"mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"name\",\n                                        className: \"block text-sm font-medium text-gray-700 dark:text-white\",\n                                        children: \"Transaction Name\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 139,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"name\",\n                                        name: \"name\",\n                                        placeholder: \"Enter Name\",\n                                        value: formData.name,\n                                        onChange: handleChange,\n                                        className: \"mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 138,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-4 py-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            onClick: ()=>handleTypeChange(\"income\"),\n                                            className: \"flex-1 px-4 py-2 rounded-md focus:outline-none \".concat(formData.type === \"income\" ? \"bg-green-500 text-white\" : \"border border-green-500 bg-green-400/20 text-green-500\"),\n                                            children: \"Income\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                            lineNumber: 156,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            onClick: ()=>handleTypeChange(\"expense\"),\n                                            className: \"flex-1 px-4 py-2 rounded-md focus:outline-none \".concat(formData.type === \"expense\" ? \"bg-red-500 text-white\" : \"border border-orange-500 bg-orange-400/20 text-orange-500\"),\n                                            children: \"Expense\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                            lineNumber: 165,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                    lineNumber: 155,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 154,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                disabled: loading,\n                                className: \"w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50\",\n                                children: loading ? \"Adding...\" : \"Add Transaction\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 177,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\diWallet\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"dG21iwJD5/nMZPxI3MeR6mzEcQw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNsQjtBQUNtQjtBQUNEO0FBUTdCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQWM7UUFDcERRLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFFQSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFnQjtJQUNsRCxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFnQjtJQUN0RCxNQUFNLENBQUNpQixjQUFjQyxnQkFBZ0IsR0FBR2xCLCtDQUFRQSxDQUFTO0lBRXpELE1BQU0sRUFBRW1CLE1BQU1DLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdsQiwyREFBVUE7SUFDNUMsTUFBTW1CLFNBQVNsQiwwREFBU0E7SUFFeEJILGdEQUFTQSxDQUFDO1FBQ1IsSUFBSW9CLFdBQVcsbUJBQW1CO1lBQ2hDQyxPQUFPQyxJQUFJLENBQUM7UUFDZDtJQUNGLEdBQUc7UUFBQ0Y7UUFBUUM7S0FBTztJQUVuQnJCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXVCLG9CQUFvQjtZQUN4QixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTXZCLDZDQUFLQSxDQUFDd0IsR0FBRyxDQUFDO2dCQUNqQ1IsZ0JBQWdCTyxTQUFTTixJQUFJLENBQUNRLEtBQUs7WUFDckMsRUFBRSxPQUFPZCxPQUFPO2dCQUNkQyxTQUFTO2dCQUNUYyxRQUFRZixLQUFLLENBQUNBO1lBQ2hCLFNBQVU7Z0JBQ1JELFdBQVc7WUFDYjtRQUNGO1FBQ0FZLHFCQUFxQix3Q0FBd0M7SUFDL0QsR0FBRztRQUFDSjtRQUFTQztLQUFPO0lBRXBCLE1BQU1RLG1CQUFtQixDQUFDbkI7UUFDeEJILFlBQVks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V0FBVyw0QkFBNEI7c0RBRTVEOzs7Ozs7c0RBR0QsOERBQUM0Qzs0Q0FDQzVDLE1BQUs7NENBQ0w2QyxTQUFTLElBQU0xQixpQkFBaUI7NENBQ2hDWSxXQUFXLGtEQUVWLE9BRENuQyxTQUFTSSxJQUFJLEtBQUssWUFBWSwwQkFBMEI7c0RBRTNEOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNTCw4REFBQzRDO2dDQUNDNUMsTUFBSztnQ0FDTDhDLFVBQVU3QztnQ0FDVjhCLFdBQVU7MENBRVQ5QixVQUFVLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQztHQTlLd0JOOztRQVlZRix1REFBVUE7UUFDN0JDLHNEQUFTQTs7O0tBYkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3g/ZDEyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbmludGVyZmFjZSBUcmFuc2FjdGlvbiB7XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8VHJhbnNhY3Rpb24+KHtcclxuICAgIGFtb3VudDogMCxcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgdHlwZTogJ2luY29tZScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFt3YWxsZXRBbW91bnQsIHNldFdhbGxldEFtb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gJ3VuYXV0aGVudGljYXRlZCcpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9zaWduaW4nKTtcclxuICAgIH1cclxuICB9LCBbc3RhdHVzLCByb3V0ZXJdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoV2FsbGV0QW1vdW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3RyYW5zYWN0aW9ucycpO1xyXG4gICAgICAgIHNldFdhbGxldEFtb3VudChyZXNwb25zZS5kYXRhLnRvdGFsKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGZldGNoIHdhbGxldCBhbW91bnQnKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoV2FsbGV0QW1vdW50KCk7IC8vIEZldGNoIHdhbGxldCBhbW91bnQgb24gY29tcG9uZW50IGxvYWRcclxuICB9LCBbc2Vzc2lvbiwgc3RhdHVzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVR5cGVDaGFuZ2UgPSAodHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRGb3JtRGF0YSgocHJldkRhdGEpID0+ICh7XHJcbiAgICAgIC4uLnByZXZEYXRhLFxyXG4gICAgICB0eXBlLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIC8vIEhhbmRsZSBmb3JtIGlucHV0IGNoYW5nZXNcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgc2V0Rm9ybURhdGEoKHByZXZEYXRhKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2RGF0YSxcclxuICAgICAgW25hbWVdOiBuYW1lID09PSAnYW1vdW50JyA/IE51bWJlcih2YWx1ZSkgOiB2YWx1ZSwgLy8gRW5zdXJlIGFtb3VudCBpcyBjb252ZXJ0ZWQgdG8gbnVtYmVyXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIHNldFN1Y2Nlc3MobnVsbCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpJywgZm9ybURhdGEpOyAvLyBmb3JtRGF0YSBoYXMgdGhlIGNvcnJlY3QgbnVtYmVyIHR5cGUgZm9yIGFtb3VudFxyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2V0U3VjY2VzcyhyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVcGRhdGUgd2FsbGV0IGFtb3VudCBhZnRlciBzdWNjZXNzZnVsIHRyYW5zYWN0aW9uXHJcbiAgICAgIC8vIFlvdSBjYW4gcmUtZmV0Y2ggd2FsbGV0IGFtb3VudCBpZiBuZWVkZWRcclxuXHJcbiAgICAgIC8vIFJlc2V0IGZvcm0gZGF0YVxyXG4gICAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgICAgYW1vdW50OiAwLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIHR5cGU6ICdpbmNvbWUnLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IucmVzcG9uc2U/LmRhdGE/Lm1lc3NhZ2UgfHwgJ0FuIGVycm9yIG9jY3VycmVkJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoc3RhdHVzID09PSAnbG9hZGluZycpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZGFyazpiZy1ncmF5LTkwMCBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctZ3JheS0xMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC1sZyBwLTYgdy1mdWxsIG1heC13LW1kIG1iLTggdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5Ub3RhbCBXYWxsZXQgQW1vdW50PC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LTN4bCAke3dhbGxldEFtb3VudCA8IDAgPyAndGV4dC1yZWQtNTAwJyA6ICd0ZXh0LWdyZWVuLTUwMCd9IGZvbnQtYm9sZCBtdC0yYH0+XHJcbiAgICAgICAgICB7YOKCuSR7d2FsbGV0QW1vdW50fWB9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBUcmFuc2FjdGlvbiBGb3JtICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIHAtOCB3LWZ1bGwgbWF4LXctbWQgZGFyazpiZy1ncmF5LTcwMC8yMFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LXdoaXRlIG1iLTZcIj5BZGQgVHJhbnNhY3Rpb248L2gxPlxyXG5cclxuICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQtY2VudGVyIG1iLTRcIj57ZXJyb3J9PC9wPn1cclxuICAgICAgICB7c3VjY2VzcyAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCB0ZXh0LWNlbnRlciBtYi00XCI+e3N1Y2Nlc3N9PC9wPn1cclxuXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbW91bnRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgQW1vdW50XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGlkPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEFtb3VudFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmFtb3VudH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICBUcmFuc2FjdGlvbiBOYW1lXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcHgtNCBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IHB5LTRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVR5cGVDaGFuZ2UoJ2luY29tZScpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC0xIHB4LTQgcHktMiByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSAke1xyXG4gICAgICAgICAgICAgICAgICBmb3JtRGF0YS50eXBlID09PSAnaW5jb21lJyA/ICdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZScgOiAnYm9yZGVyIGJvcmRlci1ncmVlbi01MDAgYmctZ3JlZW4tNDAwLzIwIHRleHQtZ3JlZW4tNTAwJ1xyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSW5jb21lXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUeXBlQ2hhbmdlKCdleHBlbnNlJyl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4LTEgcHgtNCBweS0yIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lICR7XHJcbiAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLnR5cGUgPT09ICdleHBlbnNlJyA/ICdiZy1yZWQtNTAwIHRleHQtd2hpdGUnIDogJ2JvcmRlciBib3JkZXItb3JhbmdlLTUwMCBiZy1vcmFuZ2UtNDAwLzIwIHRleHQtb3JhbmdlLTUwMCdcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEV4cGVuc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTMgYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgaG92ZXI6YmctaW5kaWdvLTUwMCB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGRpc2FibGVkOm9wYWNpdHktNTBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/ICdBZGRpbmcuLi4nIDogJ0FkZCBUcmFuc2FjdGlvbid9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJEYXNoYm9hcmQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiYW1vdW50IiwibmFtZSIsInR5cGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsIndhbGxldEFtb3VudCIsInNldFdhbGxldEFtb3VudCIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwicm91dGVyIiwicHVzaCIsImZldGNoV2FsbGV0QW1vdW50IiwicmVzcG9uc2UiLCJnZXQiLCJ0b3RhbCIsImNvbnNvbGUiLCJoYW5kbGVUeXBlQ2hhbmdlIiwicHJldkRhdGEiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJOdW1iZXIiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.tsx\n"));

/***/ })

});