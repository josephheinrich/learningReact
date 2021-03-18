webpackHotUpdate_N_E("pages/crypto",{

/***/ "./src/components/CryptoCard/CryptoCard.js":
/*!*************************************************!*\
  !*** ./src/components/CryptoCard/CryptoCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CryptoRenderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CryptoRenderProps */ "./src/components/CryptoCard/CryptoRenderProps.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\jheinrich\\Desktop\\learningReact\\src\\components\\CryptoCard\\CryptoCard.js",
    _this = undefined;





var CryptoCard = function CryptoCard() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CryptoRenderProps__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: function children(_ref) {
      var rows = _ref.rows,
          isLoading = _ref.isLoading;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex-grow overflow-y-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-wrap justify-center sm:flex",
          children: rows.map(function (_ref2, i) {
            var base = _ref2.base,
                currency = _ref2.currency,
                amount = _ref2.amount;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "m-4 w-40 sm:w-44 md:w-48 justify-items-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "rounded shadow-md overflow-hidden",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      alt: "",
                      className: "bg-green-900 h-40 object-cover"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 19,
                      columnNumber: 53
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "bg-white m-2",
                      children: isLoading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        type: "ThreeDots",
                        className: "justify-items-center",
                        color: "#064e3b",
                        height: 40,
                        width: 40
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 22,
                        columnNumber: 65
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-xl block font-light",
                          children: base
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 25,
                          columnNumber: 65
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-lg font-bold text-green-900",
                          children: amount
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 26,
                          columnNumber: 65
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "ml-1 text-gray-700",
                          children: currency
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 26,
                          columnNumber: 131
                        }, _this)]
                      }, void 0, true)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 20,
                      columnNumber: 53
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 49
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 45
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 41
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 37
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, _this);
};

_c = CryptoCard;
/* harmony default export */ __webpack_exports__["default"] = (CryptoCard);

var _c;

$RefreshReg$(_c, "CryptoCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3J5cHRvQ2FyZC9DcnlwdG9DYXJkLmpzIl0sIm5hbWVzIjpbIkNyeXB0b0NhcmQiLCJyb3dzIiwiaXNMb2FkaW5nIiwibWFwIiwiaSIsImJhc2UiLCJjdXJyZW5jeSIsImFtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsc0JBQ0kscUVBQUMsMERBQUQ7QUFBQSxjQUNLLHdCQUF1QjtBQUFBLFVBQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxVQUFmQyxTQUFlLFFBQWZBLFNBQWU7QUFDcEIsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLHVDQUFmO0FBQUEsb0JBQ0tELElBQUksQ0FBQ0UsR0FBTCxDQUFTLGlCQUEyQkMsQ0FBM0IsRUFBaUM7QUFBQSxnQkFBL0JDLElBQStCLFNBQS9CQSxJQUErQjtBQUFBLGdCQUF6QkMsUUFBeUIsU0FBekJBLFFBQXlCO0FBQUEsZ0JBQWZDLE1BQWUsU0FBZkEsTUFBZTtBQUN2QyxnQ0FDSTtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQywrQ0FBZjtBQUFBLHVDQUNJO0FBQUssMkJBQVMsRUFBQyxtQ0FBZjtBQUFBLHlDQUNJO0FBQUEsNENBQ0k7QUFBSyx5QkFBRyxFQUFDLEVBQVQ7QUFBWSwrQkFBUyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosZUFFSTtBQUFLLCtCQUFTLEVBQUMsY0FBZjtBQUFBLGdDQUNLTCxTQUFTLEtBQUssSUFBZCxnQkFDTyxxRUFBQywyREFBRDtBQUFRLDRCQUFJLEVBQUMsV0FBYjtBQUF5QixpQ0FBUyxFQUFDLHNCQUFuQztBQUEwRCw2QkFBSyxFQUFDLFNBQWhFO0FBQTBFLDhCQUFNLEVBQUUsRUFBbEY7QUFBc0YsNkJBQUssRUFBRTtBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURQLGdCQUdHO0FBQUEsZ0RBQ0k7QUFBTSxtQ0FBUyxFQUFDLDBCQUFoQjtBQUFBLG9DQUE0Q0c7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FESixlQUVJO0FBQU0sbUNBQVMsRUFBQyxrQ0FBaEI7QUFBQSxvQ0FBb0RFO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRkosZUFFc0U7QUFBTSxtQ0FBUyxFQUFDLG9CQUFoQjtBQUFBLG9DQUFzQ0Q7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGdEU7QUFBQTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixlQUFVRixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFxQkgsV0F0QkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBNkJIO0FBL0JMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1DSCxDQXBDRDs7S0FBTUosVTtBQXNDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3J5cHRvLjAwMzQyNWM1MTk1NDI1OGNjZmEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENyeXB0b1JlbmRlclByb3BzIGZyb20gJy4vQ3J5cHRvUmVuZGVyUHJvcHMnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJ3JlYWN0LWxvYWRlci1zcGlubmVyJztcclxuXHJcbmNvbnN0IENyeXB0b0NhcmQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDcnlwdG9SZW5kZXJQcm9wcz5cclxuICAgICAgICAgICAgeyh7cm93cywgaXNMb2FkaW5nfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICggICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBvdmVyZmxvdy15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBzbTpmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93cy5tYXAoKHtiYXNlLCBjdXJyZW5jeSwgYW1vdW50fSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS00IHctNDAgc206dy00NCBtZDp3LTQ4IGp1c3RpZnktaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgYWx0PVwiXCIgY2xhc3NOYW1lPVwiYmctZ3JlZW4tOTAwIGgtNDAgb2JqZWN0LWNvdmVyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRlciB0eXBlPVwiVGhyZWVEb3RzXCIgY2xhc3NOYW1lPVwianVzdGlmeS1pdGVtcy1jZW50ZXJcIiBjb2xvcj1cIiMwNjRlM2JcIiBoZWlnaHQ9ezQwfSB3aWR0aD17NDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGJsb2NrIGZvbnQtbGlnaHRcIj57YmFzZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTkwMFwiPnthbW91bnR9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC1ncmF5LTcwMFwiPntjdXJyZW5jeX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIDwvQ3J5cHRvUmVuZGVyUHJvcHM+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyeXB0b0NhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==