"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/transactions/history/route";
exports.ids = ["app/api/transactions/history/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftransactions%2Fhistory%2Froute&page=%2Fapi%2Ftransactions%2Fhistory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftransactions%2Fhistory%2Froute.ts&appDir=E%3A%5CdiWallet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CdiWallet%5Csrc&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftransactions%2Fhistory%2Froute&page=%2Fapi%2Ftransactions%2Fhistory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftransactions%2Fhistory%2Froute.ts&appDir=E%3A%5CdiWallet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CdiWallet%5Csrc&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_diWallet_src_app_api_transactions_history_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/transactions/history/route.ts */ \"(rsc)/./app/api/transactions/history/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/transactions/history/route\",\n        pathname: \"/api/transactions/history\",\n        filename: \"route\",\n        bundlePath: \"app/api/transactions/history/route\"\n    },\n    resolvedPagePath: \"E:\\\\diWallet\\\\src\\\\app\\\\api\\\\transactions\\\\history\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_diWallet_src_app_api_transactions_history_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/transactions/history/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0cmFuc2FjdGlvbnMlMkZoaXN0b3J5JTJGcm91dGUmcGFnZT0lMkZhcGklMkZ0cmFuc2FjdGlvbnMlMkZoaXN0b3J5JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdHJhbnNhY3Rpb25zJTJGaGlzdG9yeSUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDZGlXYWxsZXQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNkaVdhbGxldCU1Q3NyYyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDWTtBQUN6RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8/ZWMxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxkaVdhbGxldFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx0cmFuc2FjdGlvbnNcXFxcaGlzdG9yeVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdHJhbnNhY3Rpb25zL2hpc3Rvcnkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90cmFuc2FjdGlvbnMvaGlzdG9yeVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdHJhbnNhY3Rpb25zL2hpc3Rvcnkvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFxkaVdhbGxldFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx0cmFuc2FjdGlvbnNcXFxcaGlzdG9yeVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdHJhbnNhY3Rpb25zL2hpc3Rvcnkvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftransactions%2Fhistory%2Froute&page=%2Fapi%2Ftransactions%2Fhistory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftransactions%2Fhistory%2Froute.ts&appDir=E%3A%5CdiWallet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CdiWallet%5Csrc&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/transactions/history/route.ts":
/*!***********************************************!*\
  !*** ./app/api/transactions/history/route.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_transaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/transaction */ \"(rsc)/./lib/transaction.ts\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/jwt */ \"(rsc)/./node_modules/next-auth/jwt/index.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nconst secret = process.env.NEXTAUTH_SECRET;\nconst transactionServices = new _lib_transaction__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nasync function GET(req) {\n    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__.getToken)({\n        secret,\n        req\n    });\n    if (!token || typeof token.id !== \"number\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"unathorized\"\n        }, {\n            status: 401\n        });\n    }\n    const userId = token.id;\n    try {\n        const accountHistory = await transactionServices.getTransactions(userId);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"susseccsully fetched history\",\n            accountHistory\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error();\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"could find any trantions\",\n            error: error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RyYW5zYWN0aW9ucy9oaXN0b3J5L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBQ1Y7QUFDZTtBQUV4RCxNQUFNRyxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFDMUMsTUFBTUMsc0JBQXNCLElBQUlQLHdEQUFrQkE7QUFFM0MsZUFBZVEsSUFBSUMsR0FBZ0I7SUFFckMsTUFBTUMsUUFBUSxNQUFNVCx1REFBUUEsQ0FBQztRQUFDRTtRQUFRTTtJQUFHO0lBRXpDLElBQUcsQ0FBQ0MsU0FBUyxPQUFPQSxNQUFNQyxFQUFFLEtBQUssVUFBVTtRQUN4QyxPQUFPVCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUNDLFNBQVE7UUFBYSxHQUFFO1lBQUNDLFFBQU87UUFBRztJQUMvRDtJQUVBLE1BQU1DLFNBQVNMLE1BQU1DLEVBQUU7SUFFeEIsSUFBRztRQUNDLE1BQU1LLGlCQUFpQixNQUFNVCxvQkFBb0JVLGVBQWUsQ0FBQ0Y7UUFDakUsT0FBT2IscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFDQyxTQUFRO1lBQWdDRztRQUFjLEdBQUc7WUFBQ0YsUUFBTztRQUFHO0lBRWxHLEVBQUMsT0FBTUksT0FBTTtRQUNUQyxRQUFRRCxLQUFLO1FBQ2IsT0FBT2hCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBQ0MsU0FBUTtZQUE0QkssT0FBT0E7UUFBSyxHQUFHO1lBQUNKLFFBQU87UUFBRztJQUM1RjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vYXBwL2FwaS90cmFuc2FjdGlvbnMvaGlzdG9yeS9yb3V0ZS50cz8yM2JhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFuc2FjdGlvblNlcnZpY2UgZnJvbSBcIkAvbGliL3RyYW5zYWN0aW9uXCI7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIm5leHQtYXV0aC9qd3RcIjtcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuY29uc3Qgc2VjcmV0ID0gcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUO1xyXG5jb25zdCB0cmFuc2FjdGlvblNlcnZpY2VzID0gbmV3IFRyYW5zYWN0aW9uU2VydmljZSgpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IE5leHRSZXF1ZXN0KXtcclxuXHJcbiAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7c2VjcmV0LCByZXF9KTtcclxuXHJcbiAgICAgaWYoIXRva2VuIHx8IHR5cGVvZiB0b2tlbi5pZCAhPT0gJ251bWJlcicgKXtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe21lc3NhZ2U6J3VuYXRob3JpemVkJ30se3N0YXR1czo0MDF9KVxyXG4gICAgIH1cclxuICAgICAgIFxyXG4gICAgIGNvbnN0IHVzZXJJZCA9IHRva2VuLmlkO1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBhY2NvdW50SGlzdG9yeSA9IGF3YWl0IHRyYW5zYWN0aW9uU2VydmljZXMuZ2V0VHJhbnNhY3Rpb25zKHVzZXJJZCk7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHttZXNzYWdlOidzdXNzZWNjc3VsbHkgZmV0Y2hlZCBoaXN0b3J5JywgYWNjb3VudEhpc3Rvcnl9LCB7c3RhdHVzOjIwMH0pXHJcblxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCk7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHttZXNzYWdlOidjb3VsZCBmaW5kIGFueSB0cmFudGlvbnMnLCBlcnJvcjogZXJyb3J9LCB7c3RhdHVzOjUwMH0pXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiVHJhbnNhY3Rpb25TZXJ2aWNlIiwiZ2V0VG9rZW4iLCJOZXh0UmVzcG9uc2UiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwidHJhbnNhY3Rpb25TZXJ2aWNlcyIsIkdFVCIsInJlcSIsInRva2VuIiwiaWQiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsInVzZXJJZCIsImFjY291bnRIaXN0b3J5IiwiZ2V0VHJhbnNhY3Rpb25zIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/transactions/history/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./lib/transaction.ts":
/*!****************************!*\
  !*** ./lib/transaction.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TransactionService)\n/* harmony export */ });\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/prisma.ts\");\n\n// interface Transaction {\n//   amount: number;\n//   type: \"income\" | \"in\" | \"expense\"; // Add more types if needed\n// }\nclass TransactionService {\n    // Adds a new transaction\n    async addTransaction(userId, amount, transactionName, type) {\n        // First, check if the user has enough balance for an expense transaction\n        const userTotalAmount = await this.getTotalAmount(userId);\n        if (type === \"expense\" && userTotalAmount < amount) {\n            throw new Error(\"Insufficient balance for this transaction.\");\n        }\n        // Create a new transaction\n        const newTransaction = await _prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.transaction.create({\n            data: {\n                userId,\n                amount,\n                transactionName,\n                type\n            }\n        });\n        // Update the user's total amount after adding the transaction\n        await this.updateUserTotalAmount(userId, amount, type);\n        return newTransaction;\n    }\n    // Fetches all transactions of a particular user\n    async getTransactions(userId) {\n        const transactions = await _prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.transaction.findMany({\n            where: {\n                userId\n            },\n            select: {\n                id: true,\n                amount: true,\n                type: true,\n                transactionName: true,\n                createdAt: true\n            }\n        });\n        return transactions;\n    }\n    // Calculates total amount based on income/expense\n    async calculateTotalAmount(transactions) {\n        let totalAmount = 0;\n        transactions.forEach((transaction)=>{\n            const { amount, type } = transaction;\n            if (type === \"income\" || type === \"in\") {\n                totalAmount += amount; // Add for income/in\n            } else if (type === \"expense\") {\n                totalAmount -= amount; // Subtract for expense\n            }\n        });\n        return totalAmount;\n    }\n    // Fetches total amount for a user by summing transactions\n    async getTotalAmount(userId) {\n        const transactions = await this.getTransactions(userId);\n        return this.calculateTotalAmount(transactions);\n    }\n    // Updates the user's total amount after adding a transaction\n    async updateUserTotalAmount(userId, amount, type) {\n        const user = await _prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n            where: {\n                id: userId\n            },\n            select: {\n                totalAmount: true\n            }\n        });\n        if (!user) {\n            throw new Error(\"User not found\");\n        }\n        let newTotalAmount = user.totalAmount;\n        // Adjust totalAmount based on transaction type\n        if (type === \"income\" || type === \"in\") {\n            newTotalAmount += amount;\n        } else if (type === \"expense\") {\n            if (newTotalAmount >= amount) {\n                newTotalAmount -= amount;\n            } else {\n                throw new Error(\"Insufficient balance\"); // Already handled above, but added for extra safety\n            }\n        }\n        // Update user's totalAmount\n        await _prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.update({\n            where: {\n                id: userId\n            },\n            data: {\n                totalAmount: newTotalAmount\n            }\n        });\n        return newTotalAmount;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXBwLy4vbGliL3RyYW5zYWN0aW9uLnRzP2ZkMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4vcHJpc21hXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uLCBUcmFuc2FjdGlvblR5cGUgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xyXG5cclxuLy8gaW50ZXJmYWNlIFRyYW5zYWN0aW9uIHtcclxuLy8gICBhbW91bnQ6IG51bWJlcjtcclxuLy8gICB0eXBlOiBcImluY29tZVwiIHwgXCJpblwiIHwgXCJleHBlbnNlXCI7IC8vIEFkZCBtb3JlIHR5cGVzIGlmIG5lZWRlZFxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2FjdGlvblNlcnZpY2Uge1xyXG4gIC8vIEFkZHMgYSBuZXcgdHJhbnNhY3Rpb25cclxuICBhc3luYyBhZGRUcmFuc2FjdGlvbihcclxuICAgIHVzZXJJZDogbnVtYmVyLFxyXG4gICAgYW1vdW50OiBudW1iZXIsXHJcbiAgICB0cmFuc2FjdGlvbk5hbWU6IHN0cmluZyxcclxuICAgIHR5cGU6IFRyYW5zYWN0aW9uVHlwZVxyXG4gICk6IFByb21pc2U8VHJhbnNhY3Rpb24gfCBudWxsPiB7XHJcbiAgICAvLyBGaXJzdCwgY2hlY2sgaWYgdGhlIHVzZXIgaGFzIGVub3VnaCBiYWxhbmNlIGZvciBhbiBleHBlbnNlIHRyYW5zYWN0aW9uXHJcbiAgICBjb25zdCB1c2VyVG90YWxBbW91bnQgPSBhd2FpdCB0aGlzLmdldFRvdGFsQW1vdW50KHVzZXJJZCk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IFwiZXhwZW5zZVwiICYmIHVzZXJUb3RhbEFtb3VudCA8IGFtb3VudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnN1ZmZpY2llbnQgYmFsYW5jZSBmb3IgdGhpcyB0cmFuc2FjdGlvbi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgbmV3IHRyYW5zYWN0aW9uXHJcbiAgICBjb25zdCBuZXdUcmFuc2FjdGlvbiA9IGF3YWl0IHByaXNtYS50cmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXNlcklkLFxyXG4gICAgICAgIGFtb3VudCxcclxuICAgICAgICB0cmFuc2FjdGlvbk5hbWUsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgdXNlcidzIHRvdGFsIGFtb3VudCBhZnRlciBhZGRpbmcgdGhlIHRyYW5zYWN0aW9uXHJcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZVVzZXJUb3RhbEFtb3VudCh1c2VySWQsIGFtb3VudCwgdHlwZSk7XHJcblxyXG4gICAgcmV0dXJuIG5ld1RyYW5zYWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgLy8gRmV0Y2hlcyBhbGwgdHJhbnNhY3Rpb25zIG9mIGEgcGFydGljdWxhciB1c2VyXHJcbiAgYXN5bmMgZ2V0VHJhbnNhY3Rpb25zKHVzZXJJZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBwcmlzbWEudHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyB1c2VySWQgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgYW1vdW50OiB0cnVlLFxyXG4gICAgICAgIHR5cGU6IHRydWUsXHJcbiAgICAgICAgdHJhbnNhY3Rpb25OYW1lOiB0cnVlLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0cmFuc2FjdGlvbnM7XHJcbiAgfVxyXG5cclxuICAgLy8gQ2FsY3VsYXRlcyB0b3RhbCBhbW91bnQgYmFzZWQgb24gaW5jb21lL2V4cGVuc2VcclxuICBhc3luYyBjYWxjdWxhdGVUb3RhbEFtb3VudCh0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10pOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgbGV0IHRvdGFsQW1vdW50ID0gMDtcclxuXHJcbiAgICB0cmFuc2FjdGlvbnMuZm9yRWFjaCgodHJhbnNhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBhbW91bnQsIHR5cGUgfSA9IHRyYW5zYWN0aW9uO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09IFwiaW5jb21lXCIgfHwgdHlwZSA9PT0gXCJpblwiKSB7XHJcbiAgICAgICAgdG90YWxBbW91bnQgKz0gYW1vdW50OyAvLyBBZGQgZm9yIGluY29tZS9pblxyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZXhwZW5zZVwiKSB7XHJcbiAgICAgICAgdG90YWxBbW91bnQgLT0gYW1vdW50OyAvLyBTdWJ0cmFjdCBmb3IgZXhwZW5zZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdG90YWxBbW91bnQ7XHJcbiAgfVxyXG5cclxuIFxyXG4gIC8vIEZldGNoZXMgdG90YWwgYW1vdW50IGZvciBhIHVzZXIgYnkgc3VtbWluZyB0cmFuc2FjdGlvbnNcclxuICBhc3luYyBnZXRUb3RhbEFtb3VudCh1c2VySWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgdGhpcy5nZXRUcmFuc2FjdGlvbnModXNlcklkKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHRoaXMuY2FsY3VsYXRlVG90YWxBbW91bnQodHJhbnNhY3Rpb25zKTtcclxuICB9XHJcblxyXG5cclxuICAvLyBVcGRhdGVzIHRoZSB1c2VyJ3MgdG90YWwgYW1vdW50IGFmdGVyIGFkZGluZyBhIHRyYW5zYWN0aW9uXHJcbiAgYXN5bmMgdXBkYXRlVXNlclRvdGFsQW1vdW50KFxyXG4gICAgdXNlcklkOiBudW1iZXIsXHJcbiAgICBhbW91bnQ6IG51bWJlcixcclxuICAgIHR5cGU6IFRyYW5zYWN0aW9uVHlwZVxyXG4gICkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXHJcbiAgICAgIHNlbGVjdDogeyB0b3RhbEFtb3VudDogdHJ1ZSB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuZXdUb3RhbEFtb3VudCA9IHVzZXIudG90YWxBbW91bnQ7XHJcblxyXG4gICAgLy8gQWRqdXN0IHRvdGFsQW1vdW50IGJhc2VkIG9uIHRyYW5zYWN0aW9uIHR5cGVcclxuICAgIGlmICh0eXBlID09PSBcImluY29tZVwiIHx8IHR5cGUgPT09IFwiaW5cIikge1xyXG4gICAgICBuZXdUb3RhbEFtb3VudCArPSBhbW91bnQ7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZXhwZW5zZVwiKSB7XHJcbiAgICAgIGlmIChuZXdUb3RhbEFtb3VudCA+PSBhbW91bnQpIHtcclxuICAgICAgICBuZXdUb3RhbEFtb3VudCAtPSBhbW91bnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5zdWZmaWNpZW50IGJhbGFuY2VcIik7IC8vIEFscmVhZHkgaGFuZGxlZCBhYm92ZSwgYnV0IGFkZGVkIGZvciBleHRyYSBzYWZldHlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB1c2VyJ3MgdG90YWxBbW91bnRcclxuICAgIGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgZGF0YTogeyB0b3RhbEFtb3VudDogbmV3VG90YWxBbW91bnQgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBuZXdUb3RhbEFtb3VudDtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsIlRyYW5zYWN0aW9uU2VydmljZSIsImFkZFRyYW5zYWN0aW9uIiwidXNlcklkIiwiYW1vdW50IiwidHJhbnNhY3Rpb25OYW1lIiwidHlwZSIsInVzZXJUb3RhbEFtb3VudCIsImdldFRvdGFsQW1vdW50IiwiRXJyb3IiLCJuZXdUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uIiwiY3JlYXRlIiwiZGF0YSIsInVwZGF0ZVVzZXJUb3RhbEFtb3VudCIsImdldFRyYW5zYWN0aW9ucyIsInRyYW5zYWN0aW9ucyIsImZpbmRNYW55Iiwid2hlcmUiLCJzZWxlY3QiLCJpZCIsImNyZWF0ZWRBdCIsImNhbGN1bGF0ZVRvdGFsQW1vdW50IiwidG90YWxBbW91bnQiLCJmb3JFYWNoIiwidXNlciIsImZpbmRVbmlxdWUiLCJuZXdUb3RhbEFtb3VudCIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/transaction.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/uuid","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftransactions%2Fhistory%2Froute&page=%2Fapi%2Ftransactions%2Fhistory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftransactions%2Fhistory%2Froute.ts&appDir=E%3A%5CdiWallet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CdiWallet%5Csrc&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();