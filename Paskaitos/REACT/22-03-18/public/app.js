/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_students__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/students */ "./src/modules/students.js");

console.log(_modules_students__WEBPACK_IMPORTED_MODULE_0__["default"]); // let list = document.createElement('ul');
// document.getElementsByTagName('body')[0].appendChild(list);
// for(let i = 0; i < students.length; i++){
//     let list_item = document.createElement('li');
//     list_item.innerText = students[i].name;
//     document.getElementsByTagName('ul')[0].appendChild(list_item);
// }

/*
Išvesti studentus HTML sąraše
*/
//Template literals

var name = "Jonas";
var lname = "Jonaitis";
var kiekis = 12;
var kaina = 14;
console.log('Labas, mano vardas' + name + ', o pavarde' + lname);
console.log("Mano vardas ".concat(name, ", o pavarde ").concat(lname));
console.log("Suma yra: ".concat(kiekis * kaina)); //Object destructing
//Array

var kiekis2 = 12,
    pavadinimas = 'Kompiuteris',
    kaina2 = 123.456;
kiekis2 = 14;
console.log(kaina2);
console.log(kiekis2); //Object

var student = {
  id: 5,
  firstName: 'Karolis',
  lname: 'Petraitis',
  average: 8
};
var id = student.id,
    fn = student.firstName,
    ln = student.lname;
console.log(fn); //for of, for in

var items = [1, true, 'Ieva'];

for (var _i = 0, _items = items; _i < _items.length; _i++) {
  var element = _items[_i];
  //'in' isveda indeksus, 'of' naudojam tik su masyvais
  console.log(element);
}

for (var _element in items) {
  console.log(items[_element]);
}

var students2 = [{
  id: 1,
  firstName: 'Jonas',
  lname: 'Jonaitis',
  school: 'BIT'
}, {
  id: 2,
  firstName: 'Petras',
  lname: 'Petraitis',
  school: 'BIT'
}, {
  id: 3,
  firstName: 'Vardenis',
  lname: 'Pavardenis',
  school: 'BIT'
}];

for (var _i2 = 0, _students = students2; _i2 < _students.length; _i2++) {
  var _student = _students[_i2];
  console.log(_student);
}

for (var _i3 = 0, _students2 = students2; _i3 < _students2.length; _i3++) {
  var _student2 = _students2[_i3];

  //galim naudoti of nes turim objektu masyva
  for (var studentData in _student2) {
    //naudojam 'in' nes dirbam su objektais, paima object keys
    console.log(_student2[studentData]);
  }
}

var students3 = [{
  id: 1,
  firstName: 'Jonas',
  lname: 'Jonaitis',
  shool: 'BIT',
  subjects: {
    js: 10,
    react: 8,
    vue: 5
  }
}, {
  id: 2,
  firstName: 'Petras',
  lname: 'Petraitis',
  shool: 'BIT',
  subjects: {
    js: 6,
    react: 5,
    vue: 2
  }
}, {
  id: 3,
  firstName: 'Vardenis',
  lname: 'Pavardenis',
  shool: 'BIT',
  subjects: {
    js: 10,
    react: 10,
    vue: 7
  }
}];

for (var _i4 = 0, _students3 = students3; _i4 < _students3.length; _i4++) {
  var _student3 = _students3[_i4];

  for (var _studentData in _student3) {
    // console.log(student[studentData]);
    if (_studentData == 'subjects') {
      console.log('Mokomieji dalykai:');

      for (var subject in _student3[_studentData]) {
        console.log("".concat(subject, ": ").concat(_student3[_studentData][subject]));
      }
    } else {
      console.log(_student3[_studentData]);
    }
  }
} //Spread operator


function sum(first, second) {
  console.log(first + second);
}

sum(12, 14);

function sum2() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  var total = numbers.reduce(function (x, y) {
    return x + y;
  });
  console.log(total);
}

sum2(12, 45, 78, 56, 14, 78); //Scopes(galiojimo sritis): globalus, funkcijos, bloko {}

var count = 13; //globalus scope, globaliam bloke

if (count) {
  var _count = 12;
} else {
  var _count2 = 18;
}

console.log(count);
var data2 = ['IBM', 'APPLE', 'DELL'];

for (var i = 0; i < data2.length; i++) {
  // let block scope, var netiktu
  for (var _i5 = 0; _i5 < data2.length; _i5++) {// var netiktu double deklaration
  }
}

function sum3() {
  var test = 'string'; //funkcijos scope

  return test;
} //Includes


var data = ['Ieva', 'Tomas', 'Karolis'];

if (data.includes('Tomas')) {
  console.log('Kontaktas surastas');
} else {
  console.log('Kontaktas nerastas');
} //self invoking function, pati save kviecia, uzdaro koda savyje, del security naudojama.


(function () {
  console.log('testas');
})();

/***/ }),

/***/ "./src/modules/students.js":
/*!*********************************!*\
  !*** ./src/modules/students.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var students = [{
  id: 1,
  name: 'Jonas'
}, {
  id: 2,
  name: 'Petras'
}, {
  id: 3,
  name: 'Vardenis'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (students);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_22_03_18"] = self["webpackChunk_22_03_18"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;