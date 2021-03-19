webpackHotUpdate_N_E("pages/star-match",{

/***/ "./pages/star-match.js":
/*!*****************************!*\
  !*** ./pages/star-match.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Navbar/Navbar */ "./src/components/Navbar/Navbar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/utils */ "./utilities/utils.js");



var _jsxFileName = "C:\\Users\\jheinrich\\Desktop\\learningReact\\pages\\star-match.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();





var StarsDisplay = function StarsDisplay(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: _utilities_utils__WEBPACK_IMPORTED_MODULE_3__["default"].range(1, props.count).map(function (starId) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "star"
      }, starId, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false);
};

_c = StarsDisplay;

var ButtonDisplay = function ButtonDisplay(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    style: {
      backgroundColor: colors[props.status]
    },
    className: "bg-gray-200 border border-solid border-gray-500 w-12 h-12 text-lg m-2 rounded",
    onClick: function onClick() {
      return props.onClick(props.number, props.status);
    },
    children: props.number
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, _this);
};

_c2 = ButtonDisplay;

var PlayAgain = function PlayAgain(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-wrap col-start-2 justify-items-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-2xl",
      style: {
        color: props.gameStatus === 'lost' ? 'red' : 'green'
      },
      children: props.gameStatus === 'lost' ? 'Game Over' : 'Nice'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "bg-gray-700 p-2 text-white rounded",
      onClick: props.onClick,
      children: "Play Again"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, _this);
}; //Custom Hook


_c3 = PlayAgain;

var useGameState = function useGameState() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_utilities_utils__WEBPACK_IMPORTED_MODULE_3__["default"].random(1, 9)),
      stars = _useState[0],
      setStars = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_utilities_utils__WEBPACK_IMPORTED_MODULE_3__["default"].range(1, 9)),
      availableNums = _useState2[0],
      setAvailableNums = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      candidateNums = _useState3[0],
      setCandidateNums = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(10),
      secondsLeft = _useState4[0],
      setSecondsLeft = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (secondsLeft > 0 && availableNums.length > 0) {
      var timerID = setTimeout(function () {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return function () {
        return clearTimeout(timerID);
      };
    }
  });

  var setGameState = function setGameState(newCandidateNums) {
    if (_utilities_utils__WEBPACK_IMPORTED_MODULE_3__["default"].sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      var newAvailableNums = availableNums.filter(function (n) {
        return !newCandidateNums.includes(n);
      });
      setStars(_utilities_utils__WEBPACK_IMPORTED_MODULE_3__["default"].randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return {
    stars: stars,
    availableNums: availableNums,
    candidateNums: candidateNums,
    secondsLeft: secondsLeft,
    setGameState: setGameState
  };
};

_s(useGameState, "+C/LvG7qkPd5YTZ59/XKdcLBwGo=");

var Game = function Game(props) {
  _s2();

  var _useGameState = useGameState(),
      stars = _useGameState.stars,
      availableNums = _useGameState.availableNums,
      candidateNums = _useGameState.candidateNums,
      secondsLeft = _useGameState.secondsLeft,
      setGameState = _useGameState.setGameState;

  var candidatesAreWrong = _utilities_utils__WEBPACK_IMPORTED_MODULE_3__["default"].sum(candidateNums) > stars;
  var gameStatus = availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';

  var numberStatus = function numberStatus(number) {
    if (!availableNums.includes(number)) {
      return 'used';
    }

    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }

    return 'available';
  };

  var onNumberClick = function onNumberClick(number, currentStatus) {
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }

    var newCandidateNums = currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter(function (cn) {
      return cn !== number;
    });
    setGameState(newCandidateNums);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col min-h-screen",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "game",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "help",
        children: "Pick 1 or more numbers that sum to the number of stars"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "body",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-wrap justify-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-2 pb-2 px-4 justify-items-center content-center h-60 w-60 border-solid border-gray-300 border-2",
            children: gameStatus !== 'active' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlayAgain, {
              onClick: props.startNewGame,
              gameStatus: gameStatus
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 33
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StarsDisplay, {
              count: stars
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-2 px-4 justify-items-center content-center h-60 w-60 border-solid border-gray-300 border-2",
            children: _utilities_utils__WEBPACK_IMPORTED_MODULE_3__["default"].range(1, 9).map(function (number) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonDisplay, {
                number: number,
                status: numberStatus(number),
                onClick: onNumberClick
              }, number, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 33
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mt-2 text-gray-600 inline-block",
        children: ["Time Left: ", secondsLeft]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-blue-800 mt-2 text-center w-40 h-6 rounded",
        style: {
          width: secondsLeft / 10 * 100
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 9
  }, _this);
};

_s2(Game, "X/79RH8GXI2p2+WuvzrkbjDoKGM=", false, function () {
  return [useGameState];
});

_c4 = Game;

var StarMatch = function StarMatch() {
  _s3();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      gameID = _useState5[0],
      setGameID = _useState5[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Game, {
    startNewGame: function startNewGame() {
      setGameID(gameID + 1);
    }
  }, gameID, false, {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 12
  }, _this);
}; // Color Theme


_s3(StarMatch, "OoW9bxbBoICJNQeN4SFuHo9pekc=");

_c5 = StarMatch;
var colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue'
};
/* harmony default export */ __webpack_exports__["default"] = (StarMatch);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "StarsDisplay");
$RefreshReg$(_c2, "ButtonDisplay");
$RefreshReg$(_c3, "PlayAgain");
$RefreshReg$(_c4, "Game");
$RefreshReg$(_c5, "StarMatch");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3Rhci1tYXRjaC5qcyJdLCJuYW1lcyI6WyJTdGFyc0Rpc3BsYXkiLCJwcm9wcyIsInV0aWxzIiwicmFuZ2UiLCJjb3VudCIsIm1hcCIsInN0YXJJZCIsIkJ1dHRvbkRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJzdGF0dXMiLCJvbkNsaWNrIiwibnVtYmVyIiwiUGxheUFnYWluIiwiY29sb3IiLCJnYW1lU3RhdHVzIiwidXNlR2FtZVN0YXRlIiwidXNlU3RhdGUiLCJyYW5kb20iLCJzdGFycyIsInNldFN0YXJzIiwiYXZhaWxhYmxlTnVtcyIsInNldEF2YWlsYWJsZU51bXMiLCJjYW5kaWRhdGVOdW1zIiwic2V0Q2FuZGlkYXRlTnVtcyIsInNlY29uZHNMZWZ0Iiwic2V0U2Vjb25kc0xlZnQiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJ0aW1lcklEIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInNldEdhbWVTdGF0ZSIsIm5ld0NhbmRpZGF0ZU51bXMiLCJzdW0iLCJuZXdBdmFpbGFibGVOdW1zIiwiZmlsdGVyIiwibiIsImluY2x1ZGVzIiwicmFuZG9tU3VtSW4iLCJHYW1lIiwiY2FuZGlkYXRlc0FyZVdyb25nIiwibnVtYmVyU3RhdHVzIiwib25OdW1iZXJDbGljayIsImN1cnJlbnRTdGF0dXMiLCJjb25jYXQiLCJjbiIsInN0YXJ0TmV3R2FtZSIsIndpZHRoIiwiU3Rhck1hdGNoIiwiZ2FtZUlEIiwic2V0R2FtZUlEIiwiYXZhaWxhYmxlIiwidXNlZCIsIndyb25nIiwiY2FuZGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLO0FBQUEsc0JBQ3RCO0FBQUEsY0FDS0Msd0RBQUssQ0FBQ0MsS0FBTixDQUFZLENBQVosRUFBZUYsS0FBSyxDQUFDRyxL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d0JBQU07QUFBQ0EsZUFBUyxDQUFDRCxNQUFNLEdBQUcsQ0FBVixDQUFUO0FBQXNCO0FBQTlELEtBQVdBLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0gsQ0FIRCxDLENBTUE7OztJQU5NRCxTOztNQUFBQSxTO0FBT04sSUFBTXhDLE1BQU0sR0FBRztBQUNYMkMsV0FBUyxFQUFFLFdBREE7QUFFWEMsTUFBSSxFQUFFLFlBRks7QUFHWEMsT0FBSyxFQUFFLFlBSEk7QUFJWEMsV0FBUyxFQUFFO0FBSkEsQ0FBZjtBQVFlTix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGFyLW1hdGNoLjE4NTkzOTQzMWVkZDAzNjFmMzk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXInO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbGl0aWVzL3V0aWxzJztcclxuXHJcbmNvbnN0IFN0YXJzRGlzcGxheSA9IHByb3BzID0+IChcclxuICAgIDw+XHJcbiAgICAgICAge3V0aWxzLnJhbmdlKDEsIHByb3BzLmNvdW50KS5tYXAoc3RhcklkID0+IFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17c3RhcklkfSBjbGFzc05hbWU9XCJzdGFyXCI+PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgIDwvPlxyXG4pO1xyXG5cclxuY29uc3QgQnV0dG9uRGlzcGxheSA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3JzW3Byb3BzLnN0YXR1c119fSBcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTUwMCB3LTEyIGgtMTIgdGV4dC1sZyBtLTIgcm91bmRlZFwiIFxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2socHJvcHMubnVtYmVyLCBwcm9wcy5zdGF0dXMpfSBcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5udW1iZXJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn07XHJcblxyXG5jb25zdCBQbGF5QWdhaW4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBjb2wtc3RhcnQtMiBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6IHByb3BzLmdhbWVTdGF0dXMgPT09ICdsb3N0JyA/ICdyZWQnIDogJ2dyZWVuJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5nYW1lU3RhdHVzID09PSAnbG9zdCcgPyAnR2FtZSBPdmVyJyA6ICdOaWNlJ31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS03MDAgcC0yIHRleHQtd2hpdGUgcm91bmRlZFwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlBsYXkgQWdhaW48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy9DdXN0b20gSG9va1xyXG4gXHJcbmNvbnN0IHVzZUdhbWVTdGF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzdGFycywgc2V0U3RhcnNdID0gdXNlU3RhdGUodXRpbHMucmFuZG9tKDEsIDkpKTtcclxuICAgIGNvbnN0IFthdmFpbGFibGVOdW1zLCBzZXRBdmFpbGFibGVOdW1zXSA9IHVzZVN0YXRlKHV0aWxzLnJhbmdlKDEsIDkpKTtcclxuICAgIGNvbnN0IFtjYW5kaWRhdGVOdW1zLCBzZXRDYW5kaWRhdGVOdW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWNvbmRzTGVmdCwgc2V0U2Vjb25kc0xlZnRdID0gdXNlU3RhdGUoMTApO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWNvbmRzTGVmdCA+IDAgJiYgYXZhaWxhYmxlTnVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVySUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlY29uZHNMZWZ0KHNlY29uZHNMZWZ0IC0gMSk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVySUQpOyBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHNldEdhbWVTdGF0ZSA9IChuZXdDYW5kaWRhdGVOdW1zKSA9PiB7XHJcbiAgICAgICAgaWYgKHV0aWxzLnN1bShuZXdDYW5kaWRhdGVOdW1zKSAhPT0gc3RhcnMpIHtcclxuICAgICAgICAgICAgc2V0Q2FuZGlkYXRlTnVtcyhuZXdDYW5kaWRhdGVOdW1zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdBdmFpbGFibGVOdW1zID0gYXZhaWxhYmxlTnVtcy5maWx0ZXIoXHJcbiAgICAgICAgICAgIG4gPT4gIW5ld0NhbmRpZGF0ZU51bXMuaW5jbHVkZXMobilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2V0U3RhcnModXRpbHMucmFuZG9tU3VtSW4obmV3QXZhaWxhYmxlTnVtcywgOSkpO1xyXG4gICAgICAgICAgICBzZXRBdmFpbGFibGVOdW1zKG5ld0F2YWlsYWJsZU51bXMpO1xyXG4gICAgICAgICAgICBzZXRDYW5kaWRhdGVOdW1zKFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtzdGFycywgYXZhaWxhYmxlTnVtcywgY2FuZGlkYXRlTnVtcywgc2Vjb25kc0xlZnQsIHNldEdhbWVTdGF0ZX1cclxufVxyXG5cclxuXHJcbmNvbnN0IEdhbWUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBzdGFycyxcclxuICAgICAgICBhdmFpbGFibGVOdW1zLFxyXG4gICAgICAgIGNhbmRpZGF0ZU51bXMsXHJcbiAgICAgICAgc2Vjb25kc0xlZnQsXHJcbiAgICAgICAgc2V0R2FtZVN0YXRlXHJcbiAgICB9ID0gdXNlR2FtZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgY2FuZGlkYXRlc0FyZVdyb25nID0gdXRpbHMuc3VtKGNhbmRpZGF0ZU51bXMpID4gc3RhcnM7XHJcblxyXG4gICAgY29uc3QgZ2FtZVN0YXR1cyA9IGF2YWlsYWJsZU51bXMubGVuZ3RoID09PSAwXHJcbiAgICA/ICd3b24nXHJcbiAgICA6IHNlY29uZHNMZWZ0ID09PSAwID8gJ2xvc3QnIDogJ2FjdGl2ZSc7XHJcblxyXG4gICAgY29uc3QgbnVtYmVyU3RhdHVzID0gKG51bWJlcikgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIWF2YWlsYWJsZU51bXMuaW5jbHVkZXMobnVtYmVyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3VzZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FuZGlkYXRlTnVtcy5pbmNsdWRlcyhudW1iZXIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGVzQXJlV3JvbmcgPyAnd3JvbmcnIDogJ2NhbmRpZGF0ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnYXZhaWxhYmxlJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgb25OdW1iZXJDbGljayA9IChudW1iZXIsIGN1cnJlbnRTdGF0dXMpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGdhbWVTdGF0dXMgIT09ICdhY3RpdmUnIHx8IGN1cnJlbnRTdGF0dXMgPT09ICd1c2VkJykge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld0NhbmRpZGF0ZU51bXMgPVxyXG4gICAgICAgICAgY3VycmVudFN0YXR1cyA9PT0gJ2F2YWlsYWJsZSdcclxuICAgICAgICAgICAgPyBjYW5kaWRhdGVOdW1zLmNvbmNhdChudW1iZXIpXHJcbiAgICAgICAgICAgIDogY2FuZGlkYXRlTnVtcy5maWx0ZXIoY24gPT4gY24gIT09IG51bWJlcik7XHJcblxyXG4gICAgICAgIHNldEdhbWVTdGF0ZShuZXdDYW5kaWRhdGVOdW1zKTtcclxuICAgICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgIDxOYXZCYXI+PC9OYXZCYXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwXCI+XHJcbiAgICAgICAgICAgICAgICBQaWNrIDEgb3IgbW9yZSBudW1iZXJzIHRoYXQgc3VtIHRvIHRoZSBudW1iZXIgb2Ygc3RhcnNcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgcGItMiBweC00IGp1c3RpZnktaXRlbXMtY2VudGVyIGNvbnRlbnQtY2VudGVyIGgtNjAgdy02MCBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMzAwIGJvcmRlci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZVN0YXR1cyAhPT0gJ2FjdGl2ZScgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlBZ2FpbiBvbkNsaWNrPXtwcm9wcy5zdGFydE5ld0dhbWV9IGdhbWVTdGF0dXM9e2dhbWVTdGF0dXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFyc0Rpc3BsYXkgY291bnQ9e3N0YXJzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBweC00IGp1c3RpZnktaXRlbXMtY2VudGVyIGNvbnRlbnQtY2VudGVyIGgtNjAgdy02MCBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMzAwIGJvcmRlci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMucmFuZ2UoMSwgOSkubWFwKG51bWJlciA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uRGlzcGxheSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtudW1iZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9e251bWJlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz17bnVtYmVyU3RhdHVzKG51bWJlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTnVtYmVyQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC1ncmF5LTYwMCBpbmxpbmUtYmxvY2tcIj5UaW1lIExlZnQ6IHtzZWNvbmRzTGVmdH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS04MDAgbXQtMiB0ZXh0LWNlbnRlciB3LTQwIGgtNiByb3VuZGVkXCIgc3R5bGU9e3t3aWR0aDogKHNlY29uZHNMZWZ0LzEwKSoxMDB9fT48L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgU3Rhck1hdGNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2dhbWVJRCwgc2V0R2FtZUlEXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgcmV0dXJuIDxHYW1lIGtleT17Z2FtZUlEfSBzdGFydE5ld0dhbWU9eygpID0+IHtzZXRHYW1lSUQoZ2FtZUlEICsgMSl9fS8+O1xyXG59XHJcblxyXG5cclxuLy8gQ29sb3IgVGhlbWVcclxuY29uc3QgY29sb3JzID0ge1xyXG4gICAgYXZhaWxhYmxlOiAnbGlnaHRncmF5JyxcclxuICAgIHVzZWQ6ICdsaWdodGdyZWVuJyxcclxuICAgIHdyb25nOiAnbGlnaHRjb3JhbCcsXHJcbiAgICBjYW5kaWRhdGU6ICdkZWVwc2t5Ymx1ZScsXHJcbiAgfTtcclxuXHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJNYXRjaDsiXSwic291cmNlUm9vdCI6IiJ9