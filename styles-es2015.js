(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
// Module
exports.push([module.i, "\n@charset \"UTF-8\";\n/* You can add global styles to this file, and also import other style files */\n:host {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody {\n  margin: 0;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\np {\n  margin: 0;\n}\n.spacer {\n  flex: 1;\n}\n.toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50px;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar img {\n  margin: 0 16px;\n}\n.toolbar img:hover {\n  -webkit-filter: brightness(1.5);\n          filter: brightness(1.5);\n}\n.toolbar #twitter-logo {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar #twitter-logo:hover {\n  opacity: 0.8;\n}\n.content {\n  display: flex;\n  margin: 62px auto 35px;\n  padding: 24px 16px;\n  max-width: 1024px;\n  flex-direction: column;\n  align-items: center;\n}\nsvg.material-icons {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons:not(:last-child) {\n  margin-right: 8px;\n}\n.card svg.material-icons path {\n  fill: #888;\n}\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\na.card {\n  color: #444;\n}\n.card-container .card:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small {\n  width: 168px;\n  margin: 0 8px 15px;\n  padding: 10px 16px;\n}\n.card-container .card:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container .card:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container .card:not(.highlight-card):hover .material-icons path {\n  fill: #696767;\n}\n.card.highlight-card {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card span {\n  margin-left: 35px;\n}\nimg#rocket {\n  width: 80px;\n  position: absolute;\n  left: -40px;\n  top: -24px;\n}\nsvg#rocket-smoke {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na,\na:visited,\na:hover {\n  color: #444;\n  text-decoration: none;\n}\na:hover {\n  color: #444;\n}\n.terminal {\n  position: relative;\n  width: 100%;\n  border-radius: 6px;\n  padding-top: 45px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal::before {\n  content: \"•••\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal pre {\n  color: white;\n  padding: 0 1.7rem 1rem;\n  margin: 0;\n  white-space: normal;\n  line-height: 24px;\n  font-size: 13px;\n  text-align: justify;\n}\n.circle-link {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter a {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n}\n.github-star-badge:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge .material-icons {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n.hideMeAsOfNow {\n  display: none;\n}\n.reader {\n  max-width: 74%;\n  color: #444;\n  font-size: 18px;\n  line-height: 28px;\n  text-align: justify;\n}\n.reader .reading-mode {\n  padding: 10px 15px;\n  font-size: 16px;\n  line-height: 24px;\n}\n.intro {\n  margin: 25px 0px 30px;\n}\n.table-of-content {\n  width: 100%;\n}\n.brief {\n  margin: 15px 0px;\n}\n.brief .brief-h5 {\n  margin: 15px 0px 0px;\n}\n.brief .brief-para {\n  margin: 0px 0px 15px;\n}\n.brief .analysis {\n  margin: 25px 0px 15px;\n}\n.brief .analysis p {\n  margin: 10px 0px 10px;\n}\n/* Responsive Styles */\n@media screen and (max-width: 767px) {\n  .card-container > *:not(.circle-link),\n.terminal {\n    width: 100%;\n  }\n\n  .card:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card span {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n\n  .reader {\n    max-width: 100%;\n  }\n\n  .share p:first-child {\n    width: auto;\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke {\n    display: none;\n    visibility: hidden;\n  }\n}\n.person-name {\n  border: 2px solid #ccc;\n  padding: 5px 10px;\n  margin-left: 15px;\n  color: white;\n}\n@media (prefers-color-scheme: dark) {\n  body {\n    background: #161616;\n    color: #ccc;\n  }\n\n  svg#rocket-smoke path {\n    fill: #111;\n  }\n\n  .card {\n    border-color: #222;\n    background-color: #353535;\n    color: #ccc;\n  }\n\n  a.card {\n    color: #ccc;\n  }\n\n  .circle-link {\n    background-color: #353535;\n    border-color: #3b3b3b;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22), 0 1px 2px rgba(0, 0, 0, 0.24);\n  }\n  .circle-link:hover {\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.7);\n  }\n\n  .reader {\n    color: #ccc;\n  }\n\n  .share .share-icon-para {\n    background: #ccc;\n  }\n}", "",{"version":3,"sources":["styles.scss","/home/collegeout/Downloads/gihub/deepak-ranolia/src/styles.scss"],"names":[],"mappings":"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","file":"styles.scss","sourcesContent":["@charset \"UTF-8\";\n/* You can add global styles to this file, and also import other style files */\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap\");\n:host {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\n\np {\n  margin: 0;\n}\n\n.spacer {\n  flex: 1;\n}\n\n.toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 50px;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n\n.toolbar img {\n  margin: 0 16px;\n}\n.toolbar img:hover {\n  filter: brightness(1.5);\n}\n\n.toolbar #twitter-logo {\n  height: 40px;\n  margin: 0 16px;\n}\n\n.toolbar #twitter-logo:hover {\n  opacity: 0.8;\n}\n\n.content {\n  display: flex;\n  margin: 62px auto 35px;\n  padding: 24px 16px;\n  max-width: 1024px;\n  flex-direction: column;\n  align-items: center;\n}\n\nsvg.material-icons {\n  height: 24px;\n  width: auto;\n}\n\nsvg.material-icons:not(:last-child) {\n  margin-right: 8px;\n}\n\n.card svg.material-icons path {\n  fill: #888;\n}\n\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n\n.card {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n\na.card {\n  color: #444;\n}\n\n.card-container .card:not(:last-child) {\n  margin-right: 0;\n}\n\n.card.card-small {\n  width: 168px;\n  margin: 0 8px 15px;\n  padding: 10px 16px;\n}\n\n.card-container .card:not(.highlight-card) {\n  cursor: pointer;\n}\n\n.card-container .card:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n\n.card-container .card:not(.highlight-card):hover .material-icons path {\n  fill: #696767;\n}\n\n.card.highlight-card {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n\n.card.card.highlight-card span {\n  margin-left: 35px;\n}\n\nimg#rocket {\n  width: 80px;\n  position: absolute;\n  left: -40px;\n  top: -24px;\n}\n\nsvg#rocket-smoke {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\n\na,\na:visited,\na:hover {\n  color: #444;\n  text-decoration: none;\n}\n\na:hover {\n  color: #444;\n}\n\n.terminal {\n  position: relative;\n  width: 100%;\n  border-radius: 6px;\n  padding-top: 45px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n\n.terminal::before {\n  content: \"•••\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n\n.terminal pre {\n  color: white;\n  padding: 0 1.7rem 1rem;\n  margin: 0;\n  white-space: normal;\n  line-height: 24px;\n  font-size: 13px;\n  text-align: justify;\n}\n\n.circle-link {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n\n.circle-link:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n\nfooter {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\n\nfooter a {\n  display: flex;\n  align-items: center;\n}\n\n.github-star-badge {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n}\n\n.github-star-badge:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n\n.github-star-badge .material-icons {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\n\nsvg#clouds {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n.hideMeAsOfNow {\n  display: none;\n}\n\n.reader {\n  max-width: 74%;\n  color: #444;\n  font-size: 18px;\n  line-height: 28px;\n  text-align: justify;\n}\n.reader .reading-mode {\n  padding: 10px 15px;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.intro {\n  margin: 25px 0px 30px;\n}\n\n.table-of-content {\n  width: 100%;\n}\n\n.brief {\n  margin: 15px 0px;\n}\n.brief .brief-h5 {\n  margin: 15px 0px 0px;\n}\n.brief .brief-para {\n  margin: 0px 0px 15px;\n}\n.brief .analysis {\n  margin: 25px 0px 15px;\n}\n.brief .analysis p {\n  margin: 10px 0px 10px;\n}\n\n/* Responsive Styles */\n@media screen and (max-width: 767px) {\n  .card-container > *:not(.circle-link),\n.terminal {\n    width: 100%;\n  }\n\n  .card:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card span {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n\n  .reader {\n    max-width: 100%;\n  }\n\n  .share p:first-child {\n    width: auto;\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke {\n    display: none;\n    visibility: hidden;\n  }\n}\n.person-name {\n  border: 2px solid #ccc;\n  padding: 5px 10px;\n  margin-left: 15px;\n  color: white;\n}\n\n@media (prefers-color-scheme: dark) {\n  body {\n    background: #161616;\n    color: #ccc;\n  }\n\n  svg#rocket-smoke path {\n    fill: #111;\n  }\n\n  .card {\n    border-color: #222;\n    background-color: #353535;\n    color: #ccc;\n  }\n\n  a.card {\n    color: #ccc;\n  }\n\n  .circle-link {\n    background-color: #353535;\n    border-color: #3b3b3b;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22), 0 1px 2px rgba(0, 0, 0, 0.24);\n  }\n  .circle-link:hover {\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.7);\n  }\n\n  .reader {\n    color: #ccc;\n  }\n\n  .share .share-icon-para {\n    background: #ccc;\n  }\n}","/* You can add global styles to this file, and also import other style files */\n// @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');\n:host {\n    font-family: 'Open Sans', sans-serif;\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\nbody {\n    margin: 0;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 14px;\n}\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n    &:hover {\n      filter: brightness(1.5)\n    } \n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 62px auto 35px;\n    padding: 24px 16px;\n    // background: #f1f1f1;\n    max-width: 1024px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    // height: 40px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  a.card {\n    color: #444;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    // min-height: 16px;\n    width: 168px;\n    margin: 0 8px 15px;\n    padding: 10px 16px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 35px;\n  }\n\n  img#rocket {\n    width: 80px;\n    position: absolute;\n    left: -40px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #444;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #444;\n  }\n\n  .terminal {\n    position: relative;\n    width: 100%;\n    border-radius: 6px;\n    padding-top: 45px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    // font-family: 'Open Sans', sans-serif;\n    color: white;\n    padding: 0 1.7rem 1rem;\n    margin: 0;\n    white-space: normal;\n    line-height: 24px;\n    font-size: 13px;\n    text-align: justify;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    // font-family: 'Open Sans', sans-serif;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n  \n  \n.hideMeAsOfNow {\n  display: none;\n}\n// single blog scss \n.reader {\n\tmax-width: 74%;\n\tcolor: #444;\n\tfont-size: 18px;\n  line-height: 28px;\n  text-align: justify;\n\t& .reading-mode {\n\t  \tpadding: 10px 15px;\n\t  \tfont-size: 16px;\n\t  \tline-height: 24px;\n  \t}\n}\n  //.reading-mode {\n  //  padding: 10px 15px;\n  //  font-size: 16px;\n  //  line-height: 24px;\n  //}\n  .intro {\n  \tmargin: 25px 0px 30px;\n  }\n  .table-of-content{\n    width: 100%;\n  }\n  .brief {\n  \tmargin: 15px 0px;\n  \t& .brief-h5 {\n  \t\tmargin: 15px 0px 0px;\n  \t}\n  \t& .brief-para {\n  \t\tmargin: 0px 0px 15px;\n  \t}\n  \t& .analysis {\n  \t\tmargin: 25px 0px 15px;\n  \t\t& p {\n  \t\t\tmargin: 10px 0px 10px;\n  \t\t}\n  \t}\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n    .reader {\n\t    max-width: 100%;\n    }\n    .share {\n      & p:first-child {\n        width: auto;\n      }\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n\n  .person-name {\n    border: 2px solid #ccc;\n    padding: 5px 10px;\n    margin-left: 15px;\n    color: white;\n  }\n\n\n  @media (prefers-color-scheme: dark) {\n    body {\n      background: #161616;\n      color: #ccc;\n    }\n    svg#rocket-smoke {\n      & path {\n        fill: #111;\n      }\n    }\n    .card {\n      border-color: #222;\n      background-color: #353535;\n      color: #ccc;\n    }\n    a.card {\n      color: #ccc;\n    }\n    .circle-link {\n      background-color: #353535;\n      border-color: #3b3b3b;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22), 0 1px 2px rgba(0, 0, 0, 0.24);\n      &:hover{\n        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.7);\n      }\n    }\n    .reader {\n      color: #ccc;\n    }\n    .share {\n      // &:first-child {\n      //   width: auto;\n      // }\n      & .share-icon-para {\n        background: #ccc;\n        // width: 38px; \n      }\n    }\n    // .person-name {\n    //   border-color: 2px solid #555;\n    //   padding: 5px 10px;\n    //   margin-left: 15px;\n    //   color: #888;\n    // }\n  }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/collegeout/Downloads/gihub/deepak-ranolia/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map