/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/crud/datatables/basic/basic.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/crud/datatables/basic/basic.js":
/*!*************************************************************!*\
  !*** ../src/assets/js/pages/crud/datatables/basic/basic.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar KTDatatablesBasicBasic = function() {\n\n\tvar initTable1 = function() {\n\t\tvar table = $('#kt_table_1');\n\n\t\t// begin first table\n\t\ttable.DataTable({\n\t\t\tresponsive: true,\n\n\t\t\t// DOM Layout settings\n\t\t\tdom: `<'row'<'col-sm-12'tr>>\n\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,\n\n\t\t\tlengthMenu: [5, 10, 25, 50],\n\n\t\t\tpageLength: 10,\n\n\t\t\tlanguage: {\n\t\t\t\t'lengthMenu': 'Display _MENU_',\n\t\t\t},\n\n\t\t\t// Order settings\n\t\t\torder: [[1, 'desc']],\n\n\t\t\theaderCallback: function(thead, data, start, end, display) {\n\t\t\t\tthead.getElementsByTagName('th')[0].innerHTML = `\n                    <label class=\"kt-checkbox kt-checkbox--single kt-checkbox--solid\">\n                        <input type=\"checkbox\" value=\"\" class=\"kt-group-checkable\">\n                        <span></span>\n                    </label>`;\n\t\t\t},\n\n\t\t\tcolumnDefs: [\n\t\t\t\t{\n\t\t\t\t\ttargets: 0,\n\t\t\t\t\twidth: '30px',\n\t\t\t\t\tclassName: 'dt-right',\n\t\t\t\t\torderable: false,\n\t\t\t\t\trender: function(data, type, full, meta) {\n\t\t\t\t\t\treturn `\n                        <label class=\"kt-checkbox kt-checkbox--single kt-checkbox--solid\">\n                            <input type=\"checkbox\" value=\"\" class=\"kt-checkable\">\n                            <span></span>\n                        </label>`;\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\ttargets: -1,\n\t\t\t\t\ttitle: 'Actions',\n\t\t\t\t\torderable: false,\n\t\t\t\t\trender: function(data, type, full, meta) {\n\t\t\t\t\t\treturn `\n                        <span class=\"dropdown\">\n                            <a href=\"#\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                              <i class=\"la la-ellipsis-h\"></i>\n                            </a>\n                            <div class=\"dropdown-menu dropdown-menu-right\">\n                                <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a>\n                                <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a>\n                                <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-print\"></i> Generate Report</a>\n                            </div>\n                        </span>\n                        <a href=\"#\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" title=\"View\">\n                          <i class=\"la la-edit\"></i>\n                        </a>`;\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\ttargets: 8,\n\t\t\t\t\trender: function(data, type, full, meta) {\n\t\t\t\t\t\tvar status = {\n\t\t\t\t\t\t\t1: {'title': 'Pending', 'class': 'kt-badge--brand'},\n\t\t\t\t\t\t\t2: {'title': 'Delivered', 'class': ' kt-badge--danger'},\n\t\t\t\t\t\t\t3: {'title': 'Canceled', 'class': ' kt-badge--primary'},\n\t\t\t\t\t\t\t4: {'title': 'Success', 'class': ' kt-badge--success'},\n\t\t\t\t\t\t\t5: {'title': 'Info', 'class': ' kt-badge--info'},\n\t\t\t\t\t\t\t6: {'title': 'Danger', 'class': ' kt-badge--danger'},\n\t\t\t\t\t\t\t7: {'title': 'Warning', 'class': ' kt-badge--warning'},\n\t\t\t\t\t\t};\n\t\t\t\t\t\tif (typeof status[data] === 'undefined') {\n\t\t\t\t\t\t\treturn data;\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn '<span class=\"kt-badge ' + status[data].class + ' kt-badge--inline kt-badge--pill\">' + status[data].title + '</span>';\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\ttargets: 9,\n\t\t\t\t\trender: function(data, type, full, meta) {\n\t\t\t\t\t\tvar status = {\n\t\t\t\t\t\t\t1: {'title': 'Online', 'state': 'danger'},\n\t\t\t\t\t\t\t2: {'title': 'Retail', 'state': 'primary'},\n\t\t\t\t\t\t\t3: {'title': 'Direct', 'state': 'success'},\n\t\t\t\t\t\t};\n\t\t\t\t\t\tif (typeof status[data] === 'undefined') {\n\t\t\t\t\t\t\treturn data;\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn '<span class=\"kt-badge kt-badge--' + status[data].state + ' kt-badge--dot\"></span>&nbsp;' +\n\t\t\t\t\t\t\t'<span class=\"kt-font-bold kt-font-' + status[data].state + '\">' + status[data].title + '</span>';\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t],\n\t\t});\n\n\t\ttable.on('change', '.kt-group-checkable', function() {\n\t\t\tvar set = $(this).closest('table').find('td:first-child .kt-checkable');\n\t\t\tvar checked = $(this).is(':checked');\n\n\t\t\t$(set).each(function() {\n\t\t\t\tif (checked) {\n\t\t\t\t\t$(this).prop('checked', true);\n\t\t\t\t\t$(this).closest('tr').addClass('active');\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\t$(this).prop('checked', false);\n\t\t\t\t\t$(this).closest('tr').removeClass('active');\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\n\t\ttable.on('change', 'tbody tr .kt-checkbox', function() {\n\t\t\t$(this).parents('tr').toggleClass('active');\n\t\t});\n\t};\n\n\treturn {\n\n\t\t//main function to initiate the module\n\t\tinit: function() {\n\t\t\tinitTable1();\n\t\t},\n\n\t};\n\n}();\n\njQuery(document).ready(function() {\n\tKTDatatablesBasicBasic.init();\n});\n\n\n//# sourceURL=webpack:///../src/assets/js/pages/crud/datatables/basic/basic.js?");

/***/ })

/******/ });