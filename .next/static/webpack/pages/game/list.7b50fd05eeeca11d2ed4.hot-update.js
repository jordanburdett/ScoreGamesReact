webpackHotUpdate_N_E("pages/game/list",{

/***/ "./pages/game/list.tsx":
/*!*****************************!*\
  !*** ./pages/game/list.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/Firebase/firebaseConnect */ \"./features/Firebase/firebaseConnect.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _features_models_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/models/game */ \"./features/models/game.tsx\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/jordan/Projects/ScoreGames/score-games/pages/game/list.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar list = function list() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loggedIn = _useState[0],\n      setLoggedIn = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      gamesList = _useState2[0],\n      setGamesList = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // listen for loggin in or loggin out.\n    var cancelAuthChange = _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_4__[\"auth\"].onAuthStateChanged(function (user) {\n      if (user) {\n        // user is signed in\n        setLoggedIn(function () {\n          return true;\n        });\n        console.log(\"you are logged in\");\n      } else {\n        // No user is signed in.\n        setLoggedIn(function () {\n          return false;\n        });\n        router.push(\"/account/login\");\n      }\n    }); // stop subscribing to auth changes\n\n    return cancelAuthChange;\n  });\n  var game = new _features_models_game__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"FirstGame\", [new _features_models_game__WEBPACK_IMPORTED_MODULE_6__[\"Team\"](\"Team 1\", 0, [0]), new _features_models_game__WEBPACK_IMPORTED_MODULE_6__[\"Team\"](\"Team 1\", 0, [0])]); // game.teams.push(new Team(\"Team 2\", 1, new History([1])))\n  // adds a new game to firebase\n\n  var addGame = function addGame() {\n    var _auth$currentUser;\n\n    // check for login ---TODO\n    var usersRef = _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_4__[\"database\"].ref(\"/users\"); // add the game\n\n    var reference = _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_4__[\"database\"].ref(\"/games\").push(game);\n    console.log(\"look here\", reference.key); // add the game to the user\n\n    _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_4__[\"database\"].ref(\"users/\" + ((_auth$currentUser = _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_4__[\"auth\"].currentUser) === null || _auth$currentUser === void 0 ? void 0 : _auth$currentUser.uid) + \"/games\");\n  }; // takes a game id passed in by reference and returns the game as a Game object\n\n\n  var createGameFromFirebase = /*#__PURE__*/function () {\n    var _ref = Object(_Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      return _Users_jordan_Projects_ScoreGames_score_games_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_4__[\"database\"].ref(\"/\").once(\"value\").then(function (res) {\n                return Object(_features_models_game__WEBPACK_IMPORTED_MODULE_6__[\"transformFromFirebase\"])(res.val());\n              }).then(function (value) {\n                console.log(value.getTeamNames());\n                return value;\n              });\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function createGameFromFirebase() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Welcome to the game list\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      onClick: addGame,\n      children: \"Try me.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      onClick: createGameFromFirebase,\n      children: \"Test add from firebase\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(list, \"GIGSVIhquW7GD/biF3ZdrXRPmjY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (list);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS9saXN0LnRzeD9jOTUyIl0sIm5hbWVzIjpbImxpc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImxvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJnYW1lc0xpc3QiLCJzZXRHYW1lc0xpc3QiLCJ1c2VFZmZlY3QiLCJjYW5jZWxBdXRoQ2hhbmdlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImdhbWUiLCJHYW1lIiwiVGVhbSIsImFkZEdhbWUiLCJ1c2Vyc1JlZiIsImRhdGFiYXNlIiwicmVmIiwicmVmZXJlbmNlIiwia2V5IiwiY3VycmVudFVzZXIiLCJ1aWQiLCJjcmVhdGVHYW1lRnJvbUZpcmViYXNlIiwib25jZSIsInRoZW4iLCJyZXMiLCJ0cmFuc2Zvcm1Gcm9tRmlyZWJhc2UiLCJ2YWwiLCJ2YWx1ZSIsImdldFRlYW1OYW1lcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFNQTtBQUNBO0FBS0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURpQixrQkFHZUMsc0RBQVEsQ0FBQyxLQUFELENBSHZCO0FBQUEsTUFHVkMsUUFIVTtBQUFBLE1BR0FDLFdBSEE7O0FBQUEsbUJBS2lCRixzREFBUSxDQUFDLEVBQUQsQ0FMekI7QUFBQSxNQUtWRyxTQUxVO0FBQUEsTUFLQ0MsWUFMRDs7QUFPakJDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0EsUUFBTUMsZ0JBQWdCLEdBQUdDLHVFQUFJLENBQUNDLGtCQUFMLENBQXdCLFVBQUNDLElBQUQsRUFBVTtBQUN6RCxVQUFJQSxJQUFKLEVBQVU7QUFDUjtBQUNBUCxtQkFBVyxDQUFDO0FBQUEsaUJBQU0sSUFBTjtBQUFBLFNBQUQsQ0FBWDtBQUNBUSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNELE9BSkQsTUFJTztBQUNMO0FBQ0FULG1CQUFXLENBQUM7QUFBQSxpQkFBTSxLQUFOO0FBQUEsU0FBRCxDQUFYO0FBQ0FKLGNBQU0sQ0FBQ2MsSUFBUCxDQUFZLGdCQUFaO0FBQ0Q7QUFDRixLQVZ3QixDQUF6QixDQUZjLENBYWQ7O0FBQ0EsV0FBT04sZ0JBQVA7QUFDRCxHQWZRLENBQVQ7QUFpQkEsTUFBTU8sSUFBSSxHQUFHLElBQUlDLDZEQUFKLENBQVMsV0FBVCxFQUFzQixDQUNqQyxJQUFJQywwREFBSixDQUFTLFFBQVQsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBQyxDQUFELENBQXRCLENBRGlDLEVBRWpDLElBQUlBLDBEQUFKLENBQVMsUUFBVCxFQUFtQixDQUFuQixFQUFzQixDQUFDLENBQUQsQ0FBdEIsQ0FGaUMsQ0FBdEIsQ0FBYixDQXhCaUIsQ0E2QmpCO0FBRUE7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQjtBQUVBLFFBQU1DLFFBQVEsR0FBR0MsMkVBQVEsQ0FBQ0MsR0FBVCxDQUFhLFFBQWIsQ0FBakIsQ0FIb0IsQ0FLcEI7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHRiwyRUFBUSxDQUFDQyxHQUFULENBQWEsUUFBYixFQUF1QlAsSUFBdkIsQ0FBNEJDLElBQTVCLENBQWxCO0FBQ0FILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJTLFNBQVMsQ0FBQ0MsR0FBbkMsRUFQb0IsQ0FRcEI7O0FBRUFILCtFQUFRLENBQUNDLEdBQVQsQ0FBYSxpQ0FBV1osdUVBQUksQ0FBQ2UsV0FBaEIsc0RBQVcsa0JBQWtCQyxHQUE3QixJQUFtQyxRQUFoRDtBQUVELEdBWkQsQ0FoQ2lCLENBOENqQjs7O0FBQ0EsTUFBTUMsc0JBQXNCO0FBQUEsb1RBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3Qk4seUZBQVEsQ0FDTEMsR0FESCxDQUNPLEdBRFAsRUFFR00sSUFGSCxDQUVRLE9BRlIsRUFHR0MsSUFISCxDQUdRLFVBQUNDLEdBQUQ7QUFBQSx1QkFBU0MsbUZBQXFCLENBQUNELEdBQUcsQ0FBQ0UsR0FBSixFQUFELENBQTlCO0FBQUEsZUFIUixFQUlHSCxJQUpILENBSVEsVUFBQ0ksS0FBRCxFQUFpQjtBQUNyQnBCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWW1CLEtBQUssQ0FBQ0MsWUFBTixFQUFaO0FBQ0EsdUJBQU9ELEtBQVA7QUFDRCxlQVBIOztBQUQ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUF0Qk4sc0JBQXNCO0FBQUE7QUFBQTtBQUFBLEtBQTVCOztBQVdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLDhEQUFEO0FBQVEsYUFBTyxFQUFFUixPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UscUVBQUMsOERBQUQ7QUFBUSxhQUFPLEVBQUVRLHNCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUEsa0JBREY7QUFPRCxDQWpFRDs7R0FBTTNCLEk7VUFDV0UscUQ7OztBQWtFRkYsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9nYW1lL2xpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgYXV0aCxcbiAgZmlyZWJhc2UsXG4gIGRhdGFiYXNlLFxufSBmcm9tIFwiLi4vLi4vZmVhdHVyZXMvRmlyZWJhc2UvZmlyZWJhc2VDb25uZWN0XCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEdhbWUsIHtcbiAgUGxheWVyLFxuICBUZWFtLFxuICB0cmFuc2Zvcm1Gcm9tRmlyZWJhc2UsXG59IGZyb20gXCIuLi8uLi9mZWF0dXJlcy9tb2RlbHMvZ2FtZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuXG5jb25zdCBsaXN0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbZ2FtZXNMaXN0LCBzZXRHYW1lc0xpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gbGlzdGVuIGZvciBsb2dnaW4gaW4gb3IgbG9nZ2luIG91dC5cbiAgICBjb25zdCBjYW5jZWxBdXRoQ2hhbmdlID0gYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIC8vIHVzZXIgaXMgc2lnbmVkIGluXG4gICAgICAgIHNldExvZ2dlZEluKCgpID0+IHRydWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInlvdSBhcmUgbG9nZ2VkIGluXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm8gdXNlciBpcyBzaWduZWQgaW4uXG4gICAgICAgIHNldExvZ2dlZEluKCgpID0+IGZhbHNlKTtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvYWNjb3VudC9sb2dpblwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBzdG9wIHN1YnNjcmliaW5nIHRvIGF1dGggY2hhbmdlc1xuICAgIHJldHVybiBjYW5jZWxBdXRoQ2hhbmdlO1xuICB9KTtcblxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoXCJGaXJzdEdhbWVcIiwgW1xuICAgIG5ldyBUZWFtKFwiVGVhbSAxXCIsIDAsIFswXSksXG4gICAgbmV3IFRlYW0oXCJUZWFtIDFcIiwgMCwgWzBdKSxcbiAgXSk7XG5cbiAgLy8gZ2FtZS50ZWFtcy5wdXNoKG5ldyBUZWFtKFwiVGVhbSAyXCIsIDEsIG5ldyBIaXN0b3J5KFsxXSkpKVxuXG4gIC8vIGFkZHMgYSBuZXcgZ2FtZSB0byBmaXJlYmFzZVxuICBjb25zdCBhZGRHYW1lID0gKCkgPT4ge1xuICAgIC8vIGNoZWNrIGZvciBsb2dpbiAtLS1UT0RPXG5cbiAgICBjb25zdCB1c2Vyc1JlZiA9IGRhdGFiYXNlLnJlZihcIi91c2Vyc1wiKTtcblxuICAgIC8vIGFkZCB0aGUgZ2FtZVxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGRhdGFiYXNlLnJlZihcIi9nYW1lc1wiKS5wdXNoKGdhbWUpO1xuICAgIGNvbnNvbGUubG9nKFwibG9vayBoZXJlXCIsIHJlZmVyZW5jZS5rZXkpO1xuICAgIC8vIGFkZCB0aGUgZ2FtZSB0byB0aGUgdXNlclxuXG4gICAgZGF0YWJhc2UucmVmKFwidXNlcnMvXCIgKyBhdXRoLmN1cnJlbnRVc2VyPy51aWQgKyBcIi9nYW1lc1wiKVxuICAgIFxuICB9O1xuXG4gIC8vIHRha2VzIGEgZ2FtZSBpZCBwYXNzZWQgaW4gYnkgcmVmZXJlbmNlIGFuZCByZXR1cm5zIHRoZSBnYW1lIGFzIGEgR2FtZSBvYmplY3RcbiAgY29uc3QgY3JlYXRlR2FtZUZyb21GaXJlYmFzZSA9IGFzeW5jICgpID0+IHtcbiAgICBkYXRhYmFzZVxuICAgICAgLnJlZihcIi9cIilcbiAgICAgIC5vbmNlKFwidmFsdWVcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHRyYW5zZm9ybUZyb21GaXJlYmFzZShyZXMudmFsKCkpKVxuICAgICAgLnRoZW4oKHZhbHVlOiBHYW1lKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlLmdldFRlYW1OYW1lcygpKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5XZWxjb21lIHRvIHRoZSBnYW1lIGxpc3Q8L2Rpdj5cbiAgICAgIDxCdXR0b24gb25DbGljaz17YWRkR2FtZX0+VHJ5IG1lLjwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVHYW1lRnJvbUZpcmViYXNlfT5UZXN0IGFkZCBmcm9tIGZpcmViYXNlPC9CdXR0b24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/game/list.tsx\n");

/***/ })

})