webpackHotUpdate_N_E("pages/game/list",{

/***/ "./pages/game/list.tsx":
/*!*****************************!*\
  !*** ./pages/game/list.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/Firebase/firebaseConnect */ \"./features/Firebase/firebaseConnect.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _features_models_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/models/game */ \"./features/models/game.tsx\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/jordan/Projects/ScoreGames/score-games/pages/game/list.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar list = function list() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loggedIn = _useState[0],\n      setLoggedIn = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      gamesList = _useState2[0],\n      setGamesList = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // listen for loggin in or loggin out.\n    var cancelAuthChange = _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_4__[\"auth\"].onAuthStateChanged(function (user) {\n      if (user) {\n        // user is signed in\n        setLoggedIn(function () {\n          return true;\n        });\n        console.log(\"you are logged in\");\n      } else {\n        // No user is signed in.\n        setLoggedIn(function () {\n          return false;\n        });\n        router.push(\"/account/login\");\n      }\n    }); // stop subscribing to auth changes\n\n    return cancelAuthChange;\n  });\n  var game = new _features_models_game__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"FirstGame\", [new _features_models_game__WEBPACK_IMPORTED_MODULE_6__[\"Team\"](\"Team 1\", 0, [0]), new _features_models_game__WEBPACK_IMPORTED_MODULE_6__[\"Team\"](\"Team 1\", 0, [0])]); // game.teams.push(new Team(\"Team 2\", 1, new History([1])))\n  // adds a new game to firebase\n\n  var addGame = function addGame() {\n    var _auth$currentUser;\n\n    // check for login ---TODO\n    var usersRef = _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_4__[\"database\"].ref(\"/users\"); // add the game\n\n    var reference = _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_4__[\"database\"].ref(\"/games\").push(game); // add the game to the user\n\n    var something = usersRef.child(((_auth$currentUser = _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_4__[\"auth\"].currentUser) === null || _auth$currentUser === void 0 ? void 0 : _auth$currentUser.uid) + \"/games\");\n    something.set({\n      key: reference\n    });\n  }; // takes a game id passed in by reference and returns the game as a Game object\n\n\n  var createGameFromFirebase = /*#__PURE__*/function () {\n    var _ref = Object(_Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      return _Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_4__[\"database\"].ref(\"/\").once(\"value\").then(function (res) {\n                return Object(_features_models_game__WEBPACK_IMPORTED_MODULE_6__[\"transformFromFirebase\"])(res.val());\n              }).then(function (value) {\n                console.log(value.getTeamNames());\n                return value;\n              });\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function createGameFromFirebase() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Welcome to the game list\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      onClick: addGame,\n      children: \"Try me.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      onClick: createGameFromFirebase,\n      children: \"Test add from firebase\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(list, \"GIGSVIhquW7GD/biF3ZdrXRPmjY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (list);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS9saXN0LnRzeD9jOTUyIl0sIm5hbWVzIjpbImxpc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImxvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJnYW1lc0xpc3QiLCJzZXRHYW1lc0xpc3QiLCJ1c2VFZmZlY3QiLCJjYW5jZWxBdXRoQ2hhbmdlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImdhbWUiLCJHYW1lIiwiVGVhbSIsImFkZEdhbWUiLCJ1c2Vyc1JlZiIsImRhdGFiYXNlIiwicmVmIiwicmVmZXJlbmNlIiwic29tZXRoaW5nIiwiY2hpbGQiLCJjdXJyZW50VXNlciIsInVpZCIsInNldCIsImtleSIsImNyZWF0ZUdhbWVGcm9tRmlyZWJhc2UiLCJvbmNlIiwidGhlbiIsInJlcyIsInRyYW5zZm9ybUZyb21GaXJlYmFzZSIsInZhbCIsInZhbHVlIiwiZ2V0VGVhbU5hbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQU1BO0FBQ0E7QUFLQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGlCLGtCQUdlQyxzREFBUSxDQUFDLEtBQUQsQ0FIdkI7QUFBQSxNQUdWQyxRQUhVO0FBQUEsTUFHQUMsV0FIQTs7QUFBQSxtQkFLaUJGLHNEQUFRLENBQUMsRUFBRCxDQUx6QjtBQUFBLE1BS1ZHLFNBTFU7QUFBQSxNQUtDQyxZQUxEOztBQU9qQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBR0MsdUVBQUksQ0FBQ0Msa0JBQUwsQ0FBd0IsVUFBQ0MsSUFBRCxFQUFVO0FBQ3pELFVBQUlBLElBQUosRUFBVTtBQUNSO0FBQ0FQLG1CQUFXLENBQUM7QUFBQSxpQkFBTSxJQUFOO0FBQUEsU0FBRCxDQUFYO0FBQ0FRLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0QsT0FKRCxNQUlPO0FBQ0w7QUFDQVQsbUJBQVcsQ0FBQztBQUFBLGlCQUFNLEtBQU47QUFBQSxTQUFELENBQVg7QUFDQUosY0FBTSxDQUFDYyxJQUFQLENBQVksZ0JBQVo7QUFDRDtBQUNGLEtBVndCLENBQXpCLENBRmMsQ0FhZDs7QUFDQSxXQUFPTixnQkFBUDtBQUNELEdBZlEsQ0FBVDtBQWlCQSxNQUFNTyxJQUFJLEdBQUcsSUFBSUMsNkRBQUosQ0FBUyxXQUFULEVBQXNCLENBQ2pDLElBQUlDLDBEQUFKLENBQVMsUUFBVCxFQUFtQixDQUFuQixFQUFzQixDQUFDLENBQUQsQ0FBdEIsQ0FEaUMsRUFFakMsSUFBSUEsMERBQUosQ0FBUyxRQUFULEVBQW1CLENBQW5CLEVBQXNCLENBQUMsQ0FBRCxDQUF0QixDQUZpQyxDQUF0QixDQUFiLENBeEJpQixDQTZCakI7QUFFQTs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCO0FBRUEsUUFBTUMsUUFBUSxHQUFHQywyRUFBUSxDQUFDQyxHQUFULENBQWEsUUFBYixDQUFqQixDQUhvQixDQUtwQjs7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLDJFQUFRLENBQUNDLEdBQVQsQ0FBYSxRQUFiLEVBQXVCUCxJQUF2QixDQUE0QkMsSUFBNUIsQ0FBbEIsQ0FOb0IsQ0FRcEI7O0FBRUEsUUFBTVEsU0FBUyxHQUFHSixRQUFRLENBQUNLLEtBQVQsQ0FBZSxzQkFBQWYsdUVBQUksQ0FBQ2dCLFdBQUwsd0VBQWtCQyxHQUFsQixJQUF3QixRQUF2QyxDQUFsQjtBQUNBSCxhQUFTLENBQUNJLEdBQVYsQ0FBYztBQUFDQyxTQUFHLEVBQUVOO0FBQU4sS0FBZDtBQUNELEdBWkQsQ0FoQ2lCLENBOENqQjs7O0FBQ0EsTUFBTU8sc0JBQXNCO0FBQUEsb1RBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3QlQseUZBQVEsQ0FDTEMsR0FESCxDQUNPLEdBRFAsRUFFR1MsSUFGSCxDQUVRLE9BRlIsRUFHR0MsSUFISCxDQUdRLFVBQUNDLEdBQUQ7QUFBQSx1QkFBU0MsbUZBQXFCLENBQUNELEdBQUcsQ0FBQ0UsR0FBSixFQUFELENBQTlCO0FBQUEsZUFIUixFQUlHSCxJQUpILENBSVEsVUFBQ0ksS0FBRCxFQUFpQjtBQUNyQnZCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWXNCLEtBQUssQ0FBQ0MsWUFBTixFQUFaO0FBQ0EsdUJBQU9ELEtBQVA7QUFDRCxlQVBIOztBQUQ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUF0Qk4sc0JBQXNCO0FBQUE7QUFBQTtBQUFBLEtBQTVCOztBQVdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLDhEQUFEO0FBQVEsYUFBTyxFQUFFWCxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UscUVBQUMsOERBQUQ7QUFBUSxhQUFPLEVBQUVXLHNCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUEsa0JBREY7QUFPRCxDQWpFRDs7R0FBTTlCLEk7VUFDV0UscUQ7OztBQWtFRkYsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9nYW1lL2xpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgYXV0aCxcbiAgZmlyZWJhc2UsXG4gIGRhdGFiYXNlLFxufSBmcm9tIFwiLi4vLi4vZmVhdHVyZXMvRmlyZWJhc2UvZmlyZWJhc2VDb25uZWN0XCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEdhbWUsIHtcbiAgUGxheWVyLFxuICBUZWFtLFxuICB0cmFuc2Zvcm1Gcm9tRmlyZWJhc2UsXG59IGZyb20gXCIuLi8uLi9mZWF0dXJlcy9tb2RlbHMvZ2FtZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuXG5jb25zdCBsaXN0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbZ2FtZXNMaXN0LCBzZXRHYW1lc0xpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gbGlzdGVuIGZvciBsb2dnaW4gaW4gb3IgbG9nZ2luIG91dC5cbiAgICBjb25zdCBjYW5jZWxBdXRoQ2hhbmdlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIC8vIHVzZXIgaXMgc2lnbmVkIGluXG4gICAgICAgIHNldExvZ2dlZEluKCgpID0+IHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInlvdSBhcmUgbG9nZ2VkIGluXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm8gdXNlciBpcyBzaWduZWQgaW4uXG4gICAgICAgIHNldExvZ2dlZEluKCgpID0+IGZhbHNlKTtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvYWNjb3VudC9sb2dpblwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBzdG9wIHN1YnNjcmliaW5nIHRvIGF1dGggY2hhbmdlc1xuICAgIHJldHVybiBjYW5jZWxBdXRoQ2hhbmdlO1xuICB9KTtcblxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoXCJGaXJzdEdhbWVcIiwgW1xuICAgIG5ldyBUZWFtKFwiVGVhbSAxXCIsIDAsIFswXSksXG4gICAgbmV3IFRlYW0oXCJUZWFtIDFcIiwgMCwgWzBdKSxcbiAgXSk7XG5cbiAgLy8gZ2FtZS50ZWFtcy5wdXNoKG5ldyBUZWFtKFwiVGVhbSAyXCIsIDEsIG5ldyBIaXN0b3J5KFsxXSkpKVxuXG4gIC8vIGFkZHMgYSBuZXcgZ2FtZSB0byBmaXJlYmFzZVxuICBjb25zdCBhZGRHYW1lID0gKCkgPT4ge1xuICAgIC8vIGNoZWNrIGZvciBsb2dpbiAtLS1UT0RPXG5cbiAgICBjb25zdCB1c2Vyc1JlZiA9IGRhdGFiYXNlLnJlZihcIi91c2Vyc1wiKTtcblxuICAgIC8vIGFkZCB0aGUgZ2FtZVxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGRhdGFiYXNlLnJlZihcIi9nYW1lc1wiKS5wdXNoKGdhbWUpO1xuXG4gICAgLy8gYWRkIHRoZSBnYW1lIHRvIHRoZSB1c2VyXG5cbiAgICBjb25zdCBzb21ldGhpbmcgPSB1c2Vyc1JlZi5jaGlsZChhdXRoLmN1cnJlbnRVc2VyPy51aWQgKyBcIi9nYW1lc1wiKTtcbiAgICBzb21ldGhpbmcuc2V0KHtrZXk6IHJlZmVyZW5jZX0pXG4gIH07XG5cbiAgLy8gdGFrZXMgYSBnYW1lIGlkIHBhc3NlZCBpbiBieSByZWZlcmVuY2UgYW5kIHJldHVybnMgdGhlIGdhbWUgYXMgYSBHYW1lIG9iamVjdFxuICBjb25zdCBjcmVhdGVHYW1lRnJvbUZpcmViYXNlID0gYXN5bmMgKCkgPT4ge1xuICAgIGRhdGFiYXNlXG4gICAgICAucmVmKFwiL1wiKVxuICAgICAgLm9uY2UoXCJ2YWx1ZVwiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gdHJhbnNmb3JtRnJvbUZpcmViYXNlKHJlcy52YWwoKSkpXG4gICAgICAudGhlbigodmFsdWU6IEdhbWUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUuZ2V0VGVhbU5hbWVzKCkpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PldlbGNvbWUgdG8gdGhlIGdhbWUgbGlzdDwvZGl2PlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthZGRHYW1lfT5UcnkgbWUuPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZUdhbWVGcm9tRmlyZWJhc2V9PlRlc3QgYWRkIGZyb20gZmlyZWJhc2U8L0J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game/list.tsx\n");

/***/ })

})