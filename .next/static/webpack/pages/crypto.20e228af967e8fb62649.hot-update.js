webpackHotUpdate_N_E("pages/crypto",{

/***/ "./src/components/CryptoCard/CryptoRenderProps.js":
/*!********************************************************!*\
  !*** ./src/components/CryptoCard/CryptoRenderProps.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _s = $RefreshSig$();




function CryptoRenderProps(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    btcData: [],
    ethData: [],
    bchData: []
  }),
      cryptoData = _useState[0],
      setCryptoData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      cryptoInfo = _useState2[0],
      setCryptoInfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  var fetchData = function fetchData() {
    setIsLoading(true);
    var btcURL = "https://api.coinbase.com/v2/prices/BTC-USD/buy";
    var ethURL = "https://api.coinbase.com/v2/prices/ETH-USD/buy";
    var bchURL = "https://api.coinbase.com/v2/prices/BCH-USD/buy";
    Promise.all([axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(btcURL), axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(ethURL), axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(bchURL)]).then(function (results) {
      setCryptoData({
        btcData: results[0].data.data,
        ethData: results[1].data.data,
        bchData: results[2].data.data
      }); //setIsLoading(false);

      setCryptoInfo([results[0].data.data, results[1].data.data, results[2].data.data]);
    })["catch"](function (err) {
      console.log(err);
      setIsLoading(true);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setCryptoData({
      isLoading: true
    });
    fetchData();
  }, []);
  var keys = Object.keys(cryptoData);
  var rows = [];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    rows.push(cryptoData[key]);
  }

  return props.children({
    rows: rows,
    isLoading: isLoading
  });
}

_s(CryptoRenderProps, "piW++HsJm8zvQW1a0pUHt46UgYE=");

_c = CryptoRenderProps;
/* harmony default export */ __webpack_exports__["default"] = (CryptoRenderProps);

var _c;

$RefreshReg$(_c, "CryptoRenderProps");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3J5cHRvQ2FyZC9DcnlwdG9SZW5kZXJQcm9wcy5qcyJdLCJuYW1lcyI6WyJDcnlwdG9SZW5kZXJQcm9wcyIsInByb3BzIiwidXNlU3RhdGUiLCJidGNEYXRhIiwiZXRoRGF0YSIsImJjaERhdGEiLCJjcnlwdG9EYXRhIiwic2V0Q3J5cHRvRGF0YSIsImNyeXB0b0luZm8iLCJzZXRDcnlwdG9JbmZvIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hEYXRhIiwiYnRjVVJMIiwiZXRoVVJMIiwiYmNoVVJMIiwiUHJvbWlzZSIsImFsbCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3VsdHMiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImtleXMiLCJPYmplY3QiLCJyb3dzIiwiaSIsImxlbmd0aCIsImtleSIsInB1c2giLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDO0FBQ3pDQyxXQUFPLEVBQUUsRUFEZ0M7QUFFekNDLFdBQU8sRUFBRSxFQUZnQztBQUd6Q0MsV0FBTyxFQUFFO0FBSGdDLEdBQUQsQ0FEZDtBQUFBLE1BQ3ZCQyxVQUR1QjtBQUFBLE1BQ1hDLGFBRFc7O0FBQUEsbUJBTU1MLHNEQUFRLENBQUMsRUFBRCxDQU5kO0FBQUEsTUFNdkJNLFVBTnVCO0FBQUEsTUFNWEMsYUFOVzs7QUFBQSxtQkFPSVAsc0RBQVEsQ0FBQyxJQUFELENBUFo7QUFBQSxNQU92QlEsU0FQdUI7QUFBQSxNQU9aQyxZQVBZOztBQVM5QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCRCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBLFFBQU1FLE1BQU0sR0FBRyxnREFBZjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxnREFBZjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxnREFBZjtBQUVBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNSQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVOLE1BQVYsQ0FEUSxFQUVSSyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVMLE1BQVYsQ0FGUSxFQUdSSSw0Q0FBSyxDQUFDQyxHQUFOLENBQVVKLE1BQVYsQ0FIUSxDQUFaLEVBSUdLLElBSkgsQ0FJUSxVQUFDQyxPQUFELEVBQWE7QUFDakJkLG1CQUFhLENBQUM7QUFDVkosZUFBTyxFQUFFa0IsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxJQUFYLENBQWdCQSxJQURmO0FBRVZsQixlQUFPLEVBQUVpQixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsQ0FBZ0JBLElBRmY7QUFHVmpCLGVBQU8sRUFBRWdCLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsSUFBWCxDQUFnQkE7QUFIZixPQUFELENBQWIsQ0FEaUIsQ0FNakI7O0FBQ0FiLG1CQUFhLENBQUMsQ0FBQ1ksT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxJQUFYLENBQWdCQSxJQUFqQixFQUF1QkQsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxJQUFYLENBQWdCQSxJQUF2QyxFQUE2Q0QsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxJQUFYLENBQWdCQSxJQUE3RCxDQUFELENBQWI7QUFDSCxLQVpELFdBYU8sVUFBQ0MsR0FBRCxFQUFTO0FBQ1pDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FaLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0gsS0FoQkQ7QUFpQkgsR0F2QkQ7O0FBeUJBZSx5REFBUyxDQUFDLFlBQU07QUFDWm5CLGlCQUFhLENBQUM7QUFDVkcsZUFBUyxFQUFFO0FBREQsS0FBRCxDQUFiO0FBR0FFLGFBQVM7QUFFWixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsTUFBSWUsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWXJCLFVBQVosQ0FBWDtBQUNBLE1BQUl1QixJQUFJLEdBQUcsRUFBWDs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILElBQUksQ0FBQ0ksTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsUUFBSUUsR0FBRyxHQUFJTCxJQUFJLENBQUNHLENBQUQsQ0FBZjtBQUNBRCxRQUFJLENBQUNJLElBQUwsQ0FBVTNCLFVBQVUsQ0FBQzBCLEdBQUQsQ0FBcEI7QUFDSDs7QUFFRCxTQUFPL0IsS0FBSyxDQUFDaUMsUUFBTixDQUFlO0FBQ2xCTCxRQUFJLEVBQUVBLElBRFk7QUFFbEJuQixhQUFTLEVBQUVBO0FBRk8sR0FBZixDQUFQO0FBSUg7O0dBdERRVixpQjs7S0FBQUEsaUI7QUF3RE1BLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NyeXB0by4yMGUyMjhhZjk2N2U4ZmI2MjY0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBDcnlwdG9SZW5kZXJQcm9wcyhwcm9wcykge1xyXG4gICAgY29uc3QgW2NyeXB0b0RhdGEsIHNldENyeXB0b0RhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGJ0Y0RhdGE6IFtdLFxyXG4gICAgICAgIGV0aERhdGE6IFtdLFxyXG4gICAgICAgIGJjaERhdGE6IFtdLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbY3J5cHRvSW5mbywgc2V0Q3J5cHRvSW5mb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCBidGNVUkwgPSBcImh0dHBzOi8vYXBpLmNvaW5iYXNlLmNvbS92Mi9wcmljZXMvQlRDLVVTRC9idXlcIjtcclxuICAgICAgICBjb25zdCBldGhVUkwgPSBcImh0dHBzOi8vYXBpLmNvaW5iYXNlLmNvbS92Mi9wcmljZXMvRVRILVVTRC9idXlcIjtcclxuICAgICAgICBjb25zdCBiY2hVUkwgPSBcImh0dHBzOi8vYXBpLmNvaW5iYXNlLmNvbS92Mi9wcmljZXMvQkNILVVTRC9idXlcIjtcclxuXHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYnRjVVJMKSxcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGV0aFVSTCksXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChiY2hVUkwpXHJcbiAgICAgICAgXSkudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICBzZXRDcnlwdG9EYXRhKHtcclxuICAgICAgICAgICAgICAgIGJ0Y0RhdGE6IHJlc3VsdHNbMF0uZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgZXRoRGF0YTogcmVzdWx0c1sxXS5kYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBiY2hEYXRhOiByZXN1bHRzWzJdLmRhdGEuZGF0YSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0Q3J5cHRvSW5mbyhbcmVzdWx0c1swXS5kYXRhLmRhdGEsIHJlc3VsdHNbMV0uZGF0YS5kYXRhLCByZXN1bHRzWzJdLmRhdGEuZGF0YV0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3J5cHRvRGF0YSh7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjcnlwdG9EYXRhKTtcclxuICAgIHZhciByb3dzID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IFxyXG4gICAgICAgIHZhciBrZXkgPSAoa2V5c1tpXSk7XHJcbiAgICAgICAgcm93cy5wdXNoKGNyeXB0b0RhdGFba2V5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuKHtcclxuICAgICAgICByb3dzOiByb3dzLFxyXG4gICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3J5cHRvUmVuZGVyUHJvcHM7Il0sInNvdXJjZVJvb3QiOiIifQ==