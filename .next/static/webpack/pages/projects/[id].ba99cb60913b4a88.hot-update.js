"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/[id]",{

/***/ "./pages/projects/[id].js":
/*!********************************!*\
  !*** ./pages/projects/[id].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nvar _s = $RefreshSig$();\nfunction myBalance() {\n    return 100;\n}\nfunction projectId() {\n    _s();\n    var name = \"Zakie\";\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    console.log(router);\n    // const projectId = router.query.id\n    var mypathname = router.pathname;\n    var queryid = router.query.id;\n    var balance = myB;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/zakiezabar/Developer/Nextjs/Starter/myapp1/mynextapp/pages/projects/[id].js\",\n            lineNumber: 20,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/zakiezabar/Developer/Nextjs/Starter/myapp1/mynextapp/pages/projects/[id].js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    \"My query: \",\n                    queryid\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/zakiezabar/Developer/Nextjs/Starter/myapp1/mynextapp/pages/projects/[id].js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    \"My pathname: \",\n                    mypathname\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/zakiezabar/Developer/Nextjs/Starter/myapp1/mynextapp/pages/projects/[id].js\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    \"My Name: \",\n                    _typeof(name)\n                ]\n            })\n        ]\n    }));\n}\n_s(projectId, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (projectId);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNkOzs7OztTQUdoQkUsU0FBUyxHQUFFLENBQUM7SUFDakIsTUFBTSxDQUFDLEdBQUc7QUFDZCxDQUFDO1NBRVFDLFNBQVMsR0FBRyxDQUFDOztJQUVsQixHQUFLLENBQUNDLElBQUksR0FBRyxDQUFPO0lBRXBCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTCxzREFBUztJQUN4Qk0sT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU07SUFDbEIsRUFBb0M7SUFDcEMsR0FBSyxDQUFDRyxVQUFVLEdBQUdILE1BQU0sQ0FBQ0ksUUFBUTtJQUNsQyxHQUFLLENBQUNDLE9BQU8sR0FBR0wsTUFBTSxDQUFDTSxLQUFLLENBQUNDLEVBQUU7SUFDL0IsR0FBSyxDQUFDQyxPQUFPLEdBQUdDLEdBQUc7SUFDbkIsTUFBTSx1RUFDREMsQ0FBRzs7Ozs7Ozs7a0ZBQ0NDLENBQUU7Ozs7Ozs7O29CQUFDLENBQVU7b0JBQUNOLE9BQU87OztrRkFDckJNLENBQUU7Ozs7Ozs7O29CQUFDLENBQWE7b0JBQUNSLFVBQVU7OztrRkFDM0JRLENBQUU7Ozs7Ozs7O29CQUFDLENBQVM7b0JBQUMsT0FBWSxDQUFMWixJQUFJOzs7OztBQUdyQyxDQUFDO0dBakJRRCxTQUFTOztRQUlDSCxrREFBUzs7O0FBZTVCLCtEQUFlRyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RzL1tpZF0uanM/MjVjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuXG5mdW5jdGlvbiBteUJhbGFuY2UoKXtcbiAgICByZXR1cm4gMTAwO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0SWQoKSB7XG5cbiAgICBjb25zdCBuYW1lID0gXCJaYWtpZVwiXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnNvbGUubG9nKHJvdXRlcilcbiAgICAvLyBjb25zdCBwcm9qZWN0SWQgPSByb3V0ZXIucXVlcnkuaWRcbiAgICBjb25zdCBteXBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXG4gICAgY29uc3QgcXVlcnlpZCA9IHJvdXRlci5xdWVyeS5pZFxuICAgIGNvbnN0IGJhbGFuY2UgPSBteUJcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPk15IHF1ZXJ5OiB7cXVlcnlpZH08L2gxPlxuICAgICAgICAgICAgPGgxPk15IHBhdGhuYW1lOiB7bXlwYXRobmFtZX08L2gxPlxuICAgICAgICAgICAgPGgxPk15IE5hbWU6IHt0eXBlb2YobmFtZSl9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0SWRcblxuXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJteUJhbGFuY2UiLCJwcm9qZWN0SWQiLCJuYW1lIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsIm15cGF0aG5hbWUiLCJwYXRobmFtZSIsInF1ZXJ5aWQiLCJxdWVyeSIsImlkIiwiYmFsYW5jZSIsIm15QiIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/[id].js\n");

/***/ })

});