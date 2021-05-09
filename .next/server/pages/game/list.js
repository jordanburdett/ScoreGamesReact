module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/game/list.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./features/Firebase/firebaseConnect.tsx":
/*!***********************************************!*\
  !*** ./features/Firebase/firebaseConnect.tsx ***!
  \***********************************************/
/*! exports provided: database, firebase, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"database\", function() { return database; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"auth\", function() { return auth; });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"firebase\", function() { return firebase__WEBPACK_IMPORTED_MODULE_0___default.a; });\n // For Firebase JS SDK v7.20.0 and later, measurementId is optional\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyBSsthruiBd1FYsGJ_SyBxCMcV8OvEpTTc\",\n  authDomain: \"scoregamesrewrite.firebaseapp.com\",\n  projectId: \"scoregamesrewrite\",\n  databaseURL: \"https://scoregamesrewrite-default-rtdb.firebaseio.com/\",\n  storageBucket: \"scoregamesrewrite.appspot.com\",\n  messagingSenderId: \"668030118825\",\n  appId: \"1:668030118825:web:dcce22864ddba8afb2b2b8\",\n  measurementId: \"G-Q1ZXRZP21R\"\n};\n\nif (firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length === 0) {\n  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);\n} // Get a reference to the database service\n\n\nvar database = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database();\nvar auth = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mZWF0dXJlcy9GaXJlYmFzZS9maXJlYmFzZUNvbm5lY3QudHN4P2M5YjMiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwiZGF0YWJhc2VVUkwiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZGF0YWJhc2UiLCJhdXRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDQSxNQUFNQSxjQUFjLEdBQUc7QUFDbkJDLFFBQU0sRUFBRSx5Q0FEVztBQUVuQkMsWUFBVSxFQUFFLG1DQUZPO0FBR25CQyxXQUFTLEVBQUUsbUJBSFE7QUFJbkJDLGFBQVcsRUFBRSx3REFKTTtBQUtuQkMsZUFBYSxFQUFFLCtCQUxJO0FBTW5CQyxtQkFBaUIsRUFBRSxjQU5BO0FBT25CQyxPQUFLLEVBQUUsMkNBUFk7QUFRbkJDLGVBQWEsRUFBRTtBQVJJLENBQXZCOztBQVdFLElBQUlDLCtDQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM5QkYsaURBQVEsQ0FBQ0csYUFBVCxDQUF1QlosY0FBdkI7QUFDRCxDLENBR0Q7OztBQUNBLElBQUlhLFFBQVEsR0FBR0osK0NBQVEsQ0FBQ0ksUUFBVCxFQUFmO0FBQ0EsSUFBSUMsSUFBSSxHQUFHTCwrQ0FBUSxDQUFDSyxJQUFULEVBQVgiLCJmaWxlIjoiLi9mZWF0dXJlcy9GaXJlYmFzZS9maXJlYmFzZUNvbm5lY3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xuXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QlNzdGhydWlCZDFGWXNHSl9TeUJ4Q01jVjhPdkVwVFRjXCIsXG4gICAgYXV0aERvbWFpbjogXCJzY29yZWdhbWVzcmV3cml0ZS5maXJlYmFzZWFwcC5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwic2NvcmVnYW1lc3Jld3JpdGVcIixcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3Njb3JlZ2FtZXNyZXdyaXRlLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9cIixcbiAgICBzdG9yYWdlQnVja2V0OiBcInNjb3JlZ2FtZXNyZXdyaXRlLmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjY4MDMwMTE4ODI1XCIsXG4gICAgYXBwSWQ6IFwiMTo2NjgwMzAxMTg4MjU6d2ViOmRjY2UyMjg2NGRkYmE4YWZiMmIyYjhcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctUTFaWFJaUDIxUlwiXG4gIH07XG5cbiAgaWYgKGZpcmViYXNlLmFwcHMubGVuZ3RoID09PSAwKSB7XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gIH1cbiAgXG5cbiAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkYXRhYmFzZSBzZXJ2aWNlXG4gIHZhciBkYXRhYmFzZSA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XG4gIHZhciBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuXG4gIGV4cG9ydCB7IGRhdGFiYXNlLCBmaXJlYmFzZSwgYXV0aCB9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/Firebase/firebaseConnect.tsx\n");

/***/ }),

/***/ "./features/models/game.tsx":
/*!**********************************!*\
  !*** ./features/models/game.tsx ***!
  \**********************************/
/*! exports provided: default, Player, Team, transformFromFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Team\", function() { return Team; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformFromFirebase\", function() { return transformFromFirebase; });\nclass Game {\n  constructor(name = \"\", teams) {\n    this.name = name;\n    this.teams = teams;\n  } // creates a list of team names and returns them\n\n\n  getTeamNames() {\n    const teamNames = [];\n\n    for (let team of this.teams) {\n      teamNames.push(team.name);\n    }\n\n    return teamNames;\n  }\n\n}\nclass Player {\n  constructor(name, id) {\n    this.name = name;\n    this.id = id;\n  }\n\n}\nclass Team {\n  constructor(name = \"team!:)\", score = 0, history) {\n    this.name = name;\n    this.score = score;\n    this.history = history;\n  }\n\n}\nfunction transformFromFirebase(jsonGame) {\n  return new Game(jsonGame.name, jsonGame.teams);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mZWF0dXJlcy9tb2RlbHMvZ2FtZS50c3g/M2JkMCJdLCJuYW1lcyI6WyJHYW1lIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidGVhbXMiLCJnZXRUZWFtTmFtZXMiLCJ0ZWFtTmFtZXMiLCJ0ZWFtIiwicHVzaCIsIlBsYXllciIsImlkIiwiVGVhbSIsInNjb3JlIiwiaGlzdG9yeSIsInRyYW5zZm9ybUZyb21GaXJlYmFzZSIsImpzb25HYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWUsTUFBTUEsSUFBTixDQUFXO0FBQ3RCQyxhQUFXLENBQVFDLElBQVksR0FBRyxFQUF2QixFQUFrQ0MsS0FBbEMsRUFBc0Q7QUFBQSxTQUE5Q0QsSUFBOEMsR0FBOUNBLElBQThDO0FBQUEsU0FBcEJDLEtBQW9CLEdBQXBCQSxLQUFvQjtBQUFFLEdBRDdDLENBSXRCOzs7QUFDQUMsY0FBWSxHQUFHO0FBQ1gsVUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQUNBLFNBQUssSUFBSUMsSUFBVCxJQUFpQixLQUFLSCxLQUF0QixFQUE2QjtBQUN6QkUsZUFBUyxDQUFDRSxJQUFWLENBQWVELElBQUksQ0FBQ0osSUFBcEI7QUFDSDs7QUFFRCxXQUFPRyxTQUFQO0FBQ0g7O0FBWnFCO0FBZW5CLE1BQU1HLE1BQU4sQ0FBYTtBQUNoQlAsYUFBVyxDQUFRQyxJQUFSLEVBQTZCTyxFQUE3QixFQUF5QztBQUFBLFNBQWpDUCxJQUFpQyxHQUFqQ0EsSUFBaUM7QUFBQSxTQUFaTyxFQUFZLEdBQVpBLEVBQVk7QUFBRTs7QUFEdEM7QUFJYixNQUFNQyxJQUFOLENBQVc7QUFDZFQsYUFBVyxDQUFRQyxJQUFJLEdBQUcsU0FBZixFQUFpQ1MsS0FBSyxHQUFHLENBQXpDLEVBQW1EQyxPQUFuRCxFQUEyRTtBQUFBLFNBQW5FVixJQUFtRSxHQUFuRUEsSUFBbUU7QUFBQSxTQUExQ1MsS0FBMEMsR0FBMUNBLEtBQTBDO0FBQUEsU0FBeEJDLE9BQXdCLEdBQXhCQSxPQUF3QjtBQUFFOztBQUQxRTtBQUlYLFNBQVNDLHFCQUFULENBQStCQyxRQUEvQixFQUE4QztBQUNqRCxTQUFPLElBQUlkLElBQUosQ0FBU2MsUUFBUSxDQUFDWixJQUFsQixFQUF3QlksUUFBUSxDQUFDWCxLQUFqQyxDQUFQO0FBQ0giLCJmaWxlIjoiLi9mZWF0dXJlcy9tb2RlbHMvZ2FtZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJcIiwgcHVibGljIHRlYW1zOiBBcnJheTxUZWFtPikge31cblxuXG4gICAgLy8gY3JlYXRlcyBhIGxpc3Qgb2YgdGVhbSBuYW1lcyBhbmQgcmV0dXJucyB0aGVtXG4gICAgZ2V0VGVhbU5hbWVzKCkge1xuICAgICAgICBjb25zdCB0ZWFtTmFtZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgdGVhbSBvZiB0aGlzLnRlYW1zKSB7XG4gICAgICAgICAgICB0ZWFtTmFtZXMucHVzaCh0ZWFtLm5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlYW1OYW1lcztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBpZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgVGVhbSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWUgPSBcInRlYW0hOilcIiwgcHVibGljIHNjb3JlID0gMCwgcHVibGljIGhpc3Rvcnk6IEFycmF5PE51bWJlcj4pIHt9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Gcm9tRmlyZWJhc2UoanNvbkdhbWU6IGFueSkge1xuICAgIHJldHVybiBuZXcgR2FtZShqc29uR2FtZS5uYW1lLCBqc29uR2FtZS50ZWFtcyk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/models/game.tsx\n");

/***/ }),

/***/ "./pages/game/list.tsx":
/*!*****************************!*\
  !*** ./pages/game/list.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/Firebase/firebaseConnect */ \"./features/Firebase/firebaseConnect.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _features_models_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/models/game */ \"./features/models/game.tsx\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/jordan/Projects/ScoreGames/score-games/pages/game/list.tsx\";\n\n\n\n\n\n\nconst list = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  const {\n    0: loggedIn,\n    1: setLoggedIn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: gamesList,\n    1: setGamesList\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    // listen for loggin in or loggin out.\n    const cancelAuthChange = _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_2__[\"auth\"].onAuthStateChanged(user => {\n      if (user) {\n        // user is signed in\n        setLoggedIn(() => true);\n        console.log(\"you are logged in\");\n      } else {\n        // No user is signed in.\n        setLoggedIn(() => false);\n        router.push(\"/account/login\");\n      }\n    }); // stop subscribing to auth changes\n\n    return cancelAuthChange;\n  });\n  const game = new _features_models_game__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"FirstGame\", [new _features_models_game__WEBPACK_IMPORTED_MODULE_4__[\"Team\"](\"Team 1\", 0, [0]), new _features_models_game__WEBPACK_IMPORTED_MODULE_4__[\"Team\"](\"Team 1\", 0, [0])]); // adds a new game to firebase\n\n  const addNewGameToFirebase = () => {\n    var _auth$currentUser;\n\n    // check for login ---TODO - extra error handling. Incase of timeout in order to prevent app from crashing due to no database access or no being able to reference UID\n    const usersRef = _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_2__[\"database\"].ref(\"/users\"); // add the game\n\n    const reference = _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_2__[\"database\"].ref(\"/games\").push(game); // add the game to the user\n\n    _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_2__[\"database\"].ref(\"users/\" + ((_auth$currentUser = _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_2__[\"auth\"].currentUser) === null || _auth$currentUser === void 0 ? void 0 : _auth$currentUser.uid) + \"/games\").child(reference.key).set(true);\n  }; // takes a game id passed in by reference and returns the game as a Game object\n\n\n  const createGameFromFirebase = async () => {\n    _features_Firebase_firebaseConnect__WEBPACK_IMPORTED_MODULE_2__[\"database\"].ref(\"/\").once(\"value\").then(res => Object(_features_models_game__WEBPACK_IMPORTED_MODULE_4__[\"transformFromFirebase\"])(res.val())).then(value => {\n      console.log(value.getTeamNames());\n      return value;\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Welcome to the game list\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      onClick: addGame,\n      children: \"Try me.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      onClick: createGameFromFirebase,\n      children: \"Test add from firebase\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (list);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nYW1lL2xpc3QudHN4P2M5NTIiXSwibmFtZXMiOlsibGlzdCIsInJvdXRlciIsInVzZVJvdXRlciIsImxvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJ1c2VTdGF0ZSIsImdhbWVzTGlzdCIsInNldEdhbWVzTGlzdCIsInVzZUVmZmVjdCIsImNhbmNlbEF1dGhDaGFuZ2UiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZ2FtZSIsIkdhbWUiLCJUZWFtIiwiYWRkTmV3R2FtZVRvRmlyZWJhc2UiLCJ1c2Vyc1JlZiIsImRhdGFiYXNlIiwicmVmIiwicmVmZXJlbmNlIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJjaGlsZCIsImtleSIsInNldCIsImNyZWF0ZUdhbWVGcm9tRmlyZWJhc2UiLCJvbmNlIiwidGhlbiIsInJlcyIsInRyYW5zZm9ybUZyb21GaXJlYmFzZSIsInZhbCIsInZhbHVlIiwiZ2V0VGVhbU5hbWVzIiwiYWRkR2FtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBTUE7QUFDQTtBQUtBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2pCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsS0FBRCxDQUF4QztBQUVBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkYsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBRUFHLHlEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUdDLHVFQUFJLENBQUNDLGtCQUFMLENBQXlCQyxJQUFELElBQVU7QUFDekQsVUFBSUEsSUFBSixFQUFVO0FBQ1I7QUFDQVIsbUJBQVcsQ0FBQyxNQUFNLElBQVAsQ0FBWDtBQUNBUyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNELE9BSkQsTUFJTztBQUNMO0FBQ0FWLG1CQUFXLENBQUMsTUFBTSxLQUFQLENBQVg7QUFDQUgsY0FBTSxDQUFDYyxJQUFQLENBQVksZ0JBQVo7QUFDRDtBQUNGLEtBVndCLENBQXpCLENBRmMsQ0FhZDs7QUFDQSxXQUFPTixnQkFBUDtBQUNELEdBZlEsQ0FBVDtBQWlCQSxRQUFNTyxJQUFJLEdBQUcsSUFBSUMsNkRBQUosQ0FBUyxXQUFULEVBQXNCLENBQ2pDLElBQUlDLDBEQUFKLENBQVMsUUFBVCxFQUFtQixDQUFuQixFQUFzQixDQUFDLENBQUQsQ0FBdEIsQ0FEaUMsRUFFakMsSUFBSUEsMERBQUosQ0FBUyxRQUFULEVBQW1CLENBQW5CLEVBQXNCLENBQUMsQ0FBRCxDQUF0QixDQUZpQyxDQUF0QixDQUFiLENBeEJpQixDQTZCakI7O0FBQ0EsUUFBTUMsb0JBQW9CLEdBQUcsTUFBTTtBQUFBOztBQUNqQztBQUVBLFVBQU1DLFFBQVEsR0FBR0MsMkVBQVEsQ0FBQ0MsR0FBVCxDQUFhLFFBQWIsQ0FBakIsQ0FIaUMsQ0FLakM7O0FBQ0EsVUFBTUMsU0FBUyxHQUFHRiwyRUFBUSxDQUFDQyxHQUFULENBQWEsUUFBYixFQUF1QlAsSUFBdkIsQ0FBNEJDLElBQTVCLENBQWxCLENBTmlDLENBUWpDOztBQUNBSywrRUFBUSxDQUFDQyxHQUFULENBQWEsaUNBQVdaLHVFQUFJLENBQUNjLFdBQWhCLHNEQUFXLGtCQUFrQkMsR0FBN0IsSUFBbUMsUUFBaEQsRUFBMERDLEtBQTFELENBQWdFSCxTQUFTLENBQUNJLEdBQTFFLEVBQStFQyxHQUEvRSxDQUFtRixJQUFuRjtBQUVELEdBWEQsQ0E5QmlCLENBMkNqQjs7O0FBQ0EsUUFBTUMsc0JBQXNCLEdBQUcsWUFBWTtBQUN6Q1IsK0VBQVEsQ0FDTEMsR0FESCxDQUNPLEdBRFAsRUFFR1EsSUFGSCxDQUVRLE9BRlIsRUFHR0MsSUFISCxDQUdTQyxHQUFELElBQVNDLG1GQUFxQixDQUFDRCxHQUFHLENBQUNFLEdBQUosRUFBRCxDQUh0QyxFQUlHSCxJQUpILENBSVNJLEtBQUQsSUFBaUI7QUFDckJ0QixhQUFPLENBQUNDLEdBQVIsQ0FBWXFCLEtBQUssQ0FBQ0MsWUFBTixFQUFaO0FBQ0EsYUFBT0QsS0FBUDtBQUNELEtBUEg7QUFRRCxHQVREOztBQVdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyw2REFBRDtBQUFRLGFBQU8sRUFBRUUsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSxxRUFBQyw2REFBRDtBQUFRLGFBQU8sRUFBRVIsc0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUEsa0JBREY7QUFPRCxDQTlERDs7QUFnRWU3QixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2dhbWUvbGlzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBhdXRoLFxuICBmaXJlYmFzZSxcbiAgZGF0YWJhc2UsXG59IGZyb20gXCIuLi8uLi9mZWF0dXJlcy9GaXJlYmFzZS9maXJlYmFzZUNvbm5lY3RcIjtcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgR2FtZSwge1xuICBQbGF5ZXIsXG4gIFRlYW0sXG4gIHRyYW5zZm9ybUZyb21GaXJlYmFzZSxcbn0gZnJvbSBcIi4uLy4uL2ZlYXR1cmVzL21vZGVscy9nYW1lXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XG5cbmNvbnN0IGxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtsb2dnZWRJbiwgc2V0TG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtnYW1lc0xpc3QsIHNldEdhbWVzTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBsaXN0ZW4gZm9yIGxvZ2dpbiBpbiBvciBsb2dnaW4gb3V0LlxuICAgIGNvbnN0IGNhbmNlbEF1dGhDaGFuZ2UgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgLy8gdXNlciBpcyBzaWduZWQgaW5cbiAgICAgICAgc2V0TG9nZ2VkSW4oKCkgPT4gdHJ1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwieW91IGFyZSBsb2dnZWQgaW5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBObyB1c2VyIGlzIHNpZ25lZCBpbi5cbiAgICAgICAgc2V0TG9nZ2VkSW4oKCkgPT4gZmFsc2UpO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9hY2NvdW50L2xvZ2luXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHN0b3Agc3Vic2NyaWJpbmcgdG8gYXV0aCBjaGFuZ2VzXG4gICAgcmV0dXJuIGNhbmNlbEF1dGhDaGFuZ2U7XG4gIH0pO1xuXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShcIkZpcnN0R2FtZVwiLCBbXG4gICAgbmV3IFRlYW0oXCJUZWFtIDFcIiwgMCwgWzBdKSxcbiAgICBuZXcgVGVhbShcIlRlYW0gMVwiLCAwLCBbMF0pLFxuICBdKTtcblxuICAvLyBhZGRzIGEgbmV3IGdhbWUgdG8gZmlyZWJhc2VcbiAgY29uc3QgYWRkTmV3R2FtZVRvRmlyZWJhc2UgPSAoKSA9PiB7XG4gICAgLy8gY2hlY2sgZm9yIGxvZ2luIC0tLVRPRE8gLSBleHRyYSBlcnJvciBoYW5kbGluZy4gSW5jYXNlIG9mIHRpbWVvdXQgaW4gb3JkZXIgdG8gcHJldmVudCBhcHAgZnJvbSBjcmFzaGluZyBkdWUgdG8gbm8gZGF0YWJhc2UgYWNjZXNzIG9yIG5vIGJlaW5nIGFibGUgdG8gcmVmZXJlbmNlIFVJRFxuXG4gICAgY29uc3QgdXNlcnNSZWYgPSBkYXRhYmFzZS5yZWYoXCIvdXNlcnNcIik7XG5cbiAgICAvLyBhZGQgdGhlIGdhbWVcbiAgICBjb25zdCByZWZlcmVuY2UgPSBkYXRhYmFzZS5yZWYoXCIvZ2FtZXNcIikucHVzaChnYW1lKTtcbiAgICBcbiAgICAvLyBhZGQgdGhlIGdhbWUgdG8gdGhlIHVzZXJcbiAgICBkYXRhYmFzZS5yZWYoXCJ1c2Vycy9cIiArIGF1dGguY3VycmVudFVzZXI/LnVpZCArIFwiL2dhbWVzXCIpLmNoaWxkKHJlZmVyZW5jZS5rZXkpLnNldCh0cnVlKTtcbiAgICBcbiAgfTtcblxuICAvLyB0YWtlcyBhIGdhbWUgaWQgcGFzc2VkIGluIGJ5IHJlZmVyZW5jZSBhbmQgcmV0dXJucyB0aGUgZ2FtZSBhcyBhIEdhbWUgb2JqZWN0XG4gIGNvbnN0IGNyZWF0ZUdhbWVGcm9tRmlyZWJhc2UgPSBhc3luYyAoKSA9PiB7XG4gICAgZGF0YWJhc2VcbiAgICAgIC5yZWYoXCIvXCIpXG4gICAgICAub25jZShcInZhbHVlXCIpXG4gICAgICAudGhlbigocmVzKSA9PiB0cmFuc2Zvcm1Gcm9tRmlyZWJhc2UocmVzLnZhbCgpKSlcbiAgICAgIC50aGVuKCh2YWx1ZTogR2FtZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZS5nZXRUZWFtTmFtZXMoKSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+V2VsY29tZSB0byB0aGUgZ2FtZSBsaXN0PC9kaXY+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FkZEdhbWV9PlRyeSBtZS48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gb25DbGljaz17Y3JlYXRlR2FtZUZyb21GaXJlYmFzZX0+VGVzdCBhZGQgZnJvbSBmaXJlYmFzZTwvQnV0dG9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/game/list.tsx\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI/ZmFhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAvQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Button\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });