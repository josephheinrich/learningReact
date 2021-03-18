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
                        className: "text-green-900",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3J5cHRvQ2FyZC9DcnlwdG9DYXJkLmpzIl0sIm5hbWVzIjpbIkNyeXB0b0NhcmQiLCJyb3dzIiwiaXNMb2FkaW5nIiwibWFwIiwiaSIsImJhc2UiLCJjdXJyZW5jeSIsImFtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsc0JBQ0kscUVBQUMsMERBQUQ7QUFBQSxjQUNLLHdCQUF1QjtBQUFBLFVBQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxVQUFmQyxTQUFlLFFBQWZBLFNBQWU7QUFDcEIsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLHVDQUFmO0FBQUEsb0JBQ0tELElBQUksQ0FBQ0UsR0FBTCxDQUFTLGlCQUEyQkMsQ0FBM0IsRUFBaUM7QUFBQSxnQkFBL0JDLElBQStCLFNBQS9CQSxJQUErQjtBQUFBLGdCQUF6QkMsUUFBeUIsU0FBekJBLFFBQXlCO0FBQUEsZ0JBQWZDLE1BQWUsU0FBZkEsTUFBZTtBQUN2QyxnQ0FDSTtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQywrQ0FBZjtBQUFBLHVDQUNJO0FBQUssMkJBQVMsRUFBQyxtQ0FBZjtBQUFBLHlDQUNJO0FBQUEsNENBQ0k7QUFBSyx5QkFBRyxFQUFDLEVBQVQ7QUFBWSwrQkFBUyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosZUFFSTtBQUFLLCtCQUFTLEVBQUMsY0FBZjtBQUFBLGdDQUNLTCxTQUFTLEtBQUssSUFBZCxnQkFDTyxxRUFBQywyREFBRDtBQUFRLDRCQUFJLEVBQUMsV0FBYjtBQUF5QixpQ0FBUyxFQUFDLGdCQUFuQztBQUFvRCw4QkFBTSxFQUFFLEVBQTVEO0FBQWdFLDZCQUFLLEVBQUU7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFEUCxnQkFHRztBQUFBLGdEQUNJO0FBQU0sbUNBQVMsRUFBQywwQkFBaEI7QUFBQSxvQ0FBNENHO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREosZUFFSTtBQUFNLG1DQUFTLEVBQUMsa0NBQWhCO0FBQUEsb0NBQW9ERTtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUZKLGVBRXNFO0FBQU0sbUNBQVMsRUFBQyxvQkFBaEI7QUFBQSxvQ0FBc0NEO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRnRFO0FBQUE7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosZUFBVUYsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBcUJILFdBdEJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTZCSDtBQS9CTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtQ0gsQ0FwQ0Q7O0tBQU1KLFU7QUFzQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NyeXB0by42NzVmNTQwNGQxODJmYzAzOGViNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDcnlwdG9SZW5kZXJQcm9wcyBmcm9tICcuL0NyeXB0b1JlbmRlclByb3BzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcic7XHJcblxyXG5jb25zdCBDcnlwdG9DYXJkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q3J5cHRvUmVuZGVyUHJvcHM+XHJcbiAgICAgICAgICAgIHsoe3Jvd3MsIGlzTG9hZGluZ30pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgb3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgc206ZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvd3MubWFwKCh7YmFzZSwgY3VycmVuY3ksIGFtb3VudH0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNCB3LTQwIHNtOnctNDQgbWQ6dy00OCBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBzaGFkb3ctbWQgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGFsdD1cIlwiIGNsYXNzTmFtZT1cImJnLWdyZWVuLTkwMCBoLTQwIG9iamVjdC1jb3ZlclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgdHlwZT1cIlRocmVlRG90c1wiIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tOTAwXCIgaGVpZ2h0PXs0MH0gd2lkdGg9ezQwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBibG9jayBmb250LWxpZ2h0XCI+e2Jhc2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ncmVlbi05MDBcIj57YW1vdW50fTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJtbC0xIHRleHQtZ3JheS03MDBcIj57Y3VycmVuY3l9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA8L0NyeXB0b1JlbmRlclByb3BzPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcnlwdG9DYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=