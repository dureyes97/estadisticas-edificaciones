System.register(["jimu-core/emotion","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/estadisticas-edificaciones/src/runtime/widget.tsx ***!
  \***********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/** @jsx jsx */

const Lucide = {
    BarChart2: (props) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, props, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "18", x2: "18", y1: "20", y2: "10" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "12", x2: "12", y1: "20", y2: "4" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "6", x2: "6", y1: "20", y2: "14" })] }))),
    PieChart: (props) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, props, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M22 12A10 10 0 0 0 12 2v10z" })] }))),
    Building: (props) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, props, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M9 22v-4h6v4" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M8 6h.01" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M16 6h.01" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M8 10h.01" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M16 10h.01" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M8 14h.01" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M16 14h.01" })] }))),
    MapPin: (props) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, props, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "12", cy: "10", r: "3" })] }))),
    Filter: (props) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", Object.assign({ width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, props, { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }) }))),
    RotateCcw: (props) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, props, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M3 3v5h5" })] }))),
    RefreshCw: (props) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, props, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M21 3v5h-5" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M8 16H3v5" })] }))),
    AlertTriangle: (props) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", Object.assign({ width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, props, { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "12", x2: "12", y1: "9", y2: "13" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "12", x2: "12.01", y1: "17", y2: "17" })] })))
};
const estiloDashboard = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@600;700&display=swap');

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #0f172a;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;

  .dash-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    overflow: hidden;
    position: relative;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  }

  /* ── Header ── */
  .dash-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0.9rem;
    background: #09090b;
    color: #ffffff;
    border-bottom: 1px solid #27272a;
    flex-shrink: 0;
  }

  .dash-brand {
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }

  .dash-logo-img {
    height: 28px;
    max-width: 120px;
    object-fit: contain;
    display: block;
  }

  .dash-title-wrap {
    display: flex;
    flex-direction: column;
  }

  .dash-pill {
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #93c5fd;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .dash-pill-dot {
    width: 5px;
    height: 5px;
    border-radius: 9999px;
    background: #10b981;
    box-shadow: 0 0 6px #10b981;
  }

  .dash-heading {
    font-size: 0.85rem;
    font-weight: 700;
    color: #f8fafc;
    letter-spacing: -0.015em;
    margin: 0;
    line-height: 1.2;
  }

  .dash-header-actions {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .btn-dash-icon {
    width: 28px;
    height: 28px;
    border-radius: 0.375rem;
    background: #18181b;
    border: 1px solid #27272a;
    color: #cbd5e1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .btn-dash-icon:hover {
    background: #27272a;
    color: #ffffff;
  }

  /* ── Barra de Filtros ── */
  .dash-filter-bar {
    padding: 0.45rem 0.85rem;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    flex-wrap: wrap;
    flex-shrink: 0;
  }

  .filter-select {
    height: 1.85rem;
    border-radius: 0.375rem;
    border: 1px solid #cbd5e1;
    background: #ffffff;
    color: #0f172a;
    font-size: 0.7rem;
    font-family: inherit;
    padding: 0 0.45rem;
    outline: none;
    cursor: pointer;
    flex: 1;
    min-width: 110px;
    transition: border-color 0.15s ease;
  }
  .filter-select:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 1px #2563eb;
  }

  .btn-reset-filters {
    height: 1.85rem;
    padding: 0 0.5rem;
    border-radius: 0.375rem;
    border: 1px solid #e2e8f0;
    background: #ffffff;
    color: #64748b;
    font-size: 0.68rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
  }
  .btn-reset-filters:hover {
    background: #f1f5f9;
    color: #0f172a;
  }

  /* ── KPI Cards Grid ── */
  .kpi-grid {
    padding: 0.6rem 0.85rem 0.4rem 0.85rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.45rem;
    flex-shrink: 0;
  }

  .kpi-card {
    padding: 0.45rem 0.55rem;
    border-radius: 0.5rem;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
    position: relative;
    overflow: hidden;
  }

  .kpi-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 3px;
  }
  .kpi-total::before { background: #2563eb; }
  .kpi-destroyed::before { background: #ef4444; }
  .kpi-damaged::before { background: #f97316; }
  .kpi-possible::before { background: #eab308; }

  .kpi-title {
    font-size: 0.6rem;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .kpi-value-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 4px;
  }

  .kpi-number {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.15rem;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.1;
  }

  .kpi-percent {
    font-size: 0.6rem;
    font-weight: 700;
    padding: 1px 4px;
    border-radius: 3px;
  }
  .percent-destroyed { background: #fee2e2; color: #b91c1c; }
  .percent-damaged { background: #ffedd5; color: #c2410c; }
  .percent-possible { background: #fef9c3; color: #a16207; }

  /* ── Tabs Selector ── */
  .diagram-tabs-bar {
    padding: 0 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    border-bottom: 1px solid #e2e8f0;
    background: #ffffff;
    flex-shrink: 0;
    overflow-x: auto;
  }

  .diagram-tab-btn {
    padding: 0.45rem 0.6rem;
    font-size: 0.72rem;
    font-weight: 500;
    color: #64748b;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
    transition: all 0.15s ease;
  }
  .diagram-tab-btn:hover {
    color: #0f172a;
  }
  .diagram-tab-btn.tab-active {
    color: #2563eb;
    font-weight: 700;
    border-bottom-color: #2563eb;
  }

  /* ── Canvas de Diagramas (Scrollable) ── */
  .dash-content-area {
    flex: 1 1 0%;
    overflow-y: auto;
    padding: 0.75rem 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-height: 0;
  }

  /* Barras Estilizadas */
  .chart-section-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .chart-card-title {
    font-size: 0.76rem;
    font-weight: 700;
    color: #1e293b;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bar-item-row {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .bar-info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.7rem;
  }

  .bar-label {
    font-weight: 600;
    color: #334155;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .bar-tag-dot {
    width: 8px;
    height: 8px;
    border-radius: 2px;
  }

  .bar-value {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 700;
    color: #0f172a;
  }

  .bar-track {
    width: 100%;
    height: 8px;
    background: #f1f5f9;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }

  .bar-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.4s ease-in-out;
  }

  /* Stacked segmented bar for municipalities */
  .stacked-bar-track {
    width: 100%;
    height: 10px;
    background: #f1f5f9;
    border-radius: 5px;
    display: flex;
    overflow: hidden;
  }
  .stacked-seg {
    height: 100%;
    transition: width 0.3s ease;
  }

  /* Donut SVG */
  .donut-chart-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 0.5rem 0;
  }

  .donut-legend {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    flex: 1;
    min-width: 140px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.68rem;
    gap: 6px;
  }

  /* Footer */
  .dash-footer {
    padding: 0.35rem 0.85rem;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    font-size: 0.64rem;
    color: #64748b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  }
`;
const DAMAGE_COLORS = {
    'Destroyed': '#ef4444',
    'Damaged': '#f97316',
    'Possibly damaged': '#eab308'
};
const DAMAGE_LABELS = {
    'Destroyed': 'Destruida',
    'Damaged': 'Daño Severo',
    'Possibly damaged': 'Posible Daño'
};
const DPTO_COLORS = ['#2563eb', '#7c3aed', '#059669', '#d97706', '#ec4899'];
const Widget = (props) => {
    var _a, _b;
    const serviceUrl = ((_a = props.config) === null || _a === void 0 ? void 0 : _a.serviceUrl) || 'https://eqchoco.gestiondelriesgo.gov.co/server/rest/services/Hosted/inventario_de_edificaciones_/FeatureServer/0';
    const title = ((_b = props.config) === null || _b === void 0 ? void 0 : _b.title) || 'Evaluación de Daños en Edificaciones';
    const [features, setFeatures] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState([]);
    const [isLoading, setIsLoading] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(true);
    const [activeTab, setActiveTab] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('damage');
    // Filtros
    const [selectedDpto, setSelectedDpto] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('TODOS');
    const [selectedMpio, setSelectedMpio] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('TODOS');
    const [selectedDamage, setSelectedDamage] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('TODOS');
    // Cargar datos oficiales de edificaciones
    const loadData = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        try {
            // Query con paginación para traer las 2160 edificaciones
            const queryUrl = `${serviceUrl}/query?where=1%3D1&outFields=fid,damage_gra,dpto_cnmbr,mpio_cnmbr,type,source&returnGeometry=false&f=json`;
            const res = yield fetch(queryUrl);
            if (res.ok) {
                const json = yield res.json();
                if (json.features) {
                    const rows = json.features.map((f) => ({
                        fid: f.attributes.fid || f.attributes.FID || f.attributes.OBJECTID,
                        damage_gra: (f.attributes.damage_gra || 'Possibly damaged').trim(),
                        dpto_cnmbr: (f.attributes.dpto_cnmbr || 'CHOCÓ').trim(),
                        mpio_cnmbr: (f.attributes.mpio_cnmbr || 'SIN ESPECIFICAR').trim(),
                        type: (f.attributes.type || 'Residencial').trim() || 'Residencial',
                        source: f.attributes.source
                    }));
                    setFeatures(rows);
                }
            }
        }
        catch (e) {
            console.warn('Error loading edificaciones features:', e);
        }
        finally {
            setIsLoading(false);
        }
    }), [serviceUrl]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        loadData();
    }, [loadData]);
    // Listas únicas para selectores
    const dptoList = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        const set = new Set(features.map(f => f.dpto_cnmbr));
        return Array.from(set).filter(Boolean).sort();
    }, [features]);
    const mpioList = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        let subset = features;
        if (selectedDpto !== 'TODOS') {
            subset = subset.filter(f => f.dpto_cnmbr === selectedDpto);
        }
        const set = new Set(subset.map(f => f.mpio_cnmbr));
        return Array.from(set).filter(Boolean).sort();
    }, [features, selectedDpto]);
    // Registros filtrados
    const filteredRecords = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        return features.filter(f => {
            if (selectedDpto !== 'TODOS' && f.dpto_cnmbr !== selectedDpto)
                return false;
            if (selectedMpio !== 'TODOS' && f.mpio_cnmbr !== selectedMpio)
                return false;
            if (selectedDamage !== 'TODOS' && f.damage_gra !== selectedDamage)
                return false;
            return true;
        });
    }, [features, selectedDpto, selectedMpio, selectedDamage]);
    // Métricas Totales y por Daño
    const totalCount = filteredRecords.length;
    const destroyedCount = filteredRecords.filter(f => f.damage_gra === 'Destroyed').length;
    const damagedCount = filteredRecords.filter(f => f.damage_gra === 'Damaged').length;
    const possibleCount = filteredRecords.filter(f => f.damage_gra === 'Possibly damaged').length;
    const destroyedPct = totalCount > 0 ? ((destroyedCount / totalCount) * 100).toFixed(1) : '0';
    const damagedPct = totalCount > 0 ? ((damagedCount / totalCount) * 100).toFixed(1) : '0';
    const possiblePct = totalCount > 0 ? ((possibleCount / totalCount) * 100).toFixed(1) : '0';
    // Agrupación por Departamento
    const dptoStats = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        const counts = {};
        filteredRecords.forEach(f => {
            counts[f.dpto_cnmbr] = (counts[f.dpto_cnmbr] || 0) + 1;
        });
        return Object.entries(counts)
            .map(([name, count]) => ({ name, count, pct: totalCount > 0 ? ((count / totalCount) * 100).toFixed(1) : '0' }))
            .sort((a, b) => b.count - a.count);
    }, [filteredRecords, totalCount]);
    // Agrupación por Municipio (Top 12)
    const mpioStats = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        const groups = {};
        filteredRecords.forEach(f => {
            if (!groups[f.mpio_cnmbr]) {
                groups[f.mpio_cnmbr] = { total: 0, destroyed: 0, damaged: 0, possible: 0 };
            }
            groups[f.mpio_cnmbr].total += 1;
            if (f.damage_gra === 'Destroyed')
                groups[f.mpio_cnmbr].destroyed += 1;
            else if (f.damage_gra === 'Damaged')
                groups[f.mpio_cnmbr].damaged += 1;
            else
                groups[f.mpio_cnmbr].possible += 1;
        });
        return Object.entries(groups)
            .map(([name, data]) => (Object.assign(Object.assign({ name }, data), { pct: totalCount > 0 ? ((data.total / totalCount) * 100).toFixed(1) : '0' })))
            .sort((a, b) => b.total - a.total);
    }, [filteredRecords, totalCount]);
    // Agrupación por Tipología
    const typeStats = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        const counts = {};
        filteredRecords.forEach(f => {
            let t = f.type || 'Residencial';
            if (t === ' ' || t === 'No identificado' || t === 'otro')
                t = 'Residencial / Mixto';
            counts[t] = (counts[t] || 0) + 1;
        });
        return Object.entries(counts)
            .map(([name, count]) => ({ name, count, pct: totalCount > 0 ? ((count / totalCount) * 100).toFixed(1) : '0' }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 8);
    }, [filteredRecords, totalCount]);
    const resetFilters = () => {
        setSelectedDpto('TODOS');
        setSelectedMpio('TODOS');
        setSelectedDamage('TODOS');
    };
    // Generador de Donut SVG
    const renderDonutChart = () => {
        if (dptoStats.length === 0)
            return null;
        let cumulativeAngle = 0;
        const size = 120;
        const center = size / 2;
        const radius = 46;
        const strokeWidth = 18;
        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, children: [dptoStats.map((d, idx) => {
                    const fraction = totalCount > 0 ? d.count / totalCount : 0;
                    const strokeDasharray = `${fraction * 2 * Math.PI * radius} ${2 * Math.PI * radius}`;
                    const strokeDashoffset = -cumulativeAngle * 2 * Math.PI * radius;
                    cumulativeAngle += fraction;
                    const color = DPTO_COLORS[idx % DPTO_COLORS.length];
                    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: center, cy: center, r: radius, fill: "transparent", stroke: color, strokeWidth: strokeWidth, strokeDasharray: strokeDasharray, strokeDashoffset: strokeDashoffset, transform: `rotate(-90 ${center} ${center})` }, d.name));
                }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", { x: center, y: center - 3, textAnchor: "middle", fontSize: "12", fontWeight: "800", fill: "#0f172a", fontFamily: "'JetBrains Mono', monospace", children: totalCount }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", { x: center, y: center + 11, textAnchor: "middle", fontSize: "7", fontWeight: "600", fill: "#64748b", children: "TOTAL" })] }));
    };
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: estiloDashboard, className: "jimu-widget", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "dash-container", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", { className: "dash-header", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "dash-brand", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: "https://eqchoco.gestiondelriesgo.gov.co/portal/sharing/rest/content/items/90af96c4ec1c46e9b47a691548365763/data", alt: "Logo UNGRD", className: "dash-logo-img", onError: e => { e.target.style.display = 'none'; } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "dash-title-wrap", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "dash-pill", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "dash-pill-dot" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "UNGRD \u2022 CHOC\u00D3 S\u00CDSMICO" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { className: "dash-heading", children: title })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "dash-header-actions", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn-dash-icon", onClick: loadData, title: "Recargar datos", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Lucide.RefreshCw, {}) }) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "dash-filter-bar", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { className: "filter-select", value: selectedDpto, onChange: e => {
                                setSelectedDpto(e.target.value);
                                setSelectedMpio('TODOS');
                            }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "TODOS", children: "\uD83D\uDCCD Depto: Todos" }), dptoList.map(d => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: d, children: d }, d)))] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { className: "filter-select", value: selectedMpio, onChange: e => setSelectedMpio(e.target.value), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "TODOS", children: "\uD83C\uDFD9\uFE0F Mpio: Todos" }), mpioList.map(m => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: m, children: m }, m)))] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { className: "filter-select", value: selectedDamage, onChange: e => setSelectedDamage(e.target.value), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "TODOS", children: "\u26A0\uFE0F Da\u00F1o: Todos" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "Destroyed", children: "\uD83D\uDD34 Destruidas" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "Damaged", children: "\uD83D\uDFE0 Da\u00F1o Severo" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "Possibly damaged", children: "\uD83D\uDFE1 Posible Da\u00F1o" })] }), (selectedDpto !== 'TODOS' || selectedMpio !== 'TODOS' || selectedDamage !== 'TODOS') && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: "btn-reset-filters", onClick: resetFilters, title: "Limpiar todos los filtros", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Lucide.RotateCcw, {}), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Limpiar" })] }))] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-grid", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-card kpi-total", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "kpi-title", children: "Evaluadas" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-value-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "kpi-number", children: totalCount }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '0.6rem', color: '#64748b' }, children: "100%" })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-card kpi-destroyed", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "kpi-title", style: { color: '#b91c1c' }, children: "Destruidas" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-value-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "kpi-number", style: { color: '#ef4444' }, children: destroyedCount }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "kpi-percent percent-destroyed", children: [destroyedPct, "%"] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-card kpi-damaged", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "kpi-title", style: { color: '#c2410c' }, children: "Da\u00F1adas" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-value-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "kpi-number", style: { color: '#f97316' }, children: damagedCount }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "kpi-percent percent-damaged", children: [damagedPct, "%"] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-card kpi-possible", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "kpi-title", style: { color: '#a16207' }, children: "Posible Da\u00F1o" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-value-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "kpi-number", style: { color: '#eab308' }, children: possibleCount }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "kpi-percent percent-possible", children: [possiblePct, "%"] })] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "diagram-tabs-bar", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: `diagram-tab-btn ${activeTab === 'damage' ? 'tab-active' : ''}`, onClick: () => setActiveTab('damage'), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Lucide.BarChart2, {}), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Severidad del Da\u00F1o" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: `diagram-tab-btn ${activeTab === 'dpto' ? 'tab-active' : ''}`, onClick: () => setActiveTab('dpto'), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Lucide.PieChart, {}), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Por Departamento" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: `diagram-tab-btn ${activeTab === 'mpio' ? 'tab-active' : ''}`, onClick: () => setActiveTab('mpio'), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Lucide.MapPin, {}), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Ranking Municipios" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: `diagram-tab-btn ${activeTab === 'type' ? 'tab-active' : ''}`, onClick: () => setActiveTab('type'), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Lucide.Building, {}), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Tipolog\u00EDa / Uso" })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "dash-content-area", children: [activeTab === 'damage' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "chart-section-card", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "chart-card-title", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Distribuci\u00F3n por Severidad del Da\u00F1o" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { fontSize: '0.65rem', color: '#64748b' }, children: [totalCount, " edificaciones"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "bar-item-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "bar-info-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "bar-label", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "bar-tag-dot", style: { background: DAMAGE_COLORS['Destroyed'] } }), "Destruidas (Colapso Total / Inhabitable)"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "bar-value", children: [destroyedCount, " (", destroyedPct, "%)"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "bar-track", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "bar-fill", style: { width: `${destroyedPct}%`, background: DAMAGE_COLORS['Destroyed'] } }) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "bar-item-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "bar-info-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "bar-label", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "bar-tag-dot", style: { background: DAMAGE_COLORS['Damaged'] } }), "Da\u00F1adas (Afectaci\u00F3n Estructural Severa)"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "bar-value", children: [damagedCount, " (", damagedPct, "%)"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "bar-track", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "bar-fill", style: { width: `${damagedPct}%`, background: DAMAGE_COLORS['Damaged'] } }) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "bar-item-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "bar-info-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "bar-label", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "bar-tag-dot", style: { background: DAMAGE_COLORS['Possibly damaged'] } }), "Posible Da\u00F1o (Fisuras / Da\u00F1o No Estructural)"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "bar-value", children: [possibleCount, " (", possiblePct, "%)"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "bar-track", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "bar-fill", style: { width: `${possiblePct}%`, background: DAMAGE_COLORS['Possibly damaged'] } }) })] })] })), activeTab === 'dpto' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "chart-section-card", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "chart-card-title", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Afectaci\u00F3n por Departamento" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { fontSize: '0.65rem', color: '#64748b' }, children: [dptoStats.length, " Departamentos"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "donut-chart-box", children: [renderDonutChart(), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "donut-legend", children: dptoStats.map((d, idx) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "legend-item", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "bar-tag-dot", style: { background: DPTO_COLORS[idx % DPTO_COLORS.length] } }), d.name] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "bar-value", children: [d.count, " (", d.pct, "%)"] })] }, d.name))) })] })] })), activeTab === 'mpio' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "chart-section-card", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "chart-card-title", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Top Municipios con Mayor N\u00FAmero de Edificaciones" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '0.65rem', color: '#64748b' }, children: "Desglose por severidad" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.6rem' }, children: mpioStats.map(m => {
                                        var _a;
                                        const maxMpio = ((_a = mpioStats[0]) === null || _a === void 0 ? void 0 : _a.total) || 1;
                                        const totalPctOfMax = (m.total / maxMpio) * 100;
                                        const destSegPct = m.total > 0 ? (m.destroyed / m.total) * 100 : 0;
                                        const damSegPct = m.total > 0 ? (m.damaged / m.total) * 100 : 0;
                                        const posSegPct = m.total > 0 ? (m.possible / m.total) * 100 : 0;
                                        return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "bar-item-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "bar-info-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "bar-label", children: m.name }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "bar-value", children: [m.total, " ", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { fontSize: '0.6rem', color: '#64748b' }, children: ["(", m.pct, "%)"] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "bar-track", style: { height: '9px' }, children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { width: `${totalPctOfMax}%`, height: '100%', display: 'flex', borderRadius: '4px', overflow: 'hidden' }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: `${destSegPct}%`, background: DAMAGE_COLORS['Destroyed'] }, title: `Destruidas: ${m.destroyed}` }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: `${damSegPct}%`, background: DAMAGE_COLORS['Damaged'] }, title: `Dañadas: ${m.damaged}` }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: `${posSegPct}%`, background: DAMAGE_COLORS['Possibly damaged'] }, title: `Posible daño: ${m.possible}` })] }) })] }, m.name));
                                    }) })] })), activeTab === 'type' && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "chart-section-card", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "chart-card-title", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Clasificaci\u00F3n por Uso de la Edificaci\u00F3n" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: '0.65rem', color: '#64748b' }, children: "Tipolog\u00EDas clave" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.55rem' }, children: typeStats.map((t, idx) => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "bar-item-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "bar-info-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "bar-label", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "bar-tag-dot", style: { background: DPTO_COLORS[idx % DPTO_COLORS.length] } }), t.name] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "bar-value", children: [t.count, " (", t.pct, "%)"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "bar-track", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "bar-fill", style: { width: `${t.pct}%`, background: DPTO_COLORS[idx % DPTO_COLORS.length] } }) })] }, t.name))) })] }))] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", { className: "dash-footer", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "Fuente:" }), " Verificaci\u00F3n UNGRD / INGV \u2022 ", (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "Capa:" }), " Inventario Consolidado"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "Total Filtrado:" }), " ", totalCount, " / ", features.length] })] })] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9lc3RhZGlzdGljYXMtZWRpZmljYWNpb25lcy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELGVBQWU7QUFDaUQ7QUFZaEUsTUFBTSxNQUFNLEdBQUc7SUFDYixTQUFTLEVBQUUsQ0FBQyxLQUFXLEVBQUUsRUFBRSxDQUFDLENBQzFCLHdGQUFLLEtBQUssRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsR0FBRyxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE9BQU8sSUFBSyxLQUFLLGVBQ3RKLDBFQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxJQUFJLEdBQUUsNEVBQU0sRUFBRSxFQUFDLElBQUks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QywwRUFBSyxTQUFTLEVBQUMsY0FBYyxhQUMzQiwyRUFBTSxTQUFTLEVBQUMsV0FBVyxhQUN6QiwwRUFBTSxTQUFTLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFJLEVBQzdGLENBQUMsQ0FBQyxJQUFJLElBQ0YsRUFDUCwyRUFBTSxTQUFTLEVBQUMsV0FBVyxhQUFFLENBQUMsQ0FBQyxLQUFLLFFBQUksQ0FBQyxDQUFDLEdBQUcsVUFBVSxJQUNuRCxFQUNOLHlFQUFLLFNBQVMsRUFBQyxXQUFXLFlBQ3hCLHlFQUFLLFNBQVMsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFJLEdBQzFHLEtBVkUsQ0FBQyxDQUFDLElBQUksQ0FXVixDQUNQLENBQUMsR0FDRSxJQUNGLENBQ1AsSUFFRyxFQUdOLDZFQUFRLFNBQVMsRUFBQyxhQUFhLGFBQzdCLHFGQUNFLGtHQUF3Qiw2Q0FBNkIsZ0dBQXNCLCtCQUN2RSxFQUNOLHFGQUNFLDBHQUFnQyxPQUFFLFVBQVUsU0FBSyxRQUFRLENBQUMsTUFBTSxJQUM1RCxJQUNDLElBRUwsR0FDRixDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZXN0YWRpc3RpY2FzLWVkaWZpY2FjaW9uZXMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBqc3gsIGNzcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmludGVyZmFjZSBGZWF0dXJlUmVjb3JkIHtcbiAgZmlkOiBudW1iZXJcbiAgZGFtYWdlX2dyYTogc3RyaW5nXG4gIGRwdG9fY25tYnI6IHN0cmluZ1xuICBtcGlvX2NubWJyOiBzdHJpbmdcbiAgdHlwZTogc3RyaW5nXG4gIHNvdXJjZT86IHN0cmluZ1xufVxuXG5jb25zdCBMdWNpZGUgPSB7XG4gIEJhckNoYXJ0MjogKHByb3BzPzogYW55KSA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgey4uLnByb3BzfT5cbiAgICAgIDxsaW5lIHgxPVwiMThcIiB4Mj1cIjE4XCIgeTE9XCIyMFwiIHkyPVwiMTBcIi8+PGxpbmUgeDE9XCIxMlwiIHgyPVwiMTJcIiB5MT1cIjIwXCIgeTI9XCI0XCIvPjxsaW5lIHgxPVwiNlwiIHgyPVwiNlwiIHkxPVwiMjBcIiB5Mj1cIjE0XCIvPlxuICAgIDwvc3ZnPlxuICApLFxuICBQaWVDaGFydDogKHByb3BzPzogYW55KSA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoIGQ9XCJNMjEuMjEgMTUuODlBMTAgMTAgMCAxIDEgOCAyLjgzXCIvPjxwYXRoIGQ9XCJNMjIgMTJBMTAgMTAgMCAwIDAgMTIgMnYxMHpcIi8+XG4gICAgPC9zdmc+XG4gICksXG4gIEJ1aWxkaW5nOiAocHJvcHM/OiBhbnkpID0+IChcbiAgICA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiB7Li4ucHJvcHN9PlxuICAgICAgPHJlY3Qgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjIwXCIgeD1cIjRcIiB5PVwiMlwiIHJ4PVwiMlwiIHJ5PVwiMlwiLz48cGF0aCBkPVwiTTkgMjJ2LTRoNnY0XCIvPjxwYXRoIGQ9XCJNOCA2aC4wMVwiLz48cGF0aCBkPVwiTTE2IDZoLjAxXCIvPjxwYXRoIGQ9XCJNOCAxMGguMDFcIi8+PHBhdGggZD1cIk0xNiAxMGguMDFcIi8+PHBhdGggZD1cIk04IDE0aC4wMVwiLz48cGF0aCBkPVwiTTE2IDE0aC4wMVwiLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgTWFwUGluOiAocHJvcHM/OiBhbnkpID0+IChcbiAgICA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiB7Li4ucHJvcHN9PlxuICAgICAgPHBhdGggZD1cIk0yMCAxMGMwIDYtOCAxMi04IDEycy04LTYtOC0xMmE4IDggMCAwIDEgMTYgMFpcIi8+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMFwiIHI9XCIzXCIvPlxuICAgIDwvc3ZnPlxuICApLFxuICBGaWx0ZXI6IChwcm9wcz86IGFueSkgPT4gKFxuICAgIDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHsuLi5wcm9wc30+XG4gICAgICA8cG9seWdvbiBwb2ludHM9XCIyMiAzIDIgMyAxMCAxMi40NiAxMCAxOSAxNCAyMSAxNCAxMi40NiAyMiAzXCIvPlxuICAgIDwvc3ZnPlxuICApLFxuICBSb3RhdGVDY3c6IChwcm9wcz86IGFueSkgPT4gKFxuICAgIDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHsuLi5wcm9wc30+XG4gICAgICA8cGF0aCBkPVwiTTMgMTJhOSA5IDAgMSAwIDktOSA5Ljc1IDkuNzUgMCAwIDAtNi43NCAyLjc0TDMgOFwiLz48cGF0aCBkPVwiTTMgM3Y1aDVcIi8+XG4gICAgPC9zdmc+XG4gICksXG4gIFJlZnJlc2hDdzogKHByb3BzPzogYW55KSA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjEzXCIgaGVpZ2h0PVwiMTNcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoIGQ9XCJNMyAxMmE5IDkgMCAwIDEgOS05IDkuNzUgOS43NSAwIDAgMSA2Ljc0IDIuNzRMMjEgOFwiLz48cGF0aCBkPVwiTTIxIDN2NWgtNVwiLz48cGF0aCBkPVwiTTIxIDEyYTkgOSAwIDAgMS05IDkgOS43NSA5Ljc1IDAgMCAxLTYuNzQtMi43NEwzIDE2XCIvPjxwYXRoIGQ9XCJNOCAxNkgzdjVcIi8+XG4gICAgPC9zdmc+XG4gICksXG4gIEFsZXJ0VHJpYW5nbGU6IChwcm9wcz86IGFueSkgPT4gKFxuICAgIDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHsuLi5wcm9wc30+XG4gICAgICA8cGF0aCBkPVwibTIxLjczIDE4LTgtMTRhMiAyIDAgMCAwLTMuNDggMGwtOCAxNEEyIDIgMCAwIDAgNCAyMWgxNmEyIDIgMCAwIDAgMS43My0zWlwiLz48bGluZSB4MT1cIjEyXCIgeDI9XCIxMlwiIHkxPVwiOVwiIHkyPVwiMTNcIi8+PGxpbmUgeDE9XCIxMlwiIHgyPVwiMTIuMDFcIiB5MT1cIjE3XCIgeTI9XCIxN1wiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5jb25zdCBlc3RpbG9EYXNoYm9hcmQgPSBjc3NgXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMCZmYW1pbHk9SmV0QnJhaW5zK01vbm86d2dodEA2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIC5kYXNoLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG5cbiAgLyog4pSA4pSAIEhlYWRlciDilIDilIAgKi9cbiAgLmRhc2gtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAuNnJlbSAwLjlyZW07XG4gICAgYmFja2dyb3VuZDogIzA5MDkwYjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI3MjcyYTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuXG4gIC5kYXNoLWJyYW5kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjY1cmVtO1xuICB9XG5cbiAgLmRhc2gtbG9nby1pbWcge1xuICAgIGhlaWdodDogMjhweDtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZGFzaC10aXRsZS13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuZGFzaC1waWxsIHtcbiAgICBmb250LXNpemU6IDAuNThyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM5M2M1ZmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNHB4O1xuICB9XG5cbiAgLmRhc2gtcGlsbC1kb3Qge1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgIGJhY2tncm91bmQ6ICMxMGI5ODE7XG4gICAgYm94LXNoYWRvdzogMCAwIDZweCAjMTBiOTgxO1xuICB9XG5cbiAgLmRhc2gtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICNmOGZhZmM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxNWVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG5cbiAgLmRhc2gtaGVhZGVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuMzVyZW07XG4gIH1cblxuICAuYnRuLWRhc2gtaWNvbiB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICAgIGJhY2tncm91bmQ6ICMxODE4MWI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI3MjcyYTtcbiAgICBjb2xvcjogI2NiZDVlMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICB9XG4gIC5idG4tZGFzaC1pY29uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjcyNzJhO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLyog4pSA4pSAIEJhcnJhIGRlIEZpbHRyb3Mg4pSA4pSAICovXG4gIC5kYXNoLWZpbHRlci1iYXIge1xuICAgIHBhZGRpbmc6IDAuNDVyZW0gMC44NXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNHJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAuZmlsdGVyLXNlbGVjdCB7XG4gICAgaGVpZ2h0OiAxLjg1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzBmMTcyYTtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAwIDAuNDVyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICB9XG4gIC5maWx0ZXItc2VsZWN0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMyNTYzZWI7XG4gIH1cblxuICAuYnRuLXJlc2V0LWZpbHRlcnMge1xuICAgIGhlaWdodDogMS44NXJlbTtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgY29sb3I6ICM2NDc0OGI7XG4gICAgZm9udC1zaXplOiAwLjY4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC5idG4tcmVzZXQtZmlsdGVyczpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICBjb2xvcjogIzBmMTcyYTtcbiAgfVxuXG4gIC8qIOKUgOKUgCBLUEkgQ2FyZHMgR3JpZCDilIDilIAgKi9cbiAgLmtwaS1ncmlkIHtcbiAgICBwYWRkaW5nOiAwLjZyZW0gMC44NXJlbSAwLjRyZW0gMC44NXJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgZ2FwOiAwLjQ1cmVtO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG5cbiAgLmtwaS1jYXJkIHtcbiAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuNTVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAua3BpLWNhcmQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogM3B4O1xuICB9XG4gIC5rcGktdG90YWw6OmJlZm9yZSB7IGJhY2tncm91bmQ6ICMyNTYzZWI7IH1cbiAgLmtwaS1kZXN0cm95ZWQ6OmJlZm9yZSB7IGJhY2tncm91bmQ6ICNlZjQ0NDQ7IH1cbiAgLmtwaS1kYW1hZ2VkOjpiZWZvcmUgeyBiYWNrZ3JvdW5kOiAjZjk3MzE2OyB9XG4gIC5rcGktcG9zc2libGU6OmJlZm9yZSB7IGJhY2tncm91bmQ6ICNlYWIzMDg7IH1cblxuICAua3BpLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgfVxuXG4gIC5rcGktdmFsdWUtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiA0cHg7XG4gIH1cblxuICAua3BpLW51bWJlciB7XG4gICAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubycsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogIzBmMTcyYTtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICB9XG5cbiAgLmtwaS1wZXJjZW50IHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IDFweCA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG4gIC5wZXJjZW50LWRlc3Ryb3llZCB7IGJhY2tncm91bmQ6ICNmZWUyZTI7IGNvbG9yOiAjYjkxYzFjOyB9XG4gIC5wZXJjZW50LWRhbWFnZWQgeyBiYWNrZ3JvdW5kOiAjZmZlZGQ1OyBjb2xvcjogI2MyNDEwYzsgfVxuICAucGVyY2VudC1wb3NzaWJsZSB7IGJhY2tncm91bmQ6ICNmZWY5YzM7IGNvbG9yOiAjYTE2MjA3OyB9XG5cbiAgLyog4pSA4pSAIFRhYnMgU2VsZWN0b3Ig4pSA4pSAICovXG4gIC5kaWFncmFtLXRhYnMtYmFyIHtcbiAgICBwYWRkaW5nOiAwIDAuODVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC4zNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cblxuICAuZGlhZ3JhbS10YWItYnRuIHtcbiAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuNnJlbTtcbiAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgfVxuICAuZGlhZ3JhbS10YWItYnRuOmhvdmVyIHtcbiAgICBjb2xvcjogIzBmMTcyYTtcbiAgfVxuICAuZGlhZ3JhbS10YWItYnRuLnRhYi1hY3RpdmUge1xuICAgIGNvbG9yOiAjMjU2M2ViO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI1NjNlYjtcbiAgfVxuXG4gIC8qIOKUgOKUgCBDYW52YXMgZGUgRGlhZ3JhbWFzIChTY3JvbGxhYmxlKSDilIDilIAgKi9cbiAgLmRhc2gtY29udGVudC1hcmVhIHtcbiAgICBmbGV4OiAxIDEgMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAuODVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC43NXJlbTtcbiAgICBtaW4taGVpZ2h0OiAwO1xuICB9XG5cbiAgLyogQmFycmFzIEVzdGlsaXphZGFzICovXG4gIC5jaGFydC1zZWN0aW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjZyZW07XG4gIH1cblxuICAuY2hhcnQtY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjc2cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMxZTI5M2I7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5iYXItaXRlbS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJweDtcbiAgfVxuXG4gIC5iYXItaW5mby1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gIH1cblxuICAuYmFyLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMzM0MTU1O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgfVxuXG4gIC5iYXItdGFnLWRvdCB7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cblxuICAuYmFyLXZhbHVlIHtcbiAgICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMwZjE3MmE7XG4gIH1cblxuICAuYmFyLXRyYWNrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5iYXItZmlsbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLyogU3RhY2tlZCBzZWdtZW50ZWQgYmFyIGZvciBtdW5pY2lwYWxpdGllcyAqL1xuICAuc3RhY2tlZC1iYXItdHJhY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnN0YWNrZWQtc2VnIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICB9XG5cbiAgLyogRG9udXQgU1ZHICovXG4gIC5kb251dC1jaGFydC1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBnYXA6IDFyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICB9XG5cbiAgLmRvbnV0LWxlZ2VuZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC4zNXJlbTtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMTQwcHg7XG4gIH1cblxuICAubGVnZW5kLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiAwLjY4cmVtO1xuICAgIGdhcDogNnB4O1xuICB9XG5cbiAgLyogRm9vdGVyICovXG4gIC5kYXNoLWZvb3RlciB7XG4gICAgcGFkZGluZzogMC4zNXJlbSAwLjg1cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgZm9udC1zaXplOiAwLjY0cmVtO1xuICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cbmBcblxuY29uc3QgREFNQUdFX0NPTE9SUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgJ0Rlc3Ryb3llZCc6ICcjZWY0NDQ0JyxcbiAgJ0RhbWFnZWQnOiAnI2Y5NzMxNicsXG4gICdQb3NzaWJseSBkYW1hZ2VkJzogJyNlYWIzMDgnXG59XG5cbmNvbnN0IERBTUFHRV9MQUJFTFM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICdEZXN0cm95ZWQnOiAnRGVzdHJ1aWRhJyxcbiAgJ0RhbWFnZWQnOiAnRGHDsW8gU2V2ZXJvJyxcbiAgJ1Bvc3NpYmx5IGRhbWFnZWQnOiAnUG9zaWJsZSBEYcOxbydcbn1cblxuY29uc3QgRFBUT19DT0xPUlMgPSBbJyMyNTYzZWInLCAnIzdjM2FlZCcsICcjMDU5NjY5JywgJyNkOTc3MDYnLCAnI2VjNDg5OSddXG5cbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KSA9PiB7XG4gIGNvbnN0IHNlcnZpY2VVcmwgPSBwcm9wcy5jb25maWc/LnNlcnZpY2VVcmwgfHwgJ2h0dHBzOi8vZXFjaG9jby5nZXN0aW9uZGVscmllc2dvLmdvdi5jby9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvaW52ZW50YXJpb19kZV9lZGlmaWNhY2lvbmVzXy9GZWF0dXJlU2VydmVyLzAnXG4gIGNvbnN0IHRpdGxlID0gcHJvcHMuY29uZmlnPy50aXRsZSB8fCAnRXZhbHVhY2nDs24gZGUgRGHDsW9zIGVuIEVkaWZpY2FjaW9uZXMnXG5cbiAgY29uc3QgW2ZlYXR1cmVzLCBzZXRGZWF0dXJlc10gPSBSZWFjdC51c2VTdGF0ZTxGZWF0dXJlUmVjb3JkW10+KFtdKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSlcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IFJlYWN0LnVzZVN0YXRlPCdkYW1hZ2UnIHwgJ2RwdG8nIHwgJ21waW8nIHwgJ3R5cGUnPignZGFtYWdlJylcblxuICAvLyBGaWx0cm9zXG4gIGNvbnN0IFtzZWxlY3RlZERwdG8sIHNldFNlbGVjdGVkRHB0b10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCdUT0RPUycpXG4gIGNvbnN0IFtzZWxlY3RlZE1waW8sIHNldFNlbGVjdGVkTXBpb10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCdUT0RPUycpXG4gIGNvbnN0IFtzZWxlY3RlZERhbWFnZSwgc2V0U2VsZWN0ZWREYW1hZ2VdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignVE9ET1MnKVxuXG4gIC8vIENhcmdhciBkYXRvcyBvZmljaWFsZXMgZGUgZWRpZmljYWNpb25lc1xuICBjb25zdCBsb2FkRGF0YSA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICB0cnkge1xuICAgICAgLy8gUXVlcnkgY29uIHBhZ2luYWNpw7NuIHBhcmEgdHJhZXIgbGFzIDIxNjAgZWRpZmljYWNpb25lc1xuICAgICAgY29uc3QgcXVlcnlVcmwgPSBgJHtzZXJ2aWNlVXJsfS9xdWVyeT93aGVyZT0xJTNEMSZvdXRGaWVsZHM9ZmlkLGRhbWFnZV9ncmEsZHB0b19jbm1icixtcGlvX2NubWJyLHR5cGUsc291cmNlJnJldHVybkdlb21ldHJ5PWZhbHNlJmY9anNvbmBcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHF1ZXJ5VXJsKVxuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICBpZiAoanNvbi5mZWF0dXJlcykge1xuICAgICAgICAgIGNvbnN0IHJvd3M6IEZlYXR1cmVSZWNvcmRbXSA9IGpzb24uZmVhdHVyZXMubWFwKChmOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBmaWQ6IGYuYXR0cmlidXRlcy5maWQgfHwgZi5hdHRyaWJ1dGVzLkZJRCB8fCBmLmF0dHJpYnV0ZXMuT0JKRUNUSUQsXG4gICAgICAgICAgICBkYW1hZ2VfZ3JhOiAoZi5hdHRyaWJ1dGVzLmRhbWFnZV9ncmEgfHwgJ1Bvc3NpYmx5IGRhbWFnZWQnKS50cmltKCksXG4gICAgICAgICAgICBkcHRvX2NubWJyOiAoZi5hdHRyaWJ1dGVzLmRwdG9fY25tYnIgfHwgJ0NIT0PDkycpLnRyaW0oKSxcbiAgICAgICAgICAgIG1waW9fY25tYnI6IChmLmF0dHJpYnV0ZXMubXBpb19jbm1iciB8fCAnU0lOIEVTUEVDSUZJQ0FSJykudHJpbSgpLFxuICAgICAgICAgICAgdHlwZTogKGYuYXR0cmlidXRlcy50eXBlIHx8ICdSZXNpZGVuY2lhbCcpLnRyaW0oKSB8fCAnUmVzaWRlbmNpYWwnLFxuICAgICAgICAgICAgc291cmNlOiBmLmF0dHJpYnV0ZXMuc291cmNlXG4gICAgICAgICAgfSkpXG4gICAgICAgICAgc2V0RmVhdHVyZXMocm93cylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignRXJyb3IgbG9hZGluZyBlZGlmaWNhY2lvbmVzIGZlYXR1cmVzOicsIGUpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9XG4gIH0sIFtzZXJ2aWNlVXJsXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWREYXRhKClcbiAgfSwgW2xvYWREYXRhXSlcblxuICAvLyBMaXN0YXMgw7puaWNhcyBwYXJhIHNlbGVjdG9yZXNcbiAgY29uc3QgZHB0b0xpc3QgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzZXQgPSBuZXcgU2V0KGZlYXR1cmVzLm1hcChmID0+IGYuZHB0b19jbm1icikpXG4gICAgcmV0dXJuIEFycmF5LmZyb20oc2V0KS5maWx0ZXIoQm9vbGVhbikuc29ydCgpXG4gIH0sIFtmZWF0dXJlc10pXG5cbiAgY29uc3QgbXBpb0xpc3QgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgc3Vic2V0ID0gZmVhdHVyZXNcbiAgICBpZiAoc2VsZWN0ZWREcHRvICE9PSAnVE9ET1MnKSB7XG4gICAgICBzdWJzZXQgPSBzdWJzZXQuZmlsdGVyKGYgPT4gZi5kcHRvX2NubWJyID09PSBzZWxlY3RlZERwdG8pXG4gICAgfVxuICAgIGNvbnN0IHNldCA9IG5ldyBTZXQoc3Vic2V0Lm1hcChmID0+IGYubXBpb19jbm1icikpXG4gICAgcmV0dXJuIEFycmF5LmZyb20oc2V0KS5maWx0ZXIoQm9vbGVhbikuc29ydCgpXG4gIH0sIFtmZWF0dXJlcywgc2VsZWN0ZWREcHRvXSlcblxuICAvLyBSZWdpc3Ryb3MgZmlsdHJhZG9zXG4gIGNvbnN0IGZpbHRlcmVkUmVjb3JkcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBmZWF0dXJlcy5maWx0ZXIoZiA9PiB7XG4gICAgICBpZiAoc2VsZWN0ZWREcHRvICE9PSAnVE9ET1MnICYmIGYuZHB0b19jbm1iciAhPT0gc2VsZWN0ZWREcHRvKSByZXR1cm4gZmFsc2VcbiAgICAgIGlmIChzZWxlY3RlZE1waW8gIT09ICdUT0RPUycgJiYgZi5tcGlvX2NubWJyICE9PSBzZWxlY3RlZE1waW8pIHJldHVybiBmYWxzZVxuICAgICAgaWYgKHNlbGVjdGVkRGFtYWdlICE9PSAnVE9ET1MnICYmIGYuZGFtYWdlX2dyYSAhPT0gc2VsZWN0ZWREYW1hZ2UpIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuICB9LCBbZmVhdHVyZXMsIHNlbGVjdGVkRHB0bywgc2VsZWN0ZWRNcGlvLCBzZWxlY3RlZERhbWFnZV0pXG5cbiAgLy8gTcOpdHJpY2FzIFRvdGFsZXMgeSBwb3IgRGHDsW9cbiAgY29uc3QgdG90YWxDb3VudCA9IGZpbHRlcmVkUmVjb3Jkcy5sZW5ndGhcbiAgY29uc3QgZGVzdHJveWVkQ291bnQgPSBmaWx0ZXJlZFJlY29yZHMuZmlsdGVyKGYgPT4gZi5kYW1hZ2VfZ3JhID09PSAnRGVzdHJveWVkJykubGVuZ3RoXG4gIGNvbnN0IGRhbWFnZWRDb3VudCA9IGZpbHRlcmVkUmVjb3Jkcy5maWx0ZXIoZiA9PiBmLmRhbWFnZV9ncmEgPT09ICdEYW1hZ2VkJykubGVuZ3RoXG4gIGNvbnN0IHBvc3NpYmxlQ291bnQgPSBmaWx0ZXJlZFJlY29yZHMuZmlsdGVyKGYgPT4gZi5kYW1hZ2VfZ3JhID09PSAnUG9zc2libHkgZGFtYWdlZCcpLmxlbmd0aFxuXG4gIGNvbnN0IGRlc3Ryb3llZFBjdCA9IHRvdGFsQ291bnQgPiAwID8gKChkZXN0cm95ZWRDb3VudCAvIHRvdGFsQ291bnQpICogMTAwKS50b0ZpeGVkKDEpIDogJzAnXG4gIGNvbnN0IGRhbWFnZWRQY3QgPSB0b3RhbENvdW50ID4gMCA/ICgoZGFtYWdlZENvdW50IC8gdG90YWxDb3VudCkgKiAxMDApLnRvRml4ZWQoMSkgOiAnMCdcbiAgY29uc3QgcG9zc2libGVQY3QgPSB0b3RhbENvdW50ID4gMCA/ICgocG9zc2libGVDb3VudCAvIHRvdGFsQ291bnQpICogMTAwKS50b0ZpeGVkKDEpIDogJzAnXG5cbiAgLy8gQWdydXBhY2nDs24gcG9yIERlcGFydGFtZW50b1xuICBjb25zdCBkcHRvU3RhdHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjb3VudHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuICAgIGZpbHRlcmVkUmVjb3Jkcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgY291bnRzW2YuZHB0b19jbm1icl0gPSAoY291bnRzW2YuZHB0b19jbm1icl0gfHwgMCkgKyAxXG4gICAgfSlcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY291bnRzKVxuICAgICAgLm1hcCgoW25hbWUsIGNvdW50XSkgPT4gKHsgbmFtZSwgY291bnQsIHBjdDogdG90YWxDb3VudCA+IDAgPyAoKGNvdW50IC8gdG90YWxDb3VudCkgKiAxMDApLnRvRml4ZWQoMSkgOiAnMCcgfSkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5jb3VudCAtIGEuY291bnQpXG4gIH0sIFtmaWx0ZXJlZFJlY29yZHMsIHRvdGFsQ291bnRdKVxuXG4gIC8vIEFncnVwYWNpw7NuIHBvciBNdW5pY2lwaW8gKFRvcCAxMilcbiAgY29uc3QgbXBpb1N0YXRzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCB7IHRvdGFsOiBudW1iZXI7IGRlc3Ryb3llZDogbnVtYmVyOyBkYW1hZ2VkOiBudW1iZXI7IHBvc3NpYmxlOiBudW1iZXIgfT4gPSB7fVxuICAgIGZpbHRlcmVkUmVjb3Jkcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgaWYgKCFncm91cHNbZi5tcGlvX2NubWJyXSkge1xuICAgICAgICBncm91cHNbZi5tcGlvX2NubWJyXSA9IHsgdG90YWw6IDAsIGRlc3Ryb3llZDogMCwgZGFtYWdlZDogMCwgcG9zc2libGU6IDAgfVxuICAgICAgfVxuICAgICAgZ3JvdXBzW2YubXBpb19jbm1icl0udG90YWwgKz0gMVxuICAgICAgaWYgKGYuZGFtYWdlX2dyYSA9PT0gJ0Rlc3Ryb3llZCcpIGdyb3Vwc1tmLm1waW9fY25tYnJdLmRlc3Ryb3llZCArPSAxXG4gICAgICBlbHNlIGlmIChmLmRhbWFnZV9ncmEgPT09ICdEYW1hZ2VkJykgZ3JvdXBzW2YubXBpb19jbm1icl0uZGFtYWdlZCArPSAxXG4gICAgICBlbHNlIGdyb3Vwc1tmLm1waW9fY25tYnJdLnBvc3NpYmxlICs9IDFcbiAgICB9KVxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhncm91cHMpXG4gICAgICAubWFwKChbbmFtZSwgZGF0YV0pID0+ICh7IG5hbWUsIC4uLmRhdGEsIHBjdDogdG90YWxDb3VudCA+IDAgPyAoKGRhdGEudG90YWwgLyB0b3RhbENvdW50KSAqIDEwMCkudG9GaXhlZCgxKSA6ICcwJyB9KSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnRvdGFsIC0gYS50b3RhbClcbiAgfSwgW2ZpbHRlcmVkUmVjb3JkcywgdG90YWxDb3VudF0pXG5cbiAgLy8gQWdydXBhY2nDs24gcG9yIFRpcG9sb2fDrWFcbiAgY29uc3QgdHlwZVN0YXRzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgY291bnRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge31cbiAgICBmaWx0ZXJlZFJlY29yZHMuZm9yRWFjaChmID0+IHtcbiAgICAgIGxldCB0ID0gZi50eXBlIHx8ICdSZXNpZGVuY2lhbCdcbiAgICAgIGlmICh0ID09PSAnICcgfHwgdCA9PT0gJ05vIGlkZW50aWZpY2FkbycgfHwgdCA9PT0gJ290cm8nKSB0ID0gJ1Jlc2lkZW5jaWFsIC8gTWl4dG8nXG4gICAgICBjb3VudHNbdF0gPSAoY291bnRzW3RdIHx8IDApICsgMVxuICAgIH0pXG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNvdW50cylcbiAgICAgIC5tYXAoKFtuYW1lLCBjb3VudF0pID0+ICh7IG5hbWUsIGNvdW50LCBwY3Q6IHRvdGFsQ291bnQgPiAwID8gKChjb3VudCAvIHRvdGFsQ291bnQpICogMTAwKS50b0ZpeGVkKDEpIDogJzAnIH0pKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KVxuICAgICAgLnNsaWNlKDAsIDgpXG4gIH0sIFtmaWx0ZXJlZFJlY29yZHMsIHRvdGFsQ291bnRdKVxuXG4gIGNvbnN0IHJlc2V0RmlsdGVycyA9ICgpID0+IHtcbiAgICBzZXRTZWxlY3RlZERwdG8oJ1RPRE9TJylcbiAgICBzZXRTZWxlY3RlZE1waW8oJ1RPRE9TJylcbiAgICBzZXRTZWxlY3RlZERhbWFnZSgnVE9ET1MnKVxuICB9XG5cbiAgLy8gR2VuZXJhZG9yIGRlIERvbnV0IFNWR1xuICBjb25zdCByZW5kZXJEb251dENoYXJ0ID0gKCkgPT4ge1xuICAgIGlmIChkcHRvU3RhdHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuICAgIGxldCBjdW11bGF0aXZlQW5nbGUgPSAwXG4gICAgY29uc3Qgc2l6ZSA9IDEyMFxuICAgIGNvbnN0IGNlbnRlciA9IHNpemUgLyAyXG4gICAgY29uc3QgcmFkaXVzID0gNDZcbiAgICBjb25zdCBzdHJva2VXaWR0aCA9IDE4XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHN2ZyB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSB2aWV3Qm94PXtgMCAwICR7c2l6ZX0gJHtzaXplfWB9PlxuICAgICAgICB7ZHB0b1N0YXRzLm1hcCgoZCwgaWR4KSA9PiB7XG4gICAgICAgICAgY29uc3QgZnJhY3Rpb24gPSB0b3RhbENvdW50ID4gMCA/IGQuY291bnQgLyB0b3RhbENvdW50IDogMFxuICAgICAgICAgIGNvbnN0IHN0cm9rZURhc2hhcnJheSA9IGAke2ZyYWN0aW9uICogMiAqIE1hdGguUEkgKiByYWRpdXN9ICR7MiAqIE1hdGguUEkgKiByYWRpdXN9YFxuICAgICAgICAgIGNvbnN0IHN0cm9rZURhc2hvZmZzZXQgPSAtY3VtdWxhdGl2ZUFuZ2xlICogMiAqIE1hdGguUEkgKiByYWRpdXNcbiAgICAgICAgICBjdW11bGF0aXZlQW5nbGUgKz0gZnJhY3Rpb25cbiAgICAgICAgICBjb25zdCBjb2xvciA9IERQVE9fQ09MT1JTW2lkeCAlIERQVE9fQ09MT1JTLmxlbmd0aF1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgIGtleT17ZC5uYW1lfVxuICAgICAgICAgICAgICBjeD17Y2VudGVyfVxuICAgICAgICAgICAgICBjeT17Y2VudGVyfVxuICAgICAgICAgICAgICByPXtyYWRpdXN9XG4gICAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgIHN0cm9rZT17Y29sb3J9XG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtzdHJva2VXaWR0aH1cbiAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PXtzdHJva2VEYXNoYXJyYXl9XG4gICAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ9e3N0cm9rZURhc2hvZmZzZXR9XG4gICAgICAgICAgICAgIHRyYW5zZm9ybT17YHJvdGF0ZSgtOTAgJHtjZW50ZXJ9ICR7Y2VudGVyfSlgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgICA8dGV4dCB4PXtjZW50ZXJ9IHk9e2NlbnRlciAtIDN9IHRleHRBbmNob3I9XCJtaWRkbGVcIiBmb250U2l6ZT1cIjEyXCIgZm9udFdlaWdodD1cIjgwMFwiIGZpbGw9XCIjMGYxNzJhXCIgZm9udEZhbWlseT1cIidKZXRCcmFpbnMgTW9ubycsIG1vbm9zcGFjZVwiPlxuICAgICAgICAgIHt0b3RhbENvdW50fVxuICAgICAgICA8L3RleHQ+XG4gICAgICAgIDx0ZXh0IHg9e2NlbnRlcn0geT17Y2VudGVyICsgMTF9IHRleHRBbmNob3I9XCJtaWRkbGVcIiBmb250U2l6ZT1cIjdcIiBmb250V2VpZ2h0PVwiNjAwXCIgZmlsbD1cIiM2NDc0OGJcIj5cbiAgICAgICAgICBUT1RBTFxuICAgICAgICA8L3RleHQ+XG4gICAgICA8L3N2Zz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtlc3RpbG9EYXNoYm9hcmR9IGNsYXNzTmFtZT1cImppbXUtd2lkZ2V0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2gtY29udGFpbmVyXCI+XG5cbiAgICAgICAgey8qIOKUgOKUgCBFbmNhYmV6YWRvIEluc3RpdHVjaW9uYWwg4pSA4pSAICovfVxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImRhc2gtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLWJyYW5kXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZXFjaG9jby5nZXN0aW9uZGVscmllc2dvLmdvdi5jby9wb3J0YWwvc2hhcmluZy9yZXN0L2NvbnRlbnQvaXRlbXMvOTBhZjk2YzRlYzFjNDZlOWI0N2E2OTE1NDgzNjU3NjMvZGF0YVwiXG4gICAgICAgICAgICAgIGFsdD1cIkxvZ28gVU5HUkRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXNoLWxvZ28taW1nXCJcbiAgICAgICAgICAgICAgb25FcnJvcj17ZSA9PiB7IChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9ICdub25lJyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC10aXRsZS13cmFwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC1waWxsXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGFzaC1waWxsLWRvdFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+VU5HUkQg4oCiIENIT0PDkyBTw41TTUlDTzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkYXNoLWhlYWRpbmdcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLWhlYWRlci1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1kYXNoLWljb25cIiBvbkNsaWNrPXtsb2FkRGF0YX0gdGl0bGU9XCJSZWNhcmdhciBkYXRvc1wiPlxuICAgICAgICAgICAgICA8THVjaWRlLlJlZnJlc2hDdyAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIHsvKiDilIDilIAgQmFycmEgZGUgRmlsdHJvcyBlbiBUaWVtcG8gUmVhbCDilIDilIAgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC1maWx0ZXItYmFyXCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLXNlbGVjdFwiXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWREcHRvfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZERwdG8oZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkTXBpbygnVE9ET1MnKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVE9ET1NcIj7wn5ONIERlcHRvOiBUb2Rvczwvb3B0aW9uPlxuICAgICAgICAgICAge2RwdG9MaXN0Lm1hcChkID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2R9IHZhbHVlPXtkfT57ZH08L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLXNlbGVjdFwiXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRNcGlvfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2VsZWN0ZWRNcGlvKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVE9ET1NcIj7wn4+Z77iPIE1waW86IFRvZG9zPC9vcHRpb24+XG4gICAgICAgICAgICB7bXBpb0xpc3QubWFwKG0gPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17bX0gdmFsdWU9e219PnttfTwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItc2VsZWN0XCJcbiAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZERhbWFnZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlbGVjdGVkRGFtYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVE9ET1NcIj7imqDvuI8gRGHDsW86IFRvZG9zPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGVzdHJveWVkXCI+8J+UtCBEZXN0cnVpZGFzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGFtYWdlZFwiPvCfn6AgRGHDsW8gU2V2ZXJvPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUG9zc2libHkgZGFtYWdlZFwiPvCfn6EgUG9zaWJsZSBEYcOxbzwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgeyhzZWxlY3RlZERwdG8gIT09ICdUT0RPUycgfHwgc2VsZWN0ZWRNcGlvICE9PSAnVE9ET1MnIHx8IHNlbGVjdGVkRGFtYWdlICE9PSAnVE9ET1MnKSAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1yZXNldC1maWx0ZXJzXCIgb25DbGljaz17cmVzZXRGaWx0ZXJzfSB0aXRsZT1cIkxpbXBpYXIgdG9kb3MgbG9zIGZpbHRyb3NcIj5cbiAgICAgICAgICAgICAgPEx1Y2lkZS5Sb3RhdGVDY3cgLz5cbiAgICAgICAgICAgICAgPHNwYW4+TGltcGlhcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDilIDilIAgS1BJcyBDYXJkcyBSZXN1bWVuIOKUgOKUgCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrcGktZ3JpZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3BpLWNhcmQga3BpLXRvdGFsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJrcGktdGl0bGVcIj5FdmFsdWFkYXM8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtwaS12YWx1ZS1yb3dcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3BpLW51bWJlclwiPnt0b3RhbENvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcwLjZyZW0nLCBjb2xvcjogJyM2NDc0OGInIH19PjEwMCU8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3BpLWNhcmQga3BpLWRlc3Ryb3llZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3BpLXRpdGxlXCIgc3R5bGU9e3sgY29sb3I6ICcjYjkxYzFjJyB9fT5EZXN0cnVpZGFzPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrcGktdmFsdWUtcm93XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImtwaS1udW1iZXJcIiBzdHlsZT17eyBjb2xvcjogJyNlZjQ0NDQnIH19PntkZXN0cm95ZWRDb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImtwaS1wZXJjZW50IHBlcmNlbnQtZGVzdHJveWVkXCI+e2Rlc3Ryb3llZFBjdH0lPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtwaS1jYXJkIGtwaS1kYW1hZ2VkXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJrcGktdGl0bGVcIiBzdHlsZT17eyBjb2xvcjogJyNjMjQxMGMnIH19PkRhw7FhZGFzPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrcGktdmFsdWUtcm93XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImtwaS1udW1iZXJcIiBzdHlsZT17eyBjb2xvcjogJyNmOTczMTYnIH19PntkYW1hZ2VkQ291bnR9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJrcGktcGVyY2VudCBwZXJjZW50LWRhbWFnZWRcIj57ZGFtYWdlZFBjdH0lPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtwaS1jYXJkIGtwaS1wb3NzaWJsZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3BpLXRpdGxlXCIgc3R5bGU9e3sgY29sb3I6ICcjYTE2MjA3JyB9fT5Qb3NpYmxlIERhw7FvPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrcGktdmFsdWUtcm93XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImtwaS1udW1iZXJcIiBzdHlsZT17eyBjb2xvcjogJyNlYWIzMDgnIH19Pntwb3NzaWJsZUNvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3BpLXBlcmNlbnQgcGVyY2VudC1wb3NzaWJsZVwiPntwb3NzaWJsZVBjdH0lPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDilIDilIAgUGVzdGHDsWFzIGRlIERpYWdyYW1hcyDilIDilIAgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhZ3JhbS10YWJzLWJhclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGRpYWdyYW0tdGFiLWJ0biAke2FjdGl2ZVRhYiA9PT0gJ2RhbWFnZScgPyAndGFiLWFjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdkYW1hZ2UnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8THVjaWRlLkJhckNoYXJ0MiAvPlxuICAgICAgICAgICAgPHNwYW4+U2V2ZXJpZGFkIGRlbCBEYcOxbzwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGRpYWdyYW0tdGFiLWJ0biAke2FjdGl2ZVRhYiA9PT0gJ2RwdG8nID8gJ3RhYi1hY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignZHB0bycpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMdWNpZGUuUGllQ2hhcnQgLz5cbiAgICAgICAgICAgIDxzcGFuPlBvciBEZXBhcnRhbWVudG88L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BkaWFncmFtLXRhYi1idG4gJHthY3RpdmVUYWIgPT09ICdtcGlvJyA/ICd0YWItYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ21waW8nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8THVjaWRlLk1hcFBpbiAvPlxuICAgICAgICAgICAgPHNwYW4+UmFua2luZyBNdW5pY2lwaW9zPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZGlhZ3JhbS10YWItYnRuICR7YWN0aXZlVGFiID09PSAndHlwZScgPyAndGFiLWFjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCd0eXBlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEx1Y2lkZS5CdWlsZGluZyAvPlxuICAgICAgICAgICAgPHNwYW4+VGlwb2xvZ8OtYSAvIFVzbzwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIOKUgOKUgCDDgXJlYSBkZSBEaWFncmFtYXMg4pSA4pSAICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2gtY29udGVudC1hcmVhXCI+XG5cbiAgICAgICAgICB7Lyog8J+TiiBQRVNUQcORQSAxOiBTRVZFUklEQUQgREVMIERBw5FPICovfVxuICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdkYW1hZ2UnICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQtc2VjdGlvbi1jYXJkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQtY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPkRpc3RyaWJ1Y2nDs24gcG9yIFNldmVyaWRhZCBkZWwgRGHDsW88L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcwLjY1cmVtJywgY29sb3I6ICcjNjQ3NDhiJyB9fT57dG90YWxDb3VudH0gZWRpZmljYWNpb25lczwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIEJhcnJhIERlc3RydWlkYXMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLWl0ZW0tcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItaW5mby1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhci1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXItdGFnLWRvdFwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IERBTUFHRV9DT0xPUlNbJ0Rlc3Ryb3llZCddIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIERlc3RydWlkYXMgKENvbGFwc28gVG90YWwgLyBJbmhhYml0YWJsZSlcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhci12YWx1ZVwiPntkZXN0cm95ZWRDb3VudH0gKHtkZXN0cm95ZWRQY3R9JSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItdHJhY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLWZpbGxcIiBzdHlsZT17eyB3aWR0aDogYCR7ZGVzdHJveWVkUGN0fSVgLCBiYWNrZ3JvdW5kOiBEQU1BR0VfQ09MT1JTWydEZXN0cm95ZWQnXSB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogQmFycmEgRGHDsWFkYXMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLWl0ZW0tcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItaW5mby1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhci1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXItdGFnLWRvdFwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IERBTUFHRV9DT0xPUlNbJ0RhbWFnZWQnXSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICBEYcOxYWRhcyAoQWZlY3RhY2nDs24gRXN0cnVjdHVyYWwgU2V2ZXJhKVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyLXZhbHVlXCI+e2RhbWFnZWRDb3VudH0gKHtkYW1hZ2VkUGN0fSUpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLXRyYWNrXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci1maWxsXCIgc3R5bGU9e3sgd2lkdGg6IGAke2RhbWFnZWRQY3R9JWAsIGJhY2tncm91bmQ6IERBTUFHRV9DT0xPUlNbJ0RhbWFnZWQnXSB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogQmFycmEgUG9zaWJsZSBEYcOxbyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItaXRlbS1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci1pbmZvLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhci10YWctZG90XCIgc3R5bGU9e3sgYmFja2dyb3VuZDogREFNQUdFX0NPTE9SU1snUG9zc2libHkgZGFtYWdlZCddIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIFBvc2libGUgRGHDsW8gKEZpc3VyYXMgLyBEYcOxbyBObyBFc3RydWN0dXJhbClcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhci12YWx1ZVwiPntwb3NzaWJsZUNvdW50fSAoe3Bvc3NpYmxlUGN0fSUpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLXRyYWNrXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci1maWxsXCIgc3R5bGU9e3sgd2lkdGg6IGAke3Bvc3NpYmxlUGN0fSVgLCBiYWNrZ3JvdW5kOiBEQU1BR0VfQ09MT1JTWydQb3NzaWJseSBkYW1hZ2VkJ10gfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIPCfjakgUEVTVEHDkUEgMjogUE9SIERFUEFSVEFNRU5UTyAqL31cbiAgICAgICAgICB7YWN0aXZlVGFiID09PSAnZHB0bycgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC1zZWN0aW9uLWNhcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC1jYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+QWZlY3RhY2nDs24gcG9yIERlcGFydGFtZW50bzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzAuNjVyZW0nLCBjb2xvcjogJyM2NDc0OGInIH19PntkcHRvU3RhdHMubGVuZ3RofSBEZXBhcnRhbWVudG9zPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbnV0LWNoYXJ0LWJveFwiPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJEb251dENoYXJ0KCl9XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbnV0LWxlZ2VuZFwiPlxuICAgICAgICAgICAgICAgICAge2RwdG9TdGF0cy5tYXAoKGQsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZC5uYW1lfSBjbGFzc05hbWU9XCJsZWdlbmQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogJzVweCcsIGZvbnRXZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhci10YWctZG90XCIgc3R5bGU9e3sgYmFja2dyb3VuZDogRFBUT19DT0xPUlNbaWR4ICUgRFBUT19DT0xPUlMubGVuZ3RoXSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyLXZhbHVlXCI+e2QuY291bnR9ICh7ZC5wY3R9JSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiDwn5OIIFBFU1RBw5FBIDM6IFJBTktJTkcgREUgTVVOSUNJUElPUyAqL31cbiAgICAgICAgICB7YWN0aXZlVGFiID09PSAnbXBpbycgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC1zZWN0aW9uLWNhcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC1jYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+VG9wIE11bmljaXBpb3MgY29uIE1heW9yIE7Dum1lcm8gZGUgRWRpZmljYWNpb25lczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzAuNjVyZW0nLCBjb2xvcjogJyM2NDc0OGInIH19PkRlc2dsb3NlIHBvciBzZXZlcmlkYWQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAnMC42cmVtJyB9fT5cbiAgICAgICAgICAgICAgICB7bXBpb1N0YXRzLm1hcChtID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1heE1waW8gPSBtcGlvU3RhdHNbMF0/LnRvdGFsIHx8IDFcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsUGN0T2ZNYXggPSAobS50b3RhbCAvIG1heE1waW8pICogMTAwXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZXN0U2VnUGN0ID0gbS50b3RhbCA+IDAgPyAobS5kZXN0cm95ZWQgLyBtLnRvdGFsKSAqIDEwMCA6IDBcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhbVNlZ1BjdCA9IG0udG90YWwgPiAwID8gKG0uZGFtYWdlZCAvIG0udG90YWwpICogMTAwIDogMFxuICAgICAgICAgICAgICAgICAgY29uc3QgcG9zU2VnUGN0ID0gbS50b3RhbCA+IDAgPyAobS5wb3NzaWJsZSAvIG0udG90YWwpICogMTAwIDogMFxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bS5uYW1lfSBjbGFzc05hbWU9XCJiYXItaXRlbS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci1pbmZvLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyLWxhYmVsXCI+e20ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXItdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge20udG90YWx9IDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMC42cmVtJywgY29sb3I6ICcjNjQ3NDhiJyB9fT4oe20ucGN0fSUpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLXRyYWNrXCIgc3R5bGU9e3sgaGVpZ2h0OiAnOXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGAke3RvdGFsUGN0T2ZNYXh9JWAsIGhlaWdodDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGJvcmRlclJhZGl1czogJzRweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogYCR7ZGVzdFNlZ1BjdH0lYCwgYmFja2dyb3VuZDogREFNQUdFX0NPTE9SU1snRGVzdHJveWVkJ10gfX0gdGl0bGU9e2BEZXN0cnVpZGFzOiAke20uZGVzdHJveWVkfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGAke2RhbVNlZ1BjdH0lYCwgYmFja2dyb3VuZDogREFNQUdFX0NPTE9SU1snRGFtYWdlZCddIH19IHRpdGxlPXtgRGHDsWFkYXM6ICR7bS5kYW1hZ2VkfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGAke3Bvc1NlZ1BjdH0lYCwgYmFja2dyb3VuZDogREFNQUdFX0NPTE9SU1snUG9zc2libHkgZGFtYWdlZCddIH19IHRpdGxlPXtgUG9zaWJsZSBkYcOxbzogJHttLnBvc3NpYmxlfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiDwn4+b77iPIFBFU1RBw5FBIDQ6IFRJUE9MT0fDjUEgREUgRURJRklDQUNJT05FUyAqL31cbiAgICAgICAgICB7YWN0aXZlVGFiID09PSAndHlwZScgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC1zZWN0aW9uLWNhcmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC1jYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+Q2xhc2lmaWNhY2nDs24gcG9yIFVzbyBkZSBsYSBFZGlmaWNhY2nDs248L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcwLjY1cmVtJywgY29sb3I6ICcjNjQ3NDhiJyB9fT5UaXBvbG9nw61hcyBjbGF2ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6ICcwLjU1cmVtJyB9fT5cbiAgICAgICAgICAgICAgICB7dHlwZVN0YXRzLm1hcCgodCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dC5uYW1lfSBjbGFzc05hbWU9XCJiYXItaXRlbS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXItaW5mby1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXItbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhci10YWctZG90XCIgc3R5bGU9e3sgYmFja2dyb3VuZDogRFBUT19DT0xPUlNbaWR4ICUgRFBUT19DT0xPUlMubGVuZ3RoXSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyLXZhbHVlXCI+e3QuY291bnR9ICh7dC5wY3R9JSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhci10cmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyLWZpbGxcIiBzdHlsZT17eyB3aWR0aDogYCR7dC5wY3R9JWAsIGJhY2tncm91bmQ6IERQVE9fQ09MT1JTW2lkeCAlIERQVE9fQ09MT1JTLmxlbmd0aF0gfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDilIDilIAgRm9vdGVyIOKUgOKUgCAqL31cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJkYXNoLWZvb3RlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3Ryb25nPkZ1ZW50ZTo8L3N0cm9uZz4gVmVyaWZpY2FjacOzbiBVTkdSRCAvIElOR1Yg4oCiIDxzdHJvbmc+Q2FwYTo8L3N0cm9uZz4gSW52ZW50YXJpbyBDb25zb2xpZGFkb1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3Ryb25nPlRvdGFsIEZpbHRyYWRvOjwvc3Ryb25nPiB7dG90YWxDb3VudH0gLyB7ZmVhdHVyZXMubGVuZ3RofVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9