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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
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

_s(CryptoRenderProps, "pXCGgFN7JgxySpOtCght2fyOzhc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3J5cHRvQ2FyZC9DcnlwdG9SZW5kZXJQcm9wcy5qcyJdLCJuYW1lcyI6WyJDcnlwdG9SZW5kZXJQcm9wcyIsInByb3BzIiwidXNlU3RhdGUiLCJidGNEYXRhIiwiZXRoRGF0YSIsImJjaERhdGEiLCJjcnlwdG9EYXRhIiwic2V0Q3J5cHRvRGF0YSIsImNyeXB0b0luZm8iLCJzZXRDcnlwdG9JbmZvIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hEYXRhIiwiYnRjVVJMIiwiZXRoVVJMIiwiYmNoVVJMIiwiUHJvbWlzZSIsImFsbCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3VsdHMiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImtleXMiLCJPYmplY3QiLCJyb3dzIiwiaSIsImxlbmd0aCIsImtleSIsInB1c2giLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDO0FBQ3pDQyxXQUFPLEVBQUUsRUFEZ0M7QUFFekNDLFdBQU8sRUFBRSxFQUZnQztBQUd6Q0MsV0FBTyxFQUFFO0FBSGdDLEdBQUQsQ0FEZDtBQUFBLE1BQ3ZCQyxVQUR1QjtBQUFBLE1BQ1hDLGFBRFc7O0FBQUEsbUJBTU1MLHNEQUFRLENBQUMsRUFBRCxDQU5kO0FBQUEsTUFNdkJNLFVBTnVCO0FBQUEsTUFNWEMsYUFOVzs7QUFBQSxtQkFPSVAsc0RBQVEsQ0FBQyxLQUFELENBUFo7QUFBQSxNQU92QlEsU0FQdUI7QUFBQSxNQU9aQyxZQVBZOztBQVM5QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCRCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBLFFBQU1FLE1BQU0sR0FBRyxnREFBZjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxnREFBZjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxnREFBZjtBQUVBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNSQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVOLE1BQVYsQ0FEUSxFQUVSSyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVMLE1BQVYsQ0FGUSxFQUdSSSw0Q0FBSyxDQUFDQyxHQUFOLENBQVVKLE1BQVYsQ0FIUSxDQUFaLEVBSUdLLElBSkgsQ0FJUSxVQUFDQyxPQUFELEVBQWE7QUFDakJkLG1CQUFhLENBQUM7QUFDVkosZUFBTyxFQUFFa0IsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxJQUFYLENBQWdCQSxJQURmO0FBRVZsQixlQUFPLEVBQUVpQixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsQ0FBZ0JBLElBRmY7QUFHVmpCLGVBQU8sRUFBRWdCLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsSUFBWCxDQUFnQkE7QUFIZixPQUFELENBQWI7QUFLQVgsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQUYsbUJBQWEsQ0FBQyxDQUFDWSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsQ0FBZ0JBLElBQWpCLEVBQXVCRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsQ0FBZ0JBLElBQXZDLEVBQTZDRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsQ0FBZ0JBLElBQTdELENBQUQsQ0FBYjtBQUNILEtBWkQsV0FhTyxVQUFDQyxHQUFELEVBQVM7QUFDWkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQVosa0JBQVksQ0FBQyxJQUFELENBQVo7QUFDSCxLQWhCRDtBQWlCSCxHQXZCRDs7QUF5QkFlLHlEQUFTLENBQUMsWUFBTTtBQUNabkIsaUJBQWEsQ0FBQztBQUNWRyxlQUFTLEVBQUU7QUFERCxLQUFELENBQWI7QUFHQUUsYUFBUztBQUVaLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxNQUFJZSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZckIsVUFBWixDQUFYO0FBQ0EsTUFBSXVCLElBQUksR0FBRyxFQUFYOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsSUFBSSxDQUFDSSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxRQUFJRSxHQUFHLEdBQUlMLElBQUksQ0FBQ0csQ0FBRCxDQUFmO0FBQ0FELFFBQUksQ0FBQ0ksSUFBTCxDQUFVM0IsVUFBVSxDQUFDMEIsR0FBRCxDQUFwQjtBQUNIOztBQUVELFNBQU8vQixLQUFLLENBQUNpQyxRQUFOLENBQWU7QUFDbEJMLFFBQUksRUFBRUEsSUFEWTtBQUVsQm5CLGFBQVMsRUFBRUE7QUFGTyxHQUFmLENBQVA7QUFJSDs7R0F0RFFWLGlCOztLQUFBQSxpQjtBQXdETUEsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3J5cHRvLmQ2MmY4ZGZkMDY1M2JkNGY5ZDc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIENyeXB0b1JlbmRlclByb3BzKHByb3BzKSB7XHJcbiAgICBjb25zdCBbY3J5cHRvRGF0YSwgc2V0Q3J5cHRvRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgYnRjRGF0YTogW10sXHJcbiAgICAgICAgZXRoRGF0YTogW10sXHJcbiAgICAgICAgYmNoRGF0YTogW10sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtjcnlwdG9JbmZvLCBzZXRDcnlwdG9JbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCBidGNVUkwgPSBcImh0dHBzOi8vYXBpLmNvaW5iYXNlLmNvbS92Mi9wcmljZXMvQlRDLVVTRC9idXlcIjtcclxuICAgICAgICBjb25zdCBldGhVUkwgPSBcImh0dHBzOi8vYXBpLmNvaW5iYXNlLmNvbS92Mi9wcmljZXMvRVRILVVTRC9idXlcIjtcclxuICAgICAgICBjb25zdCBiY2hVUkwgPSBcImh0dHBzOi8vYXBpLmNvaW5iYXNlLmNvbS92Mi9wcmljZXMvQkNILVVTRC9idXlcIjtcclxuXHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYnRjVVJMKSxcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGV0aFVSTCksXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChiY2hVUkwpXHJcbiAgICAgICAgXSkudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICBzZXRDcnlwdG9EYXRhKHtcclxuICAgICAgICAgICAgICAgIGJ0Y0RhdGE6IHJlc3VsdHNbMF0uZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgZXRoRGF0YTogcmVzdWx0c1sxXS5kYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBiY2hEYXRhOiByZXN1bHRzWzJdLmRhdGEuZGF0YSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldENyeXB0b0luZm8oW3Jlc3VsdHNbMF0uZGF0YS5kYXRhLCByZXN1bHRzWzFdLmRhdGEuZGF0YSwgcmVzdWx0c1syXS5kYXRhLmRhdGFdKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldENyeXB0b0RhdGEoe1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY3J5cHRvRGF0YSk7XHJcbiAgICB2YXIgcm93cyA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyBcclxuICAgICAgICB2YXIga2V5ID0gKGtleXNbaV0pO1xyXG4gICAgICAgIHJvd3MucHVzaChjcnlwdG9EYXRhW2tleV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbih7XHJcbiAgICAgICAgcm93czogcm93cyxcclxuICAgICAgICBpc0xvYWRpbmc6IGlzTG9hZGluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyeXB0b1JlbmRlclByb3BzOyJdLCJzb3VyY2VSb290IjoiIn0=