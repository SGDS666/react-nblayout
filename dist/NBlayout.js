"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NBLayout = exports.row = exports.col = exports.Div = void 0;
var react_1 = __importDefault(require("react"));
require("./nb.css");
var Div = function (_a) {
    var style = _a.style, children = _a.children;
    return react_1.default.createElement("div", { className: "nb-div", style: style }, children !== null && children !== void 0 ? children : "div");
};
exports.Div = Div;
var col = function (arr, style, itemstyle) {
    return columnHandle(arr, style, itemstyle);
};
exports.col = col;
var row = function (arr, style, itemstyle) {
    return rowHandle(arr, style, itemstyle);
};
exports.row = row;
var rowHandle = function (row, style, itemstyle) {
    return (react_1.default.createElement("div", { className: "nb-row", style: style }, row.map(function (r, i) { return react_1.default.cloneElement(r, itemstyle ? { key: i, style: itemstyle } : { key: i }); })));
};
var columnHandle = function (column, style, itemstyle) {
    return (react_1.default.createElement("div", { className: "nb-col", style: style }, column.map(function (r, i) { return react_1.default.cloneElement(r, itemstyle ? { key: i, style: itemstyle } : { key: i }); })));
};
var NBLayout = function (NBarr, style, className) {
    return (react_1.default.createElement("div", { className: className !== null && className !== void 0 ? className : "nb-root", style: style }, NBarr.map(function (ele, i) { return react_1.default.cloneElement(ele, { key: i }); })));
};
exports.NBLayout = NBLayout;
