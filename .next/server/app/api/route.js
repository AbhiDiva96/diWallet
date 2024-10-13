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
exports.id = "app/api/route";
exports.ids = ["app/api/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=E%3A%5CdiWallet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CdiWallet%5Csrc&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=E%3A%5CdiWallet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CdiWallet%5Csrc&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_diWallet_src_app_api_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/route.ts */ \"(rsc)/./app/api/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/route\",\n        pathname: \"/api\",\n        filename: \"route\",\n        bundlePath: \"app/api/route\"\n    },\n    resolvedPagePath: \"E:\\\\diWallet\\\\src\\\\app\\\\api\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_diWallet_src_app_api_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDZGlXYWxsZXQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNkaVdhbGxldCU1Q3NyYyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDWDtBQUNsRTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8/MjZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxkaVdhbGxldFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFxkaVdhbGxldFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=E%3A%5CdiWallet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CdiWallet%5Csrc&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/route.ts":
/*!**************************!*\
  !*** ./app/api/route.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/transaction */ \"(rsc)/./lib/transaction.ts\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/jwt */ \"(rsc)/./node_modules/next-auth/jwt/index.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst transactionService = new _lib_transaction__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst secret = process.env.NEXTAUTH_SECRET;\nasync function POST(req) {\n    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_2__.getToken)({\n        req,\n        secret\n    });\n    if (!token || typeof token.id !== \"number\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"unauthorised\"\n        }, {\n            status: 401\n        });\n    }\n    try {\n        const userId = token.id;\n        const { amount, name, type } = await req.json();\n        if (!amount || !name || !type) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"fields are required\"\n            }, {\n                status: 400\n            });\n        }\n        const newTransaction = await transactionService.addTransaction(userId, amount, name, type);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"new transaction added\",\n            transaction: newTransaction\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"You have insufficient balance for this transaction\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdEO0FBQ0w7QUFFVjtBQUV6QyxNQUFNRyxxQkFBcUIsSUFBSUYsd0RBQWtCQTtBQUNqRCxNQUFNRyxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFFbkMsZUFBZUMsS0FBS0MsR0FBZ0I7SUFFakMsTUFBTUMsUUFBUSxNQUFNUix1REFBUUEsQ0FBQztRQUFDTztRQUFLTDtJQUFNO0lBRXpDLElBQUcsQ0FBQ00sU0FBUyxPQUFPQSxNQUFNQyxFQUFFLEtBQUssVUFBVTtRQUN4QyxPQUFPWCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUNDLFNBQVE7UUFBYyxHQUFFO1lBQUNDLFFBQU87UUFBRztJQUNoRTtJQUdSLElBQUk7UUFFRyxNQUFNQyxTQUFtQkwsTUFBTUMsRUFBRTtRQUNsQyxNQUFNLEVBQUVLLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNVCxJQUFJRyxJQUFJO1FBQzdDLElBQUksQ0FBQ0ksVUFBVSxDQUFDQyxRQUFRLENBQUNDLE1BQU07WUFDN0IsT0FBT2xCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBc0IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzdFO1FBQ0QsTUFBTUssaUJBQWlCLE1BQU1oQixtQkFBbUJpQixjQUFjLENBQUNMLFFBQVNDLFFBQVFDLE1BQU1DO1FBQ3pGLE9BQU9sQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVDLFNBQVM7WUFBeUJRLGFBQWFGO1FBQWUsR0FBRztZQUFFTCxRQUFRO1FBQUk7SUFDNUcsRUFBRSxPQUFPUSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7UUFDZCxPQUFPdEIscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFELEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzVHO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9hcHAvYXBpL3JvdXRlLnRzPzE0NGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgVHJhbnNhY3Rpb25TZXJ2aWNlIGZyb20gXCJAL2xpYi90cmFuc2FjdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tIFwibmV4dC1hdXRoL2p3dFwiO1xyXG5cclxuY29uc3QgdHJhbnNhY3Rpb25TZXJ2aWNlID0gbmV3IFRyYW5zYWN0aW9uU2VydmljZSgpO1xyXG5jb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVRcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICAgICBcclxuICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oe3JlcSwgc2VjcmV0fSlcclxuXHJcbiAgICAgICAgICBpZighdG9rZW4gfHwgdHlwZW9mIHRva2VuLmlkICE9PSAnbnVtYmVyJyApe1xyXG4gICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHttZXNzYWdlOid1bmF1dGhvcmlzZWQnfSx7c3RhdHVzOjQwMX0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgXHJcbiAgdHJ5IHtcclxuXHJcbiAgICAgICAgIGNvbnN0IHVzZXJJZCA6IG51bWJlciAgPSB0b2tlbi5pZDtcclxuICAgICAgICBjb25zdCB7IGFtb3VudCwgbmFtZSwgdHlwZSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgICAgICBpZiAoIWFtb3VudCB8fCAhbmFtZSB8fCAhdHlwZSkge1xyXG4gICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ2ZpZWxkcyBhcmUgcmVxdWlyZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgY29uc3QgbmV3VHJhbnNhY3Rpb24gPSBhd2FpdCB0cmFuc2FjdGlvblNlcnZpY2UuYWRkVHJhbnNhY3Rpb24odXNlcklkICwgYW1vdW50LCBuYW1lLCB0eXBlKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICduZXcgdHJhbnNhY3Rpb24gYWRkZWQnLCB0cmFuc2FjdGlvbjogbmV3VHJhbnNhY3Rpb24gfSwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnWW91IGhhdmUgaW5zdWZmaWNpZW50IGJhbGFuY2UgZm9yIHRoaXMgdHJhbnNhY3Rpb24nIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlRyYW5zYWN0aW9uU2VydmljZSIsImdldFRva2VuIiwidHJhbnNhY3Rpb25TZXJ2aWNlIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsIlBPU1QiLCJyZXEiLCJ0b2tlbiIsImlkIiwianNvbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJ1c2VySWQiLCJhbW91bnQiLCJuYW1lIiwidHlwZSIsIm5ld1RyYW5zYWN0aW9uIiwiYWRkVHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbiIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/route.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TransactionService)\n/* harmony export */ });\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/prisma.ts\");\n\nclass TransactionService {\n    // Adds a new transaction\n    async addTransaction(userId, amount, transactionName, type) {\n        // First, check if the user has enough balance for an expense transaction\n        const userTotalAmount = await this.getTotalAmount(userId);\n        if (type === \"expense\" && userTotalAmount < amount) {\n            throw new Error(\"Insufficient balance for this transaction.\");\n        }\n        // Create a new transaction\n        const newTransaction = await _prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.transaction.create({\n            data: {\n                userId,\n                amount,\n                transactionName,\n                type\n            }\n        });\n        // Update the user's total amount after adding the transaction\n        await this.updateUserTotalAmount(userId, amount, type);\n        return newTransaction;\n    }\n    // Fetches all transactions of a particular user\n    async getTransactions(userId) {\n        const transactions = await _prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.transaction.findMany({\n            where: {\n                userId\n            },\n            select: {\n                id: true,\n                amount: true,\n                type: true,\n                transactionName: true,\n                createdAt: true\n            }\n        });\n        return transactions;\n    }\n    // Calculates total amount based on income/expense\n    async calculateTotalAmount(transactions) {\n        let totalAmount = 0;\n        transactions.forEach((transaction)=>{\n            const { amount, type } = transaction;\n            if (type === \"income\" || type === \"in\") {\n                totalAmount += amount; // Add for income/in\n            } else if (type === \"expense\") {\n                totalAmount -= amount; // Subtract for expense\n            }\n        });\n        return totalAmount;\n    }\n    // Fetches total amount for a user by summing transactions\n    async getTotalAmount(userId) {\n        const transactions = await this.getTransactions(userId);\n        return this.calculateTotalAmount(transactions);\n    }\n    // Updates the user's total amount after adding a transaction\n    async updateUserTotalAmount(userId, amount, type) {\n        const user = await _prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n            where: {\n                id: userId\n            },\n            select: {\n                totalAmount: true\n            }\n        });\n        if (!user) {\n            throw new Error(\"User not found\");\n        }\n        let newTotalAmount = user.totalAmount;\n        // Adjust totalAmount based on transaction type\n        if (type === \"income\" || type === \"in\") {\n            newTotalAmount += amount;\n        } else if (type === \"expense\") {\n            if (newTotalAmount >= amount) {\n                newTotalAmount -= amount;\n            } else {\n                throw new Error(\"Insufficient balance\"); // Already handled above, but added for extra safety\n            }\n        }\n        // Update user's totalAmount\n        await _prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.update({\n            where: {\n                id: userId\n            },\n            data: {\n                totalAmount: newTotalAmount\n            }\n        });\n        return newTotalAmount;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvdHJhbnNhY3Rpb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFHbkIsTUFBTUM7SUFDbkIseUJBQXlCO0lBQ3pCLE1BQU1DLGVBQ0pDLE1BQWMsRUFDZEMsTUFBYyxFQUNkQyxlQUF1QixFQUN2QkMsSUFBcUIsRUFDUTtRQUM3Qix5RUFBeUU7UUFDekUsTUFBTUMsa0JBQWtCLE1BQU0sSUFBSSxDQUFDQyxjQUFjLENBQUNMO1FBRWxELElBQUlHLFNBQVMsYUFBYUMsa0JBQWtCSCxRQUFRO1lBQ2xELE1BQU0sSUFBSUssTUFBTTtRQUNsQjtRQUVBLDJCQUEyQjtRQUMzQixNQUFNQyxpQkFBaUIsTUFBTVYsMkNBQU1BLENBQUNXLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO1lBQ3JEQyxNQUFNO2dCQUNKVjtnQkFDQUM7Z0JBQ0FDO2dCQUNBQztZQUNGO1FBQ0Y7UUFFQSw4REFBOEQ7UUFDOUQsTUFBTSxJQUFJLENBQUNRLHFCQUFxQixDQUFDWCxRQUFRQyxRQUFRRTtRQUVqRCxPQUFPSTtJQUNUO0lBRUEsZ0RBQWdEO0lBQ2hELE1BQU1LLGdCQUFnQlosTUFBYyxFQUFFO1FBQ3BDLE1BQU1hLGVBQWUsTUFBTWhCLDJDQUFNQSxDQUFDVyxXQUFXLENBQUNNLFFBQVEsQ0FBQztZQUNyREMsT0FBTztnQkFBRWY7WUFBTztZQUNoQmdCLFFBQVE7Z0JBQ05DLElBQUk7Z0JBQ0poQixRQUFRO2dCQUNSRSxNQUFNO2dCQUNORCxpQkFBaUI7Z0JBQ2pCZ0IsV0FBVztZQUNiO1FBQ0Y7UUFFQSxPQUFPTDtJQUNUO0lBRUEsa0RBQWtEO0lBQ2xELE1BQU1NLHFCQUFxQk4sWUFBbUIsRUFBRTtRQUM5QyxJQUFJTyxjQUFjO1FBRWxCUCxhQUFhUSxPQUFPLENBQUMsQ0FBQ2I7WUFDcEIsTUFBTSxFQUFFUCxNQUFNLEVBQUVFLElBQUksRUFBRSxHQUFHSztZQUV6QixJQUFJTCxTQUFTLFlBQVlBLFNBQVMsTUFBTTtnQkFDdENpQixlQUFlbkIsUUFBUSxvQkFBb0I7WUFDN0MsT0FBTyxJQUFJRSxTQUFTLFdBQVc7Z0JBQzdCaUIsZUFBZW5CLFFBQVEsdUJBQXVCO1lBQ2hEO1FBQ0Y7UUFFQSxPQUFPbUI7SUFDVDtJQUVBLDBEQUEwRDtJQUMxRCxNQUFNZixlQUFlTCxNQUFjLEVBQUU7UUFDbkMsTUFBTWEsZUFBZSxNQUFNLElBQUksQ0FBQ0QsZUFBZSxDQUFDWjtRQUNoRCxPQUFPLElBQUksQ0FBQ21CLG9CQUFvQixDQUFDTjtJQUNuQztJQUVBLDZEQUE2RDtJQUM3RCxNQUFNRixzQkFDSlgsTUFBYyxFQUNkQyxNQUFjLEVBQ2RFLElBQXFCLEVBQ3JCO1FBQ0EsTUFBTW1CLE9BQU8sTUFBTXpCLDJDQUFNQSxDQUFDeUIsSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFDeENSLE9BQU87Z0JBQUVFLElBQUlqQjtZQUFPO1lBQ3BCZ0IsUUFBUTtnQkFBRUksYUFBYTtZQUFLO1FBQzlCO1FBRUEsSUFBSSxDQUFDRSxNQUFNO1lBQ1QsTUFBTSxJQUFJaEIsTUFBTTtRQUNsQjtRQUVBLElBQUlrQixpQkFBaUJGLEtBQUtGLFdBQVc7UUFFckMsK0NBQStDO1FBQy9DLElBQUlqQixTQUFTLFlBQVlBLFNBQVMsTUFBTTtZQUN0Q3FCLGtCQUFrQnZCO1FBQ3BCLE9BQU8sSUFBSUUsU0FBUyxXQUFXO1lBQzdCLElBQUlxQixrQkFBa0J2QixRQUFRO2dCQUM1QnVCLGtCQUFrQnZCO1lBQ3BCLE9BQU87Z0JBQ0wsTUFBTSxJQUFJSyxNQUFNLHlCQUF5QixvREFBb0Q7WUFDL0Y7UUFDRjtRQUVBLDRCQUE0QjtRQUM1QixNQUFNVCwyQ0FBTUEsQ0FBQ3lCLElBQUksQ0FBQ0csTUFBTSxDQUFDO1lBQ3ZCVixPQUFPO2dCQUFFRSxJQUFJakI7WUFBTztZQUNwQlUsTUFBTTtnQkFBRVUsYUFBYUk7WUFBZTtRQUN0QztRQUVBLE9BQU9BO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2xpYi90cmFuc2FjdGlvbi50cz9mZDBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuL3ByaXNtYVwiO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbiwgVHJhbnNhY3Rpb25UeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zYWN0aW9uU2VydmljZSB7XHJcbiAgLy8gQWRkcyBhIG5ldyB0cmFuc2FjdGlvblxyXG4gIGFzeW5jIGFkZFRyYW5zYWN0aW9uKFxyXG4gICAgdXNlcklkOiBudW1iZXIsXHJcbiAgICBhbW91bnQ6IG51bWJlcixcclxuICAgIHRyYW5zYWN0aW9uTmFtZTogc3RyaW5nLFxyXG4gICAgdHlwZTogVHJhbnNhY3Rpb25UeXBlXHJcbiAgKTogUHJvbWlzZTxUcmFuc2FjdGlvbiB8IG51bGw+IHtcclxuICAgIC8vIEZpcnN0LCBjaGVjayBpZiB0aGUgdXNlciBoYXMgZW5vdWdoIGJhbGFuY2UgZm9yIGFuIGV4cGVuc2UgdHJhbnNhY3Rpb25cclxuICAgIGNvbnN0IHVzZXJUb3RhbEFtb3VudCA9IGF3YWl0IHRoaXMuZ2V0VG90YWxBbW91bnQodXNlcklkKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gXCJleHBlbnNlXCIgJiYgdXNlclRvdGFsQW1vdW50IDwgYW1vdW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkluc3VmZmljaWVudCBiYWxhbmNlIGZvciB0aGlzIHRyYW5zYWN0aW9uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgdHJhbnNhY3Rpb25cclxuICAgIGNvbnN0IG5ld1RyYW5zYWN0aW9uID0gYXdhaXQgcHJpc21hLnRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgYW1vdW50LFxyXG4gICAgICAgIHRyYW5zYWN0aW9uTmFtZSxcclxuICAgICAgICB0eXBlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSB1c2VyJ3MgdG90YWwgYW1vdW50IGFmdGVyIGFkZGluZyB0aGUgdHJhbnNhY3Rpb25cclxuICAgIGF3YWl0IHRoaXMudXBkYXRlVXNlclRvdGFsQW1vdW50KHVzZXJJZCwgYW1vdW50LCB0eXBlKTtcclxuXHJcbiAgICByZXR1cm4gbmV3VHJhbnNhY3Rpb247XHJcbiAgfVxyXG5cclxuICAvLyBGZXRjaGVzIGFsbCB0cmFuc2FjdGlvbnMgb2YgYSBwYXJ0aWN1bGFyIHVzZXJcclxuICBhc3luYyBnZXRUcmFuc2FjdGlvbnModXNlcklkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IGF3YWl0IHByaXNtYS50cmFuc2FjdGlvbi5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHVzZXJJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICBhbW91bnQ6IHRydWUsXHJcbiAgICAgICAgdHlwZTogdHJ1ZSxcclxuICAgICAgICB0cmFuc2FjdGlvbk5hbWU6IHRydWUsXHJcbiAgICAgICAgY3JlYXRlZEF0OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zYWN0aW9ucztcclxuICB9XHJcblxyXG4gIC8vIENhbGN1bGF0ZXMgdG90YWwgYW1vdW50IGJhc2VkIG9uIGluY29tZS9leHBlbnNlXHJcbiAgYXN5bmMgY2FsY3VsYXRlVG90YWxBbW91bnQodHJhbnNhY3Rpb25zOiBhbnlbXSkge1xyXG4gICAgbGV0IHRvdGFsQW1vdW50ID0gMDtcclxuXHJcbiAgICB0cmFuc2FjdGlvbnMuZm9yRWFjaCgodHJhbnNhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBhbW91bnQsIHR5cGUgfSA9IHRyYW5zYWN0aW9uO1xyXG5cclxuICAgICAgaWYgKHR5cGUgPT09IFwiaW5jb21lXCIgfHwgdHlwZSA9PT0gXCJpblwiKSB7XHJcbiAgICAgICAgdG90YWxBbW91bnQgKz0gYW1vdW50OyAvLyBBZGQgZm9yIGluY29tZS9pblxyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZXhwZW5zZVwiKSB7XHJcbiAgICAgICAgdG90YWxBbW91bnQgLT0gYW1vdW50OyAvLyBTdWJ0cmFjdCBmb3IgZXhwZW5zZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdG90YWxBbW91bnQ7XHJcbiAgfVxyXG5cclxuICAvLyBGZXRjaGVzIHRvdGFsIGFtb3VudCBmb3IgYSB1c2VyIGJ5IHN1bW1pbmcgdHJhbnNhY3Rpb25zXHJcbiAgYXN5bmMgZ2V0VG90YWxBbW91bnQodXNlcklkOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IGF3YWl0IHRoaXMuZ2V0VHJhbnNhY3Rpb25zKHVzZXJJZCk7XHJcbiAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVUb3RhbEFtb3VudCh0cmFuc2FjdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLy8gVXBkYXRlcyB0aGUgdXNlcidzIHRvdGFsIGFtb3VudCBhZnRlciBhZGRpbmcgYSB0cmFuc2FjdGlvblxyXG4gIGFzeW5jIHVwZGF0ZVVzZXJUb3RhbEFtb3VudChcclxuICAgIHVzZXJJZDogbnVtYmVyLFxyXG4gICAgYW1vdW50OiBudW1iZXIsXHJcbiAgICB0eXBlOiBUcmFuc2FjdGlvblR5cGVcclxuICApIHtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHsgdG90YWxBbW91bnQ6IHRydWUgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmV3VG90YWxBbW91bnQgPSB1c2VyLnRvdGFsQW1vdW50O1xyXG5cclxuICAgIC8vIEFkanVzdCB0b3RhbEFtb3VudCBiYXNlZCBvbiB0cmFuc2FjdGlvbiB0eXBlXHJcbiAgICBpZiAodHlwZSA9PT0gXCJpbmNvbWVcIiB8fCB0eXBlID09PSBcImluXCIpIHtcclxuICAgICAgbmV3VG90YWxBbW91bnQgKz0gYW1vdW50O1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImV4cGVuc2VcIikge1xyXG4gICAgICBpZiAobmV3VG90YWxBbW91bnQgPj0gYW1vdW50KSB7XHJcbiAgICAgICAgbmV3VG90YWxBbW91bnQgLT0gYW1vdW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluc3VmZmljaWVudCBiYWxhbmNlXCIpOyAvLyBBbHJlYWR5IGhhbmRsZWQgYWJvdmUsIGJ1dCBhZGRlZCBmb3IgZXh0cmEgc2FmZXR5XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdXNlcidzIHRvdGFsQW1vdW50XHJcbiAgICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXHJcbiAgICAgIGRhdGE6IHsgdG90YWxBbW91bnQ6IG5ld1RvdGFsQW1vdW50IH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3VG90YWxBbW91bnQ7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJUcmFuc2FjdGlvblNlcnZpY2UiLCJhZGRUcmFuc2FjdGlvbiIsInVzZXJJZCIsImFtb3VudCIsInRyYW5zYWN0aW9uTmFtZSIsInR5cGUiLCJ1c2VyVG90YWxBbW91bnQiLCJnZXRUb3RhbEFtb3VudCIsIkVycm9yIiwibmV3VHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbiIsImNyZWF0ZSIsImRhdGEiLCJ1cGRhdGVVc2VyVG90YWxBbW91bnQiLCJnZXRUcmFuc2FjdGlvbnMiLCJ0cmFuc2FjdGlvbnMiLCJmaW5kTWFueSIsIndoZXJlIiwic2VsZWN0IiwiaWQiLCJjcmVhdGVkQXQiLCJjYWxjdWxhdGVUb3RhbEFtb3VudCIsInRvdGFsQW1vdW50IiwiZm9yRWFjaCIsInVzZXIiLCJmaW5kVW5pcXVlIiwibmV3VG90YWxBbW91bnQiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/transaction.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/uuid","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=E%3A%5CdiWallet%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CdiWallet%5Csrc&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();