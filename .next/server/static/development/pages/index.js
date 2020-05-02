module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_ParticleParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ParticleParams */ "./src/ParticleParams.js");
/* harmony import */ var _src_HEAD_HEAD__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/HEAD/HEAD */ "./src/HEAD/HEAD.js");
/* harmony import */ var _src_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Navbar/Navbar */ "./src/Navbar/Navbar.js");
/* harmony import */ var _src_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Footer/Footer */ "./src/Footer/Footer.js");
/* harmony import */ var _src_Skills_Skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/Skills/Skills */ "./src/Skills/Skills.js");
/* harmony import */ var _src_Bio_Bio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/Bio/Bio */ "./src/Bio/Bio.js");
var _jsxFileName = "D:\\projects\\agnibesh.dev\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









if (false) {}

const index = () => {
  const Nav = [{
    name: "Home",
    link: "/"
  }, {
    name: "About",
    link: "/about"
  }, {
    name: "Contact",
    link: "/contact"
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // var elems = document.querySelectorAll('.sidenav');
    // var instances = M.Sidenav.init(elems);
    // document.addEventListener('DOMContentLoaded', function() {
    //     var elems = document.querySelectorAll('.parallax');
    //     var instance = M.Parallax.init(elems);
    // });
    M.AutoInit();
  }, []);
  return __jsx("div", {
    className: "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_src_HEAD_HEAD__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "A.dev",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(_src_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    NavItems: Nav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(_src_Bio_Bio__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_src_Skills_Skills__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }))), __jsx(_src_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }), __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    params: _src_ParticleParams__WEBPACK_IMPORTED_MODULE_2__["Params"],
    id: "particles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/Bio/Bio.js":
/*!************************!*\
  !*** ./src/Bio/Bio.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BioData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BioData */ "./src/Bio/BioData.js");
var _jsxFileName = "D:\\projects\\agnibesh.dev\\src\\Bio\\Bio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Bio = () => {
  return __jsx("div", {
    className: "row container valign-wrapper center jumbo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col l4 hide-on-med-and-down ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("img", {
    width: "95%",
    className: "circle responsive-img",
    src: _BioData__WEBPACK_IMPORTED_MODULE_1__["BioData"].img,
    alt: "myface",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col l8 center white-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("img", {
    width: "60%",
    className: "hide-on-large-only hide-on-extra-large-only circle responsive-img",
    style: {
      marginTop: "20px"
    },
    src: "/displaypicture.jpg",
    alt: "myface",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("h1", {
    className: "h1 font-caveat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, _BioData__WEBPACK_IMPORTED_MODULE_1__["BioData"].Name), __jsx("h4", {
    className: "h4 font-neucha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, " ", _BioData__WEBPACK_IMPORTED_MODULE_1__["BioData"].tagLine[0], "  ", __jsx("span", {
    className: "hide-on-small-and-down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 71
    }
  }, " | "), " ", _BioData__WEBPACK_IMPORTED_MODULE_1__["BioData"].tagLine[1], " "), _BioData__WEBPACK_IMPORTED_MODULE_1__["BioData"].paragraphs.map(para => {
    return __jsx("p", {
      className: "flow-text font-neucha ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }, para);
  }), __jsx("blockquote", {
    className: "black-border left-align flow-text font-neucha",
    style: {
      borderRadius: "3px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Go to Games are Apex Legends, Destiny 2, DirtyBomb ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 72
    }
  }), " ", __jsx("a", {
    className: "teal-text text-accent-1",
    href: "https://steamcommunity.com/id/MightyPhoenix7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 78
    }
  }, "Steam : MightyPhoenix7"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Bio);

/***/ }),

/***/ "./src/Bio/BioData.js":
/*!****************************!*\
  !*** ./src/Bio/BioData.js ***!
  \****************************/
/*! exports provided: BioData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioData", function() { return BioData; });
const BioData = {
  Name: "Agnibesh Mukherjee",
  img: "/displaypicture.jpg",
  tagLine: ["Computer Enthusiast", "JavaScript Ninja"],
  paragraphs: [`The tech-support guy, neighborhood Facebook hacker.
                    People refer to me as those, but I keep a keen interest in FullStack Development (MER/VN),
                    Machine Learning, and Network Security areas.
                    Actively strive in Hackathons and Techfest.
                    Won ACM East India Hackathon 2020 with my Fabulous Team.`, `Apart from these I am a very meticulous listener and a leisurely learner because of perfectionism,
                    have strong opinions mostly regarding everything.
                    Also, an INFJ if that makes sense...`]
};

/***/ }),

/***/ "./src/Footer/Footer.js":
/*!******************************!*\
  !*** ./src/Footer/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\projects\\agnibesh.dev\\src\\Footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("footer", {
    className: "page-footer black",
    style: {
      zIndex: "1000"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer-copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container center font-neucha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "Made with \u2764 by Agnibesh \xA9 2020")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/HEAD/HEAD.js":
/*!**************************!*\
  !*** ./src/HEAD/HEAD.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\projects\\agnibesh.dev\\src\\HEAD\\HEAD.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const HEAD = props => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#000",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "icon",
    href: "favicon-agnidev3.png",
    type: "image/png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, props.title), __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("script", {
    src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HEAD);

/***/ }),

/***/ "./src/Navbar/Navbar.js":
/*!******************************!*\
  !*** ./src/Navbar/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\projects\\agnibesh.dev\\src\\Navbar\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Navbar = props => {
  return __jsx("div", {
    style: {
      padding: "0px",
      margin: "0px",
      backgroundColor: "none",
      zIndex: "1000"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("nav", {
    className: "transparent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "nav-wrapper container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "brand-logo font-vt left glitch",
    style: {
      padding: "25px"
    },
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Agnibesh.DeV"), __jsx("a", {
    href: "#",
    "data-target": "mobile-demo",
    className: "sidenav-trigger right",
    style: {
      padding: "25px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "material-icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 114
    }
  }, "menu")), __jsx("ul", {
    id: "nav-mobile",
    className: "font-neucha flow-text right hide-on-med-and-down",
    style: {
      padding: "25px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, props.NavItems.map(item => {
    return __jsx("li", {
      key: item.name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 32
      }
    }, __jsx("a", {
      href: item.link,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 52
      }
    }, item.name));
  })))), __jsx("ul", {
    className: "sidenav font-neucha pinkgrad center white-text",
    id: "mobile-demo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      marginTop: "50%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: "font-vt brand-logo",
    style: {
      fontSize: "48px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, "Agnibesh.DeV")), __jsx("hr", {
    className: "center",
    style: {
      width: "80%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }), props.NavItems.map(item => {
    return __jsx("li", {
      key: item.name,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 32
      }
    }, __jsx("a", {
      className: "white-text",
      style: {
        fontSize: "32px",
        marginTop: "5px"
      },
      href: item.link,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 52
      }
    }, item.name));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/ParticleParams.js":
/*!*******************************!*\
  !*** ./src/ParticleParams.js ***!
  \*******************************/
/*! exports provided: Params */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Params", function() { return Params; });
const Params = {
  "absorbers": [],
  "background": {},
  "backgroundMask": {
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "detectRetina": true,
  "emitters": [],
  "fpsLimit": 60,
  "interactivity": {
    "detectsOn": "canvas",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "repulse"
      },
      "onDiv": {
        "elementId": "",
        "enable": false,
        "mode": []
      },
      "onHover": {
        "enable": true,
        "mode": "bubble",
        "parallax": {
          "enable": false,
          "force": 2,
          "smooth": 10
        }
      },
      "resize": true
    },
    "modes": {
      "absorbers": [],
      "bubble": {
        "distance": 250,
        "duration": 2,
        "opacity": 0,
        "size": 0
      },
      "connect": {
        "distance": 80,
        "lineLinked": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "emitters": [],
      "grab": {
        "distance": 400,
        "lineLinked": {
          "opacity": 1
        }
      },
      "push": {
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4,
        "speed": 1
      },
      "slow": {
        "factor": 3,
        "radius": 200
      }
    }
  },
  "particles": {
    "collisions": {
      "enable": false,
      "mode": "bounce"
    },
    "color": {
      "value": "#ffffff"
    },
    "lineLinked": {
      "blink": false,
      "color": {
        "value": "#ffffff"
      },
      "consent": false,
      "distance": 150,
      "enable": false,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "lime"
        },
        "enable": false
      },
      "width": 1
    },
    "move": {
      "attract": {
        "enable": false,
        "rotate": {
          "x": 600,
          "y": 600
        }
      },
      "direction": "none",
      "enable": true,
      "outMode": "out",
      "random": true,
      "speed": 1,
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fillColor": {
          "value": "#000000"
        }
      }
    },
    "number": {
      "density": {
        "enable": true,
        "area": 800
      },
      "limit": 0,
      "value": 160
    },
    "opacity": {
      "animation": {
        "enable": true,
        "minimumValue": 0,
        "speed": 1,
        "sync": false
      },
      "random": {
        "enable": true,
        "minimumValue": 1
      },
      "value": 1
    },
    "rotate": {
      "animation": {
        "enable": false,
        "speed": 0,
        "sync": false
      },
      "direction": "clockwise",
      "random": false,
      "value": 0
    },
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "options": {
        "character": {
          "fill": true,
          "close": true,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "char": {
          "fill": true,
          "close": true,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "polygon": {
          "fill": true,
          "close": true,
          "sides": 5
        },
        "star": {
          "fill": true,
          "close": true,
          "sides": 5
        }
      },
      "image": {
        "fill": true,
        "close": true,
        "height": 100,
        "replaceColor": true,
        "src": "https://cdn.matteobruni.it/images/particles/github.svg",
        "width": 100
      },
      "type": "circle"
    },
    "size": {
      "animation": {
        "enable": false,
        "minimumValue": 0.3,
        "speed": 4,
        "sync": false
      },
      "random": {
        "enable": true,
        "minimumValue": 1
      },
      "value": 3
    },
    "stroke": {
      "color": {
        "value": "#000000"
      },
      "width": 0,
      "opacity": 1
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    }
  },
  "pauseOnBlur": true,
  "polygon": {
    "draw": {
      "enable": false,
      "stroke": {
        "color": {
          "value": "#fff"
        },
        "width": 0.5,
        "opacity": 1
      }
    },
    "enable": false,
    "inline": {
      "arrangement": "one-per-point"
    },
    "move": {
      "radius": 10,
      "type": "path"
    },
    "scale": 1,
    "type": "none",
    "url": ""
  }
};

/***/ }),

/***/ "./src/Skills/SkillData.js":
/*!*********************************!*\
  !*** ./src/Skills/SkillData.js ***!
  \*********************************/
/*! exports provided: SkillData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillData", function() { return SkillData; });
const SkillData = [{
  skillName: "JavaScript (ES6)",
  imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  skillLevel: "Intermidiate",
  skillProgress: {
    width: "80%",
    color1: "determinate yellow darken-1",
    color2: "progress white"
  },
  grade: 4
}, {
  skillName: "React JS",
  imgLink: "https://codeguida.com/media/post_title/React.js_logo.svg_fjk2YxB.png",
  skillLevel: "Intermidiate",
  skillProgress: {
    width: "60%",
    color1: "determinate cyan",
    color2: "progress white"
  },
  grade: 5
}, {
  skillName: "Python3",
  imgLink: "https://pythonprogramming.net/static/images/finance/python-programming-language.png",
  skillLevel: "Intermidiate",
  skillProgress: {
    width: "75%",
    color1: "determinate light-blue",
    color2: "progress white"
  },
  grade: 4
}, {
  skillName: "C/C++",
  imgLink: "https://sdtimes.com/wp-content/uploads/2018/03/cpppp.png",
  skillLevel: "Advanced",
  skillProgress: {
    width: "70%",
    color1: "determinate deep-purple",
    color2: "progress white"
  },
  grade: 5
}, {
  skillName: "Firebase",
  imgLink: "https://avatars0.githubusercontent.com/u/1335026?v=3&s=280",
  skillLevel: "Beginner",
  skillProgress: {
    width: "45%",
    color1: "determinate amber darken-2",
    color2: "progress white"
  },
  grade: 3
}, {
  skillName: "MongoDB",
  imgLink: "https://media.glassdoor.com/sqll/433703/mongodb-squarelogo-1407269491216.png",
  skillLevel: "Advanced",
  skillProgress: {
    width: "85%",
    color1: "determinate green darken-1",
    color2: "progress white"
  },
  grade: 5
}, {
  skillName: "HTML5",
  imgLink: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
  skillLevel: "Expert",
  skillProgress: {
    width: "95%",
    color1: "determinate orange",
    color2: "progress white"
  },
  grade: 4
}, {
  skillName: "CSS3",
  imgLink: "https://maxcdn.icons8.com/Share/icon/Logos/css31600.png",
  skillLevel: "Expert",
  skillProgress: {
    width: "95%",
    color1: "determinate blue",
    color2: "progress white"
  },
  grade: 3
}];

/***/ }),

/***/ "./src/Skills/Skills.js":
/*!******************************!*\
  !*** ./src/Skills/Skills.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SkillData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SkillData */ "./src/Skills/SkillData.js");
var _jsxFileName = "D:\\projects\\agnibesh.dev\\src\\Skills\\Skills.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Skills = () => {
  return __jsx("div", {
    className: "row container valign-wrapper jumbo2 white-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "hide-on-med-and-down col l6 s12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "center font-caveat",
    style: {
      fontSize: "180px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Skills")), __jsx("div", {
    className: "col l6 s12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "hide-on-large-only hide-on-extra-large-only",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("h1", {
    style: {
      padding: "0",
      fontSize: "72px"
    },
    className: "center font-caveat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Skills")), __jsx("ul", {
    className: "collection transparent flow-text",
    style: {
      borderColor: "transparent",
      padding: "auto 20px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, _SkillData__WEBPACK_IMPORTED_MODULE_1__["SkillData"].map(skill => {
    return __jsx("li", {
      key: skill.skillName,
      className: "collection-item avatar transparent",
      style: {
        borderColor: "transparent"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: skill.imgLink,
      alt: skill.skillName,
      className: "circle responsive-img",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 33
      }
    }), __jsx("span", {
      className: "title font-neucha",
      style: {
        fontSize: "24px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 33
      }
    }, skill.skillName), __jsx("p", {
      className: "font-vt",
      style: {
        fontSize: "22px",
        padding: "5px 0px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 33
      }
    }, skill.skillLevel, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 119
      }
    }), __jsx("div", {
      className: skill.skillProgress.color2,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: skill.skillProgress.color1,
      style: {
        width: skill.skillProgress.width
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 41
      }
    }))), __jsx("a", {
      href: "#!",
      className: "secondary-content yellow-text text-darken-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 33
      }
    }, __jsx(Stars, {
      n: skill.grade,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 37
      }
    })));
  }))));
};

const Stars = props => {
  let content = [];

  for (let i = 0; i < props.n; i++) {
    content.push(__jsx("i", {
      className: "material-icons",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 22
      }
    }, "grade"));
  }

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\agnibesh.dev\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map