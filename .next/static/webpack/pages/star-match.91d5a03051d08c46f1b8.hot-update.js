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
    className: "game-done",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "message",
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
        className: "mt-2 text-center text-gray-600",
        children: "Time Left: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-blue-600 mt-2 text-center w-40 h-10",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3Rhci1tYXRjaC5qcyJdLCJuYW1lcyI6WyJTdGFyc0Rpc3BsYXkiLCJwcm9wcyIsInV0aWxzIiwicmFuZ2UiLCJjb3VudCIsIm1hcCIsInN0YXJJZCIsIkJ1dHRvbkRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJzdGF0dXMiLCJvbkNsaWNrIiwibnVtYmVyIiwiUGxheUFnYWluIiwiY29sb3IiLCJnYW1lU3RhdHVzIiwidXNlR2FtZVN0YXRlIiwidXNlU3RhdGUiLCJyYW5kb20iLCJzdGFycyIsInNldFN0YXJzIiwiYXZhaWxhYmxlTnVtcyIsInNldEF2YWlsYWJsZU51bXMiLCJjYW5kaWRhdGVOdW1zIiwic2V0Q2FuZGlkYXRlTnVtcyIsInNlY29uZHNMZWZ0Iiwic2V0U2Vjb25kc0xlZnQiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJ0aW1lcklEIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInNldEdhbWVTdGF0ZSIsIm5ld0NhbmRpZGF0ZU51bXMiLCJzdW0iLCJuZXdBdmFpbGFibGVOdW1zIiwiZmlsdGVyIiwibiIsImluY2x1ZGVzIiwicmFuZG9tU3VtSW4iLCJHYW1lIiwiY2FuZGlkYXRlc0FyZVdyb25nIiwibnVtYmVyU3RhdHVzIiwib25OdW1iZXJDbGljayIsImN1cnJlbnRTdGF0dXMiLCJjb25jYXQiLCJjbiIsInN0YXJ0TmV3R2FtZSIsIndpZHRoIiwiU3Rhck1hdGNoIiwiZ2FtZUlEIiwic2V0R2FtZUlEIiwiYXZhaWxhYmxlIiwidXNlZCIsIndyb25nIiwiY2FuZGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLO0FBQUEsc0JBQ3RCO0FBQUEsY0FDS0Msd0RBQUssQ0FBQ0MsS0FBTixDQUFZLENBQVosRUFBZUYsS0FBSyxDQUFDRyxL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UyxDQUFDRCxNQUFNLEdBQUcsQ0FBVixDQUFUO0FBQXNCO0FBQTlELEtBQVdBLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0gsQ0FIRCxDLENBTUE7OztJQU5NRCxTOztNQUFBQSxTO0FBT04sSUFBTXhDLE1BQU0sR0FBRztBQUNYMkMsV0FBUyxFQUFFLFdBREE7QUFFWEMsTUFBSSxFQUFFLFlBRks7QUFHWEMsT0FBSyxFQUFFLFlBSEk7QUFJWEMsV0FBUyxFQUFFO0FBSkEsQ0FBZjtBQVFlTix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGFyLW1hdGNoLjkxZDVhMDMwNTFkMDhjNDZmMWI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZiYXInO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbGl0aWVzL3V0aWxzJztcclxuXHJcbmNvbnN0IFN0YXJzRGlzcGxheSA9IHByb3BzID0+IChcclxuICAgIDw+XHJcbiAgICAgICAge3V0aWxzLnJhbmdlKDEsIHByb3BzLmNvdW50KS5tYXAoc3RhcklkID0+IFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17c3RhcklkfSBjbGFzc05hbWU9XCJzdGFyXCI+PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgIDwvPlxyXG4pO1xyXG5cclxuY29uc3QgQnV0dG9uRGlzcGxheSA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3JzW3Byb3BzLnN0YXR1c119fSBcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTUwMCB3LTEyIGgtMTIgdGV4dC1sZyBtLTIgcm91bmRlZFwiIFxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2socHJvcHMubnVtYmVyLCBwcm9wcy5zdGF0dXMpfSBcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5udW1iZXJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn07XHJcblxyXG5jb25zdCBQbGF5QWdhaW4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWRvbmVcIj5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6IHByb3BzLmdhbWVTdGF0dXMgPT09ICdsb3N0JyA/ICdyZWQnIDogJ2dyZWVuJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5nYW1lU3RhdHVzID09PSAnbG9zdCcgPyAnR2FtZSBPdmVyJyA6ICdOaWNlJ31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JheS03MDAgcC0yIHRleHQtd2hpdGUgcm91bmRlZFwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlBsYXkgQWdhaW48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy9DdXN0b20gSG9va1xyXG4gXHJcbmNvbnN0IHVzZUdhbWVTdGF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzdGFycywgc2V0U3RhcnNdID0gdXNlU3RhdGUodXRpbHMucmFuZG9tKDEsIDkpKTtcclxuICAgIGNvbnN0IFthdmFpbGFibGVOdW1zLCBzZXRBdmFpbGFibGVOdW1zXSA9IHVzZVN0YXRlKHV0aWxzLnJhbmdlKDEsIDkpKTtcclxuICAgIGNvbnN0IFtjYW5kaWRhdGVOdW1zLCBzZXRDYW5kaWRhdGVOdW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWNvbmRzTGVmdCwgc2V0U2Vjb25kc0xlZnRdID0gdXNlU3RhdGUoMTApO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWNvbmRzTGVmdCA+IDAgJiYgYXZhaWxhYmxlTnVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVySUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlY29uZHNMZWZ0KHNlY29uZHNMZWZ0IC0gMSk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVySUQpOyBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHNldEdhbWVTdGF0ZSA9IChuZXdDYW5kaWRhdGVOdW1zKSA9PiB7XHJcbiAgICAgICAgaWYgKHV0aWxzLnN1bShuZXdDYW5kaWRhdGVOdW1zKSAhPT0gc3RhcnMpIHtcclxuICAgICAgICAgICAgc2V0Q2FuZGlkYXRlTnVtcyhuZXdDYW5kaWRhdGVOdW1zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdBdmFpbGFibGVOdW1zID0gYXZhaWxhYmxlTnVtcy5maWx0ZXIoXHJcbiAgICAgICAgICAgIG4gPT4gIW5ld0NhbmRpZGF0ZU51bXMuaW5jbHVkZXMobilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2V0U3RhcnModXRpbHMucmFuZG9tU3VtSW4obmV3QXZhaWxhYmxlTnVtcywgOSkpO1xyXG4gICAgICAgICAgICBzZXRBdmFpbGFibGVOdW1zKG5ld0F2YWlsYWJsZU51bXMpO1xyXG4gICAgICAgICAgICBzZXRDYW5kaWRhdGVOdW1zKFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtzdGFycywgYXZhaWxhYmxlTnVtcywgY2FuZGlkYXRlTnVtcywgc2Vjb25kc0xlZnQsIHNldEdhbWVTdGF0ZX1cclxufVxyXG5cclxuXHJcbmNvbnN0IEdhbWUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBzdGFycyxcclxuICAgICAgICBhdmFpbGFibGVOdW1zLFxyXG4gICAgICAgIGNhbmRpZGF0ZU51bXMsXHJcbiAgICAgICAgc2Vjb25kc0xlZnQsXHJcbiAgICAgICAgc2V0R2FtZVN0YXRlXHJcbiAgICB9ID0gdXNlR2FtZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgY2FuZGlkYXRlc0FyZVdyb25nID0gdXRpbHMuc3VtKGNhbmRpZGF0ZU51bXMpID4gc3RhcnM7XHJcblxyXG4gICAgY29uc3QgZ2FtZVN0YXR1cyA9IGF2YWlsYWJsZU51bXMubGVuZ3RoID09PSAwXHJcbiAgICA/ICd3b24nXHJcbiAgICA6IHNlY29uZHNMZWZ0ID09PSAwID8gJ2xvc3QnIDogJ2FjdGl2ZSc7XHJcblxyXG4gICAgY29uc3QgbnVtYmVyU3RhdHVzID0gKG51bWJlcikgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIWF2YWlsYWJsZU51bXMuaW5jbHVkZXMobnVtYmVyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3VzZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FuZGlkYXRlTnVtcy5pbmNsdWRlcyhudW1iZXIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGVzQXJlV3JvbmcgPyAnd3JvbmcnIDogJ2NhbmRpZGF0ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnYXZhaWxhYmxlJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgb25OdW1iZXJDbGljayA9IChudW1iZXIsIGN1cnJlbnRTdGF0dXMpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGdhbWVTdGF0dXMgIT09ICdhY3RpdmUnIHx8IGN1cnJlbnRTdGF0dXMgPT09ICd1c2VkJykge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld0NhbmRpZGF0ZU51bXMgPVxyXG4gICAgICAgICAgY3VycmVudFN0YXR1cyA9PT0gJ2F2YWlsYWJsZSdcclxuICAgICAgICAgICAgPyBjYW5kaWRhdGVOdW1zLmNvbmNhdChudW1iZXIpXHJcbiAgICAgICAgICAgIDogY2FuZGlkYXRlTnVtcy5maWx0ZXIoY24gPT4gY24gIT09IG51bWJlcik7XHJcblxyXG4gICAgICAgIHNldEdhbWVTdGF0ZShuZXdDYW5kaWRhdGVOdW1zKTtcclxuICAgICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgIDxOYXZCYXI+PC9OYXZCYXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwXCI+XHJcbiAgICAgICAgICAgICAgICBQaWNrIDEgb3IgbW9yZSBudW1iZXJzIHRoYXQgc3VtIHRvIHRoZSBudW1iZXIgb2Ygc3RhcnNcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgcGItMiBweC00IGp1c3RpZnktaXRlbXMtY2VudGVyIGNvbnRlbnQtY2VudGVyIGgtNjAgdy02MCBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMzAwIGJvcmRlci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZVN0YXR1cyAhPT0gJ2FjdGl2ZScgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlBZ2FpbiBvbkNsaWNrPXtwcm9wcy5zdGFydE5ld0dhbWV9IGdhbWVTdGF0dXM9e2dhbWVTdGF0dXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFyc0Rpc3BsYXkgY291bnQ9e3N0YXJzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBweC00IGp1c3RpZnktaXRlbXMtY2VudGVyIGNvbnRlbnQtY2VudGVyIGgtNjAgdy02MCBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMzAwIGJvcmRlci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXRpbHMucmFuZ2UoMSwgOSkubWFwKG51bWJlciA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uRGlzcGxheSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtudW1iZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9e251bWJlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz17bnVtYmVyU3RhdHVzKG51bWJlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTnVtYmVyQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTYwMFwiPlRpbWUgTGVmdDogPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtNjAwIG10LTIgdGV4dC1jZW50ZXIgdy00MCBoLTEwXCIgc3R5bGU9e3t3aWR0aDogKHNlY29uZHNMZWZ0LzEwKSoxMDB9fT48L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgU3Rhck1hdGNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2dhbWVJRCwgc2V0R2FtZUlEXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgcmV0dXJuIDxHYW1lIGtleT17Z2FtZUlEfSBzdGFydE5ld0dhbWU9eygpID0+IHtzZXRHYW1lSUQoZ2FtZUlEICsgMSl9fS8+O1xyXG59XHJcblxyXG5cclxuLy8gQ29sb3IgVGhlbWVcclxuY29uc3QgY29sb3JzID0ge1xyXG4gICAgYXZhaWxhYmxlOiAnbGlnaHRncmF5JyxcclxuICAgIHVzZWQ6ICdsaWdodGdyZWVuJyxcclxuICAgIHdyb25nOiAnbGlnaHRjb3JhbCcsXHJcbiAgICBjYW5kaWRhdGU6ICdkZWVwc2t5Ymx1ZScsXHJcbiAgfTtcclxuXHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJNYXRjaDsiXSwic291cmNlUm9vdCI6IiJ9