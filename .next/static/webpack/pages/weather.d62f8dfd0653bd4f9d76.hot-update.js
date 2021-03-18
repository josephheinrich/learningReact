webpackHotUpdate_N_E("pages/weather",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3J5cHRvQ2FyZC9DcnlwdG9SZW5kZXJQcm9wcy5qcyJdLCJuYW1lcyI6WyJDcnlwdG9SZW5kZXJQcm9wcyIsInByb3BzIiwidXNlU3RhdGUiLCJidGNEYXRhIiwiZXRoRGF0YSIsImJjaERhdGEiLCJjcnlwdG9EYXRhIiwic2V0Q3J5cHRvRGF0YSIsImNyeXB0b0luZm8iLCJzZXRDcnlwdG9JbmZvIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hEYXRhIiwiYnRjVVJMIiwiZXRoVVJMIiwiYmNoVVJMIiwiUHJvbWlzZSIsImFsbCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3VsdHMiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImtleXMiLCJPYmplY3QiLCJyb3dzIiwiaSIsImxlbmd0aCIsImtleSIsInB1c2giLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDO0FBQ3pDQyxXQUFPLEVBQUUsRUFEZ0M7QUFFekNDLFdBQU8sRUFBRSxFQUZnQztBQUd6Q0MsV0FBTyxFQUFFO0FBSGdDLEdBQUQsQ0FEZDtBQUFBLE1BQ3ZCQyxVQUR1QjtBQUFBLE1BQ1hDLGFBRFc7O0FBQUEsbUJBTU1MLHNEQUFRLENBQUMsRUFBRCxDQU5kO0FBQUEsTUFNdkJNLFVBTnVCO0FBQUEsTUFNWEMsYUFOVzs7QUFBQSxtQkFPSVAsc0RBQVEsQ0FBQyxLQUFELENBUFo7QUFBQSxNQU92QlEsU0FQdUI7QUFBQSxNQU9aQyxZQVBZOztBQVM5QixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCRCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBLFFBQU1FLE1BQU0sR0FBRyxnREFBZjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxnREFBZjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxnREFBZjtBQUVBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNSQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVOLE1BQVYsQ0FEUSxFQUVSSyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVMLE1BQVYsQ0FGUSxFQUdSSSw0Q0FBSyxDQUFDQyxHQUFOLENBQVVKLE1BQVYsQ0FIUSxDQUFaLEVBSUdLLElBSkgsQ0FJUSxVQUFDQyxPQUFELEVBQWE7QUFDakJkLG1CQUFhLENBQUM7QUFDVkosZUFBTyxFQUFFa0IsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxJQUFYLENBQWdCQSxJQURmO0FBRVZsQixlQUFPLEVBQUVpQixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsQ0FBZ0JBLElBRmY7QUFHVmpCLGVBQU8sRUFBRWdCLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsSUFBWCxDQUFnQkE7QUFIZixPQUFELENBQWI7QUFLQVgsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQUYsbUJBQWEsQ0FBQyxDQUFDWSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsQ0FBZ0JBLElBQWpCLEVBQXVCRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsQ0FBZ0JBLElBQXZDLEVBQTZDRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsQ0FBZ0JBLElBQTdELENBQUQsQ0FBYjtBQUNILEtBWkQsV0FhTyxVQUFDQyxHQUFELEVBQVM7QUFDWkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQVosa0JBQVksQ0FBQyxJQUFELENBQVo7QUFDSCxLQWhCRDtBQWlCSCxHQXZCRDs7QUF5QkFlLHlEQUFTLENBQUMsWUFBTTtBQUNabkIsaUJBQWEsQ0FBQztBQUNWRyxlQUFTLEVBQUU7QUFERCxLQUFELENBQWI7QUFHQUUsYUFBUztBQUVaLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxNQUFJZSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZckIsVUFBWixDQUFYO0FBQ0EsTUFBSXVCLElBQUksR0FBRyxFQUFYOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsSUFBSSxDQUFDSSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxRQUFJRSxHQUFHLEdBQUlMLElBQUksQ0FBQ0csQ0FBRCxDQUFmO0FBQ0FELFFBQUksQ0FBQ0ksSUFBTCxDQUFVM0IsVUFBVSxDQUFDMEIsR0FBRCxDQUFwQjtBQUNIOztBQUVELFNBQU8vQixLQUFLLENBQUNpQyxRQUFOLENBQWU7QUFDbEJMLFFBQUksRUFBRUEsSUFEWTtBQUVsQm5CLGFBQVMsRUFBRUE7QUFGTyxHQUFmLENBQVA7QUFJSDs7R0F0RFFWLGlCOztLQUFBQSxpQjtBQXdETUEsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd2VhdGhlci5kNjJmOGRmZDA2NTNiZDRmOWQ3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBDcnlwdG9SZW5kZXJQcm9wcyhwcm9wcykge1xyXG4gICAgY29uc3QgW2NyeXB0b0RhdGEsIHNldENyeXB0b0RhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGJ0Y0RhdGE6IFtdLFxyXG4gICAgICAgIGV0aERhdGE6IFtdLFxyXG4gICAgICAgIGJjaERhdGE6IFtdLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbY3J5cHRvSW5mbywgc2V0Q3J5cHRvSW5mb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgYnRjVVJMID0gXCJodHRwczovL2FwaS5jb2luYmFzZS5jb20vdjIvcHJpY2VzL0JUQy1VU0QvYnV5XCI7XHJcbiAgICAgICAgY29uc3QgZXRoVVJMID0gXCJodHRwczovL2FwaS5jb2luYmFzZS5jb20vdjIvcHJpY2VzL0VUSC1VU0QvYnV5XCI7XHJcbiAgICAgICAgY29uc3QgYmNoVVJMID0gXCJodHRwczovL2FwaS5jb2luYmFzZS5jb20vdjIvcHJpY2VzL0JDSC1VU0QvYnV5XCI7XHJcblxyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGJ0Y1VSTCksXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChldGhVUkwpLFxyXG4gICAgICAgICAgICBheGlvcy5nZXQoYmNoVVJMKVxyXG4gICAgICAgIF0pLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgc2V0Q3J5cHRvRGF0YSh7XHJcbiAgICAgICAgICAgICAgICBidGNEYXRhOiByZXN1bHRzWzBdLmRhdGEuZGF0YSxcclxuICAgICAgICAgICAgICAgIGV0aERhdGE6IHJlc3VsdHNbMV0uZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgYmNoRGF0YTogcmVzdWx0c1syXS5kYXRhLmRhdGEsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRDcnlwdG9JbmZvKFtyZXN1bHRzWzBdLmRhdGEuZGF0YSwgcmVzdWx0c1sxXS5kYXRhLmRhdGEsIHJlc3VsdHNbMl0uZGF0YS5kYXRhXSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRDcnlwdG9EYXRhKHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNyeXB0b0RhdGEpO1xyXG4gICAgdmFyIHJvd3MgPSBbXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgXHJcbiAgICAgICAgdmFyIGtleSA9IChrZXlzW2ldKTtcclxuICAgICAgICByb3dzLnB1c2goY3J5cHRvRGF0YVtrZXldKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJvcHMuY2hpbGRyZW4oe1xyXG4gICAgICAgIHJvd3M6IHJvd3MsXHJcbiAgICAgICAgaXNMb2FkaW5nOiBpc0xvYWRpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcnlwdG9SZW5kZXJQcm9wczsiXSwic291cmNlUm9vdCI6IiJ9