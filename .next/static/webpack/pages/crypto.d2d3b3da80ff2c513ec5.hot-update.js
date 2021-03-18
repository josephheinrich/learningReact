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
      });
      setIsLoading(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3J5cHRvQ2FyZC9DcnlwdG9SZW5kZXJQcm9wcy5qcyJdLCJuYW1lcyI6WyJDcnlwdG9SZW5kZXJQcm9wcyIsInByb3BzIiwidXNlU3RhdGUiLCJidGNEYXRhIiwiZXRoRGF0YSIsImJjaERhdGEiLCJjcnlwdG9EYXRhIiwic2V0Q3J5cHRvRGF0YSIsImNyeXB0b0luZm8iLCJzZXRDcnlwdG9JbmZvIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hEYXRhIiwiYnRjVVJMIiwiZXRoVVJMIiwiYmNoVVJMIiwiUHJvbWlzZSIsImFsbCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3VsdHMiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImtleXMiLCJPYmplY3QiLCJyb3dzIiwiaSIsImxlbmd0aCIsImtleSIsInB1c2giLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDO0FBQ3pDQyxXQUFPLEVBQUUsRUFEZ0M7QUFFekNDLFdBQU8sRUFBRSxFQUZnQztBQUd6Q0MsV0FBTyxFQUFFO0FBSGdDLEdBQUQsQ0FEZDtBQUFBLE1BQ3ZCQyxVQUR1QjtBQUFBLE1BQ1hDLGFBRFc7O0FBQUEsbUJBTU1MLHNEQUFRLENBQUMsRUFBRCxDQU5kO0FBQUEsTUFNdkJNLFVBTnVCO0FBQUEsTUFNWEMsYUFOVzs7QUFBQSxtQkFPSVAsc0RBQVEsQ0FBQyxJQUFELENBUFo7QUFBQSxNQU92QlEsU0FQdUI7QUFBQSxNQU9aQyxZQVBZOztBQVM5QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCRCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBLFFBQU1FLE1BQU0sR0FBRyxnREFBZjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxnREFBZjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxnREFBZjtBQUVBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNSQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVOLE1BQVYsQ0FEUSxFQUVSSyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVMLE1BQVYsQ0FGUSxFQUdSSSw0Q0FBSyxDQUFDQyxHQUFOLENBQVVKLE1BQVYsQ0FIUSxDQUFaLEVBSUdLLElBSkgsQ0FJUSxVQUFDQyxPQUFELEVBQWE7QUFDakJkLG1CQUFhLENBQUM7QUFDVkosZUFBTyxFQUFFa0IsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxJQUFYLENBQWdCQSxJQURmO0FBRVZsQixlQUFPLEVBQUVpQixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsQ0FBZ0JBLElBRmY7QUFHVmpCLGVBQU8sRUFBRWdCLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsSUFBWCxDQUFnQkE7QUFIZixPQUFELENBQWI7QUFLQVgsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQUYsbUJBQWEsQ0FBQyxDQUFDWSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsQ0FBZ0JBLElBQWpCLEVBQXVCRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsQ0FBZ0JBLElBQXZDLEVBQTZDRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsQ0FBZ0JBLElBQTdELENBQUQsQ0FBYjtBQUNILEtBWkQsV0FhTyxVQUFDQyxHQUFELEVBQVM7QUFDWkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQVosa0JBQVksQ0FBQyxJQUFELENBQVo7QUFDSCxLQWhCRDtBQWlCSCxHQXZCRDs7QUF5QkFlLHlEQUFTLENBQUMsWUFBTTtBQUNabkIsaUJBQWEsQ0FBQztBQUNWRyxlQUFTLEVBQUU7QUFERCxLQUFELENBQWI7QUFHQUUsYUFBUztBQUVaLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxNQUFJZSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZckIsVUFBWixDQUFYO0FBQ0EsTUFBSXVCLElBQUksR0FBRyxFQUFYOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsSUFBSSxDQUFDSSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxRQUFJRSxHQUFHLEdBQUlMLElBQUksQ0FBQ0csQ0FBRCxDQUFmO0FBQ0FELFFBQUksQ0FBQ0ksSUFBTCxDQUFVM0IsVUFBVSxDQUFDMEIsR0FBRCxDQUFwQjtBQUNIOztBQUVELFNBQU8vQixLQUFLLENBQUNpQyxRQUFOLENBQWU7QUFDbEJMLFFBQUksRUFBRUEsSUFEWTtBQUVsQm5CLGFBQVMsRUFBRUE7QUFGTyxHQUFmLENBQVA7QUFJSDs7R0F0RFFWLGlCOztLQUFBQSxpQjtBQXdETUEsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3J5cHRvLmQyZDNiM2RhODBmZjJjNTEzZWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIENyeXB0b1JlbmRlclByb3BzKHByb3BzKSB7XHJcbiAgICBjb25zdCBbY3J5cHRvRGF0YSwgc2V0Q3J5cHRvRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgYnRjRGF0YTogW10sXHJcbiAgICAgICAgZXRoRGF0YTogW10sXHJcbiAgICAgICAgYmNoRGF0YTogW10sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtjcnlwdG9JbmZvLCBzZXRDcnlwdG9JbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGJ0Y1VSTCA9IFwiaHR0cHM6Ly9hcGkuY29pbmJhc2UuY29tL3YyL3ByaWNlcy9CVEMtVVNEL2J1eVwiO1xyXG4gICAgICAgIGNvbnN0IGV0aFVSTCA9IFwiaHR0cHM6Ly9hcGkuY29pbmJhc2UuY29tL3YyL3ByaWNlcy9FVEgtVVNEL2J1eVwiO1xyXG4gICAgICAgIGNvbnN0IGJjaFVSTCA9IFwiaHR0cHM6Ly9hcGkuY29pbmJhc2UuY29tL3YyL3ByaWNlcy9CQ0gtVVNEL2J1eVwiO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChidGNVUkwpLFxyXG4gICAgICAgICAgICBheGlvcy5nZXQoZXRoVVJMKSxcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGJjaFVSTClcclxuICAgICAgICBdKS50aGVuKChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENyeXB0b0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgYnRjRGF0YTogcmVzdWx0c1swXS5kYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBldGhEYXRhOiByZXN1bHRzWzFdLmRhdGEuZGF0YSxcclxuICAgICAgICAgICAgICAgIGJjaERhdGE6IHJlc3VsdHNbMl0uZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0Q3J5cHRvSW5mbyhbcmVzdWx0c1swXS5kYXRhLmRhdGEsIHJlc3VsdHNbMV0uZGF0YS5kYXRhLCByZXN1bHRzWzJdLmRhdGEuZGF0YV0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3J5cHRvRGF0YSh7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjcnlwdG9EYXRhKTtcclxuICAgIHZhciByb3dzID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IFxyXG4gICAgICAgIHZhciBrZXkgPSAoa2V5c1tpXSk7XHJcbiAgICAgICAgcm93cy5wdXNoKGNyeXB0b0RhdGFba2V5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb3BzLmNoaWxkcmVuKHtcclxuICAgICAgICByb3dzOiByb3dzLFxyXG4gICAgICAgIGlzTG9hZGluZzogaXNMb2FkaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3J5cHRvUmVuZGVyUHJvcHM7Il0sInNvdXJjZVJvb3QiOiIifQ==