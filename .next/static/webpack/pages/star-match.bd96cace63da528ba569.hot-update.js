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
        className: "star inline-block mx-3 my-1"
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-4xl mb-4 ",
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
          className: "flex flex-wrap text-center justify-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "h-60 w-60 border-solid border-gray-300 border-2",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3Rhci1tYXRjaC5qcyJdLCJuYW1lcyI6WyJTdGFyc0Rpc3BsYXkiLCJwcm9wcyIsInV0aWxzIiwicmFuZ2UiLCJjb3VudCIsIm1hcCIsInN0YXJJZCIsIkJ1dHRvbkRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJzdGF0dXMiLCJvbkNsaWNrIiwibnVtYmVyIiwiUGxheUFnYWluIiwiY29sb3IiLCJnYW1lU3RhdHVzIiwidXNlR2FtZVN0YXRlIiwidXNlU3RhdGUiLCJyYW5kb20iLCJzdGFycyIsInNldFN0YXJzIiwiYXZhaWxhYmxlTnVtcyIsInNldEF2YWlsYWJsZU51bXMiLCJjYW5kaWRhdGVOdW1zIiwic2V0Q2FuZGlkYXRlTnVtcyIsInNlY29uZHNMZWZ0Iiwic2V0U2Vjb25kc0xlZnQiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJ0aW1lcklEIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInNldEdhbWVTdGF0ZSIsIm5ld0NhbmRpZGF0ZU51bXMiLCJzdW0iLCJuZXdBdmFpbGFibGVOdW1zIiwiZmlsdGVyIiwibiIsImluY2x1ZGVzIiwicmFuZG9tU3VtSW4iLCJHYW1lIiwiY2FuZGlkYXRlc0FyZVdyb25nIiwibnVtYmVyU3RhdHVzIiwib25OdW1iZXJDbGljayIsImN1cnJlbnRTdGF0dXMiLCJjb25jYXQiLCJjbiIsInN0YXJ0TmV3R2FtZSIsIndpZHRoIiwiU3Rhck1hdGNoIiwiZ2FtZUlEIiwic2V0R2FtZUlEIiwiYXZhaWxhYmxlIiwidXNlZCIsIndyb25nIiwiY2FuZGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLO0FBQUEsc0JBQ3RCO0FBQUEsY0FDS0Msd0RBQUssQ0FBQ0MsS0FBTixDQUFZLENBQVosRUFBZUYsS0FBSyxDQUFDRyxL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Q0QsTUFBTSxHQUFHLENBQVYsQ0FBVDtBQUFzQjtBQUE5RCxLQUFXQSxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNILENBSEQsQyxDQU1BOzs7SUFOTUQsUzs7TUFBQUEsUztBQU9OLElBQU14QyxNQUFNLEdBQUc7QUFDWDJDLFdBQVMsRUFBRSxXQURBO0FBRVhDLE1BQUksRUFBRSxZQUZLO0FBR1hDLE9BQUssRUFBRSxZQUhJO0FBSVhDLFdBQVMsRUFBRTtBQUpBLENBQWY7QUFRZU4sd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3Rhci1tYXRjaC5iZDk2Y2FjZTYzZGE1MjhiYTU2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxpdGllcy91dGlscyc7XHJcblxyXG5jb25zdCBTdGFyc0Rpc3BsYXkgPSBwcm9wcyA9PiAoXHJcbiAgICA8PlxyXG4gICAgICAgIHt1dGlscy5yYW5nZSgxLCBwcm9wcy5jb3VudCkubWFwKHN0YXJJZCA9PiBcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3N0YXJJZH0gY2xhc3NOYW1lPVwic3RhciBpbmxpbmUtYmxvY2sgbXgtMyBteS0xXCI+PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgIDwvPlxyXG4pO1xyXG5cclxuY29uc3QgQnV0dG9uRGlzcGxheSA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3JzW3Byb3BzLnN0YXR1c119fSBcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTUwMCB3LTEyIGgtMTIgdGV4dC1sZyBtLTIgcm91bmRlZFwiIFxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uQ2xpY2socHJvcHMubnVtYmVyLCBwcm9wcy5zdGF0dXMpfSBcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5udW1iZXJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn07XHJcblxyXG5jb25zdCBQbGF5QWdhaW4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC00eGwgbWItNCBcIlxyXG4gICAgICAgICAgICBzdHlsZT17e2NvbG9yOiBwcm9wcy5nYW1lU3RhdHVzID09PSAnbG9zdCcgPyAncmVkJyA6ICdncmVlbid9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuZ2FtZVN0YXR1cyA9PT0gJ2xvc3QnID8gJ0dhbWUgT3ZlcicgOiAnTmljZSd9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktNzAwIHAtMiB0ZXh0LXdoaXRlIHJvdW5kZWRcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5QbGF5IEFnYWluPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vQ3VzdG9tIEhvb2tcclxuIFxyXG5jb25zdCB1c2VHYW1lU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhcnMsIHNldFN0YXJzXSA9IHVzZVN0YXRlKHV0aWxzLnJhbmRvbSgxLCA5KSk7XHJcbiAgICBjb25zdCBbYXZhaWxhYmxlTnVtcywgc2V0QXZhaWxhYmxlTnVtc10gPSB1c2VTdGF0ZSh1dGlscy5yYW5nZSgxLCA5KSk7XHJcbiAgICBjb25zdCBbY2FuZGlkYXRlTnVtcywgc2V0Q2FuZGlkYXRlTnVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2Vjb25kc0xlZnQsIHNldFNlY29uZHNMZWZ0XSA9IHVzZVN0YXRlKDEwKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2Vjb25kc0xlZnQgPiAwICYmIGF2YWlsYWJsZU51bXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lcklEID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWNvbmRzTGVmdChzZWNvbmRzTGVmdCAtIDEpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcklEKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBzZXRHYW1lU3RhdGUgPSAobmV3Q2FuZGlkYXRlTnVtcykgPT4ge1xyXG4gICAgICAgIGlmICh1dGlscy5zdW0obmV3Q2FuZGlkYXRlTnVtcykgIT09IHN0YXJzKSB7XHJcbiAgICAgICAgICAgIHNldENhbmRpZGF0ZU51bXMobmV3Q2FuZGlkYXRlTnVtcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3QXZhaWxhYmxlTnVtcyA9IGF2YWlsYWJsZU51bXMuZmlsdGVyKFxyXG4gICAgICAgICAgICBuID0+ICFuZXdDYW5kaWRhdGVOdW1zLmluY2x1ZGVzKG4pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldFN0YXJzKHV0aWxzLnJhbmRvbVN1bUluKG5ld0F2YWlsYWJsZU51bXMsIDkpKTtcclxuICAgICAgICAgICAgc2V0QXZhaWxhYmxlTnVtcyhuZXdBdmFpbGFibGVOdW1zKTtcclxuICAgICAgICAgICAgc2V0Q2FuZGlkYXRlTnVtcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7c3RhcnMsIGF2YWlsYWJsZU51bXMsIGNhbmRpZGF0ZU51bXMsIHNlY29uZHNMZWZ0LCBzZXRHYW1lU3RhdGV9XHJcbn1cclxuXHJcblxyXG5jb25zdCBHYW1lID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgc3RhcnMsXHJcbiAgICAgICAgYXZhaWxhYmxlTnVtcyxcclxuICAgICAgICBjYW5kaWRhdGVOdW1zLFxyXG4gICAgICAgIHNlY29uZHNMZWZ0LFxyXG4gICAgICAgIHNldEdhbWVTdGF0ZVxyXG4gICAgfSA9IHVzZUdhbWVTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGNhbmRpZGF0ZXNBcmVXcm9uZyA9IHV0aWxzLnN1bShjYW5kaWRhdGVOdW1zKSA+IHN0YXJzO1xyXG5cclxuICAgIGNvbnN0IGdhbWVTdGF0dXMgPSBhdmFpbGFibGVOdW1zLmxlbmd0aCA9PT0gMFxyXG4gICAgPyAnd29uJ1xyXG4gICAgOiBzZWNvbmRzTGVmdCA9PT0gMCA/ICdsb3N0JyA6ICdhY3RpdmUnO1xyXG5cclxuICAgIGNvbnN0IG51bWJlclN0YXR1cyA9IChudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFhdmFpbGFibGVOdW1zLmluY2x1ZGVzKG51bWJlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuICd1c2VkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbmRpZGF0ZU51bXMuaW5jbHVkZXMobnVtYmVyKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlc0FyZVdyb25nID8gJ3dyb25nJyA6ICdjYW5kaWRhdGUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ2F2YWlsYWJsZSc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IG9uTnVtYmVyQ2xpY2sgPSAobnVtYmVyLCBjdXJyZW50U3RhdHVzKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChnYW1lU3RhdHVzICE9PSAnYWN0aXZlJyB8fCBjdXJyZW50U3RhdHVzID09PSAndXNlZCcpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBuZXdDYW5kaWRhdGVOdW1zID1cclxuICAgICAgICAgIGN1cnJlbnRTdGF0dXMgPT09ICdhdmFpbGFibGUnXHJcbiAgICAgICAgICAgID8gY2FuZGlkYXRlTnVtcy5jb25jYXQobnVtYmVyKVxyXG4gICAgICAgICAgICA6IGNhbmRpZGF0ZU51bXMuZmlsdGVyKGNuID0+IGNuICE9PSBudW1iZXIpO1xyXG5cclxuICAgICAgICBzZXRHYW1lU3RhdGUobmV3Q2FuZGlkYXRlTnVtcyk7XHJcbiAgICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlblwiPlxyXG4gICAgICAgICAgICA8TmF2QmFyPjwvTmF2QmFyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscFwiPlxyXG4gICAgICAgICAgICAgICAgUGljayAxIG9yIG1vcmUgbnVtYmVycyB0aGF0IHN1bSB0byB0aGUgbnVtYmVyIG9mIHN0YXJzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTYwIHctNjAgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMCBib3JkZXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dhbWVTdGF0dXMgIT09ICdhY3RpdmUnID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5QWdhaW4gb25DbGljaz17cHJvcHMuc3RhcnROZXdHYW1lfSBnYW1lU3RhdHVzPXtnYW1lU3RhdHVzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhcnNEaXNwbGF5IGNvdW50PXtzdGFyc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTIgcHgtNCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBjb250ZW50LWNlbnRlciBoLTYwIHctNjAgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMCBib3JkZXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3V0aWxzLnJhbmdlKDEsIDkpLm1hcChudW1iZXIgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkRpc3BsYXkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bnVtYmVyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyPXtudW1iZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9e251bWJlclN0YXR1cyhudW1iZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbk51bWJlckNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHRleHQtZ3JheS02MDAgaW5saW5lLWJsb2NrXCI+VGltZSBMZWZ0OiB7c2Vjb25kc0xlZnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtODAwIG10LTIgdGV4dC1jZW50ZXIgdy00MCBoLTYgcm91bmRlZFwiIHN0eWxlPXt7d2lkdGg6IChzZWNvbmRzTGVmdC8xMCkqMTAwfX0+PC9kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IFN0YXJNYXRjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtnYW1lSUQsIHNldEdhbWVJRF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIHJldHVybiA8R2FtZSBrZXk9e2dhbWVJRH0gc3RhcnROZXdHYW1lPXsoKSA9PiB7c2V0R2FtZUlEKGdhbWVJRCArIDEpfX0vPjtcclxufVxyXG5cclxuXHJcbi8vIENvbG9yIFRoZW1lXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICAgIGF2YWlsYWJsZTogJ2xpZ2h0Z3JheScsXHJcbiAgICB1c2VkOiAnbGlnaHRncmVlbicsXHJcbiAgICB3cm9uZzogJ2xpZ2h0Y29yYWwnLFxyXG4gICAgY2FuZGlkYXRlOiAnZGVlcHNreWJsdWUnLFxyXG4gIH07XHJcblxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBTdGFyTWF0Y2g7Il0sInNvdXJjZVJvb3QiOiIifQ==